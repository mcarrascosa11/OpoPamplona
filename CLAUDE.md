# OpoPamplona

App de estudio para la oposición de Arquitecto del Ayuntamiento de Pamplona. Cómo arrancarla y las
comprobaciones antes de publicar están en `README.md`.

## Publicar sin llenar Vercel

La cuenta de Vercel es Hobby: 10 GB de Deployment Storage para todos los proyectos de Marcos juntos, y cada
push crea un despliegue que ocupa espacio. En octubre de 2026 se llenaron los 10 GB (este repo llegó a 21
pushes en un solo día).

- Agrupa los cambios y haz un solo push al terminar, no uno por commit ni por archivo.
- Trabaja en `main` o en una sola rama por cambio. Al fusionarla, borra la rama: mientras exista, Vercel
  conserva su última preview.
- No crees ramas de prueba, temporales o variantes (`-v2`, `-final`, `-fix`…). Si hace falta conservar algo,
  usa una etiqueta (`git tag archivo/<nombre>`), que no genera despliegues.

## Dónde vive el contenido

- Preguntas: un archivo por tema en `src/data/preguntas/<TEMA>.js` (`export default [...]`).
  `src/data/preguntas.js` conserva la cabecera con las reglas de calidad y solo importa y une los temas.
- Resúmenes: un archivo por tema en `src/data/resumenes/<TEMA>.js` (`export default {...}`).
  `src/data/resumenes.js` conserva la cabecera con el formato y solo importa y une los temas.
- Tema nuevo: crea sus dos archivos y añade el `import` y la entrada en ambos índices, en el orden
  G1–G13, E1–E59. Comprueba con `npm run check` antes de publicar.

## Publicar desde una conversación normal

Marcos no trabaja desde Claude Code: pide los cambios en conversaciones normales y no quiere tocar
código. Los cambios se suben con el conector de GitHub (`push_files`), en un solo commit por tarea y
solo con los archivos del tema tocado más los índices si cambian. Por eso los datos están divididos por
tema: no vuelvas a juntarlos en un único archivo grande, porque el conector no puede subirlo.
Los archivos grandes que no se pueden dividir (como `src/App.jsx`) se cambian desde el editor web de
GitHub en el navegador, con el permiso de Marcos, comprobando el diff antes de confirmar.

## Vigencia de las normas

Antes de hacer el resumen o las preguntas de un tema, comprueba que el TXT de `temas/` refleja la
redacción vigente a finales de mayo de 2026, cuando se publicó la convocatoria (BON, 21-05-2026): artículos
o capítulos derogados, modificaciones posteriores y «Notas de vigencia» sin resolver. Contrasta con el texto
consolidado oficial (BOE o LexNavarra). Si el TXT está desfasado, no estudies lo derogado y corrige lo que
se muestra en «Leer temas» desde `src/data/textosTemas.js`.
