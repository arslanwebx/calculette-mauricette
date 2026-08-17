# CODEX.md — Calculette Mauricette Master Project Context

> **Repository source of truth for Codex and future contributors**
>
> **Project:** Calculette Mauricette  
> **Production domain:** https://calculette-mauricette.pro/  
> **Primary market:** France  
> **Primary language:** French (`fr-FR`)  
> **Primary SEO keywords:** `calculette mauricette`, `calculatrice mauricette`  
> **Tech stack:** Astro + TypeScript  
> **Hosting:** Cloudflare Pages  
> **Repository:** GitHub  
> **Contact form:** Web3Forms  
> **Primary public email:** `contact@calculette-mauricette.pro`  
> **Strategy last updated:** 18 August 2026

---

# 0. READ THIS FIRST — MASTER OPERATING RULE

This file is the **master context document** for the entire project.

Before Codex makes any meaningful change to the website, it must:

1. Read this entire `CODEX.md`.
2. Read `SEO-PUBLISHING-PLAYBOOK.md` completely before making any change. Together with this file, it is the project's source of truth for publishing, on-page SEO, and bidirectional internal linking.
3. Inspect the current repository before making assumptions.
4. Preserve working functionality, URLs, SEO equity, design consistency, and deployment compatibility.
5. Search the repository before creating any new route, component, calculator, article, or SEO target.
6. Prefer improving an existing strong page over creating a near-duplicate page.
7. Never silently change canonical URLs, slugs, build tooling, analytics, hosting behavior, or calculator logic without a clear reason.
8. Keep the site **fast, human-looking, simple, useful, French, trustworthy, and tool-first**.
9. Verify time-sensitive French legal/payroll claims against current primary French sources before publishing.
10. Treat every publication as part of the **whole topical system**, not as an isolated page.

**One search intent = one primary canonical URL.**

The repository should never accumulate near-duplicate SEO pages simply because keywords are worded differently.

---

# 1. PROJECT IDENTITY

## Brand

**Calculette Mauricette**

## Production domain

`https://calculette-mauricette.pro/`

Use this exact production origin for:

- canonical URLs;
- Open Graph URLs;
- structured-data absolute URLs;
- sitemap references;
- robots sitemap reference;
- production metadata.

Do not use old placeholders such as:

```text
YOURDOMAIN.fr
```

Do not use a fake `.fr` domain.

## Public contact email

`contact@calculette-mauricette.pro`

## Contact form provider

**Web3Forms**

The contact form is intended to submit from the static Astro site without a custom backend.

## Market

France.

## Language

All public-facing website content should be in natural French unless a page intentionally has another language.

Root HTML should use:

```html
<html lang="fr">
```

Where supported, locale should be treated as:

```text
fr-FR
```

---

# 2. PROJECT MISSION

The goal is to build the strongest, most useful French resource for:

- calculating working hours;
- using a Mauricette-style calculator;
- daily working-time calculation;
- weekly working-time calculation;
- multiple work periods;
- break deduction;
- adding and subtracting time;
- converting hours/minutes to decimal or centesimal time;
- understanding 35h and 39h schedules;
- understanding 151,67 monthly hours;
- understanding 1607 annual hours;
- estimating overtime where appropriate;
- understanding complementary hours for part-time work;
- night/Sunday working-time calculation;
- effective working time;
- maximum working duration;
- travel time;
- Excel/printable timesheets;
- working-time documentation and practical reference tools.

The project should become:

> **The most useful French resource for calculating, understanding and documenting working time.**

The site is **not** a generic calculator directory.

---

# 3. PRIMARY SEO OBJECTIVE

The two highest-priority head terms are:

1. **calculette mauricette**
2. **calculatrice mauricette**

These represent essentially the same core intent.

## Critical URL ownership decision

Both terms belong to the **homepage `/`**.

Never create separate pages such as:

```text
/calculette-mauricette/
/calculatrice-mauricette/
/calculette-mauricette-2026/
/calculatrice-mauricette-2026/
```

unless future Search Console data provides an exceptionally strong reason to change strategy.

The homepage must consolidate relevance, links, engagement, and authority for both terms.

---

# 4. HOMEPAGE SEARCH INTENT

Someone searching:

> calculette mauricette

or:

> calculatrice mauricette

primarily wants to **calculate working hours immediately**.

Therefore:

> **The homepage is a calculator first and an SEO landing page second.**

The calculator must appear immediately after the H1 / compact introduction.

Do not place before it:

- giant decorative hero art;
- oversized background image;
- several hundred words of content;
- newsletter signup;
- account creation;
- popups;
- lead capture;
- marketing pitch;
- large testimonial sections;
- unrelated features.

---

# 5. HOMEPAGE SEO SPECIFICATION

## URL

`https://calculette-mauricette.pro/`

## Primary keywords

- calculette mauricette
- calculatrice mauricette

## Natural secondary variants

- calculette mauricette heures
- calculatrice mauricette heures
- mauricette heures de travail
- calculatrice heures de travail
- calcul temps de travail
- calcul heure de travail
- calcul heures
- addition heures
- soustraction heures
- conversion heures centièmes
- heures décimales
- feuille heures de travail

Do not mechanically alternate these phrases.

Use natural French.

## Recommended title

```text
Calculette Mauricette - Calculatrice d'heures de travail
```

## Recommended H1

```text
Calculette Mauricette : calculez vos heures de travail
```

Use **calculatrice Mauricette** naturally in the introductory copy.

## Recommended meta description

```text
Calculez vos heures de travail avec la Calculette Mauricette : journées, semaines, pauses, soustractions et conversion en heures décimales. Gratuit.
```

## Canonical

```text
https://calculette-mauricette.pro/
```

---

# 6. HOMEPAGE PRODUCT / CONTENT ORDER

Recommended order:

1. compact header;
2. H1 + short practical introduction;
3. main calculator immediately;
4. short “Comment utiliser…” explanation;
5. worked example;
6. decimal / centesimal explanation;
7. daily + weekly calculation explanation;
8. concise overtime context;
9. strongest related calculators/resources;
10. FAQ;
11. footer.

Do not turn the homepage into a 4,000–5,000 word SEO article.

Approximately **900–1,500 genuinely useful words** around the calculator is a reasonable range, but it is not a quota.

The calculator, examples, tables, internal linking, functionality and UX are part of the page’s value.

---

# 7. MAIN CALCULATOR REQUIREMENTS

The flagship calculator should support:

## Core modes

- **Journée**
- **Semaine**
- **Soustraction**
- **Conversion**

## Daily calculation

- start time;
- end time;
- multiple working periods;
- add/remove period;
- break deduction where appropriate;
- include/exclude row;
- cross-midnight support;
- clear total.

## Weekly calculation

- Monday through Sunday;
- daily totals;
- weekly total;
- optional disabled days;
- mobile-friendly layout.

## Result formats

- hours/minutes (`HH:MM` style);
- French decimal hours;
- optional minutes where useful.

## Actions

- copy;
- print;
- reset;
- local save where implemented.

## UX

- no login;
- no account;
- no email gate;
- keyboard usable;
- mobile-first;
- accessible labels;
- clear validation.

---

# 8. CALCULATOR MATH RULES

Arithmetic and legal interpretation must remain separate.

## Same-day interval

```text
duration = end - start
```

## Overnight interval

If the end time is earlier than the start time:

```text
end = end + 24 hours
```

Example:

```text
21:00 → 06:00 = 9 h 00
```

Never return a negative duration such as `-15h`.

## Decimal conversion

```text
decimal hours = hours + minutes / 60
```

Examples:

```text
7h15 = 7.25
7h30 = 7.50
7h45 = 7.75
8h06 = 8.10
```

French display should use decimal comma where appropriate:

```text
7,50 h
```

Never interpret:

```text
7 h 30
```

as:

```text
7,30 h
```

---

# 9. MINIMUM CALCULATOR TEST CASES

Any relevant calculator implementation should correctly handle:

| Case | Expected |
|---|---|
| 08:00 → 17:00 | 9h |
| 08:00 → 17:00, 1h break | 8h |
| 08:30 → 12:00 + 13:00 → 17:30 | 8h |
| 21:00 → 06:00 | 9h |
| 23:30 → 00:30 | 1h |
| 07:15 → 14:45 | 7h30 / 7,50 |
| 15 minutes | 0,25h |
| 30 minutes | 0,50h |
| 45 minutes | 0,75h |

Add more tests when new functionality introduces edge cases.

---

# 10. TECH STACK

Use:

- **Astro**
- **TypeScript**
- static-first output
- lightweight client-side JavaScript/TypeScript only where interactivity is required

Prefer:

- `.astro` for pages/components;
- `.ts` for shared calculator logic;
- semantic HTML;
- lightweight CSS;
- minimal dependencies.

Avoid introducing React, Vue, Svelte or another client framework unless there is a real need.

Avoid heavy component libraries for simple UI.

---

# 11. GITHUB / CLOUDFLARE DEPLOYMENT

The project is intended to live in GitHub and deploy to Cloudflare Pages.

Expected commands:

```bash
npm install
npm run dev
npm run build
```

Expected static output:

```text
dist/
```

Cloudflare Pages settings should remain compatible with:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Production branch: main
```

Do not introduce a backend, database, authentication layer, or Cloudflare Worker unless explicitly needed later.

---

# 12. PRODUCTION DOMAIN / TECHNICAL SEO

Production origin:

```text
https://calculette-mauricette.pro
```

Important SEO requirements:

- HTTPS;
- one canonical hostname;
- self-referencing canonicals;
- no duplicate www/non-www variants;
- consistent trailing slash behavior;
- canonical sitemap URLs;
- crawlable HTML;
- no accidental `noindex`;
- no orphan pages;
- no broken internal links;
- no redirect chains;
- no soft-404 SEO pages.

---

# 13. ROBOTS.TXT

Production robots should allow crawling of valuable public pages.

It should reference:

```text
https://calculette-mauricette.pro/sitemap.xml
```

Do not accidentally block:

- CSS;
- JS needed for rendering;
- calculator pages;
- content pages;
- important downloadable assets.

---

# 14. XML SITEMAP

The sitemap should:

- be generated automatically where practical;
- contain canonical indexable 200-status URLs only;
- exclude redirects;
- exclude 404s;
- exclude noindex pages;
- exclude staging/test routes;
- exclude duplicate parameter states.

Target sitemap URL:

```text
https://calculette-mauricette.pro/sitemap.xml
```

---

# 15. GOOGLE SEARCH CONSOLE READINESS

The site must remain ready for:

1. Search Console verification;
2. sitemap submission;
3. homepage indexing request;
4. normal crawl discovery through internal links.

After publishing a page, Codex should ensure it is:

- internally linked;
- included in sitemap;
- canonicalized correctly;
- indexable;
- returning 200.

---

# 16. COMPETITOR RESEARCH SNAPSHOT

The three core competitors reviewed for this strategy are:

1. `https://www.calculette-mauricette.fr/heures/`
2. `https://calculatrice-mauricette.fr/`
3. `https://mauricettecalcul.fr/`

These are research references only.

Never copy:

- text;
- headings;
- examples;
- calculator copy;
- tables;
- design;
- code;
- downloadable assets;
- visual structure.

---

# 17. COMPETITOR 1 — calculette-mauricette.fr/heures/

## Strengths

- extremely close intent match;
- long-standing relevance;
- calculator upfront;
- multiple work periods;
- addition/subtraction;
- centesimal conversion;
- straightforward utility.

## Opportunity

- older presentation;
- weaker modern topical architecture;
- historical/legal text can age;
- trust/editorial framework can be improved;
- UX can be improved while staying lightweight.

## Lesson

Do not underestimate simplicity.

A fast obvious calculator can beat a visually impressive but slower product.

---

# 18. COMPETITOR 2 — calculatrice-mauricette.fr

## Strengths

- exact-match relevance;
- modern calculator approach;
- uses both “calculette” and “calculatrice” language;
- export/printing concepts;
- related tools.

## Weakness / opportunity

- topical expansion toward unrelated/general calculation;
- risk of dilution;
- smaller tightly focused working-time authority graph than we can build.

## Lesson

Use both main variants on one strong homepage.

Do not expand prematurely into generic calculator topics.

---

# 19. COMPETITOR 3 — mauricettecalcul.fr

## Strengths

- strongest topical breadth;
- multiple calculator modes;
- weekly calculation;
- subtraction/conversion;
- downloadable/export utility;
- salary/night-related functionality;
- guides;
- trust pages;
- Excel resource strategy.

## Weakness / opportunity

- long homepage;
- close-intent page overlap;
- cannibalization risk;
- some legal/payroll claims may be overly broad.

## Lesson

Use the **concept of topical breadth**, but execute with:

- cleaner intent separation;
- better sourcing;
- better UX;
- less repetition;
- tighter topical focus.

---

# 20. COMPETITIVE POSITIONING

The site should win by combining:

1. best flagship Mauricette calculator;
2. best simple UX;
3. focused calculator ecosystem;
4. clean topical architecture;
5. professional internal linking;
6. accurate official sourcing;
7. useful downloadable/reference assets;
8. transparent trust pages;
9. excellent performance;
10. consistent maintenance.

The goal is not the most pages.

The goal is the **best complete topical system**.

---

# 21. PHASE-1 TOPICAL BOUNDARY

## In scope

- Mauricette;
- working hours;
- daily hours;
- weekly hours;
- breaks;
- multiple work periods;
- addition/subtraction;
- decimal time;
- centesimal time;
- overtime;
- complementary hours;
- 35h;
- 39h;
- 151,67 monthly hours;
- 1607 annual hours;
- effective working time;
- maximum working duration;
- night work;
- Sunday work;
- travel time;
- Excel timesheets;
- payroll time rounding;
- hourly pay based on worked hours.

## Out of scope for initial authority building

Avoid:

- mortgage calculators;
- BMI;
- age calculators;
- generic percentage calculators;
- unrelated TVA tools;
- generic loans;
- generic finance;
- calorie calculators;
- unrelated converters.

Do not dilute the site's topical identity to increase page count.

---

# 22. CANONICAL SEO PAGE MAP

This is the default URL ownership plan.

Before creating a new page, compare it against this map.

| Pri. | URL | Primary keyword / intent | Type |
|---|---|---|---|
| P0 | `/` | calculette mauricette + calculatrice mauricette | Homepage / tool |
| P0 | `/calcul-heures-travail/` | calcul heures de travail | Calculator |
| P0 | `/calcul-heures-semaine/` | calcul heures semaine | Calculator |
| P0 | `/calcul-heures-supplementaires/` | calcul heures supplémentaires | Calculator |
| P0 | `/conversion-heures-centiemes/` | conversion heures centièmes | Calculator |
| P0 | `/soustraction-heures/` | soustraction heures | Calculator |
| P1 | `/calcul-pause-travail/` | calcul pause travail | Calculator |
| P1 | `/feuille-heures-travail/` | feuille heures travail | Tool / template |
| P1 | `/calcul-salaire-horaire/` | calcul salaire taux horaire heures | Calculator |
| P1 | `/calcul-heures-nuit/` | calcul heures de nuit | Calculator |
| P1 | `/calcul-heures-complementaires/` | calcul heures complémentaires | Calculator |
| P1 | `/calcul-majoration-dimanche/` | calcul majoration dimanche | Calculator |
| P0 | `/35h-heures-par-mois/` | 35h combien d'heures par mois | Guide |
| P1 | `/39h-heures-par-mois/` | 39h combien d'heures par mois | Guide |
| P0 | `/151-67-heures-par-mois/` | 151,67 heures par mois | Guide |
| P1 | `/1607-heures-par-an/` | 1607 heures par an | Guide |
| P0 | `/comment-calculer-heures-travail/` | comment calculer ses heures de travail | Guide |
| P1 | `/temps-travail-effectif/` | temps de travail effectif | Legal guide |
| P1 | `/pause-obligatoire-6-heures/` | pause obligatoire 6 heures travail | Legal guide |
| P1 | `/pause-dejeuner-temps-travail/` | pause déjeuner temps de travail | Legal guide |
| P1 | `/temps-trajet-travail/` | temps de trajet temps de travail | Legal guide |
| P1 | `/duree-maximale-travail/` | durée maximale travail jour semaine | Legal guide |
| P1 | `/heures-supplementaires-35h/` | heures supplémentaires 35h | Legal guide |
| P1 | `/contrat-39h-heures-supplementaires/` | contrat 39h heures supplémentaires | Legal guide |
| P1 | `/heures-complementaires-temps-partiel/` | heures complémentaires temps partiel | Legal guide |
| P2 | `/travail-de-nuit-heures/` | travail de nuit heures | Legal guide |
| P2 | `/travail-dimanche-majoration/` | travail dimanche majoration | Legal guide |
| P0 | `/heures-centiemes-tableau/` | tableau minutes centièmes | Reference asset |
| P1 | `/calcul-heures-excel/` | calcul heures Excel | Guide + asset |
| P2 | `/arrondi-heures-paie/` | arrondi heures paie | Guide |

## Priority

**P0** = foundational / launch-critical  
**P1** = publish after core architecture is stable  
**P2** = publish when demand/Search Console justifies it

---

# 23. TRUST / LEGAL PAGES

Current planned trust pages:

```text
/a-propos/
/contact/
/politique-de-confidentialite/
/mentions-legales/
/conditions-utilisation/
```

These are primarily trust and utility pages, not keyword landing pages.

Do not keyword-stuff them.

## Header

Main navigation should include:

- Calculatrice;
- Comment ça marche;
- À propos;
- Contact.

`Contact` should appear as a compact visually distinct button.

## Footer

Footer should include:

- Calculatrice;
- À propos;
- Contact;
- Politique de confidentialité;
- Mentions légales;
- Conditions d'utilisation.

Keep footer compact.

Do not build an SEO keyword footer.

---

# 24. CONTACT FORM

Public email:

```text
contact@calculette-mauricette.pro
```

Contact form provider:

```text
Web3Forms
```

The form should:

- preserve existing site design;
- use French labels;
- use real `<label>` elements;
- support name;
- email;
- subject;
- message;
- have honeypot spam protection;
- disable the submit button while submitting;
- show success only after actual confirmed submission;
- show natural French error messages;
- link to the privacy policy.

Do not silently discard submissions.

Do not create fake success states.

The privacy policy must accurately describe the actual form data flow.

---

# 25. PRIVACY / LOCAL DATA

If calculator data is stored only in `localStorage`, say so accurately.

If a calculator sends data to a server later, update privacy language.

Do not claim:

> Vos données ne quittent jamais votre appareil.

unless technically true.

Distinguish:

- cookies;
- localStorage;
- analytics;
- form submission data.

Do not add a cookie banner merely for appearance if no consent-requiring tracking exists.

---

# 26. LEGAL / PAYROLL GUARDRAILS

French working-time and payroll rules may vary according to:

- collective agreements;
- employment contracts;
- company agreements;
- sector;
- employee category;
- working-time arrangements;
- exceptions.

Never claim:

> Every hour over 8 hours/day is always overtime in France.

Never hard-code universal overtime assumptions without qualification.

When a tool estimates pay or legal treatment, use wording such as:

> **Estimation indicative**

and explain the assumptions.

Time arithmetic should remain correct even if legal interpretation varies.

---

# 27. SOURCE VERIFICATION STANDARD

For current French legal/payroll claims, use primary sources first:

1. Legifrance;
2. Service-Public.fr;
3. Ministère du Travail;
4. URSSAF where relevant;
5. other official French government sources;
6. reputable professional sources only for secondary interpretation.

Competitors are not legal authorities.

Treat all legal thresholds and rates as time-sensitive.

Do not publish numeric legal claims from model memory alone.

---

# 28. CONTENT WRITING STANDARD

For every SEO article:

- answer the main question early;
- match the exact search intent;
- write for readers first;
- use natural French;
- use short readable paragraphs;
- vary structure from article to article;
- avoid AI-style repeated section templates;
- use primary keyword naturally;
- use related concepts naturally;
- provide information gain;
- remove filler;
- explain formulas simply;
- use examples;
- verify arithmetic;
- use official sources where needed;
- add internal links professionally;
- prevent cannibalization;
- create unique metadata;
- ensure page is indexable.

Do not force a fixed word count.

Do not create unnecessary images merely to satisfy a checklist.

Do not create fake FAQ sections.

---

# 29. NON-AI CONTENT STYLE

The site should not read like generic AI content.

Avoid repeated phrases such as:

- “Dans le monde d'aujourd'hui…”
- “Il est important de noter que…”
- “Que vous soyez salarié, employeur ou entrepreneur…”
- “Découvrez notre solution…”
- “Optimisez votre temps…”
- “Une solution puissante…”
- “Notre outil révolutionnaire…”

Prefer concrete French:

> Vous commencez à 8 h 30, terminez à 17 h 30 et prenez une heure de pause ? Votre temps travaillé est de 8 heures.

Use active voice and useful examples.

---

# 30. UI / UX DESIGN DIRECTION

The entire site must look **human-coded, restrained and intentional**.

Desired qualities:

- clean;
- simple;
- calm;
- professional;
- trustworthy;
- practical;
- lightweight;
- modern;
- French;
- tool-first.

It should not feel like:

- an AI-generated landing page;
- a SaaS template;
- a Framer template;
- a dashboard UI kit;
- an affiliate blog.

---

# 31. REMOVE AI-LOOKING DESIGN PATTERNS

Avoid or remove:

- eyebrow labels above every section;
- tiny uppercase labels;
- repetitive chips/badges;
- excessive pills;
- cards inside cards;
- repeated 3-column feature grids;
- oversized rounded corners;
- giant shadows;
- gradients everywhere;
- glassmorphism;
- decorative blobs;
- icons on every heading/card/button;
- fake trust badges;
- giant empty whitespace;
- repeated “label → heading → paragraph → cards” layouts;
- excessive centered sections;
- decorative scroll animations.

Use typography, spacing and borders before decorative containers.

---

# 32. VISUAL SYSTEM

Use:

- light neutral / warm-white background;
- dark charcoal text;
- one restrained accent family;
- subtle neutral borders;
- minimal shadow;
- modest border radius;
- strong typography;
- consistent spacing;
- readable content widths.

Do not use random colors section-by-section.

---

# 33. TYPOGRAPHY

Use one clean professional sans-serif.

Preferred families include:

- Inter;
- Geist;
- Manrope;
- DM Sans.

Use sensible system fallbacks.

Do not load excessive weights.

Body text should generally be comfortable around 16–18px.

Do not use tiny gray text for important information.

---

# 34. LAYOUT

General content width:

approximately 1100–1200px.

Long-form legal/editorial text:

approximately 700–850px.

Use consistent horizontal padding.

Avoid oversized blank gaps.

Most informational content should be left-aligned rather than excessively centered.

---

# 35. CALCULATOR UI

Treat the calculator like a high-quality utility tool.

Prioritize:

- label clarity;
- input alignment;
- readable result hierarchy;
- mobile adaptation;
- visible focus states;
- useful add/remove controls;
- clear validation.

Avoid:

- glowing results;
- dashboard widgets;
- giant icons;
- gradient cards;
- flashy animations.

---

# 36. CARD / COMPONENT RULE

Use cards only when grouping genuinely helps.

If content can live naturally on the page without a card, do that.

Do not make:

- benefits;
- steps;
- FAQs;
- legal sections;
- every paragraph

into separate cards.

Reusable UI components are useful.

Reusable repetitive prose templates are not.

---

# 37. FAQ UI

Use a simple accessible accordion if FAQ exists.

Use subtle dividers.

Do not wrap each question in a huge decorative card.

---

# 38. ACCESSIBILITY

All interactive controls should support:

- keyboard navigation;
- visible focus;
- proper labels;
- adequate contrast;
- sensible tab order;
- semantic buttons;
- accessible errors;
- touch-friendly targets.

Do not remove outlines without replacing them.

---

# 39. MOBILE UX

Test at approximately:

- 360px;
- 390px;
- 768px;
- 1024px;
- 1440px.

The site must have:

- no horizontal overflow;
- readable text;
- usable calculator rows;
- large enough inputs;
- compact header;
- easy footer navigation.

---

# 40. PERFORMANCE

Prefer:

- static HTML;
- small JS;
- code splitting;
- efficient fonts;
- minimal third-party scripts;
- lazy-loaded noncritical images;
- stable dimensions.

Avoid:

- multi-megabyte bundles;
- autoplay video;
- giant hero images;
- multiple trackers;
- heavy animation frameworks;
- unnecessary hydration;
- giant UI libraries.

Calculator feedback should feel instant.

---

# 41. CORE WEB VITALS

Prioritize:

- LCP;
- CLS;
- INP;
- stable calculator layout;
- responsive input handling.

Do not manipulate metrics.

Improve real user experience.

---

# 42. STRUCTURED DATA

Use truthful minimal structured data.

Potential types:

- `WebSite`;
- `WebApplication`;
- `Organization` or `Person` only when truthful;
- `Article` / `BlogPosting`;
- `BreadcrumbList`.

Do not fabricate:

- ratings;
- aggregateRating;
- review counts;
- testimonials;
- credentials;
- awards;
- prices.

Schema must match visible content.

---

# 43. FAQ STRUCTURED DATA

Do not build SEO strategy around FAQ rich results.

If FAQ schema is used:

- visible questions/answers must exist;
- schema must match visible content exactly;
- do not create fake keyword FAQs.

---

# 44. INTERNAL LINKING

The mandatory detailed internal-linking workflow lives in:

```text
SEO-PUBLISHING-PLAYBOOK.md
```

Key rule:

> Every important new page must link to relevant existing content, and Codex must also update relevant existing pages to link back to the new page where contextually appropriate.

Do not rely only on navigation/footer/related-post widgets.

Contextual body links matter.

---

# 45. INTERNAL LINK HIERARCHY

Broadly:

```text
                         HOME
              Calculette / Calculatrice
                         │
       ┌─────────────────┼─────────────────┐
       │                 │                 │
    HEURES          CONVERSION        RÈGLES / PAY
       │                 │                 │
 Daily/weekly      Centièmes         Overtime
 Pause             Subtraction       Complementary
 35h/39h           Excel             Night
 151,67h           Rounding          Sunday
 1607h                               Travel / work time
```

Every supporting article should have a logical parent.

---

# 46. ANCHOR TEXT

Use natural descriptive French.

Good:

- calculer vos heures supplémentaires
- calcul des heures de travail
- convertir les minutes en centièmes
- tableau minutes en centièmes
- calculer une semaine de travail
- comprendre les 151,67 heures mensuelles

Avoid:

- cliquez ici;
- voir plus;
- cette page;
- keyword-stuffed anchors.

Use natural variation.

---

# 47. CANNIBALIZATION

Before every new page, search for:

- exact keyword;
- synonyms;
- singular/plural;
- calculette/calculatrice;
- heure/heures;
- existing H1;
- title tags;
- routes;
- overlapping content.

If intent overlaps heavily:

1. improve the stronger page;
2. merge content if necessary;
3. redirect removed URL;
4. update internal links;
5. update sitemap;
6. preserve backlinks.

Do not leave near-duplicate pages indexed.

---

# 48. INFORMATION GAIN

Every important page should provide at least one meaningful advantage such as:

- working calculator;
- original table;
- formula;
- worked example;
- downloadable spreadsheet;
- printable sheet;
- edge-case explanation;
- comparison;
- practical decision tree;
- common mistake demonstration.

Do not publish generic paraphrases of ranking competitors.

---

# 49. LINKABLE ASSETS

Priority assets:

## Minutes → centièmes

`/heures-centiemes-tableau/`

Should include:

- 1–60 minute table;
- HTML;
- print-friendly format;
- optional PDF;
- useful examples.

## Excel timesheet

`/calcul-heures-excel/`

Potential fields:

- date;
- start;
- end;
- break;
- daily total;
- decimal total;
- weekly total.

No email gate preferred.

## Printable weekly sheet

`/feuille-heures-travail/`

Provide interactive/printable utility.

## Embeddable calculator

Potential later asset.

Do not force manipulative followed attribution links.

---

# 50. OFF-PAGE STRATEGY

Relevant outreach targets:

- HR;
- payroll;
- accounting;
- French small business;
- Excel resources;
- employee-rights resources;
- training providers;
- professional associations;
- career/work-time publishers;
- freelance/business communities.

Pitch useful assets, not “please link for SEO”.

Do not use:

- PBNs;
- hacked links;
- bulk paid links;
- spam comments;
- spun guest posts;
- fake directories;
- fake scholarship tactics;
- doorway sites.

---

# 51. SEARCH CONSOLE STRATEGY

Track separately:

## Head terms

- calculette mauricette
- calculatrice mauricette

## Core calculations

- calcul heures de travail
- calcul heure travail
- calcul heures semaine
- calcul heures supplémentaires

## Conversion

- heures en centièmes
- conversion heures centièmes
- minutes en centièmes

## Monthly schedules

- 35h combien par mois
- 151,67 heures
- 39h combien par mois
- 1607 heures

## Secondary

- calcul pause travail
- heures complémentaires
- calcul heures de nuit
- majoration dimanche

---

# 52. SEARCH CONSOLE DECISION RULES

## Position 8–30 with impressions

Improve the existing page first.

Investigate:

- intent;
- examples;
- internal links;
- title;
- content gaps;
- UX;
- performance;
- freshness;
- authority.

Do not immediately create another page for the same query.

## High impressions / low CTR

Review:

- title clarity;
- description;
- actual SERP intent;
- whether page looks like the right tool/result.

Avoid clickbait.

## Multiple URLs rank for one query

Treat as possible cannibalization.

Inspect:

- title;
- H1;
- internal links;
- content overlap;
- canonical;
- search intent.

Merge or refocus where appropriate.

---

# 53. TRUST ARCHITECTURE

The site should maintain truthful trust pages.

## About

Explain:

- purpose;
- what the calculator does;
- limitations;
- why the resource exists.

## Contact

Use real contact method.

## Editorial policy / sources

If created later, explain:

- research process;
- calculator testing;
- source hierarchy;
- correction process.

## Legal / privacy

Reflect actual implementation.

Never invent:

- French office;
- employees;
- SIREN/SIRET;
- lawyer review;
- HR certification;
- years of experience;
- awards;
- user counts.

---

# 54. REVIEW DATES

Use:

```text
Publié le …
Mis à jour le …
Vérifié le …
```

only when true.

Never auto-update dates on every deployment or every new year.

---

# 55. DOWNLOADABLE ASSET QA

Before publishing XLSX/PDF/CSV:

- verify formulas;
- verify file opens;
- verify French labels;
- verify date/time formatting;
- verify filenames;
- verify mobile download;
- verify no private metadata;
- verify no broken dependency.

---

# 56. REPOSITORY WORKFLOW FOR CODEX

When asked to create or modify a page:

## Step 1 — Inspect

Inspect:

- routes;
- components;
- layouts;
- styles;
- metadata system;
- sitemap;
- robots;
- structured data;
- time utilities;
- internal links;
- tests.

## Step 2 — Check overlap

Search:

- keyword;
- synonyms;
- H1/title;
- route;
- similar tool logic.

## Step 3 — Preserve architecture

Do not silently change:

- URLs;
- canonicals;
- design system;
- build tooling;
- analytics;
- hosting setup.

## Step 4 — Implement

For calculator pages: build a real functional tool.

For content pages: make them genuinely useful and integrated.

## Step 5 — SEO QA

Check:

- title;
- description;
- H1;
- canonical;
- internal links;
- sitemap;
- robots;
- schema;
- indexability.

## Step 6 — Product QA

Test:

- normal ranges;
- overnight;
- multiple periods;
- breaks;
- reset;
- mobile;
- errors.

## Step 7 — Editorial QA

Check:

- natural French;
- originality;
- arithmetic;
- source accuracy;
- no filler;
- no invented legal claims;
- no cannibalization.

## Step 8 — Build

Run the production build before declaring completion.

---

# 57. 90-DAY STRATEGIC ROADMAP

Use this as a broad plan, adjusting based on actual repo state and Search Console data.

## Phase 1 — Core product

Perfect:

- homepage;
- daily calculator;
- weekly mode;
- subtraction;
- conversion;
- technical SEO;
- trust pages.

## Phase 2 — Core calculators

Build:

- `/calcul-heures-travail/`
- `/calcul-heures-semaine/`
- `/calcul-heures-supplementaires/`
- `/conversion-heures-centiemes/`
- `/calcul-pause-travail/`

## Phase 3 — Foundational guides/assets

Publish:

- `/35h-heures-par-mois/`
- `/151-67-heures-par-mois/`
- `/comment-calculer-heures-travail/`
- `/heures-centiemes-tableau/`
- `/calcul-heures-excel/`
- `/feuille-heures-travail/`
- `/39h-heures-par-mois/`

## Phase 4 — Legal/support cluster

Publish selectively:

- effective working time;
- required break;
- lunch break;
- maximum duration;
- overtime;
- complementary hours;
- travel time;
- night work;
- Sunday work.

## Phase 5 — Data-driven improvement

Use Search Console to:

- improve pages ranking 8–30;
- strengthen internal links;
- consolidate cannibalization;
- improve CTR;
- refresh legal content;
- identify actual content gaps.

Do not blindly keep publishing once the core cluster exists.

---

# 58. PUBLISHING CADENCE

After the core build:

Aim for roughly **2–3 meaningful releases per week**.

A meaningful release may be:

- calculator;
- substantial guide;
- downloadable asset;
- interactive table;
- major UX improvement;
- important legal-source refresh;
- internal-link architecture improvement.

Do not publish daily low-value AI articles just to increase index count.

---

# 59. METRICS THAT MATTER

Track:

- rankings for both head terms;
- non-branded clicks;
- cluster impressions;
- CTR;
- query-to-page consistency;
- indexed canonical pages;
- internal-link coverage;
- backlinks to useful assets;
- Core Web Vitals;
- mobile usability;
- calculator engagement;
- downloads/print actions where relevant.

Do not judge success only by total pageviews.

---

# 60. DO NOT DO THESE THINGS

Codex must not proactively:

- create duplicate Mauricette pages;
- mass-generate year pages;
- mass-generate city pages;
- mass-generate near-identical keyword pages;
- publish legal claims from memory alone;
- copy competitor text;
- copy competitor design;
- invent experts;
- invent statistics;
- invent credentials;
- invent reviews;
- hide keyword blocks;
- stuff footer anchors;
- create thin tag archives;
- use doorway pages;
- build spam links;
- add unrelated calculators for page count;
- add heavy dependencies for simple UI;
- re-platform unnecessarily;
- auto-update review dates;
- break the calculator while improving design;
- sacrifice accessibility for aesthetics.

---

# 61. WHEN CODEX IS UNSURE ABOUT A NEW PAGE

Use this decision tree:

```text
Does an existing page already satisfy the same intent?
|
+-- YES → Improve/expand the existing page.
|
+-- NO → Is the new topic inside the working-time topical boundary?
          |
          +-- NO → Do not add without explicit approval.
          |
          +-- YES → Does the intent deserve a distinct tool/guide?
                    |
                    +-- NO → Add it to the closest parent page.
                    |
                    +-- YES → Create a new URL and integrate it into the link graph.
```

---

# 62. WHEN CODEX IS UNSURE ABOUT A LEGAL CLAIM

Do not guess.

1. identify the claim;
2. find current official French source;
3. verify current wording/effective date;
4. distinguish general rule from exceptions;
5. cite source;
6. write conservatively;
7. avoid individualized legal advice.

---

# 63. WHEN CODEX IS UNSURE ABOUT SEO

Prioritize:

1. search intent;
2. user usefulness;
3. page uniqueness;
4. factual accuracy;
5. crawlability;
6. internal architecture;
7. performance;
8. metadata;
9. structured data;
10. secondary tactics.

Never sacrifice the first five for a speculative SEO trick.

---

# 64. CURRENT STRATEGIC MOAT

```text
Best Mauricette calculator
        ↓
Best related calculator suite
        ↓
Best French working-time topical cluster
        ↓
Useful downloadable/reference assets
        ↓
Current authoritative sourcing
        ↓
Professional internal linking
        ↓
Relevant editorial backlinks
        ↓
Search Console-driven iteration
```

---

# 65. DEFINITION OF DONE — ANY SEO PAGE

A page is not complete because it renders.

It is complete only when:

## Product
- [ ] intent satisfied;
- [ ] tool works if applicable;
- [ ] examples correct;
- [ ] edge cases handled.

## Content
- [ ] original;
- [ ] useful;
- [ ] natural French;
- [ ] no filler;
- [ ] no unsupported claims;
- [ ] no duplication.

## SEO
- [ ] unique title;
- [ ] unique description;
- [ ] one H1;
- [ ] canonical;
- [ ] correct indexation;
- [ ] sitemap handled;
- [ ] internal links implemented;
- [ ] structured data only if appropriate.

## Trust
- [ ] legal claims verified;
- [ ] sources current;
- [ ] dates truthful;
- [ ] caveats proportionate.

## UX
- [ ] responsive;
- [ ] accessible;
- [ ] fast;
- [ ] no broken layout;
- [ ] no intrusive signup.

## QA
- [ ] tests pass;
- [ ] no broken links;
- [ ] no console errors;
- [ ] no route conflict;
- [ ] no cannibalization;
- [ ] production build succeeds.

---

# 66. REPOSITORY DOCUMENTATION STRUCTURE

Use:

```text
/CODEX.md
/SEO-PUBLISHING-PLAYBOOK.md
```

These two files are the project's source of truth and must be read completely before making changes.

If the project becomes significantly larger, future optional documentation may include:

```text
/docs/seo/url-map.md
/docs/seo/legal-source-policy.md
/docs/seo/search-console-log.md
/docs/product/calculator-spec.md
```

Do not fragment documentation unnecessarily.

---

# 67. FINAL CODEX INSTRUCTION

When working in this repository:

> **Do not optimize pages in isolation. Optimize the entire topical system.**

Every meaningful change should improve one or more of:

- homepage ownership of `calculette mauricette`;
- homepage ownership of `calculatrice mauricette`;
- calculator usefulness;
- topical authority;
- internal linking;
- factual accuracy;
- trust;
- speed;
- accessibility;
- organic discoverability.

When choosing between:

> one excellent page

and:

> three near-duplicate SEO pages,

choose the excellent page.

When choosing between:

> a generic 2,500-word article

and:

> a concise guide with a working tool, verified example, official source, useful table and strong internal links,

choose the useful guide.

The objective is not to imitate competitors.

The objective is to be:

> **more useful, more focused, more accurate, faster and easier to understand than all of them.**

---

# 68. TEN RULES CODEX MUST ALWAYS REMEMBER

1. **Homepage owns both `calculette mauricette` and `calculatrice mauricette`.**
2. **Never create separate pages for those lexical variants.**
3. **The calculator is the primary product and primary CTA.**
4. **Stay tightly focused on French working-time topics.**
5. **One intent = one canonical URL.**
6. **Build real tools and useful assets, not thin SEO pages.**
7. **Verify French legal/payroll claims using primary official sources.**
8. **Every publication must strengthen professional internal linking.**
9. **Use Search Console data before blindly expanding content.**
10. **The website must look human-coded, simple, fast, trustworthy and non-AI.**

---

_Last strategic update: 18 August 2026._
