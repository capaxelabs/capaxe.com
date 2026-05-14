// Regex-based HTML field extraction. No DOM library — we keep the bundle small
// and rely on simple patterns because Shopify storefronts have predictable shape.
import {
  EMAIL_DOMAIN_BLACKLIST,
  EMAIL_RE,
  EMAIL_TLD_BLACKLIST,
  MYSHOPIFY_RE,
  NAME_BLACKLIST,
  PHONE_RE,
  SHOPIFY_CURRENCY_RE,
  SOCIAL_PATTERNS,
  THEME_DETECTION_PATTERNS,
  THEME_VERSION_RE,
} from "./detection";

// --- meta tag helpers ---------------------------------------------------------
const META_BY_PROPERTY = (prop: string) =>
  new RegExp(
    `<meta[^>]*?\\b(?:property|name)\\s*=\\s*["']${prop}["'][^>]*?\\bcontent\\s*=\\s*["']([^"']+)["']`,
    "i"
  );

// Match content first, property second (some sites put attrs in either order).
const META_BY_PROPERTY_REVERSED = (prop: string) =>
  new RegExp(
    `<meta[^>]*?\\bcontent\\s*=\\s*["']([^"']+)["'][^>]*?\\b(?:property|name)\\s*=\\s*["']${prop}["']`,
    "i"
  );

export function metaContent(html: string, name: string): string | null {
  for (const re of [META_BY_PROPERTY(name), META_BY_PROPERTY_REVERSED(name)]) {
    const m = html.match(re);
    if (m && m[1]) return m[1].trim();
  }
  return null;
}

// --- company / title / description -------------------------------------------
export function extractTitle(html: string): string | null {
  const m = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return m ? m[1]!.replace(/\s+/g, " ").trim() : null;
}

export function extractCompanyName(html: string): string | null {
  // Meta tags only — skip h1 (too often a hero/menu text on Shopify).
  const candidates = [
    metaContent(html, "og:site_name"),
    metaContent(html, "application-name"),
    metaContent(html, "author"),
    metaContent(html, "og:title"),
    extractTitle(html),
  ];
  for (const raw of candidates) {
    if (!raw) continue;
    const v = raw.replace(/\s+/g, " ").trim();
    if (!v) continue;
    if (NAME_BLACKLIST.has(v.toLowerCase())) continue;
    if (v.length < 2 || v.length > 120) continue;
    return v;
  }
  return null;
}

export function extractDescription(html: string): string | null {
  return metaContent(html, "description") ?? metaContent(html, "og:description");
}

// --- language / currency / theme version -------------------------------------
export function extractLanguage(html: string): string | null {
  const m = html.match(/<html[^>]*\blang\s*=\s*["']([^"']+)["']/i);
  if (!m || !m[1]) return null;
  return m[1].split("-")[0]!.toLowerCase().trim() || null;
}

export function extractCurrency(html: string): string | null {
  const m = html.match(SHOPIFY_CURRENCY_RE);
  return m ? m[1]!.toUpperCase() : null;
}

export function extractThemeVersion(html: string): string | null {
  const m = html.match(THEME_VERSION_RE);
  return m ? m[1]! : null;
}

// --- favicon / og:image ------------------------------------------------------
export function extractFavicon(html: string, base: string): string | null {
  // <link rel="...icon..." href="...">
  const m = html.match(
    /<link[^>]*?\brel\s*=\s*["'][^"']*icon[^"']*["'][^>]*?\bhref\s*=\s*["']([^"']+)["']/i
  );
  if (!m || !m[1]) return null;
  return resolveUrl(base, m[1]);
}

export function extractOgImage(html: string): string | null {
  return metaContent(html, "og:image");
}

// --- myshopify domain --------------------------------------------------------
export function extractMyshopifyDomain(html: string): string | null {
  const m = html.match(MYSHOPIFY_RE);
  return m ? m[0]!.toLowerCase() : null;
}

// --- social handles ----------------------------------------------------------
// Walk every <a href> and match against the per-platform regex set.
const HREF_RE = /<a[^>]*?\bhref\s*=\s*["']([^"']+)["']/gi;

export function extractSocials(
  html: string,
  baseUrl: string
): Record<string, string> {
  const out: Record<string, string> = {};
  let match: RegExpExecArray | null;
  while ((match = HREF_RE.exec(html)) !== null) {
    const href = match[1];
    if (!href) continue;
    const full = resolveUrl(baseUrl, href);
    for (const [platform, patterns] of Object.entries(SOCIAL_PATTERNS)) {
      if (out[platform]) continue;
      for (const re of patterns) {
        if (re.test(full)) {
          out[platform] = full;
          break;
        }
      }
    }
  }
  return out;
}

// --- email + phone -----------------------------------------------------------
const MAILTO_RE = /<a[^>]*?\bhref\s*=\s*["']mailto:([^"']+)["']/gi;

function isAcceptableEmail(addr: string | null | undefined): boolean {
  if (!addr) return false;
  const low = addr.toLowerCase();
  if (!low.includes("@")) return false;
  if (low.includes("noreply") || low.includes("no-reply") || low.includes("donotreply"))
    return false;
  const at = low.lastIndexOf("@");
  const local = low.slice(0, at);
  const domain = low.slice(at + 1);
  if (!local || !domain.includes(".")) return false;
  if (EMAIL_DOMAIN_BLACKLIST.has(domain)) return false;
  const tld = domain.split(".").pop() ?? "";
  if (!/^[a-z]+$/i.test(tld) || EMAIL_TLD_BLACKLIST.has(tld)) return false;
  if (local.startsWith("img_") || local.startsWith("logo_") || local.startsWith("icon_") ||
      local.startsWith("image_") || local.startsWith("asset_")) return false;
  return true;
}

export function extractEmail(html: string): string | null {
  // mailto: first
  let m: RegExpExecArray | null;
  MAILTO_RE.lastIndex = 0;
  while ((m = MAILTO_RE.exec(html)) !== null) {
    const raw = (m[1] ?? "").split("?")[0]!.trim();
    if (isAcceptableEmail(raw)) return raw.toLowerCase();
  }
  // body regex
  EMAIL_RE.lastIndex = 0;
  while ((m = EMAIL_RE.exec(html)) !== null) {
    const cand = m[0];
    if (isAcceptableEmail(cand)) return cand.toLowerCase();
  }
  return null;
}

export function extractPhone(html: string): string | null {
  const m = html.match(PHONE_RE);
  if (!m || !m[1]) return null;
  const raw = m[1].replace(/\s+/g, " ").trim();
  return raw ? raw.slice(0, 50) : null;
}

// --- theme name --------------------------------------------------------------
// Returns the raw theme name string detected on the page; resolution to themes.id
// happens in lib/db.ts (needs a D1 lookup).
export function extractThemeName(html: string): string | null {
  // <meta name="theme-name">
  const meta = metaContent(html, "theme-name");
  if (meta) return meta.trim();

  for (const re of THEME_DETECTION_PATTERNS) {
    const m = html.match(re);
    if (m && m[1] && /name|handle/i.test(re.source)) return m[1].trim();
  }
  return null;
}

// --- helpers -----------------------------------------------------------------
export function resolveUrl(base: string, href: string): string {
  try {
    return new URL(href, base).toString();
  } catch {
    return href;
  }
}

export function normalizeDomain(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]!
    .replace(/\/$/, "");
}
