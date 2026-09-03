## Why

Deux problèmes noués sur la slide de lancement (slide 16, « On lance ? »,
`03-lancement.md`) et le mode mock qui l'alimente.

**1. Rendu cassé sur la slide 16.** Le layout `propos` cale son corps dans une
colonne `max-width: 58ch` **ancrée à gauche**. Les contrôles de lancement
(`<GenerationTrigger>` + `<Countdown>`), centrés *dans* cette colonne,
apparaissent donc au tiers gauche de la slide, pas au centre. Le compteur
géant (chiffre 8rem du `<Countdown>`) tombe sous le bouton, décalé et trop
bas ; sa ligne de note (« Prêt à lancer », « Génération en cours… ») et son
journal d'étapes (`countdown__log`) s'affichent là où le speaker ne les veut
pas au lancement.

**Décision speaker** : le timer est porté par le **label du bouton** (plus
propre), le chiffre géant autonome disparaît de la slide 16, note et journal
n'apparaissent plus sur cette slide, et les contrôles sont centrés sur la
largeur de la slide.

**2. Le mock est périmé face au contrat back.** Le contrat `/status` + `/events`
(fixture fournie par la stack) fige un vocabulaire et une timeline que le mock
actuel (`MOCK_FEED`, `genClient.ts`) ne reflète pas : labels obsolètes (« Plan
de scènes », « scène 1/4 », « Lecture en voix clonée »), phase `tts` posée en
dur au lieu d'être portée par la seule « Restitution », notes inventées. La
répétition hors ligne ne montre donc pas l'écran du jour J — ce que la spec
`remote-integration` exige pourtant (« récit d'étapes équivalent »). On rejoue
désormais la vraie timeline.

## What Changes

### A. Rendu slide 16 — timer dans le bouton

- **`slides/components/GenerationTrigger.vue`** — le label porte le timer :
  idle `Lancer la génération` → running `mm:ss` (compte à rebours live, lu
  depuis `session.remaining`, point qui pulse). Aucun texte d'état distinct
  (renforce l'indistinguabilité : `generating`/`tts`/`error` rendent tous le
  même timer).
- **`slides/pages/03-lancement.md`** — retirer `<Countdown>` de la slide 16
  (note + journal disparaissent) ; centrer `.launch-controls` sur la largeur
  de la slide (casser la colonne 58ch du layout `propos`, p. ex. bloc en
  pleine largeur + centrage propre).
- **`CLAUDE.md`** — contrat `<Countdown>` : le timer du lancement est porté
  par le déclencheur ; le grand chiffre autonome et le « récit en grand » à
  l'écran tombent.

### B. Mock réaliste — rejouer la timeline back

- **`slides/lib/mockTimeline.ts`** (nouveau) — transcription des trois
  timelines du contrat back : `nominal`, `error`, `idle` (snapshots absolus,
  vocabulaire et phases fidèles).
- **`slides/lib/genClient.ts`** — le mock rejoue la timeline via
  `applySnapshot(s, 'stream')` (exerce le vrai raccord de notes et les
  transitions `generating → tts → ready`), **zéro réseau** ; la récolte
  terminale `ready` charge le chapitre embarqué (pas d'appel distant), les
  états terminaux `error`/`idle` empruntent les chemins existants (arme le
  repli / ignore l'idle).
- **`VITE_MOCK_SCENARIO=nominal|error|idle`** (défaut `nominal`) — sélecteur
  de scénario pour répéter aussi le repli silencieux (`error`) et l'annulation
  ignorée (`idle`). Ajouté à `.env.example`.

### C. Conséquence — surface du récit

Retirer `<Countdown>` de la slide 16 supprime la **seule** surface qui
affichait le récit complet (notes). L'étape courante reste visible dans la
**pilule de coin** (label seul, sections 4-6, inchangé). Les notes continuent
d'être **accumulées** dans le store (logique de raccord intacte, testée par le
mock), mais ne sont plus affichées — conforme au principe « pas de récit
défilant dans le coin ». La capacité d'affichage du feed reste disponible
(`<Countdown :feed="true">`), simplement non placée.

## Capabilities

### Modified Capabilities

- **deck-countdown** — l'affichage au lancement n'est plus un grand chiffre
  autonome mais le timer porté par le déclencheur.
- **live-generation** — le mode mock rejoue le vocabulaire et la timeline
  réels du contrat back, et sait rejouer les scénarios `error`/`idle`.
- **remote-integration** — le récit complet n'a plus de surface obligatoire ;
  l'étape courante reste affichée (pilule), le récit reste accumulé.

### New Capabilities

Aucune.

## Impact

- `slides/components/GenerationTrigger.vue` — label = timer.
- `slides/pages/03-lancement.md` — slide 16 : `<Countdown>` retiré, centrage.
- `slides/lib/mockTimeline.ts` — nouveau.
- `slides/lib/genClient.ts` — replay mock + sélecteur de scénario.
- `.env.example` — `VITE_MOCK_SCENARIO`.
- `CLAUDE.md` — contrat `<Countdown>` (grand chiffre → timer bouton).
- Vérifier `docs/scripts/` : aucune réplique ne doit pointer un « grand
  compteur » à l'écran (le script parle, il ne décrit pas le chrome).
- Vérifier **modes clair et sombre** : bouton idle/running centré, pilule
  intacte, chapitre servi à zéro du décompte dans les trois scénarios.
