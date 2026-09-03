# deck-layouts — delta

## MODIFIED Requirements

### Requirement: Slide d'attente

Le deck SHALL ouvrir sur une slide d'attente, affichée avant le premier beat
du récit, destinée à tourner pendant l'installation de la salle et à couvrir
l'entrée du speaker.

Son motif SHALL être un tracé vectoriel, non une image générée : une ligne
traversant le cadre au tiers inférieur, portant **un seul battement**,
parcourue par un **spot lumineux d'oscilloscope** — un curseur en tête d'une
courte traîne — qui balaie le cadre de gauche à droite en boucle. Le tracé
n'est PAS persistant : le spot l'écrit en le traversant et la traîne s'éteint
derrière lui — l'écran est vide devant le spot et redevient vide derrière la
traîne.

Le spot et sa traîne SHALL rouler sur **le même chemin** (même géométrie, même
`pathLength`), de sorte qu'ils restent synchronisés sur toute forme — plate ou
battante.

Le tracé SHALL déborder le cadre de part et d'autre, de sorte que l'entrée du
spot par la gauche et son retour de balayage se produisent **hors champ**,
découpés par le viewport : aucun fondu ni saut visible au bouclage.

Le tracé et le spot SHALL être composés de tokens (accent pour le trait vif,
fond issu du mode), en un seul fichier, sans couleur codée en dur. Le battement
SHALL rester le seul motif de la slide. Le tracé NE SHALL PAS porter de trame
halftone : un faisceau d'oscilloscope rayonne (halo), il ne s'imprime pas — et
le fond de la slide porte déjà la trame de la série. Le halo NE SHALL PAS être
obtenu par un mode de fusion, proscrit sur les surfaces du deck.

La slide d'attente SHALL s'afficher en **mode sombre absolu**, indépendamment
du mode global du deck (voir deck-theme, « Sombre absolu opt-in par slide ») :
c'est une slide-instrument, sur fond d'encre par principe. Elle déroge donc au
principe des deux modes, qui reste la règle pour toute autre slide.

L'animation SHALL être armée à l'entrée sur la slide et désarmée à la sortie :
aucune animation NE SHALL continuer à tourner sur une slide inactive, toutes
les slides étant montées en permanence.

L'arrêt du battement SHALL être déclenché par un pas de clic de présentation
(télécommande), jamais par un raccourci clavier ni par un minutage. Au clic, le
battement disparaît mais **le balayage continue** sur une ligne devenue plate :
l'oscilloscope tourne toujours, il n'écrit plus qu'un plat.

#### Scenario: Attente affichée avant le récit

- **WHEN** le deck est ouvert au début
- **THEN** la première slide est la slide d'attente, et le premier beat du
  récit vient après elle

#### Scenario: Deux modes sans second fichier

- **WHEN** le deck est basculé entre mode clair et mode sombre
- **THEN** la slide d'attente reste sur fond d'encre dans les deux cas (sombre
  absolu, voir deck-theme), sans ressource supplémentaire ni couleur codée en
  dur — spot et traîne en accent, tracé et fond en tokens

#### Scenario: Bouclage sans saut visible

- **WHEN** le spot achève un balayage et repart de la gauche
- **THEN** l'entrée et le retour se font hors du cadre, sans fondu ni saut
  perceptible à l'écran

#### Scenario: Animation désarmée hors de la slide

- **WHEN** la présentation a quitté la slide d'attente
- **THEN** aucune animation de cette slide ne continue à s'exécuter

#### Scenario: Arrêt du battement à la télécommande

- **WHEN** le speaker avance d'un pas de clic sur la slide d'attente
- **THEN** le battement disparaît et le balayage se poursuit sur une ligne
  devenue plate
