# deck-countdown — delta

## REMOVED Requirements

### Requirement: Affichage plein écran puis rappel discret persistant

**Raison du retrait** : renommée et refondue. Au lancement, le timer n'est plus
un grand chiffre autonome mais est **porté par le contrôle de déclenchement**
(le libellé du bouton devient le décompte). Voir ADDED « Affichage au lancement
puis rappel discret persistant ».

## ADDED Requirements

### Requirement: Affichage au lancement puis rappel discret persistant

Au lancement (section 3), le compte à rebours SHALL être **porté par le
contrôle de déclenchement** : le déclencheur affiche le temps restant dans
son propre libellé une fois la génération lancée. Il N'Y SHALL PAS avoir de
grand chiffre autonome distinct sur la slide de lancement.

Sur les slides suivantes, le compte à rebours SHALL rester rappelable en
**discret et persistant** (pilule de coin) tant qu'il tourne, jusqu'à la
section 7 incluse.

La fenêtre d'affichage du rappel discret NE SHALL PAS dépendre de numéros
de slide : elle SHALL être déterminée par l'état de la session (le rappel
n'existe pas avant le lancement) et par une **exclusion explicite** portée
par les slides qui ne doivent pas l'afficher. Ainsi, réécrire ou
redimensionner une section NE SHALL PAS altérer l'affichage.

#### Scenario: Timer porté par le déclencheur au lancement

- **WHEN** on est sur la slide de lancement et que la génération est
  déclenchée
- **THEN** le déclencheur affiche le temps restant qui décompte, et aucun
  grand chiffre autonome ni rappel discret n'est affiché sur cette slide

#### Scenario: Rappel discret persistant jusqu'à la récolte

- **WHEN** le compte à rebours tourne et que l'on parcourt les slides
  suivant le lancement, jusqu'à la section 7
- **THEN** il reste visible en discret dans un coin, de façon persistante
  d'une slide à l'autre

#### Scenario: Absent avant le lancement et sur les slides exclues

- **WHEN** la session n'a pas été lancée, ou que la slide courante déclare
  s'exclure du rappel
- **THEN** le rappel discret n'est pas affiché

#### Scenario: Insensible au redimensionnement des sections

- **WHEN** une section est réécrite et change de nombre de slides
- **THEN** l'affichage du rappel discret reste correct sans modification de
  configuration
