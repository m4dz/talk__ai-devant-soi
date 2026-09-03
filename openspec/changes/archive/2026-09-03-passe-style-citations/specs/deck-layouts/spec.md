# deck-layouts — delta

## MODIFIED Requirements

### Requirement: Layout citation sourcée

Le deck SHALL fournir un layout de **citation sourcée** : le corps cité,
l'attribution de son auteur, et sa **référence de publication affichée à
l'écran** (titre, numéro, date). La référence NE SHALL PAS être optionnelle sur
ce layout — c'est sa raison d'être.

Le corps cité SHALL être composé dans la **police de corps**, non en Sinzano :
la citation sourcée est une **pièce à conviction** (presse, clause d'éditeur),
distincte de la voix lyrique de l'exergue — laquelle garde Sinzano (voir
deck-theme, « Typographie pulp auto-hébergée »).

Le corps cité SHALL être **mis en exergue** : posé, aligné à gauche, sur un
**panneau semi-transparent**, et marqué par un **grand guillemet ouvrant** en
**accent semi-transparent**, ancré en haut à gauche du bloc. Le panneau et le
guillemet SHALL tirer leurs valeurs de **tokens** et rester lisibles dans les
deux modes ; le guillemet NE SHALL PAS masquer le texte cité.

L'attribution SHALL suivre une **hiérarchie délibérée** sous le bloc cité :
l'auteur en **plus petit, aligné à droite** ; puis la référence dans la
**cartouche partagée** (encadré), également **alignée à droite**. La distinction
des niveaux SHALL venir de tokens (taille, teinte), jamais de valeurs codées en
dur.

Le nom de l'auteur et son titre/rôle SHALL être portés sur **deux lignes** —
césure sur la **première virgule** : le nom seul sur la première ligne, le
titre (juré, lauréat, maison…) sur la suivante ; les virgules internes du titre
(une maison à plusieurs sceaux) NE SHALL PAS provoquer d'autre césure.

Le corps cité SHALL respecter la **typographie française** : une **espace fine
insécable** accompagne les guillemets (après « et avant ») et la ponctuation
haute (avant ? ! ;), pour éviter les guillemets détachés et les coupures de
ligne parasites.

La cartouche de source SHALL être la **même ornementation partagée** que celle
des autres sources du deck — dont la source de la slide de clôture — pour un
style de source homogène.

Le layout SHALL accueillir **plusieurs répliques citées** dans un même bloc,
sous **un seul** guillemet ouvrant en tête, y compris lorsqu'une réplique est
révélée au clic, sans casser la composition.

#### Scenario: Citation avec sa source visible

- **WHEN** une slide utilise le layout de citation sourcée
- **THEN** la citation, son auteur et sa référence de publication sont
  affichés ensemble à l'écran

#### Scenario: Corps cité en police de corps

- **WHEN** une slide de citation sourcée est affichée
- **THEN** le corps cité est composé dans la police de corps, pas en Sinzano

#### Scenario: Mise en exergue par panneau et guillemet

- **WHEN** une slide de citation sourcée est affichée
- **THEN** le bloc cité est posé sur un panneau semi-transparent, marqué d'un
  grand guillemet ouvrant en accent semi-transparent ancré en haut à gauche,
  le texte restant lisible et non masqué, couleurs issues de tokens

#### Scenario: Attribution alignée à droite en hiérarchie

- **WHEN** une slide de citation sourcée est affichée
- **THEN** l'auteur apparaît en plus petit et aligné à droite sous le bloc, et
  la référence en cartouche partagée alignée à droite dessous

#### Scenario: Auteur sur deux lignes, nom puis titre

- **WHEN** une slide de citation sourcée affiche son auteur
- **THEN** le nom est sur une première ligne et son titre/rôle sur la suivante,
  la césure tombant sur la première virgule, les virgules internes du titre
  restant sur la même ligne

#### Scenario: Typographie française des citations

- **WHEN** une citation contient des guillemets « » ou une ponctuation haute
- **THEN** une espace fine insécable accompagne « (après), » (avant) et ? ! ;
  (avant), sans guillemet détaché ni coupure de ligne parasite

#### Scenario: Plusieurs répliques dans un même bloc

- **WHEN** une slide de citation sourcée porte deux répliques, dont une révélée
  au clic
- **THEN** les deux tiennent dans le même bloc sous un seul guillemet ouvrant,
  sans casser la composition

#### Scenario: Rendu dans les deux modes

- **WHEN** une slide de citation sourcée est basculée entre les deux modes
- **THEN** citation, attribution et référence restent lisibles, couleurs
  issues des tokens
