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

const UMBRAL_LARGA = 35; // % de "correcta = más larga" por encima del cual el tema falla
const UMBRAL_LETRA = 45; // % de concentración en una sola letra
const MIN_PREGUNTAS = 8; // por debajo de esto el porcentaje es ruido

const args = process.argv.slice(2);
const soloPeores = args.includes("--peores");
const filtro = args.filter((a) => !a.startsWith("--"));

function mide(qs) {
  const n = qs.length;
  const pos = [0, 0, 0, 0];
  let masLarga = 0, ratio = 0, sumEnun = 0;
  for (const q of qs) {
    const L = q.o.map((x) => x.length);
    const mx = Math.max(...L);
    if (L[q.c] === mx && L.filter((x) => x === mx).length === 1) masLarga++;
    ratio += L[q.c] / (L.filter((_, i) => i !== q.c).reduce((a, b) => a + b, 0) / 3);
    pos[q.c]++;
    sumEnun += q.q.length;
  }
  return {
    n,
    larga: (100 * masLarga) / n,
    ratio: ratio / n,
    letra: (100 * Math.max(...pos)) / n,
    pos,
    enun: sumEnun / n,
  };
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

const filas = [...temas].map(([tema, qs]) => ({ tema, ...mide(qs) }));
filas.sort((a, b) => b.larga - a.larga);

const global = mide(filtro.length ? [...temas.values()].flat() : PREGUNTAS);
let fallan = 0;

console.log("tema     n   correcta=+larga   ratio   a/b/c/d        enunciado");
console.log("─".repeat(66));
for (const f of filas) {
  const fiable = f.n >= MIN_PREGUNTAS;
  const mal = fiable && (f.larga > UMBRAL_LARGA || f.letra > UMBRAL_LETRA);
  if (mal) fallan++;
  if (soloPeores && !mal) continue;
  const marca = !fiable ? "·" : mal ? "✗" : "✓";
  console.log(
    `${marca} ${f.tema.padEnd(6)} ${String(f.n).padStart(3)}   ` +
      `${f.larga.toFixed(0).padStart(3)} %          ` +
      `${f.ratio.toFixed(2)}    ${f.pos.join("/").padEnd(14)} ${Math.round(f.enun)}`
  );
}
console.log("─".repeat(66));
console.log(
  `TOTAL  ${String(global.n).padStart(4)}   ${global.larga.toFixed(0).padStart(3)} %          ` +
    `${global.ratio.toFixed(2)}    ${global.pos.join("/").padEnd(14)} ${Math.round(global.enun)}`
);
console.log(`REAL   (2026)     22 %          1.03    25/27/28/20    240`);
console.log(
  `\nTemas que fallan (>${UMBRAL_LARGA} % más larga o >${UMBRAL_LETRA} % en una letra): ${fallan}` +
    `   · = menos de ${MIN_PREGUNTAS} preguntas, sin valorar`
);
process.exitCode = fallan ? 1 : 0;
