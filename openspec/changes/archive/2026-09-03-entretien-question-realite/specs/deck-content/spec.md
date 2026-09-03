## REMOVED Requirements

### Requirement: Le mode personnage, culmination collée au dernier mur

**Raison** : l'entretien était gravé à **deux** questions (factuelle,
interprétative) et le scénario « Entretien à deux questions » interdisait
explicitement une troisième. Le run INT-c du 2026-09-02 a produit une
troisième question — existentielle — qui tient sans conclure ; le speaker
décide de la conserver. Le requirement et son scénario « Entretien à deux
questions » disparaissent avec ce choix, remplacés ci-dessous par une version
à trois questions. Les trois autres scénarios (culmination, aucune émergence,
retournement sourcé) sont repris à l'identique.

## ADDED Requirements

### Requirement: Le mode personnage, entretien à trois questions

La section 5, le mode personnage, SHALL suivre immédiatement le dernier mur de
la fabrique, comme sa **culmination** et non comme un pont ornemental autonome :
il révèle le mécanisme du mur Lish — on ne demande plus à la machine d'écrire
*sur* le personnage, on lui demande de le **devenir**. Judith, objet de
l'accusation au dernier mur, devient ici le sujet qu'on interroge.

Il SHALL montrer un **entretien** avec ce personnage, question par question, en
progression sur **trois** questions : une question **factuelle** (elle connaît
son monde, un détail vérifiable dans les fiches — la mémoire tient), une
question **interprétative** (elle répond avec son biais, son angle mort — ce
n'est plus une base de données qui répond), puis une question **existentielle**
(on la pousse au bord du dispositif du roman en interrogeant la nature de sa
réalité). À la troisième, le personnage SHALL **tenir sans conclure** : il ne
capitule pas, ne « comprend » pas le piège, et se replie sur son métier. Le
dispositif du roman NE SHALL PAS y être nommé ni expliqué — il est seulement
effleuré par la tenue du personnage.

Il NE SHALL PAS rapporter d'**émergence** — aucun élément né d'un entretien et
entré dans le roman n'est documenté, et la section ne SHALL PAS en présenter un
reconstruit ou emprunté à une autre partie du dispositif. La troisième question
ne fait pas exception : elle montre une tenue, elle ne présente aucun apport
prétendu émergent. À la place, la section SHALL énoncer que rien n'a émergé et
que tout a été composé.

Il SHALL se clore par un retournement sur une question d'auteur **attribuée et
sourcée**.

#### Scenario: L'acteur en culmination du dernier mur

- **WHEN** on entre dans le mode personnage
- **THEN** il suit le dernier mur et présente la bascule d'écrire *sur* à
  *devenir* le personnage comme le mécanisme du mur qui précède

#### Scenario: Entretien à trois questions

- **WHEN** l'entretien est montré
- **THEN** trois questions apparaissent successivement — la factuelle, puis
  l'interprétative, puis l'existentielle — et à la troisième le personnage tient
  sans conclure, sans que le dispositif du roman soit nommé

#### Scenario: Aucune émergence affirmée

- **WHEN** on parcourt le mode personnage
- **THEN** aucune slide n'affirme qu'un élément produit par la machine est entré
  dans le roman, et une slide énonce que rien n'a émergé

#### Scenario: Retournement sourcé

- **WHEN** le mode personnage se termine
- **THEN** la question d'auteur affichée est attribuée à une personne nommée avec
  sa source
