# Tasks — bootstrap-deck-skeleton

## 1. Toolchain & structure

- [x] 1.1 `package.json` : `@slidev/cli` (dernière stable), scripts
  `dev` / `build` / `export`, bloc `slidev` avec `colorSchema: both`
- [x] 1.2 Arborescence : `slides/`, `theme/`, `components/`,
  `public/{fonts,images,fallback}`
- [x] 1.3 `.gitignore` (node_modules, dist, .slidev cache)
- [x] 1.4 `.env.example` (`VITE_GEN_HOST`, `VITE_TTS_HOST`, `VITE_MOCK=1`)
- [x] 1.5 Gestionnaire de paquets **pnpm** : `packageManager` pinné,
  `pnpm-lock.yaml`, `pnpm-workspace.yaml` (`allowBuilds` playwright true).
  Fix strict node_modules : `slides/vite.config.ts` sans import `vite`
  (cf. design D6)

## 2. Polices auto-hébergées

- [x] 2.1 Déplacer `sinzano-regular.woff2` racine → `public/fonts/`
- [x] 2.2 Ajouter Atkinson Hyperlegible (woff2, SIL OFL) dans
  `public/fonts/`
- [x] 2.3 `@font-face` Sinzano + Atkinson dans le CSS du thème
- [x] 2.4 Couper le fetch Google Fonts (`fonts: { provider: none }`) —
  vérifié : 0 requête gfonts au build

## 3. Design system (tokens + thème)

- [x] 3.1 Thème local (`theme: ../theme`, cf. design D6), pas de thème
  npm tiers
- [x] 3.2 Tokens CSS custom properties : jeu clair sur `:root`, jeu
  sombre sous `html.dark` (couleurs, `--font-title`/`--font-body`,
  espacements, tailles)
- [x] 3.3 Styles de base mappant titres → `--font-title`, corps →
  `--font-body`, fonds/textes → tokens
- [x] 3.4 Fond « papier » plein cadre (`.slidev-page`) consommant
  uniquement les tokens

## 4. Toggle dark/light (natif — vérif seule)

- [x] 4.1 Confirmé : touche `d` (built-in `toggleDark()`) bascule les
  deux jeux de tokens, réversible — aucun code de raccourci écrit

## 5. Slide preuve

- [x] 5.1 `slides/slides.md` : headmatter (theme, fonts, colorSchema,
  favicon) + 1 slide démo (titre Sinzano + corps Atkinson + accent rouge)
- [x] 5.2 Vérifié au navigateur en mode sombre ET clair (screenshots) :
  lisibilité, contraste, cohérence palette OK

## 6. Traçabilité & offline

- [x] 6.1 `CREDITS.md` : licence Sinzano (achat desktop+webfont) +
  Atkinson Hyperlegible (SIL OFL), source de chaque fonte
- [x] 6.2 `slidev build` OK ; 5 woff2 + favicon bundlés dans `dist/`,
  `grep` du build = 0 URL externe (googleapis/gstatic/jsdelivr/cdn).
  Fix associés : `favicon` local + `publicDir` → `../public` (design D6)
