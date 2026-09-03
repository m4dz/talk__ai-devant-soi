# Design

## Centrage slide 16 sans casser le layout `propos`

Le layout `propos` cale `.propos__corps` en `max-width: 58ch` ancré à gauche.
Centrer `.launch-controls align-items:center` ne centre que **dans** cette
colonne. Le bloc de contrôles doit donc se centrer sur la **largeur de la
slide**, pas sur les 58ch.

Approche retenue : dans le `<style scoped>` de la slide 16, sortir les
contrôles de la contrainte de colonne — bloc en pleine largeur du cadre et
centré (`margin-inline: auto` sur un conteneur pleine largeur, ou
`align-self`/largeur explicite). Reste local à la slide : le layout `propos`
n'est pas touché (il sert d'autres slides).

## Timer dans le bouton

`GenerationTrigger` lit déjà `session`. Le label devient :
- idle : `Lancer la génération`
- running : `mm:ss` calculé depuis `session.remaining` (même formule que
  `Countdown`/`global-bottom`, `tabular-nums`).

Aucun libellé d'état (`generating`/`tts`/`ready`/`error`) : le timer seul est
plus indistinguable encore (l'échec silencieux ne change rien à l'écran).
`ready` n'est de toute façon jamais vu ici (28 min plus tard, autre slide).
Le point qui pulse (`gen-trigger__dot`) reste le signal « ça tourne ».

## Mock : rejouer la timeline via `applySnapshot`

Objectif : tester la **vraie** machine à états, pas un chemin parallèle.

- Snapshots non terminaux (`generating`, `tts`) → `applySnapshot(s, 'stream')`.
  Cette branche ne touche pas le réseau : elle fait `setStep` + `pushNotes`
  (exerce le raccord de fenêtre) + `applyStatus(phase)`. `source:'stream'`
  force l'application de l'étape et des notes.
- Terminal `ready` → **pas** `applySnapshot` (il appellerait `loadRemoteChapter`
  → réseau). Le mock charge le chapitre embarqué (`loadFallbackChapter`) et
  `applyStatus('ready', chapter)`, comme aujourd'hui.
- Scénario `error` → rejoue le snapshot `error` par le chemin existant
  (`applySnapshot` → `handleError`). En mock, le `POST /generate` de relance
  n'a pas de réseau et échoue → `armFallback` → chapitre embarqué posé à zéro
  du décompte. C'est exactement le comportement observable (repli silencieux) :
  on ne teste pas la reprise *réussie* (impossible sans réseau simulé), mais on
  teste que l'écran ne trahit rien.
- Scénario `idle` → `applySnapshot` ignore `idle` (pas recopié). Le filet de
  zéro pose l'embarqué. Vérifie la non-régression de l'affichage.

Horloge compressée conservée (~quelques secondes pour tout le flux) pour la
répétition ; les `elapsed_s` du contrat servent d'ordre, pas de cadence réelle.

Fixture rangée en `slides/lib/mockTimeline.ts` (inline, zéro réseau,
offline-safe), transcrite du contrat back fourni.

## Décision : les notes n'ont plus de surface d'affichage

Retirer `<Countdown>` de la slide 16 supprime la seule surface `feed=true`.
Choix assumé : les notes restent **accumulées** (le mock les produit, le
raccord est testé), mais ne sont **pas affichées**. La pilule garde
l'étiquette seule (règle « pas de récit défilant dans le coin »). La capacité
existe toujours (`<Countdown :feed="true">`) si une slide de feed est
réintroduite plus tard.
