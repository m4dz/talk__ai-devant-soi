# live-generation — delta

## MODIFIED Requirements

### Requirement: Mode mock autonome

En mode mock, le deck SHALL simuler la génération **sans aucun appel
réseau** : le statut progresse de façon autonome jusqu'à la disponibilité
du chapitre. Le mode mock SHALL être sélectionnable par configuration
(`VITE_MOCK`) pour permettre de répéter sans la machine distante.

Le mock SHALL **rejouer la timeline réelle du contrat de la machine** —
mêmes libellés d'étape, mêmes détails, même progression de phase
(`generating` tout du long, `tts` uniquement sur la restitution, puis
`ready`), même vocabulaire de récit — afin que l'écran répété hors ligne
soit celui du jour J. La récolte terminale du chapitre SHALL charger les
assets embarqués, sans appel réseau.

Le mock SHALL pouvoir rejouer plusieurs scénarios sélectionnables par
configuration (`VITE_MOCK_SCENARIO`, défaut `nominal`) : le déroulé nominal,
un échec (`error`) qui exerce le repli silencieux, et une annulation
(`idle`) qui est ignorée sans réinitialiser l'affichage.

#### Scenario: Répétition sans réseau

- **WHEN** le mode mock est actif et qu'aucune machine distante n'est
  joignable
- **THEN** le déclenchement, la progression du statut et la mise à
  disposition du chapitre fonctionnent de bout en bout, sans requête réseau

#### Scenario: Vocabulaire et phases fidèles au contrat

- **WHEN** le mock nominal se déroule
- **THEN** les étapes affichées, leurs détails et la progression de phase
  reprennent le vocabulaire réel de la machine, et la phase `tts`
  n'apparaît que sur la restitution finale

#### Scenario: Scénario d'échec rejoué

- **WHEN** le scénario `error` est sélectionné
- **THEN** le mock emprunte le chemin d'échec et le repli embarqué est armé
  sans aucun signal visible, de façon indistinguable du chemin nominal

#### Scenario: Scénario d'annulation rejoué

- **WHEN** le scénario `idle` est sélectionné
- **THEN** l'annulation est ignorée à l'affichage (l'état ne revient pas à
  « pas encore lancé ») et le chapitre embarqué est posé à zéro du compte à
  rebours
