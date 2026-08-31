## Why

Mesure du deck (63 slides) avant la passe de style :

- **`default` porte 17 slides (27 %)**, et les **15 slides « titre + corps »
  sont toutes en `default`** — le même traitement visuel sert des intentions
  très différentes ;
- **la section 3 enchaîne 5 `default`** sans respiration, exactement là où le
  talk installe le roman, la fabrique et le contrat ;
- surtout : **3 slides sur 63 ont une révélation progressive**, dont 2 sont
  fonctionnelles (le déclencheur, le lecteur). **Une seule** slide utilise la
  révélation comme outil rhétorique.

Ce dernier point est le vrai défaut. Les scripts portent **19 marqueurs
`[Temps]`**, notés comme « des répliques, pas des respirations ». Le deck les
ignore : il livre tout d'un bloc. « Elle n'a rien interdit / Elle n'a rien
annoncé / Elle attend » s'affiche en une seconde alors que le speaker met dix
secondes à le dire — la chute est morte avant d'être prononcée.

## What Changes

- **Layout `propos`** — ce que le speaker adresse à la salle — avec trois
  variantes qui décrivent le **corps** (le titre reste libre, il peut être
  interrogatif) :
  - `plain` : l'énoncé et son développement ;
  - `question` : la question domine, le corps est minimal, et **l'espace vide
    sous la phrase est du matériau** — il rend la durée du silence visible ;
  - `inventaire` : liste anaphorique alignée, pensée pour être révélée ligne
    à ligne, avec une chute optionnelle en accent.
- **Révélation progressive** là où le script marque un silence ou une
  anaphore : environ 25 slides concernées, soit ~30 à 40 pas de clic
  supplémentaires. Pilotée par le « next », donc à la télécommande — la
  grammaire d'interaction du projet ne change pas.
- **Remappage des slides `default`** sur `propos` selon leur intention. Les
  trois slides « conteneur » (compte à rebours à zéro, lecteur, entretien)
  **restent inchangées** : elles font zéro mot, elles sont déjà nues — la
  mesure a montré qu'elles n'ont pas de problème à régler.

**Hors périmètre, volontairement** : le sur-mesure slide par slide. Cette
passe pose la **grammaire commune** des grandes familles rhétoriques ; le
traitement particulier de certaines slides (à commencer par l'identité du
speaker) viendra dans une passe ultérieure, quand le générique sera en place
et visible.

Décision de cadrage : la slide « Et la clause ? » **n'est pas scindée** —
elle porte une question en titre et un inventaire en corps, ce que la
variante `inventaire` permet puisque la variante ne contraint que le corps.

## Capabilities

### Modified Capabilities

- `deck-layouts`: ajout du layout `propos` et de ses trois variantes.
- `deck-content`: le rythme de révélation des slides suit les silences
  marqués par le script.

## Impact

- **Ajouté** : `theme/layouts/propos.vue`.
- **Modifié** : les huit fichiers de `slides/pages/` (remappage des slides
  `default`, ajout des `clicks` et des révélations).
- **Dépendances / réseau** : aucun.
