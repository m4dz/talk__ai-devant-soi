# Design — passe-design-pulp

« Pourquoi » dans `proposal.md`, « quoi observable » dans le delta
`deck-theme`.

## Nature de ce changement

Passe **design, en partie itérative** : le rendu final dépend de l'œil du
speaker (intensité de la trame, patine, choix des slides ornées). Les
specs fixent les garde-fous (discrétion, lisibilité, dual-mode,
parcimonie) ; les valeurs exactes se calent au navigateur, dans les deux
modes, en s'inspirant de covers pulp d'époque
([[design-pulpwood-magazine-refs]]).

## Décisions

### D1 — Textures en CSS pur (hors-ligne)

- **Halftone / trame** : `radial-gradient` répété (points), ou un motif
  `background-image` en `image-set`/`data:` SVG. Pas d'asset externe.
- **Grain** : filtre SVG `feTurbulence` inline appliqué en couche de fond
  à faible opacité (`data:` ou `<svg>` du thème + `filter`/`background`).
- Contrainte hors-ligne préservée : aucune requête, tout inline/CSS.

### D2 — Couche de fond dédiée, sous le contenu

Une couche `.pulp-bg` (pseudo-élément ou div en `position:absolute`,
`z-index` négatif, `pointer-events:none`) porte trame + grain, **sous** le
texte. Le contenu garde son contraste tokens. Opacité pilotée par
`--texture-opacity` (valeurs distinctes dark/light dans `tokens.css`).

### D3 — Opt-in par slide/section, pas global

La texture N'EST PAS sur `.slidev-layout` par défaut (sinon toutes les
slides, y compris argument). Opt-in via une classe (`class: pulp` en
frontmatter de slide, ou un layout récit qui l'inclut). Les slides
argument restent nues.

### D4 — Ornements

Réutiliser/étendre `.rule` (filet déjà présent) ; ajouter un cartouche/
bandeau de titre optionnel pour les slides récit (bordure/fond tokens).
Ornements dérivés des tokens, testés dans les deux modes.

### D5 — Tokens palette

Ajouter `--texture-opacity`, `--texture-dot`, `--grain-opacity` (par mode).
Ajuster l'accent rouge si la validation projecteur (5A, jour J) le demande
— sinon inchangé.

## Points ouverts / itératif

- Intensité exacte trame/grain — à caler à l'œil, deux modes.
- Quelles slides portent la texture/ornement (récit : cold-open, cas
  historiques) — à décider avec le speaker.
- Références covers pulp à collecter avant de figer cartouche/bandeau.
- Accent rouge : dépend de la validation projecteur (jalon 5A / jour J).
