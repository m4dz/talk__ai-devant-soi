# deck-countdown Specification

## Purpose
Décrit le comportement du compte à rebours de la génération : un timer
autonome côté deck, à durée configurable, affiché en grand au lancement
puis rappelé en discret et persistant sur les sections suivantes, enrichi
par le statut réel quand il est disponible.
## Requirements
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
(`VITE_COUNTDOWN_MINUTES`), avec une valeur par défaut de **28 minutes**
— la durée gravée par les scripts de la keynote (lancement en section 3,
zéro au début de la section 7) — pour permettre de répéter le talk en
accéléré.

#### Scenario: Durée par défaut et override

- **WHEN** aucune durée n'est configurée
- **THEN** le compte à rebours démarre à 28 minutes
- **AND WHEN** une durée est fournie par configuration
- **THEN** le compte à rebours démarre à cette durée

### Requirement: Démarrage lié au déclenchement

Le compte à rebours SHALL démarrer au déclenchement de la génération et
refléter le même état de session (il ne tourne pas tant que la génération
n'est pas lancée).

#### Scenario: Démarrage au lancement

- **WHEN** la génération est déclenchée
- **THEN** le compte à rebours démarre depuis sa durée initiale

### Requirement: Enrichissement par le statut réel

Quand un statut réel de génération est disponible, le compte à rebours
SHALL pouvoir l'intégrer (par exemple ajuster l'estimation ou signaler la
fin), sans jamais laisser l'absence de statut le bloquer.

#### Scenario: Intégration non bloquante du statut

- **WHEN** un statut réel indiquant l'avancement ou la fin devient
  disponible
- **THEN** le compte à rebours peut le refléter, mais son absence ne
  l'empêche jamais d'avancer

### Requirement: Affichage au lancement puis rappel discret persistant

Au lancement (section 3), le compte à rebours SHALL être **porté par le
contrôle de déclenchement** : le déclencheur affiche le temps restant dans
son propre libellé une fois la génération lancée. Il N'Y SHALL PAS avoir de
grand chiffre autonome distinct sur la slide de lancement.

Sur les slides suivantes, le compte à rebours SHALL rester rappelable en
**discret et persistant** (pilule de coin) tant qu'il tourne, jusqu'à la
section 7 incluse.

La fenêtre d'affichage du rappel discret NE SHALL PAS dépendre de numéros
de slide : elle SHALL être déterminée par l'état de la session (le rappel
n'existe pas avant le lancement) et par une **exclusion explicite** portée
par les slides qui ne doivent pas l'afficher. Ainsi, réécrire ou
redimensionner une section NE SHALL PAS altérer l'affichage.

#### Scenario: Timer porté par le déclencheur au lancement

- **WHEN** on est sur la slide de lancement et que la génération est
  déclenchée
- **THEN** le déclencheur affiche le temps restant qui décompte, et aucun
  grand chiffre autonome ni rappel discret n'est affiché sur cette slide

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

