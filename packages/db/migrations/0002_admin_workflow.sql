-- Admin workflow columns: track outreach progress per lead
ALTER TABLE parsed_stores ADD COLUMN admin_status     TEXT;
ALTER TABLE parsed_stores ADD COLUMN admin_notes      TEXT;
ALTER TABLE parsed_stores ADD COLUMN admin_owner      TEXT;
ALTER TABLE parsed_stores ADD COLUMN admin_updated_at TIMESTAMP;

CREATE INDEX IF NOT EXISTS idx_parsed_stores_admin_status ON parsed_stores(admin_status);
