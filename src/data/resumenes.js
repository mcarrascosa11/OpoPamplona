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
  G3: {
    intro:
      "El Título X LRBRL (introducido por la Ley 57/2003) establece el régimen de organización de los municipios de gran población. El Ayuntamiento de Pamplona se rige por este régimen en virtud del art. 9 bis de la Ley Foral 6/1990. El Decreto de Organización Municipal desarrolla la estructura interna de la Administración ejecutiva.",
    bloques: [
      {
        h: "El Pleno (arts. 122-123 LRBRL)",
        items: [
          "Art. 122.1: el Pleno = Alcalde + Concejales; órgano de máxima representación política.",
          "Art. 122.2: el Pleno es convocado y presidido por el Alcalde; éste decide los empates con voto de calidad. Puede delegar la convocatoria y presidencia en un concejal.",
          "Art. 122.3: comisiones formadas por miembros designados por los grupos políticos en proporción al número de concejales.",
          "Art. 122.5: el Secretario general del Pleno (habilitado nacional) presta asesoramiento legal. Es preceptivo: si lo pide el Presidente o 1/3 de miembros (con antelación); en asuntos con mayoría especial; para control/fiscalización si lo pide el Presidente o 1/4 de concejales.",
          "Art. 123.2: mayoría ABSOLUTA del número legal para: párrafos c), e), f), j) y o) y planeamiento general urbanístico. Demás acuerdos: mayoría SIMPLE.",
          "Art. 123.3: solo son delegables a las comisiones los párrafos d), k), m) y ñ).",
        ],
      },
      {
        h: "El Alcalde y Tenientes de Alcalde (arts. 124-125 LRBRL)",
        items: [
          "Art. 124.1-3: máxima representación del municipio; responsable ante el Pleno; tratamiento de Excelencia.",
          "Art. 124.5: NO delegables: b) dirección política, e) nombramiento de Tenientes de Alcalde, h) medidas de urgencia, j) Jefatura de la Policía Municipal; y tampoco: convocar/presidir la JGL, decidir empates, dictar bandos. Los párrafos c) y k) son delegables solo en la JGL.",
          "Art. 125.1: Tenientes de Alcalde nombrados por el Alcalde entre concejales miembros de la JGL; sustituyen al Alcalde por orden de nombramiento en vacante, ausencia o enfermedad.",
          "Art. 125.2: tratamiento de los Tenientes de Alcalde: Ilustrísima.",
        ],
      },
      {
        h: "Junta de Gobierno Local (arts. 126-127 LRBRL)",
        items: [
          "Art. 126.2: miembros nombrados y cesados libremente por el Alcalde; número máximo = 1/3 del número legal del Pleno, además del Alcalde.",
          "Art. 126.3: la JGL responde solidariamente ante el Pleno.",
          "Art. 126.4: Secretaría de la JGL: concejal miembro designado por el Alcalde.",
          "Art. 126.5: deliberaciones SECRETAS; concejales no miembros y titulares de órganos directivos solo pueden asistir si son convocados expresamente por el Alcalde.",
          "Art. 127.1.e: la concesión de licencias corresponde a la JGL, salvo atribución expresa por ley sectorial a otro órgano.",
          "Art. 127.2: la JGL puede delegar en Tenientes de Alcalde u otros concejales los párrafos e), g), h) (con excepciones) y l).",
        ],
      },
      {
        h: "Otros órganos (arts. 128-132 LRBRL)",
        items: [
          "Art. 128.3: la presidencia del distrito corresponde en todo caso a un concejal.",
          "Art. 130.1.A: órganos SUPERIORES = Alcalde + miembros de la JGL.",
          "Art. 130.1.B: órganos DIRECTIVOS = coordinadores generales, directores generales, titular del órgano de apoyo a la JGL, titular de la asesoría jurídica, Secretario general del Pleno, Interventor general, titular del órgano de gestión tributaria.",
          "Art. 130.3: coordinadores y directores generales deben ser funcionarios de carrera subgrupo A1.",
          "Art. 131: Consejo Social de la Ciudad — integrado por representantes de organizaciones económicas, sociales, profesionales y de vecinos más representativas; emite informes sobre desarrollo económico, planificación estratégica y grandes proyectos urbanos.",
          "Art. 132: Comisión especial de Sugerencias y Reclamaciones — creada por el Pleno; formada por representantes de todos los grupos en proporción; informe anual al Pleno + informes extraordinarios si la gravedad o urgencia lo aconsejan.",
        ],
      },
      {
        h: "Decreto de Organización Municipal de Pamplona",
        items: [
          "Estructura: 11 grandes áreas de gobierno. Dependen directamente del Alcalde: Área de Alcaldía y Área de Igualdad.",
          "Área de Transparencia, Innovación y Política Lingüística: ANIMSA adscrita.",
          "Área de Ciudad Habitable y Vivienda: Gerencia de Urbanismo + Pamplona Centro Histórico adscritos.",
          "Área de Cultura y Educación: OA Escuelas Infantiles + Fundación Teatro Gayarre adscritos.",
          "Área de Economía Local Sostenible: integra los órganos de gestión económico-financiera, presupuestaria e Intervención; Mercairuña y Comiruña adscritas.",
          "Art. 2 Decreto: todas las áreas dispondrán de, al menos, una dirección y una secretaría técnica.",
        ],
      },
    ],
    claves: [
      "Pleno = Alcalde + Concejales; máxima representación política — art. 122.1",
      "Alcalde: tratamiento Excelencia; Tenientes de Alcalde: Ilustrísima — arts. 124.3 y 125.2",
      "Mayoría absoluta en Pleno: párrafos c), e), f), j), o) y planeamiento — art. 123.2",
      "Delegables a comisiones del Pleno: solo párrafos d), k), m) y ñ) — art. 123.3",
      "No delegables del Alcalde: b), e), h), j) + convocar JGL, empates, bandos — art. 124.5",
      "Tenientes de Alcalde: nombrados por Alcalde entre concejales miembros de la JGL — art. 125.1",
      "JGL: máximo 1/3 del número legal del Pleno + Alcalde — art. 126.2",
      "Deliberaciones JGL: secretas; no miembros asisten solo si convocados por el Alcalde — art. 126.5",
      "Licencias: corresponden a la JGL salvo ley sectorial — art. 127.1.e",
      "Órganos superiores: Alcalde + miembros JGL. Directivos: el resto — art. 130.1",
      "Consejo Social: representantes de organizaciones económicas, sociales, profesionales y de vecinos — art. 131",
      "Comisión Sugerencias: informe anual al Pleno + informes extraordinarios posibles — art. 132.3",
      "ANIMSA → Área de Transparencia; Gerencia Urbanismo → Área Ciudad Habitable — Decreto Pamplona",
    ],
  },
  G2: {
    intro:
      "La LORAFNA (LO 13/1982, de 10 de agosto, de Reintegración y Amejoramiento del Régimen Foral de Navarra) no es un Estatuto de Autonomía ordinario: parte del reconocimiento constitucional de los derechos históricos y los «amejorar» democráticamente. Navarra es una Comunidad Foral —denominación propia— con instituciones, régimen tributario y competencias singulares.",
    bloques: [
      {
        h: "Título Preliminar (arts. 1-9) — bases",
        items: [
          "Art. 1: Navarra es una Comunidad Foral con régimen, autonomía e instituciones propias, indivisible, integrada en la Nación española.",
          "Art. 9: castellano, lengua oficial; vascuence, cooficial en las zonas vascoparlantes en los términos que establezca una ley foral.",
        ],
      },
      {
        h: "Instituciones forales (arts. 10-38)",
        items: [
          "Art. 10: tres instituciones — Parlamento (o Cortes de Navarra), Gobierno (o Diputación Foral) y Presidente.",
          "Art. 15.2: número de parlamentarios: no inferior a 40 ni superior a 60 (actualmente 50).",
          "Art. 17.2: dos períodos ordinarios de sesiones anuales.",
          "Art. 18 bis: Cámara de Comptos — fiscaliza la gestión económica y financiera; emite dictamen previo a la aprobación de cuentas; depende del Parlamento.",
          "Art. 18 ter: Defensor del Pueblo de Navarra — defiende derechos en el ámbito foral; depende del Parlamento.",
          "Art. 20: leyes forales por mayoría simple; mayoría absoluta en los casos expresamente previstos.",
          "Art. 21 bis: Decretos-leyes Forales — por urgencia extraordinaria; convalidación parlamentaria en 30 días.",
          "Art. 29: investidura del Presidente — mayoría absoluta en 1.ª votación; mayoría simple en 2.ª (24 horas después). Es nombrado por el Rey.",
          "Art. 30: Presidente = máxima representación de Navarra y representación ordinaria del Estado en Navarra; dirige la Diputación Foral.",
          "Art. 34: cuestión de confianza — mayoría simple otorga la confianza.",
          "Art. 35: moción de censura constructiva — la presenta ≥ 1/5 de parlamentarios con candidato alternativo; aprobación por mayoría absoluta.",
        ],
      },
      {
        h: "Competencias (arts. 39-67)",
        items: [
          "Art. 40: competencias exclusivas → potestad legislativa, reglamentaria, administrativa e inspectora; Derecho navarro prevalente; Derecho estatal supletorio.",
          "Art. 44: competencias exclusivas (urbanismo, obras públicas, cultura, patrimonio, turismo, asistencia social, cooperativas, etc.).",
          "Art. 45: régimen tributario propio mediante el Convenio Económico con el Estado.",
          "Art. 47: competencia plena en enseñanza en toda su extensión (salvo títulos académicos y alta inspección estatal).",
          "Art. 48: competencia exclusiva en Derecho Civil Foral.",
        ],
      },
      {
        h: "Poder Judicial (arts. 59-67)",
        items: [
          "Art. 59: el Tribunal Superior de Justicia de Navarra culmina la organización judicial en el ámbito territorial navarro.",
          "Art. 61: casación en Derecho Civil Foral navarro → TSJ; lo contencioso-administrativo foral → también el TSJ.",
        ],
      },
      {
        h: "Relaciones con el Estado y reforma (arts. 68-71)",
        items: [
          "Art. 69: Junta de Cooperación = instrumento ordinario de relaciones interadministrativas; igual número de representantes de cada parte.",
          "Art. 70: acuerdos de cooperación con el País Vasco u otras CCAA limítrofes requieren autorización de las Cortes Generales.",
          "Art. 71: el amejoramiento es inmodificable unilateralmente. Reforma: iniciativa de la Diputación Foral o del Gobierno → acuerdo común → aprobación del Parlamento navarro y de las Cortes Generales.",
        ],
      },
    ],
    claves: [
      "Navarra: Comunidad Foral (no Comunidad Autónoma ordinaria) — art. 1",
      "Lengua: castellano oficial; vascuence cooficial en zonas vascoparlantes por ley foral — art. 9",
      "Instituciones: Parlamento, Diputación Foral (Gobierno), Presidente — art. 10",
      "Parlamento: 40-60 miembros; 2 períodos ordinarios — arts. 15.2 y 17.2",
      "Presidente: mayoría absoluta 1.ª votación / simple 2.ª (24 h) — art. 29",
      "Cuestión de confianza: mayoría simple — art. 34",
      "Moción de censura: ≥ 1/5 parlamentarios + candidato alternativo + mayoría absoluta — art. 35",
      "Decretos-leyes Forales: convalidación en 30 días — art. 21 bis",
      "Cámara de Comptos: fiscalización económica, depende del Parlamento — art. 18 bis",
      "Competencias exclusivas: Derecho navarro prevalente, estatal supletorio — art. 40",
      "Enseñanza: competencia plena — art. 47",
      "TSJ Navarra: culmina la organización judicial — art. 59",
      "Junta de Cooperación: relaciones interadministrativas, iguales representantes — art. 69",
      "Reforma: ambas partes de acuerdo + Parlamento navarro + Cortes Generales — art. 71",
    ],
  },
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
