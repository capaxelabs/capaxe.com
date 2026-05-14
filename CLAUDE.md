# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Repo overview

Monorepo for Capaxe Labs:

- **apps/web** — Astro marketing site + admin UI for the leads DB, deployed to Cloudflare Workers.
- **apps/scrapers** — Cron-driven Worker that crawls Shopify storefronts, judge.me, and ingests storeleads.app dumps. Writes to the same D1 database that `apps/web` reads.
- **packages/db** — Shared SQLite/D1 schema + TypeScript row types used by both apps.
- **scripts/** — Repo-wide one-shot tooling (e.g. D1 bulk import).

Both Worker apps bind to the same D1 database (`shopify-leads`). One canonical lead DB; two Workers.

## Folder layout

```
capaxe.com/
├── apps/
│   ├── web/                      Astro + React on Cloudflare Workers
│   │   ├── src/                  pages, components, content, api routes
│   │   ├── astro.config.mjs
│   │   ├── wrangler.json         binds LEADS_DB (D1) + ASSETS
│   │   └── package.json
│   └── scrapers/                 cron-driven scraper Worker
│       ├── src/
│       │   ├── index.ts          cron + HTTP entry, dispatches subcommands
│       │   ├── enrich.ts         storefront enrichment (theme/apps/socials/SKU/...)
│       │   ├── judgeme.ts        judge.me category-walk crawler
│       │   ├── storeleads.ts     storeleads.app JSON dump importer
│       │   └── lookup.ts         single-domain combined lookup
│       ├── wrangler.toml         binds LEADS_DB (same DB) + cron triggers
│       └── package.json
├── packages/
│   └── db/
│       ├── schema.sql            canonical schema (live source of truth)
│       ├── migrations/           ordered SQL files (0001_initial.sql etc.)
│       ├── types.ts              TypeScript row types
│       └── queries.ts            shared query strings (TBD)
├── scripts/
│   └── d1-import.mjs             bulk-load a local SQLite file into D1
├── package.json                  workspace orchestration only
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── CLAUDE.md
```

## Workspace commands (from repo root)

| Command | Action |
|---------|--------|
| `pnpm install` | Install all workspaces |
| `pnpm dev:web` | Start Astro dev server (apps/web) |
| `pnpm dev:scrapers` | Run scraper Worker locally with miniflare |
| `pnpm build:web` | Build the marketing site |
| `pnpm deploy:web` | Deploy apps/web to Cloudflare Workers |
| `pnpm deploy:scrapers` | Deploy apps/scrapers to Cloudflare Workers |
| `pnpm check` | Run `check` script in every workspace |
| `pnpm d1:create` | Create the D1 database once (`shopify-leads`) |
| `pnpm d1:console "<sql>"` | Run an ad-hoc SQL against the remote D1 |
| `pnpm d1:import` | Bulk import from local sqlite (see scripts/d1-import.mjs) |

Per-app commands are also runnable via `pnpm --filter <web|scrapers> <script>`.

## Initial D1 setup (one time)

```bash
# 1. Create the database
pnpm d1:create
# Copy database_id from the output and paste it into both:
#   apps/web/wrangler.json        ("d1_databases" section)
#   apps/scrapers/wrangler.toml   ("[[d1_databases]]" section)

# 2. Push schema
wrangler d1 execute shopify-leads --remote --file=packages/db/schema.sql
wrangler d1 execute shopify-leads --remote --file=packages/db/migrations/0002_admin_workflow.sql

# 3. Bulk import existing data from local sqlite (~30 min)
node scripts/d1-import.mjs --src /Users/mukesh/Projects/marketing/shopify-leads/shopify_stores.db

# 4. Verify
wrangler d1 execute shopify-leads --remote --command "SELECT COUNT(*) FROM parsed_stores"
```

## apps/web (marketing site + admin UI)

The Astro site already runs the public marketing pages. New surface area for
the leads admin lives under:

- `src/pages/admin/*.astro` — UI pages, auth-gated by `src/middleware.ts`
- `src/pages/api/admin/*.ts` — JSON endpoints reading/writing D1 via `locals.runtime.env.LEADS_DB`

Auth model TBD — for the first cut, a shared `ADMIN_TOKEN` (Worker secret +
cookie) is the simplest. Cloudflare Access (zero auth code) is the upgrade
path once we want per-user attribution.

## apps/scrapers (cron Worker)

Cron triggers in `wrangler.toml`:

| Schedule | Job | What it does |
|---|---|---|
| `* * * * *` | `enrich` | Pick 20 unprocessed `parsed_stores`, fetch storefront HTML + `/products.json` + `/collections.json`, write fields back. |
| `*/5 * * * *` | `judgeme` | Walk one page of judge.me search; new domains get probed and upserted. |

Manual HTTP triggers exist for ad-hoc runs (`POST /enrich`, `POST /judgeme`,
`POST /import-storeleads`, `GET /lookup?domain=`). All write endpoints require
the `x-admin-token` header.

Each cron invocation is short (well under 30 s CPU). The DB is the queue;
`processed_at IS NULL` is the work-to-do list.

## packages/db (shared schema + types)

- `schema.sql` — exact dump of the live DB. Treat as source of truth.
- `migrations/000N_*.sql` — versioned, additive changes. Run via `wrangler d1 execute --file=...`.
- `types.ts` — TypeScript row interfaces for every table. Imported by both apps.

If you change a column, update **all three**: the schema dump, a new migration
file, and the matching TypeScript interface.

## Reference Python pipeline

The original Python implementation lives at
`/Users/mukesh/Projects/marketing/shopify-leads/` and remains the canonical
behaviour to port. When implementing `apps/scrapers/src/*.ts`, mirror the
logic in:

| TS file | Python source |
|---|---|
| `enrich.ts` | `shopify-leads/enrich.py` |
| `judgeme.ts` | `shopify-leads/judgeme_crawler.py` |
| `storeleads.ts` | `shopify-leads/storeleads_import.py` |
| `lookup.ts` | `shopify-leads/judgeme_lookup.py` + `cli.py:cmd_lookup` |

## Conventions

- **One canonical DB.** Everything lives in D1 once we cut over from the local
  Python pipeline. No more CSV files in the repo.
- **No trailing slashes** on routes (matches `astro.config.mjs` setting).
- **Bindings** in code are accessed via `locals.runtime.env.<BINDING>` in Astro
  and `env.<BINDING>` in the scrapers Worker.
- **Secrets** (admin token, API keys) go through `wrangler secret put`, never
  into `wrangler.{json,toml}`. The `vars` block is for non-secret config.
- **Migrations** are additive only. Never `DROP TABLE` or rename in place;
  add a new column and backfill, or create a new table.

## Pending / TODO

- [ ] Run `pnpm d1:create` and paste the database_id into both wrangler files
- [ ] Bulk-import current 237k rows
- [ ] Implement the four scraper stubs in `apps/scrapers/src/` (logic exists
      in the reference Python pipeline)
- [ ] Build admin pages under `apps/web/src/pages/admin/`
- [ ] Add the admin auth middleware in `apps/web/src/middleware.ts`
- [ ] Replace the placeholder Astro project name
      (`astro-blog-starter-template`) in `apps/web/package.json` with `web`
