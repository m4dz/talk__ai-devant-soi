<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
import { session } from '../lib/session'

// Départ de la lecture = pas de clic Slidev ($clicks), JAMAIS un raccourci
// clavier (règle projet). La slide déclare `clicks: 1` en frontmatter :
// au premier « next », on lance l'audio DEPUIS 0 (aucun timecode).
const { $clicks } = useSlideContext()

const audio = ref<HTMLAudioElement | null>(null)
const scroller = ref<HTMLElement | null>(null)

// Chapitre prêt ?
const ready = computed(() => session.status === 'ready' && !!session.chapter)

// Découpage au marqueur BASCULE (posé après la 1ʳᵉ phrase par la writing
// factory). Avant = lu par le speaker ; après = pris par la voix clonée.
const BASCULE = '<!-- BASCULE -->'
const parts = computed(() => {
  const text = session.chapter?.text ?? ''
  const idx = text.indexOf(BASCULE)
  if (idx === -1) return { before: text.trim(), after: '' }
  return {
    before: text.slice(0, idx).trim(),
    after: text.slice(idx + BASCULE.length).trim(),
  }
})

const beforeParas = computed(() => splitParas(parts.value.before))
const afterParas = computed(() => splitParas(parts.value.after))

function splitParas(s: string): string[] {
  return s.split(/\n{2,}/).map(p => p.replace(/\s+/g, ' ').trim()).filter(Boolean)
}

// Défilement suivant la lecture : ratio audio → scrollTop du conteneur.
function onTimeUpdate() {
  const a = audio.value
  const el = scroller.value
  if (!a || !el || !a.duration) return
  const ratio = a.currentTime / a.duration
  el.scrollTop = ratio * (el.scrollHeight - el.clientHeight)
}

// V-click : au franchissement du seuil (clic 1), démarrer l'audio depuis 0.
// Idempotent : on ne relance pas si déjà en lecture.
watch(
  () => $clicks.value,
  (c) => {
    if (c >= 1 && ready.value && audio.value && audio.value.paused && audio.value.currentTime === 0) {
      audio.value.play().catch(() => {
        // Lecture refusée (ex. autoplay policy) : sans effet, pas de crash.
      })
    }
  },
)
</script>

<template>
  <div class="reader">
    <div v-if="!ready" class="reader__waiting">
      Le chapitre s'écrit… il apparaîtra ici dès qu'il est prêt.
    </div>

    <template v-else>
      <div ref="scroller" class="reader__text">
        <p v-for="(p, i) in beforeParas" :key="'b' + i" class="reader__spoken">
          {{ p }}
        </p>
        <p v-for="(p, i) in afterParas" :key="'a' + i" class="reader__cloned">
          {{ p }}
        </p>
      </div>

      <audio
        ref="audio"
        :src="session.chapter?.audioUrl ?? undefined"
        preload="auto"
        @timeupdate="onTimeUpdate"
      />

      <p class="reader__hint">
        <span v-if="$clicks < 1">Je lis la première phrase… puis « next ».</span>
        <span v-else>La voix clonée prend le relais.</span>
      </p>
    </template>
  </div>
</template>

<style scoped>
.reader {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  height: 100%;
}
.reader__waiting {
  color: var(--color-muted);
  font-size: var(--text-lg);
  font-style: italic;
}
.reader__text {
  max-width: 60ch;
  max-height: 60vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  font-size: var(--text-lg);
  line-height: 1.6;
}
/* Portion lue par le speaker : discrète (déjà dite / à dire à voix haute). */
.reader__spoken { color: var(--color-muted); }
/* Portion prise par la voix clonée : pleine encre. */
.reader__cloned { color: var(--color-ink); }
.reader__hint {
  color: var(--color-muted);
  font-size: var(--text-base);
}
</style>
