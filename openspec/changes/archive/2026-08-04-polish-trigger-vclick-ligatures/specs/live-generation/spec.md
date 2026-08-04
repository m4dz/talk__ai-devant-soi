## ADDED Requirements

### Requirement: Déclenchement activable à la télécommande

Le déclenchement de la génération SHALL être activable par l'avancée
normale de la présentation (pas de clic Slidev / télécommande), et pas
uniquement par un clic souris. Le déclenchement reste idempotent quel que
soit le moyen employé (télécommande ou souris) : une génération déjà
lancée n'est pas relancée.

#### Scenario: Lancement à la télécommande

- **WHEN** le speaker avance la présentation (télécommande) au pas de
  lancement de la slide de génération
- **THEN** la génération démarre, exactement comme un déclenchement manuel

#### Scenario: Idempotence tous moyens confondus

- **WHEN** la génération a déjà été lancée (par la télécommande ou la
  souris) et qu'un nouveau déclenchement survient par l'un ou l'autre moyen
- **THEN** aucune génération supplémentaire n'est démarrée
