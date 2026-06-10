# Oposición Arquitecto — Ayuntamiento de Pamplona

App de estudio: resúmenes por tema, test de la 1ª prueba (corrección con penalización 1/3) y supuestos prácticos de la 2ª prueba con cronómetro y guión de corrección. Seguimiento de fallos por tema.

## Arrancar en local

```bash
npm install
npm run dev
```

Abre la URL que indica la terminal (normalmente http://localhost:5173).

## Subir a Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com → New Project → importa el repo.
3. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`.
4. Deploy. Ya tienes la URL para abrir desde los dos ordenadores y el móvil.

Sin más configuración, el progreso se guarda en cada dispositivo por separado (localStorage).

## Sincronizar entre dispositivos (opcional, Supabase)

1. Crea un proyecto gratis en https://supabase.com
2. En el SQL Editor, ejecuta:

```sql
create table progreso (
  codigo text primary key,
  data jsonb,
  updated_at timestamptz default now()
);
alter table progreso enable row level security;
-- Política permisiva (sin login). El "código" actúa de clave privada:
-- quien no lo conozca no puede leer/escribir una fila concreta sin adivinarlo.
create policy "acceso por codigo" on progreso
  for all using (true) with check (true);
```

> Nota de seguridad honesta: esto no usa login. La privacidad depende de que tu
> código de sincronización sea difícil de adivinar. Para un banco de preguntas
> de estudio es asumible; no guardes aquí datos sensibles.

3. En Vercel → Project Settings → Environment Variables, añade:
   - `VITE_SUPABASE_URL` = la URL de tu proyecto Supabase
   - `VITE_SUPABASE_ANON_KEY` = la anon/public key
4. Redeploy. En la pantalla de Inicio aparecerá el campo "código de sincronización".
   Escribe el mismo código en los tres dispositivos y compartirán progreso.

## Cómo crece el contenido

Todo el contenido vive en `src/data/`, separado de la lógica:

- `preguntas.js` — banco de test. Añade objetos `{ id, tema, q, o, c, exp }`.
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
