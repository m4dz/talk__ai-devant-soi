# Tasks — passe-graphique-familles

## 1. Inversion de valeur (chantier B — porte le seul bug)

- [x] 1.1 Vérifier empiriquement que `class:` en frontmatter atterrit sur un
  ancêtre de la racine de layout (sinon l'échange de tokens ne cascade pas)
- [x] 1.2 Écrire la règle d'inversion : échange des tokens de valeur, défini
  pour le mode clair puis re-défini sous `html.dark` (inversion relative)
- [x] 1.3 Basculer les deux slides du verdict (section 8) du layout `noir`
  vers leur layout de corps + le modificateur
- [x] 1.4 Supprimer `theme/layouts/noir.vue`
- [x] 1.5 Vérifier à l'export PNG que le verdict contraste dans les DEUX
  modes — c'était le bug
- [x] 1.6 Vérifier ce que l'inversion ne traverse pas (illustration pulp sur
  slide inversée) et le consigner

## 2. Variantes d'exergue (chantier A)

- [x] 2.1 Ajouter les variants `titre` / `aphorisme` (défaut) / `chute` au
  layout, le défaut reproduisant le traitement actuel à l'identique
- [x] 2.2 Traitement du variant `titre` : le titre du talk doit dominer les
  aphorismes de strate
- [x] 2.3 Traitement du variant `chute` : les derniers mots doivent se lire
  comme une fin, pas comme un aphorisme de plus
- [x] 2.4 Qualifier les 12 slides `exergue` par leur rôle
- [x] 2.5 Vérifier qu'aucune slide `aphorisme` n'a bougé (comparaison avant /
  après sur les quatre aphorismes de strate)
- [x] 2.6 Corriger le docstring du layout, qui annonce encore « sections 2
  et 8 » alors qu'il sert six sections

## 3. Slides sans traitement (chantier C)

- [x] 3.1 Layout pour l'entretien de la section 6 (questions typées,
  compatible gabarit)
- [x] 3.2 Traitement des deux slots de composant de la section 7
- [x] 3.3 Vérifier qu'aucune slide n'est plus en layout par défaut

## 4. Vérification

- [x] 4.1 `pnpm run build` OK ; zéro URL externe
- [x] 4.2 Nouvelle planche contact, deux modes, comparée à celle d'avant
- [x] 4.3 Compter les slides à valeur inversée : le rythme de valeur existe-t-il
  désormais, ou reste-t-il anecdotique ?
- [x] 4.4 Relire la liste des non-objectifs et vérifier qu'aucun n'a été
  entamé en passant
