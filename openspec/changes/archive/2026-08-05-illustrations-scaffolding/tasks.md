# Tasks — illustrations-scaffolding

## 1. Documentation du style

- [x] 1.1 `docs/visuels-pulp.md` — copier la curation (prompt figé, 5
  motifs, règles négatives, stratégies A/B, nommage)
- [x] 1.2 `CLAUDE.md` — pointeur vers `docs/visuels-pulp.md` dans la
  section Illustrations

## 2. Outil d'inversion

- [x] 2.1 `tools/inverser_mode.py` — intégrer le script de la curation
- [x] 2.2 Noter les dépendances (`pillow`, `numpy`) en tête / dans la doc
- [x] 2.3 Tester sur une image synthétique 3 encres → sortie remappée
  (mode `--dur` : exactement les 3 couleurs cibles)

## 3. Composant PulpFigure

- [x] 3.1 `slides/components/PulpFigure.vue` — objet crème encadré, ombre
  portée dure, tilt déterministe seedé sur `src`, props `src/caption/tilt`
- [x] 3.2 Légende en Sinzano sous l'objet (jamais dans l'image)
- [x] 3.3 Ombre/rendu adaptés aux deux modes (tokens)

## 4. Placeholder & vérification

- [x] 4.1 `public/images/placeholder-pulp.png` — PNG crème de test
  (bloc crème + forme + une tache rouge)
- [x] 4.2 Rendu `PulpFigure` vérifié par export PNG dans les deux modes
  (objet, ombre, tilt, légende) — via une slide de test transitoire
- [x] 4.3 `pnpm run build` OK ; invariant hors-ligne (0 URL externe)
