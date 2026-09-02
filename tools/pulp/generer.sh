#!/usr/bin/env bash
# Tirage des illustrations pulp — piloté par jobs.tsv, reprenable.
#
# Le prompt n'est JAMAIS écrit ici : il se compose de trois morceaux
# versionnés — le préfixe, le {SUJET} du job, et l'un des quatre tails figés
# de tails/. Toute correction passe par le {SUJET} ou par la sélection des
# tirages (cf. docs/visuels-pulp.md §3-§5), jamais par un prompt ad hoc.
#
# Usage :
#   tools/pulp/generer.sh                 # tous les jobs
#   tools/pulp/generer.sh ident-01-m4dz   # un job
#   PULP_DRY=1 tools/pulp/generer.sh      # affiche les commandes, ne tire rien
#
# Surcharges (sondes du lot 4) :
#   PULP_W / PULP_H     forcent les dimensions (repli 1024x576)
#   PULP_SEEDS          forcent la liste de seeds (ex. « 800 »)
#   PULP_REF            force l'image de référence du mode `edit` — sert à
#                       sonder une source retraitée sans toucher jobs.tsv
#   PULP_STEPS          défaut 6
#   PULP_EXTRA          arguments mflux supplémentaires
#                       (ex. « --mlx-cache-limit-gb 12 »)

set -euo pipefail

ICI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PULP_VENV="${PULP_VENV:-$HOME/.cache/pulpvenv}"
JOBS="$ICI/jobs.tsv"
TAILS="$ICI/tails"
OUT="$ICI/tirages"
LOG="$OUT/generer.log"

STEPS="${PULP_STEPS:-6}"
QUANT="${PULP_QUANT:-4}"
BASE_MODEL="flux2-klein-4b"
FILTRE="${1:-}"

[ -x "$PULP_VENV/bin/mflux-generate-flux2" ] || {
  echo "ERREUR : environnement absent. Lancer d'abord tools/pulp/bootstrap.sh" >&2
  exit 1
}
mkdir -p "$OUT"

PREFIXE="$(cat "$TAILS/prefixe.txt")"

# Développe « 800-803 » ou « 800,801 » en liste de seeds.
developper_seeds() {
  local spec="$1"
  local morceau
  for morceau in ${spec//,/ }; do
    if [[ "$morceau" == *-* ]]; then
      seq "${morceau%%-*}" "${morceau##*-}"
    else
      echo "$morceau"
    fi
  done
}

echo "[$(date '+%F %T')] === batch pulp (steps=$STEPS q=$QUANT) ===" | tee -a "$LOG"

# Colonnes : name mode tail w h seeds ref sujet
while IFS=$'\t' read -r name mode tail w h seeds ref sujet; do
  # En-tête, lignes vides, commentaires.
  [ -z "${name:-}" ] && continue
  case "$name" in \#*|name) continue ;; esac
  [ -n "$FILTRE" ] && [ "$name" != "$FILTRE" ] && continue

  [ -f "$TAILS/$tail.txt" ] || { echo "ERREUR : tail inconnu « $tail » ($name)" >&2; exit 1; }

  w="${PULP_W:-$w}"
  h="${PULP_H:-$h}"
  prompt="$PREFIXE $sujet, $(cat "$TAILS/$tail.txt")"

  for seed in $(developper_seeds "${PULP_SEEDS:-$seeds}"); do
    fichier="$OUT/${name}-s${seed}.png"
    if [ -f "$fichier" ]; then
      echo "[skip] $fichier" | tee -a "$LOG"
      continue
    fi

    case "$mode" in
      txt2img)
        bin="$PULP_VENV/bin/mflux-generate-flux2"
        ref_args=()
        ;;
      edit)
        bin="$PULP_VENV/bin/mflux-generate-flux2-edit"
        chemin_ref="$ICI/${PULP_REF:-$ref}"
        [ -f "$chemin_ref" ] || {
          echo "ERREUR : référence absente pour $name : $chemin_ref" >&2
          echo "         (les sources ne sont pas versionnées — cf. CLAUDE.md)" >&2
          exit 1
        }
        ref_args=(--image-paths "$chemin_ref")
        ;;
      *) echo "ERREUR : mode inconnu « $mode » ($name)" >&2; exit 1 ;;
    esac

    echo "[$(date '+%T')] >>> $name seed $seed — ${w}x${h}, tail $tail, mode $mode" | tee -a "$LOG"

    # shellcheck disable=SC2086  # PULP_EXTRA est volontairement redécoupé
    # ${x[@]+"${x[@]}"} : bash 3.2 (macOS) refuse une expansion de tableau
    # vide sous `set -u`.
    cmd=("$bin" --base-model "$BASE_MODEL" --quantize "$QUANT" --steps "$STEPS"
         --width "$w" --height "$h" --seed "$seed"
         ${ref_args[@]+"${ref_args[@]}"} ${PULP_EXTRA:-}
         --prompt "$prompt" --output "$fichier")

    if [ -n "${PULP_DRY:-}" ]; then
      printf '%q ' "${cmd[@]}"; echo
      continue
    fi

    # Le pic mémoire est la mesure qui décide de la résolution (lot 4, P1).
    "${cmd[@]}" 2>&1 | grep -Ei 'peak|error|traceback' | tee -a "$LOG" || true
  done
done < "$JOBS"

echo "[$(date '+%F %T')] === fin de batch ===" | tee -a "$LOG"
echo
echo "Tirages dans $OUT (ignoré par git)."
echo "Sélection MANUELLE par les critères docs/visuels-pulp.md §5,"
echo "puis copie du retenu dans public/images/."
