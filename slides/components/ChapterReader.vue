<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSlideContext, onSlideEnter, onSlideLeave } from '@slidev/client'
import { session, BASCULE, FIN_AUDIO } from '../lib/session'
import { ensureChapter } from '../lib/genClient'

// Départ de la lecture = pas de clic Slidev ($clicks), JAMAIS un raccourci
// clavier (règle projet). La slide déclare `clicks: 1` en frontmatter :
// au premier « next », on lance l'audio DEPUIS 0 (aucun timecode).
const { $clicks } = useSlideContext()

const audio = ref<HTMLAudioElement | null>(null)
const scroller = ref<HTMLElement | null>(null)
const clonedBlock = ref<HTMLElement | null>(null)

// Chapitre prêt ?
const ready = computed(() => session.status === 'ready' && !!session.chapter)

// Si le repli a été armé en silence pendant le talk, c'est ici qu'il se pose
// (arrivée en section 7 avant zéro du compte à rebours).
// PAS `onMounted` : Slidev monte toutes les slides au chargement du deck, donc
// le montage a lieu bien avant l'armement. C'est l'ENTRÉE sur la slide qui fait
// foi.
onSlideEnter(ensureChapter)

// Découpage aux DEUX marqueurs :
//   début → BASCULE      : lu à voix haute par le speaker (affiché, hors audio)
//   BASCULE → FIN AUDIO  : pris par la voix clonée (c'est ce que couvre le WAV)
//   après FIN AUDIO      : hors périmètre — n'entre pas dans la slide.
// Borner l'affichage à FIN AUDIO aligne la hauteur défilable sur le périmètre
// sonore : sans ça, un chapitre entier affiché contre un extrait audio fait
// courir le texte d'un ordre de grandeur trop vite.
const parts = computed(() => {
  const text = session.chapter?.text ?? ''
  const fin = text.indexOf(FIN_AUDIO)
  const bounded = fin === -1 ? text : text.slice(0, fin)
  const bascule = bounded.indexOf(BASCULE)
  if (bascule === -1) return { before: bounded.trim(), cloned: '' }
  return {
    before: bounded.slice(0, bascule).trim(),
    cloned: bounded.slice(bascule + BASCULE.length).trim(),
  }
})

const beforeParas = computed(() => splitParas(parts.value.before))
const clonedParas = computed(() => splitParas(parts.value.cloned))

function splitParas(s: string): string[] {
  return s.split(/\n{2,}/).map(p => p.replace(/\s+/g, ' ').trim()).filter(Boolean)
}

// Défilement CONTINU depuis le haut : le texte descend linéairement du sommet
// (portion parlée visible) jusqu'au bas, calé sur l'avancement de l'audio —
// comme une lecture humaine menée du début à la fin, sans saut d'ancrage.
// `scrollTop`/`scrollHeight`/`clientHeight` sont tous en pixels de layout,
// cohérents entre eux (jamais `getBoundingClientRect`, en pixels écran à cause
// du scale du canvas).
function onTimeUpdate() {
  const a = audio.value
  const el = scroller.value
  if (!a || !el || !a.duration) return
  const max = el.scrollHeight - el.clientHeight
  if (max <= 0) return
  const ratio = Math.min(1, a.currentTime / a.duration)
  el.scrollTop = ratio * max
}

// Coupe propre en scène : quitter la slide arrête la lecture. Le chapitre
// peut être trop long pour le temps restant ; le « next » (télécommande)
// devient la coupe, sans geste visible. Remise à zéro pour qu'un retour sur
// la slide reprenne au début (et pas au milieu d'une phrase).
onSlideLeave(() => {
  const a = audio.value
  if (!a) return
  a.pause()
  a.currentTime = 0
  if (scroller.value) scroller.value.scrollTop = 0
})

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
        <div ref="clonedBlock">
          <p v-for="(p, i) in clonedParas" :key="'a' + i" class="reader__cloned">
            {{ p }}
          </p>
        </div>
      </div>

      <audio
        ref="audio"
        :src="session.chapter?.audioUrl ?? undefined"
        preload="auto"
        @timeupdate="onTimeUpdate"
      />
    </template>
  </div>
</template>

<style scoped>
.reader {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  align-items: center;
}
.reader__waiting {
  color: var(--color-muted);
  font-size: var(--text-lg);
  font-style: italic;
}
.reader__text {
  position: relative;
  max-width: 60ch;
  /* Bornage en px CANVAS, jamais en vh : le canvas Slidev est scalé par un
     transform, vh résout contre la fenêtre réelle → débordement (overview
     compris). À caler au filage. */
  max-height: 400px;
  overflow-y: auto;
  /* Pas de scroll-behavior: smooth — il rejouait son animation à chaque
     timeupdate (~4/s) et provoquait la saccade. Le calage se fait par petits
     pas directs dans onTimeUpdate. */
  font-size: var(--text-lg);
  line-height: 1.6;
  /* Cadre habillé comme un objet pulp monté (cf. .pulp-figure__object) :
     carton mat crème + ombre portée, façon photo épinglée. */
  background: var(--pulp-mat);
  box-shadow: var(--pulp-shadow);
  padding: var(--space-sm);
}
/* Le mat `--pulp-mat` est crème FIXE dans les deux modes : le texte est donc
   figé en encre sombre (palette claire), sinon il vire au clair en dark et
   devient illisible sur le crème. */
/* Portion lue par le speaker : discrète (déjà dite / à dire à voix haute). */
.reader__spoken { color: var(--pal-clair-muted); }
/* Portion prise par la voix clonée : pleine encre. */
.reader__cloned { color: var(--pal-clair-ink); }
</style>
