# ONPAGE-SEO.md — On-Page SEO & Internal Linking Standard

> **Project:** Calculette Mauricette  
> **Market:** France  
> **Language:** French (`fr-FR`)  
> **Primary head terms:** `calculette mauricette`, `calculatrice mauricette`

## 1. Core Rule

Every indexable page must have one clear search intent and one canonical URL.

Before Codex creates or publishes any page, it must:

1. Read `CODEX.md`.
2. Read this `ONPAGE-SEO.md`.
3. Inspect the full repository.
4. Search existing URLs, titles, H1s, metadata and content for the same or closely related intent.
5. Confirm that the new page does not cannibalize an existing page.
6. Identify the page's parent calculator, pillar or topic cluster.
7. Decide which existing pages the new page should link to.
8. Decide which existing pages should be updated to link back to the new page.
9. Implement both directions of internal linking where contextually useful.
10. Run a final SEO, build and broken-link QA.

**A new page is not complete until it is integrated into the internal-link graph.**

---

## 2. Mandatory Bidirectional Internal Linking

Every important new article or tool should participate in two-way internal linking.

### New page → existing pages

The new page should link naturally to relevant:

- parent calculator;
- pillar page;
- supporting guides;
- related reference tools;
- deeper explanations.

### Existing pages → new page

Codex must search the repository for existing pages that already mention or naturally lead into the new topic.

Update the best relevant existing pages with contextual links to the new page.

Do not rely only on:

- header navigation;
- footer;
- generic “related posts” blocks;
- category cards.

The strongest internal links should usually appear naturally inside useful body content.

---

## 3. Internal Linking Objectives

Internal links should:

1. help users navigate to useful next steps;
2. help Google understand topical relationships;
3. distribute internal authority to strategic pages;
4. clarify hierarchy;
5. prevent orphan pages;
6. reduce cannibalization;
7. support topical authority around working-time calculations;
8. help new URLs get discovered quickly.

Internal linking is **not** a keyword-stuffing tactic.

---

## 4. Topical Architecture

```text
HOME
Calculette / Calculatrice Mauricette
│
├── CALCUL DES HEURES
│   ├── calcul heures de travail
│   ├── calcul heures semaine
│   ├── pause travail
│   ├── feuille d'heures
│   ├── 35h par mois
│   ├── 39h par mois
│   ├── 151,67 heures
│   └── 1607 heures
│
├── CONVERSION DU TEMPS
│   ├── heures en centièmes
│   ├── tableau minutes / centièmes
│   ├── soustraction d'heures
│   ├── heures décimales
│   ├── Excel
│   └── arrondi
│
└── RÈGLES / RÉMUNÉRATION
    ├── heures supplémentaires
    ├── heures complémentaires
    ├── temps partiel
    ├── travail de nuit
    ├── travail du dimanche
    ├── temps de trajet
    ├── temps de travail effectif
    └── durée maximale
```

Every new page should have a logical parent in this graph.

If a proposed page has no logical parent, Codex should question whether it belongs on the site.

---

## 5. Homepage Authority

The homepage `/` owns both:

- `calculette mauricette`
- `calculatrice mauricette`

Do not create separate exact-match landing pages for those two phrases.

The homepage should prioritize links to the strongest core destinations, such as:

- calcul heures de travail;
- calcul heures semaine;
- calcul heures supplémentaires;
- conversion heures centièmes;
- soustraction heures;
- feuille heures travail;
- 35h par mois;
- 151,67 heures.

Do not link every article from the homepage merely to increase link count.

---

## 6. Parent–Child Linking Examples

### `/35h-heures-par-mois/`

Should naturally link to:

- homepage / Mauricette calculator;
- weekly-hours calculator;
- overtime calculator;
- 151,67 monthly-hours guide;
- 39h monthly-hours guide where relevant.

### `/151-67-heures-par-mois/`

Should naturally link to:

- 35h monthly-hours guide;
- weekly-hours calculator;
- working-hours calculator;
- Excel hours guide.

### `/pause-obligatoire-6-heures/`

Should naturally link to:

- pause calculator;
- effective working-time guide;
- lunch-break guide;
- working-hours calculator.

### `/heures-supplementaires-35h/`

Should naturally link to:

- overtime calculator;
- 35h monthly-hours guide;
- 39h overtime guide;
- maximum-working-time guide.

### `/heures-centiemes-tableau/`

Should naturally link to:

- centesimal converter;
- Excel guide;
- subtraction tool;
- homepage calculator where useful.

---

## 7. Mandatory Publishing Workflow

Whenever Codex is asked to create or publish a new SEO page:

### Step 1 — Define the intent

Create an internal planning record:

```text
Primary keyword:
Secondary keywords:
Search intent:
Page type:
Target URL:
Parent page:
Closest existing competing URL:
Relevant existing pages:
Potential incoming links:
Potential outgoing links:
```

### Step 2 — Check cannibalization

Search the entire repository for:

- target keyword;
- synonyms;
- singular/plural variations;
- close H1s;
- similar title tags;
- overlapping sections;
- similar slugs.

If an existing page already satisfies the same search intent, improve that page instead of creating a second one.

### Step 3 — Create or update the page

Build the page around the exact intent.

### Step 4 — Add outgoing contextual links

Link the new page to relevant existing pages.

### Step 5 — Add incoming contextual links

Search existing pages for relevant opportunities and update the strongest ones to link to the new page.

### Step 6 — QA

Check:

- anchor text;
- crawlability;
- canonical;
- sitemap;
- broken links;
- orphan status;
- duplicate intent;
- production build.

---

## 8. Never Create Pages for Trivial Keyword Variants

Do not create separate pages such as:

```text
/calculette-mauricette/
/calculatrice-mauricette/
```

Do not create:

```text
/calcul-heures-travail/
/calcul-des-heures-de-travail/
/calculer-heures-travail/
```

unless each route serves a genuinely different search intent.

Keyword variants belong naturally inside one authoritative page.

---

## 9. Tool Intent vs Guide Intent

Separate URLs can exist when the intent is materially different.

Example:

```text
/calcul-heures-travail/
```

Intent:

> User wants to calculate now.

This should be tool-first.

Versus:

```text
/comment-calculer-heures-travail/
```

Intent:

> User wants to understand the calculation method.

This should be an educational guide.

Make the distinction obvious in:

- title;
- H1;
- opening;
- page structure;
- functionality;
- internal links.

---

## 10. Incoming Link Audit

For every important new page, inspect existing pages and identify approximately **2–5 strong contextual incoming-link opportunities** where they genuinely exist.

Do not force a quota when fewer are relevant.

Prioritize:

1. parent pillar;
2. closely related high-value guide;
3. related calculator;
4. supporting article;
5. relevant reference asset;
6. homepage only when strategically justified.

---

## 11. Contextual Link Example

Weak:

> Pour une semaine complète, il faut additionner le total de chaque journée. [En savoir plus]

Better:

> Pour une semaine complète, vous pouvez utiliser notre [calculateur d'heures hebdomadaires](/calcul-heures-semaine/) afin d'additionner automatiquement chaque journée.

The link should be helpful even if SEO did not exist.

---

## 12. Outgoing Link Standard

Every substantial new article should normally include:

- one link to its parent calculator/pillar;
- 1–3 closely related supporting pages;
- one deeper resource when genuinely useful.

Do not force excessive linking.

Avoid multiple links in every paragraph.

---

## 13. Anchor Text Standard

Use natural, descriptive French anchors.

Good:

- calculer vos heures supplémentaires
- calcul des heures de travail
- convertir les minutes en centièmes
- tableau minutes en centièmes
- calculer une semaine de travail
- comprendre les 151,67 heures mensuelles
- temps de travail effectif
- calculer une pause de travail

Avoid:

- cliquez ici
- en savoir plus
- voir cet article
- lire plus
- cette page

Avoid keyword-stuffed anchors.

---

## 14. Anchor Variation

Do not use exactly the same anchor every time.

For an overtime calculator, natural variants may include:

- calcul des heures supplémentaires
- calculer vos heures supplémentaires
- notre calculateur d'heures supplémentaires
- vérifier le total de vos heures supplémentaires

Do not manufacture awkward variations purely for SEO.

---

## 15. Link Placement Priority

Prefer:

1. contextual body link;
2. useful inline callout;
3. relevant table/resource link;
4. curated related-content block;
5. navigation/footer.

Footer links alone do not count as sufficient contextual internal linking.

---

## 16. First Relevant Mention

When useful, link the first natural relevant mention of an important related topic.

Do not link every repetition of the same phrase.

---

## 17. Avoid Excessive Internal Links

General guideline only:

- short article: 3–6 useful internal links;
- medium article: 5–10;
- long guide: 7–15.

These are not quotas.

Use fewer when fewer genuinely help.

---

## 18. Avoid Repeating the Same Destination

Normally, do not link repeatedly to the same URL from a short page.

A repeated destination may be appropriate on a long guide if the later context is materially different.

---

## 19. Orphan Page Prevention

No valuable indexable page should be orphaned.

Before publishing, confirm:

- at least one contextual incoming link;
- logical hierarchy placement;
- sitemap inclusion.

Strategic pages should have multiple strong incoming links.

---

## 20. Click Depth

Important pages should generally be reachable within **1–2 meaningful clicks** from the homepage.

Do not bury high-value tools or guides several levels deep.

---

## 21. Internal Authority Priorities

### Tier 1

- homepage;
- flagship Mauricette calculator;
- calcul heures de travail;
- calcul heures semaine;
- calcul heures supplémentaires;
- conversion heures centièmes.

### Tier 2

- 35h monthly;
- 151,67 monthly;
- 39h monthly;
- Excel hours;
- centesimal table;
- pause calculator.

### Tier 3

- narrower legal guides;
- long-tail supporting articles.

Internal prominence should reflect strategic importance and usefulness.

---

## 22. Required On-Page SEO

Every indexable page must have:

- one canonical URL;
- unique title;
- unique meta description;
- exactly one meaningful H1;
- logical H2/H3 hierarchy;
- primary keyword used naturally;
- useful secondary concepts;
- contextual internal links;
- authoritative external citations where needed;
- crawlable rendered content;
- no accidental `noindex`;
- sitemap inclusion;
- mobile-friendly rendering.

---

## 23. Title Tag Standard

Titles should:

- match search intent;
- use the primary query naturally;
- be readable;
- explain the outcome;
- avoid stuffing.

Good:

```text
151,67 heures par mois : calcul et explication
```

Bad:

```text
151,67 Heures Calcul 35h Heures Mois Temps Travail France
```

Do not add the year to evergreen pages merely to simulate freshness.

---

## 24. H1 Standard

Use one clear H1 aligned with the title and actual page intent.

Natural title/H1 variation is acceptable.

---

## 25. Opening Standard

Answer the main question quickly, usually in the first 2–4 sentences.

Do not force identical intro formulas across every page.

Avoid filler such as:

> Dans le monde du travail moderne...

Start with the answer.

---

## 26. Keyword Use

Use the primary keyword naturally in:

- title;
- H1;
- introduction;
- relevant subheading where useful;
- body copy.

There is no keyword-density target.

Do not mechanically repeat exact-match phrases.

---

## 27. Semantic Coverage

Cover related concepts only when they help answer the topic.

For a 35h monthly-hours page, relevant concepts may include:

- 35 heures par semaine;
- 151,67 heures par mois;
- mensualisation;
- heures supplémentaires;
- durée légale du travail;
- temps complet.

Do not create keyword lists disguised as prose.

---

## 28. Information Gain

Every important page should include at least one genuinely useful element beyond a generic competitor summary.

Examples:

- original worked example;
- calculator;
- conversion table;
- formula;
- downloadable sheet;
- edge-case explanation;
- comparison table;
- practical checklist;
- interactive example;
- common mistake demonstration.

Do not publish commodity paraphrases.

---

## 29. Page-Type Standards

### Calculator page

Must generally include:

1. tool immediately;
2. concise explanation;
3. worked example;
4. formula/method;
5. edge cases;
6. useful internal links;
7. FAQ only if genuinely useful.

### Informational guide

Should include:

1. direct answer;
2. explanation;
3. examples;
4. current source verification where necessary;
5. links to relevant calculators;
6. useful supporting links.

### Reference asset

Should include:

1. immediately usable table/download;
2. concise explanation;
3. calculation method;
4. related tool links;
5. printable/download version when useful.

---

## 30. Related Content Blocks

Related-content components must be curated by semantic relevance.

Do not automatically show random recent posts.

Example for `151,67 heures par mois`:

- 35h par semaine;
- weekly-hours calculator;
- overtime calculator;
- Excel timesheet.

---

## 31. Breadcrumbs

Use breadcrumbs on deeper content where they genuinely help navigation.

Example:

```text
Accueil > Temps de travail > 151,67 heures par mois
```

Breadcrumbs must:

- reflect actual hierarchy;
- use crawlable links;
- be visible;
- use valid structured data if implemented.

---

## 32. External Source Standard

For French legal/payroll claims, prioritize:

1. Legifrance;
2. Service-Public.fr;
3. Ministère du Travail;
4. URSSAF;
5. other authoritative official French sources.

Do not cite competitors as legal authorities.

---

## 33. Legal Content Linking

Use calculators as practical aids without presenting them as individualized legal determinations.

Good:

> Pour vérifier le nombre total d'heures de votre semaine, utilisez le [calculateur d'heures de travail](/calcul-heures-travail/).

Avoid:

> Utilisez notre outil pour savoir exactement ce que votre employeur vous doit.

unless the tool and legal analysis genuinely support that statement.

---

## 34. Lateral Legal Links

Build semantic relationships naturally.

For example, `temps-travail-effectif` may link to:

- pause déjeuner;
- pause obligatoire;
- temps de trajet;
- durée maximale;
- working-hours calculator.

---

## 35. Existing-Page Update Requirement

When a new page is added, Codex must perform:

```text
1. Create new page.
2. Search repository for relevant mentions.
3. Identify strongest existing pages.
4. Add contextual links from those pages to the new page.
5. Add links from new page back to appropriate pages.
6. Review anchor variation.
7. Check no broken links.
8. Update sitemap.
9. Run production build.
```

This is mandatory.

---

## 36. Example: Publishing `/1607-heures-par-an/`

New page should likely link to:

- `/35h-heures-par-mois/`
- `/151-67-heures-par-mois/`
- `/calcul-heures-semaine/`
- `/temps-travail-effectif/` where useful.

Existing pages to inspect:

- 35h monthly guide;
- 151,67 guide;
- working-hours guide;
- weekly calculator supporting content;
- homepage only if strategically appropriate.

Do not add links from every site page.

---

## 37. Example: Publishing `/calcul-heures-excel/`

New page should likely link to:

- centesimal converter;
- minutes/centesimal table;
- weekly calculator;
- printable timesheet.

Existing pages to inspect:

- conversion guide;
- centesimal table;
- weekly calculator;
- 151,67 article;
- working-hours guide.

---

## 38. Post-Publish Internal-Link Audit

After every new page, verify:

```text
Incoming contextual links:
Outgoing contextual links:
Parent page link:
Related tool link:
Sitemap inclusion:
Canonical:
Broken links:
Orphan status:
```

Do not mark publication complete without this audit.

---

## 39. Content Refresh Linking Audit

Whenever an old article is materially updated:

- remove broken links;
- replace outdated destinations;
- add newer relevant resources;
- remove links that no longer help;
- keep anchor text natural.

Internal linking is an ongoing editorial task.

---

## 40. No Blind Auto-Linking

Never automatically link every occurrence of a keyword.

Bad automation:

```text
Every occurrence of "heures supplémentaires"
→ /calcul-heures-supplementaires/
```

Choose links editorially.

---

## 41. No Self-Links

Do not link a page's own main keyword back to itself.

---

## 42. No Redirected Internal Links

Internal links should point directly to final canonical URLs.

When slugs change:

- update internal links;
- add proper redirect;
- update sitemap;
- avoid redirect chains.

---

## 43. URL Consistency

Follow the site's canonical trailing-slash convention consistently.

Do not mix `/page` and `/page/` unnecessarily.

For body links, prefer relative internal paths such as:

```text
/calcul-heures-travail/
```

Use absolute URLs where required for canonicals or structured data.

---

## 44. Zero Broken Internal Links

Never publish internal links to routes that do not exist.

For planned future pages:

- omit the link;
- use non-clickable “Bientôt disponible” only if useful;
- add the real link only once the route exists.

---

## 45. Topic Hubs

As the site grows, internal links should naturally create hubs.

### Working-time hub

- calcul heures de travail;
- weekly calculator;
- 35h;
- 151,67;
- 39h.

### Conversion hub

- centesimal converter;
- conversion table;
- subtraction;
- Excel;
- rounding.

### Overtime/rules hub

- overtime calculator;
- 35h overtime;
- 39h overtime;
- complementary hours;
- night work;
- Sunday work.

Do not create empty category pages solely for SEO.

---

## 46. Page Importance

Do not give equal internal prominence to all pages.

Importance should reflect:

- search opportunity;
- user usefulness;
- topical centrality;
- product value.

---

## 47. Cannibalization Cleanup

If multiple URLs start ranking for the same intent:

1. compare their performance;
2. choose the stronger canonical page;
3. merge unique useful content;
4. redirect the weaker URL if removed;
5. update all internal links;
6. update sitemap;
7. verify canonicalization.

Do not preserve duplicate pages simply to maintain page count.

---

## 48. On-Page SEO Quality Gate

Before publishing:

### Intent
- [ ] one clear primary search intent;
- [ ] no existing page already owns it;
- [ ] page type matches intent.

### Metadata
- [ ] unique title;
- [ ] unique meta description;
- [ ] canonical;
- [ ] indexable;
- [ ] correct language.

### Structure
- [ ] one H1;
- [ ] logical H2/H3;
- [ ] direct opening answer;
- [ ] useful examples;
- [ ] information gain.

### Internal links
- [ ] parent page linked;
- [ ] relevant support pages linked;
- [ ] relevant existing pages updated to link back;
- [ ] natural anchors;
- [ ] no self-links;
- [ ] no broken links;
- [ ] no redirected internal links.

### Sources
- [ ] legal/payroll claims verified;
- [ ] authoritative sources linked where needed.

### Technical
- [ ] 200 status;
- [ ] sitemap inclusion;
- [ ] crawlable HTML;
- [ ] mobile rendering;
- [ ] no accidental noindex;
- [ ] production build succeeds.

---

## 49. Mandatory Publishing Completion Report

After publishing a page, Codex should report:

```text
Published URL:
Primary keyword:
Search intent:
Parent page:

Outgoing internal links added:
- URL
- URL

Existing pages updated to link back:
- URL → anchor used
- URL → anchor used

Canonical:
Sitemap:
Indexability:
Build status:
```

Keep the report concise but explicit.

---

## 50. Search Console Follow-Up

When a page gets impressions but weak rankings:

- improve the existing page;
- strengthen relevant internal links;
- improve examples/information gain;
- review intent;
- improve title/CTR if justified;
- consider external authority.

Do not immediately create a competing page for the same keyword.

---

## 51. Search Console Cannibalization Signal

If Page A starts ranking for a query primarily owned by Page B:

1. inspect both pages;
2. determine if intent overlaps;
3. strengthen contextual linking A → B where appropriate;
4. refocus A if necessary;
5. merge only if they truly satisfy the same intent.

---

## 52. Ongoing Support for Important Pages

Strategic pages should continue receiving relevant internal links from future content.

Example:

The overtime calculator should naturally accumulate links from:

- 35h guide;
- 39h guide;
- part-time guide;
- maximum-duration guide;
- payroll-related guides.

Internal authority should compound over time.

---

## 53. No Footer Keyword Sculpting

Do not stuff the footer with dozens of exact-match anchors.

Footer should remain user-focused:

- Calculator;
- About;
- Contact;
- Privacy;
- Legal;
- Terms.

Topical SEO relationships belong mainly in contextual content and useful navigation.

---

## 54. No Hidden Links

Never use:

- hidden text links;
- zero-size links;
- off-screen keyword links;
- same-color hidden anchors;
- CSS-hidden SEO blocks.

All links must genuinely serve users.

---

## 55. Direct-Answer / Snippet Mindset

For informational pages:

- answer quickly;
- use clear formulas;
- use concise definitions;
- use useful tables;
- use steps when appropriate.

Do not distort content purely to chase a SERP feature.

---

## 56. Tables and Links

Tables may include links when useful.

Example:

| Situation | Outil |
|---|---|
| Additionner une semaine | Calcul des heures semaine |
| Convertir 7 h 30 | Conversion heures centièmes |
| Vérifier les heures au-delà de 35h | Calcul heures supplémentaires |

Do not overload every table cell with links.

---

## 57. Internal-Link CTAs

Useful CTA anchors may include:

- Calculer mes heures
- Voir le tableau minutes → centièmes
- Tester le calcul hebdomadaire
- Télécharger la feuille d'heures

Avoid vague CTA text such as:

- En savoir plus
- Découvrir
- Cliquez ici

---

## 58. Keep Internal Linking Human

Never write an awkward sentence just to place an anchor.

Bad:

> Notre calcul heures supplémentaire calculateur vous aide pour les heures supplémentaires.

Good:

> Si votre semaine dépasse votre durée habituelle, vous pouvez [calculer vos heures supplémentaires](/calcul-heures-supplementaires/) séparément.

---

## 59. Head-Term Protection

The homepage owns:

- calculette mauricette;
- calculatrice mauricette.

Supporting articles do not need to force both exact phrases.

Natural homepage anchors may include:

- Calculette Mauricette;
- calculatrice principale;
- calculer vos heures;
- outil de calcul des heures.

Do not force exact-match homepage anchors from every page.

---

## 60. Trust Pages

About, Contact, Privacy, Legal and Terms are trust pages.

They should be linked appropriately from:

- footer;
- header where planned;
- each other where useful.

Do not turn them into keyword-authority hubs.

---

## 61. URL Ownership Registry

As the site grows, maintain:

```text
/docs/seo/url-map.md
```

For each indexable SEO page, record:

```text
URL:
Primary keyword:
Search intent:
Parent:
Priority:
Status:
Closest related pages:
```

Codex should update the registry when a new SEO page is added.

---

## 62. Optional Frontmatter

If the content system uses frontmatter, useful fields may include:

```yaml
title:
description:
primaryKeyword:
intent:
parent:
canonical:
lastReviewed:
```

Do not add unused metadata fields.

---

## 63. Internal-Link Audit Tooling

If the repository grows substantially, Codex may create a lightweight audit script for:

- orphan pages;
- broken internal links;
- links through redirects;
- pages with zero contextual incoming links;
- duplicate canonicals;
- duplicate titles.

Prefer simple project-native tooling over heavy SEO dependencies.

---

## 64. Definition of Done

A new SEO page is complete only when:

- [ ] content is publish-ready;
- [ ] intent is unique;
- [ ] metadata is complete;
- [ ] canonical is correct;
- [ ] sitemap includes it;
- [ ] new page links to relevant existing pages;
- [ ] relevant existing pages link back to the new page;
- [ ] anchors are natural;
- [ ] no broken links exist;
- [ ] no orphan status exists;
- [ ] no cannibalization was introduced;
- [ ] legal claims are verified where applicable;
- [ ] production build succeeds.

---

## 65. Final Instruction to Codex

Whenever asked to:

> Publish this article

or:

> Create an article about X

do **not** interpret the task as only creating one new file.

Interpret it as:

```text
Inspect repository
        ↓
Check search intent ownership
        ↓
Create or improve page
        ↓
Add useful outgoing contextual links
        ↓
Find relevant existing pages
        ↓
Add incoming contextual links from them
        ↓
Check anchor quality and hierarchy
        ↓
Update sitemap / metadata
        ↓
Run build and broken-link audit
        ↓
Publish-ready
```

The objective is to strengthen the **entire site's topical graph** with every publication.

---

## 66. Strategic Principle

A reader entering through any strong article should naturally be able to move to:

1. the relevant calculator;
2. a broader explanation;
3. a deeper related question.

Google should be able to crawl the same relationships through ordinary HTML links.

That is the standard for professional internal linking on this project.

---

## 67. Ten Rules Codex Must Always Remember

1. **One intent = one URL.**
2. **Every new page gets useful outgoing links.**
3. **Relevant existing pages must be updated to link back to the new page.**
4. **Contextual body links matter more than generic footer links.**
5. **Anchor text must be natural and descriptive.**
6. **No orphan pages.**
7. **No broken internal links.**
8. **No internal links through redirects.**
9. **Do not create pages for trivial keyword variants.**
10. **Every publication should strengthen the complete topical graph.**

---

_Last updated: 18 August 2026._
