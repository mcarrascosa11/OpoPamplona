/* Medidor de calidad del banco de preguntas.
   Uso:  node scripts/calidad-preguntas.mjs [tema...]
         node scripts/calidad-preguntas.mjs --peores

   Compara el banco con los dos exámenes oficiales analizados (Gobierno de
   Navarra, arquitecto): 2026 y 2019. Referencias medidas sobre el de 2026:
     · correcta = opción más larga ....... 22 %   (azar puro: 25 %)
     · longitud correcta / incorrectas ... 1,03
     · reparto a/b/c/d ................... 25/27/28/20  (2019: 22/22/29/27)
   Los delatores que queremos evitar son que la correcta sea sistemáticamente
   la más larga y que se concentre en una letra.                              */
import { PREGUNTAS } from "../src/data/preguntas.js";

const UMBRAL_VISIBLE = 25; // % de "correcta visiblemente más larga" que hace fallar al tema
const UMBRAL_LETRA = 45; // % de concentración en una sola letra
const MIN_PREGUNTAS = 8; // por debajo de esto el porcentaje es ruido

const args = process.argv.slice(2);
const soloPeores = args.includes("--peores");
const filtro = args.filter((a) => !a.startsWith("--"));

/* Dos medidas de "la correcta es la más larga":
     · estricta: lo es aunque sea por un carácter. Comparable con el 22 % del
       examen real, pero engañosa como diagnóstico — ganar por dos caracteres
       no lo explota nadie.
     · visible: lo es con más de un 10 % de margen sobre la segunda. Ésta es la
       que de verdad permite acertar mirando la forma, y sobre la que se juzga. */
const MARGEN = 0.10;

function mide(qs) {
  const n = qs.length;
  const pos = [0, 0, 0, 0];
  let masLarga = 0, visible = 0, ratio = 0, sumEnun = 0;
  for (const q of qs) {
    const L = q.o.map((x) => x.length);
    const orden = [...L].sort((a, b) => b - a);
    if (L[q.c] === orden[0] && L.filter((x) => x === orden[0]).length === 1) {
      masLarga++;
      if ((orden[0] - orden[1]) / orden[1] > MARGEN) visible++;
    }
    ratio += L[q.c] / (L.filter((_, i) => i !== q.c).reduce((a, b) => a + b, 0) / 3);
    pos[q.c]++;
    sumEnun += q.q.length;
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

/* Aviso (no error) cuando dos preguntas del mismo tema citan el mismo
   artículo/apartado en 'exp': suele significar que preguntan el mismo dato
   con distinta redacción, algo que el detector de texto casi-duplicado no
   puede pillar porque el enunciado cambia lo bastante. */
function extraeCita(exp) {
  const m = String(exp || "").match(
    /art(?:[íi]culo)?\.?\s*\d+\s*(?:bis|ter|qu[aá]ter|quinquies|sexies|septies|octies)?(?:\.\d+)*(?:\.[a-z])?/i
  );
  if (!m) return null;
  return m[0]
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buscaMismaCita(qs) {
  const avisos = [];
  const porTema = new Map();
  for (const q of qs) {
    if (!porTema.has(q.tema)) porTema.set(q.tema, []);
    porTema.get(q.tema).push(q);
  }
  for (const grupo of porTema.values()) {
    const porCita = new Map();
    for (const q of grupo) {
      const cita = extraeCita(q.exp);
      if (!cita) continue;
      if (!porCita.has(cita)) porCita.set(cita, []);
      porCita.get(cita).push(q.id);
    }
    for (const [cita, ids] of porCita) {
      if (ids.length > 1) avisos.push(`${ids.join(" ↔ ")} citan el mismo precepto (${cita})`);
    }
  }
  return avisos;
}

const temas = new Map();
for (const q of PREGUNTAS) {
  if (filtro.length && !filtro.includes(q.tema)) continue;
  if (!temas.has(q.tema)) temas.set(q.tema, []);
  temas.get(q.tema).push(q);
}
if (!temas.size) {
  console.error("Sin preguntas para: " + filtro.join(", "));
  process.exit(1);
}

const mismaCita = buscaMismaCita([...temas.values()].flat());
if (mismaCita.length) {
  console.warn(`\nAVISOS DE MISMO PRECEPTO (${mismaCita.length})`);
  mismaCita.forEach((a) => console.warn(`  ⚠ ${a}`));
}

const filas = [...temas].map(([tema, qs]) => ({ tema, ...mide(qs) }));
filas.sort((a, b) => b.larga - a.larga);

const global = mide(filtro.length ? [...temas.values()].flat() : PREGUNTAS);
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
    `   · = menos de ${MIN_PREGUNTAS} preguntas`
);
process.exitCode = fallan ? 1 : 0;
