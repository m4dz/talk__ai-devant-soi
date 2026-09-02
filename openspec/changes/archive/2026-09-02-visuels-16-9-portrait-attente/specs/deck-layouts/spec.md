# deck-layouts — delta

## ADDED Requirements

### Requirement: Layout signature

Le deck SHALL fournir un layout `signature` pour la slide d'identité du
speaker : une illustration-objet à **gauche** et le corps du propos à droite.

Ce layout SHALL hériter visuellement du traitement d'un cas illustré — même
composant d'objet crème, même disposition en colonnes, mêmes tokens
d'espacement, même plafond de hauteur sur l'objet — **sans** réutiliser le
modèle de contenu d'un cas (nom, œuvre, équilibre, question), qui ne
s'applique pas à la signature.

Le corps SHALL être fourni en slot, pour que la slide existante n'ait à
changer que sa déclaration de layout.

Le titre SHALL rester sur une composition tenable lorsque l'objet occupe sa
colonne : sa taille SHALL être réduite en présence d'une figure, comme le fait
déjà le layout de cas.

#### Scenario: Objet à gauche, propos à droite

- **WHEN** la slide de signature est affichée
- **THEN** le portrait apparaît en objet crème à gauche et le corps du propos
  à droite, dans les deux modes

#### Scenario: Air de famille avec la galerie

- **WHEN** la slide de signature est comparée à une slide de cas illustrée
- **THEN** l'objet est traité de la même façon (cadre, ombre, tilt stable,
  hauteur), sans que la slide expose les champs propres à un cas

### Requirement: Slide d'attente

Le deck SHALL ouvrir sur une slide d'attente, affichée avant le premier beat
du récit, destinée à tourner pendant l'installation de la salle et à couvrir
l'entrée du speaker.

Son motif SHALL être un tracé vectoriel, non une image générée : une ligne
plate traversant le cadre au tiers inférieur, portant **un seul battement**.

Le tracé SHALL être composé exclusivement de tokens — encre pour la ligne,
accent pour le battement, papier pour le fond — de sorte que les deux modes
soient produits sans second fichier ni fond codé en dur. Le battement SHALL
être le seul élément d'accent de la slide.

Le tracé SHALL porter sa propre trame halftone, en cohérence avec les
illustrations de la série où la trame court sur toutes les zones tonales. La
trame du tracé NE SHALL PAS être obtenue par un mode de fusion, qui est
proscrit sur les surfaces du deck.

L'animation du tracé SHALL être armée à l'entrée sur la slide et désarmée à la
sortie : aucune animation NE SHALL continuer à tourner sur une slide inactive,
toutes les slides étant montées en permanence.

L'arrêt du battement SHALL être déclenché par un pas de clic de présentation
(télécommande), jamais par un raccourci clavier ni par un minutage.

#### Scenario: Attente affichée avant le récit

- **WHEN** le deck est ouvert au début
- **THEN** la première slide est la slide d'attente, et le premier beat du
  récit vient après elle

#### Scenario: Deux modes sans second fichier

- **WHEN** la slide d'attente est basculée entre mode clair et sombre
- **THEN** ligne, battement et fond suivent les tokens du mode actif, sans
  ressource supplémentaire ni couleur codée en dur

#### Scenario: Animation désarmée hors de la slide

- **WHEN** la présentation a quitté la slide d'attente
- **THEN** aucune animation de cette slide ne continue à s'exécuter

#### Scenario: Arrêt du battement à la télécommande

- **WHEN** le speaker avance d'un pas de clic sur la slide d'attente
- **THEN** le battement cesse et la ligne devient plate

### Requirement: Layout ambiance et placement du texte

Le deck SHALL fournir un layout `ambiance` qui rend une illustration en fond
perdu, avec bascule de source selon le mode.

Ce layout SHALL offrir deux placements du texte, choisis en frontmatter :

- un **bandeau en bas**, pleine largeur, dimensionné pour quelques lignes de
  récit — le placement par défaut ;
- une **colonne dans le tiers gauche**, pour les slides qui portent un titre et
  plusieurs blocs, que le bandeau ne peut pas accueillir sans déborder ou sans
  manger l'image.

Le placement en colonne NE SHALL être employé qu'avec un asset dont la
composition réserve effectivement le tiers gauche — c'est-à-dire un asset tiré
avec un prompt de fond perdu, dont la clause de composition laisse cette zone
calme. Cette disponibilité SHALL être vérifiée sur le tirage retenu, pas
supposée depuis le prompt.

La couture entre la colonne et l'image NE SHALL PAS produire de bord franc
visible en projection.

#### Scenario: Bandeau pour un beat de récit

- **WHEN** une slide d'ambiance porte quelques lignes de récit
- **THEN** le texte s'affiche dans un bandeau en bas, lisible par-dessus
  l'image dans les deux modes

#### Scenario: Colonne pour une slide à plusieurs blocs

- **WHEN** une slide d'ambiance porte un titre et plusieurs blocs de texte
- **THEN** le texte s'affiche en colonne dans le tiers gauche, sans recouvrir
  le sujet de l'illustration

#### Scenario: Vérification de la zone calme avant intégration

- **WHEN** un asset est destiné au placement en colonne
- **THEN** l'occupation du tiers gauche est mesurée sur le tirage retenu, et
  l'asset est écarté de ce placement si le sujet y déborde
