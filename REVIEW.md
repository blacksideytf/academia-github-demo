# Qué revisar en este repositorio

## Prioridad alta

- Claves, tokens o URLs privadas escritas en el código o en un blueprint.
- Datos personales reales en `ejemplos/` (solo se admiten datos inventados).
- Cambios en el webhook de GitHub sin validar la firma.

## Prioridad media

- Llamadas a APIs sin timeout.
- Blueprints de Make con filtros que descarten solicitudes válidas.

## No comentar

- Formato y estilo: ya lo revisa markdownlint en los checks.
