// Resumen del tema E7. Formato: cabecera de src/data/resumenes.js.
// 01-11-2026, chequeo: añadida la memorización (tablas, datos y excepciones) a partir del TXT; vigente el
// DA DB-SUA/2 de 29-06-2018 (sin versión posterior en codigotecnico.org a 21-05-2026).
export default {
    intro:
      "El DA DB-SUA/2 establece criterios de flexibilidad para adecuar edificios y establecimientos existentes a las condiciones básicas de accesibilidad. Su núcleo son las tablas de condiciones básicas (Tabla 1) y tolerancias admisibles (Tabla 2), junto con anejos específicos sobre plataformas, ascensores y servicios higiénicos. Es fundamental dominar la fecha límite de edificio existente, la jerarquía de soluciones y las reducciones permitidas en otros DB cuando se instala ascensor.",
    bloques: [
      {
        h: "Objeto y ámbito de aplicación",
        nota:
          "Trampa clásica: confundir edificio existente con cualquier edificio antiguo. La fecha límite es la solicitud de licencia de obras anterior al 12 de septiembre de 2010, conforme a la Disposición transitoria tercera del RD 173/2010. Si la licencia es posterior, debió cumplir plenamente la normativa vigente. El proyectista puede justificar la no viabilidad técnica, económica o urbanística, o la incompatibilidad con el grado de protección, aplicando entonces otras medidas que faciliten el acceso en el mayor grado posible. Recuerda que el punto 3 del artículo 2 del CTE Parte I es la base legal de esta flexibilidad.",
        items: [
          "Edificio existente: solicitud de licencia de obras anterior al 12 de septiembre de 2010.",
          "Edificios con licencia posterior a dicha fecha: cumplimiento pleno de las condiciones de accesibilidad vigentes.",
          "Si no es viable alcanzar la Tabla 2 o es incompatible con la protección del edificio: medidas alternativas bajo criterio y responsabilidad del proyectista (punto 3 art 2 CTE Parte I).",
          "Otras soluciones admitidas: gestión y productos de apoyo, según coste, mantenimiento y autonomía personal.",
        ],
      },
      {
        h: "Condiciones básicas y tolerancias admisibles",
        nota:
          "Error frecuente: pensar que todas las condiciones del DB SUA admiten tolerancia. Solo las recogidas en la Tabla 2 del apartado 3 tienen flexibilidad; para el resto de condiciones de la Tabla 1 no se admiten tolerancias. La Tabla 1 recoge artículos clave del DB SUA y DB SI, mientras que la Tabla 2 establece valores límite concretos para usuarios de silla de ruedas. Presta especial atención a las pendientes de rampa, las fuerzas de apertura de puertas y los valores de alumbrado, que son datos numéricos muy preguntados.",
        items: [
          "Tabla 1: condiciones básicas de accesibilidad del DB SUA y DB SI. Tabla 2: tolerancias admisibles solo para lo que en ella se incluye.",
          "Desniveles ≤55 cm: diferenciación visual y táctil desde 25 cm del borde (SUA 1-3.1).",
          "Rampa accesible: pendiente 10% (<3 m), 8% (<6 m), 6% (resto); transversal 2% máx (SUA 1-4.3.1).",
          "Tolerancia rampas: 12% (hasta 3 m), 10% (hasta 10 m), 8% (hasta 15 m), 6% sin límite de longitud (Tabla 2 SUA 1-4.3.1).",
          "Tramos rampa: longitud ≤9 m; anchura mínima 1,20 m; meseta inicio/final 1,20 m (SUA 1-4.3.2). Tolerancia anchura: 0,90 m (Tabla 2).",
          "Mesetas rampa misma dirección: longitud eje ≥1,50 m (tolerancia 1,20 m). Cambio dirección: profundidad ≥1,20 m (Tabla 2).",
          "Pasamanos rampa ≥6% y desnivel >18,5 cm: continuo ambos lados, zócalo ≥10 cm, altura 90-110 cm y otro a 65-75 cm (SUA 1-4.3.4).",
          "Fuerza apertura puertas en itinerario accesible: 25 N general, 65 N si son resistentes al fuego (SUA 3 y SI 3-6).",
          "Alumbrado: 20 lux exteriores, 100 lux interiores, 50 lux aparcamientos interiores; uniformidad media 40% mín (SUA 4-1).",
          "Sistema alarma: señales visuales y acústicas, perceptibles en viviendas accesibles para discapacidad auditiva (SI 4-tabla 1.1).",
          "Señalización evacuación: UNE 23034:1988; itinerarios accesibles con SIA y rótulo «ZONA DE REFUGIO» cuando conduzcan a refugio (SI 3-7).",
        ],
      },
      {
        h: "Anejo A: Jerarquía de soluciones en accesos y desniveles",
        nota:
          "Pregunta típica: ordenar las soluciones por preferencia. El orden del apartado A.1 es: primero trasladar el acceso al punto de menor desnivel; si no, rampa según DB SUA o Tabla 2; si no es posible, plataforma vertical; solo en circunstancias excepcionales, plataforma inclinada. Es clave distinguir que dispositivos NO son adecuación efectiva: orugas motorizadas, sillas salvaescaleras (no autónomos), rampas móviles y tapices móviles. Las sillas de evacuación manuales solo valen para emergencia con personal instruido.",
        items: [
          "Solución preferente: trasladar el acceso donde el desnivel con la vía pública sea menor.",
          "Segunda opción: rampa según DB SUA o, al menos, según parámetros de la Tabla 2 del apartado 3.",
          "Tercera opción: plataforma elevadora vertical (apartado A.2).",
          "Cuarta opción (excepcional): plataforma elevadora inclinada o salvaescaleras (apartado A.3), siempre que no entre en conflicto con evacuación y uso de la escalera.",
          "Siempre deben disponerse escaleras como recorrido alternativo al sistema mecánico.",
          "Orugas motorizadas y sillas salvaescaleras: NO permiten uso autónomo → NO son adecuación efectiva.",
          "Rampas móviles y tapices móviles: NO son soluciones de accesibilidad ni forman parte de itinerarios accesibles.",
          "Sillas de evacuación manuales: solo para emergencia con personal instruido en su manejo.",
        ],
      },
      {
        h: "Anejo A: Plataformas elevadoras verticales e inclinadas",
        nota:
          "Distingue bien entre plataforma vertical y ascensor accesible: una plataforma vertical cumple EN 81-41 y Directiva 2006/42/CE, pero NO es ascensor accesible porque no cumple UNE EN 81-70. Las plataformas inclinadas (salvaescaleras) se rigen por UNE EN 81-40. Ambas requieren un itinerario accesible hasta ellas (Tabla 2) y espacio de giro deseable de 1,50 m (mínimo 1,20 m). Las inclinadas necesitan controles con llave para evitar uso no autorizado y nunca se usan para evacuación. Ojo a las dimensiones y cargas mínimas de las tablas A.1 y A.2, y a la condición de los 60 cm libres en escalera.",
        items: [
          "Plataformas verticales: Directiva 2006/42/CE y norma EN 81-41. NO son ascensores accesibles (no cumplen UNE EN 81-70).",
          "Tabla A.1 plataformas verticales: puertas adyacentes 125x125 cm o 110x140 cm, carga 250 kg/m² y 385 kg; una puerta/enfrentadas 80x125 cm (vivienda sin accesible o <1000 m²) o 90x140 cm (resto), cargas 250/250 kg o 250/315 kg.",
          "Plataformas verticales menores a las dimensiones mínimas: solo para personas con movilidad reducida (no silla de ruedas), con prohibición expresa señalizada.",
          "Plataformas inclinadas: norma UNE EN 81-40. Una única persona. Controles con llave para evitar uso no autorizado.",
          "Tabla A.2 plataformas inclinadas: 70x90 cm (vivienda sin accesible o <1000 m², carga 250/225 kg); 75x100 cm (resto, carga 250/250 kg).",
          "Plataforma inclinada desplegada: debe dejar 60 cm libres en escalera; si no, admitido ocupar todo el ancho si ≤8 viviendas, existe recorrido alternativo señalizado o tramo ≤8 peldaños.",
          "Plataformas inclinadas: NO se utilizan para evacuación del edificio.",
          "Ambas requieren itinerario accesible hasta ellas, señalización direccional e instrucciones de uso con pictogramas. La vertical, además, dispositivo de llamada para recibir asistencia; la inclinada, controles que impidan el uso no autorizado (llave) y uso por personas instruidas o con supervisión.",
        ],
      },
      {
        h: "Anejo B: Ascensores en vivienda colectiva",
        nota:
          "Este anejo regula la incorporación de ascensores cuando no se pueden aplicar las exigencias del DB SUA por inviabilidad técnica, económica o protección. Es fundamental memorizar las dimensiones mínimas de cabina de las tablas B.1 y B.2, y la anchura de puerta de 80 cm. Respecto a las intervenciones, recuerda que las que afectan a elementos privativos requieren acuerdo de la comunidad o el «supuesto de expropiación» (el DA remite al artículo 9.5.g del RDL 7/2015). Las intervenciones en patio que afecten a condiciones urbanísticas, y las de fachada que afecten al dominio público o a condiciones urbanísticas, quedan sujetas a autorización administrativa del órgano competente (para la fachada, el DA remite al art. 24.4 del RDL 7/2015).",
        items: [
          "Tabla B.1: puertas adyacentes 125x125 cm o 120x140 cm; puertas enfrentadas 90x120 cm.",
          "Tabla B.2 (UNE EN 81-70): 100x125 cm / 450 kg (silla A sin acompañante); 110x140 cm / 630 kg (silla A o B con acompañante).",
          "Anchura de paso mínima de puerta de ascensor: 80 cm (UNE EN 81-70 y UNE EN 81-82).",
          "Tipos de intervención, ordenados de menos a más dificultades jurídicas: zonas comunes interiores (huecos de escalera, mesetas), patios interiores, fachada (parcela o dominio público) y zonas privativas.",
          "Afección a elementos privativos: requiere acuerdo en comunidad de propietarios o «supuesto de expropiación» (art 9.5.g RDL 7/2015).",
          "Ocupación de dominio público o afección a condiciones urbanísticas: autorización administrativa (art 24.4 RDL 7/2015).",
        ],
      },
      {
        h: "Anejo B: Incidencia en otros Documentos Básicos",
        nota:
          "Una de las partes más técnicas y preguntadas. Al instalar un ascensor se pueden reducir otras condiciones del CTE si se acredita no viabilidad técnica y económica. En DB SI, la reducción de anchura de escaleras de evacuación es crítica: 0,80 m como mínimo absoluto, pero con fórmulas diferentes según evacuación descendente (P/160) o ascendente (P/(160-10h)). En DB SUA, una escalera de hasta 8 viviendas y 14 m de altura de evacuación puede reducirse a parámetros de uso restringido, manteniendo la huella en 25 cm. En DB HS, no se puede reducir la superficie de ventanas/puertas exteriores por debajo del mínimo del sistema complementario. En DB HR, los índices de reducción acústica dependen de si la maquinaria está dentro o fuera del recinto.",
        items: [
          "DB SI: reducción anchura escaleras evacuación hasta 0,80 m y no menos de P/160 (descendente) o P/(160-10h) (ascendente).",
          "DB SI: pasillos o rampas reducidos no inferiores a 0,90 m, siempre que se cumpla anchura de cálculo de evacuación (SI-3).",
          "DB SUA: escaleras de ≤8 viviendas y altura de evacuación ≤14 m pueden reducirse a parámetros de uso restringido, excepto huella ≥25 cm.",
          "DB HS: si se reduce patio por debajo del mínimo DB HS3 3.2.1, adoptar medidas compensatorias (cerramientos permeables, ventilación mecánica, no usar patio como entrada de aire...).",
          "DB HS: no reducir superficie total practicable de ventanas o puertas exteriores por debajo del mínimo del sistema complementario (DB HS3 4.4).",
          "DB HR: ascensor colindante con unidades de uso sin cuarto de máquinas (maquinaria dentro del recinto) → RA >60 dBA; en otro caso → RA >50 dBA. Son recomendaciones («deberían»): el DB HR no se aplica porque no es rehabilitación integral.",
          "DB SE: el ascensor no debe suponer un aumento de carga incompatible con la resistencia actual de la estructura. DB SI: las obras exteriores nunca deben reducir las condiciones de acceso de bomberos.",
        ],
      },
      {
        h: "Anejo C: Servicios higiénicos accesibles",
        nota:
          "Este anejo ofrece flexibilidad cuando no se pueden cumplir las exigencias del DB SUA. La exención para uso exclusivo de trabajadores es una trampa clásica: se requieren tres condiciones simultáneas (superficie ≤100 m², trabajadores ≤10 y aseo exclusivo). Para locales reducidos (≤100 m² de uso público y ≤50 personas) se admiten soluciones compartidas o aseos a ~50 m. La transferencia unilateral se compensa con dos aseos (uno por cada lado) más rótulo. El espacio de maniobra puede reducirse a 1,20 m y aprovecharse el hueco bajo el lavabo hasta 20 cm si no tiene pedestal.",
        items: [
          "Uso privado exclusivo de trabajadores: exento de aseo accesible si superficie útil ≤100 m², trabajadores ≤10 (ocupación según tabla 2.1 DB SI3) y aseo exclusivo trabajadores.",
          "Local reducido: ≤100 m² de uso público y ≤50 personas. Admiten aseos compartidos, unisex o aseos comunes a ~50 m.",
          "Dos aseos accesibles con transferencia unilateral (uno derecha y otro izquierda) cumplen la exigencia de transferencia bilateral si se informa con rótulo.",
          "Espacio de maniobra: 1,50 m deseable; 1,20 m admitido. Se puede aprovechar hueco bajo lavabo hasta 20 cm si no tiene pedestal.",
          "En público sin espacio suficiente: admitida transferencia a un solo lado.",
          "Si no es viable cabina para silla de ruedas: al menos barra vertical de sujeción y apoyo junto al inodoro.",
        ],
      },
    ],
    claves: [
      "Edificio existente = licencia de obras anterior al 12 de septiembre de 2010.",
      "Tabla 1 condiciones básicas; Tabla 2 tolerancias. Solo lo incluido en Tabla 2 admite flexibilidad.",
      "Rampa accesible: 10%·3m / 8%·6m / 6% resto. Tolerancia: 12%·3m / 10%·10m / 8%·15m / 6% ilimitado.",
      "Fuerza puerta accesible: 25 N general · 65 N resistente al fuego.",
      "Pasamanos doble en rampa ≥6% y >18,5 cm: 90-110 cm y 65-75 cm.",
      "Plataforma vertical NO es ascensor accesible; cumple EN 81-41 pero no UNE EN 81-70.",
      "Orugas motorizadas, sillas salvaescaleras, rampas móviles y tapices móviles NO son adecuación efectiva.",
      "Cabina ascensor accesible: 125x125 cm o 120x140 cm (adyacentes); 90x120 cm (enfrentadas). Puerta ≥80 cm.",
      "Reducción escalera evacuación por ascensor: 0,80 m y P/160 (descendente) o P/(160-10h) (ascendente).",
      "Escalera ≤8 viviendas y ≤14 m altura evacuación: parámetros uso restringido excepto huella ≥25 cm.",
      "Aseo trabajadores exento si ≤100 m², ≤10 trabajadores y uso exclusivo (tres requisitos simultáneos).",
      "Local reducido: ≤100 m² de uso público y ≤50 personas; aseos comunes admitidos a ~50 m.",
      "Plataforma inclinada: 60 cm libres en escalera desplegada (o ≤8 viviendas, recorrido alternativo o ≤8 peldaños).",
      "DB HR ascensor colindante: sin cuarto máquinas RA>60 dBA; con cuarto máquinas RA>50 dBA.",
      "Intervenciones en privativo: acuerdo comunidad o supuesto de expropiación (art 9.5.g RDL 7/2015).",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Rampas de itinerarios accesibles: DB SUA frente a tolerancia del DA (tabla 2)",
          columnas: ["Parámetro", "DB SUA (tabla 1 del DA)", "Tolerancia admisible (tabla 2)"],
          filas: [
            ["Pendiente longitudinal", "10 % si L < 3 m; 8 % si L < 6 m; 6 % en el resto", "12 % hasta 3 m; 10 % hasta 10 m; 8 % hasta 15 m; 6 % sin límite de longitud"],
            ["Pendiente transversal", "2 % como máximo", "Sin tolerancia"],
            ["Longitud del tramo", "9 m como máximo", "Sin tolerancia"],
            ["Anchura del tramo", "1,20 m como mínimo; tramos rectos o radio ≥ 30 m", "0,90 m en tramos rectos y entre pasamanos"],
            ["Meseta intermedia (misma dirección)", "Anchura de la rampa y longitud ≥ 1,50 m en su eje", "Al menos 1,20 m"],
            ["Meseta de cambio de dirección", "La anchura de la rampa no se reduce", "Al menos 1,20 m de profundidad"],
            ["Espacio horizontal ante puerta", "Sin puertas ni pasillos de < 1,20 m a menos de 1,50 m", "Rampas sin espacio horizontal en las soluciones admitidas en obra nueva; excepcionalmente puertas manuales con timbre accesible en el arranque"],
            ["Pasamanos (rampa ≥ 6 % y desnivel > 18,5 cm)", "Continuo a ambos lados; 90-110 cm y otro a 65-75 cm; prolongación 30 cm si el tramo > 3 m", "Si la prolongación interfiere con la circulación, puede arrancar al inicio de la rampa"]
          ],
          nota: "Las rampas de más del 12 % remiten a los casos de no viabilidad del DB SUA (nota 2 de la tabla 2). Una rampa es tal cuando la pendiente supera el 4 %."
        },
        {
          titulo: "Otras tolerancias admisibles de la tabla 2",
          columnas: ["Condición (artículo DB)", "Tolerancia"],
          filas: [
            ["Discontinuidades (SUA 1-2)", "En accesos, desniveles de hasta 5 cm salvados con pendiente ≤ 25 %"],
            ["Contrahuellas (SUA 1-4.2.2)", "Uso público: variaciones de ± 1 cm o medidas compensatorias; uso privado: se admiten las existentes"],
            ["Pasamanos de escalera (SUA 1-4.2.4)", "Si la prolongación interfiere con la circulación, arranca con el peldaño"],
            ["Impacto con elementos fijos (SUA 2-1.1)", "Si el elemento es estructural, se admite lo existente con medidas compensatorias"],
            ["Itinerario accesible (SUA 9-1.1.1)", "Puede comunicar con una entrada que no sea la principal"],
            ["Alojamientos accesibles (SUA 9-1.2.2)", "No exigibles en Residencial Público existente con menos de 10 alojamientos"],
            ["Aseo accesible en uso privado (SUA 9-1.2.6)", "No exigible si ≤ 100 m² útiles, ≤ 10 trabajadores y aseo de uso exclusivo de trabajadores"],
            ["Mobiliario fijo (SUA 9-1.2.7)", "Sin punto de atención accesible en barras de < 3 m si hay mesas en zonas accesibles"],
            ["Espacio de giro (Anejo A SUA)", "1,20 m de diámetro libre de obstáculos (en cocinas de alojamiento accesible, 1,50 m)"],
            ["Anchura de paso (Anejo A SUA)", "90 cm en uso privado y establecimientos < 100 m² útiles; 1,10 m en el resto de uso público"],
            ["Estrechamientos puntuales", "Menos de 1 m, pero no inferior a 0,80 m"],
            ["Puertas", "Distancia del mecanismo de apertura al rincón solo en el lado hacia el que abre"],
            ["Evacuación de personas con discapacidad (SI 3-9)", "En Residencial Vivienda no hace falta sector alternativo ni zona de refugio"]
          ],
          nota: "Lo que está en la tabla 1 y no figura en la tabla 2 no admite tolerancia."
        },
        {
          titulo: "Accesos y pequeños desniveles: orden de soluciones (anejo A.1)",
          columnas: ["Orden", "Solución", "Condición"],
          filas: [
            ["1.º (preferente)", "Trasladar el acceso donde el desnivel con la vía pública sea menor (o modificar la cota de desembarco del ascensor)", "—"],
            ["2.º", "Itinerario accesible con rampa según el DB SUA o, al menos, según la tabla 2", "Cuando la solución a nivel no sea posible"],
            ["3.º (1.ª alternativa)", "Plataforma elevadora vertical (A.2)", "Si no son posibles las soluciones fijas y se justifica su no viabilidad"],
            ["4.º (2.ª alternativa)", "Plataforma elevadora inclinada o salvaescaleras (A.3)", "Circunstancias excepcionales; sin conflicto con la evacuación y el uso de la escalera"],
            ["No son adecuación efectiva", "Orugas motorizadas y sillas salvaescaleras (no autónomas); rampas y tapices móviles (no forman parte de itinerarios accesibles)", "Orugas y sillas: solo casos muy particulares, con conformidad del usuario y personal instruido"]
          ],
          nota: "Siempre se mantienen escaleras como recorrido alternativo al mecánico. Las plataformas sirven para desniveles no mayores de una planta y sin tráfico intenso. Si no cabe en la parcela, puede ir en la vía pública (art. 24.4 RDL 7/2015)."
        },
        {
          titulo: "Plataformas elevadoras: dimensiones y cargas (tablas A.1 y A.2)",
          columnas: ["Tipo", "Dimensiones mínimas (anchura × profundidad)", "Carga mínima de cálculo", "Usuario"],
          filas: [
            ["Vertical, puertas adyacentes", "125 × 125 cm o 110 × 140 cm", "250 kg/m² y al menos 385 kg", "Silla A o B con acompañante"],
            ["Vertical, una puerta o dos enfrentadas (nota 2)", "80 × 125 cm", "250 kg/m² y al menos 250 kg", "Silla A sin acompañante"],
            ["Vertical, una puerta o dos enfrentadas (nota 3)", "90 × 140 cm", "250 kg/m² y al menos 315 kg", "Silla A o B con acompañante"],
            ["Inclinada (nota 1)", "70 × 90 cm", "250 kg/m² y al menos 225 kg", "Silla A"],
            ["Inclinada (nota 2)", "75 × 100 cm", "250 kg/m² y al menos 250 kg", "Silla A o B"]
          ],
          nota: "La medida menor (80 × 125 vertical, 70 × 90 inclinada) es para Residencial Vivienda sin viviendas accesibles o para otros usos con superficie útil inferior a 1.000 m²; la mayor, para el resto. Vertical: EN 81-41 y Directiva 2006/42/CE (no es «ascensor accesible», que exige UNE EN 81-70). Inclinada: UNE EN 81-40."
        },
        {
          titulo: "Ascensores en edificios existentes (anejo B)",
          columnas: ["Puertas / referencia", "Dimensiones mínimas de cabina", "Carga / usuario"],
          filas: [
            ["Tabla B.1, puertas adyacentes", "125 × 125 cm o 120 × 140 cm", "Usuarios de silla de ruedas"],
            ["Tabla B.1, una puerta o dos enfrentadas", "90 × 120 cm", "Usuarios de silla de ruedas"],
            ["Tabla B.2 (UNE EN 81-70), entrada única u opuestas", "100 × 125 cm", "450 kg; silla A sin acompañante"],
            ["Tabla B.2 (UNE EN 81-70), entrada única u opuestas", "110 × 140 cm", "630 kg; silla A o B con acompañante"],
            ["Puerta del ascensor (UNE-EN 81-70 y 81-82)", "Anchura de paso mínima 80 cm", "Usuarios de silla de ruedas"]
          ],
          nota: "Si no caben, pueden diseñarse cabinas menores, útiles para otras personas con movilidad reducida pero no para silla de ruedas."
        },
        {
          titulo: "Reducciones admitidas al instalar un ascensor (B.4)",
          columnas: ["DB", "Qué se admite o exige"],
          filas: [
            ["DB SE", "Que el ascensor no suponga un aumento de carga incompatible con la resistencia actual de la estructura"],
            ["DB SI: escaleras", "Hasta 0,80 m y no menos de P/160 (evacuación descendente) o P/(160-10h) (ascendente), con medidas compensatorias"],
            ["DB SI: pasillos o rampas", "No menos de 0,90 m, si se cumple la anchura de cálculo de evacuación"],
            ["DB SI: exterior", "Nunca reducir las condiciones de acceso de bomberos"],
            ["DB SUA", "Escalera de ≤ 8 viviendas y altura de evacuación ≤ 14 m: parámetros de uso restringido, salvo huella ≥ 25 cm"],
            ["DB HS", "Patio por debajo del mínimo del HS3: medidas compensatorias; no reducir la superficie practicable de ventanas bajo el mínimo del apartado 4.4"],
            ["DB HR", "Sin cuarto de máquinas (maquinaria en el recinto): RA > 60 dBA; en otro caso: RA > 50 dBA (recomendación)"]
          ],
          nota: "Todas exigen acreditar la no viabilidad técnica y económica de otras alternativas y aportar las medidas necesarias."
        },
        {
          titulo: "Servicios higiénicos accesibles (anejo C)",
          columnas: ["Supuesto", "Criterio"],
          filas: [
            ["Aseos de trabajadores (C.1)", "No exigible que sean accesibles si la zona de uso exclusivo de trabajadores ≤ 100 m² útiles y ≤ 10 trabajadores"],
            ["Local de reducidas dimensiones (C.1)", "Superficie de uso público ≤ 100 m² y ocupación de público ≤ 50 personas"],
            ["Aseos cercanos (C.1)", "En centros comerciales o en la vía pública, si el recorrido es del orden de 50 m"],
            ["Transferencia (C.2)", "Dos aseos contiguos, uno con transferencia por la derecha y otro por la izquierda, con rótulo junto al acceso"],
            ["Espacio de maniobra (C.2)", "1,20 m si no cabe el de 1,50 m; bajo el lavabo sin pedestal se aprovechan hasta 20 cm"],
            ["No viable una cabina accesible (C.2)", "Al menos una barra vertical de sujeción y apoyo junto al inodoro"]
          ],
          nota: "Los aseos de trabajadores cumplen lo del uso privado; los de público, lo del uso público."
        }
      ],
      datos: [
        "Edificio existente: solicitud de licencia de obras anterior al 12-09-2010 (DT 3.ª del RD 173/2010).",
        "Base de la flexibilidad: art. 2.3 de la Parte I del CTE; las medidas alternativas se aplican «bajo el criterio y responsabilidad del proyectista».",
        "Desniveles de hasta 55 cm en zonas de uso público: diferenciación visual y táctil desde 25 cm del borde (SUA 1-3.1).",
        "Contrahuella entre tramos de plantas diferentes: no varía más de 1 cm (SUA 1-4.2.2).",
        "Pasamanos de rampa: separado al menos 4 cm del paramento; zócalo de los bordes libres de 10 cm como mínimo.",
        "Fuerza de apertura de puertas en itinerario accesible: 25 N en general y 65 N si son resistentes al fuego (SUA 3 y SI 3-6).",
        "Alumbrado: 20 lux exterior, 100 lux interior, 50 lux en aparcamientos interiores; uniformidad media ≥ 40 % (SUA 4-1).",
        "Espacio de giro ante plataformas y ascensores: deseable 1,50 m; por debajo de 1,20 m no garantiza el uso autónomo.",
        "Salvaescaleras desplegado: dejar al menos 60 cm libres de escalera; si no es viable, ocupar todo el ancho si hay ≤ 8 viviendas, recorrido alternativo señalizado o tramo de ≤ 8 peldaños.",
        "Puerta de ascensor: 80 cm de anchura de paso mínima.",
        "Señalización de evacuación: UNE 23034:1988; itinerarios accesibles con el SIA y, si llevan a zona de refugio, rótulo «ZONA DE REFUGIO» (SI 3-7).",
        "Alarma: señales visuales además de acústicas, perceptibles en viviendas accesibles para discapacidad auditiva (SI 4, tabla 1.1, nota 6)."
      ],
      excepciones: [
        "Las condiciones de la tabla 1 que no están en la tabla 2 no admiten tolerancia.",
        "Si ni siquiera la tabla 2 es viable (urbanística, técnica o económicamente) o es incompatible con la intervención o la protección, el proyectista puede aplicar otras medidas que faciliten el acceso en el mayor grado posible.",
        "Las sillas de evacuación manuales solo valen para emergencias si el protocolo prevé su uso por personal instruido.",
        "Las orugas y sillas salvaescaleras pueden usarse en casos muy particulares, con la conformidad previa del usuario y personal instruido, aunque no son adecuación efectiva.",
        "La plataforma vertical menor que la de la tabla A.1 no sirve para silla de ruedas: hay que señalizar la prohibición expresa de su uso.",
        "La plataforma inclinada nunca se usa para la evacuación del edificio y, plegada, no reduce la anchura mínima ni la de cálculo de evacuación.",
        "Se puede reducir la escalera para lograr la mayor cabina posible aunque no se alcancen las medidas para silla de ruedas del apartado B.2.",
        "El DB HR no es de aplicación al instalar el ascensor (no es rehabilitación integral): sus valores son recomendaciones.",
        "En establecimientos y edificios públicos sin espacio suficiente se admite la transferencia por un solo lado."
      ]
    }
  };
