---
layout: propos
variant: plain
---

<!-- Section 3 — L’ALLUMAGE. BEAT 1 — Le roman.
     Traitement sur mesure envisageable à la passe slide-par-slide : c’est
     l’objet de désir du talk, la salle doit avoir envie de le lire. -->

# L’Involontaire

Depuis que l’autre est partie, Judith relit chaque soir ce qu’elle a écrit la veille. Correctrice, elle sait traquer l’erreur. Mais l’écart n’est pas dans le texte : il est entre la page et son souvenir, et chaque vérification donne un peu plus tort à sa mémoire. Elle voulait seulement tourner la page, mais chaque soir, le cahier la ramène en arrière.

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

# Un atelier d’écriture

Plusieurs chapitres existent. Pas par moi seul, pas par une machine seule :
**par une fabrique.**

Une architecture complète, sur une machine locale.

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

⚠ pose la contrainte locale (⟳ reprise en cadre à la descente, slide 18). Passe de style à venir.
-->

---
layout: default
class: plan-scenes pulp-bg
---

<!-- BEAT 2 — Le chapitre à écrire. C’est une SORTIE de la fabrique,
     donc une pièce à conviction : même traitement que les extraits de la
     section 5. Casse aussi la série de plain dans la section. -->

# Chapitre 7 : l’anniversaire

<div class="plan-prompt">

Deux entrées, un seul jour.<br>
Elle a décidé que ce jour n’aura pas lieu.<br>
Tout ce qu’elle efface revient.<br>
Interdits : <span class="rouge">aucune explication</span>. Aucun personnage. Aucun nom.<br>
La voix ne cède pas.

</div>

| Entrée | Moment | Forme | Ancre | Mouvement |
|---|---|---|---|---|
| 1 | Après-midi | 2 phrases max, sans citation | aucune (1re entorse au rituel) | résolution : elle efface le jour (photos, playlist, plat) |
| 2 | Nuit | ~300-400 mots, 3 beats bornés (relève / découverte / doute) | [CIT-2] posée par le code | contrariété → vertige → capitulation |

<style scoped>
/* Corps remonté : flex-start + un offset haut, le tableau ne tombe plus en bas. */
.plan-scenes { display: flex; flex-direction: column; justify-content: flex-start; padding-top: var(--space-lg); }
.plan-scenes :deep(h1), .plan-scenes h1 { font-size: var(--title-2); margin-bottom: var(--space-md); }
/* Un seul rouge sur la slide : l'interdit « aucune explication » (.rouge dans
   le prompt). Filet neutre, titre et th neutres. */
.plan-scenes .plan-prompt { font-size: var(--text-base); line-height: 1.5; border-left: 4px solid var(--color-rule); padding-left: var(--space-md); margin: var(--space-md) 0 var(--space-lg); }
.plan-scenes .rouge { color: var(--color-accent); }
.plan-scenes table { width: 100%; border-collapse: collapse; font-size: 12px; line-height: 1.3; }
.plan-scenes th, .plan-scenes td { border: 1px solid var(--color-rule); padding: 4px 8px; text-align: left; vertical-align: top; }
.plan-scenes th { color: var(--color-ink); font-family: var(--font-body); text-transform: uppercase; letter-spacing: 0.04em; font-size: 11px; }
.plan-scenes td:first-child, .plan-scenes th:first-child { text-align: center; width: 3ch; }
</style>

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
# Corps centré sur la largeur de la slide : le bouton porte le timer et doit
# tomber au centre, pas au tiers gauche de la colonne 58ch.
center: true
# Un pas de clic : le « next » lance la génération (télécommande OK).
# Le bouton reste cliquable en secours (souris, répétition).
clicks: 1
# Le timer est porté par le bouton de lancement → pas de rappel discret ici.
noCountdown: true
---

<!-- BEAT 2 (suite) — Le lancement. Composants live (jalon 3A) : trigger
     idempotent + countdown autonome. Le rappel discret persistant 3→6 vit
     dans slides/global-bottom.vue. -->

# On lance ?

La machine va rédiger le chapitre. On le découvrira ensemble, à la fin.

<div class="launch-controls">
  <GenerationTrigger />
</div>

<style scoped>
/* Le bouton porte le timer (plus de Countdown autonome ici). Le centrage
   horizontal est assuré par `center: true` (frontmatter → `propos--centered`
   dans le layout) : le corps 58ch est ramené au centre de la slide, donc le
   bouton aussi. Ici, on ne règle que l'espace au-dessus du bouton. */
.launch-controls {
  display: flex;
  justify-content: center;
  margin-top: var(--space-lg);
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

