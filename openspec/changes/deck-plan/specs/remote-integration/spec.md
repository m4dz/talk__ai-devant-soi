## ADDED Requirements

### Requirement: Plan du run affiché au lancement

Après un lancement accepté, le deck SHALL lire le plan du run qu'il suit et
SHALL l'afficher sur la slide de lancement, sous le contrôle de lancement. Le
plan SHALL être affiché **tel que la machine le sert** : c'est le texte de
l'auteur, il NE SHALL être ni réécrit, ni réordonné. L'affichage SHALL
s'arrêter aux 7 premières lignes de texte (titre et lignes vides non comptés),
la dernière terminée par « … ». Seule la syntaxe de titre peut être consommée pour la mise
en forme ; le plan NE SHALL PAS être interprété comme du HTML.

Quand le deck se replie sur le chapitre embarqué, il SHALL afficher à la
place une **copie embarquée** du plan préparé, si aucun plan n'est déjà
affiché ; la copie NE SHALL être posée qu'une fois le repli armé ou
matérialisé, jamais avant.

L'affichage du plan SHALL être un **enrichissement** : son absence (run sans
plan, ressource indisponible, copie illisible) est un
état normal et NE SHALL produire aucun message, aucun cadre vide, aucune
attente, aucun blocage. La lecture du plan NE SHALL PAS retarder le suivi du
run.

Un plan affiché NE SHALL plus changer ni disparaître jusqu'à la
réinitialisation de la session — ni à la relance, ni sur un échec, ni au
repli.

Le mode de répétition hors ligne SHALL afficher un **gabarit neutre** à la
place du plan, sans appel réseau, afin que la mise en page répétée soit celle
du jour J. Ce gabarit NE SHALL PAS contenir de contenu de chapitre.

#### Scenario: Plan servi par le run lancé

- **WHEN** la machine accepte le lancement et sert le plan du run
- **THEN** le plan apparaît sous le contrôle de lancement, caractère pour
  caractère, et le compte à rebours poursuit sa course

#### Scenario: Run sans plan

- **WHEN** la machine accepte le lancement mais ne sert aucun plan pour ce
  run
- **THEN** la slide de lancement reste telle qu'avant le lancement (le
  contrôle porte le compte à rebours), sans message ni emplacement vide

#### Scenario: Lancement refusé

- **WHEN** la machine refuse le lancement, y compris à la relance
- **THEN** la copie embarquée du plan apparaît sous le contrôle de lancement,
  comme un plan servi

#### Scenario: Plan long

- **WHEN** le plan compte plus de 7 lignes de texte
- **THEN** seules les 7 premières s'affichent, la dernière terminée par
  « … », et le plan tient dans le canvas

#### Scenario: Relance après un échec

- **WHEN** le run échoue en fenêtre haute alors que son plan est affiché, et
  que la relance crée un nouveau run
- **THEN** le plan affiché reste en place, inchangé

#### Scenario: Répétition hors ligne

- **WHEN** le mode mock est actif et que le lancement est déclenché
- **THEN** un gabarit de plan neutre apparaît sous le contrôle de lancement,
  sans requête réseau, quel que soit le scénario rejoué
