// judge.me crawler — TS port of marketing/shopify-leads/judgeme_crawler.py.
//
// Each tick:
//   1. Read resume state (country/category/page) from judgeme_progress.
//   2. Fetch one page of judge.me/reviews/search.json for the current cursor.
//   3. For each new store on the page: probe storefront for product_count +
//      collection_count, upsert judgeme_stores, promote to parsed_stores.
//   4. Advance the cursor; persist.
//
// Categories live in `judgeme_categories`. If empty we fetch + seed on first run.
import type { Env } from "./index";
import {
  JUDGEME_COUNTRIES,
  JUDGEME_IDENTIFIER_TYPES,
  MAX_PAGES,
  PER_PAGE,
  SHOPIFY_TIMEOUT_MS,
  UA,
} from "./lib/detection";

const JUDGEME_BASE = "https://judge.me/reviews";

export interface JudgemeResult {
  picked: number;
  inserted: number;
  page: number;
  country: string | null;
  category_id: number | null;
  category_name: string | null;
  paused: boolean;
}

interface ProgressRow {
  country_index: number;
  category_index: number;
  page: number;
  paused_until: string | null;
}

interface CategoryRow {
  id: number;
  name: string;
  handle: string | null;
}

interface JudgemeSearchShop {
  shop_domain?: string;
  shop_name?: string;
  review_site_slug?: string;
  user_friendly_url?: string;
  number_of_reviews?: number;
  verified_number_of_reviews?: number;
  average_rating?: number;
  country?: string;
  title?: string;
  displayed_price?: string;
  image_url?: string;
  product_metrics?: {
    transparency_score?: number;
    authenticity_score?: number;
  };
}

export async function judgemeTick(
  env: Env,
  opts: { limit: number }
): Promise<JudgemeResult> {
  const db = env.LEADS_DB;

  // 0. Honor any backoff window
  const prog = await getProgress(db);
  if (prog.paused_until && new Date(prog.paused_until).getTime() > Date.now()) {
    return {
      picked: 0,
      inserted: 0,
      page: prog.page,
      country: JUDGEME_COUNTRIES[prog.country_index] ?? null,
      category_id: null,
      category_name: null,
      paused: true,
    };
  }

  // 1. Load categories; bootstrap if empty
  let categories = await loadCategories(db);
  if (categories.length === 0) {
    await fetchAndSeedCategories(db);
    categories = await loadCategories(db);
    if (categories.length === 0) {
      return {
        picked: 0,
        inserted: 0,
        page: 1,
        country: null,
        category_id: null,
        category_name: null,
        paused: false,
      };
    }
  }

  // 2. Read cursor
  const country = JUDGEME_COUNTRIES[prog.country_index] ?? "US";
  const cat = categories[Math.min(prog.category_index, categories.length - 1)];
  if (!cat) {
    return {
      picked: 0,
      inserted: 0,
      page: prog.page,
      country,
      category_id: null,
      category_name: null,
      paused: false,
    };
  }

  // 3. Fetch one search page
  const search = await fetchSearch(cat.id, country, prog.page);
  const shops: JudgemeSearchShop[] = search?.data?.search_results ?? [];

  // 4. Advance cursor based on result count
  let nextCountry = prog.country_index;
  let nextCategory = prog.category_index;
  let nextPage = prog.page + 1;
  if (shops.length === 0) {
    // Move to next category / country
    nextCategory += 1;
    nextPage = 1;
    if (nextCategory >= categories.length) {
      nextCategory = 0;
      nextCountry = (prog.country_index + 1) % JUDGEME_COUNTRIES.length;
    }
  }
  await setProgress(db, {
    country_index: nextCountry,
    category_index: nextCategory,
    page: nextPage,
    paused_until: prog.paused_until,
  });

  // 5. Upsert new shops + probe (cap to opts.limit so we stay under CPU budget)
  let inserted = 0;
  for (const shop of shops.slice(0, opts.limit)) {
    const slug = (shop.review_site_slug ?? "").toLowerCase().replace(/^www\./, "");
    if (!slug) continue;

    const myshopify = (shop.shop_domain ?? "").toLowerCase();
    const exists = await db
      .prepare("SELECT 1 FROM judgeme_stores WHERE storefront = ? LIMIT 1")
      .bind(slug)
      .first();
    if (exists) continue;

    // Probe products.json + collections.json
    const counts = await probeStorefrontCounts(slug, myshopify);
    const metrics = shop.product_metrics ?? {};
    await db
      .prepare(
        `INSERT INTO judgeme_stores (
            storefront, myshopify_domain, store_name, store_country, category_id,
            reviews_count, verified_reviews, avg_rating, transparency_score, authenticity_score,
            top_product_title, top_product_url, top_product_price, top_product_image_url,
            product_count, collection_count, product_probe_status, product_probed_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(storefront) DO UPDATE SET
            myshopify_domain      = COALESCE(excluded.myshopify_domain, myshopify_domain),
            store_name            = COALESCE(excluded.store_name, store_name),
            store_country         = COALESCE(excluded.store_country, store_country),
            category_id           = COALESCE(excluded.category_id, category_id),
            reviews_count         = COALESCE(excluded.reviews_count, reviews_count),
            verified_reviews      = COALESCE(excluded.verified_reviews, verified_reviews),
            avg_rating            = COALESCE(excluded.avg_rating, avg_rating),
            transparency_score    = COALESCE(excluded.transparency_score, transparency_score),
            authenticity_score    = COALESCE(excluded.authenticity_score, authenticity_score),
            product_count         = COALESCE(excluded.product_count, product_count),
            collection_count      = COALESCE(excluded.collection_count, collection_count),
            product_probe_status  = COALESCE(excluded.product_probe_status, product_probe_status),
            product_probed_at     = COALESCE(excluded.product_probed_at, product_probed_at),
            imported_at           = CURRENT_TIMESTAMP`
      )
      .bind(
        slug,
        myshopify || null,
        shop.shop_name ?? null,
        country,
        cat.id,
        shop.number_of_reviews ?? null,
        shop.verified_number_of_reviews ?? null,
        shop.average_rating ?? null,
        metrics.transparency_score ?? null,
        metrics.authenticity_score ?? null,
        shop.title ?? null,
        shop.user_friendly_url ?? null,
        shop.displayed_price ?? null,
        shop.image_url ?? null,
        counts.product_count,
        counts.collection_count,
        counts.status,
        new Date().toISOString()
      )
      .run();

    // Promote canonical fields to parsed_stores
    await promoteToParsedStores(db, {
      storefront: slug,
      product_count: counts.product_count,
      collection_count: counts.collection_count,
      reviews_count: shop.number_of_reviews ?? null,
      avg_rating: shop.average_rating ?? null,
      store_name: shop.shop_name ?? null,
      store_country: country,
    });

    inserted++;
  }

  return {
    picked: shops.length,
    inserted,
    page: prog.page,
    country,
    category_id: cat.id,
    category_name: cat.name,
    paused: false,
  };
}

// --- progress -----------------------------------------------------------------
async function getProgress(db: D1Database): Promise<ProgressRow> {
  const r = await db
    .prepare("SELECT country_index, category_index, page, paused_until FROM judgeme_progress WHERE id = 1")
    .first<ProgressRow>();
  return r ?? { country_index: 0, category_index: 0, page: 1, paused_until: null };
}

async function setProgress(db: D1Database, p: ProgressRow): Promise<void> {
  await db
    .prepare(
      `UPDATE judgeme_progress SET country_index = ?, category_index = ?, page = ?,
        paused_until = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1`
    )
    .bind(p.country_index, p.category_index, p.page, p.paused_until)
    .run();
}

// --- categories ---------------------------------------------------------------
async function loadCategories(db: D1Database): Promise<CategoryRow[]> {
  const r = await db
    .prepare(
      "SELECT id, name, handle FROM judgeme_categories WHERE is_deepest = 1 ORDER BY id"
    )
    .all<CategoryRow>();
  return r.results ?? [];
}

async function fetchAndSeedCategories(db: D1Database): Promise<void> {
  const r = await fetchWithTimeout(`${JUDGEME_BASE}/all_categories.json?format=json`, {
    headers: { "user-agent": UA, accept: "application/json" },
  });
  if (!r.ok) return;
  let data: any;
  try {
    data = await r.json();
  } catch {
    return;
  }
  const items: any[] = data?.data ?? data ?? [];
  for (const c of items) {
    if (!c?.id || !c?.is_deepest) continue;
    await db
      .prepare(
        `INSERT INTO judgeme_categories (id, parent_id, level, name, handle, is_deepest, description)
         VALUES (?, ?, ?, ?, ?, 1, ?)
         ON CONFLICT(id) DO UPDATE SET
           parent_id = excluded.parent_id,
           level = excluded.level,
           name = excluded.name,
           handle = excluded.handle,
           is_deepest = 1,
           description = excluded.description`
      )
      .bind(
        c.id,
        c.parent_id ?? null,
        c.level ?? null,
        c.name ?? null,
        c.handle ?? null,
        c.description ?? null
      )
      .run();
  }
}

// --- search -------------------------------------------------------------------
async function fetchSearch(
  categoryId: number,
  storeCountry: string,
  page: number
): Promise<any | null> {
  const qs = new URLSearchParams({
    q: "",
    page: String(page),
    sort_by: "reviews_count",
    category_id: String(categoryId),
    country: "US",
    store_country: storeCountry,
    min_rating: "0",
    min_transparency: "80",
    min_authenticity: "0",
    currency: "USD",
  });
  try {
    const r = await fetchWithTimeout(`${JUDGEME_BASE}/search.json?${qs}`, {
      headers: { "user-agent": UA, accept: "application/json" },
    });
    if (!r.ok) return null;
    return await r.json();
  } catch {
    return null;
  }
}

// --- storefront probe (same logic as enrich.ts) -------------------------------
async function probeStorefrontCounts(
  storefront: string,
  myshopify: string
): Promise<{ product_count: number | null; collection_count: number | null; status: string }> {
  const tryHost = async (host: string): Promise<{ count: number | null; status: string }> => {
    if (!host) return { count: null, status: "no_host" };
    let total = 0;
    for (let page = 1; page <= MAX_PAGES; page++) {
      let r: Response;
      try {
        r = await fetchWithTimeout(
          `https://${host}/products.json?limit=${PER_PAGE}&page=${page}`,
          { headers: { "user-agent": UA } }
        );
      } catch {
        return { count: total, status: "request_failed" };
      }
      if (!r.ok) return { count: total, status: `http_${r.status}` };
      let data: any;
      try {
        data = await r.json();
      } catch {
        return { count: total, status: "bad_json" };
      }
      const items = Array.isArray(data?.products) ? data.products : [];
      total += items.length;
      if (items.length < PER_PAGE) return { count: total, status: "ok" };
    }
    return { count: total, status: "capped" };
  };

  let p = await tryHost(storefront);
  if (p.status !== "ok" && p.status !== "capped" && myshopify) {
    const fallback = await tryHost(myshopify);
    if (fallback.status === "ok" || fallback.status === "capped") p = fallback;
  }

  let collection_count: number | null = null;
  if (p.status === "ok" || p.status === "capped") {
    let total = 0;
    for (let page = 1; page <= MAX_PAGES; page++) {
      let r: Response;
      try {
        r = await fetchWithTimeout(
          `https://${storefront}/collections.json?limit=${PER_PAGE}&page=${page}`,
          { headers: { "user-agent": UA } }
        );
      } catch {
        break;
      }
      if (!r.ok) break;
      let data: any;
      try {
        data = await r.json();
      } catch {
        break;
      }
      const items = Array.isArray(data?.collections) ? data.collections : [];
      total += items.length;
      if (items.length < PER_PAGE) break;
    }
    collection_count = total;
  }
  return { product_count: p.count, collection_count, status: p.status };
}

// --- promotion to parsed_stores ----------------------------------------------
interface PromoteFields {
  storefront: string;
  product_count: number | null;
  collection_count: number | null;
  reviews_count: number | null;
  avg_rating: number | null;
  store_name: string | null;
  store_country: string | null;
}

async function promoteToParsedStores(db: D1Database, p: PromoteFields): Promise<void> {
  const existing = await db
    .prepare("SELECT id FROM parsed_stores WHERE website = ? LIMIT 1")
    .bind(p.storefront)
    .first();
  if (existing) {
    await db
      .prepare(
        `UPDATE parsed_stores SET
            product_count        = COALESCE(?, product_count),
            collection_count     = COALESCE(?, collection_count),
            judgeme_review_count = COALESCE(?, judgeme_review_count),
            judgeme_avg_rating   = COALESCE(?, judgeme_avg_rating),
            company_name         = COALESCE(company_name, ?),
            country_code         = COALESCE(country_code, ?),
            data_source = CASE
                WHEN data_source IS NULL THEN 'judgeme'
                WHEN instr(data_source, 'judgeme') > 0 THEN data_source
                ELSE data_source || '+judgeme'
            END
         WHERE website = ?`
      )
      .bind(
        p.product_count,
        p.collection_count,
        p.reviews_count,
        p.avg_rating,
        p.store_name,
        p.store_country,
        p.storefront
      )
      .run();
  } else {
    await db
      .prepare(
        `INSERT INTO parsed_stores (
            website, platform, data_source, product_count, collection_count,
            judgeme_review_count, judgeme_avg_rating, company_name, country_code
         ) VALUES (?, 'shopify', 'judgeme', ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        p.storefront,
        p.product_count,
        p.collection_count,
        p.reviews_count,
        p.avg_rating,
        p.store_name,
        p.store_country
      )
      .run();
  }
}

// --- fetch with timeout -------------------------------------------------------
async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs = SHOPIFY_TIMEOUT_MS
): Promise<Response> {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: ctl.signal });
  } finally {
    clearTimeout(t);
  }
}
