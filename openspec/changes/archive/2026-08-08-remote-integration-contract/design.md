# Design — remote-integration-contract (APPLICABLE depuis 2026-08-07)

> Ce document décrivait un **contrat cible**. La machine expose désormais
> la surface : il décrit maintenant le **contrat réel** et les décisions
> d'implémentation qui vont avec. Source côté machine :
> `orchestrator/api.py` (bibliothèque standard, `ThreadingHTTPServer`),
> écoute `0.0.0.0:8420`.

## Contrat HTTP (base `VITE_GEN_HOST`)

Le `genClient` (contrat 4 opérations, jalon 3) mappe ainsi :

| Op client    | HTTP             | Prêt                            | Non prêt |
|--------------|------------------|---------------------------------|----------|
| `generate()` | `POST /generate` | `202` + JSON indicatif          | —        |
| `chapter()`  | `GET /chapter`   | `200 text/markdown; charset=utf-8` | `204` |
| `audio()`    | `GET /audio`     | `200 audio/wav`                 | `204`    |
| `status()`   | `GET /status`    | `200 application/json`          | —        |
| *(flux)*     | `GET /events`    | `200 text/event-stream`         | —        |

- `POST /generate` : fire-and-forget, réponse immédiate (le préflight
  machine de ~10 s tourne dans un thread). `202` **dans les deux cas** —
  démarrage réel ou génération déjà en cours. Le corps
  (`{accepted, started, state}`) est indicatif : le deck l'ignore.
- `GET /chapter` : Markdown, portant **deux marqueurs** (voir « Bornage »).
- `GET /audio` : WAV de la portion `BASCULE → FIN AUDIO`, voix clonée,
  lu depuis 0 (aucun timecode).
- `GET /status` : `{phase, ready}` + champs additifs ignorés par ce
  changement. `phase ∈ {idle, generating, tts, ready, error}`.
  **`idle` n'est pas recopié dans le store** : il survient avant lancement
  et après une annulation opérateur (`POST /cancel`), et l'appliquer
  remettrait l'affichage à « pas encore lancé » — bouton de lancement
  réactivé — en pleine scène. On l'ignore et on continue à sonder ; le filet
  de zéro fait le reste.
- `GET /events` (rév. 5) : flux SSE, **enrichissement pur**. Un `data: {json}`
  par seconde, le JSON étant le **snapshot `/status` complet**. Événements
  **absolus** (état entier, pas d'incrément) donc reconnexion triviale : pas de
  `Last-Event-ID`. La machine streame tant que l'état est `generating`/`tts`,
  émet un événement terminal (`ready`/`error`/`idle`) puis **ferme**.
  Vérifié sur la machine réelle : `HTTP/1.0`, `Connection: close`,
  `Cache-Control: no-store`, CORS `*` ; sur machine au repos, un unique
  événement `idle` puis fermeture.
- `POST /cancel` (rév. 4) : arrête un job en cours, effet à la frontière de
  nœud suivante (≤ 46 s mesurées), la machine repasse `idle`. **Le deck ne
  l'appelle pas** — sortie de secours d'opérateur.
- **CORS** : `Access-Control-Allow-Origin` (`*` par défaut),
  `Allow-Methods: GET, POST, OPTIONS`, `Allow-Headers: Content-Type`,
  `OPTIONS` → `204`. Toutes les réponses portent `Cache-Control: no-store`
  → **aucun cache-busting côté deck**.
- **Un seul host** : `/audio` sort de la machine de génération
  (« À trancher » #4 tranché). `VITE_TTS_HOST` est retiré du `.env`.
- **`VITE_GEN_HOST`** : IP fixe le jour J, port **8420**
  (« À trancher » #1 tranché ; mDNS écarté, fragile en salle).

### Écarts admis par rapport au contrat gelé

- **`phase: error` existe.** Le contrat listait `{generating, tts, ready}`.
  Admis sans changement de type : `GenStatus` (`slides/lib/session.ts`)
  le connaît déjà. Le savoir tôt permet de basculer sans attendre un
  timeout.
- **« Pas prêt » = `204`, jamais `404`.** Le contrat acceptait les deux ;
  on ne traite que `204`. Un `404` devient donc, correctement, une faute
  d'URL — repérable en répétition au lieu d'être avalée en silence.
- **Le champ `error` de `/status` ne s'affiche jamais.** Texte opérateur.
  À logguer en console, jamais dans le DOM.

## Pièges d'implémentation (à respecter à la lettre)

**1. `204` passe `response.ok`.** `ok` est vrai pour tout `2xx`. Un
`if (res.ok) text = await res.text()` rendrait une chaîne vide, donc un
chapitre vide affiché au lieu d'un fallback. Ordre obligatoire : tester
`res.status === 204` → « pas prêt », **avant** tout `res.ok`.

**2. L'audio ne peut pas être une URL distante dans `<audio src>`.** Si
`/audio` rend `204`, l'élément échoue **dans le navigateur**, sans qu'aucun
code du deck le voie : pas de son, pas de bascule. Obligation : `fetch` →
vérifier `200` → `URL.createObjectURL(blob)` → poser le blob dans
`session.chapter.audioUrl`. Bénéfice : l'audio est en mémoire avant la
section 7, plus d'aléa réseau pendant la lecture. Révoquer le blob au
`reset()` de session.

**3. Le libellé `Erreur` du trigger est sur le chemin critique.**
`GenerationTrigger.vue` mappe `error: 'Erreur'`. La fenêtre de relance
(moins de 3 min de décompte) place l'opérateur **sur ou juste après la
slide de lancement** : le libellé s'afficherait pendant une reprise censée
être invisible. À supprimer (chaîne vide) — la spec interdit toute UI
d'erreur.

**4. Ancrage du défilement : `offsetTop`, jamais `getBoundingClientRect`.**
La slide est mise à l'échelle par un transform CSS. Les rects sortent donc en
pixels écran alors que `scrollTop` est en pixels de layout : la formule
`rect.top - conteneur.top + scrollTop` n'est PAS invariante au défilement et
l'ancre dérive (mesurée à 1095 en haut de texte, 709 après défilement — même
bloc). `offsetTop` est en pixels de layout ; il suffit de rendre le conteneur
`position: relative` pour qu'il serve de référent. Même famille de piège que
« les `vh` se résolvent sur la fenêtre réelle, pas sur le canvas mis à
l'échelle ».

**5. `onMounted` ne marque pas l'entrée en section 7.** Slidev monte toutes
les slides au chargement du deck : un `onMounted` sur le lecteur tire au
démarrage, bien avant qu'un repli ait pu être armé. La matérialisation du repli
à l'arrivée sur la slide doit passer par `onSlideEnter`.

**6. `session.running` ne redescend jamais en cours de talk.** Le trigger
porte `:disabled="session.running"` et retombe sur « Lancer la
génération » si `running` passe à `false` : un `error` qui libère le latch
ferait **réapparaître le bouton d'amorçage en pleine section 4**. Donc la
relance ne passe pas par `start()` (latché sur `running`) : elle appelle
`genClient` directement, `running` reste vrai du lancement à la fin, et le
compte à rebours n'est jamais remis à zéro.

## Le flux d'étapes : architecture

Le contrat impose que le flux soit un **enrichissement**. Ça se traduit par un
choix d'architecture, pas par une intention : **le sondage `/status` reste la
colonne vertébrale de l'état** (détection d'échec, règle de reprise, arrivée du
chapitre). Le flux apporte la même information plus vite, plus l'étape et le
récit. Faire porter la machine à états par le flux aurait rendu la règle de
reprise — donc le seul mécanisme de rattrapage du talk — dépendante de la santé
d'une connexion longue.

**Point d'entrée unique** : `applySnapshot(snapshot, source)`. Sondage et flux
portent le même snapshot absolu, donc une seule machine à états ; aucune
divergence possible entre « ce que dit le poll » et « ce que dit le flux ».

**L'EventSource vit dans le module `genClient`, jamais dans un composant.** Le
compteur se démonte à chaque changement de slide : un flux qu'il posséderait
mourrait à la première avance de la section 4.

### Une seule source pour l'enrichissement à la fois

Le flux quand il vit, le sondage seulement à défaut. Les deux sources portent
des fenêtres de notes prises à des instants différents ; les mêler brouille
l'ordre du récit — **observé en test** : une réponse de sondage réinjectait une
fenêtre plus ancienne entre deux événements du flux, et le récit repartait en
arrière à l'écran. L'état, lui, reste accepté des deux sources.

Corollaire utile : quand le flux est absent, le sondage alimente quand même
l'étape et le récit, à 10 s de granularité au lieu d'une seconde. Le cran
« flux jamais connecté » garde donc des étapes à l'écran.

### « Le flux vit » ≠ « un objet EventSource existe »

Piège rencontré : avec `/events` absent, l'objet `EventSource` reste bien
vivant et retente indéfiniment sans jamais rien livrer. Un garde écrit sur
l'existence de l'objet empêchait donc le sondage de reprendre la main, et
l'écran restait sans étapes. Le garde porte sur un drapeau `streamAlive`, posé
à chaque message reçu et retiré à chaque erreur.

Au-delà de **5 échecs consécutifs sans le moindre événement**, on ferme
définitivement : `EventSource` retenterait sinon toutes les ~3 s pendant les
28 minutes du talk. (En pratique Chrome ne retente pas du tout après un `404`,
qu'il traite en échec fatal — le plafond sert aux coupures transitoires, où les
reconnexions ont bien lieu.)

### Accumulation du récit

La machine n'envoie que les **5 dernières** notes : c'est le deck qui construit
l'histoire. Le raccord se fait par **recouvrement de fenêtre glissante** (deux
fenêtres consécutives partagent 4 éléments sur 5), ce qui préserve les
répétitions légitimes — « PLAN REFUSÉ » deux fois de suite est une information,
pas un doublon, et un dédoublonnage par ensemble l'effacerait.

Sans recouvrement, deux causes indistinguables à partir de chaînes seules : on a
perdu plus de cinq notes, ou la fenêtre est un rejeu (reconnexion repartie de
zéro, machine redémarrée, réponse de sondage en retard). On tranche par le
risque : n'ajouter que ce qui n'est nulle part dans l'historique. On perd au
pire une répétition légitime après un trou de cinq notes ; on évite un récit qui
se reboucle visiblement, ce que la salle lirait comme un bug.

### Ce que le flux met à l'écran

- **Compteur plein écran** (slide de lancement, slide de zéro) : étape,
  sous-étape, et les 4 dernières notes, la plus récente en pleine encre.
- **Pilule de coin** (sections 4 à 6) : l'**étiquette seule**. C'est
  l'argumentation qui se déroule à ce moment-là ; un récit défilant dans le coin
  y ferait concurrence au propos.
- **Rien du tout** si la machine n'a rien annoncé. L'absence d'étape est un état
  normal — pré-lancement, flux jamais connecté, repli embarqué — pas une
  anomalie à signaler.

### Le mode mock émet un récit scripté

Sinon la répétition hors ligne ne montrerait jamais d'étapes, et ni le rendu du
feed ni sa lisibilité en projection ne seraient répétables. Vocabulaire repris
de celui que la machine émet réellement, « PLAN REFUSÉ » compris.

## Timeouts, polling, retries

- **Timeout : 3 s par appel.** `/status` et `/chapter` lisent un fichier
  ou un dict, jamais le modèle — ils répondent en millisecondes. 3 s est
  large.
- **Retries : 2 tentatives supplémentaires** (3 au total), ~1 s d'écart,
  silencieuses.
- **Polling `/status` : toutes les 10 s**, démarré par `generate()`,
  arrêté sur `ready` / `error` définitif / `reset()`.
- **Un cycle de polling raté n'est pas une défaillance.** Un trou réseau
  en milieu de talk ne doit pas déclencher le fallback : on continue à
  poller. Seuls déclenchent la bascule (a) `phase: error` hors fenêtre de
  relance ou après reprise, (b) une ressource non prête / invalide **au
  moment de la lecture** en section 7, (c) l'escape hatch opérateur.

## Relance après échec (décision speaker)

Règle : **`phase: error` à moins de 180 s de décompte écoulé → un seul
re-POST, silencieux. Sinon, ou si la reprise a déjà été consommée →
fallback.** Jamais de boucle (contrainte explicite de la machine).

```
  POST /generate ──▶ generating ──▶ ready ──▶ section 7 : chapitre distant
                          │
                          ▼ error
                 écoulé < 180 s  ET  reprise non consommée ?
                 ├── oui ──▶ re-POST (invisible) ──┐
                 │                                  │
                 └── non ──▶ marque fallback ──────┴──▶ error ──▶ fallback
```

Arithmétique du seuil :

```
  budget countdown      28′
  génération réelle     17′    (1022 s mesuré, machine au repos, 4 scènes)
  rendu voix clonée    ~1′50   (2′45 d'audio à 1,57× PLUS VITE que le réel)
  ─────────────────────────
  cycle complet        ~19′

  échec à 3′ → relance → 22′   marge 6′   ✅  seuil retenu
  échec à 6′ → relance → 25′   marge 3′   limite haute
  échec à 8′ → relance → 27′   marge 1′   ❌

Le seuil reste à 3′ alors que la marge autoriserait un peu plus : il est
calé sur le cas récupérable (échec de préflight, ~10 s après le lancement),
pas sur le budget résiduel. Élargir la fenêtre ne rattraperait que des
échecs de nature différente, que la relance ne répare pas.
```

Pourquoi la fenêtre sélectionne le cas récupérable : le préflight machine
dure ~10 s et tourne au tout début. Un échec sous 3 min est donc presque
toujours un échec de préflight — machine encore vierge, aucun modèle
chargé, reprise plausible. Un échec tardif (typiquement mémoire, pendant
l'écriture) tombe sur la contrainte machine « un run par démarrage » : le
préflight refusera la reprise. Coût d'une reprise refusée : ~10 s, puis
`error` à nouveau, puis fallback. Borné et invisible.

### La relance est maintenue — l'objection de la rév. 4 ne tient pas

La machine demande si l'on préfère supprimer la reprise tardive, au motif
qu'« à moins de trois minutes du décompte, la relance repart pour dix-sept
minutes de génération, soit bien après la fin du talk ». **Le calcul est
faux**, avec leurs propres chiffres :

```
  lancement (section 3)              ≈ talk-minute 13
  fenêtre de relance                 jusqu'à talk-minute 16 (3′ de décompte)
  relance au pire moment  16 + 19′ = talk-minute 35
  section 7 (zéro du décompte)       ≈ talk-minute 41
                                     → prêt 6 minutes AVANT la lecture
```

La reprise tardive tient donc dans le budget, y compris déclenchée à la
dernière seconde de sa fenêtre. Ce qui est vrai en revanche : elle allonge
d'environ 3 minutes la fenêtre pendant laquelle `POST /chat` répond `409`
(fin de génération repoussée de ~32 à ~35). Comme la démo d'acteur ne se
joue qu'après la récolte (minute 41+), l'allongement ne mord sur rien.

`POST /cancel` reste utile comme sortie d'opérateur si la machine dérive un
jour donné. Le deck ne l'appelle pas : ce serait un appel sortant modifiant
l'état d'une autre machine au moment le plus sensible du talk, pour un gain
qui n'existe que dans le cas rare « génération encore en cours à zéro ».

### Contrainte de planning : mode acteur et génération s'excluent

Hors contrat mais structurant : la page de roleplay (`http://MACHINE:8420/`)
et la génération **partagent le même modèle de 13 GB**, et la machine n'en
tient qu'un. `POST /chat` rend `409` tant qu'un chapitre se génère. Ce n'est
pas une limite logicielle levable (les deux modèles demanderaient 17,8 GB
sur 19,3).

Conséquence : **la démo d'acteur en direct ne peut se jouer qu'avant le
lancement (section 3) ou après la récolte (section 7)**, jamais entre les
deux — or la section 6 (« mode personnage ») tombe précisément dans
l'intervalle.

Le talk n'est pas menacé : la section 6 est un **rejeu** d'une session
authentique, choix de principe déjà acté dans son script (« Live ou rejeu :
rejeu, et c'est un choix de principe »). Aucun appel `/chat` pendant le
talk, donc aucun `409`.

Ce qui change : ce script gardait une porte ouverte — « si le mode acteur
s'avère assez rapide et fiable, on pourra rebasculer en direct au gel du
script ». **Cette porte est fermée** pour la section 6, définitivement et
pour une raison matérielle, pas de fiabilité. Le rejeu n'est plus un repli
prudent, c'est la seule option.

Mesure de l'écoulé : `elapsed = session.duration - session.remaining`.
`duration` est **ajouté au store** (`session.ts`) — préférable à
`Date.now() - startedAt` : monotone avec le ticker, pas d'horloge
implicite. En répétition accélérée (`VITE_COUNTDOWN_MINUTES=2`) la fenêtre
couvre tout le décompte et la règle dégénère en « une reprise toujours » :
sans conséquence, c'est le comportement qu'on veut tester.

## Bornage par marqueurs et calage du scroll (décision speaker)

`/chapter` porte **deux** marqueurs, posés **par le code** du pipeline
(jamais par le modèle — un marqueur placé par un LLM serait aléatoire) :

| Marqueur           | Rôle                                              |
|--------------------|---------------------------------------------------|
| `<!-- BASCULE -->` | relais : avant = lu par le speaker, après = clone |
| `<!-- FIN AUDIO -->` | fin de la portion rendue en audio               |

La section 7 ne rend que `début → FIN AUDIO`. Le reste du chapitre
**n'entre pas dans la slide** : hors périmètre de la présentation.

```
  ┌─ scroller ──────────────────┐
  │ avant-bascule (toi, muted)  │ ← affiché, hors audio : offset constant
  ├─ BASCULE ───────────────────┤ ← audio t=0 est ICI
  │ bascule→fin (clone, encre)  │ ← audio 0..1 mappe sur CETTE plage
  ├─ FIN AUDIO ─────────────────┤
  │ (reste du chapitre)         │ ← jamais rendu
  └─────────────────────────────┘
```

Effet voulu : la hauteur défilable s'aligne sur le périmètre sonore, ce
qui supprime le désynchro majeur (chapitre entier affiché contre extrait
audio — un ordre de grandeur d'écart).

**Reste un décalage constant.** Le bloc affiché contient la portion lue à
voix haute, absente de l'audio. Un mapping naïf `ratio 0..1` sur toute la
hauteur du conteneur placerait `t=0` en haut d'un texte déjà dit. Mapping
correct : ancrer sur l'`offsetTop` du premier paragraphe cloné, puis
dérouler le ratio sur la plage restante. Si le bloc affiché ne déborde
pas, la plage est nulle et il n'y a rien à faire.

**Marqueurs = critère de validité, pas détail de rendu.** Un chapitre
distant qui ne porte pas **les deux** marqueurs est traité comme **non
prêt** → fallback embarqué, silencieux. Sans cette règle on retombe sur
l'incohérence : chapitre entier en gris « c'est moi qui parle » pendant que
la voix clonée parle.

Cette règle a eu un effet utile en amont : elle a fait durcir le code de la
machine, qui ne posait `FIN AUDIO` que si la borne d'extrait était
calculable — un chapitre court aurait donc fait disparaître le chapitre live
**en silence**, notre repli masquant leur cas limite. Les deux marqueurs
sont désormais **garantis présents** (repli en fin de texte, cinq cas
dégénérés couverts par un test côté machine).

## Protocole de fallback silencieux

- **Cible** : `public/fallback/chapitre.{md,wav}` (jalon 3B). État vérifié :
  463 mots, `<!-- BASCULE -->` en ligne 3, WAV de 2 min 20.
  `<!-- FIN AUDIO -->` a été ajouté en fin de fichier.
- **⚠ L'asset de secours n'est plus conforme à la mise en scène.** Son
  marqueur de bascule tombe après **une** phrase, alors que le speaker lit
  désormais **deux** phrases à voix haute. Le speaker ne peut pas savoir sur
  quel chemin il se trouve — c'est exactement l'objet du non-négociable #2 —
  donc sur le chemin de repli il lirait à voix haute une phrase que la voix
  clonée redit ensuite. **Doublon audible, en pleine scène.**
  La position du marqueur dans l'asset embarqué n'est donc pas un détail
  éditorial : elle **doit** correspondre au geste de scène. À régénérer :
  marqueur après la deuxième phrase, WAV de 2'30-3' rendu depuis ce
  marqueur (le WAV actuel fait 2 min 20 et démarre une phrase trop tôt).
- **Déclencheurs** : timeout après retries, erreur HTTP, CORS, réseau
  coupé, `204` au moment de la lecture, marqueur manquant, `phase: error`
  hors fenêtre de relance, escape hatch.
- **Invisibilité** (non-négociable #2) : aucune UI d'erreur, aucun
  indicateur de mode. « Un WAV en remplace un autre, rien d'autre ne
  change ».
- **Escape hatch** : raccourci clavier discret forçant le fallback —
  contrôle opérateur, exception assumée à la règle « pas de clavier »
  (celle-ci vise les actions scéniques ; ici c'est un filet technique).
- **`/audio` est branché depuis la rév. 2** (WAV mono 24 kHz) : le chemin
  distant est complet, texte et audio. Le repli n'est plus le chemin nominal
  de l'audio — il redevient ce qu'il doit être, un filet.

## Timing (contrainte dure)

Le WAV est pré-rendu pendant la queue du compte à rebours, pas synthétisé
en section 7 — le deck ne fait que **récupérer** un fichier prêt.

La machine borne la lecture clonée : le chapitre entier ferait 12,6 min
d'écoute, injouable dans une keynote de cinquante minutes. La borne proposée
initialement par la machine était 3-4 min (450-600 mots).

**Borne retenue : 2'30 à 3 minutes. Calée à 2'45 côté machine
(`AUDIO_SECONDES=165`).** La borne se règle **en secondes, pas en mots** :
c'est une durée qu'on demande, et l'unité du besoin ne se traduit pas de
travers. Correctif de la rév. 4 : mes « 375-450 mots » supposaient
~150 mots/min ; le clone mesuré parle à **190**, donc 450 mots n'auraient
fait que 2'22 — sous le plancher, et un trou puisque l'extrait est joué en
entier. La conversion se fait côté machine : 165 s × 190 = **≈ 522 mots**.
Ce débit vient d'un échantillon de 117 mots ; si le premier run complet
s'écarte de plus de 20 s de la cible, la machine émet une note dans
`/status` avec le débit réel — l'erreur se signale au lieu de se découvrir
sur scène.

Le déroulé de scène qui va avec :

- le speaker ne lit à voix haute que **les deux premières phrases** ; le
  marqueur `BASCULE` tombe donc **après la deuxième phrase**, pas après un
  ou deux paragraphes ;
- **l'extrait cloné est joué en entier**. La coupe par avance de slide
  (`onSlideLeave` → `pause()` + `currentTime = 0`) reste en place comme
  **filet** si le temps manque, elle n'est plus le déroulé prévu.

Conséquences de dimensionnement :

- la portion parlée devenant minuscule, l'ancre de défilement est presque
  en haut du conteneur — le code n'y change rien, mais le calage se voit
  moins ; c'est le cas dégradé le plus facile, pas le plus dur ;
- côté machine, le TTS descend à ~3 min de calcul (au lieu de 3-4), donc
  cycle complet ~20 min contre 28 au compteur : la marge s'améliore ;
- l'asset de secours n'est plus aligné (voir ci-dessous).

## Décisions gelées (rappel)

- Intégration **hybride** : `GET /chapter` + `GET /audio` requis,
  `GET /status` consommé pour la détection d'état (pas pour l'affichage).
- Lancement : le deck **envoie `POST /generate`** (fire-and-forget).
- Contrat client inchangé (les 4 ops existent) → on écrit la branche
  réelle, le fallback, la relance et le bornage ; les composants ne
  changent que sur les trois points listés en Impact.

## Ce qui reste hors périmètre du flux

`progress` (fraction monotone) n'est **pas** affiché. Le compte à rebours tient
déjà le rôle visuel « où en est-on » ; une seconde jauge à côté de lui
entrerait en concurrence avec elle et diluerait le seul chiffre que la salle
doit lire. La progression reste disponible dans le snapshot si un jalon
ultérieur en trouve un usage.

**Contrainte de scène, à ne pas perdre** : sur le chemin de repli, la machine
étant injoignable, il n'y a **ni étape ni récit** à l'écran. Le speaker ne peut
donc pas savoir à l'avance s'il aura quelque chose à montrer. Aucune réplique
scriptée NE DOIT pointer les notes (« regardez, la machine vient de refuser son
plan ») : ce serait la seule phrase du talk capable de révéler la bascule. Si
l'effet mérite d'être commenté, il se commente en improvisation, comme le
« pas même moi » de la section 7.

## Points ouverts

- Nom du second marqueur à confirmer côté stack : **`<!-- FIN AUDIO -->`**,
  même forme que `<!-- BASCULE -->`, posé à la borne d'extrait qu'ils
  calculent déjà (coût nul, c'est le même calcul).
- Exploitation : machine maintenue éveillée (`caffeinate -is`) ; en cas
  d'Ollama réveillé mais incapable de charger un modèle,
  `launchctl kickstart -k gui/$(id -u)/local.ollama`. Leur préflight
  détecte le cas en générant réellement un token.
- **Un run par démarrage machine** : la répétition E2E réelle est
  contrainte (redémarrage entre deux essais complets). D'où une
  vérification principale contre un stub HTTP local, l'E2E réel restant
  un jalon du jour J.
