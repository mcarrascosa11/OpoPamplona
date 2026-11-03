/* ==================================================================
   PREGUNTAS DE EXÁMENES REALES (1ª prueba)
   Copiadas literalmente de los cuestionarios oficiales, con la letra
   de la plantilla oficial (o de la corregida tras alegaciones) y el
   tema del temario de Pamplona. Cada examen vive en su propio archivo:
   src/data/reales/<CODIGO>.js.
   Formato: { id, tema, q, o:[3 o 4 opciones], c, exp, real:{ examen, n },
              estado?:"retirada", motivo? }
   Van retiradas (no salen en la app, pero se conservan): las de fuera
   del temario de Pamplona, las desfasadas por cambios normativos hasta
   el 21-05-2026, las anuladas por el tribunal y aquellas cuya respuesta
   oficial contradice el texto vigente («respuesta oficial discutible»).
   Exámenes de fuera de Navarra: solo quedan activas las preguntas de
   normativa estatal o general que entra en el temario de Pamplona; la
   normativa autonómica de otras comunidades y la municipal de otras
   ciudades va retirada («fuera del temario de Pamplona»). En todos los
   exámenes, las preguntas de una norma del temario pero de una parte
   que el alcance oficial excluye van retiradas («fuera del alcance del
   tema …»). Los recuentos de la cabecera de cada archivo pueden no
   reflejar las retiradas añadidas en revisiones posteriores.
   ================================================================== */
import NAV26 from "./reales/NAV26.js";
import ZIZ26 from "./reales/ZIZ26.js";
import NAV26L from "./reales/NAV26L.js";
import NAV23 from "./reales/NAV23.js";
import NAV22 from "./reales/NAV22.js";
import NOA22B from "./reales/NOA22B.js";
import NOA22A from "./reales/NOA22A.js";
import NAV20 from "./reales/NAV20.js";
import MEL26 from "./reales/MEL26.js";
import CAS26 from "./reales/CAS26.js";
import CYL26 from "./reales/CYL26.js";
import GRA26 from "./reales/GRA26.js";
import VAL26 from "./reales/VAL26.js";
import UA25 from "./reales/UA25.js";
import GC25 from "./reales/GC25.js";
import EXT24E from "./reales/EXT24E.js";
import VAL24E from "./reales/VAL24E.js";
import CAM19 from "./reales/CAM19.js";

// Primero Navarra y después el resto; dentro de cada grupo, del más reciente al más antiguo.
export const EXAMENES_REALES = [
  { codigo: "NAV26", titulo: "Gobierno de Navarra · Oposición · 7-3-2026", grupo: "Navarra", preguntas: NAV26 },
  { codigo: "ZIZ26", titulo: "Ayuntamiento de Zizur Mayor · 31-1-2026", grupo: "Navarra", preguntas: ZIZ26 },
  { codigo: "NAV26L", titulo: "Gobierno de Navarra · Listas · 14-1-2026", grupo: "Navarra", preguntas: NAV26L },
  { codigo: "NAV23", titulo: "Gobierno de Navarra · Concurso-oposición · 30-9-2023", grupo: "Navarra", preguntas: NAV23 },
  { codigo: "NAV22", titulo: "Gobierno de Navarra · Oposición · 30-4-2022", grupo: "Navarra", preguntas: NAV22 },
  { codigo: "NOA22B", titulo: "Ayuntamiento de Noáin · 2º ejercicio · enero 2022", grupo: "Navarra", preguntas: NOA22B },
  { codigo: "NOA22A", titulo: "Ayuntamiento de Noáin · 1er ejercicio · 4-1-2022", grupo: "Navarra", preguntas: NOA22A },
  { codigo: "NAV20", titulo: "Gobierno de Navarra · Listas · 3-10-2020", grupo: "Navarra", preguntas: NAV20 },
  // Fuera de Navarra: solo normativa estatal del temario de Pamplona.
  { codigo: "MEL26", titulo: "Ciudad Autónoma de Melilla · 7-10-2026", grupo: "Otras administraciones", preguntas: MEL26 },
  { codigo: "CAS26", titulo: "Ayuntamiento de Caspe · septiembre 2026", grupo: "Otras administraciones", preguntas: CAS26 },
  { codigo: "CYL26", titulo: "Junta de Castilla y León · 16-5-2026", grupo: "Otras administraciones", preguntas: CYL26 },
  { codigo: "GRA26", titulo: "Ayuntamiento de Granada · abril 2026", grupo: "Otras administraciones", preguntas: GRA26 },
  { codigo: "VAL26", titulo: "Ayuntamiento de València · marzo 2026", grupo: "Otras administraciones", preguntas: VAL26 },
  { codigo: "UA25", titulo: "Universidad de Alicante · 7-10-2025", grupo: "Otras administraciones", preguntas: UA25 },
  { codigo: "GC25", titulo: "Cabildo de Gran Canaria · 7-4-2025", grupo: "Otras administraciones", preguntas: GC25 },
  { codigo: "EXT24E", titulo: "Junta de Extremadura · Estabilización · 13-7-2024", grupo: "Otras administraciones", preguntas: EXT24E },
  { codigo: "VAL24E", titulo: "Ayuntamiento de València · Estabilización · 22-6-2024", grupo: "Otras administraciones", preguntas: VAL24E },
  { codigo: "CAM19", titulo: "Comunidad de Madrid · 18-5-2019", grupo: "Otras administraciones", preguntas: CAM19 },
];

export const REALES = EXAMENES_REALES.flatMap((e) => e.preguntas);
