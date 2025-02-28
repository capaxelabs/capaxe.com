// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

const isProduction = process.env.NODE_ENV === "production";

let resolve;

if (isProduction) {
  console.log("Production mode");
  // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
  // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
  // Comment below for local development
  resolve = {
    alias: {
      "react-dom/server": "react-dom/server.edge",
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://www.capaxe.com",
  integrations: [mdx(), sitemap(), react()],
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
    // Force all dependencies to be bundled, not externalized
    ssr: {
      external: [],
    },
    resolve,
  },
});
