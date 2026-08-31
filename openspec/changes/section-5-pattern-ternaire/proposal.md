## Why

La section 5 dure 14 minutes — la plus longue du talk. Sa mesure révèle deux
défauts de rythme, plus une incohérence de construction dont je suis
responsable :

1. **Six slides d'affilée sans respiration** (l'alternance preuve / mur des
   strates 2 et 3), alors que les trois ponctuations existantes sont tassées
   dans la seconde moitié de la section.
2. **Le même objet rhétorique reçoit trois traitements différents.** Chaque
   strate a sa phrase à emporter, et le script les donne toutes — mais la
   strate 1 la présente en slide seule, les strates 2 et 3 l'utilisent comme
   **titre de mur**, et la strate 4 la noie dans son corps.
3. Conséquence du point 2 : **la conclusion arrive avant l'histoire.**
   « La mémoire ne remplace pas le dessein » est ce qu'on comprend *après*
   avoir vu la solution ; en titre de mur, elle est donnée *avant*.

Contrainte de conception qui oriente tout : **l'ordre des strates va
probablement changer.** La correction doit donc être une **règle uniforme**,
pas un ajustement au cas par cas qui ne survivrait pas à une permutation.

## What Changes

- **Pattern ternaire, identique pour les quatre strates** et insensible à
  leur ordre :

  ```
  ░ pièce à conviction   la preuve du mur
  █ mur                  le problème NOMMÉ + ce qu'il a forcé à construire
  ▲ aphorisme            la phrase à emporter, seule sur sa slide
  ```

- **Les quatre aphorismes, repris verbatim du script** (aucun n'est inventé) :
  le lore → « La référence, c'est le papier » ; l'intention → « La mémoire ne
  remplace pas le dessein » ; la qualité → « Le style n'est pas dans le
  modèle » ; la puissance → « C'est le mur qui rend honnête ».
- **Les titres des murs 2 et 3 nomment désormais le problème** au lieu de
  livrer la conclusion (celle-ci devenant leur aphorisme de clôture).
- **La devise de section est détachée d'une strate.** « La fabrique reste à
  notre main » ne clôt plus la strate puissance mais la **section entière** —
  condition nécessaire pour que les quatre strates soient permutables.
- **Le pont Gary reste attaché à la strate qualité** : il dépend de la fiche
  de style (« une voix reconnaissable entre mille ») et doit voyager avec
  elle, où qu'elle soit placée.

Effets mesurés : 15 → 17 slides, disparition du désert de six slides, rythme
ternaire régulier au lieu d'une alternance binaire irrégulière.

## Risque assumé

La devise « la fabrique reste à notre main » est **gagnée** par l'argument de
la strate puissance (faute de pouvoir acheter la qualité, on la construit).
Si cette strate passe en première position, la devise tombera en fin de
section loin de ce qui la justifie. Elle tiendra — c'est une devise, pas une
déduction — mais elle sera moins méritée. À réévaluer quand le nouvel ordre
des strates sera arrêté.

## Capabilities

### Modified Capabilities

- `deck-content`: la section 5 suit un pattern ternaire uniforme par strate,
  indépendant de l'ordre des strates, et sa devise est portée par la section
  et non par l'une d'elles.

## Impact

- **Modifié** : `slides/pages/05-descente-technique.md` (ajout des deux
  aphorismes manquants, réécriture des titres des murs 2 et 3, détachement de
  la devise), notes de présentateur des slides concernées.
- **Dépendances / réseau** : aucun.
