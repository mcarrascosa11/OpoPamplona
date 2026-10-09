/* ================================================================== 
   BANCO DE PREGUNTAS (1ª prueba)
   Formato por pregunta:
     { id, tema, q, o:[4 opciones], c: índice correcto (0-3), exp }
   Reglas de calidad (para ampliar con Claude Code o a mano):
     · Lee GUIA_PREGUNTAS.md íntegramente antes de generar preguntas.
     · Cita el nombre oficial COMPLETO de la norma, con número y
       fecha, en el enunciado 'q' de CADA pregunta original.
     · 4 opciones plausibles, de longitud y estructura semejantes,
       sin absolutos que permitan descartar las incorrectas.
     · La dificultad vive en el matiz técnico, no en la redacción.
     · En 'exp', cita SIEMPRE norma, artículo y apartado aplicables.
   ================================================================== */

// Cada tema vive en su propio archivo: src/data/preguntas/<TEMA>.js.
// Para añadir un tema nuevo, crea su archivo y añádelo aquí (import y lista).
import G1 from "./preguntas/G1.js";
import G2 from "./preguntas/G2.js";
import G3 from "./preguntas/G3.js";
import G4 from "./preguntas/G4.js";
import G5 from "./preguntas/G5.js";
import G6 from "./preguntas/G6.js";
import G7 from "./preguntas/G7.js";
import G8 from "./preguntas/G8.js";
import G9 from "./preguntas/G9.js";
import G10 from "./preguntas/G10.js";
import G11 from "./preguntas/G11.js";
import G12 from "./preguntas/G12.js";
import G13 from "./preguntas/G13.js";
import E1 from "./preguntas/E1.js";
import E2 from "./preguntas/E2.js";
import E3 from "./preguntas/E3.js";
import E4 from "./preguntas/E4.js";
import E5 from "./preguntas/E5.js";
import E6 from "./preguntas/E6.js";
import E7 from "./preguntas/E7.js";
import E8 from "./preguntas/E8.js";
import E9 from "./preguntas/E9.js";
import E10 from "./preguntas/E10.js";
import E11 from "./preguntas/E11.js";
import E12 from "./preguntas/E12.js";
import E13 from "./preguntas/E13.js";
import E14 from "./preguntas/E14.js";
import E15 from "./preguntas/E15.js";
import E16 from "./preguntas/E16.js";
import E17 from "./preguntas/E17.js";
import E18 from "./preguntas/E18.js";
import E19 from "./preguntas/E19.js";
import E20 from "./preguntas/E20.js";
import E21 from "./preguntas/E21.js";
import E22 from "./preguntas/E22.js";
import E23 from "./preguntas/E23.js";
import E24 from "./preguntas/E24.js";
import E25 from "./preguntas/E25.js";
import E26 from "./preguntas/E26.js";
import E27 from "./preguntas/E27.js";
import E28 from "./preguntas/E28.js";
import E29 from "./preguntas/E29.js";
import E30 from "./preguntas/E30.js";
import E31 from "./preguntas/E31.js";
import E32 from "./preguntas/E32.js";
import E33 from "./preguntas/E33.js";
import E34 from "./preguntas/E34.js";
import E35 from "./preguntas/E35.js";
import E36 from "./preguntas/E36.js";
import E37 from "./preguntas/E37.js";
import E38 from "./preguntas/E38.js";
import E39 from "./preguntas/E39.js";
import E40 from "./preguntas/E40.js";
import E41 from "./preguntas/E41.js";
import E42 from "./preguntas/E42.js";
import E43 from "./preguntas/E43.js";
import E44 from "./preguntas/E44.js";
import E47 from "./preguntas/E47.js";
import E48 from "./preguntas/E48.js";
import E49 from "./preguntas/E49.js";
import E50 from "./preguntas/E50.js";
import E52 from "./preguntas/E52.js";
import E53 from "./preguntas/E53.js";
import E54 from "./preguntas/E54.js";

export const PREGUNTAS = [
  ...G1,
  ...G2,
  ...G3,
  ...G4,
  ...G5,
  ...G6,
  ...G7,
  ...G8,
  ...G9,
  ...G10,
  ...G11,
  ...G12,
  ...G13,
  ...E1,
  ...E2,
  ...E3,
  ...E4,
  ...E5,
  ...E6,
  ...E7,
  ...E8,
  ...E9,
  ...E10,
  ...E11,
  ...E12,
  ...E13,
  ...E14,
  ...E15,
  ...E16,
  ...E17,
  ...E18,
  ...E19,
  ...E20,
  ...E21,
  ...E22,
  ...E23,
  ...E24,
  ...E25,
  ...E26,
  ...E27,
  ...E28,
  ...E29,
  ...E30,
  ...E31,
  ...E32,
  ...E33,
  ...E34,
  ...E35,
  ...E36,
  ...E37,
  ...E38,
  ...E39,
  ...E40,
  ...E41,
  ...E42,
  ...E43,
  ...E44,
  ...E47,
  ...E48,
  ...E49,
  ...E50,
  ...E52,
  ...E53,
  ...E54,
];
