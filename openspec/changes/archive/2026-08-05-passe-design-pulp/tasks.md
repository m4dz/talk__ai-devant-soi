# Tasks — passe-design-pulp

## 1. Tokens de texture

- [x] 1.1 `theme/styles/tokens.css` — `--texture-opacity`, `--texture-dot`,
  `--texture-size`, `--grain-opacity` (valeurs distinctes dark/light)

## 2. Textures (CSS pur, hors-ligne)

- [x] 2.1 `theme/styles/pulp.css` — halftone (`radial-gradient`) + grain
  (`feTurbulence` SVG `data:`, tuilé), couche `.pulp-bg` sous le contenu
  (pseudo-éléments `z-index` négatif, `pointer-events:none`).
  **Sans `mix-blend-mode`** (retiré : bombe de compositing sur slides
  montées → figeait le rendu)
- [x] 2.2 Importer `pulp.css` dans `theme/styles/index.ts`
- [x] 2.3 Opt-in : `.pulp-bg` bakée dans les layouts RÉCIT (cold-open,
  exergue, case-card, wall) ; layouts fonctionnels/default = nus →
  slides argument sobres

## 3. Ornements

- [x] 3.1 `.cartouche` (label encadré façon cover) sur l'attribution des
  exergues ; `.rule` (filet) conservé

## 4. Calage visuel (itératif)

- [x] 4.1 Vocabulaire pulp posé (halftone, grain, cartouche, filet).
  Note : curation de covers d'époque pour affiner cartouche/bandeau =
  input speaker, hors de cette passe
- [x] 4.2 Texture appliquée aux slides récit ; intensité calée discrète
  dans les deux modes (opacités ~0.04-0.05), vérifiée par export PNG
- [x] 4.3 Accent rouge évalué — **inchangé** (validation projecteur = jour J,
  cf. 5A) ; token prêt à ajuster si besoin

## 5. Vérification

- [x] 5.1 `pnpm run build` OK ; invariant hors-ligne (0 URL externe,
  feTurbulence inline)
- [x] 5.2 Export PNG : texture discrète + texte lisible en dark ET light ;
  slides argument (lancement) toujours nues
- [x] 5.3 Non-régression : layouts fonctionnels (trigger/countdown slide 8)
  intacts et nus
