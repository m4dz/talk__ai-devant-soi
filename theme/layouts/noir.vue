<!-- Noir — impose sa palette (encre / papier) DANS LES DEUX MODES.
     Le script : « slide noire. On termine comme on a commencé. »
     Le noir est ici un choix de mise en scène, pas une conséquence du
     thème : il ne doit pas s'éclaircir en mode papier. -->
<template>
  <div class="slidev-layout noir">
    <div class="noir__corps">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Palette forcée : on ne consomme PAS --color-paper/--color-ink (qui
   flippent avec le mode), mais les valeurs d'encre du design system. */
.noir {
  background: #0f0d0b;
  color: #ede3d0;
  display: flex;
  align-items: center;
}
.noir__corps {
  max-width: 54ch;
  font-size: var(--text-xl);
  line-height: 1.35;
}
/* Les titres et l'accent restent cohérents sur fond d'encre. */
.noir :deep(h1),
.noir :deep(h2) {
  font-family: var(--font-title);
  color: #ede3d0;
}
.noir :deep(strong) {
  color: #e11d1d;
}
</style>
