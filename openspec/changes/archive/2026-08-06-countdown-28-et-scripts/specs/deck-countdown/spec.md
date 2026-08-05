## MODIFIED Requirements

### Requirement: Durée configurable

La durée du compte à rebours SHALL être configurable
(`VITE_COUNTDOWN_MINUTES`), avec une valeur par défaut de **28 minutes**
— la durée gravée par les scripts de la keynote (lancement en section 3,
zéro au début de la section 7) — pour permettre de répéter le talk en
accéléré.

#### Scenario: Durée par défaut et override

- **WHEN** aucune durée n'est configurée
- **THEN** le compte à rebours démarre à 28 minutes
- **AND WHEN** une durée est fournie par configuration
- **THEN** le compte à rebours démarre à cette durée

## ADDED Requirements

### Requirement: Affichage plein écran puis rappel discret persistant

Le compte à rebours SHALL s'afficher en grand sur la slide de lancement
(section 3), puis rester rappelable en **discret et persistant** (coin de
slide) tant qu'il tourne, jusqu'à la section 7 incluse.

La fenêtre d'affichage du rappel discret NE SHALL PAS dépendre de numéros
de slide : elle SHALL être déterminée par l'état de la session (le rappel
n'existe pas avant le lancement) et par une **exclusion explicite** portée
par les slides qui ne doivent pas l'afficher. Ainsi, réécrire ou
redimensionner une section NE SHALL PAS altérer l'affichage.

#### Scenario: Affichage plein écran au lancement

- **WHEN** on est sur la slide de lancement et que le compte à rebours
  tourne
- **THEN** il est affiché en grand, et le rappel discret n'est pas affiché
  sur cette slide

#### Scenario: Rappel discret persistant jusqu'à la récolte

- **WHEN** le compte à rebours tourne et que l'on parcourt les slides
  suivant le lancement, jusqu'à la section 7
- **THEN** il reste visible en discret dans un coin, de façon persistante
  d'une slide à l'autre

#### Scenario: Absent avant le lancement et sur les slides exclues

- **WHEN** la session n'a pas été lancée, ou que la slide courante déclare
  s'exclure du rappel
- **THEN** le rappel discret n'est pas affiché

#### Scenario: Insensible au redimensionnement des sections

- **WHEN** une section est réécrite et change de nombre de slides
- **THEN** l'affichage du rappel discret reste correct sans modification de
  configuration

## REMOVED Requirements

### Requirement: Double affichage plein écran puis discret

**Reason** : l'exigence était formulée en termes de « sections 3 à 6 » et
son implémentation reposait sur des bornes de numéros de slide, cassées à
chaque réécriture de section. Remplacée par « Affichage plein écran puis
rappel discret persistant », qui couvre les sections 3 à 7 et s'appuie sur
l'état de session plus une exclusion explicite portée par les slides.

**Migration** : le rappel discret n'est plus configuré par bornes ; les
slides qui ne doivent pas l'afficher déclarent `noCountdown: true` dans
leur frontmatter (slide de lancement, section 8).
