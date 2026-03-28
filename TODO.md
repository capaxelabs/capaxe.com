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

## Retainer Blog Content (Completed)
- [x] Publish "Why Every Shopify Store Needs a Retainer Plan in 2026"
- [x] Publish "Shopify Retainer vs Hourly Development -- Which Saves You More?"
- [x] Publish "How to Calculate ROI on Your Shopify Retainer Plan"
- [x] Publish "What Does a Shopify Retainer Plan Actually Include? Full Breakdown"
- [x] Publish "The Complete Shopify Store Maintenance Checklist for 2026"

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

## Blog Hero Image Generation (63 posts)
All posts use `/shopify-capaxe-labs.png` placeholder. Generate unique images and update each post's `heroImage` field.

### Master Prompt (prepend to every image prompt below)
```
Minimal flat vector illustration on a soft mint-to-white gradient background
(top: #ECFDF5, bottom: #FFFFFF). Illustrations in dark navy (#0f172a) and
emerald green (#22c55e), with one optional muted accent color per image.
Centered single subject with generous negative space.
Thin clean outlines, no harsh shadows, no text, no watermarks.
Simple geometric shapes. Elegant, modern, SaaS-style.
1200x630px, 16:9 aspect ratio.
```

### Retainer Series (10 posts)
- [x] `why-shopify-stores-need-retainer-plan.mdx` — A single shield icon with a small clock inside it. Accent: white.
- [x] `shopify-retainer-vs-hourly-development.mdx` — Two cards side by side: left card has a steady horizontal line (stable), right card has a jagged up-down line (volatile). Accent: soft orange for the right card.
- [x] `shopify-retainer-plan-roi-calculator.mdx` — A simple upward-trending line chart with a small calculator icon below it. Accent: white.
- [x] `what-shopify-retainer-plan-includes.mdx` — An open box with six small geometric icons floating above it (circle, square, triangle, hexagon, diamond, star). Accent: white.
- [x] `shopify-store-maintenance-checklist.mdx` — A clipboard with four lines, two with checkmarks and two without. Accent: white.
- [x] `shopify-retainer-for-seasonal-businesses.mdx` — Four simple circles in a row, each containing one season symbol: snowflake, flower, sun, leaf. A thin green line connects them all. Accent: soft blue.
- [x] `signs-shopify-store-needs-developer-retainer.mdx` — A single warning triangle icon with the number 7 inside it. Accent: soft amber/yellow.
- [x] `shopify-retainer-vs-hiring-inhouse-developer.mdx` — A balance scale: left side has one person icon, right side has three person icons. Scale tips slightly right. Accent: white.
- [x] `shopify-plus-retainer-enterprise-support.mdx` — A diamond shape (Shopify Plus) with four thin lines radiating outward to small circle nodes. Accent: soft gold.
- [x] `how-to-choose-shopify-retainer-agency.mdx` — A magnifying glass hovering over three small card rectangles in a row, middle card has a checkmark. Accent: white.

### Shopify Development & Technical (18 posts)
- [x] `how-much-does-shopify-development-cost.mdx` — Three vertical bars of increasing height, each with a small dollar sign at the top. Accent: white.
- [x] `woocommerce-to-shopify-migration-guide.mdx` — A simple arrow pointing right, left end faded/muted, right end bright green. Accent: muted gray for the left side.
- [x] `best-shopify-subscription-apps.mdx` — A circular arrow (recurring symbol) with a small star in the center. Accent: white.
- [x] `shopify-cli-commands.mdx` — A terminal prompt icon (>) with a blinking cursor line. Accent: white.
- [x] `shopify-theme-architecture.mdx` — Three stacked horizontal rectangles of decreasing width (header, body, footer), forming a simple page wireframe. Accent: white.
- [x] `shopify-functions-rust-vs-javascript.mdx` — Two simple code bracket icons ({ }) side by side, left in soft orange, right in soft yellow. Center: a small gear icon in green.
- [x] `rebuild-vs-refactor-shopify-theme.mdx` — Left side: a simple house outline being erased. Right side: the same house with a small wrench adjusting one part. Thin vertical divider between them. Accent: soft red for left.
- [x] `shopify-plus-multi-account-management.mdx` — Three small storefront icons arranged in a triangle, connected by thin lines to a central circle. Accent: soft gold.
- [x] `shopify-schema-guide.mdx` — Clean nested curly braces { { } } with a small key icon inside the innermost pair. Accent: white.
- [x] `shopify-new-customer-accounts.mdx` — A person icon with a small toggle switch below it, switch positioned to the right (new). Accent: white.
- [x] `shopify-theme-blocks-guide.mdx` — Four simple rounded rectangles stacked in a 2x2 grid, each a slightly different shade of green. Accent: white.
- [x] `shopify-next-gen-dev-platform.mdx` — A simple rocket silhouette pointing up, with three small dots (tools) orbiting around it. Accent: white.
- [x] `shopify-polaris-design-system-updates.mdx` — A compass icon (Polaris) with four small UI component squares at N, E, S, W positions. Accent: soft blue.
- [x] `getting-started-shopify-functions.mdx` — A function symbol f(x) inside a rounded rectangle with a small play/start arrow. Accent: white.
- [x] `custom-shopify-apps-scaling-ecommerce.mdx` — A small app icon (rounded square) with an upward arrow emerging from it. Accent: white.
- [x] `mastering-shopify-api-integrations.mdx` — Two circles connected by a double-headed arrow, small plug/socket icon at the connection point. Accent: white.
- [x] `migrating-shopify-customer-accounts.mdx` — A person icon with a curved arrow moving from left circle to right circle. Accent: soft blue.
- [x] `unlocking-shopify-full-potential.mdx` — A simple padlock in the open position with a small sparkle/star above it. Accent: white.

### Liquid & Theme Development (12 posts)
- [x] `high-converting-shopify-product-pages.mdx` — A simple product card rectangle with a small upward arrow in the bottom-right corner (conversion). Accent: white.
- [x] `accessible-interactive-alpinejs-shopify.mdx` — A mountain peak (Alpine) with a small universal access circle icon beside it. Accent: soft blue.
- [x] `alpinejs-global-state-shopify.mdx` — A central circle with three thin lines radiating to three smaller circles (state flow). Accent: white.
- [x] `managing-cart-state-alpinejs.mdx` — A shopping cart icon with a small circular arrow (sync/state) above it. Accent: white.
- [x] `mastering-liquid-capture-tag.mdx` — A single droplet icon with code brackets { } inside it. Accent: soft blue.
- [x] `refactoring-nested-loops-liquid.mdx` — Left: a tangled scribble circle. Right: a clean straight line. Arrow between them. Accent: soft red for left scribble.
- [ ] `liquid-performance-optimization.mdx` — A simple speedometer/gauge icon with needle pointing to the right (fast/green zone). Accent: white.
- [ ] `liquid-doc-documentation.mdx` — An open book icon with three horizontal lines on each page (text). Accent: white.
- [ ] `dynamic-filtering-liquid-url-params.mdx` — A funnel icon with three small dots entering the top and one dot exiting the bottom. Accent: white.
- [ ] `super-collections-page-performance.mdx` — A 2x2 grid of card rectangles with a small lightning bolt in the corner (speed). Accent: soft yellow.
- [ ] `metaobjects-dynamic-data-source.mdx` — A small database cylinder with three branches extending right to content card rectangles. Accent: white.
- [ ] `theme-block-nesting-architecture.mdx` — Three concentric rounded rectangles (nested blocks), each slightly offset. Accent: white (using different green opacities for each layer).

### Shopify Apps & Tools (5 posts)
- [ ] `swiperjs-vs-embla-carousel.mdx` — Two horizontal card strips side by side, left with soft blue tint, right with soft purple tint. Small "vs" between them. Accent: soft blue and purple.
- [ ] `leveraging-search-and-discovery-app.mdx` — A magnifying glass icon with three small product card rectangles fanning out to the right. Accent: white.
- [ ] `app-vs-theme-customization-framework.mdx` — A simple fork in a path: left branch has a code icon, right branch has a paintbrush icon. Accent: white.
- [ ] `beyond-polaris-web-components.mdx` — A Polaris compass circle with a small arrow breaking out of it to the right. Accent: soft blue.
- [ ] `optimizing-images-next-gen-formats.mdx` — A large image icon (landscape rectangle with mountain) with a small downward arrow and compressed version beside it. Accent: white.

### AI & Modern Development (7 posts)
- [ ] `ai-figma-mcp-revolution.mdx` — A design frame (Figma) connected by a thin line to code brackets, with a small brain/AI circle at the midpoint. Accent: soft purple.
- [ ] `getting-started-figma-mcp.mdx` — Three simple icons in a row connected by arrows: design frame, gear (MCP), code brackets. Accent: soft purple.
- [ ] `advanced-prompting-claude.mdx` — A chat bubble icon with three horizontal lines inside, a small sparkle above it. Accent: soft purple.
- [ ] `conversational-commerce-openai.mdx` — A chat bubble with a small shopping bag icon inside it. Accent: white.
- [ ] `ai-assisted-developer-remix-v3.mdx` — A code editor rectangle with a small AI sparkle icon in the top-right corner. Accent: soft purple.
- [ ] `graphql-schema-agentic-development.mdx` — A simple graph/tree: one parent node with three child nodes, thin connecting lines. Small AI sparkle on the parent node. Accent: soft pink.
- [ ] `mcp-security-risks.mdx` — A shield icon with a small exclamation mark (!) inside it. Accent: soft red/amber.

### Freelancer & Business (7 posts)
- [ ] `freelancer-tips.mdx` — A simple lightbulb icon with three small bullet-point dots beside it. Accent: soft yellow.
- [ ] `avoiding-freelancer-burnout.mdx` — A battery icon at 50% charge with a small pause symbol beside it. Accent: soft amber.
- [ ] `value-based-pricing-freelancers.mdx` — A price tag icon with an upward arrow emerging from it. Accent: white.
- [ ] `project-scoping-guide.mdx` — A simple ruler/measuring tool with a dashed boundary rectangle. Accent: white.
- [ ] `loom-notion-freelancer-workflow.mdx` — A play button (video) connected by an arrow to a page/document icon. Accent: soft blue.
- [ ] `onboarding-new-shopify-client.mdx` — A handshake icon above a simple three-step progress bar. Accent: white.
- [ ] `art-of-mvp-ab-testing.mdx` — Two simple rectangles labeled A and B side by side, B has a small crown/star above it. Accent: soft yellow.

### Other (5 posts)
- [ ] `ab-testing-guide.mdx` — Two overlapping rectangles (A behind B) with a small checkmark on the front one. Accent: white.
- [ ] `automating-workflow-n8n.mdx` — Three circles connected by arrows in a left-to-right flow (input, process, output). Accent: soft orange.
- [ ] `website-optimization-load-speed.mdx` — A browser window icon with a small lightning bolt in the center. Accent: soft yellow.
- [ ] `cldnine.mdx` — Two rectangles (backend, frontend) connected by a thin API arrow line. Accent: soft blue.
- [ ] `theme-rebuild-checklist.mdx` — A house outline with a circular arrow around it (rebuild cycle) and a small checklist beside it. Accent: white.

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
