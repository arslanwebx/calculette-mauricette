# Calculette Mauricette

Homepage Astro statique pour calculer les heures de travail en français. Le projet comprend quatre modes de calcul, un enregistrement local dans le navigateur, du contenu SEO rendu en HTML et une configuration prête pour GitHub et Cloudflare Workers Static Assets.

## Fonctionnalités

- calcul d'une journée avec plusieurs plages et une pause optionnelle ;
- prise en charge des horaires qui passent après minuit ;
- semaine du lundi au dimanche avec total quotidien ;
- soustraction de durées, y compris au-delà de 24 heures ;
- conversion heures/minutes vers heures décimales et inversement ;
- copie, impression, réinitialisation et chargement d'un exemple ;
- sauvegarde automatique dans `localStorage`, sans serveur ;
- canonical, sitemap et métadonnées sociales pour `calculette-mauricette.pro` ;
- HTML statique, CSS natif et JavaScript léger.

## Développement local

Prérequis : Node.js 22 ou une version plus récente.

```bash
npm install
npm run dev
```

Astro affiche ensuite l'adresse locale, généralement `http://localhost:4321`.

## Vérification

```bash
npm run check
npm test
npm run build
```

La production statique est générée dans `dist/`.

## Cloudflare Workers Builds

Le dépôt est configuré pour le formulaire Cloudflare montré lors de la connexion GitHub. Utilisez exactement :

```text
Repository: arslanrajput-sys/calculette-mauricette
Project name: calculette-mauricette
Build command: npm run build
Deploy command: npx wrangler deploy
Root directory: /
```

Vous pouvez laisser « Builds for non-production branches » désactivé pour ne publier que la branche de production.

`wrangler.jsonc` publie les fichiers statiques de `dist/`, applique les URL avec slash final, sert la page `404.html` pour les chemins inconnus et relie le Worker au domaine personnalisé `calculette-mauricette.pro`.

Aucun backend, adaptateur SSR, compte utilisateur, service API ou base de données n'est utilisé. Wrangler sert uniquement les fichiers statiques produits par Astro.

### Prérequis Cloudflare

Avant le premier déploiement :

1. ajoutez `calculette-mauricette.pro` à votre compte Cloudflare ;
2. vérifiez que la zone DNS est active dans le même compte que le Worker ;
3. connectez le dépôt GitHub `arslanrajput-sys/calculette-mauricette` ;
4. entrez les commandes ci-dessus puis cliquez sur « Deploy ».

La route `custom_domain` de `wrangler.jsonc` demande à Cloudflare d'associer automatiquement le domaine principal. Pour `www.calculette-mauricette.pro`, créez ensuite une règle de redirection permanente vers `https://calculette-mauricette.pro` afin de conserver une seule adresse canonique.

## Workflow GitHub

Le dépôt distant configuré est `https://github.com/arslanrajput-sys/calculette-mauricette.git`. Pour un nouveau clone ou une nouvelle initialisation :

```bash
git init
git add .
git commit -m "Configure Mauricette for Cloudflare"
git branch -M main
git remote add origin https://github.com/arslanrajput-sys/calculette-mauricette.git
git push -u origin main
```

## Variables d'environnement

Le domaine de production est déjà le réglage par défaut. La variable reste disponible pour un environnement temporaire ou un futur changement :

```text
PUBLIC_SITE_URL=https://calculette-mauricette.pro
```

Le fichier `.env` reste ignoré par Git. `.env.example` est versionné. Cloudflare n'a pas besoin de cette variable pour le déploiement normal puisque le domaine réel est déjà configuré dans `astro.config.mjs`.

## SEO après déploiement

Le build génère automatiquement :

- la canonical `https://calculette-mauricette.pro/` ;
- les URL Open Graph absolues ;
- `sitemap-index.xml` et `sitemap-0.xml` ;
- la référence du sitemap dans `robots.txt` ;
- une page `404.html` marquée `noindex, nofollow`.

Après la première mise en ligne, soumettez `https://calculette-mauricette.pro/sitemap-index.xml` dans Google Search Console.

## Vie privée

Les horaires et préférences sont stockés uniquement dans le `localStorage` du navigateur. Le projet ne contient aucun suivi, formulaire réseau ou traitement côté serveur. Le bouton « Effacer mes données » supprime cet enregistrement local.
