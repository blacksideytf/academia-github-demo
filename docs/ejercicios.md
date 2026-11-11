# Ejercicios con este repo

Cada ejercicio usa algo que ya está montado aquí. Hazlos en tu propia copia: un fork, o un repo nuevo creado a partir de este.

## Básico

1. Abre el historial de `make/captura-leads.json` («History») y busca el commit `fix:` que corrigió el filtro. Mira su diff: rojo lo que se quitó, verde lo que se añadió.
2. Abre `prompts/soporte.md` en «Blame» y di qué commit dejó cada línea.
3. Crea un prompt nuevo con «Add file → Create new file» escribiendo `prompts/mi-prompt.md` como nombre.
4. Abre una issue con la plantilla «Tarea o petición» y ponle una etiqueta.

## Medio

1. Crea la rama `docs/mi-cambio`, cambia una línea del README y abre un pull request con la plantilla.
2. Mira el pull request ya fusionado: pestañas Conversation, Commits y Files changed, y qué issue cerró.
3. Provoca un conflicto: dos ramas que cambian la misma línea del README.
4. Repite el ciclo solo con la terminal: `gh repo clone`, `git switch -c`, `git push -u origin` y `gh pr create --fill`.

## Avanzado

1. En «Actions», lanza «Mi primer workflow» con «Run workflow» y lee el log.
2. Abre el pull request con el blueprint roto: mira por qué el check `validar-json` sale en rojo.
3. Lee `.github/CODEOWNERS` y di quién revisaría un cambio en `make/`.
4. Guarda un secreto `MAKE_WEBHOOK_URL` de prueba y lanza «Tareas diarias».
5. Abre un codespace sobre el repo y ejecuta `gh --version` en su terminal.

## GitHub + Claude

1. Lee `CLAUDE.md` y `REVIEW.md`: qué reglas siguen Claude Code y Code Review en este repo.
2. Lee `.github/workflows/claude.yml`: qué secreto necesita y quién puede activar `@claude`.
3. Rellena `docs/runbook-claude-github.md` con los datos de tu empresa, sin claves.
