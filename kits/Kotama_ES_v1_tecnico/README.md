# Kit técnico — Kotama and Academy Citadel ES v1

Este kit contiene la tabla canónica de localización de **Kotama and Academy
Citadel** para revisión editorial, integración por el estudio o colaboración
comunitaria (traducción a otro idioma partiendo del mismo trabajo).

## Archivo principal

- `kotama_es_traduccion.csv`: tabla canónica con **4.678 filas** y las
  columnas `Term`, `English` y `Spanish (es-ES)`.
- `Term` es la clave real de la tabla interna `tblanguage.bytes` (sistema
  propio del estudio, no I2 Localization ni el paquete Unity Localization).
  No debe modificarse.
- La columna española está completa: no contiene celdas vacías.
- Mantén intactas las etiquetas de formato como `<img src='ctrl://...' />` o
  `[color=#FF963E]…[/color]` y los saltos de línea.

## Sistema de idioma del juego

El texto vive en tablas binarias estilo Luban dentro de bundles YooAsset
(`StreamingAssets/yoo/PERes/*.bundle`), no en los formatos habituales de
Unity. La tabla `tblanguage.bytes` tiene 8 columnas de idioma fijas por
nombre (chino simplificado, chino tradicional, inglés, japonés, alemán,
coreano, francés, ruso); no admite un 9º idioma sin recompilar el juego.

## Integración aplicada en el parche comunitario

La versión funcional usa internamente el slot ruso (`Ru`) como español para
no requerir ningún cargador externo ni modificar el ejecutable; su nombre
visible en Ajustes → Language se muestra como **Español**. Los otros 7
idiomas permanecen intactos.

## Verificación rápida

1. Abre el CSV con una herramienta compatible con UTF-8 (con BOM).
2. Confirma que hay 4.678 filas y que `Spanish (es-ES)` no tiene celdas
   vacías.
3. Para editar una entrada, busca por `Term`, no por número de fila.
4. Comprueba la integridad de los archivos del kit con `HASHES_SHA256.txt`.

El CSV es la fuente de revisión e integración. El parche para jugadores se
distribuye por separado como `Kotama_ES_v1.zip`.
