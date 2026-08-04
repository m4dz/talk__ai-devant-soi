---
# Thème local (design system dédié) — pas de thème npm tiers.
# Chemin relatif à slides.md (dossier slides/) → remonte à theme/ racine.
theme: ../theme
title: L'IA devant soi
# Favicon local — surcharge le défaut Slidev (URL jsdelivr = hors-ligne cassé).
favicon: /favicon.svg
# Les deux modes sont citoyens de première classe. Touche `d` = toggle.
colorSchema: both
# provider:none → aucun fetch Google Fonts. Toutes les polices sont
# auto-hébergées (public/fonts/) et déclarées en @font-face dans le thème.
fonts:
  provider: none
  sans: Atkinson Hyperlegible
  serif: Sinzano
  local: Atkinson Hyperlegible, Sinzano
# La première section (cold open) est importée ici : pas de slide de titre.
src: ./pages/01-cold-open.md
---

---
src: ./pages/02-goncourt.md
---

---
src: ./pages/03-lancement.md
---

---
src: ./pages/04-jeu-du-seuil.md
---

---
src: ./pages/05-descente-technique.md
---

---
src: ./pages/06-resolution.md
---

---
src: ./pages/07-lecture.md
---

---
src: ./pages/08-cloture.md
---
