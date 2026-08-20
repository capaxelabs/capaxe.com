/**
 * Minimal ambient declarations for the Cloudflare Workers globals the shared
 * scraper code references, so the same files typecheck under the Node
 * tsconfig (tsconfig.node.json) without pulling in @cloudflare/workers-types
 * (whose fetch/Response globals conflict with @types/node).
 *
 * At runtime in the container, D1Database is satisfied by SqliteD1.
 */

declare interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  all<T = unknown>(): Promise<{ results: T[] }>;
  run(): Promise<{ success: boolean; meta?: { changes?: number } }>;
}

declare interface D1Database {
  prepare(sql: string): D1PreparedStatement;
}

declare interface ScheduledController {
  cron: string;
}

declare interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

declare type ExportedHandler<TEnv> = {
  scheduled?(
    event: ScheduledController,
    env: TEnv,
    ctx: ExecutionContext
  ): void | Promise<void>;
  fetch?(
    request: Request,
    env: TEnv,
    ctx: ExecutionContext
  ): Response | Promise<Response>;
};
