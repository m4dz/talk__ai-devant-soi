#!/usr/bin/env python3
"""Recadrage du bord de feuille sur les tirages destinés au fond perdu.

POURQUOI. Le prompt figé nomme un objet imprimé (« a vintage 1930s pulp
detective magazine cover painting ») : Flux dessine donc une FEUILLE, avec sa
marge, ses coins usés et ses rousseurs de bord. En 4:5 la marge était mangée
par le `object-fit: cover` du layout et personne ne la voyait. En 16:9 natif
elle est entière à l'écran, et l'image se lit comme une photo encadrée au lieu
d'une ambiance (critère de rejet §5.13).

Deux sondes ont montré qu'aucune formulation négative ne défait ce nom — c'est
exactement l'avertissement de §3.2 (« les négations tiennent mal »). Plutôt que
de dériver le style pour un gain incertain, on corrige en aval : mécanique déjà
légitimée par §4bis (correction locale, mesurée, indiscernable d'un tirage
natif). Toujours recadrer la source crème, PUIS dériver les modes (§7).

DÉTECTION. Ni seuil de luminance, ni mesure de platitude :

- un seuil de luminance ne voit rien sur les sujets posés sur aplat crème
  (motifs 1-4), où la marge est crème SUR fond crème ;
- la platitude ne marche pas non plus : la marge n'est pas plate, elle porte
  rousseurs, usure et plis — sa variance vaut celle d'une zone d'ombre.

Ce qui est fiable, c'est la GÉOMÉTRIE : la frontière feuille/illustration est
une droite nette qui court sur toute la longueur du bord. On somme le gradient
par colonne et par ligne, et on cherche la crête dans la bande extérieure.
Aucune crête franche = pas de bord de feuille.

Usage :
    python recadrer.py entree.png sortie.png [--cadrer 16:9] [--marge N]
    python recadrer.py entree.png --mesurer      # ne coupe rien, affiche

Dépendances : pillow, numpy (cf. tools/requirements.txt).
"""

import argparse
import sys

import numpy as np
from PIL import Image

# Garde-fou : une marge ne dépasse jamais cette fraction de la dimension.
# Sert aussi de largeur à la bande où l'on cherche la crête : un bord de
# feuille au-delà signifierait que la détection a mordu dans le sujet.
PLAFOND = 0.12

# La crête doit dominer le gradient médian de l'image d'au moins ce facteur.
# En dessous, il n'y a pas de frontière franche — donc pas de bord de feuille.
FACTEUR_CRETE = 2.5


def _marges(gris: np.ndarray) -> tuple[int, int, int, int]:
    """(gauche, droite, haut, bas) — épaisseur de feuille sur chaque bord."""
    hauteur, largeur = gris.shape
    # Gradient sommé : une frontière rectiligne pleine longueur ressort en pic,
    # là où le détail de l'illustration reste diffus.
    profil_x = np.abs(np.diff(gris, axis=1)).sum(axis=0)
    profil_y = np.abs(np.diff(gris, axis=0)).sum(axis=1)

    def crete(profil: np.ndarray, taille: int, fin: bool) -> int:
        largeur_bande = int(taille * PLAFOND)
        bande = profil[-largeur_bande:] if fin else profil[:largeur_bande]
        if bande.max() < float(np.median(profil)) * FACTEUR_CRETE:
            return 0
        i = int(np.argmax(bande))
        return largeur_bande - i if fin else i + 1

    return (
        crete(profil_x, largeur, False),
        crete(profil_x, largeur, True),
        crete(profil_y, hauteur, False),
        crete(profil_y, hauteur, True),
    )


def _cadrer(boite: tuple[int, int, int, int], ratio: float) -> tuple[int, int, int, int]:
    """Recentre la boîte sur un rapport d'aspect exact, en rognant."""
    gauche, haut, droite, bas = boite
    largeur, hauteur = droite - gauche, bas - haut
    if largeur / hauteur > ratio:
        cible = round(hauteur * ratio)
        marge = (largeur - cible) // 2
        return (gauche + marge, haut, gauche + marge + cible, bas)
    cible = round(largeur / ratio)
    marge = (hauteur - cible) // 2
    return (gauche, haut + marge, droite, haut + marge + cible)


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("entree", help="PNG généré (tirage brut)")
    p.add_argument("sortie", nargs="?", help="PNG recadré (omis si --mesurer)")
    p.add_argument("--mesurer", action="store_true",
                   help="mesure et affiche les marges, n'écrit rien "
                        "(vérification du critère §5.13)")
    p.add_argument("--cadrer", metavar="L:H",
                   help="recentre sur un rapport exact après recadrage "
                        "(ex. 16:9) — sinon la boîte détectée est conservée")
    p.add_argument("--marge", type=int, default=2,
                   help="pixels retirés en plus sur chaque bord, pour manger "
                        "la transition papier/illustration (défaut 2)")
    args = p.parse_args()

    if not args.mesurer and not args.sortie:
        p.error("sortie requise (ou --mesurer)")

    image = Image.open(args.entree).convert("RGB")
    gris = np.asarray(image.convert("L"), dtype=float)
    hauteur, largeur = gris.shape
    gauche, droite, haut, bas = _marges(gris)

    print(f"{args.entree}: {largeur}x{hauteur} — marges "
          f"g={gauche} d={droite} h={haut} b={bas}")

    plafond_l, plafond_h = int(largeur * PLAFOND), int(hauteur * PLAFOND)
    if gauche >= plafond_l or droite >= plafond_l or haut >= plafond_h or bas >= plafond_h:
        print("ERREUR : marge au plafond — la détection a mordu dans le sujet, "
              "ou le tirage n'a pas de bord de feuille net. Recadrage refusé.",
              file=sys.stderr)
        return 1

    if max(gauche, droite, haut, bas) == 0:
        print("Aucun bord de feuille détecté — le tirage est déjà en fond perdu.")
        if args.mesurer:
            return 0

    boite = (
        min(gauche + args.marge, largeur // 2),
        min(haut + args.marge, hauteur // 2),
        max(largeur - droite - args.marge, largeur // 2),
        max(hauteur - bas - args.marge, hauteur // 2),
    )

    if args.cadrer:
        l, h = (float(v) for v in args.cadrer.split(":"))
        boite = _cadrer(boite, l / h)

    utile = (boite[2] - boite[0], boite[3] - boite[1])
    print(f"  → zone utile {utile[0]}x{utile[1]} (ratio {utile[0] / utile[1]:.3f})")

    if args.mesurer:
        return 0

    image.crop(boite).save(args.sortie)
    print(f"OK : {args.sortie}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
