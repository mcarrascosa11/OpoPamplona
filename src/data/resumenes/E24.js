// Resumen del tema E24. Formato: cabecera de src/data/resumenes.js.
// Revisado el 02-11-2026 (chequeo del tema) contra la redacción vigente el 21-05-2026: LexNavarra (r=28141) y texto
// original del BON n.º 138, de 15-11-2002. El art. 30.2 y la DA 4.ª están en la redacción del DF 656/2003, de 27 de
// octubre (BON n.º 145, 14-11-2003), y los arts. 31 a 35 en la del DF 37/2013, de 5 de junio (BON n.º 113,
// 14-06-2013), que además derogó los anexos I y II. No hay modificaciones posteriores; las «Nota de Vigencia» del TXT
// corresponden a esas dos reformas, ya incorporadas. Correcciones: la clave del restaurante (la amenización también
// es música en directo; lo extraordinario son las actuaciones en vivo con ocasión de banquetes), la nota de las
// disposiciones adicionales (solo la DA 4.ª es, con el art. 10, excepción expresa a la compatibilidad del art. 30.2)
// y la nota del bar especial (también admite amenización). Se añade memorizacion y se indica que las disposiciones
// adicionales quedan fuera del alcance oficial (capítulos I a III).
export default {
    intro:
      "El Decreto Foral 202/2002 es el desarrollo reglamentario que la Ley Foral 2/1989 anunciaba en su art. 2: aprueba el CATÁLOGO de establecimientos, espectáculos públicos y actividades recreativas y regula los REGISTROS de empresas y locales. Es un tema de definiciones, y por eso se examina con preguntas de detalle: qué nivel sonoro corresponde a cada figura, qué establecimiento exige vestíbulo estanco, cuál no puede tener pista de baile, qué diámetro mínimo tiene una pista. La clave para no perderse es entender que el Catálogo escalona los locales de hostelería por su intensidad musical —bar, cafetería y restaurante (75 dBA) < bar especial y café-espectáculo (90 dBA) < discoteca (baile)— y que a cada escalón le corresponden exigencias constructivas mayores.",
    bloques: [
      {
        h: "Objeto, ámbito y definiciones (arts. 1-2)",
        nota:
          "Las cuatro definiciones del art. 2 son la herramienta con la que se distingue una figura de otra en todo el resto del Decreto, y se preguntan mucho porque están construidas por exclusión. Ambientación y amenización se separan por un criterio simple: si hay músicos tocando en directo es amenización; si sale de un altavoz es ambientación. Y la amenización lleva además tres condiciones acumulativas que la mantienen en lo accesorio —complementaria, sin escenario y sin publicidad de los ejecutantes—; en cuanto se incumple alguna, el local ya no está amenizando sino ofreciendo un espectáculo.",
        items: [
          "Objeto (art. 1.1): aprobar el Catálogo y regular los Registros de Empresas y Locales, en el marco de la Ley Foral 2/1989 modificada por la LEY FORAL 26/2001, de 10 de diciembre",
          "Ámbito (art. 1.2): espectáculos y actividades recreativas de pública concurrencia y los establecimientos donde se celebren, siempre que se lleven a cabo íntegramente en Navarra, con independencia de titularidad pública o privada, finalidad lucrativa o no, y carácter habitual o esporádico",
          "AMBIENTACIÓN MUSICAL: propagación o difusión de música a partir de la señal recibida por cualquier medio de transmisión, o reproducida desde cualquier soporte de grabación, SIN que pueda ofrecerse mediante actuaciones en vivo",
          "AMENIZACIÓN MUSICAL: realización EN DIRECTO de actuaciones musicales o músico-vocales, con tres condiciones acumulativas — que se configure como actividad COMPLEMENTARIA, que NO se desarrolle sobre escenarios y que NO se realice con publicidad específica de los ejecutantes",
          "PISTA DE BAILE: espacio especialmente delimitado y destinado a tal fin, desprovisto de obstáculos constructivos o de mobiliario y de dimensiones suficientes para inscribir en él un círculo de DIÁMETRO MÍNIMO DE 5 METROS",
          "SERVICIO DE BEBIDAS: actividad complementaria configurada como servicio EXCLUSIVO para los asistentes, siempre que no disponga de cocina, ni de aparatos o instalaciones de restauración para cuyo uso sea necesario contar con SALIDA DE HUMOS en el local",
        ],
      },
      {
        h: "Hostelería sin baile: bar, cafetería y restaurante (arts. 4-6)",
        nota:
          "Los tres primeros escalones comparten techo sonoro —75 dBA— y se distinguen por lo que sirven y dónde se consume. El bar se define por la barra o mostrador; la cafetería por un repertorio más amplio de productos; el restaurante por servir todo tipo de comidas en comedores. La diferencia jurídicamente relevante es que el restaurante es el único de los tres que puede AMENIZAR, y el único con una válvula extraordinaria para música en vivo en banquetes, que además exige autorización municipal expresa.",
        items: [
          "BARES (art. 4): especializados en servir de manera permanente bebidas para consumo EN LA BARRA O MOSTRADOR; también en mesas, en el interior o en terrazas previamente autorizadas. Pueden hacer restauración de tapas, bocadillos y platos fríos o calientes. Solo AMBIENTACIÓN musical, máximo 75 dBA",
          "CAFETERÍAS (art. 5): especializadas en servir de manera permanente infusiones, zumos, helados, bollería, pastelería, bebidas en general, tapas, bocadillos y comidas, con consumo en el interior del local o en terrazas autorizadas. Solo AMBIENTACIÓN, máximo 75 dBA",
          "RESTAURANTES (art. 6): especializados en servir TODO TIPO DE COMIDAS en comedores o terrazas habilitadas y previamente autorizadas. Admiten AMBIENTACIÓN Y AMENIZACIÓN musical, máximo 75 dBA",
          "Excepción del art. 6.3: con carácter EXTRAORDINARIO, en los restaurantes pueden ofrecerse actuaciones musicales EN VIVO con ocasión de la celebración de BANQUETES, siempre que cuenten con la autorización del Ayuntamiento correspondiente",
        ],
      },
      {
        h: "Hostelería musical: bar especial y café-espectáculo (arts. 7-8)",
        nota:
          "Al subir a 90 dBA la norma exige contrapartidas constructivas, y son las mismas en las dos figuras: vestíbulo o departamento estanco con absorción acústica y doble puerta con cierre automático, más un controlador de presión acústica que no solo limita sino que REGISTRA los niveles de emisión. La diferencia entre ambas está en el directo: el bar especial vive del ambiente musical —ambientación y, como mucho, amenización— y tiene prohibido el escenario; el café-espectáculo se define justamente por las actuaciones en directo y por eso necesita escenario, camerino y una superficie mínima. Ninguno de los dos puede tener espacios de baile —ese es el salto a discoteca.",
        items: [
          "BARES ESPECIALES (art. 7): especializados en la expedición de BEBIDAS Y COMBINADOS en un ambiente musical; además pueden hacer la restauración propia del bar. Ambientación y amenización con máximo 90 dBA",
          "Exigencias del bar especial: acceso del público a través de departamento o vestíbulo ESTANCO con absorción acústica y DOBLE PUERTA con cierre automático (7.3); controlador de presión acústica que garantice en todo momento la limitación del nivel y REGISTRE los niveles de emisión sónica (7.4); y en NINGÚN CASO escenarios ni espacios acotados para la finalidad de baile (7.5)",
          "CAFÉS-ESPECTÁCULO (art. 8): especializados en ofrecer actuaciones musicales, teatrales o de variedades EN DIRECTO, sin perjuicio de que también realicen las actividades propias de bar. Nivel máximo 90 dBA, también con controlador de presión acústica",
          "Exigencias del café-espectáculo (art. 8.2-3): toda su actividad se desarrolla ÚNICA Y EXCLUSIVAMENTE EN EL INTERIOR del local —no puede tener terraza—; acceso por departamento estanco con absorción acústica y doble puerta con cierre automático; debe disponer de asientos y mesas para el público, escenario y camerino; y NO puede tener espacios acotados para baile",
          "SUPERFICIE MÍNIMA del café-espectáculo: 50 M² ÚTILES destinados al público, sin contabilizar la superficie ocupada por la barra de bar, aseos, almacenes, escenario y camerino",
        ],
      },
      {
        h: "Baile: discotecas y discotecas de juventud (arts. 9-10)",
        nota:
          "La discoteca es la única figura del Catálogo definida por el baile, y arrastra la condición urbanística más severa de todo el Decreto: solo es autorizable en edificios con estructura INDEPENDIENTE respecto a los usos de vivienda. Esa frase del art. 9.4 es la que un técnico municipal maneja al informar una licencia y por eso es de las más preguntables. La discoteca de juventud no es un local distinto sino un régimen horario de funcionamiento sobre una discoteca ya licenciada.",
        items: [
          "DISCOTECAS Y SALAS DE FIESTA (art. 9): locales destinados a ofrecer la actividad recreativa de BAILE, para lo que deben contar con UNA O MÁS PISTAS de baile; además pueden ofrecer actuaciones musicales o de variedades",
          "El soporte musical puede ser actuación en directo, reproducción mecánica o electrónica, o alternar ambos sistemas (9.2). Para realizar actuaciones en directo deben estar dotadas de ESCENARIO Y CAMERINO (9.3)",
          "Condición urbanística (art. 9.4): esta actividad SOLO ES AUTORIZABLE cuando su implantación se proyecte en edificios que tengan ESTRUCTURA INDEPENDIENTE respecto a los usos de vivienda",
          "Pueden disponer de servicio de bar y realizar la restauración propia de éste, para USO EXCLUSIVO del público asistente (9.5)",
          "DISCOTECAS DE JUVENTUD (art. 10): locales que, CONTANDO YA CON LA LICENCIA del artículo anterior, se dedican durante el horario que reglamentariamente se determine a un público DE ENTRE 14 Y 18 AÑOS, con prohibición de venta y consumo de bebidas alcohólicas y tabaco. También está prohibido ALMACENAR O EXHIBIR alcohol o tabaco a la vista o al alcance del público",
          "Durante las sesiones deben colocarse en la entrada, con caracteres perfectamente visibles, carteles que especifiquen «Sesión juvenil» y «Prohibida la venta y consumo de tabaco y de toda clase de bebidas alcohólicas» (10.2)",
        ],
      },
      {
        h: "Resto de establecimientos del Catálogo (arts. 11-26)",
        nota:
          "Del bloque final de establecimientos conviene retener los adverbios, porque son la trampa habitual: los salones recreativos explotan juegos recreativos, los salones de JUEGO se dedican EXCLUSIVAMENTE a máquinas de juego y las salas de bingo, PREFERENTEMENTE al bingo. En instalaciones deportivas, de la lista de diez tipos del art. 20 conviene fijar sobre todo la pareja frontón/trinquete, que se distinguen por la contracancha y el número de paredes laterales, y que el polideportivo es TOTALMENTE cubierto.",
        items: [
          "Cibercentros (art. 11): acceso a ordenadores y herramientas de comunicación tecnológica mediante pago y durante un tiempo determinado. Salones recreativos (art. 12): explotación de JUEGOS RECREATIVOS. Salones de juego (art. 13): dedicados EXCLUSIVAMENTE a la explotación de MÁQUINAS DE JUEGO. Salas de bingo (art. 14): destinadas PREFERENTEMENTE al desarrollo del juego del bingo",
          "Teatros (art. 15): representación dramática o de la escena, con escenario, camerinos y localidades de asiento. Auditorios (art. 16): al menos una sala para conciertos, recitales, conferencias, coloquios o lecturas, con escenario, locales auxiliares y camerinos. Cines (art. 17): salas preparadas EXCLUSIVAMENTE para la proyección en pantalla. Locales de exhibición de vídeos (art. 18): películas en vídeo mediante CABINAS INDIVIDUALES o sistemas similares",
          "Salas de conferencias y exposiciones (art. 19): locales cerrados dispuestos exclusivamente para cursos, recitales, conferencias, mesas redondas, debates, lecturas o reuniones, y exposiciones de escultura, pintura, fotografía, libros u otros objetos muebles",
          "INSTALACIONES DEPORTIVAS (art. 20) — diez tipos: a) estadios (descubiertos con graderíos) · b) campos y pistas de deporte · c) complejos deportivos · d) polideportivos (TOTALMENTE CUBIERTOS, con o sin graderíos, para varios deportes) · e) gimnasios · f) piscinas (cuentan al menos con un vaso) · g) frontones · h) trinquetes · i) salones deportivos (bolos, billares, tenis de mesa) · j) espacios naturales habilitados",
          "FRONTÓN vs TRINQUETE: el frontón cuenta al menos con una pared FRONTAL y eventualmente una lateral, más cancha y CONTRACANCHA; el trinquete es un frontón CERRADO, SIN CONTRACANCHA y con DOS paredes laterales",
          "Los espacios naturales habilitados (art. 20.j) se subdividen en tres: balizados permanentemente · habilitados periódica u ocasionalmente · libres",
          "Plazas de toros (art. 21): intervención de reses bravas. Pabellones feriales (art. 22): exposiciones de productos, plantas, animales o servicios para su difusión comercial. Parques de atracciones y ferias (art. 23): elementos mecánicos como carruseles o norias, e incluye los espacios para juegos de simulación y participación colectiva",
          "Parques infantiles (art. 24): destinados EXCLUSIVAMENTE y con CARÁCTER PERMANENTE a actividades recreativas infantiles. Circos (art. 25): fijos o desmontables, con graderíos y una o varias pistas, pudiendo intervenir animales. Parques zoológicos y safari-park (art. 26): exhibición de animales vivos",
        ],
      },
      {
        h: "Espectáculos públicos y actividades recreativas (arts. 27-28)",
        nota:
          "La sección 2ª cataloga ya no los locales sino los actos, y lo hace con dos listas expresamente ENUNCIATIVAS —«a título meramente enunciativo»—, de modo que no son numerus clausus. El criterio de separación es el papel del público: en el espectáculo se congrega para PRESENCIAR; en la actividad recreativa la empresa le ofrece USAR sus locales, servicios o participar en sus actos.",
        items: [
          "ESPECTÁCULOS PÚBLICOS (art. 27.1): actos organizados con el fin de congregar al público en general para PRESENCIAR actividades, representaciones o exhibiciones de naturaleza artística, deportiva o cultural",
          "Lista enunciativa (art. 27.2): espectáculos taurinos · competiciones deportivas · exhibiciones cinematográficas · representaciones teatrales · festivales y conciertos · espectáculos circenses · danza y variedades · representaciones o exhibiciones artísticas, culturales o folclóricas · desfiles y romerías",
          "ACTIVIDADES RECREATIVAS (art. 28.1): aquellas en que la empresa organizadora ofrece al público el USO de sus locales o instalaciones, la utilización de sus servicios o la PARTICIPACIÓN en los actos organizados por ella, con fines de diversión o esparcimiento",
          "Lista enunciativa (art. 28.2): bailes · verbenas y similares · atracciones de feria · exhibición de animales vivos · conferencias y congresos · exposiciones artísticas y culturales · HOSTELERÍA en sus diferentes categorías · actividades deportivas con fines recreativos · juegos recreativos y de azar",
        ],
      },
      {
        h: "Licencias y actividades extraordinarias (arts. 29-31)",
        nota:
          "La sección 3ª es la que aplica el técnico municipal a diario. Dos exigencias de contenido en la licencia: la actividad exacta según el Catálogo y el AFORO MÁXIMO —y si hay espacios de uso diferenciado, el aforo de cada uno—. El concepto de actividades COMPATIBLES tiene una definición cerrada que conviene memorizar por sus tres criterios. Y el art. 31, en la redacción del DF 37/2013, aporta los plazos más preguntables del tema: 15 días para solicitar y 2 días naturales de antelación en la notificación.",
        items: [
          "Regla general (art. 29): ningún edificio, local o instalación puede dedicarse a espectáculos o actividades recreativas dirigidos al público sin haber obtenido previamente la LICENCIA MUNICIPAL DE APERTURA. Las instalaciones eventuales, portátiles o desmontables necesitan LICENCIA ESPECIAL previa acreditación de las condiciones de seguridad",
          "Contenido de la licencia (art. 30.1): debe señalar con exactitud la actividad o actividades siguiendo las definiciones del Catálogo, ASÍ COMO EL AFORO MÁXIMO del local",
          "Varias actividades en un local (art. 30.2, redacción del DF 656/2003): se hace constar cada una y deben ser COMPATIBLES. Son compatibles las que NO DIFIERAN en cuanto a horario de cierre, dotaciones o público al que se autoriza el acceso, con las únicas excepciones del art. 10 (discotecas de juventud), de la disposición adicional cuarta (restaurante y bar especial) o de la normativa sectorial aplicable a cada una. Si el local cuenta con varios espacios de uso diferenciado, debe expresarse el AFORO DE CADA UNO",
          "La concesión de estas licencias no excluye la obligación de obtener las demás autorizaciones de la normativa específica aplicable (art. 30.3)",
          "ACTIVIDADES EXTRAORDINARIAS (art. 31.1): la empresa titular de un local con licencia que pretenda desarrollar con carácter extraordinario otra actividad distinta pero COMPATIBLE E INCLUIDA EN EL CATÁLOGO debe obtener autorización especial del Ayuntamiento, adjuntando MEMORIA DESCRIPTIVA de la actividad y de las instalaciones y medios necesarios. Plazo de solicitud: antelación mínima de QUINCE DÍAS respecto del inicio",
          "Certificado técnico (art. 31.2): si la nueva actividad afecta significativamente a las condiciones de seguridad, salubridad o molestias a terceros, el Ayuntamiento requiere CERTIFICADO DE TÉCNICO COMPETENTE que justifique la idoneidad del local y las medidas correctoras. Se entiende que AFECTA SIGNIFICATIVAMENTE cuando, entre otras, se altera la ocupación o su distribución respecto a los elementos de EVACUACIÓN y/o se aumenta el nivel de emisión de RUIDOS O VIBRACIONES",
          "Notificación y validez (art. 31.3): la autorización se notifica al interesado y al Departamento de Presidencia, Justicia e Interior con antelación mínima de al menos DOS DÍAS NATURALES respecto al inicio, y establece su plazo de validez. Si las solicitudes se reiteran dentro del mismo año, el Ayuntamiento PUEDE DENEGARLAS",
        ],
      },
      {
        h: "Registro de Empresas y Locales (arts. 32-35)",
        nota:
          "El registro municipal se divide en dos secciones con una lógica clara: la Primera para quien organiza SIN local determinado, la Segunda para los locales del Catálogo. De ahí se sigue la diferencia de procedimiento —la Sección Primera se inscribe tras conceder la autorización; la Segunda, DE OFICIO tras la licencia de apertura—. Los plazos del art. 35 son la pregunta fina: quince días como regla, pero diez si la variación afecta solo al nombre comercial o a la empresa titular. Todo el capítulo III está en la redacción del DF 37/2013, que sustituyó las antiguas fichas en papel (anexos I y II, derogados) por formularios electrónicos.",
        items: [
          "Dos Secciones (art. 32.1): PRIMERA, empresas que organicen espectáculos o actividades recreativas que NO realicen su actividad en un local determinado · SEGUNDA, los locales incluidos en el Catálogo de establecimientos públicos",
          "Datos de la Sección Primera (art. 32.2): identificación de la empresa organizadora, domicilio social y teléfono; identificación, dirección y teléfono de su representante legal; y actividad o actividades concretas que justifican la inscripción",
          "Datos de la Sección Segunda (art. 32.3): nombre comercial · actividades autorizadas según el Catálogo · dirección, localidad y código postal · FECHAS DE CONCESIÓN de las licencias de actividad y apertura · SUPERFICIE, AFORO MÁXIMO Y REFERENCIA CATASTRAL · identificación de la empresa titular de la LICENCIA de apertura · identificación de la empresa TITULAR DEL ESTABLECIMIENTO, entendiendo por tal quien, sea o no titular de la licencia, organiza directamente la actividad y asume las responsabilidades frente al público y la Administración",
          "Procedimiento (art. 33): la inscripción en la Sección Primera se practica UNA VEZ CONCEDIDA la autorización administrativa del espectáculo; la de la Sección Segunda se practica DE OFICIO una vez obtenida la licencia municipal de apertura. Ambas por el Ayuntamiento competente",
          "Las inscripciones se formalizan mediante FORMULARIOS ELECTRÓNICOS habilitados por el Departamento de Presidencia, Justicia e Interior, y sobre esa base la Administración de la Comunidad Foral mantiene un REGISTRO GENERAL (art. 33.3)",
          "Deber de comunicación (art. 34.2): las empresas titulares de establecimientos de la Sección Segunda deben comunicar al Ayuntamiento las variaciones de los datos de las letras a), f) y g) del art. 32.3 —nombre comercial, empresa titular de la licencia y empresa titular del establecimiento— DENTRO DE QUINCE DÍAS desde que se produjo la variación",
          "PLAZOS DE INSCRIPCIÓN (art. 35): las modificaciones de los datos del art. 32 se inscriben dentro de los QUINCE DÍAS siguientes a su efectiva autorización; pero si las variaciones afectan ÚNICAMENTE al nombre comercial o a la empresa titular del establecimiento, la inscripción se efectúa en DIEZ DÍAS desde que la empresa lo comunicó al Ayuntamiento",
        ],
      },
      {
        h: "Disposiciones adicionales (fuera del alcance oficial: capítulos I a III)",
        nota:
          "Cuatro disposiciones cortas que resuelven casos concretos. Quedan fuera del alcance literal de la convocatoria, que se limita a los capítulos I a III, pero conviene conocerlas porque el art. 30.2 cita la cuarta. La cuarta es, junto con el art. 10, la excepción expresa al régimen de compatibilidad del art. 30.2; la primera permite el servicio de bebidas en los establecimientos que no son de hostelería; y la tercera explica por qué en Navarra ya no existe la figura del «Café-Bar».",
        items: [
          "DA PRIMERA: los establecimientos de los artículos 11 a 26 —del cibercentro al parque zoológico, es decir, los que no son hostelería— pueden contar con SERVICIO DE BEBIDAS, sin perjuicio de otras condiciones de la normativa sectorial",
          "DA SEGUNDA: los titulares de los establecimientos de la Sección Primera del Capítulo II no permitirán SACAR BEBIDAS fuera del local o de las zonas autorizadas como terrazas, pudiendo ser sancionados por infracción del art. 24 de la Ley Foral 2/1989",
          "DA TERCERA: los establecimientos que a la entrada en vigor contaran con licencia de CAFÉ-BAR quedan catalogados formalmente como BARES. Los Ayuntamientos, a solicitud de los interesados y previa comprobación, deben REDEFINIR las licencias anteriores para adaptarlas a las definiciones del Catálogo, y remitir después al Departamento nueva FICHA DE LOCAL con copia de la Resolución (el anexo con la ficha lo derogó el DF 37/2013)",
          "DA CUARTA (añadida por el DF 656/2003): las actividades de RESTAURANTE y BAR ESPECIAL pueden realizarse en el mismo establecimiento, siempre que el local cuente con las licencias correspondientes y ambas se desarrollen en ESPACIOS DE USO DIFERENCIADO",
          "Disposición derogatoria única: queda derogado el Decreto Foral 131/1989, modificado por el DF 193/1991, que aprobó el Catálogo anterior",
        ],
      },
    ],
    claves: [
      "Ambientación = música reproducida, NUNCA en vivo · Amenización = en directo, complementaria, sin escenario y sin publicidad de los ejecutantes",
      "Pista de baile: círculo inscrito de DIÁMETRO MÍNIMO 5 m, libre de obstáculos",
      "Servicio de bebidas: exclusivo para asistentes, sin cocina ni instalaciones que exijan salida de humos",
      "75 dBA: bar, cafetería y restaurante · 90 dBA: bar especial y café-espectáculo",
      "Solo el RESTAURANTE, de los tres de 75 dBA, admite amenización; y, con carácter extraordinario, actuaciones musicales en vivo con ocasión de banquetes, con autorización del Ayuntamiento (art. 6.3)",
      "Bar especial y café-espectáculo: vestíbulo estanco con absorción acústica, doble puerta con cierre automático y controlador de presión acústica que además REGISTRA",
      "El bar especial NO puede tener escenario ni espacios de baile; el café-espectáculo sí tiene escenario y camerino, pero tampoco baile",
      "Café-espectáculo: mínimo 50 m² útiles para público, sin contar barra, aseos, almacenes, escenario ni camerino; toda la actividad en el interior",
      "DISCOTECA: solo autorizable en edificios con ESTRUCTURA INDEPENDIENTE respecto a los usos de vivienda (art. 9.4)",
      "Discoteca de juventud: público de 14 a 18 años, sobre una licencia de discoteca ya existente; prohibido incluso ALMACENAR o EXHIBIR alcohol y tabaco",
      "Salones recreativos = juegos recreativos · Salones de juego = EXCLUSIVAMENTE máquinas de juego · Bingo = PREFERENTEMENTE bingo",
      "Trinquete = frontón cerrado, SIN contracancha y con DOS paredes laterales · Polideportivo = TOTALMENTE cubierto",
      "Las listas de espectáculos (art. 27) y actividades recreativas (art. 28) son MERAMENTE ENUNCIATIVAS",
      "La licencia debe fijar la actividad exacta del Catálogo y el AFORO MÁXIMO; con espacios diferenciados, el aforo de cada uno",
      "Actividades compatibles: las que no difieren en horario de cierre, dotaciones ni público autorizado",
      "Actividad extraordinaria: solicitud con 15 DÍAS de antelación + memoria descriptiva; notificación con 2 DÍAS NATURALES mínimo",
      "«Afecta significativamente» = se altera la ocupación o su distribución respecto a la EVACUACIÓN, y/o aumentan ruidos o vibraciones",
      "Reiteración de solicitudes extraordinarias en el mismo año: el Ayuntamiento PUEDE denegarlas",
      "Sección Primera = empresas SIN local fijo (tras la autorización) · Sección Segunda = locales del Catálogo (DE OFICIO tras la licencia de apertura)",
      "Plazos del registro: 15 días como regla; 10 días si solo cambia el nombre comercial o la empresa titular del establecimiento",
      "Los establecimientos de los arts. 11 a 26 pueden tener servicio de bebidas (DA 1ª)",
      "Café-Bar → catalogado como BAR (DA 3ª) · Restaurante + bar especial en el mismo local si hay espacios de uso diferenciado (DA 4ª)",
      "Reformas incorporadas: DF 656/2003 (art. 30.2 y DA 4.ª) y DF 37/2013 (arts. 31 a 35; deroga los anexos I y II). Nada posterior hasta el 21-05-2026",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Vigencia del Decreto Foral 202/2002 en el alcance del tema",
          columnas: ["Norma", "Qué cambia en este tema"],
          filas: [
            ["DF 202/2002, de 23 de septiembre (BON n.º 138, 15-11-2002)", "Texto original. Deroga el DF 131/1989, de 8 de junio (Catálogo anterior, modificado por el DF 193/1991)"],
            ["DF 656/2003, de 27 de octubre (BON n.º 145, 14-11-2003)", "Nueva redacción del art. 30.2, que añade la DA 4.ª como excepción a la compatibilidad, y nueva DA 4.ª (restaurante y bar especial en el mismo establecimiento). También reformó el horario del DF 201/2002, que no entra en el tema"],
            ["DF 37/2013, de 5 de junio (BON n.º 113, 14-06-2013)", "Nueva redacción de los arts. 31 a 35: actividades extraordinarias y Registro (inscripción de oficio, formularios electrónicos, plazos de 15 y 10 días). Deroga los anexos I y II (Ficha de empresa y Ficha de local)"],
            ["Del 15-06-2013 al 21-05-2026", "Ninguna modificación más (LexNavarra, r=28141). La Ley Foral 5/2025, de 9 de abril, reformó el art. 5 de la Ley Foral 2/1989 (tema E23), no este Decreto; el DF 36/2024, de eventos públicos y sostenibilidad, solo lo cita"]
          ],
          nota: "Las «Nota de Vigencia» del TXT (arts. 30.2 y 31 a 35 y DA 4.ª) son las marcas de LexNavarra de estas dos reformas, ya incorporadas: no hay nada pendiente. Cuidado con apuntes antiguos: en la redacción de 2002, la solicitud de actividad extraordinaria debía acompañarse de certificado de técnico competente, el Ayuntamiento resolvía con una antelación mínima de tres días y notificaba antes de las veinticuatro horas siguientes, y la inscripción en el Registro de Empresas tenía una validez de cinco años. Nada de eso está vigente."
        },
        {
          titulo: "Definiciones del art. 2",
          columnas: ["Concepto", "Qué es", "Lo que lo delimita"],
          filas: [
            ["Ambientación musical (a)", "Propagación o difusión de música a partir de la señal recibida por cualquier medio de transmisión o reproducida desde cualquier soporte de grabación", "Sin que pueda ofrecerse mediante actuaciones en vivo"],
            ["Amenización musical (b)", "Realización en directo de actuaciones musicales o músico-vocales", "Tres condiciones: actividad complementaria; no sobre escenarios; sin publicidad específica de los ejecutantes"],
            ["Pista de baile (c)", "Espacio especialmente delimitado y destinado a tal fin", "Sin obstáculos constructivos ni mobiliario; debe caber un círculo de diámetro mínimo de 5 m"],
            ["Servicio de bebidas (d)", "Actividad complementaria configurada como servicio exclusivo para los asistentes al espectáculo o actividad recreativa", "Siempre que no disponga de cocina ni de aparatos o instalaciones de restauración que necesiten salida de humos"]
          ],
          nota: "Ambientación = altavoz; amenización = músicos en segundo plano. Con escenario o con publicidad de los artistas ya no es amenización."
        },
        {
          titulo: "Escalera de la hostelería y del baile (arts. 4 a 10)",
          columnas: ["Figura (art.)", "Qué la define", "Música", "Nivel interior máx.", "Exigencias y prohibiciones"],
          filas: [
            ["Bar (4)", "Bebidas servidas de manera permanente para consumo en barra o mostrador; también en mesas, en el interior o en terrazas autorizadas; tapas, bocadillos y platos fríos o calientes", "Ambientación", "75 dBA", "—"],
            ["Cafetería (5)", "Infusiones, zumos, helados, bollería, pastelería, bebidas, tapas, bocadillos y comidas; consumo en el interior o en terrazas autorizadas", "Ambientación", "75 dBA", "—"],
            ["Restaurante (6)", "Todo tipo de comidas en comedores o terrazas habilitadas y autorizadas", "Ambientación y amenización; actuaciones en vivo en banquetes, con carácter extraordinario y autorización del Ayuntamiento", "75 dBA", "—"],
            ["Bar especial (7)", "Expedición de bebidas y combinados en un ambiente musical; restauración propia del bar", "Ambientación y amenización", "90 dBA", "Vestíbulo o departamento estanco con absorción acústica y doble puerta con cierre automático; controlador de presión acústica que limita y registra; en ningún caso escenarios ni espacios acotados para baile"],
            ["Café-espectáculo (8)", "Actuaciones musicales, teatrales o de variedades en directo; actividades propias de bar", "Directo y, además, ambientación", "90 dBA", "Toda la actividad en el interior; departamento estanco y doble puerta; asientos y mesas, escenario y camerino; 50 m² útiles para el público como mínimo; controlador; en ningún caso espacios acotados para baile"],
            ["Discoteca y sala de fiesta (9)", "Baile, con una o más pistas; también actuaciones musicales o de variedades", "Directo, reproducción mecánica o electrónica, o ambos alternando", "No lo fija el art. 9", "Escenario y camerino para el directo; solo en edificios con estructura independiente respecto a los usos de vivienda; bar para uso exclusivo del público asistente"],
            ["Discoteca de juventud (10)", "Discoteca con licencia que, en el horario reglamentario, se dedica a un público de 14 a 18 años", "—", "—", "Prohibido vender y consumir alcohol y tabaco, y almacenarlos o exhibirlos a la vista o al alcance del público; carteles «Sesión juvenil» y de prohibición en la entrada"]
          ],
          nota: "75 dBA para los tres de comer y beber; 90 dBA para los dos musicales. De los de 75 dBA, solo el restaurante admite amenización. Escenario: prohibido en el bar especial, obligatorio en el café-espectáculo y, en la discoteca, solo si hay directo. Baile: solo en la discoteca."
        },
        {
          titulo: "Resto del Catálogo (arts. 11 a 26): el rasgo que define cada uno",
          columnas: ["Establecimiento (art.)", "Rasgo definitorio"],
          filas: [
            ["Cibercentros (11)", "Dedicados específicamente a facilitar el acceso a ordenadores y herramientas de comunicación tecnológica, mediante pago y durante un tiempo determinado"],
            ["Salones recreativos (12)", "Dedicados específicamente a la explotación de juegos recreativos"],
            ["Salones de juego (13)", "Dedicados exclusivamente a la explotación de máquinas de juego"],
            ["Salas de bingo (14)", "Destinadas preferentemente al juego del bingo"],
            ["Teatros (15)", "Representación dramática o de la escena; escenario y camerinos, localidades de asiento"],
            ["Auditorios (16)", "Al menos una sala para conciertos, recitales, conferencias, coloquios, lecturas públicas…; escenario, locales auxiliares, camerinos y localidades de asiento"],
            ["Cines (17)", "Salas preparadas exclusivamente para proyectar películas en una pantalla"],
            ["Locales de exhibición de vídeos (18)", "Películas en vídeo mediante cabinas individuales o sistemas similares"],
            ["Salas de conferencias y exposiciones (19)", "Locales cerrados dispuestos exclusivamente para cursos, recitales, conferencias, debates, reuniones y exposiciones de objetos muebles"],
            ["Plazas de toros (21)", "Espectáculos en los que intervengan reses bravas"],
            ["Pabellones feriales (22)", "Cubiertos o no; exposiciones de productos, plantas, animales o servicios para su difusión comercial"],
            ["Parques de atracciones y ferias (23)", "Atracciones con elementos mecánicos (carruseles, norias, casetas de ocio); incluye los juegos de simulación y de participación colectiva"],
            ["Parques infantiles (24)", "Destinados exclusivamente y con carácter permanente a actividades recreativas infantiles"],
            ["Circos (25)", "Fijos o desmontables, con graderíos y una o varias pistas; pueden intervenir animales"],
            ["Parques zoológicos y safaripark (26)", "Exhibición de animales vivos"]
          ],
          nota: "Adverbios trampa: específicamente (cibercentros y salones recreativos), exclusivamente (salones de juego, cines, salas de conferencias y exposiciones, parques infantiles) y preferentemente (bingo). Las instalaciones deportivas (art. 20) van en la tabla siguiente."
        },
        {
          titulo: "Instalaciones deportivas (art. 20): diez clases",
          columnas: ["Clase", "Rasgo diferencial"],
          filas: [
            ["a) Estadios", "Recintos descubiertos con graderíos para los espectadores, pabellones e instalaciones anejas"],
            ["b) Campos y pistas de deporte", "Terrenos de juego o espacios acotados, localidades e instalaciones anejas para la práctica y la competición"],
            ["c) Complejos deportivos", "Espacios acotados con pabellones, campos, pistas, graderíos e instalaciones y servicios diversos, para el ocio y la práctica deportiva, sin excluir puntualmente la competición"],
            ["d) Polideportivos", "Edificios e instalaciones totalmente cubiertas, con o sin graderíos, para la práctica y la competición de varios deportes"],
            ["e) Gimnasios", "Locales cubiertos con instalaciones y aparatos para la preparación física de sus usuarios"],
            ["f) Piscinas", "Cubiertas o descubiertas, con o sin gradas; al menos un vaso (o, en sentido restringido, el vaso mismo)"],
            ["g) Frontones", "Descubiertos total o parcialmente, o cubiertos; al menos pared frontal y, eventualmente, una lateral; cancha y contracancha; pelota vasca"],
            ["h) Trinquetes", "Frontones cerrados, sin contracancha y con dos paredes laterales"],
            ["i) Salones deportivos", "Modalidades reglamentadas como bolos, billares o tenis de mesa"],
            ["j) Espacios naturales habilitados", "En el medio natural: balizados permanentemente, habilitados periódica u ocasionalmente, y libres"]
          ],
          nota: "Frontón: pared frontal, eventualmente una lateral y contracancha. Trinquete: cerrado, sin contracancha y con dos laterales. Polideportivo: totalmente cubierto; el frontón puede ser descubierto total o parcialmente."
        },
        {
          titulo: "Espectáculos públicos y actividades recreativas (arts. 27 y 28)",
          columnas: ["Elemento", "Espectáculos públicos (art. 27)", "Actividades recreativas (art. 28)"],
          filas: [
            ["Concepto", "Actos organizados para congregar al público en general a PRESENCIAR actividades, representaciones o exhibiciones de naturaleza artística, deportiva o cultural", "La empresa organizadora ofrece al público el USO de sus locales o instalaciones, la utilización de sus servicios o la PARTICIPACIÓN en sus actos, con fines de diversión o esparcimiento"],
            ["Lista (a título meramente enunciativo)", "Taurinos; competiciones deportivas; exhibiciones cinematográficas; representaciones teatrales; festivales y conciertos; circenses; danza y variedades; representaciones o exhibiciones artísticas, culturales o folclóricas; desfiles y romerías", "Bailes; verbenas y similares; atracciones de feria; exhibición de animales vivos; conferencias y congresos; exposiciones artísticas y culturales; hostelería en sus diferentes categorías; actividades deportivas con fines recreativos; juegos recreativos y de azar"],
            ["Número de letras", "9 (a-i)", "9 (a-i)"]
          ],
          nota: "Parejas trampa: competiciones deportivas (27) / actividades deportivas con fines recreativos (28); danza y variedades (27) / bailes (28); representaciones o exhibiciones artísticas (27) / exposiciones artísticas y culturales (28); desfiles y romerías (27) / verbenas (28). La hostelería es actividad recreativa."
        },
        {
          titulo: "Licencias y actividades extraordinarias (arts. 29 a 31)",
          columnas: ["Supuesto", "Qué exige", "Artículo"],
          filas: [
            ["Edificio, local o instalación para espectáculos o actividades dirigidos al público en general", "Licencia municipal de apertura, obtenida previamente", "29.1"],
            ["Instalaciones eventuales, portátiles o desmontables", "Licencia especial, previa acreditación de las condiciones de seguridad adecuadas a cada caso", "29.2"],
            ["Contenido de la licencia de actividad y apertura", "La actividad o actividades exactas según las definiciones del Catálogo y el aforo máximo del local", "30.1"],
            ["Local con varias actividades del Catálogo", "Constan todas en la licencia y deben ser compatibles (sin diferencias de horario de cierre, dotaciones ni público autorizado); excepciones: art. 10, DA 4.ª y normativa sectorial", "30.2"],
            ["Local con varios espacios de uso diferenciado", "La licencia expresa el aforo de cada uno", "30.2"],
            ["Otras autorizaciones de la normativa específica", "La licencia no las excluye", "30.3"],
            ["Actividad extraordinaria (distinta, compatible e incluida en el Catálogo)", "Autorización especial previa del Ayuntamiento; solicitud con memoria descriptiva y 15 días de antelación mínima", "31.1"],
            ["Si afecta significativamente a la seguridad, la salubridad o las molestias a terceros", "Certificado de técnico competente sobre la idoneidad del local y las medidas correctoras", "31.2"],
            ["Autorización concedida", "Se notifica al interesado y al Departamento de Presidencia, Justicia e Interior con al menos 2 días naturales de antelación; fija su plazo de validez; reiteradas las solicitudes en el mismo año, el Ayuntamiento puede denegarlas", "31.3"]
          ],
          nota: "«Afecta significativamente», entre otros casos, cuando se altera la ocupación o su distribución respecto a los elementos de evacuación y/o aumenta el nivel de emisión de ruidos o vibraciones (31.2)."
        },
        {
          titulo: "Plazos del tema",
          columnas: ["Trámite", "Plazo", "Cómputo y sujeto", "Artículo"],
          filas: [
            ["Solicitud de autorización especial (actividad extraordinaria)", "15 días de antelación mínima", "Respecto del inicio de la actividad; la empresa titular ante el Ayuntamiento", "31.1"],
            ["Notificación de la autorización", "Al menos 2 días naturales de antelación", "Respecto del inicio; al interesado y al Departamento de Presidencia, Justicia e Interior", "31.3"],
            ["Comunicación de variaciones de los datos a), f) y g) del art. 32.3", "15 días", "Desde que se produjo la variación; la empresa titular del establecimiento al Ayuntamiento", "34.2"],
            ["Inscripción de las modificaciones de los datos del art. 32", "15 días", "Siguientes a su efectiva autorización", "35"],
            ["Inscripción si solo cambian el nombre comercial o la empresa titular del establecimiento", "10 días", "Desde que la empresa comunicó los datos al Ayuntamiento", "35"]
          ],
          nota: "Todo es 15 salvo dos cosas: los 2 días naturales de la notificación y los 10 días de la inscripción cuando solo cambian el nombre comercial o la empresa titular del establecimiento."
        },
        {
          titulo: "Registro de Empresas y Locales (arts. 32 y 33)",
          columnas: ["Elemento", "Sección Primera", "Sección Segunda"],
          filas: [
            ["Qué se inscribe", "Empresas que organicen espectáculos públicos o actividades recreativas sin realizar su actividad en un local determinado", "Locales incluidos en el Catálogo de establecimientos públicos"],
            ["Cuándo y quién", "El Ayuntamiento competente, una vez concedida la autorización administrativa del espectáculo o actividad", "De oficio, el Ayuntamiento competente, una vez obtenida la licencia municipal de apertura"],
            ["Datos mínimos del asiento", "a) Empresa organizadora, domicilio social y teléfono; b) representante legal, en su caso; c) actividad o actividades que justifican la inscripción", "a) Nombre comercial; b) actividades autorizadas según el Catálogo; c) dirección, localidad y código postal; d) fechas de concesión de las licencias de actividad y apertura; e) superficie, aforo máximo y referencia catastral; f) empresa titular de la licencia de apertura; g) empresa titular del establecimiento"],
            ["Formalización", "Formularios electrónicos del Departamento de Presidencia, Justicia e Interior", "Formularios electrónicos del Departamento de Presidencia, Justicia e Interior"]
          ],
          nota: "Con esas inscripciones, la Administración de la Comunidad Foral mantiene un registro general (33.3), y ella y los Ayuntamientos deben tenerlo actualizado (34.1). Empresa titular del establecimiento (32.3.g): quien, sea o no titular de la licencia de apertura, organiza directamente el espectáculo o actividad y asume las responsabilidades frente al público y la Administración."
        }
      ],
      datos: [
        "Objeto (art. 1.1): aprobar el Catálogo de establecimientos, espectáculos públicos y actividades recreativas y regular los Registros de Empresas y Locales, en el marco de la Ley Foral 2/1989, de 13 de marzo, modificada por la Ley Foral 26/2001, de 10 de diciembre.",
        "Ámbito (art. 1.2): espectáculos y actividades recreativas de pública concurrencia y los establecimientos donde se celebren, siempre que se lleven a cabo íntegramente en Navarra; da igual la titularidad (pública o privada), que tengan o no finalidad lucrativa y que se realicen de modo habitual o esporádico.",
        "Establecimientos públicos (art. 3): edificios, locales e instalaciones destinados a espectáculos y actividades recreativas dirigidos al público en general; las definiciones del Catálogo se entienden sin perjuicio de la normativa sectorial aplicable.",
        "Bar (art. 4): lo define el consumo en barra o mostrador; también puede servir en mesas, en el interior o en terrazas previamente autorizadas.",
        "Controlador de presión acústica (arts. 7.4 y 8.5): garantiza en todo momento el nivel sonoro máximo y registra los niveles de emisión sónica de la ambientación musical.",
        "Discoteca y sala de fiesta (art. 9.1): definida por el baile, con una o más pistas; puede ofrecer además actuaciones musicales o de variedades.",
        "Discoteca de juventud (art. 10.2): durante las sesiones, carteles visibles en la entrada con «Sesión juvenil» y «Prohibida la venta y consumo de tabaco y de toda clase de bebidas alcohólicas».",
        "Espacios naturales habilitados (art. 20.j): permiten prácticas deportivas regladas, competiciones oficiales incluidas, o de esparcimiento.",
        "Actividad extraordinaria (art. 31.1): la pide la empresa titular de un local con licencia, para otra actividad distinta pero compatible e incluida en el Catálogo, con una memoria descriptiva de la actividad, las instalaciones y los medios.",
        "Licencia (art. 30.3): no excluye las demás autorizaciones exigidas por la normativa específica.",
        "Comunicación de variaciones (art. 34.2): solo de los datos a) nombre comercial, f) titular de la licencia de apertura y g) empresa titular del establecimiento del art. 32.3."
      ],
      excepciones: [
        "Ambientación: nunca en vivo. Amenización: en vivo, pero solo si es complementaria, sin escenario y sin publicidad específica de los ejecutantes (art. 2).",
        "Bar y cafetería: solo ambientación. Restaurante: ambientación y amenización y, con carácter extraordinario, actuaciones en vivo con ocasión de banquetes, con autorización del Ayuntamiento (art. 6.3).",
        "Bar especial: en ningún caso escenarios ni espacios acotados para baile (art. 7.5). Café-espectáculo: escenario y camerino obligatorios, pero en ningún caso espacios acotados para baile (art. 8.3).",
        "Café-espectáculo: toda su actividad, única y exclusivamente en el interior del local (art. 8.2).",
        "Discoteca: solo autorizable en edificios con estructura independiente respecto a los usos de vivienda (art. 9.4); escenario y camerino, solo si hay actuaciones en directo (art. 9.3).",
        "Discoteca: el servicio de bar y su restauración son para uso exclusivo del público asistente (art. 9.5).",
        "Discoteca de juventud: no es otra licencia, sino una discoteca con licencia que en el horario reglamentario se dedica a 14-18 años; se prohíbe vender, consumir, almacenar o exhibir alcohol y tabaco a la vista o al alcance del público (art. 10.1).",
        "Compatibilidad (art. 30.2): mismo horario de cierre, dotaciones y público autorizado; las únicas excepciones son el art. 10, la DA 4.ª (restaurante y bar especial) y la normativa sectorial de cada actividad.",
        "Certificado técnico de la actividad extraordinaria: solo si afecta significativamente a la seguridad, la salubridad o las molestias a terceros (art. 31.2).",
        "Solicitudes extraordinarias reiteradas en el mismo año: el Ayuntamiento PUEDE denegarlas; no está obligado (art. 31.3).",
        "Sección Segunda: inscripción DE OFICIO tras la licencia de apertura; Sección Primera: tras la autorización del espectáculo o actividad (art. 33).",
        "Plazos del Registro: 15 días como regla (arts. 34.2 y 35); 10 días solo si cambian únicamente el nombre comercial o la empresa titular del establecimiento, contados desde la comunicación al Ayuntamiento (art. 35).",
        "Fuera del alcance oficial (capítulos I a III): las disposiciones adicionales, la derogatoria y las finales. La DA 4.ª se cita en el art. 30.2; los anexos I y II (fichas) están derogados desde el DF 37/2013, aunque la DA 3.ª siga mencionando la «Ficha de Local».",
        "No se estudia en este tema: el horario de los establecimientos, que regula el DF 201/2002, de 23 de septiembre."
      ]
    }
  };
