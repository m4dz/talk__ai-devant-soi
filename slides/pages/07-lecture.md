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

<!--
[BEAT 1 — ZÉRO. 45".]

[Le compte à rebours atteint zéro. Le laisser mourir seul à l'écran, SANS
PARLER. C'est le silence le plus long du talk : le tenir jusqu'à
l'inconfort.]
-->

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

<!--
[Bascule d'écran : le chapitre. Titre, nombre de mots, les scènes du plan
cochées une à une.]

Il est né.

[Temps.]

Un chapitre. [X] mots. [X] scènes, celles du plan que vous avez vu il y a une
demi-heure. Pendant que je vous parlais de Dumas, il écrivait la première.
Pendant la descente, il vérifiait ses fiches. Pendant que j'interrogeais [NOM
DU PERSONNAGE], il relisait.
-->

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

<!--
[BEAT 2 — LE CONTRAT. 45".]

Tout à l'heure, on a passé un contrat : quand ce compteur atteindrait zéro,
on découvrirait le chapitre ensemble. Personne dans cette salle ne l'a jamais
lu.

Alors on va faire ce que les écrivains font depuis toujours avec un texte qui
vient de naître.

On va le lire à voix haute.

[Prendre place.]
-->

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

<!--
[BEAT 3 — LA LECTURE. 3'30.]

[Lire. À voix nue, sans commentaire, sans ironie de conférencier : on lit de
la fiction à une salle, on la lit pour de vrai. Deux à trois paragraphes,
jusqu'au point de couture.]

[AU MARQUEUR DE BASCULE : déclencher l'audio d'un « next » invisible,
enchaîner une phrase avec la voix clonée, puis s'écarter du micro DEUX OU
TROIS SECONDES APRÈS le début de l'audio — pas au moment du déclenchement. Ne
pas la regarder. Regarder la salle.]

[La voix continue seule, 45 secondes à 1 minute. Rester immobile, face à la
salle. Le texte défile toujours. Laisser le temps du soupçon, puis de la
certitude, se propager dans les rangs.]

[COUPE : avancer d'une slide arrête l'audio. À faire à la fin d'un
paragraphe, proprement — pas de fondu : une fin de phrase, un silence.]
-->

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

<!--
[BEAT 4 — LE RETOUR AU MICRO. 1'.]

[Revenir au micro. Lentement.]

Question.

À quel moment, exactement, avez-vous cessé de m'entendre ?

[Temps. Laisser la salle se le demander vraiment. Certains sauront à la
phrase près. La plupart, non.]

Cette voix, c'est la mienne. Enregistrée, apprise, clonée par la fabrique.
Elle a lu ce chapitre pendant qu'on parlait, dans la marge du compte à
rebours. Le texte, la voix : tout ce que vous venez d'entendre est sorti de la
machine.

Et pendant une minute, vous étiez exactement là où l'Académie était en 1975.

Vous écoutiez une voix. Vous ignoriez la fabrique.

[Transition SANS PAUSE vers la section 8.]
-->
