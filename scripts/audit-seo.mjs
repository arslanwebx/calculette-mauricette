import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const outputDirectory = join(root, "dist");
const canonicalOrigin = "https://calculette-mauricette.pro";
const errors = [];

function fail(message) {
  errors.push(message);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([:\w-]+)=(?:"([^"]*)"|'([^']*)')/g)].map((match) => [
      match[1].toLowerCase(),
      match[2] ?? match[3] ?? "",
    ]),
  );
}

function routeForHtml(file) {
  const outputPath = relative(outputDirectory, file).split(sep).join("/");
  if (outputPath === "index.html") return "/";
  if (outputPath === "404.html") return "/404.html";
  return `/${outputPath.replace(/\/index\.html$/, "")}/`;
}

function routeToOutputFile(pathname) {
  if (pathname === "/") return join(outputDirectory, "index.html");
  if (pathname.endsWith("/")) return join(outputDirectory, pathname, "index.html");
  return join(outputDirectory, pathname);
}

if (!existsSync(outputDirectory)) {
  throw new Error("dist/ est absent. Exécutez d'abord npm run build.");
}

const files = walk(outputDirectory);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const pages = htmlFiles.map((file) => ({
  file,
  route: routeForHtml(file),
  html: readFileSync(file, "utf8"),
}));
const publicPages = pages.filter((page) => page.route !== "/404.html");
const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();
const linkedRoutes = new Set(["/"]);

for (const page of pages) {
  const { html, route } = page;
  const titleMatches = [...html.matchAll(/<title>([\s\S]*?)<\/title>/gi)];
  const descriptionTags = [...html.matchAll(/<meta\b[^>]*\bname=["']description["'][^>]*>/gi)];
  const robotTags = [...html.matchAll(/<meta\b[^>]*\bname=["']robots["'][^>]*>/gi)];
  const canonicalTags = [...html.matchAll(/<link\b[^>]*\brel=["']canonical["'][^>]*>/gi)];
  const h1Matches = [...html.matchAll(/<h1\b[^>]*>/gi)];
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? "";
  const expectedCanonical = `${canonicalOrigin}${route}`;
  const isNotFound = route === "/404.html";

  if (attributes(htmlTag).lang !== "fr") fail(`${route}: html lang doit être fr`);
  if (titleMatches.length !== 1 || !titleMatches[0][1].trim()) fail(`${route}: title absent ou dupliqué`);
  if (descriptionTags.length !== 1 || !attributes(descriptionTags[0][0]).content?.trim()) {
    fail(`${route}: meta description absente ou dupliquée`);
  }
  if (robotTags.length !== 1) fail(`${route}: directive robots absente ou dupliquée`);
  if (h1Matches.length !== 1) fail(`${route}: ${h1Matches.length} H1 trouvé(s), 1 attendu`);

  const idValues = [...html.matchAll(/\bid=(?:"([^"]+)"|'([^']+)')/gi)].map((match) => match[1] ?? match[2]);
  const idSet = new Set(idValues);
  if (idSet.size !== idValues.length) fail(`${route}: identifiant HTML dupliqué`);

  for (const label of html.matchAll(/<label\b[^>]*\bfor=(?:"([^"]+)"|'([^']+)')[^>]*>/gi)) {
    const targetId = label[1] ?? label[2];
    if (!idSet.has(targetId)) fail(`${route}: label sans champ associé (${targetId})`);
  }

  for (const reference of html.matchAll(/\b(?:aria-controls|aria-describedby|aria-labelledby)=(?:"([^"]+)"|'([^']+)')/gi)) {
    const targetIds = (reference[1] ?? reference[2]).split(/\s+/).filter(Boolean);
    for (const targetId of targetIds) {
      if (!idSet.has(targetId)) fail(`${route}: référence ARIA absente (${targetId})`);
    }
  }

  const readableText = html
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!isNotFound && readableText.length < 250) fail(`${route}: contenu trop faible, risque de soft 404`);

  const robotContent = robotTags[0] ? attributes(robotTags[0][0]).content?.toLowerCase() ?? "" : "";
  if (isNotFound) {
    if (!robotContent.includes("noindex")) fail(`${route}: la page 404 doit être noindex`);
    if (canonicalTags.length !== 0) fail(`${route}: une page 404 ne doit pas avoir de canonical`);
  } else {
    if (robotContent.includes("noindex") || robotContent.includes("nofollow")) {
      fail(`${route}: directive d'indexation bloquante`);
    }
    if (canonicalTags.length !== 1) {
      fail(`${route}: canonical absente ou dupliquée`);
    } else {
      const canonical = attributes(canonicalTags[0][0]).href;
      if (canonical !== expectedCanonical) fail(`${route}: canonical incorrecte (${canonical})`);
      const existingCanonical = canonicals.get(canonical);
      if (existingCanonical) fail(`${route}: canonical aussi utilisée par ${existingCanonical}`);
      canonicals.set(canonical, route);
    }
  }

  const title = titleMatches[0]?.[1].trim();
  if (title) {
    const existingTitle = titles.get(title);
    if (existingTitle) fail(`${route}: title dupliqué avec ${existingTitle}`);
    titles.set(title, route);
  }

  const description = descriptionTags[0] ? attributes(descriptionTags[0][0]).content?.trim() : "";
  if (description) {
    const existingDescription = descriptions.get(description);
    if (existingDescription) fail(`${route}: description dupliquée avec ${existingDescription}`);
    descriptions.set(description, route);
  }

  for (const property of ["og:type", "og:locale", "og:site_name", "og:title", "og:description"]) {
    const matches = [...html.matchAll(new RegExp(`<meta\\b[^>]*\\bproperty=["']${property}["'][^>]*>`, "gi"))];
    if (matches.length !== 1) fail(`${route}: ${property} absent ou dupliqué`);
  }
  if (!isNotFound) {
    const ogUrlTags = [...html.matchAll(/<meta\b[^>]*\bproperty=["']og:url["'][^>]*>/gi)];
    if (ogUrlTags.length !== 1 || attributes(ogUrlTags[0][0]).content !== expectedCanonical) {
      fail(`${route}: og:url absent ou incorrect`);
    }
  }

  const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (!isNotFound && jsonLdBlocks.length === 0) fail(`${route}: données structurées absentes`);
  for (const block of jsonLdBlocks) {
    try {
      const payload = JSON.parse(block[1]);
      const entities = Array.isArray(payload) ? payload : [payload];
      const permittedTypes = new Set(["WebSite", "WebApplication", "WebPage", "BreadcrumbList"]);
      for (const entity of entities) {
        if (entity?.["@context"] !== "https://schema.org" || !permittedTypes.has(entity?.["@type"])) {
          fail(`${route}: type JSON-LD absent ou non autorisé`);
        }
      }
    } catch {
      fail(`${route}: JSON-LD invalide`);
    }
  }

  const headingLevels = [...html.matchAll(/<h([1-6])\b[^>]*>/gi)].map((match) => Number(match[1]));
  if (headingLevels[0] !== 1) fail(`${route}: le premier titre doit être un H1`);
  for (let index = 1; index < headingLevels.length; index += 1) {
    if (headingLevels[index] > headingLevels[index - 1] + 1) {
      fail(`${route}: saut de titre H${headingLevels[index - 1]} vers H${headingLevels[index]}`);
    }
  }

  const pageUrl = new URL(route, canonicalOrigin);
  for (const anchor of html.matchAll(/<a\b[^>]*\bhref=(?:"([^"]*)"|'([^']*)')[^>]*>/gi)) {
    const href = anchor[1] ?? anchor[2] ?? "";
    if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) continue;

    const target = new URL(href, pageUrl);
    if (target.origin !== canonicalOrigin) continue;

    const targetFile = routeToOutputFile(target.pathname);
    if (!existsSync(targetFile)) fail(`${route}: lien interne cassé vers ${href}`);
    if (target.hash) {
      const targetHtml = targetFile.endsWith(".html") && existsSync(targetFile)
        ? readFileSync(targetFile, "utf8")
        : "";
      const targetId = target.hash.slice(1);
      if (!targetHtml.includes(`id="${targetId}"`) && !targetHtml.includes(`id='${targetId}'`)) {
        fail(`${route}: ancre interne absente pour ${href}`);
      }
    }

    if (target.pathname !== route) linkedRoutes.add(target.pathname);
  }
}

const sitemapFile = join(outputDirectory, "sitemap.xml");
const robotsFile = join(outputDirectory, "robots.txt");
if (!existsSync(sitemapFile)) fail("/sitemap.xml: fichier absent");
if (!existsSync(robotsFile)) fail("/robots.txt: fichier absent");
if (existsSync(join(outputDirectory, "sitemap-index.xml"))) fail("ancien sitemap-index.xml encore généré");

const sitemap = existsSync(sitemapFile) ? readFileSync(sitemapFile, "utf8") : "";
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = publicPages.map((page) => `${canonicalOrigin}${page.route}`).sort();
if (new Set(sitemapUrls).size !== sitemapUrls.length) fail("/sitemap.xml: URL dupliquée");
if (JSON.stringify([...sitemapUrls].sort()) !== JSON.stringify(expectedUrls)) {
  fail(`/sitemap.xml: contenu différent des pages publiques (${sitemapUrls.length}/${expectedUrls.length})`);
}
for (const url of sitemapUrls) {
  const parsed = new URL(url);
  if (parsed.origin !== canonicalOrigin || parsed.search || parsed.hash) fail(`/sitemap.xml: URL non canonique ${url}`);
  if (!existsSync(routeToOutputFile(parsed.pathname))) fail(`/sitemap.xml: URL sans fichier 200 ${url}`);
}

const robots = existsSync(robotsFile) ? readFileSync(robotsFile, "utf8") : "";
if (!/^User-agent:\s*\*$/im.test(robots) || !/^Allow:\s*\/$/im.test(robots)) {
  fail("/robots.txt: règles générales manquantes");
}
if (!robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`)) {
  fail("/robots.txt: URL de sitemap incorrecte");
}
if (/Disallow:\s*\//i.test(robots)) fail("/robots.txt: blocage global détecté");

for (const page of publicPages) {
  if (page.route !== "/" && !linkedRoutes.has(page.route)) fail(`${page.route}: page orpheline`);
}

if (errors.length > 0) {
  console.error(`Audit SEO échoué (${errors.length} erreur(s)):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Audit SEO réussi: ${publicPages.length} pages publiques, ${sitemapUrls.length} URL de sitemap, aucun lien cassé ni page orpheline.`);
