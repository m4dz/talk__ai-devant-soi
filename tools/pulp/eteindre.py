#!/usr/bin/env python3
"""Extinction des rouges surnuméraires — patch numérique §4bis.

POURQUOI. La règle de la série est « exactement un élément rouge », et le rouge
désigne la main cachée. Sur les ambiances nocturnes, le modèle refuse de la
tenir : une rue de Paris porte des lampadaires au pluriel, il les allume tous,
et la voiture garde ses feux arrière. Trois formulations successives du {SUJET}
n'y ont rien changé — c'est l'avertissement de §3.2 pris trois fois de suite.

La doc prévoit exactement ce cas (§4bis) : « un rouge posé sur une masse noire
peut être *éteint* de cette façon — il disparaît dans la silhouette. » C'est le
cas ici : lanternes secondaires et feux arrière sont tous sur du noir.

MÉTHODE. Sélection colorimétrique douce (pas de masque binaire, qui laisserait
un liseré) : chaque pixel reçoit un degré d'appartenance au rouge, et il est
remplacé par son équivalent neutre assombri, proportionnellement à ce degré. Un
halo rouge devient un halo gris sombre — une lampe éteinte, pas un trou noir.

Toujours patcher la source crème, puis dériver les modes (§7). Et recadrer
avant de patcher (§4ter) : inutile de corriger un rouge situé dans une marge
qui va disparaître.

Usage :
    python eteindre.py entree.png --inventaire          # liste les amas rouges
    python eteindre.py entree.png sortie.png --garder 2 # garde les 2 plus gros
    python eteindre.py entree.png sortie.png --zone x,y,l,h [--zone ...]

Dépendances : pillow, numpy (cf. tools/requirements.txt).
"""

import argparse
import sys
from collections import deque

import numpy as np
from PIL import Image

# Encre du deck — cible d'extinction.
ENCRE = np.array([0x0F, 0x0D, 0x0B], dtype=float)

# Un pixel est « rouge » quand son canal R dépasse le plus fort des deux
# autres d'au moins SEUIL. La transition sur LARGEUR évite le liseré.
SEUIL = 18.0
LARGEUR = 55.0

# Ce qui reste de luminance après extinction. 0 = noir plat (trop dur, on voit
# la découpe) ; 0.45 laisse une lampe éteinte lisible dans la masse.
RESTE = 0.45


def _degre_rouge(px: np.ndarray) -> np.ndarray:
    """Degré d'appartenance au rouge, continu dans [0, 1]."""
    dominance = px[:, :, 0] - np.maximum(px[:, :, 1], px[:, :, 2])
    return np.clip((dominance - SEUIL) / LARGEUR, 0.0, 1.0)


def _amas(masque: np.ndarray, minimum: int = 40) -> list[tuple[int, tuple[int, int, int, int]]]:
    """Composantes connexes du masque — (aire, boîte) triées par aire."""
    vus = np.zeros_like(masque, dtype=bool)
    hauteur, largeur = masque.shape
    trouves = []
    for y0 in range(hauteur):
        for x0 in range(largeur):
            if not masque[y0, x0] or vus[y0, x0]:
                continue
            file, aire = deque([(y0, x0)]), 0
            vus[y0, x0] = True
            xmin = xmax = x0
            ymin = ymax = y0
            while file:
                y, x = file.popleft()
                aire += 1
                xmin, xmax = min(xmin, x), max(xmax, x)
                ymin, ymax = min(ymin, y), max(ymax, y)
                for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    ny, nx = y + dy, x + dx
                    if 0 <= ny < hauteur and 0 <= nx < largeur \
                            and masque[ny, nx] and not vus[ny, nx]:
                        vus[ny, nx] = True
                        file.append((ny, nx))
            if aire >= minimum:
                trouves.append((aire, (xmin, ymin, xmax - xmin + 1, ymax - ymin + 1)))
    return sorted(trouves, key=lambda t: -t[0])


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("entree")
    p.add_argument("sortie", nargs="?")
    p.add_argument("--inventaire", action="store_true",
                   help="liste les amas rouges (aire + boîte) et sort")
    p.add_argument("--garder", type=int, metavar="N",
                   help="garde les N amas les plus étendus, éteint les autres")
    p.add_argument("--zone", action="append", default=[], metavar="X,Y,L,H",
                   help="éteint le rouge dans cette zone (répétable)")
    p.add_argument("--sauf", metavar="X,Y,L,H",
                   help="éteint le rouge PARTOUT SAUF dans cette zone — c'est "
                        "la forme utile quand l'élément à garder est unique et "
                        "les parasites nombreux (une lanterne héros et son "
                        "reflet contre une rue entière de lampadaires)")
    p.add_argument("--reste", type=float, default=RESTE,
                   help=f"luminance conservée après extinction (défaut {RESTE})")
    args = p.parse_args()

    image = Image.open(args.entree).convert("RGB")
    px = np.asarray(image, dtype=float)
    degre = _degre_rouge(px)

    if args.inventaire:
        amas = _amas(degre > 0.35)
        print(f"{args.entree}: {len(amas)} amas rouges (aire ≥ 40 px)")
        for rang, (aire, (x, y, l, h)) in enumerate(amas, 1):
            print(f"  {rang:2}. aire {aire:6} px   boîte x={x} y={y} l={l} h={h}")
        return 0

    if not args.sortie:
        p.error("sortie requise (ou --inventaire)")
    if not args.garder and not args.zone and not args.sauf:
        p.error("préciser --garder N, --sauf X,Y,L,H, ou au moins une --zone")

    # Zone d'action : tout par défaut, restreint par --garder / --zone.
    action = np.ones(degre.shape, dtype=bool)
    if args.garder:
        amas = _amas(degre > 0.35)
        for _, (x, y, l, h) in amas[:args.garder]:
            action[y:y + h, x:x + l] = False   # les héros sont préservés
        print(f"{len(amas)} amas ; {min(args.garder, len(amas))} préservé(s), "
              f"{max(0, len(amas) - args.garder)} éteint(s)")
    if args.sauf:
        x, y, l, h = (int(v) for v in args.sauf.split(","))
        action[:] = True
        action[y:y + h, x:x + l] = False
    if args.zone:
        action[:] = False
        for spec in args.zone:
            x, y, l, h = (int(v) for v in spec.split(","))
            action[y:y + h, x:x + l] = True

    poids = degre * action
    if poids.max() == 0:
        print("Aucun rouge à éteindre dans la zone d'action.", file=sys.stderr)
        return 1

    # Équivalent neutre, assombri : la lampe s'éteint, elle ne se troue pas.
    luminance = (0.30 * px[:, :, 0] + 0.59 * px[:, :, 1] + 0.11 * px[:, :, 2])
    neutre = ENCRE[None, None, :] + (luminance * args.reste)[:, :, None]
    sortie = px * (1 - poids)[:, :, None] + np.clip(neutre, 0, 255) * poids[:, :, None]

    Image.fromarray(np.clip(sortie, 0, 255).astype(np.uint8), "RGB").save(args.sortie)
    print(f"OK : {args.sortie}  ({int((poids > 0.05).sum())} px touchés)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
