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

À la section 7, le deck SHALL récupérer le chapitre (Markdown) et l'audio
(portion pré-rendue en voix clonée) depuis la machine. L'audio récupéré
SHALL être lu depuis son début (aucun timecode).

Le chapitre SHALL porter deux marqueurs : un marqueur de bascule (relais
du speaker vers la voix clonée) et un marqueur de fin d'audio (borne de la
portion rendue en voix clonée). Le deck NE SHALL rendre que la portion
allant du début du chapitre au marqueur de fin d'audio ; le texte au-delà
NE SHALL PAS apparaître dans la slide.

Le défilement SHALL suivre la progression de l'audio sur la seule portion
que l'audio couvre — la portion lue à voix haute par le speaker est
affichée mais n'est pas sonorisée, et NE SHALL PAS être comptée dans le
mapping temps → défilement.

La portion sonorisée SHALL durer **2 min 30 à 3 min** — calée à 2 min 45 —
et SHALL être jouée **intégralement** : le deck n'interrompt pas l'audio de
lui-même. Cette borne SHALL être exprimée en **durée**, jamais en nombre de
mots : le débit de la voix clonée détermine la conversion et une consigne en
mots dérive dès qu'il change. Le
marqueur de bascule SHALL tomber **après la deuxième phrase** du chapitre,
la portion lue à voix haute par le speaker se limitant à ces deux phrases.

Le repli embarqué SHALL respecter la même mise en scène que le chemin
nominal : même position de marqueur de bascule, même ordre de durée
sonorisée. Le speaker ignore sur quel chemin il se trouve ; un décalage
entre les deux ferait chevaucher sa lecture à voix haute et la voix clonée.

#### Scenario: Chapitre et audio prêts

- **WHEN** la génération et le rendu audio sont terminés et la section 7
  est atteinte
- **THEN** le deck affiche la portion du chapitre jusqu'au marqueur de fin
  d'audio, découpée au marqueur de bascule, et lit l'audio récupéré

#### Scenario: Mise en scène identique sur le chemin de repli

- **WHEN** le deck lit le chapitre embarqué au lieu du chapitre distant
- **THEN** le speaker lit à voix haute exactement les mêmes deux phrases et
  la voix clonée reprend au même endroit qu'en nominal, sans chevauchement

#### Scenario: Défilement pendant la lecture clonée

- **WHEN** l'audio cloné progresse
- **THEN** le défilement suit la portion sonorisée, en partant du marqueur
  de bascule — pas du haut du texte affiché

### Requirement: Statut de génération sans dépendance d'affichage

Le deck SHALL interroger le statut de la génération pour connaître son
état (en cours, échec, prêt). Le compte à rebours SHALL rester autonome :
il n'attend jamais une réponse de statut pour avancer, et l'absence de
réponse NE SHALL PAS dégrader le déroulé.

L'interrogation périodique SHALL rester la source d'autorité de l'état —
détection d'échec, règle de reprise, arrivée du chapitre. Aucun de ces
mécanismes NE SHALL dépendre d'une connexion longue.

Un statut annonçant que rien n'est en cours (état au repos, notamment après
une annulation côté machine) NE SHALL PAS être répercuté sur l'affichage :
il rendrait au contrôle de lancement son apparence d'avant-lancement, en
pleine présentation.

#### Scenario: Statut injoignable en cours de talk

- **WHEN** l'interrogation de statut échoue pendant la génération
- **THEN** le countdown continue normalement, le deck poursuit son
  interrogation, et le déroulé n'est pas affecté

#### Scenario: Machine revenue au repos après annulation

- **WHEN** la machine annonce qu'aucune génération n'est en cours alors que
  le deck a déjà lancé
- **THEN** l'affichage ne change pas, le contrôle de lancement reste inerte,
  et le chapitre embarqué sera posé à zéro du compte à rebours

### Requirement: Étapes de génération en direct

Le deck SHALL afficher, pendant la génération, l'étape courante annoncée par
la machine et le récit des événements marquants qu'elle rapporte, afin que la
salle voie la machine travailler et se corriger.

Cet affichage SHALL être un **enrichissement** : sa source d'information NE
SHALL PAS être nécessaire au déroulé. Sa perte — à tout instant, y compris dès
le départ — NE SHALL produire aucun message, aucun indicateur, aucun blocage.
Le compte à rebours SHALL continuer, la génération SHALL se poursuivre, et le
repli embarqué SHALL rester disponible.

Quand la machine ne rapporte aucune étape, le deck N'AFFICHE rien à cet
emplacement : l'absence est un état normal (avant lancement, source
indisponible, chemin de repli) et NE SHALL PAS être signalée.

La machine ne rapportant qu'une **fenêtre glissante** des derniers événements,
c'est le deck qui SHALL accumuler l'historique. L'accumulation SHALL préserver
les répétitions légitimes d'un même événement, et NE SHALL PAS faire réapparaître
un récit déjà affiché lorsqu'une même fenêtre est reçue deux fois.

Le mode de répétition hors ligne SHALL produire un récit d'étapes équivalent,
afin que l'écran répété soit celui du jour J.

#### Scenario: Étapes en direct pendant la génération

- **WHEN** la machine rapporte ses étapes et ses événements
- **THEN** le compteur affiche l'étape courante et les derniers événements, le
  plus récent mis en avant

#### Scenario: Source d'étapes perdue en cours de génération

- **WHEN** la source d'étapes est coupée pendant la génération
- **THEN** l'étape et le récit restent figés sur leur dernière valeur, le
  compte à rebours poursuit sa course, et rien n'apparaît à l'écran

#### Scenario: Source d'étapes jamais disponible

- **WHEN** la source d'étapes ne répond pas dès le lancement
- **THEN** le déroulé est identique à celui du chemin nominal, sans message, et
  les étapes issues de l'interrogation périodique restent affichées si elle
  répond

#### Scenario: Fenêtre d'événements reçue deux fois

- **WHEN** la même fenêtre d'événements est reçue à nouveau après une
  reconnexion
- **THEN** le récit affiché ne repart pas en arrière et ne se répète pas

### Requirement: Relance unique en fenêtre haute

Si la génération échoue alors que **moins de trois minutes de compte à
rebours se sont écoulées**, le deck SHALL relancer la génération **une
seule fois**, sans aucun signal visible. Passé cette fenêtre, ou si la
relance a déjà été consommée, le deck SHALL basculer sur le repli embarqué
sans nouvelle tentative. Le deck NE SHALL JAMAIS boucler sur la relance.

Une relance NE SHALL PAS réinitialiser le compte à rebours, NI rendre à
nouveau disponible le contrôle de lancement.

#### Scenario: Échec précoce

- **WHEN** la génération échoue à moins de trois minutes de décompte écoulé
- **THEN** le deck relance la génération une fois, sans aucun changement
  visible à l'écran, et le compte à rebours poursuit sa course

#### Scenario: Échec tardif

- **WHEN** la génération échoue au-delà de trois minutes de décompte écoulé
- **THEN** le deck ne relance pas et prépare silencieusement le repli
  embarqué

#### Scenario: Échec de la relance

- **WHEN** la génération relancée échoue à son tour
- **THEN** le deck bascule sur le repli embarqué sans nouvelle tentative

### Requirement: Fallback silencieux et indistinguable

À toute défaillance d'un appel réseau (timeout, erreur, CORS, réseau
coupé), si une ressource n'est pas prête au moment de la lecture, ou si le
chapitre récupéré ne porte pas ses deux marqueurs, le deck SHALL basculer
vers les assets embarqués (`public/fallback/chapitre.{md,wav}`) **sans
aucun signal visible**. La bascule SHALL être indistinguable du chemin
nominal pour la salle.

#### Scenario: Réseau indisponible en section 7

- **WHEN** le chapitre ou l'audio distant est injoignable au moment de la
  lecture
- **THEN** le deck lit le chapitre et l'audio embarqués, sans message
  d'erreur ni indication de bascule

#### Scenario: Chapitre distant sans ses marqueurs

- **WHEN** le chapitre récupéré ne porte pas les deux marqueurs attendus
- **THEN** le deck le traite comme non disponible et lit le chapitre
  embarqué, qui les porte

#### Scenario: Statut jamais concluant

- **WHEN** le compte à rebours atteint zéro sans qu'aucun chapitre n'ait
  été obtenu — y compris si la machine n'a jamais signalé d'échec (adresse
  erronée, service muet, statut indéfiniment injoignable)
- **THEN** le deck pose le chapitre embarqué à cet instant, de sorte que la
  section 7 ne s'ouvre jamais sur une attente

#### Scenario: Bascule atomique du texte et de l'audio

- **WHEN** l'une seulement des deux ressources distantes est exploitable
- **THEN** le deck n'en mélange pas les sources et lit la paire embarquée
  complète — une voix qui ne dit pas le texte affiché serait pire que le
  repli

### Requirement: Ne jamais bloquer ni afficher d'erreur

Tous les appels réseau du deck SHALL utiliser des timeouts courts et des
retries silencieux. Le deck NE SHALL JAMAIS bloquer l'affichage ni montrer
d'erreur réseau pendant le talk. Aucun état d'échec de la machine NE SHALL
produire de texte, d'icône ou de changement d'état visible à l'écran, y
compris sur les contrôles de lancement.

#### Scenario: Timeout d'un appel

- **WHEN** un appel réseau dépasse son délai
- **THEN** le deck abandonne silencieusement (retry puis fallback), sans
  blocage ni message

#### Scenario: Échec pendant que le contrôle de lancement est encore visible

- **WHEN** la génération échoue alors que la slide de lancement est encore
  à l'écran
- **THEN** aucun libellé d'erreur n'apparaît et le contrôle de lancement ne
  redevient pas actionnable

### Requirement: Escape hatch de fallback manuel

Le deck SHALL exposer un raccourci discret permettant à l'opérateur de
forcer le fallback embarqué à tout moment. Ce contrôle technique est
distinct des actions scéniques (il PEUT être un raccourci clavier).

#### Scenario: Forçage manuel du fallback

- **WHEN** l'opérateur active le raccourci de forçage
- **THEN** le deck bascule immédiatement sur les assets embarqués, sans
  signal visible pour la salle
