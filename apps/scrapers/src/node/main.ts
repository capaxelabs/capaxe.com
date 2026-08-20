/**
 * Container entry point — replaces the Worker cron triggers.
 *
 * Runs the same enrich + judge.me jobs as the Worker, but against a local
 * SQLite file (seeded from D1 via scripts/seed-from-d1.sh), and pushes the
 * resulting writes to the real D1 in batches via the Cloudflare HTTP API.
 *
 * Three independent loops:
 *   enrich   — drain the unprocessed queue; when empty, check again later
 *   judgeme  — one crawl tick per interval, cursor lives in judgeme_progress
 *   sync     — replay _oplog to D1 every interval, and once more on shutdown
 *
 * Plus a tiny health server: GET /stats on PORT (default 8787).
 */
import fs from "node:fs";
import http from "node:http";
import { SqliteD1 } from "./sqlite-d1";
import { AuthError, D1Remote, syncOplog, type SyncResult } from "./d1-remote";
import { enrichBatch } from "../enrich";
import { judgemeTick } from "../judgeme";
import type { Env } from "../index";

const cfg = {
  dbPath: process.env.DB_PATH ?? "./data/scraper.db",
  port: envInt("PORT", 8787),

  enrichEnabled: envBool("ENRICH_ENABLED", true),
  enrichBatchSize: envInt("ENRICH_BATCH", 50),
  enrichPauseMs: envInt("ENRICH_PAUSE_MS", 5_000),
  enrichIdleMs: envInt("ENRICH_IDLE_MS", 10 * 60_000),

  judgemeEnabled: envBool("JUDGEME_ENABLED", true),
  judgemeIntervalMs: envInt("JUDGEME_INTERVAL_MS", 5 * 60_000),
  judgemeLimit: envInt("JUDGEME_LIMIT", 10),

  syncEnabled: envBool("SYNC_ENABLED", true),
  syncIntervalMs: envInt("SYNC_INTERVAL_MS", 5 * 60_000),
  syncDryRun: envBool("SYNC_DRY_RUN", false),

  cfAccountId: process.env.CF_ACCOUNT_ID ?? "",
  cfDatabaseId: process.env.CF_D1_DATABASE_ID ?? "",
  cfApiToken: process.env.CF_API_TOKEN ?? "",
};

if (!fs.existsSync(cfg.dbPath)) {
  console.error(
    `No database at ${cfg.dbPath}.\n` +
      `Seed it from the live D1 first:  ./scripts/seed-from-d1.sh\n` +
      `(or mount an existing scraper.db into the container).`
  );
  process.exit(1);
}

const local = new SqliteD1(cfg.dbPath);
const env: Env = { LEADS_DB: local as unknown as D1Database };

let remote: D1Remote | null = null;
if (cfg.syncEnabled) {
  if (cfg.cfAccountId && cfg.cfDatabaseId && (cfg.cfApiToken || cfg.syncDryRun)) {
    remote = new D1Remote({
      accountId: cfg.cfAccountId,
      databaseId: cfg.cfDatabaseId,
      apiToken: cfg.cfApiToken,
      dryRun: cfg.syncDryRun,
    });
  } else {
    console.warn(
      "[sync] disabled: CF_ACCOUNT_ID / CF_D1_DATABASE_ID / CF_API_TOKEN not set. " +
        "Writes accumulate in _oplog until sync is configured."
    );
  }
}

let running = true;
let lastSync: SyncResult | null = null;
const startedAt = new Date().toISOString();

// --- loops --------------------------------------------------------------------

async function enrichLoop(): Promise<void> {
  while (running) {
    try {
      const r = await enrichBatch(env, { limit: cfg.enrichBatchSize });
      if (r.picked > 0) {
        console.log(
          `[enrich] picked=${r.picked} ok=${r.ok} transient=${r.transient} permanent=${r.permanent} in ${r.elapsed_ms}ms`
        );
        await sleep(cfg.enrichPauseMs);
      } else {
        await sleep(cfg.enrichIdleMs);
      }
    } catch (err) {
      console.error("[enrich] tick failed:", err);
      await sleep(60_000);
    }
  }
}

async function judgemeLoop(): Promise<void> {
  while (running) {
    try {
      const r = await judgemeTick(env, { limit: cfg.judgemeLimit });
      console.log(
        `[judgeme] country=${r.country} category=${r.category_id} page=${r.page} picked=${r.picked} inserted=${r.inserted}${r.paused ? " (paused)" : ""}`
      );
    } catch (err) {
      console.error("[judgeme] tick failed:", err);
    }
    await sleep(cfg.judgemeIntervalMs);
  }
}

async function syncLoop(): Promise<void> {
  if (!remote) return;
  while (running) {
    await sleep(cfg.syncIntervalMs);
    await runSync("interval");
  }
}

async function runSync(reason: string): Promise<void> {
  if (!remote) return;
  try {
    lastSync = await syncOplog(local, remote);
    if (lastSync.replayed > 0 || lastSync.dead > 0 || lastSync.error) {
      console.log(
        `[sync:${reason}] replayed=${lastSync.replayed} dead=${lastSync.dead} pending=${lastSync.pending}` +
          (lastSync.error ? ` error=${lastSync.error}` : "")
      );
    }
  } catch (err) {
    if (err instanceof AuthError) {
      console.error(`[sync] ${err.message} — check CF_API_TOKEN. Ops stay queued.`);
    } else {
      console.error("[sync] failed:", err);
    }
  }
}

// --- health server ------------------------------------------------------------

const server = http.createServer((req, res) => {
  if (req.url?.startsWith("/stats")) {
    try {
      const unprocessed = local.db
        .prepare("SELECT COUNT(*) AS n FROM parsed_stores WHERE processed_at IS NULL")
        .get() as { n: number };
      const oplog = local.db.prepare("SELECT COUNT(*) AS n FROM _oplog").get() as { n: number };
      const dead = local.db.prepare("SELECT COUNT(*) AS n FROM _oplog_dead").get() as { n: number };
      const syncState = local.db.prepare("SELECT * FROM _sync_state WHERE id = 1").get();
      const progress = local.db
        .prepare("SELECT country_index, category_index, page, updated_at FROM judgeme_progress WHERE id = 1")
        .get();
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify(
          {
            started_at: startedAt,
            enrich_queue: unprocessed.n,
            oplog_pending: oplog.n,
            oplog_dead: dead.n,
            sync: syncState,
            judgeme_progress: progress,
            last_sync: lastSync,
          },
          null,
          2
        )
      );
    } catch (err) {
      res.writeHead(500, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: (err as Error).message }));
    }
    return;
  }
  res.writeHead(404);
  res.end();
});

// --- lifecycle ----------------------------------------------------------------

async function shutdown(signal: string): Promise<void> {
  if (!running) return;
  running = false;
  console.log(`[main] ${signal} — draining oplog before exit…`);
  server.close();
  await runSync("shutdown");
  local.close();
  process.exit(0);
}

process.on("SIGINT", () => void shutdown("SIGINT"));
process.on("SIGTERM", () => void shutdown("SIGTERM"));

server.listen(cfg.port, () => {
  console.log(`[main] health server on :${cfg.port} (GET /stats)`);
});
console.log(
  `[main] db=${cfg.dbPath} enrich=${cfg.enrichEnabled} judgeme=${cfg.judgemeEnabled} ` +
    `sync=${remote ? (cfg.syncDryRun ? "dry-run" : "on") : "off"}`
);

const loops: Promise<void>[] = [];
if (cfg.enrichEnabled) loops.push(enrichLoop());
if (cfg.judgemeEnabled) loops.push(judgemeLoop());
loops.push(syncLoop());
void Promise.all(loops);

// --- helpers ------------------------------------------------------------------

function envInt(name: string, fallback: number): number {
  const v = Number(process.env[name]);
  return Number.isFinite(v) && v > 0 ? v : fallback;
}

function envBool(name: string, fallback: boolean): boolean {
  const v = process.env[name];
  if (v === undefined || v === "") return fallback;
  return v === "1" || v.toLowerCase() === "true";
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
