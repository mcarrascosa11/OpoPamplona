// Resumen del tema E34. Formato: cabecera de src/data/resumenes.js.
// Revisado el 02-11-2026 contra el texto vigente el 21-05-2026 (LexNavarra r=52066; BON n.º 216, de 31-10-2019).
// La única modificación es la de la disposición final segunda (entrada en vigor), hecha por la disposición
// adicional primera del Decreto-ley Foral 2/2020, de 25 de marzo (BON n.º 65, de 26-03-2020; LexNavarra
// r=52539), y el TXT ya la recoge. El art. 79 del DFL 1/2017, que regula el Registro, no se ha modificado
// (BOE-A-2017-12907, pestaña «Análisis»). Nada posterior al 21-05-2026.
export default {
    intro:
      "El DF 253/2019 desarrolla el Registro de Planeamiento de Navarra, regulado hoy en el art. 79 del DFL 1/2017 (LFOTU), cuyo procedimiento de inscripción carecía, según el preámbulo, de regulación específica. Es un tema muy práctico y de trámite: no discute conceptos urbanísticos sino QUÉ se inscribe, QUIÉN lo remite, EN QUÉ PLAZO y EN QUÉ FORMATO. Tiene dos mitades que conviene separar. La primera es registral —naturaleza, contenido, procedimiento de inscripción y ficha—, y ahí lo examinable son los plazos y el silencio. La segunda es técnica —el Título III sobre el contenido de los expedientes y el Anexo de formatos— y responde al problema que el preámbulo declara abiertamente: la gran heterogeneidad de los instrumentos, elaborados con criterios muy dispares. De ahí las exigencias de PDF, resoluciones mínimas en puntos por pulgada, nomenclatura de carpetas y entrega de información vectorial en shapefile, que es lo que tú tendrás que preparar al remitir un instrumento aprobado. Texto vigente: el publicado en el BON n.º 216, de 31-10-2019, sin más cambio que el de su entrada en vigor (DF 2.ª, en la redacción del Decreto-ley Foral 2/2020).",
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
          "Art. 5.2 — la inscripción es OBLIGATORIA y puede producirse por tres vías: a) DE OFICIO por el Departamento, respecto de los instrumentos de ordenación del territorio, de gestión y urbanización que los desarrollen, y de los de planeamiento municipal cuya aprobación definitiva competa a la Comunidad Foral · b) A INSTANCIA DEL AYUNTAMIENTO, respecto de aquellos cuya aprobación definitiva le corresponda · c) A INSTANCIA DE LAS PERSONAS PROMOTORAS de instrumentos de iniciativa particular APROBADOS POR SILENCIO ADMINISTRATIVO",
          "Art. 5.2.b — PLAZO DEL AYUNTAMIENTO: debe remitir la documentación del art. 9 en los DIEZ DÍAS SIGUIENTES a la aprobación definitiva del instrumento",
          "Art. 5.2.c — en el caso de aprobación por silencio a instancia del promotor, la persona responsable del registro REQUERIRÁ AL AYUNTAMIENTO para que remita la documentación en el plazo máximo de DIEZ DÍAS",
          "Art. 6.1 — inscripción DE OFICIO: el Departamento crea la ficha, deposita la documentación en el archivo, emite CERTIFICACIÓN REGISTRAL con el número de registro asignado y la indicación del depósito, y da traslado de ella a los ayuntamientos sobre los que incida el instrumento",
          "Art. 6.2.a — DOCUMENTACIÓN INCOMPLETA: si del examen se deduce ausencia o deficiencia, la unidad responsable requerirá al ayuntamiento para que aporte los datos o documentos necesarios en un plazo máximo de DIEZ DÍAS, PUDIENDO DENEGAR, en caso de incumplimiento, la práctica del asiento",
          "Art. 6.2.b — PLAZO Y SILENCIO: con la documentación completa, el asiento se practica en el plazo máximo de TREINTA DÍAS. Transcurrido dicho plazo sin haberse practicado, SE ENTENDERÁ ESTIMADA la solicitud de inscripción",
          "Art. 6.2.c — realizada la inscripción, CERTIFICACIÓN REGISTRAL con el número de registro asignado y la indicación del depósito del instrumento, que se COMUNICA A LOS AYUNTAMIENTOS AFECTADOS; la ficha se incluye en la base de datos del art. 4",
          "Art. 6.2.d — la inscripción se realiza SIN PERJUICIO DEL CONTROL de los instrumentos que el Departamento desarrolla conforme a la LFOTU y a la Ley Foral de Administración Local; del resultado del informe de control se DEJARÁ CONSTANCIA en la ficha de inscripción",
        ],
      },
      {
        h: "Fichas de inscripción y modificación de datos (arts. 7-8)",
        nota:
          "La ficha es el asiento propiamente dicho y tiene seis apartados. Del contenido interesa que recoge el CARÁCTER ESTRUCTURANTE O PORMENORIZADO de las determinaciones —lo que conecta directamente con el art. 49 de la LFOTU— y toda la cadena de fechas de tramitación, desde la aprobación inicial hasta la publicación de la normativa. El art. 8 impone una obligación permanente a los ayuntamientos que conviene tener presente: comunicar al Registro cualquier acto o resolución posterior con trascendencia registral que afecte al contenido del documento aprobado, incluidas las sentencias y las medidas cautelares.",
        items: [
          "Art. 7 — SEIS apartados de la ficha: 1) IDENTIFICACIÓN — tipo de instrumento, CARÁCTER ESTRUCTURANTE O PORMENORIZADO de sus determinaciones, y descripción del objeto · 2) LOCALIZACIÓN — municipio o municipios, concejo, entidad de población, ámbito territorial, urbanístico o normativo, y emplazamiento toponímico, catastral o postal · 3) PERSONAS PROMOTORAS — iniciativa pública o privada y nombre o razón social · 4) TRAMITACIÓN · 5) VIGENCIA · 6) FECHA Y NÚMERO DE REGISTRO",
          "Art. 7.4 — TRAMITACIÓN: fecha de declaración del PSIS o de aprobación inicial, con su publicación en el BON y en su caso en prensa · fecha de aprobación PROVISIONAL · fecha de aprobación DEFINITIVA y de su publicación en el BON —estas tres, con señalamiento de la Administración actuante— · fecha de publicación en el BON de la NORMATIVA ESCRITA Y LA DOCUMENTACIÓN GRÁFICA, con referencia al anuncio y su enlace web · y las conclusiones del informe de control del art. 6.2.d",
          "Art. 7.5 — VIGENCIA: el instrumento consta como VIGENTE o NO VIGENTE, y esta última situación abarca tanto lo PENDIENTE DE PUBLICACIÓN como lo que ha PERDIDO SU VIGENCIA por sentencias, resoluciones administrativas u otros actos. En observaciones se recoge el acuerdo, sentencia o resolución que afecte a la vigencia o al contenido",
          "Art. 8 — CINCO CAUSAS de modificación de los datos inscritos: a) la efectiva PUBLICACIÓN en el BON del acuerdo de aprobación y de la normativa · b) SUBSANACIÓN DE ERRORES MATERIALES advertidos en la propia inscripción · c) SENTENCIAS judiciales o resoluciones administrativas sobre los instrumentos inscritos, TRAS ADQUIRIR FIRMEZA ADMINISTRATIVA · d) MEDIDAS CAUTELARES adoptadas por jueces y tribunales que afecten a la aplicación de los instrumentos · e) cualesquiera otros actos, acuerdos y resoluciones que, a juicio de la unidad responsable, afecten a los instrumentos",
          "Art. 8 — el DEPARTAMENTO mantiene actualizado el Registro. Las modificaciones se realizan DE OFICIO O A INSTANCIA DE PARTE por la unidad responsable, y los AYUNTAMIENTOS DEBEN COMUNICAR al Registro la concurrencia de cualquiera de esas circunstancias; además tienen la OBLIGACIÓN de comunicar cualquier acto o resolución posterior a la aprobación definitiva con trascendencia registral en que hubieran intervenido. La unidad responsable DA CUENTA a los ayuntamientos afectados de cualquier rectificación de la ficha",
        ],
      },
      {
        h: "Contenido y formato de los expedientes (arts. 9-10 y Anexo)",
        nota:
          "El Título III es el que aplicarás materialmente al preparar un envío, y sus exigencias son de detalle: todo en PDF salvo lo vectorial, páginas numeradas con referencia al total, cada archivo del documento técnico DILIGENCIADO CON FIRMA DIGITAL que certifique su coincidencia con el documento aprobado, y propiedades que permitan imprimir, copiar, extraer y firmar. Las dos resoluciones mínimas se preguntan por contraste — 200 PPP para lo escrito y administrativo, 300 PPP para lo gráfico — igual que la exigencia de que las hojas gráficas incorporen, cuando proceda, las COORDENADAS GEOGRÁFICAS DE SUS CUATRO ESQUINAS. Y el dato de cierre del Anexo: la información vectorial se entrega en SHAPEFILE.",
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
          "ANEXO — la información geográfica vectorial se entregará en formato SHAPEFILE: SEIS CONJUNTOS DE DATOS (ámbito de la actuación, unidades espaciales, clase de suelo, categorías y subcategorías de suelo no urbanizable, sectores de suelo urbanizable y sistemas generales), cada uno en un FICHERO INDEPENDIENTE cuyo nombre va precedido del atributo CODSIUN del conjunto 1",
          "ANEXO — SISTEMA GEODÉSICO: el del RD 1071/2007, ETRS89, proyección UTM HUSO 30 NORTE (EPSG: 25830), o el que en su momento esté en vigor en España. Geometría POLIGONAL en todos los conjuntos, con multiparte y polígonos isla si procede",
          "ANEXO — NORMAS DE ELABORACIÓN: coherencia entre la documentación escrita y los planos; ámbitos idénticos a los del planeamiento de nivel superior; uso de la línea exacta del CATASTRO sin volver a digitalizarla (salvo en las parcelas que deban segregarse); y coherencia topológica de cada conjunto consigo mismo y con los demás (sin huecos ni solapes, la línea común se copia y nunca se redigitaliza)",
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
          "DF SEGUNDA — ENTRADA EN VIGOR a los DOS MESES contados desde el día en que finalice la vigencia del RD 463/2020 (estado de alarma por la COVID-19) o, en su caso, de sus prórrogas. Es la redacción de la disposición adicional primera del Decreto-ley Foral 2/2020, de 25 de marzo; la original fijaba SEIS MESES desde la publicación en el BON (n.º 216, de 31-10-2019)",
          "Encaje normativo: el Registro está regulado hoy en el art. 79 del DFL 1/2017, cuyo apartado 4 dice que es público y que la publicidad se hace por certificación expedida por funcionario habilitado, por simple nota informativa o por copia, sin que su importe exceda del coste administrativo. El decreto se dicta al amparo de la disposición final primera del DFL 1/2017, y el derecho de acceso sin obligación de acreditar un interés determinado procede de su art. 8",
        ],
      },
    ],
    claves: [
      "Registro PÚBLICO y ADMINISTRATIVO, custodiado y gestionado por el DEPARTAMENTO, no por los ayuntamientos",
      "Dos piezas: BASE DE DATOS con las fichas + ARCHIVO DOCUMENTAL en soporte digital (art. 4)",
      "Acceso de CUALQUIER persona o entidad, presencial o telemático; copias sin exceder del COSTE ADMINISTRATIVO (art. 3.2)",
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
      "La documentación gráfica incorpora, cuando proceda, las COORDENADAS de sus CUATRO ESQUINAS",
      "Lo vectorial solo se exige en instrumentos que afecten a ORDENACIÓN ESTRUCTURANTE (art. 10)",
      "Formato de la información vectorial: SHAPEFILE, seis conjuntos de datos en ficheros independientes (Anexo)",
      "Sistema geodésico: ETRS89, UTM HUSO 30 NORTE (EPSG: 25830) (Anexo)",
      "Directorio: municipio + acrónimo del instrumento + ámbito, separados por GUION BAJO; # si es supramunicipal",
      "La confidencialidad la señalan AYUNTAMIENTOS Y PROMOTORES; el Registro solo VERIFICA (art. 12)",
      "Los instrumentos de gestión y urbanización municipales se inscriben de forma VOLUNTARIA (DA única)",
      "El decreto no se aplica a lo ya aprobado definitivamente a su entrada en vigor (DT única)",
      "Entrada en vigor: DOS MESES después del fin del estado de alarma (DF 2.ª, redacción del Decreto-ley Foral 2/2020)",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Plazos y efectos del procedimiento de inscripción (arts. 5 y 6)",
          columnas: ["Trámite", "Quién", "Plazo", "Desde", "Si se incumple o transcurre"],
          filas: [
            ["Remitir lo que el ayuntamiento aprueba definitivamente (art. 5.2.b)", "Ayuntamiento", "10 días", "Aprobación definitiva («en los diez días siguientes»)", "El decreto no fija consecuencia"],
            ["Remitir un instrumento particular aprobado por silencio, a instancia del promotor (art. 5.2.c)", "Ayuntamiento, requerido por la persona responsable del registro", "10 días como máximo", "Requerimiento", "El decreto no fija consecuencia"],
            ["Subsanar documentación ausente o deficiente (art. 6.2.a)", "Ayuntamiento, requerido por la unidad responsable", "10 días como máximo", "Requerimiento", "Se puede DENEGAR la práctica del asiento"],
            ["Practicar el asiento con la documentación completa (art. 6.2.b)", "Unidad responsable del Registro", "30 días como máximo", "No lo precisa", "Se entiende ESTIMADA la solicitud de inscripción"],
            ["Inscribir lo que aprueba definitivamente la Comunidad Foral (arts. 5.2.a y 6.1)", "Departamento, de oficio", "Sin plazo", "—", "—"]
          ],
          nota: "Tres plazos de 10 días (remitir, remitir tras requerimiento y subsanar) y uno de 30 (asiento, con silencio positivo). Hecha la inscripción, certificación registral con el número de registro asignado, que se comunica a los ayuntamientos afectados (arts. 6.1 y 6.2.c)."
        },
        {
          titulo: "Vías de inscripción (art. 5.2 y disposición adicional única)",
          columnas: ["Vía", "Instrumentos", "Quién actúa"],
          filas: [
            ["De oficio (art. 5.2.a)", "Ordenación del territorio; gestión y urbanización que los desarrollen; planeamiento municipal cuya aprobación definitiva compete a la Comunidad Foral", "Departamento competente en ordenación del territorio y urbanismo"],
            ["A instancia del ayuntamiento (art. 5.2.b)", "Ordenación del territorio y planeamiento municipal cuya aprobación definitiva le corresponde", "Ayuntamiento: remite la documentación del art. 9 en 10 días"],
            ["A instancia de las personas promotoras (art. 5.2.c)", "Instrumentos de iniciativa particular aprobados por silencio administrativo", "La persona responsable del registro requiere al ayuntamiento la documentación (10 días como máximo)"],
            ["Voluntaria (DA única)", "Gestión y urbanización cuya aprobación definitiva corresponde al ayuntamiento", "Ayuntamiento, si quiere: inscripción directa"]
          ],
          nota: "La inscripción del art. 5.2 es obligatoria y alcanza también a las modificaciones de los instrumentos (art. 5.1). Solo es voluntaria la de los instrumentos municipales de gestión y de urbanización."
        },
        {
          titulo: "Ficha de inscripción (art. 7)",
          columnas: ["Apartado", "Datos"],
          filas: [
            ["1. Identificación del instrumento", "Tipo · carácter estructurante o pormenorizado de las determinaciones · descripción (objeto)"],
            ["2. Localización", "Municipio o municipios · concejo · entidad de población, en su caso · ámbito territorial, urbanístico o normativo · emplazamiento toponímico, catastral o postal"],
            ["3. Personas promotoras", "Iniciativa pública o privada · nombre o razón social de las personas promotoras o administración"],
            ["4. Tramitación", "Declaración del PSIS o aprobación inicial (con su publicación en el BON y, en su caso, en prensa) · aprobación provisional · aprobación definitiva y su publicación en el BON · publicación en el BON de la normativa escrita y la documentación gráfica (anuncio y enlace web) · conclusiones del informe de control del art. 6.2.d"],
            ["5. Vigencia del instrumento", "Vigente / no vigente (pendiente de publicación o perdida su vigencia por sentencias, resoluciones administrativas u otros actos) · observaciones"],
            ["6. Fecha y número de registro", "Fecha de inscripción · número de registro"]
          ],
          nota: "Las tres primeras fechas de tramitación (inicial o declaración del PSIS, provisional y definitiva) se anotan con señalamiento de la Administración actuante."
        },
        {
          titulo: "Causas de modificación de la ficha de inscripción (art. 8)",
          columnas: ["Causa", "Descripción", "Iniciativa"],
          filas: [
            ["Publicación en BON", "Efectiva publicación del acuerdo de aprobación y de la normativa correspondiente", "De oficio o a instancia de parte"],
            ["Error material", "Subsanación de errores materiales advertidos en la propia inscripción", "De oficio o a instancia de parte"],
            ["Sentencia o resolución administrativa", "Sentencias judiciales o resoluciones administrativas que recaigan sobre los instrumentos, tras adquirir firmeza administrativa", "De oficio o a instancia de parte"],
            ["Medida cautelar", "Medidas cautelares adoptadas por jueces y tribunales que afecten a la aplicación de los instrumentos", "De oficio o a instancia de parte"],
            ["Otros actos o resoluciones", "Cualesquiera otros actos, acuerdos y resoluciones que, a juicio de la unidad orgánica responsable, afecten a los instrumentos", "De oficio o a instancia de parte"]
          ],
          nota: "Artículo 8 del Decreto Foral 253/2019. Los ayuntamientos deben comunicar la concurrencia de estas causas y tienen la obligación de comunicar cualquier acto o resolución posterior a la aprobación definitiva con trascendencia registral. La unidad responsable da cuenta a los ayuntamientos afectados de cualquier rectificación."
        },
        {
          titulo: "Documentación que remite el ayuntamiento (art. 9.1)",
          columnas: ["Apartado", "Contenido"],
          filas: [
            ["a) Índice de documentos", "Archivo pdf con el listado de los documentos que se presentan"],
            ["b) Documentación administrativa", "Certificados de aprobación inicial, provisional y definitiva · justificante de la publicación en prensa y en el BON del acuerdo de aprobación inicial · informes municipales jurídicos y técnicos (administración local actuante u órganos de los arts. 16 y 18.2 del DFL 1/2017) · informes de otros órganos · alegaciones, con sus informes y resoluciones"],
            ["c) Documento técnico completo, con diligencias de autenticidad y fecha de aprobación: informativa y justificativa", "Memoria informativa y justificativa · planos de información · plan de participación · resumen ejecutivo · estudio ambiental estratégico · memoria de viabilidad y de sostenibilidad económica · estudio de movilidad generada · estudio sobre la adecuación de vivienda protegida · sistema de indicadores de gestión, sostenibilidad y resultado · plan de atracción y ordenación comercial · programa de desarrollo y ejecución"],
            ["c) Documento técnico: normativa", "Planos de ordenación · normas urbanísticas · catálogo de protecciones"],
            ["d) Documentación vectorial", "En los supuestos y condiciones del art. 10 y del Anexo"],
            ["e) Resoluciones posteriores", "Texto de la sentencia o auto judicial, o de cualquier otra resolución administrativa posterior que afecte a su contenido"]
          ],
          nota: "Copia del expediente completo, en formato digital, según lo que legalmente sea exigible a cada instrumento («en su caso»). Los instrumentos que aprueba la Comunidad Foral se presentan igual (art. 9.3). Trampa típica: planos de INFORMACIÓN (informativos) frente a planos de ORDENACIÓN (normativos)."
        },
        {
          titulo: "Resoluciones mínimas y formatos de la documentación digital (art. 9.2 y Anexo)",
          columnas: ["Tipo de documentación", "Formato", "Resolución mínima", "Observaciones"],
          filas: [
            ["Documentación Administrativa", "PDF", "200 ppp", "Carpeta propia dentro del directorio principal"],
            ["Documentación Escrita (Documento Técnico)", "PDF", "200 ppp", "Páginas numeradas con referencia al total"],
            ["Documentación Gráfica (Documento Técnico)", "PDF", "300 ppp", "Cuando proceda, coordenadas geográficas de las 4 esquinas de cada hoja, en el sistema del Anexo (ETRS89 UTM 30N)"],
            ["Información Geográfica Vectorial", "Shapefile", "No aplica", "Solo si el instrumento afecta a la ordenación estructurante (art. 10); un fichero por conjunto de datos, con el nombre precedido del CODSIUN"]
          ],
          nota: "Todo en pdf salvo lo vectorial. Cada archivo del documento técnico, diligenciado con firma digital que certifique que coincide fielmente con el documento aprobado; propiedades que permitan impresión, copia, extracción y firma. Directorio principal: municipio (o el primero por orden alfabético seguido de #) + acrónimo del tipo de instrumento + ámbito si no es todo el término, separados por guion bajo. ppp = puntos por pulgada."
        },
        {
          titulo: "Conjuntos de datos de información geográfica vectorial (Anexo)",
          columnas: ["Nº", "Conjunto de datos", "Nombre del fichero", "Atributos"],
          filas: [
            ["1", "Ámbito de la actuación", "CODSIUN_ambito", "CODSIUN (número entero, 6) · MUNICIPIOS (texto, 255, separados por comas) · CODTIP (texto, 10) · TIPINSTRUM (texto, 255) · FECHAPROB (texto, 8, AAAAMMDD)"],
            ["2", "Unidades espaciales", "CODSIUN_udespacial", "UESPACIAL (texto, 6: «SE-» + número correlativo 001-999)"],
            ["3", "Clase de suelo", "CODSIUN_clase", "CLASESUELO (texto, 50) · CODCLASE (texto, 10)"],
            ["4", "Categorías y subcategorías de suelo no urbanizable", "CODSIUN_snu", "CATEGSNU (texto, 50) · SBCATEGSNU (texto, 255) · COD_CS (texto, 10)"],
            ["5", "Sectores de suelo urbanizable", "CODSIUN_sector", "SECTORSU (texto, 6: «S-» + 001-999) · USOGLOBAL (texto, 50) · EDIF_MAX (m² construidos máximos) · P_VIV_PROT (% de viviendas protegidas)"],
            ["6", "Sistemas generales", "CODSIUN_sg", "SIST_GEN (texto, 6: «SG-» + 001-999) · SG_DESTINO (texto, 50)"]
          ],
          nota: "Geometría poligonal en los seis, con multiparte y polígonos isla si procede. CODSIUN: identificador único que entrega el Departamento para cada instrumento. Consistencia geométrica: las unidades espaciales no sobrepasan el ámbito; la clase de suelo ocupa todo el ámbito; el conjunto 4 ocupa todo el suelo no urbanizable; los sectores coinciden con los recintos de suelo urbanizable."
        },
        {
          titulo: "Listas controladas del Anexo",
          columnas: ["Lista", "Valores"],
          filas: [
            ["CODTIP / TIPINSTRUM (conjunto 1)", "PSIS y MPSIS (Plan y Proyecto Sectorial de Incidencia Supramunicipal y su modificación) · PGM y MPGM (Plan General Municipal y su modificación) · MPM (modificación de Plan Municipal) · MPGOU (modificación de Plan General de Ordenación Urbana) · MNS (modificación de Normas Subsidiarias) · PC y MPC (Plan de Conjunto y su modificación) · PE y MPE (Plan Especial y su modificación)"],
            ["CLASESUELO / CODCLASE (conjunto 3)", "Suelo urbano (SU) · suelo urbanizable (SUBLE) · suelo no urbanizable (SNU)"],
            ["CATEGSNU (conjunto 4)", "Protección (PROT.) · Preservación (PRES.)"],
            ["SBCATEGSNU (conjunto 4): las mismas 8 en cada categoría", "Valor paisajístico (VP) · valor ambiental (VA) · valor para su explotación natural (EN) · valor cultural (VC) · salvaguarda del modelo de desarrollo (MD) · prevención de riesgos (PR) · destinado a infraestructuras (DI) · actividades especiales (AE)"],
            ["USOGLOBAL (conjunto 5)", "Residencial · terciario · industrial · terciario-industrial · dotacional"],
            ["SG_DESTINO (conjunto 6)", "Vía pública · servicio urbano · espacio libre · equipamiento público · equipamiento privado"]
          ],
          nota: "En el conjunto 4 los valores pueden concatenarse («valor 1 + valor 2», con un espacio a cada lado del signo más) porque un mismo terreno puede tener varias categorías y subcategorías. CLASESUELO, USOGLOBAL y SG_DESTINO toman «un ítem» de su lista. El COD_CS une categoría y subcategoría: PROT.VP, PRES.AE, etc."
        },
        {
          titulo: "Disposiciones del decreto foral",
          columnas: ["Disposición", "Regla"],
          filas: [
            ["Transitoria única", "En tramitación a la entrada en vigor: adaptarse antes de la aprobación definitiva. Ya aprobados definitivamente: no se les aplica el decreto y mantienen sus inscripciones como se practicaron"],
            ["Adicional única", "Gestión y urbanización municipales: remisión voluntaria para su inscripción directa"],
            ["Final primera", "El titular del Departamento puede modificar el Anexo (nuevas necesidades, tecnologías, estándares del Open Geospatial Consortium o disposiciones de rango superior)"],
            ["Final segunda", "Entrada en vigor a los dos meses contados desde el día en que finalice la vigencia del RD 463/2020 (estado de alarma) o de sus prórrogas"]
          ],
          nota: "Publicado en el BON n.º 216, de 31-10-2019. La DF 2.ª tiene la redacción de la disposición adicional primera del Decreto-ley Foral 2/2020, de 25 de marzo (BON n.º 65, de 26-03-2020); la original preveía la entrada en vigor a los seis meses de la publicación. Sin otras modificaciones a 21-05-2026."
        }
      ],
      datos: [
        "El Registro de Planeamiento de Navarra es un registro público, de carácter administrativo, custodiado y gestionado por el Departamento competente en materia de ordenación del territorio y urbanismo (art. 3.1 DF 253/2019).",
        "Su objeto es garantizar la transparencia y la publicidad en el ejercicio de la función pública urbanística, mediante la inscripción de los instrumentos de ordenación del territorio y de planeamiento urbanístico municipal; se inscribe también cualquier resolución posterior, administrativa o judicial, que afecte a su contenido (art. 3.1 DF 253/2019).",
        "El Registro consta de una base de datos informatizada con las fichas de inscripción de cada instrumento y de un archivo documental con copia de los documentos en soporte digital (art. 4 DF 253/2019).",
        "Cualquier persona o entidad, pública o privada, puede acceder al Registro de forma presencial, en las oficinas de la unidad orgánica competente, o telemática; los certificados los autoriza el funcionario o funcionaria habilitados, y las notas informativas y copias no pueden costar más que el coste administrativo (art. 3.2 DF 253/2019).",
        "La inscripción en el Registro es obligatoria para los instrumentos de ordenación territorial, de gestión y de urbanización que los desarrollen, así como para los instrumentos de planeamiento urbanístico municipal, una vez aprobados definitivamente (art. 5.1 DF 253/2019).",
        "Cuando la documentación remitida por el ayuntamiento se encuentre completa, la unidad responsable del Registro practicará el asiento de inscripción en el plazo máximo de 30 días; transcurrido dicho plazo sin que se haya practicado, se entenderá estimada la solicitud de inscripción (art. 6.2.b) DF 253/2019).",
        "Si del examen de la documentación se deduce ausencia o deficiencia, la unidad responsable del registro requerirá al ayuntamiento para que aporte datos o documentos en un plazo máximo de 10 días, pudiendo denegar la inscripción en caso de incumplimiento (art. 6.2.a) DF 253/2019).",
        "Los ayuntamientos podrán, de manera voluntaria, remitir los instrumentos de gestión y de urbanización cuya aprobación definitiva les corresponda para su inscripción directa en el Registro (Disposición Adicional Única DF 253/2019).",
        "Los instrumentos en tramitación a la entrada en vigor del decreto deberán adaptarse con carácter previo a su aprobación definitiva a las prescripciones del mismo (Disposición Transitoria Única DF 253/2019).",
        "Los instrumentos aprobados definitivamente antes de la entrada en vigor del decreto no se ven afectados por el mismo y mantienen las inscripciones en las condiciones en que fueron practicadas (Disposición Transitoria Única DF 253/2019).",
        "Formato (art. 9.2): todo en pdf salvo la información vectorial; páginas de texto numeradas con referencia al total; cada archivo del documento técnico diligenciado con firma digital que certifique que coincide fielmente con el documento aprobado; propiedades que permitan impresión, copia, extracción y firma.",
        "Directorio principal (art. 9.2): nombre del municipio (si la afección es supramunicipal, el primero por orden alfabético seguido de #) + abreviatura o acrónimo del tipo de instrumento + referencia al ámbito si es distinto del término municipal, separados por guion bajo; dentro, las carpetas Documentación Administrativa, Documento Técnico (Escrita y Gráfica) e Información Geográfica Vectorial.",
        "La información geográfica vectorial se entrega en shapefile: seis conjuntos de datos, cada uno en un fichero independiente cuyo nombre va precedido del CODSIUN del conjunto 1 (CODSIUN_ambito, _udespacial, _clase, _snu, _sector y _sg) (Anexo DF 253/2019).",
        "El sistema geodésico de referencia de las entidades gráficas es el del RD 1071/2007: ETRS89, proyección UTM huso 30 norte, codificado como EPSG: 25830, o el que en su momento esté en vigor en España (Anexo DF 253/2019).",
        "CODSIUN es el código identificativo del instrumento en el Sistema de Información Urbanística de Navarra (SIUN): número entero de tamaño 6, único para cada instrumento, que entrega el Departamento. FECHAPROB va en formato AAAAMMDD (Anexo DF 253/2019).",
        "Códigos correlativos de 001 a 999, con los ceros a la izquierda: «SE-» para las unidades espaciales, «S-» para los sectores de suelo urbanizable y «SG-» para los sistemas generales (Anexo DF 253/2019).",
        "Los sistemas generales son la red de dotaciones públicas al servicio de toda la población (arts. 49.2.c y 55.3 del DFL 1/2017, citados en el Anexo DF 253/2019).",
        "El conjunto de datos 3 (Clase de suelo) debe completar la totalidad del ámbito del instrumento, garantizando consistencia geométrica con el conjunto 1 (Anexo DF 253/2019).",
        "Los recintos o partes de recinto que deban ajustarse a las líneas del catastro oficial de Navarra deberán emplear la línea exacta de dicha capa de información y no volverá a digitalizarse; solo se podrán utilizar líneas no coincidentes con catastro en el lugar geográfico donde se produzca una segregación (Normas de elaboración, Anexo DF 253/2019).",
        "En el conjunto de datos 1 (Ámbito de la actuación), el atributo MUNICIPIOS es de tipo texto con tamaño 255 y recoge los nombres de los municipios afectados separados por comas (Anexo DF 253/2019).",
        "En el conjunto de datos 5 (Sectores de suelo urbanizable), el atributo EDIF_MAX es de tipo doble con precisión 2 y tamaño 19, y expresa la edificabilidad máxima como cuantía en metros cuadrados de superficie construida máxima (Anexo DF 253/2019).",
        "Protección de datos (art. 12): los ayuntamientos y las personas promotoras indican de forma expresa la información confidencial; la unidad responsable del Registro verifica el cumplimiento.",
        "Publicado en el BON n.º 216, de 31-10-2019; entra en vigor a los dos meses del fin de la vigencia del RD 463/2020 (estado de alarma) o de sus prórrogas, según la DF 2.ª en la redacción del Decreto-ley Foral 2/2020; la DF 1.ª permite al titular del Departamento modificar el Anexo."
      ],
      excepciones: [
        "La inscripción de oficio por el Departamento compete a los instrumentos de ordenación del territorio, de gestión y de urbanización que los desarrollen, y a los instrumentos de planeamiento municipal cuya aprobación definitiva corresponda a la Administración de la Comunidad Foral; en cambio, para los instrumentos cuya aprobación definitiva corresponda al ayuntamiento, la inscripción se realiza a instancia de este, que debe remitir la documentación en 10 días (art. 5.2.a y b DF 253/2019).",
        "En los instrumentos promovidos por iniciativa particular aprobados por silencio administrativo, la inscripción se realiza a instancia de las personas promotoras, y es la persona responsable del registro quien requiere al ayuntamiento para que remita la documentación en 10 días; este supuesto es distinto del de los instrumentos cuya aprobación definitiva es municipal, donde es el propio ayuntamiento quien debe remitirla (art. 5.2.c DF 253/2019).",
        "Cuando la documentación remitida por el ayuntamiento está completa, el plazo para practicar el asiento de inscripción es de 30 días y el silencio es estimatorio; en cambio, cuando se requiere al ayuntamiento para subsanar deficiencias, el plazo es de 10 días y el incumplimiento puede dar lugar a la denegación de la inscripción (art. 6.2.a y b DF 253/2019).",
        "La inscripción es obligatoria (art. 5.2), salvo para los instrumentos de gestión y de urbanización cuya aprobación definitiva corresponda a los ayuntamientos, cuya remisión es voluntaria (DA única); los de gestión y urbanización que desarrollan instrumentos de ordenación territorial sí se inscriben, de oficio (art. 5.2.a).",
        "La documentación administrativa y la documentación escrita deben entregarse en PDF con una resolución mínima de 200 ppp; la documentación gráfica debe entregarse en PDF con una resolución mínima de 300 ppp e incorporar, cuando proceda, las coordenadas geográficas de las 4 esquinas (art. 9.2 DF 253/2019).",
        "Todo se entrega en pdf «a excepción de» la información vectorial del art. 10, que va en shapefile; y esa información vectorial solo se exige a los instrumentos que afecten a determinaciones de ordenación estructurante (arts. 9.2 y 10 y Anexo DF 253/2019).",
        "El nombre del directorio solo incluye la referencia al ámbito cuando este es distinto del término municipal; si la afección es supramunicipal, se usa el primer municipio por orden alfabético seguido del símbolo # (art. 9.2 DF 253/2019).",
        "Las sentencias y resoluciones administrativas modifican la ficha tras adquirir firmeza administrativa; las medidas cautelares de jueces y tribunales que afecten a la aplicación de los instrumentos también son causa de modificación (art. 8.c y d DF 253/2019).",
        "Los instrumentos en tramitación a la entrada en vigor del decreto deben adaptarse con carácter previo a su aprobación definitiva; sin embargo, los instrumentos ya aprobados definitivamente a esa fecha no se ven afectados y mantienen sus inscripciones en las condiciones en que fueron practicadas (Disposición Transitoria Única DF 253/2019).",
        "El planeamiento a desarrollar debe ajustarse a la delimitación oficial del ámbito; solo podrá haber desajuste si la nueva ordenación requiere modificar el ámbito, y únicamente en las parcelas que requieran ser segregadas o anexionadas (Criterios específicos, conjunto de datos 1, Anexo DF 253/2019).",
        "El ámbito de la actuación puede ser discontinuo e incluye, en su caso, los suelos afectados por las infraestructuras de conexión con los sistemas generales existentes (redes y servicios) y previstas en el instrumento (conjunto de datos 1, Anexo DF 253/2019).",
        "En el conjunto de datos 4 (Categorías y subcategorías de suelo no urbanizable), los valores de CATEGSNU, SBCATEGSNU y COD_CS pueden superponerse, reflejándose bajo la forma valor 1 + valor 2 (signo más, separado por un espacio a cada lado); en cambio, CLASESUELO, USOGLOBAL y SG_DESTINO toman «un ítem» de su lista controlada (Anexo DF 253/2019)."
      ]
    }
  };
