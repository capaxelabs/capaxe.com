// storeleads.app dump importer — TS port of marketing/shopify-leads/storeleads_import.py.
//
// Accepts a raw POST body that's one or more JSON objects concatenated
// (the shape captured from a storeleads.app browser session). For each domain:
//   - Upserts apps[] into the master `apps` table by token.
//   - Resolves matched apps to app_ids and stores them as a JSON array.
//   - Resolves theme (name + style) to themes.id when matchable.
//   - UPSERTs into parsed_stores, never clobbering crawler-written fields.
//
// Returns counts so the caller knows how many rows were touched.
import type { Env } from "./index";
import { JUDGEME_IDENTIFIER_TYPES } from "./lib/detection";
import {
  resolveTheme,
  slugifyName,
  tokenFromAppStoreUrl,
  upsertApp,
} from "./lib/db";

export interface StoreleadsImportResult {
  parsed_objects: number;
  total_domains: number;
  updated: number;
  inserted: number;
  apps_seen: number;
  errors: number;
}

interface StoreleadsApp {
  token?: string;
  name?: string;
  app_store_url?: string;
  vendor_name?: string;
  vendor_url?: string;
  vendor_website?: string;
  vendor_address?: string;
  icon_url?: string;
  avg?: string | number;
  inst?: number;
  inst30d?: number;
  inst90d?: number;
  rc?: number;
  cat?: string[];
  created_at?: string;
  finstat?: string;
  iat?: string;
  description?: string;
}

interface StoreleadsIdentifier {
  type?: number;
  full_value?: string;
  value?: string;
}

interface StoreleadsDomain {
  name?: string;        // www.brand.com
  tld1?: string;        // brand.com
  pdom?: string;        // brand.myshopify.com
  merchantName?: string;
  t?: string;           // title
  md?: string;          // meta description
  countryCode?: string;
  cn?: string;          // country full name
  reg?: string;         // region
  aal1?: string;        // state
  city?: string;
  loc?: string;
  lang?: string;
  langn?: string;
  createdAt?: string;
  lcat?: string;        // last crawled
  lplan?: string;       // plan (Shopify Plus, etc.)
  themeName?: string;
  ltheme?: string;
  themeStyle?: string;
  themeVersion?: string;
  themeVendor?: string;
  apf?: string;
  erf?: string;
  eryf?: string;
  minpf?: string;
  maxpf?: string;
  curr?: string;
  rank?: number;
  pc?: number;
  pc30?: number;
  pc90?: number;
  pc365?: number;
  fav?: string;
  ogimage?: string;
  has_cms?: boolean;
  headless?: boolean;
  identifiers?: StoreleadsIdentifier[];
  apps?: StoreleadsApp[];
  tags?: unknown;
  tech?: unknown;
  tprs?: { review_count?: number; avg_rating?: number };
}

export async function importStoreleadsDump(
  env: Env,
  body: string
): Promise<StoreleadsImportResult> {
  const db = env.LEADS_DB;
  const objects = parseConcatenatedJson(body);
  let totalDomains = 0;
  let updated = 0;
  let inserted = 0;
  let appsSeen = 0;
  let errors = 0;

  const seen = new Set<string>();
  for (const obj of objects) {
    const domains: StoreleadsDomain[] = (obj?.domains as StoreleadsDomain[]) ?? [];
    for (const d of domains) {
      const domain = normalizeDomain(d.tld1 ?? d.name);
      if (!domain || seen.has(domain)) continue;
      seen.add(domain);
      totalDomains++;

      try {
        // 1. Upsert all apps; collect resolved IDs
        const appIds: number[] = [];
        for (const a of d.apps ?? []) {
          const token = a.token ?? tokenFromAppStoreUrl(a.app_store_url) ?? slugifyName(a.name);
          if (!token) continue;
          appsSeen++;
          const ratingNum =
            typeof a.avg === "string" ? Number(a.avg) || null : (a.avg ?? null);
          const id = await upsertApp(db, {
            token,
            name: a.name ?? null,
            app_store_url: a.app_store_url ?? null,
            vendor_name: a.vendor_name ?? null,
            vendor_url: a.vendor_url ?? null,
            vendor_website: a.vendor_website ?? null,
            vendor_address: a.vendor_address ?? null,
            icon_url: a.icon_url ?? null,
            avg_rating: ratingNum,
            install_count: a.inst ?? null,
            install_count_30d: a.inst30d ?? null,
            install_count_90d: a.inst90d ?? null,
            review_count: a.rc ?? null,
            categories_json: a.cat ? JSON.stringify(a.cat) : null,
            app_first_seen: a.created_at ?? a.finstat ?? null,
            app_last_updated: a.iat ?? null,
            description: a.description ?? null,
          });
          if (id > 0) appIds.push(id);
        }
        const appsJson =
          appIds.length > 0
            ? JSON.stringify([...new Set(appIds)].sort((a, b) => a - b))
            : null;

        // 2. Resolve theme to FK
        const { theme_id, theme_raw } = await resolveTheme(
          db,
          d.themeName ?? d.ltheme ?? null,
          d.themeStyle
        );

        // 3. Build socials JSON from identifiers
        const socialsObj: Record<string, string> = {};
        let email: string | null = null;
        let phone: string | null = null;
        for (const idn of d.identifiers ?? []) {
          const key = idn.type != null ? JUDGEME_IDENTIFIER_TYPES[idn.type] : undefined;
          const val = idn.full_value ?? idn.value ?? null;
          if (!key || !val) continue;
          if (key === "email" && !email) {
            email = val.toLowerCase();
          } else if (key === "phone" && !phone) {
            phone = val;
          } else if (key !== "email" && key !== "phone" && !socialsObj[key]) {
            socialsObj[key] = val;
          }
        }

        // 4. Upsert parsed_stores
        const outcome = await upsertParsedStore(db, domain, {
          merchant_name: d.merchantName ?? null,
          title: d.t ?? null,
          description: d.md ?? null,
          myshopify_domain: d.pdom ?? null,
          country_code: d.countryCode ?? null,
          country: d.cn ?? null,
          region: d.reg ?? null,
          state: d.aal1 ?? null,
          city: d.city ?? null,
          location: d.loc ?? null,
          language: d.langn ?? d.lang ?? null,
          store_created_at: d.createdAt ?? null,
          storeleads_last_crawled: d.lcat ?? null,
          plan: d.lplan ?? null,
          theme_id,
          theme_raw,
          theme_version: d.themeVersion ?? null,
          avg_price_formatted: d.apf ?? null,
          est_revenue_formatted: d.erf ?? null,
          est_yearly_revenue_formatted: d.eryf ?? null,
          min_price_formatted: d.minpf ?? null,
          max_price_formatted: d.maxpf ?? null,
          currency: d.curr ?? null,
          storeleads_rank: d.rank ?? null,
          product_count: d.pc ?? null,
          product_count_30d: d.pc30 ?? null,
          product_count_90d: d.pc90 ?? null,
          product_count_365d: d.pc365 ?? null,
          email,
          phone,
          social_handles: Object.keys(socialsObj).length ? JSON.stringify(socialsObj) : null,
          favicon_url: d.fav ?? null,
          og_image_url: d.ogimage ?? null,
          has_cms: d.has_cms != null ? (d.has_cms ? 1 : 0) : null,
          headless: d.headless != null ? (d.headless ? 1 : 0) : null,
          apps: appsJson,
          judgeme_review_count: d.tprs?.review_count ?? null,
          judgeme_avg_rating: d.tprs?.avg_rating ?? null,
          tags_json: d.tags ? JSON.stringify(d.tags) : null,
          tech_json: d.tech ? JSON.stringify(d.tech) : null,
          identifiers_json: d.identifiers ? JSON.stringify(d.identifiers) : null,
          storeleads_raw_json: JSON.stringify(d),
        });
        if (outcome === "updated") updated++;
        else inserted++;
      } catch (err) {
        errors++;
        console.error("storeleads upsert failed for", domain, err);
      }
    }
  }

  return {
    parsed_objects: objects.length,
    total_domains: totalDomains,
    updated,
    inserted,
    apps_seen: appsSeen,
    errors,
  };
}

// --- helpers ------------------------------------------------------------------
function parseConcatenatedJson(text: string): any[] {
  const out: any[] = [];
  let i = 0;
  while (i < text.length) {
    // skip whitespace
    while (i < text.length && /\s/.test(text[i]!)) i++;
    if (i >= text.length) break;
    if (text[i] !== "{" && text[i] !== "[") break;

    // scan for matching brace depth
    const start = i;
    const open = text[i];
    const close = open === "{" ? "}" : "]";
    let depth = 0;
    let inString = false;
    let escape = false;
    for (; i < text.length; i++) {
      const ch = text[i];
      if (inString) {
        if (escape) {
          escape = false;
        } else if (ch === "\\") {
          escape = true;
        } else if (ch === '"') {
          inString = false;
        }
        continue;
      }
      if (ch === '"') {
        inString = true;
      } else if (ch === open) {
        depth++;
      } else if (ch === close) {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
      }
    }
    const chunk = text.slice(start, i);
    try {
      out.push(JSON.parse(chunk));
    } catch {
      break;
    }
  }
  return out;
}

function normalizeDomain(raw: string | null | undefined): string | null {
  if (!raw) return null;
  return raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]!
    .replace(/\/$/, "") || null;
}

// Map of fields written to parsed_stores. All optional.
interface ParsedStoreFields {
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
  storeleads_last_crawled: string | null;
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
  email: string | null;
  phone: string | null;
  social_handles: string | null;
  favicon_url: string | null;
  og_image_url: string | null;
  has_cms: number | null;
  headless: number | null;
  apps: string | null;
  judgeme_review_count: number | null;
  judgeme_avg_rating: number | null;
  tags_json: string | null;
  tech_json: string | null;
  identifiers_json: string | null;
  storeleads_raw_json: string | null;
}

const TARGET_COLS: (keyof ParsedStoreFields)[] = [
  "merchant_name", "title", "description", "myshopify_domain",
  "country_code", "country", "region", "state", "city", "location",
  "language", "store_created_at", "storeleads_last_crawled", "plan",
  "theme_id", "theme_raw", "theme_version",
  "avg_price_formatted", "est_revenue_formatted", "est_yearly_revenue_formatted",
  "min_price_formatted", "max_price_formatted", "currency",
  "storeleads_rank", "product_count", "product_count_30d",
  "product_count_90d", "product_count_365d",
  "email", "phone", "social_handles",
  "favicon_url", "og_image_url", "has_cms", "headless",
  "apps", "judgeme_review_count", "judgeme_avg_rating",
  "tags_json", "tech_json", "identifiers_json", "storeleads_raw_json",
];

async function upsertParsedStore(
  db: D1Database,
  domain: string,
  fields: ParsedStoreFields
): Promise<"updated" | "inserted"> {
  const existing = await db
    .prepare("SELECT id FROM parsed_stores WHERE website = ? LIMIT 1")
    .bind(domain)
    .first();

  // Merge social_handles with existing JSON (crawler-written keys win)
  if (existing && fields.social_handles) {
    const cur = await db
      .prepare("SELECT social_handles FROM parsed_stores WHERE website = ?")
      .bind(domain)
      .first<{ social_handles: string | null }>();
    let existingObj: Record<string, string> = {};
    if (cur?.social_handles) {
      try {
        existingObj = JSON.parse(cur.social_handles) ?? {};
      } catch {
        /* */
      }
    }
    let incoming: Record<string, string> = {};
    try {
      incoming = JSON.parse(fields.social_handles) ?? {};
    } catch {
      /* */
    }
    const merged: Record<string, string> = { ...incoming, ...existingObj };
    fields.social_handles = Object.keys(merged).length
      ? JSON.stringify(merged)
      : null;
  }

  const setClauses = TARGET_COLS.map((c) => `"${c}" = ?`).join(", ");
  const binds = TARGET_COLS.map((c) => fields[c]);

  if (existing) {
    await db
      .prepare(
        `UPDATE parsed_stores SET ${setClauses},
            storeleads_imported_at = CURRENT_TIMESTAMP,
            data_source = CASE
                WHEN data_source IS NULL THEN 'crawler+storeleads'
                WHEN instr(data_source, 'storeleads') > 0 THEN data_source
                ELSE data_source || '+storeleads'
            END
         WHERE website = ?`
      )
      .bind(...binds, domain)
      .run();
    return "updated";
  }

  const cols = ["website", "data_source", "storeleads_imported_at", ...TARGET_COLS]
    .map((c) => `"${c}"`)
    .join(", ");
  const placeholders = new Array(TARGET_COLS.length + 3).fill("?").join(", ");
  await db
    .prepare(`INSERT INTO parsed_stores (${cols}) VALUES (${placeholders})`)
    .bind(domain, "storeleads", new Date().toISOString(), ...binds)
    .run();
  return "inserted";
}
