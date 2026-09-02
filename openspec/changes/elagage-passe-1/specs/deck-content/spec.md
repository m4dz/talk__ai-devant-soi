# deck-content — delta

## ADDED Requirements

### Requirement: Passe d'élagage 1 — sept slides retirées, contenu préservé

Le deck SHALL avoir retiré, à la passe d'élagage 1 (2026-09-02), les sept slides
listées ci-dessous, choisies par le speaker sur la planche contact commune. Le
contenu de chacune (texte à l'écran et notes de speaker) SHALL être **conservé**
hors du deck, dans `openspec/changes/elagage-passe-1/slides-retirees.md`, pour
être réutilisé lors de la reconstruction de l'arc narratif. Aucune de ces slides
NE SHALL être supprimée sans que son contenu soit préservé.

Slides retirées (numéro de la planche commune 52 slides) :

1. bio Gary — cold open beat 2 ;
2. l'ironie critique — cold open beat 5 ;
3. « Elle n'a rien interdit / annoncé / attend » — pivot Goncourt ;
4. « Ce compteur, c'est notre contrat » — allumage beat 3 ;
5. aparté « gros modèle » — geste Malley ;
6. aphorisme « Compter n'est pas lire » — geste Malley ;
7. « Le chapitre / Il est né » — récolte, révélation chiffrée.

Après cette passe, la numérotation de référence SHALL être celle de la
**nouvelle planche contact (44 slides)** régénérée depuis le deck élagué.

#### Scenario: Les sept slides sont absentes du deck

- **WHEN** on parcourt le deck élagué de bout en bout
- **THEN** aucune des sept slides listées n'apparaît, et le deck compte
  44 slides

#### Scenario: Le contenu retiré reste disponible

- **WHEN** on prépare la reconstruction de l'arc narratif
- **THEN** le texte et les notes de chacune des sept slides retirées sont
  disponibles dans `slides-retirees.md`, avec leur fonction narrative et
  l'impact de leur retrait

#### Scenario: La numérotation commune est rebasée

- **WHEN** on désigne une slide pour le travail slide par slide
- **THEN** le numéro renvoie à la nouvelle planche contact de 44 slides, et non
  à l'ancienne
