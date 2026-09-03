## 1. Ajouter pulp-bg aux trois slides

- [x] 1.1 Slide 15 — `slides/pages/03-lancement.md` : `class: plan-scenes`
      → `class: plan-scenes pulp-bg`.
- [x] 1.2 Slide 24 — `slides/pages/05-descente-technique.md` (1er artefact,
      ~ligne 200) : `class: artefact-slide` → `class: artefact-slide pulp-bg`.
- [x] 1.3 Slide 26 — `slides/pages/05-descente-technique.md` (2e artefact,
      ~ligne 299) : `class: artefact-slide` → `class: artefact-slide pulp-bg`.

## 2. Vérification

- [x] 2.1 Slides 15, 24, 26 : la trame halftone apparaît, cohérente avec
      les slides voisines. Modes **clair** et **sombre**.
- [x] 2.2 Lisibilité préservée : tableau (15) et artefacts (24/26) restent
      pleinement lisibles, la texture reste discrète en fond.
- [x] 2.3 Vérifier qu'aucune autre slide `default` n'a été affectée (l'ajout
      est bien scopé aux trois `class:`).
