// Banco de preguntas del tema E22. Formato y reglas: cabecera de src/data/preguntas.js.
export default [
  // ── E22 · LF 7/2003, de 14 de febrero, de Turismo de Navarra ─────────────────────────────────────
  // 02-11-2026, chequeo del tema: 15 activas con la mezcla de Zizur Mayor 2026 (GUIA_PREGUNTAS.md, sección
  // 2 bis): 3 META (E22-10, E22-12, E22-23), 3 DATO (E22-02, E22-17, E22-18), 2 NEG (E22-03, E22-06),
  // 1 LISTA (E22-09), 1 LIT (E22-13), 1 AFIRM (E22-20), 1 SEL (E22-01), 1 DEF (E22-05), 1 ALCANCE (E22-07)
  // y 1 COMB2 (E22-15). Reescritas in situ, con su id y su tipo: E22-01, 02, 03, 05, 06, 07, 09, 10, 12, 13,
  // 15, 17, 18 y 20. Nueva: E22-23 (art. 17.1, normativa sectorial que deben cumplir los alojamientos).
  // Retiradas (no se borran: el historial va por id): E22-04 (recurso turístico), E22-08 (concepto de
  // alojamiento turístico), E22-11 (campamento; su art. 19.3 pasa a E22-20), E22-14 (modalidades de
  // restauración; queda en el resumen), E22-16 (actividad clandestina; pasa a E22-06), E22-19 (unidad de
  // explotación; pasa a E22-20), E22-21 (exclusiones del albergue turístico; quedan en el resumen) y E22-22
  // (restauración social colectiva; pasa a E22-01).
  // Vigencia: temas/E_Tema22.txt contrastado con el consolidado del BOE (BOE-A-2003-5702, última actualización
  // publicada el 22-12-2020) y con LexNavarra (r=15397). El alcance está en la redacción de la LF 19/2020, de
  // 16 de diciembre (BON n.º 296, 22-12-2020), sin modificaciones posteriores hasta el 21-05-2026; las «Nota de
  // Vigencia» del TXT corresponden a esa ley, ya incorporada. La LF 11/2026 (BON 13-07-2026) no toca esta ley.
  // Letra correcta: A 4, B 4, C 4, D 3. Metas en la d): correctas en E22-10 («Todas») y E22-23 («a) y c)»);
  // «Ninguna» es falsa en E22-12.
  { id: "E22-01", tema: "E22", subtema: "Ámbito de aplicación y exclusiones", tipo: "SEL",
    q: "De acuerdo con la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, ¿a cuál de los siguientes le son aplicables sus disposiciones?",
    o: ["Al alojamiento que se presta de manera subordinada y complementaria a una actividad deportiva principal, sin comercializarse turísticamente.",
        "A los turistas o usuarios de las actividades y servicios turísticos.",
        "A la prestación de servicios de restauración en comedores de carácter escolar o universitario.",
        "A los alojamientos dedicados por entidades privadas a prestar servicio para uso exclusivo de sus miembros."],
    c: 1, exp: "Ley Foral 7/2003, art. 2: «Esta Ley Foral será de aplicación a todos los sujetos intervinientes en la actividad turística y, en especial, a los siguientes: [...] c) A los turistas o usuarios de las actividades y servicios turísticos». Las demás quedan fuera de la ley: la a), por el art. 15.2.b), que excluye «El alojamiento que se presta de manera subordinada y complementaria a otras actividades principales de carácter escolar, cultural, ambiental, religioso o deportivo, siempre que no se comercialicen turísticamente»; la c), por el art. 23.2, que excluye «la restauración social colectiva», prestada en comedores «de carácter asistencial, institucional, escolar, universitario, social, laboral» destinados a colectivos particulares y no al público en general; y la d), por el art. 15.2.a) («Los alojamientos dedicados por entidades privadas a prestar servicio para uso exclusivo de sus miembros»)." },
  { id: "E22-02", tema: "E22", subtema: "Competencias de la Comunidad Foral", tipo: "DATO",
    q: "De acuerdo con la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, ¿a través de quién elabora la Administración de la Comunidad Foral de Navarra las estadísticas del sector turístico?",
    o: ["El Consejo de Turismo de Navarra.", "El Instituto de Estadística de Navarra.", "El Observatorio de Turismo de Navarra.", "Los Consorcios Turísticos."],
    c: 2, exp: "Ley Foral 7/2003, art. 5.1.i), en la redacción de la Ley Foral 19/2020: corresponde a la Administración de la Comunidad Foral de Navarra «Crear y gestionar los registros en materia de turismo, así como elaborar estadísticas del sector turístico, a través del Observatorio de Turismo de Navarra». El precepto no encomienda esa función al Consejo de Turismo de Navarra (a) ni al Instituto de Estadística de Navarra (b); los Consorcios Turísticos (d) aparecen en el art. 4.b) entre los sujetos cuyas relaciones se rigen por los principios de coordinación, colaboración y cooperación, no como cauce para elaborar estadísticas." },
  { id: "E22-03", tema: "E22", subtema: "Competencias de las entidades locales", tipo: "NEG",
    q: "Conforme a lo establecido en el artículo 6 de la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, no es una competencia de las entidades locales de Navarra en relación con el turismo:",
    o: ["Proteger y conservar sus recursos turísticos, en especial el entorno natural y el patrimonio monumental.",
        "Otorgar las licencias que la legislación les atribuye en lo que afecta a empresas y establecimientos turísticos.",
        "Colaborar con la Administración de la Comunidad Foral de Navarra en materia turística.",
        "Ejercer las potestades de inscripción, clasificación, inspección y sanción en los términos de la ley foral."],
    c: 3, exp: "Ley Foral 7/2003, art. 6: corresponden a las entidades locales de Navarra, entre otras, «b) Proteger y conservar sus recursos turísticos, en especial el entorno natural y el patrimonio monumental», «c) Colaborar con la Administración de la Comunidad Foral de Navarra en materia turística» y «d) Otorgar las licencias que la legislación les atribuye en lo que afecta a empresas y establecimientos turísticos». En cambio, «Ejercer las potestades administrativas de inscripción, clasificación, inspección y sanción en los términos expresados en la presente Ley Foral» es competencia de la Administración de la Comunidad Foral de Navarra (art. 5.1.g), por lo que la d) es la que no corresponde a las entidades locales." },
  { id: "E22-04", tema: "E22", estado: "retirada",
  q: "Conforme al artículo 12 de la Ley Foral 7/2003, ¿qué se entiende por recurso turístico?",
  o: [
    "El establecimiento en el que se presta temporalmente un servicio de alojamiento turístico",
    "El bien material o manifestación de la realidad física, geográfica, social o cultural susceptible de generar corrientes turísticas",
    "La actividad económica que, por su naturaleza, permite promover Navarra como destino turístico",
    "La empresa que presta habitualmente un servicio turístico mediante precio y con ánimo de lucro"
  ],
  c: 1,
  exp: "Art. 12.1: recurso turístico es el bien material o manifestación diversa de la realidad física, geográfica, social o cultural de Navarra susceptible de generar corrientes turísticas."
},
  { id: "E22-05", tema: "E22", subtema: "Conceptos: empresa turística", tipo: "DEF",
    q: "Según la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, empresa turística es la persona física o jurídica que, en nombre propio, de manera habitual y con ánimo de lucro, se dedica a la realización de una actividad turística o a la prestación de algún servicio turístico. ¿Cuándo se presumirá la habitualidad?",
    o: ["Cuando se publicite la prestación de servicios turísticos por cualquier medio.",
        "Cuando la empresa figure inscrita en el Registro de Turismo de Navarra.",
        "Cuando la actividad turística constituya la fuente principal de ingresos de su titular.",
        "Cuando la empresa disponga de un establecimiento turístico abierto al público."],
    c: 0, exp: "Ley Foral 7/2003, art. 12.3: empresa turística es «la persona física o jurídica que, en nombre propio, de manera habitual y con ánimo de lucro se dedica a la realización de una actividad turística o a la prestación de algún servicio turístico. Se presumirá la habitualidad cuando se realice publicidad de la prestación de servicios turísticos por cualquier medio». La ley no vincula la presunción a la inscripción en el Registro (b), que en muchos casos es potestativa (art. 14.2), ni a que la actividad turística sea la principal fuente de ingresos (c), ni a disponer de un establecimiento (d): basta la publicidad, igual que la publicidad sin declaración responsable basta para la actividad clandestina (art. 13.4). No debe confundirse con la entidad turística no empresarial, que actúa «sin ánimo de lucro» (art. 12.4)." },
  { id: "E22-06", tema: "E22", subtema: "Régimen jurídico de la actividad turística", tipo: "NEG",
    q: "Señale la respuesta INCORRECTA en relación con lo establecido en el artículo 13 de la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, sobre el régimen jurídico de las actividades turísticas:",
    o: ["Los nacionales de Estados miembros de la Unión Europea habilitados en sus países no están sujetos al deber de inscripción para prestar en Navarra servicios turísticos sin establecimiento.",
        "Los precios de los servicios prestados por las actividades turísticas están sujetos a autorización previa del departamento competente en materia de turismo.",
        "La publicidad por cualquier medio de servicios turísticos sujetos a previa inscripción, sin haber presentado la declaración responsable, será considerada actividad clandestina.",
        "Todos los establecimientos turísticos tienen la consideración de públicos, siendo libre el acceso a los mismos."],
    c: 1, exp: "Ley Foral 7/2003, art. 13.5: «Los precios de los servicios prestados por las actividades turísticas son libres. Las tarifas de precios estarán siempre a disposición del usuario y expuestas en lugar visible del establecimiento turístico». No hay autorización previa de precios, así que la b) es la incorrecta. Las demás reproducen el art. 13: la a), su apartado 3 (los nacionales de los Estados miembros de la Unión Europea habilitados en sus respectivos países, para la prestación en Navarra de servicios turísticos sin establecimiento, «no estarán sujetos al deber de inscripción en el Registro de Turismo de Navarra, sin perjuicio de las facultades de supervisión del Departamento competente en materia de turismo»); la c), su apartado 4 («La publicidad por cualquier medio de difusión o la efectiva prestación de servicios turísticos sujetos a la obligación de previa inscripción en el Registro de Turismo de Navarra, sin haber cumplido el deber de presentación de la declaración responsable prevista en el artículo 14 de esta Ley Foral, será considerada actividad clandestina»: basta la publicidad); y la d), su apartado 6, que solo admite las limitaciones derivadas de la propia naturaleza y capacidad del establecimiento, de la legislación vigente y, en su caso, de las normas de régimen interior." },
  { id: "E22-07", tema: "E22", subtema: "Registro de Turismo: inscripción", tipo: "ALCANCE",
    q: "De conformidad con el artículo 14.2 de la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, para una empresa turística cuya inscripción en el Registro de Turismo de Navarra sea potestativa, a efectos de acceder a las ayudas y subvenciones en materia de turismo, dicha inscripción:",
    o: ["Será obligatoria en todo caso.",
        "Será obligatoria, salvo en las destinadas a la creación de empresas y establecimientos turísticos.",
        "Será obligatoria solo en las destinadas a la creación de empresas y establecimientos turísticos.",
        "No será exigible, al ser potestativa."],
    c: 1, exp: "Ley Foral 7/2003, art. 14.2: la inscripción es obligatoria para las empresas de alojamiento (art. 16), de mediación (art. 25) y de actividades turísticas complementarias (art. 28) y sus establecimientos, y para las que se determinen reglamentariamente; «En los demás casos la inscripción será potestativa. No obstante, la inscripción en el Registro de Turismo de Navarra será obligatoria para poder acceder a las ayudas y subvenciones en materia de turismo, salvo aquellas destinadas a la creación de empresas y establecimientos turísticos». La a) olvida la excepción; la c) la invierte y la convierte en el único caso; la d) contradice el «No obstante» del precepto." },
  { id: "E22-08", tema: "E22", estado: "retirada",
  q: "Conforme al artículo 15 de la Ley Foral 7/2003, ¿qué se entiende por alojamiento turístico?",
  o: [
    "Cualquier inmueble en el que se ofrezca alojamiento temporal, aunque no exista contraprestación económica",
    "El establecimiento que ofrece gratuitamente alojamiento temporal a personas usuarias turísticas, con o sin servicios complementarios",
    "El establecimiento que ofrece, mediante precio, alojamiento temporal con o sin prestación de servicios complementarios",
    "El establecimiento que ofrece alojamiento permanente mediante precio, con independencia de los servicios complementarios"
  ],
  c: 2,
  exp: "Art. 15.1: alojamiento turístico es el establecimiento en el que se ofrece a las personas usuarias turísticas, mediante precio, alojamiento temporal con o sin prestación de servicios complementarios."
},
  { id: "E22-09", tema: "E22", subtema: "Clases de alojamiento turístico", tipo: "LISTA",
    q: "¿En qué clases se ordenan los establecimientos de alojamiento turístico conforme a la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, además de cualesquiera otros que se determinen reglamentariamente?",
    o: ["Establecimientos hoteleros, áreas de acampada, albergues juveniles, casas rurales, apartamentos turísticos y viviendas turísticas, y alojamientos singulares.",
        "Establecimientos hoteleros, áreas de acampada, albergues turísticos, casas rurales, apartamentos turísticos y viviendas turísticas, y hoteles rurales.",
        "Establecimientos hoteleros, campamentos de turismo, albergues turísticos, casas rurales, apartamentos turísticos y viviendas turísticas, y alojamientos singulares.",
        "Establecimientos hoteleros, campamentos de turismo, albergues juveniles, casas rurales, apartamentos turísticos y viviendas turísticas, y hoteles rurales."],
    c: 2, exp: "Ley Foral 7/2003, art. 16.1, en la redacción de la Ley Foral 19/2020: «a) Establecimientos hoteleros. b) Campamentos de turismo. c) Albergues turísticos. d) Casas rurales. e) Apartamentos turísticos y viviendas turísticas. f) Alojamientos singulares. g) Cualesquiera otros que se determinen reglamentariamente». Cada distractor cambia dos piezas: la a), áreas de acampada y albergues juveniles; la b), áreas de acampada y hoteles rurales; la d), albergues juveniles y hoteles rurales. Ninguna es una clase: las acampadas realizadas fuera de los campamentos de turismo se rigen por su normativa específica (art. 19.2); el art. 20.2.d) excluye del concepto de albergue turístico «Los Albergues Juveniles integrados en la Red de Albergues de Juventud, que se regirán por su normativa específica»; y el hotel rural no es una clase, sino una modalidad de establecimiento hotelero (art. 18.1.b)." },
  { id: "E22-10", tema: "E22", subtema: "Establecimientos hoteleros: modalidades", tipo: "META",
    q: "Indique cuál de las siguientes modalidades no corresponde a un establecimiento hotelero conforme a lo establecido en el artículo 18.1 de la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra:",
    o: ["Hotel-Apartamento.", "Hotel-Rural.", "Pensión.", "Todas las modalidades anteriores son establecimientos hoteleros."],
    c: 3, exp: "Ley Foral 7/2003, art. 18.1: «Los establecimientos hoteleros se adscribirán a una de las siguientes modalidades»: hotel, hotel-rural, hotel-apartamento, hostal, pensión y «Cualesquiera otras que se determinen reglamentariamente». El hotel-apartamento es el que dispone de instalaciones adecuadas para la conservación, elaboración y consumo de alimentos dentro de la unidad del alojamiento; el hotel-rural, el ubicado en el medio rural en un inmueble de singular valor arquitectónico o que responda a la arquitectura tradicional de la zona; y la pensión, el establecimiento que no encaja en las modalidades de hotel u hostal. Las tres son modalidades hoteleras, así que la correcta es la d). Tiene la misma estructura que la pregunta 58 del examen de Zizur Mayor de 2026, que preguntaba lo mismo sobre el reglamento de establecimientos hoteleros." },
  { id: "E22-11", tema: "E22", estado: "retirada", sustituidaPor: "E22-20",
  q: "Según el artículo 19.1 de la Ley Foral 7/2003, ¿qué se entiende por campamento de turismo?",
  o: [
    "El espacio de terreno delimitado y acondicionado para facilitar temporalmente, mediante precio, la vida al aire libre con fines vacacionales o turísticos",
    "El espacio de terreno destinado exclusivamente al alojamiento en tiendas de campaña, aunque no disponga de instalaciones y servicios",
    "Cualquier terreno donde se permita temporalmente el alojamiento en caravanas o autocaravanas mediante precio",
    "El espacio de terreno no delimitado destinado al alojamiento al aire libre de personas usuarias turísticas"
  ],
  c: 0,
  exp: "Art. 19.1: es el espacio de terreno debidamente delimitado, acondicionado y dotado de las instalaciones y servicios precisos, destinado a facilitar temporalmente, mediante precio, la vida al aire libre con fines vacacionales o turísticos."
},
  { id: "E22-12", tema: "E22", subtema: "Casas rurales, viviendas turísticas y alojamientos singulares", tipo: "META",
    q: "Señale la respuesta CORRECTA en relación con las clases de establecimientos de alojamiento turístico reguladas en la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra:",
    o: ["Son casas rurales los establecimientos situados en el ámbito rural cuya estética y características sean las propias de la arquitectura tradicional de la zona.",
        "Son viviendas turísticas los inmuebles sometidos al régimen de propiedad horizontal, individualmente o por bloques, cedidos temporalmente mediante precio.",
        "Son alojamientos singulares los establecimientos que no cumplen uno o varios de los requisitos técnicos exigidos para la clase que les corresponde.",
        "Ninguna de las respuestas anteriores es correcta."],
    c: 0, exp: "Ley Foral 7/2003, art. 21.1: «Se entiende por casas rurales los establecimientos situados en el ámbito rural cuya estética y características sean las propias de la arquitectura tradicional de la zona», en los que se proporciona, mediante precio, alojamiento temporal. La b) atribuye a las viviendas turísticas el rasgo de los apartamentos turísticos: el régimen de propiedad horizontal es propio de estos (art. 22.1), mientras que las viviendas turísticas son «los chalés, casas independientes, adosados u otros inmuebles análogos» (art. 22.2). La c) invierte el art. 22 bis.2: «No tendrán esta consideración aquellos establecimientos a los que no les sea aplicable una de las clases establecidas en la normativa por no cumplir uno o varios de los requisitos técnicos exigidos para la correspondiente clase»; son singulares los que, por su excepcionalidad, especiales características o morfología, no pueden encuadrarse en ninguna otra clase, si el Departamento les otorga esa condición (art. 22 bis.1). Como la a) es correcta, la d) es falsa." },
  { id: "E22-13", tema: "E22", subtema: "Restauración: concepto", tipo: "LIT",
    q: "Según la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, son establecimientos de restauración los que se dedican:",
    o: ["De forma habitual, profesional y mediante precio, a suministrar desde instalaciones, fijas o móviles, abiertas al público, comidas y bebidas, para su consumo en sus propias dependencias.",
        "De forma habitual, profesional y mediante precio, a suministrar desde instalaciones, fijas o móviles, destinadas a colectivos particulares, comidas y bebidas, para su consumo en sus propias dependencias.",
        "De forma habitual, profesional y mediante precio, a suministrar desde instalaciones, fijas o móviles, abiertas a las personas usuarias turísticas, comidas y bebidas, para su consumo en sus propias dependencias.",
        "De forma habitual, profesional y mediante precio, a suministrar desde instalaciones, fijas o móviles, inscritas en el Registro de Turismo de Navarra, comidas y bebidas, para su consumo en sus propias dependencias."],
    c: 0, exp: "Ley Foral 7/2003, art. 23.1: «Son establecimientos de restauración los que se dedican de forma habitual, profesional, y mediante precio, a suministrar desde instalaciones, fijas o móviles, abiertas al público, comidas y bebidas, para su consumo en sus propias dependencias». Los distractores cambian solo la condición de las instalaciones, «abiertas al público». La b) describe la restauración social colectiva, que el art. 23.2 excluye de la ley («comedores de carácter asistencial, institucional, escolar, universitario, social, laboral y en cualesquiera otros destinados a colectivos particulares y no al público en general»); la c) limita el servicio a las personas usuarias turísticas, cuando el precepto exige instalaciones abiertas al público, sin distinguir clientelas; y la d) añade un requisito, la inscripción en el Registro, que el art. 23.1 no menciona y que el art. 14.2 no impone a la restauración (la exige a las empresas de alojamiento, de mediación y de actividades turísticas complementarias, y a las que se determinen reglamentariamente)." },
  { id: "E22-14", tema: "E22", estado: "retirada",
  q: "Conforme al artículo 24.1 de la Ley Foral 7/2003, ¿qué modalidades pueden adoptar los establecimientos de restauración?",
  o: [
    "Restaurantes, cafeterías y establecimientos de hostelería rural con clasificación específica",
    "Restaurantes, bares, cafeterías y establecimientos clasificados por categorías de servicio",
    "Restaurantes, otros establecimientos determinados reglamentariamente y establecimientos de hostelería vinculados a actividades gastronómicas de interés turístico o de carácter singular",
    "Restaurantes, bares, cafeterías y mesones, además de establecimientos de categoría superior"
  ],
  c: 2,
  exp: "Art. 24.1: pueden adoptar las modalidades de restaurantes; otros establecimientos que reglamentariamente se determinen; y establecimientos de hostelería que organicen o participen en actividades gastronómicas declaradas de interés turístico o que tengan carácter emblemático, singular o de arraigo a la localidad."
},
  { id: "E22-15", tema: "E22", subtema: "Consulta potestativa previa", tipo: "COMB2",
    q: "Conforme a lo establecido en el artículo 13 bis de la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, ¿en qué plazo máximo debe responder el órgano competente la consulta potestativa previa sobre la clasificación turística de un establecimiento proyectado, y qué efecto tiene la falta de respuesta?",
    o: ["Dos meses; la falta de respuesta no supondrá conformidad con la clasificación propuesta por la persona interesada.",
        "Dos meses; la falta de respuesta supondrá conformidad con la clasificación propuesta por la persona interesada.",
        "Tres meses; la falta de respuesta no supondrá conformidad con la clasificación propuesta por la persona interesada.",
        "Tres meses; la falta de respuesta supondrá conformidad con la clasificación propuesta por la persona interesada."],
    c: 0, exp: "Ley Foral 7/2003, art. 13 bis.1: la consulta «será respondida por el órgano competente en el plazo máximo de dos meses»; y art. 13 bis.5: «La falta de respuesta a la consulta planteada no supondrá conformidad con la clasificación que, en su caso, haya propuesto la persona interesada», que tendrá la que le corresponda tras el procedimiento. Además, la consulta no tiene carácter vinculante (art. 13 bis.4). La b) y la d) dan al silencio un efecto de conformidad que el precepto niega; la c) y la d) alargan el plazo a tres meses." },
  { id: "E22-16", tema: "E22", estado: "retirada", sustituidaPor: "E22-06",
  q: "Conforme al artículo 13.4 de la Ley Foral 7/2003, ¿cuándo existe actividad turística clandestina?",
  o: [
    "Cuando se presta un servicio turístico a un precio distinto del declarado inicialmente",
    "Cuando se publicita o presta una actividad sujeta a inscripción sin haber realizado la declaración responsable exigida",
    "Cuando se inicia una actividad turística sin haber obtenido previamente licencia municipal de apertura",
    "Cuando se presta un servicio turístico sin estar dado de alta en la Seguridad Social"
  ],
  c: 1,
  exp: "Art. 13.4: existe actividad clandestina cuando se publicita o se presta un servicio sujeto a inscripción sin haber realizado la declaración responsable exigida. La publicidad puede ser suficiente aunque todavía no se haya prestado el servicio."
},
  { id: "E22-17", tema: "E22", subtema: "Registro de Turismo: declaración responsable", tipo: "DATO",
    q: "Conforme a lo establecido en el artículo 14.4 de la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, la resolución que declare la inexactitud, falsedad u omisión, de carácter esencial, de cualquier dato de la declaración responsable podrá determinar la imposibilidad de inscribir la empresa turística o el establecimiento, desde la notificación de dicha resolución, por un plazo máximo de:",
    o: ["Tres meses.", "Seis meses.", "Un año.", "Dos años."],
    c: 1, exp: "Ley Foral 7/2003, art. 14.4: la inexactitud, falsedad u omisión de carácter esencial determina «la imposibilidad de continuar con el ejercicio de la actividad y la cancelación de la inscripción en el Registro de Turismo de Navarra, desde el momento en que se tenga constancia de tales hechos», y «La resolución que declare tales circunstancias podrá determinar la imposibilidad de inscribir la empresa turística, la entidad turística no empresarial, el establecimiento o persona que desempeñe una profesión turística por un plazo máximo de 6 meses desde la notificación de dicha resolución». Dos años es el periodo de cese que lleva a la cancelación de oficio (art. 14.7); tres meses y un año no aparecen en el texto." },
  { id: "E22-18", tema: "E22", subtema: "Registro de Turismo: baja y cancelación", tipo: "DATO",
    q: "De acuerdo con la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, ¿qué periodo de cese consecutivo de la actividad inscrita en el Registro de Turismo de Navarra, una vez superado, conlleva la cancelación de oficio de la inscripción, previa audiencia de la persona interesada?",
    o: ["Seis meses.", "Un año.", "Dos años.", "Tres años."],
    c: 2, exp: "Ley Foral 7/2003, art. 14.7: «El cese de la actividad para la que se ha practicado la inscripción durante un periodo superior a dos años consecutivos conllevará la cancelación de oficio de la inscripción practicada, previa audiencia de la persona interesada». Es distinto de la baja definitiva, que los titulares comunican con carácter previo y que también conlleva la cancelación (párrafo primero del mismo apartado). Seis meses es el plazo máximo de imposibilidad de nueva inscripción del art. 14.4; un año y tres años no aparecen en el texto." },
  { id: "E22-19", tema: "E22", estado: "retirada", sustituidaPor: "E22-20",
  q: "Conforme al artículo 15.3 de la Ley Foral 7/2003, ¿qué implica el principio de unidad de explotación?",
  o: [
    "Que cada titular solo puede explotar un establecimiento de alojamiento turístico",
    "Que el establecimiento debe ocupar necesariamente la totalidad del edificio en el que se ubica",
    "Que los servicios complementarios deben ser prestados directamente por el propietario del inmueble",
    "Que cada establecimiento o unidad de explotación queda sometido a una única titularidad empresarial"
  ],
  c: 3,
  exp: "Art. 15.3: el principio de unidad de explotación implica que el establecimiento o unidad de explotación queda sometido a una única titularidad empresarial. No debe confundirse con las condiciones físicas del hotel del art. 18.a."
},
  { id: "E22-20", tema: "E22", subtema: "Alojamiento: unidad de explotación, distintivos y dispensas", tipo: "AFIRM",
    q: "Señale la respuesta CORRECTA de acuerdo con la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, en relación con los establecimientos de alojamiento turístico:",
    o: ["El principio de unidad de explotación exige que el edificio en que se ubique el alojamiento pertenezca en su totalidad a un único propietario.",
        "La placa normalizada con el distintivo del tipo de establecimiento y su clasificación se exhibirá en la recepción del establecimiento.",
        "Las dispensas de requisitos técnicos mínimos deberán ser solicitadas por los interesados y equilibrarse con factores compensatorios acreditados.",
        "En los campamentos de turismo podrán autorizarse alojamientos fijos tipo bungaló, aunque sean explotados por un titular distinto del campamento."],
    c: 2, exp: "Ley Foral 7/2003, art. 16.3: el departamento competente en materia de turismo, previo informe técnico, podrá razonadamente dispensar con carácter excepcional a un establecimiento de alojamiento determinado de alguno de los requisitos técnicos mínimos, atendiendo, entre otras, a las situaciones de los edificios de singular valor arquitectónico, de los rehabilitados en cascos históricos o de los de arquitectura tradicional; y «Tales dispensas deberán ser solicitadas por las personas interesadas y equilibrarse con factores compensatorios acreditados». La a) confunde la unidad de explotación con la propiedad del inmueble: el art. 15.3 exige «una única titularidad empresarial» de la actividad en cada establecimiento o conjunto de unidades de alojamiento, edificio o parte homogénea del mismo. La b) es falsa porque la placa se exhibe «junto a la entrada principal» (art. 16.4). La d) contradice el art. 19.3.a): los alojamientos tipo bungaló se autorizan «siempre que sean explotados por el mismo titular que el del campamento»." },
  { id: "E22-21", tema: "E22", estado: "retirada",
  q: "Conforme al artículo 20.2 de la Ley Foral 7/2003, ¿qué establecimiento queda excluido del concepto de albergue turístico?",
  o: [
    "El establecimiento que ofrece alojamiento temporal mediante precio y dispone de instalaciones comunes",
    "El establecimiento situado en el medio rural que dispone de habitaciones compartidas",
    "El establecimiento que ofrece servicios complementarios de restauración a sus usuarios",
    "El alojamiento prestado en habitaciones múltiples dentro de un campamento de turismo"
  ],
  c: 3,
  exp: "Art. 20.2: quedan excluidos, entre otros, el alojamiento en habitaciones múltiples dentro de campamentos de turismo, el condicionado a pertenecer a un grupo u organización y el prestado sin contraprestación económica o mediante mero donativo."
},
  { id: "E22-22", tema: "E22", estado: "retirada", sustituidaPor: "E22-01",
  q: "Según el artículo 23.2 de la Ley Foral 7/2003, ¿qué actividad queda excluida del concepto legal de establecimiento de restauración?",
  o: [
    "La restauración social colectiva en comedores asistenciales, institucionales, escolares, universitarios, sociales o laborales destinados a colectivos particulares",
    "La restauración prestada desde instalaciones móviles abiertas al público",
    "La prestación habitual y profesional de comidas y bebidas para consumo en las propias dependencias",
    "La restauración prestada dentro de un establecimiento hotelero"
  ],
  c: 0,
  exp: "Art. 23.2: queda excluida la restauración social colectiva prestada en comedores de carácter asistencial, institucional, escolar, universitario, social o laboral destinados a colectivos particulares y no al público en general."
},
  { id: "E22-23", tema: "E22", subtema: "Condiciones de calidad del alojamiento", tipo: "META",
    q: "Conforme a lo establecido en el artículo 17.1 de la Ley Foral 7/2003, de 14 de febrero, de Turismo de Navarra, todos los establecimientos de alojamiento deberán cumplir la normativa vigente en materia de:",
    o: ["Urbanismo, construcción y edificación, e instalaciones.",
        "Patrimonio cultural y ordenación del territorio.",
        "Accesibilidad, eficiencia energética y protección del medio ambiente.",
        "Las respuestas a) y c) son correctas."],
    c: 3, exp: "Ley Foral 7/2003, art. 17.1, en la redacción de la Ley Foral 19/2020: «Todos los establecimientos de alojamiento deberán cumplir la normativa vigente en materia de urbanismo, construcción y edificación, instalaciones, accesibilidad, sanidad y consumo, seguridad e higiene, eficiencia energética y protección del medio ambiente». La a) y la c) recogen materias de esa lista; la b) no: el patrimonio cultural aparece en la ley como fin y como principio del turismo (arts. 3.e y 4.d), pero no en la relación del art. 17.1, en la que tampoco figura la ordenación del territorio. Por eso la correcta es la d)." },
];
