## ADDED Requirements

### Requirement: Layout diptyque-grille

Le deck SHALL fournir un layout **diptyque-grille** : une composition
**asymétrique** en deux colonnes où la colonne de gauche empile **deux extraits
de texte étiquetés** (l'un au-dessus de l'autre) et la colonne de droite porte
une **grille de verdict** (un tableau de contrôles) posée en panneau. Il SHALL
rester lisible dans les deux modes et tirer ses couleurs **et ses tailles de
corps** des tokens. Il SHALL rester distinct du layout `diptyque` symétrique,
qui n'est pas modifié.

#### Scenario: Deux extraits empilés à gauche, grille à droite

- **WHEN** une slide utilise le layout diptyque-grille
- **THEN** les deux extraits s'affichent l'un au-dessus de l'autre dans la
  colonne de gauche, chacun sous son étiquette, et la grille de verdict
  s'affiche dans la colonne de droite

#### Scenario: Tient sans débordement

- **WHEN** les deux extraits et la grille sont présents sur la slide
- **THEN** l'ensemble tient dans le cadre de la slide sans débordement ni
  barre de défilement, la taille de corps étant réduite via les tokens si
  nécessaire

#### Scenario: Lisible dans les deux modes

- **WHEN** on bascule le deck entre mode sombre et mode clair
- **THEN** les deux extraits et la grille (fond de panneau, filets, marques de
  la grille) restent lisibles, sans couleur codée en dur
