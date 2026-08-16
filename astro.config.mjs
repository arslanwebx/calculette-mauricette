import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const defaultSiteUrl = "https://calculette-mauricette.pro";
const siteUrl = process.env.PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

export default defineConfig({
  output: "static",
  site: siteUrl,
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/"),
    }),
  ],
  build: {
    format: "directory",
  },
});
