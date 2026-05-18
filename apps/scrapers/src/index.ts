// Cron-driven scraper Worker.
//
// Triggers (see wrangler.toml):
//   "* * * * *"    -> enrich pass: process ~20 unprocessed stores
//   "*/5 * * * *"  -> judgeme bulk crawler tick
//
// Also exposes manual HTTP endpoints for ad-hoc runs and stats.
import { enrichBatch } from "./enrich";
import { judgemeTick } from "./judgeme";
import { importStoreleadsDump } from "./storeleads";
import { lookupOne } from "./lookup";

export interface Env {
  LEADS_DB: D1Database;
  ADMIN_TOKEN?: string;
}

// Run two enrich passes per minute (30s apart) — effective doubled cadence
// without needing sub-minute cron, which CF doesn't support.
// With CONCURRENCY=5 inside enrichBatch + 2-3s per store, ~50 stores fit
// in the 25s RUN_BUDGET_MS budget per batch.
async function enrichTwice(env: Env): Promise<void> {
  await enrichBatch(env, { limit: 50 });
  await new Promise((r) => setTimeout(r, 30_000));
  await enrichBatch(env, { limit: 50 });
}

export default {
  // Cron entry point
  async scheduled(event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    switch (event.cron) {
      case "* * * * *":
        ctx.waitUntil(enrichTwice(env));
        break;
      case "*/5 * * * *":
        ctx.waitUntil(judgemeTick(env, { limit: 10 }));
        break;
    }
  },

  // HTTP entry point — for ad-hoc triggers, stats, single-domain lookups
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // light auth: require x-admin-token on write endpoints
    const writeAuth = () =>
      env.ADMIN_TOKEN && request.headers.get("x-admin-token") === env.ADMIN_TOKEN;

    if (url.pathname === "/stats") {
      const rows = await env.LEADS_DB.prepare(`
        SELECT data_source, COUNT(*) AS n FROM parsed_stores GROUP BY data_source ORDER BY n DESC
      `).all();
      const queue = await env.LEADS_DB.prepare(`
        SELECT COUNT(*) AS n FROM parsed_stores WHERE processed_at IS NULL
      `).first<{ n: number }>();
      return Response.json({ data_sources: rows.results, unprocessed: queue?.n ?? 0 });
    }

    if (url.pathname === "/enrich" && request.method === "POST") {
      if (!writeAuth()) return new Response("Forbidden", { status: 403 });
      const limit = Number(url.searchParams.get("limit") ?? "20");
      const result = await enrichBatch(env, { limit });
      return Response.json(result);
    }

    if (url.pathname === "/judgeme" && request.method === "POST") {
      if (!writeAuth()) return new Response("Forbidden", { status: 403 });
      const limit = Number(url.searchParams.get("limit") ?? "10");
      const result = await judgemeTick(env, { limit });
      return Response.json(result);
    }

    if (url.pathname === "/import-storeleads" && request.method === "POST") {
      if (!writeAuth()) return new Response("Forbidden", { status: 403 });
      const body = await request.text();
      const result = await importStoreleadsDump(env, body);
      return Response.json(result);
    }

    if (url.pathname === "/lookup") {
      const domain = url.searchParams.get("domain");
      if (!domain) return new Response("missing ?domain", { status: 400 });
      return Response.json(await lookupOne(env, domain));
    }

    return new Response(
      "shopify-leads-scrapers\n\n" +
        "Endpoints:\n" +
        "  GET  /stats\n" +
        "  GET  /lookup?domain=<d>\n" +
        "  POST /enrich?limit=20             (x-admin-token)\n" +
        "  POST /judgeme?limit=10            (x-admin-token)\n" +
        "  POST /import-storeleads           (x-admin-token, body=JSON dump)\n",
      { headers: { "content-type": "text/plain" } }
    );
  },
} satisfies ExportedHandler<Env>;
