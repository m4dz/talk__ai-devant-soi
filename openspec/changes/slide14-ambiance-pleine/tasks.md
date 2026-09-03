## 1. Layout `ambiance.vue` — variant `colonne`

- [x] 1.1 Retirer le bloc `.ambiance--colonne .ambiance__band::after` (dégradé
      de couture) et son commentaire.
- [x] 1.2 Aligner le fond du panneau colonne sur celui de `bande` : même
      `color-mix(in srgb, var(--color-paper) 88%, transparent)` + `blur(2px)`
      (déjà porté par `.ambiance__band`), bord droit **franc**.
- [x] 1.3 Conserver géométrie et centrage vertical du bloc (`width: 38%`,
      `justify-content: center`, paddings) — seule la couture change.
- [x] 1.4 Mettre à jour le commentaire du layout : la colonne est un bloc à bord
      franc sur image pleine page (parti du cold open), plus de dégradé.
- [x] 1.5 Abaisser l'opacité du panneau colonne à `paper 70%` (le bandeau garde
      88 %) : sur le tiers gauche CALME, 88 % lisait comme une marge opaque. À
      70 % le grain du papier transparaît → bloc translucide sur l'image.

## 2. Slide 14

- [x] 2.1 Vérifier `slides/pages/03-lancement.md` slide 14 : rien à changer côté
      contenu (variant `colonne` conservé) ; confirmer que le titre + les deux
      blocs tiennent dans le panneau sans déborder.

## 3. Vérification

- [x] 3.1 Rendu slide 14 dans les **deux modes** : image pleine page lisible
      sous le bloc, bord franc, texte lisible, sujet (ruban rouge) non recouvert.
- [~] 3.2 Contrôle projection de la couture verticale (risque design.md) ; si
      elle accroche, appliquer le repli (filet ou fondu ≤ 1rem) et le noter.

## 4. Spec

- [x] 4.1 `openspec validate slide14-ambiance-pleine --strict`.
- [ ] 4.2 Archiver après vérif (fusion du delta `deck-layouts`).
