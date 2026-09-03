## 1. Ajouter le pas sur la slide 12

- [x] 1.1 Dans `slides/pages/02-goncourt.md`, beat 3 (signature), envelopper
      la dernière ligne `<p class="accent-line">Cette fois, je ne le fais
      pas seul.</p>` dans un `<div v-click>` (le reste à l'entrée, la chute
      au clic). Laisser le `<style scoped>` en place.
- [x] 1.2 Mettre à jour la note de présentateur du beat : la chute
      « je ne l'écris pas seul » tombe au clic, tenir un temps avant.

## 2. Vérification

- [x] 2.1 Contrôler le rendu et l'espacement en mode **clair** et
      **sombre** (layout `signature`) — la ligne d'accent garde sa couleur
      et son `margin-top`, pas de saut de mise en page à l'apparition.
- [x] 2.2 Vérifier le pilotage « next » à la télécommande : 1 pas révèle
      la chute, aucun raccourci dédié.
