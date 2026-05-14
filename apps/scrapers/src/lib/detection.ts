// Detection patterns ported from shopify-leads/scraper_config.py.

// Social platform → array of regexes (URL substrings) to match.
export const SOCIAL_PATTERNS: Record<string, RegExp[]> = {
  facebook: [
    /facebook\.com\/(?!sharer|plugins|login)([^/\s"']+)/i,
    /fb\.com\/(?!sharer|plugins|login)([^/\s"']+)/i,
    /facebook\.com\/pages\/([^/\s"']+)/i,
    /facebook\.com\/groups\/([^/\s"']+)/i,
  ],
  twitter: [
    /twitter\.com\/(?!intent|share|login)([^/\s"']+)/i,
    /x\.com\/(?!intent|share|login)([^/\s"']+)/i,
  ],
  instagram: [
    /instagram\.com\/(?!accounts\/login)([^/\s"']+)/i,
    /ig\.com\/([^/\s"']+)/i,
  ],
  linkedin: [
    /linkedin\.com\/company\/([^/\s"']+)/i,
    /linkedin\.com\/in\/([^/\s"']+)/i,
    /linkedin\.com\/(?!share)([^/\s"']+)/i,
  ],
  youtube: [
    /youtube\.com\/(?!watch|channel|user|c\/)([^/\s"']+)/i,
    /youtu\.be\/([^/\s"']+)/i,
  ],
  tiktok: [
    /tiktok\.com\/(?!login)([^/\s"']+)/i,
    /vm\.tiktok\.com\/([^/\s"']+)/i,
  ],
  pinterest: [
    /pinterest\.com\/(?!pin)([^/\s"']+)/i,
    /pin\.it\/([^/\s"']+)/i,
  ],
};

// Theme markers in inline HTML/scripts.
export const THEME_DETECTION_PATTERNS: RegExp[] = [
  /theme[_-]?name["']?\s*[:=]\s*["']([^"']+)["']/i,
  /theme[_-]?id["']?\s*[:=]\s*["']([^"']+)["']/i,
  /Shopify\.theme\.name\s*=\s*["']([^"']+)["']/i,
  /theme[_-]?handle["']?\s*[:=]\s*["']([^"']+)["']/i,
  /window\.Shopify\.theme\s*=\s*\{[^}]*"name"\s*:\s*"([^"]+)"/i,
  /data-theme-name=["']([^"']+)["']/i,
  /data-theme-id=["']([^"']+)["']/i,
];

// Storeleads-equivalent regexes.
export const MYSHOPIFY_RE = /([a-z0-9][a-z0-9-]+)\.myshopify\.com/i;
export const SHOPIFY_CURRENCY_RE =
  /Shopify\.currency\s*=\s*\{[^}]*["']active["']\s*:\s*["']([A-Z]{3})/i;
export const THEME_VERSION_RE = /theme[_-]?version["']?\s*[:=]\s*["']([^"']+)/i;

// Email + phone regexes.
export const EMAIL_RE = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,24}\b/g;
export const PHONE_RE = /tel:([+\d\s()\-.]+)/i;

// Blacklists for false positives.
export const EMAIL_DOMAIN_BLACKLIST = new Set([
  "sentry.io", "wixpress.com", "shopify.com", "judgeme.com", "judge.me",
  "yotpo.com", "klaviyo.com", "gorgias.com", "gorgias.help",
  "notifyboost.net", "smile.io", "recharge-shopify.com", "rechargeapps.com",
  "trustpilot.com", "google.com", "facebook.com", "instagram.com",
  "googlemail.com", "sendgrid.net", "mailgun.org", "amazonaws.com",
  "shopifypartners.com", "loox.io", "okendo.io",
]);

export const EMAIL_TLD_BLACKLIST = new Set([
  "png", "jpg", "jpeg", "gif", "svg", "webp", "ico",
  "css", "js", "ts", "tsx", "jsx", "html", "json", "xml", "pdf", "mp4", "mp3",
  "woff", "woff2", "ttf", "otf", "eot",
]);

export const NAME_BLACKLIST = new Set([
  "home", "shop", "store", "menu", "search", "cart", "account",
  "hamburger", "navigation", "nav", "skip to content", "skip to main content",
  "open menu", "close menu", "open cart", "close cart", "loading...",
  "sign in", "sign up", "log in", "login", "logout", "register",
  "checkout", "view cart", "your cart", "cart 0", "wishlist",
  "click here", "more", "read more", "back to top", "subscribe",
  "untitled", "untitled document", "default", "shopify",
]);

// Judge.me search constants.
export const JUDGEME_SEARCH = "https://judge.me/reviews/search.json";
export const JUDGEME_COUNTRIES = [
  "US", "GB", "CA", "AU", "DE", "FR", "IN", "NL", "NZ", "IT", "ES",
];

// Storefront probe.
export const PER_PAGE = 250;
export const MAX_PAGES = 40;
export const SHOPIFY_TIMEOUT_MS = 8000;
export const TRANSIENT_HTTP_CODES = new Set([429, 500, 502, 503, 504]);

// User agent (rotation handled at fetch time).
export const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36";

// Judge.me identifier types → social platform key.
export const JUDGEME_IDENTIFIER_TYPES: Record<number, string> = {
  1: "twitter",
  2: "facebook",
  3: "instagram",
  4: "email",
  6: "pinterest",
  7: "phone",
  8: "youtube",
  9: "linkedin",
  10: "tiktok",
};

// Shopify app token regex (extracts slug from app store URL).
export const APP_TOKEN_FROM_URL = /apps\.shopify\.com\/([a-z0-9-]+)/i;
export const INVALID_APP_TOKENS = new Set([
  "partners", "categories", "developer", "browse", "stories", "experts",
]);
