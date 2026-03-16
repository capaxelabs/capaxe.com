## Features
- [x] Fine-tune bento grid layouts on individual service pages for visual variety
- [x] Add subtle entrance animations to bento tiles (intersection observer)
- [x] Review case study detail page ([id].astro) for bento consistency

## Bug Fixes
- [x] Verify dark-on-dark contrast for select/option elements in consultation form
- [x] Fix ContactFormReact dark mode contrast (hardcoded light colors → theme-aware bento classes)
- [x] Test all modals (Cal.com booking, chat contact) on dark background

## Refactoring
- [x] Bento Box theme redesign - global CSS, all pages, all components
- [x] Landing page visual enhancements - hero animations, scroll reveal, staggered cards, button polish

## SEO Action Plan — Phase 1 (This Week)
- [x] Update title tags per SEO audit recommendations (all key pages)
- [x] Update meta descriptions per SEO audit recommendations (all key pages)
- [x] Fix duplicate H1 on /blog (was "Insights & Articles" + "Our Blog", now single "Shopify Development Blog")
- [x] Fix generic H1 on /services ("Professional Services" → "Shopify Development Services")
- [x] Fix generic H1 on /retainer ("Join Our Shopify Success Community" → "Shopify Retainer Plans")
- [x] Fix generic H1 on /about ("About Us" → "About Capaxe Labs")
- [x] Update homepage H1 to include primary keyword "Shopify Development Agency"
- [x] Update CLD9 case study title and description
- [x] Update Stripe/Plaid page meta description
- [x] Fix image alt text site-wide (added descriptive "logo" suffix to dynamic fallbacks in case studies)
- [x] Add FAQ schema to remaining FAQ sections (verified — all FAQ pages already have schema)

## SEO Action Plan — Phase 2 (April-June 2026)
- [x] Publish "How Much Does Shopify Development Cost?" blog guide
- [x] Build "Shopify Development Agency" pillar page (/shopify-development-agency)
- [x] Publish "WooCommerce to Shopify Migration Guide"
- [x] Create Shopify Hydrogen Development service page (/services/shopify-hydrogen-development)
- [x] Publish "Best Shopify Subscription Apps" comparison post
- [x] Implement auto-breadcrumb schema on all pages (via SEO.astro pathname-based generation)
- [x] Get listed on Clutch
- [ ] Get listed on DesignRush
- [ ] Get listed on G2

## Programmatic SEO Expansion (Completed)
- [x] Expand city pages to UK (10), EU (10), India (10) — 200 city pages total
- [x] Create app-seo.ts config: 30 Shopify apps, 60 comparisons, 16 categories
- [x] Create app integration pages /shopify/apps/[app] — 30 pages
- [x] Create app service pages /shopify/apps/[app]/[service] — 87 pages
- [x] Create comparison pages /shopify/compare/[slug] — 60 pages
- [x] Create best-of category pages /shopify/best/[category] — 16 pages
- [x] Build verification — 548 total HTML pages, zero errors

## FAQ Schema Expansion (Completed)
- [x] Add contextual FAQ sections + FAQSchema to case-studies/[id].astro
- [x] Add contextual FAQ sections + FAQSchema to projects/[id].astro
- [x] Add contextual FAQ sections + FAQSchema to shopify/apps/[app].astro
- [x] Add contextual FAQ sections + FAQSchema to shopify/compare/[slug].astro
- [x] Add contextual FAQ sections + FAQSchema to shopify/best/[category].astro
- [x] Add contextual FAQ sections + FAQSchema to shopify/apps/[app]/[service].astro
- [x] Add contextual FAQ sections + FAQSchema to 5 location pages (US, Canada, UK, EU, India)
- [x] Add contextual FAQ sections + FAQSchema to shopify/[service]/[city].astro

## SEO Overhaul (Completed)
- [x] Fix robots meta triple-output bug in SEO.astro
- [x] Add schema array support in SEO.astro
- [x] Fix OG image mismatch in site.ts
- [x] Fix double-pipe title bugs (contact, retainer, case-studies)
- [x] Fix blog index wrong contentType
- [x] Fix BlogPost pathname to use actual URL
- [x] Rewrite title tags & meta descriptions on all pages
- [x] Add structured data (Organization, FAQ, Breadcrumb, CaseStudy schemas)
- [x] Restructure blog URLs (rename 51 files, add 301 redirects)
- [x] Create landing page: /hire-shopify-developer
- [x] Create landing page: /services/custom-shopify-app-development
- [x] Create landing page: /services/shopify-migration
- [x] Create landing page: /shopify-plus
- [x] Add footer nav entries for new pages
- [x] Sitemap filter for utility pages
- [x] Final build verification
