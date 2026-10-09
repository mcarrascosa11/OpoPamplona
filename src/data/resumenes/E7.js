// Resumen del tema E7. Formato: cabecera de src/data/resumenes.js.
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
          "Tolerancia rampas: 12% (<3 m), 10% (<10 m), 8% (<15 m), 6% sin límite (Tabla 2 SUA 1-4.3.1).",
          "Tramos rampa: longitud ≤9 m; anchura mínima 1,20 m; meseta inicio/final 1,20 m (SUA 1-4.3.2). Tolerancia anchura: 0,90 m (Tabla 2).",
          "Mesetas rampa misma dirección: longitud eje ≥1,50 m (tolerancia 1,20 m). Cambio dirección: profundidad ≥1,20 m (Tabla 2).",
          "Pasamanos rampa ≥6% y desnivel >18,5 cm: continuo ambos lados, zócalo ≥10 cm, altura 90-110 cm y otro a 65-75 cm (SUA 1-4.3.4).",
          "Fuerza apertura puertas en itinerario accesible: 25 N general, 65 N si son resistentes al fuego (SUA 3 y SI 3-6).",
          "Alumbrado: 20 lux exteriores, 100 lux interiores, 50 lux aparcamientos interiores; uniformidad media 40% mín (SUA 4-1).",
          "Sistema alarma: señales visuales y acústicas, perceptibles en viviendas accesibles para discapacidad auditiva (SI 4-tabla 1.1).",
          "Señalización evacuación: UNE 23034:1988; itinerarios accesibles con SIA y rótulo \"ZONA DE REFUGIO\" cuando conduzcan a refugio (SI 3-7).",
        ],
      },
      {
        h: "Anejo A: Jerarquía de soluciones en accesos y desniveles",
        nota:
          "El examen suele pedir ordenar las soluciones de menor a mayor invasividad o de mayor a menor preferencia. La jerarquía es inamovible: primero trasladar el acceso al punto de menor desnivel; si no, rampa según DB SUA o Tabla 2; si no es posible, plataforma vertical; solo en circunstancias excepcionales, plataforma inclinada. Es clave distinguir que dispositivos NO son adecuación efectiva: orugas motorizadas, sillas salvaescaleras (no autónomos), rampas móviles y tapices móviles. Las sillas de evacuación manuales solo valen para emergencia con personal instruido.",
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
          "Ambas requieren señalización direccional, instrucciones de uso en pictogramas y dispositivo de llamada.",
        ],
      },
      {
        h: "Anejo B: Ascensores en vivienda colectiva",
        nota:
          "Este anejo regula la incorporación de ascensores cuando no se pueden aplicar las exigencias del DB SUA por inviabilidad técnica, económica o protección. Es fundamental memorizar las dimensiones mínimas de cabina de las tablas B.1 y B.2, y la anchura de puerta de 80 cm. Respecto a las intervenciones, recuerda que las que afectan a elementos privativos requieren acuerdo de la comunidad o el \"supuesto de expropiación\" del artículo 9.5.g del RDL 7/2015. Las intervenciones en fachada o patio que incidan en dominio público o condiciones urbanísticas requieren autorización administrativa (art 24.4 RDL 7/2015).",
        items: [
          "Tabla B.1: puertas adyacentes 125x125 cm o 120x140 cm; puertas enfrentadas 90x120 cm.",
          "Tabla B.2 (UNE EN 81-70): 100x125 cm / 450 kg (silla A sin acompañante); 110x140 cm / 630 kg (silla A o B con acompañante).",
          "Anchura de paso mínima de puerta de ascensor: 80 cm (UNE EN 81-70 y UNE EN 81-82).",
          "Tipos de intervención: zonas comunes interiores, patios interiores, fachada (parcela o dominio público) y zonas privativas.",
          "Afección a elementos privativos: requiere acuerdo en comunidad de propietarios o \"supuesto de expropiación\" (art 9.5.g RDL 7/2015).",
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
          "DB HR: ascensor colindante con viviendas sin cuarto de máquinas (maquinaria dentro) → RA >60 dBA; con cuarto de máquinas → RA >50 dBA.",
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
      "Aseo trabajadores exento si <100 m², <10 trabajadores y uso exclusivo (tres requisitos simultáneos).",
      "Local reducido: <100 m² público y <50 personas; aseos comunes admitidos a ~50 m.",
      "Plataforma inclinada: 60 cm libres en escalera desplegada (o ≤8 viviendas, recorrido alternativo o ≤8 peldaños).",
      "DB HR ascensor colindante: sin cuarto máquinas RA>60 dBA; con cuarto máquinas RA>50 dBA.",
      "Intervenciones en privativo: acuerdo comunidad o supuesto de expropiación (art 9.5.g RDL 7/2015).",
    ],
  };
