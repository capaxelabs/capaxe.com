// Storefront enrichment — TS port of marketing/shopify-leads/enrich.py.
//
// Per store:
//   1. GET https://<domain>                  -> theme/apps/socials/company/meta
//   2. GET https://<domain>/products.json    -> product_count
//   3. GET https://<domain>/collections.json -> collection_count
//   4. UPDATE parsed_stores
//
// Transient errors (HTTP 429, 5xx) leave processed_at NULL so the row is
// retried on the next invocation. Permanent failures (4xx other than 429,
// connection errors) mark processed so the row exits the queue.
import type { Env } from "./index";
import {
  MAX_PAGES,
  PER_PAGE,
  SHOPIFY_TIMEOUT_MS,
  TRANSIENT_HTTP_CODES,
  UA,
} from "./lib/detection";
import {
  extractCompanyName,
  extractCurrency,
  extractDescription,
  extractEmail,
  extractFavicon,
  extractLanguage,
  extractMyshopifyDomain,
  extractOgImage,
  extractPhone,
  extractSocials,
  extractThemeName,
  extractThemeVersion,
  extractTitle,
} from "./lib/extract";
import {
  type AppsLookup,
  loadAppsLookup,
  pickEnrichTargets,
  resolveTheme,
  writeEnrichment,
} from "./lib/db";

export interface EnrichResult {
  picked: number;
  ok: number;
  transient: number;
  permanent: number;
  elapsed_ms: number;
}

// Time budget for one cron invocation. Leave headroom below the 30s CPU limit.
const RUN_BUDGET_MS = 25_000;
// Process N stores concurrently within one invocation. Each store hits a
// different domain (so no per-host rate-limit risk), but they share the
// Worker's subrequest budget — keep this <= 8 on the paid plan (1000 subreq
// limit / ~5 subreq per store = ~200 stores max).
const CONCURRENCY = 5;

export async function enrichBatch(
  env: Env,
  opts: { limit: number }
): Promise<EnrichResult> {
  const started = Date.now();
  const targets = await pickEnrichTargets(env.LEADS_DB, opts.limit);
  if (targets.length === 0) {
    return { picked: 0, ok: 0, transient: 0, permanent: 0, elapsed_ms: 0 };
  }

  const apps = await loadAppsLookup(env.LEADS_DB);

  let ok = 0;
  let transient = 0;
  let permanent = 0;
  let cursor = 0;

  // Run CONCURRENCY workers, each pulling from the targets array sequentially.
  // This keeps memory bounded and respects the time budget.
  async function worker() {
    while (true) {
      if (Date.now() - started > RUN_BUDGET_MS) return;
      const i = cursor++;
      if (i >= targets.length) return;
      const website = targets[i]!;
      const outcome = await enrichOne(env.LEADS_DB, website, apps);
      if (outcome === "ok") ok++;
      else if (outcome === "transient") transient++;
      else permanent++;
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, targets.length) }, () => worker())
  );

  return {
    picked: targets.length,
    ok,
    transient,
    permanent,
    elapsed_ms: Date.now() - started,
  };
}

type OneOutcome = "ok" | "transient" | "permanent";

async function enrichOne(
  db: D1Database,
  website: string,
  apps: AppsLookup
): Promise<OneOutcome> {
  const url = website.startsWith("http") ? website : `https://${website}`;
  const host = url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

  // Kick off the storefront probes IN PARALLEL with the HTML fetch.
  // All three target the same host (Shopify CDN handles fanout fine), so
  // there's no extra rate-limit cost vs. sequential — but we save ~50% wall time.
  const probePromise = probeStorefrontCounts(host).catch(() => ({
    product_count: null,
    collection_count: null,
    product_probe_status: "error",
  }));

  // 1. Fetch storefront HTML
  let html: string;
  try {
    const r = await fetchWithTimeout(url, {
      headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml" },
      redirect: "follow",
    });
    if (!r.ok) {
      // Drain the probe promise so we don't leak hanging fetches.
      probePromise.catch(() => {});
      const code = r.status;
      const isTransient = TRANSIENT_HTTP_CODES.has(code);
      if (isTransient) return "transient";
      await db
        .prepare(
          `UPDATE parsed_stores SET error = ?, processed_at = CURRENT_TIMESTAMP
             WHERE website = ?`
        )
        .bind(`HTTP ${code}`, website)
        .run();
      return "permanent";
    }
    html = await r.text();
  } catch (err) {
    probePromise.catch(() => {});
    // Connection-level: permanent (dead domains, SSL issues, DNS, timeouts)
    const msg = (err as Error)?.message ?? "request_failed";
    await db
      .prepare(
        `UPDATE parsed_stores SET error = ?, processed_at = CURRENT_TIMESTAMP
           WHERE website = ?`
      )
      .bind(`request_failed: ${msg.slice(0, 80)}`, website)
      .run();
    return "permanent";
  }

  // 2. Extract fields (synchronous parse while probe is still in flight)
  const themeName = extractThemeName(html);
  const themeResolution = resolveTheme(db, themeName);

  // App detection: regex each known pattern against the page text.
  const appsIds: number[] = [];
  const blob = html.toLowerCase();
  for (const a of apps.patterns) {
    try {
      if (new RegExp(a.pattern, "i").test(blob)) appsIds.push(a.id);
    } catch {
      if (blob.includes(a.pattern.toLowerCase())) appsIds.push(a.id);
    }
  }

  // 3. Now await both the probe (network) and the theme resolution (D1)
  const [probe, { theme_id, theme_raw }] = await Promise.all([
    probePromise,
    themeResolution,
  ]);

  await writeEnrichment(db, {
    website,
    company_name: extractCompanyName(html),
    title: extractTitle(html),
    description: extractDescription(html),
    theme_id,
    theme_raw,
    theme_version: extractThemeVersion(html),
    apps_ids: appsIds,
    social_handles: extractSocials(html, url),
    product_count: probe.product_count,
    collection_count: probe.collection_count,
    myshopify_domain: extractMyshopifyDomain(html),
    language: extractLanguage(html),
    currency: extractCurrency(html),
    favicon_url: extractFavicon(html, url),
    og_image_url: extractOgImage(html),
    email: extractEmail(html),
    phone: extractPhone(html),
    error: null,
  });
  return "ok";
}

// --- product / collection probe -----------------------------------------------
async function probeStorefrontCounts(
  host: string
): Promise<{ product_count: number | null; collection_count: number | null }> {
  // Run both probes in parallel — same host, no extra rate-limit risk.
  const [productCount, collectionCount] = await Promise.all([
    countEndpoint(host, "products.json", "products"),
    countEndpoint(host, "collections.json", "collections"),
  ]);
  // If products probe failed (404, host unreachable), trust collections null too
  return {
    product_count: productCount,
    collection_count: productCount === null ? null : collectionCount,
  };
}

async function countEndpoint(
  host: string,
  path: string,
  key: string
): Promise<number | null> {
  let total = 0;
  for (let page = 1; page <= MAX_PAGES; page++) {
    const u = `https://${host}/${path}?limit=${PER_PAGE}&page=${page}`;
    let r: Response;
    try {
      r = await fetchWithTimeout(u, { headers: { "user-agent": UA } });
    } catch {
      return null;
    }
    if (!r.ok) return null;
    let data: any;
    try {
      data = await r.json();
    } catch {
      return null;
    }
    const items = Array.isArray(data?.[key]) ? data[key] : [];
    total += items.length;
    if (items.length < PER_PAGE) return total;
  }
  return total; // capped
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
