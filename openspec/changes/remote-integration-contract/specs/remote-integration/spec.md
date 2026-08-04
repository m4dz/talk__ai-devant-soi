## Purpose

Contrat d'intégration réelle entre le deck et la machine de génération du
réseau local, et protocole de fallback silencieux garantissant que la
démo reste indistinguable de son repli embarqué.

## ADDED Requirements

### Requirement: Déclenchement de la génération

Le deck SHALL déclencher la génération par un appel réseau au lancement
(section 3, sur l'avancée de présentation). L'appel SHALL être
fire-and-forget : le deck n'attend pas la fin de génération pour continuer,
et un déclenchement répété NE SHALL PAS lancer une seconde génération.

#### Scenario: Lancement fire-and-forget

- **WHEN** le speaker avance au pas de lancement
- **THEN** le deck émet la demande de génération et poursuit immédiatement
  (countdown démarré), sans attendre de réponse longue

### Requirement: Récupération du chapitre et de l'audio

À la section 7, le deck SHALL récupérer le chapitre (Markdown, contenant
le marqueur de bascule) et l'audio (WAV pré-rendu de la portion
post-bascule) depuis la machine. L'audio récupéré SHALL être lu depuis son
début (aucun timecode).

#### Scenario: Chapitre et audio prêts

- **WHEN** la génération et le rendu audio sont terminés et la section 7
  est atteinte
- **THEN** le deck affiche le chapitre récupéré et lit l'audio récupéré,
  découpé au marqueur de bascule

### Requirement: Statut optionnel, countdown autonome

Le suivi de statut SHALL être optionnel : le compte à rebours reste
autonome et ne dépend jamais d'une réponse de statut pour avancer. Quand
un statut est disponible, le deck PEUT l'utiliser pour enrichir
l'affichage ; son absence NE SHALL PAS dégrader le déroulé.

#### Scenario: Absence de statut

- **WHEN** l'endpoint de statut est absent ou ne répond pas
- **THEN** le countdown continue normalement et le déroulé n'est pas affecté

### Requirement: Fallback silencieux et indistinguable

À toute défaillance d'un appel réseau (timeout, erreur, CORS, réseau
coupé) ou si une ressource n'est pas prête au moment de la lecture, le
deck SHALL basculer vers les assets embarqués
(`public/fallback/chapitre.{md,wav}`) **sans aucun signal visible**. La
bascule SHALL être indistinguable du chemin nominal pour la salle.

#### Scenario: Réseau indisponible en section 7

- **WHEN** le chapitre ou l'audio distant est injoignable au moment de la
  lecture
- **THEN** le deck lit le chapitre et l'audio embarqués, sans message
  d'erreur ni indication de bascule

### Requirement: Ne jamais bloquer ni afficher d'erreur

Tous les appels réseau du deck SHALL utiliser des timeouts courts et des
retries silencieux. Le deck NE SHALL JAMAIS bloquer l'affichage ni montrer
d'erreur réseau pendant le talk.

#### Scenario: Timeout d'un appel

- **WHEN** un appel réseau dépasse son délai
- **THEN** le deck abandonne silencieusement (retry puis fallback), sans
  blocage ni message

### Requirement: Escape hatch de fallback manuel

Le deck SHALL exposer un raccourci discret permettant à l'opérateur de
forcer le fallback embarqué à tout moment. Ce contrôle technique est
distinct des actions scéniques (il PEUT être un raccourci clavier).

#### Scenario: Forçage manuel du fallback

- **WHEN** l'opérateur active le raccourci de forçage
- **THEN** le deck bascule immédiatement sur les assets embarqués, sans
  signal visible pour la salle
