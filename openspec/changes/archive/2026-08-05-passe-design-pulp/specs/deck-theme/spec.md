## ADDED Requirements

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
