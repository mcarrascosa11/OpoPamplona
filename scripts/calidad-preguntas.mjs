/* Medidor de calidad del banco de preguntas.
   Uso:  node scripts/calidad-preguntas.mjs [tema...]
         node scripts/calidad-preguntas.mjs --peores

   Compara el banco con los dos exámenes oficiales analizados (Gobierno de
   Navarra, arquitecto): 2026 y 2019. Referencias medidas sobre el de 2026:
     · correcta = opción más larga ....... 22 %   (azar puro: 25 %)
     · longitud correcta / incorrectas ... 1,03
     · reparto a/b/c/d ................... 25/27/28/20  (2019: 22/22/29/27)

   Además de los delatores estadísticos, este script comprueba integridad
   estructural y duplicados/casi-duplicados. Los avisos estadísticos sirven
   para detectar patrones; no convierten una pregunta aislada en incorrecta.
*/
import { PREGUNTAS } from "../src/data/preguntas.js";

const UMBRAL_VISIBLE = 25;
const UMBRAL_LETRA = 45;
const MIN_PREGUNTAS = 8;
const MARGEN = 0.10;
const SIMILITUD_DUPLICADO = 0.86;

const args = process.argv.slice(2);
const soloPeores = args.includes("--peores");
const filtro = args.filter((a) => !a.startsWith("--"));

function normalizaTexto(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s) {
  return new Set(normalizaTexto(s).split(" ").filter((x) => x.length > 2));
}

function similitud(a, b) {
  const A = tokens(a), B = tokens(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  return inter / (A.size + B.size - inter);
}

function validaEstructura(qs) {
  const errores = [];
  const ids = new Map();

  for (const q of qs) {
    if (!q || typeof q !== "object") {
      errores.push("pregunta no es un objeto");
      continue;
    }
    if (!q.id) errores.push("pregunta sin id");
    else if (ids.has(q.id)) errores.push(`ID duplicado: ${q.id}`);
    else ids.set(q.id, true);

    if (!q.tema) errores.push(`${q.id || "?"}: falta tema`);
    if (!String(q.q || "").trim()) errores.push(`${q.id || "?"}: falta enunciado`);
    if (!Array.isArray(q.o) || q.o.length !== 4) {
      errores.push(`${q.id || "?"}: debe tener exactamente 4 opciones`);
    }
    if (!Number.isInteger(q.c) || q.c < 0 || q.c > 3) {
      errores.push(`${q.id || "?"}: respuesta correcta c debe ser 0-3`);
    }
    if (!String(q.exp || "").trim()) errores.push(`${q.id || "?"}: falta explicación`);
    if (q.subtema !== undefined && typeof q.subtema !== "string") {
      errores.push(`${q.id || "?"}: subtema debe ser texto`);
    }
    if (Array.isArray(q.o) && q.o.length === 4) {
      q.o.forEach((op, i) => {
        if (!String(op || "").trim()) errores.push(`${q.id || "?"}: opción ${i + 1} vacía`);
      });
      const opciones = q.o.map(normalizaTexto);
      if (new Set(opciones).size !== 4) errores.push(`${q.id || "?"}: opciones duplicadas`);
    }
  }

  return errores;
}

function buscaCasiDuplicados(qs) {
  const avisos = [];
  for (let i = 0; i < qs.length; i++) {
    for (let j = i + 1; j < qs.length; j++) {
      if (qs[i].tema !== qs[j].tema) continue;
      const s = similitud(qs[i].q, qs[j].q);
      if (s >= SIMILITUD_DUPLICADO) {
        avisos.push(`${qs[i].id} ↔ ${qs[j].id} (${Math.round(s * 100)} % similitud)`);
      }
    }
  }
  return avisos;
}

function mide(qs) {
  const n = qs.length;
  if (!n) return { n: 0, larga: 0, visible: 0, ratio: 0, letra: 0, pos: [0, 0, 0, 0], enun: 0 };
  const pos = [0, 0, 0, 0];
  let masLarga = 0, visible = 0, ratio = 0, sumEnun = 0;
  for (const q of qs) {
    const L = q.o.map((x) => String(x).length);
    const orden = [...L].sort((a, b) => b - a);
    if (L[q.c] === orden[0] && L.filter((x) => x === orden[0]).length === 1) {
      masLarga++;
      if ((orden[0] - orden[1]) / orden[1] > MARGEN) visible++;
    }
    ratio += L[q.c] / (L.filter((_, i) => i !== q.c).reduce((a, b) => a + b, 0) / 3);
    if (q.c >= 0 && q.c <= 3) pos[q.c]++;
    sumEnun += String(q.q || "").length;
  }
  return {
    n,
    larga: (100 * masLarga) / n,
    visible: (100 * visible) / n,
    ratio: ratio / n,
    letra: (100 * Math.max(...pos)) / n,
    pos,
    enun: sumEnun / n,
  };
}

const preguntasFiltradas = filtro.length
  ? PREGUNTAS.filter((q) => filtro.includes(q.tema))
  : PREGUNTAS;

if (!preguntasFiltradas.length) {
  console.error("Sin preguntas para: " + filtro.join(", "));
  process.exit(1);
}

const errores = validaEstructura(preguntasFiltradas);
const duplicados = buscaCasiDuplicados(preguntasFiltradas);

if (errores.length) {
  console.error(`\nERRORES ESTRUCTURALES (${errores.length})`);
  errores.slice(0, 50).forEach((e) => console.error(`  ✗ ${e}`));
  if (errores.length > 50) console.error(`  … y ${errores.length - 50} más`);
}

if (duplicados.length) {
  console.warn(`\nAVISOS DE CASI-DUPLICADOS (${duplicados.length})`);
  duplicados.slice(0, 50).forEach((e) => console.warn(`  ⚠ ${e}`));
  if (duplicados.length > 50) console.warn(`  … y ${duplicados.length - 50} más`);
}

const temas = new Map();
for (const q of preguntasFiltradas) {
  if (!temas.has(q.tema)) temas.set(q.tema, []);
  temas.get(q.tema).push(q);
}

const filas = [...temas].map(([tema, qs]) => ({ tema, ...mide(qs) }));
filas.sort((a, b) => b.larga - a.larga);

const global = mide(preguntasFiltradas);
let fallan = 0;

const fila = (m, etiq, marca = " ") =>
  `${marca} ${etiq.padEnd(6)} ${String(m.n).padStart(4)}   ` +
  `${m.larga.toFixed(0).padStart(3)} %  ${m.visible.toFixed(0).padStart(3)} %   ` +
  `${m.ratio.toFixed(2)}   ${m.pos.join("/").padEnd(13)} ${Math.round(m.enun)}`;

console.log("tema      n   +larga  visible  ratio   a/b/c/d       enunciado");
console.log("─".repeat(62));
for (const f of filas) {
  const fiable = f.n >= MIN_PREGUNTAS;
  const mal = fiable && (f.visible > UMBRAL_VISIBLE || f.letra > UMBRAL_LETRA);
  if (mal) fallan++;
  if (soloPeores && !mal) continue;
  console.log(fila(f, f.tema, !fiable ? "·" : mal ? "✗" : "✓"));
}
console.log("─".repeat(62));
console.log(fila(global, "TOTAL"));
console.log("  REAL      100    22 %   ~20 %   1.03   25/27/28/20   240");
console.log(
  `\nSe juzga por la columna 'visible' (la correcta es la más larga con más de` +
    `\nun 10 % de margen, que es lo que de verdad se puede explotar).` +
    `\nTemas que fallan (>${UMBRAL_VISIBLE} % visible o >${UMBRAL_LETRA} % en una letra): ${fallan}` +
    `\nErrores estructurales: ${errores.length}` +
    `\nCasi-duplicados detectados: ${duplicados.length}` +
    `   · = menos de ${MIN_PREGUNTAS} preguntas`
);

process.exitCode = errores.length || fallan ? 1 : 0;
