<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { session, startTicker } from '../lib/session'

// Durée initiale (aperçue avant lancement) — même source que le trigger.
const minutes = Number(import.meta.env.VITE_COUNTDOWN_MINUTES ?? 28) || 28
const initialSeconds = minutes * 60

// Affichage : source de vérité = session.remaining (dans le store, survit
// au démontage entre slides). Avant lancement, on montre la durée pleine.
const displaySeconds = computed(() =>
  session.running ? session.remaining : initialSeconds,
)

const time = computed(() => {
  const s = Math.max(0, displaySeconds.value)
  const mm = String(Math.floor(s / 60)).padStart(2, '0')
  const ss = String(s % 60).padStart(2, '0')
  return `${mm}:${ss}`
})

// Enrichissement (design D4) : le statut peut colorer l'affichage, il ne le
// pilote jamais. Le timer reste la source de vérité.
// NB : `running` requis — sinon `remaining === 0` à l'état idle (avant
// lancement) déclencherait à tort l'état « done ».
const done = computed(
  () => session.running && (session.status === 'ready' || session.remaining === 0),
)

const note = computed(() => {
  if (!session.running) return 'Prêt à lancer'
  if (session.status === 'ready') return 'Chapitre prêt — le temps a bien été tenu'
  if (session.remaining === 0) return 'Temps écoulé'
  return 'Génération en cours…'
})

// Le récit s'affiche par défaut, mais PAS sur la slide de zéro : là, le script
// veut « le compteur qui meurt seul à l'écran, sans parler ». Un journal machine
// dans la marge y casserait le silence le plus long du talk.
const props = withDefaults(defineProps<{ feed?: boolean }>(), { feed: true })

// Les dernières notes seulement. Le store en garde davantage (jusqu'à 30) ;
// en projection, au-delà de quatre lignes ça devient un mur.
const FEED_SHOWN = 4
const feed = computed(() => (props.feed ? session.notes.slice(-FEED_SHOWN) : []))
const showLog = computed(() => props.feed && (!!session.step || feed.value.length > 0))

onMounted(() => {
  // Défensif : si la slide est (re)montée alors qu'une session tourne,
  // s'assurer que le ticker unique tourne. Idempotent.
  if (session.running) startTicker()
})
</script>

<template>
  <div class="countdown" :class="{ 'is-done': done, 'is-idle': !session.running }">
    <div class="countdown__time">{{ time }}</div>
    <div class="countdown__note">{{ note }}</div>
  </div>

  <!-- Étape + récit : UN SEUL bloc, dans la marge basse, hors du flux central.
       C'est un journal de machine, et c'en a la place. Le mettre dans la
       colonne du compteur poussait le contenu hors du cadre de la slide
       (mesuré : 209 px disponibles sous le compteur, 213 demandés) et aurait
       obligé à rétrécir le chiffre-héros, qui porte le contrat de scène.
       Rien du tout si la machine n'a rien annoncé : l'absence est un état
       normal (pré-lancement, flux jamais connecté, repli embarqué), pas une
       anomalie à signaler. -->
  <div v-if="showLog" class="countdown__log">
    <div v-if="session.step" class="countdown__step">
      {{ session.step.label }}
      <span v-if="session.step.detail" class="countdown__detail">
        · {{ session.step.detail }}
      </span>
    </div>
    <ul v-if="feed.length" class="countdown__feed">
      <li v-for="(n, i) in feed" :key="n + i">{{ n }}</li>
    </ul>
  </div>
</template>

<style scoped>
.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
}
.countdown__time {
  font-family: var(--font-title);
  font-size: 8rem;
  line-height: 1;
  color: var(--color-ink);
  font-variant-numeric: tabular-nums;
}
.countdown.is-idle .countdown__time { color: var(--color-muted); }
.countdown.is-done .countdown__time { color: var(--color-accent); }
.countdown__note {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  color: var(--color-muted);
}
.countdown__log {
  position: absolute;
  /* Aligné sur la colonne de texte de la slide (mesuré : 80 px canvas), pas
     collé au bord. Largeur bornée pour ne jamais toucher la colonne centrale
     du compteur — sans elle, le journal venait à 3 px du chiffre. */
  left: 80px;
  /* Remonté au-dessus de la ligne de note du compteur : collé en bas, la
     dernière note se lisait sur la même ligne que la note centrée. */
  bottom: 56px;
  /* En px de CANVAS, pas en `ch` : la colonne centrale du compteur commence à
     391 px canvas, on s'arrête à 280 pour garder une gouttière franche. Une
     borne en `ch` se calcule sur la fonte héritée et laissait le journal
     mordre sur le chiffre. */
  max-width: 280px;
  text-align: left;
}
.countdown__step {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-ink);
}
.countdown__detail { color: var(--color-muted); }
.countdown__feed {
  margin: 0.35rem 0 0;
  padding: 0;
  list-style: none;
  max-width: 44ch;
  font-family: var(--font-body);
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--color-muted);
}
/* La plus récente en pleine encre : l'œil sait où regarder sans animation. */
.countdown__feed li:last-child { color: var(--color-ink); }
</style>
