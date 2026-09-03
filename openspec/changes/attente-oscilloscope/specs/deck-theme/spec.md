# deck-theme — delta

## ADDED Requirements

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
