---
layout: propos
variant: plain
---

<!-- Section 3 — L’ALLUMAGE. BEAT 1 — Le roman.
     Traitement sur mesure envisageable à la passe slide-par-slide : c’est
     l’objet de désir du talk, la salle doit avoir envie de le lire. -->

# L’Involontaire

Dans le journal d’Judith, il y a des entrées que personne n’a voulues.
Elle a vérifié, compté, relu.

Quelqu’un pourtant écrit dans ces pages. Quelqu’un qui la connaît mieux
qu’elle ne consent à se connaître.

<!--
**le roman, objet de désir : un journal où quelqu'un écrit à la place d'Judith.**

- L'Involontaire : dans le journal d'Judith, des entrées que personne n'a voulues.
- elle a vérifié, compté, relu — quelqu'un écrit pourtant, qui la connaît mieux qu'elle ne consent.
- la salle doit avoir envie de lire la suite (ça donnera son poids à la récolte).

← qui parle    → la fabrique (pas seul)

⚠ l'objet de désir du talk : le vendre, pas le résumer. La salle doit vouloir la suite.
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
**pas écrit seul, pas par une machine seule : par une fabrique locale.**

- plusieurs chapitres existent, produits par une architecture complète, sur une machine locale.
- sans cloud, sans API : rien ne sort de la pièce.
- « elle connaît mes personnages mieux que moi, certains soirs. Et ce soir, elle est ici. »

← le roman    → le plan de scènes

⚠ pose la contrainte locale (⟳ reprise en cadre à la descente, slide 18).
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
**une vraie sortie de la fabrique : le plan du prochain chapitre, généré.**

- plan de scènes du chapitre 7, généré par la fabrique à partir de tout ce qui précède.
- l'anniversaire qu'elle refuse de fêter : plus elle efface les traces, plus la maison le célèbre.

← la fabrique    → on lance

⚠ pièce à conviction (une sortie machine), pas un slide d'argument.
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

Quand il atteindra zéro, un chapitre sera né — que personne n’a jamais lu.
**On le découvrira ensemble.**

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
**on lance, et on passe un contrat : à zéro, un chapitre naît, découvert ensemble.**

- geste de lancement PHYSIQUE et visible (le « next » déclenche) : la salle doit voir que ça part.
- le compte à rebours (28 min) apparaît et ne quitte plus l'écran.
- contrat : à zéro, un chapitre inédit que personne n'a lu → on le découvrira ensemble.

← le plan    → démystifier la fabrique

⚠ « pas même moi » : bonus live, jamais scripté. Le décompte EST une machine locale qui tourne (rappel muet de la contrainte).
-->

