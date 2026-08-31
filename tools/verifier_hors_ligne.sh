#!/usr/bin/env bash
# Vérifie l'invariant hors-ligne du deck buildé.
#
# ⚠ Le build sort dans slides/dist/ — Slidev prend slides/ comme racine
# projet. Un grep sur ./dist/ à la racine du repo ne trouve RIEN et donne
# une fausse assurance : c'est l'erreur que ce script existe pour empêcher.
#
# On ne cherche pas « une URL externe » (il en reste d'inertes : espaces de
# noms XML, liens de l'UI Slidev, messages de console). On cherche ce qui
# DÉCLENCHE UNE REQUÊTE au chargement : ressource référencée, police
# distante, import CSS.
set -uo pipefail
D=slides/dist
[ -d "$D" ] || { echo "✗ $D absent — lancer le build d'abord"; exit 1; }

fail=0
verifier() {
  local libelle="$1" motif="$2"
  local trouve
  trouve=$(grep -rhoE "$motif" "$D" --include='*.html' --include='*.js' \
             --include='*.css' 2>/dev/null \
           | grep -vE '://(localhost|127\.0\.0\.1)' | sort -u)
  if [ -n "$trouve" ]; then
    echo "✗ $libelle"; echo "$trouve" | sed 's/^/    /'; fail=1
  else
    echo "✓ $libelle"
  fi
}

verifier "aucune ressource externe (src/href)" '(src|href)="https?://[^"]+"'
verifier "aucune police distante"              '@font-face[^}]*https?://[^)]*'
verifier "aucun import CSS distant"            '@import[^;]*https?://[^;]*'
verifier "aucun preload/prefetch externe"      'rel="(preload|prefetch|preconnect|dns-prefetch)"[^>]*https?://'

echo
echo "URLs externes inertes présentes (pour information, non bloquant) :"
grep -rhoE 'https?://[a-zA-Z0-9.-]+' "$D" --include='*.html' --include='*.js' \
  --include='*.css' 2>/dev/null \
  | grep -vE '://(localhost|127\.0\.0\.1)' | sort | uniq -c | sort -rn | sed 's/^/    /'

exit $fail
