# Tasks — illustrations-generation

## 1. Setup mflux (probe d'abord)

- [x] 1.1 Installer mflux (venv), modèle FLUX schnell quantifié (4-bit)
- [x] 1.2 **Tirage test** depuis le prompt figé (1 {SUJET}) → jauger
  timing + qualité ; si bloquant, PAUSE + arbitrage

## 2. Génération des assets (crème)

- [x] 2.1 6 portraits de cas (prompt figé, {SUJET} par cas) :
  dumas-maquet, carver-lish, vian, ern-malley, oulipo (objet), racter (objet)
- [x] 2.2 Ambiances cold-open (rue clair-obscur, présence-derrière)
- [x] 2.3 Sélection/validation des tirages à l'œil (te les montrer)

## 3. Variantes dark (cold-open, stratégie B)

- [x] 3.1 `inverser_mode.py` sur les ambiances cold-open → `-dark.png`
- [x] 3.2 Vérifier trame/composition préservées

## 4. Intégration

- [x] 4.1 `case-card` : slot `figure` (frontmatter) → `<PulpFigure>`
- [x] 4.2 `pages/04-jeu-du-seuil.md` : `figure:` par cas
- [x] 4.3 `cold-open` : ambiance fond perdu, variante par mode (crème/dark)
- [x] 4.4 Retirer `placeholder-pulp.png` ; ranger assets `public/images/`
- [x] 4.5 `CREDITS.md` : tracer les assets générés

## 5. Vérification

- [x] 5.1 `pnpm run build` OK ; assets bundlés ; invariant hors-ligne
- [x] 5.2 Export PNG : 6 cas illustrés + cold-open, dans les deux modes ;
  lisibilité, cohérence de style
- [x] 5.3 Slides argument toujours sans illustration
