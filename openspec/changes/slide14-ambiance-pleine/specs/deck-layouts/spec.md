# deck-layouts — delta

## MODIFIED Requirements

### Requirement: Layout ambiance et placement du texte

Le deck SHALL fournir un layout `ambiance` qui rend une illustration en **fond
perdu, plein cadre**, avec bascule de source selon le mode. L'image SHALL rester
pleine page sous le texte — jamais délavée ni recadrée pour lui faire de la
place.

Ce layout SHALL offrir deux placements du texte, choisis en frontmatter, **au
même traitement** : un **bloc semi-transparent à bord franc** posé sur l'image,
qui la laisse lire dessous et reste lisible dans les deux modes (couleurs =
tokens). Les deux placements :

- un **bandeau en bas**, pleine largeur, dimensionné pour quelques lignes de
  récit — le placement par défaut ;
- une **colonne verticale à gauche**, pour les slides qui portent un titre et
  plusieurs blocs, que le bandeau ne peut pas accueillir sans déborder.

Le bloc en colonne SHALL avoir un **bord franc**, sans dégradé de fondu : c'est
le même parti que le bandeau du cold open, et il tient en projection. La règle
antérieure interdisant un bord franc (et le dégradé de couture qui l'appliquait)
est **retirée**.

Le placement en colonne NE SHALL être employé qu'avec un asset dont la
composition réserve effectivement la gauche — asset tiré avec un prompt de fond
perdu dont la clause de composition laisse cette zone calme. Cette disponibilité
SHALL être vérifiée sur le tirage retenu, pas supposée depuis le prompt.

#### Scenario: Bandeau pour un beat de récit

- **WHEN** une slide d'ambiance porte quelques lignes de récit
- **THEN** le texte s'affiche dans un bandeau en bas, bloc semi-transparent à
  bord franc, lisible par-dessus l'image dans les deux modes

#### Scenario: Colonne pour une slide à plusieurs blocs

- **WHEN** une slide d'ambiance porte un titre et plusieurs blocs de texte
- **THEN** le texte s'affiche dans une colonne verticale à gauche, bloc
  semi-transparent à bord franc, sans recouvrir le sujet de l'illustration

#### Scenario: Image pleine page sous le bloc

- **WHEN** une slide d'ambiance en colonne est affichée
- **THEN** l'image reste pleine page et se lit sous le bloc gauche, sans dégradé
  qui la délave à gauche, le bord du bloc étant franc

#### Scenario: Vérification de la zone calme avant intégration

- **WHEN** un asset est destiné au placement en colonne
- **THEN** l'occupation de la gauche est mesurée sur le tirage retenu, et
  l'asset est écarté de ce placement si le sujet y déborde
