/**
 * Replays the local _oplog against the real D1 database over Cloudflare's
 * HTTP API. One statement per request, strictly in oplog order, deleted from
 * the log only after D1 confirms it.
 *
 * Failure policy:
 *  - Network errors, 429 and 5xx abort the run; the ops stay queued and the
 *    next sync cycle retries them (at-least-once — every statement the jobs
 *    produce is a COALESCE-style UPDATE or ON CONFLICT upsert, so a replay
 *    is harmless).
 *  - 401/403 means a bad token: abort loudly, nothing is lost.
 *  - Other 4xx (SQL rejected by D1) moves that single op to _oplog_dead and
 *    continues, so one poison statement can't wedge the queue forever.
 */
import type { SqliteD1 } from "./sqlite-d1";

export interface D1RemoteConfig {
  accountId: string;
  databaseId: string;
  apiToken: string;
  /** Log ops instead of sending them. */
  dryRun?: boolean;
}

export interface SyncResult {
  replayed: number;
  dead: number;
  pending: number;
  error: string | null;
}

interface OplogRow {
  id: number;
  sql: string;
  params: string;
  created_at: string;
}

export class D1Remote {
  private readonly endpoint: string;

  constructor(private readonly cfg: D1RemoteConfig) {
    this.endpoint =
      `https://api.cloudflare.com/client/v4/accounts/${cfg.accountId}` +
      `/d1/database/${cfg.databaseId}/query`;
  }

  /** Throws TransientError / DeadError / AuthError on failure. */
  async query(sql: string, params: unknown[]): Promise<void> {
    if (this.cfg.dryRun) {
      console.log(`[sync dry-run] ${sql.replace(/\s+/g, " ").slice(0, 120)}`, params);
      return;
    }
    let res: Response;
    try {
      res = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          authorization: `Bearer ${this.cfg.apiToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ sql, params }),
      });
    } catch (err) {
      throw new TransientError(`network: ${(err as Error).message}`);
    }

    if (res.status === 401 || res.status === 403) {
      throw new AuthError(`D1 API auth failed (HTTP ${res.status})`);
    }
    if (res.status === 429 || res.status >= 500) {
      throw new TransientError(`HTTP ${res.status}`);
    }

    let body: { success?: boolean; errors?: Array<{ code?: number; message?: string }> };
    try {
      body = (await res.json()) as typeof body;
    } catch {
      throw new TransientError(`unparseable response (HTTP ${res.status})`);
    }
    if (!res.ok || body.success === false) {
      const msg = body.errors?.map((e) => `${e.code}: ${e.message}`).join("; ") || `HTTP ${res.status}`;
      throw new DeadError(msg);
    }
  }
}

export class TransientError extends Error {}
export class DeadError extends Error {}
export class AuthError extends Error {}

const BATCH = 200;
const INTER_REQUEST_MS = 25;

export async function syncOplog(
  local: SqliteD1,
  remote: D1Remote,
  opts: { maxOps?: number } = {}
): Promise<SyncResult> {
  const maxOps = opts.maxOps ?? 5000;
  let replayed = 0;
  let dead = 0;
  let error: string | null = null;

  outer: while (replayed + dead < maxOps) {
    const rows = local.db
      .prepare("SELECT id, sql, params, created_at FROM _oplog ORDER BY id LIMIT ?")
      .all(BATCH) as unknown as OplogRow[];
    if (rows.length === 0) break;

    for (const row of rows) {
      let params: unknown[] = [];
      try {
        params = JSON.parse(row.params) as unknown[];
      } catch {
        /* unreadable params — treat as dead below via DeadError */
      }
      try {
        await remote.query(row.sql, params);
        local.db.prepare("DELETE FROM _oplog WHERE id = ?").run(row.id);
        replayed++;
      } catch (err) {
        if (err instanceof DeadError) {
          local.db
            .prepare(
              `INSERT OR REPLACE INTO _oplog_dead (id, sql, params, error, created_at)
               VALUES (?, ?, ?, ?, ?)`
            )
            .run(row.id, row.sql, row.params, err.message, row.created_at);
          local.db.prepare("DELETE FROM _oplog WHERE id = ?").run(row.id);
          dead++;
          console.error(`[sync] op ${row.id} rejected by D1, moved to _oplog_dead: ${err.message}`);
          continue;
        }
        error = (err as Error).message;
        console.error(`[sync] aborted, will retry next cycle: ${error}`);
        break outer;
      }
      await sleep(INTER_REQUEST_MS);
    }
  }

  const pendingRow = local.db
    .prepare("SELECT COUNT(*) AS n FROM _oplog")
    .get() as { n: number };

  local.db
    .prepare(
      `UPDATE _sync_state SET
         last_sync_at = datetime('now'),
         last_batch   = ?,
         total_synced = total_synced + ?,
         last_error   = ?
       WHERE id = 1`
    )
    .run(replayed, replayed, error);

  return { replayed, dead, pending: pendingRow.n, error };
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
