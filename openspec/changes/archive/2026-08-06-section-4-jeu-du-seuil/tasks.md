# Tasks — section-4-jeu-du-seuil

## 1. Marqueur de gabarit

- [x] 1.1 `theme/styles/` — classe de marqueur de gabarit (visible,
  distincte du contenu réel), chargée par le thème
- [x] 1.2 Choisir un mot-clé inventoriable (`GABARIT`) et le documenter

## 2. Layouts

- [x] 2.1 `theme/layouts/diptyque.vue` — deux colonnes étiquetées, tokens,
  deux modes
- [x] 2.2 `case-card.vue` — champ `question` affiché (accent), sous le
  contexte

## 3. Section 4 réécrite

- [x] 3.1 Intro : installation du jeu (vraies mains levées)
- [x] 3.2 Six stations : textes d'après le script + `question` par carte
  (illustrations et `balance` conservées)
- [x] 3.3 Slide diptyque Carver / Lish en **gabarit** (extraits à sourcer :
  *Beginners* → *What We Talk About When We Talk About Love*, New Yorker 2007)
- [x] 3.4 Renversement : la phrase seule
- [x] 3.5 Clause pulvérisée (Maquet produisait · Lish produisait ·
  Pavlowitch incarnait · le lecteur de Queneau génère)
- [x] 3.6 Pont : « Descendons. »

## 4. Vérification

- [x] 4.1 `pnpm run build` OK ; hors-ligne intact
- [x] 4.2 Export PNG : une station, le diptyque, le renversement — deux modes
- [x] 4.3 Le rappel discret du countdown reste correct malgré le changement
  de nombre de slides (gating par frontmatter, non par bornes)
- [x] 4.4 `grep GABARIT` = inventaire attendu
