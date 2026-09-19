# Protocolo de revisión de un tema

Este protocolo es obligatorio para cualquier IA que revise contenido de esta oposición. El objetivo no es solo que el contenido sea jurídicamente correcto: debe ser estudiable, ceñirse al programa oficial y entrenar con el estilo del examen de Arquitecto de Navarra.

## 1. Delimitar antes de editar

1. Leer `temario/ALCANCE_OFICIAL_CONVOCATORIA_2026.md` y comprobar qué norma, títulos, capítulos o anexos exige exactamente la convocatoria.
2. Leer el TXT fuente correspondiente en `temas/` de principio a fin.
3. Contrastar los artículos aplicables con su fuente oficial vigente (BON, BOE, LexNavarra u órgano competente). No incorporar materia que quede fuera del alcance oficial, aunque aparezca en un examen de referencia.

## 2. Auditar el TXT fuente

Antes de usarlo para el resumen o para preguntas, verificar:

- Que títulos, capítulos y artículos conservan el orden.
- Que todas las tablas, cuadros, columnas, porcentajes, fechas y notas al pie se han extraído completos y sin filas o columnas desplazadas.
- Que no hay saltos de línea que cambien una condición, una excepción o una cifra. Si una tabla está dañada, reconstruirla desde la fuente oficial antes de usar sus datos.

Si el TXT no trae tablas, dejar constancia de ello en la revisión: no se debe inventar una tabla de la norma. Sí deben crearse tablas didácticas en el resumen cuando ayuden a memorizar comparativas, series de plazos, órganos o cifras.

## 3. Mejorar el resumen

Editar `src/data/resumenes.js` para que el resumen:

- Explique la lógica del tema y sus relaciones, no sea una copia abreviada.
- Destaque los requisitos acumulativos, excepciones, órganos competentes, efectos, plazos y consecuencias.
- Incluya todas las cifras y datos recuperables de tablas o listas del TXT.
- Añada `memorizacion.tablas` para las comparativas de alto rendimiento.
- Respete las notas personales del usuario: nunca borrarlas ni sustituirlas.

## 4. Auditar y editar las preguntas

La referencia formal es el cuestionario real de Arquitecto de Navarra incluido en el repositorio (`Cuestionario de la primera prueba (2).pdf`). Cada pregunta activa debe tener cuatro alternativas plausibles y competir en un matiz real: requisito acumulativo, plazo, órgano, excepción, orden de una secuencia o consecuencia jurídica.

No sirven preguntas de definición corta, alternativas absurdas, ni trampas de palabras como «solo», «únicamente», «siempre» o «nunca» cuando no expresen una regla jurídica literal y decisiva. El enunciado y las opciones deben ser desarrollados, similares en longitud y propios de un examen real.

El estándar es **15 preguntas activas por tema**. Deben cubrir el programa de forma selectiva: es preferible una pregunta exigente y útil a varias fáciles.

### Tema nuevo o sin historial

Se puede sustituir el banco completo. Mantener 15 preguntas activas.

### Tema leído o con historial de respuestas

1. Conservar las preguntas que superen la auditoría.
2. Reescribir *in situ* las deficientes conservando su `id`, para preservar sus estadísticas de aciertos, fallos y repetición.
3. Si hay que retirar una pregunta, **no borrarla**: añadir `estado: "retirada"` y, cuando proceda, `sustituidaPor: "CODIGO-XX"`. Así no sale en test ni en repaso de fallos, pero se conserva su historial.
4. Dejar exactamente 15 preguntas activas.

## 5. Verificación antes de publicar

1. Comprobar que hay 15 preguntas activas del tema, con IDs únicos, cuatro opciones, respuesta válida y explicación con artículo o fuente.
2. Ejecutar `npm run auditar:preguntas` y revisar específicamente el tema.
3. Ejecutar `npm run build`.
4. Revisar el diff para confirmar que solo se modificaron el resumen, las preguntas y los documentos de auditoría previstos.
5. Hacer commit, push y confirmar que el despliegue de Vercel está `READY`.

Al entregar, indicar con precisión: estado del TXT y de sus tablas, fuente vigente usada, cambios en el resumen, preguntas activas/retiradas, verificaciones y estado de producción.
