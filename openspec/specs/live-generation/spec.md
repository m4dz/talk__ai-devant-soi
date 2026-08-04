# live-generation Specification

## Purpose
Décrit le comportement observable du déclenchement et du suivi de la
génération de chapitre pilotée depuis le deck : déclenchement idempotent,
contrat de statut, et mode mock autonome permettant de répéter le talk
sans machine distante.
## Requirements
### Requirement: Déclenchement idempotent

Le deck SHALL exposer une action de déclenchement de génération qui, une
fois la session lancée, NE SHALL PAS relancer une nouvelle génération tant
que la session courante n'est pas réinitialisée. Un second déclenchement
pendant qu'une session tourne est sans effet.

#### Scenario: Double déclenchement sans relance

- **WHEN** l'utilisateur déclenche la génération, puis déclenche à nouveau
  alors que la session tourne
- **THEN** une seule session est active et aucune génération supplémentaire
  n'est démarrée

### Requirement: Feedback immédiat au déclenchement

Le déclencheur SHALL fournir un retour visuel immédiat au moment du clic,
indiquant que la génération est partie, sans attendre une réponse réseau.

#### Scenario: Retour visuel instantané

- **WHEN** l'utilisateur active le déclencheur
- **THEN** son état visuel passe immédiatement à « lancé / en cours », dans
  le même geste

### Requirement: État de session observable

Le deck SHALL maintenir un état de session partagé exposant au minimum :
si une génération est en cours, l'instant de démarrage, le statut courant,
et le chapitre produit lorsqu'il est disponible. Cet état SHALL être
consommable par plusieurs composants simultanément (déclencheur, compte à
rebours, lecteur).

#### Scenario: État partagé cohérent

- **WHEN** la génération est déclenchée
- **THEN** l'état de session reflète `running` vrai et un instant de
  démarrage, visibles par tout composant qui l'observe

### Requirement: Contrat de suivi à quatre opérations

Le suivi de la génération SHALL passer par un client offrant quatre
opérations stables — déclencher, lire le statut, récupérer le chapitre,
récupérer l'audio — de sorte que l'implémentation (mock ou réelle) puisse
changer sans modifier les composants qui la consomment.

#### Scenario: Progression du statut jusqu'à disponibilité

- **WHEN** une session est lancée puis suivie dans le temps
- **THEN** le statut progresse jusqu'à un état où le chapitre (et son
  audio) sont déclarés disponibles

### Requirement: Mode mock autonome

En mode mock, le deck SHALL simuler la génération **sans aucun appel
réseau** : le statut progresse de façon autonome jusqu'à la disponibilité
du chapitre. Le mode mock SHALL être sélectionnable par configuration
(`VITE_MOCK`) pour permettre de répéter sans la machine distante.

#### Scenario: Répétition sans réseau

- **WHEN** le mode mock est actif et qu'aucune machine distante n'est
  joignable
- **THEN** le déclenchement, la progression du statut et la mise à
  disposition du chapitre fonctionnent de bout en bout, sans requête réseau

