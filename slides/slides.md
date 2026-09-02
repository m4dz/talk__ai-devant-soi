---
# Thème local (design system dédié) — pas de thème npm tiers.
# Chemin relatif à slides.md (dossier slides/) → remonte à theme/ racine.
theme: ../theme
title: L'IA devant soi
# Favicon local — surcharge le défaut Slidev (URL jsdelivr = hors-ligne cassé).
favicon: /favicon.svg
# Les deux modes sont citoyens de première classe. Touche `d` = toggle.
colorSchema: both
# Support distribué : PDF en mode papier/light, une slide par page, local.
exportFilename: ia-devant-soi-support
export:
  format: pdf
  dark: false
  withClicks: false
# provider:none → aucun fetch Google Fonts. Toutes les polices sont
# auto-hébergées (public/fonts/) et déclarées en @font-face dans le thème.
fonts:
  provider: none
  sans: Atkinson Hyperlegible
  serif: Sinzano
  local: Atkinson Hyperlegible, Sinzano
# Slide 1 = la slide d'attente, importée ici. Ce n'est PAS une slide de
# titre : le deck n'en a toujours aucune, le titre tombe au beat 7.
src: ./pages/00-attente.md
---

---
src: ./pages/01-cold-open.md
---

---
src: ./pages/02-goncourt.md
---

---
src: ./pages/03-lancement.md
---

---
src: ./pages/05-descente-technique.md
---

---
src: ./pages/06-mode-personnage.md
---

---
src: ./pages/07-lecture.md
---

---
src: ./pages/08-cloture.md
---
