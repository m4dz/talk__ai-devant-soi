# Tasks

## 1. Document d'intention (fait en premier)

- [x] 1.1 `CLAUDE.md`, Trame point 0 : reformuler l'attente en oscilloscope —
      tracé fixe débordant, spot lumineux + traîne qui balaie, forcée sombre ;
      au clic le battement disparaît mais le balayage continue sur un plat.
- [x] 1.2 `CLAUDE.md`, section Illustrations : pour l'attente, retirer « les
      tokens donnent les deux modes sans second fichier » (mono-mode sombre) et
      la mention de la trame sur le tracé.

## 2. Motif — `slides/components/Cardiogramme.vue`

- [x] 2.1 Tracé fixe débordant (x −260 → 2180), plus de défilement.
- [x] 2.2 Spot + traîne = deux tirets sur le même `<path>`, `pathLength=1000`
      commun ; spot en tête, traîne derrière.
- [x] 2.3 Bouclage hors champ (débordement + découpe viewport), sans fondu.
- [x] 2.4 Halo `filterUnits="userSpaceOnUse"` (région fixe, sinon ligne plate
      dégénère).
- [x] 2.5 Trame halftone du tracé retirée (masque + pattern supprimés).
- [x] 2.6 Au clic : `chemin` bascule sur le plat, l'animation continue.

## 3. Mode sombre absolu

- [x] 3.1 `theme/styles/tokens.css` : utilitaire `.slidev-layout.sombre`
      (rebranche la palette sombre, ne duplique rien).
- [x] 3.2 `slides/pages/00-attente.md` : `class: sombre` en frontmatter.

## 4. Specs

- [x] 4.1 `deck-layouts` : MODIFIED Slide d'attente (oscilloscope, sombre
      absolu, clic → balayage continue plat, pas de trame).
- [x] 4.2 `deck-theme` : ADDED Sombre absolu opt-in par slide.

## 5. Vérification

- [x] 5.1 État vivant : spot + traîne, battement rendu, glissant sur le pic.
- [x] 5.2 État post-clic : balayage continue sur ligne plate.
- [x] 5.3 Sombre forcé sous mode global clair (capturé).
- [x] 5.4 `openspec validate attente-oscilloscope --strict` passe.
