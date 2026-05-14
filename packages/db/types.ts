/**
 * Shared TypeScript row types for the shopify-leads D1 database.
 * Mirror of the canonical schema in shopify-leads/shopify_stores.db.
 */

export interface ParsedStore {
  id: number;
  website: string;
  platform: string | null;
  data_source: string | null;
  company_name: string | null;
  merchant_name: string | null;
  title: string | null;
  description: string | null;
  myshopify_domain: string | null;
  country_code: string | null;
  country: string | null;
  region: string | null;
  state: string | null;
  city: string | null;
  location: string | null;
  language: string | null;
  store_created_at: string | null;
  plan: string | null;
  theme_id: number | null;
  theme_raw: string | null;
  theme_version: string | null;
  avg_price_formatted: string | null;
  est_revenue_formatted: string | null;
  est_yearly_revenue_formatted: string | null;
  min_price_formatted: string | null;
  max_price_formatted: string | null;
  currency: string | null;
  storeleads_rank: number | null;
  product_count: number | null;
  product_count_30d: number | null;
  product_count_90d: number | null;
  product_count_365d: number | null;
  collection_count: number | null;
  email: string | null;
  phone: string | null;
  social_handles: string | null; // JSON: {facebook, instagram, twitter, ...}
  apps: string | null;           // JSON: array of apps.id
  judgeme_review_count: number | null;
  judgeme_avg_rating: number | null;
  tags_json: string | null;
  tech_json: string | null;
  identifiers_json: string | null;
  favicon_url: string | null;
  og_image_url: string | null;
  has_cms: number | null;
  headless: number | null;
  storeleads_last_crawled: string | null;
  storeleads_imported_at: string | null;
  storeleads_raw_json: string | null;
  raw_store_id: number | null;
  meta_data: string | null;
  error: string | null;
  processed_at: string | null;
  // admin workflow fields (added by 0002 migration)
  admin_status: string | null;
  admin_notes: string | null;
  admin_owner: string | null;
  admin_updated_at: string | null;
}

export interface App {
  id: number;
  token: string | null;
  name: string | null;
  category: string | null;
  script_pattern: string | null;
  vendor_name: string | null;
  vendor_url: string | null;
  vendor_website: string | null;
  icon_url: string | null;
  avg_rating: number | null;
  install_count: number | null;
  review_count: number | null;
  categories_json: string | null;
  app_store_url: string | null;
  short_description: string | null;
}

export interface Theme {
  id: number;
  name: string;
  vendor: string | null;
  shopify_theme_id: number | null;
  handle: string | null;
  style_id: number | null;
  style_handle: string | null;
  theme_store_url: string | null;
}

export interface JudgemeStore {
  storefront: string;
  myshopify_domain: string | null;
  store_name: string | null;
  store_country: string | null;
  category_id: number | null;
  reviews_count: number | null;
  verified_reviews: number | null;
  avg_rating: number | null;
  transparency_score: number | null;
  authenticity_score: number | null;
  top_product_title: string | null;
  top_product_url: string | null;
  top_product_price: string | null;
  top_product_image_url: string | null;
  product_count: number | null;
  collection_count: number | null;
  product_probe_status: string | null;
  product_probed_at: string | null;
  imported_at: string | null;
}

export interface JudgemeCategory {
  id: number;
  parent_id: number | null;
  level: number | null;
  name: string;
  handle: string | null;
  is_deepest: number | null;
  description: string | null;
}

export interface RawStore {
  id: number;
  website: string;
  rank: string | null;
  website_popularity: string | null;
  ip_reverse_dns_host: string | null;
  top_level_hostname: string | null;
  dns_records_count: number | null;
  scraped_at: string | null;
}

/** Helper: parse the JSON-typed columns safely */
export function parseAppsIds(json: string | null): number[] {
  if (!json) return [];
  try {
    const v = JSON.parse(json);
    return Array.isArray(v) ? v.filter((x) => typeof x === "number") : [];
  } catch {
    return [];
  }
}

export function parseSocials(json: string | null): Record<string, string> {
  if (!json) return {};
  try {
    return JSON.parse(json) ?? {};
  } catch {
    return {};
  }
}
