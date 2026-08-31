<!-- Exergue — les moments où une seule phrase occupe la slide, en Sinzano,
     centrée, avec attribution optionnelle via le frontmatter `source`.

     Le VARIANT décrit le RÔLE DU MOMENT, pas la longueur du texte :

     titre      le titre du talk lui-même. Il tombe au beat 7 du cold open,
                sur le pivot vers l'IA. Un seul dans le deck.
     aphorisme  (défaut) la phrase à emporter d'une strate ou d'une section.
                Dix slides. Traitement historique, inchangé.
     chute      les derniers mots, qui closent le talk.

     Pourquoi des variants : le layout a dérivé de deux sections à six, et
     servait le titre de la keynote, les aphorismes de strate et les derniers
     mots de Gary AU MÊME TRAITEMENT. Les deux pics du talk étaient donc ses
     slides les plus faibles. -->
<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter } = useSlideContext()
</script>

<template>
  <div
    class="slidev-layout exergue pulp-bg"
    :class="`exergue--${$frontmatter.variant || 'aphorisme'}`"
  >
    <blockquote class="exergue__quote">
      <slot />
    </blockquote>
    <p v-if="$frontmatter.source" class="exergue__source">
      <span class="cartouche">{{ $frontmatter.source }}</span>
    </p>
  </div>
</template>

<style scoped>
.exergue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.exergue__quote {
  font-family: var(--font-title);
  line-height: 1.1;
  margin: 0;
}
.exergue__source {
  margin-top: var(--space-md);
  color: var(--color-muted);
  font-size: var(--text-lg);
}

/* ── aphorisme (défaut) : le traitement historique, au trait près ───── */
/* Ne PAS toucher : dix slides déjà réglées en dépendent, dont les quatre
   aphorismes de strate de la section 5. */
.exergue--aphorisme .exergue__quote {
  font-size: var(--title-2);
  max-width: 24ch;
}

/* ── titre : le titre du talk, et rien d'autre ──────────────────────── */
/* Il doit dominer les aphorismes sans surcharge : la taille fait tout le
   travail, un seul filet d'accent le pose. */
.exergue--titre .exergue__quote {
  font-size: var(--title-display);
  max-width: 16ch;
  line-height: 0.95;
}
.exergue--titre .exergue__quote::after {
  content: '';
  display: block;
  width: 6rem;
  border-top: 3px solid var(--color-accent);
  margin: var(--space-lg) auto 0;
}

/* ── chute : les derniers mots ──────────────────────────────────────── */
/* Plus grand qu'un aphorisme, plus petit que le titre : la fin répond au
   début sans le concurrencer. La slide est un fond de scène — le speaker
   dit ces mots face salle, sans regarder l'écran — donc pas d'effet, juste
   du poids et de l'air. L'attribution est détachée par un filet : c'est ce
   qui signe la citation comme un point final. */
.exergue--chute .exergue__quote {
  font-size: var(--title-1);
  max-width: 20ch;
}
.exergue--chute .exergue__source {
  margin-top: var(--space-lg);
  padding-top: var(--space-md);
  border-top: 2px solid var(--color-rule);
}
</style>
