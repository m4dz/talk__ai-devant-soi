# Design — bootstrap-deck-skeleton

Décisions techniques du jalon 1. Le « pourquoi » est dans `proposal.md`,
le « quoi observable » dans `specs/deck-theme/spec.md`.

## Contexte grounded (Slidev, docs à jour)

- Slidev supporte nativement dark/light via une classe `dark` sur la
  racine + variants UnoCSS `dark:`. `colorSchema` se déclare dans le bloc
  `slidev` de `package.json` (`"both"` = toggle actif, défaut).
- Le toggle dark/light est **déjà fourni par Slidev** : touche `d`
  bindée par défaut sur `nav.toggleDark()`. Aucun raccourci custom à
  écrire. `setup/shortcuts.ts` reste disponible si un rebind s'avère
  nécessaire, mais hors périmètre ici.
- Le headmatter `fonts:` de Slidev **télécharge par défaut depuis Google
  Fonts** — incompatible avec la contrainte hors-ligne. Neutralisé via
  `fonts: { local: '...', provider: 'none' }` + `@font-face` maison.

## Décisions

### D1 — Thème custom local, pas de thème npm

`theme: ./theme` (thème local dans le repo). Pas de dépendance à un thème
publié : on construit le design system dédié (contrainte CLAUDE.md). Le
thème porte tokens, layouts, styles, `setup/`.

### D2 — Tokens en CSS custom properties, deux jeux

Un fichier de styles du thème définit les tokens sur `:root` (mode clair
par défaut) et les surcharge sous le sélecteur dark de Slidev (`.dark` /
`html.dark`). Une seule variable par rôle (`--color-ink`, `--color-paper`,
`--color-accent`, espacements, tailles) ; les slides ne consomment que ces
variables. Basculer de mode = changer le jeu de valeurs, aucun style de
slide à toucher.

```
:root            { --color-paper:#f2e9d8; --color-ink:#1a1512; --color-accent:#b3141c; ... }
html.dark        { --color-paper:#12100e; --color-ink:#efe7d6; --color-accent:#e11d1d; ... }
```

(Valeurs indicatives — l'accent rouge « à valider sur projecteur » selon
CLAUDE.md ; ajustable en jalon 5.)

### D3 — Polices auto-hébergées, fetch externe coupé

- `sinzano-regular.woff2` déplacé racine → `public/fonts/`.
- Atkinson Hyperlegible (SIL OFL) ajouté en woff2 dans `public/fonts/`.
- `@font-face` déclarés dans le CSS du thème (`font-display: swap`).
- Headmatter Slidev : provider de fonts sur `none` (ou `local`) pour
  empêcher toute requête Google Fonts au build/dev.
- `--font-title: 'Sinzano'`, `--font-body: 'Atkinson Hyperlegible'`.
  Règle dure : jamais de paragraphe en `--font-title`.

### D4 — Toggle dark/light : natif Slidev

Rien à implémenter côté raccourci : la touche `d` de Slidev appelle
`toggleDark()` (réversible, effet immédiat, conserve la slide). Le travail
du jalon est de garantir que **les deux modes sont correctement stylés**
(D2 : les deux jeux de tokens), pas de recâbler la touche. Le toggle est
donc une contrainte de design (chaque slide testée dans les 2 modes), pas
une feature à coder.

### D5 — Env & offline

- `.env.example` posé avec `VITE_GEN_HOST`, `VITE_TTS_HOST`, `VITE_MOCK=1`
  (non consommés au jalon 1, réservés jalons 3-4).
- Build `slidev build` → SPA statique. Vérif offline = charger le build
  réseau externe coupé, contrôler l'onglet réseau (0 requête externe).

### D6 — Racine Slidev vs structure repo (découvert à l'implémentation)

Slidev prend le **dossier de l'entrée** (`slides/`) comme racine projet.
Or CLAUDE.md place `theme/`, `public/`, `components/` à la racine du
repo. Réconciliation sans bouger l'arborescence :

- `theme: ../theme` dans le headmatter (chemin relatif à `slides.md`).
- `slides/vite.config.ts` surcharge `publicDir` → `../public` (racine
  repo), sinon polices + favicon absents du build.
- `favicon: /favicon.svg` (local) surcharge le défaut Slidev qui pointe
  vers une URL jsdelivr — 2ᵉ fuite hors-ligne corrigée.
- **pnpm (node_modules strict)** : `slides/vite.config.ts` NE DOIT PAS
  faire `import { defineConfig } from 'vite'` — `vite` est une dépendance
  transitive de Slidev, non résolvable depuis le projet sous pnpm. On
  exporte un objet de config nu (Slidev le merge ; `defineConfig` ne
  servait qu'au typage). Même vigilance pour toute future config qui
  importerait un paquet non déclaré en dépendance directe.
- Note jalon 3 : `components/` à la racine repo ne sera pas auto-importé
  par Slidev (il cherche `slides/components/`). À câbler quand les
  composants live arrivent (option `vite`/unplugin ou déplacement).

## Risques / points ouverts

- **Vérif réseau externe** : à faire manuellement (DevTools) en fin de
  jalon ; pas d'automatisation ici.
- **Sinzano woff2 unique** : une seule graisse (Regular). Suffit pour
  titrage ; si besoin d'un bold plus tard → jalon ultérieur, pas ici.
- **Touche de toggle** : à confirmer en répétition (jalon 5) qu'elle ne
  gêne pas le flow scénique.
