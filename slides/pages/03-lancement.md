---
layout: propos
variant: plain
---

<!-- Section 3 — L’ALLUMAGE. BEAT 1 — Le roman.
     Traitement sur mesure envisageable à la passe slide-par-slide : c’est
     l’objet de désir du talk, la salle doit avoir envie de le lire. -->

# L’Involontaire

Dans le journal d’Élise, il y a des entrées que personne n’a voulues.
Elle a vérifié, compté, relu.

Quelqu’un pourtant écrit dans ces pages. Quelqu’un qui la connaît mieux
qu’elle ne consent à se connaître.

<!--
[Slide : le titre du roman.]

Ce roman existe. Il s’appelle *L’Involontaire*.

Dans le journal d’Élise, il y a des entrées que personne n’a voulues. Elle a
vérifié, compté, relu. Quelqu’un pourtant écrit dans ces pages. Quelqu’un
qui la connaît mieux qu’elle ne consent à se connaître.

[La salle doit avoir envie de connaître la suite : c’est ce qui donnera un
poids réel à la récolte.]
-->

---
layout: ambiance
variant: colonne
light: /images/fabrique-04-usine-machine-s930.png
dark: /images/fabrique-04-usine-machine-s930-dark.png
---

<!-- Suite du beat 1 : la fabrique. Fond perdu, même génome que le cold open
     (prompt 2a-wide, motif 4 « l'objet-figure »). Le ruban encreur rouge est
     l'unique élément rouge : tout ce que la fabrique imprime passe par lui —
     la main cachée, comme partout ailleurs dans la série. Le texte occupe le
     tiers gauche que le prompt wide laisse vide par construction. -->

# Pas écrit seul

Plusieurs chapitres existent. Pas par moi seul, pas par une machine seule :
**par une fabrique.**

Une architecture complète, sur une machine locale. Sans cloud, sans API,
sans que rien ne sorte de la pièce.

<p class="muted">Elle connaît mes personnages mieux que moi, certains soirs.
Et ce soir, elle est ici.</p>

<style scoped>
/* Pas de font-size ici : en layout `ambiance colonne` c'est le layout qui
   gouverne le corps. Forcer --text-lg faisait de la ligne la PLUS grosse de
   la slide alors que c'est la moins appuyée — hiérarchie inversée. */
.muted { color: var(--color-muted); margin-top: var(--space-md); }
</style>

<!--
Plusieurs chapitres sont écrits. Pas par moi seul, pas par une machine
seule : par une fabrique. Une architecture complète qui tourne sur une
machine locale, chez moi, sans cloud, sans API, sans que rien ne sorte de la
pièce.

Cette fabrique connaît mes personnages mieux que moi certains soirs. Elle
connaît le monde, l’histoire, les voix. Et ce soir, elle est ici.
-->

---
layout: piece-a-conviction
intitule: Le plan de scènes — chapitre 7
commentaire: Généré par la fabrique, à partir de tout ce qui précède.
---

<!-- BEAT 2 — Le chapitre à écrire. C’est une SORTIE de la fabrique,
     donc une pièce à conviction : même traitement que les extraits de la
     section 5. Casse aussi la série de plain dans la section. -->

L’anniversaire qu’elle a décidé de ne pas fêter : plus elle efface les
traces de ce jour, plus la maison s’obstine à le célébrer.

<!--
[Bascule d’écran : le plan de scènes du chapitre suivant.]

Voici le plan de scènes du prochain chapitre. Il a été généré par la
fabrique, à partir de tout ce qui précède.

L’anniversaire qu’elle a décidé de ne pas fêter : plus elle efface les
traces de ce jour, plus la maison s’obstine à le célébrer.
-->

---
layout: propos
variant: plain
# Un pas de clic : le « next » lance la génération (télécommande OK).
# Le bouton reste cliquable en secours (souris, répétition).
clicks: 1
# Cette slide porte le compte à rebours EN GRAND → pas de rappel discret.
noCountdown: true
---

<!-- BEAT 2 (suite) — Le lancement. Composants live (jalon 3A) : trigger
     idempotent + countdown autonome. Le rappel discret persistant 3→6 vit
     dans slides/global-bottom.vue. -->

# On lance l’écriture

En ce moment même, sur cette machine, des scènes s’écrivent.

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

On vient de lancer l’écriture. En ce moment même, sur cette machine, des
scènes s’écrivent.

[Le compte à rebours apparaît. Il ne quittera plus l’écran.]
-->

---
layout: propos
variant: plain
clicks: 2
---

<!-- BEAT 3 — Le contrat du compteur. La chute se révèle : « pas même
     moi » ne doit pas être lu avant d’être dit. -->

# Ce compteur, c’est notre contrat

Quand il atteindra zéro, un chapitre sera né.
Un chapitre entier, inédit, que personne n’a jamais lu.

<div v-click>

**Pas même moi.**

</div>

<div v-click>

<p class="chute">Vous serez encore là. Et on le découvrira ensemble.</p>

</div>

<!--
Ce compteur, c’est notre contrat.

Quand il atteindra zéro, un chapitre sera né. Un chapitre entier, inédit.
Personne dans cette salle ne l’a jamais lu. Vous serez encore là. Et on le
découvrira ensemble.

[Formulation définitive, vraie dans les deux scénarios de bascule. « Pas
même moi » peut s’improviser en bonus dans le scénario live, jamais se
scripter.]

D’ici là, il y a un problème à régler.

Ce qui tourne derrière moi : vous ne savez pas ce que c’est. Une boîte noire
qui écrit de la fiction. Et c’est exactement ce que l’Académie a en tête
quand elle dit « tricherie ».

Alors on va l’ouvrir. Couche par couche.

Mais d’abord, il faut que je vous parle d’Alexandre Dumas.
-->
