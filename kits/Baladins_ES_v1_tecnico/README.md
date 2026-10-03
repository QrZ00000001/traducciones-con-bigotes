# Kit técnico — Baladins ES v1.1

Este kit contiene la tabla canónica de localización de **Baladins** para
revisión editorial, integración por el estudio o colaboración comunitaria.

## Archivo principal

- `baladins_es_traduccion.csv`: tabla canónica con **4.608 filas** y las
  columnas `Term`, `English` y `Spanish (es-ES)`.
- `Term` es la clave interna de Yarn/I2 Localization. No debe modificarse.
- La columna española está completa: no contiene celdas vacías.
- Mantén intactos los marcadores y etiquetas como `{0}`, `{1}`,
  `<sprite ...>`, `<style=...>` y los saltos de línea.

## Estado de revisión

Las 266 líneas que antes estaban separadas como pendientes ya se integraron
en el CSV principal. Están traducidas y disponibles para una revisión editorial
posterior de tono, contexto y nombres propios, pero ya no existe una tabla
paralela que pueda desincronizarse.

## Integración aplicada en el parche comunitario

La versión funcional usa internamente el slot japonés (`ja`) como español para
conservar la carga nativa de Unity/Yarn; su nombre visible se muestra como
**ESPAÑOL**. Inglés y francés permanecen intactos. El parche final no requiere
BepInEx ni ningún cargador externo y su tipografía incorpora Ñ, tildes y
mayúsculas acentuadas.

## Verificación rápida

1. Abre el CSV con una herramienta compatible con UTF-8.
2. Confirma que hay 4.608 filas y que `Spanish (es-ES)` no tiene celdas vacías.
3. Para editar una entrada, busca por `Term`, no por número de fila.
4. Comprueba la integridad de los archivos del kit con `HASHES_SHA256.txt`.

El CSV es la fuente de revisión e integración. El parche para jugadores se
distribuye por separado como `Baladins_ES_v1.1.zip`.
