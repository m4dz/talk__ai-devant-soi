# deck-layouts — delta

## MODIFIED Requirements

### Requirement: Layout ambiance et placement du texte

Le deck SHALL fournir un layout `ambiance` qui rend une illustration en **fond
perdu, plein cadre**, avec bascule de source selon le mode. L'image SHALL rester
pleine page sous le texte — jamais délavée ni recadrée pour lui faire de la
place.

Ce layout SHALL offrir deux placements du texte, choisis en frontmatter :

- un **bandeau en bas**, pleine largeur, dans un **bloc semi-transparent à bord
  franc** posé sur l'image (il couvre une zone dense de l'illustration et a
  besoin de ce fond pour rester lisible) — le placement par défaut ;
- une **colonne verticale à gauche**, pour les slides qui portent un titre et
  plusieurs blocs. La colonne NE SHALL PAS porter de fond ni de fondu : le texte
  se lit **directement sur l'image**, dans le tiers gauche calme que l'asset
  réserve. Ni panneau, ni dégradé de couture, ni bord — l'image porte le texte.

La lisibilité de la colonne SHALL être **assurée par l'asset** : son tiers
gauche calme SHALL contraster avec le texte dans les **deux modes** — fond clair
(texte encre) en mode clair, fond sombre (texte papier) en mode sombre, la
source basculant avec le mode. Cette double lisibilité SHALL être vérifiée sur
le tirage retenu, pas supposée depuis le prompt ; un asset dont la gauche ne
contraste pas dans un mode est écarté du placement en colonne.

#### Scenario: Bandeau pour un beat de récit

- **WHEN** une slide d'ambiance porte quelques lignes de récit
- **THEN** le texte s'affiche dans un bandeau en bas, bloc semi-transparent à
  bord franc, lisible par-dessus l'image dans les deux modes

#### Scenario: Colonne pour une slide à plusieurs blocs

- **WHEN** une slide d'ambiance porte un titre et plusieurs blocs de texte
- **THEN** le texte s'affiche en colonne verticale à gauche, **sans fond ni
  fondu**, directement sur le tiers gauche calme de l'image, sans recouvrir le
  sujet

#### Scenario: Image pleine page, sans couture

- **WHEN** une slide d'ambiance en colonne est affichée
- **THEN** l'image reste pleine page, ininterrompue sous le texte — aucun
  panneau ni dégradé ne la délave ou ne la coupe

#### Scenario: Vérification de la zone calme avant intégration

- **WHEN** un asset est destiné au placement en colonne
- **THEN** le contraste de son tiers gauche avec le texte est vérifié dans les
  DEUX modes sur le tirage retenu, et l'asset est écarté si la gauche déborde ou
  ne contraste pas dans un mode
