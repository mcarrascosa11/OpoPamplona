// Resumen del tema E1. Formato: cabecera de src/data/resumenes.js.
// 01-11-2026: chequeo del tema. Contrastado con el BOE consolidado (BOE-A-1999-21567), vigente el 21-05-2026. Corregido el tomador del seguro (art. 19.2.a) y añadida la memorización (tablas, datos y excepciones).
export default {
    intro:
      "La Ley 38/1999, de Ordenación de la Edificación (LOE), ordena el proceso completo de edificar: qué obras quedan sometidas a ella, qué requisitos debe cumplir el edificio, quién hace qué y quién responde cuando aparecen daños. El CTE desarrolla sus exigencias básicas. En examen, la LOE se pregunta sobre todo por la cadena agente → obligación → responsabilidad, la recepción, la regla 1-3-10 y las garantías del art. 19.",
    bloques: [
      {
        h: "Mapa de la LOE: objeto, ámbito y proyecto (arts. 1-5)",
        nota:
          "La LOE no regula cualquier obra: regula el proceso de construir un edificio permanente, público o privado. La primera trampa consiste en separar las obras que exigen proyecto de las pequeñas construcciones que quedan fuera. La excepción exige tres requisitos acumulativos; si falla uno solo, habrá proyecto.",
        items: [
          "Objeto: obligaciones y responsabilidades de los agentes + garantías para asegurar calidad y protección de usuarios (art. 1)",
          "Ámbito: construcción de edificio permanente, público o privado, de los usos de los grupos a), b) o c) del art. 2.1",
          "Requieren proyecto: nueva construcción; intervención que altere configuración arquitectónica; intervención total en edificio protegido; o intervención parcial que afecte a sus elementos protegidos (art. 2.2)",
          "Excepción a nueva construcción: escasa entidad constructiva y sencillez técnica + sin uso residencial ni público, eventual o permanente + una sola planta (los tres requisitos, art. 2.2.a)",
          "También forman parte de la edificación: instalaciones fijas, equipamiento propio y urbanización adscrita permanentemente al edificio (art. 2.3)",
          "Proyecto: conjunto documental que define exigencias técnicas y justifica las soluciones; los proyectos parciales deben coordinarse, sin duplicar documentos ni honorarios (art. 4)",
          "Construcción, obras y ocupación requieren las licencias y autorizaciones que procedan conforme a su normativa aplicable (art. 5)",
        ],
      },
      {
        h: "Requisitos básicos y CTE (art. 3)",
        nota:
          "Ésta es la matriz de la calidad edificatoria. No memorices una lista aislada: la LOE agrupa los requisitos en FUNCIONALIDAD, SEGURIDAD y HABITABILIDAD. El CTE no es una ley distinta de la LOE: es el marco reglamentario que concreta sus exigencias básicas.",
        items: [
          "Funcionalidad: utilización, accesibilidad, acceso a telecomunicaciones/audiovisuales/información y acceso a servicios postales",
          "Seguridad: estructural; en caso de incendio; y de utilización",
          "Habitabilidad: higiene, salud y medio ambiente; protección contra el ruido; ahorro de energía y aislamiento térmico; y demás aspectos funcionales de elementos e instalaciones",
          "Los requisitos se satisfacen en proyecto, construcción, mantenimiento, conservación, uso e intervenciones posteriores sobre el edificio",
          "CTE: marco normativo que fija exigencias básicas de calidad para nueva edificación, instalaciones e intervenciones del art. 2.2.b y c; puede completarse por otras normas competentes y se actualiza periódicamente",
        ],
      },
      {
        h: "Agentes: promotor, proyectista y constructor (arts. 8-11)",
        nota:
          "La pregunta típica cambia una función de agente por otra. La forma más segura de retenerlos es seguir el proceso: el promotor decide y financia; el proyectista define; el constructor ejecuta. El promotor tiene un papel especialmente relevante porque, frente a adquirentes, responde solidariamente en todo caso por daños materiales.",
        items: [
          "Agente de la edificación: persona física o jurídica que interviene en el proceso; sus obligaciones derivan de la LOE, demás normas aplicables y contrato (art. 8)",
          "Promotor: quien decide, impulsa, programa y financia la obra, con recursos propios o ajenos, para sí o para transmitirla a terceros (art. 9)",
          "Promotor: debe tener derecho sobre el solar, facilitar información previa, obtener licencias, suscribir recepción y seguros del art. 19, y entregar documentación al adquirente",
          "Proyectista: por encargo del promotor redacta el proyecto conforme a normativa técnica y urbanística; puede haber proyectos parciales coordinados (art. 10)",
          "Constructor: asume ante el promotor ejecutar con medios humanos y materiales, propios o ajenos, conforme a proyecto y contrato (art. 11)",
          "Constructor: designa jefe de obra, asigna medios, formaliza subcontrataciones, firma replanteo/comienzo y recepción, y facilita datos para la documentación ejecutada",
        ],
      },
      {
        h: "Dirección facultativa, control y usuarios (arts. 12-16)",
        nota:
          "Director de obra y director de ejecución forman parte de la dirección facultativa, pero no hacen lo mismo. El primero controla que la obra responda al proyecto y resuelve contingencias; el segundo dirige la ejecución MATERIAL y controla la calidad. En el grupo a), la pareja clásica de examen es arquitecto / arquitecto técnico.",
        items: [
          "Titulación para proyectos y dirección de obra: grupo a) = arquitecto; grupo b) = ingeniero, ingeniero técnico o arquitecto según especialidad; grupo c) = arquitecto, arquitecto técnico, ingeniero o ingeniero técnico según especialidad",
          "Director de obra: dirige aspectos técnicos, estéticos, urbanísticos y medioambientales; verifica replanteo, cimentación y estructura; resuelve contingencias y suscribe certificado final (art. 12)",
          "Director de ejecución: dirige ejecución material y controla cualitativa y cuantitativamente construcción y calidad; comprueba replanteos, materiales, ejecución e instalaciones (art. 13)",
          "Grupo a): director de ejecución = arquitecto técnico. También lo es para grupo b) cuando dirige un arquitecto; en los demás casos pueden intervenir las titulaciones habilitadas del art. 13",
          "Entidades de control verifican calidad de proyecto, materiales, ejecución e instalaciones; laboratorios realizan ensayos o pruebas. Ambos actúan con declaración responsable ante la CCAA competente (art. 14)",
          "Suministrador: responde de origen, identidad, calidad y cumplimiento técnico de sus productos; facilita, cuando proceda, instrucciones y garantías (art. 15)",
          "Propietario: conserva, mantiene y transmite documentación, seguros y garantías. Usuario: utiliza según instrucciones de uso y mantenimiento (art. 16)",
        ],
      },
      {
        h: "Recepción, plazos y Libro del Edificio (arts. 6-7)",
        nota:
          "La recepción es el punto de inflexión de la LOE: el constructor entrega y el promotor acepta; desde ahí empiezan los plazos de responsabilidad y garantía. La trampa habitual es confundir la recepción tácita con el certificado final: el certificado acredita terminación, pero la recepción tácita exige además notificación escrita al promotor y 30 días sin reservas ni rechazo.",
        items: [
          "Recepción: acto por el que constructor entrega obra concluida al promotor y éste la acepta; puede ser con o sin reservas y abarcar obra total o fases completas y terminadas (art. 6.1)",
          "Acta: la firman al menos promotor y constructor; incluye partes, fecha del certificado final, coste final, recepción con/sin reservas, plazo de subsanación y garantías; se adjunta certificado final suscrito por DO y DEO",
          "El promotor puede rechazar por obra no terminada o no conforme al contrato, pero debe motivarlo por escrito en acta y fijar nuevo plazo de recepción",
          "Salvo pacto: recepción dentro de 30 días desde terminación acreditada por certificado final, contados desde notificación escrita al promotor",
          "Recepción tácita: transcurren esos 30 días y el promotor no formula reservas ni rechazo motivado por escrito",
          "Inicio de los plazos de responsabilidad y garantía: acta de recepción o recepción tácita; si hubo reservas, desde su subsanación",
          "Libro del Edificio: proyecto con modificaciones aprobadas + acta de recepción + identificación de agentes + instrucciones de uso y mantenimiento; se entrega a usuarios finales (art. 7)",
        ],
      },
      {
        h: "Responsabilidad civil: quién responde y durante cuánto tiempo (arts. 17-18)",
        nota:
          "La regla 1-3-10 no es un calendario abstracto: identifica el tipo de daño y, en el caso de acabados, también al responsable directo. Se cuentan desde la recepción sin reservas o desde que se subsanan. Después existe un plazo distinto de dos años para ejercitar la acción una vez producido el daño.",
        items: [
          "10 años: daños materiales por vicios o defectos estructurales —cimentación, soportes, vigas, forjados, muros de carga u otros elementos que comprometan resistencia mecánica y estabilidad—",
          "3 años: daños de elementos constructivos o instalaciones que ocasionen incumplimiento de los requisitos de habitabilidad del art. 3.1.c",
          "1 año: daños por vicios o defectos de ejecución que afecten a terminación o acabado; responde directamente el constructor",
          "Responsabilidad ordinaria: personal e individualizada por actos u omisiones propios o de quienes se deba responder",
          "Solidaridad: si no puede individualizarse causa o grado de intervención; y el promotor responde solidariamente en todo caso frente a adquirentes",
          "Proyectistas contratados conjuntamente responden solidariamente. Constructor responde directamente por jefe de obra, dependientes, subcontratistas y productos adquiridos o aceptados",
          "No responden los agentes que prueben caso fortuito, fuerza mayor, acto de tercero o conducta del perjudicado (art. 17.8)",
          "Prescripción de la acción por daños: 2 años desde que se producen. Repetición entre agentes/aseguradores: 2 años desde firmeza judicial o pago extrajudicial (art. 18)",
        ],
      },
      {
        h: "Garantías, seguros y Registro (arts. 19-20)",
        nota:
          "No confundas plazo de responsabilidad con garantía: ambos siguen el esquema 1-3-10, pero el art. 19 regula los instrumentos de cobertura. El seguro anual puede sustituirse por retención; para trienal y decenal el tomador es el promotor. Las garantías exigibles se hacen efectivas según la obligatoriedad de la disposición adicional segunda.",
        items: [
          "Garantía anual: daños por terminación o acabado durante 1 año; seguro de daños, caución o garantía financiera, sustituible por retención del promotor del 5% de la ejecución material (art. 19.1.a)",
          "Garantía trienal: daños que incumplen habitabilidad durante 3 años; seguro de daños, caución o garantía financiera (art. 19.1.b)",
          "Garantía decenal: daños estructurales durante 10 años; seguro de daños, caución o garantía financiera (art. 19.1.c)",
          "Tomador: constructor para garantía anual; promotor para trienal y decenal. El promotor puede pactar expresamente con el constructor que éste sea tomador del seguro por cuenta de aquél. Asegurados: el promotor y los sucesivos adquirentes (en el seguro de caución, siempre los sucesivos adquirentes) (art. 19.2.a y 19.3.a)",
          "Capital mínimo asegurado: 5% (anual), 30% (trienal) y 100% (decenal) del coste final de ejecución material, incluidos honorarios profesionales",
          "Prima: pagada al recibirse la obra. El fraccionamiento posterior impagado no libera al asegurador ni suspende cobertura",
          "Franquicia: no admisible en anual; en trienal y decenal, máximo 1% del capital asegurado de cada unidad registral",
          "Art. 20: no se autorizan ni inscriben escrituras de obra nueva a las que resulte aplicable la LOE sin acreditar las garantías del art. 19",
          "Art. 20.2: mientras no hayan transcurrido los plazos de prescripción del art. 18, no se cierra en el Registro Mercantil la hoja del promotor individual ni se inscribe la liquidación de sociedades promotoras sin acreditar las garantías de todas sus edificaciones",
          "Salvo pacto en contrario, las garantías no cubren, entre otros: daños corporales, inmuebles contiguos, bienes muebles, obras posteriores a la recepción, mal uso o falta de mantenimiento, incendio o explosión (salvo vicios de instalaciones propias), caso fortuito o fuerza mayor, y partes con reservas no subsanadas (art. 19.9)",
        ],
      },
    ],
    claves: [
      "LOE: proceso de edificación + agentes + requisitos básicos + responsabilidades + garantías",
      "Obra sin proyecto: escasa entidad y sencillez + no residencial/pública + una planta — requisitos acumulativos",
      "Requisitos: funcionalidad · seguridad · habitabilidad. El CTE los concreta",
      "Grupo a): proyectista y director de obra = arquitecto; director de ejecución = arquitecto técnico",
      "Recepción tácita: 30 días desde notificación escrita al promotor sin reservas ni rechazo motivado",
      "1 año acabados (constructor) · 3 años habitabilidad · 10 años estructura; desde recepción sin reservas o subsanación",
      "Acción por daños: prescribe a los 2 años desde que se producen; promotor siempre solidario frente a adquirentes",
      "Capital mínimo: 5% anual · 30% trienal · 100% decenal. Franquicia: nunca anual; máximo 1% en trienal/decenal",
      "Libro del Edificio: proyecto actualizado + recepción + agentes + instrucciones; va a usuarios finales",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Esquema 1-3-10: responsabilidad (art. 17) y garantías (art. 19)",
          columnas: ["Plazo", "Daños", "Responde", "Garantía (art. 19.1)", "Tomador", "Capital mínimo", "Franquicia"],
          filas: [
            ["1 año", "Vicios o defectos de ejecución en elementos de terminación o acabado", "El constructor", "Seguro de daños materiales, seguro de caución o garantía financiera; sustituible por retención del promotor del 5 % del importe de la ejecución material", "Constructor", "5 %", "No admisible: ni franquicia ni limitación alguna"],
            ["3 años", "Vicios o defectos de elementos constructivos o instalaciones que incumplan la habitabilidad del art. 3.1.c", "Los agentes que intervienen", "Seguro de daños materiales, seguro de caución o garantía financiera", "Promotor", "30 %", "Máximo 1 % del capital asegurado de cada unidad registral"],
            ["10 años", "Vicios o defectos en cimentación, soportes, vigas, forjados, muros de carga u otros elementos estructurales que comprometan directamente la resistencia mecánica y la estabilidad", "Los agentes que intervienen", "Seguro de daños materiales, seguro de caución o garantía financiera", "Promotor", "100 %", "Máximo 1 % del capital asegurado de cada unidad registral"]
          ],
          nota: "Los plazos de responsabilidad se cuentan desde la fecha de recepción de la obra, sin reservas, o desde la subsanación de éstas (art. 17.1); los de responsabilidad y garantía, desde el acta de recepción o la recepción tácita (art. 6.5). El capital mínimo se calcula sobre el coste final de la ejecución material de la obra, incluidos los honorarios profesionales (art. 19.5). El promotor puede pactar que el constructor sea tomador por cuenta de aquél (art. 19.2.a). La garantía exigible en cada caso se hace efectiva según la obligatoriedad que se establezca en aplicación de la disposición adicional segunda (art. 19.1)."
        },
        {
          titulo: "Titulación habilitante según el grupo de uso (arts. 2.1, 10, 12 y 13)",
          columnas: ["Grupo (art. 2.1)", "Usos", "Proyectista y director de obra", "Director de la ejecución"],
          filas: [
            ["a)", "Administrativo, sanitario, religioso, residencial en todas sus formas, docente y cultural", "Arquitecto", "Arquitecto técnico"],
            ["b)", "Aeronáutico; agropecuario; energía; hidráulica; minero; telecomunicaciones; transporte terrestre, marítimo, fluvial y aéreo; forestal; industrial; naval; ingeniería de saneamiento e higiene; accesorio a las obras de ingeniería y su explotación", "Con carácter general, ingeniero, ingeniero técnico o arquitecto, según especialidades y competencias", "Arquitecto técnico si las obras las dirige un arquitecto; si no, indistintamente arquitecto, arquitecto técnico, ingeniero o ingeniero técnico"],
            ["c)", "Todas las demás edificaciones cuyos usos no estén expresamente relacionados (por ejemplo, el comercial)", "Arquitecto, arquitecto técnico, ingeniero o ingeniero técnico, según especialidades y competencias", "Indistintamente arquitecto, arquitecto técnico, ingeniero o ingeniero técnico"]
          ],
          nota: "Para el proyectista y el director de obra se siguen idénticos criterios en las obras del art. 2.2.b y c (intervenciones en edificios existentes y en edificios protegidos). En todos los grupos pueden intervenir otros técnicos titulados en los aspectos de su especialidad, coordinados por el proyectista (art. 10.2.a). Las personas jurídicas designan al técnico con la titulación habilitante."
        },
        {
          titulo: "Quién firma qué en el proceso",
          columnas: ["Documento o acto", "Quién lo suscribe o hace", "Artículos"],
          filas: [
            ["Acta de replanteo o de comienzo", "Constructor, director de obra y director de la ejecución", "11.2.f, 12.3.e, 13.2.e"],
            ["Libro de Órdenes y Asistencias", "Director de obra (instrucciones para interpretar el proyecto) y director de la ejecución (instrucciones precisas)", "12.3.c, 13.2.d"],
            ["Certificaciones parciales y liquidación final", "Las elabora y suscribe el director de la ejecución; las conforma el director de obra", "12.3.e, 13.2.e"],
            ["Certificado final de obra", "Director de obra y director de la ejecución, responsables de su veracidad y exactitud", "6.2, 12.3.e, 13.2.e, 17.7"],
            ["Acta de recepción", "Al menos, promotor y constructor", "6.2, 9.2.c, 11.2.f"],
            ["Documentación de la obra ejecutada", "La elabora y suscribe el director de obra y la entrega al promotor; el constructor facilita datos; el director de la ejecución aporta los resultados del control; el suministrador, instrucciones y garantías", "7, 11.2.g, 12.3.f, 13.2.f, 15.3.b"],
            ["Seguros y garantías del art. 19", "El promotor suscribe los seguros; el constructor suscribe las garantías", "9.2.d, 11.2.h"]
          ],
          nota: "El promotor autoriza al director de obra las modificaciones del proyecto (art. 9.2.b); el director de obra las elabora a requerimiento del promotor o con su conformidad (art. 12.3.d). El director de obra asume también las funciones del art. 13 cuando sea el mismo profesional que el director de la ejecución (art. 12.3.g)."
        },
        {
          titulo: "Recepción de la obra (art. 6)",
          columnas: ["Aspecto", "Regla"],
          filas: [
            ["Concepto", "Acto por el que el constructor, concluida la obra, la entrega al promotor y éste la acepta"],
            ["Alcance", "Con o sin reservas; la totalidad de la obra o fases completas y terminadas, si así lo acuerdan las partes"],
            ["Acta", "Firmada, al menos, por promotor y constructor. Contenido: partes; fecha del certificado final; coste final de la ejecución material; recepción con o sin reservas y plazo de subsanación; garantías exigidas al constructor. Se adjunta el certificado final de obra"],
            ["Subsanación de reservas", "Se hace constar en un acta aparte, suscrita por los firmantes de la recepción"],
            ["Rechazo", "Por obra no terminada o no adecuada a las condiciones contractuales; motivado por escrito en el acta, que fija nuevo plazo"],
            ["Plazo", "Salvo pacto expreso, dentro de los 30 días siguientes a la terminación acreditada en el certificado final, contados desde la notificación por escrito al promotor"],
            ["Recepción tácita", "Transcurridos 30 días sin que el promotor manifieste reservas o rechazo motivado por escrito"],
            ["Efecto", "Desde el acta o la recepción tácita empieza el cómputo de los plazos de responsabilidad y garantía"]
          ],
          nota: "Libro del Edificio (art. 7): proyecto con las modificaciones aprobadas + acta de recepción + relación de agentes + instrucciones de uso y mantenimiento; lo facilita el director de obra al promotor y se entrega a los usuarios finales."
        }
      ],
      datos: [
        "Art. 2.1: tres grupos de usos. a) administrativo, sanitario, religioso, residencial en todas sus formas, docente y cultural; b) los de ingeniería e industria; c) todos los demás.",
        "Art. 2.2: requieren proyecto la obra nueva (con la excepción de las construcciones sencillas), las intervenciones que alteren la configuración arquitectónica (intervención total, o parcial con variación esencial de la composición general exterior, la volumetría o el conjunto del sistema estructural, o cambio de los usos característicos) y las intervenciones en edificios catalogados o protegidos (total, o parcial que afecte a los elementos protegidos).",
        "Art. 2.3: forman parte de la edificación sus instalaciones fijas, el equipamiento propio y los elementos de urbanización que permanezcan adscritos al edificio.",
        "Art. 3.1: 11 requisitos básicos en tres grupos. Funcionalidad (4): utilización, accesibilidad, acceso a servicios de telecomunicación, audiovisuales y de información, y acceso de los servicios postales. Seguridad (3): estructural, en caso de incendio y de utilización. Habitabilidad (4): higiene, salud y medio ambiente; ruido; ahorro de energía y aislamiento térmico; otros aspectos funcionales.",
        "Art. 3.1: los requisitos se satisfacen en el proyecto, la construcción, el mantenimiento, la conservación y el uso, y en las intervenciones en edificios existentes.",
        "Art. 6.4: recepción en 30 días desde la notificación escrita al promotor; recepción tácita a los 30 días sin reservas ni rechazo motivado por escrito.",
        "Art. 14: entidades de control y laboratorios actúan en todo el territorio con una declaración responsable ante la comunidad autónoma (las entidades, la de su domicilio social o profesional; los laboratorios, una por cada establecimiento físico).",
        "Art. 15.2: producto de construcción es el que se fabrica para su incorporación permanente en una obra (materiales, elementos semielaborados, componentes y obras o partes de ellas, terminadas o en proceso).",
        "Art. 17.1: 10 años estructura, 3 años habitabilidad, 1 año acabados (constructor).",
        "Art. 18: 2 años de prescripción de la acción por daños, desde que se producen; 2 años para la acción de repetición, desde la firmeza de la sentencia que condena o desde la indemnización extrajudicial.",
        "Art. 19.1.a: la garantía de 1 año puede sustituirse por la retención por el promotor del 5 % del importe de la ejecución material.",
        "Art. 19.5: capital mínimo 5 %, 30 % y 100 % del coste final de la ejecución material, incluidos los honorarios profesionales.",
        "Art. 19.8: franquicia prohibida en la garantía de 1 año; en las de 3 y 10 años, como máximo el 1 % del capital asegurado de cada unidad registral.",
        "Art. 19.2.b: la prima debe estar pagada en el momento de la recepción; si se fracciona, el impago de las fracciones no permite al asegurador resolver el contrato ni suspender la cobertura.",
        "Art. 19.3: en el seguro de caución, el asegurador indemniza al primer requerimiento y no puede oponer al asegurado las excepciones que tenga contra el tomador.",
        "Art. 19.6: el asegurador puede optar por pagar la indemnización en metálico o por reparar los daños."
      ],
      excepciones: [
        "Obra nueva sin proyecto: solo si concurren a la vez escasa entidad constructiva y sencillez técnica, ningún carácter residencial ni público (ni eventual ni permanente) y una sola planta (art. 2.2.a).",
        "La prevención de riesgos laborales en las obras se rige por su legislación específica, no por la LOE (art. 1.2).",
        "Las Administraciones públicas y entidades sujetas a la legislación de contratos se rigen por ella y, en lo no previsto, por la LOE, salvo en las garantías de suscripción obligatoria, que no se les aplican (art. 1.3).",
        "La recepción en 30 días rige «salvo pacto expreso en contrario» (art. 6.4).",
        "La responsabilidad es personal e individualizada, pero es solidaria si no puede individualizarse la causa o hay concurrencia de culpas sin poder precisar el grado de cada agente (art. 17.3).",
        "En todo caso, el promotor responde solidariamente con los demás agentes ante los adquirentes por vicios o defectos de construcción; su responsabilidad se extiende al promotor o gestor de cooperativas o comunidades de propietarios u otras figuras análogas (art. 17.3 y 17.4).",
        "Responden solidariamente los proyectistas contratados conjuntamente y los técnicos a los que se contrate conjuntamente la dirección de obra (art. 17.5 y 17.7).",
        "El proyectista responde directamente de los cálculos, estudios, dictámenes o informes que contrate con otros profesionales; el constructor, del jefe de obra, de sus dependientes, de los subcontratistas y de los productos que adquiera o acepte; en ambos casos, sin perjuicio de la repetición (art. 17.5 y 17.6).",
        "Quien acepte dirigir una obra cuyo proyecto no ha elaborado asume las responsabilidades por omisiones, deficiencias o imperfecciones del proyecto, sin perjuicio de repetir contra el proyectista (art. 17.7).",
        "No hay responsabilidad si se prueba caso fortuito, fuerza mayor, acto de tercero o culpa del propio perjudicado (art. 17.8).",
        "La responsabilidad de la LOE se entiende sin perjuicio de la del vendedor frente al comprador (arts. 1.484 y siguientes del Código Civil) (art. 17.9).",
        "En los seguros de daños materiales no se aplica la cobertura de riesgos extraordinarios del art. 4 de la Ley 21/1990 (art. 19.2.c).",
        "Una vez tomen efecto las coberturas, el contrato de seguro no puede rescindirse ni resolverse de mutuo acuerdo antes de que acabe su plazo (art. 19.4).",
        "Quien incumpla la obligación de suscribir las garantías responde personalmente, en todo caso (art. 19.7).",
        "Salvo pacto en contrario, las garantías no cubren (art. 19.9): daños corporales u otros perjuicios económicos distintos de los materiales; daños a inmuebles contiguos o adyacentes; daños a bienes muebles del edificio; obras posteriores a la recepción, salvo las de subsanación de sus defectos; mal uso o falta de mantenimiento; gastos de mantenimiento; incendio o explosión, salvo por vicios o defectos de las instalaciones propias del edificio; caso fortuito, fuerza mayor, acto de tercero o del perjudicado; y siniestros en partes con reservas en el acta de recepción mientras no se subsanen y consten en una nueva acta.",
        "Sin acreditar las garantías del art. 19 no se autorizan ni se inscriben escrituras de declaración de obra nueva (art. 20.1)."
      ]
    },
  };
