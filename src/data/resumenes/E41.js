// Resumen del tema E41. Formato: cabecera de src/data/resumenes.js.
// Chequeo del 02-11-2026. Vigencia a 21-05-2026 contrastada con el BOE (RD 1367/2007, BOE-A-2007-18397, pestaña
// «Análisis»; LF 17/2020, BOE-A-2021-526, pestaña «Análisis») y con LexNavarra (DF 135/1989, detalle.asp?r=28772).
// El RD solo ha cambiado en la tabla A del anexo II: la STS de 20-7-2010 anuló «Sin determinar» del tipo f) y el
// RD 1038/2012 sustituyó la tabla (el TXT conserva la versión inicial; aquí va la vigente). Del DF 135/1989 solo sigue
// vigente el capítulo III (LF 17/2020, con efectos desde el 22-6-2021); su art. 12.3 lleva en LexNavarra una nota de
// vigencia que no se ha podido leer. Corregido: art. 6 (revisión como máximo cada diez años), «reflexión estática»
// (art. 10.2.a del DF), la atribución del art. 12.3 al DF 193/1991 (no verificada; ese decreto modificó el DF 131/1989)
// y la nota sobre la Orden ITC/2845/2007. Añadidos: bloque de emisores y valores límite (arts. 18-26), arts. 5.3-5.5,
// 8, 10 y 11-14 del DF, la fila del tipo f) en la tabla A y nuevos datos, claves y excepciones.
export default {
    "intro": "Dos normas de nivel distinto que se complementan. El RD 1367/2007 desarrolla la Ley 37/2003 del Ruido y establece el andamiaje conceptual: ÍNDICES acústicos, ÁREAS ACÚSTICAS, OBJETIVOS DE CALIDAD y SERVIDUMBRES acústicas. El DF 135/1989 baja al detalle práctico y regula qué debe contener el PROYECTO ACÚSTICO que acompaña al expediente de una actividad. Para un arquitecto municipal la conexión decisiva son los arts. 11 y 13 del real decreto: toda figura de planeamiento debe incluir explícitamente la ZONIFICACIÓN ACÚSTICA, cualquier modificación del planeamiento que cambie usos del suelo obliga a REVISAR esa zonificación, y los planes que ordenen ámbitos afectados por servidumbres acústicas deben remitirse ANTES DE SU APROBACIÓN INICIAL al órgano competente de la infraestructura para informe preceptivo. La lógica de fondo del sistema es que el objetivo de calidad no es un valor único: depende del TIPO DE ÁREA ACÚSTICA y de si el área está ya urbanizada o es de nuevo desarrollo. VIGENCIA a 21-05-2026: el real decreto solo ha cambiado en la tabla A del anexo II (la STS de 20-7-2010 anuló el «Sin determinar» del tipo f y el RD 1038/2012 sustituyó la tabla), y del DF 135/1989 solo sigue vigente el capítulo III, porque la LF 17/2020 derogó el resto con efectos desde el 22-6-2021.",
    "bloques": [
      {
        "h": "Índices acústicos y de vibración (arts. 3-4)",
        "nota": "Los índices se preguntan por su significado, no por su fórmula. Retén que LAeq,T evalúa niveles sonoros en un intervalo temporal T, y que la letra K en LKeq,T y LK,x indica que el valor lleva CORRECCIONES por componentes tonales emergentes, de baja frecuencia o por ruido impulsivo — esa K es la pista para identificarlos. El índice de VIBRACIÓN es uno solo, Law, y se aplica en el ESPACIO INTERIOR de los edificios.",
        "items": [
          "Art. 3.1.a — índices para la evaluación del RUIDO, además de los del RD 1513/2005: LAmax para niveles sonoros MÁXIMOS durante el periodo temporal de evaluación · LAeq,T para niveles sonoros en un INTERVALO TEMPORAL T · LKeq,T para niveles en un intervalo T CON CORRECCIONES por componentes tonales emergentes, de baja frecuencia o ruido impulsivo · LK,x para evaluar la molestia y los niveles sonoros con esas mismas correcciones, PROMEDIADOS A LARGO PLAZO en el periodo temporal de evaluación «x»",
          "Art. 3.1.b — índice de VIBRACIÓN: Law, para evaluar la molestia y los niveles de vibración máximos durante el periodo temporal de evaluación, EN EL ESPACIO INTERIOR DE EDIFICIOS",
          "Art. 4 — los índices Ld, Le y Ln, definidos en el anexo I del RD 1513/2005, se aplican para verificar el cumplimiento de los OBJETIVOS DE CALIDAD ACÚSTICA aplicables a las áreas acústicas y al espacio interior de los edificios, y para evaluar el ruido de las infraestructuras a efectos de delimitar las SERVIDUMBRES ACÚSTICAS. Para los valores límite de los emisores (arts. 23 y 24) se usan los índices de las tablas del anexo III, y para las vibraciones, el Law"
        ]
      },
      {
        "h": "Áreas acústicas: tipos y delimitación (arts. 5-6)",
        "nota": "Los SIETE tipos de área acústica del art. 5 son un mínimo: las comunidades autónomas determinan los tipos, pero han de prever al menos estos siete. Se clasifican por el USO PREDOMINANTE del suelo, y esa es la palabra clave — no por el uso puntual de una parcela. Ojo a que las letras d) y e) se distinguen con precisión: la e) agrupa los usos SANITARIO, DOCENTE Y CULTURAL que requieran especial protección, mientras que la d) es el terciario RESTANTE.",
        "items": [
          "Art. 5.1 — en la planificación territorial y en los instrumentos de planeamiento urbanístico, TANTO GENERAL COMO DE DESARROLLO, se incluirá la ZONIFICACIÓN ACÚSTICA del territorio en áreas acústicas",
          "SIETE TIPOS mínimos de área acústica, en atención al USO PREDOMINANTE del suelo: a) sectores con predominio de uso RESIDENCIAL · b) uso INDUSTRIAL · c) uso RECREATIVO Y DE ESPECTÁCULOS · d) uso TERCIARIO distinto del anterior · e) uso SANITARIO, DOCENTE Y CULTURAL que requiera especial protección contra la contaminación acústica · f) sectores afectados a SISTEMAS GENERALES DE INFRAESTRUCTURAS DE TRANSPORTE u otros equipamientos públicos que lo reclamen · g) ESPACIOS NATURALES que requieran especial protección",
          "Al zonificar debe tenerse en cuenta la existencia de ZONAS DE SERVIDUMBRE ACÚSTICA y de RESERVAS DE SONIDO DE ORIGEN NATURAL",
          "Art. 5.1, último párrafo — la delimitación se basa en los usos ACTUALES O PREVISTOS del suelo, y la zonificación acústica de un término municipal únicamente afecta, excepto en las áreas de los tipos f) y g), a las ÁREAS URBANIZADAS y a los NUEVOS DESARROLLOS URBANÍSTICOS",
          "Arts. 5.3 a 5.5 — NINGÚN PUNTO del territorio puede pertenecer simultáneamente a dos tipos de área acústica · si concurren varios usos, el área se clasifica por el USO PREDOMINANTE (criterios del anexo V) · la delimitación se representa en un plano a escala mínima 1/5.000 o por las coordenadas geográficas o UTM de todos los vértices, en formato geocodificado · mientras no se apruebe la zonificación de un término municipal, las áreas vienen delimitadas por el USO CARACTERÍSTICO de la zona",
          "Art. 6 — la delimitación de las áreas acústicas queda sujeta a REVISIÓN PERIÓDICA, como máximo CADA DIEZ AÑOS desde la fecha de su aprobación"
        ]
      },
      {
        "h": "Servidumbres acústicas (arts. 7-12)",
        "nota": "Figura pensada para hacer compatible el funcionamiento de las INFRAESTRUCTURAS DE TRANSPORTE —viario, ferroviario, aéreo y portuario— con los usos del suelo de su entorno. Su efecto es doble y conviene entenderlo bien: hacia dentro, en los sectores gravados las inmisiones PUEDEN SUPERAR los objetivos de calidad del área acústica; hacia fuera, pueden establecerse LIMITACIONES a determinados usos, actividades, instalaciones o edificaciones. Tienen vigencia INDEFINIDA y debe revisarse su delimitación cuando hay modificaciones sustanciales en la infraestructura que alteren significativamente los niveles sonoros; también pueden modificarse por medidas correctoras eficaces del planeamiento conforme al art. 11.1.",
        "items": [
          "Art. 7.1 — CONCEPTO: servidumbres destinadas a conseguir la compatibilidad del funcionamiento o desarrollo de las infraestructuras de transporte VIARIO, FERROVIARIO, AÉREO Y PORTUARIO con los usos del suelo, actividades, instalaciones o edificaciones implantadas o que puedan implantarse en la zona de afección por el ruido",
          "Art. 7.3 — en los sectores gravados por servidumbres acústicas las inmisiones PODRÁN SUPERAR los objetivos de calidad acústica aplicables a las correspondientes áreas acústicas",
          "Art. 7.4 — en esos sectores PODRÁN ESTABLECERSE LIMITACIONES para determinados usos del suelo, actividades, instalaciones o edificaciones, con la finalidad de cumplir al menos los valores límite de inmisión establecidos para aquéllos",
          "Art. 8 — las zonas de servidumbre las delimita la ADMINISTRACIÓN COMPETENTE PARA APROBAR LOS MAPAS DE RUIDO de la infraestructura: se calculan Ld, Le y Ln en la situación de mayor afección, con carácter general a 4 m de altura, y la zona llega hasta la curva más alejada que corresponde al valor límite del área RESIDENCIAL de la tabla A1 del anexo III. Art. 9 — se delimitan en los mapas de ruido y se incluyen en el planeamiento de los nuevos desarrollos",
          "Art. 10 — si se delimita una servidumbre en un ÁREA URBANIZADA EXISTENTE, se elabora SIMULTÁNEAMENTE el plan de acción en materia de contaminación acústica (medidas correctoras, responsables, cuantificación económica y, cuando sea posible, proyecto de financiación)",
          "Art. 11.1 — el planeamiento territorial y urbanístico incluirá las determinaciones necesarias para conseguir la EFECTIVIDAD de las servidumbres acústicas. Si el planeamiento incluye MEDIDAS CORRECTORAS EFICACES que disminuyan los niveles sonoros, la zona de servidumbre PODRÁ SER MODIFICADA por el órgano que la delimitó; si esas medidas pierden eficacia o desaparecen, la zona se RESTITUYE a su estado inicial",
          "Art. 11.2 — REGLA CLAVE PARA EL TÉCNICO MUNICIPAL: los instrumentos de planeamiento territorial y urbanístico que ordenen ámbitos afectados por servidumbres acústicas deberán remitirse, CON ANTERIORIDAD A SU APROBACIÓN INICIAL, revisión o modificación sustancial, al ÓRGANO SUSTANTIVO COMPETENTE DE LA INFRAESTRUCTURA para que emita INFORME PRECEPTIVO. Es aplicable tanto a los nuevos instrumentos como a las modificaciones y revisiones de los existentes",
          "Art. 12.1 — las zonas de servidumbre acústica mantienen su vigencia POR TIEMPO INDEFINIDO",
          "Art. 12.2 — deberá REVISARSE su delimitación cuando se produzcan MODIFICACIONES SUSTANCIALES en las infraestructuras que originen variaciones significativas de los niveles sonoros en su entorno"
        ]
      },
      {
        "h": "Zonificación acústica y planeamiento (art. 13)",
        "nota": "El artículo que más directamente te obliga. Sus tres primeros apartados encadenan una regla sencilla: toda figura de planeamiento debe incluir EXPLÍCITAMENTE la zonificación acústica; toda modificación, revisión o adaptación del planeamiento general que cambie USOS DEL SUELO obliga a revisar esa zonificación; y al tramitar planes de desarrollo que fijen los usos PORMENORIZADOS hay que delimitar de nuevo las áreas acústicas. Los plazos del apartado 4 están agotados hace años —cinco años desde la entrada en vigor, y 1 de enero de 2008 para aglomeraciones de más de 250.000 habitantes—, pero se preguntan por su literalidad.",
        "items": [
          "Art. 13.1 — TODAS las figuras de planeamiento incluirán DE FORMA EXPLÍCITA la delimitación correspondiente a la zonificación acústica de la superficie de actuación. Cuando la delimitación en áreas acústicas esté incluida en el PLANEAMIENTO GENERAL, se utilizará esa delimitación",
          "Art. 13.2 — las sucesivas MODIFICACIONES, REVISIONES Y ADAPTACIONES del planeamiento general que contengan modificaciones en los USOS DEL SUELO conllevarán la necesidad de REVISAR LA ZONIFICACIÓN ACÚSTICA en el correspondiente ámbito territorial",
          "Art. 13.3 — igualmente será necesario delimitar las áreas acústicas cuando, con motivo de la tramitación de PLANES URBANÍSTICOS DE DESARROLLO, se establezcan los USOS PORMENORIZADOS del suelo",
          "Art. 13.4 — la delimitación por tipo de área acústica debía estar terminada, con carácter general, ANTES DE CINCO AÑOS desde la entrada en vigor del real decreto, y en las AGLOMERACIONES DE MÁS DE 250.000 HABITANTES antes del 1 DE ENERO DE 2008"
        ]
      },
      {
        "h": "Objetivos de calidad acústica (arts. 14-17)",
        "nota": "El sistema distingue tres situaciones y conviene fijarlas por contraste. En ÁREAS URBANIZADAS EXISTENTES, si ya se supera el valor de la tabla A el objetivo es ALCANZARLO, mediante planes zonales específicos; si no se supera, el objetivo es NO SUPERARLO. En el RESTO DE ÁREAS URBANIZADAS —las que no eran área urbanizada cuando entró en vigor el real decreto; en la práctica, los nuevos desarrollos— el objetivo es más exigente: no superar ese valor DISMINUIDO EN 5 DECIBELIOS. Y la regla de cumplimiento del art. 15 tiene dos condiciones acumulativas que se preguntan con sus cifras: ningún valor supera el de la tabla, y el 97 % de los valores diarios no lo supera EN MÁS DE 3 dB.",
        "items": [
          "Art. 14.1 — ÁREAS URBANIZADAS EXISTENTES: a) si se supera el valor de alguno de los índices de la TABLA A del anexo II, el objetivo de calidad será ALCANZAR DICHO VALOR, debiendo adoptarse las medidas para la mejora acústica progresiva mediante PLANES ZONALES ESPECÍFICOS del art. 25.3 de la Ley 37/2003 · b) en caso contrario, el objetivo será la NO SUPERACIÓN de ese valor",
          "Art. 14.2 — RESTO DE ÁREAS URBANIZADAS: el objetivo es la no superación del valor de la tabla A DISMINUIDO EN 5 DECIBELIOS",
          "Art. 14.3 — en los ESPACIOS NATURALES delimitados como área acústica tipo g), los objetivos se establecen PARA CADA CASO EN PARTICULAR, atendiendo a las necesidades específicas que justifiquen su calificación",
          "Art. 14.4 — ZONAS TRANQUILAS en aglomeraciones y en campo abierto: mantener los niveles por debajo del valor de la tabla A DISMINUIDO EN 5 DECIBELIOS, preservando la mejor calidad acústica compatible con el desarrollo sostenible",
          "Art. 15 — CUMPLIMIENTO, dos condiciones acumulativas en el periodo de UN AÑO: a) NINGÚN valor supera los fijados en la tabla A · b) el 97 % DE TODOS LOS VALORES DIARIOS no supera EN 3 dB los valores fijados",
          "Art. 16 — ESPACIO INTERIOR: se establece como objetivo la no superación, en el interior de las edificaciones destinadas a VIVIENDA y usos RESIDENCIALES, HOSPITALARIOS, EDUCATIVOS O CULTURALES, de los valores de las TABLAS B (ruido) y C (vibraciones) del anexo II. Estos valores tienen la consideración de VALORES LÍMITE",
          "Art. 17 — el cumplimiento en el espacio interior se verifica con la misma regla del 97 % y los 3 dB, referida a la tabla B. Para las VIBRACIONES (tabla C), las estacionarias no pueden superar ningún valor; las transitorias admiten excesos solo de día (07:00-23:00), nunca de más de 5 dB y con un máximo de 9 «unidades»: 1 por evento de hasta 3 dB y 3 por evento de más de 3 dB",
          "Art. 17.2 — una edificación es conforme con las exigencias acústicas del espacio interior cuando, con el sistema de verificación de la Ley 37/2003, cumple las EXIGENCIAS ACÚSTICAS BÁSICAS DEL CTE"
        ]
      },
      {
        "h": "Emisores acústicos y valores límite (arts. 18-26 y disposiciones adicionales)",
        "nota": "Es la parte que se aplica en la ventanilla de actividades. Distingue las tablas del anexo III: A1 y A2 para las NUEVAS INFRAESTRUCTURAS de transporte (la A2, en LAmax, solo para las ferroviarias y aeroportuarias), B1 para lo que una NUEVA ACTIVIDAD transmite al EXTERIOR y B2 para lo que transmite a los LOCALES COLINDANTES. No confundas el anexo III, que limita lo que aporta cada emisor, con el anexo II, que fija la calidad acústica del área o del interior por el conjunto de emisores.",
        "items": [
          "Art. 18 — los vehículos de motor y ciclomotores en circulación deben corresponder a tipos HOMOLOGADOS en cuanto a niveles sonoros; el valor límite de emisión de un vehículo en circulación se obtiene SUMANDO 4 dB(A) al nivel de emisión de su ficha de homologación (ensayo a vehículo parado). Si la ficha no lo indica, un ciclomotor se toma con 87 dB(A) (DA primera). Los conductores están obligados a colaborar en las pruebas de control",
          "Art. 19 — los vehículos de URGENCIAS deben poder reducir sus dispositivos acústicos a entre 70 y 90 dB(A), medidos a TRES METROS en la dirección de máxima emisión, durante el periodo nocturno cuando circulen por zonas habitadas; tuvieron UN AÑO para instalar el mecanismo",
          "Arts. 20 a 22 — embarcaciones de recreo y motos náuticas (RD 2127/2004); AVIONES de reacción subsónicos civiles de masa máxima al despegue igual o superior a 34.000 kg o de más de 19 pasajeros: certificación acústica previa para usar los aeropuertos civiles españoles; MAQUINARIA DE USO AL AIRE LIBRE, incluidas las obras y la construcción (RD 212/2002)",
          "Art. 23 — las NUEVAS infraestructuras viarias, ferroviarias o aeroportuarias no transmitirán niveles superiores a la tabla A1 del anexo III (Ld, Le, Ln), y las ferroviarias y aeroportuarias tampoco a la tabla A2 (LAmax); además deben evitar que, por efectos aditivos, se superen los objetivos de los arts. 14 y 16. Se aplica ÚNICAMENTE FUERA de las zonas de servidumbre acústica",
          "Art. 24 — toda NUEVA instalación, establecimiento o actividad portuaria, industrial, comercial, de almacenamiento, deportivo-recreativa o de ocio no transmitirá al exterior niveles superiores a la tabla B1; al tráfico portuario y al rodado y ferroviario dentro de los puertos se le aplican los límites del ART. 23. A los LOCALES COLINDANTES no se pueden transmitir niveles superiores a la tabla B2: son colindantes cuando en ningún momento la transmisión se produce a través del medio ambiente exterior. Estos niveles se extienden por ANALOGÍA FUNCIONAL a otros establecimientos abiertos al público, y en los edificios de uso exclusivo comercial, de oficinas o industrial los límites entre locales de distintos titulares son los del uso del edificio",
          "Art. 25 — cumplimiento, en el periodo de un año: infraestructuras, ningún promedio anual supera A1, ningún valor diario la supera en 3 dB y el 97 % de los valores diarios no supera A2; actividades y puertos, ningún promedio anual supera B1 o B2, ningún valor diario las supera en 3 dB y ningún LKeq,Ti medido las supera en 5 dB. En la INSPECCIÓN de una actividad en funcionamiento bastan estas dos últimas condiciones (art. 25.2)",
          "Art. 26 — los nuevos emisores acústicos no transmitirán al interior de viviendas y de edificios de uso residencial, hospitalario, educativo o cultural vibraciones que contribuyan a superar los objetivos del art. 16",
          "DA segunda — son actividades NUEVAS las que inician la tramitación de la intervención administrativa del art. 18.1.a), b) y c) de la Ley 37/2003 después de la entrada en vigor del real decreto; las actividades e infraestructuras nuevas se someten a los valores límite del anexo III. DA cuarta — en las infraestructuras de competencia autonómica o local, las comunidades autónomas fijan los plazos y condiciones de aplicación de los objetivos (art. 14.1) y de los límites del art. 23"
        ]
      },
      {
        "h": "Evaluación, mapas de ruido y título competencial (arts. 27-33)",
        "nota": "Bloque de encuadre. Del capítulo de evaluación interesa retener que los métodos, los instrumentos de medida y las entidades que realizan la evaluación están regulados, y que los MAPAS DE RUIDO son el instrumento de diagnóstico sobre el que después se apoyan los planes de acción. El título competencial del real decreto también se pregunta: se dicta al amparo del art. 149.1.16.ª y 23.ª de la Constitución —bases y coordinación general de la sanidad y legislación básica sobre protección del medio ambiente—.",
        "items": [
          "Anexo IV.A.1 — los índices pueden determinarse mediante cálculos o mediciones, y las predicciones solo mediante cálculos; pero a efectos de la INSPECCIÓN DE ACTIVIDADES por las administraciones competentes, la valoración se determina ÚNICAMENTE MEDIANTE MEDICIONES",
          "Arts. 27-31 — MÉTODOS DE EVALUACIÓN de los índices acústicos, métodos de cálculo de Ld, Le y Ln, métodos de evaluación de los EFECTOS NOCIVOS, INSTRUMENTOS DE MEDIDA y ENTIDADES que realizan la evaluación",
          "Art. 32 — MAPAS DE RUIDO: ESTRATÉGICOS, para los grandes ejes viarios y ferroviarios, los grandes aeropuertos y las aglomeraciones; y NO ESTRATÉGICOS, al menos para las áreas acústicas en las que se compruebe el incumplimiento de los objetivos de calidad acústica (art. 33: criterios de la administración competente o, en su defecto, los del RD 1513/2005)",
          "Art. 29 y anexo III del RD 1513/2005 — las RELACIONES DOSIS-EFECTO se utilizan para evaluar el efecto del ruido sobre la población, en particular la relación entre las MOLESTIAS y los valores de Lden, y entre las ALTERACIONES DEL SUEÑO y los valores de Ln",
          "Título competencial: art. 149.1.16.ª y 23.ª de la Constitución —bases y coordinación general de la sanidad y legislación básica sobre protección del medio ambiente—"
        ]
      },
      {
        "h": "DF 135/1989, capítulo III — proyecto acústico y condiciones de instalación (arts. 10-14)",
        "nota": "Solo sigue vigente este capítulo: la LF 17/2020 derogó el DF 135/1989 «salvo el capítulo III», con efectos desde el 22-6-2021. Es la parte que aplicarás al informar el expediente de una actividad. El proyecto acústico no se exige siempre: solo cuando la actividad esté PRÓXIMA a viviendas, instalaciones sanitarias o centros docentes, o cuando se presuma que los niveles sonoros puedan suponer incrementos apreciables del ruido de fondo en zonas sanitarias, docentes o residenciales. Su contenido está tasado —MEMORIA y PLANOS— y hay dos reglas de cálculo que conviene retener: las TRANSMISIONES INDIRECTAS se suponen, como mínimo, un incremento de 3 dBA salvo que la solución técnica garantice su inexistencia; y si la actividad necesita puertas y ventanas cerradas para garantizar el aislamiento, hay que disponer VENTILACIÓN FORZADA.",
        "items": [
          "Art. 10.1 — CUÁNDO se exige: en los expedientes de actividades referentes a nuevas actividades o AMPLIACIÓN de las existentes, los proyectos técnicos deberán incluir un PROYECTO ACÚSTICO cuando las actividades estén situadas EN LAS PROXIMIDADES de viviendas, instalaciones sanitarias o actividades docentes, así como cuando se presuma que los niveles sonoros exterior o interior puedan suponer INCREMENTOS APRECIABLES del nivel sonoro del ruido de fondo en zonas sanitarias, docentes o residenciales",
          "Art. 10.2 — el proyecto acústico comprende MEMORIA TÉCNICA Y PLANOS",
          "Contenido de la MEMORIA: definición del TIPO DE ACTIVIDAD · HORARIO previsto · NIVELES SONOROS DE EMISIÓN A 1 METRO o nivel sonoro reverberado · descripción de los AISLAMIENTOS ACÚSTICOS Y SILENCIADORES proyectados, con expresión de su aislamiento bruto en dBA, y/o del tipo de AMORTIGUADORES DE VIBRACIONES previstos, indicando «reflexión estática» en mm (así dice el texto) y/o frecuencia propia en Hz · JUSTIFICACIÓN de que se cumplen los niveles de inmisión en función de los de emisión y las atenuaciones conseguidas · y medidas correctoras para el aislamiento de RUIDOS DE IMPACTO cuando el aislamiento general se prevea insuficiente",
          "PLANOS mínimos: plano de SITUACIÓN de la actividad en relación con viviendas, instalaciones sanitarias o edificios docentes · planos de AISLAMIENTO ACÚSTICO a escala 1/50, con DETALLES A 1/5 de materiales, espesores y juntas",
          "Art. 10.3 — al calcular el aislamiento necesario se supondrá que las TRANSMISIONES INDIRECTAS incrementan los niveles de inmisión, COMO MÍNIMO, EN 3 dBA, salvo que la solución técnica propuesta garantice suficientemente su inexistencia",
          "Art. 10.4 — cuando sea necesario desarrollar la actividad con PUERTAS Y VENTANAS CERRADAS para garantizar el aislamiento, se dispondrá de sistema de VENTILACIÓN FORZADA",
          "Art. 10.5 — deben considerarse las molestias por EFECTOS INDIRECTOS, con especial atención a: actividades que generen TRÁFICO ELEVADO en sus inmediaciones —almacenes, locales públicos y especialmente DISCOTECAS— en zonas de elevada densidad o con calles estrechas y escasos aparcamientos · actividades con operaciones de CARGA O DESCARGA en horario nocturno · y actividades con FUNCIONAMIENTO NOCTURNO de las instalaciones",
          "Art. 11 — en los EDIFICIOS DE USO MIXTO de vivienda y otras actividades y en los locales LINDANTES con viviendas se acentuarán las medidas preventivas (amortiguadores de vibración, ruidos de impacto, tuberías, conductos de aire y transporte interior), sobre todo si el suelo del local emisor es un FORJADO con dependencias debajo, como sótanos o garajes",
          "Art. 12.1 — bares y establecimientos hosteleros con nivel sonoro interior NO SUPERIOR A 80 dBA (ruido de los usuarios, sin equipo musical o con su nivel limitado): aislamiento acústico bruto mínimo respecto de la vivienda más afectada de 55 dBA si funcionan al menos parcialmente de noche, y de 50 dBA si funcionan íntegramente de día, EXCLUSIVAMENTE ENTRE LAS 8 Y LAS 22 HORAS",
          "Art. 12.2 — bares, pubs, discotecas y similares cuyo ruido se debe primordialmente a equipos musicales: nivel máximo interior de 85 dBA, aislamiento bruto de 60 dBA; de 90 dBA, 65 dBA. El Ayuntamiento PODRÁ exigir aparatos de control permanente que interrumpan los equipos; son obligatorios la ventilación forzada y el acceso del público por un DEPARTAMENTO ESTANCO con absorción acústica y DOBLE PUERTA; las ventanas, si existen, permanecen cerradas durante la actividad y llevan DOS VIDRIOS de espesor mínimo unitario de 6 mm, separados al menos 50 mm, con absorción en la cámara",
          "Art. 12.3 — las discotecas, salas de baile y similares cuya licencia se solicite tras la entrada en vigor del decreto foral se instalarán necesariamente en EDIFICIOS AISLADOS o en SÓTANOS de edificaciones cuya planta baja esté exenta de viviendas (LexNavarra marca este apartado con una nota de vigencia cuyo contenido no figura en el TXT)",
          "Arts. 12.4 y 12.5 — el aislamiento se mide IN SITU mediante emisión de RUIDO ROSA; antes de la licencia de apertura, el Ayuntamiento exige a la propiedad un CERTIFICADO DE LAS MEDICIONES del aislamiento conseguido, firmado por titulado técnico competente, sin perjuicio de sus propias comprobaciones",
          "Art. 13 — máquinas sin anclajes ni apoyos directos al suelo, con amortiguadores o bancadas flotantes de 1,5 a 2,5 veces su peso. Salvo que la actividad ocupe todo un edificio de estructura independiente, está prohibido anclarlas o apoyarlas en paredes o pilares (distancia mínima, 0,70 m); en techos solo se admite suspender equipos de ventilación en cabina insonorizada de MENOS DE 2 kW; y en plantas elevadas, entreplantas, sobrepisos o voladizos no se instalan máquinas de MÁS DE 2 kW ni que sumen más de 5 kW. Quedan exceptuadas las instalaciones de habitabilidad: ventilación y aire acondicionado, ascensores, escaleras mecánicas y montacargas",
          "Art. 14 — conexiones a conductos y tuberías siempre con juntas o dispositivos ELÁSTICOS; primeros tramos (o toda la red, si es preciso) sobre soportes elásticos; paso de paredes sin empotramientos y con montaje elástico; PROHIBIDO llevar conductos entre el aislamiento del techo y la planta superior o dentro de una doble pared, y usar esas cámaras como plenums de impulsión o retorno"
        ]
      }
    ],
    "claves": [
      "La K de LKeq,T y LK,x indica CORRECCIONES por componentes tonales, de baja frecuencia o ruido impulsivo",
      "Índice de vibración: Law, aplicable al ESPACIO INTERIOR de edificios",
      "SIETE tipos mínimos de área acústica, por USO PREDOMINANTE del suelo",
      "El tipo e) agrupa sanitario, docente y cultural con especial protección; el d) es el terciario restante",
      "Servidumbres acústicas: para compatibilizar las infraestructuras de transporte VIARIO, FERROVIARIO, AÉREO Y PORTUARIO con los usos del entorno",
      "En zona de servidumbre acústica las inmisiones PUEDEN SUPERAR los objetivos de calidad del área",
      "Las servidumbres acústicas tienen vigencia INDEFINIDA (art. 12.1)",
      "Los planes que ordenen ámbitos con servidumbre acústica se remiten ANTES DE LA APROBACIÓN INICIAL al órgano de la infraestructura, para INFORME PRECEPTIVO (art. 11.2)",
      "TODAS las figuras de planeamiento incluyen explícitamente la zonificación acústica (art. 13.1)",
      "Modificar los USOS DEL SUELO obliga a REVISAR la zonificación acústica (art. 13.2)",
      "Áreas urbanizadas EXISTENTES: si se supera la tabla A, el objetivo es ALCANZARLA mediante planes zonales",
      "RESTO de áreas urbanizadas y zonas tranquilas: tabla A DISMINUIDA EN 5 dB",
      "Cumplimiento: ningún valor supera la tabla Y el 97 % de los valores diarios no la supera EN 3 dB, en el periodo de UN AÑO",
      "Espacio interior: tabla B (ruido) y tabla C (vibraciones); tienen consideración de VALORES LÍMITE",
      "Aglomeraciones de más de 250.000 habitantes: zonificación antes del 1 de enero de 2008",
      "DF 135/1989: el proyecto acústico se exige por PROXIMIDAD a viviendas, sanitario o docente, o por incremento apreciable del ruido de fondo",
      "El proyecto acústico comprende MEMORIA y PLANOS; aislamiento a 1/50 con detalles a 1/5",
      "Transmisiones indirectas: se suponen un incremento MÍNIMO de 3 dBA salvo garantía técnica en contra",
      "Si hace falta trabajar con puertas y ventanas cerradas: VENTILACIÓN FORZADA obligatoria",
      "Efectos indirectos a considerar: tráfico elevado (discotecas), carga y descarga nocturna y funcionamiento nocturno",
      "Revisión de las áreas acústicas: como máximo CADA DIEZ AÑOS desde su aprobación (art. 6)",
      "Anexo III: A1 y A2 para nuevas infraestructuras (solo FUERA de las servidumbres, art. 23.4); B1, actividad al exterior; B2, actividad a locales colindantes",
      "Tráfico portuario, y rodado y ferroviario dentro de los puertos: límites del art. 23, no la tabla B1 (art. 24.1)",
      "Inspección de actividades: ÚNICAMENTE mediciones; cumple si ningún valor diario supera el límite en 3 dB y ningún LKeq,Ti medido lo supera en 5 dB (art. 25.2)",
      "Tipo f): sin valores propios en la tabla A; en su límite perimetral no se superan los objetivos de las áreas colindantes (RD 1038/2012, tras la STS de 2010)",
      "DF 135/1989: solo sigue vigente el capítulo III (LF 17/2020, con efectos desde el 22-6-2021)",
      "Bares sin música (hasta 80 dBA): 55 dBA de aislamiento bruto si abren algo de noche y 50 dBA si solo de 8 a 22 h; con música: 85 dBA → 60 dBA y 90 dBA → 65 dBA"
    ],
    "memorizacion": {
      "tablas": [
        {
          "titulo": "RD 1367/2007: índices y qué evalúan",
          "columnas": [
            "Índice",
            "Contenido",
            "Aplicación"
          ],
          "filas": [
            [
              "Ld, Le, Ln",
              "Ruido de día, tarde y noche",
              "Objetivos de calidad de áreas y del interior; delimitación de servidumbres"
            ],
            [
              "LAeq,T",
              "Nivel continuo equivalente ponderado A en intervalo T",
              "Ruido durante el intervalo, sin las correcciones K"
            ],
            [
              "LAmax",
              "Mayor nivel ponderado A, integración fast",
              "Sucesos individuales y niveles máximos"
            ],
            [
              "LKeq,T",
              "LAeq,T + Kt + Kf + Ki",
              "Ruido corregido por tonos, bajas frecuencias e impulsividad"
            ],
            [
              "LK,x",
              "Promedio corregido a largo plazo",
              "Todos los periodos de evaluación x de un año"
            ],
            [
              "Law",
              "Vibración; máximo de aceleración eficaz ponderada wm",
              "Espacio interior de edificios"
            ]
          ],
          "nota": "Arts. 2–4 y anexo I.A–B. Kt: tonos; Kf: bajas frecuencias; Ki: impulsividad. El total Kt + Kf + Ki no supera 9 dB (anexo IV.A.3.3). No intercambiar niveles máximos, equivalentes y promedios anuales."
        },
        {
          "titulo": "RD 1367/2007: periodos temporales",
          "columnas": [
            "Periodo",
            "Horario por defecto, hora local",
            "Duración"
          ],
          "filas": [
            [
              "Día d",
              "07:00–19:00",
              "12 horas"
            ],
            [
              "Tarde e",
              "19:00–23:00",
              "4 horas"
            ],
            [
              "Noche n",
              "23:00–07:00",
              "8 horas"
            ],
            [
              "Vibraciones transitorias: día",
              "07:00–23:00",
              "16 horas"
            ],
            [
              "Vibraciones transitorias: noche",
              "23:00–07:00",
              "8 horas"
            ]
          ],
          "nota": "Anexo I.A.1 y art. 17.1.b).ii). Para ruido, la administración competente puede reducir tarde en 1 o 2 horas alargando día y/o noche; debe aplicar la decisión a todas las fuentes y comunicar la diferencia sistemática al Ministerio. Puede modificar el comienzo del día y correlativamente tarde/noche para todas las fuentes. No confundir estos horarios con el 08:00–22:00 del DF 135/1989, art. 12.1."
        },
        {
          "titulo": "RD 1367/2007: siete tipos mínimos de área",
          "columnas": [
            "Tipo",
            "Uso predominante / ámbito",
            "Distinción examinable"
          ],
          "filas": [
            [
              "a",
              "Residencial",
              "Incluye parques, jardines y zonas de estancia complementarios a su habitabilidad"
            ],
            [
              "b",
              "Industrial",
              "Incluye actividad portuaria, almacenes, logística y espacios auxiliares"
            ],
            [
              "c",
              "Recreativo y espectáculos",
              "Ferias, atracciones, auditorios abiertos y competición deportiva con público"
            ],
            [
              "d",
              "Terciario distinto de c",
              "Comercio, oficinas, hostelería, alojamiento y restauración"
            ],
            [
              "e",
              "Sanitario, docente y cultural con especial protección",
              "Hospitales con ingresados, campus, bibliotecas y otras zonas especialmente sensibles"
            ],
            [
              "f",
              "Sistemas generales de transporte u otros equipamientos públicos que lo reclamen",
              "En su límite perimetral no se superan los objetivos de las áreas acústicas colindantes (anexo II, tabla A, nota 2)"
            ],
            [
              "g",
              "Espacios naturales con especial protección",
              "Objetivos establecidos para cada caso por sus necesidades específicas"
            ]
          ],
          "nota": "Arts. 5.1 y 14.3; anexos II.A y V.3. Las comunidades autónomas determinan los tipos, previendo al menos estos siete. La asignación responde al uso actual o previsto, no al nivel sonoro observado. Las zonas verdes que separan fuentes de áreas residenciales son transición y no estancia."
        },
        {
          "titulo": "RD 1367/2007: zonificación y planeamiento",
          "columnas": [
            "Supuesto",
            "Regla",
            "Referencia"
          ],
          "filas": [
            [
              "Ámbito de zonificación municipal",
              "Áreas urbanizadas y nuevos desarrollos, salvo tipos f y g",
              "Art. 5.1"
            ],
            [
              "Usos compatibles mezclados",
              "Uso predominante; suelo, superficie construida o personas según los criterios; ante duda, receptor más sensible",
              "Arts. 5.4 y anexo V.1"
            ],
            [
              "Pertenencia a áreas",
              "Un punto no puede pertenecer simultáneamente a dos tipos diferentes",
              "Art. 5.3"
            ],
            [
              "Representación",
              "Plano a escala mínima 1/5.000 o coordenadas geográficas/UTM de todos los vértices; formato geocodificado válido",
              "Art. 5.4"
            ],
            [
              "Zonificación municipal todavía no establecida",
              "Áreas delimitadas por el uso característico de la zona",
              "Art. 5.5"
            ],
            [
              "Toda figura de planeamiento",
              "Delimitación explícita; utilizar la del plan general si ya está incluida",
              "Art. 13.1"
            ],
            [
              "Cambio de usos por modificación/revisión/adaptación del plan general",
              "Revisar zonificación en el ámbito territorial correspondiente",
              "Art. 13.2"
            ],
            [
              "Plan de desarrollo que establece usos pormenorizados",
              "Realizar la oportuna delimitación de áreas",
              "Art. 13.3"
            ],
            [
              "Transición entre áreas colindantes",
              "Estudiarla cuando sus objetivos difieren en más de 5 dB(A)",
              "Anexo V.2.d)"
            ]
          ],
          "nota": "RD 1367/2007, artículos y anexo señalados. Nuevo desarrollo incluye tanto suelo rural que pasa a urbanizado como reforma o renovación de urbanización en suelo ya urbanizado (art. 2.l). Garantizar compatibilidad entre áreas, servidumbres y reservas de sonido natural (art. 5.4)."
        },
        {
          "titulo": "RD 1367/2007: plazos, vigencia y servidumbres",
          "columnas": [
            "Figura / actuación",
            "Duración o momento",
            "Condición"
          ],
          "filas": [
            [
              "Revisión de áreas acústicas",
              "Como máximo cada 10 años desde aprobación",
              "Art. 6"
            ],
            [
              "Servidumbre acústica",
              "Vigencia indefinida",
              "Revisión por modificaciones sustanciales de infraestructura con variación sonora significativa: art. 12"
            ],
            [
              "Plan que ordena ámbito afectado por servidumbre",
              "Remisión antes de aprobación inicial, revisión o modificación sustancial",
              "Informe preceptivo del órgano sustantivo competente de la infraestructura: art. 11.2"
            ],
            [
              "Servidumbre en área urbanizada existente",
              "Plan de acción simultáneo a delimitación",
              "Art. 10.1"
            ],
            [
              "Delimitación inicial de áreas, plazo histórico general",
              "Antes de 5 años desde entrada en vigor",
              "Art. 13.4; plazo ya transcurrido"
            ],
            [
              "Aglomeraciones >250.000 habitantes, plazo histórico",
              "Antes de 01/01/2008",
              "Art. 13.4; no es plazo recurrente"
            ]
          ],
          "nota": "Arts. 6 y 7–13. Servidumbres: infraestructuras viarias, ferroviarias, aéreas y portuarias existentes o proyectadas. Pueden superarse objetivos del área y limitarse usos para cumplir al menos límites aplicables. Administración competente para mapas delimita; curva residencial A1 más alejada, receptores más expuestos y referencia general de 4 m (art. 8). Medidas eficaces pueden modificar la zona; si pierden eficacia, se restituye (art. 11.1)."
        },
        {
          "titulo": "RD 1367/2007: objetivos exteriores en áreas existentes",
          "columnas": [
            "Tipo de área",
            "Ld (dB)",
            "Le (dB)",
            "Ln (dB)"
          ],
          "filas": [
            [
              "e: sanitario/docente/cultural especialmente protegido",
              "60",
              "60",
              "50"
            ],
            [
              "a: residencial",
              "65",
              "65",
              "55"
            ],
            [
              "d: terciario distinto de c",
              "70",
              "70",
              "65"
            ],
            [
              "c: recreativo y espectáculos",
              "73",
              "73",
              "63"
            ],
            [
              "b: industrial",
              "75",
              "75",
              "65"
            ],
            [
              "f: sistemas generales de infraestructuras de transporte u otros equipamientos públicos que los reclamen",
              "(2)",
              "(2)",
              "(2)"
            ]
          ],
          "nota": "Anexo II, tabla A, en la redacción del RD 1038/2012 (BOE 26-7-2012, en vigor el 27-7-2012), dictado tras la STS de 20-7-2010 que anuló la expresión «Sin determinar» del tipo f), que todavía figura en el TXT. Tipo f, sin terna propia: nota (1), medidas de prevención con las tecnologías de menor incidencia acústica de entre las mejores técnicas disponibles (art. 18.2.a de la Ley 37/2003); nota (2), «En el límite perimetral de estos sectores del territorio no se superarán los objetivos de calidad acústica para ruido aplicables al resto de áreas acústicas colindantes con ellos». Referencia: 4 m. En g los objetivos son específicos. En áreas existentes con exceso: alcanzar tabla mediante mejora progresiva/planes zonales; sin exceso: no superarla. Resto de áreas urbanizadas: tabla menos 5 dB. Zonas tranquilas: niveles por debajo de tabla menos 5 dB (art. 14)."
        },
        {
          "titulo": "RD 1367/2007: objetivos de ruido en interior",
          "columnas": [
            "Uso y recinto",
            "Ld (dB)",
            "Le (dB)",
            "Ln (dB)"
          ],
          "filas": [
            [
              "Vivienda/residencial: estancias",
              "45",
              "45",
              "35"
            ],
            [
              "Vivienda/residencial: dormitorios",
              "40",
              "40",
              "30"
            ],
            [
              "Hospitalario: zonas de estancia",
              "45",
              "45",
              "35"
            ],
            [
              "Hospitalario: dormitorios",
              "40",
              "40",
              "30"
            ],
            [
              "Educativo/cultural: aulas",
              "40",
              "40",
              "40"
            ],
            [
              "Educativo/cultural: salas de lectura",
              "35",
              "35",
              "35"
            ]
          ],
          "nota": "Art. 16 y anexo II, tabla B. Consideración de valores límite. Conjunto de emisores que inciden en recinto, incluidos instalaciones propias, actividades propias/colindantes y ruido ambiental. Altura de referencia 1,2–1,5 m. En edificaciones de áreas existentes que los superan: objetivo alcanzarlos, no aceptar el exceso."
        },
        {
          "titulo": "RD 1367/2007: objetivos de vibraciones en interior",
          "columnas": [
            "Uso",
            "Valor o regla",
            "Criterio"
          ],
          "filas": [
            [
              "Vivienda/residencial",
              "75",
              "Estacionarias: ningún valor supera objetivo"
            ],
            [
              "Hospitalario",
              "72",
              "Estacionarias: ningún valor supera objetivo"
            ],
            [
              "Educativo/cultural",
              "72",
              "Estacionarias: ningún valor supera objetivo"
            ],
            [
              "Transitorias: exceso diurno ≤3 dB",
              "1 unidad por evento",
              "Presupuesto conjunto máximo: 9 unidades"
            ],
            [
              "Transitorias: exceso diurno >3 y ≤5 dB",
              "3 unidades por evento",
              "Presupuesto conjunto máximo: 9 unidades"
            ],
            [
              "Transitorias: noche",
              "Ningún exceso",
              "Tampoco se admiten excesos >5 dB durante el día"
            ]
          ],
          "nota": "Art. 17.1.b) y anexo II, tabla C. Los periodos de vibración transitoria son 07–23 y 23–07. El máximo de 9 es ponderado, no 9 eventos de cualquier intensidad."
        },
        {
          "titulo": "RD 1367/2007: límites de nuevas infraestructuras de transporte",
          "columnas": [
            "Área receptora",
            "Ld (dB)",
            "Le (dB)",
            "Ln (dB)",
            "LAmax (dB)"
          ],
          "filas": [
            [
              "e: sanitario/docente/cultural protegido",
              "55",
              "55",
              "45",
              "80"
            ],
            [
              "a: residencial",
              "60",
              "60",
              "50",
              "85"
            ],
            [
              "d: terciario distinto de c",
              "65",
              "65",
              "55",
              "88"
            ],
            [
              "c: recreativo/espectáculos",
              "68",
              "68",
              "58",
              "90"
            ],
            [
              "b: industrial",
              "70",
              "70",
              "60",
              "90"
            ]
          ],
          "nota": "Art. 23; anexo III, tablas A1 y A2. Ld/Le/Ln: nuevas viarias, ferroviarias y aeroportuarias. LAmax: ferroviarias y aeroportuarias, no viarias. Art. 23 se aplica fuera de servidumbres acústicas; también deben evitarse superaciones aditivas de objetivos de arts. 14 y 16. Infraestructuras autonómicas/locales: plazos y condiciones determinados por comunidades autónomas (DA cuarta)."
        },
        {
          "titulo": "RD 1367/2007: límites exteriores de actividades y puertos",
          "columnas": [
            "Área receptora",
            "LK,d (dB)",
            "LK,e (dB)",
            "LK,n (dB)"
          ],
          "filas": [
            [
              "e: sanitario/docente/cultural protegido",
              "50",
              "50",
              "40"
            ],
            [
              "a: residencial",
              "55",
              "55",
              "45"
            ],
            [
              "d: terciario distinto de c",
              "60",
              "60",
              "50"
            ],
            [
              "c: recreativo/espectáculos",
              "63",
              "63",
              "53"
            ],
            [
              "b: industrial",
              "65",
              "65",
              "55"
            ]
          ],
          "nota": "Art. 24.1 y anexo III, tabla B1: nuevas instalaciones/establecimientos/actividades portuarias, industriales, comerciales, almacenamiento, deporte/recreo/ocio. Tráfico portuario, rodado y ferroviario en puertos: régimen del art. 23. Deben corregirse efectos aditivos que superen objetivos de arts. 14 y 16."
        },
        {
          "titulo": "RD 1367/2007: transmisión de actividades a locales colindantes",
          "columnas": [
            "Uso y recinto receptor",
            "LK,d (dB)",
            "LK,e (dB)",
            "LK,n (dB)"
          ],
          "filas": [
            [
              "Residencial: estancias",
              "40",
              "40",
              "30"
            ],
            [
              "Residencial: dormitorios",
              "35",
              "35",
              "25"
            ],
            [
              "Administrativo/oficinas: despachos profesionales",
              "35",
              "35",
              "35"
            ],
            [
              "Administrativo/oficinas: oficinas",
              "40",
              "40",
              "40"
            ],
            [
              "Sanitario: estancias",
              "40",
              "40",
              "30"
            ],
            [
              "Sanitario: dormitorios",
              "35",
              "35",
              "25"
            ],
            [
              "Educativo/cultural: aulas",
              "35",
              "35",
              "35"
            ],
            [
              "Educativo/cultural: salas de lectura",
              "30",
              "30",
              "30"
            ]
          ],
          "nota": "Art. 24.3–5 y anexo III, tabla B2. Colindancia: no hay transmisión a través del medio ambiente exterior en ningún momento. Otros establecimientos abiertos al público se asimilan funcionalmente. En edificios exclusivos comerciales/oficinas/industriales, límites entre locales de distintos titulares y usos compatibles atendiendo al uso del edificio (art. 24.5). No confundir con tabla B del anexo II, que evalúa el conjunto de emisores."
        },
        {
          "titulo": "RD 1367/2007: comprobación de cumplimiento",
          "columnas": [
            "Objeto",
            "Periodo / valor promedio",
            "Valores diarios",
            "Valores máximos medidos"
          ],
          "filas": [
            [
              "Objetivos de áreas: art. 15",
              "En un año: ningún valor Ld/Le/Ln supera tabla A, anexo II",
              "97 % no supera en 3 dB tabla A",
              "Regla no establece aquí margen LKeq,Ti de 5 dB"
            ],
            [
              "Objetivos interiores de ruido: art. 17.1.a)",
              "En un año: ningún valor Ld/Le/Ln supera tabla B, anexo II",
              "97 % no supera en 3 dB tabla B",
              "Vibraciones se comprueban separadamente"
            ],
            [
              "Infraestructuras art. 23: art. 25.1.a)",
              "Ningún promedio anual supera A1, anexo III",
              "Ningún valor diario supera A1 en 3 dB",
              "97 % de valores diarios no supera A2, anexo III"
            ],
            [
              "Actividades/puertos: art. 25.1.b)",
              "Ningún promedio anual supera B1 o B2, anexo III",
              "Ningún valor diario supera límite en 3 dB",
              "Ningún LKeq,Ti medido supera límite en 5 dB"
            ],
            [
              "Inspección de actividad funcionando: art. 25.2",
              "Se exige art. 25.1.b).ii) y iii)",
              "Ningún valor diario supera límite en 3 dB",
              "Ningún LKeq,Ti medido supera límite en 5 dB"
            ]
          ],
          "nota": "RD 1367/2007, arts. 15, 17 y 25. En arts. 15 y 17 se conserva la formulación literal de ningún valor para Ld/Le/Ln evaluados en un año; no significa negar la tolerancia de valores diarios del segundo criterio. No importar el 97 % al régimen de inspección de actividades."
        },
        {
          "titulo": "RD 1367/2007: medición y control",
          "columnas": [
            "Actuación",
            "Dato concreto",
            "Condición"
          ],
          "filas": [
            [
              "Inspección administrativa de actividades",
              "Únicamente mediciones",
              "Las predicciones se obtienen mediante cálculos"
            ],
            [
              "Medición interior de ruido",
              "Puertas/ventanas cerradas; mínimo 3 posiciones",
              "Si no son posibles las posiciones preferentes, centro del recinto"
            ],
            [
              "Posición interior preferente",
              "≥1 m de paredes; 1,2–1,5 m sobre piso; aproximadamente 1,5 m de ventanas",
              "Anexo I.A.3.b)"
            ],
            [
              "Caracterización de área acústica",
              "Preliminar continuo ≥24 h",
              "Episodios más significativos y fuente de mayor contribución"
            ],
            [
              "Micrófono para área acústica",
              "Preferente 4 m de altura; ≥1,20 m de fachada/paramento",
              "Otras alturas ≥1,5 m, corregidas a equivalente 4 m y justificadas"
            ],
            [
              "Infraestructuras viarias/ferroviarias/aeroportuarias",
              "≥3 series de 3 mediciones; cada medición ≥5 min",
              "Intervalo mínimo 5 min entre series"
            ],
            [
              "Cada fase uniforme de actividad/puerto",
              "≥3 mediciones; duración ≥5 s; intervalo ≥3 min",
              "Válidas si diferencia extremos ≤6 dBA; si mayor, nueva serie"
            ],
            [
              "Resultado por fase de actividad",
              "Valor más alto de los obtenidos",
              "Considerar ruido de fondo con emisor parado"
            ],
            [
              "Verificación acústica",
              "Antes y después de cada medición",
              "Desviación ≤0,3 dB respecto a referencia inicial"
            ],
            [
              "Viento exterior",
              "Pantalla antiviento; desistir si >5 m/s",
              "No sustituye demás condiciones de validez"
            ],
            [
              "Lluvia exterior",
              "Mediciones de ruido transmitido por emisor no válidas",
              "En interior valorar influencia sobre ruido de fondo"
            ],
            [
              "Instrumentos y calibradores de ruido",
              "Tipo 1/clase 1",
              "Art. 30.2; transición de 7 años para clase 2 agotada"
            ]
          ],
          "nota": "Arts. 27–31; anexos I.A y IV.A.1, 3.4 y 3.5. Frente a fachada se excluye efecto reflejado (sonido incidente). El art. 30 sigue citando la Orden de 25-9-2007 (Orden ITC/2845/2007), derogada con efectos de 24-10-2020 por la Orden ICT/155/2020, que regula ahora el control metrológico de estos instrumentos; el art. 30 no se ha modificado. Lo examinable es la exigencia de tipo 1/clase 1, no la orden."
        },
        {
          "titulo": "DF 135/1989: contenido del proyecto acústico",
          "columnas": [
            "Documento / supuesto",
            "Contenido o requisito",
            "Referencia"
          ],
          "filas": [
            [
              "Cuándo incluirlo",
              "Nuevas actividades/ampliaciones de expedientes MINP próximas a viviendas, sanitarias o docentes, o presunto incremento apreciable de ruido de fondo en zonas sanitarias/docentes/residenciales",
              "Art. 10.1; denominación MINP literal histórica"
            ],
            [
              "Memoria técnica",
              "Actividad y horario; emisión a 1 m o nivel reverberado; aislamiento bruto/silenciadores; amortiguadores y parámetros; justificación de inmisión y medidas de impacto",
              "Art. 10.2.a)"
            ],
            [
              "Plano de situación",
              "Relación de actividad con viviendas, instalaciones sanitarias y edificios docentes",
              "Art. 10.2.b)"
            ],
            [
              "Planos de aislamiento y detalles",
              "Aislamiento 1/50; detalles 1/5 de materiales, espesores y juntas",
              "Art. 10.2.b)"
            ],
            [
              "Transmisiones indirectas",
              "Incremento mínimo de inmisión de 3 dBA",
              "Art. 10.3; salvo garantía suficiente de inexistencia"
            ],
            [
              "Funcionamiento con puertas/ventanas cerradas por aislamiento",
              "Ventilación forzada",
              "Art. 10.4"
            ],
            [
              "Efectos indirectos",
              "Tráfico elevado en entorno; cargas/descargas nocturnas; funcionamiento nocturno de instalaciones auxiliares",
              "Art. 10.5"
            ],
            [
              "Edificios mixtos o locales lindantes con vivienda",
              "Acentuar prevención de vibraciones, impactos, tuberías, conductos y transporte interior",
              "Art. 11; especial atención a emisor sobre forjado con dependencias inferiores"
            ]
          ],
          "nota": "DF 135/1989, de 8 de junio, capítulo III, arts. 10–11. Es lo único vigente del decreto foral: la LF 17/2020 (disposición derogatoria) lo derogó «salvo el capítulo III», con efectos desde el 22-6-2021. Aplicar sus requisitos de proyecto junto con los límites de inmisión vigentes, sin recuperar los antiguos capítulos derogados."
        },
        {
          "titulo": "DF 135/1989: aislamiento bruto de hostelería y música",
          "columnas": [
            "Supuesto",
            "Nivel interior",
            "Aislamiento bruto mínimo a vivienda más afectada"
          ],
          "filas": [
            [
              "Bar/hostelería: usuarios; sin música o limitada; todo funcionamiento 08–22",
              "≤80 dBA",
              "50 dBA"
            ],
            [
              "Bar/hostelería: usuarios; sin música o limitada; funcionamiento al menos parcialmente nocturno",
              "≤80 dBA",
              "55 dBA"
            ],
            [
              "Bar/pub/discoteca/similar: ruido primordial de equipo musical",
              "Máximo 85 dBA",
              "60 dBA"
            ],
            [
              "Bar/pub/discoteca/similar: ruido primordial de equipo musical",
              "Máximo 90 dBA",
              "65 dBA"
            ]
          ],
          "nota": "DF 135/1989, art. 12.1–2. Aislamiento bruto entre actividad y vivienda más afectada: no es límite de inmisión en dormitorio. En supuesto musical: ventilación forzada, departamento estanco con absorción y doble puerta; Ayuntamiento puede exigir control permanente que interrumpa equipos si superan máximos. Ventanas cerradas, dos vidrios de espesor unitario ≥6 mm, separación ≥50 mm y absorción en cavidad. Medición in situ con ruido rosa (12.4)."
        },
        {
          "titulo": "DF 135/1989: implantación y control antes de apertura",
          "columnas": [
            "Supuesto",
            "Exigencia",
            "Referencia"
          ],
          "filas": [
            [
              "Discotecas/salas de baile/similares; licencia solicitada tras entrada en vigor del DF",
              "Edificio aislado o sótano de edificio con planta baja exenta de viviendas",
              "Art. 12.3; LexNavarra lo marca con una nota de vigencia (el texto que muestra coincide con el TXT)"
            ],
            [
              "Establecimientos del art. 12: antes de licencia de apertura",
              "Ayuntamiento exige certificado de mediciones del aislamiento conseguido firmado por titulado técnico competente",
              "Art. 12.5; sin perjuicio de comprobaciones administrativas"
            ]
          ],
          "nota": "DF 135/1989, art. 12. No confundir proyecto/cálculo del aislamiento con certificado de medición del resultado ejecutado. Se conserva la referencia literal a licencia de apertura del precepto; la determinación del título actual aplicable a cada actividad corresponde al régimen de LF 17/2020 y DF 26/2022 estudiado en los temas de actividades."
        },
        {
          "titulo": "DF 135/1989: máquinas, vibraciones y conductos",
          "columnas": [
            "Elemento",
            "Regla",
            "Condición / excepción"
          ],
          "filas": [
            [
              "Máquinas apoyadas en suelo",
              "Sin anclajes/apoyos directos; amortiguadores u otros elementos adecuados",
              "Bancada flotante si precisa: peso entre 1,5 y 2,5 veces el de máquina; art. 13.1"
            ],
            [
              "Máquinas junto a paredes/pilares",
              "Distancia mínima 0,70 m; no anclar ni apoyar",
              "Art. 13.2; salvo garantía de imposibilidad de transmisión por ocupar edificio completo de estructura independiente"
            ],
            [
              "Suspensión de techo",
              "Ventilación en cabina insonorizada con amortiguadores de baja frecuencia; potencia <2 kW",
              "Art. 13.2 y salvedad de edificio independiente"
            ],
            [
              "Máquinas en plantas elevadas/entreplantas/voladizos",
              "No superar potencia individual 2 kW ni suma total 5 kW",
              "Art. 13.2; salvedad de edificio completo con estructura independiente y garantía de no transmitir vibraciones; también excepciones de habitabilidad: ventilación/aire acondicionado, ascensores, escaleras mecánicas, montacargas"
            ],
            [
              "Conexión a conductos y tuberías",
              "Juntas o dispositivos elásticos",
              "Art. 14.1"
            ],
            [
              "Soporte de red",
              "Elementos elásticos en primeros tramos y, si preciso, toda red",
              "Art. 14.2"
            ],
            [
              "Paso de pared",
              "Sin empotramientos; montaje elástico de eficacia probada",
              "Art. 14.3"
            ],
            [
              "Cámaras de aislamiento de techo/doble pared",
              "No instalar conductos en esas cámaras ni usarlas como plenum de impulsión/retorno",
              "Art. 14.4"
            ]
          ],
          "nota": "DF 135/1989, capítulo III, arts. 13–14. Conservar los signos: potencia de ventilación suspendida <2 kW; distancia a pared ≥0,70 m. No convertir la excepción de determinadas instalaciones de habitabilidad en excepción general para todas las máquinas. La redacción del art. 13.2 formula conjuntamente la prohibición de máquinas de potencia superior a 2 kW y el máximo de suma de 5 kW; conservar ambas magnitudes y sus salvedades."
        }
      ],
      "datos": [
        "Área urbanizada existente: ya urbanizada antes de 24/10/2007; la entrada en vigor delimita el concepto, no la fecha de aprobación del plan (RD 1367/2007, art. 2.b y DF quinta).",
        "Nuevo desarrollo urbanístico incluye reforma o renovación de urbanización en suelo ya urbanizado (RD 1367/2007, art. 2.l).",
        "En servidumbre sobre área existente, el plan de acción cuantifica medidas, responsables y coste; cuando sea posible, incluye proyecto de financiación (art. 10.2).",
        "Vibración Law: aceleración de referencia 10^-6 m/s², ponderación wm; valor eficaz máximo con constante 1 s, slow (anexo I.B).",
        "Corrección tonal Kt: bandas 20–125 Hz, umbrales 8/12 dB; 160–400 Hz, 5/8 dB; 500–10000 Hz, 3/5 dB. Por debajo del primero: 0; entre ambos incluidos: 3; por encima del segundo: 6 dB. Varios tonos: usar mayor Kt (anexo IV.A.3.3).",
        "Redondeo del nivel sonoro resultante en procedimientos de emisores: incrementar en 0,5 dB(A) y tomar parte entera (anexo IV.A.3.4.2).",
        "Vibraciones de actividades estacionarias: medir ≥1 min en régimen más desfavorable o en cada régimen si no se identifica; de infraestructuras estacionarias: ≥5 min en periodo más intenso, o día completo sin datos de tráfico (anexo IV.B.2).",
        "Vibraciones reiterativas: medir al menos 3 veces y tomar mayor; con 6 o más eventos, se permite media más una desviación típica (anexo IV.B.2.e).",
        "Mapas estratégicos: grandes ejes viarios/ferroviarios, grandes aeropuertos y aglomeraciones; no estratégicos: al menos áreas que incumplen objetivos (art. 32).",
        "Actividad nueva: inicia tramitación de intervención administrativa indicada en art. 18.1.a–c de Ley del Ruido después de entrada en vigor del RD; no se define por fecha de inicio material del funcionamiento (DA segunda.1).",
        "Infraestructuras nuevas estatales: nuevo trazado de carretera/ferrocarril con DIA, o modificación con DIA y al menos duplicación de capacidad operativa según cada infraestructura (DA tercera.2).",
        "Vehículos a motor/ciclomotores: límite a vehículo parado = homologación +4 dB(A). Sin dato, ciclomotor: referencia 87 dB(A), a la que se aplica +4 (art. 18.2 y DA primera).",
        "Urgencias nocturnas en zonas habitadas: regulación sonora 70–90 dB(A), medida a 3 m en dirección de máxima emisión (art. 19.1).",
        "Maquinaria al aire libre, incluidas obras y construcción: ajustarse a legislación de emisiones y, cuando aplicable, RD 212/2002 (art. 22).",
        "Cumplimiento de exigencias interiores de edificación: sistema de verificación conforme a Ley del Ruido y exigencias acústicas básicas del CTE (art. 17.2).",
        "Vigencia a 21-05-2026 (BOE, pestaña «Análisis»): el RD 1367/2007 (BOE 23-10-2007, en vigor el 24-10-2007) solo tiene dos cambios, ambos en la tabla A del anexo II: la STS de 20-7-2010 (BOE 26-10-2010) anuló «Sin determinar» del tipo f) y el RD 1038/2012 sustituyó la tabla (en vigor el 27-7-2012).",
        "DF 135/1989 (BON 19-6-1989): derogado por la LF 17/2020 «salvo el capítulo III», con efectos desde el 22-6-2021; sus capítulos I, II y IV a VI ya no se estudian.",
        "Aviones de reacción subsónicos civiles de masa máxima al despegue igual o superior a 34.000 kg o de más de 19 pasajeros (sin contar la tripulación): certificación acústica previa para usar los aeropuertos civiles españoles (art. 21).",
        "Vehículos de urgencias: un año desde la entrada en vigor del real decreto para instalar el regulador de intensidad sonora (art. 19.2).",
        "Instrumentos tipo 2/clase 2: admitidos durante siete años desde la publicación del real decreto, salvo en las mediciones para sanciones o procesos judiciales, que exigen tipo 1/clase 1 (DT segunda).",
        "Altura de evaluación: nunca inferior a 1,5 m sobre el suelo; en interiores, al menos a 1 m de las paredes, entre 1,2 y 1,5 m sobre el piso y a unos 1,5 m de las ventanas (anexo I.A.3); curvas de las servidumbres, con carácter general a 4 m (art. 8).",
        "Servidumbre de una nueva infraestructura con edificaciones preexistentes dentro: la declaración de impacto ambiental fija medidas económicamente proporcionadas para que en su interior se alcancen niveles compatibles con su uso (art. 10.3)."
      ],
      "excepciones": [
        "No confundir anexo II (calidad del ambiente/conjunto de emisores) con anexo III (inmisión atribuida a emisores): dormitorio, objetivo nocturno 30 dB frente a límite nocturno de actividad colindante 25 dB.",
        "La tabla A del anexo II del TXT reproduce el texto inicial, con el tipo f «Sin determinar». Esa expresión la anuló la STS de 20-7-2010, y la tabla vigente (RD 1038/2012) remite a la nota (2): en el límite perimetral de los sectores de tipo f no se superan los objetivos de calidad acústica de las áreas colindantes.",
        "En el tipo d, objetivo existente nocturno 65 dB; no deducirlo restando 10 a su valor diurno 70 dB. Las tablas deben leerse fila a fila.",
        "Los 3 dB y 5 dB del art. 25 son criterios de cumplimiento, no incremento permanente de los límites de las tablas ni ampliación de objetivos de calidad.",
        "Para vibraciones transitorias: los excesos exactamente de 3 dB cuentan 1; los superiores a 3 y hasta 5 cuentan 3; por la noche no se admite exceso (art. 17.1.b).",
        "Los objetivos del espacio interior tienen consideración de valores límite; en áreas urbanizadas existentes con exceso el objetivo es alcanzarlos (art. 16).",
        "El capítulo III del DF 135/1989 (arts. 10–14) sigue vigente; no estudiar como vigentes sus antiguos límites de los capítulos IV/V ni confundirlos con el RD 1367/2007 (LF 17/2020, disposición derogatoria).",
        "DF 135/1989 art. 12.1 usa horario diurno 08–22 para su aislamiento bruto de hostelería; RD 1367/2007 usa por defecto día 07–19, tarde 19–23 y noche 23–07 para índices.",
        "Los mínimos de aislamiento bruto del art. 12 del DF no sustituyen la justificación de cumplimiento de inmisiones ni equivalen a los parámetros de aislamiento del CTE.",
        "El certificado previo a apertura exige mediciones del aislamiento conseguido; la mera memoria de cálculo del proyecto no acredita ese resultado (DF art. 12.5).",
        "La referencia a relaciones dosis-efecto del art. 29 y DF primera se dirige al anexo III del RD 1513/2005; el anexo III del RD 1367/2007 contiene tablas de límites de inmisión.",
        "Los intervalos intermedios de corrección Kf/Ki del anexo IV.A.3.3 aparecen con desigualdad incongruente en el TXT y HTML oficial consultado. No se convierten en una regla memorizable sin aclaración documental; sí se conserva el máximo total de correcciones de 9 dB.",
        "Los límites de las nuevas infraestructuras del art. 23 se aplican ÚNICAMENTE FUERA de las zonas de servidumbre acústica (art. 23.4); dentro de ellas, las inmisiones pueden superar los objetivos de calidad del área (art. 7.3).",
        "La tabla A2 (LAmax) solo se aplica a las nuevas infraestructuras FERROVIARIAS Y AEROPORTUARIAS, no a las viarias (art. 23.2).",
        "La actividad portuaria está en el art. 24.1 (tabla B1), pero al tráfico portuario y al rodado y ferroviario que circula por los puertos se le aplican los valores límite del art. 23.",
        "DT segunda: los instrumentos tipo 2/clase 2 nunca valían para las mediciones que sirven de base a sanciones administrativas o a procesos judiciales; ahí siempre tipo 1/clase 1.",
        "DF art. 12.3 (discotecas en edificios aislados o en sótanos con la planta baja sin viviendas): LexNavarra lo acompaña de una nota de vigencia que no figura en el TXT y que no se ha podido leer; estúdialo con esa reserva."
      ]
    }
  };
