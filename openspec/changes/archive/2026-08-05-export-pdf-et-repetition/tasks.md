# Tasks — export-pdf-et-repetition

## 1. Export PDF papier/light

- [x] 1.1 `slides/slides.md` — headmatter `export` : `format: pdf`,
  `dark: false` (mode papier), `exportFilename` explicite
- [x] 1.2 Lancer `pnpm export` → PDF, une slide par page, mode clair
- [x] 1.3 Vérifier l'export hors-ligne (réseau externe coupé) : 0 requête
  externe, PDF produit

## 2. Passe de répétition (deux modes)

- [x] 2.1 Parcourir les 25 slides en mode **sombre** : lisibilité,
  contraste, débordements ; noter les défauts
- [x] 2.2 Parcourir les 25 slides en mode **clair** : idem
- [x] 2.3 Corriger les défauts repérés (tokens / styles), re-vérifier
- [x] 2.4 Valider l'accent rouge (note : confirmation sur projecteur
  physique le jour J ; ajuster `--color-accent` si besoin)

## 3. Vérification

- [x] 3.1 PDF ouvert : titres Sinzano (ligatures), corps Atkinson, accent —
  lisibles, palette claire fidèle
- [x] 3.2 `pnpm run build` toujours OK ; invariant hors-ligne intact
