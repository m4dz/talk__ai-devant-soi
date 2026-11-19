<script setup lang="ts">
import { computed } from 'vue'
import { session } from '../lib/session'

// Plan du run lancé (`/runs/<id>/plan`, lu par genClient au lancement).
//
// Le texte est celui de l'AUTEUR : affiché VERBATIM, jamais réécrit, jamais
// tronqué. Seule la syntaxe de titre Markdown (`# `) est consommée pour la mise
// en forme ; tout le reste — numéros de liste compris — est rendu caractère
// pour caractère, en texte (jamais en HTML : le plan vient du réseau).
//
// Enrichissement pur : sans plan (pré-lancement, run sans plan, route en échec,
// lancement refusé), le composant ne rend RIEN — ni cadre vide, ni attente, ni
// message. Une fois posé, le plan ne bouge plus (cf. `setPlan`).

type Block = { kind: 'title' | 'line'; text: string } | { kind: 'gap' }

const HEADING = /^#{1,6}\s+/

const blocks = computed<Block[]>(() => {
  const text = session.plan
  if (!text) return []
  const out: Block[] = []
  for (const raw of text.replace(/\r\n?/g, '\n').trim().split('\n')) {
    const line = raw.trimEnd()
    if (!line.trim()) {
      if (out.length && out[out.length - 1].kind !== 'gap') out.push({ kind: 'gap' })
    } else if (HEADING.test(line)) {
      out.push({ kind: 'title', text: line.replace(HEADING, '') })
    } else {
      out.push({ kind: 'line', text: line })
    }
  }
  return out
})
</script>

<template>
  <Transition name="run-plan">
    <section v-if="blocks.length" class="run-plan" aria-label="Plan du chapitre">
      <template v-for="(b, i) in blocks" :key="i">
        <div v-if="b.kind === 'title'" class="run-plan__title">{{ b.text }}</div>
        <div v-else-if="b.kind === 'line'" class="run-plan__line">{{ b.text }}</div>
        <div v-else class="run-plan__gap" />
      </template>
    </section>
  </Transition>
</template>

<style scoped>
/* Même traitement que l'extrait de plan de la slide précédente (filet neutre
   à gauche, corps de texte) : c'est une sortie de la fabrique, pas un propos.
   Corps compact, encre atténuée : le bouton-timer reste le centre de la slide,
   et le plan de scène (titre + cinq lignes) tient sous lui dans le canvas. */
.run-plan {
  /* Corps réduit via un token en scope (même convention que diptyque-grille). */
  --rp-text: 0.95rem;
  --rp-gap: 0.35rem;
  max-width: 52ch;
  margin: var(--space-sm) auto 0;
  padding-left: var(--space-sm);
  border-left: 4px solid var(--color-rule);
  font-family: var(--font-body);
  font-size: var(--rp-text);
  line-height: 1.4;
  color: var(--color-muted);
  text-align: left;
}
.run-plan__title {
  color: var(--color-ink);
  font-weight: 600;
  margin-bottom: var(--rp-gap);
}
.run-plan__line {
  white-space: pre-wrap;
}
.run-plan__gap {
  height: var(--rp-gap);
}
.run-plan-enter-active {
  transition: opacity 0.6s ease;
}
.run-plan-enter-from {
  opacity: 0;
}
</style>
