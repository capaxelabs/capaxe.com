// Single-domain combined lookup. Returns everything we know about one domain
// across parsed_stores + judgeme_stores + raw_stores, plus a live judge.me
// search.json probe when we have no local record.
import type { Env } from "./index";
import { normalizeDomain } from "./lib/extract";
import { JUDGEME_SEARCH, UA } from "./lib/detection";

export interface LookupResult {
  domain: string;
  parsed_stores: Record<string, unknown> | null;
  judgeme_stores: Record<string, unknown> | null;
  raw_stores: { rank: string | null; website_popularity: string | null; scraped_at: string | null } | null;
  judgeme_live: unknown;
  apps: Array<{ id: number; name: string; vendor_name: string | null }> | null;
  theme: { id: number; name: string; vendor: string | null; style_handle: string | null } | null;
}

export async function lookupOne(env: Env, domain: string): Promise<LookupResult> {
  const d = normalizeDomain(domain);
  const db = env.LEADS_DB;

  const ps = await db
    .prepare("SELECT * FROM parsed_stores WHERE website = ? LIMIT 1")
    .bind(d)
    .first<Record<string, unknown>>();

  const js = await db
    .prepare("SELECT * FROM judgeme_stores WHERE storefront = ? LIMIT 1")
    .bind(d)
    .first<Record<string, unknown>>();

  const rs = await db
    .prepare(
      "SELECT rank, website_popularity, scraped_at FROM raw_stores WHERE website = ? LIMIT 1"
    )
    .bind(d)
    .first<{ rank: string | null; website_popularity: string | null; scraped_at: string | null }>();

  // Resolve apps if we have them
  let apps: LookupResult["apps"] = null;
  if (ps?.apps) {
    try {
      const ids = JSON.parse(String(ps.apps));
      if (Array.isArray(ids) && ids.length > 0) {
        const placeholders = ids.map(() => "?").join(",");
        const r = await db
          .prepare(`SELECT id, name, vendor_name FROM apps WHERE id IN (${placeholders}) ORDER BY name`)
          .bind(...ids)
          .all<{ id: number; name: string; vendor_name: string | null }>();
        apps = r.results ?? [];
      }
    } catch {
      /* ignore */
    }
  }

  // Resolve theme if we have one
  let theme: LookupResult["theme"] = null;
  if (ps?.theme_id) {
    const t = await db
      .prepare("SELECT id, name, vendor, style_handle FROM themes WHERE id = ?")
      .bind(ps.theme_id)
      .first<{ id: number; name: string; vendor: string | null; style_handle: string | null }>();
    if (t) theme = t;
  }

  // Live judge.me search as a fallback if we have nothing local
  let judgemeLive: unknown = null;
  if (!js && !ps) {
    const stem = d.split(".")[0] ?? d;
    const url = `${JUDGEME_SEARCH}?q=${encodeURIComponent(stem)}&per_page=10`;
    try {
      const r = await fetch(url, { headers: { "user-agent": UA, accept: "application/json" } });
      if (r.ok) {
        const data: any = await r.json();
        const results = data?.data?.search_results ?? [];
        judgemeLive =
          results.find(
            (x: any) => (x.review_site_slug ?? "").toLowerCase().replace(/^www\./, "") === d
          ) ?? null;
      }
    } catch {
      /* ignore */
    }
  }

  return {
    domain: d,
    parsed_stores: ps ?? null,
    judgeme_stores: js ?? null,
    raw_stores: rs ?? null,
    judgeme_live: judgemeLive,
    apps,
    theme,
  };
}
