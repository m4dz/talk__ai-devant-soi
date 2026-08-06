## MODIFIED Requirements

### Requirement: Jeu du seuil à intervention décroissante

La section 4 SHALL présenter six cas historiques, un par slide, dans
l'ordre d'intervention humaine décroissante : Dumas/Maquet, Carver/Lish,
Vian/Vernon Sullivan, Ern Malley, Oulipo, Racter.

Chaque station SHALL porter à l'écran **la question du jeu** qui lui
correspond (« est-ce encore l'œuvre de… ? ») : c'est elle qui déclenche le
vote à main levée, mécanique centrale de la section.

La section SHALL se clore par un **renversement** — l'énoncé qu'il n'existe
pas de seuil à partir duquel l'œuvre cesse d'appartenir à son auteur, et la
mise en échec de la clause d'originalité posée en section 2 — puis par un
**pont** vers l'ouverture de la fabrique.

#### Scenario: Six cas dans l'ordre

- **WHEN** on parcourt la section 4
- **THEN** les six cas apparaissent chacun sur sa slide, dans l'ordre
  d'intervention humaine décroissante indiqué

#### Scenario: Question du jeu à chaque station

- **WHEN** une station du jeu du seuil est affichée
- **THEN** la question posée à la salle pour ce cas est visible à l'écran

#### Scenario: Renversement puis pont

- **WHEN** on atteint la fin de la section 4
- **THEN** une slide énonce qu'il n'existe pas de seuil, une autre montre
  que la clause d'originalité ne décrit aucun des cas vus, et une dernière
  fait le pont vers la descente dans la fabrique
