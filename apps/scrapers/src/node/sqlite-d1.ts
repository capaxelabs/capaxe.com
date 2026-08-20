/**
 * D1-compatible adapter over Bun's built-in SQLite, plus a write-ahead oplog.
 *
 * The scraper jobs (enrich.ts, judgeme.ts) only use the
 * prepare().bind().first()/.all()/.run() subset of the D1 API, so this class
 * lets them run unchanged against a local SQLite file.
 *
 * Every successful INSERT/UPDATE/DELETE is also recorded in _oplog
 * (statement + params), in the same transaction as the write itself.
 * d1-remote.ts replays that log against the real D1 over the HTTP API,
 * so the remote database receives exactly the mutations the local one did —
 * column-scoped and in order, never whole-row copies that could clobber
 * fields the web app owns (admin_status etc.).
 */
import { Database, type Statement } from "bun:sqlite";

const WRITE_RE = /^\s*(insert|update|delete|replace)\b/i;
const INTERNAL_RE = /_oplog|_sync_state/i;

type SqlParam = string | number | bigint | null;

function normalizeParams(params: unknown[]): SqlParam[] {
  return params.map((p) => {
    if (p === undefined || p === null) return null;
    if (typeof p === "boolean") return p ? 1 : 0;
    return p as SqlParam;
  });
}

const BOOTSTRAP = [
  `CREATE TABLE IF NOT EXISTS _oplog (
     id         INTEGER PRIMARY KEY AUTOINCREMENT,
     sql        TEXT NOT NULL,
     params     TEXT NOT NULL,
     created_at TEXT NOT NULL DEFAULT (datetime('now'))
   )`,
  `CREATE TABLE IF NOT EXISTS _oplog_dead (
     id         INTEGER PRIMARY KEY,
     sql        TEXT NOT NULL,
     params     TEXT NOT NULL,
     error      TEXT,
     created_at TEXT,
     failed_at  TEXT NOT NULL DEFAULT (datetime('now'))
   )`,
  `CREATE TABLE IF NOT EXISTS _sync_state (
     id            INTEGER PRIMARY KEY CHECK (id = 1),
     last_sync_at  TEXT,
     last_batch    INTEGER,
     total_synced  INTEGER NOT NULL DEFAULT 0,
     last_error    TEXT
   )`,
  `INSERT OR IGNORE INTO _sync_state (id) VALUES (1)`,
  // Local-only speedup for the enrich pick query; DDL is never oplogged.
  `CREATE INDEX IF NOT EXISTS idx_parsed_stores_unprocessed
     ON parsed_stores(website) WHERE processed_at IS NULL`,
];

export class SqliteD1 {
  readonly db: Database;
  private readonly logStmt: Statement;

  constructor(path: string) {
    this.db = new Database(path);
    this.db.run("PRAGMA journal_mode = WAL");
    this.db.run("PRAGMA busy_timeout = 5000");
    for (const stmt of BOOTSTRAP) this.db.run(stmt);
    this.logStmt = this.db.prepare(
      "INSERT INTO _oplog (sql, params) VALUES (?, ?)"
    );
  }

  prepare(sql: string): NodeD1Statement {
    return new NodeD1Statement(this, sql, []);
  }

  /** Runs a write and its oplog entry atomically. */
  runWrite(sql: string, params: SqlParam[]): { changes: number } {
    const stmt = this.db.prepare(sql);
    const shouldLog = WRITE_RE.test(sql) && !INTERNAL_RE.test(sql);
    const tx = this.db.transaction(() => {
      const info = stmt.run(...params);
      if (shouldLog) this.logStmt.run(sql, JSON.stringify(params));
      return info;
    });
    const info = tx() as { changes: number };
    return { changes: info?.changes ?? 0 };
  }

  close(): void {
    this.db.close();
  }
}

class NodeD1Statement implements D1PreparedStatement {
  constructor(
    private readonly owner: SqliteD1,
    private readonly sql: string,
    private readonly params: unknown[]
  ) {}

  bind(...values: unknown[]): NodeD1Statement {
    return new NodeD1Statement(this.owner, this.sql, values);
  }

  async first<T = unknown>(colName?: string): Promise<T | null> {
    const row = this.owner.db
      .prepare(this.sql)
      .get(...normalizeParams(this.params)) as Record<string, unknown> | null;
    if (row == null) return null;
    if (colName !== undefined) return (row[colName] ?? null) as T | null;
    return row as T;
  }

  async all<T = unknown>(): Promise<{ results: T[] }> {
    const rows = this.owner.db
      .prepare(this.sql)
      .all(...normalizeParams(this.params)) as T[];
    return { results: rows };
  }

  async run(): Promise<{ success: boolean; meta?: { changes?: number } }> {
    const { changes } = this.owner.runWrite(
      this.sql,
      normalizeParams(this.params)
    );
    return { success: true, meta: { changes } };
  }
}
