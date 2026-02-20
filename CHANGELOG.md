# Changelog

## 2026-02-20 — SEO Overhaul

### Bug Fixes
- Fixed robots meta rendering 3 separate tags when both noindex/nofollow were set; added default `index, follow` for normal pages
- Fixed JSON-LD structured data only supporting single schema — now supports arrays for multiple schemas per page
- Fixed OG image path mismatch (`/og-image.jpg` → `/og.jpg`)
- Fixed double-pipe title bug on contact, retainer, and case-studies pages (e.g. `Contact Us | Capaxe Labs | Capaxe Labs`)
- Fixed blog index using `contentType: "blog"` which incorrectly set `og:type=article` and added BlogPosting schema to a listing page
- Fixed BlogPost layout using hardcoded `pathname: "/blog"` instead of actual post URL for canonical

### SEO Metadata
- Rewrote title tags and meta descriptions across all pages with keyword-rich, 150-160 character descriptions
- Migrated homepage and consultation page from raw props to `createSEO()` utility
- Added keywords to pages that were missing them (contact, case-studies, consultation, FAQ)

### Structured Data
- Added Organization schema to homepage
- Added FAQPage schema to FAQ, retainer, and shopify-support pages
- Added Breadcrumb schema to blog posts, case study pages
- Added CaseStudy (Article) schema to case study detail pages
- Combined multiple schemas as arrays where applicable (e.g. Service + FAQPage)

### Blog URL Restructuring
- Renamed 51 blog MDX files to clean slugs (stripped `YYYYMMDD-` date prefixes)
- Added 301 redirects for all old URLs in `astro.config.mjs`
- 5 date-only files mapped to meaningful slugs derived from titles

### New Landing Pages
- `/hire-shopify-developer` — targeting "hire shopify developer" keyword
- `/services/custom-shopify-app-development` — targeting "custom shopify app development"
- `/services/shopify-migration` — targeting "shopify migration service"
- `/shopify-plus` — targeting "shopify plus development agency"
- `/shopify-support` — Shopify backend support services page

### Other
- Added sitemap filter to exclude utility pages (`/color`, `/health`, `/plans`, `/press`)
- Updated footer navigation with new landing page links
