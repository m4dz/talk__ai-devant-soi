---
layout: scene
# Le compte à rebours occupe l’écran SEUL. Pas de rappel discret ici.
noCountdown: true
---

<!-- Section 7 — LA RÉCOLTE (script docs/scripts/06-…). 6 minutes.
     BEAT 1 — ZÉRO. Le compteur meurt seul à l’écran, sans parler :
     c’est le silence le plus long du talk, à tenir jusqu’à l’inconfort. -->

<!-- Pas de récit ici : le script veut le compteur qui meurt SEUL à l’écran. -->
<Countdown :feed="false" />

<!--
[BEAT 1 — ZÉRO. 45".]

[Le compte à rebours atteint zéro. Le laisser mourir seul à l’écran, SANS
PARLER. C’est le silence le plus long du talk : le tenir jusqu’à
l’inconfort.]
-->

---
layout: propos
variant: plain
clicks: 1
---

<!-- BEAT 2 — LE CONTRAT. -->

# Personne dans cette salle ne l’a jamais lu

Tout à l’heure, on a passé un contrat : quand ce compteur atteindrait zéro,
on découvrirait le chapitre ensemble.

<div v-click>

<p class="chute">Alors on va faire ce que les écrivains font depuis toujours
avec un texte qui vient de naître. On va le lire à voix haute.</p>

</div>

<!--
[BEAT 2 — LE CONTRAT. 45".]

Tout à l’heure, on a passé un contrat : quand ce compteur atteindrait zéro,
on découvrirait le chapitre ensemble. Personne dans cette salle ne l’a jamais
lu.

Alors on va faire ce que les écrivains font depuis toujours avec un texte qui
vient de naître.

On va le lire à voix haute.

[Prendre place.]
-->

---
layout: scene
plein: true
# Un pas de clic : le « next » lance la lecture clonée (télécommande OK).
# Jamais de raccourci clavier. Départ de l’audio DEPUIS 0 (aucun timecode).
clicks: 1
---

<!-- BEAT 3 — LA LECTURE. ChapterReader lit session.chapter, découpe au
     marqueur BASCULE : le speaker lit jusqu’au marqueur, puis « next » et
     la voix clonée prend le relais. Le texte reste affiché et défile :
     c’est lui qui rend le retrait du micro visible. -->

<ChapterReader />

<!--
[BEAT 3 — LA LECTURE. 3’30.]

[Lire. À voix nue, sans commentaire, sans ironie de conférencier : on lit de
la fiction à une salle, on la lit pour de vrai. LES DEUX PREMIÈRES PHRASES,
pas davantage — jusqu’au point de couture.]

[AU MARQUEUR DE BASCULE (posé après la deuxième phrase) : déclencher l’audio
d’un « next » invisible, enchaîner une phrase avec la voix clonée, puis
s’écarter du micro DEUX OU TROIS SECONDES APRÈS le début de l’audio — pas au
moment du déclenchement. Ne pas la regarder. Regarder la salle.]

[La voix continue seule, 2’45 : elle va jusqu’au bout de
l’extrait, ce n’est plus un fragment qu’on coupe. Rester immobile, face à la
salle. Le texte défile toujours. Laisser le temps du soupçon, puis de la
certitude, se propager dans les rangs — et laisser passer le moment où la
salle cesse de guetter la voix pour écouter l’histoire.]

[La lecture s’arrête d’elle-même à la fin de l’extrait. FILET si le temps
manque : avancer d’une slide coupe l’audio — en fin de phrase, sans fondu.]
-->

---
layout: propos
variant: question
clicks: 2
---

<!-- BEAT 4 — LE RETOUR AU MICRO. La question doit tenir seule le temps
     que la salle se la pose vraiment ; la révélation vient après. -->

# À quel moment, exactement, avez-vous cessé de m’entendre ?

<div v-click>

Cette voix, c’est la mienne. Enregistrée, apprise, clonée par la fabrique.
Elle a lu ce chapitre pendant qu’on parlait, dans la marge du compte à
rebours.

</div>

<div v-click>

<p class="chute">Et pendant près de trois minutes, vous étiez exactement là où
l’Académie était en 1975. Vous écoutiez une voix.
<strong>Vous ignoriez la fabrique.</strong></p>

</div>

<style scoped>
.chute { color: var(--color-ink) !important; }
.chute strong { color: var(--color-accent); }
</style>

<!--
[BEAT 4 — LE RETOUR AU MICRO. 1’.]

[Revenir au micro. Lentement.]

Question.

À quel moment, exactement, avez-vous cessé de m’entendre ?

[Temps. Laisser la salle se le demander vraiment. Certains sauront à la
phrase près. La plupart, non.]

Cette voix, c’est la mienne. Enregistrée, apprise, clonée par la fabrique.
Elle a lu ce chapitre pendant qu’on parlait, dans la marge du compte à
rebours. Le texte, la voix : tout ce que vous venez d’entendre est sorti de la
machine.

Et pendant près de trois minutes, vous étiez exactement là où l’Académie était en 1975.

Vous écoutiez une voix. Vous ignoriez la fabrique.

[Transition SANS PAUSE vers la section 8.]
-->
