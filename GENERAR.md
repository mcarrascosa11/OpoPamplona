# Cómo llenar la app de contenido (Claude Code)

La terminal da miedo de lejos, pero para esto la usas en modo conversación:
escribes frases en español, no comandos. Aquí tienes el camino corto.

---

## La idea en una frase

Claude Code es solo el "obrero" que escribe el contenido en tus archivos.
Tú estudias en la web (Vercel), no en la terminal. La terminal la abres un
rato, le hablas, y la cierras.

---

## Preparación (una sola vez)

1. **Instala Node.js** (versión 18 o superior) desde https://nodejs.org
   (instalador LTS para Windows; marca "Add to PATH").

2. **Instala Claude Code.** En Windows va sobre WSL; sigue la guía oficial:
   https://docs.claude.com/en/docs/claude-code/overview
   (Necesitas una suscripción Claude Pro o Max: el plan gratuito no incluye Claude Code.)

3. **Pon los PDFs de los temas** en una carpeta `temas/` dentro del proyecto.
   Nómbralos claro: `G01.pdf`, `E29.pdf`, etc.

---

## El día a día (esto es lo único que repites)

1. Abre la carpeta del proyecto en la terminal y escribe:  `claude`
2. Cuando Claude Code arranque, pégale una frase como esta (cámbiale el tema):

> Lee temas/E35.pdf. Añade 25 preguntas del tema E35 al final del array de
> src/data/preguntas.js, respetando EXACTAMENTE el formato y las reglas de
> calidad del comentario de cabecera del archivo: 4 opciones plausibles, sin
> absolutos delatores (únicamente/todos/solo), la dificultad en el matiz
> técnico, y citando el artículo concreto en 'exp'. No toques ninguna otra
> pregunta. Después, añade un resumen del tema E35 a src/data/resumenes.js
> con el mismo formato que el resumen G1 (intro, bloques, claves).

3. Revisa lo que ha hecho (te lo enseña), y si te gusta, dile:

> Súbelo a GitHub con un commit que diga "tema E35".

   Vercel redesplega solo. En unos minutos la web tiene el tema nuevo.

Eso es todo. No memorizas comandos: le hablas.

---

## Regla de oro de calidad

Cuando revises las preguntas que genere, aplica este filtro: si puedes
descartar una opción sin pensar, es una opción de relleno → dile que la
rehaga. Una buena pregunta de oposición te hace dudar aunque sepas el tema.

---

## Reparto de trabajo recomendado

- **Claude Code (local):** el grueso del temario. Generales y específicos
  jurídicos estándar, donde el texto legal es claro y verificable.
- **Claude (chat):** los temas espinosos — forales con cifras delicadas y los
  9 de Pamplona (51–59), que no están en bases de datos y piden criterio fino.
  Para esos, tráeme el PDF al chat y los montamos juntos.

---

## Códigos de tema

- Generales: `G1`–`G13`
- Específicos: `E1`–`E59`

(El índice completo y oficial está en `src/data/temas.js`.)
