// Resumen del tema E4. Formato: cabecera de src/data/resumenes.js.
export default {
    intro:
      "El RD 513/2017 aprueba el Reglamento de Instalaciones de Protección Contra Incendios (RIPCI). Regula el diseño, instalación, mantenimiento e inspección de los equipos y sistemas de protección activa contra incendios. Es de aplicación supletoria cuando otra legislación específica no regule estos aspectos, con la excepción de los túneles de carreteras del Estado (RD 635/2006). El alcance del tema es el capítulo I (arts. 1 a 3) y el anexo I sin su apéndice. Texto vigente el 21-05-2026: el anexo I ya incluye la modificación de la disposición final primera del Real Decreto 164/2025, de 4 de marzo (BOE 10-04-2025), que añadió los apartados 4 a 6 de hidrantes, rehízo caudales y presiones de las BIE y la toma y señalización de la columna seca, y creó el epígrafe 16 de cocinas comerciales.",
    bloques: [
      {
        h: "Disposiciones generales (Arts. 1–3)",
        nota:
          "El art. 1 define el objeto del reglamento: no es una norma de prevención de incendios en sí, sino de los equipos y sistemas de protección activa. El ámbito subjetivo (art. 2) alcanza a instaladoras, mantenedoras, fabricantes, importadores y organismos de evaluación técnica. En el examen se confunde a menudo con el DB-SI del CTE: el DB-SI exige QUE haya protección (qué sectores, qué resistencias); el RIPCI define CÓMO deben ser los equipos (marcado CE, normas UNE, mantenimiento).",
        items: [
          "Objeto (art. 1): condiciones y requisitos de diseño, instalación/aplicación, mantenimiento e inspección de equipos, sistemas y componentes de protección activa",
          "Aplicación supletoria (art. 1.2): cuando otra legislación específica no regule la protección activa; excepción: túneles de carreteras del Estado → RD 635/2006",
          "Ámbito subjetivo (art. 2): sujetas al Reglamento las empresas instaladoras y las mantenedoras; sus exigencias técnicas se aplican además a fabricantes, importadores, distribuidores, organismos de certificación o evaluación técnica y a todos los que puedan verse afectados",
          "Protección activa (art. 3.a): medios, equipos y sistemas manuales o automáticos para detección, control y/o extinción, facilitando evacuación e impidiendo propagación",
          "Evaluación técnica (art. 3.d): valoración de los requisitos básicos relacionados con el uso previsto y evaluación y seguimiento del control de producción en fábrica",
          "Organismos habilitados para la evaluación técnica (art. 3.e): evalúan requisitos básicos, control en fábrica y seguimiento anual; 4 criterios: imparcialidad, objetividad y transparencia con personal técnico competente; experiencia contrastada avalada por sistemas de gestión de la calidad; procedimientos validados expresamente por la Comunidad Autónoma donde presenten la declaración responsable; información permanente al público sobre alcance y vigencia de sus evaluaciones",
          "Productos de protección contra incendios (art. 3.b): equipos, sistemas y componentes que integran las instalaciones de protección activa. Marcado CE (art. 3.c): el fabricante indica que el producto cumple la legislación comunitaria de armonización que prevé su colocación",
          "Empresa instaladora (art. 3.f): ubica/instala equipos y sistemas; coloca señales, balizamientos y planos de evacuación de señalización luminiscente",
          "Empresa mantenedora (art. 3.g): realiza operaciones de mantenimiento de equipos y sistemas",
        ],
      },
      {
        h: "Sistemas de detección y alarma de incendios",
        nota:
          "Este apartado es un festival de normas UNE. En el examen suelen preguntar cuál corresponde a qué componente. La clave es agrupar: UNE 23007-XX para diseño/instalación, UNE-EN 54-XX para producto/marcado CE. Ojo: los detectores con alimentación autónoma no van por UNE-EN 54 sino por UNE-EN 14604. Los dispositivos visuales son obligatorios cuando el ruido supere 60 dB(A), haya personas sordas o se use protección auditiva.",
        items: [
          "Norma de componentes: UNE-EN 54-1; diseño/instalación/puesta en servicio: UNE 23007-14; compatibilidad: UNE-EN 54-13; alarma por voz: UNE 23007-32",
          "Equipo de suministro de alimentación (e.s.a.): marcado CE conforme EN 54-4 (UNE 23007-4)",
          "Detectores automáticos (calor, humo, llama, lineales, aspiración): marcado CE conforme UNE-EN 54-5, 54-7, 54-10, 54-12, 54-20",
          "Detectores con fuente autónoma: marcado CE conforme UNE-EN 14604 (no UNE-EN 54)",
          "Pulsadores de alarma (activación manual): marcado CE conforme EN 54-11; distancia máxima desde origen de evacuación: 25 m; altura parte superior: 80–120 cm",
          "Equipo de control e indicación (e.c.i.): marcado CE conforme EN 54-2 (UNE 23007-2); debe identificar la zona de activación",
          "Dispositivos acústicos: marcado CE UNE-EN 54-3; dispositivos visuales: UNE-EN 54-23 (se incorporan si lo exige otra legislación, si el ruido supera 60 dB(A), si los ocupantes habituales son personas sordas o si es probable que lleven protección auditiva); nivel sonoro y óptico perceptible en cada sector de detección",
          "Alarma por voz: controladores UNE-EN 54-16, altavoces UNE-EN 54-24",
          "Transmisión de alarmas: marcado CE conforme EN 54-21; los sistemas de protección contra incendios tienen prioridad máxima en sistemas integrados",
          "Resto de componentes: marcado CE conforme serie UNE-EN 54 cuando entre en vigor; hasta entonces, certificado o marca de conformidad (art. 5.2)",
        ],
      },
      {
        h: "Sistemas de abastecimiento de agua contra incendios",
        nota:
          "Poco preguntado directamente, pero es la base de hidrantes, BIE y rociadores. La norma clave es UNE 23500. Si un sistema de extinción tiene evaluación técnica favorable (art. 5.3), su abastecimiento de agua se considera conforme. Para BIE, las tuberías cumplen UNE 23500 salvo que el propio epígrafe de BIE o rociadores diga lo contrario.",
        items: [
          "Compuesto por fuentes de agua, equipos de impulsión y red general de incendios",
          "Norma de referencia: UNE 23500",
          "Sistemas con evaluación técnica favorable (art. 5.3): su abastecimiento se considera conforme",
          "Tuberías de BIE: requisitos de UNE 23500, salvo que el epígrafe específico establezca otros (como en rociadores)",
        ],
      },
      {
        h: "Hidrantes contra incendios",
        nota:
          "Uno de los apartados más técnicos y con más cifras del reglamento. Se pregunta mucho la distancia máxima de recorrido (100 m urbanas / 40 m resto), el caudal mínimo (500 l/min) y las presiones (100 kPa solo llenado camiones en urbanas / 500 kPa resto). Los hidrantes municipales cumplen los requisitos de producto e instalación del RIPCI, pero su mantenimiento e inspección lo fija el municipio. Ojo a la llave de cuadradillo: 25×25 mm para bajo tierra, 30×30 mm para columna.",
        items: [
          "Tipos: columna (UNE-EN 14384) y bajo tierra (UNE-EN 14339); solo admitidos rango de par «2», tipos «B» o «C»; si heladas → solo tipo «C» (mST 250 N·m)",
          "Hidrantes bajo tierra: PFA 1600 kPa (16 kg/cm²); tapas rojas RAL 3001 o inscripción «incendios»",
          "Zona protegida: distancia recorrido real <100 m (urbanas) o <40 m (resto); distancia perpendicular a fachada: 5–15 m",
          "Al menos un hidrante (situado, a ser posible, en la entrada del edificio) con salida de 100 mm, perpendicular a la fachada y de espaldas a ella",
          "En cualquier caso: accesibles, fuera de espacios de circulación y estacionamiento de vehículos, señalizados (anexo I, sección 2.ª); si el nivel freático queda por encima de la válvula de drenaje, se tapona antes de instalar",
          "Racores y mangueras de hidrantes: aprobados (art. 5.2) conforme a UNE 23400 y UNE 23091",
          "Caudal mínimo ininterrumpido por boca: 500 l/min",
          "Presión mínima: 100 kPa (1 kg/cm²) en urbanas si solo llenado de camiones; 500 kPa (5 kg/cm²) en el resto (impulsión directa)",
          "Hidrantes solo llenado camiones: pueden conectarse a red pública sin depósitos ni bombas; si hay depósitos → autonomía ≥60 min",
          "Llave cuadradillo: 25×25 mm (bajo tierra), 30×30 mm (columna); cierre en sentido agujas del reloj",
          "Hidrantes municipales: producto e instalación → RIPCI; puesta en servicio, mantenimiento e inspección → municipio",
        ],
      },
      {
        h: "Extintores de incendio",
        nota:
          "Clásico de examen: clases de fuego (A, B, C, D, F), tipos de extintor (portátil ≤20 kg, móvil >20 kg) y distancias de recorrido (15 m máximo). Los extintores portátiles necesitan certificación conforme UNE-EN 3-7 y 3-10; los móviles conforme UNE-EN 1866-1. Los generadores de aerosoles pueden usarse como extintores si tienen evaluación técnica favorable y equivalen a un portátil convencional. La señalización va junto al armario, no sobre él.",
        items: [
          "Portátil: ≤20 kg en condiciones de funcionamiento; móvil: >20 kg, sobre ruedas",
          "Portátiles: certificación UNE-EN 3-7 y UNE-EN 3-10; móviles: UNE-EN 1866-1",
          "También sujetos al RD 709/2015 (equipos a presión)",
          "Emplazamiento: visibles, accesibles, próximos a riesgo y salidas; parte superior a 80–120 cm del suelo; recorrido máximo horizontal: 15 m",
          "Clases de fuego (UNE-EN 2): A (sólidos, generalmente orgánicos, con brasas) · B (líquidos o sólidos licuables) · C (gases) · D (metales) · F (ingredientes para cocinar: aceites y grasas vegetales o animales en aparatos de cocina)",
          "Generadores de aerosoles como extintores: evaluación técnica favorable (art. 5.3), equivalencia con portátil convencional, mantenimiento igual que portátil",
          "Señalización: junto al armario, no sobre la superficie del mismo",
        ],
      },
      {
        h: "Bocas de incendio equipadas (BIE)",
        nota:
          "Apartado muy denso en cifras y con alta probabilidad de pregunta. Las BIE semirrígidas (25 mm) son para personas no especializadas; las planas (45 mm) requieren más formación. Factor K: 42 (semirrígida) vs 85 (plana). Presión mínima: 4 bar (400 kPa) semirrígida, 3,5 bar (350 kPa) plana. Presión máxima: 9 bar (900 kPa) para ambas. La prueba de estanquidad es a 980 kPa (10 kg/cm²) durante 2 h. La separación máxima entre BIE es 50 m. El radio de acción = longitud manguera + 5 m. Longitudes máximas: 20 m (plana), 30 m (semirrígida y alta presión).",
        items: [
          "Tipos: manguera semirrígida (UNE-EN 671-1, marcado CE) o plana (UNE-EN 671-2); solo admitidos 25 mm (semirrígida) y 45 mm (plana) de diámetro interior",
          "Toma adicional de 45 mm de la BIE semirrígida (para los servicios profesionales de extinción): con válvula, racor y tapón",
          "Racores: aprobados conforme UNE 23400 (art. 5.2)",
          "Factor K mínimo: 42 (semirrígida), 85 (plana)",
          "BIE alta presión: evaluación técnica favorable (art. 5.3); manguera ≤12 mm (salvo justificación de manejabilidad)",
          "Altura máxima boquilla/válvula/apertura armario: 1,50 m sobre suelo",
          "Ubicación: preferentemente cerca de puertas/salidas; siempre una BIE a ≤5 m de cada salida de sector (salvo que otra la cubra o legislación específica diga otra cosa)",
          "Cobertura: toda la superficie del sector debe quedar cubierta por al menos una BIE; radio de acción = longitud manguera + 5 m",
          "Separación máxima entre BIE: 50 m (semirrígida/plana); para alta presión: el doble del radio de acción",
          "Longitud máxima manguera: 20 m (plana), 30 m (semirrígida), 30 m (alta presión)",
          "Caudal mínimo semirrígida (25 mm): 85 l/min → presión mínima 4 bar (400 kPa); plana (45 mm): 160 l/min → 3,5 bar (350 kPa)",
          "Presión máxima semirrígida/plana: 9 bar (900 kPa)",
          "Autonomía red: 1 h mínimo para las 2 BIE hidráulicamente más desfavorables (o la única si solo hay una)",
          "BIE alta presión: presión dinámica mínima 3.450 kPa (35 kg/cm²) en salida, funcionando las 2 más desfavorables, durante 1 h",
          "Prueba estanquidad semirrígida/plana: presión estática = máxima de servicio, mínimo 980 kPa (10 kg/cm²), durante 2 h",
          "Prueba estanquidad alta presión: 1,5 × presión trabajo máxima, durante 2 h",
          "Señalización: junto al armario, no sobre el mismo",
        ],
      },
      {
        h: "Columna seca",
        nota:
          "Distinguir bien columna seca ascendente vs descendente. Ascendente: salidas en plantas pares hasta la 8.ª y en todas a partir de ésta; válvula de seccionamiento cada 4 plantas. Descendente: válvula y salida en CADA planta. Recorrido máximo hasta columna: 60 m. Prueba de estanquidad: 1.470 kPa (15 kg/cm²) si ≤30 m de altura; 2.450 kPa (25 kg/cm²) si >30 m. Señalización con texto «USO EXCLUSIVO SERVICIOS DE EXTINCIÓN DE INCENDIOS».",
        items: [
          "Componentes: toma en fachada (conexión siamesa, llaves, racores 70 mm, tapa, purga 25 mm) + columna acero galvanizado DN80",
          "Ascendente: salidas en plantas pares hasta la 8.ª y en todas a partir de ésta; racores 45 mm; válvula seccionamiento cada 4 plantas (por encima de la salida)",
          "Descendente: válvula y salida en cada planta; llave justo por debajo de la salida; racores 45 mm en todas las plantas",
          "Salidas en recintos de escaleras o vestíbulos previos; centro de bocas a 0,90 m del suelo; válvulas de bola con palanca",
          "Recorrido máximo hasta columna: <60 m por recorridos de evacuación",
          "Cada columna (ascendente o descendente) tiene toma independiente en fachada",
          "Zona de toma libre de obstáculos, señalizada, con espacio para camión de bombeo",
          "Prueba estanquidad: presión estática = máxima de servicio, mínimo 1.470 kPa (15 kg/cm²) si ≤30 m; 2.450 kPa (25 kg/cm²) si >30 m; durante 2 h",
          "Señalización: «USO EXCLUSIVO SERVICIOS DE EXTINCIÓN DE INCENDIOS»; junto al armario o inscrita en la puerta; en tomas de entrada se identifican plantas/zonas servidas y presión máxima de servicio",
        ],
      },
      {
        h: "Sistemas fijos de extinción",
        nota:
          "Todos los sistemas fijos comparten dos requisitos comunes: marcado CE (o certificado/marca de conformidad según art. 5.2 mientras no haya norma armonizada) y señalización de mecanismos de disparo/paro manual conforme anexo I sección 2.ª. Los sistemas con riesgo para el personal (polvo, gases, aerosoles) deben incluir retardo y prealarma para evacuación. En el examen se pregunta mucho qué norma corresponde a cada sistema.",
        items: [
          "Rociadores automáticos y agua pulverizada: componentes serie UNE-EN 12259 (marcado CE); diseño/instalación UNE-EN 12845; diluvio/inundación UNE 23501 a 23507",
          "Agua nebulizada: UNE-CEN/TS 14972",
          "Espuma física: diseño/instalación UNE-EN 13565-2; componentes UNE-EN 13565-1; espumógenos UNE-EN 1568-1 a 1568-4",
          "Polvo: diseño/instalación UNE-EN 12416-2; componentes UNE-EN 12416-1; polvo UNE-EN 615; requiere retardo + prealarma (evacuación obligatoria)",
          "Gases: UNE-EN 15004-1 (o UNE ISO 6183 según agente); componentes serie UNE-EN 12094; requiere retardo + prealarma",
          "Aerosoles condensados: UNE-EN 15276-2; componentes marca conformidad UNE-EN 15276-1 (art. 5.2)",
          "Cocinas comerciales: certificación UNE-EN 17446 (art. 5.2); instalación/mantenimiento por empresa habilitada del sistema base; mantenimiento según anexo II de sistemas fijos",
          "Todos los mecanismos de disparo/paro manuales señalizados conforme anexo I sección 2.ª",
        ],
      },
      {
        h: "Control de humos y de calor",
        nota:
          "Cuatro estrategias de movimiento de gases: flotabilidad (techos altos), presurización diferencial (vías de evacuación, especialmente escaleras), ventilación horizontal (túneles/aparcamientos de poca esbeltez) y extracción de humos (durante y/o tras el incendio, cuando hay sistemas de supresión incompatibles con otros tipos). Las barreras de humo llevan marcado CE UNE-EN 12101-1; aireadores naturales UNE-EN 12101-2; extractores mecánicos UNE-EN 12101-3.",
        items: [
          "Estrategias: flotabilidad (techos altos) · presurización diferencial (vías evacuación, escaleras) · ventilación horizontal (túneles/aparcamientos) · extracción de humos (durante/tras incendio)",
          "Flotabilidad: UNE 23585 (proyecto); UNE 23584 (instalación, puesta en marcha, mantenimiento) para edificios de 1 planta, multiplanta con atrios/escaleras o subterráneos",
          "Presurización diferencial: UNE-EN 12101-6 + UNE 23584 (aspectos no previstos)",
          "Ventilación horizontal: otras normas/documentos reconocidos por el Ministerio hasta entrada en vigor de UNE-EN específicas",
          "Extracción de humos: diseño según renovaciones/hora u otros parámetros; usado también tras supresión del incendio cuando otros sistemas son incompatibles",
          "Barreras de humo: marcado CE UNE-EN 12101-1; aireadores naturales: UNE-EN 12101-2; extractores mecánicos: UNE-EN 12101-3",
          "Resto de componentes: marcado CE serie UNE-EN 12101 cuando entre en vigor; hasta entonces certificado/marca de conformidad (art. 5.2)",
        ],
      },
      {
        h: "Mantas ignífugas, alumbrado de emergencia y señalización luminiscente",
        nota:
          "Tres elementos auxiliares que suelen aparecer en preguntas de detalle. Mantas ignífugas: caducidad máxima 20 años, aprobadas conforme UNE-EN 1869. Alumbrado de emergencia: no lo regula el RIPCI en sí, sino que remite al REBT (RD 842/2002) e ITC-BT-28. Señalización luminiscente: fotoluminiscente (UNE 23035-4, categoría A en centros de autoprotección RD 393/2007) o eléctrica (requisitos análogos a alumbrado de emergencia). Las señales no luminiscentes dentro de edificios deben estar iluminadas exteriormente. Planos de evacuación conforme UNE 23032.",
        items: [
          "Mantas ignífugas: láminas flexibles para sofocación; aprobadas UNE-EN 1869 (art. 5.2); caducidad ≤20 años; envasadas hasta uso; visibles y accesibles",
          "Alumbrado de emergencia: conforme al REBT (RD 842/2002) e ITC-BT-28; asegura iluminación en locales y accesos hasta salidas",
          "Señalización luminiscente: función → informar situación de equipos de protección manual, aun con fallo de alumbrado normal",
          "Tipos: fotoluminiscentes o eléctricas (fluorescencia, LED, electroluminiscencia); señales no luminiscentes permitidas si no se pierde visibilidad o en exterior/vía pública; en interior deben estar iluminadas exteriormente",
          "Diseño de señales: UNE 23033-1 (medios manuales y alerta/alarma); señales no definidas → criterios UNE 23033-1, UNE 23032, UNE-EN ISO 7010",
          "Planos de evacuación: UNE 23032; visibles aun con fallo de alumbrado; representan medios manuales con señales UNE 23033-1",
          "Fotoluminiscentes: UNE 23035-4; categorías A y B; identificación con número de lote visible una vez instalada; justificación mediante informe de laboratorio acreditado",
          "Categoría A obligatoria en los centros con actividades del anexo I de la Norma Básica de Autoprotección (RD 393/2007)",
          "Eléctricas: requisitos análogos a alumbrado de emergencia en funcionamiento + diseño UNE 23033-1",
          "Señales no deben contener símbolos ajenos al mensaje; identificación en márgenes, ≤3% de la superficie total",
        ],
      },
    ],
    claves: [
      "RIPCI = cómo deben ser, instalarse y mantenerse los equipos de protección ACTIVA; la compartimentación y la evacuación (protección pasiva) no son objeto del Reglamento",
      "RIPCI supletorio; excepción: túneles carreteras Estado → RD 635/2006",
      "Detectores autónomos: UNE-EN 14604 (no UNE-EN 54)",
      "Pulsadores: 25 m máx desde origen evacuación; 80–120 cm altura",
      "Dispositivos visuales: si lo exige otra legislación, ruido >60 dB(A), ocupantes sordos o probable protección auditiva",
      "Hidrantes urbanas: recorrido <100 m; resto <40 m; caudal 500 l/min",
      "Hidrantes presión mínima: 100 kPa (solo llenado camiones urbanas) / 500 kPa (resto)",
      "Llave hidrantes: 25×25 mm (bajo tierra), 30×30 mm (columna); cierra sentido agujas reloj",
      "Extintor portátil ≤20 kg; móvil >20 kg; recorrido máximo 15 m; parte superior 80–120 cm",
      "Clases fuego: A sólidos / B líquidos / C gases / D metales / F cocina",
      "BIE semirrígida 25 mm (K=42, 85 l/min, 4 bar) vs plana 45 mm (K=85, 160 l/min, 3,5 bar)",
      "BIE presión máxima: 9 bar (900 kPa); prueba estanquidad: 10 kg/cm² (980 kPa) durante 2 h",
      "BIE separación máxima: 50 m; radio acción = longitud manguera + 5 m; longitudes 20 m (plana), 30 m (semirrígida)",
      "Columna seca ascendente: salidas pares hasta 8.ª y todas después; seccionamiento cada 4 plantas",
      "Columna seca descendente: válvula y salida en CADA planta",
      "Columna seca prueba: 15 kg/cm² (≤30 m) / 25 kg/cm² (>30 m) durante 2 h",
      "Rociadores: UNE-EN 12845; agua nebulizada: UNE-CEN/TS 14972; espuma: UNE-EN 13565-2",
      "Polvo y gases: requieren retardo + prealarma (evacuación antes de descarga)",
      "Mantas ignífugas: caducidad máxima 20 años",
      "Alumbrado emergencia: REBT (RD 842/2002) e ITC-BT-28",
      "Señalización fotoluminiscente: UNE 23035-4; categoría A en autoprotección (RD 393/2007)",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Detección y alarma: norma de cada componente (epígrafe 1)",
          columnas: ["Componente o aspecto", "Norma"],
          filas: [
            ["Descripción de los componentes del sistema", "UNE-EN 54-1"],
            ["Diseño, instalación, puesta en servicio y uso del sistema", "UNE 23007-14"],
            ["Compatibilidad de los componentes", "UNE-EN 54-13"],
            ["Diseño, instalación y puesta en servicio de la alarma por voz", "UNE 23007-32"],
            ["Equipo de suministro de alimentación (e.s.a.)", "EN 54-4 (UNE 23007-4)"],
            ["Equipo de control e indicación (e.c.i.)", "EN 54-2 (UNE 23007-2)"],
            ["Detectores puntuales de calor / de humo / de llama", "UNE-EN 54-5 / 54-7 / 54-10"],
            ["Detectores de humo lineales / por aspiración", "UNE-EN 54-12 / 54-20"],
            ["Detectores con fuente de alimentación autónoma", "UNE-EN 14604"],
            ["Pulsadores de alarma", "EN 54-11"],
            ["Dispositivos acústicos / visuales", "UNE-EN 54-3 / 54-23"],
            ["Control de alarma por voz / altavoces", "UNE-EN 54-16 / 54-24"],
            ["Transmisión de alarmas y avisos de fallo", "EN 54-21"]
          ],
          nota: "Marcado CE del producto = serie EN 54; diseño e instalación = UNE 23007-14 (y -32 para la voz). La excepción son los detectores autónomos (UNE-EN 14604). El e.c.i. gestiona en todo caso la comunicación de la alarma, y en un sistema integrado la protección contra incendios tiene prioridad máxima."
        },
        {
          titulo: "Hidrantes: Kv mínimo (presión en bar, caudal en m³/h)",
          columnas: ["Salidas: número y DN", "Hidrante de columna", "Hidrante bajo tierra"],
          filas: [
            ["1 de 45", "33", "33"],
            ["2 de 45", "66", "66"],
            ["1 de 70", "80", "80"],
            ["2 de 70", "150", "150"],
            ["1 de 90/100", "180", "150"]
          ],
          nota: "Solo difieren en la salida de 90/100: 180 en columna y 150 bajo tierra. En el TXT la tabla sale desmontada (un valor por línea); los valores están contrastados con el BOE consolidado."
        },
        {
          titulo: "Hidrantes: cifras del epígrafe 3",
          columnas: ["Concepto", "Valor"],
          filas: [
            ["Normas de producto", "Columna UNE-EN 14384; bajo tierra UNE-EN 14339"],
            ["Hidrantes de columna admitidos", "Rango de par «2» y tipos «B» o «C»; con riesgo de heladas, solo «C» (mST 250 N·m)"],
            ["Hidrantes bajo tierra admitidos", "PFA de 1600 kPa (16 kg/cm²)"],
            ["Zona protegida: recorrido real, medido en horizontal", "Inferior a 100 m en zonas urbanas y a 40 m en el resto"],
            ["Salida de 100 mm", "Al menos un hidrante, a ser posible en la entrada, perpendicular a la fachada y de espaldas a ella"],
            ["Hidrante fuera de la vía pública", "Entre 5 y 15 m del límite exterior del edificio o zona, medido perpendicularmente a la fachada"],
            ["Caudal ininterrumpido mínimo por boca", "500 l/min"],
            ["Presión mínima en la boca de salida", "100 kPa (1 kg/cm²) en zonas urbanas si solo llenan camiones; 500 kPa (5 kg/cm²) en el resto"],
            ["Depósitos de hidrantes de llenado de camiones", "Autonomía de al menos 60 minutos, salvo legislación específica"],
            ["Llave de cuadradillo", "25 × 25 mm bajo tierra; 30 × 30 mm columna; cierra en el sentido de las agujas del reloj"],
            ["Tapas de hidrantes bajo tierra", "Preferentemente rojas (RAL 3001) o con la inscripción «incendios»"]
          ],
          nota: "Los apartados 4 (llenado de camiones), 5 (accionamiento) y 6 (hidrantes municipales) los añadió el RD 164/2025."
        },
        {
          titulo: "BIE: comparativa (epígrafe 5)",
          columnas: ["Concepto", "Manguera semirrígida", "Manguera plana", "Alta presión"],
          filas: [
            ["Conformidad del producto", "Marcado CE, UNE-EN 671-1", "Marcado CE, UNE-EN 671-2", "Evaluación técnica favorable (art. 5.3)"],
            ["Diámetro interior de la manguera", "25 mm", "45 mm", "No superior a 12 mm (mayor si la evaluación justifica la manejabilidad)"],
            ["Factor K mínimo", "42", "85", "—"],
            ["Longitud máxima de la manguera", "30 m", "20 m", "30 m"],
            ["Separación máxima entre BIE", "50 m", "50 m", "El doble del radio de acción"],
            ["Caudal mínimo", "85 l/min", "160 l/min", "—"],
            ["Presión mínima", "4 bar (400 kPa) a la entrada", "3,5 bar (350 kPa) a la entrada", "3.450 kPa (35 kg/cm²) dinámica en el orificio de salida"],
            ["Presión máxima a la entrada", "9 bar (900 kPa)", "9 bar (900 kPa)", "—"],
            ["Hipótesis de cálculo", "Las 2 hidráulicamente más desfavorables, 1 h", "Las 2 hidráulicamente más desfavorables, 1 h", "Las 2 más desfavorables simultáneas, 1 h"],
            ["Prueba de estanquidad", "Máx. de servicio y mínimo 980 kPa (10 kg/cm²), 2 h", "Máx. de servicio y mínimo 980 kPa (10 kg/cm²), 2 h", "1,5 × presión de trabajo máxima, 2 h"],
            ["Usuario previsto", "Personas no especializadas, intervención inmediata", "Caudal superior; requiere más formación", "—"]
          ],
          nota: "Comunes: boquilla, válvula y apertura del armario a 1,50 m como máximo; una BIE a 5 m como máximo de cada salida de sector; radio de acción = longitud de la manguera + 5 m; separación, distancia y radio por recorridos de evacuación; señal junto al armario, no sobre él. Presión y caudal medidos en el manómetro con el flujo completamente abierto y lanza en chorro compacto, y exigibles en todas las BIE del sistema."
        },
        {
          titulo: "Distancias y alturas de colocación",
          columnas: ["Equipo", "Distancia o recorrido", "Altura"],
          filas: [
            ["Pulsador de alarma", "Hasta 25 m desde cualquier origen de evacuación", "Parte superior entre 80 y 120 cm"],
            ["Extintor", "Recorrido horizontal hasta 15 m desde origen de evacuación", "Parte superior entre 80 y 120 cm"],
            ["BIE", "A 5 m como máximo de cada salida de sector; separación máxima 50 m", "Boquilla, válvula y apertura a 1,50 m como máximo"],
            ["Columna seca", "Recorrido hasta la columna menor de 60 m", "Centro de las bocas a 0,90 m"],
            ["Hidrante", "Menos de 100 m (urbano) o 40 m (resto); 5 a 15 m de la fachada si no está en vía pública", "—"]
          ],
          nota: "Zizur 2026 (P82) jugó con estas cifras: extintor a 5 m y BIE a 15 m de la salida eran falsas; la correcta era la de los hidrantes (100 m urbano, 40 m resto). Ojo también a no cruzar los 15 m del extintor con los 25 m del pulsador."
        },
        {
          titulo: "Columna seca: ascendente y descendente (epígrafe 6)",
          columnas: ["Concepto", "Ascendente", "Descendente"],
          filas: [
            ["Salidas", "En las plantas pares hasta la 8.ª y en todas a partir de ella", "En cada planta"],
            ["Válvula de seccionamiento", "Cada 4 plantas, por encima de la salida de planta", "En cada planta, con la llave justo por debajo de la salida"],
            ["Salidas de planta", "Conexión siamesa, llaves incorporadas y racores de 45 mm con tapa", "Conexión siamesa, llaves incorporadas y racores de 45 mm con tapa"]
          ],
          nota: "Comunes: toma en fachada o zona accesible a los bomberos, con conexión siamesa, racores de 70 mm, tapa y llave de purga de 25 mm y el texto «USO EXCLUSIVO SERVICIOS DE EXTINCIÓN DE INCENDIOS»; tubería de acero galvanizado DN80; salidas en recintos de escalera o vestíbulos previos; válvulas de bola con palanca; toma independiente por columna; emplazamiento señalizado para el camión de bombeo."
        },
        {
          titulo: "Pruebas de estanquidad y resistencia mecánica (antes de la puesta en servicio)",
          columnas: ["Sistema", "Presión de prueba", "Duración"],
          filas: [
            ["BIE semirrígida o plana", "Estática igual a la máxima de servicio y como mínimo 980 kPa (10 kg/cm²)", "2 h como mínimo"],
            ["BIE de alta presión", "1,5 veces la presión de trabajo máxima", "2 h como mínimo"],
            ["Columna seca de hasta 30 m", "Estática igual a la máxima de servicio y como mínimo 1.470 kPa (15 kg/cm²)", "2 h como mínimo"],
            ["Columna seca de más de 30 m", "Estática igual a la máxima de servicio y como mínimo 2.450 kPa (25 kg/cm²)", "2 h como mínimo"]
          ],
          nota: "En todas: sin fugas en ningún punto de la instalación."
        },
        {
          titulo: "Sistemas fijos de extinción: componentes y normas",
          columnas: ["Sistema (epígrafe)", "Componentes principales", "Normas"],
          filas: [
            ["Rociadores y agua pulverizada (7)", "Red de tuberías de alimentación, puesto de control, boquillas de descarga", "Componentes serie UNE-EN 12259; diseño UNE-EN 12845; diluvio UNE 23501 a 23507"],
            ["Agua nebulizada (8)", "Suministro de agua (botellas o depósito con bombeo), tuberías, boquillas", "UNE-CEN/TS 14972"],
            ["Espuma física (9)", "Red de tuberías, tanque de espumógeno, dosificador o proporcionador, boquillas", "Diseño UNE-EN 13565-2; componentes UNE-EN 13565-1; espumógenos UNE-EN 1568-1 a 1568-4"],
            ["Polvo (10)", "Recipiente de polvo, recipientes de gas propelente, tuberías, válvulas selectoras, accionamiento y control, boquillas", "Diseño UNE-EN 12416-2; componentes UNE-EN 12416-1; polvo UNE-EN 615"],
            ["Agentes gaseosos (11)", "Como mínimo: accionamiento, control, recipientes de gas a presión, tuberías, difusores", "UNE-EN 15004-1 con la serie 15004, o UNE ISO 6183, según el agente; componentes serie UNE-EN 12094"],
            ["Aerosoles condensados (12)", "Accionamiento, control, unidades de generadores de aerosol", "Diseño UNE-EN 15276-2; componentes con marca de conformidad UNE-EN 15276-1"],
            ["Cocinas comerciales (16)", "Basados en los sistemas 7 a 12 o en otras tecnologías (agentes químicos acuosos)", "Certificación previa a la instalación (art. 5.2) y diseño conforme a UNE-EN 17446"]
          ],
          nota: "Polvo y agentes gaseosos: solo si queda garantizada la seguridad o la evacuación del personal, con retardo y prealarma. En todos, los mecanismos de disparo y paro manuales se señalizan conforme a la sección 2.ª. El epígrafe 16 lo añadió el RD 164/2025."
        },
        {
          titulo: "Control de humos y de calor: estrategias (epígrafe 13)",
          columnas: ["Estrategia", "Ámbito típico", "Norma"],
          filas: [
            ["Flotabilidad de los gases calientes", "Edificios de techo alto", "Proyecto UNE 23585; instalación, puesta en marcha y mantenimiento UNE 23584"],
            ["Presurización diferencial", "Vías de evacuación, sobre todo escaleras comunes de edificios multiplanta", "UNE-EN 12101-6 y UNE 23584 en lo no previsto"],
            ["Ventilación horizontal", "Edificios de reducida esbeltez (túneles, aparcamientos)", "Normas o documentos reconocidos por el Ministerio hasta que haya UNE-EN"],
            ["Extracción de humos", "Aparcamientos o tras un sistema de supresión incompatible con los demás", "Diseño por renovaciones por hora u otros parámetros"]
          ],
          nota: "Marcado CE: barreras de humo UNE-EN 12101-1; aireadores naturales UNE-EN 12101-2; extractores mecánicos UNE-EN 12101-3; resto, serie UNE-EN 12101."
        },
        {
          titulo: "Clases de fuego (UNE-EN 2, epígrafe 4.5)",
          columnas: ["Clase", "Fuegos de"],
          filas: [
            ["A", "Materiales sólidos, generalmente orgánicos, con formación de brasas"],
            ["B", "Líquidos o sólidos licuables"],
            ["C", "Gases"],
            ["D", "Metales"],
            ["F", "Ingredientes para cocinar (aceites y grasas vegetales o animales) en aparatos de cocina"]
          ],
          nota: "No hay clase E en la lista del Reglamento."
        },
        {
          titulo: "Señalización luminiscente (sección 2.ª)",
          columnas: ["Elemento", "Regla"],
          filas: [
            ["Señales de medios manuales y de alerta y alarma", "UNE 23033-1; las no definidas, con criterios de UNE 23033-1, UNE 23032 y UNE-EN ISO 7010"],
            ["Planos de evacuación («usted está aquí»)", "UNE 23032; visibles aun con fallo del alumbrado normal"],
            ["Fotoluminiscentes", "UNE 23035-4, categorías A o B; número de lote visible; informe de laboratorio acreditado (RD 2200/1995)"],
            ["Categoría A obligatoria", "Centros con actividades del anexo I de la Norma Básica de Autoprotección (RD 393/2007)"],
            ["Alimentadas eléctricamente", "Funcionamiento análogo al alumbrado de emergencia y diseño según el apartado 2"],
            ["Símbolos de identificación", "En los márgenes, sin invadir el pictograma, máximo 3 % de la superficie"],
            ["Posición de la señal", "Extintor en armario y BIE: junto al armario, no sobre él; columna seca: junto al armario o en su puerta"]
          ],
          nota: "La regla del 3 % y la nueva redacción de los apartados 2 y 4 proceden del RD 164/2025."
        }
      ],
      datos: [
        "Art. 1.1: objeto, diseño, instalación/aplicación, mantenimiento e inspección de los equipos, sistemas y componentes de protección ACTIVA.",
        "Art. 2: sujetas al Reglamento las empresas instaladoras y las mantenedoras; las exigencias técnicas alcanzan también a fabricantes, importadores, distribuidores y organismos de certificación o evaluación técnica.",
        "Art. 3.f: la empresa instaladora ubica o instala equipos y sistemas, y coloca señales, balizamientos y planos de evacuación de la señalización luminiscente; la mantenedora (3.g) hace el mantenimiento.",
        "Art. 3.e: los organismos de evaluación técnica cumplen 4 criterios; sus procedimientos los valida expresamente la Comunidad Autónoma donde presentan la declaración responsable.",
        "Extintor portátil: masa igual o inferior a 20 kg en condiciones de funcionamiento; móvil: sobre ruedas y más de 20 kg.",
        "Extintores: equipos a presión del RD 709/2015; portátiles certificados antes de fabricarse o importarse conforme a UNE-EN 3-7 y UNE-EN 3-10; móviles conforme a UNE-EN 1866-1.",
        "Generadores de aerosoles como extintores: RD 1381/2009 (modificado por RD 473/2014) y evaluación técnica favorable (art. 5.3); mismo mantenimiento y personal que un extintor portátil.",
        "Abastecimiento de agua contra incendios: fuentes de agua, equipos de impulsión y red general; norma UNE 23500.",
        "Racores de hidrantes, BIE y columna seca: UNE 23400; mangueras de hidrantes: UNE 23091 (aprobación previa, art. 5.2).",
        "Hidrantes municipales en vía pública: producto y diseño según el Reglamento; puesta en servicio, mantenimiento e inspección los fija el municipio.",
        "Toma adicional de 45 mm de la BIE semirrígida: con válvula, racor y tapón, para los servicios profesionales de extinción.",
        "Columna seca: en las tomas se identifican las plantas o zonas servidas y la presión máxima de servicio (en la señal o dentro del armario).",
        "Mantas ignífugas: aprobadas conforme a UNE-EN 1869; envasadas hasta su uso; caducidad indicada de 20 años como máximo.",
        "Alumbrado de emergencia: REBT (RD 842/2002) e ITC-BT-28; ilumina locales y accesos hasta las salidas y permite identificar los medios de protección.",
        "Cocinas comerciales: instalación y mantenimiento por empresas habilitadas para el sistema fijo en que se basen; mantenimiento según las tablas del anexo II para sistemas fijos.",
        "Componentes de detección (EN 54), rociadores (UNE-EN 12259), gases (UNE-EN 12094) y humos (UNE-EN 12101): marcado CE cuando entre en vigor; hasta entonces, certificado o marca de conformidad (art. 5.2)."
      ],
      excepciones: [
        "Túneles de carreteras del Estado: excluidos incluso de la aplicación supletoria; se rigen por el RD 635/2006 (art. 1.2).",
        "Detectores con alimentación autónoma: UNE-EN 14604, no la serie EN 54.",
        "Tuberías de sistemas abastecidos con agua (como las BIE): UNE 23500, salvo que el epígrafe del sistema fije requisitos propios (rociadores).",
        "Sistemas de extinción con evaluación técnica favorable: su abastecimiento de agua se considera conforme.",
        "Zona protegida por hidrantes: condiciones del apartado 3, salvo que otra legislación aplicable imponga requisitos diferentes.",
        "Con riesgo de heladas solo se admiten hidrantes de columna de tipo «C».",
        "Hidrantes solo de llenado de camiones: pueden ir a la red pública sin depósitos ni bombeo si esta da presión y caudal; con depósitos, 60 minutos salvo legislación específica.",
        "Nivel freático por encima de la válvula de drenaje: se tapona antes de instalar; con peligro de heladas, se vacía la columna por otros medios tras cada uso y se identifica el hidrante.",
        "Una BIE a 5 m de cada salida de sector, salvo que otra BIE en otra salida cubra toda la superficie o la legislación específica disponga otra cosa.",
        "Red de BIE: las dos hidráulicamente más desfavorables, salvo que solo haya una BIE.",
        "BIE de alta presión: manguera de hasta 12 mm, salvo que la evaluación técnica justifique su manejabilidad con diámetros mayores.",
        "Polvo y agentes gaseosos: solo utilizables si queda garantizada la seguridad o la evacuación del personal, con retardo y prealarma.",
        "Cocinas comerciales con componentes sin requisitos específicos: su evaluación va dentro de la certificación del sistema completo.",
        "Señales no luminiscentes: admitidas si no se perjudica la visibilidad y en el exterior y vías públicas; dentro de edificios, iluminadas exteriormente y visibles aun con fallo del alumbrado normal.",
        "Fuera del alcance de este tema: el apéndice del anexo I (lista de normas UNE), los demás capítulos del Reglamento, los anexos II y III y el régimen transitorio del RD 164/2025."
      ]
    }
  };
