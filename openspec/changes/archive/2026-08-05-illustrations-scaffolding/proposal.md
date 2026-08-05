## Why

La curation pulp est faite (motifs, prompt de style figé, stratégies
d'intégration, script d'inversion). Avant de générer les assets (5C-2,
lourd et itératif), on pose le **scaffolding déterministe** : le composant
qui affiche une illustration, le script d'inversion light→dark, et la
documentation du prompt figé dans le repo. Tout est testable tout de suite
avec un placeholder, sans dépendre de mflux.

Principe directeur hérité de la curation : **on ne génère qu'en crème** —
l'image crème est la source canonique, les modes sont des dérivations
(même logique que `bible/` Markdown → ChromaDB dans la stack).

## What Changes

- **`<PulpFigure>`** (`slides/components/`) — stratégie A (défaut) :
  l'illustration est un **objet papier crème posé** sur le fond courant
  (ombre portée dure, léger tilt stable seedé sur le nom de fichier),
  jamais en fond perdu ni inversée. L'image garde son crème natif ; en
  mode clair, la distinction avec le fond se fait par l'ombre et le grain.
  Props : `src`, `caption?` (rendue en Sinzano **sous** l'objet, jamais
  dans l'image), `tilt?`.
- **`tools/inverser_mode.py`** — stratégie B (cold-open fond perdu) :
  remap sérigraphique des 3 encres (crème/noir/rouge) vers la palette dark,
  trame halftone préservée. Livré par la curation, intégré au repo.
- **`docs/visuels-pulp.md`** — le **prompt de style figé** + les 5 motifs
  + règles négatives + stratégies + nommage. Référence de génération.
  Pointeur ajouté dans la section Illustrations de `CLAUDE.md`.
- **Placeholder** : un PNG crème de test pour valider `PulpFigure` et
  `inverser_mode.py` sans mflux.

Non-goals : génération des vrais assets via mflux (5C-2) ; intégration des
illustrations dans les slides récit réelles (5C-2) ; finalisation des
slides bloquées Goncourt (#6).

## Capabilities

### New Capabilities

- `deck-illustrations`: rendu des illustrations pulp dans le deck —
  l'illustration comme objet crème encadré (dual-mode par l'objet, non par
  altération de l'image), dérivation dark par inversion sérigraphique pour
  le fond perdu, aucune typographie dans l'image, légende hors image.

## Impact

- **Ajouté** : `slides/components/PulpFigure.vue`, `tools/inverser_mode.py`,
  `docs/visuels-pulp.md`, `public/images/` (placeholder de test).
- **Modifié** : `CLAUDE.md` (pointeur vers la doc de style).
- **Dépendances** : `inverser_mode.py` requiert `pillow` + `numpy` (outil
  hors build du deck). **Réseau** : aucun.
