-- Leads from /shopify-store-setup. Kept in its own table, deliberately separate
-- from any scraped data in this database: these people gave consent, that lot did not.
CREATE TABLE IF NOT EXISTS store_setup_leads (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT NOT NULL,
  phone         TEXT NOT NULL,
  sells         TEXT NOT NULL,
  gclid         TEXT,
  utm_source    TEXT,
  utm_campaign  TEXT,
  landing_path  TEXT,
  created_at    TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_store_setup_leads_created ON store_setup_leads (created_at DESC);
