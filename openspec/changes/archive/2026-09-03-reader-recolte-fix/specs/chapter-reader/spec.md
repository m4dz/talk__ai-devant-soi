## MODIFIED Requirements

### Requirement: Défilement suivant la lecture

Pendant la lecture audio, l'affichage du texte SHALL défiler **en continu
depuis le haut du texte affiché jusqu'au bas**, sans intervention manuelle
et **sans saut**. La position de défilement SHALL être calée linéairement
sur l'avancement de l'audio (`currentTime / duration`), de sorte que le
texte descende au rythme de la lecture, comme une lecture humaine menée du
début à la fin. Le défilement NE SHALL PAS s'ancrer sur une portion
particulière du texte (pas de bond initial vers la portion clonée).

#### Scenario: Le texte suit l'audio

- **WHEN** l'audio progresse de son début à sa fin
- **THEN** le texte défile régulièrement du haut jusqu'au bas, sans saut ni
  à-coup, et la dernière ligne est atteinte à la fin de l'audio

#### Scenario: Départ en haut du texte

- **WHEN** l'audio démarre
- **THEN** l'affichage est au sommet du texte (la portion lue à voix haute
  visible) et commence à défiler de là, sans bond préalable

## ADDED Requirements

### Requirement: Le lecteur reste dans les limites de la slide

Le lecteur de chapitre SHALL rester borné à l'intérieur de la slide et NE
SHALL PAS déborder du cadre, y compris en vue d'ensemble (overview). Sa
hauteur défilable SHALL être bornée en **unités du canvas Slidev (px)** et
NE SHALL JAMAIS être exprimée en unités de fenêtre (`vh`/`vw`), qui
résolvent contre la fenêtre réelle et non le canvas mis à l'échelle. Le
lecteur SHALL être **visuellement délimité** (cadre : bordure, padding)
pour se distinguer du fond de la slide.

#### Scenario: Pas de débordement en overview

- **WHEN** la slide du lecteur est affichée en vue d'ensemble (miniature)
- **THEN** le lecteur reste contenu dans les limites de la slide, sans
  déborder sur les slides voisines ni hors cadre

#### Scenario: Bornage indépendant de la fenêtre

- **WHEN** la fenêtre de présentation change de taille
- **THEN** la hauteur du lecteur reste proportionnée au canvas de la slide
  (bornage en px canvas), et le texte reste lisible et défilable jusqu'au
  bout

#### Scenario: Cadre visible

- **WHEN** le lecteur est affiché
- **THEN** un cadre le délimite (bordure + padding), le séparant nettement
  du fond de la slide
