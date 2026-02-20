// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

const alias = import.meta.env.PROD ? {
  "react-dom/server": "react-dom/server.edge",
} : undefined;

// https://astro.build/config
export default defineConfig({
  site: "https://www.capaxe.com",
  redirects: {
    "/blog/20251013-ai-figma-mcp-revolution": "/blog/ai-figma-mcp-revolution",
    "/blog/20251014-conversational-commerce-openai": "/blog/conversational-commerce-openai",
    "/blog/20251015-ai-assisted-developer-remix-v3": "/blog/ai-assisted-developer-remix-v3",
    "/blog/20251016-shopify-next-gen-dev-platform": "/blog/shopify-next-gen-dev-platform",
    "/blog/20251017-shopify-polaris-design-system-updates": "/blog/shopify-polaris-design-system-updates",
    "/blog/20251018-rebuild-vs-refactor-shopify-theme": "/blog/rebuild-vs-refactor-shopify-theme",
    "/blog/20251019-ab-testing-guide": "/blog/ab-testing-guide",
    "/blog/20251020-liquid-performance-optimization": "/blog/liquid-performance-optimization",
    "/blog/20251021-accessible-interactive-alpinejs-shopify": "/blog/accessible-interactive-alpinejs-shopify",
    "/blog/20251022-alpinejs-global-state-shopify": "/blog/alpinejs-global-state-shopify",
    "/blog/20251023-metaobjects-dynamic-data-source": "/blog/metaobjects-dynamic-data-source",
    "/blog/20251024-shopify-theme-blocks-guide": "/blog/shopify-theme-blocks-guide",
    "/blog/20251025-shopify-new-customer-accounts": "/blog/shopify-new-customer-accounts",
    "/blog/20251026-mcp-security-risks": "/blog/mcp-security-risks",
    "/blog/20251027-freelancer-tips": "/blog/freelancer-tips",
    "/blog/20251028-mastering-liquid-capture-tag": "/blog/mastering-liquid-capture-tag",
    "/blog/20251029-refactoring-nested-loops-liquid": "/blog/refactoring-nested-loops-liquid",
    "/blog/20251030-shopify-schema-guide": "/blog/shopify-schema-guide",
    "/blog/20251031-liquid-doc-documentation": "/blog/liquid-doc-documentation",
    "/blog/20251101-super-collections-page-performance": "/blog/super-collections-page-performance",
    "/blog/20251102-dynamic-filtering-liquid-url-params": "/blog/dynamic-filtering-liquid-url-params",
    "/blog/20251103-shopify-theme-architecture": "/blog/shopify-theme-architecture",
    "/blog/20251104-migrating-shopify-customer-accounts": "/blog/migrating-shopify-customer-accounts",
    "/blog/20251105-getting-started-shopify-functions": "/blog/getting-started-shopify-functions",
    "/blog/20251106-shopify-cli-commands": "/blog/shopify-cli-commands",
    "/blog/20251107-leveraging-search-and-discovery-app": "/blog/leveraging-search-and-discovery-app",
    "/blog/20251108-graphql-schema-agentic-development": "/blog/graphql-schema-agentic-development",
    "/blog/20251109-swiperjs-vs-embla-carousel": "/blog/swiperjs-vs-embla-carousel",
    "/blog/20251110-managing-cart-state-alpinejs": "/blog/managing-cart-state-alpinejs",
    "/blog/20251111-optimizing-images-next-gen-formats": "/blog/optimizing-images-next-gen-formats",
    "/blog/20251112-art-of-mvp-ab-testing": "/blog/art-of-mvp-ab-testing",
    "/blog/20251113-beyond-polaris-web-components": "/blog/beyond-polaris-web-components",
    "/blog/20251114-getting-started-figma-mcp": "/blog/getting-started-figma-mcp",
    "/blog/20251115-advanced-prompting-claude": "/blog/advanced-prompting-claude",
    "/blog/20251116-automating-workflow-n8n": "/blog/automating-workflow-n8n",
    "/blog/20251117-app-vs-theme-customization-framework": "/blog/app-vs-theme-customization-framework",
    "/blog/20251118-onboarding-new-shopify-client": "/blog/onboarding-new-shopify-client",
    "/blog/20251119-project-scoping-guide": "/blog/project-scoping-guide",
    "/blog/20251120-value-based-pricing-freelancers": "/blog/value-based-pricing-freelancers",
    "/blog/20251121-loom-notion-freelancer-workflow": "/blog/loom-notion-freelancer-workflow",
    "/blog/20251122-avoiding-freelancer-burnout": "/blog/avoiding-freelancer-burnout",
    "/blog/20251123-theme-rebuild-checklist": "/blog/theme-rebuild-checklist",
    "/blog/20251124-theme-block-nesting-architecture": "/blog/theme-block-nesting-architecture",
    "/blog/20251125-shopify-plus-multi-account-management": "/blog/shopify-plus-multi-account-management",
    "/blog/20251126-shopify-functions-rust-vs-javascript": "/blog/shopify-functions-rust-vs-javascript",
    "/blog/20250227": "/blog/custom-shopify-apps-scaling-ecommerce",
    "/blog/20250228": "/blog/unlocking-shopify-full-potential",
    "/blog/20250301": "/blog/mastering-shopify-api-integrations",
    "/blog/20250302": "/blog/website-optimization-load-speed",
    "/blog/20250303": "/blog/high-converting-shopify-product-pages",
  },
  integrations: [
    mdx({
      shikiConfig: {
        theme: 'github-dark',
      },
    }),
    sitemap({
      filter: (page) => !['/color', '/health', '/plans', '/press'].some(p => page.includes(p)),
    }),
    react()
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  
  vite: {
    plugins: [tailwindcss()],
    resolve: { alias },
  },
});