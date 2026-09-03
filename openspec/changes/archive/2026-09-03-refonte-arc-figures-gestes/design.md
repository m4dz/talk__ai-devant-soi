# Design — le nouvel arc de la fabrique

## Principe

Cinq figures de l'histoire littéraire, chacune reliée à **un geste que nous
avons réellement posé** dans la stack. Le fil : *on fait comme les autres
auteurs, avec d'autres outils.* Chaque geste est prouvé par un **artefact de
code**, choisi pour se lire **sans connaître le roman ni l'historique des
expérimentations**.

Fil rouge = la question du seuil (« en déployant ces outils, est-ce que je perds
la paternité ? »), posée à l'entrée, énoncée **une seule fois** (Carver), et
**répondue** à la remontée : je reste l'auteur parce que j'ai conçu l'atelier.

## Mapping figure → geste → artefact

| Figure | Geste réel | Artefact montrable (hors contexte) |
|---|---|---|
| **Malley** | juste ≠ bon ; mesurer n'est pas lire | **diptyque** : extrait machine **creux** (run C1, journal des murs) + **étalon humain** (`style-auteur.md:134`) — les deux passent la grille **tout au vert**, un seul est vivant |
| **Maquet** | je fournis la matière brute (documentée) | arbre `bible/` (**1131 l., 12 fichiers**) + zoom `lexique-correction.md` §A (le métier de correctrice documenté) |
| **Queneau** | j'ai écrit la machine, pas le texte | `orchestrator/graph.py:2106-2135` — le DAG LangGraph en **SVG statique glosé**, boucle de reprise en héros + encart 1 ligne de code |
| **Carver** | la qualité vient en retranchant | `bible/style-auteur.md:103` « ## Interdits » — liste **rayée rouge** (le crayon de Lish). Porte le **seuil énoncé** (unique du talk) |
| **Racter** | machine « auteur », en fait curée par moi | l'**entretien rejoué** (Judith, pré-généré et embarqué — **jamais live**) + illustration `cas-06-racter-s47.png` |

Réserves connues :
- **Malley « mauvais »** : *mauvais* est subjectif. Résolu par le **diptyque** —
  on ne juge pas « bon/mauvais » dans l'absolu, on **compare** deux textes qui
  passent tous deux la grille verte : l'un creux (machine), l'autre vivant
  (humain). Extrait machine = run C1 ; étalon humain = `style-auteur.md:134`.
  La force vient du **vide** de l'extrait machine (prose compétente et sans
  visage), pas d'un ratage flagrant. Le diptyque nourrit aussi le fil paternité
  (« voici ce que, moi, j'écris »).
- **Racter** : seul artefact dont le *contenu* touche au roman. L'entretien est
  un **rejeu pré-généré embarqué dans les slides**, JAMAIS joué en direct
  (contrainte matérielle : modèle 13 Go partagé avec la génération, `POST /chat`
  répond `409` pendant tout le run). Les sessions d'interview se génèrent **en
  amont**. Paire de questions encore à choisir — voir § « Racter » (parquée).

## Séquence cible (sections 4-5)

```
ENTRÉE
  · « Rien ne sort de cette pièce »          (contrainte locale = cadre, conservée)
  · « À partir de quand l'œuvre n'est-elle    (accroche mains-levées UNIQUE ;
     plus la vôtre ? »                         ouvre la question qui court)

GESTE 1 — MALLEY  (le problème + aparté gros modèle)
  · figure : les faux poèmes passent tous les critères de la revue
  · artefact : DIPTYQUE — extrait machine creux (gauche) vs étalon humain (droite),
     les deux TOUT AU VERT → « toutes les cases passent, un seul est vivant »
     → « compter n'est pas lire »
  · aparté (1 phrase) : « un plus gros modèle ? il ne rentre pas — et ferait
     du juste-mais-mort en plus gros »

GESTE 2 — MAQUET  (je fournis la matière, documentée)
  · figure : Maquet documente/structure/rédige les premiers jets, Dumas pose la
     voix — Maquet attaque en 1858, gagne de l'argent, jamais le nom
  · artefact : arbre bible/ (barres texturées) + zoom lexique du métier →
     « 1131 lignes documentées à la main, avant le premier mot de la machine »
  · sting (laissé ouvert) : « Maquet en a écrit dix fois plus, et a perdu le nom »

GESTE 3 — QUENEAU  (j'ai écrit la machine)
  · figure : Queneau écrit le générateur, aucun des cent mille milliards de poèmes
  · artefact : le DAG LangGraph en SVG glosé (boucle de reprise surlignée) +
     encart 1 ligne de code → « j'ai écrit l'atelier, pas le chapitre »

GESTE 4 — CARVER  (la qualité en retranchant) — SEUIL ÉNONCÉ ICI
  · figure : Lish coupe de moitié, réécrit les fins, contre l'auteur suppliant
  · artefact : la liste des INTERDITS rayée rouge (render A) →
     « ma fiche de style ne dit pas comment écrire, elle dit quoi barrer »
  · seuil (unique, en question, NON résolu) : « Lish a tant coupé Carver que la
     moitié du style est de lui. On appelle ça du Carver. Ma voix, ce sont mes
     retraits. Alors — à force de retraits, à qui est la voix ? »
     [provisoire — à éprouver au filage]

GESTE 5 — RACTER  (la synthèse) → enchaîne le MODE ACTEUR
  · figure : 1984, livre « écrit par un programme » — en fait curé, sélectionné,
     édité par l'humain (réintroduire référence + illustration)
  · artefact : l'entretien REJOUÉ (pré-généré, embarqué, jamais live) — 2 questions,
     factuelle puis interprétative (paire à choisir, parquée)
  · l'aveu : rien n'a émergé, tout composé et sélectionné  (conservé)
  · retournement : sur la question d'auteur de Le Tellier (attribuée, sourcée)

REMONTÉE / RÉPONSE
  · inventaire : bibliothèque, plan, voix, interdits — tous à ma main
  · réponse au seuil : PAS de seuil. J'ai conçu l'atelier comme un atelier
     d'écriture. Je reste l'auteur. Et l'Académie n'a pas de réponse simple à
     opposer : la créativité n'en a pas.
```

À la **chute** (section 7) : reprise Racter d'une ligne — « trop sélectionné,
trop assemblé, trop édité » — puis sortie sur « Je me suis bien amusé. Au revoir
et merci. »

## Ce qui est coupé

- Slides ~40-44 : run `xp-resolution`, accusation via la fiche de Judith,
  « 12/12 », « le doute tenait depuis le début, c'est moi qui le franchissais ».
- L'ancien **« mur qu'on ne peut pas acheter »** en tant que mur (son étage 1
  survit en aparté chez Malley).
- Le **pattern ternaire** des quatre murs et son **exception** (dernier mur qui
  ne résout pas).
- Le **pont Gary explicite** (slide 39) : la salle refait le lien via Racter.

## Décisions tranchées (session d'exploration du 2026-09-01)

- **Queneau = LangGraph** (j'ai écrit la machine), pas best-of-N — bien que le
  best-of-N existe réellement (`graph.py:731`), il n'est pas le geste de Queneau.
- **Maquet = nous** (on fournit la matière), valence sombre assumée : Maquet a
  fait le travail et perdu le nom. Inverse du « je suis Dumas » actuel.
- **Le fil rouge répond à la question** (pas d'angoisse ouverte) : je reste
  l'auteur, l'atelier est ma conception.
- **Seuil énoncé une seule fois** (Carver), implicite ailleurs.
- **Racter ouvre le mode acteur** ET est rappelé à la chute ; sa référence et
  son illustration sont réintroduites.
- **Aparté gros modèle → Malley** (placement de travail).

## Questions ouvertes

- Extrait machine de Malley : **résolu** — run C1 (verbatim ci-dessous), à
  resserrer aux phrases vertes (couper « Incrédule » et la question rhétorique
  « Comment avais-je pu me tromper ? » qui, elles, casseraient la grille).
- DAG Queneau : **résolu** — SVG statique inline dans un layout
  `piece-a-conviction`, calé palette pulp (encre/papier, boucle en rouge sang).
  **Pas de Mermaid** (clash esthétique + poids, boucle à contrôler au pixel),
  **pas de composant persistant**. Rendu figé ci-dessous.
- Arbre `bible/` (Maquet) : **résolu** — `tree` typographié + **barres
  texturées** (halftone) proportionnelles au nombre de lignes, en rappel de la
  jauge `balance` des case-cards. Zoom = `lexique-correction.md` §A. Rendu figé
  ci-dessous.

## Diptyque Malley — les deux panneaux (verbatims figés)

Cadre de slide : « Les deux passent la grille. Un seul est vivant. » Grille de
lint **tout au vert** au-dessus ou entre les deux.

**Gauche — la machine (run C1, journal des murs, resserré aux phrases vertes) :**

> J'ai décidé de vérifier par moi-même. Dans la cuisine silencieuse, l'égouttoir
> était là, deux assiettes s'y trouvaient bien. Je les ai comptées à nouveau :
> deux.

Creux : prose compétente, sans visage. « vérifier par moi-même », « s'y
trouvaient bien » = remplissage. N'importe quel narrateur — donc personne.

**Droite — l'humain (`bible/style-auteur.md:134`, Étalon 2) :**

> Je me suis assise dans la cuisine et j'ai repris les faits dans l'ordre,
> calmement, méthodiquement, le café de sept heures, le départ de sept heures
> quarante, la réunion, le déjeuner, le retour par la départementale à cause des
> travaux, le garage, la porte du garage, la porte de la buanderie, et à chaque
> étape je me suis revue avec une netteté parfaite, sauf une, une seule, un trou
> de quelques secondes entre le garage et la buanderie, quelques secondes
> pendant lesquelles quelqu'un a bien dû porter mes clés jusqu'à cette coupelle.

Vivant : l'accumulation qui monte, puis le « sauf une, une seule » qui ouvre le
gouffre. Même scène, même grille — l'écart est tout.

## DAG Queneau — rendu figé (SVG statique glosé)

Source : `orchestrator/graph.py:2106-2135`. 9 nœuds, une boucle de reprise.
Message : *le nombre de nœuds EST l'argument — j'ai écrit l'atelier, pas le
chapitre.* Rendu A : diagramme lisible d'un coup (atelier + boucle), labels en
langue d'auteur, nom de code en petit, **boucle `glisse→write` surlignée rouge
sang**.

Forme cible :

```
   ┌──────────── recommence si ça casse ────────────┐
   │                                                 ▲
 PLAN → ÉCRIRE → ACCUMULER → GLISSER ──(ok)──▶ RELIRE → CORRIGER
                                                          │
   COHÉRENCE ◀── POSER LES GESTES ◀── ASSEMBLER ◀────────┘
       │
       ▼  ✓
```

Glose des nœuds (nom d'auteur / nom de code) :

| À l'écran | Code | Ce qu'il fait |
|---|---|---|
| PLAN | `plan` | plan de scènes |
| ÉCRIRE | `write` | écrit le beat |
| ACCUMULER | `accumulate` | la phrase d'accumulation (montée) |
| GLISSER | `glisse` | le glissement (geste signature) ; **route la boucle** |
| RELIRE | `review` | relit, vérifie contre les fiches |
| CORRIGER | `repair` | corrige |
| ASSEMBLER | `assemble` | recolle les beats |
| POSER LES GESTES | `poser_gestes` | pose les 2 gestes que 8 runs n'ont jamais produits seuls |
| COHÉRENCE | `coherence` | vérifie les faits tenus (FAIT 1…9 : tenu) |

Encart — **une seule ligne de code**, pour prouver que la boucle est réelle :

```python
g.add_conditional_edges("glisse", route_after_write, ["write", "review"])
```

Caption : *« J'ai écrit l'atelier, pas le chapitre. »*
Implémentation : SVG inline (9 boîtes + arêtes + 1 arête de retour), palette
pulp, pas de Mermaid, pas de composant persistant.

## Maquet — rendu figé (arbre à barres texturées + zoom lexique)

Message : la **largeur** (12 fichiers) et la **profondeur** (un fichier zoomé)
de la matière écrite à la main. Le volume se sent, il ne se lit pas. Geste
Maquet = **documenter** le monde (pas l'inventer) : le métier de correctrice est
réel, on l'a documenté comme Maquet documentait ses sources.

**Panneau 1 — largeur.** Arbre `bible/` typographié, chaque fichier suivi d'une
**barre texturée halftone** proportionnelle à son nombre de lignes (rappel de la
jauge `balance: Auteur █████░ Dispositif` des case-cards). Source réelle :

```
bible/                                       lignes
  fiche-judith.md              ████████████    200
  chronologie-partie-double.md ██████████      166
  style-auteur.md              █████████       152
  lexique-correction.md        █████            89
  citations-cahier.md          █████            87
  _scene-test-style.md         █████            87
  objets.md                    ████             78
  verite-de-surface.md         ████             76
  _template.md                 ████             71
  fiche-romane.md              ███              55
  fiche-therapeute.md          ██               35
  mouvements-chapitres.md      ██               35
                                          ───────────
                              12 fichiers · 1131 lignes
```

(Barres normalisées sur 200 = la plus longue. Halftone/trame, pas d'aplat.)

**Panneau 2 — profondeur.** Zoom sur `lexique-correction.md` §A « la taxonomie
des fautes » — le métier **documenté**, pas inventé (le fichier note lui-même :
« termes authentiques, sauf un signalé ») :

> **la coquille** — faute locale, lettre ou mot
> **le bourdon** — mot, ligne ou passage sautés
> **le doublon** — passage répété deux fois
> **le mastic** — lignes mélangées, composition brouillée
> **la rupture de registre** — changement de ton non motivé
> **l'erreur de relevé** — sa faute de saisie à elle *(le seul terme forgé)*
>
> *un fichier sur douze — le vocabulaire d'un métier réel, documenté à la main*

**Caption / sting :** *« 1131 lignes, documentées à la main, avant que la machine
n'écrive un mot. Maquet en a écrit dix fois plus — et il a perdu le nom. »* Puis
on laisse : le seuil ne s'énonce qu'à Carver, ici seulement la piqûre.

Layout : `piece-a-conviction`, arbre en pièce principale + zoom en encart. Pas de
composant persistant.

## Carver — rendu figé (interdits rayés rouge + seuil énoncé)

Source : `bible/style-auteur.md:103` « ## Interdits » (14 défauts « bloquants, à
réécrire systématiquement »). Message : la qualité vient du **retrait** — la
fiche de style ne prescrit pas, elle **barre**. La rature rouge = le crayon de
Lish. Render A retenu (pas de paires avant/après : la vraie liste, honnête).

Distinct des autres artefacts : Maquet = arbre+barres, Malley = diptyque,
Queneau = DAG ; Carver = **texte raturé rouge**.

Sélection à l'écran (verbatim, ceux qu'une salle de dev lit comme « écriture
d'IA ») :

> ~~un mélange de X et de Y~~
> ~~une part de moi~~
> ~~c'est alors que je compris~~
> ~~indicible, ténèbres insondables~~
> ~~ce que j'ai vu alors m'a glacée~~   *(émotion annoncée)*
> ~~perplexe, songeuse, inquiète~~   *(état mental nommé)*
> ~~hurla violemment~~   *(adverbe redondant)*
> ~~toute phrase qui résout le doute~~

Titre : *« Ma fiche de style ne dit pas comment écrire. Elle dit quoi barrer. »*

**Seuil énoncé — unique du talk, posé en question, NON résolu** (la réponse
tombe à la remontée) :

> Lish a tant coupé Carver que la moitié du style est de lui. On appelle ça du
> Carver.
> Ma voix, ce sont mes retraits.
> Alors — à force de retraits, à qui est la voix ?

Formulation **provisoire**, à éprouver au filage (c'est la phrase-pivot du fil
rouge). Layout : `piece-a-conviction` ou `exergue` pour le seuil sur sa slide.

## Racter — entretien rejoué (paire de questions PARQUÉE)

Contrainte : **rejeu pré-généré embarqué**, jamais live (13 Go partagés,
`409` pendant la génération). Les sessions se génèrent en amont, puis on colle
les échanges dans les slides. Deux questions : une **factuelle** (prouve que la
machine « est devenue » Judith — un détail fin tenu juste), une
**interprétative** (fait affleurer le **refus de résoudre** — la thèse à
l'écran). La réponse interprétative doit montrer le réflexe de correctrice
*sans conclure* (« prête à la corriger… mais je reste là »).

Trois combinaisons retenues, **à jouer/éprouver plus tard** avant de figer :

- **A — F1 + I1** ⭐ « cahier/carnet » → « quelqu'un entre-t-il chez vous ? ».
  Arc le plus lisible : elle classe tout, puis ne peut pas classer la seule
  chose qui compte. Autoportant.
- **B — F3 + I1** « une phrase contredit votre souvenir ? » → « quelqu'un
  entre-t-il ? ». Arc le plus serré : F3 pose « le texte fait foi », I1 rend la
  règle insupportable. Un cran de charge mémoire en plus pour la salle.
- **C — F3 + I3** « le texte fait foi » → « pourquoi noter tout ? ». Arc
  intérieur, introspectif, mais pas de non-résolution à l'écran — plus faible
  pour la thèse.

Banque de questions :
- **F1** « Quelle différence faites-vous entre le cahier et le carnet ? »
- **F2** « Comment commence une entrée de votre carnet ? »
- **F3** « Que faites-vous quand une phrase que vous avez écrite contredit votre souvenir ? »
- **I1** « Est-ce que quelqu'un d'autre entre dans votre maison ? »
- **I2** « Vous y croyez, à ce qui se passe chez vous ? »
- **I3** « Pourquoi notez-vous tout ? »

Statut : **paire non tranchée**. L'apply peut poser la structure Racter
(case-card + illustration réintroduite, emplacements des 2 échanges, aveu,
retournement Le Tellier) mais **laisse les verbatims d'entretien en gabarit**
jusqu'à génération des sessions.
