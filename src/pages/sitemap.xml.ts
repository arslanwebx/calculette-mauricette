import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

type PageModule = {
  sitemap?: boolean;
};

const pageModules = import.meta.glob<PageModule>("./**/*.astro", { eager: true });

function routeFromPageFile(file: string): string | undefined {
  const sourceRoute = file.replace(/^\.\//, "").replace(/\.astro$/, "");

  if (sourceRoute.includes("[") || sourceRoute.includes("]")) {
    return undefined;
  }

  const route = sourceRoute.replace(/\/index$/, "");
  return route === "index" || route === "" ? "/" : `/${route}/`;
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const prerender = true;

export const GET: APIRoute = () => {
  const urls = Object.entries(pageModules)
    .filter(([, page]) => page.sitemap !== false)
    .map(([file]) => routeFromPageFile(file))
    .filter((route): route is string => Boolean(route))
    .sort((left, right) => left.localeCompare(right, "fr"))
    .map((route) => new URL(route, siteConfig.url).href);

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
