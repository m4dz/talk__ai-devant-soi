## MODIFIED Requirements

### Requirement: Cold open in medias res

La section 1 SHALL démarrer directement dans le récit Gary/Ajar façon
thriller noir, **sans slide de titre ni introduction**. Elle SHALL ouvrir
sur la mort de Gary (rue du Bac) et se clore par un **beat de pivot** qui
relie l'affaire Ajar à l'IA au moyen de propos **attribués nominativement
et sourcés** d'un membre de l'Académie Goncourt. Le titre du talk SHALL
n'apparaître qu'à la fin de ce beat de pivot.

#### Scenario: Pas de slide de titre

- **WHEN** le deck est ouvert sur sa première slide
- **THEN** la première slide est un beat de récit, pas une page de titre
  ou de sommaire

#### Scenario: Pivot sourcé vers l'IA

- **WHEN** on atteint le dernier beat du cold open
- **THEN** il présente des propos attribués à un juré nommé et sourcés,
  reliant l'affaire Ajar au risque d'une œuvre assistée par IA, puis le
  titre du talk apparaît

## ADDED Requirements

### Requirement: Aucune position d'Académie affirmée

Le deck NE SHALL JAMAIS affirmer que l'Académie Goncourt annonce, refuse,
interdit ou réglemente quoi que ce soit au sujet de l'IA — aucune position
officielle de ce type n'existe. Toute affirmation sur ce terrain SHALL être
un propos **attribué à une personne nommée**, ou une **clause d'éditeur**,
et SHALL afficher sa source à l'écran.

#### Scenario: Propos attribué et sourcé, jamais institutionnel

- **WHEN** une slide traite de la position sur l'IA côté Goncourt ou
  édition
- **THEN** elle attribue les propos à une personne ou une maison nommée et
  affiche la source (publication, numéro, date), sans jamais présenter une
  décision de l'Académie

### Requirement: Section 2 — pivot argumentatif

La section 2 SHALL présenter, dans l'ordre : les propos sourcés du juré
(peur et aveu d'impuissance), la **clause d'originalité** des éditeurs
(l'œuvre cédée doit être produite par l'auteur et non par une machine), et
la **question centrale du talk** — peut-on tracer la limite entre une
œuvre et sa fabrique. Elle SHALL se clore par l'identité du speaker.

#### Scenario: Enchaînement peur → clause → question

- **WHEN** on parcourt la section 2
- **THEN** les propos sourcés, la clause éditoriale et la question centrale
  apparaissent dans cet ordre, suivis de la signature du speaker

### Requirement: Section 3 — roman et contrat du compteur

La section 3 SHALL nommer le roman de démonstration et donner son accroche
d'univers, puis lancer la génération, puis énoncer le **contrat du compte
à rebours** : à zéro, un chapitre inédit existera, que personne n'a lu.

#### Scenario: Roman nommé avant le lancement

- **WHEN** on parcourt la section 3
- **THEN** le roman est nommé avec son accroche avant la slide de lancement

#### Scenario: Contrat du compteur énoncé

- **WHEN** le compte à rebours est lancé
- **THEN** la slide suivante énonce ce qui existera à zéro (un chapitre
  inédit, non lu)

## REMOVED Requirements

### Requirement: Points de contenu bloqués marqués

**Reason** : le blocage est levé. Il n'existe pas de « citation officielle
de l'Académie Goncourt » sur l'IA ; le contenu repose désormais sur des
propos attribués et sourcés (voir « Aucune position d'Académie affirmée »).
Les marqueurs `TODO` correspondants sont retirés du deck.

**Migration** : les slides concernées (section 2 et beat de pivot du cold
open) portent le contenu sourcé définitif ; plus aucun marqueur `TODO` lié
à la citation Goncourt ne subsiste.
