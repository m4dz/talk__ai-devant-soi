## Why

> **✅ DÉBLOQUÉ le 2026-08-07.** La surface HTTP existe côté machine
> (`orchestrator/api.py` du dépôt de la stack, `ThreadingHTTPServer` sur
> `0.0.0.0:8420`). Les quatre opérations du contrat gelé répondent, CORS
> compris. Ce changement passe de « contrat cible » à « applicable ».
> **Rév. 4 du contrat machine** : le TTS est branché (`/audio` rend un WAV
> mono 24 kHz), les deux marqueurs sont **garantis présents** y compris
> dans les cas dégénérés, l'extrait cloné est calé à **2'45** réglé en
> secondes, et `phase` peut aussi valoir `idle`. Plus aucune réserve
> bloquante côté machine.

Le jalon 4 remplace le mode mock (jalon 3) par l'intégration réelle avec
la machine de génération du réseau local, plus le protocole de fallback
silencieux (non-négociable : « la démo doit être indistinguable de son
fallback »).

## What Changes

Contrat réel (détails HTTP et pièges d'implémentation dans `design.md`) :

- **`POST {VITE_GEN_HOST}/generate`** — déclenchement fire-and-forget de
  la génération, envoyé par le deck au lancement (section 3, sur V-click).
  `202` que la génération démarre ou tourne déjà : l'idempotence est vue
  de chez nous, on ne distingue pas.
- **`GET {VITE_GEN_HOST}/chapter`** — le chapitre en Markdown, portant
  **deux** marqueurs : `<!-- BASCULE -->` (relais vers la voix clonée) et
  `<!-- FIN AUDIO -->` (fin de la portion rendue en audio). Non prêt →
  `204`.
- **`GET {VITE_GEN_HOST}/audio`** — le WAV pré-rendu de la portion
  `BASCULE → FIN AUDIO`, voix clonée. Non prêt → `204`.
- **`GET {VITE_GEN_HOST}/status`** — `{phase, ready}` + champs enrichis
  (`progress`, `label`, `detail`, `notes`). Reste la **source d'autorité de
  l'état** : détection d'échec, règle de reprise, arrivée du chapitre.
- **`GET {VITE_GEN_HOST}/events`** (rév. 5) — flux SSE du même snapshot, une
  fois par seconde. **Enrichissement pur** : il alimente l'étape et le récit
  affichés pendant la génération, et rien du déroulé n'en dépend.
- **`phase` peut valoir `error` et `idle`** — admis : `GenStatus` connaît
  déjà les deux. `idle` (avant lancement, après annulation opérateur) n'est
  **pas** recopié dans le store : il réactiverait le bouton de lancement en
  pleine scène.
- **Un seul host** pour tout : `/chapter` et `/audio` sortent de la
  machine de génération. `VITE_TTS_HOST` disparaît.
- **Protocole de fallback silencieux** : timeouts courts + retries
  silencieux ; à tout échec / non-prêt / CORS / réseau coupé / marqueur
  manquant, bascule **invisible** vers `public/fallback/chapitre.{md,wav}`.
  Raccourci discret pour forcer le fallback (escape hatch opérateur —
  clavier autorisé ici : contrôle technique, pas action scénique).
- **Relance unique en fenêtre haute** : si `phase: error` survient à moins
  de **3 minutes de décompte écoulé**, le deck re-POST **une seule fois**,
  sans aucun signal. Au-delà, ou après cette unique reprise, fallback
  direct. Jamais de boucle.
- **Affichage borné aux marqueurs** : la section 7 ne rend que
  `début → FIN AUDIO`. Le reste du chapitre n'entre pas dans la slide, ce
  qui aligne la hauteur défilable sur le périmètre sonore.
- `genClient` réel (branche `VITE_MOCK=0`) implémentant ce contrat ; le
  mock du jalon 3 reste le chemin par défaut jusqu'à bascule.

- **Étapes en direct sur le compteur** : étape + sous-étape + récit des
  événements marquants sur le compteur plein écran ; étiquette seule sur la
  pilule de coin (sections 4 à 6, où l'argumentation se déroule). Rien à
  l'écran quand la machine n'annonce rien.
- **Récit scripté en mode mock**, pour que la répétition hors ligne montre le
  même écran que le jour J.

Non-goals : affichage de la barre de progression `progress` (le compte à
rebours occupe déjà ce rôle visuel, et une seconde jauge le concurrencerait) ;
appel de `POST /cancel` par le deck ; construction de l'API côté stack (autre
repo).

## Capabilities

### New Capabilities

- `remote-integration`: contrat d'intégration réelle deck↔machine et
  protocole de fallback silencieux — comportement observable des appels
  (déclenchement, récupération chapitre/audio bornée aux marqueurs,
  statut, relance unique en fenêtre haute), et garantie de bascule
  invisible vers les assets embarqués à toute défaillance.

## Impact

- `slides/lib/genClient.ts` : branche réelle (fetch, sondage, retries, relance
  unique, blob audio) + flux SSE `EventSource` et point d'entrée unique
  `applySnapshot`.
- `slides/lib/session.ts` : `duration` (mesure de l'écoulé pour la fenêtre de
  relance), `step` et `notes` + mutateurs `setStep` / `pushNotes`.
- `slides/components/Countdown.vue` : ligne d'étape + récit des dernières notes.
- `slides/global-bottom.vue` : étiquette d'étape dans la pilule de coin.
- `slides/components/ChapterReader.vue` : découpe à **deux** marqueurs,
  rendu borné, scroll ancré sur le bloc cloné.
- `slides/components/GenerationTrigger.vue` : **suppression du libellé
  `Erreur`** — avec la relance en fenêtre haute, il tomberait à l'écran
  pendant que la reprise est censée être invisible.
- `public/fallback/chapitre.md` : ajout de `<!-- FIN AUDIO -->`.
- `.env.example` : `VITE_GEN_HOST` port 8420, `VITE_TTS_HOST` retiré.
- `public/fallback/chapitre.{md,wav}` : **à régénérer** — marqueur de
  bascule après la deuxième phrase, WAV de 2'30-3' depuis ce marqueur.
- **Coordination stack** (autre repo) : réglée — deux marqueurs garantis,
  `BASCULE` après la deuxième phrase, extrait à **2'45** (`AUDIO_SECONDES`,
  ≈ 522 mots au débit mesuré de 190 mots/min). Reste à leur confirmer que
  la reprise unique est **maintenue** (leur objection reposait sur un calcul
  erroné) et que le deck n'appellera pas `POST /cancel`.
- **Contrainte de planning héritée** : roleplay et génération partagent le
  même modèle, `POST /chat` rend `409` pendant toute la génération. La démo
  d'acteur en direct est donc impossible en section 6 — celle-ci reste un
  **rejeu**, et ce n'est plus révisable au gel du script.
- **Dépendances / réseau** : appels HTTP **réseau local uniquement** ;
  aucun cloud. Fallback = zéro réseau.
- **Exploitation** : la machine ne doit pas s'endormir (`caffeinate -is`)
  et n'accepte **qu'un run par démarrage** — la répétition E2E réelle est
  contrainte, d'où la vérification principale contre un stub HTTP local.
