# Manual de mantenimiento de la web de traducciones

Este archivo es la referencia para cualquier asistente que modifique el proyecto. Leerlo antes de editar una ficha y conservar la estructura y el estilo existentes.

## Archivos principales

- `index.html`: portada y fichas de los juegos.
- `app-revision.html`: página de la aplicación de revisión.
- `styles.css`: estilos compartidos de escritorio y móvil.
- `script.js`: navegación, desplegables, Ko-fi, contador y widgets de Steam.
- `assets/`: imágenes locales propias de la web.
- `assets/logo.png`: logo del gato usado en la cabecera.
- `assets/social-preview.png`: imagen social compartida por las páginas.
- `assets/app-project-workflow.gif`, `assets/app-baladins-comparison.png` y `assets/app-rubinite-revision.png`: demostraciones visuales de la app de revisión.

## Reglas generales

- Hacer cambios pequeños y localizados.
- Si el pedido es exclusivamente móvil, no modificar escritorio; usar los `@media` existentes.
- Mantener los archivos en UTF-8 y el contenido en español.
- No eliminar enlaces, descargas, créditos ni avisos sin autorización.
- Tras editar JavaScript, ejecutar `node --check script.js`.
- Revisar escritorio y una vista móvil de aproximadamente 390 px.

## Orden de una ficha

Cada juego utiliza `<article class="game">` y conserva este orden:

1. Portada vertical en `.cover`.
2. Título y estado opcional en `.game-title-row`.
3. Fecha, motor y género en `.game-meta`.
4. Descripción del juego en `.steam-desc`, si está disponible.
5. Resumen de la traducción en `.blurb`.
6. Tags en `.tags`.
7. Nota de compatibilidad en `.patch-note`, si es necesaria.
8. Widget oficial de Steam.
9. Descargas o enlace a Steam.
10. Contacto, apoyo y kit cuando existan.

## Portadas e imágenes

- Usar portada vertical con proporción aproximada `2:3`.
- Para Steam, preferir la imagen oficial `library_600x900.jpg` o su equivalente en Steam CDN.
- Usar HTTPS y comprobar que la URL cargue.
- El texto alternativo debe ser `Portada de NOMBRE DEL JUEGO`.
- No deformar imágenes ni cambiar el recorte existente.
- No copiar imágenes remotas a `assets/` salvo petición expresa.
- La marca de la cabecera usa `assets/logo.png` y el texto `TRADUCCIONES CON BIGOTES` en ambas páginas.

## Títulos, estados y metadatos

- Título: `<h3 class="display">Nombre</h3>`.
- Estados visibles junto al título: `Disponible` o `Próximamente`.
- El tag equivalente a `Próximamente` es `En preparación`.
- Si un estado salta de línea solo en un juego móvil, usar una clase específica como `status-wraps-mobile`; no alterar todas las fichas.
- Orden de metadatos: `Mes Año` · `Motor` · `Género`.
- Meses: `Ene`, `Feb`, `Mar`, `Abr`, `May`, `Jun`, `Jul`, `Ago`, `Sep`, `Oct`, `Nov`, `Dic`.

## Sistema oficial de tags

Los tags son información breve y comparable. Cantidades y detalles particulares, como `483 cartas`, pertenecen a `.blurb`.

Orden obligatorio:

1. Estado o alcance.
2. Versión.
3. Variante lingüística.
4. Forma de incorporación del idioma.
5. Trabajo técnico.
6. Alcance específico, solo si la traducción es parcial.

Usar entre 2 y 5 tags siempre que sea posible.

### Estado o alcance

- `En preparación`: aún no hay traducción pública terminada.
- `Traducción completa`: todo el contenido relevante está traducido.
- `Traducción parcial`: solo una parte está traducida.

No usar `Próxima traducción`, pues duplica `En preparación`.

### Versión

- Formato: `Traducción vX.Y`.
- La versión corresponde al paquete de traducción, no necesariamente al juego.
- No deducir una versión desde un ZIP ambiguo; confirmarla.
- Una traducción en preparación no lleva versión hasta que exista una definida.

### Idioma e incorporación

- `Español neutro`: evita regionalismos marcados.
- `Español añadido`: se incorpora sin eliminar otro idioma.
- `Reemplaza al francés`: ocupa la opción francesa.
- `Reemplaza al japonés`: ocupa la opción japonesa.
- Para otro idioma, mantener el patrón `Reemplaza al [idioma]`.

### Trabajo técnico

- `Fuente extendida`: se agregaron glifos inexistentes como `ñ`, tildes o signos de apertura.
- `Fuente corregida`: se reparó un fallo de visualización de caracteres o glifos.
- `Interfaz adaptada`: se ajustaron tamaños o espacios para que el español encaje.

`Fuente extendida` y `Fuente corregida` no son sinónimos.

### Traducciones parciales

Al usar `Traducción parcial`, indicar obligatoriamente qué se tradujo. Preferir tags combinados:

- `Interfaz y menús`
- `Diálogos y narrativa`
- `Objetos y habilidades`
- `Teclado y mando`
- `Misiones y tutoriales`
- `Logros y créditos`

En una traducción completa no se enumeran todos los componentes como tags; se detallan en `.blurb`.

## Tags vigentes

- WitchHand: `Traducción completa`, `Traducción v1.0`, `Español neutro`, `Fuente corregida`, `Reemplaza al francés`.
- Baladins: `Traducción completa`, `Traducción v1.1`, `Español neutro`, `Fuente extendida`, `Reemplaza al japonés`.
- Kotama and Academy Citadel: `En preparación`, `Español neutro`.
- Rubinite: `Traducción completa`, `Traducción v1.2`, `Español neutro`, `Fuente corregida`, `Español añadido`.
- Juicy Realm: `Traducción completa`, `Traducción v1.0`, `Español neutro`, `Español añadido`.

## Descripciones

- `.steam-desc` describe el juego; `.blurb` describe el trabajo de traducción.
- En `.blurb` indicar contenido traducido, limitaciones y trabajo técnico.
- Las cifras concretas pueden usarse en la descripción para mostrar la magnitud del trabajo.
- No afirmar que una traducción es completa sin confirmar su alcance.

## Steam

- Usar el widget oficial horizontal con `https://store.steampowered.com/widget/APP_ID/`, tamaño original `646 × 190`, `loading="lazy"` y título accesible.
- Steam no ofrece un widget oficial vertical. No crear uno personalizado salvo solicitud expresa.
- Confirmar el App ID y el nombre del juego.

## SEO y vistas previas sociales

- El nombre oficial del sitio es `Traducciones con Bigotes`.
- Cada página debe tener un `<title>` y una metadescripción propios.
- Mantener Open Graph y Twitter Cards coherentes con el título y la descripción de cada página.
- La URL pública actual es `https://traduccionesconbigotes.pages.dev/`.
- Cada página debe incluir `link rel="canonical"`, `og:url` y URLs absolutas para las imágenes sociales.
- La imagen social vigente es `assets/social-preview.png`; no usar el favicon de 64 px ni las capas incompletas de la mascota.
- Al publicar nuevas páginas, añadirlas a `sitemap.xml`.

## Descargas

- Mantener Mega y MediaFire en `.dropdown-menu` cuando ambos existan.
- No cambiar enlaces sin autorización.
- Comprobar que tag, ZIP y nota de compatibilidad indiquen versiones coherentes.

## Responsive

- Menú hamburguesa hasta 640 px; menú horizontal en escritorio.
- Fichas en una columna hasta 520 px.
- Resolver responsive con CSS siempre que sea posible.
- Los widgets de Steam se escalan con JavaScript porque tienen tamaño fijo.
- Para corregir un solo juego, usar una clase específica en vez de una regla global.

## Lista para añadir un juego

1. Confirmar nombre, fecha, motor, género y App ID.
2. Añadir portada vertical oficial y texto alternativo.
3. Separar descripción del juego y resumen de traducción.
4. Confirmar si está en preparación, completa o parcial.
5. Confirmar versión exacta del paquete.
6. Confirmar si el español se añade o reemplaza otro idioma.
7. Confirmar si la fuente fue extendida, corregida o no modificada.
8. Elegir únicamente tags de este manual.
9. Si es parcial, añadir tags combinados de alcance.
10. Revisar enlaces de Steam y descargas.
11. Probar escritorio y móvil.
