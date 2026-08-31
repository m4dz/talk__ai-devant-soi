# Tasks — layout-propos-et-revelation

## 1. Layout

- [x] 1.1 `theme/layouts/propos.vue` — variantes `plain` / `question` /
  `inventaire` (la variante décrit le corps, le titre reste libre)
- [x] 1.2 Variante `question` : composition qui assume le vide sous la phrase
- [x] 1.3 Variante `inventaire` : entrées parallèles + chute optionnelle

## 2. Remappage des slides `default`

- [x] 2.1 Section 2 : « Elle n'a rien interdit » (inventaire), identité (plain)
- [x] 2.2 Section 3 : le roman, la fabrique, le chapitre 7, le lancement,
  le contrat
- [x] 2.3 Section 4 : intro du jeu (question), « Et la clause ? » (inventaire,
  titre interrogatif, NON scindée)
- [x] 2.4 Section 5 : « Rouvrez la boîte noire » (inventaire)
- [x] 2.5 Section 6 : « Alors, celui-là » (question)
- [x] 2.6 Sections 7-8 : le contrat rappelé, le retour au micro (question),
  la dernière station (question)
- [x] 2.7 Laisser inchangés les trois conteneurs (countdown zéro, lecteur,
  entretien)

## 3. Révélation

- [x] 3.1 Poser les `clicks` et les révélations sur les slides à `[Temps]`
- [x] 3.2 Poser la révélation entrée par entrée sur les inventaires
- [x] 3.3 Vérifier que la charge de clics reste tenable (compter le total)

## 4. Vérification

- [x] 4.1 `pnpm run build` OK ; hors-ligne intact
- [x] 4.2 Export PNG des trois variantes, deux modes
- [x] 4.3 Parcours au navigateur : les révélations s'enchaînent au « next »
- [x] 4.4 Mesure après passe : usage de `default`, respirations, séquences
