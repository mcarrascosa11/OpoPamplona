// Correcciones de «Leer temas» para E58 (vigencia a la convocatoria, BON 21-05-2026).
// Cada cambio es [texto exacto del TXT, texto que lo sustituye]; los avisos se muestran al principio.
export default {
  avisos: [
    `>>> AVISO: la «Memoria cap. 6» del temario es el capítulo 6 de la MEMORIA I-ANÁLISIS (diagnóstico, pp. 171-210; el capítulo 7 empieza en la p. 211). La PROPUESTA está en la MEMORIA II-PROPUESTA, apartado 10.5 «El sistema de comunicaciones» (pp. 174-200). El cap. 6 no es una síntesis de diagnóstico y propuesta. Al final de este tema van los TEXTOS LITERALES del capítulo VI de la Memoria I (pp. 169-208) y del apartado 2 «Descripción de la propuesta» del Anexo 5.2 (pp. 5-41; sin los anejos 1 a 3, de la p. 43 en adelante). El Anexo 5.1 (unas 205 páginas) no se incorpora: el capítulo VI de la Memoria I lo resume y su propia introducción lo dice. La PARTE B de este tema es un extracto.`,
    `>>> AVISO: Plan de Ciclabilidad 2017-2022 (Documento de Síntesis, SUMA, mayo 2019): la red es de 124,4 km (41,8 km de conexión metropolitana en 11 itinerarios + 82,6 km de proximidad en 13 zonas; 64,3 km nuevos), no 127,4 km. Los datos del plan de 2005 (116 km, criterio de 200 m, cuatro corredores) no se han podido contrastar con el documento original: en el plan 2017-2022 los 200 m son el radio que se usa para priorizar tramos.`,
    `>>> AVISO: PMUS de la Comarca de Pamplona (revisión de octubre de 2026): el objetivo de reparto es el «20/30/50»: 20 % transporte público, 30 % vehículo privado y 50 % a pie y en bici, como dicen el Pacto por la Movilidad de 20-02-2017, aprobado por unanimidad, y el Resumen del PMUS de junio de 2019 («Es posible llegar al reparto 20/30/50»). Se retira la corrección anterior a «45-50 %», que no tenía fuente localizable. Reparto de partida: a pie 42,1 %, transporte público 12,7 %, vehículo privado 41,1 % y otros 4,1 %; el Pacto lo toma de la Encuesta Domiciliaria de Movilidad de 2013 (tabla «Distribución de los viajes según modo básico. 2013»), y el Observatorio Urbano municipal lo fecha en 2016 porque lo cita a través del diagnóstico del PMUS. Convenio entre Gobierno de Navarra, Mancomunidad y los 18 ayuntamientos del TUC: septiembre de 2016. Periodo: el Observatorio Urbano municipal lo da por «Aprobado» para 2018-2026; el Resumen de 2019 habla de un horizonte de unos 10 años con una Fase Programada 2019-2021, y la ficha de la Agenda Urbana Pamplona 2030, de 2019-2030. No se ha podido leer el documento completo del PMUS de la Mancomunidad y no consta ninguna revisión del plan hasta el 21-05-2026.`,
    `>>> AVISO: Plan Estratégico de Accesibilidad Integral (título oficial «(2022-2026)»; aprobado por la Junta de Gobierno Local el 18-12-2023; la nota municipal de ese día habla de horizonte 2028). El documento «Propuestas de actuación» (pamplona.es, mayo de 2023) se titula «Las 65 propuestas de actuación» y las ordena en una LÍNEA 0 «Transversalidad y corresponsabilidad de la Accesibilidad» y las cinco líneas sectoriales que recoge este tema (1 espacio público, 2 edificios de uso público, 3 elementos de transporte público, 4 herramientas municipales de comunicación, 5 servicios municipales). Por códigos salen 8 + 16 + 12 + 7 + 7 + 16 = 66 propuestas, una más de las que anuncia el título: estudia «65» como cifra oficial.`,
    `>>> AVISO: las cifras de la encuesta domiciliaria de noviembre de 1996 (2.350 hogares y 7.537 personas; 277.345 habitantes; 766.351 desplazamientos; 2,76 viajes por habitante; 95,3 % basados en casa; motivos; reparto modal 43,7/36,8/14,4; 79,2 % de los viajes motorizados en la corona urbana; 469 vehículos y 399 turismos por 1.000 habitantes) se han cotejado con el Anexo 5.1 del Plan Municipal y coinciden. El propio anexo da también 2,66 viajes por persona y día en el apdo. 1.1.3.`,
  ],
  cambios: [
    [`(Capítulo 6 "El Sistema de comunicaciones", que sintetiza diagnóstico y propuesta) y el`, `(Memoria I-Análisis, Capítulo 6 "El Sistema de comunicaciones", que es el DIAGNÓSTICO; la PROPUESTA está en la Memoria II-Propuesta, apartado 10.5) y el`],
    [`--- B.2 LA PROPUESTA (Anexo V 5.2 / Memoria Cap. 6) ---`, `--- B.2 LA PROPUESTA (Anexo V 5.2 / Memoria II, apartado 10.5) ---`],
    [`~127,4 km de infraestructuras ciclistas.`, `124,4 km de infraestructuras ciclistas [Documento de Síntesis, mayo 2019: 41,8 km de conexión metropolitana (11 itinerarios) + 82,6 km de proximidad (13 zonas); 64,3 km de nueva creación; el resto de calles forma la red de cobertura, compartida con el tráfico a 30 km/h como máximo].`],
    [`Red ~116 km (2005) → ~127,4 km (2017-2022).`, `Red ~116 km (2005) → 124,4 km (2017-2022).`],
    [`APROBADO por la Junta de Gobierno Local en diciembre`, `APROBADO por la Junta de Gobierno Local el 18 de diciembre`],
    [`y se firmó un convenio de colaboración entre las tres partes.`, `y se firmó un convenio de colaboración entre las tres partes (22 de septiembre de 2016).`],
    [`Memoria Cap. 6 (síntesis) + Anexo V (5.1`, `Memoria I cap. 6 (diagnóstico) + Memoria II apdo. 10.5 (propuesta) + Anexo V (5.1`],
    [`la Memoria Cap. 6 es la
    síntesis de ambos.`, `la Memoria I cap. 6 equivale
    al análisis (5.1) y la Memoria II, apdo. 10.5, a la propuesta (5.2).`],
    [`La Memoria Cap. 6 sintetiza este anexo.`, `La Memoria I cap. 6 recoge el análisis y la Memoria II, apdo. 10.5, la propuesta.`],
    [`(Memoria Cap. 6 + Anexo V, partes 5.1 análisis y 5.2 propuesta)`, `(Memoria I cap. 6 [análisis] + Memoria II apdo. 10.5 [propuesta] + Anexo V, partes 5.1 y 5.2)`],
    [`- OBJETIVOS (formulación 2005):`, `- OBJETIVOS (formulación 2005, SIN VERIFICAR):`],
    [`- RED PROPUESTA: red mallada con el criterio de que NINGÚN PUNTO DE LA CIUDAD quede a más
  de 200 metros de una vía ciclista.`, `- RED PROPUESTA: [dato atribuido al plan de 2005, SIN VERIFICAR: red mallada en la que ningún
  punto de la ciudad quede a más de 200 m de una vía ciclista. En el Plan 2017-2022 los 200 m
  son el radio a cada lado del eje que se usa para PRIORIZAR tramos.]`],
    [`- FASES DE IMPLANTACIÓN: (1ª) cuatro CORREDORES PRINCIPALES`, `- FASES DE IMPLANTACIÓN [plan de 2005, SIN VERIFICAR; el Plan 2017-2022 se ejecuta en cuatro
  lotes de igual longitud]: (1ª) cuatro corredores principales`],
    [`Criterio: ningún punto a más de 200 m de vía
  ciclista.`, `200 m: en el plan 2017-2022, radio de priorización (el «ningún
  punto a más de 200 m» del plan de 2005 no está verificado).`],
    [`Fases: corredores principales +
  mallado interior.`, `Fases (plan de 2005, sin verificar): corredores principales +
  mallado interior; el 2017-2022 se ejecuta en 4 lotes.`],
  ],
};
