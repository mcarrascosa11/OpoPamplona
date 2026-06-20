/**
 * Carga (upsert) los archivos .txt de temas/ en la tabla `temas` de Supabase.
 *
 * Uso:
 *   node --env-file=.env.local scripts/cargar-temas.js
 *
 * Variables requeridas en .env.local:
 *   SUPABASE_URL=https://xxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY=eyJ...
 *
 * La service_role key salta RLS y puede escribir. NUNCA la pongas en el front.
 */

import { createClient } from "@supabase/supabase-js";
import { readdir, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const TEMAS_DIR = join(__dir, "..", "temas");

// ── Supabase ─────────────────────────────────────────────────────────────────
const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPA_URL || !SUPA_KEY) {
  console.error("Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local");
  process.exit(1);
}
const supa = createClient(SUPA_URL, SUPA_KEY, {
  auth: { persistSession: false },
});

// ── Extrae código de tema del nombre de archivo ───────────────────────────────
// Tema03.txt     → { serie: 'G', numero: 3,  codigo: 'G3'  }
// E_Tema01.txt   → { serie: 'E', numero: 1,  codigo: 'E1'  }
// E_Tema_59.txt  → { serie: 'E', numero: 59, codigo: 'E59' }
function parsearNombre(filename) {
  // Específicos: E_Tema_NN.txt o E_TemaNN.txt
  const especifico = filename.match(/^E_Tema_?(\d+)\.txt$/i);
  if (especifico) {
    const numero = parseInt(especifico[1], 10);
    return { serie: "E", numero, codigo: `E${numero}` };
  }
  // Generales: TemaNNN.txt
  const general = filename.match(/^Tema(\d+)\.txt$/i);
  if (general) {
    const numero = parseInt(general[1], 10);
    return { serie: "G", numero, codigo: `G${numero}` };
  }
  return null;
}

// ── Extrae título: primera línea no vacía y no compuesta solo de signos ───────
function extraerTitulo(texto) {
  const ignorar = /^[=\-#*_\s]+$/;
  for (const linea of texto.split("\n")) {
    const l = linea.trim();
    if (l && !ignorar.test(l)) {
      // Quita prefijo "Tema N.-" si existe
      return l.replace(/^Tema\s+\d+\.\-\s*/i, "").replace(/^={3,}\s*/, "").trim();
    }
  }
  return "(sin título)";
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const archivos = (await readdir(TEMAS_DIR))
    .filter((f) => f.endsWith(".txt"))
    .sort();

  const registros = [];
  const strayHash = [];   // archivos con líneas '^#[^#]' sueltas

  for (const archivo of archivos) {
    const meta = parsearNombre(archivo);
    if (!meta) {
      console.warn(`  ⚠ Nombre no reconocido, se omite: ${archivo}`);
      continue;
    }

    const raw = await readFile(join(TEMAS_DIR, archivo), "utf8");
    // Normaliza CRLF → LF (verbatim en lo demás)
    const contenido = raw.replace(/\r\n/g, "\n");
    const titulo = extraerTitulo(contenido);
    const content_hash = createHash("sha256").update(contenido).digest("hex");

    // Detección de '#' sueltos (no divisores de ###...)
    const lineaHashSuelto = contenido
      .split("\n")
      .filter((l) => /^#(?!#)/.test(l) && !/^#{5,}/.test(l));
    if (lineaHashSuelto.length) {
      strayHash.push({ archivo, lineas: lineaHashSuelto });
    }

    registros.push({ ...meta, titulo, contenido, content_hash });
  }

  console.log(`\n📂 ${archivos.length} archivos .txt encontrados → ${registros.length} parseados\n`);

  // Informe de '#' sueltos
  if (strayHash.length === 0) {
    console.log("✅ Sin '#' sueltos en ningún tema.\n");
  } else {
    console.warn(`⚠  '#' sueltos detectados en ${strayHash.length} archivo(s):`);
    strayHash.forEach(({ archivo, lineas }) => {
      lineas.forEach((l) => console.warn(`   ${archivo}: ${l.slice(0, 80)}`));
    });
    console.log();
  }

  // Upsert por lotes de 10
  let insertados = 0, actualizados = 0, sinCambio = 0;
  const LOTE = 10;

  for (let i = 0; i < registros.length; i += LOTE) {
    const lote = registros.slice(i, i + LOTE);

    // Consulta hashes actuales para detectar sin cambio
    const codigos = lote.map((r) => r.codigo);
    const { data: existentes } = await supa
      .from("temas")
      .select("codigo, content_hash")
      .in("codigo", codigos);
    const hashActual = Object.fromEntries(
      (existentes || []).map((r) => [r.codigo, r.content_hash])
    );

    const aUpsert = [];
    lote.forEach((r) => {
      if (hashActual[r.codigo] === r.content_hash) {
        sinCambio++;
      } else {
        aUpsert.push({ ...r, updated_at: new Date().toISOString() });
        if (hashActual[r.codigo]) actualizados++; else insertados++;
      }
    });

    if (aUpsert.length) {
      const { error } = await supa
        .from("temas")
        .upsert(aUpsert, { onConflict: "codigo" });
      if (error) {
        console.error(`Error en lote ${i / LOTE + 1}:`, error.message);
        process.exit(1);
      }
    }
    process.stdout.write(`\r  Procesando ${Math.min(i + LOTE, registros.length)}/${registros.length}...`);
  }

  console.log(`\n\n✅ Carga completada:`);
  console.log(`   ${insertados} insertados`);
  console.log(`   ${actualizados} actualizados`);
  console.log(`   ${sinCambio} sin cambios`);
}

main().catch((e) => { console.error(e); process.exit(1); });
