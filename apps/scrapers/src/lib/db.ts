// Shared D1 helpers used by enrich / judgeme / storeleads / lookup.
import { APP_TOKEN_FROM_URL, INVALID_APP_TOKENS } from "./detection";

// --- apps master --------------------------------------------------------------
export interface AppsLookup {
  /** lowercase name → app_id */
  nameToId: Map<string, number>;
  /** Sorted by name, used as the iteration set when running detection. */
  patterns: Array<{ id: number; name: string; pattern: string }>;
}

export async function loadAppsLookup(db: D1Database): Promise<AppsLookup> {
  const rows = await db
    .prepare("SELECT id, name, script_pattern FROM apps WHERE name IS NOT NULL")
    .all<{ id: number; name: string; script_pattern: string | null }>();
  const nameToId = new Map<string, number>();
  const patterns: AppsLookup["patterns"] = [];
  for (const r of rows.results ?? []) {
    nameToId.set(r.name.toLowerCase(), r.id);
    patterns.push({
      id: r.id,
      name: r.name,
      pattern: r.script_pattern ?? r.name.toLowerCase(),
    });
  }
  return { nameToId, patterns };
}

// --- theme resolution ---------------------------------------------------------
/** Resolve (name, style) to themes.id. Falls back to name-only match. */
export async function resolveTheme(
  db: D1Database,
  themeName: string | null,
  themeStyle?: string | null
): Promise<{ theme_id: number | null; theme_raw: string | null }> {
  if (!themeName || themeName.toLowerCase() === "unknown") {
    return { theme_id: null, theme_raw: null };
  }
  if (themeStyle && themeStyle.toLowerCase() !== "unknown" && themeStyle.toLowerCase() !== "") {
    const r = await db
      .prepare(
        `SELECT id FROM themes
           WHERE (LOWER(name) = LOWER(?) OR LOWER(handle) = LOWER(?))
             AND LOWER(style_handle) = LOWER(?)
           LIMIT 1`
      )
      .bind(themeName, themeName, themeStyle)
      .first<{ id: number }>();
    if (r) return { theme_id: r.id, theme_raw: null };
  }
  const r = await db
    .prepare(
      `SELECT id FROM themes
         WHERE LOWER(name) = LOWER(?) OR LOWER(handle) = LOWER(?)
         ORDER BY CASE WHEN LOWER(style_handle) = 'default' THEN 0 ELSE 1 END,
                  style_id
         LIMIT 1`
    )
    .bind(themeName, themeName)
    .first<{ id: number }>();
  if (r) return { theme_id: r.id, theme_raw: null };
  return { theme_id: null, theme_raw: themeName };
}

// --- write enrichment to parsed_stores ---------------------------------------
export interface EnrichmentWrite {
  website: string;
  company_name?: string | null;
  title?: string | null;
  description?: string | null;
  theme_id?: number | null;
  theme_raw?: string | null;
  theme_version?: string | null;
  apps_ids?: number[];
  social_handles?: Record<string, string>;
  product_count?: number | null;
  collection_count?: number | null;
  myshopify_domain?: string | null;
  language?: string | null;
  currency?: string | null;
  favicon_url?: string | null;
  og_image_url?: string | null;
  email?: string | null;
  phone?: string | null;
  error?: string | null;
}

const ENRICH_UPDATE_SQL = `
UPDATE parsed_stores SET
    company_name      = COALESCE(NULLIF(?, ''), company_name),
    theme_id          = COALESCE(?, theme_id),
    theme_raw         = COALESCE(?, theme_raw),
    theme_version     = COALESCE(NULLIF(?, ''), theme_version),
    apps              = COALESCE(?, apps),
    social_handles    = ?,
    product_count     = COALESCE(?, product_count),
    collection_count  = COALESCE(?, collection_count),
    title             = COALESCE(NULLIF(?, ''), title),
    description       = COALESCE(NULLIF(?, ''), description),
    myshopify_domain  = COALESCE(NULLIF(?, ''), myshopify_domain),
    language          = COALESCE(NULLIF(?, ''), language),
    currency          = COALESCE(NULLIF(?, ''), currency),
    favicon_url       = COALESCE(NULLIF(?, ''), favicon_url),
    og_image_url      = COALESCE(NULLIF(?, ''), og_image_url),
    email             = COALESCE(NULLIF(?, ''), email),
    phone             = COALESCE(NULLIF(?, ''), phone),
    error             = ?,
    processed_at      = CURRENT_TIMESTAMP,
    data_source       = CASE
        WHEN data_source IS NULL THEN 'crawler'
        WHEN instr(data_source, 'crawler') > 0 THEN data_source
        ELSE data_source || '+crawler'
    END
WHERE website = ?
`;

export async function writeEnrichment(
  db: D1Database,
  e: EnrichmentWrite
): Promise<void> {
  // Merge social_handles with whatever's already there (don't clobber).
  const existing = await db
    .prepare("SELECT social_handles FROM parsed_stores WHERE website = ?")
    .bind(e.website)
    .first<{ social_handles: string | null }>();
  let mergedSocials: Record<string, string> = {};
  if (existing?.social_handles) {
    try {
      mergedSocials = JSON.parse(existing.social_handles) ?? {};
    } catch {
      /* ignore */
    }
  }
  for (const [k, v] of Object.entries(e.social_handles ?? {})) {
    if (v && !mergedSocials[k]) mergedSocials[k] = v;
  }
  const socialJson =
    Object.keys(mergedSocials).length > 0 ? JSON.stringify(mergedSocials) : null;

  const appsJson =
    e.apps_ids && e.apps_ids.length > 0
      ? JSON.stringify([...new Set(e.apps_ids)].sort((a, b) => a - b))
      : null;

  await db
    .prepare(ENRICH_UPDATE_SQL)
    .bind(
      e.company_name ?? "",
      e.theme_id ?? null,
      e.theme_raw ?? null,
      e.theme_version ?? "",
      appsJson,
      socialJson,
      e.product_count ?? null,
      e.collection_count ?? null,
      e.title ?? "",
      e.description ?? "",
      e.myshopify_domain ?? "",
      e.language ?? "",
      e.currency ?? "",
      e.favicon_url ?? "",
      e.og_image_url ?? "",
      e.email ?? "",
      e.phone ?? "",
      e.error ?? null,
      e.website
    )
    .run();
}

// --- pick next batch ----------------------------------------------------------
export async function pickEnrichTargets(
  db: D1Database,
  limit: number
): Promise<string[]> {
  // Prefer rows with a myipms rank, ordered by rank ASC (most popular first).
  const rs = await db
    .prepare(
      `SELECT ps.website FROM parsed_stores ps
        LEFT JOIN (
          SELECT website, MIN(rank) AS rank FROM raw_stores GROUP BY website
        ) rs ON rs.website = ps.website
        WHERE ps.processed_at IS NULL
        ORDER BY rs.rank IS NULL,
                 CAST(REPLACE(REPLACE(REPLACE(rs.rank, '#', ''), ',', ''), ' ', '') AS INTEGER) ASC,
                 ps.website ASC
        LIMIT ?`
    )
    .bind(limit)
    .all<{ website: string }>();
  return (rs.results ?? []).map((r) => r.website);
}

// --- app store token helper ---------------------------------------------------
export function tokenFromAppStoreUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const m = url.match(APP_TOKEN_FROM_URL);
  if (!m) return null;
  const token = m[1]!.toLowerCase();
  if (INVALID_APP_TOKENS.has(token)) return null;
  return token;
}

export function slugifyName(name: string | null | undefined): string | null {
  if (!name) return null;
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || null;
}

// --- upsert app into master ---------------------------------------------------
const APP_UPSERT_SQL = `
INSERT INTO apps (
    token, name, app_store_url, vendor_name, vendor_url, vendor_website, vendor_address,
    icon_url, avg_rating, install_count, install_count_30d, install_count_90d,
    review_count, categories_json, app_first_seen, app_last_updated,
    short_description, is_known, discovery_count
) VALUES (
    ?, ?, ?, ?, ?, ?, ?,
    ?, ?, ?, ?, ?,
    ?, ?, ?, ?,
    ?, 1, 0
)
ON CONFLICT(token) DO UPDATE SET
    name              = COALESCE(excluded.name, name),
    app_store_url     = COALESCE(excluded.app_store_url, app_store_url),
    vendor_name       = COALESCE(excluded.vendor_name, vendor_name),
    vendor_url        = COALESCE(excluded.vendor_url, vendor_url),
    vendor_website    = COALESCE(excluded.vendor_website, vendor_website),
    vendor_address    = COALESCE(excluded.vendor_address, vendor_address),
    icon_url          = COALESCE(excluded.icon_url, icon_url),
    avg_rating        = COALESCE(excluded.avg_rating, avg_rating),
    install_count     = COALESCE(excluded.install_count, install_count),
    install_count_30d = COALESCE(excluded.install_count_30d, install_count_30d),
    install_count_90d = COALESCE(excluded.install_count_90d, install_count_90d),
    review_count      = COALESCE(excluded.review_count, review_count),
    categories_json   = COALESCE(excluded.categories_json, categories_json),
    app_first_seen    = COALESCE(excluded.app_first_seen, app_first_seen),
    app_last_updated  = COALESCE(excluded.app_last_updated, app_last_updated),
    short_description = COALESCE(excluded.short_description, short_description),
    updated_at        = CURRENT_TIMESTAMP
`;

export interface AppMasterRow {
  token: string;
  name?: string | null;
  app_store_url?: string | null;
  vendor_name?: string | null;
  vendor_url?: string | null;
  vendor_website?: string | null;
  vendor_address?: string | null;
  icon_url?: string | null;
  avg_rating?: number | null;
  install_count?: number | null;
  install_count_30d?: number | null;
  install_count_90d?: number | null;
  review_count?: number | null;
  categories_json?: string | null;
  app_first_seen?: string | null;
  app_last_updated?: string | null;
  description?: string | null;
}

export async function upsertApp(db: D1Database, a: AppMasterRow): Promise<number> {
  await db
    .prepare(APP_UPSERT_SQL)
    .bind(
      a.token,
      a.name ?? null,
      a.app_store_url ?? null,
      a.vendor_name ?? null,
      a.vendor_url ?? null,
      a.vendor_website ?? null,
      a.vendor_address ?? null,
      a.icon_url ?? null,
      a.avg_rating ?? null,
      a.install_count ?? null,
      a.install_count_30d ?? null,
      a.install_count_90d ?? null,
      a.review_count ?? null,
      a.categories_json ?? null,
      a.app_first_seen ?? null,
      a.app_last_updated ?? null,
      a.description ?? null
    )
    .run();
  const r = await db
    .prepare("SELECT id FROM apps WHERE token = ? LIMIT 1")
    .bind(a.token)
    .first<{ id: number }>();
  return r?.id ?? -1;
}
