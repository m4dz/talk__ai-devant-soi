<!-- Récit noir plein cadre — section 1. Texte court centré verticalement,
     aucun chrome de titre de section. Tokens uniquement. -->
<template>
  <div class="slidev-layout cold-open pulp-bg">
    <div class="cold-open__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.cold-open {
  display: flex;
  align-items: center;
}
.cold-open__body {
  max-width: 46ch;
  font-size: var(--text-xl);
  line-height: 1.35;
}
</style>
