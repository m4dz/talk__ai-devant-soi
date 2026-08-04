# Tasks — chapter-reader

## 1. Fixtures mock (copies TTS)

- [x] 1.1 Copier `~/Sources/m4dz/ia-devant-soi/TTS/test.md` →
  `public/fallback/chapitre.md` (contient `<!-- BASCULE -->`)
- [x] 1.2 Copier `~/Sources/m4dz/ia-devant-soi/TTS/test.wav` →
  `public/fallback/chapitre.wav`
- [x] 1.3 `CREDITS.md` — tracer les fixtures (extrait *Le Horla*, voix
  clonée ; provisoires, à remplacer jalon 4/TTS)

## 2. Branchement mock

- [x] 2.1 `slides/lib/genClient.ts` — au `ready`, `session.chapter` =
  `{ text: <chapitre.md>, audioUrl: '/fallback/chapitre.wav' }`
  (fetch same-origin de la fixture texte)

## 3. Composant

- [x] 3.1 `slides/components/ChapterReader.vue` — texte depuis
  `session.chapter`, scindé au marqueur `<!-- BASCULE -->` (avant = speaker,
  après = clone) + état d'attente si non prêt
- [x] 3.2 Lecture audio (`<audio>`), inerte si pas d'audioUrl
- [x] 3.3 Défilement du texte suivant `timeupdate` (ratio → scroll)
- [x] 3.4 Départ **V-click** : observer `$clicks`, au seuil → `audio.play()`
  **depuis 0** (aucun timecode). Jamais de raccourci clavier. Télécommande OK

## 4. Câblage

- [x] 4.1 `pages/07-lecture.md` — remplacer le slot par `<ChapterReader />`,
  déclarer le pas de clic de bascule

## 5. Vérification

- [x] 5.1 `pnpm run build` OK ; `chapitre.wav` bundlé dans `dist/`
- [x] 5.2 Au navigateur : générer (sec 3) → sec 7 → texte affiché, scindé
  au marqueur ; avancer (clic) → audio démarre, texte défile avec l'audio
- [x] 5.3 V-click / avancée déclenche bien la lecture (simulateur remote =
  flèche/espace)
- [x] 5.4 Les deux modes (dark/light), lisibilité du chapitre
- [x] 5.5 Invariant hors-ligne : build sans URL externe ; lecture fixtures
  = 0 requête externe
