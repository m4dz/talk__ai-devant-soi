# CLAUDE.md — Deck Slidev « L'IA devant soi »

Support visuel de la keynote de clôture (50 min). Ce fichier capture les
décisions prises en amont ; il est la référence pour l'implémentation.
Langue du contenu et des commentaires : français.

## Contexte

La keynote raconte la construction d'un assistant d'écriture de fiction
100 % local (Ollama + Mistral-small, ChromaDB, LangGraph, OpenWebUI,
podman-compose sur Apple Silicon). Thèse : l'incohérence de la position de
l'Académie Goncourt face aux œuvres assistées par IA, avec l'affaire
Gary/Ajar comme colonne vertébrale narrative.

Élément dramaturgique central : une **génération de chapitre en direct**
est lancée depuis une slide en début de talk, tourne pendant ~35 minutes
sur une machine distante, et le chapitre est **lu à voix haute** (voix
clonée du speaker) sur une slide dédiée en fin de présentation.

## Contraintes non négociables

1. **Tout tourne en local** — aucun appel cloud, ni pour la génération,
   ni pour le TTS, ni pour les assets. C'est la thèse du talk.
2. **La démo doit être indistinguable de son fallback.** Un chapitre
   pré-généré (texte + audio) est embarqué dans le deck. Si la génération
   live échoue, la bascule est silencieuse et invisible.
3. **Le deck doit fonctionner hors ligne** une fois buildé, hormis les
   appels réseau local vers la machine de génération.
4. **Design sobre** : le speaker préfère un visuel épuré, la typo porte
   le propos. Pas de slide surchargée.

## Trame

8 sections, structure « descente par strates ». **Les scripts de la
keynote sont la source de vérité du contenu** : ils sont versionnés dans
[`docs/scripts/`](docs/scripts/) (un fichier par section, texte mot à mot
+ indications scéniques + notes de préparation). En cas d'écart entre une
slide et le script, le script gagne. Le deck suit :

1. **Cold open** — l'affaire Gary/Ajar racontée en thriller noir, in
   medias res, 7 beats. Pas de slide de titre : le titre tombe au beat 7,
   sur le pivot vers l'IA.
2. **Le pivot** — propos sourcés (Assouline / Télérama), clause
   d'originalité des éditeurs, la question centrale du talk, signature.
3. **L'allumage** — le roman, le lancement de la génération, le contrat du
   compte à rebours.
4. **Jeu du seuil** — interaction mains levées, 6 stations par
   intervention humaine décroissante : Dumas/Maquet, Carver/Lish,
   Vian/Vernon Sullivan, Ern Malley, Oulipo (livre physique apporté sur
   scène), Racter — puis le **renversement** (« il n'existe pas de
   seuil ») et le pont vers la fabrique.
5. **La descente dans la fabrique** (~14 min) — 4 strates, chacune sur le
   battement *ce qu'on a tenté → le mur → ce que le mur a forcé à
   construire* : le lore (→ bibliothèque indexée), l'intention (→ atelier
   orchestré, plan de scènes), la qualité (→ fiche de style + correcteur),
   la puissance (→ le crash, et l'architecture plutôt que le muscle).
   Puis la remontée : « la fabrique reste à notre main ».
6. **Le mode personnage** — l'acteur : on ne demande plus à la machine
   d'écrire *sur* le personnage mais de le *devenir*. Entretien rejoué,
   émergence (un élément né d'un entretien, entré au roman), retournement
   sur la question de Le Tellier.
7. **La récolte** — le compte à rebours atteint zéro, le chapitre naît,
   lecture à voix haute qui bascule vers la voix clonée.
8. **La chute** — dernier vote à main levée, verdict, sortie sur « Je me
   suis bien amusé. Au revoir et merci. » (derniers mots écrits de Gary).

Le **compte à rebours** est de **28 minutes, gravé** : lancé en section 3
(~minute 13), il atteint zéro au début de la section 7 (~minute 41). Il
reste visible (en grand au lancement, puis en rappel discret) des sections
3 à 7.

## Stack du deck

- **Slidev** (dernière version stable), thème custom local — pas de thème
  npm tiers comme base, on construit un design system dédié.
- Composants Vue custom pour les éléments interactifs (voir plus bas).
- Export PDF pour le document de support distribué après le talk.

## Design system

**Direction : style pulp / couverture de polar d'époque**, en cohérence
avec le cold open Gary/Ajar raconté en thriller noir. Mix typographique
+ illustrations générées : les slides « argument » restent typographiques
et minimales (le pulp s'exprime par la typo, la palette et la texture,
pas par la surcharge) ; les slides « récit » (Gary/Ajar, cas historiques)
peuvent porter une illustration façon couverture pulp.

- **Palette** : dark = noir d'encre, blanc cassé « papier », accent rouge
  sang (à valider sur projecteur) ; light = papier jauni / crème, encre
  noire, même accent rouge. Texture tramée (halftone) et grain papier
  possibles en éléments de fond, avec parcimonie.
- **Typographie de titrage : Sinzano** (Typodermic, Ray Larabie) — la
  Regular, serif élancée aux ligatures imbriquées, pour titres et
  citations en exergue. **Attention licence : fonte commerciale**, achat
  desktop + webfont requis pour l'auto-hébergement (famille ~110 $ ; ne
  jamais utiliser une version « free download » non licenciée). L'achat
  et la licence sont tracés dans `CREDITS.md`. Plan B si l'achat est
  écarté : proposer 2-3 alternatives rétro/pulp en SIL OFL au premier
  jalon.
- **Corps de texte** : une sans-serif sobre et très lisible en
  projection (licence libre, auto-hébergée), qui laisse Sinzano porter
  seule l'identité pulp. Ne jamais composer de paragraphe en Sinzano.
- Toutes les polices sont auto-hébergées dans `public/fonts/`
  (contrainte hors-ligne).
- **Tokens** : définir en CSS custom properties (couleurs, espacements,
  tailles) dans le thème, jamais en dur dans les slides.
- **Dark/light : toggle live pendant la présentation.** Les deux modes
  sont des citoyens de première classe (le toggle peut servir de moment
  scénique). Implémenter via les deux jeux de tokens + le mécanisme de
  color schema de Slidev, raccourci clavier dédié. Tester chaque slide
  dans les deux modes.

## Illustrations

> **Référence de génération** : le prompt de style figé, les 5 motifs, les
> règles négatives, les stratégies d'intégration (objet crème / inversion
> sérigraphique) et le nommage sont documentés dans
> [`docs/visuels-pulp.md`](docs/visuels-pulp.md). Principe : **on ne génère
> qu'en crème** (source canonique) ; les modes sont des dérivations.
> Composant : `slides/components/PulpFigure.vue`. Outil :
> `tools/inverser_mode.py`.

**Sources : mix, au cas par cas.**

- **Générées en local** (cohérent avec la thèse — et ça peut se dire sur
  scène) : illustrations d'ambiance et portraits stylisés des cas
  historiques, dans une **esthétique de couverture pulp** homogène
  (aplats, trame, palette du design system). Établir un prompt de style
  commun et le documenter dans le repo pour garantir la cohérence entre
  assets. Modèle de génération d'images local à choisir (voir
  « À trancher »).
- **Libres de droits / domaine public** : documents d'archive quand ils
  existent (couvertures d'époque, coupures de presse). Vérifier les
  droits au cas par cas, notamment pour les photos de Gary et de
  Pavlowitch : en cas de doute, basculer sur une version générée/stylisée.
- Tous les assets sont stockés dans le repo (`public/`), avec un fichier
  `CREDITS.md` traçant la source et la licence de chaque asset.

## Intégration démo live

La génération tourne sur une **autre machine du même réseau local** (la
machine qui héberge Ollama, ChromaDB, LangGraph et OpenWebUI). Le deck
communique avec elle en HTTP depuis le navigateur qui affiche Slidev.

Composants à développer :

- **`<GenerationTrigger>`** (section 3) : bouton scénique qui déclenche
  la génération du chapitre. Feedback visuel immédiat (la salle doit
  *voir* que ça part). Idempotent : un double-clic ne relance pas.
- **`<Countdown>`** : compte à rebours ~35 min, affiché en grand sur la
  slide de lancement puis rappelable en discret (coin de slide ou layer)
  sur les sections suivantes. Autonome côté deck (ne dépend pas du
  réseau pour avancer), enrichi par le statut réel quand il est
  disponible.
- **`<ChapterReader>`** (section 7) : affiche le texte du chapitre
  récupéré, pilote la lecture audio (voir TTS), avec défilement suivant
  la lecture.

Principes d'implémentation :

- URL de la machine distante en **variable d'environnement**
  (`VITE_GEN_HOST`), jamais en dur. Prévoir un mode `mock` pour répéter
  sans la machine distante.
- **CORS** : l'API distante devra autoriser l'origine du deck — à
  configurer côté serveur de génération (noter dans le repo de la stack).
- **Fallback silencieux** : si le trigger échoue ou si le statut ne
  répond plus, le deck bascule sur le chapitre pré-généré embarqué
  (`public/fallback/chapitre.md` + `public/fallback/chapitre.mp3`) sans
  aucun signal visible. Le composant expose un raccourci clavier discret
  pour forcer le fallback manuellement.
- Timeout courts et retries silencieux sur tous les appels réseau : le
  deck ne doit jamais bloquer ni afficher une erreur en plein talk.

## Slide TTS (section 7)

- **Modèle : Qwen3-TTS** (open source, Apache 2.0, tourne en local via
  le package `qwen-tts` ou vLLM ; variantes 0.6B / 1.7B ; clonage de
  voix à partir d'un court échantillon). Il remplace XTTS-v2 / F5-TTS
  envisagés initialement.
- La voix clonée du speaker est préparée **en amont** (l'échantillon et
  le profil de voix ne se calculent pas en live).
- **La synthèse du chapitre live est lancée dès la fin de génération du
  texte**, pas au moment de la slide 7 : la 1.7B est lente sur la
  narration longue, on ne fait pas attendre la salle. Le deck récupère
  un fichier audio prêt (ou un flux) au moment de la lecture.
- Mise en scène : le speaker lit le début à voix haute, l'audio cloné
  prend le relais. Le composant doit permettre un départ de l'audio à un
  timecode/paragraphe précis, déclenché par raccourci clavier.
- Fallback : audio pré-généré du chapitre de secours, même voix clonée,
  embarqué dans le deck.

## Structure du repo

Slidev prend `slides/` comme racine projet : composants et layers
persistants s'auto-importent depuis `slides/`, pas depuis la racine du
repo. `theme/` et `public/` restent à la racine, rattachés via
`theme: ../theme` et `publicDir: ../public` (cf. archive
`bootstrap-deck-skeleton`).

```
slides/
  slides.md               # headmatter global + imports src des sections
  pages/                  # sections 1-8 en fichiers séparés
  components/             # GenerationTrigger, Countdown, ChapterReader
  lib/                    # session.ts (store), genClient.ts (mock/réel)
  global-bottom.vue       # layer persistant : countdown discret 3→6
  vite.config.ts          # publicDir → ../public
theme/                    # design system : tokens, layouts, styles
public/
  images/                 # illustrations pulp générées (voir CREDITS.md)
  fallback/               # chapitre.md + chapitre.wav pré-générés
  fonts/                  # polices auto-hébergées
docs/
  scripts/                # SCRIPTS DE LA KEYNOTE = source de vérité du contenu
  visuels-pulp.md         # prompt de style figé + workflow des illustrations
tools/
  inverser_mode.py        # dérivations dark des visuels (inversion / calage noir)
CREDITS.md                # source et licence de chaque asset
.env.example              # VITE_GEN_HOST, VITE_TTS_HOST, VITE_MOCK, VITE_COUNTDOWN_MINUTES
openspec/                 # géré par OpenSpec (voir workflow ci-dessous)
CLAUDE.md                 # ce fichier
```

## Workflow de développement : OpenSpec

Les phases de dev sont gérées avec **OpenSpec** (`@fission-ai/openspec`,
npm — cohérent avec la toolchain node du deck). Spec Kit a été évalué et
écarté : sa cérémonie constitution-first fait doublon avec ce fichier,
qui joue déjà le rôle de constitution du projet.

Règles :

1. **Ce CLAUDE.md est le document d'intention.** Aucun delta spec ne le
   contredit sans mise à jour explicite et simultanée de ce fichier. En
   cas de divergence constatée, on s'arrête et on arbitre avec le
   speaker avant de coder.
2. **Un changement OpenSpec par jalon** (ou sous-jalon si un jalon se
   révèle trop gros — typiquement le jalon 3, un changement par
   composant live est acceptable). Proposal courte, tasks, delta specs :
   pas de sur-spécification, le contexte est ici.
3. **Archivage obligatoire** d'un changement avant d'en ouvrir un autre
   sur le même périmètre. C'est LA discipline qui garde `openspec/`
   fiable — projet solo à deadline, un répertoire de specs obsolète est
   pire que pas de specs.
4. Les micro-ajustements post-répétition (timing, contrastes, wording de
   slide) passent aussi par une proposal, même minuscule : c'est
   précisément sur les petits changements à périmètre flou que le cadre
   rapporte le plus.
5. Les questions de la section « À trancher » se résolvent dans la
   proposal du changement concerné, puis la réponse est reportée ici
   (la section se vide au fil du projet).

## À trancher avant / pendant l'implémentation

Questions à poser au speaker au démarrage — ne pas improviser :

1. **Adresse de la machine distante** : IP fixe ou hostname mDNS
   (`.local`) ? Recommandation : IP fixe le jour J (le mDNS est fragile
   sur les réseaux de salles de conf), configurable via `.env`.
2. **API de déclenchement** : OpenWebUI expose-t-il le pipeline, ou
   attaque-t-on l'orchestrateur LangGraph via une petite API dédiée ?
   Recommandation : une API HTTP minimale devant LangGraph
   (`POST /generate`, `GET /status`, `GET /chapter`, `GET /audio`),
   découplée d'OpenWebUI qui reste l'interface d'atelier — le deck n'a
   besoin que de 4 endpoints stables.
3. **Suivi de progression** : polling de `GET /status` (simple, robuste)
   ou SSE (plus fin) ? Recommandation : polling toutes les 10-15 s, le
   compte à rebours restant autonome côté deck.
4. **Où tourne Qwen3-TTS** : sur la machine de génération (recommandé :
   GPU déjà là, le deck ne fait que récupérer l'audio) ou sur la machine
   de présentation ?
5. ~~**Modèle de génération d'images local**~~ — **TRANCHÉ** :
   **FLUX.2 Klein 4B** (Black Forest Labs, Apache 2.0) via **mflux**
   (MLX, Apple Silicon), quantifié 4 bits. FLUX.1 schnell écarté (bug de
   résolution du vae). Prompt de style figé, motifs et workflow dans
   [`docs/visuels-pulp.md`](docs/visuels-pulp.md) ; assets tracés dans
   `CREDITS.md`. **Attention** : un seed ne reproduit un tirage qu'à
   résolution identique — générer les seeds de sélection directement à la
   résolution finale.
6. ~~**Citation officielle de l'Académie Goncourt**~~ — **TRANCHÉ** : il
   n'en existe aucune. L'Académie n'a rien annoncé, rien interdit sur
   l'IA. La pièce à conviction est un **dossier de sources** (Télérama
   n°3981, 29/04/2026) : les propos de **Pierre Assouline** (juré depuis
   2012 — « affaire Ajar 2.0 », « aucun d'entre nous n'est armé pour
   repérer une utilisation de ChatGPT ») et la **clause d'originalité**
   du groupe Madrigall (l'œuvre cédée « doit être produite par l'auteur,
   et non par une machine »).
   **Garde-fou non négociable** : ne jamais écrire ni dire que l'Académie
   « annonce », « refuse » ou « interdit » — uniquement des propos
   attribués nominativement, avec la source affichée à l'écran (layout
   `citation-sourcee`). Voir spec `deck-content`.

## Jalons proposés

1. Squelette Slidev + thème (tokens, paires typo, toggle dark/light).
2. Trame complète en slides « wireframe » (texte seul, sections 1-8).
3. Composants live (trigger, countdown, reader) en mode mock.
4. Intégration réelle avec la machine distante + protocole de fallback.
5. Illustrations, passes visuelles, répétition dans les deux modes,
   export PDF du support.
