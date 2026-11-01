// Resumen del tema E5. Formato: cabecera de src/data/resumenes.js.
// Revisado el 01-11-2026 (chequeo del tema). Vigencia: el Real Decreto 164/2025, de 4 de marzo, se publicó en
// el BOE n.º 87 de 10-04-2025 (BOE-A-2025-7190), entró en vigor el 10-05-2025 (un mes después) y derogó el
// RD 2267/2004. El BOE solo da la redacción inicial: no hay modificaciones ni correcciones de errores del
// reglamento hasta el 21-05-2026, así que el texto de temas/E_Tema05.txt (capítulos I-III y anexo I) es el vigente.
// Corregidos: tabla 1.1.1 (con H < 5 m solo se admite A < 500 m²) y requisitos de los edificios independientes.
// Añadida la sección de memorización (tablas, datos y excepciones), sacada del TXT.
export default {
    intro:
      "El RD 164/2025 establece los requisitos de seguridad contra incendios en establecimientos industriales: prevención, detección, limitación de propagación y extinción. Es de aplicación complementaria cuando otra legislación sectorial específica regule la actividad. Define protección pasiva (constructiva) y activa (equipos/sistemas), y establece un sistema de caracterización por configuración del edificio, sectorización y nivel de riesgo intrínseco (NRI) determinado por la densidad de carga de fuego ponderada y corregida (Qs).",
    bloques: [
      {
        h: "Disposiciones generales y ámbito (Arts. 1–4)",
        nota:
          "En el examen se confunde a menudo con el RIPCI (RD 513/2017): el RIPCI regula los equipos de protección activa; este reglamento regula el conjunto de la seguridad en establecimientos industriales (pasiva + activa). Ojo: los almacenes logísticos solo entran si QT ≥ 3.000.000 MJ y son de actividad principal logística; no entran los de venta física, archivos ni herramientas. Los talleres de reparación de vehículos SÍ entran.",
        items: [
          "Objeto (art. 1): requisitos de seguridad en incendio para establecimientos industriales; medidas de prevención, detección, limitación de propagación y extinción",
          "Aplicación complementaria (art. 1.2): las normas sectoriales específicas prevalecen; este reglamento solo cubre lo no previsto",
          "Uso industrial (art. 2.1): actividades industriales (Ley 21/1992), almacenes industriales, talleres reparación vehículos, servicios auxiliares",
          "Exclusiones (art. 2.2): nucleares/radiactivas, extracción minerales, agrarias/ganaderas, militares, instalaciones servicio ferroviario",
          "Almacén industrial (art. 3.b): recinto cubierto/no para almacenar productos; acceso solo personas autorizadas; NO abierto al público",
          "Almacén logístico: solo si QT ≥ 3.000.000 MJ y actividad principal es logística; excluidos venta física, archivos, herramientas",
          "Protección pasiva (art. 3.c): requisitos constructivos para prevenir, retrasar propagación y facilitar extinción/evacuación",
          "Protección activa (art. 3.d): medios/equipos/sistemas manuales o automáticos para detección, control, extinción",
          "Técnicas de seguridad equivalente (art. 3.e): soluciones que difieren de las prescripciones pero ofrecen nivel igual o mayor",
          "Diseño prestacional (art. 3.f): soluciones diseñadas para un emplazamiento concreto garantizando nivel igual o mayor",
          "Modificaciones significativas (art. 3.h): aumento superficie o nivel de riesgo intrínseco; las no significativas NO requieren nueva documentación",
          "Compatibilidad CTE DB-SI (art. 4): usos no industriales en mismo edificio con distinta titularidad → DB-SI; usos subsidiarios dentro del industrial → DB-SI si superan superficies umbral (250 m² salvo residencial siempre y aparcamiento 100 m²)",
        ],
      },
      {
        h: "Cumplimiento y exigencias básicas (Arts. 5–6)",
        nota:
          "Clásica pregunta trampa: ¿qué establecimientos están exentos de cumplir TODO el reglamento? Respuesta: los de Qs ≤ 42 MJ/m², superficie ≤ 120 m² y en recinto propio separado físicamente → solo art. 12 (mantenimiento), anexo III (extintores + alumbrado emergencia) y memoria técnica. Las 6 exigencias básicas del art. 6.1 son las que se desarrollan en anexos II y III.",
        items: [
          "Cumplimiento mínimo exigible (art. 5.1): vía a) prescripciones completas; vía b) técnicas equivalentes o diseño prestacional (responsabilidad proyectista + conformidad titular + informe organismo control)",
          "Exención parcial (art. 5.2): Qs ≤ 42 MJ/m² + superficie ≤ 120 m² + recinto propio separado físicamente → solo art. 12, anexo III (extintores y alumbrado emergencia) y memoria técnica firmada por técnico competente",
          "Adaptaciones razonables (art. 5.3): para naves de polígonos con planeamiento anterior a la entrada en vigor o edificios existentes que no puedan cumplir; requieren informe previo de organismo de control habilitado",
          "Exigencias básicas (art. 6.1): a) propagación interior · b) propagación exterior · c) evacuación · d) instalaciones protección · e) intervención bomberos · f) resistencia estructural",
        ],
      },
      {
        h: "Caracterización: configuraciones y sectorización (Art. 7 + Anexo I.1–I.2)",
        nota:
          "La caracterización es el corazón del reglamento. Primero se clasifica la configuración del edificio/espacio, luego se identifican sectores/áreas de incendio. Las configuraciones A, B, C son para edificios; D para espacios abiertos. Si hay comunicaciones (túneles, pasarelas) entre edificios tipo C, siguen siendo C si las comunicaciones tienen compartimentación y no afecta el colapso estructural.",
        items: [
          "Configuración tipo A: establecimiento ocupa parte de edificio con otros usos; AV (separación vertical), AH (separación horizontal); si mezcla → AV",
          "Configuración tipo B: edificio completo con estructura independiente, adyacente o a ≤ 3 m de otros edificios",
          "Configuración tipo C: edificio completo a > 3 m del más próximo de otros establecimientos, distancia libre de mercancías combustibles o elementos intermedios; varios edificios del mismo establecimiento son independientes si distan > 3 m, o si sus paredes colindantes cumplen como muro separador entre sectores y además tienen estructura portante y cerramiento independiente; si no, cuentan como un solo edificio",
          "Configuración tipo D: espacio abierto, descubierto o cubierto por estructuras que carecen total o parcialmente de cerramientos laterales; si la zona cubierta no cumple las aberturas laterales → se considera tipo A, B o C",
          "Aberturas laterales tipo D (tabla 1.1.1): con H < 5 m solo se admite A < 500 m² (L ≥ 25 %); con H ≥ 5 m → L ≥ 25 % (A < 500), ≥ 50 % (A entre 500 y 1.500), ≥ 70 % (A > 1.500)",
          "Sector de incendio (Anexo I.2.1.a): zona de edificio que confina el incendio durante un tiempo mediante elementos resistentes al fuego o espacios perimetrales",
          "Área de incendio (Anexo I.2.1.b): espacio abierto separado de otras zonas por perímetro, con elementos resistentes al fuego o espacios perimetrales",
        ],
      },
      {
        h: "Nivel de riesgo intrínseco y carga de fuego (Anexo I.3)",
        nota:
          "El NRI se clasifica en bajo (1-2), medio (3-5) y alto (6-8) según Qs. Los valores de Qs son clave: 425, 850, 1275, 1700, 3400, 6800, 13600. Se calcula por métodos de combustibilidad, fabricación o almacenamiento. Los elementos constructivos separados del interior por EI 30 pueden no contabilizarse. Se puede descartar carga de fuego de elementos constructivos si la desviación es <10%.",
        items: [
          "NRI BAJO: 1 (Qs ≤ 425) · 2 (425 < Qs ≤ 850)",
          "NRI MEDIO: 3 (850 < Qs ≤ 1.275) · 4 (1.275 < Qs ≤ 1.700) · 5 (1.700 < Qs ≤ 3.400)",
          "NRI ALTO: 6 (3.400 < Qs ≤ 6.800) · 7 (6.800 < Qs ≤ 13.600) · 8 (Qs > 13.600)",
          "Qs = densidad carga de fuego ponderada y corregida (MJ/m²); QT = carga total (MJ) = Qs × A (sin dividir por A)",
          "Método 3.2.1 (combustibilidad): Qs = Σ(qi·Gi·Ci)·R / A; qi = poder calorífico, Gi = masa, Ci = coef. peligrosidad, R = coef. actividad",
          "Método 3.2.2 (fabricación): Qs = Σ(qsi·Si·Ci)·R / A + construcción; qsi de tabla 1.3.5; no se contabiliza 'almacén de día'",
          "Método 3.2.3 (almacenamiento): Qs = Σ(qvi·hi·Si·Ci)·R / A + construcción; qvi de tabla 1.3.5; bruto vs neto según pasillos",
          "Elementos constructivos: no contabilizar si separados del interior por una capa al menos EI 30, ni los incombustibles (hormigón, acero); en los métodos 3.2.2 y 3.2.3 se puede descartar su totalidad si Qs se desvía menos del 10 %",
          "Simplificación (3.2.1): descartar materiales no representativos, sin que Qs se desvíe en ningún caso más del 10 % del total",
          "Coeficiente Ci: 1,60 (grado 1, fumígeno 1,92) · 1,40 (grado 2, fumígeno 1,68) · 1,20 (grado 3, fumígeno 1,44) · 1,00 (grados 4-5, fumígeno 1,20)",
        ],
      },
      {
        h: "Requisitos constructivos y protección activa (Arts. 8–9)",
        nota:
          "Los requisitos constructivos están en el anexo II y las dotaciones de protección activa en el anexo III, ambos en función de la caracterización (configuración + NRI + superficie). Los productos de construcción deben tener marcado CE según Reglamento (UE) 2024/3110 (nuevo) o 305/2011. Los equipos de protección activa cumplen el RIPCI (RD 513/2017).",
        items: [
          "Requisitos constructivos (art. 8.1): anexo II según caracterización",
          "Protección activa (art. 8.2): anexo III según caracterización",
          "Anexo IV: requisitos para casos singulares que difieren de la caracterización general",
          "Productos construcción (art. 9.1): marcado CE conforme Reglamento (UE) 2024/3110 o 305/2011",
          "Productos sin marcado CE (art. 9.2): informes de ensayo, certificaciones u otra documentación técnica; operador económico debe proporcionar información al destinatario",
          "Protección activa (art. 9.3): cumple RIPCI (RD 513/2017)",
          "Productos con prestaciones mínimas (art. 9.4): características/prestaciones en proyecto; comprobación en construcción; constancia en certificado final",
        ],
      },
      {
        h: "Proyecto, puesta en servicio y mantenimiento (Arts. 10–12)",
        nota:
          "Trampa frecuente: ¿cuándo se puede sustituir el proyecto por memoria técnica? Respuesta: superficie < 300 m² + TODOS los sectores/áreas de NRI bajo + NO aplica art. 10.3 (técnicas equivalentes/prestacional) ni art. 5.3 (adaptaciones). La puesta en servicio requiere acta de inspección inicial de organismo de control cuando la superficie de sectores/áreas medio+alto sume ≥ 1.000 m² o cuando se apliquen art. 10.3 o 5.3.",
        items: [
          "Proyecto obligatorio (art. 10.1): para establecimientos del art. 2 y modificaciones significativas (art. 12.4); redactado por persona técnica titulada competente",
          "Técnicas equivalentes/prestacional (art. 10.3): justificación documental + informe organismo de control; diseño prestacional sigue UNE-ISO 23932 y UNE-ISO 16733-1; métodos de cálculo verificados UNE-ISO 16730-1",
          "Memoria técnica en vez de proyecto (art. 10.4): superficie < 300 m² + todos sectores/áreas NRI bajo + NO art. 10.3 ni 5.3",
          "Puesta en servicio (art. 11.1): comunicación con proyecto/memoria + certificado técnico + acta inspección inicial (si ≥1.000 m² medio/alto o art. 10.3/5.3) + documentación RIPCI art. 20",
          "Declaración responsable (art. 11.2): alternativa si la CCAA lo permite; documentación a disposición de la administración",
          "Documentación en Libro del Edificio (art. 11.3)",
          "Funcionamiento y mantenimiento (art. 12): titular responsable; equipos sujetos a RIPCI; ocupantes deben conocer características y actuación; plan de autoprotección si aplica RD 393/2007",
          "Modificaciones significativas (art. 12.4): requieren nueva documentación arts. 10-11; no significativas → titular documenta y justifica",
        ],
      },
    ],
    claves: [
      "RIPCI = equipos/protección activa; RD 164/2025 = seguridad completa en industriales (pasiva+activa)",
      "Almacén logístico: QT ≥ 3.000.000 MJ + actividad principal logística; NO venta física, archivos, herramientas",
      "Qs ≤ 42 MJ/m² + ≤120 m² + recinto propio separado → solo art. 12 + anexo III (extintores+alumbrado) + memoria",
      "Configuración A: parte de edificio (AV vertical, AH horizontal, mezcla=AV)",
      "Configuración B: edificio completo independiente, adyacente o ≤3 m",
      "Configuración C: edificio completo >3 m libre de combustibles",
      "Configuración D: espacio abierto; si cubierto sin aberturas suficientes → reclasificar A/B/C",
      "NRI: bajo 1-2 (≤850) · medio 3-5 (850-3400) · alto 6-8 (>3400)",
      "Elementos constructivos con EI 30 hacia interior → no contabilizan en Qs",
      "Memoria técnica en vez de proyecto: <300 m² + todo NRI bajo + sin técnicas equivalentes/adaptaciones",
      "Acta inspección inicial obligatoria: ≥1.000 m² de medio+alto o técnicas equivalentes/adaptaciones",
      "Diseño prestacional: UNE-ISO 23932 + UNE-ISO 16733-1; cálculo UNE-ISO 16730-1",
      "Productos construcción: marcado CE Reglamento (UE) 2024/3110 (nuevo) o 305/2011",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Usos subsidiarios dentro del establecimiento que deben cumplir el CTE DB-SI (art. 4.2)",
          columnas: ["Uso (CTE DB-SI)", "Cumple el DB-SI cuando su superficie construida"],
          filas: [
            ["a) Administrativo", "Supera 250 m²"],
            ["b) Comercial", "Supera 250 m²"],
            ["c) Docente", "Supera 250 m²"],
            ["d) Pública Concurrencia", "Supera 250 m²"],
            ["e) Residencial Vivienda y Residencial Público", "Siempre"],
            ["f) Zonas de alojamiento", "Supera 250 m²"],
            ["g) Aparcamiento", "Supera 100 m²"],
            ["h) Varios usos a), b), c), d), f) o g) adyacentes o superpuestos", "Supera 250 m² entre todos ellos"]
          ],
          nota: "Superado el umbral, forman un sector de incendio independiente del industrial conforme al DB-SI, pero siguen siendo parte del establecimiento industrial. Vestuarios, lavabos, archivos o zonas de descanso computan como superficie industrial, salvo que sean adyacentes a esas zonas o exclusivos de su personal. Otros usos con distinta titularidad en el mismo edificio: siempre el DB-SI (art. 4.1)."
        },
        {
          titulo: "Umbrales de exención, documentación y control (arts. 5.2, 10.4 y 11.1.c)",
          columnas: ["Supuesto", "Condiciones (todas)", "Consecuencia"],
          filas: [
            ["Exención de las prescripciones (art. 5.2)", "Qs ≤ 42 MJ/m²; superficie construida ≤ 120 m²; recinto propio separado físicamente de otros establecimientos", "Solo art. 12 y los apartados del anexo III de extintores y alumbrado de emergencia, más memoria técnica a disposición de la Administración"],
            ["Memoria técnica en lugar de proyecto (art. 10.4)", "Superficie construida < 300 m²; todos los sectores y áreas de riesgo intrínseco bajo; sin arts. 10.3 ni 5.3", "Memoria técnica firmada por persona técnica titulada competente; puede ir en un mismo documento con el certificado (art. 11.1.b)"],
            ["Acta de inspección inicial (art. 11.1.c)", "Sectores y áreas de riesgo medio y alto que sumen 1.000 m² o más, o aplicación de los arts. 10.3 o 5.3", "Acta de un organismo de control habilitado (RD 2200/1995)"],
            ["Informe de organismo de control", "Técnicas de seguridad equivalente o diseño prestacional (art. 10.3); adaptaciones razonables (art. 5.3)", "10.3: informe de tercera parte independiente anexo al proyecto; 5.3: informe previo"]
          ],
          nota: "Tres cifras que se cruzan: ≤ 120 m² (exención), < 300 m² (memoria técnica) y ≥ 1.000 m² de riesgo medio y alto (acta)."
        },
        {
          titulo: "Vías para cumplir los mínimos exigibles (arts. 5 y 10.3)",
          columnas: ["Vía", "Cuándo", "Requisitos"],
          filas: [
            ["Prescripciones del reglamento (art. 5.1.a)", "Regla general", "Cumplirlas en su totalidad"],
            ["Técnicas de seguridad equivalente (arts. 3.e y 5.1.b)", "Casos particulares; se apartan de los arts. 7 y 8", "Responsabilidad del proyectista y conformidad del titular; nivel de seguridad al menos equivalente; normas o guías de diseño de reconocido prestigio; informe de organismo de control"],
            ["Diseño prestacional (arts. 3.f y 5.1.b)", "Casos particulares; soluciones para un emplazamiento concreto", "Lo mismo, con la metodología UNE-ISO 23932 y UNE-ISO 16733-1; cálculos validados con UNE-ISO 16730-1; control en ejecución y plan de validación de la obra"],
            ["Adaptaciones razonables (art. 5.3)", "Excepcionalmente: naves ya construidas en polígonos con planeamiento aprobado antes de la entrada en vigor, o edificio ya existente, que no puedan cumplir 5.1.a ni 5.1.b", "Responsabilidad del proyectista y conformidad del titular; justificar la necesidad y las exigencias del art. 6.1; informe previo de organismo de control"]
          ],
          nota: "En el proyecto (art. 10.3) se listan los apartados de los anexos I a IV que no se cumplen, incluidas las ubicaciones no permitidas del epígrafe III del anexo II."
        },
        {
          titulo: "Configuraciones de edificios y espacios abiertos (anexo I, apartado 1)",
          columnas: ["Tipo", "Situación del establecimiento", "Matices"],
          filas: [
            ["A (AV / AH)", "Ocupa parcialmente un edificio con otros establecimientos, industriales o de otros usos", "AV: separación en vertical; AH: en horizontal; si mezcla ambas, AV"],
            ["B", "Ocupa totalmente un edificio, con estructura portante y cerramiento independiente, adyacente o a ≤ 3 m de edificios de otro establecimiento", "—"],
            ["C", "Ocupa totalmente uno o varios edificios a > 3 m del edificio más próximo de otros establecimientos", "Distancia libre de mercancías combustibles; túneles, pasarelas o cintas no le quitan el tipo C si están compartimentados"],
            ["D", "Ocupa un espacio abierto, descubierto o cubierto por estructuras que carecen total o parcialmente de cerramientos laterales", "Aberturas laterales según la tabla 1.1.1; admite zonas puntuales cerradas (aseos o vestuarios)"]
          ],
          nota: "Lo que no encaje en un tipo se asimila justificadamente al más parecido; si el establecimiento tiene partes con configuraciones distintas, cada una se clasifica por separado."
        },
        {
          titulo: "Tabla 1.1.1: área lateral abierta (L) de las zonas cubiertas del tipo D",
          columnas: ["Superficie cubierta (A)", "H < 5 m", "H ≥ 5 m"],
          filas: [
            ["A < 500 m²", "L ≥ 25 %", "L ≥ 25 %"],
            ["A entre 500 y 1.500 m²", "No admitido", "L ≥ 50 %"],
            ["A > 1.500 m²", "No admitido", "L ≥ 70 %"]
          ],
          nota: "H: altura interior del suelo a la cubrición. L: huecos permanentemente abiertos, en % del área lateral total. Si no se cumple, la zona cubierta es tipo A, B o C."
        },
        {
          titulo: "Tabla 1.3.1: nivel de riesgo intrínseco (NRI) según Qs",
          columnas: ["Nivel", "NRI", "Qs (MJ/m²)"],
          filas: [
            ["Bajo", "1", "Qs ≤ 425"],
            ["Bajo", "2", "425 < Qs ≤ 850"],
            ["Medio", "3", "850 < Qs ≤ 1.275"],
            ["Medio", "4", "1.275 < Qs ≤ 1.700"],
            ["Medio", "5", "1.700 < Qs ≤ 3.400"],
            ["Alto", "6", "3.400 < Qs ≤ 6.800"],
            ["Alto", "7", "6.800 < Qs ≤ 13.600"],
            ["Alto", "8", "Qs > 13.600"]
          ],
          nota: "Ocho niveles (a ellos remite el art. 3.h para las modificaciones significativas): 2 bajos, 3 medios y 3 altos. Los límites se doblan a partir de 425, salvo el escalón intermedio de 1.275."
        },
        {
          titulo: "Tabla 1.3.2: coeficiente de peligrosidad por combustibilidad (Ci)",
          columnas: ["Grado de peligro", "Ci", "Ci si es fumígeno"],
          filas: [
            ["1", "1,60", "1,92"],
            ["2", "1,40", "1,68"],
            ["3", "1,20", "1,44"],
            ["4", "1,00", "1,20"],
            ["5", "1,00", "1,20"]
          ],
          nota: "Fumígeno: +20 % del Ci. Si un material tiene varios grados, se toma el de mayor Ci. Puede usarse el Catálogo CEA (coeficiente «GG»); si discrepa de las Frases H, prevalece el Reglamento CLP."
        },
        {
          titulo: "Puesta en servicio (art. 11)",
          columnas: ["Elemento", "Contenido"],
          filas: [
            ["Forma", "Comunicación ante el órgano competente en materia de industria de la comunidad autónoma (o Ceuta y Melilla), para su registro"],
            ["a) Proyecto o memoria técnica", "Con el contenido del art. 10"],
            ["b) Certificado de técnico titulado competente", "Adecuación al proyecto; n.º de sectores y áreas y riesgo intrínseco de cada uno; comprobaciones del art. 9.4; uso de los arts. 10.3 o 5.3"],
            ["c) Acta de inspección inicial", "Si los sectores y áreas de riesgo medio y alto suman 1.000 m² o más, o si se aplican los arts. 10.3 o 5.3"],
            ["d) Documentación del RIPCI", "La del art. 20 del RD 513/2017"],
            ["Alternativa (art. 11.2)", "Declaración responsable, cuando lo establezca la comunidad autónoma; la documentación queda a disposición de la Administración"],
            ["Conservación (art. 11.3)", "Copia en poder del titular, integrada en su caso en el Libro del Edificio"]
          ]
        }
      ],
      datos: [
        "Norma: Reglamento de seguridad contra incendios en los establecimientos industriales, aprobado por el Real Decreto 164/2025, de 4 de marzo (BOE de 10-04-2025, en vigor desde el 10-05-2025; sustituye al RD 2267/2004).",
        "Art. 1.1: objeto, prevenir la aparición de incendios y dar respuesta adecuada facilitando su rápida detección, limitando su propagación y posibilitando su extinción, para minimizar daños a personas, bienes y medioambiente.",
        "Art. 2.1, uso industrial (cuatro letras): actividades industriales del art. 3.1 de la Ley 21/1992, almacenes industriales, talleres de reparación de vehículos y servicios auxiliares o complementarios.",
        "Art. 2.2, exclusiones (cinco): nucleares y radiactivas, extracción de minerales, agrarias y ganaderas, usos militares e instalaciones de servicio del art. 42.1 de la Ley 38/2015 del sector ferroviario.",
        "Art. 3.b: los almacenes del transporte (art. 3.4.f de la Ley 21/1992) y los logísticos son almacenes industriales cuando su QT es igual o superior a tres millones de megajulios.",
        "Art. 3.g: persona técnica titulada competente = titulada universitaria con competencias específicas en la materia.",
        "Art. 5.1: el reglamento es mínimo exigible según el art. 12.5 de la Ley 21/1992.",
        "Art. 6.1, seis exigencias básicas: propagación interior, propagación exterior, evacuación de ocupantes, instalaciones de protección contra incendios, intervención de los Servicios de Extinción de Incendios y Salvamento, y resistencia estructural al incendio.",
        "Art. 7: la caracterización depende de la configuración, del nivel de riesgo intrínseco, de las superficies y del tipo de actividad (fabricación o almacenamiento). Art. 8: requisitos constructivos en el anexo II, protección activa en el anexo III y casos singulares en el anexo IV.",
        "Art. 9: marcado CE conforme al Reglamento (UE) 2024/3110 o, en su caso, al 305/2011; equipos de protección activa conforme al RIPCI (RD 513/2017).",
        "Art. 10.1: el proyecto forma parte, en su caso, del proyecto del art. 4 de la LOE o de la memoria para las licencias; lo exigen los establecimientos del art. 2 y las modificaciones significativas.",
        "Art. 12.3: plan de autoprotección cuando lo exija la normativa específica (RD 393/2007, Norma Básica de Autoprotección).",
        "Anexo I, orden de la caracterización: 1) configuración; 2) sectores (en edificios) y áreas (en espacios abiertos) de incendio; 3) nivel de riesgo intrínseco de cada uno.",
        "Qs, cuatro métodos: combustibilidad de los materiales (3.2.1), fabricación (3.2.2), almacenamiento (3.2.3) y combinación (3.2.4); también otros de reconocido prestigio justificados en el proyecto.",
        "QT (MJ) = Qs × A, o la fórmula de Qs sin dividir por A.",
        "Distancia de 3 m: tipo B si ≤ 3 m; tipo C si > 3 m."
      ],
      excepciones: [
        "La normativa sectorial o específica de protección contra incendios prevalece; el reglamento solo se aplica con carácter complementario y para lo no previsto en ella (art. 1.2).",
        "No son almacenes logísticos los de establecimientos de venta física (uso comercial del DB-SI), los de documentos (archivos, bibliotecas) ni los de herramientas o equipos de empresas de servicios (art. 3.b).",
        "Los almacenes de las actividades excluidas del art. 2.2 quedan fuera del reglamento.",
        "Residencial Vivienda y Residencial Público cumplen siempre el DB-SI; el aparcamiento, desde 100 m², no 250 (art. 4.2).",
        "Los establecimientos exentos del art. 5.2 siguen sujetos al art. 12, a los extintores y al alumbrado de emergencia del anexo III y a la memoria técnica.",
        "Si la separación mezcla AV y AH, el edificio es tipo AV.",
        "Los túneles, pasarelas o cintas transportadoras entre edificios no impiden el tipo C si están compartimentados, se garantiza la evacuación y su colapso no afecta a los edificios.",
        "El tipo D admite zonas puntuales cerradas (aseos o vestuarios) si no albergan la actividad principal ni aumentan el riesgo.",
        "No se contabilizan en Qs los elementos constructivos separados por una capa al menos EI 30, ni los incombustibles (hormigón, acero), ni el «almacén de día» por separado (va con su actividad).",
        "Modificaciones no significativas (distribución en planta, maquinaria, estanterías, reformas menores o reparaciones sin aumento del NRI): no se presentan documentos; el titular las documenta y justifica (art. 12.4). Las significativas repiten los arts. 10 y 11 solo para la parte afectada.",
        "Fuera del alcance, como contexto de vigencia (disposiciones transitorias del RD 164/2025, BOE): los establecimientos existentes no tienen que adaptarse salvo ampliaciones o reformas que aumenten la superficie o el NRI, o un cambio de actividad que deje de ajustarse al proyecto, y solo en el sector o área afectados."
      ]
    }
  };
