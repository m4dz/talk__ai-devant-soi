## Purpose

Définit la structure narrative du deck : les 8 sections, leur ordre, les
beats obligatoires, les emplacements des composants live et les points de
contenu bloqués. Décrit ce que le deck raconte, indépendamment de la mise
en forme.

## ADDED Requirements

### Requirement: Huit sections ordonnées

Le deck SHALL présenter huit sections dans cet ordre : (1) cold open
Gary/Ajar, (2) position de l'Académie Goncourt, (3) lancement de la
génération live, (4) jeu du seuil, (5) descente technique, (6) résolution
architecturale, (7) lecture du chapitre, (8) clôture. Chaque section SHALL
vivre dans son propre fichier sous `slides/pages/`, importé par l'entrée
principale.

#### Scenario: Navigation de bout en bout

- **WHEN** on parcourt le deck de la première à la dernière slide
- **THEN** les huit sections se succèdent dans l'ordre défini, sans trou
  ni section dupliquée

### Requirement: Cold open in medias res

La section 1 SHALL démarrer directement dans le récit Gary/Ajar façon
thriller noir, **sans slide de titre ni introduction**. Elle SHALL
inclure un beat de révélation lié à la position de l'Académie Goncourt.

#### Scenario: Pas de slide de titre

- **WHEN** le deck est ouvert sur sa première slide
- **THEN** la première slide est un beat de récit, pas une page de titre
  ou de sommaire

### Requirement: Lancement de la génération à la section 3

La section 3 SHALL contenir l'emplacement du déclencheur de génération et
du compte à rebours (marqués comme slots de composants live). C'est le
point du déroulé où la génération est lancée et le compte à rebours
démarré.

#### Scenario: Slots présents à la section 3

- **WHEN** on atteint la section 3
- **THEN** un emplacement identifiable pour le déclencheur de génération
  et un pour le compte à rebours sont présents sur la slide

### Requirement: Jeu du seuil à intervention décroissante

La section 4 SHALL présenter six cas historiques, un par slide, dans
l'ordre d'intervention humaine décroissante : Dumas/Maquet, Carver/Lish,
Vian/Vernon Sullivan, Ern Malley, Oulipo, Racter.

#### Scenario: Six cas dans l'ordre

- **WHEN** on parcourt la section 4
- **THEN** les six cas apparaissent chacun sur sa slide, dans l'ordre
  d'intervention humaine décroissante indiqué

### Requirement: Descente technique en quatre murs

La section 5 SHALL présenter quatre murs techniques en cascade, dans cet
ordre : (1) le modèle ignore le lore, (2) il perd l'intention narrative,
(3) la qualité littéraire est pauvre, (4) crash sous modèles plus lourds.
Chaque mur SHALL exposer le problème et la solution qui ouvre le mur
suivant.

#### Scenario: Quatre murs enchaînés

- **WHEN** on parcourt la section 5
- **THEN** les quatre murs se succèdent dans l'ordre, chacun avec son
  problème et sa solution

### Requirement: Slot de lecture du chapitre

La section 7 SHALL contenir l'emplacement du lecteur de chapitre (slot de
composant live) et matérialiser le passage de la voix du speaker à la voix
clonée.

#### Scenario: Slot lecteur présent

- **WHEN** on atteint la section 7
- **THEN** un emplacement identifiable pour le lecteur de chapitre est
  présent

### Requirement: Dernière ligne de clôture

La section 8 SHALL se terminer par la ligne exacte : « Je me suis bien
amusé. Au revoir et merci. »

#### Scenario: Derniers mots exacts

- **WHEN** on atteint la dernière slide
- **THEN** elle affiche exactement « Je me suis bien amusé. Au revoir et
  merci. »

### Requirement: Points de contenu bloqués marqués

Les slides qui dépendent de la citation officielle de l'Académie Goncourt
— la slide de la section 2 et le beat de révélation du cold open — SHALL
porter un marqueur `TODO` explicite tant que le libellé exact et sourcé
n'est pas intégré. Le reste de la trame NE SHALL PAS dépendre de cette
citation.

#### Scenario: Marqueur visible sur les slides bloquées

- **WHEN** on ouvre la slide Goncourt (section 2) ou le beat de révélation
  du cold open
- **THEN** un marqueur `TODO` signale que la citation officielle reste à
  intégrer

#### Scenario: Le reste de la trame est complet

- **WHEN** on parcourt les sections hors des deux slides bloquées
- **THEN** aucune autre slide n'est en attente de la citation Goncourt
