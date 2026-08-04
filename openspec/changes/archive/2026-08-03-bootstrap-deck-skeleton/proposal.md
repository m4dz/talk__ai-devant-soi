## Why

Le repo n'a aucun code : pas de toolchain Slidev, pas de thème, pas de
polices intégrées. Impossible de commencer la trame (jalon 2) ni les
composants live (jalon 3) sans un socle qui build et un design system
dual-mode fonctionnel. C'est le jalon 1 de la trame CLAUDE.md :
« Squelette Slidev + thème (tokens, paires typo, toggle dark/light) ».

## What Changes

- Toolchain Slidev (dernière stable) : `package.json`, scripts
  `dev`/`build`/`export`, structure repo (`slides/`, `theme/`,
  `components/`, `public/{fonts,images,fallback}`).
- Design system local (thème custom, **pas de thème npm tiers**) :
  tokens en CSS custom properties, deux jeux complets (dark = noir
  d'encre / white cassé, light = papier crème / encre noire), accent
  rouge sang partagé.
- Typographie auto-hébergée dans `public/fonts/` : **Sinzano Regular**
  (titrage/exergue, licence achetée) + **Atkinson Hyperlegible**
  (corps). Chargées en `@font-face` local, jamais depuis un CDN.
- **Toggle dark/light live** : les deux modes citoyens de première
  classe, bascule au raccourci clavier dédié, réversible dans les deux
  sens (moment scénique possible).
- **Build hors-ligne** : aucune requête réseau externe au build ni au
  runtime (contrainte non négociable n°3). Neutralisation du fetch
  Google Fonts par défaut de Slidev.
- `.env.example` (`VITE_GEN_HOST`, `VITE_TTS_HOST`, `VITE_MOCK=1`) —
  posé dès maintenant, consommé aux jalons 3-4.
- `CREDITS.md` : traçabilité licence Sinzano (achat desktop + webfont)
  et Atkinson Hyperlegible (SIL OFL).
- **1 slide preuve** : slide unique de démo (titre Sinzano + corps
  Atkinson + accent), testée en dark ET light — critère de sortie du
  jalon.

Non-goals (hors périmètre, jalons ultérieurs) : trame des 8 sections
(jalon 2), composants live (jalon 3), illustrations et export PDF final
(jalon 5).

## Capabilities

### New Capabilities

- `deck-theme`: design system dual-mode du deck — tokens couleur/typo en
  CSS custom properties, polices auto-hébergées, toggle dark/light au
  raccourci clavier, rendu identique et fonctionnel hors-ligne dans les
  deux modes.

### Modified Capabilities

<!-- Aucune : premier changement du projet, aucun spec existant. -->

## Impact

- **Nouveau** : `package.json`, `theme/` (tokens + styles + config
  Slidev), `slides/slides.md` (headmatter + slide preuve),
  `public/fonts/`, `.env.example`, `CREDITS.md`, `.gitignore`.
- **Déplacement** : `sinzano-regular.woff2` (racine repo) →
  `public/fonts/`.
- **Dépendances** : `@slidev/cli`, thème/parser Slidev, UnoCSS (fourni
  par Slidev). Node toolchain (cohérent avec OpenSpec npm).
- **Aucun** appel réseau externe introduit.
