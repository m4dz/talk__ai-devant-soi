# chapter-reader Specification

## Purpose
Décrit le comportement observable du lecteur de chapitre en section 7 :
affichage du texte issu de la session, lecture audio synchronisée avec le
défilement du texte, et départ de l'audio à un point précis déclenché au
clavier pour mettre en scène la bascule voix du speaker → voix clonée.
## Requirements
### Requirement: Affichage du chapitre depuis la session

Le lecteur SHALL afficher le texte du chapitre issu de l'état de session
lorsqu'il est disponible. Tant que le chapitre n'est pas prêt, il SHALL
présenter un état d'attente lisible plutôt qu'une zone vide.

#### Scenario: Texte affiché quand prêt

- **WHEN** la session expose un chapitre disponible
- **THEN** le lecteur affiche le texte de ce chapitre

#### Scenario: État d'attente avant disponibilité

- **WHEN** aucun chapitre n'est encore disponible
- **THEN** le lecteur affiche un état d'attente, sans zone vide ni erreur

### Requirement: Lecture audio pilotée

Le lecteur SHALL piloter la lecture de l'audio du chapitre (démarrer,
mettre en pause). Quand aucun audio n'est disponible, les commandes de
lecture SHALL rester inertes sans provoquer d'erreur.

#### Scenario: Démarrage et pause

- **WHEN** un audio est disponible et que la lecture est déclenchée
- **THEN** l'audio démarre, et peut être mis en pause puis repris

### Requirement: Défilement suivant la lecture

Pendant la lecture audio, l'affichage du texte SHALL suivre la
progression : la portion en cours reste visible sans intervention
manuelle.

#### Scenario: Le texte suit l'audio

- **WHEN** l'audio progresse
- **THEN** le texte défile pour maintenir visible la portion correspondant
  à l'avancement de la lecture

### Requirement: Départ déclenché par l'avancée de présentation

Toute action scénique du lecteur SHALL être déclenchée par l'avancée
normale de la présentation (clic / télécommande), **jamais** par un
raccourci clavier dédié. Aucun timecode ni calage temporel n'est utilisé :
l'audio de relais SHALL être lu **depuis son début**.

Le texte SHALL être scindé au marqueur de bascule : la portion **avant**
(la première phrase) est lue à voix haute par le speaker ; au déclenchement,
l'audio — qui ne contient que la portion **après** — démarre depuis le
début et prend le relais.

#### Scenario: Relais à la télécommande, sans timecode

- **WHEN** le speaker avance la présentation (clic ou télécommande) au pas
  de bascule
- **THEN** l'audio de relais démarre depuis son début et poursuit la
  lecture, prenant le relais de la voix du speaker

#### Scenario: Découpage au marqueur de bascule

- **WHEN** le texte du chapitre contient un marqueur de bascule
- **THEN** la portion avant le marqueur est présentée comme lue par le
  speaker, et la portion après comme prise en charge par la voix clonée

### Requirement: Fonctionnement mock hors-ligne

Le lecteur SHALL fonctionner entièrement à partir de fixtures embarquées
(texte + audio) en mode mock, sans aucun appel réseau externe, pour
permettre de répéter la section 7 sans machine distante.

#### Scenario: Répétition sans réseau

- **WHEN** le mode mock est actif et le réseau externe coupé
- **THEN** le texte s'affiche et l'audio se lit à partir des fixtures
  embarquées, sans requête externe

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

