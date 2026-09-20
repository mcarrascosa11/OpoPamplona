# Oposición Arquitecto — Ayuntamiento de Pamplona

App de estudio: resúmenes por tema, test de la 1ª prueba (corrección con penalización 1/3) y supuestos prácticos de la 2ª prueba con cronómetro y guión de corrección. Seguimiento de fallos por tema.

## Arrancar en local

```bash
npm install
npm run dev
```

Abre la URL que indica la terminal (normalmente http://localhost:5173).

## Comprobaciones antes de publicar

```bash
# Lo que valida GitHub: estructura del banco y compilación de la app.
npm run check

# Añade la auditoría de las fuentes locales de trabajo (`temas/`).
npm run check:local
```

`temas/` permanece deliberadamente fuera de GitHub: contiene el material local
de trabajo. Por ello la auditoría de fuentes solo se ejecuta en el ordenador
donde está esa carpeta; GitHub valida el banco y la aplicación publicados.

La comprobación de preguntas bloquea errores estructurales (ID duplicado,
respuesta inválida, opciones incompletas o explicación ausente). Los avisos de
calidad editorial, como un distractor absoluto o una respuesta demasiado larga,
se conservan en el informe pero no bloquean el despliegue.

En GitHub, el workflow **Calidad del banco de estudio** se ejecuta en cada pull
request a `main`, en cada actualización de `main` y manualmente. Para que sea
un requisito real antes de producción, activa en GitHub: *Settings → Branches
→ Add branch protection rule → main → Require status checks to pass*, y marca
el check `comprobar`.

## Subir a Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com → New Project → importa el repo.
3. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`.
4. Deploy. Ya tienes la URL para abrir desde los dos ordenadores y el móvil.

Sin más configuración, el progreso se guarda en cada dispositivo por separado (localStorage).

## Sincronizar entre dispositivos (opcional, Supabase)

La app admite una clave publicable de Supabase en el navegador. Esa clave no es
un secreto: la protección real la hace RLS.

1. En Supabase → SQL Editor, ejecuta `scripts/supabase-security-v2.sql`.
   El script es idempotente, conserva los datos y sustituye las antiguas
   políticas permisivas por políticas que exigen demostrar conocimiento del
   código de sincronización mediante su hash SHA-256.
2. En Vercel → Project Settings → Environment Variables, añade:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY` (preferida), o temporalmente
     `VITE_SUPABASE_ANON_KEY` en proyectos antiguos.
3. Redeploy.
4. En la app usa **Generar seguro**. El código generado tiene 128 bits aleatorios.
   Guárdalo únicamente en tus dispositivos y no lo incluyas en capturas, backups
   ni repositorios.

Las tablas de progreso, subrayados e intentos quedan limitadas por RLS al código
correcto. `temas` es solo lectura pública. La `service_role`/secret key nunca
debe llegar al navegador.

### Endpoint privado de generación de preguntas

`/api/generar-preguntas` está desactivado salvo que Vercel tenga estas dos
variables de servidor:

- `GEMINI_API_KEY`
- `GENERAR_PREGUNTAS_TOKEN`

Las peticiones deben usar `Authorization: Bearer <GENERAR_PREGUNTAS_TOKEN>`.
No pongas ninguna de esas variables con prefijo `VITE_`.

## Cómo crece el contenido

Todo el contenido vive en `src/data/`, separado de la lógica:

- `preguntas.js` — banco de test. Añade objetos `{ id, tema, q, o, c, exp }`.
  Para retirar una pregunta auditada sin borrar su historial, añade
  `estado: "retirada"` y, si existe, `sustituidaPor: "E3-XX"`. Las retiradas
  no salen en test ni en repaso de fallos; sus datos históricos se conservan.
- `resumenes.js` — resúmenes por tema.
- `supuestos.js` — supuestos prácticos de la 2ª prueba.
- `temas.js` — índice oficial (no tocar salvo erratas).

Los `tema` usan código: `G1`–`G13` (generales) y `E1`–`E59` (específicos).

### Generar más preguntas con Claude Code

En la carpeta del proyecto, con los PDFs de los temas a mano:

> "Lee tema7.pdf y añade 25 preguntas del tema E31 a src/data/preguntas.js
> siguiendo el formato y las reglas de calidad del comentario de cabecera:
> 4 opciones plausibles, sin absolutos delatores (únicamente/todos/solo),
> la dificultad en el matiz técnico, y citar el artículo en 'exp'."

Así el banco crece sin pasar por el chat ni chocar con límites de conversación.
