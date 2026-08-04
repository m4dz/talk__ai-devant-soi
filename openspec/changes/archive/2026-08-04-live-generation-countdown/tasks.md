# Tasks — live-generation-countdown

## 1. Plomberie (store + client mock)

- [x] 1.1 `slides/lib/session.ts` — singleton réactif (running, startedAt,
  status, chapter, remaining) + actions start/reset/applyStatus
- [x] 1.2 `slides/lib/genClient.ts` — contrat generate/status/chapter/audio,
  impl **mock** (gated `VITE_MOCK`), progression statut par timer
- [x] 1.3 `.env.example` — ajouter `VITE_COUNTDOWN_MINUTES` (défaut 35)

## 2. Composants

- [x] 2.1 `slides/components/GenerationTrigger.vue` — bouton scénique,
  feedback immédiat, idempotent (latch `session.running`)
- [x] 2.2 `slides/components/Countdown.vue` — tick autonome, base
  `VITE_COUNTDOWN_MINUTES`, plein écran, enrichi (non piloté) par status
- [x] 2.3 `slides/global-bottom.vue` — countdown discret persistant, gaté
  `session.running` && `$nav.currentPage` ∈ sections 3→6

## 3. Câblage

- [x] 3.1 `pages/03-lancement.md` — remplacer les 2 slots par
  `<GenerationTrigger />` et `<Countdown />`
- [x] 3.2 Fixer les bornes de pages 3→6 (constante commentée) et brancher
  `global-bottom.vue`

## 4. Constitution

- [x] 4.1 `CLAUDE.md` — corriger la ligne structure : composants live dans
  `slides/` (`slides/components/`, `slides/lib/`, `slides/global-bottom.vue`)

## 5. Vérification

- [x] 5.1 `pnpm run build` OK
- [x] 5.2 Au navigateur : déclencher → feedback immédiat ; re-cliquer →
  pas de relance (idempotent)
- [x] 5.3 Countdown démarre au trigger, décompte seul ; discret persistant
  visible sur 3→6, absent ailleurs
- [x] 5.4 Les deux modes (dark/light), lisibilité du trigger + countdown
- [x] 5.5 Invariant hors-ligne : build sans URL externe, mock = 0 requête
  réseau
