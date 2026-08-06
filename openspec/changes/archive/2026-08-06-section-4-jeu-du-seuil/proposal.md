## Why

La section 4 porte encore ma prose de wireframe (jalon 2). Le script
`docs/scripts/03-section-4-jeu-du-seuil.md` la fixe : six stations avec
leurs faits précis, **la question du jeu à chaque station**, puis deux
beats qui manquent entièrement au deck — le **renversement** (« il
n'existe pas de seuil ») et le **pont** vers la fabrique.

Le renversement est le pivot argumentatif de tout le talk : c'est là que
la clause d'originalité posée en section 2 est pulvérisée. Il n'a
aujourd'hui aucune slide.

## What Changes

- **Textes des six stations réécrits d'après le script** (faits, dates,
  chiffres) : Dumas/Maquet (procès de 1858 : l'argent, jamais le nom),
  Carver/Lish (coupes jusqu'à la moitié, les deux versions publiées côte à
  côte en 2007), Vian (le procès, la condamnation), Ern Malley (fabriqué
  en un après-midi, aujourd'hui dans les anthologies), Oulipo (Queneau a
  écrit la machine, pas les poèmes), Racter (la controverse inverse : un
  livre de machine accusé d'être trop humain).
- **La question du jeu sur chaque carte** (« est-ce encore l'œuvre de… ? »)
  — c'est le moteur de la section, les mains se lèvent dessus.
- **Slide diptyque Carver / Lish** (deux colonnes, la même fin de nouvelle
  dans les deux versions), demandée explicitement par le script. Contenu en
  **gabarit** : les deux extraits réels restent à sourcer (*Beginners* →
  *What We Talk About When We Talk About Love*, New Yorker 2007).
- **Renversement** : la phrase seule (« Il n'existe pas de seuil à partir
  duquel l'œuvre cesse d'être la vôtre »), puis la clause pulvérisée
  (« Maquet produisait. Lish produisait. Pavlowitch incarnait. Le lecteur
  de Queneau génère. »).
- **Pont** vers la descente (« Descendons. »).
- **Marqueur de gabarit** dans le thème : signale un contenu en attente,
  visible en répétition, inventoriable par recherche. Il remplace l'ancien
  `.todo` (supprimé avec le blocage Goncourt) pour un usage différent : du
  contenu qui viendra, pas un blocage factuel.

**Écarts assumés au script** (validés) : le script ne prévoit de slide que
pour Dumas, le diptyque Carver/Lish et le renversement — la station Oulipo
n'en a aucune (le livre sur scène *est* la slide). On garde nos **six
cartes illustrées** et on ajoute la clause pulvérisée et le pont en slides,
parce que les illustrations pulp portent la galerie. La barre `balance`
(repère visuel Auteur ↔ Dispositif) est conservée.

## Capabilities

### Modified Capabilities

- `deck-content`: la section 4 gagne des exigences — la question du jeu
  présente à chaque station, le renversement et le pont, en plus des six
  cas déjà exigés dans l'ordre.

### New Capabilities

- `deck-placeholders`: marquage des contenus en attente — une slide dont le
  contenu définitif n'existe pas encore le signale visiblement et de façon
  inventoriable, sans jamais afficher de faux contenu comme s'il était réel.

## Impact

- **Modifié** : `slides/pages/04-jeu-du-seuil.md` (réécriture),
  `theme/layouts/case-card.vue` (champ question).
- **Ajouté** : `theme/layouts/diptyque.vue`, marqueur de gabarit dans
  `theme/styles/`.
- **Dépendances / réseau** : aucun.
