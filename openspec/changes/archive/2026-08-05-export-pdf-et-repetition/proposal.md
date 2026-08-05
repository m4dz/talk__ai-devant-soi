## Why

Le deck est fonctionnel (jalons 1-3) mais il manque le **livrable
distribué** après le talk (un PDF du support) et une **passe de
répétition systématique** validant chaque slide dans les deux modes —
notamment l'accent rouge « à valider sur projecteur ». C'est le
sous-jalon 5A, seul volet du jalon 5 sans blocage externe.

## What Changes

- **Export PDF en mode papier/light** : configuration `slidev export` pour
  produire le support en mode clair (papier crème / encre), une slide par
  page, hors-ligne (Chromium local déjà installé via playwright-chromium).
- **Passe de répétition dans les deux modes** : parcours systématique des
  25 slides en sombre ET clair ; correction des éventuels défauts de
  contraste / lisibilité repérés (le contrat « deux thèmes de première
  classe » de `deck-theme` est ainsi vérifié en conditions réelles).
- **Validation de l'accent rouge** : note de répétition (à confirmer sur
  projecteur physique) ; ajustement du token accent si nécessaire.

Non-goals : passe design pulp / textures (5B) ; illustrations (5C) ;
finalisation des 2 slides bloquées par la citation Goncourt (#6, hors 5A).

## Capabilities

### New Capabilities

- `deck-export`: export du deck en PDF de support — mode papier/light, une
  slide par page, produit hors-ligne. Décrit le livrable distribuable
  indépendamment du rendu live.

## Impact

- **Modifié** : `slides/slides.md` (headmatter `export` : format pdf, mode
  clair, nom de fichier), éventuels correctifs de contraste dans
  `theme/styles/` selon la passe.
- **Ajouté** : script/commande d'export documentée (déjà `pnpm export`).
- **Dépendances** : `playwright-chromium` (déjà installé, jalon 1).
- **Réseau** : aucun ; l'export tourne en local.
