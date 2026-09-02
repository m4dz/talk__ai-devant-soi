# Design

## 1. Pourquoi le 16:9 oblige à toucher aux prompts figés

Le problème n'est pas la résolution, c'est la **composition**. Les tails §2
portent trois clauses qui n'ont de sens qu'en cadre portrait :

| clause 4:5 | ce qu'elle devient en 16:9 natif |
|---|---|
| `the subject large in the frame filling the lower two thirds` | sujet écrasé en bandeau horizontal |
| `the upper third left as quiet aged cream space` | conflit : le bandeau texte de `ambiance.vue` est **en bas** |
| `…foxing spots and worn edges` | le bord de feuille, jusqu'ici croppé par `cover`, devient **entièrement visible** → lit comme une photo encadrée, plus comme une ambiance |

Trois sorties étaient possibles : variante wide des prompts ; déplacer le
bandeau texte en haut ; abandonner le fond perdu pour un `contain` sur fond
crème. **Retenue : la variante wide des prompts.** Le bandeau en haut aurait
changé le rythme visuel de tout le cold open pour éviter une ligne de prompt ;
le `contain` aurait tué l'immersion, qui est le seul effet que la section 1
cherche.

### Confinement

La variante wide **ne touche que le cold open**. La galerie des cas et le
portrait du speaker restent sur `2a`, à 768×960, en objet crème. Le tail `2b`
devient orphelin (plus aucun asset 4:5 en ambiance) : il est **conservé** dans
le document, pas supprimé — une ambiance en objet reste un usage légitime.

```
2a       (4:5, objet crème)   FIGÉ, intact  → cas-01..06, ident-01-m4dz
2b       (4:5, objet crème)   FIGÉ, orphelin (conservé)
2a-wide  (16:9, fond perdu)   NOUVEAU       → coldopen-02-presence
2b-wide  (16:9, fond perdu)   NOUVEAU       → coldopen-05-rue-pluie
```

### Le diff exact des tails

Trois clauses, identiques dans les deux tails wide :

- `the subject large in the frame filling the lower two thirds`
  → `a wide horizontal composition, the subject large in the frame occupying
  the right half and running from top to bottom`
- `the upper third left as quiet aged cream space`
  → `the left third left as quiet aged cream space, the lower fifth kept
  uncluttered`
- `visibly aged pulp paper with fold creases, foxing spots and worn edges`
  → `visibly aged pulp paper with fold creases and foxing spots, the aged
  paper texture running edge to edge, no border, no margin, no visible sheet
  edge`

Pour `2b-wide`, `the upper third left as quiet dark space` **reste** : c'est le
ciel, il tient en horizontal.

La troisième clause est la seule vraiment incertaine — c'est une négation, et
§3.2 rappelle que « les négations tiennent mal ». D'où le probe P2 (§4).

## 2. Résolution

Multiples de 16 exigés (VAE ÷8, patch ×2). Candidats 16:9 exacts :

| dimensions | pixels | vs 768×960 | verdict |
|---|---|---|---|
| 1024×576 | 590 k | 0,80× | repli si P1 échoue |
| **1280×720** | 921 k | 1,25× | **retenu** |
| 1536×864 | 1,33 M | 1,80× | écarté — marge trop mince sur 18 Go |

1920×1080 est exclu : 1080 n'est pas multiple de 16.

Référence mesurée (`~/.cache/pulp-retirage-hires.log`) : `Peak MLX memory:
14.94 GB` à 768×960, q4, 6 steps, ~52-70 s le tirage, sur M3 Pro 18 Go.
L'essentiel de ce pic est du poids, pas de l'activation — la montée à 1,25× de
pixels devrait passer, mais elle est **sondée avant le batch**, pas supposée.
Soupapes disponibles : `--mlx-cache-limit-gb`, `--low-ram`.

**Rappel §0bis** : le seed ne survit pas au changement de résolution. Chaque
tirage 16:9 est un tirage neuf, re-sélectionné intégralement par les critères
§5. Aucune validation 768×960 n'est transférable. Nouvelles bases de seeds :
`presence` 800-803, `rue-pluie` 900-903, `ident-01-m4dz` 810-813.

## 3. Portrait du speaker

### Outil

`mflux-generate-flux2-edit --image-paths <photo>` sur `flux2-klein-4b` —
**même modèle que toute la série**. Les alternatives ont été écartées :
`mflux-generate-kontext` est efficace en restyle mais tourne sur FLUX.1, donc
un autre génome que les six autres portraits ; `redux` fait l'inverse du
besoin ; `flux2 --image-path --image-strength` reste le **repli** si l'édition
conditionnée laisse survivre la colorimétrie de la photo (`flux2-edit` n'a pas
de `--image-strength`, le curseur n'existe que là).

Dimensions forcées à **768×960** (le défaut serait la taille de la source) :
le portrait rejoint la galerie, même format, même plafond mémoire connu.

### `{SUJET}`

Règles §3 appliquées — rouge nommé, unicité marquée, rattaché à la main
cachée ; habillage positif pour exclure les rouges concurrents ; expression
verrouillée.

```
a man in his thirties in a plain black t-shirt, bust portrait in three-quarter
view, short undercut hair with a dark textured top, a full dark moustache and
short beard, a pair of black leather aviator goggles pushed up on his head, a
small dark stud earring, black wire-framed round sunglasses whose mirrored
lenses are the single blood-red element, hiding his eyes completely,
impassive expression, plain background
```

**Rattachement à la main cachée** : les verres cachent le regard. On ne voit
pas ce qu'il regarde — l'intervention invisible, au même titre que la plume de
Maquet, la barre de Lish, l'encre de Racter. Le speaker entre dans la galerie
des accusés à la minute 6, sans qu'un mot le signale.

Goggles et boucle d'oreille sont **décrits explicitement en noir** : gardés
pour l'identité (décision du speaker), mais sans quoi Flux les colore et
produit trois rouges.

Difficulté connue : la photo source est éclairée en néons magenta/violet, en
violation directe de `no flesh tones` et de la palette stricte. Les modèles
d'édition conservent volontiers la colorimétrie source. D'où le probe P3, à
deux bras : photo brute contre photo désaturée en amont.

## 4. Ordre des probes

Chaque tirage coûte ~60 s (768×960) à ~85 s estimés (1280×720). Vingt tirages
sont prévus au batch. Trois runs les précèdent :

```
P0  pull black-forest-labs/FLUX.2-klein-4B
      poids purgés du cache HF ; aucun token HF en cache. Repo Apache 2.0,
      a priori non gated — à vérifier là, c'est le seul blocage dur possible.

P1  1 tirage 1280×720, tail 2b-wide → lire « Peak MLX memory »
      > ~17 Go  → --mlx-cache-limit-gb 12, sinon repli 1024×576

P2  MÊME tirage, relu    → le bord de feuille apparaît-il ?
      s'il apparaît, itérer la clause AVANT d'engager les 8 tirages du cold open

P3  ident, 2 bras        → photo brute vs photo désaturée
      lequel tient « no flesh tones » ?
```

P1 et P2 sont le même tirage lu deux fois. Trois runs, ~5 min, avant
d'engager le batch.

## 5. Chaîne aval, par asset

```
presence   tirage ×4 → §5 → [patch §4bis si rouge surnuméraire]
                          → inverser_mode.py                → -dark.png
rue-pluie  tirage ×4 → §5 → inverser_mode.py --cale-noir    → -cale.png
m4dz       tirage ×4 → §5 → (rien : objet crème, deux modes)
```

Le portrait ne demande **aucune dérivation dark** : la stratégie A garde
l'objet en crème dans les deux modes.

## 6. Layout `signature`

**Décision : un layout dédié, pas une variante de `propos` ni un détournement
de `case-card`.**

- `propos.vue` est le layout le plus partagé du deck (plain / question /
  inventaire / declaration). Lui greffer un mode flex-row pour un one-shot met
  toutes ces slides sous risque de régression.
- `case-card.vue` porte un **modèle de contenu** — `balance`, `name`, `work`,
  `question` : la grammaire du jeu du seuil. La signature n'est pas un cas.
  La réutiliser obligerait à mentir sur les champs ou à brancher partout.

« Variante des layouts des cas » se tient par **héritage visuel**, pas par
partage de code : même `PulpFigure`, même `flex-direction: row`, mêmes tokens
de gap, même plafond de hauteur sur l'objet. La salle voit un air de famille ;
les fichiers n'ont pas à être le même fichier. Le miroir est la seule
différence structurelle : **figure en premier**, corps en slot ensuite.

Point d'attention en intégration : « Matthias « m4dz » Dugué » en Sinzano sur
~55 % de largeur passera sur deux lignes. `case-card` redescend déjà son `name`
à `--title-3` en présence d'une figure — même traitement.

## 7. Slide d'attente

### Pourquoi pas mflux

1. Flux ne trace pas une ligne fine et exacte sur du noir — il peint un
   gribouillis. Le sujet **est** la précision du trait : c'est du vectoriel.
2. L'objet n'appartient pas au génome pulp (ni gouache, ni papier vieilli, ni
   crème). Un ECG *peint* serait l'inverse de l'objet froid recherché. Le deck
   assume déjà ce registre austère (Racter, slide d'encre sans portrait).
3. Un PNG imposerait une dérivation dark, et `inverser_mode.py` est calibré
   pour la bichromie pulp, pas pour ça. En SVG, les tokens font le travail
   dans les deux modes, sans second fichier.
4. Résolution infinie : un trait net sur n'importe quel projecteur, contre un
   PNG 1280 upscalé à 1920.
5. Une slide d'attente tourne dix minutes pendant que la salle s'installe. Un
   PNG figé ne fait pas lever les yeux.

Le fichier n'est pas moins « local » : la thèse du talk vise le cloud, pas le
raster.

### Composition

```
                     viewBox 0 0 1920 1080
┌───────────────────────────────────────────────────────┐
│                                                       │
│                          ╱╲                           │
│                         ╱  ╲                          │
│  ───────────────╱╲─────╱    ╲──────────────────────   │  y = 720
│                  ╲╱     ╲  ╱                          │
│                          ╲╱                           │
│                                                       │
└───────────────────────────────────────────────────────┘
```

**Deux traits, pas un.** Le plat en `var(--color-ink)`, le seul battement en
`var(--color-accent)`, le fond en `var(--color-paper)`. Un unique élément
rouge : la règle sémantique du deck tient, et elle dit la bonne chose — le
battement est la seule vie de l'image, et c'est lui qui s'arrête.

Les deux modes sortent des tokens : encre sur crème en clair, crème sur encre
en sombre. Aucun fond noir codé en dur.

### Trame halftone du tracé

Le fond reçoit déjà la trame et le grain par `.pulp-bg` (porté par le layout
`scene`). Le **tracé** doit porter la sienne, comme les illustrations où la
trame court sur toutes les zones tonales. Mécanique : masque SVG tuilé de
points appliqué au groupe du tracé.

⚠️ **Jamais de `mix-blend-mode`** — la règle est déjà écrite dans
`theme/styles/pulp.css` (bombe de compositing sur les slides montées). Un
masque sur un trait fin couvre une surface minuscule ; c'est acceptable là où
un blend plein cadre ne l'est pas.

### Animation et piège de performance

Le tracé défile, le battement passe périodiquement. Un pas de clic Slidev tue
le battement et la ligne s'aplatit — l'entrée du speaker.

⚠️ **Slidev monte toutes les slides au chargement.** Une animation infinie sur
la slide 1 tournerait pendant les cinquante minutes du talk, invisible et
coûteuse. Elle SHALL être armée par `onSlideEnter` et désarmée par
`onSlideLeave`, et rester une transformation composée GPU — jamais une
animation de `stroke-dashoffset` sur un path plein cadre.

Le pas de clic suit la règle du deck : toute action scénique passe par
`v-click` (télécommande), jamais par un raccourci clavier ni un timecode.

### Note factuelle

Gary s'est tiré une balle rue du Bac, sans moniteur. L'ECG est un registre,
pas un fait : il dit « un corps » sans rien affirmer. Consigné une fois,
non commenté sur scène.

## 8. Numérotation

La slide d'attente devient la slide 1 : tout le deck glisse de +1.

**Ce que ça n'affecte pas.** Aucun fichier du repo ne stocke un numéro de
slide — vérifié par balayage sur `docs/`, `openspec/specs/`, `CLAUDE.md`,
`CREDITS.md`, les layouts et le contenu. Les slides se référencent par
`layout`, `src` et frontmatter, jamais par rang. Un décalage de numérotation
n'a donc **aucune conséquence dans le code**, et il n'y a rien à
re-synchroniser après coup — ni pour ce changement, ni après un autre.

**Ce que ça affecte.** Uniquement des artefacts externes au repo : les
planches contact de travail (régénérables à la demande) et les repères que le
speaker a en tête. C'est la seule raison de mentionner le décalage.

## 9. Trois couches, trois durées de vie

```
venv mflux (~/.cache/pulpvenv)   jetable, reconstructible par bootstrap.sh
jobs.tsv + prompts               versionnés — c'est la mémoire du chantier
PNG dans public/images/          canoniques (§0bis-3 : l'artefact est le PNG,
                                 pas le seed)
```

La photo source du portrait est **ignorée par git** : le PNG pulp est
l'artefact canonique, la source personnelle n'a pas à voyager dans un repo de
talk destiné à être public. `jobs.tsv` reste rejouable par le speaker seul.
