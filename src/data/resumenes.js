/* ==================================================================
   RESÚMENES POR TEMA
   Formato:
     "G1": {
       intro: "una o dos frases de encuadre",
       bloques: [ { h: "título", items: ["punto", ...] }, ... ],
       claves: ["dato puro memorizable", ...]   // lo que más cae
     }
   Pensado para estudio rápido y repaso: prioriza datos, artículos,
   plazos, ubicación de cada derecho. Crece igual que el banco de test.
   ================================================================== */

export const RESUMENES = {
  G1: {
    intro:
      "La CE de 1978 consta de Preámbulo, Título Preliminar (arts. 1-9), 10 Títulos (169 artículos), 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final. Para este tema entran: Título Preliminar, Título I (derechos y deberes) y del Título VIII los Capítulos I y II.",
    bloques: [
      {
        h: "Título Preliminar (arts. 1-9)",
        items: [
          "Art. 1: Estado social y democrático de Derecho. Valores superiores: libertad, justicia, igualdad y pluralismo político. Soberanía en el pueblo español. Forma política: Monarquía parlamentaria.",
          "Art. 2: unidad de la Nación + derecho a la autonomía de nacionalidades y regiones + solidaridad.",
          "Art. 3: castellano lengua oficial (deber de conocerla, derecho a usarla); demás lenguas cooficiales según Estatutos.",
          "Art. 5: la capital del Estado es la villa de Madrid.",
          "Art. 9.3 (clave): garantiza legalidad, jerarquía normativa, publicidad de las normas, irretroactividad de lo sancionador no favorable, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad de los poderes públicos.",
        ],
      },
      {
        h: "Título I — estructura (arts. 10-55)",
        items: [
          "Art. 10: dignidad de la persona como fundamento del orden político.",
          "Capítulo I (arts. 11-13): españoles y extranjeros. Mayoría de edad a los 18 (art. 12).",
          "Capítulo II — Art. 14: igualdad ante la ley.",
          "Cap. II Sección 1ª (arts. 15-29): derechos fundamentales y libertades públicas.",
          "Cap. II Sección 2ª (arts. 30-38): derechos y deberes de los ciudadanos (aquí: propiedad art. 33, fundación art. 34, deber de trabajar art. 35).",
          "Capítulo III (arts. 39-52): principios rectores de la política social y económica (vivienda art. 47, medio ambiente art. 45, patrimonio art. 46).",
          "Capítulo IV (arts. 53-54): garantías. Capítulo V (art. 55): suspensión de derechos.",
        ],
      },
      {
        h: "Niveles de protección (muy preguntado)",
        items: [
          "Art. 14 + Sección 1ª + objeción de conciencia (art. 30): máxima protección → reserva de ley orgánica, contenido esencial, procedimiento preferente y sumario, y recurso de amparo ante el TC (art. 53.2).",
          "Resto del Cap. II (Sección 2ª): vinculan a los poderes públicos, regulación por ley que respete el contenido esencial (art. 53.1), pero NO amparo.",
          "Cap. III (principios rectores): informan la legislación y la práctica; solo alegables ante la jurisdicción ordinaria conforme a las leyes que los desarrollen (art. 53.3).",
        ],
      },
      {
        h: "Datos sueltos que caen",
        items: [
          "Art. 15: abolida la pena de muerte salvo leyes penales militares en tiempo de guerra.",
          "Art. 17.2: detención preventiva máx. 72 horas. Art. 17.4: habeas corpus.",
          "Art. 25.3: la Administración civil no puede imponer sanciones que impliquen privación de libertad.",
          "Art. 54: Defensor del Pueblo, alto comisionado de las Cortes Generales (ley orgánica).",
          "Art. 55.1: en estado de excepción se exceptúa de suspensión el art. 17.3. Del art. 18 solo se suspenden los apartados 2 y 3 (no el honor, 18.1).",
        ],
      },
      {
        h: "Título VIII — Caps. I y II (organización territorial y local)",
        items: [
          "Art. 137: el Estado se organiza en municipios, provincias y CCAA; todas con autonomía para sus intereses.",
          "Art. 140: autonomía de los municipios, personalidad jurídica plena. Concejales por sufragio universal; Alcaldes elegidos por los Concejales o por los vecinos; ley regula el concejo abierto.",
          "Art. 141: la provincia es entidad local; alteración de límites por ley orgánica de las Cortes Generales; gobierno por Diputaciones; en archipiélagos, Cabildos o Consejos.",
          "Art. 142: las Haciendas locales se nutren de tributos propios y de participación en los del Estado y las CCAA.",
        ],
      },
    ],
    claves: [
      "Valores superiores (1.1): libertad, justicia, igualdad, pluralismo político",
      "Forma política (1.3): Monarquía parlamentaria",
      "Detención: 72 horas (17.2)",
      "Mayoría de edad: 18 (art. 12)",
      "Amparo: art. 14 + Sección 1ª + art. 30",
      "Alteración límites provinciales: ley orgánica de Cortes Generales (141)",
      "Sección 1ª = arts. 15-29 · Sección 2ª = arts. 30-38 · Principios rectores = 39-52",
    ],
  },
};
