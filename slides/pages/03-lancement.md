---
# Un pas de clic : le « next » lance la génération (télécommande OK).
# Le bouton reste cliquable en secours (souris, répétition).
clicks: 1
---

<!-- Section 3 — Lancement de la génération live + démarrage du compte à
     rebours. Composants live (jalon 3A) : trigger idempotent + countdown
     autonome. Le rappel discret persistant 3→6 vit dans slides/global-bottom.vue. -->

# On lance la génération

Un chapitre entier, écrit en direct, sur une machine locale.
Le temps que je parle.

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
