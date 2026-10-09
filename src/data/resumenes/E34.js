// Resumen del tema E34. Formato: cabecera de src/data/resumenes.js.
export default {
    intro:
      "El DF 253/2019 desarrolla el art. 79.3 de la LFOTU, que creó el Registro de Planeamiento pero no reguló cómo se inscribe en él. Es un tema muy práctico y de trámite: no discute conceptos urbanísticos sino QUÉ se inscribe, QUIÉN lo remite, EN QUÉ PLAZO y EN QUÉ FORMATO. Tiene dos mitades que conviene separar. La primera es registral —naturaleza, contenido, procedimiento de inscripción y ficha—, y ahí lo examinable son los plazos y el silencio. La segunda es técnica —el Título III sobre formato de presentación— y responde al problema que el preámbulo declara abiertamente: la enorme heterogeneidad con que los ayuntamientos venían presentando sus planes. De ahí las exigencias de PDF, resoluciones mínimas en puntos por pulgada, nomenclatura de carpetas y entrega de información vectorial en shapefile, que es lo que tú tendrás que preparar al remitir un instrumento aprobado.",
    bloques: [
      {
        h: "Objeto, naturaleza y contenido del Registro (arts. 1-4)",
        nota:
          "Fija primero qué clase de registro es: PÚBLICO, de carácter ADMINISTRATIVO, custodiado y gestionado por el DEPARTAMENTO competente en ordenación del territorio, no por los ayuntamientos. Su finalidad declarada es garantizar la transparencia y la publicidad en el ejercicio de la función pública urbanística. Y su contenido son DOS PIEZAS que se preguntan juntas: una BASE DE DATOS informatizada con las fichas de inscripción, y un ARCHIVO DOCUMENTAL con copia digital de los documentos de cada instrumento.",
        items: [
          "Art. 1 — triple objeto: el CONTENIDO DOCUMENTAL Y FORMATO de presentación de los instrumentos para su tramitación y posterior acceso al Registro · el PROCEDIMIENTO DE INSCRIPCIÓN de los instrumentos aprobados definitivamente, así como de los de gestión y urbanización · y el RÉGIMEN DE CONSULTA del Registro",
          "Art. 2 — ÁMBITO: todos los instrumentos de ordenación territorial y de planeamiento urbanístico municipal que se tramiten en Navarra, así como los instrumentos de GESTIÓN Y URBANIZACIÓN que desarrollen los Planes y Proyectos Sectoriales de Incidencia Supramunicipal aprobados por el Departamento",
          "Art. 3.1 — NATURALEZA: registro PÚBLICO, de carácter ADMINISTRATIVO, custodiado y gestionado por el DEPARTAMENTO competente en materia de ordenación del territorio y urbanismo, con el objeto de garantizar la transparencia y la publicidad en el ejercicio de la función pública urbanística. Debe inscribirse igualmente CUALQUIER RESOLUCIÓN POSTERIOR, ADMINISTRATIVA O JUDICIAL, que afecte a su contenido",
          "Art. 3.2 — ACCESO: cualquier persona o entidad, pública o privada, puede acceder por CONSULTA PRESENCIAL en las oficinas de la unidad orgánica competente o de forma TELEMÁTICA. Los certificados de los asientos los autoriza el FUNCIONARIO HABILITADO al efecto; también pueden emitirse notas informativas y obtenerse copias, SIN QUE SU IMPORTE EXCEDA DEL COSTE ADMINISTRATIVO",
          "Art. 4 — CONTENIDO, dos piezas: una BASE DE DATOS INFORMATIZADA que recoge las fichas de inscripción del art. 7 · y un ARCHIVO DOCUMENTAL formado por copia en SOPORTE DIGITAL de los documentos de cada instrumento",
        ],
      },
      {
        h: "Procedimiento de inscripción (arts. 5-6)",
        nota:
          "Aquí están los datos que más se preguntan. La inscripción es OBLIGATORIA y tiene tres vías de iniciación según quién apruebe definitivamente: de oficio por el Departamento, a instancia del ayuntamiento, o a instancia del promotor particular cuando el instrumento se aprobó POR SILENCIO. Y hay tres plazos que conviene fijar en cadena: DIEZ DÍAS para que el ayuntamiento remita la documentación tras la aprobación definitiva · DIEZ DÍAS para subsanar si la documentación está incompleta, con posible denegación del asiento · y TREINTA DÍAS para practicar el asiento, con SILENCIO POSITIVO si se agotan.",
        items: [
          "Art. 5.1 — QUÉ se inscribe: los instrumentos de ordenación territorial, de gestión y de urbanización que los desarrollen, y los de planeamiento urbanístico municipal, UNA VEZ APROBADOS DEFINITIVAMENTE. También deben inscribirse las MODIFICACIONES introducidas en cualquiera de ellos",
          "Art. 5.2 — la inscripción es OBLIGATORIA y puede producirse por tres vías: a) DE OFICIO por el Departamento, respecto de los instrumentos de ordenación del territorio, de gestión y urbanización, y de los de planeamiento municipal cuya aprobación definitiva competa a la Comunidad Foral · b) A INSTANCIA DEL AYUNTAMIENTO, respecto de aquellos cuya aprobación definitiva le corresponda · c) A INSTANCIA DE LAS PERSONAS PROMOTORAS de instrumentos de iniciativa particular APROBADOS POR SILENCIO ADMINISTRATIVO",
          "Art. 5.2.b — PLAZO DEL AYUNTAMIENTO: debe remitir la documentación del art. 9 en los DIEZ DÍAS SIGUIENTES a la aprobación definitiva del instrumento",
          "Art. 5.2.c — en el caso de aprobación por silencio a instancia del promotor, la persona responsable del registro REQUERIRÁ AL AYUNTAMIENTO para que remita la documentación en el plazo máximo de DIEZ DÍAS",
          "Art. 6.1 — inscripción DE OFICIO: el Departamento crea la ficha, deposita la documentación en el archivo, emite CERTIFICACIÓN REGISTRAL con el número de registro asignado y la indicación del depósito, y da traslado de ella a los ayuntamientos sobre los que incida el instrumento",
          "Art. 6.2.a — DOCUMENTACIÓN INCOMPLETA: si del examen se deduce ausencia o deficiencia, la unidad responsable requerirá al ayuntamiento para que aporte los datos o documentos necesarios en un plazo máximo de DIEZ DÍAS, PUDIENDO DENEGAR, en caso de incumplimiento, la práctica del asiento",
          "Art. 6.2.b — PLAZO Y SILENCIO: con la documentación completa, el asiento se practica en el plazo máximo de TREINTA DÍAS. Transcurrido dicho plazo sin haberse practicado, SE ENTENDERÁ ESTIMADA la solicitud de inscripción",
          "Art. 6.2.d — la inscripción se realiza SIN PERJUICIO DEL CONTROL de los instrumentos que el Departamento desarrolla conforme a la LFOTU y a la Ley Foral de Administración Local; del resultado del informe de control se DEJARÁ CONSTANCIA en la ficha de inscripción",
        ],
      },
      {
        h: "Fichas de inscripción y modificación de datos (arts. 7-8)",
        nota:
          "La ficha es el asiento propiamente dicho y tiene seis apartados. Del contenido interesa que recoge el CARÁCTER ESTRUCTURANTE O PORMENORIZADO de las determinaciones —lo que conecta directamente con el art. 49 de la LFOTU— y toda la cadena de fechas de tramitación, desde la aprobación inicial hasta la publicación de la normativa. El art. 8 impone una obligación permanente a los ayuntamientos que conviene tener presente: comunicar al Registro cualquier acto o resolución posterior con trascendencia registral que afecte al contenido del documento aprobado, incluidas las sentencias y las medidas cautelares.",
        items: [
          "Art. 7 — SEIS apartados de la ficha: 1) IDENTIFICACIÓN — tipo de instrumento, CARÁCTER ESTRUCTURANTE O PORMENORIZADO de sus determinaciones, y descripción del objeto · 2) LOCALIZACIÓN — municipio o municipios, concejo, entidad de población, ámbito territorial, urbanístico o normativo, y emplazamiento toponímico, catastral o postal · 3) PERSONAS PROMOTORAS — iniciativa pública o privada y nombre o razón social · 4) TRAMITACIÓN · 5) VIGENCIA · 6) FECHA Y NÚMERO DE REGISTRO",
          "Art. 7.4 — TRAMITACIÓN: fecha de declaración del PSIS o de aprobación inicial, con su publicación en el BON y en su caso en prensa · fecha de aprobación PROVISIONAL · fecha de aprobación DEFINITIVA y de su publicación en el BON · fecha de publicación en el BON de la NORMATIVA ESCRITA Y LA DOCUMENTACIÓN GRÁFICA, con referencia al anuncio y su enlace web · y las conclusiones del informe de control del art. 6.2.d. En todos los casos con señalamiento de la Administración actuante",
          "Art. 7.5 — VIGENCIA: el instrumento consta como VIGENTE o NO VIGENTE, y esta última situación abarca tanto lo PENDIENTE DE PUBLICACIÓN como lo que ha PERDIDO SU VIGENCIA por sentencias, resoluciones administrativas u otros actos. En observaciones se recoge el acuerdo, sentencia o resolución que afecte a la vigencia o al contenido",
          "Art. 8 — CINCO CAUSAS de modificación de los datos inscritos: a) la efectiva PUBLICACIÓN en el BON del acuerdo de aprobación y de la normativa · b) SUBSANACIÓN DE ERRORES MATERIALES advertidos en la propia inscripción · c) SENTENCIAS judiciales o resoluciones administrativas sobre los instrumentos inscritos, TRAS ADQUIRIR FIRMEZA ADMINISTRATIVA · d) MEDIDAS CAUTELARES adoptadas por jueces y tribunales que afecten a la aplicación de los instrumentos · e) cualesquiera otros actos, acuerdos y resoluciones que, a juicio de la unidad responsable, afecten a los instrumentos",
          "Art. 8 — las modificaciones se realizan DE OFICIO O A INSTANCIA DE PARTE por la unidad responsable, y los AYUNTAMIENTOS DEBEN COMUNICAR al Registro la concurrencia de cualquiera de esas circunstancias, así como cualquier acto o resolución posterior a la aprobación definitiva con trascendencia registral en que hubieran intervenido. La unidad responsable DA CUENTA a los ayuntamientos afectados de cualquier rectificación de la ficha",
        ],
      },
      {
        h: "Contenido y formato de los expedientes (arts. 9-10 y Anexo)",
        nota:
          "El Título III es el que aplicarás materialmente al preparar un envío, y sus exigencias son de detalle: todo en PDF salvo lo vectorial, páginas numeradas con referencia al total, cada archivo del documento técnico DILIGENCIADO CON FIRMA DIGITAL que certifique su coincidencia con el documento aprobado, y propiedades que permitan imprimir, copiar, extraer y firmar. Las dos resoluciones mínimas se preguntan por contraste — 200 PPP para lo escrito y administrativo, 300 PPP para lo gráfico — igual que la exigencia de que las hojas gráficas incorporen las COORDENADAS GEOGRÁFICAS DE SUS CUATRO ESQUINAS. Y el dato de cierre del Anexo: la información vectorial se entrega en SHAPEFILE.",
        items: [
          "Art. 9.1 — el ayuntamiento remite COPIA DEL EXPEDIENTE COMPLETO en formato digital, organizada en cinco apartados: a) ÍNDICE de documentos en pdf · b) DOCUMENTACIÓN ADMINISTRATIVA · c) DOCUMENTO TÉCNICO completo con las diligencias que garanticen su autenticidad y la fecha de aprobación · d) DOCUMENTACIÓN VECTORIAL en los supuestos del art. 10 y el Anexo · e) TEXTO DE LA SENTENCIA o auto judicial o resolución administrativa posterior que afecte a su contenido",
          "Documentación ADMINISTRATIVA (art. 9.1.b): certificados de aprobación inicial, provisional y definitiva · justificante de la PUBLICACIÓN EN PRENSA Y EN EL BON del acuerdo de aprobación inicial · INFORMES MUNICIPALES jurídicos y técnicos emitidos por profesionales de la administración local actuante o de los órganos de los arts. 16 y 18.2 de la LFOTU · informes de otros órganos · y ALEGACIONES presentadas con los informes y resoluciones recaídas sobre ellas",
          "Documento TÉCNICO (art. 9.1.c) — documentación INFORMATIVA Y JUSTIFICATIVA: memoria informativa y justificativa, planos de información, PLAN DE PARTICIPACIÓN, resumen ejecutivo, estudio ambiental estratégico, MEMORIA DE VIABILIDAD Y SOSTENIBILIDAD ECONÓMICA, ESTUDIO DE MOVILIDAD GENERADA, estudio sobre la adecuación de vivienda protegida, sistema de indicadores, plan de atracción y ordenación comercial y programa de desarrollo y ejecución",
          "Documento TÉCNICO — documentación NORMATIVA: planos de ordenación, normas urbanísticas y CATÁLOGO DE PROTECCIONES",
          "Art. 9.2 — FORMATO: todo en PDF salvo lo vectorial. Páginas NUMERADAS con referencia al total de páginas del documento. Cada archivo del documento técnico DILIGENCIADO MEDIANTE FIRMA DIGITAL certificando que coincide fielmente con el documento aprobado. Las propiedades deben permitir IMPRESIÓN, COPIA, EXTRACCIÓN Y FIRMA",
          "Art. 9.2 — NOMENCLATURA del directorio principal: nombre del municipio —en afección supramunicipal, el primero por orden alfabético seguido del símbolo #—, la abreviatura o acrónimo del tipo de instrumento y una referencia al ámbito cuando sea distinto del término municipal, con los datos separados por GUION BAJO",
          "Art. 9.2 — TRES CARPETAS y sus resoluciones: a) DOCUMENTACIÓN ADMINISTRATIVA en pdf, mínimo 200 PPP · b) DOCUMENTO TÉCNICO en pdf, con documentación ESCRITA a 200 PPP mínimo y documentación GRÁFICA a 300 PPP mínimo · c) INFORMACIÓN GEOGRÁFICA VECTORIAL",
          "La documentación técnica GRÁFICA debe incorporar, cuando proceda, las COORDENADAS GEOGRÁFICAS DE SUS CUATRO ESQUINAS en el sistema geodésico de referencia del Anexo",
          "Art. 10 — la documentación de los instrumentos que afecten a determinaciones de ORDENACIÓN ESTRUCTURANTE incluirá los conjuntos de datos de INFORMACIÓN GEOGRÁFICA VECTORIAL según los modelos, formatos y sistema geodésico del Anexo",
          "ANEXO — la información geográfica vectorial se entregará en formato SHAPEFILE",
          "Art. 9.3 — los instrumentos cuya aprobación corresponda a la Comunidad Foral deben presentarse igualmente en formato digital y con el mismo conjunto de documentación",
        ],
      },
      {
        h: "Publicidad, protección de datos y disposiciones (arts. 11-12)",
        nota:
          "El cierre del decreto tiene una regla de reparto de responsabilidad que conviene retener: son los AYUNTAMIENTOS Y LAS PERSONAS PROMOTORAS quienes deben indicar EXPRESAMENTE qué parte de la información suministrada tiene carácter confidencial, y la unidad responsable del Registro se limita a VERIFICAR el cumplimiento. No es el Registro quien decide qué es confidencial. De las disposiciones, la transitoria marca la frontera temporal: lo que estaba en tramitación debía adaptarse antes de su aprobación definitiva, y lo ya aprobado mantiene sus inscripciones tal como se practicaron.",
        items: [
          "Art. 11 — PUBLICIDAD REGISTRAL: se hace efectiva mediante consulta directa en las dependencias designadas, mediante copias expedidas de los documentos obrantes en el Registro, u otras formas de la legislación urbanística. El derecho de acceso y obtención de copias se ejerce conforme a la LEGISLACIÓN GENERAL DE PROCEDIMIENTO ADMINISTRATIVO COMÚN. Debe facilitarse además el acceso y consulta TELEMÁTICOS de la documentación técnica a través de los portales que disponga el Gobierno de Navarra",
          "Art. 12 — PROTECCIÓN DE DATOS: los AYUNTAMIENTOS Y LAS PERSONAS PROMOTORAS deberán indicar DE FORMA EXPRESA aquella parte de la información suministrada que tiene carácter CONFIDENCIAL; la unidad responsable del Registro VERIFICA el cumplimiento",
          "DA ÚNICA — los ayuntamientos PODRÁN, DE MANERA VOLUNTARIA, remitir los instrumentos de GESTIÓN Y DE URBANIZACIÓN cuya aprobación definitiva les corresponda para su inscripción directa en el Registro",
          "DT ÚNICA — los instrumentos EN TRAMITACIÓN a la entrada en vigor debían adaptarse a estas prescripciones CON CARÁCTER PREVIO A SU APROBACIÓN DEFINITIVA. El decreto NO se aplica a los ya APROBADOS DEFINITIVAMENTE, que mantienen sus inscripciones en las condiciones en que fueron practicadas",
          "DF PRIMERA — se faculta al titular del Departamento para MODIFICAR EL ANEXO y adaptarlo a nuevas necesidades, tecnologías o estándares del OPEN GEOSPATIAL CONSORTIUM, o a disposiciones de rango superior",
          "Encaje normativo: el Registro fue creado por el art. 79.3 de la LFOTU, y este decreto lo desarrolla al amparo de su disposición final primera; el derecho de acceso sin acreditar interés procede del art. 8 de la propia LFOTU",
        ],
      },
    ],
    claves: [
      "Registro PÚBLICO y ADMINISTRATIVO, custodiado y gestionado por el DEPARTAMENTO, no por los ayuntamientos",
      "Dos piezas: BASE DE DATOS con las fichas + ARCHIVO DOCUMENTAL en soporte digital (art. 4)",
      "Se inscribe lo APROBADO DEFINITIVAMENTE y también sus MODIFICACIONES, y toda resolución posterior que afecte al contenido",
      "Tres vías de iniciación: de oficio · a instancia del ayuntamiento · a instancia del promotor si se aprobó POR SILENCIO",
      "El ayuntamiento remite la documentación en los DIEZ DÍAS siguientes a la aprobación definitiva",
      "Documentación incompleta: DIEZ DÍAS para subsanar, con posible DENEGACIÓN del asiento",
      "Plazo para practicar el asiento: TREINTA DÍAS, con SILENCIO POSITIVO si se agota (art. 6.2.b)",
      "La certificación registral recoge el NÚMERO DE REGISTRO y se comunica a los ayuntamientos afectados",
      "La ficha recoge el carácter ESTRUCTURANTE O PORMENORIZADO de las determinaciones (art. 7.1.b)",
      "Cinco causas de modificación de la ficha; las sentencias solo TRAS ADQUIRIR FIRMEZA (art. 8.c)",
      "Los ayuntamientos deben COMUNICAR toda resolución posterior con trascendencia registral",
      "Todo en PDF salvo lo vectorial; páginas numeradas y archivos DILIGENCIADOS con firma digital",
      "Resoluciones mínimas: 200 PPP administrativa y escrita · 300 PPP gráfica",
      "La documentación gráfica incorpora las COORDENADAS de sus CUATRO ESQUINAS",
      "Lo vectorial solo se exige en instrumentos que afecten a ORDENACIÓN ESTRUCTURANTE (art. 10)",
      "Formato de la información vectorial: SHAPEFILE (Anexo)",
      "Directorio: municipio + acrónimo del instrumento + ámbito, separados por GUION BAJO; # si es supramunicipal",
      "La confidencialidad la señalan AYUNTAMIENTOS Y PROMOTORES; el Registro solo VERIFICA (art. 12)",
      "Los instrumentos de gestión y urbanización municipales se inscriben de forma VOLUNTARIA (DA única)",
      "El decreto no se aplica a lo ya aprobado definitivamente a su entrada en vigor (DT única)",
    ],
     "memorizacion": {
  "tablas": [
    {
      "titulo": "Plazos de inscripción en el Registro de Planeamiento de Navarra (Decreto Foral 253/2019)",
      "columnas": ["Supuesto", "Plazo", "Inicio del cómputo", "Órgano obligado"],
      "filas": [
        ["Instrumentos de ordenación territorial, de gestión, de urbanización y de planeamiento municipal cuya aprobación definitiva compete a la Administración de la Comunidad Foral", "No se fija plazo; inscripción de oficio", "No aplica", "Departamento competente en materia de ordenación del territorio y urbanismo"],
        ["Instrumentos de ordenación territorial y de planeamiento municipal cuya aprobación definitiva compete al ayuntamiento", "10 días", "Desde la aprobación definitiva del instrumento", "Ayuntamiento correspondiente"],
        ["Instrumentos promovidos por iniciativa particular aprobados por silencio administrativo", "10 días", "Desde el requerimiento de la persona responsable del registro al ayuntamiento", "Ayuntamiento correspondiente"]
      ],
      "nota": "Artículos 5.2.a), 5.2.b) y 5.2.c) del Decreto Foral 253/2019, de 16 de octubre. El plazo de 10 días es de carácter máximo."
    },
    {
      "titulo": "Resoluciones mínimas y formatos de la documentación digital (Decreto Foral 253/2019)",
      "columnas": ["Tipo de documentación", "Formato", "Resolución mínima", "Observaciones"],
      "filas": [
        ["Documentación Administrativa", "PDF", "200 ppp", "Incluida en carpeta específica"],
        ["Documentación Escrita (Documento Técnico)", "PDF", "200 ppp", "Incluida en carpeta Documentación Escrita"],
        ["Documentación Gráfica (Documento Técnico)", "PDF", "300 ppp", "Coordenadas geográficas de las 4 esquinas en sistema ETRS89 UTM 30N"],
        ["Información Geográfica Vectorial", "Shapefile", "No aplica", "Cada conjunto de datos en fichero independiente; nombre precedido por CODSIUN"]
      ],
      "nota": "Artículos 9.2 y 10, y Anexo del Decreto Foral 253/2019. ppp = puntos por pulgada. El sistema geodésico de referencia es ETRS89 UTM huso 30 norte (EPSG:25830)."
    },
    {
      "titulo": "Conjuntos de datos de información geográfica vectorial (Anexo del Decreto Foral 253/2019)",
      "columnas": ["Nº", "Denominación del conjunto de datos", "Nombre del fichero", "Atributo identificativo principal"],
      "filas": [
        ["1", "Ámbito de la actuación", "CODSIUN_ambito", "CODSIUN (Número entero, 6 dígitos)"],
        ["2", "Unidades espaciales", "CODSIUN_udespacial", "UESPACIAL (Texto, 6; formato SE-001 a SE-999)"],
        ["3", "Clase de suelo", "CODSIUN_clase", "CLASESUELO (Suelo urbano, urbanizable, no urbanizable)"],
        ["4", "Categorías y subcategorías de suelo no urbanizable", "CODSIUN_snu", "CATEGSNU (Protección, Preservación) y SBCATEGSNU"],
        ["5", "Sectores de suelo urbanizable", "CODSIUN_sector", "SECTORSU (Texto, 6; formato S-001 a S-999)"],
        ["6", "Sistemas generales", "CODSIUN_sg", "SIST_GEN (Texto, 6; formato SG-001 a SG-999)"]
      ],
      "nota": "Anexo del Decreto Foral 253/2019. El atributo CODSIUN del conjunto de datos 1 precede el nombre de todos los ficheros. La geometría de todos los conjuntos es poligonal, aceptando multiparte y polígonos isla."
    },
    {
      "titulo": "Causas de modificación de la ficha de inscripción (Artículo 8 del Decreto Foral 253/2019)",
      "columnas": ["Causa", "Descripción", "Iniciativa"],
      "filas": [
        ["Publicación en BON", "Efectiva publicación del acuerdo de aprobación y de la normativa correspondiente", "De oficio o a instancia de parte"],
        ["Error material", "Subsanación de errores materiales advertidos en la propia inscripción", "De oficio o a instancia de parte"],
        ["Sentencia o resolución administrativa", "Sentencias judiciales o resoluciones administrativas firmes que recaigan sobre los instrumentos", "De oficio o a instancia de parte"],
        ["Medida cautelar", "Medidas cautelares adoptadas por jueces y tribunales que afecten a la aplicación de los instrumentos", "De oficio o a instancia de parte"],
        ["Otros actos o resoluciones", "Cualesquiera otros actos, acuerdos y resoluciones que, a juicio de la unidad orgánica responsable, afecten a los instrumentos", "De oficio o a instancia de parte"]
      ],
      "nota": "Artículo 8 del Decreto Foral 253/2019. Los ayuntamientos tienen la obligación de comunicar al Registro cualquier acto o resolución posterior a la aprobación definitiva con trascendencia registral."
    }
  ],
  "datos": [
    "El Registro de Planeamiento de Navarra es un registro público, de carácter administrativo, custodiado y gestionado por el Departamento competente en materia de ordenación del territorio y urbanismo (art. 3.1 DF 253/2019).",
    "El Registro consta de una base de datos informatizada con las fichas de inscripción de cada instrumento y de un archivo documental con copia de los documentos en soporte digital (art. 4 DF 253/2019).",
    "La inscripción en el Registro es obligatoria para los instrumentos de ordenación territorial, de gestión y de urbanización que los desarrollen, así como para los instrumentos de planeamiento urbanístico municipal, una vez aprobados definitivamente (art. 5.1 DF 253/2019).",
    "Cuando la documentación remitida por el ayuntamiento se encuentre completa, la unidad responsable del Registro practicará el asiento de inscripción en el plazo máximo de 30 días; transcurrido dicho plazo sin que se haya practicado, se entenderá estimada la solicitud de inscripción (art. 6.2.b) DF 253/2019).",
    "Si del examen de la documentación se deduce ausencia o deficiencia, la unidad responsable del registro requerirá al ayuntamiento para que aporte datos o documentos en un plazo máximo de 10 días, pudiendo denegar la inscripción en caso de incumplimiento (art. 6.2.a) DF 253/2019).",
    "Los ayuntamientos podrán, de manera voluntaria, remitir los instrumentos de gestión y de urbanización cuya aprobación definitiva les corresponda para su inscripción directa en el Registro (Disposición Adicional Única DF 253/2019).",
    "Los instrumentos en tramitación a la entrada en vigor del decreto deberán adaptarse con carácter previo a su aprobación definitiva a las prescripciones del mismo (Disposición Transitoria Única DF 253/2019).",
    "Los instrumentos aprobados definitivamente antes de la entrada en vigor del decreto no se ven afectados por el mismo y mantienen las inscripciones en las condiciones en que fueron practicadas (Disposición Transitoria Única DF 253/2019).",
    "El sistema geodésico de referencia de las entidades gráficas es el ETRS89, proyección UTM huso 30 norte, codificado como EPSG:25830 (Anexo DF 253/2019).",
    "El conjunto de datos 3 (Clase de suelo) debe completar la totalidad del ámbito del instrumento, garantizando consistencia geométrica con el conjunto 1 (art. Anexo DF 253/2019).",
    "Los recintos o partes de recinto que deban ajustarse a las líneas del catastro oficial de Navarra deberán emplear la línea exacta de dicha capa de información y no volverá a digitalizarse; solo se podrán utilizar líneas no coincidentes con catastro en el lugar geográfico donde se produzca una segregación (Normas de elaboración, Anexo DF 253/2019).",
    "En el conjunto de datos 1 (Ámbito de la actuación), el atributo MUNICIPIOS es de tipo texto con tamaño 255 y recoge los nombres de los municipios afectados separados por comas (Anexo DF 253/2019).",
    "En el conjunto de datos 5 (Sectores de suelo urbanizable), el atributo EDIF_MAX es de tipo doble con precisión 2 y tamaño 19, y expresa la edificabilidad máxima como cuantía en metros cuadrados de superficie construida máxima (Anexo DF 253/2019)."
  ],
  "excepciones": [
    "La inscripción de oficio por el Departamento compete a los instrumentos de ordenación del territorio, de gestión y de urbanización que los desarrollen, y a los instrumentos de planeamiento municipal cuya aprobación definitiva corresponda a la Administración de la Comunidad Foral; en cambio, para los instrumentos cuya aprobación definitiva corresponda al ayuntamiento, la inscripción se realiza a instancia de este, que debe remitir la documentación en 10 días (art. 5.2.a y b DF 253/2019).",
    "En los instrumentos promovidos por iniciativa particular aprobados por silencio administrativo, la inscripción se realiza a instancia de las personas promotoras, y es la persona responsable del registro quien requiere al ayuntamiento para que remita la documentación en 10 días; este supuesto es distinto del de los instrumentos cuya aprobación definitiva es municipal, donde es el propio ayuntamiento quien debe remitirla (art. 5.2.c DF 253/2019).",
    "Cuando la documentación remitida por el ayuntamiento está completa, el plazo para practicar el asiento de inscripción es de 30 días y el silencio es estimatorio; en cambio, cuando se requiere al ayuntamiento para subsanar deficiencias, el plazo es de 10 días y el incumplimiento puede dar lugar a la denegación de la inscripción (art. 6.2.a y b DF 253/2019).",
    "La documentación administrativa y la documentación escrita deben entregarse en PDF con una resolución mínima de 200 ppp; la documentación gráfica debe entregarse en PDF con una resolución mínima de 300 ppp e incorporar las coordenadas geográficas de las 4 esquinas (art. 9.2 DF 253/2019).",
    "Los instrumentos en tramitación a la entrada en vigor del decreto deben adaptarse con carácter previo a su aprobación definitiva; sin embargo, los instrumentos ya aprobados definitivamente a esa fecha no se ven afectados y mantienen sus inscripciones en las condiciones en que fueron practicadas (Disposición Transitoria Única DF 253/2019).",
    "El planeamiento a desarrollar debe ajustarse a la delimitación oficial del ámbito; solo podrá haber desajuste si la nueva ordenación requiere modificar el ámbito, y únicamente en las parcelas que requieran ser segregadas o anexionadas (Criterios específicos, conjunto de datos 1, Anexo DF 253/2019).",
    "En el conjunto de datos 4 (Categorías y subcategorías de suelo no urbanizable), los valores de CATEGSNU, SBCATEGSNU y COD_CS pueden superponerse, reflejándose bajo la forma valor 1 + valor 2 (signo más, separado por un espacio a cada lado); esta concatenación es específica de este conjunto y no se aplica a otros conjuntos de datos (Anexo DF 253/2019)."
  ]
},
  };
