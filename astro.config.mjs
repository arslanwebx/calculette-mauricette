import { defineConfig } from "astro/config";

const defaultSiteUrl = "https://calculette-mauricette.pro";
const siteUrl = process.env.PUBLIC_SITE_URL?.trim() || defaultSiteUrl;

export default defineConfig({
  output: "static",
  site: siteUrl,
  build: {
    format: "directory",
  },
});
