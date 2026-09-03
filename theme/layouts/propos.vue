<!-- Propos — ce que le speaker adresse à la salle.
     La variante décrit le CORPS, pas le titre : un titre interrogatif est
     compatible avec n'importe quelle variante (cf. « Et la clause ? », qui
     porte une question en titre et un inventaire en corps).

     plain       l'énoncé et son développement
     question    la question domine ; le VIDE sous la phrase est du matériau,
                 il rend la durée du silence visible
     inventaire  liste anaphorique aux entrées parallèles + chute optionnelle
     declaration le verdict : peu de mots, gros corps, calés au centre.
                 Reprend au trait près le corps de l'ancien layout `noir`
                 (54ch, text-xl, centré) pour que la bascule vers le
                 modificateur `negatif` ne change QUE la mécanique de
                 palette, pas la composition.

     Tailles en px/rem (unités canvas) — jamais en vh. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div
    class="slidev-layout propos pulp-bg"
    :class="[
      `propos--${$frontmatter.variant || 'plain'}`,
      { 'propos--centered': $frontmatter.center },
    ]"
  >
    <div class="propos__corps">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.propos {
  display: flex;
  flex-direction: column;
}
.propos__corps {
  max-width: 58ch;
}

/* Opt-in `center: true` (frontmatter) : centre le CORPS sur la largeur de la
   slide. Le corps est un item flex sous `align-items: stretch` borné par
   max-width, donc calé à gauche par défaut ; `align-items: center` le ramène
   au centre. Sert la slide de lancement (bouton porteur du timer, centré). */
.propos--centered {
  align-items: center;
  text-align: center;
}

/* ── plain : l'énoncé et son développement ─────────────────────────── */
.propos--plain {
  justify-content: center;
}
.propos--plain :deep(h1) {
  font-size: var(--title-2);
  margin-bottom: var(--space-md);
}
.propos--plain :deep(p) {
  font-size: var(--text-lg);
  line-height: 1.5;
}

/* ── question : la question domine, le vide porte le silence ───────── */
/* Le contenu se cale dans le haut : l'espace laissé libre en bas n'est
   pas un défaut de remplissage, c'est la pause rendue visible. */
.propos--question {
  justify-content: flex-start;
  padding-top: 80px;
}
.propos--question .propos__corps {
  max-width: 36ch;
}
/* title-2 et non title-1 : les questions du talk sont longues (« à quel
   moment, exactement, avez-vous cessé de m'entendre ? »). En title-1 elles
   remplissaient toute la slide et supprimaient le vide qui porte le silence
   — l'inverse de l'intention. */
.propos--question :deep(h1) {
  font-size: var(--title-2);
  line-height: 1.1;
  margin-bottom: var(--space-md);
}
.propos--question :deep(h1)::after {
  content: '';
  display: block;
  width: 4rem;
  border-top: 2px solid var(--color-accent);
  margin-top: var(--space-md);
}
.propos--question :deep(p) {
  font-size: var(--text-lg);
  color: var(--color-muted);
  max-width: 44ch;
}

/* ── declaration : le verdict, énoncé sans titre ───────────────────── */
/* Pas de h1 : la phrase EST la slide. Se porte avec `class: negatif`, qui
   inverse la valeur relativement au mode — c'est ce qui remplace l'ancien
   layout `noir` à palette absolue, invisible en mode sombre. */
.propos--declaration {
  justify-content: center;
}
.propos--declaration .propos__corps {
  max-width: 54ch;
}
.propos--declaration :deep(p) {
  font-size: var(--text-xl);
  line-height: 1.35;
}

/* ── inventaire : entrées parallèles, la répétition EST l'argument ─── */
.propos--inventaire {
  justify-content: center;
}
.propos--inventaire :deep(h1) {
  font-size: var(--title-2);
  margin-bottom: var(--space-md);
}
/* Chaque entrée : même alignement, même poids, un filet qui les aligne. */
.propos--inventaire :deep(.entree) {
  font-size: var(--text-xl);
  line-height: 1.3;
  padding-left: var(--space-md);
  border-left: 2px solid var(--color-rule);
  margin-bottom: var(--space-sm);
}
.propos--inventaire :deep(.chute) {
  margin-top: var(--space-md);
  color: var(--color-accent);
  font-size: var(--text-lg);
  max-width: 52ch;
}
</style>
