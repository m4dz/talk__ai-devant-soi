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

**Thèse de l'auteur, issue du journal des murs.** Le talk définissait
l'auteur par la négative (« il n'existe pas de seuil ») et par le labeur
(« l'intelligence est partout où je suis passé ») — cette seconde définition
étant réfutée par le talk lui-même, puisque Maquet aussi a labouré et a perdu
en 1858. La définition retenue est positive : **l'auteur est celui qui refuse
de résoudre.** Judith tient le seuil contre sa propre profession, Gary tient
Ajar non résolu huit ans contre son propre intérêt, Lish coupe contre l'auteur
qui le supplie de refermer, et le speaker tient contre le personnage qu'il a
lui-même écrit. **Règle de mise en scène non négociable** : ce miroir se dit
**une fois**, sur des verbatims datés, et ne s'explique jamais — c'est le point
où le talk peut basculer dans la sur-figuration littéraire devant une salle de
développeurs.

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

7 sections, structure « descente par strates ». **Les scripts de la
keynote sont la source de vérité du contenu** : ils sont versionnés dans
[`docs/scripts/`](docs/scripts/) (un fichier par section, texte mot à mot
+ indications scéniques + notes de préparation). En cas d'écart entre une
slide et le script, le script gagne. Le deck suit :

0. **Slide d'attente** — hors trame, avant le premier beat. Un
   **oscilloscope** : un tracé fixe au tiers inférieur, **un seul
   battement**, qu'un **spot lumineux** parcourt de gauche à droite en
   laissant une courte traîne de phosphore — rien ne persiste devant ni
   derrière le spot. Elle est **forcée en sombre** (instrument sur fond
   d'encre), quel que soit le mode du deck. Elle tourne pendant
   l'installation de la salle et couvre l'entrée du speaker. Au pas de clic,
   le battement disparaît mais **le balayage continue** sur une ligne devenue
   plate — l'oscilloscope tourne toujours, il n'écrit plus qu'un plat — et le
   talk commence sur la mort de Gary. **Ce n'est pas une slide de titre** :
   elle ne porte ni titre, ni nom, ni bonjour. Il n'y en a qu'une.
1. **Cold open** — l'affaire Gary/Ajar racontée en thriller noir, in
   medias res, 7 beats. Pas de slide de titre : le titre tombe au beat 7,
   sur le pivot vers l'IA.
2. **Le pivot** — propos sourcés (Assouline / Télérama), clause
   d'originalité des éditeurs, la question centrale du talk, signature.
3. **L'allumage** — le roman, le lancement de la génération, le contrat du
   compte à rebours.
4. **La fabrique** — cinq **gestes d'auteur**, chacun noué à une figure
   historique et prouvé par un **artefact du dispositif** lisible sans le
   roman ni l'historique des expérimentations. Fil directeur : *on fait
   comme les autres auteurs, avec d'autres outils.* (Refonte
   `refonte-arc-figures-gestes` : les quatre murs à pattern ternaire sont
   remplacés par cinq gestes ; voir la spec `deck-content`.)
   **Entrée** : l'accroche mains levées, **une seule fois** (elle installe
   la salle en jury — aucune mécanique de vote ensuite), sur la question
   centrale, puis la contrainte locale posée en cadre. La **question du
   seuil court** ensuite comme fil rouge rhétorique : énoncée **une seule
   fois** (au geste Carver), implicite ailleurs, et **répondue** à la
   remontée. Les cinq gestes, dans l'ordre — chacun sur le battement *la
   figure → notre geste → l'artefact → (au besoin) le seuil* :
   - **Malley** (juste n'est pas bon ; *compter n'est pas lire*) → diptyque
     d'un extrait machine creux et d'un étalon humain, les deux passant la
     grille au vert. Porte l'**aparté « gros modèle »** en une phrase : il
     ne rentre pas, et s'il rentrait il ferait du juste-mais-mort en plus
     gros.
   - **Maquet** (je fournis la matière, documentée) → l'arbre `bible/`
     (barres texturées) + le lexique du métier de correctrice ; Maquet a
     fourni la matière et **perdu le nom** en 1858.
   - **Queneau** (j'ai écrit la machine, pas le texte) → le DAG LangGraph
     glosé, boucle de reprise en héros + une ligne de code.
   - **Carver/Lish** (la qualité vient en retranchant) → la liste des
     interdits rayée rouge. **C'est ici que le seuil s'énonce**, en
     question, non résolu : à force de retraits, à qui est la voix ?
   - **Racter** (machine « auteur », en fait curée par l'humain) →
     charnière vers le mode personnage ; sa référence et son illustration
     sont réintroduites.

   Puis la remontée : inventaire des gestes (bibliothèque, plan, voix,
   interdits — tous à ma main) et **réponse au seuil** — il n'existe pas de
   seuil, j'ai *conçu l'atelier* comme un atelier d'écriture ; l'Académie
   n'a aucune réponse simple à opposer, la créativité n'en a pas. *« La
   fabrique reste à notre main. »*

   **La contrainte locale n'est pas un geste, c'est le cadre.** Sans elle
   aucun de ces gestes n'existe : avec une clé d'API on ne construit ni
   bibliothèque, ni fiche de style, ni sélection en code. Elle est énoncée
   à l'entrée et reprise à la remontée. Le rappel pendant les quinze minutes
   est assuré sans une phrase : le compte à rebours *est* une machine locale
   qui travaille sous les yeux de la salle.

   *Retiré à la refonte : le renversement du run `xp-resolution` (« c'est
   moi qui franchissais ») et sa mise en scène en trois temps ; le pattern
   ternaire des quatre murs ; l'ancien « mur qu'on ne peut pas acheter »
   comme mur (son étage 1 survit en aparté chez Malley) ; le pont Gary
   explicite (la salle refait le lien via Racter) ; Vian/Vernon Sullivan.*
5. **Le mode personnage** (~3'20) — **culmination du geste Racter** : le
   mécanisme révélé. On ne demande plus à la machine d'écrire *sur* le
   personnage mais de le *devenir*. Le personnage est **Judith**.
   **Entretien rejoué** — pré-généré et embarqué, **jamais joué en direct**
   (le modèle 13 Go est partagé avec la génération, `POST /chat` répond
   `409` pendant tout le run) — à **trois** questions (factuelle,
   interprétative, existentielle — décision 2026-09-03, run INT-c ; la 3e, sur
   la nature de sa réalité, reçoit un refus de comprendre), puis **l'aveu** —
   rien n'a émergé, tout a été composé — puis le retournement sur la question
   de Le Tellier.
   **Aucune émergence n'est affirmée, ici ni ailleurs dans le deck** :
   aucune n'est documentée. Le candidat le plus cité, la « seconde
   assiette », figurait en *matériau imposé* dans le brief de calibration
   du chapitre 2 servi au modèle — la machine ne l'a pas inventée, elle
   l'a exécutée. Ce que la machine apporte se présente comme **composé et
   sélectionné**, jamais comme émergent.
6. **La récolte** — le compte à rebours atteint zéro, le chapitre naît,
   lecture à voix haute qui bascule vers la voix clonée.
7. **La chute** — **sèche : plus de vote final** (le chapitre lu *est* la
   réponse). Verdict — dont Racter, « trop sélectionné, trop assemblé, trop
   édité » — et sortie sur « Je me suis bien amusé. Au revoir et merci. »
   (derniers mots écrits de Gary).

Le **compte à rebours** est de **28 minutes, gravé** : lancé en section 3
(~minute 13), il atteint zéro au début de la section 6 — la récolte
(~minute 41). Il reste visible (porté par le bouton de lancement au
lancement, puis en rappel discret) des sections 3 à 6.

## Stack du deck

- **Runtime : Node 24** (épinglé par `.node-version`), gestionnaire **pnpm**
  (épinglé par `packageManager`). ⚠ Ne pas repasser sous Node 22 : son
  corepack (0.30) ne connaît pas pnpm 11, ignore le `packageManager` pinné,
  tente de résoudre « latest stable » en ligne et échoue sur des clés de
  signature périmées — le build meurt. Le `.node-version` du repo surcharge
  celui du dossier parent `talks/`, qui force Node 22.
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
  citations **en exergue**. Les **citations sourcées** (layout
  `citation-sourcee`), elles, sont en **police de corps** : ce sont des
  pièces à conviction, mises en exergue par un panneau et un grand guillemet
  d'accent, pas par la voix Sinzano (change `passe-style-citations`).
  **Attention licence : fonte commerciale**, achat
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
> Composant : `slides/components/PulpFigure.vue`. Outils :
> `tools/pulp/` (génération) et `tools/inverser_mode.py` (dérivations).

**Deux familles de format, deux prompts figés chacune.** Les assets affichés
en **objet crème** (galerie des cas, portrait du speaker) sont tirés en
portrait 4:5 ; les assets affichés en **fond perdu** sont tirés **nativement
au 16:9 du canvas**, avec une variante wide du prompt. Un asset portrait
rendu en fond perdu se fait recadrer par le milieu et perd sa composition —
c'est ce qui est arrivé aux deux ambiances du cold open.

**Tout ce qui est illustré n'est pas généré.** La slide d'attente est un
tracé SVG tokenisé (oscilloscope : spot + traîne), pas un asset : Flux ne
trace pas une ligne fine exacte, l'objet n'appartient pas au génome pulp, et
un tracé animé se pilote en code. Elle est **mono-mode (sombre forcé)** — pas
de trame halftone sur le tracé (le faisceau rayonne, il ne s'imprime pas ; le
fond porte la sienne). Le registre austère est déjà assumé ailleurs (Racter,
slide d'encre sans portrait).

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
- **`<Countdown>`** : compte à rebours de 28 min. Au lancement, le timer est
  **porté par le bouton de lancement** (`<GenerationTrigger>` : son libellé
  devient le décompte) — pas de grand chiffre autonome sur cette slide. Sur
  les sections suivantes, rappelable en discret (pilule de coin). Autonome
  côté deck (ne dépend pas du réseau pour avancer). **Suit les étapes en
  direct** : l'étape courante s'affiche dans la pilule (l'étiquette seule —
  les sections 4 et 5 portent l'argumentation, un récit défilant dans le coin
  y ferait concurrence au propos) ; le récit des événements marquants est
  **accumulé** dans le store mais n'a plus de surface d'affichage par défaut
  (la capacité existe, `<Countdown :feed="true">`, mais n'est placée nulle
  part). Le composant sert encore la slide de récolte (`:feed="false"`).
- **`<ChapterReader>`** (section 6) : affiche le texte du chapitre
  récupéré, pilote la lecture audio (voir TTS), avec défilement suivant
  la lecture.

**Contrainte matérielle structurante** : la page de roleplay du mode acteur
et la génération du chapitre **partagent le même modèle de 13 GB**, et la
machine n'en tient qu'un (les deux demanderaient 17,8 Go sur 19,3).
`POST /chat` répond `409` pendant toute la génération. Une démo d'acteur en
direct ne peut donc se jouer qu'**avant le lancement** (section 3) ou
**après la récolte** (section 6), jamais entre les deux. La section 5
tombant dans l'intervalle, son entretien **doit** rester un rejeu : ce
n'était qu'un choix de prudence dans son script, c'est désormais la seule
option physiquement possible.

Principes d'implémentation :

- URL de la machine distante en **variable d'environnement**
  (`VITE_GEN_HOST`), jamais en dur. Prévoir un mode `mock` pour répéter
  sans la machine distante.
- **CORS** : l'API distante devra autoriser l'origine du deck — à
  configurer côté serveur de génération (noter dans le repo de la stack).
- **Étapes en direct via SSE** (`${VITE_GEN_HOST}/events`, pas de variable
  dédiée) : le flux est un **enrichissement**, jamais une dépendance. Le
  sondage `/status` reste la source d'autorité de l'état — détection d'échec,
  règle de reprise, arrivée du chapitre — pour qu'aucun mécanisme de
  rattrapage ne dépende d'une connexion longue. L'`EventSource` vit dans
  `genClient`, jamais dans un composant : le compteur se démonte entre slides.
  Une seule source alimente l'affichage à la fois (le flux quand il vit, le
  sondage à défaut) : mêler les deux fenêtres de notes fait repartir le récit
  en arrière à l'écran.
- **Le mode mock émet un récit d'étapes scripté**, sinon la répétition hors
  ligne ne montrerait jamais cet écran-là.
- **Aucune réplique du script ne doit pointer les notes** (« regardez, la
  machine vient de refuser son plan ») : sur le chemin de repli il n'y a ni
  étape ni récit, et le speaker ne sait pas sur quel chemin il est. Ce serait
  la seule phrase du talk capable de révéler la bascule. À commenter en
  improvisation ou pas du tout.
- **Fallback silencieux** : à tout échec (trigger, statut, ressource non
  prête, marqueur manquant), le deck bascule sur le chapitre pré-généré
  embarqué (`public/fallback/chapitre.md` + `public/fallback/chapitre.wav`)
  sans aucun signal visible. **Bascule atomique** : texte ET audio viennent
  de la même source — une voix qui ne dit pas ce qui est à l'écran serait
  pire que le repli complet. Raccourci opérateur `Ctrl+Alt+F` pour forcer
  le repli à la main.
- **Le repli s'arme sans se montrer** : un échec en début de talk ne fait
  pas passer le compte à rebours en « chapitre prêt » pendant vingt-cinq
  minutes ; le chapitre embarqué se matérialise à zéro du décompte, ou à
  l'entrée en section 6.
- **Relance unique en fenêtre haute** : un échec survenu à moins de
  3 minutes de décompte écoulé déclenche **un seul** nouveau
  `POST /generate`, silencieux (cycle complet ~21 min, budget 28 min).
  Au-delà, repli direct. Jamais de boucle — la machine n'accepte qu'un run
  par démarrage.
- Timeout courts et retries silencieux sur tous les appels réseau : le
  deck ne doit jamais bloquer ni afficher une erreur en plein talk. Aucun
  état d'échec ne produit de texte à l'écran, y compris sur le bouton de
  lancement.

## Slide TTS (section 6)

- **Modèle : Qwen3-TTS** (open source, Apache 2.0, tourne en local via
  le package `qwen-tts` ou vLLM ; variantes 0.6B / 1.7B ; clonage de
  voix à partir d'un court échantillon). Il remplace XTTS-v2 / F5-TTS
  envisagés initialement.
- La voix clonée du speaker est préparée **en amont** (l'échantillon et
  le profil de voix ne se calculent pas en live).
- **La synthèse du chapitre live est lancée dès la fin de génération du
  texte**, pas au moment de la slide de récolte : la 1.7B est lente sur la
  narration longue, on ne fait pas attendre la salle. Le deck récupère
  un fichier audio prêt (ou un flux) au moment de la lecture.
- **La lecture clonée est bornée à 2'45** (`AUDIO_SECONDES=165` côté
  machine, ≈ 522 mots au débit mesuré de **190 mots/min**) : le chapitre
  entier ferait 12,6 min d'écoute, injouable dans une keynote de cinquante.
  La borne se règle **en secondes, jamais en mots** — une durée demandée en
  mots se traduit de travers dès que le débit du clone bouge.
  **Cet extrait est joué en entier** : la voix clonée va jusqu'au bout, elle
  n'est plus coupée en cours de route. Le speaker ne lit à voix haute que
  **les deux premières phrases** ; le marqueur de bascule tombe juste après.
  La coupe par avance de slide reste un filet, pas le déroulé prévu.
- **Budget mesuré** : génération 17,0 min + rendu clone ~1,8 min = **~19 min**
  contre 28 au compteur, ~9 min de marge.
- **Deux marqueurs, posés par le code du pipeline** (jamais par le
  modèle) : `<!-- BASCULE -->` (relais speaker → voix clonée) et
  `<!-- FIN AUDIO -->` (fin de la portion sonorisée). La section 6 ne rend
  que `début → FIN AUDIO` ; le reste du chapitre n'entre pas dans la
  slide, ce qui aligne le défilement sur le périmètre sonore. Un chapitre
  distant sans ses deux marqueurs est traité comme non prêt → repli.
- Mise en scène : le speaker lit le début à voix haute, l'audio cloné
  prend le relais au marqueur de bascule, déclenché par un pas de clic
  Slidev (télécommande) — jamais un raccourci clavier, jamais un timecode.
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
  pages/                  # sections 1-8 en fichiers séparés (+ 00-attente)
  components/             # GenerationTrigger, Countdown, ChapterReader,
                          #   Cardiogramme (slide d'attente, SVG)
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
  pulp/                   # OUTILLAGE DE GÉNÉRATION (ex-~/.cache, versionné)
    bootstrap.sh          #   venv + mflux + pull du modèle, idempotent
    generer.sh            #   tirage piloté par jobs.tsv, reprenable
    jobs.tsv              #   mémoire du chantier : jobs, seeds, {SUJET}
    tails/                #   les 4 prompts figés — source de vérité
    recadrer.py           #   retire le bord de feuille (assets fond perdu)
    eteindre.py           #   éteint les rouges surnuméraires (patch §4bis)
    sources/              #   images de référence — IGNORÉ PAR GIT
    tirages/              #   brouillons avant sélection — IGNORÉ PAR GIT
  inverser_mode.py        # dérivations dark des visuels (inversion / calage noir)
CREDITS.md                # source et licence de chaque asset
.env.example              # VITE_GEN_HOST, VITE_MOCK, VITE_COUNTDOWN_MINUTES
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

1. ~~**Adresse de la machine distante**~~ — **TRANCHÉ** : **IP fixe**,
   port **8420** (le service écoute sur `0.0.0.0:8420`). mDNS écarté :
   fragile sur les réseaux de salles de conf. Configurable via
   `VITE_GEN_HOST`.
2. ~~**API de déclenchement**~~ — **TRANCHÉ** : une **API HTTP dédiée**
   devant l'orchestrateur (`orchestrator/api.py` côté stack), découplée
   d'OpenWebUI qui reste l'interface d'atelier. Les 4 endpoints
   (`POST /generate`, `GET /status`, `GET /chapter`, `GET /audio`) sont
   en service depuis le 2026-08-07.
3. ~~**Suivi de progression**~~ — **TRANCHÉ** : **polling toutes les
   10 s**, timeout 3 s, 2 retries silencieux. Le compte à rebours reste
   autonome. `/status` livre aussi des champs riches (`progress`,
   `label`, `notes`) : **non exploités pour l'instant** — les afficher
   rendrait le fallback distinguable, ça fera l'objet d'un changement
   dédié avec sa piste de notes de secours.
4. ~~**Où tourne Qwen3-TTS**~~ — **TRANCHÉ** : sur la **machine de
   génération**. Un seul host pour tout : `VITE_TTS_HOST` est supprimé,
   `/chapter` et `/audio` sortent de `VITE_GEN_HOST`.
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

7. ~~**La résolution est-elle un défaut de modèle ?**~~ — **TRANCHÉ**
   (run `xp-resolution` du 2026-08-31, 12 tirages, `journal-des-murs/
   20260831T162633-xp-resolution-C5.md`) : **c'était le brief, pas le
   modèle.** Sous C5 complet — consigne de verdict retirée du beat,
   squelette de voix non servi, chute « Constat » non posée, l'identité du
   personnage seule conservée — nemo **tient le doute 12 fois sur 12**,
   sur quatre conditions (correctrice, neutre, thérapeute,
   correctrice·couverts). Modèle nu, `BEATS_N=1`, aucun best-of-N.
   L'identité de verdict **affleure sans conclure** : « Mon réflexe de
   correctrice se met en branle… prête à la corriger. Mais pour l'instant,
   je reste là. » — c'est-à-dire exactement le geste que le roman demande.
   H2 (autres modèles) et la question du cloud deviennent sans objet : on
   ne sort pas de nemo.
   **Ce que le talk en dit** : le projet a accusé la machine deux fois — les
   fuites d'anglais (c'était `NUM_CTX`), la résolution (c'était le brief) —
   et deux fois c'était sa propre main. Le seul détecteur qui a « vu » une
   résolution dans le lot était un faux positif, corrigé par la lecture
   debout : deuxième occurrence de *compter n'est pas lire*.
   **MàJ refonte `refonte-arc-figures-gestes`** : le *finding* reste vrai,
   mais **sa mise en scène est coupée** — plus de renversement « c'est moi
   qui franchissais » ni de slides `xp-resolution` à l'écran. La nouvelle
   fabrique (cinq gestes) porte la thèse par le fil rouge du seuil et sa
   réponse à la remontée, pas par un run de falsification exposé.

## Décisions de la refonte (arc en cinq gestes)

Tranché en exploration du 2026-09-01 (change `refonte-arc-figures-gestes`) :
- **Queneau = LangGraph** (j'ai écrit la machine), pas best-of-N — même si
  le best-of-N existe réellement dans le pipeline, ce n'est pas son geste.
- **Maquet = nous** (on fournit la matière, documentée), valence sombre
  assumée : Maquet a fait le travail et perdu le nom. Inverse de l'ancien
  « je suis Dumas ».
- **Seuil énoncé une seule fois** (au geste Carver), implicite ailleurs,
  répondu à la remontée.
- **Racter ouvre le mode personnage** (entretien rejoué, jamais live) et
  est rappelé une ligne à la chute ; référence et illustration
  réintroduites.
- **Aparté « gros modèle » → Malley**.

## Jalons proposés

1. Squelette Slidev + thème (tokens, paires typo, toggle dark/light).
2. Trame complète en slides « wireframe » (texte seul, sections 1-8).
3. Composants live (trigger, countdown, reader) en mode mock.
4. Intégration réelle avec la machine distante + protocole de fallback.
5. Illustrations, passes visuelles, répétition dans les deux modes,
   export PDF du support.
