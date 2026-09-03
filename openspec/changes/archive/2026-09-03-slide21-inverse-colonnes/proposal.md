## Why

Sur la slide 21 (geste Malley, diptyque « grille tout au vert »), la colonne
machine est à **gauche** et l'auteur à **droite**. Le speaker veut inverser :
**auteur à gauche, machine à droite** — l'ordre de lecture privilégie alors
l'humain, la machine venant en second.

## What Changes

- `slides/pages/05-descente-technique.md`, slide 21 (`layout: diptyque`) :
  - Labels : `gauche: La machine` / `droite: L'auteur` →
    `gauche: L'auteur` / `droite: La machine`.
  - Contenus : le bloc `::gauche::` reçoit le verbatim **auteur**
    (actuellement à droite), `::droite::` reçoit le verbatim **machine**
    (actuellement à gauche).
  - Note de présentateur mise à jour (gauche = l'humain, droite = la machine).

## Capabilities

### New Capabilities

Aucune.

### Modified Capabilities

Aucune requirement ne change. La spec `deck-content` (geste Malley) impose
« une grille tout au vert posée **à côté** d'un extrait plat » sans fixer le
côté ; l'ordre des colonnes est un détail de présentation. Changement de
contenu/mise en page pur → `skip_specs: true`.

## Impact

- `slides/pages/05-descente-technique.md` — slide 21 uniquement.
- Aucun layout, token ou asset touché (le layout `diptyque` reste inchangé).
- Vérifier que la note « compter n'est pas lire » et le sens de lecture
  tiennent avec l'humain à gauche.
