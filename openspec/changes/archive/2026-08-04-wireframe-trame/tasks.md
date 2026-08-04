# Tasks — wireframe-trame

## 1. Layouts custom (theme/layouts/)

- [x] 1.1 `cold-open.vue` — récit court plein cadre, tokens only
- [x] 1.2 `exergue.vue` — citation Sinzano centrée + attribution optionnelle
- [x] 1.3 `case-card.vue` — props name/work/balance + slot contexte
- [x] 1.4 `wall.vue` — props numéro/problème + slot solution
- [x] 1.5 Classes `.slot` et `.todo` dans le thème (placeholders inertes)

## 2. Assemblage entrée

- [x] 2.1 `slides/slides.md` : conserver headmatter global, remplacer la
  slide preuve par les imports `src: ./pages/0X-*.md` des 8 sections

## 3. Sections récit (beat par beat)

- [x] 3.1 `pages/01-cold-open.md` — beats thriller in medias res, pas de
  titre ; beat révélation Goncourt en placeholder `TODO`
- [x] 3.2 `pages/04-jeu-du-seuil.md` — 1 intro + 6 `case-card` (ordre
  intervention ↓ : Dumas/Maquet, Carver/Lish, Vian, Ern Malley, Oulipo,
  Racter)
- [x] 3.3 `pages/05-descente-technique.md` — 4 `wall` en cascade
  (lore → intention → qualité → crash), problème + solution chacun

## 4. Sections argument

- [x] 4.1 `pages/02-goncourt.md` — 1 `exergue`, citation placeholder
  `TODO` (bloqué)
- [x] 4.2 `pages/03-lancement.md` — slots `GenerationTrigger` + `Countdown`
- [x] 4.3 `pages/06-resolution.md` — mémoire externe · RAG dynamique ·
  2 rôles auteur/acteur
- [x] 4.4 `pages/07-lecture.md` — slot `ChapterReader`, passage voix
  speaker → voix clonée
- [x] 4.5 `pages/08-cloture.md` — `exergue`, derniers mots exacts :
  « Je me suis bien amusé. Au revoir et merci. »

## 5. Vérification

- [x] 5.1 `pnpm run build` OK ; navigation des 8 sections dans l'ordre
- [x] 5.2 Vérifier au navigateur les layouts dans les deux modes
  (dark/light), lisibilité
- [x] 5.3 `grep -rn "TODO" slides/` = exactement les 2 blocages Goncourt,
  rien d'autre
