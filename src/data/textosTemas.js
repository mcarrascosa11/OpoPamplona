// Textos de «Leer temas» que la app toma del repositorio en lugar de Supabase.
// Para añadir otro tema: importa su TXT de temas/ y añádelo a TEXTOS_TEMAS.
// Si el TXT necesita correcciones puntuales, se aplican aquí con `corregir`,
// sin tocar el archivo original.
import e35 from "../../temas/E_Tema35.txt?raw";
import e36 from "../../temas/E_Tema36.txt?raw";
import e37 from "../../temas/E_Tema37.txt?raw";
import e43 from "../../temas/E_Tema43.txt?raw";
import e46 from "../../temas/E_Tema46.txt?raw";
import e47 from "../../temas/E_Tema47.txt?raw";
import e48 from "../../temas/E_Tema48.txt?raw";
import e49 from "../../temas/E_Tema49.txt?raw";
import e50 from "../../temas/E_Tema50.txt?raw";
import e51 from "../../temas/E_Tema51.txt?raw";
import e51pn3 from "../../temas/E_Tema51_PN3.txt?raw";
import e51pn4 from "../../temas/E_Tema51_PN4.txt?raw";
import e51pn5 from "../../temas/E_Tema51_PN5.txt?raw";
import e51pn7 from "../../temas/E_Tema51_PN7.txt?raw";
import e51pn8 from "../../temas/E_Tema51_PN8.txt?raw";
import e51pn9 from "../../temas/E_Tema51_PN9.txt?raw";
import e52 from "../../temas/E_Tema52.txt?raw";
import e52mem7 from "../../temas/E_Tema52_Memoria7.txt?raw";
import e53marco from "../../temas/E_Tema53_marco.txt?raw";
import e53nug1 from "../../temas/E_Tema53_NUG_1.txt?raw";
import e53nug2 from "../../temas/E_Tema53_NUG_2.txt?raw";
import e53nug3 from "../../temas/E_Tema53_NUG_3.txt?raw";
import e54 from "../../temas/E_Tema54.txt?raw";
import e55 from "../../temas/E_Tema55.txt?raw";
import e56 from "../../temas/E_Tema56.txt?raw";
import e57 from "../../temas/E_Tema57.txt?raw";
import e58 from "../../temas/E_Tema58.txt?raw";
import e58mem6 from "../../temas/E_Tema58_Memoria6.txt?raw";
import e58an52 from "../../temas/E_Tema58_Anexo5_2.txt?raw";
import e59 from "../../temas/E_Tema59.txt?raw";
import e59mem107 from "../../temas/E_Tema59_Memoria10_7.txt?raw";
import c46 from "./textosTemas/E46.js";
import c47 from "./textosTemas/E47.js";
import c48 from "./textosTemas/E48.js";
import c49 from "./textosTemas/E49.js";
import c50 from "./textosTemas/E50.js";
import c51 from "./textosTemas/E51.js";
import c52 from "./textosTemas/E52.js";
import c53 from "./textosTemas/E53.js";
import c54 from "./textosTemas/E54.js";
import c55 from "./textosTemas/E55.js";
import c56 from "./textosTemas/E56.js";
import c57 from "./textosTemas/E57.js";
import c58 from "./textosTemas/E58.js";
import c59 from "./textosTemas/E59.js";

const limpiar = (texto) => (texto.charCodeAt(0) === 0xfeff ? texto.slice(1) : texto).replace(/\r\n/g, "\n");

const corregir = (texto, cambios) =>
  cambios.reduce((acc, [buscar, poner]) => acc.split(buscar).join(poner), texto);

const SALTO = String.fromCharCode(10);

// Los anexos PN del POT 3 (E51) van en archivos aparte, uno por anexo, detrás del articulado.
const CABECERA_ANEXOS_E51 = [
  "ANEXOS DE LA NORMATIVA (III) DEL POT 3 ÁREA CENTRAL",
  "PN3, PN4, PN5, PN7, PN8 y PN9, en la versión del SIUN que incorpora la 1.ª Actualización (Orden Foral 69/2014, de 10 de noviembre, BON n.º 229, de 21-11-2014).",
  "No se incluyen el PN1 (fuentes de la documentación gráfica), el PN2 (unidades ambientales) ni el PN6 (suelo protegido por legislación sectorial, que el POT recoge a efectos informativos).",
].join(SALTO);

// Aplica a un tema sus correcciones y antepone sus avisos (líneas «>>>»).
const aplicar = (texto, { avisos = [], cambios = [] }) => {
  const corregido = corregir(limpiar(texto), cambios);
  return avisos.length ? avisos.join(SALTO) + SALTO + SALTO + corregido : corregido;
};

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
  E46: aplicar(e46, c46),
  E47: aplicar(e47, c47),
  E48: aplicar(e48, c48),
  E49: aplicar(e49, c49),
  E50: aplicar(e50, c50),
  E51: [aplicar(e51, c51), CABECERA_ANEXOS_E51, e51pn3, e51pn4, e51pn5, e51pn7, e51pn8, e51pn9].map(limpiar).join(SALTO + SALTO),
  E52: [aplicar(e52, c52), e52mem7].map(limpiar).join(SALTO + SALTO),
  E53: [aplicar(e53marco, c53), e53nug1, e53nug2, e53nug3].map(limpiar).join(SALTO + SALTO),
  E54: aplicar(e54, c54),
  E55: aplicar(e55, c55),
  E56: aplicar(e56, c56),
  E57: aplicar(e57, c57),
  E58: [aplicar(e58, c58), e58mem6, e58an52].map(limpiar).join(SALTO + SALTO),
  E59: [aplicar(e59, c59), e59mem107].map(limpiar).join(SALTO + SALTO),
};
