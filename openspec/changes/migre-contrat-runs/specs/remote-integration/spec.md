## MODIFIED Requirements

### Requirement: Déclenchement de la génération

Le deck SHALL déclencher la génération par un appel réseau au lancement
(section 3, sur l'avancée de présentation). L'appel SHALL être
fire-and-forget : le deck n'attend pas la fin de génération pour continuer,
et un déclenchement répété NE SHALL PAS lancer une seconde génération.

L'appel SHALL nommer le chapitre et, sauf configuration contraire, demander
la reprise du dernier plan préparé de ce chapitre. Le deck SHALL suivre le
run que la machine annonce en réponse : statut, étapes, chapitre et audio
SHALL être lus sur ce run, jamais sur une ressource globale de la machine.
Une réponse qui n'annonce pas de run SHALL être traitée comme un échec de
lancement.

#### Scenario: Lancement fire-and-forget

- **WHEN** le speaker avance au pas de lancement
- **THEN** le deck émet la demande de génération et poursuit immédiatement
  (countdown démarré), sans attendre de réponse longue

#### Scenario: Le deck suit le run créé

- **WHEN** la machine accepte la demande et annonce un run
- **THEN** le statut, les étapes, le chapitre et l'audio sont lus sur ce run

#### Scenario: Relance sur un nouveau run

- **WHEN** la génération échoue en fenêtre haute et que la relance est
  acceptée avec un nouveau run
- **THEN** le deck suit le nouveau run et cesse d'écouter l'ancien, sans
  aucun changement visible à l'écran
