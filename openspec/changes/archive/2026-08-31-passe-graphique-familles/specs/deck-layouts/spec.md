## REMOVED Requirements

### Requirement: Layout noir

**Raison** : la palette absolue (« indépendamment du mode actif ») produisait
un moment scénique visible en mode clair et **invisible en mode sombre**, où
la slide devenait indistinguable du reste du deck. Remplacé par un
modificateur d'inversion relatif au mode, ci-dessous, qui garantit le
contraste dans les deux modes. Le scénario « Noir dans les deux modes »
disparaît avec lui : il décrivait exactement le comportement défectueux.

## ADDED Requirements

### Requirement: Inversion de valeur relative au mode

Le deck SHALL fournir un **modificateur d'inversion de valeur**, applicable à
n'importe quelle slide par sa seule déclaration de classe et sans changer de
layout.

L'inversion SHALL procéder par **échange des tokens de valeur** (papier,
encre, filet, texte atténué) sur la slide, et non par des couleurs écrites en
dur : elle traverse ainsi tout layout qui consomme les tokens, sans qu'aucun
layout soit modifié.

L'inversion SHALL être **relative au mode actif** : sur fond papier elle rend
une slide d'encre, sur fond d'encre une slide papier. Une slide inversée NE
SHALL JAMAIS se confondre avec le fond courant du deck, quel que soit le mode.

#### Scenario: Contraste garanti dans les deux modes

- **WHEN** une slide porte le modificateur d'inversion, en mode clair puis en
  mode sombre
- **THEN** dans chaque mode elle s'affiche en valeur opposée au reste du deck,
  et le moment scénique se lit dans les deux

#### Scenario: L'inversion traverse les layouts

- **WHEN** le modificateur est posé sur des slides de layouts différents
- **THEN** chacune s'inverse correctement sans modification de son layout,
  parce que l'inversion agit sur les tokens et non sur le layout

#### Scenario: Ce que l'inversion ne traverse pas

- **WHEN** une slide inversée porte une illustration pulp ou un fond
  d'ambiance
- **THEN** l'illustration conserve sa valeur propre (l'objet crème documenté
  dans le style figé), et le contraste résultant est vérifié à l'œil

### Requirement: Layout entretien

Le deck SHALL fournir un layout pour l'**entretien rejoué** de la section 6,
qui présente une suite de questions typées et leurs réponses. C'est le corps
le plus dense du deck : le layout SHALL structurer cette densité — chaque
question distinguée de sa réponse, chaque type de question identifiable — au
lieu de laisser couler un bloc de texte.

Il SHALL être compatible avec le marquage gabarit, le contenu authentique de
l'entretien n'existant pas encore.

#### Scenario: Questions typées et distinguées

- **WHEN** la slide d'entretien est affichée
- **THEN** chaque question se distingue de sa réponse et porte son type, sans
  former un seul bloc de texte

### Requirement: Aucune slide sans traitement

Aucune slide du deck NE SHALL rester sur le layout par défaut de Slidev :
chaque slide SHALL déclarer un layout du thème. Les slides qui n'existent que
pour accueillir un composant live SHALL recevoir un traitement scénique,
plutôt que d'apparaître comme des slides inachevées.

#### Scenario: Inventaire sans layout par défaut

- **WHEN** on inventorie les layouts de toutes les slides du deck
- **THEN** aucune n'utilise le layout par défaut

#### Scenario: Slot de composant traité

- **WHEN** une slide accueille un composant live (décompte, lecteur de
  chapitre)
- **THEN** elle porte un layout du thème et se présente comme une slide
  composée, non comme une slide vide

## MODIFIED Requirements

### Requirement: Layout exergue

Le deck SHALL fournir un layout `exergue` pour les moments où une seule
phrase occupe la slide, en Sinzano, centrée, avec attribution optionnelle de
la source.

`exergue` SHALL accepter un **variant décrivant le rôle du moment** — et non
la longueur du texte :

- `titre` — le titre du talk lui-même ;
- `aphorisme` (défaut) — la phrase à emporter d'une strate ou d'une section ;
- `chute` — les derniers mots, qui closent le talk.

Ces rôles SHALL recevoir des traitements typographiques distincts : deux
moments de poids différent NE SHALL PAS s'afficher à l'identique. En
particulier, le titre du talk et les derniers mots NE SHALL PAS partager le
traitement des aphorismes de strate.

Le variant `aphorisme` SHALL conserver le traitement existant, afin que les
slides déjà réglées ne bougent pas.

#### Scenario: Citation centrée en Sinzano

- **WHEN** une slide utilise le layout `exergue`
- **THEN** la citation s'affiche en Sinzano, centrée, avec la source en
  attribution si fournie

#### Scenario: Trois rôles de moment distincts

- **WHEN** on compare une slide `titre`, une slide `aphorisme` et une slide
  `chute`
- **THEN** les trois traitements se distinguent à l'œil, et aucun ne se
  confond avec un autre

#### Scenario: Les aphorismes déjà réglés ne bougent pas

- **WHEN** une slide `exergue` ne déclare aucun variant
- **THEN** elle s'affiche exactement comme avant l'introduction des variants
