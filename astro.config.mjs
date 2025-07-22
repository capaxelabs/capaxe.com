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
  site: "https:/www.capaxe.com",
  integrations: [mdx(), sitemap(), react()],
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