#!/usr/bin/env bash
# One-time seed: export the live D1 database into the container's local SQLite.
#
# Run from apps/scrapers. Needs sqlite3 plus wrangler auth — either an
# interactive `wrangler login` session or CLOUDFLARE_API_TOKEN in the env
# (the same D1:Edit token from .env works: CLOUDFLARE_API_TOKEN=$CF_API_TOKEN).
#
# The resulting data/scraper.db carries everything the jobs need: the full
# parsed_stores/raw_stores tables, apps + themes lookups, judgeme_stores and
# the judgeme_progress cursor, so crawling resumes exactly where the Worker
# cron left off.
set -euo pipefail
cd "$(dirname "$0")/.."

DB_PATH="${DB_PATH:-./data/scraper.db}"
DB_NAME="${DB_NAME:-shopify-leads}"

if [ -f "$DB_PATH" ]; then
  echo "Refusing to overwrite existing $DB_PATH — delete it first if you want a fresh seed." >&2
  exit 1
fi

mkdir -p "$(dirname "$DB_PATH")"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "Exporting $DB_NAME from D1 (this can take a few minutes)…"
npx wrangler d1 export "$DB_NAME" --remote --output="$TMP/seed.sql"

echo "Loading into $DB_PATH…"
sqlite3 "$DB_PATH" < "$TMP/seed.sql"

sqlite3 "$DB_PATH" "SELECT 'parsed_stores: ' || COUNT(*) FROM parsed_stores;
SELECT 'judgeme_stores: ' || COUNT(*) FROM judgeme_stores;
SELECT 'cursor: country_index=' || country_index || ' category_index=' || category_index || ' page=' || page FROM judgeme_progress WHERE id = 1;"
echo "Done."
