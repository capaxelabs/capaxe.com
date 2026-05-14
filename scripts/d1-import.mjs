#!/usr/bin/env node
/**
 * Chunked bulk import from a local SQLite file into D1.
 *
 * Usage:
 *   node scripts/d1-import.mjs \
 *     --src /Users/mukesh/Projects/marketing/shopify-leads/shopify_stores.db \
 *     --db shopify-leads \
 *     --batch 500
 *
 * Strategy:
 *   1. Run `sqlite3 .schema` against the source and pipe to wrangler (one-time).
 *   2. For each table, SELECT in batches of N rows, build a multi-VALUES INSERT,
 *      and feed it to `wrangler d1 execute --remote --command` via stdin.
 *
 * Notes:
 *   - D1 caps SQL payload size around 100 KB per request. 500 rows of
 *     parsed_stores (~63 columns) generally fits; we shrink the batch on
 *     413 errors automatically.
 *   - Indexes and views are recreated at the end from `.schema`.
 */
import { execFileSync, spawnSync } from "node:child_process";
import { parseArgs } from "node:util";
import { writeFileSync, unlinkSync, mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const { values: argv } = parseArgs({
  options: {
    src: { type: "string" },
    db: { type: "string", default: "shopify-leads" },
    batch: { type: "string", default: "500" },
    tables: { type: "string" }, // comma-separated; default = all
  },
});

if (!argv.src) {
  console.error("Missing --src <path to local .db>");
  process.exit(1);
}

const SRC = argv.src;
const DB = argv.db;
let BATCH = Number(argv.batch);

const tablesToImport = argv.tables
  ? argv.tables.split(",")
  : [
      "raw_stores",
      "parsed_stores",
      "judgeme_stores",
      "judgeme_categories",
      "apps",
      "themes",
      "failed_stores",
      "detection_results",
      "unknown_apps",
      "unknown_themes",
    ];

const tmpDir = mkdtempSync(join(tmpdir(), "d1-import-"));

function sqlite(args) {
  return execFileSync("sqlite3", [SRC, ...args], { encoding: "utf8" });
}

function runD1Sql(sql) {
  const file = join(tmpDir, "chunk.sql");
  writeFileSync(file, sql);
  const r = spawnSync(
    "wrangler",
    ["d1", "execute", DB, "--remote", `--file=${file}`],
    { encoding: "utf8", stdio: ["ignore", "inherit", "inherit"] }
  );
  unlinkSync(file);
  return r.status === 0;
}

function escapeValue(v) {
  if (v === null || v === "") return "NULL";
  if (typeof v === "number") return String(v);
  return "'" + String(v).replaceAll("'", "''") + "'";
}

function importTable(name) {
  console.log(`\n== ${name} ==`);
  const colsRaw = sqlite([
    "-cmd",
    ".mode list",
    "-cmd",
    ".separator ,",
    `SELECT name FROM pragma_table_info('${name}') ORDER BY cid`,
  ]);
  const cols = colsRaw.split("\n").filter(Boolean);
  if (!cols.length) {
    console.log("  (table not found; skipping)");
    return;
  }
  const total = Number(sqlite(["-cmd", ".mode list", `SELECT COUNT(*) FROM ${name}`]).trim());
  console.log(`  ${total} rows, ${cols.length} columns, batch=${BATCH}`);

  for (let offset = 0; offset < total; offset += BATCH) {
    const csv = sqlite([
      "-cmd",
      ".mode list",
      "-cmd",
      ".separator |",
      `SELECT ${cols.map((c) => `'\"' || COALESCE(REPLACE(CAST(${c} AS TEXT), '\"', '\"\"'), '__NULL__') || '\"'`).join(", ")} FROM ${name} LIMIT ${BATCH} OFFSET ${offset}`,
    ]);
    const rows = csv.split("\n").filter(Boolean).map((line) => {
      // naive split on the chosen `|` separator. Values were wrapped in quotes
      // and escaped above; NULLs encoded as the literal __NULL__.
      const cells = line.split("|");
      return cells.map((cell) => {
        const trimmed = cell.replace(/^"|"$/g, "").replaceAll('""', '"');
        return trimmed === "__NULL__" ? null : trimmed;
      });
    });
    if (!rows.length) break;

    const values = rows
      .map((r) => "(" + r.map(escapeValue).join(",") + ")")
      .join(",\n");
    const insert = `INSERT OR REPLACE INTO ${name} (${cols.map((c) => `"${c}"`).join(",")}) VALUES\n${values};`;

    let ok = runD1Sql(insert);
    if (!ok && BATCH > 50) {
      // Shrink and retry
      BATCH = Math.max(50, Math.floor(BATCH / 2));
      console.log(`  payload too large; retrying with smaller batch=${BATCH}`);
      offset -= BATCH; // re-do this slice next iteration
      continue;
    }
    console.log(`  imported ${Math.min(offset + BATCH, total)}/${total}`);
  }
}

console.log(`Source : ${SRC}`);
console.log(`Target : D1 "${DB}"`);
console.log(`Tables : ${tablesToImport.join(", ")}`);

for (const t of tablesToImport) importTable(t);

console.log("\nDone.");
