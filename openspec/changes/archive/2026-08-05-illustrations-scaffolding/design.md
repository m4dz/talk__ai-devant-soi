# Design — illustrations-scaffolding

« Pourquoi » dans `proposal.md`, « quoi observable » dans
`specs/deck-illustrations`. Source : curation `docs/visuels-pulp.md`.

## Décisions

### D1 — PulpFigure : tilt déterministe seedé

Le tilt (−1.5° à +1.5°) est **stable par asset** : hash simple du `src`
→ angle. Pas de `Math.random` (instable au re-render, et interdit dans
certains contextes). Ombre portée dure décalée, plus marquée en dark
(`box-shadow: 6px 6px 0 rgba(0,0,0,.35)`), plus douce en light — via
tokens/mode. Padding crème autour de l'image (marge papier).

### D2 — Crème natif conservé (pas d'inversion en mode objet)

En stratégie A, l'image n'est jamais inversée : elle reste crème sur le
fond du mode courant. En light (`--color-paper` #f2e7d0) vs crème image
(#ede3d0), l'écart est volontaire et suffit avec l'ombre + le grain. Donc
`PulpFigure` ne fait aucune manipulation de pixels — c'est un cadre.

### D3 — Légende en Sinzano, hors image

`caption` rendue sous l'objet en `--font-title` (petite). Jamais dans
l'image (règle négative de la curation).

### D4 — inverser_mode.py = outil hors build

Script Python autonome (pillow+numpy) dans `tools/`. Il ne tourne pas au
build Slidev ; il prépare les variantes `-dark.png` en amont (stratégie B,
cold-open). Documenté dans `docs/visuels-pulp.md`.

### D5 — Vérification sans mflux

- **PulpFigure** : testé avec un PNG placeholder crème (généré simplement,
  ex. bloc crème + une forme + une tache rouge), rendu vérifié par export
  PNG dans les deux modes (objet, ombre, tilt, légende).
- **inverser_mode.py** : testé sur une image synthétique aux 3 encres
  source → vérifier que la sortie ne contient que les 3 couleurs cibles
  (mode `--dur`) ou en reste proche (mode doux).

### D6 — Emplacement doc & pointeur CLAUDE.md

`docs/visuels-pulp.md` = copie de la curation (référence de génération).
Ajout d'un pointeur dans la section « Illustrations » de `CLAUDE.md`
(additif, cohérent avec l'intention — pas une contradiction).

## Points ouverts (→ 5C-2)

- Génération mflux des vrais assets (portraits 6 cas + ambiances).
- Intégration dans les slides récit (case-cards, cold-open).
- Réglage fin ombre/tilt à l'œil une fois les vrais visuels là.
