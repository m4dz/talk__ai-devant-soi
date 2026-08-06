## Why

La section 5 est la plus longue du talk (**14 minutes**) et la plus
technique : c'est la démonstration qui répond au renversement de la
section 4. Le deck n'en a que 4 slides de wireframe, sans les pièces à
conviction qui font tout le travail.

Le script (`docs/scripts/04-section-5-descente-fabrique.md`) la structure
en **quatre strates**, chacune sur le même battement : *ce qu'on a tenté →
le mur → ce que le mur a forcé à construire*. Chaque mur s'appuie sur un
**extrait raté authentique** affiché à l'écran. Ces extraits n'existent pas
encore (journal des murs en cours) : ils entrent en gabarits.

## What Changes

- **Quatre strates** au lieu de quatre murs nus :
  1. **Le lore** — « Écris-moi le chapitre suivant » → la machine écrit
     proprement n'importe quoi → une bibliothèque avec un bibliothécaire
     (fiches indexées), et le principe qui ne bougera plus : **la référence,
     c'est le papier**.
  2. **L'intention** — elle sait tout et ne sait pas où elle va → « la
     mémoire ne remplace pas le dessein » → l'atelier : plan de scènes,
     postes de travail qui s'enchaînent, deux rôles (l'auteur, et l'acteur
     qu'on présentera en section 6).
  3. **La qualité** — le mur le plus cruel : juste, propre, et mauvais →
     « le style n'est pas dans le modèle » → fiche de style + correcteur
     impitoyable, avec sa grille binaire.
  4. **La puissance** — on a pris un modèle plus gros, la machine est
     tombée à genoux → la sortie de secours (une clé d'API) refusée → la
     qualité se construit en architecture : **la fabrique reste à notre
     main**.
- **Pièces à conviction en gabarit** (contenus authentiques en attente) :
  trois extraits ratés, la grille de lint avec un extrait qui casse, les
  chiffres mesurés du crash.
- **Le pont Gary implicite** : « On a déjà rencontré quelqu'un, ce soir,
  qui a fabriqué une voix jusqu'à ce qu'elle devienne reconnaissable entre
  mille. » Slide seule, rien d'autre — la salle fait le lien.
- **La remontée** : la boîte noire rouverte (la bibliothèque écrite fiche
  par fiche, le plan voulu scène par scène, la voix réglée trait par trait,
  le correcteur qui applique mes règles), puis « où est l'intelligence dans
  cette fabrique ? Elle est partout où je suis passé », et la relance vers
  la section 6.
- **Layout `piece-a-conviction`** : titre + bloc de preuve + commentaire.
  Le script le dit lui-même — les extraits ratés *sont* les objets scéniques
  de cette section.

## Capabilities

### Modified Capabilities

- `deck-content`: la section 5 est spécifiée en quatre strates suivant le
  battement tenté → mur → construit, chacune adossée à une pièce à
  conviction, et se clôt par la règle et la remontée.

### New Capabilities

<!-- Aucune : `deck-placeholders` (gabarits) existe déjà. -->

## Impact

- **Modifié** : `slides/pages/05-descente-technique.md` (réécriture
  complète), `theme/layouts/wall.vue` si nécessaire.
- **Ajouté** : `theme/layouts/piece-a-conviction.vue`.
- **Dépendances / réseau** : aucun.
