## 1. Réordonnancement des blocs slides (déjà appliqué au filage)

- [x] 1.1 §2 — inverser question ↔ Andrea (`02-goncourt.md`)
- [x] 1.2 Déplacer Andrea après « On lance ? » (`02-goncourt.md` → fin
  `03-lancement.md`)
- [x] 1.3 Descente — cadre « rien ne sort » avant « entrons »
  (`05-descente-technique.md`)
- [x] 1.4 Remontée — « Rouvrez la boîte » avant « La fabrique reste »
  (`05-descente-technique.md`)

## 2. Réécriture des notes de navigation

- [x] 2.1 Slide 9 (clause) : `→ le procès en tricherie` → `→ la question du talk`
- [x] 2.2 Slide 10 (question) : `← la tricherie` → `← la clause`
- [x] 2.3 Slide 15 (On lance ?) : `→ démystifier la fabrique` →
  `→ la tricherie (Andrea)`
- [x] 2.4 Slide 16 (Andrea) : `← la clause → la question du talk` →
  `← on lance → le cadre local`
- [x] 2.5 Slide 17 (cadre) : `← démystifier → la question est ancienne` →
  `← la tricherie (Andrea) → entrons dans l'atelier` ; block-comment
  « L'ENTRÉE — LE CADRE » conservé (c'est l'entrée)
- [x] 2.6 Slide 18 (entrons) : retirer « la porte de la descente » du
  block-comment (le cadre l'est) ; ajouter fil
  `← le cadre local → la question est ancienne`
- [x] 2.7 Slide 30 (Rouvrez) : `← la fabrique reste → le hand-off` →
  `← le seuil (la voix) → la fabrique reste`
- [x] 2.8 Slide 31 (Fabrique reste) : `← le seuil → rouvrez la boîte noire` →
  `← rouvrez la boîte → le hand-off` ; réécrire le `⚠` (capstone d'inventaire
  en rappel, plus « bascule vers la remontée »)
- [x] 2.9 Slide 32 (hand-off) : `← rouvrez la boîte` → `← la fabrique reste`

## 3. Propagation dans les scripts source

- [x] 3.1 `docs/scripts/02-*` : sortir la réaction Andrea du pivot §2, la
  reposer au seam §3→§4 ; noter le double « tricherie » voulu
- [x] 3.2 `docs/scripts/04-*` : cadre « rien ne sort » avant « entrons » ;
  « Rouvrez la boîte » avant « La fabrique reste » (règle en rappel)

## 4. Vérification

- [x] 4.1 Rebuild `pnpm build` sans erreur
- [x] 4.2 Relire l'ordre deck 8→18 et 29→32 (fils cohérents)
