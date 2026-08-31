## Why

La planche contact des 66 slides, dans les deux modes, montre quatre défauts
que la lecture slide à slide ne révèle pas.

1. **Hiérarchie plate au sommet.** Le layout `exergue` porte **12 slides de
   quatre poids différents** avec un traitement unique (`--title-2`, 24ch,
   centré) : le titre du talk, les quatre aphorismes de strate, les questions
   pivots, et les derniers mots de Gary. Le titre de la keynote (15
   caractères) s'affiche exactement comme un aphorisme de strate. Les deux
   pics du talk sont ses slides les plus faibles.
2. **Aucun rythme de valeur.** **62 slides sur 66** partagent la même valeur.
   Le pulp vit du contraste clair/sombre ; les quatre exceptions sont massées
   au début et à la fin.
3. **Le layout `noir` ne fonctionne qu'en mode light — bug dual-mode.** Il
   force `#0f0d0b` dans les deux modes, délibérément. Conséquence non
   anticipée : en mode dark, les slides du verdict de la section 8 sont
   indistinguables du reste. Le moment scénique n'existe qu'en light.
4. **Trois slides restent en `default`** (l'entretien de la section 6, 708
   caractères — le corps le plus dense du deck ; les deux slots de composant
   de la section 7), donc sans traitement.

Le système de tokens, lui, est sain : 25 tokens, aucun mort.

## What Changes

- **`exergue` gagne des variantes**, comme `propos` : `titre`, `aphorisme`
  (défaut, traitement actuel inchangé), `chute`. Le variant décrit le **rôle
  du moment**, pas sa longueur.
- **L'inversion de valeur devient un modificateur, pas un layout.** Une
  classe `negatif` posée en frontmatter (`class: negatif`) **échange les
  tokens de valeur** sur la slide. Comme tous les layouts consomment les
  tokens, l'inversion les traverse sans qu'aucun soit modifié. Elle est
  **relative au mode courant** : sur fond papier elle donne une slide
  d'encre, sur fond d'encre une slide papier. Le moment scénique contraste
  donc toujours, quel que soit le mode.
- **Le layout `noir` est supprimé**, remplacé par ce modificateur. Le
  changement retire un layout au lieu d'en ajouter un.
- **Les trois `default` reçoivent leur traitement** : un layout pour
  l'entretien de la section 6, et un traitement des deux slots de composant
  de la section 7.

## Non-objectifs

- La slide identité sur mesure : réservée à la passe slide par slide.
- Les 13 blocs gabarit : provisoires par nature, ils partiront avec le
  contenu authentique.
- La galerie de quatre `case-card` consécutives en section 4 : défaut connu,
  hors périmètre par décision.
- La `diptyque` utilisée une seule fois est **conservée** : un layout n'est en
  trop que s'il double un autre, et la comparaison de deux versions côte à
  côte n'a pas d'équivalent. Aucune action.

## Risque assumé

L'inversion par échange de tokens ne traverse pas ce qui ne consomme pas les
tokens : les illustrations pulp (objets crème, par construction) et les fonds
`ambiance`. Une slide `negatif` portant une illustration donnera donc un objet
crème sur fond d'encre — ce qui est précisément la stratégie d'intégration
déjà documentée dans `docs/visuels-pulp.md`, mais il faut le vérifier à l'œil
et non le supposer.

## Capabilities

### Modified Capabilities

- `deck-layouts`: la famille `exergue` distingue les rôles de moment ;
  l'inversion de valeur est un modificateur relatif au mode, applicable à
  toute slide, et remplace le layout `noir` à palette absolue.

## Impact

- **Modifié** : `theme/layouts/exergue.vue`, `theme/styles/` (règle
  d'inversion), `slides/pages/01`, `06`, `07`, `08`.
- **Supprimé** : `theme/layouts/noir.vue`.
- **Ajouté** : un layout pour l'entretien de la section 6.
- **Dépendances / réseau** : aucun. Invariant hors-ligne inchangé.
