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
**le compteur meurt seul à l'écran. Silence.**

- le plus long silence du talk : le tenir jusqu'à l'inconfort. Ne pas parler.

← je dirige un atelier    → ce que la fabrique a produit

⚠ ne rien dire. Laisser le zéro exister seul.
-->

---
layout: propos
variant: plain
---

<!-- BEAT 2 — LE CONTRAT. -->

# Personne ne le connaît, pas même moi

La fabrique l’a écrit sous vos yeux : la bibliothèque a nourri chaque scène,
l’atelier a repris ce qui cassait, la fiche de style a coupé le reste.

<!--
**voici ce que la fabrique a produit — et comment. Personne ne l'a lu.**

- la fabrique l'a écrit sous vos yeux : bibliothèque → chaque scène, atelier → ce qui cassait, fiche de style → coupé le reste.
- ce qui compte : ce qu'on a réussi à faire produire, et comment (pas des stats).
- on va faire ce que les écrivains font : le lire à voix haute.

← le zéro    → la lecture

⚠ le « comment » = rappel condensé des gestes. Puis prendre place.
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
**la lecture : voix nue, puis la voix clonée prend le relais. Preuve de capacité.**

- lire les 2 premières phrases pour de vrai, jusqu'au marqueur de bascule.
- au marqueur : « next » invisible → l'audio cloné enchaîne ; s'écarter du micro 2-3 s APRÈS le début.
- la voix continue seule (~2'45), va au bout. Rester immobile, face salle. Le texte défile.

← ce que la fabrique a produit    → la chute

⚠ jamais de raccourci ni timecode : un pas de clic. Regarder la salle. Filet : avancer d'une slide coupe l'audio.
-->

