## Why

Dernier bloc du chantier scripts. Les trois sections finales sont soit
hors sujet, soit réduites à une slide :

- **Section 6** : mon wireframe parle de « résolution architecturale »
  (mémoire externe, RAG, deux rôles). Or cette matière est passée en
  section 5 avec les strates, et la section 6 est devenue **le mode
  personnage** — l'acteur, l'entretien rejoué, l'émergence. À refaire
  entièrement.
- **Section 7** (la récolte, 6 min) : une seule slide pour quatre beats,
  dont le plus fort du talk — le compte à rebours qu'on laisse **mourir
  seul à l'écran**.
- **Section 8** (la chute, 3 min) : une seule slide, alors que le script
  demande le dernier vote, le verdict, puis la sortie.

## What Changes

**Section 6 — le mode personnage** (refonte) : même fabrique, même
bibliothèque, une seule chose change — on ne demande plus à la machine
d'écrire *sur* le personnage, on lui demande de le **devenir**. La fiche du
personnage, l'entretien rejoué question par question (montée : factuelle →
interprétative → celle qui déraille), la phrase qui porte le beat (« cette
réponse-là n'est écrite nulle part… elle est cohérente avec tout, et elle
ne vient de rien »), l'émergence (un élément né d'un entretien, entré au
roman), et le retournement sur la question de Le Tellier, sourcée.

**Section 7 — la récolte** : le compte à rebours à zéro **seul à l'écran**
(le silence le plus long du talk), les stats du chapitre (titre, mots,
scènes du plan cochées), le contrat rappelé, la lecture (composant
existant), puis le retour au micro — « à quel moment, exactement, avez-vous
cessé de m'entendre ? » et le rapprochement final avec 1975.

**Section 8 — la chute** : le dernier vote à main levée (septième station du
jeu du seuil), l'hésitation posée comme démonstration, le verdict sur fond
noir (« l'Académie a déjà perdu. Elle ne le sait pas encore »), et la sortie
sur les derniers mots de Gary.

**Layout `noir`** : le script demande « slide noire, on termine comme on a
commencé ». Ce layout impose sa propre palette — encre et papier — **dans
les deux modes**, pour que le verdict tombe toujours sur du noir.

**Gabarits** (contenus en attente du mode acteur en fonctionnement et du
run de génération) : fiche du personnage, verbatim des trois questions,
anecdote d'émergence datée, statistiques du chapitre.

## Capabilities

### Modified Capabilities

- `deck-content`: ajout des exigences de contenu pour les sections 6
  (le mode personnage et son entretien), 7 (le zéro, les stats, le retour
  au micro) et 8 (le dernier vote, le verdict, la sortie).

### New Capabilities

<!-- Aucune. -->

## Impact

- **Modifié** : `slides/pages/06-resolution.md` (refonte complète — le
  fichier change de sujet), `07-lecture.md`, `08-cloture.md`.
- **Ajouté** : `theme/layouts/noir.vue`.
- **Renommage** : `06-resolution.md` devient `06-mode-personnage.md` (le
  nom actuel désigne un contenu qui n'existe plus).
- **Dépendances / réseau** : aucun.
