// Textos de «Leer temas» que la app toma del repositorio en lugar de Supabase.
// Para añadir otro tema: importa su TXT de temas/ y añádelo a TEXTOS_TEMAS.
// Si el TXT necesita correcciones puntuales, se aplican aquí con `corregir`,
// sin tocar el archivo original.
import e35 from "../../temas/E_Tema35.txt?raw";
import e36 from "../../temas/E_Tema36.txt?raw";
import e37 from "../../temas/E_Tema37.txt?raw";
import e43 from "../../temas/E_Tema43.txt?raw";

const limpiar = (texto) => texto.replace(/^﻿/, "").replace(/\r\n/g, "\n");

const corregir = (texto, cambios) =>
  cambios.reduce((acc, [buscar, poner]) => acc.split(buscar).join(poner), texto);

const AVISO_E43_CAP_III =
  ">>> AVISO: el Capítulo III (arts. 30 y 31) fue DEROGADO por la disposición derogatoria única, letra a), de la Ley Foral 6/2010. Se conserva solo como referencia: no está vigente y no se estudia.";

// E43: fecha correcta de la ley (12 de julio), notas de vigencia explicadas y Capítulo III marcado como derogado.
const E43 = corregir(limpiar(e43), [
  ["Ley Foral 17/2001, de 17 de julio,", "Ley Foral 17/2001, de 12 de julio,"],
  ["TÍTULO II. ESTABLECIMIENTOS COMERCIALES Nota de Vigencia", "TÍTULO II. ESTABLECIMIENTOS COMERCIALES"],
  ["residuos alimenticios Nota de Vigencia.", "residuos alimenticios. [Letra añadida por la Ley Foral 7/2013.]"],
  ["u otros organismos análogos Nota de Vigencia.", "u otros organismos análogos. [Letra añadida por la Ley Foral 7/2013.]"],
  [
    "CAPÍTULO III. De otros establecimientos sometidos a autorización Nota de Vigencia",
    "CAPÍTULO III. De otros establecimientos sometidos a autorización [DEROGADO]\n\n" + AVISO_E43_CAP_III,
  ],
  [
    "Artículo 30. Establecimiento comercial minorista de mediana superficie.",
    "Artículo 30. Establecimiento comercial minorista de mediana superficie. [DEROGADO]",
  ],
  [
    "Artículo 31. Establecimientos denominados de “descuento duro”.",
    "Artículo 31. Establecimientos denominados de “descuento duro”. [DEROGADO]",
  ],
]);

export const TEXTOS_TEMAS = {
  E35: limpiar(e35),
  E36: limpiar(e36),
  E37: limpiar(e37),
  E43,
};
