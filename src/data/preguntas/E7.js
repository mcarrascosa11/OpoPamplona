// Banco de preguntas del tema E7. Formato y reglas: cabecera de src/data/preguntas.js.
export default [
  // ---------- E7 · DA DB-SUA/2: ADECUACIÓN EFECTIVA DE LAS CONDICIONES DE ACCESIBILIDAD EN EDIFICIOS EXISTENTES ----------
  // 01-11-2026, chequeo del tema: 15 activas con la mezcla de Zizur Mayor 2026 (GUIA_PREGUNTAS.md,
  // sección 2 bis): 3 META (E7-04, E7-11, E7-15), 3 DATO (E7-03, E7-08, E7-09), 2 NEG (E7-02, E7-10),
  // 1 LISTA (E7-12), 1 LIT (E7-14), 1 AFIRM (E7-06), 1 SEL (E7-05), 1 DEF (E7-01), 1 ALCANCE (E7-07) y
  // 1 COMB2 (E7-13). Letra correcta: A 3, B 4, C 4, D 4 (metas correctas: E7-04 «a) y c)» y E7-11 «Todas»;
  // E7-15 lleva «Ninguna», falsa).
  // Las 15 se han reescrito in situ conservando su id (E7-01 a E7-15); no hay retiradas ni nuevas.
  // Fuente: DA DB-SUA/2, versión de 29-06-2018, que sigue siendo la vigente en codigotecnico.org (no hay
  // versión posterior). El DB SUA solo ha cambiado después en la definición de «plaza de aparcamiento
  // accesible» (RD 450/2022), ajena a lo que se pregunta; el proyecto de modificación del CTE de
  // noviembre de 2025 no estaba aprobado el 21-05-2026.

  { id: "E7-01", tema: "E7", subtema: "Objeto: edificio existente", tipo: "DEF",
    q: "Conforme a lo establecido en el apartado 1 del Documento de Apoyo DA DB-SUA/2, Adecuación efectiva de las condiciones de accesibilidad en edificios existentes, del Código Técnico de la Edificación, se consideran edificios y establecimientos existentes:",
    o: ["Aquellos cuya solicitud de licencia de obras fue anterior al 12 de septiembre de 2010.",
        "Aquellos cuya licencia de obras fue concedida antes del 12 de septiembre de 2010.",
        "Aquellos cuya solicitud de licencia de obras fue anterior al 28 de marzo de 2006.",
        "Aquellos cuyas obras de construcción finalizaron antes del 12 de septiembre de 2010."],
    c: 0, exp: "DA DB-SUA/2, apartado 1 (Objeto): «se consideran edificios y establecimientos existentes aquellos cuya solicitud de licencia de obras fue anterior al 12 de septiembre de 2010», conforme a la disposición transitoria tercera del RD 173/2010; los de licencia posterior «debieron cumplir plenamente las condiciones de accesibilidad». b) es falsa: el criterio es la fecha de la solicitud, no la de concesión de la licencia. c) es falsa: la fecha es el 12 de septiembre de 2010, no la de 2006. d) es falsa: no se atiende al final de las obras, sino a la solicitud de licencia." },

  { id: "E7-02", tema: "E7", subtema: "Tabla 2: tolerancias en accesos y rampas", tipo: "NEG",
    q: "Señale la respuesta INCORRECTA en relación con las tolerancias admisibles que recoge la tabla 2 del apartado 3 del Documento de Apoyo DA DB-SUA/2, Adecuación efectiva de las condiciones de accesibilidad en edificios existentes:",
    o: ["En accesos se admiten desniveles de hasta 5 cm salvados con una pendiente no mayor que 25 %.",
        "En las rampas de itinerarios accesibles se admiten mesetas intermedias de, al menos, 1,20 m.",
        "En tramos rectos de rampa se admite una anchura libre de paso de 0,80 m como mínimo.",
        "En las rampas se admiten mesetas de cambio de dirección de, al menos, 1,20 m de profundidad."],
    c: 2, exp: "DA DB-SUA/2, apartado 3, tabla 2 (SUA 1-4.3.2, punto 3): «Se admite una anchura libre de paso de 0,90 m como mínimo en tramos rectos y entre pasamanos», no 0,80 m; por eso c) es la incorrecta. a) es literal (SUA 1-2, punto 3): «En accesos se admiten desniveles de hasta 5 cm salvados con una pendiente no mayor que 25%». b) es literal (SUA 1-4.3.3, punto 1): «Se admiten mesetas intermedias de, al menos, 1,20 m». d) es literal (SUA 1-4.3.3, punto 2): «Se admiten mesetas de cambio de dirección de, al menos, 1,20 m de profundidad»." },

  { id: "E7-03", tema: "E7", subtema: "Tabla 2: pendiente de rampas", tipo: "DATO",
    q: "Según la tabla 2 del DA DB-SUA/2, ¿qué pendiente máxima se admite como tolerancia en una rampa de un itinerario accesible de un edificio existente de hasta 3 m de longitud?",
    o: ["8 %.", "10 %.", "12 %.", "15 %."],
    c: 2, exp: "DA DB-SUA/2, apartado 3, tabla 2 (SUA 1-4.3.1, punto 1a): «Se admiten rampas de hasta 3 m con pendiente del 12% como máximo, de hasta 10 m con pendiente del 10% como máximo, de hasta 15 m con pendiente del 8% como máximo, o con pendiente del 6% como máximo sin límite de longitud». a) 8 % es la tolerancia para rampas de hasta 15 m. b) 10 % es la tolerancia para rampas de hasta 10 m (y la exigencia del DB SUA para rampas de menos de 3 m). d) 15 % no figura en la tabla; para rampas de más del 12 % la nota (2) remite a los casos de no viabilidad." },

  { id: "E7-04", tema: "E7", subtema: "Tabla 2: itinerario accesible", tipo: "META",
    q: "Conforme a lo establecido en la tabla 2 del apartado 3 del Documento de Apoyo DA DB-SUA/2, Adecuación efectiva de las condiciones de accesibilidad en edificios existentes, respecto de las tolerancias del itinerario accesible:",
    o: ["Allí donde se exigen espacios para giro se admite que tengan al menos 1,20 m de diámetro, libre de obstáculos.",
        "Se admite que los estrechamientos puntuales tengan una anchura menor de 1 m, pero no inferior a 0,70 m.",
        "Se considera suficiente una anchura de paso de 90 cm en uso privado para circular en línea recta y girar hasta 90º.",
        "Las respuestas a) y c) son correctas."],
    c: 3, exp: "DA DB-SUA/2, apartado 3, tabla 2 (SUA Anejo A, Itinerario accesible): «Espacio para giro: allí donde se exigen espacios para giro se admite que estos tengan al menos 1,20 m de diámetro, libre de obstáculos» (a, verdadera); «como criterio general se considera suficiente para circular en línea recta y hacer giros de hasta 90º una anchura de 90 cm en uso privado y en establecimientos cuya superficie útil total sea inferior a 100 m2» (c, verdadera). b) es falsa: «se admite que los estrechamientos puntuales tengan una anchura menor de 1 m pero no inferior a 0,80 m», no 0,70 m. Por tanto, la correcta es d)." },

  { id: "E7-05", tema: "E7", subtema: "Anejo A: plataformas elevadoras verticales", tipo: "SEL",
    q: "Conforme a la nota (2) de la tabla A.1 del DA DB-SUA/2, las plataformas elevadoras verticales de 80 × 125 cm con una puerta o dos enfrentadas son apropiadas, entre otros, para:",
    o: ["Edificios de uso Residencial Vivienda con viviendas accesibles para usuarios de silla de ruedas.",
        "Edificios de uso Residencial Vivienda sin viviendas accesibles para usuarios de silla de ruedas.",
        "Establecimientos de uso Residencial Público existentes que tengan más de 10 alojamientos.",
        "Edificios de otros usos cuya superficie útil sea superior a 1.000 m²."],
    c: 1, exp: "DA DB-SUA/2, anejo A, tabla A.1, nota (2): «Estas plataformas son apropiadas para edificios de uso Residencial Vivienda sin viviendas accesibles para usuarios de silla de ruedas o de otros usos con superficie útil inferior a 1000 m2». a) es falsa: con viviendas accesibles corresponde la plataforma de 90 × 140 cm de la nota (3), «para el resto de edificios». c) es falsa: el residencial público no figura en la nota (2); los 10 alojamientos son la tolerancia de la tabla 2 para no disponer de alojamientos accesibles. d) es falsa: la nota exige superficie útil inferior, no superior, a 1000 m2." },

  { id: "E7-06", tema: "E7", subtema: "Anejo A: plataformas elevadoras inclinadas", tipo: "AFIRM",
    q: "Señale la respuesta CORRECTA en relación con las plataformas elevadoras inclinadas (salvaescaleras) reguladas en el apartado A.3 del DA DB-SUA/2:",
    o: ["Están previstas para su uso por una única persona y sus controles deben prevenir el uso no autorizado, por ejemplo mediante llave.",
        "Pueden utilizarse para la evacuación del edificio siempre que dispongan de señales auditivas y luminosas en todo su recorrido.",
        "Constituyen la primera opción alternativa cuando no son posibles las soluciones fijas de acceso a nivel o mediante rampa.",
        "Son apropiadas para salvar desniveles de hasta dos plantas en accesos con un tráfico intenso de personas."],
    c: 0, exp: "DA DB-SUA/2, anejo A, apartado A.3: «Estos dispositivos están previstos para su uso por una única persona» y «Sus controles deben prevenir el uso no autorizado, por ejemplo mediante llave» (a, correcta). b) es falsa: «Estos dispositivos no se pueden utilizar para la evacuación del edificio»; las señales auditivas y luminosas sirven para advertir al usuario a pie. c) es falsa: según el apartado A.1, la primera opción alternativa es la plataforma elevadora vertical; la inclinada es la «segunda opción alternativa», en circunstancias excepcionales. d) es falsa: son apropiadas para «pequeños desniveles no mayores a una planta» en los que «no exista un tráfico intenso de personas»." },

  { id: "E7-07", tema: "E7", subtema: "Anejo A: salvaescaleras y anchura de la escalera", tipo: "ALCANCE",
    q: "De acuerdo con el apartado A.3 del DA DB-SUA/2, si es inviable dejar el espacio libre de al menos 60 cm junto a la plataforma elevadora inclinada desplegada, el ancho de la escalera podrá ocuparse completamente durante su uso:",
    o: ["En ningún caso, porque en su posición de uso debe dejar libre ese espacio de 60 cm de escalera.",
        "Cuando se dé alguna de las situaciones previstas, como un edificio que no tenga más de 8 viviendas.",
        "Cuando concurran a la vez circulación reducida, recorrido alternativo señalizado y tramo corto.",
        "Cuando el tramo de escalera a salvar no sea muy prolongado, por ejemplo, de hasta 12 peldaños."],
    c: 1, exp: "DA DB-SUA/2, anejo A, apartado A.3: «Si esta solución es inviable, se puede admitir que el ancho de la escalera se ocupe completamente durante el uso del dispositivo cuando se de alguna de las siguientes situaciones»: circulación reducida («un edificio que no tiene más de 8 viviendas»), recorrido alternativo señalizado o tramo poco prolongado («cuando no excede de 8 peldaños»). a) es falsa: la ocupación completa sí se admite en esos supuestos. c) es falsa: basta con «alguna» de las situaciones, no las tres a la vez. d) es falsa: el ejemplo de tramo corto es de 8 peldaños, no de 12." },

  { id: "E7-08", tema: "E7", subtema: "Anejo B: cabinas de ascensor", tipo: "DATO",
    q: "Según la tabla B.1 del DA DB-SUA/2, ¿cuáles son las dimensiones mínimas (anchura × profundidad) de la cabina de un ascensor con una puerta o dos enfrentadas para que pueda ser utilizado por usuarios de silla de ruedas?",
    o: ["80 × 100 cm.", "80 × 110 cm.", "90 × 120 cm.", "120 × 140 cm."],
    c: 2, exp: "DA DB-SUA/2, anejo B, tabla B.1: con una puerta o dos enfrentadas, «90 x 120 cm (anchura x profundidad)»; con puertas adyacentes, «125 x 125 cm o bien 120 x 140 cm». a) y b) son inferiores al mínimo de la tabla; si no caben las dimensiones mínimas, «pueden diseñarse otros que no serían utilizables por usuarios de silla de ruedas». d) 120 × 140 cm es una de las dos medidas para cabinas con puertas adyacentes." },

  { id: "E7-09", tema: "E7", subtema: "Anejo B: puerta del ascensor", tipo: "DATO",
    q: "¿Cuál es la anchura de paso mínima de una puerta de ascensor para que pueda ser utilizada por usuarios de silla de ruedas, según recoge el apartado B.2 del DA DB-SUA/2 conforme a las normas UNE-EN 81-70 y UNE-EN 81-82?",
    o: ["70 cm.", "80 cm.", "90 cm.", "100 cm."],
    c: 1, exp: "DA DB-SUA/2, anejo B, apartado B.2: «Conforme al apartado 5.2.1 de la norma UNE-EN 81-70:2004 y al apartado 5.2.1 de la norma UNE-EN 81-82:2014 la anchura de paso mínima de una puerta de ascensor es de 80 cm para que pueda ser utilizada por usuarios de silla de ruedas». a) 70 cm queda por debajo de ese mínimo. c) 90 cm es la anchura de paso de pasillos en uso privado (tabla 2), no la de la puerta del ascensor. d) 100 cm no figura en el DA para puertas de ascensor." },

  { id: "E7-10", tema: "E7", subtema: "Tabla 2: aseo accesible en uso privado", tipo: "NEG",
    q: "Según la tabla 2 del DA DB-SUA/2 (SUA 9-1.2.6), en uso privado se admite que no haya aseo accesible siempre que se cumplan determinadas condiciones. ¿Cuál de las siguientes no es una de ellas?",
    o: ["Que la superficie útil de la zona de uso privado no exceda de 100 m².",
        "Que el número de trabajadores no exceda de 10.",
        "Que el aseo sea de uso exclusivo por los trabajadores.",
        "Que existan aseos accesibles públicos en la vía pública a unos 50 m."],
    c: 3, exp: "DA DB-SUA/2, apartado 3, tabla 2 (SUA 9-1.2.6): «En uso privado, se admite que no haya aseo accesible siempre que la superficie útil de la zona de uso privado no exceda de 100 m2, que el número de trabajadores no exceda de 10 […] y que el aseo sea de uso exclusivo por los trabajadores». a), b) y c) son las tres condiciones, que se exigen a la vez. d) no lo es: la suficiencia de los aseos accesibles públicos de la vía pública, a un recorrido «del orden de 50 m», es una solución del anejo C (apartado C.1) para locales de reducidas dimensiones con acceso desde la vía pública." },

  { id: "E7-11", tema: "E7", subtema: "Anejo A: soluciones que no son adecuación efectiva", tipo: "META",
    q: "De conformidad con el apartado A.1 del DA DB-SUA/2, ¿cuál de los siguientes elementos no puede considerarse una adecuación efectiva de las condiciones de accesibilidad de un edificio existente?",
    o: ["Las orugas motorizadas.",
        "Las sillas salvaescaleras.",
        "Los tapices móviles.",
        "Todas las respuestas anteriores son correctas."],
    c: 3, exp: "DA DB-SUA/2, anejo A, apartado A.1: «Las orugas motorizadas y las sillas salvaescaleras no permiten al usuario de silla de ruedas su uso autónomo por lo que no se consideran una adecuación efectiva de las condiciones de accesibilidad» (a y b), aunque pueden usarse en casos muy particulares con la conformidad previa del usuario y personal instruido. «Las rampas móviles y los tapices móviles, si bien son facilitadores de la movilidad, no son soluciones de accesibilidad, razón por la que no forman parte de los itinerarios accesibles» (c). Las tres son ciertas: la correcta es d)." },

  { id: "E7-12", tema: "E7", subtema: "Anejo A: orden de preferencia de las soluciones", tipo: "LISTA",
    q: "Según el apartado A.1 del DA DB-SUA/2, ¿cuál es el orden de preferencia de las soluciones para adecuar el acceso de un edificio existente con un pequeño desnivel?",
    o: ["Traslado del acceso, rampa, plataforma elevadora vertical y plataforma elevadora inclinada.",
        "Traslado del acceso, rampa, plataforma elevadora inclinada y plataforma elevadora vertical.",
        "Rampa, traslado del acceso, plataforma elevadora vertical y plataforma elevadora inclinada.",
        "Traslado del acceso, plataforma elevadora vertical, rampa y plataforma elevadora inclinada."],
    c: 0, exp: "DA DB-SUA/2, anejo A, apartado A.1: «La solución preferente para adecuar el acceso es trasladarlo donde el desnivel con la vía publica sea menor»; «Cuando la solución a nivel no sea posible, se puede disponer un itinerario accesible que incluya una rampa»; si no son posibles las soluciones fijas, «como primera opción alternativa la instalación de una plataforma elevadora vertical»; y, en circunstancias excepcionales, «como segunda opción alternativa la instalación de una plataforma elevadora inclinada (salvaescaleras)». b) invierte las dos plataformas. c) antepone la rampa al traslado del acceso. d) antepone la plataforma vertical a la rampa, que es una solución fija." },

  { id: "E7-13", tema: "E7", subtema: "Anejo B: incidencia en el DB SI", tipo: "COMB2",
    q: "Conforme a lo establecido en el apartado B.4.2 del Documento de Apoyo DA DB-SUA/2, Adecuación efectiva de las condiciones de accesibilidad en edificios existentes, al instalar un ascensor se permite reducir la anchura de las escaleras previstas para evacuación descendente hasta:",
    o: ["0,90 m y no menos de P/160.",
        "0,90 m y no menos de P/(160-10h).",
        "0,80 m y no menos de P/(160-10h).",
        "0,80 m y no menos de P/160."],
    c: 3, exp: "DA DB-SUA/2, anejo B, apartado B.4.2: «Se permite la reducción de la anchura de escaleras previstas para la evacuación hasta: 0,80 m y no menos de P/160 en escaleras previstas para evacuación descendente; 0,80 m y no menos de P/(160-10h) en escaleras previstas para evacuación ascendente». a) y b) son falsas: 0,90 m es el mínimo para pasillos o rampas reducidos, no para escaleras. c) es falsa: P/(160-10h) es la fórmula de la evacuación ascendente." },

  { id: "E7-14", tema: "E7", subtema: "Anejo B: incidencia en el DB SUA", tipo: "LIT",
    q: "De acuerdo con el apartado B.4.3 del Documento de Apoyo DA DB-SUA/2, Adecuación efectiva de las condiciones de accesibilidad en edificios existentes, en las intervenciones en las que se instala un ascensor:",
    o: ["Cuando la escalera sirva a no más de 10 viviendas y la altura de evacuación no exceda de 14 m, se permite reducir los parámetros de escaleras de uso general hasta los de uso restringido, excepto la huella, que al menos será de 25 cm.",
        "Cuando la escalera sirva a no más de 8 viviendas y la altura de evacuación no exceda de 28 m, se permite reducir los parámetros de escaleras de uso general hasta los de uso restringido, excepto la huella, que al menos será de 25 cm.",
        "Cuando la escalera sirva a no más de 8 viviendas y la altura de evacuación no exceda de 14 m, se permite reducir los parámetros de escaleras de uso general hasta los de uso restringido, excepto la huella, que al menos será de 25 cm.",
        "Cuando la escalera sirva a no más de 8 viviendas y la altura de evacuación no exceda de 14 m, se permite reducir los parámetros de escaleras de uso general hasta los de uso restringido, excepto la huella, que al menos será de 28 cm."],
    c: 2, exp: "DA DB-SUA/2, anejo B, apartado B.4.3: «Cuando la escalera sirva a no más de 8 viviendas y la altura de evacuación no exceda de 14 m, se permite la reducción de los parámetros de escaleras de uso general establecidas en el DB SUA1-4.2 hasta lo establecido para escaleras de uso restringido en el DB SUA1-4.1, excepto en la dimensión de la huella que al menos será de 25 cm», con medidas compensatorias. a) es falsa: el límite es de 8 viviendas, no 10. b) es falsa: la altura de evacuación no puede exceder de 14 m, no 28 m. d) es falsa: la huella mínima es de 25 cm, no 28 cm." },

  { id: "E7-15", tema: "E7", subtema: "Anejo C: locales de reducidas dimensiones", tipo: "META",
    q: "Conforme a lo establecido en el apartado C.1 del Documento de Apoyo DA DB-SUA/2, Adecuación efectiva de las condiciones de accesibilidad en edificios existentes, cabe considerar locales de reducidas dimensiones aquellos cuya superficie de uso público y cuya ocupación de público no exceden, respectivamente, de:",
    o: ["50 m² y 25 personas.",
        "100 m² y 50 personas.",
        "150 m² y 100 personas.",
        "Ninguna de las respuestas anteriores es correcta."],
    c: 1, exp: "DA DB-SUA/2, anejo C, apartado C.1: «cabe considerar como locales de reducidas dimensiones aquellos cuya superficie de uso público no excede de 100 m2 y cuya ocupación de público no excede de 50 personas». En ellos pueden plantearse aseos de uso compartido o la suficiencia de aseos accesibles cercanos, del orden de 50 m. a) y c) dan cifras que no figuran en el DA. d) es falsa porque b) es correcta." },
];
