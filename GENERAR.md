# Cómo generar preguntas para OpoPamplona

**Guía obligatoria (v2.1):** [GUIA_PREGUNTAS.md](GUIA_PREGUNTAS.md). Sustituye las antiguas instrucciones genéricas de «4 opciones plausibles y sin absolutos»: ahora exige opciones equiparables en longitud y estructura, distractores jurídicamente cercanos, verificación de las cuatro opciones y auditoría adversarial ciega antes de publicar.

## Preparación

Instala Node.js (18 o superior) y Claude Code siguiendo su documentación oficial. Los documentos de cada tema se guardan en la carpeta del proyecto, identificados con su código oficial. Para generar preguntas nuevas, lee primero `GUIA_PREGUNTAS.md` y comprueba la redacción vigente de la normativa en sus fuentes oficiales.

## Instrucción para Claude Code (sustituye la del archivo anterior)

> Lee íntegramente GUIA_PREGUNTAS.md. Trabaja con el tema E35 y su documento original: revisa antes las preguntas ya existentes en src/data/preguntas.js y genera 25 preguntas originales, distintas y verificadas, siguiendo todas las fases y filtros de la guía. En el enunciado (`q`) de CADA pregunta original cita la norma con su denominación completa, incluyendo tipo, número, fecha y título, como en los cuestionarios oficiales; cita además artículo o apartado cuando ayude a precisar. No relegues la cita a la explicación. No publiques candidatas que delaten su respuesta por longitud, absolutos, precisión o alternativas absurdas. Realiza una revisión jurídica y otra adversarial ciega, con un revisor independiente si está disponible. Conserva solo las preguntas APTAS; si no reúnes 25, entrega menos. Añádelas al final del tema respetando IDs y formato, sin modificar otras preguntas, y ejecuta node scripts/auditar_preguntas.cjs y node scripts/calidad-preguntas.mjs E35. Comunica los avisos y revisa el diff antes de hacer commit.

Cambia E35 y 25 por el tema y la cantidad que necesites. El formato está especificado en la sección 7 de la guía; los criterios y ejemplos de las preguntas E28-08 y E28-15 están en las secciones 2, 4 y 6.

## Separación de preguntas

Las preguntas extraídas de exámenes oficiales se copian **literalmente** con sus opciones, respuestas de plantilla, fuente y convocatoria; no se reescriben para darles una longitud pareja. Se incluyen solo si son pertinentes para los 72 temas y para el marco normativo aplicable. La guía de generación se aplica exclusivamente a las preguntas sintéticas.

## Importante

La guía y este archivo no corrigen el banco existente. Para el tema que ya está generado, utiliza el «Prompt de auditoría retrospectiva» de la sección 9 de GUIA_PREGUNTAS.md. Los scripts existentes detectan ciertos problemas de forma, **no** validan interpretación jurídica ni sustituyen la auditoría ciega.

El endpoint de la web `api/generar-preguntas.js` tiene instrucciones independientes; su prompt también debe sincronizarse con esta guía para que la generación desde la web cambie.
