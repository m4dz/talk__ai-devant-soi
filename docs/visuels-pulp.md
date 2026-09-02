# Visuels pulp — spec de génération et d'intégration (v2.4)

> Référence pour Claude Code (projet Slidev « L'IA devant soi »).
> Principe directeur : **on ne génère qu'en crème**. La dualité light/dark est
> résolue en aval — jamais dans la génération. L'image crème est la source
> canonique ; les modes sont des dérivations (même logique que Markdown → ChromaDB).
>
> v2.4 : **deux familles de format.** Les assets en objet restent en portrait
> 4:5 ; les assets en fond perdu passent au 16:9 natif, avec une variante wide
> des prompts (§2). Ajout du portrait du speaker par génération conditionnée
> (§3), des critères de rejet 13-14 (§5), du routage de dérivation dark par le
> fond de l'image (§7), et de l'outillage versionné `tools/pulp/` (§4).
>
> v2.3 (après passage hi-res) : découverte de la non-reproductibilité des
> seeds entre résolutions (§0bis), 3 re-tirages arbitrés (Dumas, Vian,
> rue-pluie) avec {SUJET} corrigés, presence patché + négatif B produit,
> patchs numériques documentés comme mécanique légitime, évolutions Carver
> et Oulipo consignées. Prompts 2a et 2b toujours FIGÉS.

## 0. État de série

**Objet crème — portrait 4:5, prompt `2a`.**

| asset | statut | fichier canonique / action | dérivation dark |
|---|---|---|---|
| cas-01-dumas-maquet | **gardé** | `cas-01-dumas-maquet-s500.png` | objet A (négatif B possible) |
| cas-02-carver-lish | **gardé** | `cas-02-carver-lish-s43.png` | objet A (négatif B possible) |
| ~~cas-03-vian-sullivan~~ | **asset supprimé** — station retirée du deck (2026-08-31) | — | — |
| cas-04-ern-malley | **gardé — référence de série** | `cas-04-ern-malley-s45.png` | objet A ; **négatif B validé** |
| cas-05-oulipo | **gardé** | `cas-05-oulipo-s46.png` (voir note §0ter) | objet A (négatif B possible) |
| cas-06-racter | **gardé** | `cas-06-racter-s47.png` — non référencé par le deck | objet A (négatif B possible) |
| ident-01-m4dz | **gardé** | `ident-01-m4dz-s822.png` (mode `edit`, §3bis) | **aucune** — objet, reste crème |

**Fond perdu — 16:9 natif 1280×720, prompts `2a-wide` / `2b-wide`.**

| asset | statut | fichier canonique / action | dérivation dark |
|---|---|---|---|
| coldopen-02-presence | **gardé** | `coldopen-02-presence-s801.png` — silhouette sans visage, 1180×664 | **négatif B produit** (`--puissance 14`) |
| coldopen-05-rue-pluie | **gardé (patché)** | `coldopen-05-rue-pluie-s913-patch.png` — 28 rouges éteints sur 29 | **calage produit** (`--cale-noir`) |
| fabrique-04-usine-machine | **gardé** | `fabrique-04-usine-machine-s930.png` — slide « Pas écrit seul » | **négatif B produit** (`--puissance 14`) |

> **Pourquoi le re-tirage.** Ces deux assets étaient tirés en 4:5 et rendus en
> fond perdu dans un canvas 16:9 : `object-fit: cover` n'en gardait qu'une
> bande médiane. Sur `presence`, le recadrage mangeait **le chapeau du géant
> ET l'homme qui marche en bas** — les deux termes de la thèse. Le motif 2
> était mort à l'écran.

**Non généré.** La slide d'attente (ligne plate + un battement) est un tracé
SVG tokenisé, `slides/components/Cardiogramme.vue` — pas un asset. Flux ne
trace pas une ligne fine exacte, l'objet n'appartient pas au génome pulp, et
les tokens donnent les deux modes sans second fichier.

### 0bis. Reproductibilité — RÈGLE CRITIQUE

**Le seed ne survit pas au changement de résolution.** Flux redistribue le
bruit initial sur une autre grille latente : même seed, autre image (constaté
au passage hi-res sur s103, s203, s303). Conséquences :

1. Un seed ne reproduit un tirage qu'à résolution ET paramètres strictement
   identiques.
2. Tout passage hi-res est un **nouveau tirage** : re-sélection complète par
   les critères §5, aucune validation basse résolution n'est transférable.
3. **L'artefact canonique est le fichier PNG**, pas le seed. Le seed consigné
   ne sert qu'à la traçabilité et au re-tirage à paramètres constants.
4. Corollaire pratique : générer les seeds de sélection **directement à la
   résolution finale** — sélectionner en basse résolution fait le travail
   deux fois.

### 0ter. Évolutions consignées (hi-res, acceptées)

- **Carver (s43)** : le X validé est devenu une barre unique traversant la
  bouche — « réduit au silence par l'éditeur ». Un seul trait rouge, sens
  durci. Accepté.
- **Oulipo (s46)** : le fil rouge unique est devenu un arbre ramifié —
  lecture requalifiée de « un chemin choisi » vers « l'arbre des
  combinaisons » (Queneau). Un seul élément rouge connexe. Accepté.
  **Vérification requise à taille de projection** : les pages portent du
  pseudo-texte (diégétique, hors clause « no text » qui vise le lettrage de
  couverture) — si un glyphe forme accidentellement un mot lisible,
  re-tirage.

## 1. Motifs retenus (5)

1. **Buste sur aplat** — figure seule en buste, fond crème vieilli, ombre
   portée dure, regard sous le chapeau. *(défaut portraits)*
2. **La présence derrière** — figure géante en surplomb dominant des figures
   normales qui ignorent sa présence. *(ambiances à thèse : Ajar derrière Gary)*
   **Variation assumée — « la figure contenue »** : la petite figure marche
   *à l'intérieur* de la silhouette du géant, blanc dans la masse noire
   (asset coldopen-02 : Gary logé dans Ajar). Issue d'un accident de
   composition, promue au canon ; ne pas la forcer dans un {SUJET}, la
   sélectionner quand elle émerge.
3. **Masqué par le col** — chapeau + col relevé rouge, seuls les yeux visibles.
   Le masquage vient du vêtement, pas de l'ombre.
4. **L'objet-figure** — un objet criblé/marqué (cible, machine à écrire, page)
   traité comme un portrait, cadré serré. *(Racter, Oulipo)* — et en fond
   perdu, l'**usine-machine** de la fabrique : le clavier y est un organe du
   bâtiment, pas le sujet, précisément pour ne pas doubler la machine à
   écrire de Racter.
5. **Rue-scène nocturne** — nuit en aplats peints, masses noires sur lumière
   crème pâle, une seule lueur rouge. *(ambiances Paris 1975 — prompt frère 2b)*

### Règle sémantique du rouge

**L'élément rouge unique désigne toujours la main cachée** — l'auteur
dissimulé, l'intervention invisible : la plume de Maquet, la barre de Lish,
la cravate de Vian (l'homme derrière Sullivan — le rouge marque l'auteur
dissimulé, jamais le pseudonyme-façade : le masque reste crème), les lèvres
peintes d'Ern Malley, l'arbre-chemin de l'Oulipo, l'encre de Racter,
l'écharpe du géant (presence), le **ruban encreur** de la fabrique — tout ce
que la machine imprime passe par lui. Le rouge n'est jamais décoratif et **jamais
atmosphérique** (pas de sol irradié, pas de ciel rouge, pas de masse, pas de
véhicule rouge). Critère de brief ({SUJET}) et de sélection des tirages.

### Règles négatives

- jamais plus d'un sujet dominant ;
- **exactement un** élément rouge par image ;
- jamais de rouge en masse, en lumière d'ambiance, ou porté par un objet
  sans signification (véhicule, mobilier) ;
- jamais de tons chair — peau et visages rendus en papier crème + modelé
  d'encre noire ;
- jamais de texte dans l'image (la typo est du ressort de Slidev/Sinzano ;
  le pseudo-texte diégétique illisible est toléré, cf. §0ter).

## 2. Prompts figés (mflux / Flux)

**Quatre prompts figés, deux familles de format.** Aucun autre prompt ne doit
exister. Toute correction passe par le {SUJET}, la sélection de seeds, ou un
patch §4bis.

| prompt | format | usage |
|---|---|---|
| `2a` | 4:5 — 768×960 | objet crème : portraits & objets-figures (motifs 1–4) |
| `2b` | 4:5 — 768×960 | objet crème : ambiances (motif 5) — **orphelin**, aucun asset courant |
| `2a-wide` | 16:9 — 1280×720 | fond perdu : portraits & objets-figures |
| `2b-wide` | 16:9 — 1280×720 | fond perdu : ambiances |

> **Source de vérité : `tools/pulp/tails/*.txt`.** Les prompts sont versionnés
> là, pas ici — `generer.sh` compose `prefixe.txt` + `{SUJET}` + le tail. Les
> blocs ci-dessous les reproduisent pour la lecture ; en cas d'écart, le
> fichier gagne.
>
> `2b` est **conservé malgré son orphelinat** : le passage en wide a vidé la
> famille des ambiances en objet, mais une ambiance en objet crème reste un
> usage légitime. Le supprimer fermerait la porte sans rien gagner.

### Ce qui distingue les prompts wide

Trois clauses seulement, toutes **compositionnelles** — la formule de style
est identique, pour que les deux familles restent la même série visuelle.

| clause 4:5 | clause wide |
|---|---|
| `the subject large in the frame filling the lower two thirds` | `a wide horizontal composition, the subject large in the frame occupying the right half and running from top to bottom` |
| `the upper third left as quiet aged cream space` | `the left third left as quiet aged cream space, the lower fifth kept uncluttered` |
| `visibly aged pulp paper with fold creases, foxing spots and worn edges` | `fold creases and foxing spots printed across the image itself, the illustration bleeding off all four edges of the frame, no paper border, no white margin, no rounded corners, no visible sheet` |

**Pourquoi la troisième.** En 4:5 le bord de feuille était recadré par
`object-fit: cover`. En 16:9 natif il est **entièrement visible** et l'image
se lit comme une photo encadrée, plus comme une ambiance. C'est une clause
négative, et §3.2 rappelle qu'elles tiennent mal — d'où le critère de rejet
§5.13.

**Pour `2b-wide`, `the upper third left as quiet dark space` reste** : c'est
le ciel, il tient en horizontal. Seules la première et la troisième clause
s'appliquent.

### 2a. Portraits & objets-figures (motifs 1–4)

```
A vintage 1930s pulp detective magazine cover painting of {SUJET}, original
gouache illustration before any lettering was added, painted in the flat
simplified style of a single mid-century commercial illustrator, the subject
large in the frame filling the lower two thirds, bold shapes with hard-edged
cast shadows, strict limited palette of deep ink black and warm cream with
exactly one blood-red accent element, no flesh tones, skin and faces rendered
as cream paper with black ink shading, coarse visible halftone dot screen
across all tonal areas, a faint sparse halftone tint over the cream
background, visibly aged pulp paper with fold creases, foxing spots and worn
edges, slight ink misregistration, the upper third left as quiet aged cream
space, no text, no letters, no typography
```

### 2b. Ambiances (motif 5)

```
A vintage 1930s pulp detective magazine cover painting of {SUJET}, original
gouache illustration before any lettering was added, painted in the flat
simplified style of a single mid-century commercial illustrator, a night scene
rendered as flat painted shapes, deep black masses against pale cream light,
windows glowing pale cream, no orange, no amber, no yellow, exactly one small
red glow, blacks as pure deep ink black, no blue tones, bold shapes with
hard-edged cast shadows, strict limited palette of deep ink black and warm
cream, no flesh tones, coarse visible halftone dot screen across all tonal
areas, visibly aged pulp paper with fold creases, foxing spots and worn edges,
slight ink misregistration, the upper third left as quiet dark space, no text,
no letters, no typography
```

### 2a-wide. Fond perdu — portraits & objets-figures (16:9)

```
A vintage 1930s pulp detective magazine cover painting of {SUJET}, original
gouache illustration before any lettering was added, painted in the flat
simplified style of a single mid-century commercial illustrator, a wide
horizontal composition, the subject large in the frame occupying the right
half and running from top to bottom, bold shapes with hard-edged cast
shadows, strict limited palette of deep ink black and warm cream with
exactly one blood-red accent element, no flesh tones, skin and faces
rendered as cream paper with black ink shading, coarse visible halftone dot
screen across all tonal areas, a faint sparse halftone tint over the cream
background, fold creases and foxing spots printed across the image itself,
the illustration bleeding off all four edges of the frame, no paper border,
no white margin, no rounded corners, no visible sheet, slight ink
misregistration, the left third left as quiet aged cream space, the lower
fifth kept uncluttered, no text, no letters, no typography
```

### 2b-wide. Fond perdu — ambiances (16:9)

```
A vintage 1930s pulp detective magazine cover painting of {SUJET}, original
gouache illustration before any lettering was added, painted in the flat
simplified style of a single mid-century commercial illustrator, a wide
horizontal composition, a night scene rendered as flat painted shapes, deep
black masses against pale cream light, windows glowing pale cream, no
orange, no amber, no yellow, exactly one small red glow, blacks as pure deep
ink black, no blue tones, bold shapes with hard-edged cast shadows, strict
limited palette of deep ink black and warm cream, no flesh tones, coarse
visible halftone dot screen across all tonal areas, fold creases and foxing
spots printed across the image itself, the illustration bleeding off all
four edges of the frame, no paper border, no white margin, no rounded
corners, no visible sheet, slight ink misregistration, the upper third left
as quiet dark space, no text, no letters, no typography
```

### Décision ouverte — plis en fond perdu

Inchangée (v2.2) : garder par défaut — le fond perdu est un document d'époque
projeté, le pli dit « pièce du dossier ». À valider en répétition sur
projecteur. Escalade : (1) seeds dont les plis évitent le ciel, (2) « subtle
fold creases » dans 2b uniquement.

## 3. Règles de {SUJET} — OBLIGATOIRES

1. **Nommer l'unique élément rouge** dans le {SUJET}, et le rattacher à la
   main cachée (règle sémantique). Marquer son unicité (« a single… ») et ne
   donner au rouge **aucun support ambigu** : « red car tail-light » a produit
   une voiture entière rouge — préférer un objet dont le rouge ne peut pas
   déborder (lanterne, tampon, écharpe).
2. **Habiller pour exclure** : décrire positivement la tenue/les accessoires
   pour ne laisser aucune place à un rouge concurrent (les négations tiennent
   mal).
3. **Jamais de rouge atmosphérique** dans les ambiances : la lueur rouge est
   un objet localisé, pas une lumière de scène.
4. **Verrouiller l'expression** quand elle porte le sens : « expressionless »
   pour un masque vide, sans quoi Flux improvise (sourire apparu au hi-res).

### {SUJET} courants

> Les {SUJET} vivent dans `tools/pulp/jobs.tsv` — ils sont reproduits ici pour
> la lecture. En cas d'écart, le fichier gagne.

**Fond perdu 16:9 (v2.4)**

- **coldopen-02-presence** (`2a-wide`) : `a giant looming silhouette of a man
  in a plain black fedora with a black hatband, wearing a single red scarf,
  towering over a small ordinary man walking below who does not notice him,
  flat cream sky`
  — le chapeau est **décrit en noir explicitement** (règle 2) : le tirage
  s303 avait produit un bandeau rouge surnuméraire, qu'il avait fallu patcher.
- **coldopen-05-rue-pluie** (`2b-wide`) : `a rain-slicked Paris street at
  night seen from a low angle, tall haussmannian facades as flat black
  silhouettes, two or three windows glowing pale cream, a black vintage car
  parked along the curb, one single small red street lantern glowing, its
  reflection in the wet pavement`

**Objet crème 4:5**

- **ident-01-m4dz** (`2a`, mode `edit`) : `a man in his thirties in a plain
  black t-shirt, bust portrait in three-quarter view, short undercut hair
  with a dark textured top, a full dark moustache and short beard, a pair of
  black leather aviator goggles pushed up on his head, a small dark stud
  earring, black wire-framed round sunglasses whose mirrored lenses are the
  single blood-red element, hiding his eyes completely, impassive expression,
  plain background`

  **Rattachement à la main cachée** : les verres cachent le regard. On ne voit
  pas ce qu'il regarde — l'intervention invisible, au même titre que la plume
  de Maquet ou la barre de Lish. Le speaker entre dans la galerie des accusés
  dès la slide de signature ; **ce n'est jamais commenté sur scène.**

  Goggles et boucle d'oreille sont **décrits en noir** (règle 2) : gardés pour
  l'identité, mais sans quoi Flux les colore et produit trois rouges.

- **cas-01-dumas-maquet** : `a distinguished 19th century writer in a black
  tailcoat and bow tie, bust portrait, a massive featureless dark silhouette
  looming behind him, holding one single red quill feather`
- ~~**cas-03-vian-sullivan**~~ *(asset supprimé le 2026-08-31 — station retirée ; prompt conservé comme trace de workflow)* : `a confident man in a plain black suit and white
  shirt with a single red tie, holding a blank white expressionless theater
  mask with empty black eyes and no mouth beside his face, bust portrait,
  plain background`

### 3bis. Génération conditionnée par une image (mode `edit`)

Un portrait dont l'identité doit être reconnaissable ne se décrit pas : il se
**conditionne**. `mflux-generate-flux2-edit --image-paths <photo>` tourne sur
`flux2-klein-4b` — **le même modèle que toute la série**, ce qui est la raison
du choix. Écartés : `mflux-generate-kontext` (efficace en restyle, mais base
FLUX.1, donc un autre génome que les six autres portraits), `redux` (fait
l'inverse du besoin).

Quatre règles :

1. **Forcer les dimensions** (`--width` / `--height`) : le défaut est la
   taille de la source. Le portrait doit rejoindre le format de sa famille.
2. **Recadrer la référence AU RAPPORT DE LA SORTIE — non négociable.** Le
   modèle mappe la référence sur le cadre de sortie : une photo carrée servie
   à un cadre 4:5 produit un visage **anamorphosé**, étiré verticalement de
   1,25×. Constaté sur les quatre tirages d'une même série, donc pas un
   accident de seed. La référence de `ident-01-m4dz` est un recadrage 864×1080
   (4:5) d'une photo 1080×1080, centré sur la tête.
3. **La photo source viole la palette.** Une photo ordinaire porte des tons
   chair et un éclairage coloré, exactement ce que la clause `no flesh tones`
   interdit — et les modèles d'édition conservent volontiers la colorimétrie
   d'entrée. Si le tirage brut ne tient pas, désaturer la source en amont.
4. **Repli si l'identité domine encore** : `mflux-generate-flux2 --image-path
   --image-strength` — `flux2-edit` n'a pas de curseur de force, il n'existe
   que sur l'img2img.

Les images de référence **ne sont pas versionnées** (`tools/pulp/sources/`,
ignoré) : l'artefact canonique est le PNG produit, pas la source personnelle.

## 4. Workflow de tirage

### Outillage — `tools/pulp/` (v2.4)

Le générateur est **versionné dans le repo**. Il vivait dans `~/.cache/`
(`pulpvenv/`, `pulp-final.sh`, `pulp-retirage-hires.sh`) : aucun re-tirage
n'était reproductible par le repo seul, et la mémoire du chantier ne survivait
qu'en prose ici.

```
tools/pulp/
  bootstrap.sh    venv + mflux épinglé + pull du modèle. Idempotent.
                  Vérifie l'accès au dépôt HuggingFace AVANT tout batch —
                  un dépôt gated est le seul blocage dur du chantier.
  generer.sh      lit jobs.tsv, route le binaire selon `mode`, reprend par
                  fichier existant, journalise le pic mémoire MLX.
  jobs.tsv        MÉMOIRE DU CHANTIER : nom, mode, tail, dimensions, seeds,
                  référence, {SUJET}.
  tails/          les quatre prompts figés + le préfixe. SOURCE DE VÉRITÉ.
  recadrer.py     retire le bord de feuille des assets fond perdu (§4ter).
                  `--mesurer` seul vérifie le critère §5.13.
  eteindre.py     éteint les rouges surnuméraires (§4bis).
                  `--inventaire` seul vérifie le critère §5.1.
  sources/        images de référence du mode `edit`   — ignoré par git
  tirages/        brouillons, avant sélection           — ignoré par git
```

Trois couches, trois durées de vie : le venv est jetable et reconstructible ;
`jobs.tsv` et `tails/` sont la mémoire ; les PNG de `public/images/` sont
canoniques (§0bis-3).

Sondes recommandées avant un batch à résolution neuve : un tirage isolé pour
relever le pic mémoire (`PULP_SEEDS=… tools/pulp/generer.sh <nom>`), et la
relecture du même tirage pour vérifier le critère §5.13.

### Procédure

1. Générer **3–4 seeds** par asset, **à la résolution finale** (§0bis-4).
2. Sélectionner par les critères §5 — la sélection est le mécanisme principal
   d'application de la règle du rouge, pas le prompt.
3. Consigner le seed retenu (table §0, suffixe de fichier) — traçabilité,
   pas reproductibilité (§0bis).
4. Les accidents heureux (rouge-main-cachée, figure contenue, barre-silence,
   arbre combinatoire) se *sélectionnent* et se documentent ; ils ne se
   forcent pas dans le prompt.

### 4bis. Patchs numériques — mécanique légitime

Quand un tirage est excellent à un défaut ponctuel près, un patch ciblé est
préférable à un re-tirage (qui rejoue toute la loterie). Conditions : le
patch corrige une violation de règle (rouge surnuméraire), il est local, et
il est indiscernable d'un tirage natif. Méthode : masque colorimétrique +
spatial (sélection des pixels rouges dans la zone fautive), recoloration en
encre `#0f0d0b`. Précédent : bandeau de chapeau de presence-s303 (5 227 px),
patché puis inversé — voir `coldopen-02-presence-s303-patch.png` et
`...-patch-dark.png`. Un rouge posé sur une masse noire peut aussi être
*éteint* de cette façon (il disparaît dans la silhouette).
Toujours patcher la source crème, puis re-dériver les modes.

**Outil (v2.4)** : `tools/pulp/eteindre.py`.

```
python tools/pulp/eteindre.py entree.png --inventaire       # liste les amas rouges
python tools/pulp/eteindre.py e.png s.png --sauf X,Y,L,H    # garde UN amas
python tools/pulp/eteindre.py e.png s.png --zone X,Y,L,H    # éteint UNE zone
```

Sélection colorimétrique **douce** — chaque pixel reçoit un degré
d'appartenance au rouge, pas un masque binaire qui laisserait un liseré — puis
remplacement par l'équivalent neutre assombri. Un halo rouge devient un halo
gris sombre : **une lampe éteinte, pas un trou noir**.

`--sauf` est la forme utile quand l'élément à garder est unique et les
parasites nombreux. Cas d'école, `rue-pluie` : le {SUJET} demande une seule
lanterne, mais une rue de Paris en porte plusieurs et le modèle les allume
toutes, feux arrière de la voiture compris. **Trois formulations successives
n'y ont rien changé** — §3.2 pris trois fois de suite. Le tirage `s913` portait
29 amas rouges ; `--sauf` autour de la seule lanterne héros en laisse **un**.
Vérification par `--inventaire` après coup : le compte doit tomber à 1.

### 4ter. Recadrage du bord de feuille — assets de fond perdu (v2.4)

**Le prompt figé nomme un objet imprimé** (« a vintage 1930s pulp detective
magazine **cover painting** »). Flux dessine donc une feuille : marge, coins
usés, rousseurs de bord. En 4:5 cette marge était mangée par le `object-fit:
cover` du layout, et personne ne la voyait. **En 16:9 natif elle est entière à
l'écran** et l'image se lit comme une photo encadrée au lieu d'une ambiance.

Deux sondes ont montré qu'**aucune formulation négative ne défait ce nom** —
`no border, no margin, no visible sheet edge` a réduit la marge de moitié
(40 px → 20 px) sans la supprimer. C'est l'avertissement de §3.2 pris en
flagrant délit. Retirer le nom coupable dériverait le style des ambiances par
rapport à celui de la galerie : refusé.

Correction en aval, même doctrine que §4bis :

```
python tools/pulp/recadrer.py entree.png sortie.png --cadrer 16:9
python tools/pulp/recadrer.py entree.png --mesurer     # vérifie §5.13
```

**Détection par crête de gradient**, et pas autrement :

- un seuil de luminance ne voit rien sur un sujet posé sur aplat crème — la
  marge y est crème sur fond crème ;
- une mesure de platitude échoue aussi : la marge n'est pas plate, elle porte
  rousseurs, usure et plis, sa variance vaut celle d'une zone d'ombre.

Ce qui est fiable est géométrique : la frontière feuille/illustration est une
droite nette qui court sur toute la longueur du bord. L'outil somme le
gradient par colonne et par ligne, cherche la crête dans la bande extérieure
(12 %), et refuse de couper si aucune crête ne domine le gradient médian d'un
facteur 2,5. Mesures constatées : 15 à 29 px selon le bord et le tirage — d'où
un recadrage **mesuré par image**, jamais une valeur fixe.

**Ordre dans la chaîne** : tirage → sélection §5 → *recadrage* → patch §4bis
éventuel → dérivation §7. Le recadrage vient avant le patch : inutile de
corriger un rouge situé dans une marge qui va disparaître.

## 5. Critères de sélection des tirages

Rejeter tout tirage qui présente :

1. plus d'un élément rouge, ou du rouge en masse/atmosphérique/sans
   signification (hi-res : Dumas deux plumes, presence bandeau — patché,
   rue-pluie voiture rouge + sources multiples) ;
2. duplication du sujet ou figure parasite ;
3. tons chair, ocres, dorés — ou dérive rose/orangée même localisée ;
4. rupture de style — photo, gravure, image-dans-l'image, dégradés aérographe ;
5. dérive de palette dans les ambiances : orange/ambre aux fenêtres, noirs
   bleu-gris, ciel gris clair affaiblissant les masses, dérive verte ;
6. fond parasite derrière un portrait — l'aplat crème doit rester plat ;
7. élément central absent, objet non tenu, ou **expression divergente du
   {SUJET}** (hi-res : sourire sur le masque vide de Vian) ;
8. ombre portée douce ou absente sur les objets-figures ;
9. sujet trop petit, flottant dans le vide ;
10. fausses déchirures ou vieillissement traversant le sujet (les plis dans
    le *ciel* des ambiances relèvent de la décision ouverte §2) ;
11. fond si dense en trame qu'il concurrence la typo du tiers haut ;
12. pseudo-texte diégétique formant des mots lisibles à taille de projection.

**Assets de fond perdu uniquement (v2.4)** :

13. **bord de feuille non recadrable.** Un bord de feuille est *attendu* — le
    prompt nomme un objet imprimé, Flux dessine une feuille (§4ter). Ce qui
    est rejeté, c'est le tirage dont le bord ne se laisse pas retirer :
    frontière floue ou courbe, coin arraché entrant dans le sujet, ou marge
    au-delà de 12 % d'une dimension. Vérification : `recadrer.py --mesurer` ;
14. **composition écrasée en bandeau** — le modèle a joué un cadrage portrait
    dans un cadre horizontal : sujet comprimé, masses tassées au centre, tiers
    latéraux vides sans intention.

**Génération conditionnée (mode `edit`) — critères renforcés** : les
critères 3 (tons chair) et 5 (dérive de palette) sont les plus exposés,
puisque la photo source les porte par construction. Un tirage `edit` qui garde
la moindre carnation ou la dominante d'éclairage de la source est rejeté, quel
que soit son intérêt par ailleurs.

## 6. Intégration Slidev — stratégie A (défaut) : l'illustration comme objet

Inchangée. L'image n'est jamais affichée en fond perdu ni inversée en mode
light : rectangle de papier crème posé sur le fond courant.

Composant wrapper `PulpFigure.vue` :

- conteneur : fond `--paper` (valeur du mode courant), padding ~0.5rem,
  ombre portée dure décalée (`box-shadow: 6px 6px 0 rgba(0,0,0,.35)` en
  dark, plus douce en light), rotation aléatoire légère et stable par asset
  (−1.5° à +1.5°, seedée sur le nom de fichier) ;
- l'image garde son crème natif (#ede3d0 vs #f2e7d0, écart voulu) ;
- props : `src`, `caption?` (Sinzano sous l'objet), `tilt?`.

Chevauchement typo : titre Sinzano dans le tiers haut, le sujet peut mordre
sur le titre (z-index titre < figure).

### 6bis. Fond perdu — deux placements du texte (v2.4)

Le layout `ambiance` accepte un `variant` en frontmatter :

| variant | placement | pour |
|---|---|---|
| `bande` (défaut) | bandeau papier en bas, pleine largeur | le cold open — trois lignes de récit |
| `colonne` | colonne dans le **tiers gauche** | une slide qui porte un titre et plusieurs blocs |

`colonne` n'est pas un choix esthétique arbitraire : les prompts wide
réservent explicitement « the left third left as quiet aged cream space ». Sur
un tirage `2a-wide`, le sujet occupe la moitié droite et la gauche est vide
**par construction** — la colonne s'y loge sans jamais recouvrir le sujet.
Vérification avant intégration : mesurer l'occupation d'encre dans les 38 %
gauches du tirage retenu (elle doit rester sous ~1 %).

La colonne fait 38 % et non 33 % : le tiers du prompt est une consigne de
composition picturale, pas une garantie au pixel.

## 7. Modes dark — mécanique par famille d'assets

Le négatif ne préserve le sens que si le fond est un aplat neutre — le
critère de routage est **le fond de l'image, pas la section du talk** :
presence est une ambiance à thèse mais son aplat crème en fait un candidat
au négatif (correction v2.3 ; le `--cale-noir` n'y faisait qu'un ajustement
cosmétique).

| asset | mécanique |
|---|---|
| **objet crème** (galerie des cas, `ident-01-m4dz`) | **aucune dérivation** — l'objet garde son crème dans les deux modes (§6) |
| fond perdu, sujet sur aplat crème (`presence`) | **négatif B** — sur la source *patchée* le cas échéant |
| fond perdu, scène de nuit (`rue-pluie`) | **usage direct + `--cale-noir`** |

**Ordre non négociable** : patcher d'abord la source crème (§4bis), dériver
ensuite. Une dérivation produite avant le patch est à refaire.

### 7a. Négatif B — inversion sérigraphique

`python inverser_mode.py entree.png sortie-dark.png [--dur] [--puissance N]`

| encre source | cible dark |
|---|---|
| crème papier | `#0f0d0b` |
| noir d'encre | `#ede3d0` |
| rouge sang | `#e11d1d` |

Validés : Ern Malley, presence (16:9, s801).
Interdit sur les scènes de nuit : inverser l'obscurité produit un jour délavé
(planche v2).

**Garde de saturation — corrige un défaut structurel (v2.4).** L'ancre rouge
`#b3141c` est à **mi-luminance** : en distance RGB pure, un demi-ton chaud de
trame (~140,120,105) en est plus proche que du crème ou de l'encre. Sur une
image à masses plates (`presence`) ça se voyait à peine ; sur une image
entièrement tramée (`fabrique`) ça repeignait la moitié du sujet en piqueté
rouge — **18 067 px parasites contre 4 800 px de vrai ruban**.

`--puissance` n'y pouvait rien : ces pixels étaient *réellement* classés
rouges, pas mal mélangés. L'outil exige donc désormais que le canal R domine
réellement (`SATURATION_MIN`, transition douce pour éviter le liseré) avant
que l'ancre rouge entre en jeu. Mesures après correction : parasites tombés à
**1 249 px** sur la fabrique, accents intacts sur `presence` et `malley`.

**Bug corrigé au passage** : `1 / (dist + 1) ** puissance` débordait en
float32 dès `--puissance ≈ 20` — `inf` → `NaN` → cast invalide → **image
cassée sans aucune erreur affichée**. Le calcul passe en log (stable pour
toute puissance). Toute dérivation produite avec une puissance ≥ 20 avant ce
correctif est à refaire.

`--puissance` reste utile sur les rousseurs de bord : sur `presence-s801`, le
champ noir passe de 965 px parasites au défaut (4) à 307 à 14.

### 7b. Scènes de nuit — calage du point noir

`python inverser_mode.py entree.png sortie-calee.png --cale-noir
[--percentile 0.5]`

Remap linéaire par canal vers `#0f0d0b`, purge la dominante bleue, aucune
inversion. Validé sur les livrables hi-res (point noir mesuré exactement sur
15/13/11). **À refaire sur le re-tirage de rue-pluie.**

## 8. Nommage des assets

`{section}-{motif}-{slug}-s{seed}.png`
+ `-patch.png` (source patchée, devient canonique)
+ `-dark.png` (négatif B) ou `-cale.png` (scène de nuit calée).
Ex. : `coldopen-02-presence-s303-patch-dark.png`.

`{section}` : `cas` (galerie), `coldopen` (section 1), `ident` (signature du
speaker). Pour `coldopen` et `ident`, le nombre est le **numéro de motif** §1 ;
pour `cas`, c'est un numéro d'ordre historique. Divergence héritée, conservée
pour ne pas casser les noms existants.

## 9. Reste à faire (chantier visuel)

1. Sondes avant batch 16:9 : pic mémoire à 1280×720, puis relecture du même
   tirage au critère §5.13 (bord de feuille). Replis prévus : 1024×576, et
   itération de la clause de bord.
2. Re-tirage 16:9 ×2 (`presence`, `rue-pluie`) puis dérivations §7 —
   `--cale-noir` **à refaire** sur le rue-pluie retenu.
3. Tirage `ident-01-m4dz` en mode `edit` (§3bis), deux bras : source brute et
   source désaturée.
4. Vérification Oulipo à taille de projection (critère 12).
5. Validation des plis en fond perdu sur projecteur réel (décision ouverte §2)
   — la clause « edge to edge » des prompts wide ne supprime pas les plis,
   seulement le bord de feuille : la question reste ouverte.
