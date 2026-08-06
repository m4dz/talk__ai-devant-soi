---
# Le compte à rebours occupe l'écran SEUL. Pas de rappel discret ici.
noCountdown: true
---

<!-- Section 7 — LA RÉCOLTE (script docs/scripts/06-…). 6 minutes.
     BEAT 1 — ZÉRO. Le compteur meurt seul à l'écran, sans parler :
     c'est le silence le plus long du talk, à tenir jusqu'à l'inconfort. -->

<div class="zero">
  <Countdown />
</div>

<style scoped>
.zero { display: flex; align-items: center; justify-content: center; height: 100%; }
</style>

---
layout: piece-a-conviction
intitule: Le chapitre
commentaire: Il est né.
---

<!-- GABARIT : titre, nombre de mots, scènes du plan cochées une à une —
     à remplir depuis le run réel (ou le chapitre de secours). -->

<div class="gabarit-bloc">
<span class="gabarit">GABARIT</span>

Titre du chapitre · nombre de mots · les scènes du plan, cochées une à une.
</div>

---
---

<!-- BEAT 2 — LE CONTRAT. -->

# Personne dans cette salle ne l'a jamais lu

Tout à l'heure, on a passé un contrat : quand ce compteur atteindrait zéro,
on découvrirait le chapitre ensemble.

<p class="chute">Alors on va faire ce que les écrivains font depuis toujours
avec un texte qui vient de naître. On va le lire à voix haute.</p>

<style scoped>
.chute { margin-top: var(--space-md); font-size: var(--text-lg); max-width: 56ch; }
</style>

---
# Un pas de clic : le « next » lance la lecture clonée (télécommande OK).
# Jamais de raccourci clavier. Départ de l'audio DEPUIS 0 (aucun timecode).
clicks: 1
---

<!-- BEAT 3 — LA LECTURE. ChapterReader lit session.chapter, découpe au
     marqueur BASCULE : le speaker lit jusqu'au marqueur, puis « next » et
     la voix clonée prend le relais. Le texte reste affiché et défile :
     c'est lui qui rend le retrait du micro visible. -->

<ChapterReader />

---
---

<!-- BEAT 4 — LE RETOUR AU MICRO. -->

# À quel moment, exactement, avez-vous cessé de m'entendre ?

<p class="reveal">Cette voix, c'est la mienne. Enregistrée, apprise, clonée
par la fabrique. Elle a lu ce chapitre pendant qu'on parlait, dans la marge
du compte à rebours.</p>

<p class="chute">Et pendant une minute, vous étiez exactement là où
l'Académie était en 1975. Vous écoutiez une voix.
<strong>Vous ignoriez la fabrique.</strong></p>

<style scoped>
.reveal { margin-top: var(--space-md); font-size: var(--text-lg); max-width: 58ch; }
.chute { margin-top: var(--space-md); font-size: var(--text-lg); max-width: 58ch; }
.chute strong { color: var(--color-accent); }
</style>
