## Why

Le scaffolding illustrations est en place (5C-1 : PulpFigure, inverser,
prompt figé documenté). Il reste à **générer les vrais assets** via mflux
(local, cohérent avec la thèse) depuis le prompt de style figé, et à les
**intégrer** aux slides récit. Dernier sous-jalon du jalon 5.

## What Changes

- **Génération mflux** (local, Apple Silicon) des assets crème depuis le
  prompt figé (`docs/visuels-pulp.md`), en ne variant que `{SUJET}` :
  - **6 portraits de cas** (motif 1 buste / motif 4 objet-figure) :
    Dumas/Maquet, Carver/Lish, Vian, Ern Malley, Oulipo, Racter.
  - **Ambiances cold-open** (motif 5 rue clair-obscur, motif 2 « la
    présence derrière » = Ajar derrière Gary).
- **Variantes dark** des ambiances cold-open (fond perdu, stratégie B) via
  `tools/inverser_mode.py` → `-dark.png`.
- **Intégration récit** :
  - `case-card` : chaque cas porte son portrait via `<PulpFigure>`
    (stratégie A, objet crème) — slot `figure` dans le layout.
  - `cold-open` : ambiance en fond perdu sur beats ciblés, variante par
    mode (crème / dérivée dark).
- **Assets** rangés dans `public/images/` (nommage
  `{section}-{motif}-{slug}.png`), tracés dans `CREDITS.md` (générés
  localement, prompt figé).
- Remplacement du `placeholder-pulp.png` par les vrais assets.

Non-goals : slides argument (restent typographiques) ; finalisation des
slides bloquées Goncourt (#6) ; refonte du prompt de style (figé en 5C-1).

## Capabilities

### Modified Capabilities

- `deck-content`: ajout d'une exigence — les slides récit (6 cas +
  cold-open) portent une illustration pulp cohérente ; les slides argument
  restent sans illustration.

## Impact

- **Ajouté** : `public/images/{cas-*,coldopen-*}.png` (+ `-dark.png` pour
  le cold-open), entrées `CREDITS.md`.
- **Modifié** : `theme/layouts/case-card.vue` (slot figure), `cold-open`
  (ambiance), `slides/pages/04-jeu-du-seuil.md` (frontmatter figure par
  cas), `slides/pages/01-cold-open.md` (ambiances), retrait du placeholder.
- **Outils** : mflux (local, hors repo), `inverser_mode.py` (déjà là).
- **Réseau** : téléchargement du modèle mflux au setup (une fois) ;
  aucun appel réseau au runtime du deck (assets embarqués, hors-ligne).

## Risque

Génération mflux = lourde (téléchargement modèle multi-Go, temps GPU par
image, tuning des `{SUJET}` à l'œil). Approche : un tirage test d'abord
pour jauger le timing, puis le batch. Si la qualité/temps bloque, on
pause et on arbitre (le placeholder + PulpFigure permettent au deck de
rester cohérent en attendant).
