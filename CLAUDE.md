# Reglas de este repositorio

## Qué es

Repo de práctica de la academia NexumIA: el sistema ficticio de captación de citas de Clínica Sonrisa. Todos los datos son inventados.

## Cómo se trabaja

- Nunca commits directos a main: rama nueva, pull request y revisión.
- Nombre de rama: tipo/descripcion-corta (ej. fix/email-vacio).
- Mensajes de commit en español, en presente y con la convención `tipo: qué cambia`.

## Comandos

- Comprobar los JSON: `find . -name '*.json' -not -path './.git/*' -not -path './.devcontainer/*' -exec jq empty {} \;`

## No tocar

- La carpeta `ejemplos/` solo admite datos inventados con emails de `example.com`.

## Seguridad

- Ninguna clave ni token en el repo. Van a GitHub Secrets o al almacén de secretos de cada herramienta.
