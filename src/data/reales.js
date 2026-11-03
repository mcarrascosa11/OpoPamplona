/* ==================================================================
   PREGUNTAS DE EXÁMENES REALES (1ª prueba)
   Copiadas literalmente de los cuestionarios oficiales, con la letra
   de la plantilla oficial (o de la corregida tras alegaciones) y el
   tema del temario de Pamplona. Cada examen vive en su propio archivo:
   src/data/reales/<CODIGO>.js.
   Formato: { id, tema, q, o:[4 opciones], c, exp, real:{ examen, n },
              estado?:"retirada", motivo? }
   Van retiradas (no salen en la app, pero se conservan): las de fuera
   del temario de Pamplona, las desfasadas por cambios normativos hasta
   el 21-05-2026, las anuladas por el tribunal y aquellas cuya respuesta
   oficial contradice el texto vigente («respuesta oficial discutible»).
   Los recuentos de la cabecera de cada archivo son los de la extracción:
   las 10 «respuesta oficial discutible» se retiraron después de la
   revisión y no están sumadas ahí. Total: 657 preguntas, 510 activas.
   ================================================================== */
import NAV26 from "./reales/NAV26.js";
import ZIZ26 from "./reales/ZIZ26.js";
import NAV26L from "./reales/NAV26L.js";
import NAV23 from "./reales/NAV23.js";
import NAV22 from "./reales/NAV22.js";
import NOA22B from "./reales/NOA22B.js";
import NOA22A from "./reales/NOA22A.js";
import NAV20 from "./reales/NAV20.js";

// Ordenados del más reciente al más antiguo.
export const EXAMENES_REALES = [
  { codigo: "NAV26", titulo: "Gobierno de Navarra · Oposición · 7-3-2026", preguntas: NAV26 },
  { codigo: "ZIZ26", titulo: "Ayuntamiento de Zizur Mayor · 31-1-2026", preguntas: ZIZ26 },
  { codigo: "NAV26L", titulo: "Gobierno de Navarra · Listas · 14-1-2026", preguntas: NAV26L },
  { codigo: "NAV23", titulo: "Gobierno de Navarra · Concurso-oposición · 30-9-2023", preguntas: NAV23 },
  { codigo: "NAV22", titulo: "Gobierno de Navarra · Oposición · 30-4-2022", preguntas: NAV22 },
  { codigo: "NOA22B", titulo: "Ayuntamiento de Noáin · 2º ejercicio · enero 2022", preguntas: NOA22B },
  { codigo: "NOA22A", titulo: "Ayuntamiento de Noáin · 1er ejercicio · 4-1-2022", preguntas: NOA22A },
  { codigo: "NAV20", titulo: "Gobierno de Navarra · Listas · 3-10-2020", preguntas: NAV20 },
];

export const REALES = EXAMENES_REALES.flatMap((e) => e.preguntas);
