# Design — chapter-reader

« Pourquoi » dans `proposal.md`, « quoi observable » dans
`specs/chapter-reader/spec.md`.

## Contexte hérité (jalon 3A)

- Store `slides/lib/session.ts` : `session.chapter = { text, audioUrl }`,
  statut `ready` quand la génération mock aboutit.
- `slides/lib/genClient.ts` : mock qui pose actuellement un chapitre
  factice (`audioUrl: null`). Ce changement le fait pointer sur les
  fixtures.

## Décisions

### D1 — Fixtures = fichiers TTS réels, embarqués dans public/fallback/

Source : `/Users/m4dz/Sources/m4dz/ia-devant-soi/TTS/test.{md,wav}` (extrait
du *Horla*, voix clonée ≈ 140 s, WAV 24 kHz mono).

- `public/fallback/chapitre.md` ← copie de `test.md`. Contient le marqueur
  **`<!-- BASCULE -->`** après la 1ʳᵉ phrase (point de relais speaker→clone).
- `public/fallback/chapitre.wav` ← copie de `test.wav` (~6,7 Mo ; WAV lu
  nativement par le navigateur, pas de conversion).
- Chemins servis same-origin (`/fallback/…`) → hors-ligne OK.
- Fixtures **provisoires** : remplacées par le vrai chapitre de secours +
  audio au jalon 4 / TTS. Tracées dans `CREDITS.md`.

### D2 — Le mock genClient charge les fixtures

`genClient` (mock) : au passage `ready`, `session.chapter` devient
`{ text: <contenu chapitre.md>, audioUrl: '/fallback/chapitre.wav' }`.
Chargement du texte via `fetch('/fallback/chapitre.md')` (asset embarqué,
same-origin, offline-safe). La signature du client et le comportement
spécifié de `live-generation` ne changent pas — on enrichit la fixture.

### D3 — Lecture + défilement synchronisé

`ChapterReader.vue` : un `<audio :src="session.chapter.audioUrl">` et un
conteneur de texte scrollable. Sur `timeupdate`, ratio =
`currentTime / duration` → position de scroll =
`ratio * (scrollHeight - clientHeight)`. Défilement fluide, sans
intervention. Si `audioUrl` absent → commandes inertes, pas d'erreur
(garde le mode dégradé).

### D4 — Départ via V-click, sans timecode, audio lu depuis 0

Règle projet : **jamais de raccourci clavier custom**. Toute action
scénique (ici le lancement de la lecture) est un **pas de clic Slidev**
(v-click), déclenché par l'avancée de présentation → télécommande OK.

**Pas de timecode — impossible par conception.** Le texte est généré en
direct sur la writing factory pendant le talk ; le speaker le découvre
avec l'audience, sans répétition. On ne peut donc caler aucun timecode.

Le relais repose sur un **découpage du TEXTE avant synthèse**, pas sur un
positionnement à la lecture :

- La writing factory pose `<!-- BASCULE -->` **après la première phrase**.
- Le TTS (jalon 4) ne synthétise que la portion **après** le marqueur →
  `chapitre.wav` = l'audio de relais, qui commence à la 2ᵉ phrase.
- `ChapterReader` affiche le texte complet, scindé au marqueur : phrase 1
  (lue par le speaker) + la suite. Au pas de clic, `audio.play()` **depuis
  0** — pas de `currentTime`, pas d'alignement. L'audio ne contient que la
  suite, donc pas de répétition de la phrase 1.

Mécanisme technique : `ChapterReader` observe `$clicks`
(`useSlideContext`) ; au franchissement du seuil → `audio.play()`. Aucun
`defineShortcutsSetup`.

Contrat pour le pipeline (jalon 4/TTS) : **synthétiser l'audio à partir du
texte post-bascule uniquement**. En mock, la fixture `chapitre.wav` est le
`test.wav` fourni tel quel (peut contenir la phrase 1 — imperfection mock
acceptée ; le mécanisme v-click + play-depuis-0 est ce qu'on valide).

### D5 — Affichage & thème

Texte du chapitre en corps (`--font-body`), colonne lisible (max-width),
tokens uniquement, testé dans les deux modes. État d'attente (statut ≠
`ready`) : message discret plutôt que zone vide.

## Points ouverts

- Seuil de clic (`$clicks`) déclenchant la lecture sur la slide 7 — à
  figer au câblage.
- Contrat pipeline jalon 4/TTS : l'audio doit être synthétisé à partir du
  **texte post-bascule uniquement** (pour que play-depuis-0 = relais sans
  répétition). À acter avec la writing factory.
- Les fixtures sont provisoires (remplacées par le chapitre de secours réel
  + audio voix clonée au jalon 4 / TTS).
