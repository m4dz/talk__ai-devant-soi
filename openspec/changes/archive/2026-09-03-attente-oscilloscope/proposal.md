## Why

En répétition, le motif de la slide d'attente — tracé qui **défile** de droite
à gauche comme un convoyeur — se lit mal : le défilement n'est pas naturel, il
n'évoque rien. Le registre juste est celui d'un **oscilloscope** : un tracé
fixe qu'un spot lumineux parcourt, laissant une traîne de phosphore qui
s'éteint. C'est cohérent avec le cold open (mort de Gary, ligne cardiaque) et
ça donne à l'écran d'attente une présence d'instrument.

Trois défauts constatés à l'implémentation, qui font diverger le code de la
spec `deck-layouts` → **Slide d'attente** :

1. **Le défilement.** La spec ne l'imposait pas explicitement, mais l'impl le
   faisait. On le remplace par le balayage.
2. **La trame halftone sur le tracé** (imposée par la spec) **combat le halo**
   du spot et, techniquement, masquait le faisceau sur une ligne plate. Un
   faisceau d'oscilloscope rayonne, il ne s'imprime pas.
3. **Les deux modes.** La spec veut ligne encre + battement accent, produits
   dans les deux modes. Un oscilloscope est un instrument sur fond d'encre :
   on le force en **sombre absolu**, quel que soit le mode global. C'est une
   dérogation assumée au principe « deux modes de première classe », bornée à
   cette seule slide-instrument.

## What Changes

### Motif — `slides/components/Cardiogramme.vue`

- Le tracé ne défile plus : il est **fixe** et **débordant** (hors cadre de
  part et d'autre). Un **spot lumineux** (curseur en tête d'une courte traîne)
  le **balaie de gauche à droite** en boucle. Le tracé n'est **pas
  persistant** : rien avant le spot, rien après la traîne.
- Spot et traîne roulent sur **le même chemin** (deux tirets sur le même
  `<path>`, `pathLength` commun) — synchronisation garantie sur n'importe
  quelle géométrie, plate ou battante.
- **Bouclage hors champ** : le chemin déborde le cadre, le retour du spot se
  fait hors du viewport SVG (découpé) — pas de fondu, pas de saut visible.
- **Halo de phosphore** via filtre (flou gaussien fusionné), en
  `filterUnits="userSpaceOnUse"` — obligatoire, sinon la région par défaut
  d'une **ligne plate** (hauteur nulle) dégénère et l'élément ne peint rien.
- **Trame halftone retirée** du tracé (le fond porte la sienne).
- **Au pas de clic** : le battement disparaît mais **le balayage continue** sur
  une ligne devenue plate. L'oscilloscope tourne toujours, il n'écrit plus
  qu'un plat. (Avant : la ligne s'aplatissait et l'animation s'arrêtait.)

### Mode — sombre absolu (`theme/styles/tokens.css`, `slides/pages/00-attente.md`)

- Nouvel utilitaire `.slidev-layout.sombre` : force la palette sombre sur le
  sous-arbre d'une slide, quel que soit le mode global. Distinct de `.negatif`
  (relatif au mode). Ne duplique aucune valeur — rebranche la palette sombre.
- `00-attente.md` porte `class: sombre` en frontmatter.

### Document d'intention — `CLAUDE.md`

- Trame, point 0 : l'attente est un **oscilloscope** (spot + traîne, balayage),
  forcée sombre, le clic laisse le balayage continuer sur un plat.
- Illustrations : retirer « les tokens donnent les deux modes sans second
  fichier » pour l'attente (elle est mono-mode, sombre) ; retirer la trame du
  tracé.

## Impact

- Specs : `deck-layouts` (**MODIFIED** Slide d'attente), `deck-theme`
  (**ADDED** Sombre absolu opt-in par slide).
- Code : `slides/components/Cardiogramme.vue`, `slides/pages/00-attente.md`,
  `theme/styles/tokens.css`. Déjà implémenté et vérifié en répétition (les deux
  états, clic compris, capturés à l'écran).
- Hors scope : le raccourci de bascule global et les autres slides — inchangés,
  les deux modes restent la règle partout ailleurs.
