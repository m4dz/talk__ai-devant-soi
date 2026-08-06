---
---

<!-- Section 3 — L'ALLUMAGE (3 beats).
     BEAT 1 — Le roman. -->

# L'Involontaire

<div class="accroche">

Dans le journal d'Élise, il y a des entrées que personne n'a voulues.
Elle a vérifié, compté, relu.

Quelqu'un pourtant écrit dans ces pages. Quelqu'un qui la connaît mieux
qu'elle ne consent à se connaître.

</div>

<style scoped>
.accroche { max-width: 54ch; font-size: var(--text-lg); line-height: 1.5; }
</style>

<!--
[Slide : le titre du roman.]

Ce roman existe. Il s'appelle *L'Involontaire*.

Dans le journal d'Élise, il y a des entrées que personne n'a voulues. Elle a
vérifié, compté, relu. Quelqu'un pourtant écrit dans ces pages. Quelqu'un
qui la connaît mieux qu'elle ne consent à se connaître.

[La salle doit avoir envie de connaître la suite : c'est ce qui donnera un
poids réel à la récolte.]
-->

---
---

<!-- Suite du beat 1 : la fabrique. -->

# Pas écrit seul

Plusieurs chapitres existent. Pas par moi seul, pas par une machine seule :
**par une fabrique.**

Une architecture complète, sur une machine locale. Sans cloud, sans API,
sans que rien ne sorte de la pièce.

<p class="muted">Elle connaît mes personnages mieux que moi, certains soirs.
Et ce soir, elle est ici.</p>

<style scoped>
.muted { color: var(--color-muted); font-size: var(--text-lg); margin-top: var(--space-md); }
</style>

<!--
Plusieurs chapitres sont écrits. Pas par moi seul, pas par une machine
seule : par une fabrique. Une architecture complète qui tourne sur une
machine locale, chez moi, sans cloud, sans API, sans que rien ne sorte de la
pièce.

Cette fabrique connaît mes personnages mieux que moi certains soirs. Elle
connaît le monde, l'histoire, les voix. Et ce soir, elle est ici.
-->

---
---

<!-- BEAT 2 — Le chapitre à écrire (plan de scènes généré par la fabrique). -->

# Chapitre 7

<p class="objectif">L’anniversaire qu’elle a décidé de ne pas fêter :
plus elle efface les traces de ce jour, plus la maison s’obstine à le
célébrer.</p>

<p class="muted">Le plan de scènes a été généré par la fabrique, à partir de
tout ce qui précède.</p>

<style scoped>
.objectif { max-width: 52ch; font-size: var(--text-xl); line-height: 1.35; }
.muted { color: var(--color-muted); font-size: var(--text-lg); margin-top: var(--space-md); }
</style>

<!--
[Bascule d'écran : le plan de scènes du chapitre suivant.]

Voici le plan de scènes du prochain chapitre. Il a été généré par la
fabrique, à partir de tout ce qui précède.

L'anniversaire qu'elle a décidé de ne pas fêter : plus elle efface les
traces de ce jour, plus la maison s'obstine à le célébrer.
-->

---
# Un pas de clic : le « next » lance la génération (télécommande OK).
# Le bouton reste cliquable en secours (souris, répétition).
clicks: 1
# Cette slide porte le compte à rebours EN GRAND → pas de rappel discret.
noCountdown: true
---

<!-- BEAT 2 (suite) — Le lancement. Composants live (jalon 3A) : trigger
     idempotent + countdown autonome. Le rappel discret persistant 3→6 vit
     dans slides/global-bottom.vue. -->

# On lance l'écriture

En ce moment même, sur cette machine, des scènes s'écrivent.

<div class="launch-controls">
  <GenerationTrigger />
  <Countdown />
</div>

<style scoped>
.launch-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--space-md);
}
</style>

<!--
Et maintenant, on va faire une chose simple.

[GESTE DE LANCEMENT : physique et visible, pas un alt-tab. Le « next »
déclenche. La salle doit voir que ça part.]

On vient de lancer l'écriture. En ce moment même, sur cette machine, des
scènes s'écrivent.

[Le compte à rebours apparaît. Il ne quittera plus l'écran.]
-->

---
---

<!-- BEAT 3 — Le contrat du compteur. -->

# Ce compteur, c'est notre contrat

Quand il atteindra zéro, un chapitre sera né.

Un chapitre entier, inédit, que personne n'a jamais lu —
**pas même moi.**

<p class="accent-line">Vous serez encore là. Et on le découvrira ensemble.</p>

<style scoped>
.accent-line { color: var(--color-accent); margin-top: var(--space-md); }
</style>

<!--
Ce compteur, c'est notre contrat.

Quand il atteindra zéro, un chapitre sera né. Un chapitre entier, inédit.
Personne dans cette salle ne l'a jamais lu. Vous serez encore là. Et on le
découvrira ensemble.

[Formulation définitive, vraie dans les deux scénarios de bascule. « Pas
même moi » peut s'improviser en bonus dans le scénario live, jamais se
scripter.]

D'ici là, il y a un problème à régler.

Ce qui tourne derrière moi : vous ne savez pas ce que c'est. Une boîte noire
qui écrit de la fiction. Et c'est exactement ce que l'Académie a en tête
quand elle dit « tricherie ».

Alors on va l'ouvrir. Couche par couche.

Mais d'abord, il faut que je vous parle d'Alexandre Dumas.
-->
