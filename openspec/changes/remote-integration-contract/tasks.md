# Tasks — remote-integration-contract

> **✅ DÉBLOQUÉ le 2026-08-07 — contrat machine en rév. 5.** La machine
> expose `POST /generate`, `GET /chapter`, `GET /audio`, `GET /status`
> (+ `POST /cancel`, non appelé par le deck) sur `0.0.0.0:8420`, CORS
> configuré, plus le flux SSE `GET /events`. TTS branché, marqueurs garantis,
> extrait calé à 2'45. Plus aucune dépendance stack bloquante ; il reste
> l'asset de secours à régénérer et l'E2E du jour J.

## 0. Côté stack (autre repo)

- [x] 0.1 Exposer `POST /generate`, `GET /chapter`, `GET /audio`,
  `GET /status` + CORS ouvert à l'origine du deck
- [x] 0.2 Le pipeline pose **les deux** marqueurs — `<!-- BASCULE -->` après
  la deuxième phrase et `<!-- FIN AUDIO -->` — par le code. **Garantis
  présents** y compris dans les cas dégénérés (cinq cas sous test)
- [x] 0.3 Brancher le TTS : `GET /audio` rend le WAV (mono 24 kHz) de la
  portion `BASCULE → FIN AUDIO`
- [ ] 0.4 Leur répondre sur la rév. 4 : **la reprise unique est maintenue**
  (leur objection repose sur un calcul faux — relance au pire à
  talk-minute 16 + 19' = 35, soit 6 min avant la lecture) ; le deck
  **n'appellera pas** `POST /cancel` ; accusé de réception du calage 2'45 /
  `AUDIO_SECONDES=165` / débit 190 mots-min
- [ ] 0.5 **Régénérer l'asset de secours** pour qu'il colle à la mise en
  scène : `<!-- BASCULE -->` après la deuxième phrase, WAV de **2'45** rendu
  depuis ce marqueur. L'asset actuel (marqueur après UNE phrase, WAV 2 min
  20) ferait redire par la voix clonée une phrase déjà lue à voix haute —
  doublon audible, et le speaker ne peut pas savoir sur quel chemin il est
- [x] 0.6 `phase: idle` (avant lancement, après annulation) traité : ignoré
  côté deck, jamais recopié dans le store

## 1. Client réel

- [x] 1.1 `slides/lib/genClient.ts` — branche réelle (`VITE_MOCK=0`) :
  `generate`→POST, `chapter`→GET md, `audio`→GET wav, `status`→GET, avec
  timeout **3 s** et **2 retries** silencieux par appel
- [x] 1.2 Polling `/status` **toutes les 10 s**, démarré par `generate()`,
  arrêté sur `ready` / échec définitif / `reset()`. Un cycle raté n'est pas
  une défaillance : on continue à poller
- [x] 1.3 **Tester `res.status === 204` avant tout `res.ok`** — `ok` est
  vrai pour `204` et rendrait un chapitre vide au lieu d'un fallback
- [x] 1.4 Audio via `fetch` → vérification `200` → `createObjectURL(blob)`.
  **Jamais l'URL distante dans `<audio src>`** (un `204` y échoue
  silencieusement dans le navigateur, invisible du code). Révoquer le blob
  au `reset()`
- [x] 1.5 `.env.example` — `VITE_GEN_HOST` sur le port **8420**,
  `VITE_TTS_HOST` **retiré** (un seul host)

## 2. Relance unique en fenêtre haute

- [x] 2.1 `slides/lib/session.ts` — ajouter `duration` au store pour
  mesurer `elapsed = duration - remaining` (pas de `Date.now()` implicite)
- [x] 2.2 Sur `phase: error` : si `elapsed < 180 s` **et** reprise non
  consommée → un seul re-POST, silencieux. Sinon → fallback. Latch strict,
  jamais de boucle
- [x] 2.3 La relance appelle `genClient` directement — **pas** `start()`
  (latché sur `running`). `session.running` reste vrai, le compte à rebours
  n'est jamais réinitialisé
- [x] 2.4 `GenerationTrigger.vue` — **supprimer le libellé `Erreur`** : avec
  la fenêtre de relance il tomberait à l'écran pendant une reprise censée
  être invisible

## 3. Bornage par marqueurs

- [x] 3.1 `ChapterReader.vue` — découpe à **deux** marqueurs ; ne rendre que
  `début → FIN AUDIO`, le reste du chapitre n'entre pas dans la slide
- [x] 3.2 Scroll ancré sur l'`offsetTop` du premier paragraphe cloné, ratio
  déroulé sur la plage restante (la portion lue à voix haute est affichée
  mais hors audio)
- [x] 3.3 Marqueurs = critère de validité : chapitre distant sans les deux
  marqueurs → traité comme non prêt → fallback embarqué
- [x] 3.4 `public/fallback/chapitre.md` — ajouter `<!-- FIN AUDIO -->` en
  fin de fichier (l'asset a `<!-- BASCULE -->` ligne 3 ; son WAV de 2 min 20
  couvre déjà quasiment tout le texte)

## 4. Fallback silencieux

- [x] 4.1 Bascule invisible vers `public/fallback/chapitre.{md,wav}` à tout
  échec / non-prêt / marqueur manquant
- [x] 4.2 Escape hatch : raccourci discret force-fallback (opérateur)
- [x] 4.3 Garantir : jamais de blocage, jamais d'erreur affichée. Le champ
  `error` de `/status` va en console, jamais dans le DOM

## 5. Flux d'étapes en direct (SSE, rév. 5)

- [x] 5.1 `session.ts` — `step` et `notes` dans le store, `setStep()` et
  `pushNotes()` (raccord par recouvrement de fenêtre glissante), remise à zéro
  dans `start()` et `reset()`
- [x] 5.2 `genClient.ts` — `EventSource` sur `${VITE_GEN_HOST}/events`, possédé
  par le module (jamais par un composant : le compteur se démonte entre slides)
- [x] 5.3 Point d'entrée unique `applySnapshot(snapshot, source)` partagé par le
  sondage et le flux — une seule machine à états
- [x] 5.4 Le sondage `/status` reste la source d'autorité de l'état ; le flux
  n'apporte que vitesse + étape + récit
- [x] 5.5 Enrichissement alimenté par **une seule source à la fois** (`streamAlive`)
  — mêler les deux fenêtres de notes faisait repartir le récit en arrière
- [x] 5.6 Renoncement borné au flux : `closeStream()` après 5 échecs consécutifs
  sans événement
- [x] 5.7 Réouverture du flux après une relance (la machine ferme sur son
  événement terminal)
- [x] 5.8 `Countdown.vue` — ligne d'étape + récit des 4 dernières notes ;
  `global-bottom.vue` — étiquette seule dans la pilule
- [x] 5.9 Récit scripté en mode mock, pour que la répétition montre le même écran
- [x] 5.10 `.env.example` — URL du flux déduite de `VITE_GEN_HOST`, pas de
  variable dédiée ; `VITE_MOCK=0` documenté pour le live

## 6. Vérification

- [x] 6.1 Contre un **stub HTTP local** : chapitre + audio récupérés,
  affichés/lus, bornés aux marqueurs (chemin nominal)
- [x] 6.2 Stub rendant `204` sur `/chapter` puis `/audio` → pas de chapitre
  vide, pas d'`<audio>` muet : bascule silencieuse
- [x] 6.3 Stub rendant un chapitre **sans marqueurs** → fallback embarqué
- [x] 6.4 Stub émettant `phase: error` à **1 min** de décompte → une relance
  invisible, aucun libellé d'erreur, countdown intact, bouton non réactivé
- [x] 6.5 Stub émettant `phase: error` à **10 min** → fallback direct, sans
  relance
- [x] 6.6 Coupure réseau / stub éteint → bascule silencieuse, indistinguable
- [x] 6.7 Timeouts / `404` / CORS → fallback, aucun blocage ni erreur
- [x] 6.8 Défilement calé : l'audio démarre au marqueur de bascule, le texte
  ne court pas en avance
- [x] 6.9 Les deux modes ; invariant hors-ligne (fallback = 0 réseau)
- [x] 6.11 Flux nominal : étapes et récit défilent, ordre stable, pas de rejeu
- [x] 6.12 Flux coupé en pleine génération : 7 reconnexions automatiques,
  compteur intact, aucun message, récit non rebouclé
- [x] 6.13 Flux jamais disponible (`/events` en 404) : le sondage alimente les
  étapes à 10 s de granularité, aucune erreur affichée
- [x] 6.14 **API débranchée en pleine génération** : compteur jusqu'à zéro,
  étape figée sur sa dernière valeur, aucun message, bascule fixtures
- [x] 6.15 Surface réelle observée sur la machine (`/events` : en-têtes conformes,
  événement `idle` puis fermeture)
- [ ] 6.10 **E2E réel = jour J** *(hors atteinte ici — machine de scène)*.
  Contrainte
  machine : **un run par démarrage**, redémarrage entre deux essais complets,
  machine maintenue éveillée (`caffeinate -is`)
