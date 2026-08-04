## Purpose

Décrit le comportement du compte à rebours de la génération : un timer
autonome côté deck, à durée configurable, affiché en grand au lancement
puis rappelé en discret et persistant sur les sections suivantes, enrichi
par le statut réel quand il est disponible.

## ADDED Requirements

### Requirement: Compte à rebours autonome

Le compte à rebours SHALL avancer de façon autonome côté deck, sans
dépendre d'une réponse réseau pour progresser. Une perte de connectivité
ou un statut distant indisponible NE SHALL PAS bloquer ni figer le compte
à rebours.

#### Scenario: Progression sans réseau

- **WHEN** le compte à rebours est démarré et qu'aucun statut distant
  n'arrive
- **THEN** il continue de décompter normalement, seul, jusqu'à zéro

### Requirement: Durée configurable

La durée du compte à rebours SHALL être configurable
(`VITE_COUNTDOWN_MINUTES`), avec une valeur par défaut de 35 minutes, pour
permettre de répéter le talk en accéléré.

#### Scenario: Durée par défaut et override

- **WHEN** aucune durée n'est configurée
- **THEN** le compte à rebours démarre à 35 minutes
- **AND WHEN** une durée est fournie par configuration
- **THEN** le compte à rebours démarre à cette durée

### Requirement: Démarrage lié au déclenchement

Le compte à rebours SHALL démarrer au déclenchement de la génération et
refléter le même état de session (il ne tourne pas tant que la génération
n'est pas lancée).

#### Scenario: Démarrage au lancement

- **WHEN** la génération est déclenchée
- **THEN** le compte à rebours démarre depuis sa durée initiale

### Requirement: Double affichage plein écran puis discret

Le compte à rebours SHALL s'afficher en grand sur la slide de lancement
(section 3), puis rester rappelable en **discret et persistant** (coin de
slide) sur les sections 3 à 6 tant qu'il tourne.

#### Scenario: Affichage plein écran au lancement

- **WHEN** on est sur la slide de lancement et que le compte à rebours
  tourne
- **THEN** il est affiché en grand

#### Scenario: Rappel discret persistant sur 3→6

- **WHEN** le compte à rebours tourne et que l'on parcourt les sections 3
  à 6 hors de la slide de lancement
- **THEN** il reste visible en discret dans un coin, de façon persistante
  d'une slide à l'autre

#### Scenario: Absent hors de la fenêtre 3→6

- **WHEN** on est en dehors des sections 3 à 6
- **THEN** le rappel discret n'est pas affiché

### Requirement: Enrichissement par le statut réel

Quand un statut réel de génération est disponible, le compte à rebours
SHALL pouvoir l'intégrer (par exemple ajuster l'estimation ou signaler la
fin), sans jamais laisser l'absence de statut le bloquer.

#### Scenario: Intégration non bloquante du statut

- **WHEN** un statut réel indiquant l'avancement ou la fin devient
  disponible
- **THEN** le compte à rebours peut le refléter, mais son absence ne
  l'empêche jamais d'avancer
