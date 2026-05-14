-- shopify-leads D1 schema (source of truth)
-- Generated from /Users/mukesh/Projects/marketing/shopify-leads/shopify_stores.db
-- Add 0002_admin_workflow.sql for admin_status / admin_notes / etc.

CREATE TABLE raw_stores (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    row_id INTEGER,
                    website TEXT NOT NULL,
                    website_ri TEXT,
                    rank TEXT,
                    website_popularity TEXT,
                    ip_reverse_dns_host TEXT,
                    top_level_hostname TEXT,
                    dns_records_count INTEGER,
                    record_update_time TEXT,
                    scraped_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    site_id INTEGER, page_number INTEGER DEFAULT 0,
                    UNIQUE(website, site_id) ON CONFLICT IGNORE
                );
-- sqlite_sequence is auto-managed by SQLite/D1 — never CREATE it manually.
CREATE TABLE failed_stores (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    website TEXT NOT NULL,
                    reason TEXT,
                    attempt_count INTEGER DEFAULT 1,
                    last_attempt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    site_id INTEGER,
                    UNIQUE(website) ON CONFLICT REPLACE
                );
CREATE TABLE unknown_apps (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    app_pattern TEXT NOT NULL UNIQUE ON CONFLICT IGNORE,
                    discovered_count INTEGER DEFAULT 1,
                    first_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    websites TEXT -- JSON array of websites where found
                );
CREATE TABLE unknown_themes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    theme_name TEXT NOT NULL UNIQUE ON CONFLICT IGNORE,
                    discovered_count INTEGER DEFAULT 1,
                    first_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    websites TEXT -- JSON array of websites where found
                );
CREATE TABLE themes (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    shopify_theme_id INTEGER,
    handle TEXT,
    style_id INTEGER,
    style_handle TEXT,
    theme_store_url TEXT,
    is_known INTEGER DEFAULT 1,
    discovery_count INTEGER DEFAULT 0,
    last_seen TEXT,
    created_at TEXT,
    updated_at TEXT
, "vendor" TEXT);
CREATE TABLE detection_results (
    id INTEGER PRIMARY KEY,
    website TEXT NOT NULL UNIQUE ON CONFLICT REPLACE,
    platform TEXT,
    theme_id TEXT,
    theme_name TEXT,
    theme_fully_custom INTEGER,
    app_ids TEXT,            -- JSON / CSV list
    scripts_found TEXT,      -- JSON / CSV list
    social_links TEXT,       -- JSON
    detection_timestamp TEXT,
    error_message TEXT
);
CREATE INDEX idx_raw_stores_website ON raw_stores(website);
CREATE INDEX idx_raw_stores_site_id ON raw_stores(site_id);
CREATE INDEX idx_failed_stores_website ON failed_stores(website);
CREATE INDEX idx_themes_name ON themes(name);
CREATE INDEX idx_themes_handle ON themes(handle);
CREATE INDEX idx_detection_results_website ON detection_results(website);
CREATE TABLE IF NOT EXISTS "apps" ("id" INTEGER PRIMARY KEY, "name" TEXT NOT NULL, "category" TEXT, "script_pattern" TEXT, "primary_domain" TEXT, "website_url" TEXT, "app_store_url" TEXT, "short_description" TEXT, "long_description" TEXT, "is_known" INTEGER DEFAULT 1, "discovery_count" INTEGER DEFAULT 0, "last_seen" TEXT, "created_at" TEXT, "updated_at" TEXT, "token" TEXT, "vendor_name" TEXT, "vendor_url" TEXT, "vendor_website" TEXT, "vendor_address" TEXT, "icon_url" TEXT, "avg_rating" REAL, "install_count" INTEGER, "install_count_30d" INTEGER, "install_count_90d" INTEGER, "review_count" INTEGER, "categories_json" TEXT, "app_first_seen" TEXT, "app_last_updated" TEXT);
CREATE INDEX idx_apps_name ON apps(name);
CREATE INDEX idx_apps_category ON apps(category);
CREATE UNIQUE INDEX idx_apps_token_unique ON apps(token);
CREATE VIEW stores_unified AS
SELECT
    ps.website AS domain,
    rs.rank AS myipms_rank,
    rs.website_popularity AS myipms_popularity,
    ps.storeleads_rank,
    ps.merchant_name,
    COALESCE(ps.merchant_name, ps.company_name) AS display_name,
    ps.title,
    ps.description,
    ps.plan,
    ps.country_code,
    ps.country,
    ps.city,
    ps.state,
    COALESCE(t.name, ps.theme_raw) AS theme,
    t.vendor AS theme_vendor,
    t.style_handle AS theme_style,
    ps.theme_version,
    ps.product_count,
    ps.email,
    ps.phone,
    json_extract(ps.social_handles, '$.facebook')  AS facebook,
    json_extract(ps.social_handles, '$.instagram') AS instagram,
    json_extract(ps.social_handles, '$.twitter')   AS twitter,
    json_extract(ps.social_handles, '$.pinterest') AS pinterest,
    json_extract(ps.social_handles, '$.youtube')   AS youtube,
    json_extract(ps.social_handles, '$.linkedin')  AS linkedin,
    json_extract(ps.social_handles, '$.tiktok')    AS tiktok,
    ps.social_handles,
    ps.judgeme_review_count,
    ps.judgeme_avg_rating,
    ps.data_source,
    ps.processed_at,
    ps.storeleads_imported_at,
    ps.apps,
    CASE WHEN rs.website IS NOT NULL THEN 1 ELSE 0 END AS has_raw
FROM parsed_stores ps
LEFT JOIN themes t ON t.id = ps.theme_id
LEFT JOIN (
    SELECT website, MIN(rank) AS rank, MIN(website_popularity) AS website_popularity
    FROM raw_stores GROUP BY website
) rs ON rs.website = ps.website
/* stores_unified(domain,myipms_rank,myipms_popularity,storeleads_rank,merchant_name,display_name,title,description,"plan",country_code,country,city,state,theme,theme_vendor,theme_style,theme_version,product_count,email,phone,facebook,instagram,twitter,pinterest,youtube,linkedin,tiktok,social_handles,judgeme_review_count,judgeme_avg_rating,data_source,processed_at,storeleads_imported_at,apps,has_raw) */;
CREATE TABLE judgeme_categories (
    id INTEGER PRIMARY KEY,
    parent_id INTEGER,
    level INTEGER,
    name TEXT NOT NULL,
    handle TEXT,
    is_deepest INTEGER,
    description TEXT,
    imported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_judgeme_categories_parent ON judgeme_categories(parent_id);
CREATE INDEX idx_judgeme_categories_handle ON judgeme_categories(handle);
CREATE TABLE judgeme_stores (
    storefront TEXT PRIMARY KEY,
    myshopify_domain TEXT,
    store_name TEXT,
    store_country TEXT,
    category_id INTEGER REFERENCES judgeme_categories(id),
    reviews_count INTEGER,
    verified_reviews INTEGER,
    avg_rating REAL,
    transparency_score REAL,
    authenticity_score REAL,
    top_product_title TEXT,
    top_product_url TEXT,
    top_product_price TEXT,
    top_product_image_url TEXT,
    product_count INTEGER,
    collection_count INTEGER,
    product_probe_status TEXT,
    product_probed_at TEXT,
    imported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_judgeme_stores_myshopify ON judgeme_stores(myshopify_domain);
CREATE INDEX idx_judgeme_stores_category ON judgeme_stores(category_id);
CREATE TABLE IF NOT EXISTS "parsed_stores" (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            "website" TEXT, "company_name" TEXT, "platform" TEXT, "social_handles" TEXT, "error" TEXT, "meta_data" TEXT, "processed_at" TIMESTAMP, "raw_store_id" INTEGER, "merchant_name" TEXT, "title" TEXT, "description" TEXT, "myshopify_domain" TEXT, "country_code" TEXT, "country" TEXT, "region" TEXT, "state" TEXT, "city" TEXT, "location" TEXT, "language" TEXT, "store_created_at" TEXT, "plan" TEXT, "theme_version" TEXT, "avg_price_formatted" TEXT, "est_revenue_formatted" TEXT, "est_yearly_revenue_formatted" TEXT, "min_price_formatted" TEXT, "max_price_formatted" TEXT, "currency" TEXT, "storeleads_rank" INTEGER, "product_count" INTEGER, "product_count_30d" INTEGER, "product_count_90d" INTEGER, "product_count_365d" INTEGER, "email" TEXT, "phone" TEXT, "judgeme_review_count" INTEGER, "judgeme_avg_rating" REAL, "tags_json" TEXT, "tech_json" TEXT, "identifiers_json" TEXT, "favicon_url" TEXT, "og_image_url" TEXT, "has_cms" INTEGER, "headless" INTEGER, "storeleads_last_crawled" TEXT, "storeleads_imported_at" TIMESTAMP, "storeleads_raw_json" TEXT, "data_source" TEXT, "apps" TEXT, "theme_id" INTEGER, "theme_raw" TEXT, "collection_count" INTEGER,
            UNIQUE(website) ON CONFLICT REPLACE
        );
CREATE INDEX idx_parsed_stores_website ON parsed_stores(website);
CREATE INDEX idx_parsed_stores_platform ON parsed_stores(platform);
CREATE INDEX idx_parsed_stores_theme_id ON parsed_stores(theme_id);
