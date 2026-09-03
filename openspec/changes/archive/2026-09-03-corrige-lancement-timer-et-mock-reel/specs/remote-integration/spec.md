# remote-integration — delta

## MODIFIED Requirements

### Requirement: Étapes de génération en direct

Le deck SHALL afficher, pendant la génération, l'**étape courante** annoncée
par la machine (dans le rappel discret de coin, l'étiquette seule), et SHALL
**accumuler** le récit des événements marquants qu'elle rapporte.

L'affichage du **récit complet** (la liste des derniers événements) est
optionnel : il n'a pas de surface obligatoire. Son absence est un état
normal et NE SHALL PAS être signalée. La capacité d'affichage reste
disponible là où un compteur complet est placé, mais aucune slide n'est
tenue de la porter.

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
- **THEN** l'étape courante est affichée dans le rappel discret, et le récit
  est accumulé (affiché uniquement là où un compteur complet est placé)

#### Scenario: Source d'étapes perdue en cours de génération

- **WHEN** la source d'étapes est coupée pendant la génération
- **THEN** l'étape et le récit restent figés sur leur dernière valeur, le
  compte à rebours poursuit sa course, et rien n'apparaît à l'écran

#### Scenario: Source d'étapes jamais disponible

- **WHEN** la source d'étapes ne répond pas dès le lancement
- **THEN** le déroulé est identique à celui du chemin nominal, sans message, et
  les étapes issues de l'interrogation périodique restent disponibles si elle
  répond

#### Scenario: Fenêtre d'événements reçue deux fois

- **WHEN** la même fenêtre d'événements est reçue à nouveau après une
  reconnexion
- **THEN** le récit accumulé ne repart pas en arrière et ne se répète pas
