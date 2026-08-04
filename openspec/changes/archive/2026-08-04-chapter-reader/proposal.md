## Why

La section 7 (lecture du chapitre généré) porte encore un slot inerte.
C'est le beat émotionnel du talk : le chapitre écrit en direct est lu à
voix haute, le speaker commence puis **sa voix clonée prend le relais**.
Ce changement rend le lecteur fonctionnel en mock (zéro machine
distante), pour répéter la mise en scène de bout en bout. C'est le
changement B du jalon 3 (après l'archive de A — CLAUDE.md règle 3).

Il s'appuie sur le store de session livré par A : `session.chapter`
(`{ text, audioUrl }`) et le statut `ready`.

## What Changes

- **`<ChapterReader>`** (`slides/components/`) : affiche le texte du
  chapitre issu du store, pilote la lecture audio (élément `<audio>`),
  avec **défilement du texte suivant la progression de la lecture**.
- **Départ via V-click Slidev, sans timecode** : le démarrage de l'audio
  est un pas de clic Slidev (jamais un raccourci clavier), donc
  **déclenchable à la télécommande**. Le texte est scindé au marqueur
  `<!-- BASCULE -->` posé **après la première phrase** : le speaker la lit
  à voix haute, clique, et l'audio de relais démarre **depuis 0**. Aucun
  timecode : le texte généré en live n'est pas répété/calable — l'audio ne
  contient que la portion post-bascule (synthétisée ainsi au jalon 4).
- **Fixtures mock = fichiers TTS réels** : copie de
  `~/Sources/m4dz/ia-devant-soi/TTS/test.{md,wav}` (extrait du *Horla*,
  voix clonée) → `public/fallback/chapitre.md` + `public/fallback/chapitre.wav`.
  Le mock `genClient` livre ces fixtures dans `session.chapter` quand le
  statut passe `ready` (au lieu du texte factice de A).
- **Câblage** : `pages/07-lecture.md` remplace son slot par
  `<ChapterReader>`.
- Les fixtures servent aussi de **base au fallback silencieux du jalon 4**
  (mêmes chemins `public/fallback/`) ; elles seront remplacées par le
  vrai chapitre de secours + audio voix clonée le moment venu.

Non-goals : synthèse TTS réelle / voix clonée (jalon TTS ultérieur) ;
récupération réseau du chapitre et fallback silencieux (jalon 4) ;
contenu littéraire définitif du chapitre (fixture provisoire).

## Capabilities

### New Capabilities

- `chapter-reader`: lecture du chapitre dans le deck — affichage du texte
  issu de la session, lecture audio pilotée, défilement du texte synchronisé
  à la lecture, et départ de l'audio à un point précis déclenché au clavier
  pour la bascule voix speaker → voix clonée.

### Modified Capabilities

<!-- Aucune modification de contrat. `live-generation` reste satisfaite :
     le mock livre toujours un chapitre quand `ready` — on enrichit
     seulement la fixture (texte + audioUrl réels), sans changer la
     signature du client ni le comportement observable spécifié. -->

## Impact

- **Nouveau** : `slides/components/ChapterReader.vue`,
  `public/fallback/chapitre.md`, `public/fallback/chapitre.wav` (copies TTS).
- **Modifié** : `slides/lib/genClient.ts` (le mock charge les fixtures),
  `slides/pages/07-lecture.md` (slot → composant).
- **Dépendances** : aucune nouvelle.
- **Réseau** : aucun appel externe ; la lecture des fixtures est un asset
  same-origin embarqué (hors-ligne).
