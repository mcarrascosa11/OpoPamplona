// Resumen del tema E21. Formato: cabecera de src/data/resumenes.js.
// Revisado el 02-11-2026 (chequeo del tema) contra la redacción vigente el 21-05-2026. LexNavarra (DF 26/2022,
// r=54772; BON n.º 89, de 9-5-2022, con corrección de errores en el BON de 13-5-2022): el índice no tiene ninguna
// «Nota de vigencia» en los Títulos I, IV y VI ni en los Anejos I y II, así que el TXT reproduce el texto vigente.
// La LF 17/2020 (BOE-A-2021-526) solo ha cambiado en su DA 8.ª (LF 14/2025, BON 13-11-2025, y LF 15/2026, BON
// 29-9-2026, posterior), que el reglamento no cita. Única remisión desfasada: el art. 58.1.l cita el RD 2267/2004,
// derogado por el RD 164/2025 (BOE 10-4-2025, en vigor el 10-5-2025); el propio artículo añade «o normativa
// correspondiente en vigor». Correcciones del chequeo: art. 81.1 (vinculan las resoluciones sancionadoras que
// pongan fin a la vía administrativa, no las «firmes»), art. 81.3 (no fija un mes de pago: eso es el art. 79.6),
// art. 59.5, Anejo I (hospitalización «y/o», residencial público, casas rurales, locales cubiertos) y Anejo II.
export default {
  intro: "El Decreto Foral 26/2022, de 30 de marzo (BON n.º 89, de 9-5-2022), aprueba el reglamento de desarrollo de la Ley Foral 17/2020, de 16 de diciembre, reguladora de las actividades con incidencia ambiental. Regula los procedimientos de autorización ambiental integrada y unificada, evaluación de afecciones ambientales y licencia de actividad clasificada, la inspección, la restauración de la legalidad y la sustitución de la multa por una prestación ambiental. Para el examen solo entran el Título I (disposiciones generales, arts. 1-11), el Título IV (licencia de actividad clasificada, arts. 45-64), el Título VI (restauración de la legalidad ambiental, arts. 77-81) y los Anejos I (actividades que necesitan informe de protección civil) y II (las que necesitan informe de salud pública). Los Títulos II (autorizaciones ambientales), III (evaluación de afecciones), V (inspección y control) y VII (prestación ambiental sustitutoria) quedan fuera. Vigencia a 21-05-2026: el decreto no se ha modificado; la única remisión desfasada es la del art. 58.1.l al RD 2267/2004, sustituido por el RD 164/2025.",
  bloques: [
    {
      h: "Objeto y definiciones (arts. 1-2)",
      nota: "La trampa clásica es confundir el órgano sustantivo (el que autoriza la implantación de instalaciones, proyectos y actividades) con el órgano ambiental (el de la Dirección General de medio ambiente que analiza técnicamente los expedientes de evaluación ambiental y formula las declaraciones e informes de impacto ambiental). La definición de instalación existente ancla una fecha exacta: 22 de junio de 2021, con un margen de doce meses para la que tuviera solicitada la autorización. El promotor o titular no es solo quien proyecta: también quien explota total o parcialmente o posee la instalación, sea persona física o jurídica, pública o privada, con independencia de la Administración que deba autorizarla.",
      items: [
        "Art. 1: objeto, el desarrollo de diversos aspectos de la LF 17/2020. Regula: a) los procedimientos de autorización ambiental integrada, autorización ambiental unificada, evaluación de afecciones ambientales y licencia de actividad clasificada; b) el régimen de inspección y la restauración de la legalidad infringida y reposición de la realidad física alterada; c) el procedimiento para sustituir la multa por una prestación ambiental de restauración, conservación o mejora en beneficio del medio ambiente",
        "Art. 2.a: instalación existente = la del ámbito de la LF 17/2020 en funcionamiento, autorizada antes del 22 de junio de 2021, o que haya solicitado las autorizaciones exigibles, siempre que se haya puesto en funcionamiento a más tardar doce meses después",
        "Art. 2.b: órgano sustantivo = el competente para autorizar la implantación de las instalaciones, proyectos y el ejercicio de las actividades de la LF 17/2020",
        "Art. 2.c: órgano ambiental = órgano de la Dirección General con competencias en medio ambiente que realiza el análisis técnico de los expedientes de evaluación ambiental y formula las declaraciones de impacto ambiental y los informes de impacto ambiental",
        "Art. 2.d: promotor o titular = persona física o jurídica, pública o privada, que explote total o parcialmente o posea una instalación, o pretenda realizar un proyecto o actividad de la LF 17/2020, con independencia de la Administración competente para su autorización",
        "Art. 2.e: unidades subordinadas = unidades técnicas cuyo funcionamiento es dependiente y exclusivo respecto del de otra unidad técnica principal"
      ]
    },
    {
      h: "Instalaciones independientes y varios titulares (arts. 3-4)",
      nota: "El criterio de independencia es técnico, no territorial: dos instalaciones en el mismo emplazamiento son independientes, y cada una necesita su autorización, si no guardan relación técnica o si, guardándola, no son unidades subordinadas. Con varios titulares la regla es la responsabilidad solidaria; el reparto de responsabilidades solo cabe si lo pidieron las titulares al presentar la solicitud.",
      items: [
        "Art. 3.1: instalaciones o actividades del mismo emplazamiento = independientes, cada una con su autorización, cuando: a) no guarden relación de índole técnica, o b) la guarden pero no constituyan unidades subordinadas",
        "Art. 3.2: excepcionalmente, el órgano sustantivo, de manera motivada y por razones de una mayor protección ambiental, puede descartar esa independencia: la autorización ambiental o licencia de actividad clasificada será única para todas",
        "Art. 4: con más de una persona titular, todas son responsables solidarias del cumplimiento de las condiciones de la autorización o licencia del conjunto de la instalación y de los efectos de su funcionamiento",
        "Art. 4, alternativa: la autorización o licencia puede detallar el alcance de la responsabilidad de cada titular si así lo solicitaron en el momento de la solicitud, sin perjuicio del marco legal de distribución de responsabilidades"
      ]
    },
    {
      h: "Régimen jurídico, tramitación y garantías (arts. 5-11)",
      nota: "Todo se tramita por vía electrónica y el silencio es desestimatorio en todos los procedimientos del Reglamento; la resolución tardía no queda vinculada por el silencio. La confidencialidad la propone el titular, pero nunca alcanza a la ubicación ni a los impactos ambientales (consumos de agua, energía y combustibles, residuos, emisiones a la atmósfera y aguas residuales). Las garantías financieras (fianza o seguro obligatorio de responsabilidad ambiental) se exigen de forma motivada, y su cuantía se fija con un análisis de riesgos medioambientales o con el instrumento sectorial de la Ley 26/2007.",
      items: [
        "Art. 5.1: autorización ambiental integrada → legislación básica de prevención y control integrados de la contaminación, con las especificidades del Reglamento",
        "Art. 5.2: autorización ambiental unificada, evaluación de afecciones ambientales y licencia de actividad clasificada → LF 17/2020, con las especificidades del Reglamento",
        "Art. 5.3: en lo no regulado: Ley 39/2015 y, en su caso, LF 11/2019 (Administración de la Comunidad Foral y sector público institucional foral) o LF 6/1990 (Administración Local de Navarra) y demás normativa de administración local",
        "Art. 6: los procedimientos se tramitan por vía electrónica; las Administraciones promoverán que se habiliten los medios necesarios",
        "Art. 7: vencido el plazo sin notificar resolución expresa, los interesados pueden entender desestimada su solicitud y recurrir; la resolución expresa posterior se adopta sin vinculación alguna al sentido del silencio",
        "Art. 8.1: el titular o promotor señala qué datos de la solicitud son, a su juicio, confidenciales; el órgano competente puede entender motivadamente que no lo son",
        "Art. 8.2: pueden ser confidenciales: a) la información comercial e industrial, si su confidencialidad está prevista en una norma con rango de ley o en un reglamento comunitario; b) los derechos de propiedad intelectual e industrial, salvo que el titular haya consentido su divulgación; c) los datos personales, salvo que el interesado haya consentido su tratamiento o revelación",
        "Art. 8.3: en ningún caso son confidenciales los datos de ubicación y de potenciales impactos ambientales: consumos de agua, energía y combustibles, producción de residuos, emisiones a la atmósfera y aguas residuales",
        "Art. 9.1: si el órgano competente lo exige de forma motivada, la autorización integrada o unificada o la licencia de actividad clasificada puede obligar a depositar una fianza o a suscribir un seguro obligatorio de responsabilidad ambiental frente a accidentes, averías y funcionamiento anómalo",
        "Art. 9.2: suma asegurada según un análisis de riesgos medioambientales de la instalación o según el instrumento sectorial de análisis de riesgos de la Ley 26/2007, de responsabilidad medioambiental",
        "Art. 10: los incumplimientos se sancionan conforme al Título III de la LF 17/2020",
        "Art. 11: registros de datos cualitativos con desagregación por sexo; análisis y estudios con perspectiva de género"
      ]
    },
    {
      h: "Solicitud y contenido del proyecto técnico (arts. 45-46)",
      nota: "El proyecto técnico es el núcleo documental de la solicitud: sin él no empieza a correr el plazo de concesión. El contenido mínimo no se queda en describir la actividad: hay que identificar las emisiones con sus valores límite, los residuos con su código LER, las medidas correctoras y el programa de control, y justificar expresamente si la actividad está en el Anejo II (salud pública) o en el Anejo I (protección civil). Si lo está, se añade un anexo específico.",
      items: [
        "Art. 45.1: la solicitud se presenta ante la entidad local en cuyo término municipal se ubique la actividad, acompañada de un proyecto técnico",
        "Art. 45.2: el plazo para conceder la licencia se computa desde el día de presentación de la solicitud, siempre que vaya acompañada del proyecto técnico del art. 46",
        "Art. 45.3: la solicitud indica la identidad del titular o titulares (quien explote total o parcialmente o posea la instalación)",
        "Art. 46.1.a: descripción de la actividad: instalaciones, superficies ocupadas y construidas, procesos productivos, consumos de materias primas, maquinaria y producto o servicio",
        "Art. 46.1.b y c: en suelo no urbanizable, la documentación técnica de la legislación de ordenación del territorio y urbanismo (actividad autorizable) y la referente a las afecciones ambientales",
        "Art. 46.1.d: emisiones previsibles a la atmósfera, las aguas y el suelo, ruidos y vibraciones, con su origen, los valores límite de emisión y el nivel sonoro exterior",
        "Art. 46.1.e: residuos con su código LER, cantidades, gestión en la instalación y código y operación final de gestión",
        "Art. 46.1.f: medidas correctoras y sistemas de depuración de emisiones y residuos; medidas de uso eficiente del agua y la energía",
        "Art. 46.1.g, h e i: en su caso, anexo para la autorización de productor o gestor de residuos; programa de control y vigilancia (metodología, frecuencia y evaluación de las mediciones); medidas de protección contra incendios",
        "Art. 46.1.j: justificación expresa de si requiere informe de salud pública (Anejo II); si lo requiere, anexo específico con los aspectos sanitarios por separado: aguas de consumo humano, aguas regeneradas y recicladas, legionelosis, sanidad mortuoria, biocidas, tatuajes y piercing, tabaco, uso recreativo del agua y residuos sanitarios",
        "Art. 46.1.k: justificación expresa de si requiere informe de protección civil (Anejo I); si lo requiere, anexo específico con las medidas de protección contra incendios",
        "Art. 46.1.l: instalaciones ganaderas: la documentación del Anexo 13 del DF 31/2019",
        "Art. 46.1.m, n y ñ: información para fijar la fianza de restauración del emplazamiento y el límite de indemnizaciones del seguro de responsabilidad civil (los productores de residuos peligrosos, el seguro de la legislación de residuos); cualquier otra que exija la normativa sectorial",
        "Art. 46.2: el proyecto consta de cuatro documentos: Memoria, Diagrama de flujo (proceso y actividad en todas sus etapas), Documentación gráfica y Presupuesto económico con el coste de todas las medidas de protección ambiental",
        "Art. 46.2.c: planos mínimos: situación y emplazamiento, proceso e instalaciones, redes de aguas residuales y pluviales, medidas correctoras y sistemas de depuración, afecciones ambientales y protección contra incendios"
      ]
    },
    {
      h: "Tramitación de la licencia: admisión, información pública, informes y resolución (arts. 47-54)",
      nota: "El órgano competente para conceder la licencia puede inadmitirla en 15 días por razones de competencia municipal (planeamiento u ordenanzas). La información pública dura al menos 20 días desde su publicación en el BON, con anuncio en el tablón del Ayuntamiento y notificación personal a propietarios y ocupantes de las fincas inmediatas (y a los Concejos en los municipios compuestos). Los informes del art. 49 son preceptivos y vinculantes; los de la Administración de la Comunidad Foral se emiten en un mes y, si no llegan, la tramitación sigue. Resolución: 4 meses desde la documentación completa, con silencio desestimatorio.",
      items: [
        "Art. 47: inadmisión expresa y motivada en el plazo de 15 días por razones de competencia municipal basadas en el planeamiento urbanístico o en las ordenanzas municipales",
        "Art. 48.1: completada la documentación, información pública no inferior a 20 días desde su publicación en el BON, anuncio en el tablón del Ayuntamiento y notificación personal a propietarios y ocupantes de las fincas inmediatas; en los municipios compuestos, también a los Concejos",
        "Art. 48.2: si la actividad requiere autorización administrativa sustantiva, la información pública puede ser común con la de esa autorización",
        "Art. 48.3: se excluyen de la información pública los datos que el órgano competente haya considerado confidenciales, previa solicitud del promotor",
        "Art. 48.4: las alegaciones y observaciones se remiten al promotor para que manifieste lo que estime oportuno en 15 días",
        "Art. 49.1: concluida la información pública, informes de los servicios técnicos de la entidad local y remisión del expediente, con las alegaciones, a las Administraciones que deban pronunciarse",
        "Art. 49.2: si requiere autorización de actividades en suelo no urbanizable, antes de conceder la licencia se remite el expediente completo al Departamento de ordenación del territorio y urbanismo",
        "Art. 49.3: si ese Departamento deniega la autorización en suelo no urbanizable, resolución motivada que pone fin al procedimiento y archivo de las actuaciones",
        "Art. 49.4: proyectos del Anejo I o II: informe de los departamentos competentes sobre los riesgos para la salud o la seguridad e integridad de personas o bienes; protección civil informa sobre protección contra incendios y evacuación en caso de siniestro",
        "Art. 49.5: proyectos del ámbito del RD 840/2015 (accidentes graves con sustancias peligrosas): informe de protección civil",
        "Art. 49.6: los informes del art. 49 son preceptivos y vinculantes para las entidades locales al conceder la licencia",
        "Art. 49.7: informes de la Administración de la Comunidad Foral en un mes desde la recepción del resultado de la información pública, salvo que su normativa permita un plazo mayor; si no se emiten y notifican, se continúa la tramitación",
        "Art. 50: instalaciones ganaderas: el Ayuntamiento remite la documentación del DF 31/2019 al órgano competente para la autorización ganadera",
        "Art. 51: la licencia incluye, en su caso, las condiciones de la autorización de vertido a la red pública de saneamiento; si procede, se recaba informe de las Mancomunidades de Servicios sobre el vertido y los residuos",
        "Art. 52.1: propuesta de resolución con contestación a las alegaciones, referencia expresa al cumplimiento de la normativa urbanística y ambiental y, en su caso, aceptación del vertido a los colectores públicos o de los residuos en los servicios municipales",
        "Art. 52.2: audiencia al solicitante y demás interesados durante 15 días; las alegaciones sobre materias de informes vinculantes se trasladan a esos órganos, que se pronuncian con carácter vinculante",
        "Art. 53.1: resolución y notificación en 4 meses desde la documentación completa; vencido el plazo sin notificar, la solicitud se entiende desestimada",
        "Art. 53.2: resolución motivada, con las alegaciones y su valoración y el contenido del art. 43 de la LF 17/2020",
        "Art. 53.3: se notifica al titular, a los órganos con informe vinculante, a quienes alegaron y al resto de interesados, y se publica en el BON",
        "Art. 53.4: en los municipios compuestos, traslado de las licencias a los Concejos en 5 días",
        "Art. 54: vertidos a aguas continentales de cuencas gestionadas por la Administración General del Estado: copia de la resolución al organismo de cuenca para el censo nacional de vertidos"
      ]
    },
    {
      h: "Licencia de obras, inicio de la actividad y caducidad (arts. 55-56)",
      nota: "Mientras se tramita la licencia de actividad clasificada puede darse la licencia de obras, salvo que la actividad requiera autorización en suelo no urbanizable, presente riesgos para la seguridad (Anejo I) o para la salud (Anejo II) de las personas o necesite autorización ganadera; las obras quedan bajo la exclusiva responsabilidad del titular y no condicionan la licencia. La actividad se pone en marcha con una declaración responsable (fecha de inicio y cumplimiento de las condiciones). Si vence el plazo de puesta en marcha, que fija la LF 17/2020 y no este artículo, la caducidad se declara expresamente, total o parcial, previa audiencia al titular.",
      items: [
        "Art. 55.1: licencia de obras en tanto se tramita la licencia de actividad clasificada si la actividad: a) no requiere autorización de actividades en suelo no urbanizable; b) no presenta riesgos para la seguridad de las personas; c) no presenta riesgos para su salud; d) no requiere autorización ganadera",
        "Art. 55.2: obras bajo la exclusiva responsabilidad del titular, sin condicionar el otorgamiento o la denegación de la licencia ni la obligada adaptación a sus condiciones; los municipios compuestos trasladan las licencias de actividad a los Concejos en 5 días",
        "Art. 56.1: puesta en marcha tras la declaración responsable del promotor (LF 17/2020 y Ley 39/2015), con la fecha de inicio de la actividad y el cumplimiento de las condiciones de la licencia",
        "Art. 56.2: transcurrido el plazo sin puesta en funcionamiento, resolución expresa de caducidad de la licencia o de la parte que corresponda, previa audiencia al titular",
        "Art. 56.3: vertidos al dominio público hidráulico que requieran autorización del organismo de cuenca: la declaración responsable se acompaña de esa autorización de vertido"
      ]
    },
    {
      h: "Régimen de modificaciones: sustanciales y no sustanciales (arts. 57-58)",
      nota: "Hay modificación cuando, en condiciones normales de funcionamiento, se introduce un cambio no previsto en la licencia que afecta a las características, los procesos productivos, el funcionamiento o la extensión de la actividad. El titular la comunica razonando si es sustancial; el órgano decide en un mes; si el titular la consideró no sustancial y en ese mes no hay pronunciamiento contrario, puede ejecutarla. Umbrales del art. 58: 50 % para la capacidad de producción y los consumos de agua, materias primas o energía; 25 % para emisiones atmosféricas y vertidos; 40 % para el almacenamiento; residuos peligrosos, más de 4 t/año con modificación estructural y más del 25 %; no peligrosos, más de 20 t/año y más del 50 %.",
      items: [
        "Art. 57: modificación = cambio no previsto en la licencia, en condiciones normales de funcionamiento, que afecte a características, procesos productivos, funcionamiento o extensión de la actividad o instalación; puede ser sustancial o no sustancial",
        "Art. 57.a: el titular notifica cualquier modificación del proceso productivo o de aspectos relacionados con los resultados ambientales, indicando razonadamente si la considera sustancial o no",
        "Art. 57.b: el órgano competente determina expresamente en 1 mes si es sustancial o no",
        "Art. 57.c: si el titular la considera no sustancial, puede ejecutarla si el órgano no se pronuncia en sentido contrario en 1 mes, sin perjuicio de la licencia de obras u otras autorizaciones necesarias",
        "Art. 57.d: si el titular o el órgano la consideran sustancial, no puede llevarse a cabo hasta que se modifique la licencia por el procedimiento del art. 59",
        "Art. 57.e: la resolución que determina el tipo de modificación vale 4 meses; si el titular no inicia el procedimiento en ese plazo, pierde su eficacia y debe notificar de nuevo la modificación",
        "Art. 58.1.a: ampliación o modificación que, por sí sola, alcance los umbrales de capacidad del Anejo 3 de la LF 17/2020, cuando existan",
        "Art. 58.1.b: incremento de más del 50 % de la capacidad de producción en unidades de producto (gestión de residuos: unidades gestionadas; ganaderas: plazas y UGM)",
        "Art. 58.1.c: incremento superior al 50 % de las cantidades autorizadas de consumo de agua, materias primas o energía",
        "Art. 58.1.d: incremento superior al 25 % de la emisión másica de cualquier contaminante atmosférico de la licencia o del total de un foco emisor; nuevos focos del grupo C del Catálogo de actividades potencialmente contaminadoras de la atmósfera; nuevos contaminantes en cantidades significativas",
        "Art. 58.1.e y f: incremento superior al 25 % de la emisión másica, la concentración o el caudal de los vertidos a red pública de saneamiento o de los vertidos de sustancias prioritarias",
        "Art. 58.1.g: residuos peligrosos: incremento de más de 4 t/año, siempre que haya modificación estructural del proceso y un incremento de más del 25 % sobre la producción máxima autorizada",
        "Art. 58.1.h: residuos no peligrosos (incluidos los inertes): incremento de más de 20 t/año, siempre que represente más del 50 % sobre la producción máxima autorizada",
        "Art. 58.1.i: modificación significativa de los sistemas de tratamiento de emisiones o vertidos, o de los procesos en las instalaciones de gestión de residuos",
        "Art. 58.1.j: incremento superior al 40 % de la capacidad total de almacenamiento de productos químicos, sustancias peligrosas relevantes y residuos",
        "Art. 58.1.k: ampliación que, por sí sola, supere algún umbral del Anejo I del Reglamento; si consta de varias actuaciones, se suma la superficie construida o la ocupación de todas",
        "Art. 58.1.l: en industrias o almacenamientos, aumento del nivel de riesgo intrínseco del sector de incendio modificado (8 niveles de la tabla 1.3 del anexo I del RD 2267/2004 «o normativa correspondiente en vigor»: hoy, tabla 1.3.1 del RD 164/2025)",
        "Art. 58.1.m y n: inclusión de una nueva instalación o actividad del Anejo II; aumento de la categoría de toxicidad de los biocidas",
        "Art. 58.2: la lista no es limitativa; el órgano competente puede fijar criterios más restrictivos según las circunstancias de la modificación",
        "Art. 58.3: la suma de dos o más modificaciones no sustanciales que cumpla algún criterio del apartado 1 es modificación sustancial"
      ]
    },
    {
      h: "Procedimiento de modificación sustancial y eficacia (arts. 59-61)",
      nota: "La modificación sustancial sigue un procedimiento parecido al de la licencia, pero más corto: información pública de al menos 15 días (no 20) y resolución en 3 meses (no 4). Se pone en funcionamiento en un plazo máximo de 2 años, salvo que se fije otro, previa declaración responsable, y sus condiciones se aplican desde que se presenta esa declaración. Mientras no se resuelva, no se pueden conceder licencias de obras (al revés que en el art. 55).",
      items: [
        "Art. 59.1: solicitud ante el órgano competente con el proyecto técnico de la modificación y la documentación sobre las condiciones afectadas",
        "Art. 59.2: requerimiento de subsanación en 10 días; si no se atiende, se tiene por desistido al solicitante",
        "Art. 59.3: información pública no inferior a 15 días desde su publicación en el BON; el resultado se traslada al titular, que puede alegar en 15 días",
        "Art. 59.4: si afecta a condiciones que fueron objeto de informe vinculante, nuevo informe del órgano competente en el plazo máximo de 1 mes",
        "Art. 59.5: propuesta de resolución que incorpora las condiciones de los informes vinculantes y decide sobre el resto de informes y cuestiones planteadas; se notifica a los interesados para alegar en 15 días",
        "Art. 59.6: las alegaciones sobre materias de informes vinculantes se trasladan a esos órganos, que se pronuncian con carácter vinculante en el plazo máximo de 15 días",
        "Art. 59.7: resolución en 3 meses; se notifica al titular, a los órganos con informe vinculante, a quienes alegaron y a los demás interesados, y se publica en el BON",
        "Art. 60.1: plazo máximo de 2 años para la puesta en funcionamiento de la modificación sustancial, salvo que se establezca un plazo distinto",
        "Art. 60.2: no puede entrar en funcionamiento sin una declaración responsable previa de puesta en funcionamiento (fecha de inicio y cumplimiento de las condiciones de la resolución)",
        "Art. 61.1: las condiciones de la resolución de modificación sustancial se aplican desde la fecha de presentación de esa declaración responsable",
        "Art. 61.2 y 3: si vence el plazo sin puesta en funcionamiento, la autorización de la modificación se entiende caducada y sin efecto; el órgano declara expresamente la caducidad, previa audiencia al titular",
        "Art. 61.4: no se pueden conceder licencias de obras en tanto no se haya resuelto el procedimiento de modificación sustancial"
      ]
    },
    {
      h: "Modificación no sustancial, de oficio y a solicitud del titular (arts. 62-64)",
      nota: "La modificación no sustancial es la residual (todo lo que no es sustancial); si obliga a modificar la licencia, se publica un anuncio en el BON. La modificación de oficio la inicia el órgano competente con una resolución que concreta las causas, las condiciones que cambian y un plazo razonable para aplicarlas. La modificación a solicitud del titular exige una memoria técnica y un estudio de que las nuevas condiciones se ajustan a las mejores técnicas disponibles (MTD). En ambas la información pública es potestativa (al menos 15 días), hay 15 días de alegaciones y se resuelve en 3 meses; sus condiciones rigen desde la fecha de la resolución o la que esta fije.",
      items: [
        "Art. 62: modificación no sustancial = la que no es sustancial; si exige modificar la licencia, anuncio en el BON",
        "Art. 63.1: la modificación de oficio se inicia por resolución del órgano competente, que concreta las causas, las condiciones que se modifican y un plazo razonable para implantarlas",
        "Art. 63.2: si afecta a condiciones que fueron objeto de informe vinculante, se pide informe a los órganos competentes",
        "Art. 63.3: información pública, si el órgano lo considera oportuno, no inferior a 15 días desde su publicación en el BON",
        "Art. 63.4: traslado del acuerdo y, en su caso, del resultado de la información pública al titular, que puede alegar en 15 días",
        "Art. 63.5: las alegaciones sobre materias de informes vinculantes se trasladan, con la propuesta de resolución, a esos órganos, que se pronuncian con carácter vinculante en el plazo máximo de 15 días",
        "Art. 63.6: resolución en 3 meses; notificación al titular, a los órganos con informe vinculante, a quienes alegaron y a los demás interesados, y publicación en el BON",
        "Art. 63.7: las nuevas condiciones rigen desde la fecha de la resolución o desde la fecha que esta fije",
        "Art. 64.1: la solicitud del titular se acompaña de una memoria técnica de los cambios y de un estudio que justifique que las nuevas condiciones se ajustan a las mejores técnicas disponibles (MTD)",
        "Art. 64.2: si afecta a condiciones que fueron objeto de informe vinculante, se pide informe a los órganos competentes",
        "Art. 64.3 y 4: información pública potestativa no inferior a 15 días; traslado al titular para alegar en 15 días",
        "Art. 64.5: tras una evaluación ambiental de los cambios, propuesta de resolución notificada a los interesados para alegar en 15 días",
        "Art. 64.6: las alegaciones sobre materias de informes vinculantes se trasladan a esos órganos, que se pronuncian en el plazo máximo de 15 días con carácter vinculante",
        "Art. 64.7: resolución en 3 meses; si no se notifica, podrá entenderse desestimada la solicitud",
        "Art. 64.8: notificación al titular, a los órganos con informe vinculante, a quienes alegaron y a los demás interesados, y publicación en el BON",
        "Art. 64.9: las nuevas condiciones rigen desde la fecha de la resolución o desde la fecha que esta fije"
      ]
    },
    {
      h: "Restauración de la legalidad ambiental (arts. 77-81)",
      nota: "La restauración no excluye la sanción. La resolución que ordena la legalización o la clausura definitiva exige audiencia previa; si ordena legalizar, fija el procedimiento y el plazo para iniciarlo, y la tramitación es la misma que para la autorización. Si la actividad necesitaba declaración de impacto ambiental o informe de afecciones ambientales, se fijan condiciones ambientales y pueden imponerse medidas compensatorias. En el procedimiento de reposición e indemnización vinculan los hechos probados por resoluciones penales firmes y por resoluciones sancionadoras que pongan fin a la vía administrativa; debe resolverse en 6 meses desde su iniciación y, si no, caduca y se archiva.",
      items: [
        "Art. 77.1: la Administración competente que conoce que una actividad sujeta a intervención ambiental funciona sin autorización o licencia hace las actuaciones precisas para decidir si procede o no su legalización, sin perjuicio de las sanciones",
        "Art. 77.2: la resolución que ordena la legalización o la clausura definitiva se adopta previa audiencia del titular; si ordena la legalización, indica el procedimiento de intervención ambiental y el plazo para iniciarlo; la tramitación es la misma que para la autorización",
        "Art. 77.3: si procede la legalización y la actividad requería declaración de impacto ambiental o informe de afecciones ambientales, se fijan condiciones ambientales para minimizar sus efectos y pueden establecerse medidas compensatorias",
        "Art. 77.4: la resolución puede incluir, además, la suspensión de la actividad (art. 68 de la LF 17/2020) y los deberes de reposición de la realidad física alterada e indemnización",
        "Art. 78.1: para garantizar las medidas cautelares, fianza y/o aval bancario equivalente al valor de la restauración",
        "Art. 78.2 y 3: se devuelve cuando el órgano verifica el cumplimiento de todas las obligaciones y condiciones; si hay incumplimientos, se sigue el procedimiento del art. 79",
        "Art. 79.1: si se incumplen las medidas cautelares, procedimiento de oficio para requerir la subsanación de las deficiencias, la adopción de las medidas y la reposición de la situación alterada",
        "Art. 79.2: se notifica al interesado con un plazo no inferior a 10 días ni superior a 15 para alegaciones y documentos",
        "Art. 79.3: concluida la instrucción, propuesta de resolución notificada a todos los interesados, con plazo para alegar",
        "Art. 79.4: resolución en 6 meses desde la fecha del acuerdo de inicio",
        "Art. 79.5: archivo de las actuaciones si el interesado subsana las deficiencias y, en su caso, restaura la legalidad ambiental",
        "Art. 79.6 y 7: si procede la reparación, la indemnización o la ejecución a su costa, la resolución fija la cantidad y da 1 mes para el pago voluntario; si no paga, recaudación ejecutiva (en la Comunidad Foral, la Hacienda Tributaria de Navarra) por vía de apremio, ejecutando la fianza o el aval",
        "Art. 80.1: con indicios o constancia de daños al medio ambiente o de una alteración no permitida de la realidad física o biológica, procedimiento específico para comprobar los daños y fijar los deberes de reponer e indemnizar; no puede iniciarse mientras haya un sancionador en curso sobre los mismos hechos y sujetos",
        "Art. 80.2: se inicia de oficio por el órgano del Departamento con competencias en medio ambiente y, en su caso, de la entidad local",
        "Art. 80.3: se tramita conforme a la legislación de procedimiento administrativo común; pueden adoptarse medidas provisionales y cautelares en cualquier momento y hay que dar audiencia a los responsables",
        "Art. 81.1: vinculan los hechos declarados probados por resoluciones penales firmes y por resoluciones de procedimientos sancionadores que pongan fin a la vía administrativa",
        "Art. 81.2: la reposición fija los elementos para restaurar el medio a su estado originario, la forma y los métodos, el plazo de ejecución y la advertencia de ejecución forzosa, previo apercibimiento",
        "Art. 81.3: la resolución que fija la indemnización indica el plazo para pagarla voluntariamente; transcurrido, ejecución forzosa conforme a la LF 17/2020 y la Ley 39/2015",
        "Art. 81.4: resolución y notificación en el plazo máximo de 6 meses desde la iniciación; si no, el procedimiento caduca, se archivan las actuaciones y se notifica a los interesados"
      ]
    },
    {
      h: "Anejos I y II: informes vinculantes de protección civil y salud pública",
      nota: "Los umbrales del Anejo I son lo más preguntable: 100 personas (espectáculos, locales sociales, tanatorios); 500 m² (alojamiento turístico, sanitario con hospitalización, residencial público, cultural y religioso); 750 m² de zona de ventas (comercio); 1.000 m² (industrias y almacenamientos, otros sanitarios, aparcamientos, docentes); 2.000 m² (administrativo). Sin umbral: AAI y AAU (salvo ganaderas), campings e infraestructuras de transporte. La ocupación se calcula con las densidades del CTE DB SI. El Anejo II no tiene umbrales: es una lista cerrada de actividades e instalaciones con riesgo sanitario.",
      items: [
        "Anejo I.1.A y B: todas las instalaciones y actividades con autorización ambiental integrada o unificada, excepto las explotaciones ganaderas",
        "Anejo I.1.C, grupos 1 a 14 (industrias y almacenamientos): superficie construida del establecimiento superior a 1.000 m²; se exceptúa el grupo 8 (explotaciones ganaderas)",
        "Anejo I.1.C, 15.1: espectáculos públicos y actividades recreativas del catálogo del DF 202/2002 (o el vigente) en edificios, locales e instalaciones cubiertos con aforo superior a 100 personas; también locales sociales, sociedades gastronómicas y análogos de ámbito privado con ocupación superior a 100 personas",
        "Anejo I.1.C, 15.2: tanatorios y velatorios de cadáveres con ocupación superior a 100 personas",
        "Anejo I.1.C, 15.5: alojamiento turístico (hoteles, hospederías, albergues, refugios de montaña, centros y colonias de vacaciones, balnearios y análogos), excepto casas rurales, con superficie construida superior a 500 m²; campings, en todos los casos",
        "Anejo I.1.C, 15.6: actividades y centros comerciales con superficie construida de la zona de ventas superior a 750 m²",
        "Anejo I.1.C, 15.8, sanitarias: con hospitalización y/o ocupadas mayoritariamente por personas que precisan ayuda para evacuar, más de 500 m²; las demás, más de 1.000 m²",
        "Anejo I.1.C, 15.8: residencial público no turístico (residencias de personas mayores, juveniles y análogas), más de 500 m²; aparcamientos (incluidos trasteros, locales técnicos y análogos de la misma planta), más de 1.000 m²; docentes, más de 1.000 m²; administrativas, incluso centros de investigación, más de 2.000 m²; culturales y religiosas (museos, bibliotecas, archivos, casas de cultura, iglesias…), más de 500 m²; infraestructuras de transporte (estaciones, aeropuertos…), sin umbral",
        "Anejo I.2: ocupación con las densidades del CTE DB SI en vigor o de la normativa específica; actividad principal con otras vinculadas y elementos comunes de circulación: superficie de todo el establecimiento y su actividad principal; centros que agrupan establecimientos con elementos comunes: superficie y/o aforo de todo el centro y su actividad principal",
        "Anejo II.a: instalaciones de almacenamiento, distribución y/o aplicación de biocidas, salvo las que trabajan exclusivamente con biocidas de uso autorizado para el público en general",
        "Anejo II.b: construcción de nuevos cementerios o ampliación de los existentes",
        "Anejo II.c: establecimientos no sanitarios con prácticas de tatuaje y/o piercing",
        "Anejo II.d: centros sanitarios con internamiento y centros socio-sanitarios residenciales",
        "Anejo II.e: actividades con autorización ambiental integrada, unificada o licencia de actividad clasificada que tengan clubes de fumadores, uso recreativo del agua, agua de consumo humano no procedente de red pública, instalaciones de riesgo de legionela o reutilización de aguas depuradas (regeneradas) y/o reciclado de aguas en la propia actividad",
        "Anejo II.e, legionela: torres de refrigeración y condensadores evaporativos; agua climatizada con agitación constante y recirculación por chorros de alta velocidad o inyección de aire; centrales humidificadoras industriales; cualquier instalación de riesgo en centros sanitarios con internamiento y socio-sanitarios residenciales; agua caliente sanitaria de «edificios prioritarios»"
      ]
    }
  ],
  claves: [
    "DF 26/2022, de 30 de marzo: reglamento de desarrollo de la LF 17/2020; para el examen, Títulos I, IV y VI y Anejos I y II",
    "Silencio desestimatorio en todos los procedimientos del Reglamento; la resolución tardía no queda vinculada por él",
    "Órgano sustantivo (autoriza) frente a órgano ambiental (análisis técnico y declaraciones e informes de impacto ambiental)",
    "Ubicación e impactos ambientales: nunca confidenciales",
    "Licencia de actividad clasificada: inadmisión en 15 días, información pública de al menos 20 días, informes forales en 1 mes, audiencia de 15 días y resolución en 4 meses, desestimatoria si no se notifica",
    "Informes del art. 49: preceptivos y vinculantes; si los forales no llegan en 1 mes, la tramitación sigue",
    "Modificación: el órgano decide en 1 mes si es sustancial; esa resolución vale 4 meses; la no sustancial se ejecuta si en un mes no hay oposición",
    "Modificación sustancial: más del 50 % en producción o consumos; más del 25 % en emisiones atmosféricas o vertidos; más del 40 % en almacenamiento; información pública de al menos 15 días y resolución en 3 meses",
    "Residuos peligrosos: más de 4 t/año con modificación estructural y más del 25 %; no peligrosos: más de 20 t/año y más del 50 %",
    "Modificación sustancial: 2 años para ponerla en funcionamiento salvo otro plazo, con declaración responsable previa; sus condiciones rigen desde esa declaración; no hay licencia de obras hasta resolverla",
    "Caducidad de la licencia: se declara expresamente, total o parcial, previa audiencia, si vence el plazo de puesta en marcha",
    "Restauración: alegaciones de 10 a 15 días y 6 meses en el art. 79; reposición e indemnización en 6 meses con caducidad, sin sancionador en curso; vinculan los hechos probados penales firmes y sancionadores que pongan fin a la vía administrativa",
    "Anejo I: 100 personas, 500, 750, 1.000 y 2.000 m²; campings e infraestructuras de transporte sin umbral",
    "Anejo II: biocidas (salvo los de uso por el público en general), cementerios, tatuaje y piercing, centros sanitarios con internamiento y socio-sanitarios residenciales, legionela, aguas regeneradas"
  ],
  memorizacion: {
    tablas: [
      {
        titulo: "Vigencia · DF 26/2022 a 21-05-2026",
        columnas: ["Norma", "Qué supone para este tema"],
        filas: [
          ["DF 26/2022, de 30 de marzo (BON n.º 89, de 9-5-2022; corrección de errores en el BON de 13-5-2022)", "Sin modificaciones: el índice de LexNavarra no tiene ninguna nota de vigencia en los Títulos I, IV y VI ni en los Anejos"],
          ["RD 164/2025 (BOE 10-4-2025, en vigor el 10-5-2025)", "Deroga el RD 2267/2004 que cita el art. 58.1.l; los ocho niveles de riesgo intrínseco están ahora en la tabla 1.3.1 de su anexo I (tema E5)"],
          ["LF 14/2025 (BON 13-11-2025)", "Añade a la LF 17/2020 la DA 8.ª (biometanización): no toca nada de lo que cita el reglamento"],
          ["Después del 21-05-2026", "LF 15/2026 (BON 29-9-2026) reforma esa DA 8.ª: posterior, no se estudia"]
        ],
        nota: "El art. 58.1.l dice «o normativa correspondiente en vigor», así que la remisión al RD 2267/2004 se entiende hecha al RD 164/2025. Rarezas literales del texto que no se preguntan: el art. 58.1.e habla de nuevos contaminantes «en cantidades no significativas» y las letras e) y f) se refieren al caudal que «figure en la autorización ambiental unificada»."
      },
      {
        titulo: "Plazos de la licencia de actividad clasificada (arts. 45-56)",
        columnas: ["Trámite", "Plazo", "Art."],
        filas: [
          ["Inicio del cómputo del plazo de concesión", "Día de presentación de la solicitud con el proyecto técnico", "45.2"],
          ["Inadmisión expresa y motivada (planeamiento u ordenanzas)", "15 días", "47"],
          ["Información pública", "No inferior a 20 días desde su publicación en el BON", "48.1"],
          ["Alegaciones trasladadas al promotor", "15 días", "48.4"],
          ["Informes de la Administración de la Comunidad Foral", "1 mes desde la recepción del resultado de la información pública (o el mayor de su normativa); sin informe, se sigue", "49.7"],
          ["Audiencia sobre la propuesta de resolución", "15 días", "52.2"],
          ["Resolución y notificación", "4 meses desde la documentación completa; después, desestimada", "53.1"],
          ["Traslado de las licencias a los Concejos (municipios compuestos)", "5 días", "53.4 y 55.2"]
        ],
        nota: "Escalera: 15 días (inadmisión, alegaciones, audiencia), 20 días (información pública), 1 mes (informes forales) y 4 meses (resolución). El plazo de puesta en marcha no está en el art. 56: lo fija la LF 17/2020."
      },
      {
        titulo: "Procedimientos de modificación de la licencia (arts. 57-64)",
        columnas: ["Procedimiento", "Información pública", "Plazos de trámite", "Resolución", "Desde cuándo rigen las condiciones"],
        filas: [
          ["Comunicación de la modificación (art. 57)", "No", "El órgano califica en 1 mes; la no sustancial se ejecuta si en ese mes no hay pronunciamiento contrario", "La calificación vale 4 meses", "No sustancial: si cambia la licencia, anuncio en el BON (art. 62)"],
          ["Sustancial (arts. 59-61)", "Obligatoria, no inferior a 15 días", "Subsanación 10 días; alegaciones 15 días; informe vinculante 1 mes; audiencia 15 días; órganos de informes vinculantes 15 días", "3 meses; notificación y BON", "Desde la declaración responsable de puesta en funcionamiento; 2 años para ponerla en marcha, salvo otro plazo"],
          ["De oficio (art. 63)", "Potestativa, no inferior a 15 días", "Alegaciones del titular 15 días; órganos de informes vinculantes 15 días", "3 meses; notificación y BON", "Desde la fecha de la resolución o la que esta fije"],
          ["A solicitud del titular (art. 64)", "Potestativa, no inferior a 15 días", "Memoria técnica y estudio de MTD; alegaciones 15 días; audiencia 15 días; órganos 15 días", "3 meses; si no se notifica, podrá entenderse desestimada", "Desde la fecha de la resolución o la que esta fije"]
        ],
        nota: "Contraste con la licencia: información pública de 20 días frente a 15, y resolución en 4 meses frente a 3. La sustancial es la única en la que la información pública es obligatoria y la única cuyas condiciones rigen desde la declaración responsable."
      },
      {
        titulo: "Criterios de modificación sustancial (art. 58.1)",
        columnas: ["Letra", "Parámetro", "Umbral"],
        filas: [
          ["a", "Ampliación o modificación frente a los umbrales de capacidad del Anejo 3 de la LF 17/2020", "Que por sí sola los alcance (cuando existan)"],
          ["b", "Capacidad de producción (unidades de producto; residuos: unidades gestionadas; ganaderas: plazas y UGM)", "Más del 50 %"],
          ["c", "Consumo de agua, materias primas o energía (cantidades autorizadas)", "Más del 50 %"],
          ["d", "Emisión másica de un contaminante atmosférico de la licencia o total de un foco emisor", "Más del 25 %; o nuevos focos del grupo C; o nuevos contaminantes en cantidades significativas"],
          ["e", "Vertidos a red pública de saneamiento: emisión másica, concentración o caudal", "Más del 25 %"],
          ["f", "Vertidos de sustancias prioritarias: emisión másica, concentración o caudal", "Más del 25 %"],
          ["g", "Residuos peligrosos", "Más de 4 t/año + modificación estructural + más del 25 % sobre la producción máxima autorizada"],
          ["h", "Residuos no peligrosos (incluidos inertes)", "Más de 20 t/año + más del 50 % sobre la producción máxima autorizada"],
          ["i", "Sistemas de tratamiento de emisiones o vertidos (procesos, en gestión de residuos)", "Modificación significativa"],
          ["j", "Capacidad total de almacenamiento de productos químicos, sustancias peligrosas relevantes y residuos", "Más del 40 %"],
          ["k", "Ampliación frente a los umbrales del Anejo I del Reglamento", "Que por sí sola supere alguno (se suman todas las actuaciones)"],
          ["l", "Industrias o almacenamientos: riesgo intrínseco del sector de incendio modificado", "Cualquier aumento de nivel (8 niveles)"],
          ["m", "Actividades del Anejo II", "Inclusión de una nueva"],
          ["n", "Biocidas (almacenamiento, distribución o aplicación)", "Aumento de la categoría de toxicidad"]
        ],
        nota: "La lista no es limitativa y el órgano puede fijar criterios más restrictivos (art. 58.2). Dos o más modificaciones no sustanciales que sumadas cumplan algún criterio son sustanciales (art. 58.3). Regla nemotécnica: producción y consumos, 50; emisiones y vertidos, 25; almacenamiento, 40; residuos, 4 t + 25 % (peligrosos) y 20 t + 50 % (no peligrosos)."
      },
      {
        titulo: "Anejo I · informe preceptivo y vinculante de protección civil",
        columnas: ["Instalación o actividad", "Umbral"],
        filas: [
          ["Con autorización ambiental integrada o unificada", "Todas, excepto explotaciones ganaderas"],
          ["Grupos 1 a 14: industrias y almacenamientos (excepto grupo 8, ganaderas)", "Superficie construida del establecimiento > 1.000 m²"],
          ["15.1 Espectáculos públicos y actividades recreativas en edificios, locales e instalaciones cubiertos", "Aforo > 100 personas"],
          ["15.1 Locales sociales, sociedades gastronómicas y análogos (ámbito privado)", "Ocupación > 100 personas"],
          ["15.2 Tanatorios y velatorios", "Ocupación > 100 personas"],
          ["15.5 Alojamiento turístico, excepto casas rurales", "Superficie construida > 500 m²"],
          ["15.5 Campings", "En todos los casos"],
          ["15.6 Actividades y centros comerciales", "Zona de ventas > 750 m² construidos"],
          ["15.8 Sanitarias con hospitalización y/o ocupantes que precisan ayuda para evacuar", "> 500 m² construidos"],
          ["15.8 Otras sanitarias", "> 1.000 m² construidos"],
          ["15.8 Residencial público no turístico (residencias de mayores, juveniles…)", "> 500 m² construidos"],
          ["15.8 Aparcamientos (con trasteros, locales técnicos y análogos de la misma planta)", "> 1.000 m² construidos"],
          ["15.8 Docentes", "> 1.000 m² construidos"],
          ["15.8 Administrativas, incluso centros de investigación", "> 2.000 m² construidos"],
          ["15.8 Culturales y religiosas (museos, bibliotecas, archivos, casas de cultura, iglesias…)", "> 500 m² construidos"],
          ["15.8 Infraestructuras de transporte (estaciones, aeropuertos…)", "Sin umbral"]
        ],
        nota: "Los grupos son los de las actividades sometidas a licencia de actividad clasificada del Anejo 3 de la LF 17/2020 (tema E20). Criterios del Anejo I.2: ocupación con las densidades del CTE DB SI en vigor o de la normativa específica; si hay una actividad principal y otras vinculadas con elementos comunes de circulación, cuenta la superficie de todo el establecimiento y su actividad principal; en los centros que agrupan establecimientos, la superficie y/o aforo de todo el centro y su actividad principal."
      },
      {
        titulo: "Anejo II · informe preceptivo y vinculante de salud pública",
        columnas: ["Supuesto", "Matiz"],
        filas: [
          ["a) Biocidas: almacenamiento, distribución y/o aplicación", "Todas las instalaciones, salvo las que trabajan exclusivamente con biocidas de uso autorizado para el público en general"],
          ["b) Cementerios", "Construcción de nuevos o ampliación de los existentes"],
          ["c) Tatuaje y/o piercing", "En establecimientos no sanitarios"],
          ["d) Centros sanitarios con internamiento y centros socio-sanitarios residenciales", "Sin umbral"],
          ["e) Actividades con AAI, AAU o licencia de actividad clasificada que cuenten con…", "Clubes de fumadores; uso recreativo del agua; agua de consumo humano no procedente de red pública; instalaciones de riesgo de legionela; reutilización de aguas depuradas (regeneradas) y/o reciclado de aguas en la propia actividad"],
          ["Riesgo de legionela (dentro de la e)", "Torres de refrigeración y condensadores evaporativos; agua climatizada con agitación constante y recirculación por chorros de alta velocidad o inyección de aire; centrales humidificadoras industriales; instalaciones de riesgo en centros sanitarios con internamiento y socio-sanitarios residenciales; agua caliente sanitaria de «edificios prioritarios»"]
        ],
        nota: "Trampa: los tanatorios y velatorios (> 100 personas) están en el Anejo I, no en el II, aunque los cementerios sí estén en el II. Las actividades sanitarias con hospitalización van al Anejo I si superan 500 m²; los centros sanitarios con internamiento, al Anejo II sin umbral."
      },
      {
        titulo: "Restauración de la legalidad ambiental (arts. 77-81)",
        columnas: ["Procedimiento", "Inicio", "Plazos", "Final"],
        filas: [
          ["Legalización o clausura (art. 77)", "La Administración competente, al conocer que una actividad funciona sin autorización o licencia", "Audiencia previa; la resolución fija el procedimiento de legalización y el plazo para iniciarlo", "Legalización por la misma tramitación que la autorización, o clausura definitiva; puede añadir suspensión y deberes de reposición e indemnización"],
          ["Fianza o aval (art. 78)", "Para garantizar las medidas cautelares", "Equivalente al valor de la restauración", "Devolución tras verificar el cumplimiento; si no, art. 79"],
          ["Cumplimiento de medidas cautelares (art. 79)", "De oficio, al detectar el incumplimiento", "Alegaciones: de 10 a 15 días; resolución en 6 meses desde el acuerdo de inicio; pago voluntario en 1 mes", "Archivo si se subsana; si no se paga, vía de apremio, ejecutando la fianza o el aval"],
          ["Reposición e indemnización (arts. 80-81)", "De oficio (Departamento de medio ambiente y, en su caso, entidad local); no si hay sancionador en curso sobre los mismos hechos y sujetos", "Resolución en 6 meses desde la iniciación", "Si vence: caducidad y archivo; la resolución de indemnización fija el plazo de pago voluntario y luego cabe ejecución forzosa"]
        ],
        nota: "Dos plazos de 6 meses: el del art. 79 cuenta desde el acuerdo de inicio; el del art. 81, desde la iniciación, y si vence el procedimiento caduca. El mes para pagar está en el art. 79.6; el art. 81.3 solo dice que la resolución indicará el plazo de pago voluntario."
      }
    ],
    datos: [
      "Fuera del examen: Títulos II (autorizaciones ambientales), III (evaluación de afecciones ambientales), V (inspección y control) y VII (prestación ambiental sustitutoria).",
      "Instalación existente: autorizada antes del 22-6-2021, o con las autorizaciones solicitadas y puesta en funcionamiento a más tardar doce meses después (art. 2.a).",
      "Régimen supletorio: Ley 39/2015 y, en su caso, LF 11/2019 o LF 6/1990 (art. 5.3); tramitación electrónica (art. 6).",
      "Silencio: desestimatorio en todos los procedimientos (art. 7); en la licencia, a los 4 meses (art. 53.1); en la modificación a solicitud del titular, «podrá entenderse desestimada» a los 3 meses (art. 64.7).",
      "Garantías: fianza o seguro obligatorio de responsabilidad ambiental, exigidos de forma motivada (art. 9); fianza y/o aval bancario equivalente al valor de la restauración para las medidas cautelares (art. 78).",
      "La solicitud de licencia se presenta ante la entidad local del término municipal donde se ubique la actividad, con proyecto técnico (art. 45.1).",
      "Proyecto técnico: Memoria, Diagrama de flujo, Documentación gráfica y Presupuesto económico de las medidas de protección ambiental (art. 46.2).",
      "Residuos en el proyecto: código LER, cantidades, gestión y código y operación final de gestión (art. 46.1.e).",
      "Informes del art. 49: preceptivos y vinculantes para las entidades locales; los forales, en 1 mes desde la recepción del resultado de la información pública.",
      "Notificación de la licencia y de las modificaciones: titular, órganos con informe vinculante, quienes alegaron y demás interesados, con publicación en el BON (arts. 53.3, 59.7, 63.6 y 64.8).",
      "Vertidos a cuencas estatales: copia de la licencia al organismo de cuenca para el censo nacional de vertidos (art. 54); si son al dominio público hidráulico, la declaración responsable va con la autorización de vertido (art. 56.3).",
      "Modificación: el titular la comunica razonando si es sustancial; el órgano la califica en 1 mes; esa resolución vale 4 meses (art. 57).",
      "Modificación sustancial: información pública de al menos 15 días, resolución en 3 meses, puesta en funcionamiento en 2 años salvo otro plazo, con declaración responsable previa (arts. 59-60).",
      "Modificación de oficio: la inicia el órgano concretando las causas, las condiciones que cambian y un plazo razonable (art. 63.1). A solicitud del titular: memoria técnica y estudio de MTD (art. 64.1).",
      "Legalización: misma tramitación que la autorización; la resolución fija el procedimiento y el plazo para iniciarlo, previa audiencia (art. 77.2).",
      "Procedimiento del art. 79: alegaciones de 10 a 15 días; resolución en 6 meses desde el acuerdo de inicio; pago voluntario en 1 mes; después, vía de apremio (en la Comunidad Foral, Hacienda Tributaria de Navarra).",
      "Reposición: elementos para restaurar el medio a su estado originario, forma y métodos, plazo de ejecución y advertencia de ejecución forzosa, previo apercibimiento (art. 81.2)."
    ],
    excepciones: [
      "Instalaciones independientes: excepcionalmente, el órgano sustantivo puede exigir una autorización única, de forma motivada y por mayor protección ambiental (art. 3.2).",
      "Varios titulares: responsables solidarios, salvo que hubieran pedido al solicitar que la autorización detalle el alcance de la responsabilidad de cada uno (art. 4).",
      "Confidencialidad: la propiedad intelectual e industrial deja de ser confidencial si el titular consintió su divulgación, y los datos personales si el interesado consintió su tratamiento; la ubicación y los impactos ambientales no lo son en ningún caso (art. 8).",
      "Informes forales: 1 mes, salvo que su normativa permita un plazo mayor; si no se emiten y notifican, la tramitación continúa (art. 49.7).",
      "Suelo no urbanizable: si se deniega la autorización, se pone fin al procedimiento de licencia y se archiva (art. 49.3).",
      "Licencia de obras mientras se tramita la licencia de actividad clasificada: sí, salvo suelo no urbanizable, riesgos para la seguridad o la salud o autorización ganadera (art. 55.1); mientras se tramita una modificación sustancial: no, hasta que se resuelva (art. 61.4).",
      "Modificación no sustancial: puede ejecutarse si en un mes no hay pronunciamiento contrario, sin perjuicio de la licencia de obras u otras autorizaciones (art. 57.c).",
      "Puesta en funcionamiento de la modificación sustancial: 2 años, salvo que se establezca un plazo distinto (art. 60.1).",
      "Información pública en las modificaciones de oficio y a solicitud del titular: solo si el órgano lo considera oportuno (arts. 63.3 y 64.3); en la sustancial es obligatoria (art. 59.3).",
      "El procedimiento de reposición e indemnización no puede iniciarse mientras haya un sancionador en curso sobre los mismos hechos y sujetos (art. 80.1).",
      "Anejo I: AAI y AAU, todas salvo las explotaciones ganaderas; grupos 1-14, salvo el grupo 8; alojamiento turístico, salvo casas rurales; campings, siempre.",
      "Anejo II: biocidas, salvo las instalaciones que trabajan exclusivamente con biocidas de uso autorizado para el público en general; tatuaje y piercing, solo en establecimientos no sanitarios.",
      "Remisión desfasada: el art. 58.1.l cita la tabla 1.3 del RD 2267/2004, derogado por el RD 164/2025 (en vigor el 10-5-2025); el propio artículo añade «o normativa correspondiente en vigor»."
    ]
  }
};
