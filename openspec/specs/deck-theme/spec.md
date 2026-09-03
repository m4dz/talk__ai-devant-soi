# deck-theme Specification

## Purpose
Définit le design system dual-mode du deck : identité visuelle pulp/polar
portée par la typographie, deux thèmes (dark/light) de première classe
basculables en direct pendant la présentation, et rendu pleinement
fonctionnel hors-ligne.
## Requirements
### Requirement: Deux thèmes de première classe

Le deck SHALL fournir un thème sombre (noir d'encre, papier blanc cassé)
et un thème clair (papier crème, encre noire), partageant un accent rouge
sang commun. Les deux modes MUST rendre le même contenu sans élément
manquant, illisible ou tronqué : aucun mode n'est un dégradé de l'autre.

#### Scenario: Rendu dans les deux modes

- **WHEN** une slide est affichée en mode sombre puis en mode clair
- **THEN** tous les éléments (titre, corps, accent) sont visibles et
  lisibles dans chaque mode, avec un contraste texte/fond suffisant

#### Scenario: Source de tokens unique

- **WHEN** une couleur, un espacement ou une taille de police est utilisé
  dans une slide
- **THEN** sa valeur provient d'un token de thème (custom property), pas
  d'une valeur codée en dur dans la slide

### Requirement: Bascule dark/light en direct

Le deck SHALL exposer un raccourci clavier dédié qui bascule entre mode
sombre et mode clair pendant la présentation. La bascule MUST être
réversible dans les deux sens et prendre effet immédiatement sur la slide
courante, sans rechargement ni perte de position dans le déroulé.

#### Scenario: Toggle réversible

- **WHEN** le speaker presse le raccourci de bascule en mode sombre
- **THEN** le deck passe en mode clair immédiatement, en conservant la
  slide courante
- **AND WHEN** il presse à nouveau le raccourci
- **THEN** le deck revient en mode sombre

### Requirement: Typographie pulp auto-hébergée

Le deck SHALL utiliser Sinzano Regular pour les titres et citations en
exergue, et Atkinson Hyperlegible pour le corps de texte. Les deux fontes
MUST être servies depuis les assets du deck (auto-hébergées), jamais
depuis un service distant. Aucun paragraphe de corps NE SHALL être composé
en Sinzano.

#### Scenario: Fontes chargées localement

- **WHEN** le deck est affiché sans accès à Internet
- **THEN** Sinzano et Atkinson Hyperlegible s'affichent correctement,
  sans police de repli système

### Requirement: Fonctionnement hors-ligne

Une fois buildé, le deck SHALL se charger et s'afficher sans aucune
requête réseau vers un service externe (CDN, Google Fonts, API tierce).
Les seuls appels réseau autorisés sont ceux vers la machine de génération
sur le réseau local (introduits à un jalon ultérieur).

#### Scenario: Aucune requête externe

- **WHEN** le deck buildé est chargé dans un navigateur avec le réseau
  externe coupé
- **THEN** toutes les slides, polices et styles se chargent sans erreur
  réseau et sans requête vers un domaine externe

### Requirement: Preuve de sortie du jalon

Le deck SHALL contenir au moins une slide de démonstration combinant un
titre Sinzano, un paragraphe de corps Atkinson et l'accent rouge, servant
à valider le thème. Cette slide MUST être vérifiée dans les deux modes
avant clôture du jalon.

#### Scenario: Slide preuve validée dans les deux modes

- **WHEN** la slide de démonstration est affichée puis basculée entre les
  deux modes
- **THEN** titre, corps et accent restent lisibles et cohérents avec la
  palette dans chaque mode

### Requirement: Ligatures Sinzano préservées

Le rendu des titres et citations en Sinzano SHALL préserver les ligatures
imbriquées de la fonte : aucune règle de style NE SHALL appliquer de
`letter-spacing` (tracking) sur les éléments composés en Sinzano.

#### Scenario: Titre sans tracking

- **WHEN** un titre ou une citation est composé en Sinzano
- **THEN** aucun espacement inter-lettres additionnel n'est appliqué, et
  les ligatures de la fonte s'affichent

### Requirement: Textures de fond pulp discrètes

Le thème SHALL fournir des textures de fond d'esthétique pulp — une trame
(halftone) et un grain papier — utilisables en éléments de fond. Elles
SHALL être pilotées par des tokens (opacité/densité), déclinées dans les
deux modes (sombre et clair), et rester **discrètes** : elles NE SHALL
JAMAIS réduire la lisibilité du texte au premier plan.

#### Scenario: Texture discrète, lisibilité préservée

- **WHEN** une slide affiche une texture de fond pulp
- **THEN** le texte au premier plan reste pleinement lisible, la texture
  restant en fond à faible intensité

#### Scenario: Texture dans les deux modes

- **WHEN** une slide texturée est basculée entre mode sombre et clair
- **THEN** la texture s'adapte au mode actif (via les tokens) et reste
  discrète dans les deux

### Requirement: Application parcimonieuse

Les textures et ornements pulp SHALL être appliqués avec parcimonie. Les
slides « argument » (typographiques) SHALL rester sobres ; la texture NE
SHALL PAS être imposée à toutes les slides par défaut.

#### Scenario: Slide argument sobre

- **WHEN** une slide argument (typographique) est affichée
- **THEN** elle reste minimale, sans texture ni ornement qui la
  surchargerait

### Requirement: Ornements typographiques pilotés par tokens

Les ornements pulp (filets, cartouche/bandeau de titre) SHALL être
disponibles pour les slides récit et SHALL tirer couleurs et épaisseurs
des tokens du thème, sans valeur codée en dur.

#### Scenario: Ornement dérivé des tokens

- **WHEN** un ornement pulp est utilisé sur une slide récit
- **THEN** ses couleurs et épaisseurs proviennent des tokens et suivent le
  mode actif

### Requirement: Sombre absolu opt-in par slide

Le thème SHALL fournir un moyen, activable **par slide** (une classe posée sur
la racine de layout), de forcer la palette sombre sur le sous-arbre de cette
slide, **quel que soit le mode global** du deck. Ce moyen est distinct de
l'inversion `.negatif`, qui est relative au mode actif : le sombre absolu est
inconditionnel.

Cet utilitaire NE SHALL PAS dupliquer de valeurs : il rebranche la palette
sombre existante (aucun hex nouveau, aucun fond codé en dur).

Son usage SHALL rester **exceptionnel**, borné aux slides-instruments (p. ex.
l'écran d'attente / oscilloscope). Il NE SHALL PAS s'appliquer aux slides de
contenu, qui restent citoyennes des deux modes et suivent la bascule globale.

#### Scenario: Sombre forcé sous mode clair

- **WHEN** le deck est en mode clair et qu'une slide porte l'opt-in sombre
  absolu
- **THEN** cette slide seule s'affiche sur fond d'encre, les autres slides
  restant en clair

#### Scenario: N'affecte pas le contenu

- **WHEN** on bascule le mode global du deck
- **THEN** les slides sans l'opt-in suivent la bascule dans les deux sens, et
  la bascule ne casse pas le rendu de la slide forcée sombre

