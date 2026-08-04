# Design — live-generation-countdown

« Pourquoi » dans `proposal.md`, « quoi observable » dans les specs
`live-generation` et `deck-countdown`.

## Contexte hérité

- Racine Slidev = `slides/` ; composants auto-importés depuis
  `slides/components/`, layers spéciaux (`global-bottom.vue`) uniquement
  dans `slides/`. Tokens/thème dual-mode en place. Voir archives jalons
  1-2.

## Décisions

### D1 — Store de session = singleton réactif module-scope

`slides/lib/session.ts` exporte un objet réactif unique (Vue `reactive`)
+ actions `start()`, `reset()`, `applyStatus()`. Pas de Pinia : un module
importé plusieurs fois partage la même instance, suffisant pour un état
inter-slides. Forme :
```
session = { running, startedAt, status, chapter: { text, audioUrl } | null }
```
`status` ∈ `idle | generating | tts | ready | error`.

### D2 — genClient derrière un contrat à 4 opérations

`slides/lib/genClient.ts` expose `generate()`, `status()`, `chapter()`,
`audio()` (« À trancher » #2). Ce jalon fournit **l'impl mock** gated
`import.meta.env.VITE_MOCK`. Le mock fait progresser `status` par timer
(`generating → tts → ready`) sur une échelle courte (indépendante de la
durée d'affichage du countdown), puis expose un chapitre mock. L'impl
réelle (fetch + polling + fallback silencieux) est jalon 4 : même
signature, les composants ne bougent pas.

Note : au jalon 3, sans `VITE_MOCK`, le client réel n'existe pas encore —
le mock est le chemin par défaut du jalon. Le basculement mock/réel propre
est cadré au jalon 4.

### D3 — GenerationTrigger idempotent par latch

Le bouton lit `session.running`. Au clic : si déjà `running`, no-op ;
sinon `session.start()` + `genClient.generate()`. Feedback immédiat =
l'état visuel dépend de `session.running`/`status`, pas d'un retour réseau
(le mock `generate()` est instantané ; le réel le sera aussi côté UI grâce
au latch optimiste).

### D4 — Countdown autonome + enrichissement

`slides/components/Countdown.vue` : tick local (`setInterval` 1 s) démarré
sur `session.running`, base = `VITE_COUNTDOWN_MINUTES` (défaut 35). Le
timer est la source de vérité de l'affichage ; `session.status` peut
l'enrichir (ex. « terminé » si `ready` avant zéro) mais ne le pilote
jamais. Timer arrêté sur `reset()`. Le temps restant vit dans le store
(pas dans le composant) pour survivre au démontage/remontage entre slides.

### D5 — Persistance discrète via global-bottom.vue

`slides/global-bottom.vue` affiche le countdown discret (coin) quand
`session.running` ET `$nav.currentPage` est dans la fenêtre des sections
3→6. Les bornes de pages sont dérivées de la trame (à fixer en dur avec un
commentaire, réajustables si la trame bouge — les numéros de section
peuvent varier avec les beats). Le composant plein écran (section 3) et le
rappel discret lisent le même store → cohérence garantie.

Risque : les bornes de pages 3→6 sont fragiles si le nombre de beats
change. Mitigation : centraliser les bornes dans une constante commentée,
et vérifier au navigateur après tout ajustement de trame.

### D6 — Correction CLAUDE.md (règle 1)

La ligne structure de CLAUDE.md (`components/` à la racine) devient
`slides/components/` + mention de `slides/lib/` et `slides/global-bottom.vue`.
Mise à jour simultanée à ce changement, sinon divergence constitution.

## Points ouverts

- Bornes exactes des sections 3→6 (numéros de slide) — à figer au câblage,
  vérifier au navigateur.
- Forme précise du chapitre mock (texte) — minimal ici ; les vraies
  fixtures arrivent au changement B (ChapterReader).
