## Why

Les sections 3 et suivantes du wireframe (jalon 2) portent des slots
inertes (`GenerationTrigger`, `Countdown`). Le talk repose sur un ressort
dramaturgique : lancer une génération de chapitre en direct et faire
courir un compte à rebours ~35 min visible jusqu'à la lecture. Ce jalon
rend ces deux composants **fonctionnels en mode mock** (zéro réseau), pour
pouvoir répéter le talk de bout en bout sans la machine distante. Le
câblage réseau réel et le fallback sont le jalon 4.

C'est le changement A du jalon 3 (le ChapterReader, indépendant, suit dans
un changement B — CLAUDE.md règle 2).

## What Changes

- **Store de session** (`slides/lib/session.ts`) : singleton réactif
  partagé — `running`, `startedAt`, `status`, `chapter` — consommé par le
  trigger, le countdown et (jalon B) le reader.
- **Client de génération** (`slides/lib/genClient.ts`) : adapter derrière
  le contrat des **4 endpoints** (« À trancher » #2) —
  `generate` / `status` / `chapter` / `audio`. Ce jalon n'implémente que
  l'adapter **mock** (gated `VITE_MOCK`), qui simule une progression de
  statut par timer. L'implémentation réelle + le fallback silencieux sont
  jalon 4 ; les composants ne changeront pas.
- **`<GenerationTrigger>`** (`slides/components/`) : bouton scénique,
  feedback visuel immédiat, **idempotent** (un second clic ne relance
  pas — latch sur `session.running`).
- **`<Countdown>`** (`slides/components/`) : compte à rebours **autonome**
  côté deck (tick local, n'attend pas le réseau), durée configurable via
  `VITE_COUNTDOWN_MINUTES` (défaut 35), affichage plein écran ; enrichi
  par le statut réel quand il est disponible.
- **`slides/global-bottom.vue`** : layer persistant Slidev affichant le
  countdown **discret** (coin) tant qu'il tourne, gaté sur les sections
  3→6 via `$nav.currentPage`.
- **Câblage** : `pages/03-lancement.md` remplace ses deux slots par les
  composants réels.
- **`.env.example`** : ajout de `VITE_COUNTDOWN_MINUTES`.
- **CLAUDE.md** : correction de la ligne structure — les composants live
  vivent dans `slides/` (Slidev n'auto-importe pas `components/` à la
  racine repo ; `global-bottom.vue` n'est détecté que dans `slides/`).
  Mise à jour simultanée obligatoire (règle 1).

Non-goals : appels réseau réels, retries/timeouts, fallback silencieux
(jalon 4) ; ChapterReader et ses fixtures (changement B) ; TTS (jalon
ultérieur).

## Capabilities

### New Capabilities

- `live-generation`: session de génération pilotée depuis le deck —
  déclenchement idempotent, contrat de statut à 4 endpoints, mode mock
  autonome. Décrit le comportement observable du déclenchement et du
  suivi, indépendamment de l'implémentation (mock ou réelle).
- `deck-countdown`: comportement du compte à rebours — tick autonome côté
  deck, durée configurable, double affichage (plein écran puis discret
  persistant sur les sections 3→6), enrichissement par le statut réel.

### Modified Capabilities

<!-- Aucune. deck-content/deck-layouts/deck-theme inchangés : on remplace
     des slots inertes par des composants, sans modifier les contrats
     narratifs ou de thème existants. -->

## Impact

- **Nouveau** : `slides/lib/session.ts`, `slides/lib/genClient.ts`,
  `slides/components/GenerationTrigger.vue`,
  `slides/components/Countdown.vue`, `slides/global-bottom.vue`.
- **Modifié** : `slides/pages/03-lancement.md` (slots → composants),
  `.env.example` (+ `VITE_COUNTDOWN_MINUTES`), `CLAUDE.md` (ligne
  structure composants).
- **Dépendances** : aucune nouvelle (Vue fourni par Slidev).
- **Réseau** : aucun appel réel introduit — mock uniquement.
