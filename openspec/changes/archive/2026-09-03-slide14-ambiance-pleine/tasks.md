## 1. Layout `ambiance.vue` — variant `colonne`

- [x] 1.1 Retirer le bloc `.ambiance--colonne .ambiance__band::after` (dégradé
      de couture) et son commentaire.
- [x] 1.2 Colonne **sans fond ni blur** (`background: none; backdrop-filter:
      none`) : le texte se lit directement sur l'image ; le bandeau garde son
      fond 88 %.
- [x] 1.3 Conserver géométrie et centrage vertical (`width: 38%`,
      `justify-content: center`, paddings) — seul le fond change.
- [x] 1.4 Mettre à jour le commentaire du layout : colonne sans fond sur image
      pleine page, plus de dégradé ni de panneau.

## 2. Slide 14

- [x] 2.1 Vérifier `slides/pages/03-lancement.md` slide 14 : rien à changer côté
      contenu (variant `colonne` conservé) ; confirmer que le titre + les deux
      blocs tiennent dans le panneau sans déborder.

## 3. Vérification

- [x] 3.1 Rendu slide 14 dans les **deux modes** : image pleine page
      ininterrompue, texte lisible directement dessus (encre/crème en clair,
      crème/noir du négatif en sombre), sujet (ruban rouge) non recouvert.
- [~] 3.2 Contrôle **projecteur** du contraste réel du texte sur les zones
      calmes, deux modes (risque : lisibilité portée par l'asset, pas de fond).

## 4. Spec

- [x] 4.1 `openspec validate slide14-ambiance-pleine --strict`.
- [ ] 4.2 Archiver après vérif (fusion du delta `deck-layouts`).
