## ADDED Requirements

### Requirement: Coupe de la lecture au changement de slide

La lecture audio SHALL s'arrêter dès que la slide du lecteur est quittée,
sans geste dédié : avancer la présentation SHALL suffire à couper. Cela
permet au speaker d'interrompre proprement un chapitre trop long pour le
temps restant.

#### Scenario: Coupe en avançant

- **WHEN** l'audio est en cours de lecture et que le speaker avance à la
  slide suivante
- **THEN** la lecture s'arrête

#### Scenario: Aucun résidu sonore

- **WHEN** on a quitté la slide de lecture
- **THEN** plus aucun son ne provient du lecteur, même en revenant sur une
  autre slide
