# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start local development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally (runs `astro build && wrangler dev`) |
| `npm run check` | Full validation: build + TypeScript check + dry-run deploy |
| `npm run deploy` | Deploy to Cloudflare Workers |
| `npm run cf-typegen` | Generate Cloudflare Worker types |

## Architecture Overview

This is an **Astro-based website for Capaxe Labs** (Shopify development agency) deployed on **Cloudflare Workers**. The site combines:

- **Astro** as the main framework with **React** components for interactivity
- **TypeScript** with strict configuration
- **Tailwind CSS v4** for styling with custom theming support
- **MDX** for blog content with content collections
- **React Email** for transactional email templates

### Key Architecture Patterns

**Hybrid Component Architecture**: The site uses both `.astro` components for static content and React (`.tsx`) components for interactive features like forms, theme switching, and contact functionality.

**Content Management**: Blog posts and case studies are managed through Astro's content collections in `src/content/` with strict TypeScript schemas for frontmatter validation.

**Configuration-Driven UI**: The site configuration in `src/config/site.ts` drives most UI content including services, retainer plans, contact forms, and site metadata - making it easy to update content without touching components.

**Email Integration**: Uses React Email templates in `src/emails/` for consistent branding across contact forms, auto-replies, and welcome emails.

## Project Structure

```
src/
├── components/          # Shared Astro & React components
│   ├── ui/             # Reusable UI components (shadcn/ui style)
│   └── home/           # Homepage-specific components
├── config/             # Configuration files
│   ├── site.ts         # Main site configuration (services, contact, etc.)
│   ├── menu.ts         # Navigation structure
│   └── caseStudy.ts    # Case study data
├── content/            # Content collections
│   └── blog/           # Blog posts (MDX files)
├── emails/             # React Email templates
├── lib/                # Utility functions
├── pages/              # File-based routing
│   ├── api/            # API endpoints (contact forms, etc.)
│   └── services/       # Service pages with nested structure
├── layouts/            # Page layouts
└── types/              # TypeScript type definitions
```

## Key Technical Details

**TypeScript Path Mapping**: Uses `@/*` alias pointing to `src/*` for cleaner imports.

**Cloudflare Integration**: Configured for Cloudflare Workers deployment with platform proxy enabled for development. The `wrangler.json` file contains deployment configuration.

**React 19**: The project uses React 19 with strict TypeScript configuration.

**Content Collections**: Blog uses Astro's content collections with glob loader for automatic file discovery and frontmatter validation.

**API Routes**: Contact forms and email sending handled through Astro API routes in `src/pages/api/`.

## Development Notes

- Site configuration in `src/config/site.ts` should be updated to change business information, services, or pricing
- The `astro.config.mjs` site URL needs to be updated for production deployment
- Email templates use React Email and are sent through API routes
- Theme switching is implemented via next-themes with system preference support