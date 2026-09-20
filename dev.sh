#!/bin/sh
# Node está instalado em ~/.local (sem sudo); garante o PATH para o dev server.
export PATH="$HOME/.local/bin:$PATH"
exec npm run dev -- "$@"
