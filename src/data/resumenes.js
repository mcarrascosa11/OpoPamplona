/* ==================================================================
   RESÚMENES POR TEMA
   Formato:
     "G1": {
       intro: "una o dos frases de encuadre",
       bloques: [ { h: "título", items: ["punto", ...] }, ... ],
       claves: ["dato puro memorizable", ...]   // lo que más cae
     }
   Pensado para estudio rápido y repaso: prioriza datos, artículos,
   plazos, ubicación de cada derecho. Crece igual que el banco de test.
   ================================================================== */

export const RESUMENES = {
  G12: {
    intro:
      "La Estrategia de Transición Energética y Cambio Climático 2030 de Pamplona (ETEyCC 2030) es el instrumento de planificación del Ayuntamiento para descarbonizar la ciudad, articulado en 3 ejes (mitigación, adaptación y transición justa), 5 objetivos estratégicos, 24 líneas de acción y 74 acciones, con una inversión total de 860 M€ hasta 2030.",
    bloques: [
      {
        h: "Objetivos 2030 — los 4 datos a memorizar",
        nota:
          "Este tema no es articulado sino un documento de planificación, así que se examina por CIFRAS y por la arquitectura del documento. El riesgo aquí no es olvidar los números sino confundirlos con los de otros marcos: el −64 % de Pamplona convive en la cabeza con el −40 % del Pacto de Alcaldías y el −55 % del marco europeo 2030, y el examen los ofrece juntos como opciones. Ancla cada cifra a su fuente y su año base, y no memorices porcentajes sueltos.",
        items: [
          "Emisiones: −64% de GEI respecto a 2005 (≠ 40% Pacto de Alcaldías; ≠ 55% Marco 2030 europeo)",
          "Renovables: 37% del consumo energético final",
          "Eficiencia: +39% respecto al escenario BAU (Business as Usual)",
          "Pobreza energética: 0 hogares en pobreza energética",
          "Ciudad Cero Emisiones: AÑO 2050 (no 2030)",
        ],
      },
      {
        h: "Diagnóstico ciudad 2005-2018 (trampas de examen)",
        nota:
          "El diagnóstico es la parte que justifica las medidas, y por eso interesa entender de dónde vienen las emisiones antes de memorizar los repartos: en una ciudad como Pamplona el peso lo llevan la EDIFICACIÓN y la MOVILIDAD, no la industria, y eso explica que el Plan de Acción cargue el grueso de la inversión en rehabilitación energética y transporte. Si retienes esa lógica, los porcentajes por sector se sostienen solos y se distinguen mejor de los datos de consumo, que van por otra escala.",
        items: [
          "Consumo: −8,7%; Emisiones: −15,6% (AMBOS bajan, pero el consumo baja MENOS que las emisiones)",
          "2018: 4.551.325 MWh; 1.128.937 tCO2eq; coste 488 M€; 22,58 MWh/hab; 5,60 tCO2eq/hab",
          "Renovables ciudad 2018: solo 9,5% del consumo final; de ese 9,5%, solo el 18% es producción local (≈2% del consumo final)",
          "Mix consumo ciudad: petrolíferos 54%, gas natural 27%, electricidad 15%",
          "Mix sectores consumo: transporte 51%, doméstico 20%, industrial 13%, comercio/servicios 12%, AAPP 4%",
          "Ayuntamiento 2005-2019: consumo +24%, emisiones −22%; representa el 1,15% del consumo municipal",
          "Mix Ayuntamiento: electricidad 52%, gas natural 43%; edificios/equipamientos 68%, alumbrado 30%, flota 2-3%",
        ],
      },
      {
        h: "Plan de Acción — inversión y plazos",
        nota:
          "La estructura del Plan es lo primero que hay que poder recitar, porque es la pregunta de encuadre: TRES ejes —mitigación, adaptación y transición justa—, CINCO objetivos estratégicos, VEINTICUATRO líneas de acción y SETENTA Y CUATRO acciones, con 860 millones de euros hasta 2030. Esa cadena de números en orden decreciente es fácil de fijar y permite descartar opciones aunque no recuerdes el reparto sectorial de la inversión.",
        items: [
          "Total: 860.223.800 € (inversión privada 576,7 M€ — fuente mayoritaria; fondos públicos externos 210,6 M€; Ayuntamiento 72,9 M€)",
          "LE2 Actuaciones en edificios: 534,7 M€ — MAYOR partida; meta: rehabilitar 60% viviendas anteriores a 1979 (30.274 viviendas)",
          "LE5 Generación renovable: 261 M€; meta fotovoltaica municipal: 5.338 kWp",
          "Cronograma: corto 2021-2023 (237 M€) → medio 2024-2026 (267 M€) → largo 2027-2030 (356 M€)",
          "Alumbrado: renovar 28.000 puntos de luz (84% del total); cubiertas verdes en 10% de edificios post-1979 (261 edificios)",
        ],
      },
      {
        h: "Adaptación climática",
        nota:
          "No confundas MITIGACIÓN con ADAPTACIÓN: mitigar es reducir emisiones para que el cambio climático sea menor; adaptarse es prepararse para los efectos que ya son inevitables. Son ejes distintos del mismo plan y el examen los intercambia. La adaptación en Pamplona gira sobre tres riesgos concretos —olas de calor e isla de calor urbana, inundaciones y episodios de lluvia intensa, y estrés hídrico—, y sus medidas son las que más tocan al urbanismo: infraestructura verde, drenaje sostenible y confort térmico del espacio público.",
        items: [
          "Proyección LIFE-IP NAdapta-CC: +0,23 ºC/década; cambio climático Pamplona: Cfb (Marítimo) → Mediterráneo a mediados de siglo",
          "Olas de calor: 1,65→6,95/año; noches tropicales: 5→13/año; días cálidos: 9%→22%",
          "2 cadenas de impacto: temperaturas→salud (riesgo MEDIO→MUY ELEVADO); lluvias intensas→medio construido (ya ALTO)",
          "Barrios más vulnerables a temperatura: San Juan, San Jorge, Azpilagaña, Rochapea, Casco Antiguo, Iturrama",
          "Barrios más expuestos a lluvias: Rochapea, Txantrea, San Jorge, Etxabakoitz",
        ],
      },
      {
        h: "Gobernanza y arquitectura (LE17)",
        nota:
          "La línea estratégica que conecta este tema con tu trabajo: la edificación es a la vez el mayor emisor y el mayor yacimiento de ahorro, de modo que la rehabilitación energética del parque construido es la palanca principal del plan. Conviene estudiarla en relación con el DB-HE del CTE (tema E8) y con el informe de evaluación de los edificios (tema E26), porque la Estrategia se apoya en ambos instrumentos para ejecutarse: uno fija las exigencias y el otro detecta el parque que las incumple.",
        items: [
          "5 órganos: Dirección ETEyCC + Comisión municipal de trabajo + comisiones interdepartamentales temporales + Órgano de participación sectorial + Observatorio de Medio Ambiente y CC",
          "LE17 (clave para arquitecto): revisión del PMOU, revisión del CTE para clima futuro, nueva ordenanza de edificación",
        ],
      },
    ],
    claves: [
      "−64% emisiones 2030 vs 2005 (≠ −40% Pacto de Alcaldías; ≠ −55% Marco UE 2030)",
      "Ciudad Cero Emisiones = 2050",
      "37% renovables; +39% eficiencia vs BAU; pobreza energética = 0",
      "Consumo ciudad 2018: 4.551.325 MWh; 1.128.937 tCO2eq",
      "Diagnóstico 2005-2018: consumo −8,7%; emisiones −15,6%",
      "Renovables ciudad 2018: 9,5% del consumo final",
      "Transporte = 51% del consumo y 55% de las emisiones de la ciudad",
      "Plan: 5 OE / 24 LE / 74 acciones / 860.223.800 € totales",
      "Inversión privada = fuente mayoritaria (576,7 M€ de 860 M€)",
      "LE2 edificios: mayor presupuesto 534,7 M€; rehabilitar 60% viviendas pre-1979",
      "Olas de calor: 1,65→6,95/año; Pamplona: Cfb→Mediterráneo a mediados de siglo",
    ],
  },

  G11: {
    intro:
      "La LO 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, establece el marco estatal antidiscriminatorio por razón de sexo y los principios de acción positiva. La LF 17/2019, de 4 de abril, de Igualdad entre mujeres y hombres en las relaciones laborales y en el empleo en Navarra, desarrolla estos principios en el ámbito foral.",
    bloques: [
      {
        h: "Principio de igualdad y ámbito (LO 3/2007 arts. 1-5, 10)",
        nota:
          "Antes de las definiciones conviene fijar el marco. La ley reconoce el principio de igualdad de trato como PRINCIPIO INFORMADOR del ordenamiento jurídico, que se integra y observa en la interpretación y aplicación de todas las normas — no es una regla más, sino un criterio hermenéutico general. Y su art. 10 establece la consecuencia jurídica de infringirlo: los actos y las cláusulas de los negocios jurídicos que constituyan o causen discriminación por razón de sexo se consideran NULOS Y SIN EFECTO, con un régimen reparador que incluye una indemnización REAL, EFECTIVA Y PROPORCIONADA al perjuicio sufrido y disuasoria.",
        items: [
          "Art. 1 — objeto: hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombres, en particular mediante la eliminación de la discriminación de la mujer, sea cual fuere su circunstancia o condición, en cualesquiera de los ámbitos de la vida y singularmente en las esferas política, civil, laboral, económica, social y cultural",
          "Art. 4 — el principio de igualdad de trato y de oportunidades es PRINCIPIO INFORMADOR del ordenamiento jurídico y, como tal, se integrará y observará en la interpretación y aplicación de las normas jurídicas",
          "Art. 10 — CONSECUENCIAS JURÍDICAS de las conductas discriminatorias: los actos y las cláusulas de los negocios jurídicos que constituyan o causen discriminación por razón de sexo se consideran NULOS Y SIN EFECTO, y dan lugar a responsabilidad a través de un sistema de reparaciones o indemnizaciones que sean REALES, EFECTIVAS y PROPORCIONADAS al perjuicio sufrido, así como, en su caso, a un sistema eficaz y disuasorio de sanciones",
          "Art. 5 — igualdad de trato en el ACCESO AL EMPLEO, en la formación y en la promoción profesionales y en las condiciones de trabajo: no puede constituir discriminación una diferencia de trato basada en una característica relacionada con el sexo cuando, debido a la naturaleza de las actividades profesionales, dicha característica constituya un REQUISITO PROFESIONAL ESENCIAL Y DETERMINANTE, siempre que el objetivo sea legítimo y el requisito proporcionado",
        ],
      },
      {
        h: "Tipos de discriminación (LO 3/2007 arts. 6-9)",
        nota:
          "Cuatro figuras que el examen contrapone por parejas. DIRECTA frente a INDIRECTA: la primera es trato menos favorable por razón de sexo y no admite justificación; la segunda parte de una norma aparentemente NEUTRA y sí admite justificación objetiva, si persigue una finalidad legítima con medios necesarios y adecuados. Y acoso SEXUAL frente a acoso POR RAZÓN DE SEXO: el primero exige naturaleza sexual en la conducta; el segundo se produce «en función del sexo» y no requiere componente sexual alguno. Retén además que la discriminación por embarazo o maternidad se califica como DIRECTA, lo que cierra la puerta a cualquier justificación.",
        items: [
          "Discriminación DIRECTA (art. 6.1): trato menos favorable a una persona en atención a su sexo respecto a otra en situación comparable",
          "Discriminación INDIRECTA (art. 6.2): disposición, criterio o práctica aparentemente neutros que pone a un sexo en desventaja, salvo justificación objetiva (finalidad legítima + medios necesarios y adecuados)",
          "Acoso SEXUAL (art. 7.1): conducta de naturaleza SEXUAL que atenta contra la dignidad",
          "Acoso POR RAZÓN DE SEXO (art. 7.2): conducta EN FUNCIÓN DEL SEXO (sin componente sexual necesario) que atenta contra la dignidad",
          "Ambos tipos de acoso se consideran discriminatorios en todo caso (art. 7.3)",
          "Discriminación por EMBARAZO o MATERNIDAD = discriminación directa (art. 8) → sin posibilidad de justificación objetiva",
          "INDEMNIDAD frente a represalias (art. 9): cualquier trato adverso por presentar queja/denuncia = discriminación por sexo",
        ],
      },
      {
        h: "Acciones positivas y prueba (LO 3/2007 arts. 11-13)",
        nota:
          "Dos preceptos con truco. Las ACCIONES POSITIVAS no son exclusivas de los poderes públicos: el art. 11.2 habilita expresamente también a las personas físicas y jurídicas PRIVADAS, dentro del marco de la legislación laboral. Y son temporales por definición, porque solo se aplican en tanto subsistan las situaciones de desigualdad. De la carga de la prueba retén la excepción: la inversión probatoria NO se aplica a los procesos PENALES, donde rige la presunción de inocencia.",
        items: [
          "Acciones positivas (art. 11): medidas específicas en favor de mujeres para corregir desigualdad de hecho; poderes públicos Y también personas privadas; razonables y proporcionales; solo mientras subsistan las desigualdades",
          "Carga de la prueba (art. 13): si la actora alega discriminación → la DEMANDADA debe probar ausencia de discriminación y proporcionalidad; NO aplica en procesos PENALES",
          "Art. 11.2 — las acciones positivas también pueden adoptarlas las PERSONAS FÍSICAS Y JURÍDICAS PRIVADAS, en los términos establecidos en la ley y en el marco de la legislación laboral",
          "Art. 12 — TUTELA JUDICIAL EFECTIVA: cualquier persona podrá recabar la tutela del derecho a la igualdad entre mujeres y hombres, incluso tras la terminación de la relación en la que supuestamente se ha producido la discriminación",
          "Art. 12.2-3 — la legitimación para la defensa de estos derechos corresponde a la persona acosada, y en los litigios sobre acoso sexual y por razón de sexo será ÚNICAMENTE la persona acosada quien tenga legitimación",
        ],
      },
      {
        h: "LF 17/2019 — datos y plazos clave",
        nota:
          "La ley foral es la que aporta los datos numéricos del tema y la que te afecta como empleado municipal. Dos cifras se preguntan juntas y conviene no cruzarlas: la REPRESENTACIÓN EQUILIBRADA es la horquilla 40-60 % —la misma que verás en la composición del Consejo de Transparencia del tema 9—, y la reserva en las ofertas públicas de empleo para víctimas de violencia de género es del 2 % de las plazas. Del régimen de informes retén que el INFORME DE IMPACTO DE GÉNERO alcanza también a las ORDENANZAS LOCALES, sin excepción por tamaño de municipio: es obligatorio en las que tramites.",
        items: [
          "Representación equilibrada (art. 4.1.f): ningún sexo >60% ni <40%, tendiendo al 50%",
          "Plan Estratégico Igualdad (art. 14): vigencia 6 años; diseñado por Instituto Navarro para la Igualdad; aprobado por GOBIERNO DE NAVARRA previo informe del Consejo Navarro de Igualdad; remitido al PARLAMENTO DE NAVARRA para debate y aprobación final",
          "Informe de impacto de género (art. 22.2): obligatorio en anteproyectos de ley foral, disposiciones normativas generales y planes del Gobierno de Navarra",
          "Informe de impacto de género en ordenanzas locales (art. 22.4): también obligatorio, sin excepción por tamaño",
          "OPE (art. 24.7): informe de impacto de género + 2% de plazas para víctimas de violencia de género (si superan proceso selectivo y acreditan condición)",
          "Ayudas públicas (art. 18.1): cláusulas de igualdad en bases reguladoras; art. 18.2: prohibición a entidades sancionadas (declaración responsable)",
          "La horquilla 40-60 % de representación equilibrada es la misma que reaparece en la composición del Consejo de Transparencia de Navarra (art. 65.5 LF 5/2018), que remite expresamente a este art. 4.1.f",
        ],
      },
    ],
    claves: [
      "Discriminación directa: trato menos favorable por razón de sexo (art. 6.1 LO 3/2007)",
      "Discriminación indirecta: medida neutra con efecto desfavorable desproporcionado (art. 6.2) — sí admite justificación",
      "Embarazo/maternidad = discriminación directa, sin posibilidad de justificación (art. 8)",
      "Acoso sexual: conducta de naturaleza SEXUAL; acoso por razón de sexo: conducta EN FUNCIÓN DEL SEXO (sin componente sexual necesario)",
      "Represalias por denuncia de discriminación = discriminación por sexo (art. 9)",
      "Carga de la prueba: se invierte al demandado; NO en procesos penales (art. 13)",
      "Representación equilibrada LF 17/2019: 40%-60% (ni más, ni menos)",
      "Plan Estratégico Igualdad: 6 años; aprueba Gobierno, previo informe Consejo Navarro de Igualdad, remite al Parlamento",
      "Informe de impacto de género: anteproyectos ley foral + disposiciones normativas + planes + ordenanzas locales",
      "OPE Navarra: 2% plazas para víctimas violencia de género",
    ],
  },

  G10: {
    intro:
      "El RGPD (Reglamento UE 2016/679) es la norma marco de protección de datos personales en la UE, de aplicación directa desde mayo 2018. La LO 3/2018 (LOPDGDD) lo adapta al ordenamiento español. Juntos regulan principios del tratamiento, bases de licitud, derechos de los interesados y condiciones especiales para categorías sensibles.",
    bloques: [
      {
        h: "Principios del tratamiento (art. 5 RGPD)",
        nota:
          "Los seis principios del art. 5.1 se preguntan pidiendo el que falta o cambiando un adjetivo, así que conviene recitarlos con su denominación completa: licitud, lealtad y transparencia · limitación de la FINALIDAD · MINIMIZACIÓN de datos · EXACTITUD · limitación del PLAZO DE CONSERVACIÓN · integridad y confidencialidad. Y por encima de ellos, el apartado 2 añade el que lo cambia todo: la RESPONSABILIDAD PROACTIVA, que invierte la carga —el responsable no solo debe cumplir, sino ser capaz de DEMOSTRAR que cumple—.",
        items: [
          "a) Licitud, lealtad y transparencia",
          "b) Limitación de la finalidad: solo para los fines recogidos",
          "c) Minimización de datos: adecuados, pertinentes y limitados a lo necesario",
          "d) Exactitud: datos exactos y actualizados",
          "e) Limitación del plazo de conservación: no más de lo necesario para los fines",
          "f) Integridad y confidencialidad: seguridad adecuada",
          "Art. 5.2: Responsabilidad proactiva (accountability) del responsable del tratamiento",
        ],
      },
      {
        h: "Bases de licitud (art. 6 RGPD) y categorías especiales (art. 9)",
        nota:
          "Seis bases de licitud, y para una Administración la relevante casi nunca es el consentimiento sino el CUMPLIMIENTO DE UNA OBLIGACIÓN LEGAL o el ejercicio de PODERES PÚBLICOS. De hecho el interés legítimo, base habitual en el sector privado, NO es aplicable al tratamiento realizado por autoridades públicas en el ejercicio de sus funciones — matiz del art. 6.1 in fine que se pregunta. Las categorías especiales del art. 9 parten de una PROHIBICIÓN general de tratamiento que solo cede por las excepciones tasadas del apartado 2.",
        items: [
          "6 bases de licitud (art. 6.1.a-f): consentimiento / contrato o medidas precontractuales / obligación legal / intereses vitales / interés público o poderes públicos / intereses legítimos (este último NO aplica a autoridades públicas en ejercicio de funciones)",
          "Consentimiento (art. 7): libre, específico, informado, inequívoco; retirable en cualquier momento; retirada no afecta licitud previa; tan fácil retirar como dar",
          "Menores: RGPD art. 8 → 16 años para servicios sociedad de la información; LOPDGDD art. 7 → España fija 14 años",
          "Categorías especiales (art. 9 RGPD): prohibición de tratar datos de origen étnico/racial, opiniones políticas, convicciones religiosas/filosóficas, afiliación sindical, datos genéticos, biométricos identificativos, de salud, vida/orientación sexual + 10 excepciones (a-j)",
          "LOPDGDD art. 9.1: para ideología, afiliación sindical, religión, orientación sexual, creencias, origen racial → el solo consentimiento NO basta para levantar la prohibición",
        ],
      },
      {
        h: "Derechos de los interesados (arts. 12-22 RGPD)",
        nota:
          "Los derechos se agrupan bien en dos bloques: los de INFORMACIÓN Y CONTROL —acceso, rectificación, supresión— y los de OPOSICIÓN Y LIMITACIÓN, más el de portabilidad. El plazo general de respuesta es de UN MES desde la recepción, prorrogable en DOS MESES MÁS cuando sea necesario por la complejidad o el número de solicitudes, informando al interesado dentro del primer mes. Ojo a dos delimitaciones: el derecho de SUPRESIÓN —el «derecho al olvido»— no opera cuando el tratamiento es necesario para cumplir una obligación legal o para el ejercicio de poderes públicos; y la PORTABILIDAD solo cabe cuando el tratamiento se basa en consentimiento o contrato y se efectúa por medios automatizados, de modo que no alcanza a los tratamientos administrativos ordinarios.",
        items: [
          "Plazo de respuesta (art. 12.3): 1 mes; prórroga de 2 meses adicionales si solicitud compleja (informar dentro del 1.er mes)",
          "Solicitudes infundadas/excesivas/repetitivas (art. 12.5): el responsable puede cobrar canon razonable o negarse a actuar; la carga de probar el carácter repetitivo recae en el responsable",
          "Derecho de acceso (art. 15): confirmación + información sobre finalidades, categorías, destinatarios, plazo conservación, derechos...",
          "Rectificación (art. 16): sin dilación indebida",
          "Supresión/Derecho al olvido (art. 17): 6 causas (a-f); excepciones art. 17.3: libertad de expresión, obligación legal, interés público en salud, archivo/investigación, reclamaciones",
          "Limitación (art. 18): 4 supuestos: impugnación exactitud / tratamiento ilícito / fines de reclamación / oposición pendiente de verificación",
          "Portabilidad (art. 20): solo si basado en CONSENTIMIENTO o CONTRATO Y tratamiento AUTOMATIZADO; no aplica a interés público/poderes públicos",
          "Oposición (art. 21): para mercadotecnia directa = cese OBLIGATORIO e INCONDICIONAL; para arts. 6.1.e/f = el responsable puede invocar motivos legítimos imperiosos",
          "Decisiones automatizadas (art. 22): derecho a no ser objeto de ellas; 3 excepciones: contrato, autorización legal, consentimiento explícito; si excepción: derecho a intervención humana, expresar punto de vista, impugnar",
          "LOPDGDD art. 13.3: ejercicio del derecho de acceso más de 1 vez en 6 meses = puede considerarse repetitivo",
        ],
      },
      {
        h: "Otras disposiciones LOPDGDD",
        nota:
          "La LO 3/2018 no sustituye al Reglamento europeo: lo desarrolla en lo que éste dejó a los Estados y añade materia propia. Para un ayuntamiento lo esencial es que el DELEGADO DE PROTECCIÓN DE DATOS es OBLIGATORIO en todas las autoridades y organismos públicos, sin excepción por tamaño, y que su designación debe comunicarse a la Agencia Española de Protección de Datos. La ley incorpora además el bloque de derechos digitales del Título X, que es donde vive el derecho a la desconexión digital en el ámbito laboral.",
        items: [
          "Art. 3: datos de personas fallecidas → familiares y herederos pueden solicitar acceso/rectificación/supresión, salvo prohibición del fallecido (que no afecta a datos patrimoniales)",
          "Art. 5.3: deber de confidencialidad se mantiene AUN DESPUÉS de finalizar la relación con el responsable/encargado",
        ],
      },
    ],
    claves: [
      "6 principios art. 5 RGPD: licitud-lealtad-transparencia / limitación finalidad / minimización / exactitud / limitación conservación / integridad-confidencialidad + accountability",
      "6 bases de licitud art. 6 RGPD (a-f); intereses legítimos NO aplica a autoridades públicas en ejercicio de funciones",
      "Consentimiento: retirable en cualquier momento; tan fácil retirar como dar; retirada no afecta licitud previa",
      "Menores: 16 años (RGPD) pero 14 años en España (LOPDGDD art. 7)",
      "Categorías especiales art. 9 RGPD: prohibición + 10 excepciones; LOPDGDD: para ideología/sindical/religión/orientación sexual → solo consentimiento NO basta",
      "Plazo respuesta derechos: 1 mes + prórroga 2 meses (informar dentro del 1.er mes)",
      "Supresión art. 17: 6 causas tasadas; excepciones: libertad expresión, obligación legal, interés público, archivo/investigación, reclamaciones",
      "Portabilidad: solo si basado en consentimiento o contrato + tratamiento automatizado",
      "Oposición a mercadotecnia directa: cese INCONDICIONAL (≠ oposición general que admite motivos legítimos imperiosos)",
      "Decisiones automatizadas: 3 excepciones (contrato / autorización legal / consentimiento explícito) + garantías mínimas",
      "Acceso repetitivo LOPDGDD: más de 1 vez en 6 meses sin causa legítima → puede considerarse repetitivo",
    ],
  },

  G9: {
    intro:
      "La LF 5/2018, de 17 de mayo, de Transparencia, acceso a la información pública y buen gobierno de Navarra regula la publicidad activa, el derecho de acceso a la información pública y el Consejo de Transparencia de Navarra (CTN) como órgano de control independiente.",
    bloques: [
      {
        h: "Ámbito subjetivo (arts. 2-3)",
        nota:
          "La ley no solo obliga a las Administraciones: extiende la transparencia a sujetos privados por dos vías. La primera, las ENTIDADES PRIVADAS que reciben dinero público por encima de ciertos umbrales. La segunda, los ADJUDICATARIOS de contratos, que deben suministrar la información necesaria para que la Administración cumpla sus propias obligaciones. Los umbrales del art. 3 se preguntan con sus dos cifras, y ojo a que la segunda es acumulativa: no basta con que las ayudas representen el 20 % de los ingresos, hace falta además que alcancen un mínimo de 5.000 euros.",
        items: [
          "Sujetos plenos (art. 2): Administración CFN y organismos, entidades locales, UPNA, consorcios, sociedades/fundaciones públicas con participación >50%",
          "Otros sujetos obligados solo en transparencia (art. 3): partidos, sindicatos, organizaciones empresariales; entidades privadas con subvenciones >20.000 € o ≥20% de ingresos y al menos 5.000 €; centros concertados; prestadores de servicios públicos",
        ],
      },
      {
        h: "Publicidad activa — obligaciones de información (arts. 11-18)",
        nota:
          "Publicidad ACTIVA y derecho de ACCESO son las dos mitades de la ley y no deben mezclarse: la primera es lo que la Administración publica por iniciativa propia y sin que nadie lo pida; el segundo es lo que un ciudadano solicita. De la publicidad activa se preguntan los plazos de actualización y permanencia, que son distintos entre sí, y la multa coercitiva a los adjudicatarios incumplidores, reiterable cada QUINCE días — no confundir con la del Consejo de Transparencia del art. 69, que es cada diez.",
        items: [
          "Actualización mínima: trimestral (art. 11.1.a); inventario de información pública también trimestral (art. 11.1.b)",
          "Permanencia mínima: contratos/convenios/subvenciones → mientras persistan obligaciones + 10 años después (art. 11.2.c); información económica: 10 años (art. 11.2.d)",
          "Adjudicatarios que incumplan requerimiento de información: multa coercitiva 500-5.000 € por períodos de 15 días; total no puede exceder del 5% del importe del contrato/subvención (art. 12.5)",
          "Denuncia por incumplimiento publicidad activa ante CTN → respuesta motivada en 2 meses; confidencialidad del denunciante (art. 29 bis)",
          "Publicidad activa abarca: información institucional, altos cargos, jurídica, económico-presupuestaria, contratación, convenios, subvenciones, patrimonio, urbanismo/medioambiente (art. 18)",
        ],
      },
      {
        h: "Derecho de acceso — ejercicio (arts. 30-33)",
        nota:
          "El principio rector del bloque es que el acceso es la regla y la denegación la excepción: NO hay que motivar la solicitud ni acreditar interés alguno, y la falta de motivación no puede ser por sí sola causa de rechazo. Los límites existen, pero se aplican de forma restrictiva, motivada y proporcionada, atendiendo al caso concreto y ponderando el interés público en la divulgación. Cuando la información contenga datos personales especialmente protegidos, la regla se endurece: hace falta consentimiento EXPRESO Y POR ESCRITO o una norma con rango de ley que lo ampare.",
        items: [
          "Titular: cualquier persona física o jurídica; no es necesario motivar ni acreditar interés alguno (art. 30.2)",
          "Limitaciones tasadas (art. 31.1): seguridad pública, secreto en toma de decisiones, investigación penal/administrativa, tutela judicial, vigilancia e inspección, intereses económicos y comerciales, secreto profesional/PI, medio ambiente, información protegida por ley",
          "Datos especiales/penales: acceso solo con consentimiento expreso y escrito del afectado o norma con rango de ley (art. 32.1)",
          "Acceso parcial obligatorio cuando solo parte de la información está limitada (art. 33)",
        ],
      },
      {
        h: "Procedimiento de acceso (arts. 34-44)",
        nota:
          "Aquí está la diferencia más importante con la ley estatal y la que conviene tener presente al tramitar una solicitud en el Ayuntamiento: en Navarra el silencio en el derecho de acceso es ESTIMATORIO, salvo que una ley imponga expresamente la denegación. La inversión respecto del régimen común es deliberada. Retén también los dos plazos de diez días con función distinta: los DIEZ DÍAS HÁBILES para que el solicitante concrete una petición imprecisa —que SUSPENDEN el plazo— y los DIEZ DÍAS NATURALES para derivar la solicitud al órgano competente cuando se recibe por error.",
        items: [
          "Solicitud: por cualquier medio; no se exige motivar ni identificar documento concreto; la solicitud puede ser oral (se recoge en soporte electrónico) (art. 34)",
          "Solicitudes imprecisas: 10 días hábiles para concretar; suspende plazo para resolver (art. 35.1)",
          "Causas de inadmisión (art. 37): información inexistente, competencia desconocida, petición de elaboración de informes/dictámenes, solicitudes abusivas, documentación preparatoria inconclusa, información auxiliar interna, reelaboración necesaria",
          "Derivación a órgano competente: 10 días naturales (art. 38.1)",
          "Intervención de terceros: audiencia 10-15 días; suspende plazo para resolver (art. 39.1)",
          "Plazo resolución: 1 mes + prórroga de 1 mes adicional (comunicar en 10 días) (art. 41.1)",
          "Silencio: ESTIMATORIO (regla general); excepto cuando la denegación venga impuesta por norma con rango de ley (art. 41.2)",
          "Resoluciones ponen fin a la vía administrativa → recurso contencioso o reclamación potestativa ante CTN (art. 42.5)",
          "Gratuito: acceso in situ, entrega por correo electrónico, publicidad activa; copias y transposición de formato: precio máximo igual a coste (art. 44)",
        ],
      },
      {
        h: "Reclamación ante el CTN (art. 45)",
        nota:
          "La reclamación es POTESTATIVA y SUSTITUTIVA de los recursos administrativos: quien la elige no puede recurrir en alzada o reposición, y quien no, va directo al contencioso. Fíjate en el contraste de silencios dentro de la misma ley: aquí, en la reclamación, el silencio es DESESTIMATORIO a los tres meses; en la solicitud de acceso del bloque anterior, ESTIMATORIO. Y una vez resuelta, los actos del Consejo son directamente ejecutivos y obligan a las entidades destinatarias, con el respaldo de las multas coercitivas del art. 69.",
        items: [
          "Carácter: potestativo (sustitutivo de recursos administrativos)",
          "Plazo interposición: 1 mes desde notificación, o en cualquier momento desde el silencio",
          "Plazo resolución CTN: 3 meses; silencio = desestimación",
          "Actos CTN: directamente ejecutivos y obligatorios para los sujetos destinatarios; impugnables en contencioso-administrativo",
        ],
      },
      {
        h: "Título VI — El Consejo de Transparencia de Navarra (arts. 63-69)",
        nota:
          "El Título VI regula el órgano en sí, no el trámite de reclamación del art. 45. Tres cosas lo definen: es INDEPENDIENTE pero adscrito orgánicamente al departamento de transparencia —independencia funcional, no orgánica—; su presidencia la elige el PARLAMENTO por mayoría absoluta para seis años NO renovables, mientras que los vocales los nombra el Gobierno por cuatro años; y tiene dientes propios, porque sus resoluciones son vinculantes y puede imponer multas coercitivas reiterables. Los dos plazos —seis y cuatro años— y la asimetría en quién nombra a cada uno son lo que más se pregunta.",
        items: [
          "NATURALEZA (art. 63): órgano INDEPENDIENTE destinado a promover la transparencia, que vela por el cumplimiento de las obligaciones de publicidad activa y garantiza el derecho de acceso. Actúa con objetividad, profesionalidad, sometimiento al ordenamiento jurídico, AUTONOMÍA y PLENA INDEPENDENCIA, pero se ADSCRIBE ORGÁNICAMENTE al departamento competente en materia de transparencia",
          "FUNCIONES (art. 64), trece letras: conocer de las RECLAMACIONES contra resoluciones expresas o presuntas en materia de acceso · requerir la subsanación de incumplimientos, de oficio o por denuncia o reclamación · INFORMAR PRECEPTIVAMENTE los proyectos normativos de desarrollo · evaluar el grado de aplicación y formular recomendaciones · adoptar CRITERIOS DE INTERPRETACIÓN UNIFORME · resolver consultas de las entidades obligadas · elaborar la MEMORIA ANUAL · instar expedientes disciplinarios o sancionadores · IMPONER MULTAS COERCITIVAS (art. 69) · promover formación y sensibilización · colaborar con órganos análogos · y velar por el deber de facilitar información a parlamentarios forales y electos locales",
          "La MEMORIA ANUAL se presenta ante el PARLAMENTO DE NAVARRA e incluye un apartado específico sobre el cumplimiento de la Ley Foral 16/2016 de CUENTAS ABIERTAS, además de reclamaciones y consultas tramitadas, recomendaciones y requerimientos, y los expedientes cuya incoación se haya instado (art. 64.g)",
          "COMPOSICIÓN (art. 65.1): la presidencia más SIETE VOCALES, que recaen en personal técnico con experiencia, a propuesta de — el departamento competente en transparencia · la FEDERACIÓN NAVARRA DE MUNICIPIOS Y CONCEJOS · el Consejo de Navarra · la CÁMARA DE COMPTOS · el Defensor del Pueblo de Navarra · la Universidad Pública de Navarra · y el Parlamento de Navarra. Cabe proponer persona suplente para enfermedad, ausencia o impedimento temporal",
          "PRESIDENCIA (art. 65.2): elegida por el PARLAMENTO DE NAVARRA por MAYORÍA ABSOLUTA entre personas de reconocido prestigio y competencia profesional, de entre las candidaturas de los grupos parlamentarios, y NOMBRADA POR EL GOBIERNO mediante decreto foral por un período de SEIS AÑOS NO RENOVABLE. Cesa por renuncia, fallecimiento o incapacitación judicial, y a petición del Parlamento por mayoría absoluta en caso de incumplimiento grave, incapacidad sobrevenida, incompatibilidad o condena por delito doloso. La expiración de los seis años conlleva CESE AUTOMÁTICO",
          "VOCALES (art. 65.3): nombrados por CUATRO AÑOS por el GOBIERNO DE NAVARRA a propuesta de la presidencia del Consejo, previa designación por las entidades correspondientes. Expirado el mandato continúan en funciones hasta la nueva designación",
          "INCOMPATIBILIDADES (art. 65.4): la condición de miembro NO exige dedicación exclusiva; la de presidente o presidenta es INCOMPATIBLE con ser alto cargo de la Administración foral y con la PERTENENCIA A UN PARTIDO POLÍTICO",
          "EQUILIBRIO DE SEXOS (art. 65.5): se procura que las personas de cada sexo no superen el 60 % ni sean menos del 40 %, conforme al art. 4.1.f de la Ley Foral 17/2019 de igualdad",
          "DIETAS (art. 65 bis): los miembros pueden compatibilizar su tarea con su puesto en la Administración y son retribuidos por su participación COMO PONENTES EN LOS DICTÁMENES, con dietas compatibles con su remuneración como funcionarios. Puede fijarse además una dieta anual para la presidencia y para quien ejerza la secretaría",
          "FUNCIONES DE LA PRESIDENCIA (art. 66): representación del Consejo · velar por la observancia de la ley e instar expedientes disciplinarios o sancionadores · fijar el orden del día, convocar, presidir y moderar las sesiones, con VOTO DE CALIDAD · presentar la memoria al Parlamento · y colaborar con órganos análogos. En vacante, ausencia o enfermedad la sustituye el miembro DE MAYOR EDAD que cumpla el régimen de incompatibilidad del art. 65.4",
          "ORGANIZACIÓN (art. 67): se rige por el REGLAMENTO que el propio órgano apruebe, que debe publicarse en el Boletín Oficial de Navarra. El apoyo jurídico, técnico y administrativo lo facilita el departamento competente en transparencia, con sus medios personales, económicos y materiales, y el departamento competente en archivos",
          "DEBER DE COLABORACIÓN (art. 68): las administraciones públicas de Navarra y los demás sujetos de los arts. 2.1, 2.2 y 3 deben facilitar al Consejo la información que les solicite y prestarle la colaboración necesaria",
          "EFICACIA DE SUS ACTOS (art. 69.1): los actos de petición de información y documentación y las resoluciones del Consejo son VINCULANTES para las administraciones, entidades y personas obligadas, con la excepción de las instituciones públicas forales no sujetas a su conocimiento",
          "EJECUCIÓN FORZOSA (art. 69.4): advertido un posible incumplimiento, el Consejo requiere el cumplimiento en el plazo que fije; transcurrido éste, puede imponer MULTA COERCITIVA DE 500 A 5.000 EUROS, REITERABLE CADA DIEZ DÍAS hasta el cumplimiento íntegro, y HACER PÚBLICA la actitud incumplidora en su web, en su informe anual y en los medios, dando traslado al Parlamento de Navarra",
          "AUXILIO (art. 69.5): el Consejo puede recabar el auxilio de cualquier administración y poder público para garantizar la efectividad de sus resoluciones, que lo prestarán con carácter PREFERENTE Y URGENTE",
        ],
      },
    ],
    claves: [
      "Entidades privadas obligadas: >20.000 € subvenciones O ≥20% ingresos+mín 5.000 €",
      "Actualización publicidad activa: mínimo trimestral",
      "Permanencia contratos/convenios/subvenciones: duración + 10 años después",
      "Multa coercitiva adjudicatarios incumplidores: 500-5.000 €/15 días; máx 5% del contrato",
      "Denuncia publicidad activa → respuesta CTN en 2 meses",
      "No hay que motivar ni acreditar interés para solicitar acceso",
      "Datos especiales: consentimiento expreso y escrito O norma con rango de ley",
      "Solicitudes imprecisas: 10 días hábiles para concretar; suspende plazo",
      "Inadmisión: no incluye solicitudes a órgano incompetente (→ derivación en 10 días naturales)",
      "Plazo resolución: 1 mes (+ prórroga 1 mes; avisar en 10 días)",
      "Silencio = estimatorio (salvo denegación impuesta por ley)",
      "Resoluciones de acceso: fin de vía administrativa",
      "CTN: 1 mes para reclamar; 3 meses para resolver; silencio = desestimación; actos ejecutivos",
      "CTN independiente PERO adscrito orgánicamente al departamento de transparencia",
      "Presidencia: elige el PARLAMENTO por mayoría absoluta, nombra el GOBIERNO, 6 AÑOS NO renovables",
      "Vocales: 7, nombrados por el GOBIERNO por 4 AÑOS a propuesta de la presidencia del Consejo",
      "Proponen vocal: departamento de transparencia · FNMC · Consejo de Navarra · Cámara de Comptos · Defensor del Pueblo · UPNA · Parlamento",
      "Presidencia incompatible con alto cargo foral y con pertenencia a partido político; tiene VOTO DE CALIDAD",
      "Sustituye a la presidencia el miembro de MAYOR EDAD que cumpla las incompatibilidades",
      "Memoria anual al Parlamento, con apartado específico de la LF 16/2016 de Cuentas Abiertas",
      "Informa PRECEPTIVAMENTE los proyectos normativos de desarrollo y adopta criterios de interpretación uniforme",
      "Multa coercitiva del CTN: 500 a 5.000 €, reiterable CADA DIEZ DÍAS, más publicación de la actitud incumplidora",
      "Equilibrio de sexos: ni más del 60 % ni menos del 40 % (art. 4.1.f LF 17/2019)",
    ],
  },

  G8: {
    intro:
      "El DFL 251/1993 aprueba el Estatuto del Personal al Servicio de las Administraciones Públicas de Navarra. Regula el acceso a la función pública, la carrera administrativa (grados), las situaciones administrativas, el régimen retributivo y el régimen disciplinario del personal funcionario, eventual y contratado.",
    bloques: [
      {
        h: "Ámbito, clases de personal y adquisición de la condición (arts. 1-11)",
        nota:
          "El Estatuto foral tiene su propio vocabulario y conviene fijarlo antes que nada, porque no coincide con el del EBEP estatal: aquí no se habla de grupos A1, A2, C1 sino de NIVELES A, B, C, D y E. El ámbito subjetivo se pregunta por las EXCLUSIONES, que son cuatro y muy concretas —Policía Foral, personal del Servicio Navarro de Salud, funcionarios sanitarios municipales y profesionales con encargos ocasionales—, y por la remisión del art. 2.2: al personal de las entidades locales se le aplica este Estatuto CON LAS ESPECIFICIDADES de la Ley Foral 6/1990, que es la norma que te afecta como empleado municipal.",
        items: [
          "Art. 1 — ÁMBITO: la Administración de la Comunidad Foral · las ENTIDADES LOCALES de Navarra · y los organismos públicos dependientes de una u otras",
          "Art. 2.1 — EXCLUIDOS expresamente: los miembros de la POLICÍA FORAL · el personal adscrito al SERVICIO NAVARRO DE SALUD-Osasunbidea · los FUNCIONARIOS SANITARIOS MUNICIPALES de Navarra · y los profesionales que OCASIONALMENTE y en virtud de encargos concretos presten servicios",
          "Art. 2.2 — regla clave para el empleado municipal: el Estatuto se aplica al personal de las Entidades Locales CON LAS ESPECIFICIDADES establecidas en la Ley Foral 6/1990 de la Administración Local de Navarra",
          "Art. 3.1 — TRES CLASES de personal: FUNCIONARIOS PÚBLICOS · PERSONAL EVENTUAL · PERSONAL CONTRATADO (en régimen administrativo o laboral)",
          "Art. 3.2 — FUNCIONARIO: quien en virtud de NOMBRAMIENTO LEGAL está incorporado CON CARÁCTER PERMANENTE a cualquiera de las Administraciones Públicas de Navarra mediante una relación de servicios profesionales y retribuidos sometida al Derecho administrativo",
        ],
      },
      {
        h: "Grupos/Niveles y titulación (art. 12)",
        nota:
          "Cinco niveles designados por letras, de la A a la E, cada uno con su titulación de acceso. Es una lista de correspondencias que se pregunta directamente y en la que un arquitecto tiene interés propio: el NIVEL A exige titulación universitaria superior, y es el que corresponde a la plaza a la que opositas. La carrera administrativa del art. 14 se mueve en dos ejes que no hay que confundir: la PROMOCIÓN DE NIVEL —pasar de un nivel a otro superior, por turno restringido con reserva de vacantes— y el ASCENSO DE GRADO Y CATEGORÍA dentro de cada nivel.",
        items: [
          "Nivel A: Licenciado/Ingeniero/Arquitecto",
          "Nivel B: Diplomado/IT/AT/FP3",
          "Nivel C: Bachillerato/FP2",
          "Nivel D: Graduado Escolar/FP1",
          "Nivel E: Certificado de Escolaridad",
        ],
      },
      {
        h: "Acceso, provisión y carrera (arts. 14-16, 31-35)",
        nota:
          "El turno restringido tiene una fórmula de reparto que se pregunta: la primera vacante al turno libre, la segunda al restringido, y así alternativamente. Del bloque de provisión lo más examinable es el régimen de la INTERINIDAD del art. 32, que tiene dos plazos contrapuestos: a los TRES MESES ininterrumpidos nace el derecho a percibir la diferencia retributiva, y con efecto RETROACTIVO desde el comienzo; y al AÑO la plaza debe declararse vacante, salvo que su titular tenga derecho a reserva.",
        items: [
          "Art. 14 — CARRERA ADMINISTRATIVA: consiste en la PROMOCIÓN de un nivel a los superiores y en el ASCENSO de grado y categoría dentro de cada nivel",
          "Art. 15.1 — requisitos del turno restringido: pertenecer a nivel INFERIOR al de las vacantes · poseer la titulación exigida y acreditar CINCO AÑOS de antigüedad reconocida · no hallarse en excedencia voluntaria o forzosa, salvo quien en excedencia voluntaria preste servicios en otro puesto fijo o temporal de la misma Administración convocante · y superar las pruebas selectivas",
          "Art. 15.3 — FÓRMULA DE REPARTO de vacantes: la primera al turno LIBRE, la segunda al turno de PROMOCIÓN, y así sucesivamente de forma alternativa",
          "Art. 31 — ADSCRIPCIÓN: los funcionarios pueden ser adscritos a un ámbito orgánico determinado dentro del cual desempeñan las funciones propias de su nivel y nombramiento; la asignación de plaza la realizan los órganos competentes de la respectiva Administración",
          "Art. 32 — INTERINIDAD en el puesto: previa designación, el funcionario puede desempeñar interinamente cualquier puesto de SU MISMO NIVEL y de igual o superior categoría, si reúne la titulación o formación exigida. Las designaciones son LIBREMENTE REVOCABLES",
          "Art. 32.3-4 — dos plazos: transcurridos TRES MESES de interinidad ininterrumpida nace el derecho a percibir las cantidades que equiparen su retribución a la del puesto desempeñado, DEVENGADAS CON CARÁCTER RETROACTIVO desde el comienzo; y salvo que el titular tenga derecho a reserva, la interinidad dura como máximo UN AÑO, tras el cual la plaza se declara vacante",
        ],
      },
      {
        h: "Turno restringido y ascenso de grado (arts. 15-16)",
        nota:
          "Dos cifras contrapuestas en el turno restringido: CINCO años de antigüedad con la titulación exigida, u OCHO años sin ella pero solo para vacantes de los niveles C, D y E — y con la excepción de aquellas plazas en que una titulación específica sea imperativo legal. El ascenso de grado tiene su propia aritmética, con un mínimo de dos años en el grado anterior y un máximo de ocho en el mismo grado.",
        items: [
          "Turno restringido: mínimo 5 años de antigüedad como funcionario de carrera (art. 15.1.b); para niveles C/D/E sin titulación: 8 años (art. 15.2)",
          "Ascenso de grado: período total máx. 6 años 7 meses; mínimo 2 años en grado anterior; máximo 8 años en mismo grado (salvo grado 7) (art. 16)",
        ],
      },
      {
        h: "Derechos y deberes (arts. 36-39)",
        nota:
          "El art. 36 enumera los derechos del funcionario en servicio activo, y su primera letra incluye una mención que conviene retener por su literalidad: junto al ejercicio de las funciones inherentes al cargo, el derecho al respeto de la intimidad y a la consideración debida a la dignidad, COMPRENDIDA LA PROTECCIÓN FRENTE A OFENSAS VERBALES O FÍSICAS DE NATURALEZA SEXUAL. Del resto de la lista, fija la INAMOVILIDAD DE RESIDENCIA, que solo cede por necesidades del servicio o por sanción.",
        items: [
          "Art. 36.1 — derechos en servicio activo: al ejercicio de las funciones inherentes a su cargo y al respeto de su INTIMIDAD y DIGNIDAD, comprendida la protección frente a ofensas verbales o físicas de naturaleza sexual · a desempeñar los puestos correspondientes a su nivel y cualificación · al ASCENSO Y PROMOCIÓN · a la INAMOVILIDAD DE RESIDENCIA salvo por necesidades del servicio o por sanción · a vacaciones anuales retribuidas · a LICENCIAS retribuidas por estudios, matrimonio y maternidad y no retribuidas por asuntos propios · a permisos retribuidos · a cesar en la prestación por enfermedad o accidente · a la excedencia voluntaria y especial · a percibir sus retribuciones · y a los derechos pasivos",
        ],
      },
      {
        h: "Situaciones administrativas — excedencias (arts. 26-28 bis)",
        nota:
          "Las excedencias se distinguen por tres variables que el examen combina: si exige o no tiempo previo de servicios, si conserva o no la reserva de puesto, y si computa o no a efectos de antigüedad. La VOLUNTARIA es la menos protectora —no devenga retribuciones ni computa antigüedad, y no cabe pedir el reingreso hasta cumplir un año—. La ESPECIAL por cuidado de hijos o familiares llega a tres años por sujeto causante. Y la de VIOLENCIA DE GÉNERO es la más protectora de las tres: no exige tiempo mínimo previo, reserva el puesto seis meses prorrogables hasta dieciocho y mantiene las retribuciones íntegras los dos primeros meses.",
        items: [
          "Excedencia voluntaria: no puede pedir reingreso hasta cumplir 1 año; no devenga retribuciones ni computa antigüedad; conserva nivel/grado/antigüedad (art. 26)",
          "Excedencia especial (hijos/familiares): máximo 3 años por sujeto causante (art. 27.1)",
          "Excedencia violencia de género: sin tiempo mínimo previo; reserva de puesto 6 meses (prorrogable hasta 18 en períodos de 3); retribuciones íntegras 2 primeros meses (art. 28 bis)",
        ],
      },
      {
        h: "Retribuciones (arts. 40-43)",
        nota:
          "El sistema retributivo foral es aritmético y se pregunta con números. Fija la distinción entre lo BÁSICO —sueldo inicial, retribución por grado y premio de antigüedad— y los COMPLEMENTOS de puesto, cada uno con su porcentaje máximo. Y sobre todo la asimetría entre las dos retribuciones que se calculan por porcentaje: la RETRIBUCIÓN POR GRADO es del 9 % y ACUMULATIVA, mientras que el PREMIO DE ANTIGÜEDAD NO es acumulativo y se calcula siempre sobre el sueldo inicial del NIVEL E, cualquiera que sea el nivel del funcionario. Esa doble trampa —acumulativo o no, y sobre qué base— es la pregunta típica.",
        items: [
          "Retribuciones básicas (art. 40.2): sueldo inicial, retribución por grado, premio de antigüedad",
          "Complementos de puesto (art. 40.3): puesto de trabajo (máx. 75%), directivo (máx. 75%), dedicación exclusiva (55%), incompatibilidad (35%), prolongación jornada (máx. 10%), especial riesgo (máx. 10%)",
          "Índices de nivel (art. 41.2): A=2; B=1,65; C=1,35; D=1,15; E=1",
          "Retribución por grado (art. 42): 9% ACUMULATIVO sobre sueldo inicial del nivel; en grado 1 no se percibe",
          "Premio de antigüedad (art. 43): NO acumulativo; sobre sueldo inicial nivel E; por quinquenios",
        ],
      },
      {
        h: "Régimen disciplinario (arts. 61-71)",
        nota:
          "Bloque de tablas numéricas puras, y por eso el más rentable si se estudia en columnas. Hay CUATRO series de plazos distintas para leves, graves y muy graves —prescripción de faltas, sanciones aplicables, cancelación de anotaciones y prescripción de sanciones impuestas— y el examen las intercambia. Nota que la prescripción de las FALTAS y la de las SANCIONES coinciden en muy graves (tres años) pero no en leves ni graves, y que la cancelación de anotaciones sigue una escala propia mucho más larga: seis meses, dos años y seis años.",
        items: [
          "Prescripción de faltas (art. 61.2): leves 1 mes; graves 1 año; muy graves 3 años",
          "Sanciones (art. 67): leves → apercibimiento o 1-4 días suspensión; graves → 5-30 días, traslado, hasta 1 año sin concursos; muy graves → 1-5 años suspensión o separación",
          "Cancelación anotaciones (art. 69.2): leves 6 meses; graves 2 años; muy graves 6 años",
          "Prescripción de sanciones impuestas (art. 70.3): leves 1 año; graves 2 años; muy graves 3 años",
          "Plazo máximo expediente disciplinario (art. 71.2): 12 meses (graves/muy graves); 6 meses (leves)",
        ],
      },
      {
        h: "Personal eventual y contratado (arts. 87-88)",
        nota:
          "Las dos figuras no funcionariales del Estatuto. El PERSONAL EVENTUAL es de confianza o asesoramiento especial: se nombra y cesa libremente y, sobre todo, CESA AUTOMÁTICAMENTE cuando cesa la autoridad que lo nombró — dato de respuesta directa. El PERSONAL CONTRATADO puede serlo en régimen administrativo o laboral, y de sus modalidades la más preguntada es la de exceso o acumulación de tareas, con un máximo de NUEVE MESES y sin posibilidad de prórroga ni de nuevo contrato para atender la misma necesidad.",
        items: [
          "Excluidos del Estatuto: Policía Foral, personal del SNS-Osasunbidea, funcionarios sanitarios municipales y encargos profesionales ocasionales (art. 2.1)",
      "Al personal de las ENTIDADES LOCALES se le aplica con las especificidades de la LF 6/1990 (art. 2.2)",
      "Niveles por LETRAS (A a E), no por grupos A1/A2/C1 del EBEP estatal",
      "Turno restringido: fórmula alterna — la primera vacante al turno LIBRE, la segunda al de PROMOCIÓN (art. 15.3)",
      "Interinidad: a los 3 MESES nace el derecho a la diferencia retributiva, RETROACTIVA desde el inicio; máximo 1 AÑO salvo reserva del titular (art. 32)",
      "Derecho a la INAMOVILIDAD DE RESIDENCIA, salvo necesidades del servicio o sanción (art. 36.1.d)",
      "Retribución por grado: 9 % ACUMULATIVO. Premio de antigüedad: NO acumulativo y sobre el sueldo del NIVEL E",
      "Personal eventual: nombrado y cesado libremente por el DF y Corporaciones Locales; cesa al cesar quien lo nombró (art. 87)",
          "Contrato por exceso/acumulación de tareas: máximo 9 meses; sin prórroga ni nuevo contrato para la misma necesidad (art. 88.1.d)",
          "Art. 3.1: las tres clases de personal son FUNCIONARIOS, EVENTUAL y CONTRATADO; este último, en régimen ADMINISTRATIVO o LABORAL (Títulos IV, Capítulos I y II)",
        ],
      },
    ],
    claves: [
      "Nivel A = Licenciado/Ingeniero/Arquitecto",
      "Turno restringido: 5 años (8 años para C/D/E sin titulación)",
      "Máx. en mismo grado: 8 años (salvo grado 7)",
      "Excedencia voluntaria: mínimo 1 año; sin retribuciones ni cómputo antigüedad",
      "Excedencia especial: máx. 3 años por sujeto causante",
      "Violencia de género: reserva 6 m (hasta 18 m); retribuciones íntegras 2 m",
      "Índices: A=2 / B=1,65 / C=1,35 / D=1,15 / E=1",
      "Retribución grado: 9% acumulativo; en grado 1 nada",
      "Premio antigüedad: NO acumulativo; quinquenios sobre nivel E",
      "Prescripción faltas: 1 mes/1 año/3 años",
      "Cancelación sanciones: 6 m/2 a/6 a",
      "Exceso tareas: máx. 9 meses, sin prórroga",
    ],
  },

  G7: {
    intro:
      "La Ley 39/2015, de 1 de octubre, de Procedimiento Administrativo Común (Título IV, arts. 53-105, y Título V, arts. 106-126) regula el desarrollo del procedimiento, los recursos administrativos y la revisión de oficio. Se complementa con la LF 6/1990 de Administración Local de Navarra (arts. 332-340) sobre el Tribunal Administrativo de Navarra (TAN).",
    bloques: [
      {
        h: "Derechos del interesado e iniciación (arts. 53-69)",
        nota:
          "El art. 53 recoge los derechos de quien YA es interesado en un procedimiento, frente al art. 13 del tema anterior, que recoge los de cualquier persona: es la pareja que más se cruza en el examen. De la iniciación interesa el art. 62, que aclara que la DENUNCIA no convierte al denunciante en interesado, y sobre todo el art. 69, que regula la DECLARACIÓN RESPONSABLE y la COMUNICACIÓN — la puerta de entrada de buena parte del control municipal de obras y actividades, y el precepto que enlaza este tema con el E36 de la parte específica.",
        items: [
          "Art. 53.1 — derechos del INTERESADO: conocer el ESTADO DE TRAMITACIÓN y el sentido del silencio · identificar a las autoridades y personal bajo cuya responsabilidad se tramite · acceder y obtener copia de los documentos del expediente · no presentar documentos originales salvo que la norma lo exija · no presentar datos y documentos NO EXIGIDOS por las normas, que ya estén en poder de las AAPP o que hayan sido elaborados por éstas · formular ALEGACIONES y aportar documentos en cualquier momento ANTERIOR AL TRÁMITE DE AUDIENCIA · obtener información y orientación · actuar asistido de asesor · y cumplir las obligaciones de pago a través de medios electrónicos",
          "Art. 53.2 — derechos en procedimientos SANCIONADORES: ser notificado de los hechos imputados, las infracciones y las sanciones que pudieran imponerse, así como de la identidad del instructor y del órgano competente y de la norma que le atribuya tal competencia; y a la PRESUNCIÓN DE NO EXISTENCIA DE RESPONSABILIDAD ADMINISTRATIVA mientras no se demuestre lo contrario",
          "Art. 54 — clases de iniciación: DE OFICIO o A SOLICITUD del interesado",
          "Art. 55 — INFORMACIÓN Y ACTUACIONES PREVIAS: con anterioridad al inicio, el órgano competente puede abrir un período de información o actuaciones previas para conocer las circunstancias del caso y la conveniencia de iniciar. En los procedimientos SANCIONADORES se orientan a determinar con la mayor precisión posible los hechos, las personas responsables y las circunstancias relevantes",
          "Art. 56 — MEDIDAS PROVISIONALES: pueden adoptarse ANTES de la iniciación en casos de urgencia inaplazable y para la protección provisional de los intereses implicados, pero deben ser CONFIRMADAS, MODIFICADAS O LEVANTADAS en el acuerdo de iniciación, que ha de dictarse dentro de los QUINCE DÍAS siguientes; en todo caso quedan sin efecto si no se inicia el procedimiento en ese plazo o el acuerdo no contiene pronunciamiento expreso",
          "Art. 58-62 — formas de inicio DE OFICIO: por propia iniciativa · como consecuencia de ORDEN SUPERIOR · por PETICIÓN RAZONADA de otros órganos · o por DENUNCIA",
          "Art. 62.3-5 — DENUNCIA: la presentación no confiere por sí sola la condición de interesado. Cuando el denunciante haya participado en la infracción y existan otros infractores, podrá eximirse del pago de la multa si es el primero en aportar elementos de prueba que permitan iniciar o probar la infracción, siempre que no existan previamente pruebas suficientes y cese en su participación",
          "Art. 66 — SOLICITUDES: contenido mínimo —nombre y apellidos e identificación del medio electrónico o lugar a efectos de notificaciones, hechos y razones, lugar y fecha, firma, y órgano al que se dirige—. Cuando las pretensiones sean de contenido y fundamento idéntico o sustancialmente similar, pueden formularse en una ÚNICA SOLICITUD",
          "Art. 68 — SUBSANACIÓN: si la solicitud no reúne los requisitos, se requiere al interesado para que en DIEZ DÍAS subsane, con indicación de que si no lo hace se le tendrá por DESISTIDO. El plazo puede ampliarse hasta cinco días más, salvo en procedimientos selectivos o de concurrencia competitiva",
          "Art. 69 — DECLARACIÓN RESPONSABLE y COMUNICACIÓN: la declaración responsable es el documento en que el interesado MANIFIESTA, BAJO SU RESPONSABILIDAD, que cumple los requisitos, dispone de la documentación acreditativa, la pondrá a disposición cuando le sea requerida y se compromete a mantener el cumplimiento durante el tiempo inherente. La comunicación es aquella por la que pone en conocimiento de la Administración sus datos identificativos y demás requisitos para el ejercicio de un derecho o el inicio de una actividad",
          "Art. 69.3-4: ambas permiten el ejercicio del derecho o el inicio de la actividad DESDE EL DÍA DE SU PRESENTACIÓN. La INEXACTITUD, FALSEDAD U OMISIÓN de carácter esencial, o la no presentación de la declaración o comunicación, determina la IMPOSIBILIDAD DE CONTINUAR con el ejercicio del derecho o actividad desde que se tenga constancia, sin perjuicio de las responsabilidades a que hubiera lugar, y puede obligar a RESTITUIR la situación jurídica al momento previo",
        ],
      },
      {
        h: "Instrucción del procedimiento (arts. 70-83)",
        nota:
          "Bloque de plazos cortos que hay que fijar en pares para no confundirlos: la PRUEBA se abre entre DIEZ y TREINTA días, ampliable hasta diez más; la AUDIENCIA es de DIEZ a QUINCE días; y la INFORMACIÓN PÚBLICA tiene un mínimo de VEINTE días. Dos reglas de fondo con consecuencias prácticas: los informes son, salvo disposición en contrario, FACULTATIVOS Y NO VINCULANTES, y puede prescindirse del trámite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta otros hechos, alegaciones o pruebas que los aducidos por el interesado.",
        items: [
          "Art. 70 — EXPEDIENTE ADMINISTRATIVO: conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a la resolución. Tiene formato ELECTRÓNICO, con índice numerado de todos los documentos. NO forman parte del expediente la información con carácter AUXILIAR O DE APOYO —notas, borradores, opiniones, resúmenes, comunicaciones e informes internos entre órganos— ni los juicios de valor",
          "Art. 71 — IMPULSO: el procedimiento se impulsa DE OFICIO en todos sus trámites y a través de medios electrónicos, respetando el ORDEN RIGUROSO DE INCOACIÓN en asuntos de homogénea naturaleza, salvo que el titular de la unidad administrativa dé orden motivada en contrario, de la que quede constancia",
          "Art. 73 — CUMPLIMIENTO DE TRÁMITES: los trámites que deba cumplir el interesado se realizan en el plazo de DIEZ DÍAS desde la notificación, salvo que la norma fije otro. A quienes no cumplan en plazo se les podrá declarar decaídos en su derecho al trámite, si bien se admitirá la actuación si se produce ANTES O DENTRO DEL DÍA en que se notifique la resolución que tenga por transcurrido el plazo",
          "Art. 76 — ALEGACIONES: los interesados pueden formularlas y aportar documentos EN CUALQUIER MOMENTO anterior al trámite de audiencia, y siempre podrán alegar los defectos de tramitación, en especial los que supongan paralización, infracción de plazos preceptivos o la omisión de trámites, que podrán dar lugar a la exigencia de RESPONSABILIDAD DISCIPLINARIA",
          "Art. 77 — PRUEBA: los hechos relevantes pueden acreditarse por cualquier medio de prueba admisible en Derecho. Los hechos constatados por FUNCIONARIOS a los que se reconoce la condición de autoridad, y que se formalicen en documento público, tienen VALOR PROBATORIO, sin perjuicio de las pruebas que en defensa de sus derechos señalen los administrados",
          "Art. 78 — PRÁCTICA DE PRUEBA: se comunica a los interesados con antelación suficiente el inicio de las actuaciones, indicando lugar, fecha y hora, y advirtiendo de que puede nombrar TÉCNICOS para que le asistan. Los gastos que exija el interesado y no deba soportar la Administración se le podrán exigir anticipadamente, a reserva de la liquidación definitiva",
          "Art. 80 — INFORMES: salvo disposición expresa en contrario, son FACULTATIVOS y NO VINCULANTES, y se emiten en el plazo de DIEZ DÍAS salvo que una norma o el cumplimiento del resto de plazos permita otro. De no emitirse en plazo se pueden proseguir las actuaciones, salvo que se trate de un informe PRECEPTIVO, en cuyo caso puede suspenderse el plazo máximo para resolver",
          "Art. 82 — AUDIENCIA: se realiza INMEDIATAMENTE ANTES de redactar la propuesta de resolución, por plazo NO INFERIOR A DIEZ DÍAS NI SUPERIOR A QUINCE. Puede prescindirse de él cuando no figuren en el procedimiento ni sean tenidos en cuenta otros hechos, alegaciones o pruebas que los aducidos por el interesado",
          "Art. 83 — INFORMACIÓN PÚBLICA: el plazo no puede ser inferior a VEINTE DÍAS. La incomparecencia NO impide a los interesados interponer los recursos procedentes, y la comparecencia NO otorga por sí misma la condición de interesado, aunque quienes presenten alegaciones tienen derecho a obtener respuesta RAZONADA, que podrá ser común para todas las que planteen cuestiones sustancialmente iguales",
        ],
      },
      {
        h: "Terminación y plazos (arts. 84-96)",
        nota:
          "Distingue con cuidado tres figuras que se parecen y tienen efectos distintos: DESISTIMIENTO —se abandona la solicitud, pero puede volver a pedirse—, RENUNCIA —se abandona el derecho mismo, y solo cabe cuando no esté prohibida— y CADUCIDAD, que es la muerte del procedimiento por paralización imputable al interesado durante TRES MESES, previa advertencia. La caducidad no produce por sí sola la prescripción de las acciones, pero los procedimientos caducados no interrumpen el plazo de prescripción: ese matiz es pregunta segura.",
        items: [
          "Prescripción responsabilidad patrimonial: 1 año desde el hecho o manifestación del efecto lesivo (art. 67.1)",
          "Subsanación de solicitudes: 10 días; si no subsana → tenido por desistido (art. 68.1)",
          "Período de prueba ordinario: 10-30 días; extraordinario: máx. 10 días adicionales (art. 77.2)",
          "Audiencia al interesado: 10-15 días (art. 82.2)",
          "Información pública: mínimo 20 días (art. 83.2)",
          "Reducción 20% sanción: condicionada al desistimiento o renuncia de recurso en vía administrativa (art. 85.3)",
          "Actuaciones complementarias: alegaciones en 7 días; completadas en máx. 15 días (art. 87)",
          "Art. 84 — modos de TERMINACIÓN: resolución, desistimiento, renuncia al derecho en que se funde la solicitud cuando no esté prohibida por el ordenamiento, declaración de CADUCIDAD, e imposibilidad material de continuarlo por causas sobrevenidas, que exige resolución MOTIVADA",
          "Art. 86 — TERMINACIÓN CONVENCIONAL: las AAPP pueden celebrar acuerdos, pactos, convenios o contratos con personas de derecho público o privado, siempre que no sean contrarios al ordenamiento, no versen sobre materias no susceptibles de transacción y tengan por objeto satisfacer el interés público. No suponen alteración de las competencias atribuidas a los órganos ni de las responsabilidades que correspondan",
          "Art. 88 — CONTENIDO de la resolución: decidirá TODAS LAS CUESTIONES planteadas y aquellas otras derivadas del procedimiento; en este último caso se pondrán de manifiesto a los interesados por plazo NO SUPERIOR A QUINCE DÍAS para que formulen alegaciones. La Administración NO PUEDE ABSTENERSE de resolver so pretexto de silencio, oscuridad o insuficiencia de los preceptos, y la resolución no podrá AGRAVAR la situación inicial del interesado, sin perjuicio de la potestad de iniciar un nuevo procedimiento",
          "Art. 94 — DESISTIMIENTO Y RENUNCIA por los interesados: todo interesado puede desistir de su solicitud o, cuando no esté prohibido, renunciar a sus derechos. Si el escrito de iniciación se hubiera formulado por VARIOS interesados, el desistimiento o renuncia solo afecta a quienes lo hubiesen formulado. La Administración lo aceptará de plano salvo que se hayan personado terceros que insten su continuación en el plazo de DIEZ DÍAS, o que la cuestión suscitada entrañe INTERÉS GENERAL o fuera conveniente sustanciarla",
          "Art. 95 — CADUCIDAD: producida la paralización por causa imputable al interesado, la Administración le ADVERTIRÁ que, transcurridos TRES MESES, se producirá la caducidad. Consumido este plazo sin actividad, se acordará el archivo, notificándoselo. Contra la resolución que declare la caducidad procederán los recursos pertinentes",
          "Art. 95.3 — regla clave: los procedimientos caducados NO INTERRUMPIRÁN el plazo de prescripción. En los casos en que sea posible la iniciación de un nuevo procedimiento por no haberse producido la prescripción, podrán incorporarse a éste los actos y trámites cuyo contenido se hubiera mantenido igual de no haberse producido la caducidad",
          "Art. 95.4: no procede la caducidad si la cuestión suscitada afecta al INTERÉS GENERAL o fuera conveniente sustanciarla para su definición y esclarecimiento",
          "Art. 96 — TRAMITACIÓN SIMPLIFICADA: puede acordarse de oficio o a solicitud cuando razones de interés público o la falta de complejidad lo aconsejen. Los interesados pueden OPONERSE en el plazo de CINCO DÍAS. Salvo que reste menos para su tramitación ordinaria, los procedimientos simplificados deben resolverse en TREINTA DÍAS. En los procedimientos que requieran dictamen del Consejo de Estado u órgano consultivo equivalente, éste se solicitará y, de ser desfavorable a la tramitación simplificada, se seguirá la ordinaria",
        ],
      },
      {
        h: "Ejecución forzosa (arts. 97-105)",
        nota:
          "La ejecución forzosa es la manifestación más contundente de la autotutela administrativa, y por eso está tasada. Los cuatro medios del art. 100 se aplican respetando siempre el principio de PROPORCIONALIDAD, y cuando quepan varios se elegirá el MENOS RESTRICTIVO de la libertad individual; si además afecta a derechos que exigen intervención judicial —singularmente la entrada en domicilio—, hará falta la correspondiente autorización. Para un técnico municipal los dos medios cotidianos son la EJECUCIÓN SUBSIDIARIA en órdenes de ejecución y demoliciones, y la MULTA COERCITIVA, que no es una sanción sino un medio de compulsión reiterable e independiente de las sanciones que puedan imponerse.",
        items: [
          "Art. 97 — TÍTULO: las AAPP no iniciarán ninguna actuación material de ejecución de resoluciones que limite derechos de los particulares sin que previamente haya sido adoptada la resolución que le sirva de fundamento jurídico. El órgano que ordene un acto de ejecución material está OBLIGADO A NOTIFICAR al particular la resolución que autorice la actuación administrativa",
          "Art. 98 — EJECUTORIEDAD: los actos son inmediatamente ejecutivos, salvo que se produzca la suspensión, se trate de una resolución de un procedimiento de naturaleza SANCIONADORA contra la que quepa recurso en vía administrativa, que una disposición establezca lo contrario, o que se necesite aprobación o autorización superior",
          "Art. 99 — EJECUCIÓN FORZOSA: las AAPP, a través de sus órganos competentes, podrán proceder, PREVIO APERCIBIMIENTO, a la ejecución forzosa de los actos administrativos, salvo en los supuestos en que se suspenda la ejecución de acuerdo con la ley o cuando la Constitución o la ley exijan la intervención de un órgano judicial",
          "Art. 100 — CUATRO MEDIOS: a) APREMIO SOBRE EL PATRIMONIO · b) EJECUCIÓN SUBSIDIARIA · c) MULTA COERCITIVA · d) COMPULSIÓN SOBRE LAS PERSONAS. Si fueran varios los admisibles se elegirá el MENOS RESTRICTIVO DE LA LIBERTAD INDIVIDUAL, y si fuese necesario entrar en el domicilio del afectado o en los restantes lugares que requieran la autorización de su titular, las AAPP deberán obtener el CONSENTIMIENTO del mismo o, en su defecto, la oportuna AUTORIZACIÓN JUDICIAL",
          "Art. 101 — APREMIO SOBRE EL PATRIMONIO: procede si en virtud del acto ha de satisfacerse cantidad líquida, y se sigue el procedimiento previsto en las normas reguladoras del procedimiento recaudatorio en vía ejecutiva. NO podrá imponerse a los administrados una obligación pecuniaria que no estuviese establecida con arreglo a una norma de rango legal",
          "Art. 102 — EJECUCIÓN SUBSIDIARIA: procede cuando se trate de actos que por NO SER PERSONALÍSIMOS puedan ser realizados por sujeto distinto del obligado. La Administración realiza el acto, por sí o a través de las personas que determine, A COSTA DEL OBLIGADO, cuyo importe podrá liquidarse de forma PROVISIONAL y realizarse antes de la ejecución, a reserva de la liquidación definitiva",
          "Art. 103 — MULTA COERCITIVA: cuando así lo autoricen las leyes y en la forma y cuantía que éstas determinen, las AAPP pueden, para la ejecución de determinados actos, imponer multas REITERADAS por lapsos de tiempo que sean suficientes para cumplir lo ordenado, en tres supuestos — actos PERSONALÍSIMOS en que no proceda la compulsión directa sobre la persona · actos en que, procediendo la compulsión, la Administración no la estimara conveniente · y actos cuya ejecución pueda el obligado encargar a otra persona",
          "Art. 103.2 — regla capital: la multa coercitiva es INDEPENDIENTE de las sanciones que puedan imponerse con tal carácter y COMPATIBLE con ellas. No es una sanción, sino un medio de compulsión",
          "Art. 104 — COMPULSIÓN SOBRE LAS PERSONAS: solo en los casos en que la ley expresamente lo autorice, y dentro del respeto debido a su DIGNIDAD y a los derechos reconocidos en la Constitución. Si, tratándose de obligaciones personalísimas de no hacer o soportar, no se obtuviera el cumplimiento, podrá resarcirse la Administración exigiendo la indemnización de los daños y perjuicios",
          "Art. 105 — PROHIBICIÓN DE ACCIONES POSESORIAS: no se admitirán a trámite acciones posesorias contra las actuaciones de los órganos administrativos realizadas en materia de su competencia y de acuerdo con el procedimiento legalmente establecido",
        ],
      },
      {
        h: "Revisión de oficio (arts. 106-111)",
        nota:
          "Dos vías opuestas según el vicio del acto. Si es NULO de pleno derecho, la Administración puede expulsarlo ella misma en cualquier momento, pero necesita DICTAMEN FAVORABLE del Consejo de Estado u órgano consultivo equivalente — en Navarra, el Consejo de Navarra. Si es meramente ANULABLE y además declarativo de derechos, la Administración no puede anularlo por sí: ha de declararlo LESIVO y acudir a la jurisdicción contencioso-administrativa, con el tope de CUATRO AÑOS desde que se dictó. Y frente a ambas está el art. 110, el límite de la revisión: no cabe cuando por prescripción, por el tiempo transcurrido o por otras circunstancias resulte contraria a la equidad, la buena fe, el derecho de los particulares o las leyes.",
        items: [
          "Revisión nulidad de pleno derecho: requiere dictamen favorable del Consejo de Estado; si iniciada de oficio y pasan 6 meses → caducidad (art. 106.1)",
          "Declaración de lesividad: no puede adoptarse tras 4 años desde el acto; caducidad del procedimiento si no se resuelve en 6 meses (art. 107.2)",
          "Art. 106.1: las AAPP, en cualquier momento, por iniciativa propia o a solicitud de interesado y PREVIO DICTAMEN FAVORABLE del Consejo de Estado u órgano consultivo equivalente de la Comunidad Autónoma, declararán de oficio la nulidad de los actos que hayan puesto fin a la vía administrativa o que no hayan sido recurridos en plazo, en los supuestos del art. 47.1",
          "Art. 106.3: el órgano competente puede acordar motivadamente la INADMISIÓN A TRÁMITE de las solicitudes formuladas por los interesados, sin necesidad de dictamen, cuando no se basen en alguna de las causas de nulidad o carezcan manifiestamente de fundamento, así como cuando se hubieran desestimado en cuanto al fondo otras solicitudes sustancialmente iguales",
          "Art. 106.4: las AAPP, al declarar la nulidad de una disposición o acto, PODRÁN ESTABLECER EN LA MISMA RESOLUCIÓN LAS INDEMNIZACIONES que proceda reconocer a los interesados, si se dan las circunstancias del art. 32.2 y 34.1 de la Ley 40/2015",
          "Art. 107.1 — LESIVIDAD: las AAPP podrán impugnar ante el orden jurisdiccional contencioso-administrativo los actos FAVORABLES para los interesados que sean ANULABLES conforme al art. 48, previa su declaración de lesividad para el interés público",
          "Art. 108 — SUSPENSIÓN: iniciado el procedimiento de revisión de oficio, el órgano competente para resolver podrá SUSPENDER LA EJECUCIÓN del acto cuando ésta pudiera causar perjuicios de imposible o difícil reparación",
          "Art. 109 — REVOCACIÓN y RECTIFICACIÓN: las AAPP podrán revocar, mientras no haya transcurrido el plazo de prescripción, los actos DESFAVORABLES O DE GRAVAMEN, siempre que no constituya dispensa o exención no permitida por las leyes ni sea contraria al principio de igualdad, al interés público o al ordenamiento. Y podrán RECTIFICAR EN CUALQUIER MOMENTO, de oficio o a instancia, los errores MATERIALES, DE HECHO O ARITMÉTICOS",
          "Art. 110 — LÍMITES DE LA REVISIÓN: las facultades de revisión no podrán ser ejercidas cuando por PRESCRIPCIÓN de acciones, por el TIEMPO TRANSCURRIDO o por otras circunstancias, su ejercicio resulte contrario a la EQUIDAD, a la BUENA FE, al DERECHO DE LOS PARTICULARES o a las LEYES",
          "Art. 111 — COMPETENCIA en la AGE: la revisión de oficio de disposiciones y actos nulos corresponde al Consejo de Ministros respecto de sus propios actos y los de los ministros, y a los ministros respecto de los actos de los órganos dependientes",
        ],
      },
      {
        h: "Recursos administrativos (arts. 112-126)",
        nota:
          "Tres recursos y una regla que los ordena: contra un acto que NO pone fin a la vía administrativa cabe ALZADA ante el superior jerárquico; contra uno que SÍ la pone, REPOSICIÓN con carácter POTESTATIVO; y el EXTRAORDINARIO DE REVISIÓN es la excepción, solo por los cuatro motivos tasados del art. 125 y contra actos FIRMES en vía administrativa. Los plazos son la pregunta segura y conviene fijarlos por parejas: alzada, un mes para interponer si el acto es expreso y tres meses para resolver; reposición, un mes y un mes. En ambos el silencio es DESESTIMATORIO, salvo la excepción del art. 24.1 para la alzada contra desestimación presunta.",
        items: [
          "Alzada: interponer en 1 mes (acto expreso) o 3 meses (presunto); resolver en 3 meses; silencio = desestimación (art. 122)",
          "Reposición: 1 mes para interponer (expreso); 1 mes para resolver; silencio = desestimación",
          "Revisión extraordinaria: motivo a) → 4 años; motivos b)-d) → 3 meses desde conocimiento (art. 125.2)",
          "Art. 112 — OBJETO: contra las resoluciones y los ACTOS DE TRÁMITE CUALIFICADOS —los que deciden directa o indirectamente el fondo del asunto, determinan la imposibilidad de continuar el procedimiento, producen indefensión o perjuicio irreparable a derechos e intereses legítimos— podrán interponerse alzada y reposición",
          "Art. 114 — PONEN FIN A LA VÍA ADMINISTRATIVA, entre otras: las resoluciones de los recursos de ALZADA · las de los procedimientos de impugnación sustitutivos del art. 112.2 · las que resuelvan procedimientos de responsabilidad patrimonial · las de órganos que carezcan de superior jerárquico salvo que una ley diga lo contrario · los acuerdos, pactos, convenios o contratos que tengan la consideración de finalizadores · y, en la Administración Local, las de los ÓRGANOS de las entidades locales, salvo los supuestos de la legislación de régimen local",
          "Art. 115 — INTERPOSICIÓN: el error o la ausencia de la calificación del recurso por parte del recurrente NO SERÁ OBSTÁCULO para su tramitación, siempre que se deduzca su verdadero carácter",
          "Art. 116 — CAUSAS DE INADMISIÓN: ser incompetente el órgano administrativo, cuando el competente perteneciera a otra Administración · carecer de legitimación el recurrente · tratarse de un acto no susceptible de recurso · haber transcurrido el PLAZO para la interposición · y carecer el recurso manifiestamente de FUNDAMENTO",
          "Art. 117 — SUSPENSIÓN: la interposición NO suspende la ejecución del acto impugnado, salvo que una disposición establezca lo contrario. No obstante, el órgano puede suspender de oficio o a solicitud, previa ponderación entre el perjuicio al interés público o a terceros y el que se causa al recurrente, cuando la ejecución pudiera causar PERJUICIOS DE IMPOSIBLE O DIFÍCIL REPARACIÓN o la impugnación se fundamente en alguna de las causas de NULIDAD DE PLENO DERECHO",
          "Art. 117.3 — SILENCIO POSITIVO DE LA SUSPENSIÓN: la ejecución del acto impugnado se entenderá SUSPENDIDA si transcurrido UN MES desde que la solicitud de suspensión haya tenido entrada en el registro del órgano competente para decidir sobre ella, éste no ha dictado y notificado resolución expresa al respecto",
          "Art. 118 — AUDIENCIA en el recurso: cuando hayan de tenerse en cuenta nuevos hechos o documentos no recogidos en el expediente originario, se pondrán de manifiesto a los interesados por plazo NO INFERIOR A DIEZ DÍAS NI SUPERIOR A QUINCE. No se tendrán en cuenta en la resolución hechos, documentos o alegaciones del recurrente cuando, habiendo podido aportarlos en el trámite de alegaciones, NO LO HAYA HECHO",
          "Art. 119 — RESOLUCIÓN: estimará en todo o en parte, o desestimará, las pretensiones. Cuando existiendo VICIO DE FORMA no se estime procedente resolver sobre el fondo se ordenará la RETROACCIÓN al momento en que el vicio fue cometido. El órgano que resuelva NO PODRÁ AGRAVAR la situación inicial del recurrente",
          "Art. 121 — ALZADA: contra las resoluciones y actos de trámite cualificados que NO pongan fin a la vía administrativa, ante el órgano SUPERIOR JERÁRQUICO del que los dictó. Puede interponerse ante el órgano que dictó el acto o ante el competente para resolverlo; si se interpone ante el primero, éste debe remitirlo al competente en el plazo de DIEZ DÍAS con su informe y copia completa y ordenada del expediente",
          "Art. 123 — REPOSICIÓN: contra los actos que PONGAN FIN a la vía administrativa, con carácter POTESTATIVO, ante el mismo órgano que los dictó. NO se podrá interponer recurso contencioso-administrativo hasta que sea resuelto expresamente o se haya producido la desestimación presunta",
          "Art. 125 — EXTRAORDINARIO DE REVISIÓN: contra actos FIRMES en vía administrativa, ante el órgano que los dictó, por CUATRO motivos — a) error DE HECHO que resulte de los propios documentos incorporados al expediente · b) aparición de documentos de valor ESENCIAL para la resolución que evidencien el error, posteriores o de imposible aportación al tiempo de dictarse · c) que en la resolución hayan influido esencialmente documentos o testimonios declarados FALSOS por sentencia judicial firme · d) que la resolución se hubiese dictado como consecuencia de PREVARICACIÓN, cohecho, violencia, maquinación fraudulenta u otra conducta punible declarada en sentencia firme",
          "Art. 126 — el órgano puede INADMITIR a trámite el recurso extraordinario sin necesidad de dictamen del Consejo de Estado cuando no se funde en alguna de las causas o se hubiesen desestimado en cuanto al fondo otros recursos sustancialmente iguales. Debe resolverse en TRES MESES; transcurridos sin resolución se entenderá DESESTIMADO",
        ],
      },
      {
        h: "TAN — LF 6/1990 arts. 332-340",
        nota:
          "Especialidad navarra sin equivalente en el régimen común y de aplicación diaria en el Ayuntamiento: el Tribunal Administrativo de Navarra es un órgano de la Comunidad Foral que resuelve recursos contra actos de las ENTIDADES LOCALES. Tres rasgos lo caracterizan y los tres se preguntan: es POTESTATIVO y GRATUITO; su legitimación es amplísima, porque pueden recurrir los vecinos aunque el acto no les afecte personalmente; y su interposición NO suspende la ejecución del acto, sin que el propio Tribunal pueda acordar la suspensión cautelar durante la tramitación.",
        items: [
          "Recurso ante el TAN: potestativo y gratuito; legitimados los vecinos aunque no les afecte personalmente; fundarse en cualquier infracción del OJ (art. 337)",
          "Plazo de resolución del TAN: 6 meses; silencio = desestimación (art. 338.2)",
          "La interposición ante el TAN NO suspende la ejecución del acto; el TAN NO puede acordar suspensión cautelar durante la tramitación (art. 339)",
        ],
      },
    ],
    claves: [
      "Prescripción responsabilidad patrimonial: 1 año",
      "Subsanación: 10 días → desistimiento si no subsana",
      "Prueba ordinaria: 10-30 días; extraordinaria: máx. +10 días",
      "Audiencia: 10-15 días",
      "Información pública: mínimo 20 días",
      "Reducción 20% sanción → desistimiento/renuncia recurso vía administrativa",
      "Caducidad: paralización 3 meses → advertencia → archivo",
      "Ejecución forzosa: 4 medios (apremio, subsidiaria, multa coercitiva, compulsión personas)",
      "Revisión de oficio: dictamen CE; caducidad 6 meses si iniciada de oficio",
      "Lesividad: máx. 4 años; caducidad procedimiento 6 meses",
      "Alzada: 1 m interponer / 3 m resolver",
      "Revisión extraordinaria: motivo a) 4 años; b)-d) 3 meses",
      "Declaración responsable y comunicación: permiten actuar DESDE EL DÍA DE SU PRESENTACIÓN (art. 69.3)",
      "Inexactitud, falsedad u omisión ESENCIAL: imposibilidad de continuar y posible restitución de la situación previa (art. 69.4)",
      "La denuncia NO convierte al denunciante en interesado (art. 62.3)",
      "Medidas provisionales previas al inicio: deben confirmarse en el acuerdo de iniciación, que se dicta en 15 DÍAS",
      "Los informes son, salvo disposición en contrario, FACULTATIVOS y NO VINCULANTES, y se emiten en 10 días (art. 80)",
      "Cabe prescindir de la AUDIENCIA si no hay más hechos ni pruebas que los aducidos por el interesado (art. 82.4)",
      "Comparecer en información pública NO otorga la condición de interesado, pero da derecho a respuesta RAZONADA (art. 83.3)",
      "Los procedimientos caducados NO INTERRUMPEN la prescripción (art. 95.3)",
      "Tramitación simplificada: oposición del interesado en 5 días; resolución en 30 días (art. 96)",
      "Entrada en domicilio para ejecución forzosa: consentimiento del titular o AUTORIZACIÓN JUDICIAL (art. 100.3)",
      "La MULTA COERCITIVA no es sanción: es independiente y compatible con ellas (art. 103.2)",
      "Ejecución subsidiaria: solo actos NO PERSONALÍSIMOS, a costa del obligado (art. 102)",
      "Revocación: solo de actos DESFAVORABLES o de gravamen; los favorables van por lesividad (art. 109.1)",
      "Rectificación de errores materiales, de hecho o aritméticos: EN CUALQUIER MOMENTO (art. 109.2)",
      "Límite del art. 110: no cabe revisar si resulta contrario a la equidad, la buena fe, el derecho de los particulares o las leyes",
      "Suspensión solicitada en un recurso: SILENCIO POSITIVO al mes (art. 117.3)",
      "El error en la calificación del recurso no impide su tramitación (art. 115.2)",
      "Ni en recurso ni en resolución puede AGRAVARSE la situación inicial del interesado (arts. 88.2 y 119.3)",
      "TAN: potestativo, gratuito, vecinos legitimados, no suspende ejecución, 6 meses para resolver",
    ],
  },

  G6: {
    intro:
      "Primera mitad de la Ley 39/2015 (arts. 1-52), que es la ley del «hacia fuera» de la Administración: cómo se relaciona con el ciudadano, frente a la 40/2015 que ordena su organización interna. Estos tres títulos responden en orden a tres preguntas: QUIÉN puede actuar en un procedimiento (interesado, capacidad, representación), CÓMO se relaciona con la Administración (medios electrónicos, registros, lengua, plazos) y QUÉ es un acto administrativo (producción, motivación, eficacia, notificación e invalidez). Para un técnico municipal lo más rentable son los plazos y el silencio —porque condicionan cada informe que firmas— y la lista de causas de nulidad de pleno derecho, que se cruza con la disciplina urbanística.",
    bloques: [
      {
        h: "Interesados, capacidad y representación (arts. 3-8)",
        nota:
          "La capacidad de obrar en el procedimiento es más amplia que en el Derecho civil: la tienen también los MENORES DE EDAD para el ejercicio y defensa de los derechos que el ordenamiento les permita sin asistencia, salvo los incapacitados cuando la privación se extienda a ese ejercicio. El art. 4 distingue tres categorías de interesado que se preguntan por sus matices: quien promueve, quien tiene derechos que pueden RESULTAR AFECTADOS por la decisión, y quien tiene intereses LEGÍTIMOS que puedan resultar afectados y se persone ANTES de la resolución definitiva — ese último requisito temporal es la trampa habitual.",
        items: [
          "Art. 3 — CAPACIDAD DE OBRAR: la tienen quienes la ostenten con arreglo a las normas civiles, los MENORES de edad para el ejercicio y defensa de los derechos e intereses cuya actuación esté permitida sin la asistencia de quien ejerza la patria potestad o tutela (salvo los incapacitados cuando la privación alcance ese ejercicio), y los GRUPOS DE AFECTADOS, uniones y entidades sin personalidad y patrimonios independientes cuando la ley lo declare expresamente",
          "Art. 4.1 — tres clases de INTERESADO: a) quienes lo PROMUEVAN como titulares de derechos o intereses legítimos individuales o colectivos · b) los que, sin haber iniciado el procedimiento, tengan DERECHOS que puedan resultar afectados por la decisión · c) aquellos cuyos INTERESES LEGÍTIMOS, individuales o colectivos, puedan resultar afectados y SE PERSONEN mientras no haya recaído resolución definitiva",
          "Art. 4.2-3: las asociaciones y organizaciones representativas de intereses económicos y sociales son titulares de intereses legítimos COLECTIVOS en los términos que la ley reconozca. Si durante la tramitación se transmite la titularidad, el CAUSAHABIENTE sucede en su condición de interesado",
          "Art. 5 — REPRESENTACIÓN: se presume para los actos y gestiones de mero trámite; debe acreditarse para formular SOLICITUDES, presentar DECLARACIONES RESPONSABLES o COMUNICACIONES, interponer RECURSOS, DESISTIR de acciones y RENUNCIAR a derechos. La falta o insuficiente acreditación NO impide que se tenga por realizado el acto si se aporta o se subsana el defecto en DIEZ DÍAS, o en el plazo mayor que se conceda",
          "Art. 6 — REGISTROS ELECTRÓNICOS DE APODERAMIENTOS: los poderes inscritos tienen una validez máxima de CINCO AÑOS desde la inscripción, y pueden revocarse en cualquier momento",
          "Art. 7 — pluralidad de interesados: las actuaciones se entienden con el REPRESENTANTE o el interesado que expresamente hayan señalado, y en su defecto con el que figure en PRIMER TÉRMINO",
          "Art. 8 — nuevos interesados: si durante la instrucción se advierte la existencia de personas titulares de derechos o intereses legítimos y directos que puedan resultar afectados, se les COMUNICARÁ la tramitación",
        ],
      },
      {
        h: "Derechos, medios electrónicos y registros (arts. 13-19)",
        nota:
          "El art. 13 recoge los derechos de TODAS las personas en sus relaciones con la Administración, mientras que el art. 53 —ya en el tema 7— recoge los del INTERESADO en un procedimiento concreto: el examen los intercambia constantemente, así que conviene estudiarlos como pareja. Del art. 14 lo esencial es la lista de obligados a relacionarse electrónicamente, que incluye a quienes ejerzan una actividad profesional para la que se requiera COLEGIACIÓN OBLIGATORIA —de modo que un arquitecto está obligado en los trámites propios de su actividad— y a los representantes de un obligado.",
        items: [
          "Art. 13 — derechos de las personas: comunicarse a través de un PUNTO DE ACCESO GENERAL electrónico · ser ASISTIDAS en el uso de medios electrónicos · utilizar las LENGUAS OFICIALES · acceder a la información pública, archivos y registros · ser tratadas con respeto y deferencia · exigir RESPONSABILIDADES de las Administraciones y de su personal · a la protección de datos · y cualesquiera otros reconocidos por la Constitución y las leyes",
          "Art. 14.2 — OBLIGADOS a relacionarse electrónicamente: las personas JURÍDICAS · las entidades SIN PERSONALIDAD jurídica · quienes ejerzan una ACTIVIDAD PROFESIONAL CON COLEGIACIÓN OBLIGATORIA para los trámites propios de esa actividad —notarios, registradores, y también los arquitectos— · quienes REPRESENTEN a un interesado obligado · y los EMPLEADOS de las AAPP para los trámites que realicen por razón de su condición",
          "Art. 15 — LENGUA: los procedimientos tramitados por la AGE se sustancian en CASTELLANO, sin perjuicio del derecho a dirigirse en la lengua cooficial de la Comunidad; si concurren varios interesados y hay discrepancia sobre la lengua, el procedimiento se tramitará en castellano, traduciéndose a la cooficial los documentos que interesen a quienes lo soliciten",
          "Art. 16 — REGISTRO ELECTRÓNICO GENERAL: cada Administración dispondrá del suyo. Los documentos pueden presentarse en el registro electrónico, en las OFICINAS DE CORREOS, en las representaciones diplomáticas u oficinas consulares, en las oficinas de ASISTENCIA EN MATERIA DE REGISTROS y en cualquier otro que establezcan las disposiciones vigentes",
          "Art. 18 — COLABORACIÓN: las personas facilitarán a la Administración informes, inspecciones y otros actos de investigación en los casos previstos por la ley. Los interesados en un procedimiento que conozcan datos que permitan identificar a otros interesados que no hayan comparecido tienen el deber de proporcionárselos a la Administración",
          "Art. 19 — COMPARECENCIA: la personal ante las oficinas públicas, ya sea presencial o por medios electrónicos, solo es obligatoria cuando así esté previsto en una NORMA CON RANGO DE LEY. En las citaciones debe hacerse constar expresamente si es obligatoria o facultativa y los efectos de no atenderla",
          "Art. 20 — RESPONSABILIDAD DE LA TRAMITACIÓN: los titulares de las unidades y el personal al servicio de las AAPP son responsables directos de la tramitación y adoptarán las medidas oportunas para remover los obstáculos que impidan o dificulten el ejercicio de los derechos",
        ],
      },
      {
        h: "Plazos y cómputo (arts. 21, 30-33)",
        nota:
          "El art. 30 se reformó y hoy los plazos POR DÍAS son siempre hábiles salvo que la norma diga «naturales», mientras que los expresados en MESES o AÑOS se cuentan de fecha a fecha y vencen el día equivalente al de la notificación —si en el mes de vencimiento no hay día equivalente, vence el último del mes—. Esa asimetría entre días hábiles y meses de fecha a fecha es la que más se falla. Recuerda además que el plazo máximo para resolver no puede exceder de SEIS MESES salvo norma con rango de ley o de la Unión Europea, y que el supletorio es de TRES.",
        items: [
          "Plazo supletorio para resolver y notificar: 3 meses (art. 21.3)",
          "Plazos por días = hábiles; último día inhábil → primer día hábil siguiente (art. 30.2/30.5)",
          "Registro electrónico en día inhábil → primera hora del primer día hábil siguiente (art. 31.2.b)",
          "Urgencia: reducción a la mitad de TODOS los plazos, salvo presentación de solicitudes y recursos (art. 33.1)",
          "Art. 30.1: si el plazo se fija en HORAS, se entienden HÁBILES —las que forman parte de un día hábil— y los plazos por horas no pueden exceder de veinticuatro, expresándose en otro caso en días",
          "Art. 30.4: los plazos en MESES o AÑOS se computan a partir del día siguiente a la notificación o publicación y CONCLUYEN EL MISMO DÍA en que se produjo aquélla en el mes o año de vencimiento; si no hubiera día equivalente, se entiende que expira el ÚLTIMO DÍA DEL MES",
          "Art. 30.6: la declaración de un día como HÁBIL O INHÁBIL a efectos de cómputo no determina por sí sola el funcionamiento de los centros de trabajo, la organización del tiempo de trabajo ni el acceso de los ciudadanos a los registros",
          "Art. 21.2-3: el plazo máximo para resolver y notificar NO PUEDE EXCEDER DE SEIS MESES salvo que lo establezca una norma con rango de ley o el Derecho de la Unión; a falta de fijación expresa, es de TRES MESES",
          "Art. 21.4: las AAPP deben PUBLICAR y mantener actualizadas en el portal web las relaciones de procedimientos con su plazo máximo y los efectos del silencio; y en toda solicitud debe informarse al interesado de esos extremos en el plazo de DIEZ DÍAS desde su recepción",
          "Art. 22 — SUSPENSIÓN potestativa o preceptiva del plazo: requerimiento de subsanación (por el tiempo que medie hasta su cumplimiento, máximo tres meses) · pronunciamiento previo y preceptivo de un órgano de la Unión Europea · informes PRECEPTIVOS Y DETERMINANTES (máximo tres meses) · pruebas técnicas o análisis contradictorios · y negociaciones en procedimientos de terminación convencional",
          "Art. 23 — AMPLIACIÓN: excepcionalmente puede acordarse una ampliación que no exceda de la MITAD del plazo máximo. Contra el acuerdo de ampliación o su denegación NO cabe recurso",
          "Art. 32 — ampliación de plazos a los interesados: hasta la MITAD del plazo, si las circunstancias lo aconsejan y no se perjudican derechos de terceros; debe pedirse ANTES del vencimiento y no cabe ampliar un plazo ya vencido. El acuerdo tampoco es recurrible",
        ],
      },
      {
        h: "Silencio administrativo (arts. 24-25)",
        nota:
          "El silencio en procedimientos iniciados A SOLICITUD es, por regla general, ESTIMATORIO, y las excepciones están tasadas: derecho de petición, transferencia de facultades sobre dominio o servicio público, actividades que puedan dañar el medio ambiente, procedimientos de responsabilidad patrimonial y de impugnación de actos. En los iniciados DE OFICIO la regla se invierte según lo que esté en juego: si podían generar derechos, caducidad o desestimación; si eran sancionadores o de intervención susceptibles de efectos desfavorables, CADUCIDAD. Y una regla capital para urbanismo: el silencio positivo NUNCA puede otorgar facultades contrarias al ordenamiento.",
        items: [
          "Regla general en procedimientos a solicitud del interesado: silencio positivo (art. 24.1)",
          "Silencio desestimatorio (art. 24.1): derecho de petición, dominio/servicio público, actividades que puedan dañar el medio ambiente, responsabilidad patrimonial",
          "Procedimientos de oficio desfavorables o sancionadores: vencimiento del plazo → caducidad (art. 25.1.b)",
          "Art. 24.1, párrafo 3 — REGLA CLAVE PARA URBANISMO: el silencio tiene efecto DESESTIMATORIO en los procedimientos de impugnación de actos y disposiciones y en los de revisión de oficio iniciados a solicitud. No obstante, cuando el recurso de ALZADA se interponga contra la desestimación por silencio de una solicitud, se entenderá ESTIMADO si, llegado el plazo de resolución, el órgano no dicta y notifica resolución expresa",
          "Art. 24.2 — efectos: la estimación por silencio tiene la consideración de ACTO ADMINISTRATIVO FINALIZADOR del procedimiento; la desestimación por silencio tiene los solos efectos de permitir a los interesados interponer el recurso que proceda",
          "Art. 24.3 — obligación de resolver PERSISTE: en los casos de silencio ESTIMATORIO la resolución expresa posterior solo podrá dictarse de ser CONFIRMATORIA del mismo; en los de silencio desestimatorio, se adoptará SIN VINCULACIÓN alguna al sentido del silencio",
          "Art. 25.1.a — procedimientos de oficio de los que pudiera derivarse el reconocimiento o constitución de derechos: los interesados podrán entender DESESTIMADAS sus pretensiones por silencio",
          "Art. 25.2: en los supuestos de caducidad podrá acordarse la reanudación si no ha transcurrido el plazo de PRESCRIPCIÓN",
        ],
      },
      {
        h: "Actos administrativos: producción, motivación y eficacia (arts. 34-39)",
        nota:
          "El acto administrativo se examina en tres planos: producción y contenido, forma y motivación, y eficacia. De la eficacia lo importante es el punto de partida: los actos se presumen VÁLIDOS y producen efectos DESDE LA FECHA EN QUE SE DICTEN, salvo que en ellos se disponga otra cosa; la eficacia queda demorada cuando lo exija el contenido del acto o esté supeditada a notificación, publicación o aprobación superior. Y el art. 37 recoge un principio que conviene tener presente al informar: la INDEROGABILIDAD SINGULAR, es decir, que las resoluciones administrativas de carácter particular no pueden vulnerar lo establecido en una disposición de carácter general, aunque procedan de un órgano de igual o superior jerarquía.",
        items: [
          "Motivación obligatoria (art. 35.1): lista taxativa (letras a-i) — limitación de derechos, resolución de recursos, separación de criterio anterior, suspensión, etc.",
          "Retroactividad: solo en sustitución de actos anulados o efectos favorables si el supuesto de hecho existía y no lesiona terceros (art. 39.3)",
          "Convalidación: solo actos anulables; efectos desde la fecha de la convalidación, no retroactivos (art. 52)",
          "Art. 34 — producción y contenido: se dictan por el órgano COMPETENTE, ajustándose a los requisitos y al procedimiento establecido. El contenido será DETERMINADO Y ADECUADO a sus fines",
          "Art. 36 — FORMA: los actos se producen por ESCRITO A TRAVÉS DE MEDIOS ELECTRÓNICOS, salvo que su naturaleza exija otra forma más adecuada. Cuando deban dictarse una SERIE DE ACTOS DE LA MISMA NATURALEZA —nombramientos, concesiones, licencias—, podrán refundirse en un único acto acordado por el órgano competente, especificando las circunstancias de cada interesado",
          "Art. 37 — INDEROGABILIDAD SINGULAR: las resoluciones administrativas de carácter particular NO pueden vulnerar lo establecido en una disposición de carácter general, aunque procedan de un órgano de igual o superior jerarquía. Son NULAS las resoluciones que vulneren lo establecido en una disposición reglamentaria",
          "Art. 38 — EJECUTIVIDAD: los actos son ejecutivos con arreglo a lo dispuesto en la ley",
          "Art. 39.1-2 — EFICACIA: los actos se presumen VÁLIDOS y producen efectos DESDE LA FECHA EN QUE SE DICTEN, salvo que en ellos se disponga otra cosa. La eficacia queda DEMORADA cuando así lo exija el contenido del acto o esté supeditada a su notificación, publicación o aprobación superior",
          "Art. 39.4-5: las normas y actos dictados por órganos INCOMPETENTES o sin los requisitos legales pueden ser convalidados por el órgano competente cuando sean favorables al interesado, siempre que no se lesionen derechos de terceros",
        ],
      },
      {
        h: "Notificación (arts. 40-46)",
        nota:
          "La notificación no es un requisito de validez sino de EFICACIA, distinción que el examen aprovecha. Cuatro datos gobiernan el bloque: el plazo de DIEZ DÍAS para cursarla desde que el acto se dicta; el contenido mínimo, que incluye texto íntegro, si pone fin a la vía administrativa, recursos y plazos; el rechazo presunto de la notificación electrónica por el transcurso de DIEZ DÍAS NATURALES sin acceder; y la regla de los dos intentos en papel, en días y horas distintos y dentro de los tres días siguientes al primero, con al menos tres horas de diferencia. Ojo a que una notificación defectuosa se convalida si el interesado realiza actuaciones que supongan el conocimiento del contenido y alcance del acto o interpone el recurso procedente.",
        items: [
          "Plazo para cursar: 10 días desde que el acto es dictado (art. 40.2)",
          "Contenido mínimo: texto íntegro, si pone fin a la vía administrativa, recursos procedentes, órgano y plazo (art. 40.2)",
          "Notificación electrónica rechazada: 10 días naturales sin acceder (art. 43.2)",
          "Notificación infructuosa → BOE obligatorio; boletín autonómico/provincial y tablón: facultativo (art. 44)",
          "Art. 40.3 — notificaciones DEFECTUOSAS: surten efecto a partir de la fecha en que el interesado realice actuaciones que supongan el conocimiento del contenido y alcance del acto o interponga el recurso procedente",
          "Art. 40.4: a los solos efectos de entender cumplida la obligación de notificar dentro del plazo máximo, basta la notificación que contenga cuando menos el TEXTO ÍNTEGRO de la resolución y el INTENTO de notificación debidamente acreditado",
          "Art. 41.1: cuando el interesado o su representante rechace la notificación, se hará constar en el expediente, especificándose las circunstancias del intento, y se tendrá por EFECTUADO EL TRÁMITE siguiéndose el procedimiento",
          "Art. 42.2 — dos intentos en papel: si nadie se hace cargo de la notificación, se hará constar en el expediente y se repetirá por UNA SOLA VEZ y en HORA DISTINTA dentro de los TRES DÍAS siguientes, en día distinto al primer intento y con al menos TRES HORAS de diferencia",
          "Art. 43.2 — notificación electrónica: se entiende PRACTICADA en el momento en que se produzca el acceso a su contenido, y RECHAZADA cuando hayan transcurrido DIEZ DÍAS NATURALES desde la puesta a disposición sin que se acceda a su contenido",
          "Art. 45 — PUBLICACIÓN sustitutiva de la notificación: cuando el acto tenga por destinatario a una PLURALIDAD INDETERMINADA de personas, cuando se trate de actos integrantes de un procedimiento SELECTIVO O DE CONCURRENCIA COMPETITIVA, o cuando la Administración estime que la notificación a un solo interesado es insuficiente para garantizar la notificación a todos",
          "Art. 46 — INDICACIÓN de notificaciones y publicaciones: si el órgano competente aprecia que la notificación por medio de anuncios o la publicación lesiona derechos o intereses legítimos, se limitará a publicar en el diario oficial una somera INDICACIÓN del contenido del acto y del lugar donde los interesados podrán comparecer para conocer el contenido íntegro",
        ],
      },
      {
        h: "Invalidez: nulidad, anulabilidad y conservación (arts. 47-52)",
        nota:
          "La nulidad de pleno derecho es la excepción y su lista es TASADA; todo lo demás que infringe el ordenamiento es anulabilidad. La diferencia práctica está en el régimen: la nulidad no se convalida, no prescribe y opera de pleno derecho; la anulabilidad puede convalidarse, se sana por el transcurso del tiempo y exige que el defecto de forma prive al acto de sus requisitos esenciales o produzca INDEFENSIÓN. Los arts. 49 a 52 completan el cuadro con cuatro reglas de economía procesal que conviene distinguir: no extensión de la invalidez, CONVERSIÓN del acto viciado en otro distinto, CONSERVACIÓN de los actos y trámites cuyo contenido se habría mantenido igual, y CONVALIDACIÓN de los anulables, que produce efectos DESDE SU FECHA y no hacia atrás.",
        items: [
          "Nulidad de pleno derecho (art. 47.1): 7 causas tasadas (letras a-g), incluyendo prescindencia total y absoluta del procedimiento (letra e)",
          "Anulabilidad: cualquier infracción del OJ, incluida la de forma (art. 48.1)",
          "Defecto de forma → anulabilidad solo si impide alcanzar el fin del acto O genera indefensión (art. 48.2)",
          "LAS SIETE CAUSAS DE NULIDAD (art. 47.1): a) actos que LESIONEN LOS DERECHOS Y LIBERTADES susceptibles de amparo constitucional · b) los dictados por órgano MANIFIESTAMENTE INCOMPETENTE por razón de la MATERIA O DEL TERRITORIO · c) los de CONTENIDO IMPOSIBLE · d) los que sean CONSTITUTIVOS DE INFRACCIÓN PENAL o se dicten como consecuencia de ésta · e) los dictados PRESCINDIENDO TOTAL Y ABSOLUTAMENTE del procedimiento legalmente establecido o de las normas que contienen las reglas esenciales para la formación de la voluntad de los órganos colegiados · f) los actos EXPRESOS O PRESUNTOS contrarios al ordenamiento por los que se adquieren facultades o derechos CARECIENDO DE LOS REQUISITOS ESENCIALES para su adquisición · g) cualquier otro que se establezca expresamente en una disposición con rango de ley",
          "Ojo a la letra b): la incompetencia que produce nulidad es la MANIFIESTA y por razón de la MATERIA O EL TERRITORIO; la incompetencia JERÁRQUICA es mera anulabilidad y además convalidable (art. 52.3)",
          "La letra f) es la que fundamenta que una licencia obtenida por silencio contra el planeamiento sea NULA DE PLENO DERECHO: no cabe adquirir por silencio facultades careciendo de los requisitos esenciales",
          "Art. 47.2 — nulidad de las DISPOSICIONES ADMINISTRATIVAS: las que vulneren la Constitución, las leyes u otras disposiciones de rango superior, las que regulen materias reservadas a la ley y las que establezcan la RETROACTIVIDAD de disposiciones sancionadoras no favorables o restrictivas de derechos individuales",
          "Art. 48.3 — actuaciones FUERA DE PLAZO: la realización de actuaciones administrativas fuera del tiempo establecido solo implica la anulabilidad del acto cuando así lo imponga la NATURALEZA DEL TÉRMINO O PLAZO",
          "Art. 49 — LÍMITES A LA EXTENSIÓN: la nulidad o anulabilidad de un acto NO implica la de los sucesivos independientes del primero; la nulidad de una PARTE del acto no implica la de las demás partes independientes de aquélla, salvo que la parte viciada sea de tal importancia que sin ella el acto no hubiera sido dictado",
          "Art. 50 — CONVERSIÓN: los actos nulos o anulables que contengan los elementos constitutivos de OTRO DISTINTO producirán los efectos de éste",
          "Art. 51 — CONSERVACIÓN: el órgano que declare la nulidad o anule las actuaciones dispondrá siempre la CONSERVACIÓN de aquellos actos y trámites cuyo contenido se hubiera mantenido igual de no haberse cometido la infracción",
          "Art. 52.3: si el vicio consistiese en la falta de alguna AUTORIZACIÓN, podrá ser convalidado el acto mediante el otorgamiento de la misma por el órgano competente. La convalidación por INCOMPETENCIA JERÁRQUICA la realiza el órgano competente cuando sea superior jerárquico del que dictó el acto",
        ],
      },
    ],
    claves: [
      "Obligados electrónicos: PJ, entidades sin personalidad, colegiados en ejercicio (arquitectos incluidos), representantes, empleados públicos",
      "Interesado del art. 4.1.c: debe personarse ANTES de la resolución definitiva",
      "Representación: se presume en actos de trámite; ha de acreditarse para solicitudes, recursos, desistimiento y renuncia — subsanable en 10 días",
      "Poderes del registro electrónico: validez máxima de CINCO AÑOS",
      "Comparecencia personal: obligatoria solo si lo prevé una norma CON RANGO DE LEY",
      "Plazos en MESES: de fecha a fecha; si no hay día equivalente, el último del mes",
      "Plazo máximo para resolver: nunca más de SEIS MESES salvo norma con rango de ley o Derecho de la UE",
      "Ampliación de plazos: como máximo la MITAD, pedida ANTES del vencimiento y sin recurso",
      "Alzada contra desestimación presunta: se entiende ESTIMADO si no se resuelve en plazo (art. 24.1)",
      "El silencio estimatorio es ACTO FINALIZADOR; la resolución expresa posterior solo puede ser CONFIRMATORIA",
      "Inderogabilidad singular: la resolución particular no puede vulnerar un reglamento, aunque venga de órgano superior (art. 37)",
      "Los actos producen efectos DESDE QUE SE DICTAN; la notificación es requisito de EFICACIA, no de validez",
      "Dos intentos de notificación en papel: hora distinta, dentro de 3 días, con 3 horas de diferencia",
      "Nulidad por incompetencia: solo la MANIFIESTA y por MATERIA O TERRITORIO. La jerárquica es anulable y convalidable",
      "Art. 47.1.f: no se adquieren por silencio facultades careciendo de los REQUISITOS ESENCIALES — base de la nulidad de licencias contra el planeamiento",
      "Plazo supletorio resolver: 3 meses (no 6)",
      "Plazos por días = hábiles",
      "Silencio positivo regla general; desestimatorio en 4 supuestos tasados",
      "Urgencia: mitad de plazos, SALVO solicitudes y recursos",
      "Motivación: lista taxativa art. 35.1",
      "Retroactividad: sustitución de anulado O favorables con supuesto previo existente",
      "Notificación: 10 días desde dictado; texto íntegro + recursos + órgano + plazo",
      "Notificación electrónica rechazada: 10 días naturales sin acceder",
      "Publicación infructuosa: BOE obligatorio; resto facultativo",
      "Nulidad: 7 causas tasadas art. 47.1",
      "Defecto de forma → anulabilidad solo si impide fin o genera indefensión",
      "Convalidación: solo anulables; efectos desde fecha de convalidación",
    ],
  },

  G5: {
    intro:
      "La Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público regula la organización y el funcionamiento de las AAPP, incluyendo sus órganos, los principios de actuación, la abstención y recusación, la responsabilidad patrimonial y las relaciones interadministrativas.",
    bloques: [
      {
        h: "Ámbito subjetivo y principios (arts. 1-3)",
        nota:
          "La Ley 40/2015 regula el «hacia dentro» de la Administración —organización, órganos, relaciones entre Administraciones y responsabilidad— mientras que la 39/2015 regula el «hacia fuera», el procedimiento con el ciudadano. Tenerlo claro evita la mitad de los errores del bloque. El art. 2 se pregunta por exclusión: dentro del sector público institucional hay tres categorías, pero solo los ORGANISMOS PÚBLICOS Y ENTIDADES DE DERECHO PÚBLICO son Administración Pública; las entidades de derecho privado vinculadas y las universidades públicas forman parte del sector público pero NO son Administración.",
        items: [
          "Art. 2.2: el sector público institucional comprende: a) organismos públicos y entidades de derecho público; b) entidades de derecho privado vinculadas/dependientes; c) universidades públicas.",
          "Art. 2.3: son Administraciones Públicas la AGE, las CCAA, las EE.LL. y los organismos/entidades del art. 2.2.a. Las del 2.2.b (privadas) y 2.2.c (universidades) NO son AAPP.",
          "Art. 3.1: las AAPP actúan conforme a eficacia, jerarquía, descentralización, desconcentración y coordinación.",
          "Art. 3.1 letras a-k: 11 principios adicionales, entre ellos servicio efectivo, objetividad, buena fe, confianza legítima, eficiencia, cooperación.",
          "Art. 3.2: las AAPP se relacionan entre sí y con sus órganos, organismos y entidades por MEDIOS ELECTRÓNICOS, asegurando la interoperabilidad y seguridad de los sistemas y la protección de datos",
          "Art. 4 — PRINCIPIOS DE INTERVENCIÓN, de aplicación directa al control municipal de actividades: la actuación debe ser NECESARIA y PROPORCIONADA a la finalidad perseguida, eligiendo la medida MENOS RESTRICTIVA, motivándola y justificando su adecuación. Las AAPP velarán por el cumplimiento de los requisitos aplicables, para lo que podrán comprobar, verificar, investigar e inspeccionar",
        ],
      },
      {
        h: "Órganos administrativos (art. 5)",
        nota:
          "Artículo corto pero con una definición que se pregunta literal: no toda unidad administrativa es órgano, solo aquellas a las que se atribuyan funciones con EFECTOS JURÍDICOS FRENTE A TERCEROS o cuya actuación tenga carácter PRECEPTIVO. Los tres requisitos para crear uno —encaje jerárquico, delimitación de funciones y competencias, y crédito presupuestario— se enumeran para que el examen te pida el que falta, y la prohibición del apartado 4 impide duplicar órganos sin suprimir o restringir la competencia del anterior.",
        items: [
          "Art. 5.1: son órganos las unidades con funciones que tengan efectos jurídicos frente a terceros O cuya actuación sea preceptiva.",
          "Art. 5.3: crear un órgano exige: a) integración y dependencia jerárquica; b) funciones y competencias; c) dotación de créditos necesarios.",
          "Art. 5.4: no cabe crear órganos que dupliquen los existentes sin suprimir o restringir la competencia del anterior.",
        ],
      },
      {
        h: "Abstención y recusación (arts. 23-24)",
        nota:
          "Bloque de aplicación diaria para quien informa expedientes, y de examen fácil si retienes dos asimetrías. La primera, en los grados de parentesco: CUATRO de consanguinidad frente a DOS de afinidad. La segunda, en los efectos: la actuación de una autoridad en la que concurre causa de abstención NO implica necesariamente la invalidez del acto, aunque sí puede generar responsabilidad. Los plazos de la recusación son cortos y contrapuestos —UN día para que el recusado se manifieste, TRES para que resuelva el superior si niega la causa—, y contra esa resolución no cabe recurso independiente.",
        items: [
          "Art. 23.2.b: abstención por parentesco de consanguinidad dentro del 4.º grado o de afinidad dentro del 2.º grado.",
          "Art. 23.2.c: también por amistad íntima o enemistad manifiesta.",
          "Art. 23.2.e: haber prestado servicios profesionales en los últimos 2 años.",
          "Art. 23.4: actuar sin abstenerse NO implica necesariamente la invalidez del acto.",
          "Art. 24.3: el recusado tiene 1 día para manifestar si concurre la causa.",
          "Art. 24.4: si el recusado niega la causa → el superior resuelve en 3 días.",
          "Art. 24.5: contra las resoluciones en materia de recusación NO cabe recurso (solo alegación al recurrir el acto final).",
        ],
      },
      {
        h: "Responsabilidad patrimonial (arts. 32-37)",
        nota:
          "El sistema español es de responsabilidad OBJETIVA: se responde del funcionamiento normal y del anormal, sin necesidad de culpa, y el único límite general es la FUERZA MAYOR —que no debe confundirse con el caso fortuito, que sí genera responsabilidad—. Dos reglas antiabuso conviene memorizarlas porque se preguntan tal cual: la anulación de un acto no presupone por sí misma derecho a indemnización, y no son indemnizables los daños que el particular tenga el DEBER JURÍDICO DE SOPORTAR. Y ojo al art. 36, que es donde vive el llamado derecho de repetición: la Administración indemniza al particular y DE OFICIO exige después a su autoridad o personal, pero solo por dolo, culpa o negligencia GRAVES.",
        items: [
          "Art. 32.1: responsabilidad por funcionamiento normal O anormal de los servicios públicos; excluida la fuerza mayor.",
          "Art. 32.1 (párrafo 2): la anulación del acto NO presupone por sí misma derecho a indemnización.",
          "Art. 32.2: el daño debe ser efectivo, evaluable económicamente e individualizado.",
          "Art. 33.1: actuación conjunta → responsabilidad solidaria frente al particular.",
          "Art. 33.2: concurrencia sin fórmula conjunta → criterios de competencia, interés público e intensidad; solidaria si no es posible determinar la parte.",
          "Art. 34.3: cuantía calculada con referencia al día de la lesión + actualización según el Índice de Garantía de la Competitividad.",
          "Art. 34.4: la indemnización puede sustituirse por compensación en especie o pagos periódicos con acuerdo del interesado.",
          "Art. 32.1 — regla clave: NO son indemnizables los daños que el particular tenga el DEBER JURÍDICO DE SOPORTAR de acuerdo con la ley. Y solo se excluye la FUERZA MAYOR, no el caso fortuito",
          "Art. 32.3: también procede indemnización por la aplicación de ACTOS LEGISLATIVOS de naturaleza no expropiatoria que el particular no tenga el deber de soportar, cuando así se establezca en los propios actos",
          "Art. 32.9: se sigue el procedimiento de la Ley 39/2015, y en materia de RESPONSABILIDAD CONCURRENTE, las especialidades del art. 33",
          "Art. 35 — responsabilidad de DERECHO PRIVADO: cuando las AAPP actúen en relaciones de derecho privado responden DIRECTAMENTE del daño causado por el personal a su servicio, considerándose la actuación de éste como actuación de la propia Administración",
          "Art. 36.2 — ACCIÓN DE REGRESO: la Administración, una vez indemnizado el particular, exigirá DE OFICIO de sus autoridades y personal la responsabilidad en que hubieran incurrido por DOLO, CULPA O NEGLIGENCIA GRAVES, previa instrucción del procedimiento y ponderando el resultado dañoso, la existencia o no de intencionalidad, la responsabilidad profesional del causante y su relación con la producción del resultado",
          "Art. 36.3: el particular exige SIEMPRE a la Administración, nunca directamente a la autoridad o funcionario",
          "Art. 37: la responsabilidad PENAL del personal se exige conforme a la legislación correspondiente, sin que ello suspenda los procedimientos de reconocimiento de responsabilidad patrimonial salvo que la determinación de los hechos en vía penal sea necesaria",
          "Art. 36.1: el particular exige siempre la indemnización a la Administración, nunca directamente al funcionario.",
          "Art. 36.2: la Administración exige de oficio la responsabilidad al personal por dolo o culpa/negligencia graves.",
          "Art. 37: la vía penal NO suspende el procedimiento de responsabilidad patrimonial, salvo que la determinación de hechos en sede penal sea necesaria.",
        ],
      },
      {
        h: "Relaciones interadministrativas (arts. 140-158)",
        nota:
          "Tres conceptos que el examen intercambia sin piedad y que conviene separar por su naturaleza jurídica. COLABORACIÓN es un DEBER general de auxilio mutuo, no se pacta. COOPERACIÓN es VOLUNTARIA y se plasma en compromisos específicos que exigen aceptación expresa. COORDINACIÓN implica una posición de supremacía para garantizar coherencia, y corresponde singularmente a la Administración General del Estado. De ahí se sigue lo demás: como colaborar es un deber, negarse solo cabe por las CUATRO causas tasadas del art. 141.2 y siempre motivadamente.",
        items: [
          "Art. 140.1.c: colaboración = deber general de actuar conjuntamente para fines comunes.",
          "Art. 140.1.d: cooperación = compromisos específicos voluntarios entre dos o más Administraciones.",
          "Art. 140.1.e: coordinación = garantizar coherencia; corresponde singularmente a la AGE.",
          "Art. 141.2: la negativa a colaborar es tasada: no facultado, sin medios, perjuicio grave o información confidencial; debe comunicarse motivadamente.",
          "Art. 143.2: la cooperación requiere aceptación expresa de las partes.",
          "Art. 155.3: tratamiento ulterior para finalidad distinta → cedente puede oponerse en 10 días.",
          "Art. 156.1: ENI — criterios y recomendaciones de seguridad, conservación y normalización para garantizar la interoperabilidad.",
          "Art. 156.2: ENS — política de seguridad en la utilización de medios electrónicos (principios básicos y requisitos mínimos).",
          "Art. 157.3: antes de adquirir o desarrollar una aplicación → consulta obligatoria en el directorio general; si hay solución disponible → obligada a reutilizarla salvo justificación de eficiencia.",
          "Art. 142 — TÉCNICAS DE COLABORACIÓN: suministro de información, datos, documentos o medios probatorios · creación y mantenimiento de SISTEMAS INTEGRADOS DE INFORMACIÓN · deber de asistencia y auxilio para atender solicitudes en el ejercicio de competencias propias · y cualquier otra prevista en una ley",
          "Art. 144 — TÉCNICAS DE COOPERACIÓN: participación en órganos de cooperación · participación en órganos consultivos de otras Administraciones · participación de una Administración en organismos de otra · prestación de medios materiales, económicos o personales · CONVENIOS · creación de consorcios · y cualesquiera otras previstas en la ley",
          "Art. 140.1 — otros principios: lealtad institucional, adecuación al sistema de distribución de competencias, solidaridad interterritorial, gestión responsable de los recursos, y garantía e igualdad en el ejercicio de los derechos de todos los ciudadanos",
        ],
      },
    ],
    claves: [
      "AAPP = AGE + CCAA + EE.LL. + entes art. 2.2.a (derecho público). Las entidades privadas y universidades NO son AAPP.",
      "Principios art. 3.1: eficacia · jerarquía · descentralización · desconcentración · coordinación.",
      "Crear órgano: integración + funciones + créditos (art. 5.3). No duplicar sin suprimir (art. 5.4).",
      "Abstención parentesco: consanguinidad 4.º / afinidad 2.º (art. 23.2.b).",
      "Recusación plazos: recusado 1 día → si niega, superior 3 días. No cabe recurso (arts. 24.3-24.5).",
      "Anulación del acto ≠ indemnización automática (art. 32.1).",
      "Daño: efectivo + evaluable + individualizado (art. 32.2).",
      "Actuación conjunta → responsabilidad solidaria frente al particular (art. 33.1).",
      "Regreso de la Administración contra el funcionario: dolo o culpa/negligencia GRAVES (art. 36.2).",
      "Cooperación = voluntaria + compromisos específicos. Colaboración = deber general. Coordinación = AGE (art. 140.1).",
      "Plazo oposición cedente datos: 10 días (art. 155.3).",
      "ENI = interoperabilidad. ENS = seguridad (art. 156).",
      "Art. 4: la intervención debe ser NECESARIA y PROPORCIONADA, eligiendo la medida MENOS RESTRICTIVA y motivándola",
      "Solo excluye la responsabilidad la FUERZA MAYOR, no el caso fortuito (art. 32.1)",
      "No indemnizable el daño que se tenga el DEBER JURÍDICO DE SOPORTAR (art. 32.1)",
      "El particular reclama SIEMPRE a la Administración, nunca al funcionario (art. 36.3)",
      "La acción de regreso se ejerce DE OFICIO y solo por dolo, culpa o negligencia GRAVES (art. 36.2)",
      "En relaciones de derecho privado la Administración responde DIRECTAMENTE de los daños de su personal (art. 35)",
      "Negativa a colaborar: 4 causas TASADAS y siempre motivada (art. 141.2)",
      "La cooperación exige ACEPTACIÓN EXPRESA; la colaboración es un deber que no se pacta (art. 143.2)",
    ],
  },

  G4: {
    intro:
      "La Ley Foral 6/1990, de 2 de julio, de la Administración Local de Navarra regula la organización y el régimen de los entes locales navarros. Entran en el temario el Título Preliminar (arts. 1-5), las secciones 1.ª-4.ª y 8.ª del Cap. I del Tít. I (municipios, arts. 6-12 y 29-32) y la Sección 4.ª del Cap. II (mancomunidades, arts. 47-53).",
    bloques: [
      {
        h: "Título Preliminar — principios y entes locales (arts. 1-5)",
        nota:
          "El Título Preliminar responde a dos preguntas: qué es un ente local en Navarra y qué norma se le aplica. La lista del art. 3 tiene una peculiaridad foral que no existe en el resto del Estado: junto a comarcas, concejos y mancomunidades aparecen las CORPORACIONES DE CARÁCTER TRADICIONAL titulares o administradoras de bienes comunales, con nombre y apellidos —Bardenas Reales, Aezkoa, Roncal, Salazar, Aralar—. El art. 4 monta el sistema de fuentes en dos escalones: en lo que es competencia de Navarra por el art. 46 de la LORAFNA manda la ley foral, y en lo demás la legislación general del Estado, que además actúa como SUPLETORIA cuando falta derecho propio.",
        items: [
          "Art. 1: principios de la Administración Local de Navarra: autonomía, participación, desconcentración, eficacia y coordinación.",
          "Art. 2: los municipios son las entidades locales básicas de la organización territorial de Navarra.",
          "Art. 3: otros entes locales: a) comarcas; b) concejos; c) corporaciones de carácter tradicional (Bardenas Reales, Aezkoa, Roncal, Salazar, Aralar…); d) mancomunidades de ayuntamientos; e) mancomunidades de planificación general.",
          "Art. 4: en materias de administración local que corresponden a Navarra → Ley Foral; en las restantes → legislación general del Estado.",
          "Art. 3.2: la Administración de la Comunidad Foral creará un REGISTRO donde deben inscribirse todas las Administraciones Locales, con los datos que reglamentariamente se determinen",
          "Art. 4.2 — supletoriedad: la normativa general del Estado se aplica también EN DEFECTO de derecho propio regulador de las materias que corresponden a Navarra",
          "Art. 5: las leyes forales sectoriales determinan las COMPETENCIAS PROPIAS de las entidades locales, que se ejercen con PLENA AUTONOMÍA conforme al art. 46.3 de la LORAFNA",
        ],
      },
      {
        h: "El municipio — organización, población y término (arts. 6-12)",
        nota:
          "Dos artículos de este bloque son los que más rendimiento dan. El 9 bis, porque es la bisagra con el tema 3: es el precepto que mete a Pamplona en el régimen de gran población del Título X de la LRBRL, y por eso las dos preguntas se cruzan. Y el 12, porque el deslinde entre municipios navarros lo resuelve la COMUNIDAD FORAL previo informe del INSTITUTO GEOGRÁFICO NACIONAL — un reparto que se pregunta cambiando el órgano. El art. 9 recoge además una singularidad de Derecho foral vivo, la organización tradicional del Valle de Baztán con su Junta General y sus batzarres.",
        items: [
          "Art. 6: el municipio es la entidad local básica y el cauce primario de participación ciudadana. Elementos: territorio, población y organización.",
          "Art. 7: personalidad jurídica y plena capacidad del municipio.",
          "Art. 8.3: municipios de más de 5.000 habitantes (o los que lo acuerden): obligados a contar con órganos de estudio, informe o consulta.",
          "Art. 9: el Noble Valle y Universidad de Baztán conserva su organización tradicional (Ayuntamiento + Junta General del Valle + batzarres).",
          "Art. 9 bis: Pamplona se rige por el Título X LRBRL con las peculiaridades de la LF 6/1990.",
          "Art. 10: la población del municipio = personas inscritas en el padrón municipal.",
          "Art. 11: el término municipal = ámbito territorial donde los órganos ejercen sus competencias.",
          "Art. 12.2: deslinde entre municipios navarros → resuelve la Comunidad Foral, previo informe del Instituto Geográfico Nacional. Art. 12.3: si hay municipios de otra Comunidad → intervención e informe preceptivos del Gobierno de Navarra.",
        ],
      },
      {
        h: "Competencias y Concejo Abierto (arts. 29-32)",
        nota:
          "Aquí está la frase que más te va a servir de todo el tema: EN NINGÚN CASO SON DELEGABLES A LOS CONCEJOS LAS COMPETENCIAS URBANÍSTICAS (art. 30.1, redacción de la LF 11/2004). Es una prohibición absoluta y sin matices, y cae con frecuencia porque el resto del artículo sí permite delegar obras y servicios en ambas direcciones. Del régimen de servicios mínimos retén que la dispensa la concede el GOBIERNO DE NAVARRA, que además decide quién asume el servicio, y que hay una causa de dispensa específicamente foral: que los concejos del término tengan recursos suficientes gracias al aprovechamiento de sus bienes comunales.",
        items: [
          "Art. 29: los municipios tienen las competencias que la legislación general reconoce a todos los del Estado + las que las leyes forales atribuyan.",
          "Art. 30.1: el municipio puede delegar en concejos obras o servicios de su competencia. NUNCA son delegables las competencias URBANÍSTICAS.",
          "Art. 31: servicios mínimos obligatorios; la dispensa la otorga el Gobierno de Navarra, que determina la entidad que asumirá el servicio (puede ser la comarca).",
          "Art. 32.1: Concejo Abierto obligatorio en municipios con < 100 habitantes.",
          "Art. 32.2: Concejo Abierto voluntario: petición de la mayoría de vecinos + decisión del ayuntamiento por 2/3 de sus miembros + aprobación del Gobierno de Navarra.",
          "Art. 32.3: en Concejo Abierto, gobierno = Alcalde + Asamblea vecinal (todos los electores). Art. 32.4.b: el Alcalde puede designar una Comisión de 2 a 4 vocales.",
          "Art. 30.2-3: el municipio puede TAMBIÉN ejercer competencias de los concejos por delegación de éstos, y los municipios integrados en las Agrupaciones tradicionales del art. 3.c pueden delegar en ellas la prestación de servicios o realización de actividades",
          "Art. 31.1-2: los municipios, POR SÍ O AGRUPADOS, deben prestar en todo caso los servicios mínimos de la legislación general, y los VECINOS TIENEN DERECHO A EXIGIR su establecimiento y prestación. Donde existan concejos, los presta el Ayuntamiento salvo que se trate de materias atribuidas a aquéllos",
          "Art. 31.4: la asistencia y cooperación jurídica, económica y técnica a los municipios dispensados corresponde a la COMARCA o al GOBIERNO DE NAVARRA",
          "Art. 32.4: a falta de uso, costumbre o tradición local, la Asamblea vecinal asume las atribuciones del PLENO y el Alcalde las propias de su cargo, aplicándose supletoriamente a la Asamblea el régimen de funcionamiento del pleno del ayuntamiento",
        ],
      },
      {
        h: "Mancomunidades (arts. 47-53)",
        nota:
          "Las mancomunidades se examinan por sus MAYORÍAS, que son tres distintas y se confunden entre sí: mayoría SIMPLE para iniciar el procedimiento (art. 49), mayoría ABSOLUTA de cada pleno para aprobar los Estatutos (art. 50, regla 5.ª) y DOS TERCIOS de las entidades integrantes para modificarlos o disolver la mancomunidad (art. 50.3). Junto a ellas, dos límites conceptuales: el objeto NO puede abarcar todas las competencias de los municipios asociados —si no, sería una fusión encubierta—, y las aprobaciones recaen sobre la TOTALIDAD del texto sin poder plantear modificaciones, de modo que quien no aprueba, no pertenece.",
        items: [
          "Art. 47.2: las Mancomunidades tienen personalidad y capacidad jurídica propias; se rigen por sus Estatutos.",
          "Art. 47.3: el objeto de la Mancomunidad NO puede incluir TODAS las competencias de los municipios asociados.",
          "Art. 48: los Estatutos deben regular: ámbito territorial, municipios integrantes, denominación, objeto, competencias, órganos, representantes, recursos, plazo, causas de disolución.",
          "Art. 49: iniciación del procedimiento de constitución: acuerdo de los plenos por MAYORÍA SIMPLE.",
          "Art. 50, regla 4.ª: mancomunidades intercomunitarias → autorización previa de la Comunidad Foral.",
          "Art. 50, regla 5.ª: aprobación de Estatutos → MAYORÍA ABSOLUTA de cada pleno.",
          "Art. 50.3: modificación de Estatutos y disolución → DOS TERCERAS PARTES de las entidades integrantes.",
          "Art. 51: la Junta General ostenta las atribuciones que en los ayuntamientos corresponden al pleno; las mayorías cualificadas municipales se mantienen.",
          "Art. 52.1: adhesión a mancomunidades con municipios de otras CCAA → autorización previa de la Comunidad Foral.",
          "Art. 47.1: los municipios pueden asociarse entre sí O CON MUNICIPIOS DE OTRAS COMUNIDADES AUTÓNOMAS para la ejecución en común de obras y la prestación de servicios determinados de su competencia",
          "Art. 47.4: en defecto de previsión estatutaria, corresponden a la mancomunidad TODAS las potestades y prerrogativas de los municipios que sean precisas para su finalidad; la COMUNIDAD FORAL puede ejercer la potestad EXPROPIATORIA cuando los bienes radiquen en varios municipios, a petición y en beneficio de la mancomunidad",
          "Procedimiento del art. 50.1: elaboración inicial del proyecto por los concejales de todos los municipios promotores constituidos en ASAMBLEA · EXPOSICIÓN durante UN MES en las secretarías, previo anuncio en los tablones · resolución de alegaciones y proyecto definitivo · INFORME de la Administración de la Comunidad Foral · aprobación por los plenos por mayoría absoluta y designación de representantes · PUBLICACIÓN en el Boletín Oficial de Navarra",
          "Art. 50.2: las aprobaciones recaen sobre la TOTALIDAD del texto, SIN QUE PUEDAN PLANTEARSE MODIFICACIONES; las entidades que no aprueben los Estatutos NO pertenecerán a la mancomunidad",
          "Art. 51.2-3: los acuerdos sobre materias que en los ayuntamientos exigen MAYORÍA CUALIFICADA deben adoptarse con igual mayoría en la mancomunidad, y su régimen económico —presupuestos, cuentas, liquidaciones, inventarios y balances— se ajusta al de los municipios",
          "Art. 52.2-3: cualquier entidad puede SEPARARSE con sujeción a los Estatutos; si éstos nada prevén sobre adhesión o separación, se aplican las reglas de MODIFICACIÓN de Estatutos",
          "Art. 53: el Gobierno de Navarra FOMENTARÁ la creación de mancomunidades, empleando las medidas de fomento previstas para la fusión de municipios en el art. 20",
        ],
      },
    ],
    claves: [
      "Principios (art. 1): autonomía, participación, desconcentración, eficacia, coordinación",
      "Registro obligatorio de todas las Administraciones Locales, creado por la Comunidad Foral (art. 3.2)",
      "La legislación estatal se aplica también en DEFECTO de derecho propio (art. 4.2)",
      "Deslinde entre municipios navarros: resuelve la COMUNIDAD FORAL previo informe del INSTITUTO GEOGRÁFICO NACIONAL (art. 12.2)",
      "Los vecinos tienen DERECHO A EXIGIR el establecimiento y prestación de los servicios mínimos (art. 31.1)",
      "Dispensa de servicios mínimos: la concede el GOBIERNO DE NAVARRA y designa quién asume el servicio (art. 31.3)",
      "Causa foral específica de dispensa: suficiencia de los recursos de los concejos por aprovechamiento de sus bienes (art. 31.3)",
      "Los Estatutos se aprueban EN BLOQUE: quien no los aprueba, no pertenece a la mancomunidad (art. 50.2)",
      "Sin previsión estatutaria, adhesión y separación siguen las reglas de MODIFICACIÓN de Estatutos (art. 52.3)",
      "Entes locales además de municipios (art. 3): comarcas, concejos, corporaciones tradicionales, mancomunidades de ayuntamientos, mancomunidades de planificación general",
      "Elementos del municipio (art. 6.2): territorio, población, organización",
      "Órganos de estudio obligatorios en municipios > 5.000 hab. (art. 8.3)",
      "Pamplona → Título X LRBRL (art. 9 bis)",
      "Población = inscritos en el padrón (art. 10)",
      "Deslinde intercomunitario → Gobierno de Navarra preceptivo (art. 12.3)",
      "Competencias urbanísticas: NUNCA delegables a concejos (art. 30.1)",
      "Concejo Abierto obligatorio < 100 habitantes (art. 32.1)",
      "Concejo Abierto voluntario: 2/3 del ayuntamiento + Gobierno de Navarra (art. 32.2)",
      "Objeto de mancomunidad: no puede incluir TODAS las competencias (art. 47.3)",
      "Constitución mancomunidad: iniciación mayoría simple (art. 49) / Estatutos mayoría absoluta (art. 50 regla 5.ª) / disolución 2/3 de entidades (art. 50.3)",
      "Mancomunidades intercomunitarias: autorización previa de la Comunidad Foral (arts. 50 regla 4.ª y 52.1)",
    ],
  },
  G3: {
    intro:
      "El Capítulo II del Título X de la LRBRL, introducido por la Ley 57/2003 «de medidas para la modernización del gobierno local», y aplicable al Ayuntamiento de Pamplona por remisión del art. 9 bis de la Ley Foral 6/1990. Es el tema que describe tu propio sitio de trabajo, así que conviene estudiarlo funcionalmente y no como lista de artículos. La idea que lo organiza es la SEPARACIÓN entre función de gobierno y función ejecutiva, copiada del modelo parlamentario: el Pleno deja de administrar y pasa a legislar y controlar; el Alcalde dirige la política; la Junta de Gobierno Local se convierte en el verdadero órgano ejecutivo colegiado; y aparece un nivel DIRECTIVO profesional —coordinadores y directores generales— que en el régimen común no existe. Para un arquitecto municipal hay un dato que vale por todo el tema: en este régimen las LICENCIAS las concede la Junta de Gobierno Local (art. 127.1.e), no el Alcalde.",
    bloques: [
      {
        h: "El Pleno (arts. 122-123 LRBRL)",
        nota:
          "El Pleno de gran población es un órgano de control y de normas, no de gestión. Por eso puede dotarse de reglamento propio de naturaleza orgánica y tiene SECRETARIO GENERAL PROPIO, distinto del secretario de la corporación, reservado a habilitado nacional y equiparado a órgano directivo. Del art. 123 lo que se pregunta son las dos listas cerradas de letras: las que exigen MAYORÍA ABSOLUTA —c, e, f, j y o, más los acuerdos plenarios en la tramitación del planeamiento general— y las cuatro únicas DELEGABLES en comisiones —d, k, m y ñ—. Fíjate en que la aprobación inicial del planeamiento general y la que pone fin a la tramitación municipal son competencia del Pleno y van por mayoría absoluta: es el punto donde este tema se cruza con la LFOTU.",
        items: [
          "Art. 122.1: el Pleno = Alcalde + Concejales; órgano de máxima representación política.",
          "Art. 122.2: el Pleno es convocado y presidido por el Alcalde; éste decide los empates con voto de calidad. Puede delegar la convocatoria y presidencia en un concejal.",
          "Art. 122.3: comisiones formadas por miembros designados por los grupos políticos en proporción al número de concejales.",
          "Art. 122.5: el Secretario general del Pleno (habilitado nacional) presta asesoramiento legal. Es preceptivo: si lo pide el Presidente o 1/3 de miembros (con antelación); en asuntos con mayoría especial; para control/fiscalización si lo pide el Presidente o 1/4 de concejales.",
          "Art. 123.2: mayoría ABSOLUTA del número legal para: párrafos c), e), f), j) y o) y planeamiento general urbanístico. Demás acuerdos: mayoría SIMPLE.",
          "Art. 123.3: solo son delegables a las comisiones los párrafos d), k), m) y ñ).",
          "Art. 122.4: funciones de las comisiones — estudio, informe o consulta de los asuntos que vayan al Pleno · SEGUIMIENTO DE LA GESTIÓN del Alcalde y su equipo de gobierno · y las que el Pleno les delegue",
          "Art. 122.3: el Pleno se dota de su propio REGLAMENTO, de naturaleza ORGÁNICA, aunque su organización y funcionamiento pueden contenerse también en el reglamento orgánico municipal",
          "Art. 122.5: el secretario general del Pleno lo es también de las comisiones; redacta y custodia las actas, expide certificaciones con el visto bueno del Presidente, asiste a la convocatoria y al orden de los debates, comunica y ejecuta los acuerdos, y presta el asesoramiento legal",
          "Atribuciones plenarias de mayor calado (art. 123.1): control y fiscalización de los órganos de gobierno · votación de la MOCIÓN DE CENSURA y de la CUESTIÓN DE CONFIANZA, que es pública y por llamamiento nominal en todo caso · reglamentos orgánicos · ordenanzas y reglamentos municipales · alteración del término, capitalidad, denominación, bandera, enseña o escudo · recursos propios de carácter tributario · PRESUPUESTOS, plantilla de personal y cuenta general · PLANEAMIENTO GENERAL · formas de gestión de los servicios y creación de organismos autónomos, entidades públicas empresariales y sociedades mercantiles · revisión de oficio de sus propios actos y disposiciones generales · y el RÉGIMEN RETRIBUTIVO de los miembros del Pleno, del Alcalde, de la Junta y de los órganos directivos",
          "Tienen en todo caso NATURALEZA ORGÁNICA (art. 123.1.c): la regulación del Pleno · la del Consejo Social de la Ciudad · la de la Comisión Especial de Sugerencias y Reclamaciones · la de los órganos complementarios y los procedimientos de participación ciudadana · la DIVISIÓN DEL MUNICIPIO EN DISTRITOS · la determinación de los NIVELES ESENCIALES de la organización municipal · y la regulación del órgano para las reclamaciones económico-administrativas",
        ],
      },
      {
        h: "El Alcalde y Tenientes de Alcalde (arts. 124-125 LRBRL)",
        nota:
          "El Alcalde de gran población pierde competencias de gestión y gana dirección política: ya no concede licencias ni aprueba la relación de puestos de trabajo, pero establece las directrices de la acción de gobierno y organiza la Administración ejecutiva. La pregunta segura es la de las delegaciones del art. 124.5, y conviene fijarla como dos grupos: lo INDELEGABLE en absoluto —dirección política, nombrar tenientes de alcalde, medidas de urgencia, jefatura de la Policía Municipal, convocar y presidir la Junta, voto de calidad y dictar bandos— y lo delegable SOLO en la Junta de Gobierno Local, que son las directrices generales y la organización de la Administración ejecutiva.",
        items: [
          "Art. 124.1-3: máxima representación del municipio; responsable ante el Pleno; tratamiento de Excelencia.",
          "Art. 124.5: NO delegables: b) dirección política, e) nombramiento de Tenientes de Alcalde, h) medidas de urgencia, j) Jefatura de la Policía Municipal; y tampoco: convocar/presidir la JGL, decidir empates, dictar bandos. Los párrafos c) y k) son delegables solo en la JGL.",
          "Art. 125.1: Tenientes de Alcalde nombrados por el Alcalde entre concejales miembros de la JGL; sustituyen al Alcalde por orden de nombramiento en vacante, ausencia o enfermedad.",
          "Art. 125.2: tratamiento de los Tenientes de Alcalde: Ilustrísima.",
          "Funciones del Alcalde (art. 124.4): representar al ayuntamiento · DIRIGIR la política, el gobierno y la administración municipal · establecer las DIRECTRICES GENERALES de la acción de gobierno y asegurar su continuidad · convocar y presidir Pleno y Junta y decidir los empates con voto de calidad · nombrar y cesar a los Tenientes de Alcalde y a los Presidentes de los Distritos · ordenar publicación, ejecución y cumplimiento de los acuerdos · DICTAR BANDOS, DECRETOS E INSTRUCCIONES · adoptar medidas en casos de EXTRAORDINARIA Y URGENTE NECESIDAD dando cuenta inmediata al Pleno · superior dirección del personal · JEFATURA DE LA POLICÍA MUNICIPAL · y establecer la organización y estructura de la Administración municipal ejecutiva",
          "Cláusula residual (art. 124.4.ñ): corresponden al Alcalde las competencias que la legislación del Estado o de las comunidades autónomas asignen al MUNICIPIO y no se atribuyan a otros órganos municipales",
          "Delegación (art. 124.5): el Alcalde delega MEDIANTE DECRETO en la Junta de Gobierno Local, en sus miembros, en los demás concejales y en coordinadores y directores generales. NO son delegables las letras b), e), h) y j), ni convocar y presidir la Junta, ni decidir los empates con voto de calidad, ni dictar bandos. Las letras c) y k) SOLO son delegables en la Junta de Gobierno Local",
        ],
      },
      {
        h: "Junta de Gobierno Local (arts. 126-127 LRBRL)",
        nota:
          "El órgano ejecutivo por excelencia del régimen de gran población y el que más te afecta: aquí se conceden las licencias, se aprueban los instrumentos de planeamiento de desarrollo y los proyectos de urbanización, y se ejerce la potestad sancionadora. Dos datos con historia: el Alcalde podía nombrar miembros no concejales hasta que la STC 103/2013 anuló ese inciso, de modo que hoy todos los miembros han de ser concejales; y sus deliberaciones son SECRETAS, algo excepcional en un órgano colegiado local. Del art. 127.2 lo examinable es que la delegación de la letra h) va acompañada de excepciones tasadas —relación de puestos de trabajo, retribuciones, oferta de empleo, personal eventual y separación del servicio— que no pueden delegarse.",
        items: [
          "Art. 126.2: miembros nombrados y cesados libremente por el Alcalde; número máximo = 1/3 del número legal del Pleno, además del Alcalde.",
          "Art. 126.3: la JGL responde solidariamente ante el Pleno.",
          "Art. 126.4: Secretaría de la JGL: concejal miembro designado por el Alcalde.",
          "Art. 126.5: deliberaciones SECRETAS; concejales no miembros y titulares de órganos directivos solo pueden asistir si son convocados expresamente por el Alcalde.",
          "Art. 127.1.e: la concesión de licencias corresponde a la JGL, salvo atribución expresa por ley sectorial a otro órgano.",
          "Art. 127.2: la JGL puede delegar en Tenientes de Alcalde u otros concejales los párrafos e), g), h) (con excepciones) y l).",
          "Art. 126.1-2: colabora de forma COLEGIADA en la función de dirección política del Alcalde y ejerce las funciones ejecutivas y administrativas del art. 127. Tras la STC 103/2013, que anuló el inciso que permitía nombrar miembros no concejales, todos sus miembros deben ostentar la condición de CONCEJAL",
          "Atribuciones de la JGL (art. 127.1) — normativas y de planeamiento: aprobación de los PROYECTOS de ordenanzas y reglamentos, incluidos los orgánicos, salvo las normas reguladoras del Pleno y sus comisiones · el PROYECTO DE PRESUPUESTO · los proyectos de instrumentos de ordenación urbanística cuya aprobación definitiva o provisional corresponda al Pleno · y las aprobaciones de los instrumentos de PLANEAMIENTO DE DESARROLLO no atribuidas al Pleno, de los instrumentos de GESTIÓN urbanística y de los PROYECTOS DE URBANIZACIÓN",
          "Atribuciones de la JGL — ejecutivas: LA CONCESIÓN DE CUALQUIER TIPO DE LICENCIA, salvo que la legislación sectorial la atribuya expresamente a otro órgano · gestión económica y del personal · relación de puestos de trabajo, retribuciones, oferta de empleo público, bases de las convocatorias, personal eventual, separación del servicio y régimen disciplinario · NOMBRAMIENTO Y CESE de los titulares de los ÓRGANOS DIRECTIVOS · acciones judiciales y administrativas de su competencia · revisión de oficio de sus propios actos · POTESTAD SANCIONADORA salvo atribución legal a otro órgano · y designación de representantes municipales en entes participados",
          "Tribunales de oposiciones (art. 127.1.h): composición PREDOMINANTEMENTE TÉCNICA, con todos sus miembros en posesión de titulación igual o superior a la exigida para las plazas convocadas; el presidente puede nombrarse entre miembros de la Corporación o entre personal al servicio de las Administraciones públicas",
          "Órgano de apoyo (art. 126.4): existe un órgano de apoyo a la Junta y al concejal-secretario, cuyo titular es HABILITADO NACIONAL, encargado de asistir al concejal-secretario, remitir convocatorias, archivar y custodiar convocatorias, órdenes del día y actas, y velar por la fiel comunicación de los acuerdos",
        ],
      },
      {
        h: "Otros órganos (arts. 128-132 LRBRL)",
        nota:
          "Bloque de órganos obligatorios que completan el modelo. Los DISTRITOS son de creación obligada en estos municipios, y el Pleno debe fijar por norma orgánica el porcentaje mínimo de presupuesto que gestionarán en su conjunto — un dato numérico sin cifra fija en la ley, que es justo lo que se pregunta. Distingue bien el CONSEJO SOCIAL DE LA CIUDAD, de composición social y económica y funciones consultivas sobre desarrollo económico, planificación estratégica y GRANDES PROYECTOS URBANOS, de la COMISIÓN ESPECIAL DE SUGERENCIAS Y RECLAMACIONES, que se forma con los grupos del Pleno de manera proporcional y defiende los derechos de los vecinos.",
        items: [
          "Art. 128.3: la presidencia del distrito corresponde en todo caso a un concejal.",
          "Art. 130.1.A: órganos SUPERIORES = Alcalde + miembros de la JGL.",
          "Art. 130.1.B: órganos DIRECTIVOS = coordinadores generales, directores generales, titular del órgano de apoyo a la JGL, titular de la asesoría jurídica, Secretario general del Pleno, Interventor general, titular del órgano de gestión tributaria.",
          "Art. 130.3: coordinadores y directores generales deben ser funcionarios de carrera subgrupo A1.",
          "Art. 131: Consejo Social de la Ciudad — integrado por representantes de organizaciones económicas, sociales, profesionales y de vecinos más representativas; emite informes sobre desarrollo económico, planificación estratégica y grandes proyectos urbanos.",
          "Art. 132: Comisión especial de Sugerencias y Reclamaciones — creada por el Pleno; formada por representantes de todos los grupos en proporción; informe anual al Pleno + informes extraordinarios si la gravedad o urgencia lo aconsejan.",
          "Art. 128.1-2: los ayuntamientos DEBEN crear DISTRITOS como divisiones territoriales propias dotadas de órganos de gestión DESCONCENTRADA, para impulsar la participación ciudadana sin perjuicio de la unidad de gobierno y gestión. Corresponde al PLENO su creación y regulación y determinar, en norma ORGÁNICA, el PORCENTAJE MÍNIMO de recursos presupuestarios que gestionarán en su conjunto",
          "Art. 129 — ASESORÍA JURÍDICA: órgano administrativo responsable de la asistencia jurídica al Alcalde, a la Junta y a los órganos directivos, comprensiva del asesoramiento y de la representación y defensa en juicio. Su titular lo nombra y separa la JUNTA DE GOBIERNO LOCAL entre licenciados en Derecho que sean habilitados nacionales o funcionarios de carrera del Estado, comunidades autónomas o entidades locales de titulación superior",
          "Art. 130.4: los órganos superiores y directivos quedan sometidos al régimen de INCOMPATIBILIDADES de la Ley 53/1984",
          "Art. 130.2: también son órganos directivos los titulares de los máximos órganos de dirección de los ORGANISMOS AUTÓNOMOS y de las ENTIDADES PÚBLICAS EMPRESARIALES locales",
        ],
      },
      {
        h: "Decreto de Organización Municipal de Pamplona",
        nota:
          "El Decreto traduce el reparto legal a la estructura concreta del Ayuntamiento: el Pleno fija los NIVELES ESENCIALES —grandes áreas y órganos directivos— por norma orgánica, y el Alcalde, dentro de ellos, determina el número de órganos y los niveles inferiores. Estudia esa lógica de reparto, que es lo estable; el número y el nombre de las áreas cambian con cada decreto de organización y con cada mandato, así que compruébalos en el vigente antes del examen en lugar de fiarte de esta lista.",
        items: [
          "Estructura: 11 grandes áreas de gobierno. Dependen directamente del Alcalde: Área de Alcaldía y Área de Igualdad.",
          "Área de Transparencia, Innovación y Política Lingüística: ANIMSA adscrita.",
          "Área de Ciudad Habitable y Vivienda: Gerencia de Urbanismo + Pamplona Centro Histórico adscritos.",
          "Área de Cultura y Educación: OA Escuelas Infantiles + Fundación Teatro Gayarre adscritos.",
          "Área de Economía Local Sostenible: integra los órganos de gestión económico-financiera, presupuestaria e Intervención; Mercairuña y Comiruña adscritas.",
          "Art. 2 Decreto: todas las áreas dispondrán de, al menos, una dirección y una secretaría técnica.",
          "Base jurídica del Decreto: el art. 124.4.k LRBRL atribuye al ALCALDE establecer la organización y estructura de la Administración municipal ejecutiva, respetando los NIVELES ESENCIALES cuya definición corresponde al PLENO por el art. 123.1.c — las grandes áreas de gobierno, los coordinadores generales y las direcciones generales—, sin perjuicio de las atribuciones del Alcalde para fijar el NÚMERO de cada uno de esos órganos y establecer niveles complementarios inferiores",
          "El art. 9 bis de la Ley Foral 6/1990 de la Administración Local de Navarra es el precepto que determina la aplicación al Ayuntamiento de Pamplona del régimen del Título X de la LRBRL",
        ],
      },
    ],
    claves: [
      "Pleno = Alcalde + Concejales; máxima representación política — art. 122.1",
      "Alcalde: tratamiento Excelencia; Tenientes de Alcalde: Ilustrísima — arts. 124.3 y 125.2",
      "Mayoría absoluta en Pleno: párrafos c), e), f), j), o) y planeamiento — art. 123.2",
      "Delegables a comisiones del Pleno: solo párrafos d), k), m) y ñ) — art. 123.3",
      "No delegables del Alcalde: b), e), h), j) + convocar JGL, empates, bandos — art. 124.5",
      "Tenientes de Alcalde: nombrados por Alcalde entre concejales miembros de la JGL — art. 125.1",
      "JGL: máximo 1/3 del número legal del Pleno + Alcalde — art. 126.2",
      "Deliberaciones JGL: secretas; no miembros asisten solo si convocados por el Alcalde — art. 126.5",
      "Licencias: corresponden a la JGL salvo ley sectorial — art. 127.1.e",
      "Órganos superiores: Alcalde + miembros JGL. Directivos: el resto — art. 130.1",
      "Tras la STC 103/2013 todos los miembros de la JGL deben ser CONCEJALES",
      "Asesoría jurídica: su titular lo nombra la JGL; ha de ser licenciado en Derecho — art. 129",
      "Distritos: creación OBLIGATORIA; el Pleno fija por norma orgánica el % mínimo de presupuesto que gestionan — art. 128",
      "Consejo Social de la Ciudad: informes sobre desarrollo económico, planificación estratégica y GRANDES PROYECTOS URBANOS — art. 131",
      "La JGL aprueba el planeamiento de DESARROLLO, los instrumentos de gestión y los proyectos de urbanización — art. 127.1.d",
      "El Pleno aprueba inicialmente el planeamiento GENERAL, por mayoría absoluta — arts. 123.1.i y 123.2",
      "Cláusula residual a favor del ALCALDE: lo asignado al municipio y no atribuido a otro órgano — art. 124.4.ñ",
      "Consejo Social: representantes de organizaciones económicas, sociales, profesionales y de vecinos — art. 131",
      "Comisión Sugerencias: informe anual al Pleno + informes extraordinarios posibles — art. 132.3",
      "ANIMSA → Área de Transparencia; Gerencia Urbanismo → Área Ciudad Habitable — Decreto Pamplona",
    ],
  },
  G2: {
    intro:
      "La LORAFNA (LO 13/1982, de 10 de agosto) no es un Estatuto de Autonomía ordinario y esa diferencia recorre todo el tema. Los Estatutos nacen de la Constitución; el Amejoramiento parte de unos derechos históricos PREEXISTENTES que la disposición adicional primera de la Constitución ampara, y se limita a «amejorarlos» —mejorarlos y ordenarlos democráticamente— sin crearlos. De ahí tres consecuencias que se preguntan una y otra vez: Navarra es COMUNIDAD FORAL y no Comunidad Autónoma; su régimen tributario es el Convenio Económico, de naturaleza PACCIONADA; y la reforma exige acuerdo de ambas partes, sin que ninguna pueda modificarlo unilateralmente. Del temario entran el Título Preliminar y el Título II, es decir, las bases y el reparto competencial — y ahí está el art. 44.1, que da a Navarra competencia EXCLUSIVA en ordenación del territorio, urbanismo y vivienda: el cimiento de toda la normativa foral que estudias en la parte específica.",
    bloques: [
      {
        h: "Título Preliminar — Naturaleza y fundamento (arts. 1-3)",
        nota:
          "Los tres primeros artículos contienen la doctrina entera del Amejoramiento y por eso se preguntan casi literalmente. El art. 2 encadena las cuatro fuentes del régimen foral en un orden que conviene recitar: Ley de 1839, Ley Paccionada de 1841, la propia Ley Orgánica y la Constitución. Y remata con el límite infranqueable: nada de esto afecta a las instituciones, facultades y competencias del Estado inherentes a la UNIDAD CONSTITUCIONAL, que es la cláusula que marca hasta dónde puede llegar la foralidad.",
        items: [
          "Art. 1 — definición: Navarra constituye una COMUNIDAD FORAL con régimen, autonomía e instituciones propias, INDIVISIBLE, integrada en la Nación española y SOLIDARIA con todos sus pueblos. Cuatro notas que se preguntan por sustitución: no es «Comunidad Autónoma», y los adjetivos indivisible y solidaria son literales",
          "Art. 2.Uno — fundamento histórico: los derechos originarios e históricos serán respetados y amparados por los poderes públicos con arreglo a la LEY DE 25 DE OCTUBRE DE 1839, a la LEY PACCIONADA DE 16 DE AGOSTO DE 1841 y disposiciones complementarias, a esta Ley Orgánica y a la Constitución, conforme al párrafo primero de su DISPOSICIÓN ADICIONAL PRIMERA",
          "Art. 2.Dos — límite: lo anterior NO afecta a las instituciones, facultades y competencias del Estado inherentes a la UNIDAD CONSTITUCIONAL",
          "Art. 3 — triple objeto del Amejoramiento: INTEGRAR en el Régimen Foral todas las facultades y competencias compatibles con la unidad constitucional · ORDENAR DEMOCRÁTICAMENTE las instituciones forales · y GARANTIZAR las facultades y competencias propias del Régimen Foral",
        ],
      },
      {
        h: "Título Preliminar — Territorio, condición política y símbolos (arts. 4-9)",
        nota:
          "Bloque de memoria pura donde se falla por confusión con la Constitución. Fíjate en el contraste del art. 8: la capital de Navarra es la CIUDAD de Pamplona, mientras que la del Estado es la VILLA de Madrid; el examen cruza los dos. La condición política de navarro se ata a la VECINDAD ADMINISTRATIVA en cualquier municipio de Navarra, y no debe mezclarse con la condición CIVIL foral, que se rige por el Fuero Nuevo y sirve para otra cosa: el Derecho civil aplicable.",
        items: [
          "Art. 4 — territorio: los municipios comprendidos en las CINCO MERINDADES HISTÓRICAS de PAMPLONA, ESTELLA, TUDELA, SANGÜESA Y OLITE en el momento de promulgarse la ley",
          "Art. 5.Uno — condición POLÍTICA de navarro: los españoles que, conforme a las leyes generales del Estado, tengan la VECINDAD ADMINISTRATIVA en cualquiera de los municipios de Navarra",
          "Art. 5.Dos — emigrantes: los españoles residentes en el extranjero cuya última vecindad administrativa fue Navarra tienen IDÉNTICOS derechos políticos que los residentes, y también sus descendientes inscritos como españoles que lo soliciten",
          "Art. 5.Tres — condición CIVIL foral: su adquisición, conservación, pérdida y recuperación se rigen por la Compilación del Derecho Civil Foral o FUERO NUEVO, no por este artículo",
          "Art. 6 — igualdad: los navarros tienen los mismos derechos, libertades y deberes fundamentales que los demás españoles",
          "Art. 7 — símbolos: ESCUDO de cadenas de ORO sobre fondo ROJO, con una ESMERALDA en el centro de unión de sus OCHO BRAZOS de eslabones y, sobre ellas, la Corona Real, símbolo del Antiguo Reino. BANDERA roja con el escudo en el centro",
          "Art. 8 — capital: la CIUDAD de Pamplona (frente a la VILLA de Madrid del art. 5 CE)",
          "Art. 9 — lenguas: el CASTELLANO es la lengua oficial de Navarra; el VASCUENCE tiene también carácter oficial en las ZONAS VASCOPARLANTES. Una LEY FORAL determina dichas zonas, regula el uso oficial y ordena su enseñanza en el marco de la legislación general del Estado",
        ],
      },
      {
        h: "Título II — Los tres niveles competenciales (arts. 39-43)",
        nota:
          "Aquí está la clave para no perderse en las listas de materias: la LORAFNA no clasifica competencias por su nombre sino por la INTENSIDAD de las potestades que otorga, y monta tres escalones. En la EXCLUSIVA (arts. 40 y 44 a 56) Navarra tiene potestad legislativa plena. En el DESARROLLO LEGISLATIVO (arts. 41 y 57) legisla, pero conforme a las bases estatales. En la MERA EJECUCIÓN (arts. 42 y 58) no legisla en absoluto: solo tiene potestad reglamentaria para organizar sus propios servicios, administración e inspección. Si retienes qué potestades corresponden a cada escalón, la pregunta sobre cualquier materia concreta se resuelve sola.",
        items: [
          "Art. 39.Uno — origen de las competencias: las que YA EJERCE al amparo de la Ley Paccionada de 1841 · las que expresamente le INTEGRA esta Ley Orgánica · y las que la legislación del Estado atribuya, transfiera o delegue CON CARÁCTER GENERAL a las Comunidades Autónomas o a las Provincias",
          "Art. 39.Dos — cláusula abierta: también las que, A INICIATIVA DE LA DIPUTACIÓN FORAL, le atribuya, transfiera o delegue el Estado con posterioridad a la entrada en vigor de la ley",
          "NIVEL 1 — COMPETENCIA EXCLUSIVA (art. 40.Uno), cuatro potestades: a) LEGISLATIVA · b) reglamentaria · c) administrativa, incluida la inspección · d) revisora en vía administrativa",
          "Regla de prelación (art. 40.Tres): en las materias de competencia exclusiva, el DERECHO NAVARRO se aplica CON PREFERENCIA a cualquier otro; en defecto de Derecho propio se aplica SUPLETORIAMENTE el Derecho del Estado",
          "NIVEL 2 — DESARROLLO LEGISLATIVO Y EJECUCIÓN (art. 41): potestades de DESARROLLO legislativo, reglamentaria, de administración e inspección y revisora. El desarrollo legislativo se ejerce EN TODO CASO de conformidad con las NORMAS BÁSICAS que dicte el Estado",
          "NIVEL 3 — MERA EJECUCIÓN (art. 42): solo potestad REGLAMENTARIA PARA LA ORGANIZACIÓN DE SUS PROPIOS SERVICIOS, de administración e inspección, y revisora. Se ejerce conforme a las disposiciones generales que, en desarrollo de su legislación, dicte el Estado. No hay potestad legislativa",
          "Art. 43 — ámbito: todas las facultades y competencias se entienden referidas a su PROPIO TERRITORIO, sin perjuicio de la eficacia PERSONAL que puedan tener las normas forales en los supuestos de los Convenios en materia fiscal o de la legislación estatal",
        ],
      },
      {
        h: "Título II — Competencias exclusivas (arts. 44-56)",
        nota:
          "El art. 44 enumera veintiocho materias y no tiene sentido memorizarlas todas; lo que cae es la primera —ordenación del territorio, urbanismo y vivienda— y las que llevan alguna coletilla que limita la exclusividad, porque el examen pregunta precisamente por esa salvedad: el patrimonio histórico es exclusivo «sin perjuicio de las facultades del Estado contra la exportación y la expoliación», la cultura es «en coordinación con el Estado» y los juegos y apuestas excluyen las Apuestas Mutuas Deportivo-Benéficas. Los arts. 45 a 56 desarrollan bloques con nombre propio, y de ellos los que más se preguntan son el Convenio Económico y la enseñanza.",
        items: [
          "Art. 44.1 — LA COMPETENCIA CLAVE PARA ESTA OPOSICIÓN: ORDENACIÓN DEL TERRITORIO, URBANISMO Y VIVIENDA, con carácter EXCLUSIVO. Es el título habilitante del DFL 1/2017 (LFOTU), de la LF 10/2010 del derecho a la vivienda y de toda la normativa foral urbanística",
          "Otras exclusivas del art. 44 con salvedad expresa: obras públicas que NO sean de interés general del Estado · aprovechamientos hidráulicos cuando las aguas discurran ÍNTEGRAMENTE por Navarra · energía cuando no salga del territorio · CULTURA en coordinación con el Estado · patrimonio histórico y arquitectónico sin perjuicio de las facultades estatales contra la EXPORTACIÓN Y LA EXPOLIACIÓN · casinos, juegos y apuestas CON EXCLUSIÓN de las Apuestas Mutuas Deportivo-Benéficas",
          "Materias exclusivas de interés directo para el técnico municipal: ESPECTÁCULOS (44.15, base de la LF 2/1989 y del DF 202/2002), promoción y ordenación del TURISMO (44.13), archivos, bibliotecas y museos no estatales (44.10) y colegios profesionales y ejercicio de las profesiones tituladas (44.26)",
          "Art. 45 — CONVENIO ECONÓMICO: Navarra mantiene, establece y regula su propio régimen tributario por el sistema tradicional del Convenio, de NATURALEZA PACCIONADA, con aportación a las cargas generales del Estado",
          "Art. 46 — ADMINISTRACIÓN LOCAL: facultades históricas más las compatibles que correspondan a Comunidades Autónomas y Provincias, con control de legalidad y de interés general sobre municipios y concejos, y garantía de una autonomía municipal no inferior a la general",
          "Art. 47 — ENSEÑANZA: competencia PLENA en su regulación y administración en toda su extensión, niveles y grados, sin perjuicio de los preceptos constitucionales, las leyes orgánicas, la HOMOLOGACIÓN DE TÍTULOS y la ALTA INSPECCIÓN del Estado",
          "Art. 48 — DERECHO CIVIL FORAL: competencia exclusiva sobre su conservación, modificación y desarrollo, que se ejerce por ley foral sobre el Fuero Nuevo",
          "Art. 49 — instituciones forales, FUNCIÓN PÚBLICA foral, PROCEDIMIENTO ADMINISTRATIVO propio, contratos y concesiones, régimen jurídico de la Administración foral, y carreteras y caminos íntegramente en Navarra",
          "Art. 51 — POLICÍA FORAL bajo mando de la Diputación, y coordinación de las Policías Locales",
          "Arts. 50, 53, 54, 55 y 56 — agricultura, ganadería, caza y pesca y espacios naturales protegidos · sanidad interior e higiene · Seguridad Social · medios de comunicación · y actividad económica, industria, comercio interior, defensa del consumidor y Cajas de Ahorro",
        ],
      },
      {
        h: "Título II — Desarrollo legislativo y mera ejecución (arts. 57-58)",
        nota:
          "Dos listas cortas que hay que saber distinguir entre sí, porque el examen las intercambia. Truco práctico: en el art. 57 Navarra LEGISLA dentro de las bases estatales, y ahí está el MEDIO AMBIENTE, que es la materia que más interesa a un arquitecto municipal junto con la EXPROPIACIÓN FORZOSA en el ámbito de sus competencias. En el art. 58 Navarra solo EJECUTA, y basta con retener algunos casos característicos —penitenciaria, laboral, propiedad intelectual e industrial, productos farmacéuticos y vertidos industriales— para descartar por eliminación.",
        items: [
          "Art. 57 — DESARROLLO LEGISLATIVO Y EJECUCIÓN en el marco de la legislación básica estatal: a) RESPONSABILIDAD de las administraciones públicas de Navarra · b) EXPROPIACIÓN FORZOSA en el ámbito de sus competencias · c) MEDIO AMBIENTE Y ECOLOGÍA · d) reserva al sector público de recursos o servicios esenciales e intervención de empresas por interés general · e) ordenación del crédito, banca y seguros · f) régimen minero y energético y recursos geotérmicos",
          "Art. 58.Uno — MERA EJECUCIÓN de la legislación del Estado: a) PENITENCIARIA · b) LABORAL, con la alta inspección del Estado y quedando reservadas a éste las migraciones y los fondos nacionales de empleo · c) propiedad INTELECTUAL E INDUSTRIAL · d) pesas y medidas y contraste de metales · e) ferias internacionales en Navarra · f) aeropuertos de interés general si el Estado no se reserva su gestión · g) establecimientos y productos FARMACÉUTICOS · h) VERTIDOS INDUSTRIALES Y CONTAMINANTES · i) archivos, bibliotecas y museos de titularidad estatal",
          "Art. 58.Dos — corresponde asimismo a la Comunidad Foral la EJECUCIÓN, dentro de su territorio, de los TRATADOS Y CONVENIOS INTERNACIONALES en lo que afecten a materias de su competencia",
        ],
      },
      {
        h: "Instituciones forales (arts. 10-38)",
        nota:
          "Aunque el temario no pide este Título, conviene tenerlo porque sus mayorías y plazos se cruzan constantemente con los de la Constitución en el examen, y porque la Cámara de Comptos aparece luego como proponente de vocal del Consejo de Transparencia (tema 9). El paralelismo con el Estado es casi total, pero con dos diferencias que caen: en la investidura del Presidente la segunda votación es a las VEINTICUATRO horas, no a las cuarenta y ocho; y la moción de censura la presenta UN QUINTO de los parlamentarios, no un décimo.",
        items: [
          "Art. 10: tres instituciones — Parlamento (o Cortes de Navarra), Gobierno (o Diputación Foral) y Presidente.",
          "Art. 15.2: número de parlamentarios: no inferior a 40 ni superior a 60 (actualmente 50).",
          "Art. 17.2: dos períodos ordinarios de sesiones anuales.",
          "Art. 18 bis: Cámara de Comptos — fiscaliza la gestión económica y financiera; emite dictamen previo a la aprobación de cuentas; depende del Parlamento.",
          "Art. 18 ter: Defensor del Pueblo de Navarra — defiende derechos en el ámbito foral; depende del Parlamento.",
          "Art. 20: leyes forales por mayoría simple; mayoría absoluta en los casos expresamente previstos.",
          "Art. 21 bis: Decretos-leyes Forales — por urgencia extraordinaria; convalidación parlamentaria en 30 días.",
          "Art. 29: investidura del Presidente — mayoría absoluta en 1.ª votación; mayoría simple en 2.ª (24 horas después). Es nombrado por el Rey.",
          "Art. 30: Presidente = máxima representación de Navarra y representación ordinaria del Estado en Navarra; dirige la Diputación Foral.",
          "Art. 34: cuestión de confianza — mayoría simple otorga la confianza.",
          "Art. 35: moción de censura constructiva — la presenta ≥ 1/5 de parlamentarios con candidato alternativo; aprobación por mayoría absoluta.",
        ],
      },
      {
        h: "Poder Judicial (arts. 59-67)",
        nota:
          "El Capítulo III del Título II. Lo examinable es el paralelismo con el art. 123 de la Constitución: el Tribunal Supremo culmina la organización judicial en todo el Estado, pero el TSJ de Navarra la culmina EN EL ÁMBITO TERRITORIAL navarro, y a él corresponde la casación en Derecho civil foral. Es el mismo esquema que verás en cualquier Comunidad, sin singularidad foral relevante.",
        items: [
          "Art. 59: el Tribunal Superior de Justicia de Navarra culmina la organización judicial en el ámbito territorial navarro.",
          "Art. 61: casación en Derecho Civil Foral navarro → TSJ; lo contencioso-administrativo foral → también el TSJ.",
        ],
      },
      {
        h: "Relaciones con el Estado y reforma (arts. 68-71)",
        nota:
          "El art. 71 es la conclusión lógica de todo el tema y por eso cierra el resumen: si el Amejoramiento es PACCIONADO —fruto de un acuerdo entre Navarra y el Estado—, ninguna de las dos partes puede modificarlo por su cuenta. Esa inmodificabilidad unilateral es la diferencia más citada frente a los Estatutos de Autonomía ordinarios, cuya reforma sigue el procedimiento que ellos mismos prevean. Nota además que los acuerdos de cooperación con el País Vasco u otras Comunidades limítrofes necesitan autorización de las CORTES GENERALES.",
        items: [
          "Art. 69: Junta de Cooperación = instrumento ordinario de relaciones interadministrativas; igual número de representantes de cada parte.",
          "Art. 70: acuerdos de cooperación con el País Vasco u otras CCAA limítrofes requieren autorización de las Cortes Generales.",
          "Art. 71: el amejoramiento es inmodificable unilateralmente. Reforma: iniciativa de la Diputación Foral o del Gobierno → acuerdo común → aprobación del Parlamento navarro y de las Cortes Generales.",
        ],
      },
    ],
    claves: [
      "Navarra: Comunidad Foral (no Comunidad Autónoma ordinaria), INDIVISIBLE y SOLIDARIA — art. 1",
      "Fundamento: Ley de 25-10-1839 + Ley Paccionada de 16-08-1841 + LORAFNA + DA 1ª de la Constitución — art. 2",
      "Límite infranqueable: la UNIDAD CONSTITUCIONAL — art. 2.Dos",
      "Triple objeto del Amejoramiento: integrar · ordenar democráticamente · garantizar — art. 3",
      "5 Merindades: Pamplona, Estella, Tudela, Sangüesa y Olite — art. 4",
      "Condición POLÍTICA de navarro = vecindad administrativa · condición CIVIL foral = Fuero Nuevo — art. 5",
      "Capital: la CIUDAD de Pamplona (frente a la VILLA de Madrid del art. 5 CE) — art. 8",
      "Escudo: cadenas de oro sobre fondo rojo, esmeralda central, OCHO brazos y Corona Real — art. 7",
      "Lengua: castellano oficial; vascuence cooficial en zonas vascoparlantes por ley foral — art. 9",
      "TRES NIVELES: exclusiva (legisla, art. 40) · desarrollo legislativo dentro de las bases (art. 41/57) · mera ejecución, sin legislar (art. 42/58)",
      "Art. 44.1: ORDENACIÓN DEL TERRITORIO, URBANISMO Y VIVIENDA es competencia EXCLUSIVA — base de la LFOTU",
      "Medio ambiente y expropiación forzosa: desarrollo legislativo, NO exclusiva — art. 57",
      "Vertidos industriales y contaminantes: solo EJECUCIÓN — art. 58",
      "Convenio Económico: régimen tributario propio de naturaleza PACCIONADA — art. 45",
      "Instituciones: Parlamento, Diputación Foral (Gobierno), Presidente — art. 10",
      "Parlamento: 40-60 miembros; 2 períodos ordinarios — arts. 15.2 y 17.2",
      "Presidente: mayoría absoluta 1.ª votación / simple 2.ª (24 h) — art. 29",
      "Cuestión de confianza: mayoría simple — art. 34",
      "Moción de censura: ≥ 1/5 parlamentarios + candidato alternativo + mayoría absoluta — art. 35",
      "Decretos-leyes Forales: convalidación en 30 días — art. 21 bis",
      "Cámara de Comptos: fiscalización económica, depende del Parlamento — art. 18 bis",
      "Competencias exclusivas: Derecho navarro prevalente, estatal supletorio — art. 40",
      "Enseñanza: competencia plena — art. 47",
      "TSJ Navarra: culmina la organización judicial — art. 59",
      "Junta de Cooperación: relaciones interadministrativas, iguales representantes — art. 69",
      "Reforma: ambas partes de acuerdo + Parlamento navarro + Cortes Generales — art. 71",
    ],
  },
  G1: {
  intro:
    "Constitución Española de 1978: norma suprema del ordenamiento. Aprobada por las Cortes el 31-10-1978, ratificada en referéndum el 6-12-1978, sancionada por el Rey el 27-12-1978 y publicada en el BOE el 29-12-1978, fecha en que ENTRA EN VIGOR (disposición final). Estructura: Preámbulo + Título Preliminar + 10 Títulos, 169 artículos, 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final. Solo ha sido reformada DOS veces: art. 13.2 (1992, sufragio pasivo de extranjeros en municipales por Maastricht) y art. 135 (2011, estabilidad presupuestaria).",
  bloques: [
    {
      h: "Título Preliminar (arts. 1-9)",
      nota:
        "Nueve artículos que fijan el marco entero y que caen casi siempre por su literalidad. La técnica del examen aquí no es entender, es distinguir palabras que se parecen: los cuatro valores superiores del 1.1 frente a la definición del Estado, la Monarquía parlamentaria como FORMA POLÍTICA frente al Estado social y democrático de Derecho como definición, y la villa de Madrid frente a la ciudad. El art. 9.3 conviene sabérselo de corrido porque su enumeración de principios se pregunta pidiendo el que falta.",
      items: [
        "Art. 1.1: Estado social y democrático de Derecho; valores superiores: libertad, justicia, igualdad y pluralismo político",
        "Art. 1.2: la soberanía nacional reside en el pueblo español",
        "Art. 1.3: forma política = Monarquía parlamentaria",
        "Art. 2: unidad de la Nación española + derecho a la autonomía de nacionalidades y regiones + solidaridad",
        "Art. 3: castellano oficial en todo el Estado (deber de conocerlo y derecho a usarlo); demás lenguas cooficiales en sus territorios",
        "Art. 4: bandera roja-amarilla-roja horizontal; banderas de CCAA junto a la de España en edificios públicos",
        "Art. 5: capital = la VILLA de Madrid (trampa: 'villa', no 'ciudad')",
        "Art. 6: partidos políticos (instrumento para la participación); art. 7: sindicatos y asociaciones empresariales",
        "Art. 8: Fuerzas Armadas garantizan la soberanía, independencia, defienden la integridad territorial y el ordenamiento constitucional",
        "Art. 9.2: poderes públicos promueven condiciones para que libertad e igualdad sean reales y efectivas",
        "Art. 9.3: legalidad, jerarquía normativa, publicidad, irretroactividad de lo sancionador no favorable, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad",
      ],
    },
    {
      h: "Fundamentos del Título I y españoles/extranjeros (arts. 10-13)",
      nota:
        "El art. 10.2 es la puerta de entrada del Derecho internacional: obliga a interpretar los derechos fundamentales conforme a la Declaración Universal y a los tratados ratificados por España, y por eso se invoca constantemente. Del art. 13 lo examinable es la reforma de 1992, la primera de las dos que ha tenido la Constitución: se añadió el sufragio PASIVO —no solo el activo— de los extranjeros en las municipales, para poder ratificar Maastricht.",
      items: [
        "Art. 10.1: dignidad de la persona, libre desarrollo de la personalidad, respeto a la ley y a los derechos de los demás = fundamento del orden político y de la paz social",
        "Art. 10.2: derechos fundamentales se interpretan conforme a la Declaración Universal de DDHH y tratados internacionales ratificados",
        "Art. 11.1: nadie puede ser privado de su nacionalidad DE ORIGEN",
        "Art. 11.3: tratados de doble nacionalidad con países iberoamericanos o de especial vinculación",
        "Art. 12: mayoría de edad a los 18 años",
        "Art. 13.1: extranjeros gozan de las libertades públicas según tratados y ley",
        "Art. 13.2: solo españoles son titulares del art. 23, salvo tratados/ley por reciprocidad para sufragio activo Y PASIVO en municipales (reforma 1992)",
        "Art. 13.3: extradición solo en virtud de tratado o ley, con reciprocidad; excluidos delitos políticos (no terrorismo)",
      ],
    },
    {
      h: "Sección 1ª — derechos fundamentales (arts. 14-29)",
      nota:
        "El bloque más preguntado de la Constitución, y donde importa tanto el contenido como la UBICACIÓN de cada derecho, porque de ella depende su nivel de protección. Ten presente la anomalía del art. 14: la igualdad está fuera de la Sección 1ª —encabeza el Capítulo II— pero el art. 53.2 la hace amparable igual que los arts. 15 a 29. Es la trampa clásica: preguntan qué derecho «no pertenece a la Sección 1ª» y la respuesta es la igualdad, aunque sí quepa amparo.",
      items: [
        "Art. 14: igualdad ante la ley sin discriminación por nacimiento, raza, sexo, religión, opinión u otra condición. OJO: está FUERA de la Sección 1ª pero es amparable por el 53.2",
        "Art. 15: derecho a la vida y a la integridad física y moral; prohibida la tortura y tratos inhumanos; pena de muerte ABOLIDA salvo leyes penales militares en tiempos de guerra",
        "Art. 16: libertad ideológica, religiosa y de culto; NINGUNA confesión tiene carácter estatal; cooperación con la Iglesia Católica y demás",
        "Art. 17: libertad y seguridad; detención preventiva máx. 72 horas; habeas corpus; derechos del detenido (informar de razones, abogado, silencio)",
        "Art. 18: honor, intimidad personal y familiar y propia imagen; inviolabilidad del domicilio; secreto de las comunicaciones; art. 18.4: protección frente al uso de la informática",
        "Art. 19: libertad de residencia y circulación por España; salida y entrada libre (límites por ley)",
        "Art. 20: expresión, producción y creación; información; PROHIBIDA la censura previa (20.2); secuestro de publicaciones SOLO por resolución judicial (20.5); límites: honor, intimidad, propia imagen, protección de juventud e infancia (20.4)",
        "Art. 21: reunión pacífica y sin armas; en lugares de tránsito público y manifestaciones: comunicación previa; solo prohibibles por razones fundadas de alteración del orden público con peligro para personas o bienes",
        "Art. 22: asociación; ilícitas las secretas y de carácter paramilitar; disolución/suspensión SOLO por resolución judicial motivada",
        "Art. 23: participación en asuntos públicos directamente o por representantes; acceso en igualdad a funciones y cargos públicos",
        "Art. 24: tutela judicial efectiva; juez ordinario predeterminado por la ley; defensa y abogado; ser informado de la acusación; proceso público sin dilaciones indebidas; pruebas; no declarar contra sí mismo ni confesarse culpable; presunción de inocencia",
        "Art. 25: principio de legalidad penal y sancionador (nadie puede ser condenado o sancionado por acciones u omisiones que no fueran delito, falta o infracción administrativa según la legislación vigente en ese momento); las penas privativas de libertad se orientan a la reeducación y reinserción social; la Administración CIVIL no puede imponer sanciones que impliquen privación de libertad (25.3)",
        "Art. 26: prohibidos los Tribunales de Honor en el ámbito civil y profesional",
        "Art. 27: educación; libertad de enseñanza; enseñanza BÁSICA obligatoria y gratuita; libertad de creación de centros; participación de profesores, padres y alumnos; autonomía universitaria",
        "Art. 28: sindicación libre (nadie obligado a sindicarse); derecho de huelga; ley de servicios esenciales",
        "Art. 29: petición individual por escrito; miembros de FFAA/Institutos armados: solo por conducto de su mando",
      ],
    },
    {
      h: "Sección 2ª — derechos y deberes (arts. 30-38)",
      nota:
        "La Sección 2ª vincula a todos los poderes públicos y exige ley para regular su ejercicio, pero NO tiene amparo constitucional: esa es la frontera que separa esta sección de la anterior. La única excepción la introduce el propio art. 53.2, que extiende el amparo a la objeción de conciencia del art. 30.2 pese a estar aquí. Para el técnico municipal el artículo relevante es el 33: la propiedad privada, con su garantía expropiatoria de utilidad pública o interés social mediante indemnización.",
      items: [
        "Art. 30: servicio militar para defender España; objeción de conciencia con prestación social sustitutoria",
        "Art. 31: sistema tributario justo inspirado en igualdad y progresividad; nunca alcance confiscatorio",
        "Art. 32: matrimonio con igualdad de derechos y deberes de los cónyuges",
        "Art. 33: propiedad privada y herencia; nadie privado de sus bienes sino por expropiación por utilidad pública o interés social MEDIANTE COMPENSACIÓN y conforme a leyes",
        "Art. 34: fundación para fines de interés general con arreglo a la ley",
        "Art. 35: deber de trabajar y derecho al trabajo; libre elección de profesión u oficio; promoción a través del trabajo",
        "Art. 36: colegios profesionales (estructura democrática)",
        "Art. 37: negociación colectiva y fuerza vinculante de los convenios; conflicto colectivo",
        "Art. 38: libertad de empresa en el marco de la economía de mercado",
      ],
    },
    {
      h: "Principios rectores (arts. 39-52)",
      nota:
        "Tercer nivel de protección y el más débil: informan la legislación positiva, la práctica judicial y la actuación de los poderes públicos, pero SOLO pueden alegarse ante la jurisdicción ordinaria de acuerdo con las leyes que los desarrollen. No son derechos subjetivos invocables sin más. Aquí viven dos artículos que un arquitecto municipal cita a menudo: el 45 —medio ambiente adecuado— y sobre todo el 47, que enlaza la vivienda digna con la regulación del suelo para impedir la especulación y con la participación de la comunidad en las plusvalías.",
      items: [
        "Art. 39: protección social, económica y jurídica de la familia",
        "Art. 41: Seguridad Social pública para todos; asistencia y prestaciones sociales suficientes",
        "Art. 43: protección de la salud",
        "Art. 45: medio ambiente adecuado; deber de conservarlo",
        "Art. 46: patrimonio histórico, cultural y artístico",
        "Art. 47: vivienda digna y adecuada; regulación del suelo para impedir la especulación",
        "Art. 48: participación de la juventud",
        "Art. 49: atención e integración de personas con discapacidad",
        "Art. 50: pensiones adecuadas y periódicamente actualizadas para la tercera edad",
        "Art. 51: defensa de consumidores y usuarios",
        "Art. 53.3: los principios rectores SOLO son alegables ante la judicatura ordinaria conforme a las leyes que los desarrollen (no invocables directamente)",
      ],
    },
    {
      h: "Garantías y suspensión (arts. 53-55)",
      nota:
        "El art. 53 es el que ordena los tres niveles de protección de todo el Título I, así que conviene estudiarlo como índice y no como artículo suelto: contenido esencial y reserva de ley para Secciones 1ª y 2ª; amparo solo para el art. 14, la Sección 1ª y el 30.2; y mera alegación conforme a las leyes de desarrollo para los principios rectores. Del art. 55 lo que cae es la lista de derechos suspendibles, y se pregunta por exclusión: el honor del 18.1 no se suspende nunca, y el 17.3 —derechos del detenido— se suspende en estado de sitio pero no en el de excepción.",
      items: [
        "Art. 53.1: ley regulará el ejercicio de los derechos de Secciones 1ª y 2ª respetando su contenido esencial",
        "Art. 53.2: recurso de AMPARO ante el TC: art. 14 + Sección 1ª (arts. 15-29) + objeción de conciencia del 30.2",
        "Art. 54: Defensor del Pueblo = alto comisionado de las Cortes Generales, regulado por ley orgánica",
        "Art. 55.1 (estados de excepción o sitio): suspendibles 17.2, 17.3, 18.2, 18.3, 19, 20.1.a y d, 21, 28.2 y 37.2; EXCEPTO el 17.3 en estado de excepción",
        "Art. 55.2 (suspensión individual, investigación de bandas armadas/elementos terroristas): 17.2 y 18.2 y 18.3, con intervención judicial y control parlamentario",
        "TRAMPA: el honor (18.1) NUNCA se suspende; el 28.2 (huelga) y 37.2 (conflicto colectivo) SÍ son suspendibles",
      ],
    },
    {
      h: "La Corona (arts. 56-65)",
      nota:
        "Título breve y de memoria pura. Dos ideas lo sostienen. La primera es que la inviolabilidad del Rey solo se explica junto al REFRENDO: como el Rey no responde, responde quien refrenda, y sin refrendo sus actos son nulos. La segunda es el orden sucesorio del art. 57.1, que hay que recitar entero —línea anterior sobre posterior, grado más próximo sobre más remoto, varón sobre mujer en el mismo grado, y mayor sobre menor en el mismo sexo— porque se pregunta cambiando un escalón. Ojo al refrendo del nombramiento del Presidente del Gobierno, que corresponde al Presidente del CONGRESO y no al del Gobierno.",
      items: [
        "Art. 56.1: Jefe del Estado, símbolo de su unidad y permanencia; arbitra y modera el funcionamiento regular de las instituciones; máxima representación internacional",
        "Art. 56.3: persona del Rey inviolable y no sujeta a responsabilidad",
        "Art. 57.1: sucesión por orden de primogenitura y representación; línea anterior prefiere a posterior; dentro de línea el grado más cercano; mismo grado VARÓN prefiere a mujer; mismo sexo el mayor",
        "Art. 59: Regencia por minoría o inhabilitación (padre/madre o pariente mayor de edad más próximo a suceder)",
        "Art. 60: tutela (testamento del Rey, o padre/madre viudos, o Cortes); incompatible Regente y tutor salvo padre/madre",
        "Art. 61: juramento ante las Cortes (Constitución y leyes + fidelidad al Rey)",
        "Art. 62: funciones del Rey (sancionar y promulgar leyes, convocar y disolver Cortes, proponer candidato a Presidente, nombrar y separar ministros a propuesta del Presidente, etc.)",
        "Art. 64: REFRENDO: actos del Rey refrendados por el Presidente del Gobierno y, en su caso, ministros competentes; nombramiento del Presidente refrendado por el Presidente del Congreso; sin refrendo los actos del Rey son NULOS",
      ],
    },
    {
      h: "Cortes Generales (arts. 66-80)",
      nota:
        "Bicameralismo imperfecto: las dos cámaras tienen mandato de cuatro años, pero el Congreso predomina y el Senado es cámara de representación territorial con capacidad de veto vencible. Las cifras del Congreso y del Senado se preguntan por separado y se confunden: el Congreso tiene una horquilla constitucional de 300 a 400 diputados —hoy 350 por ley electoral— con reparto proporcional; el Senado tiene números fijos por provincia e isla que hay que memorizar tal cual. Los dos períodos ordinarios de sesiones, de febrero a junio y de septiembre a diciembre, son otro dato de respuesta directa.",
      items: [
        "Art. 66: representan al pueblo español; potestad legislativa, aprueban Presupuestos, controlan al Gobierno",
        "Art. 68: Congreso de 300 a 400 diputados (hoy 350); circunscripción = provincia; mínimo 2 por provincia + 1 Ceuta y 1 Melilla; representación PROPORCIONAL",
        "Art. 69: Senado = cámara de representación TERRITORIAL; 4 senadores por provincia; Gran Canaria, Mallorca y Tenerife = 3; Ibiza-Formentera, Menorca, Fuerteventura, La Gomera, El Hierro, Lanzarote y La Palma = 1; Ceuta y Melilla = 2",
        "Art. 68.2/69.6: mandato de AMBAS cámaras = 4 años",
        "Art. 73: dos períodos ORDINARIOS de sesiones: febrero-junio y septiembre-diciembre",
        "Art. 74: sesiones conjuntas para competencias no legislativas del Título II (juras, etc.)",
        "Art. 78: Diputaciones Permanentes en ambas cámaras (mínimo 21 miembros en Congreso por grupos proporcionales)",
        "Art. 79.3: voto personal e indelegable",
      ],
    },
    {
      h: "Fuentes: ley orgánica, delegación, decreto-ley, iniciativa (arts. 81-92)",
      nota:
        "El bloque de fuentes se examina cruzando LÍMITES MATERIALES con MAYORÍAS y PLAZOS. Lo que reserva el art. 81 a ley orgánica es casi lo mismo que el art. 86 prohíbe al decreto-ley y lo que el art. 82 excluye de la delegación legislativa, así que memorizar una lista te da las tres. Distingue bien las dos formas de delegación: ley de BASES para texto articulado y ley ordinaria para texto REFUNDIDO. Y no confundas los treinta días de convalidación del decreto-ley con los quince de sanción regia o los dos meses del veto del Senado.",
      items: [
        "Art. 81: LEY ORGÁNICA para desarrollo de derechos fundamentales y libertades públicas, estatutos de autonomía, régimen electoral general y demás materias previstas; aprobación/modificación/derogación por MAYORÍA ABSOLUTA del Congreso en votación final sobre el conjunto",
        "Art. 82-85: delegación legislativa → decretos legislativos; leyes de BASES (textos articulados) y leyes ordinarias de delegación (textos refundidos); NO delegable lo de ley orgánica ni materias del 82.2; plazo improrrogable",
        "Art. 86: DECRETO-LEY del Gobierno por extraordinaria y urgente necesidad; NO puede afectar a ordenación de instituciones básicas, derechos/deberes/libertades de la Sección 1ª, régimen de CCAA ni derecho electoral general; convalidación: debate y votación de totalidad por el Congreso en 30 días siguientes a la promulgación",
        "Art. 87: iniciativa legislativa: Gobierno, Congreso, Senado, Asambleas de CCAA e iniciativa POPULAR (500.000 firmas; excluida en ley orgánica, tributaria, internacional y prerrogativa de gracia)",
        "Art. 90: veto del Senado en 2 MESES (urgencia: 20 días)",
        "Art. 91: el Rey sanciona las leyes en 15 días",
        "Art. 92: referéndum consultivo para decisiones de especial trascendencia (propone Presidente, autoriza Congreso)",
      ],
    },
    {
      h: "Gobierno y relación con las Cortes (arts. 97-116)",
      nota:
        "Todo este bloque se reduce a una tabla de mayorías y plazos, y ahí es donde se falla. La investidura pide mayoría absoluta y, si falla, simple a las cuarenta y ocho horas, con disolución automática si en dos meses desde la primera votación nadie sale investido. La cuestión de confianza se gana por mayoría SIMPLE; la moción de censura exige ABSOLUTA y es constructiva, es decir, con candidato alternativo incluido. Los estados del art. 116 son otra tabla: alarma la declara el Gobierno por quince días, la excepción exige autorización previa del Congreso, y el sitio lo declara el Congreso por mayoría absoluta.",
      items: [
        "Art. 97: Gobierno dirige política interior y exterior, administración civil y militar y defensa",
        "Art. 98: Presidente, Vicepresidentes, Ministros y demás miembros que establezca la ley",
        "Art. 99: investidura: mayoría ABSOLUTA en 1ª votación; si no, SIMPLE a las 48 horas; si en 2 MESES desde la 1ª votación nadie es investido → el Rey disuelve ambas cámaras con refrendo del Presidente del Congreso",
        "Art. 102: responsabilidad penal de miembros del Gobierno ante la Sala de lo Penal del Tribunal Supremo; acusación por traición o delito contra seguridad del Estado: iniciativa de 1/4 del Congreso + mayoría absoluta",
        "Art. 108: Gobierno responde SOLIDARIAMENTE en su gestión política ante el Congreso",
        "Art. 112: cuestión de confianza: se otorga por mayoría SIMPLE",
        "Art. 113: moción de censura CONSTRUCTIVA: firmada por al menos 1/10 de diputados (35), con candidato alternativo; exige mayoría ABSOLUTA; si fracasa, sus firmantes no pueden presentar otra en el mismo período de sesiones",
        "Art. 115: disolución acordada por el Rey a propuesta del Presidente tras Consejo de Ministros y bajo su exclusiva responsabilidad; no procede con moción de censura en trámite",
        "Art. 116: ALARMA (decreto del Gobierno, máx. 15 días, prorrogable con autorización del Congreso); EXCEPCIÓN (decreto previa autorización del Congreso, máx. 30 días prorrogables otros 30); SITIO (mayoría ABSOLUTA del Congreso)",
      ],
    },
    {
      h: "Poder Judicial (arts. 117-127)",
      nota:
        "Lo preguntable es la composición del CGPJ y el matiz del art. 123. El Tribunal Supremo culmina la organización judicial en todos los órdenes SALVO en materia de garantías constitucionales, que es del Tribunal Constitucional; y en Navarra el TSJ culmina la organización judicial en el ámbito territorial, con la casación en Derecho civil foral. Ojo a no mezclar los veinte vocales del CGPJ más su Presidente con los doce magistrados del Tribunal Constitucional: son dos órganos, dos cifras y dos duraciones distintas —cinco años el CGPJ, nueve el TC—.",
      items: [
        "Art. 117: justicia emana del pueblo; jueces y magistrados independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley",
        "Art. 122: CGPJ = órgano de gobierno del poder judicial: Presidente del Tribunal Supremo + 20 miembros por 5 años (12 de todas las categorías judiciales según ley orgánica; 4 a propuesta del Congreso y 4 del Senado por 3/5 entre juristas de reconocida competencia con más de 15 años)",
        "Art. 123: Tribunal Supremo culmina la organización judicial en TODOS los órdenes salvo lo constitucional",
        "Art. 124: Ministerio Fiscal promueve la acción de la justicia y defiende la legalidad, derechos de ciudadanos e interés público",
        "Art. 125: acción POPULAR y jurado",
      ],
    },
    {
      h: "Economía y Hacienda (arts. 128-136)",
      nota:
        "Título corto del que se preguntan tres cosas. El ciclo presupuestario del art. 134 —los elabora el Gobierno, las Cortes los examinan, enmiendan y aprueban— con su prórroga automática si no se aprueban antes del primer día del ejercicio. El art. 135, que es la SEGUNDA y última reforma de la Constitución, de 2011, con la prioridad absoluta del pago de la deuda pública. Y el Tribunal de Cuentas, que depende de las Cortes Generales, para no confundirlo con la Cámara de Comptos navarra, que depende del Parlamento foral.",
      items: [
        "Art. 128: toda la riqueza del país subordinada al interés general",
        "Art. 133: potestad tributaria originaria del Estado; CCAA y corporaciones locales según Constitución y leyes",
        "Art. 134: Presupuestos Generales del Estado: los elabora el GOBIERNO, las Cortes los examinan, enmiendan y aprueban; anuales; si no se aprueban antes del primer día del ejercicio → PRÓRROGA automática de los anteriores",
        "Art. 135 (reforma 2011): estabilidad presupuestaria; prioridad absoluta del pago de la DEUDA PÚBLICA",
        "Art. 136: Tribunal de Cuentas = supremo órgano fiscalizador de cuentas del Estado y sector público, depende de las Cortes",
      ],
    },
    {
      h: "Organización territorial (arts. 137-158)",
      nota:
        "El Título VIII interesa doblemente en esta oposición: por sí mismo y porque es el marco del que cuelgan la LORAFNA y toda la legislación foral. Los Capítulos I y II —principios generales y Administración local, arts. 137 a 142— son los que el temario pide expresamente. La autonomía local del art. 140 es autonomía para la GESTIÓN DE SUS INTERESES, no soberanía, y de ahí que la ley pueda atribuir competencias y controlarlas. El art. 149 no enumera lo que hacen las Comunidades sino lo EXCLUSIVO del Estado, y el 148 lo que aquéllas pueden asumir: se confunden con facilidad.",
      items: [
        "Art. 137: Estado se organiza en municipios, provincias y CCAA",
        "Art. 139: igualdad de todos los españoles; libre circulación",
        "Art. 140: autonomía municipal; Alcaldes elegidos por los Concejales o por los vecinos",
        "Art. 141: alteración de límites provinciales por ley ORGÁNICA de las Cortes",
        "Art. 145: PROHIBIDA la federación de CCAA",
        "Art. 148/149: competencias asumibles por CCAA vs. competencias EXCLUSIVAS del Estado",
        "Art. 153: control de la actividad de los órganos de las CCAA (TC, Gobierno/CAC, jurisdicción contencioso-administrativa, Tribunal de Cuentas)",
        "Art. 155: incumplimiento grave de obligaciones por una CCAA: requerimiento al Presidente y, si no atiende, con aprobación por mayoría ABSOLUTA del Senado, el Gobierno adopta medidas coercitivas",
        "Art. 156: autonomía financiera de las CCAA",
        "Art. 158: Fondo de Compensación Interterritorial",
      ],
    },
    {
      h: "Tribunal Constitucional (arts. 159-165)",
      nota:
        "Doce magistrados, nueve años de mandato y renovación por TERCIOS cada tres: son las tres cifras que se preguntan juntas. El reparto del nombramiento —cuatro Congreso, cuatro Senado, dos Gobierno, dos CGPJ, todos por el Rey— se cruza en el examen con el del CGPJ, así que conviene fijarlos como pares opuestos. Y no confundas legitimación para el recurso de INCONSTITUCIONALIDAD, que es tasada y de órganos, con la del AMPARO, que corresponde a cualquier persona con interés legítimo, el Defensor del Pueblo y el Ministerio Fiscal.",
      items: [
        "12 miembros nombrados por el Rey: 4 a propuesta del Congreso (3/5), 4 del Senado (3/5), 2 del Gobierno y 2 del CGPJ",
        "Mandato de 9 años; renovación por TERCIOS cada 3 años",
        "Presidente nombrado por el Rey entre sus miembros por 3 años",
        "Legitimados para recurso de inconstitucionalidad: Presidente del Gobierno, Defensor del Pueblo, 50 diputados, 50 senadores, órganos ejecutivos colegiados de CCAA y sus Asambleas",
        "Recurso de AMPARO por violación de los derechos del 53.2",
      ],
    },
    {
      h: "Reforma constitucional (arts. 166-169)",
      nota:
        "Dos procedimientos y una regla para elegir entre ellos. El AGRAVADO del art. 168 se reserva a la reforma total y a tres bloques concretos: Título Preliminar, Sección 1ª del Capítulo II del Título I —arts. 15 a 29— y Título II, la Corona. Todo lo demás va por el general del art. 167. Fíjate en la asimetría del referéndum: en el general es POTESTATIVO y hay que pedirlo un décimo de los miembros de cualquier cámara en quince días, mientras que en el agravado es OBLIGATORIO y además hay disolución de las Cortes por medio.",
      items: [
        "Art. 166: iniciativa según el 87.1 y 87.2 (Gobierno, Congreso, Senado); las CCAA NO pueden iniciar la reforma",
        "Art. 167 (procedimiento general): 3/5 de cada cámara; si no hay acuerdo, comisión paritaria y luego mayoría ABSOLUTA del Senado + 2/3 del Congreso; referéndum si lo pide 1/10 de los miembros de cualquiera de las cámaras en 15 días",
        "Art. 168 (agravado): reforma TOTAL o que afecte al Título Preliminar, a la Sección 1ª del Capítulo II del Título I (arts. 15-29) o al Título II (Corona) → 2/3 de cada cámara, DISOLUCIÓN inmediata, nuevas cámaras ratifican por 2/3 y REFERÉNDUM",
        "Art. 169: no procede reforma en tiempo de guerra ni bajo estados de alarma, excepción o sitio",
      ],
    },
  ],
  claves: [
    "Referéndum 6-12-1978; sanción 27-12; BOE y entrada en vigor 29-12-1978",
    "169 artículos; 4 DA; 9 DT; 1 derogatoria; 1 final",
    "Solo 2 reformas: art. 13.2 (1992) y art. 135 (2011)",
    "Art. 1.1 valores: libertad, justicia, igualdad, pluralismo político",
    "Art. 5: la VILLA de Madrid",
    "Sección 1ª = arts. 15-29; el 14 queda fuera pero es amparable",
    "Amparo (53.2): 14 + Sección 1ª + 30.2 (objeción de conciencia)",
    "Detención preventiva máx. 72 horas (17.2)",
    "Pena de muerte abolida salvo leyes penales militares en tiempo de guerra (15)",
    "Censura previa prohibida; secuestro de publicaciones solo judicial (20.2 y 20.5)",
    "Suspensión 55.1: 17.2, 17.3, 18.2, 18.3, 19, 20.1.a/d, 21, 28.2, 37.2; 17.3 exceptuado en excepción",
    "55.2 individual: 17.2 y 18.2/18.3",
    "Ley orgánica: mayoría absoluta del Congreso en votación final sobre el conjunto (81)",
    "Decreto-ley: no toca Sección 1ª; convalidación en 30 días (86)",
    "Iniciativa popular: 500.000 firmas (87.3)",
    "Congreso 300-400 (350); provincia circunscripción; proporcional",
    "Senado: 4 por provincia; 3 Gran Canaria/Mallorca/Tenerife; 2 Ceuta/Melilla",
    "Períodos ordinarios: feb-jun y sep-dic (73)",
    "Veto Senado: 2 meses (urgencia 20 días); sanción real 15 días",
    "Investidura: absoluta → simple a las 48 h; 2 meses sin investir → disolución",
    "Moción de censura: 1/10 firmas (35), constructiva, mayoría absoluta",
    "Cuestión de confianza: mayoría simple",
    "Estados: alarma 15 días; excepción 30+30; sitio mayoría absoluta Congreso",
    "CGPJ: 20 miembros + Presidente, 5 años",
    "TC: 12 miembros, 9 años, tercios cada 3 años; Presidente 3 años",
    "Presupuestos: elabora Gobierno; prórroga automática si no se aprueban",
    "Alteración límites provinciales: ley orgánica (141.1)",
    "Federación de CCAA prohibida (145)",
    "Reforma agravada (168): Preliminar, arts. 15-29 o Corona → 2/3 + disolución + 2/3 + referéndum",
    "Sin reforma en guerra ni estados de alarma/excepción/sitio (169)",
  ],
},

  G13: {
    intro:
      "El régimen de bienes de las entidades locales en Navarra se regula por la LF 6/1990 (Título IV, Cap. I, arts. 97-138) y el DF 280/1990 (Reglamento de Bienes: Título I, caps. I y II, y Título I, cap. V, sección 1ª). Las preguntas de examen se concentran en plazos, mayorías y competencias órgano-Presidente/Pleno.",
    bloques: [
      {
        h: "Clasificación y régimen (arts. 97-100 LF / arts. 1-8 Reg.)",
        nota:
          "La clasificación navarra es TRIPLE y ahí está su singularidad: además del dominio público y los bienes patrimoniales del régimen común, aparecen los BIENES COMUNALES, aquellos cuyo aprovechamiento y disfrute corresponde al COMÚN DE LOS VECINOS. No son una categoría menor: el art. 99.2 les da la consideración de bienes de dominio público, con su mismo régimen en lo no previsto expresamente. De ahí se sigue lo demás — el art. 100 declara unos y otros INALIENABLES, IMPRESCRIPTIBLES, INEMBARGABLES y no sujetos a tributo alguno, y añade para los comunales que no cambian de naturaleza ni de tratamiento jurídico cualquiera que sea la forma de disfrute.",
        items: [
          "Tres clases: dominio público (uso o servicio público), comunales (aprovechamiento vecinos) y patrimoniales",
          "Bienes comunales: considerados dominio público a todos los efectos (art. 99.2 LF / art. 5 Reg.)",
          "Dominio público y comunales: inalienables + imprescriptibles + inembargables + no sujetos a tributo (art. 100 LF / art. 6 Reg.)",
          "Parcelas sobrantes y efectos no utilizables → bienes patrimoniales (art. 102.1 LF / art. 10 Reg.)",
        ],
      },
      {
        h: "Calificación y alteración (arts. 101-104 LF / arts. 9-14 Reg.)",
        nota:
          "La alteración de la calificación jurídica es el trámite que más vas a ver en un expediente municipal, típicamente para desafectar una parcela y poder enajenarla o cederla. Dos conceptos del art. 102 conviene tenerlos con su definición literal porque se preguntan: PARCELAS SOBRANTES son las que por su reducida extensión, forma irregular o emplazamiento NO son susceptibles de uso adecuado; y EFECTOS NO UTILIZABLES, los que por deterioro, depreciación o deficiente estado resultan inaplicables al servicio o a su normal aprovechamiento. Ambos se clasifican como bienes de dominio privado.",
        items: [
          "Alteración EXPRESA: expediente + info pública 1 mes + Pleno; si dominio público → mayoría absoluta (art. 103.1 LF)",
          "Alteración AUTOMÁTICA sin expediente (art. 103.3 LF / art. 13 Reg.): (a) aprobación definitiva planes urbanísticos, (b) adscripción patrimonial >25 años a uso/servicio público o comunal, (c) cesión obligatoria para uso público",
          "Adscripción a organismo autónomo: Pleno (puede delegar en Presidente si no requiere afectación previa) — art. 104 LF",
          "Bienes adscritos: conservan calificación original; el organismo solo tiene facultades de conservación y uso (art. 104.2 LF)",
        ],
      },
      {
        h: "Adquisición (arts. 105-109 LF)",
        nota:
          "Las formas de adquisición se preguntan pidiendo la que falta, así que conviene enumerarlas de corrido. Y hay dos reglas de destino que caen: los bienes adquiridos a título de HERENCIA, LEGADO O DONACIÓN sin condición se entienden PATRIMONIALES, y solo si la condición impone un destino público adquieren esa naturaleza; y la herencia se acepta siempre A BENEFICIO DE INVENTARIO, para no responder de las deudas más allá del activo.",
        items: [
          "Adquisición onerosa — Presidente: cuantía ≤5% recursos ordinarios Y ≤50% límite contratación directa (art. 107.1)",
          "Adquisición onerosa — Pleno: resto; mayoría absoluta si grava presupuestos de 2 o más ejercicios (art. 107.2)",
          "Adquisición gratuita — Presidente: sin restricción (art. 109.1); si lleva condición onerosa → Pleno + expediente",
          "Herencias: siempre a beneficio de inventario (art. 109.3)",
          "Adquisición inmuebles: requiere valoración técnica previa (art. 107.3)",
        ],
      },
      {
        h: "Defensa, conservación y recuperación (arts. 110-120 LF)",
        nota:
          "Las potestades de defensa del patrimonio son la manifestación clásica de la autotutela: la entidad local puede recuperar por sí misma la posesión de sus bienes sin acudir al juez, deslindar los suyos de los ajenos e investigar la situación de los que presume propios. La diferencia esencial que se pregunta es de PLAZO: tratándose de bienes de dominio público o comunales, la potestad de recuperación de oficio es imprescriptible y puede ejercerse EN CUALQUIER MOMENTO; tratándose de patrimoniales, está sujeta a plazo, pasado el cual solo cabe la vía judicial.",
        items: [
          "Recuperación dominio público y comunales: en CUALQUIER MOMENTO, por vía administrativa (art. 111.1)",
          "Recuperación bienes patrimoniales: plazo de 1 AÑO desde el día siguiente a la ocupación; después → tribunales ordinarios (art. 111.2)",
          "Inventario: actualización continua + rectificación anual + comprobación al renovar corporación; aprueba el Pleno (art. 113)",
          "Deslinde: aprueba el Pleno; durante tramitación no cabe procedimiento judicial ni interdictos (art. 114)",
          "Allanamiento/transacción sobre bienes: Pleno mayoría absoluta; si son comunales → además aprobación Gobierno de Navarra (art. 116.1)",
          "Sanciones por daños/usurpación: entre el tanto y el triple del valor; si no se puede estimar → entre 50 y 1.800 € (art. 117.2)",
        ],
      },
      {
        h: "Utilización dominio público (arts. 121-131 LF / arts. 92-112 Reg.)",
        nota:
          "La escalera de usos del dominio público es la pregunta clásica y se ordena por intensidad creciente, con un título distinto para cada peldaño: uso COMÚN GENERAL, libre y sin título alguno · uso COMÚN ESPECIAL, que concurren circunstancias singulares y exige LICENCIA · uso PRIVATIVO, que ocupa una porción del dominio público limitando el uso de los demás y exige CONCESIÓN · y uso NORMAL o ANORMAL según sea o no conforme al destino del bien. Aprende la correspondencia entre cada uso y su título habilitante: es lo que te preguntarán, y también lo que aplicas al informar una ocupación de vía pública.",
        items: [
          "Licencia: uso especial o uso privativo sin obras permanentes — concedida directamente o por licitación; a PRECARIO, revocable en cualquier tiempo; NO por tiempo indefinido (art. 122 LF / art. 96 Reg.)",
          "Concesión: uso privativo con obras permanentes o uso anormal — Pleno; plazo máximo 99 años; mayoría absoluta si >5 años y cuantía >10% recursos ordinarios (arts. 123 LF / 98 Reg.)",
          "Competencia licencias → Presidente (salvo que Ordenanzas lo atribuyan al Pleno) — art. 95 Reg.",
          "Competencia concesiones → Pleno — art. 98 Reg.",
          "Cesión gratuita de USO: máximo 20 años (art. 128.3 LF)",
        ],
      },
      {
        h: "Enajenación y gravamen (arts. 132-138 LF)",
        nota:
          "Solo se enajenan bienes PATRIMONIALES: los de dominio público y los comunales son inalienables, de modo que para vender uno hay que desafectarlo antes. La regla de procedimiento es la SUBASTA PÚBLICA, con excepciones tasadas de enajenación directa que hay que justificar. Y sobre todo, ten presente el control autonómico del art. 138: determinadas operaciones sobre el patrimonio local necesitan AUTORIZACIÓN previa del Gobierno de Navarra por encima de ciertos umbrales, un control que no existe en el régimen común y que es rasgo propio del Derecho local foral.",
        items: [
          "Enajenación — regla general: subasta pública; solo excepcionalmente enajenación directa (art. 133 LF)",
          "Enajenación — Pleno: requiere declaración previa de alienabilidad; mayoría absoluta si cuantía >20% recursos ordinarios (art. 132.2)",
          "Enajenación — Presidente: puede enajenar si cuantía ≤5% recursos ordinarios (art. 132.2 párrafo 2º)",
          "No enajenar para gastos corrientes, salvo parcelas sobrantes o efectos no utilizables (art. 132.4)",
          "Permuta: diferencia de valores ≤50% del valor del bien más alto; diferencia se compensa en metálico (art. 135.1)",
          "Cesión gratuita de PROPIEDAD: Pleno mayoría absoluta; fines en ≤5 años; destino mantenido 30 años; inmuebles → escritura pública e inscripción Registro (art. 136)",
          "Gravámenes: mismos requisitos que la enajenación (art. 137)",
        ],
      },
      {
        h: "Control de la Comunidad Foral (art. 138 LF)",
        nota:
          "El cierre del tema y la especialidad foral más marcada: sobre el patrimonio de las entidades locales pesa un control de la Comunidad Foral que se articula por umbrales económicos y por tipo de operación. Enlaza con el art. 46 de la LORAFNA, que atribuye a Navarra el control de legalidad y de interés general sobre municipios y concejos — es decir, no es una intromisión sino el ejercicio de una competencia histórica reconocida en el Amejoramiento.",
        items: [
          "Autorización previa de la CF en: (a) bienes histórico-artísticos, (b) bienes cuyo valor >25% recursos ordinarios, (c) valores mobiliarios/créditos >25% recursos ordinarios",
          "Para el resto de inmuebles: basta con dar cuenta a la CF (sin autorización previa)",
        ],
      },
    ],
    claves: [
      "Dominio público + comunales: inalienables · imprescriptibles · inembargables · sin tributos",
      "Comunales = dominio público a todos los efectos (art. 99.2 LF)",
      "Alteración automática por adscripción patrimonial: >25 años",
      "Recuperación: dominio público = cualquier momento; patrimoniales = 1 año",
      "Licencia: precario, revocable, máx. no indefinida. Concesión: máx. 99 años",
      "Enajenación mayoría absoluta: cuantía >20% recursos ordinarios",
      "Permuta: diferencia ≤50% del bien de mayor valor",
      "Cesión uso: máx. 20 años. Cesión propiedad: fines en 5 años + destino 30 años",
      "Control CF (autorización previa): histórico-artísticos o valor >25% recursos ordinarios",
    ],
  },

  E4: {
    intro:
      "El Real Decreto 513/2017, de 22 de mayo, aprueba el Reglamento de instalaciones de protección contra incendios (RIPCI). Regula el diseño, instalación, mantenimiento e inspección de los equipos y sistemas de protección activa contra incendios (PCI). Se aplica a empresas instaladoras y mantenedoras y con carácter supletorio a instalaciones no reguladas por legislación específica.",
    bloques: [
      {
        h: "Objeto, ámbito y definiciones (Cap. I, arts. 1-3)",
        items: [
          "Objeto (art. 1.1): condiciones y requisitos del diseño, instalación/aplicación, mantenimiento e inspección de equipos, sistemas y componentes de protección activa contra incendios",
          "Carácter supletorio: aplica a instalaciones PCI no reguladas en legislaciones específicas, excepto túneles de carreteras del Estado (RD 635/2006)",
          "Ámbito subjetivo (art. 2): empresas instaladoras y empresas mantenedoras; también fabricantes, importadores, distribuidores y organismos de certificación/evaluación técnica",
          "Protección activa: conjunto de medios (manuales o automáticos) para detección, control y/o extinción de un incendio, facilitando la evacuación e impidiendo propagación",
          "Empresa instaladora: ubica y/o instala equipos/sistemas PCI y coloca señales, balizamientos y planos de evacuación",
          "Empresa mantenedora: realiza las operaciones de mantenimiento de los equipos/sistemas PCI",
        ],
      },
      {
        h: "Sistemas de detección y alarma de incendios (Anexo I §1)",
        items: [
          "Diseño e instalación: norma UNE 23007-14; sistema de alarma por voz: UNE 23007-32; compatibilidad de componentes: UNE-EN 54-13",
          "Detectores: calor puntual (UNE-EN 54-5), humo puntual (54-7), llama (54-10), lineal (54-12), aspiración (54-20); todos con marcado CE",
          "Pulsadores de alarma (UNE-EN 54-11): distancia máxima desde cualquier origen de evacuación: 25 m; altura parte superior: 80-120 cm",
          "Dispositivos visuales de alarma: obligatorios cuando ruido ambiente >60 dB(A), cuando los ocupantes sean sordos o lleven protección auditiva",
          "Equipos de control e indicación (e.c.i.): marcado CE (UNE 23007-2); identificación inmediata de la zona donde se activa un detector o pulsador",
        ],
      },
      {
        h: "Extintores de incendio (Anexo I §4)",
        items: [
          "Extintor portátil: masa en condiciones de funcionamiento ≤ 20 kg; extintor móvil: masa >20 kg, sobre ruedas",
          "Extintores portátiles: certificados conforme a UNE-EN 3-7 y UNE-EN 3-10; extintores móviles: UNE-EN 1866-1",
          "Altura instalación: parte superior entre 80 cm y 120 cm sobre el suelo",
          "Recorrido máximo horizontal hasta extintor: 15 m (desde cualquier punto del sector, origen de evacuación)",
          "Clases de fuego (UNE-EN 2): A (sólidos con brasas) · B (líquidos/sólidos licuables) · C (gases) · D (metales) · F (aceites y grasas en aparatos de cocina)",
          "Generadores de aerosol: pueden usarse como extintores si tienen evaluación técnica favorable y capacidad de extinción ≥ extintor portátil convencional",
        ],
      },
      {
        h: "Sistemas de bocas de incendio equipadas — BIE (Anexo I §5)",
        items: [
          "Manguera semirrígida: 25 mm de diámetro interior; longitud máxima 30 m; K mínimo 42; caudal mínimo 85 l/min; presión mínima entrada 4 bar (400 kPa)",
          "Manguera plana: 45 mm de diámetro interior; longitud máxima 20 m; K mínimo 85; caudal mínimo 160 l/min; presión mínima entrada 3,5 bar (350 kPa)",
          "Presión máxima entrada (semirrígida y plana): 9 bar (900 kPa)",
          "Boquilla/válvula/sistema apertura: situados a máx. 1,50 m sobre el nivel del suelo",
          "Posición: preferentemente cerca de puertas/salidas; siempre una BIE a ≤5 m de cada salida de sector",
          "Separación máxima entre BIE: 50 m; radio de acción = longitud manguera + 5 m",
          "Autonomía: 1 hora con las 2 BIE hidráulicamente más desfavorables funcionando simultáneamente",
          "Prueba de estanquidad antes de puesta en servicio: presión estática = máxima de servicio y mínimo 980 kPa (10 kg/cm²), mantenida 2 horas sin fugas",
        ],
      },
      {
        h: "Hidrantes (Anexo I §3) y Columna seca (Anexo I §6)",
        items: [
          "Hidrantes: columna (tipo B o C; heladas → solo tipo C) o bajo tierra; llave cuadradillo 25×25 mm (bajo tierra) / 30×30 mm (columna)",
          "Distancia real a hidrante: <100 m en zonas urbanas; <40 m en el resto",
          "Hidrante entre 5 m y 15 m del límite exterior del edificio protegido",
          "Caudal mínimo por boca de hidrante: 500 l/min; presión mínima salida: 100 kPa (llenado camiones en zona urbana) / 500 kPa (impulsión directa)",
          "Columna seca: tubería acero galvanizado DN80; ascendente → salidas en plantas pares hasta la 8ª y en todas las siguientes; válvula de seccionamiento cada 4 plantas",
          "Centro de bocas (exterior e interior): a 0,90 m sobre el nivel del suelo",
          "Recorrido máximo hasta columna seca: <60 m (siguiendo recorridos de evacuación)",
          "Prueba estanquidad columna seca: ≥1.470 kPa (15 kg/cm²) hasta 30 m de altura / ≥2.450 kPa (25 kg/cm²) si >30 m, durante 2 horas",
        ],
      },
      {
        h: "Sistemas fijos de extinción (Anexo I §7-§12)",
        items: [
          "Rociadores automáticos (§7): diseño e instalación conforme UNE-EN 12845; componentes: marcado CE (serie UNE-EN 12259)",
          "Agua nebulizada (§8): conforme a norma UNE-CEN/TS 14972",
          "Espuma física (§9): UNE-EN 13565-2 (diseño) y UNE-EN 13565-1 (componentes); espumógenos: UNE-EN 1568",
          "Polvo (§10): solo cuando garantizada evacuación del personal; mecanismo de disparo con retardo y prealarma",
          "Agentes gaseosos (§11): solo cuando garantizada evacuación; retardo + prealarma; concentraciones según riesgo; UNE-EN 15004 o UNE ISO 6183",
          "Aerosoles condensados (§12): UNE-EN 15276-2 (diseño) y UNE-EN 15276-1 (componentes)",
          "Cocinas comerciales (§16): certificación previa según UNE-EN 17446; mantenimiento por empresa habilitada para el sistema base",
        ],
      },
      {
        h: "Mantas ignífugas (§14) y Señalización luminiscente (Sección 2ª)",
        items: [
          "Mantas ignífugas: láminas flexibles para extinguir por sofocación pequeños fuegos; norma UNE-EN 1869; caducidad máxima 20 años",
          "Señalización: conforme a UNE 23033-1; señales sin símbolos ajenos (máx. 3% de la superficie para identificación)",
          "Sistemas fotoluminiscentes: conforme a UNE 23035-4; categoría A obligatoria en centros con actividades del Anexo I del Plan Básico de Autoprotección (RD 393/2007)",
          "Sistemas alimentados eléctricamente: requisitos análogos al alumbrado de emergencia en cuanto a funcionamiento",
          "Señales no luminiscentes en interiores: deben estar iluminadas exteriormente y ser visibles incluso en caso de fallo del alumbrado normal",
        ],
      },
    ],
    claves: [
      "RD 513/2017 — RIPCI; excepción supletoria: túneles de carreteras del Estado (RD 635/2006)",
      "Extintor portátil ≤20 kg; móvil >20 kg en ruedas; recorrido máx. hasta extintor: 15 m",
      "Extintores y pulsadores: parte superior entre 80 cm y 120 cm sobre el suelo",
      "Pulsadores alarma: distancia máx. 25 m desde origen de evacuación",
      "Clases fuego: A sólidos · B líquidos · C gases · D metales · F aceites/grasas cocina",
      "BIE semirrígida: 25mm / 30m / 85 l/min / 4 bar mín · BIE plana: 45mm / 20m / 160 l/min / 3,5 bar mín",
      "BIE: separación máx. 50m; una BIE a ≤5m de cada salida sector; autonomía 1h (2 BIE más desfavorables)",
      "Hidrantes urbanos <100 m; no urbanos <40 m; caudal mín. 500 l/min",
      "Columna seca DN80; recorrido máx. <60 m; bocas a 0,90 m; prueba ≤30m: 1.470 kPa / >30m: 2.450 kPa",
      "Polvo y gaseosos: prealarma + retardo; solo si evacuación garantizada",
      "Mantas ignífugas: sofocación; caducidad máx. 20 años",
      "Señalización fotoluminiscente categoría A: centros con Plan de Autoprotección (RD 393/2007)",
    ],
  },

  E1: {
    intro:
      "La Ley 38/1999, de 5 de noviembre, de Ordenación de la Edificación (LOE) regula el proceso de edificación: obligaciones y responsabilidades de los agentes, garantías y requisitos básicos de los edificios. Es el marco legal habilitante sobre el que se desarrolla el CTE.",
    bloques: [
      {
        h: "Ámbito y requisitos básicos (arts. 2-3)",
        items: [
          "Grupo a) usos residencial, sanitario, docente, cultural, administrativo, religioso → titulación habilitante: arquitecto",
          "Grupo b) usos industriales, transporte, minero, ingeniería → titulación general: ingeniero / arquitecto según especialidad",
          "Grupo c) resto de edificaciones → arquitecto, arquitecto técnico, ingeniero o ingeniero técnico según especialidad",
          "Obras que requieren proyecto: nueva construcción (salvo escasa entidad + no residencial/público + 1 planta); intervenciones que alteren configuración arquitectónica; intervenciones totales en edificios protegidos",
          "Requisitos básicos: funcionalidad (utilización, accesibilidad, telecomunicaciones, correos), seguridad (estructural, incendio, utilización) y habitabilidad (higiene, ruido, energía)",
        ],
      },
      {
        h: "Agentes de la edificación (arts. 8-16)",
        items: [
          "Promotor (art. 9): cualquier persona física o jurídica que decide, impulsa, programa y financia las obras; debe suscribir las garantías del art. 19",
          "Proyectista (art. 10): redacta el proyecto; titulación según grupo de uso",
          "Constructor (art. 11): ejecuta la obra; designa jefe de obra; responde de subcontratistas y de las deficiencias de los productos adquiridos",
          "Director de obra (art. 12): dirige aspectos técnicos, estéticos, urbanísticos y medioambientales; coordina proyectos parciales",
          "Director de ejecución (art. 13): dirige ejecución material y controla calidad; titulación para grupo a): arquitecto técnico",
          "Entidades y laboratorios de control de calidad (art. 14): asistencia técnica de verificación; necesitan declaración responsable ante CCAA",
          "Suministradores (art. 15): responden de origen, identidad y calidad de los productos",
          "Propietarios y usuarios (art. 16): conservar y transmitir la documentación; uso adecuado conforme a instrucciones",
        ],
      },
      {
        h: "Recepción y documentación (arts. 6-7)",
        items: [
          "Recepción (art. 6): acto por el que el constructor entrega al promotor la obra terminada; con o sin reservas; por fases completas",
          "Acta de recepción: firmada por promotor y constructor; refleja partes, fecha certificado final, coste final, reservas y garantías",
          "Plazo: 30 días desde notificación escrita al promotor; si no hay respuesta → recepción tácita",
          "Desde la recepción se computan los plazos de responsabilidad y garantía",
          "Libro del Edificio (art. 7): proyecto actualizado + acta de recepción + relación de agentes + instrucciones uso y mantenimiento; entregado a usuarios finales",
        ],
      },
      {
        h: "Responsabilidad civil y plazos (arts. 17-18)",
        items: [
          "10 años: defectos estructurales (cimentación, soportes, vigas, forjados, muros de carga u otros elementos que comprometan resistencia y estabilidad)",
          "3 años: defectos de elementos constructivos o instalaciones que incumplan requisitos de habitabilidad",
          "1 año: defectos de ejecución en elementos de terminación o acabado → responsable: el constructor",
          "Solidaridad: el promotor responde solidariamente con los demás agentes ante los adquirentes en todo caso",
          "Prescripción (art. 18): 2 años desde que se produzcan los daños para exigir responsabilidad",
          "Acción de repetición entre agentes o aseguradores: 2 años desde firmeza de la resolución judicial o pago extrajudicial",
        ],
      },
      {
        h: "Garantías por daños materiales (art. 19)",
        items: [
          "Seguro anual (acabados): 1 año · capital mínimo: 5% del coste final; tomador: constructor (puede ser el promotor por cuenta del constructor)",
          "Seguro trienal (habitabilidad): 3 años · capital mínimo: 30% del coste final; tomador: promotor",
          "Seguro decenal (estructura): 10 años · capital mínimo: 100% del coste final; tomador: promotor",
          "Franquicia máxima admisible en seguros trienal/decenal: 1% del capital asegurado por unidad registral (no se admite franquicia en el seguro anual)",
          "La prima debe estar pagada en la recepción; el fraccionamiento posterior no exonera al asegurador",
          "Art. 20: no se autorizan ni inscriben escrituras de obra nueva sin acreditar las garantías del art. 19",
        ],
      },
    ],
    claves: [
      "Grupo a) = arquitecto (proyecto + dirección + DEO: arquitecto técnico)",
      "Obra sin proyecto: escasa entidad + sin carácter residencial/público + 1 planta",
      "Recepción tácita: 30 días desde notificación escrita sin respuesta del promotor",
      "Plazos responsabilidad: 1 año acabados (constructor) · 3 años habitabilidad · 10 años estructura",
      "Prescripción acciones: 2 años desde que se producen los daños",
      "Capital mínimo seguros: 5% (1 año) · 30% (3 años) · 100% (10 años)",
      "Promotor: responsabilidad solidaria con todos los agentes ante adquirentes en todo caso",
      "Libro del Edificio → usuarios finales",
    ],
  },

  E2: {
    intro:
      "El Real Decreto 314/2006, de 17 de marzo, aprueba el Código Técnico de la Edificación (CTE), marco normativo que desarrolla la LOE y establece las exigencias básicas de calidad que deben cumplir los edificios en materia de seguridad y habitabilidad.",
    bloques: [
      {
        h: "Estructura y objeto del CTE (arts. 1-3 Parte I)",
        items: [
          "Objeto (art. 1): marco normativo de exigencias básicas de calidad para satisfacer los requisitos básicos de seguridad y habitabilidad de la LOE",
          "Dos partes: Parte I (disposiciones generales + exigencias básicas) y Parte II (Documentos Básicos — DB)",
          "Los DB contienen: caracterización y cuantificación de las exigencias básicas + procedimientos de verificación (métodos y soluciones sancionadas por la práctica)",
          "Ámbito (art. 2): se aplica a obras que precisan licencia; excepción: sencillez técnica + sin carácter residencial/público + 1 planta + sin afectar seguridad",
          "En rehabilitación: se aplica cuando sea compatible con la naturaleza e intervención y el grado de protección del edificio",
        ],
      },
      {
        h: "Documentos Reconocidos y Registro General (art. 4)",
        items: [
          "Documentos Reconocidos: documentos técnicos SIN carácter reglamentario, con reconocimiento del Ministerio de Vivienda",
          "Contenido: guías técnicas, métodos de evaluación, programas informáticos, comentarios CTE, etc.",
          "Registro General CTE: adscrito a la Dirección General de Arquitectura y Política de Vivienda; carácter público e informativo",
          "También se inscriben en el Registro: marcas, sellos, certificaciones de conformidad, organismos autorizados para evaluaciones técnicas",
        ],
      },
      {
        h: "Cumplimiento del CTE y condiciones del proyecto (arts. 5-6)",
        items: [
          "Dos vías de cumplimiento (art. 5.3): DB (suficiente) o soluciones alternativas (documentalmente justificadas con prestaciones ≥ DB)",
          "Marcado CE obligatorio para productos de construcción incorporados con carácter permanente (art. 5.2.1)",
          "Proyecto básico (art. 6.3.a): suficiente para licencia → insuficiente para construir; debe definir prestaciones sin impedir cumplimiento del CTE",
          "Proyecto de ejecución (art. 6.3.b): no puede rebajar prestaciones del básico ni alterar usos/condiciones de la licencia (salvo aspectos legalizables)",
          "Contenido mínimo del proyecto básico: documentos marcados con asterisco (*) en el Anejo I",
        ],
      },
      {
        h: "Condiciones de ejecución y del edificio (arts. 7-8)",
        items: [
          "Control de recepción de productos (art. 7.2): a) documentación de suministros, b) distintivos de calidad/evaluaciones de idoneidad, c) ensayos",
          "Control de ejecución (art. 7.3): el DEO controla replanteo, materiales, ejecución y disposición de elementos constructivos e instalaciones",
          "Control de obra terminada (art. 7.4): comprobaciones y pruebas de servicio previstas en el proyecto o por la DF",
          "Libro del Edificio (art. 8.1): documentación del art. 7.2 + instrucciones de uso y mantenimiento + plan de mantenimiento",
          "Plan de mantenimiento (art. 8.2): planificación de operaciones programadas, encomendadas a técnico competente; documentar intervenciones en el Libro del Edificio",
        ],
      },
      {
        h: "Exigencias básicas del CTE (arts. 10-15)",
        items: [
          "SE (Seguridad Estructural): SE1 resistencia y estabilidad · SE2 aptitud al servicio (sin deformaciones ni degradaciones inadmisibles)",
          "SI (Seguridad en caso de Incendio): SI1 propagación interior · SI2 propagación exterior · SI3 evacuación · SI4 instalaciones PCI · SI5 intervención bomberos · SI6 resistencia estructural",
          "SU (Seguridad de Utilización): SU1 caídas · SU2 impacto/atrapamiento · SU3 aprisionamiento · SU4 iluminación · SU5 alta ocupación · SU6 ahogamiento · SU7 vehículos · SU8 rayo",
          "HS (Salubridad): HS1 humedad · HS2 residuos · HS3 calidad aire interior · HS4 suministro agua · HS5 evacuación aguas",
          "HR (Protección frente al ruido): limitar ruido aéreo, impactos, vibraciones e instalaciones",
          "HE (Ahorro de energía): HE1 demanda energética · HE2 instalaciones térmicas (RITE) · HE3 iluminación · HE4 solar ACS · HE5 fotovoltaica",
        ],
      },
      {
        h: "Disposición Transitoria Primera",
        items: [
          "El CTE NO se aplica a obras con licencia ya solicitada a la entrada en vigor del RD 314/2006",
          "Períodos transitorios: 6 meses para DB-SI, DB-SU y DB-HE 1; 12 meses para DB-SE y sus subdocumentos y DB-HS",
          "Las obras autorizadas en período transitorio deben comenzar en 3 meses desde la concesión; si no, deben adaptarse al CTE",
        ],
      },
    ],
    claves: [
      "RD 314/2006 de 17 de marzo — CTE aprobado",
      "CTE: 2 partes (Parte I disposiciones generales + Parte II DB); DB: carácter reglamentario",
      "Documentos Reconocidos: sin carácter reglamentario; inscritos en Registro General CTE",
      "Excepción ámbito CTE: sencillez técnica + sin residencial/público + 1 planta + sin riesgo seguridad",
      "Proyecto básico: suficiente para licencia, insuficiente para construir",
      "2 vías cumplimiento: DB (suficiente) o soluciones alternativas (prestaciones equivalentes justificadas)",
      "Control recepción obras: documentación + distintivos calidad + ensayos",
      "HE: 5 exigencias (HE1 a HE5); SI: 6 exigencias (SI1 a SI6); SU: 8 exigencias",
      "Transitoria 1ª: CTE no aplica a obras con licencia solicitada antes de su entrada en vigor",
    ],
  },

  E3: {
    intro:
      "El Documento Básico DB-SI (Seguridad en caso de Incendio) del CTE establece las reglas y procedimientos para cumplir las exigencias básicas SI 1 a SI 6. Su versión consolidada más reciente incorpora las modificaciones del RD 164/2025, de 4 de marzo.",
    bloques: [
      {
        h: "SI 1 — Compartimentación en sectores de incendio",
        items: [
          "Las superficies máximas pueden DUPLICARSE cuando el sector esté protegido con instalación automática de extinción",
          "Residencial Vivienda: máx. 2.500 m²; elementos entre viviendas: mín. EI 60",
          "Administrativo: máx. 2.500 m²",
          "Docente (>1 planta): máx. 4.000 m²; 1 planta: sin compartimentar",
          "Hospitalario (zonas hospitalización): máx. 1.500 m² / sector; mín. 2 sectores por planta",
          "Pública Concurrencia: máx. 2.500 m² (con excepciones para espacios de pública concurrencia con asientos fijos)",
          "Comercial: máx. 2.500 m² (10.000 m² si edificio exento + extinción + h evacuación ≤ 10 m)",
          "Aparcamiento: sector diferenciado obligatorio; vestíbulo de independencia en toda comunicación con otro uso",
        ],
      },
      {
        h: "SI 1 — Resistencia al fuego de elementos separadores (tabla 1.2)",
        items: [
          "Residencial Vivienda / Administrativo: h≤15m → EI 60; 15m<h≤28m → EI 90; h>28m → EI 120",
          "Comercial / Pública Concurrencia / Hospitalario: h≤15m → EI 90; 15<h≤28m → EI 120; h>28m → EI 180",
          "Aparcamiento: EI 120 en todos los casos (EI 180 si robotizado)",
          "Plantas bajo rasante (uso Res. Viv., Adm.): EI 120; bajo rasante Comercial/PC/Hosp.: EI 120 (o 180 si h>28m)",
          "Puertas entre sectores: EI2 t-C5 (t = mitad resistencia de la pared) o EI2 t/4-C5 si paso por vestíbulo de independencia con 2 puertas",
        ],
      },
      {
        h: "SI 1 — Locales y zonas de riesgo especial (tablas 2.1 y 2.2)",
        items: [
          "Clasificación: riesgo bajo / medio / alto según volumen, superficie o carga de fuego según el tipo de local",
          "Ejemplos: cocina P>50 kW = riesgo alto; 30<P≤50 kW = medio; 20<P≤30 kW = bajo",
          "Sala de calderas: >600 kW = alto; 200-600 kW = medio; 70-200 kW = bajo",
          "Condiciones (tabla 2.2): R estructura (R90/R120/R180), EI paredes (EI90/EI120/EI180), vestíbulo independencia (no/sí/sí), puertas (EI2 45-C5 / 2xEI2 30-C5 / 2xEI2 45-C5), recorrido ≤25 m",
        ],
      },
      {
        h: "SI 1 — Reacción al fuego de elementos constructivos (tabla 4.1)",
        items: [
          "Zonas ocupables (techos y paredes): C-s2,d0; suelos: EFL",
          "Pasillos y escaleras protegidos (techos y paredes): B-s1,d0; suelos: CFL-s1",
          "Aparcamientos y recintos de riesgo especial (techos y paredes): B-s1,d0; suelos: BFL-s1",
          "Espacios ocultos no estancos (patinillos, falsos techos…): B-s3,d0; BFL-s2",
          "Solo aplica cuando el revestimiento supere el 5% de la superficie total del conjunto de techos, paredes o suelos del recinto",
        ],
      },
      {
        h: "SI 2 — Propagación exterior",
        items: [
          "Medianerías: elementos verticales separadores de otro edificio → mín. EI 120",
          "Propagación horizontal entre sectores: puntos de fachada no EI 60 separados distancia d según ángulo α (enfrentadas paralelas α=0° → d≥3,00 m; α=180° → d≥0,50 m)",
          "Propagación vertical: franja EI 60 de 1 m altura sobre el plano de fachada (puede reducirse en la dimensión del saliente si existe elemento saliente)",
          "Reacción fachada (>10% superficie): D-s3,d0 (h≤10m) · C-s3,d0 (h≤18m) · B-s3,d0 (h>18m)",
          "Cámaras ventiladas: D-s3,d0 (h≤10m) · B-s3,d0 (h≤28m) · A2-s3,d0 (h>28m)",
          "Cubierta: REI 60 en franja de 0,50 m desde edificio colindante y 1,00 m sobre elemento compartimentador (alternativa: prolongar 0,60 m por encima de la cubierta)",
        ],
      },
      {
        h: "SI 3 — Evacuación de ocupantes",
        items: [
          "Densidades de ocupación clave (m²/persona): vivienda 20 · hospitalización 15 · servicios ambulatorios 10 · oficinas 10 · aulas 1,5 · espectadores sentados sin asiento def. 0,5 · espectadores de pie 0,25",
          "Cálculo: superficie útil ÷ densidad de ocupación = número de personas",
          "Número de salidas: con 1 sola salida, máximo 50 ocupantes (con excepciones por uso); si >50 ocupantes → ≥2 salidas",
          "Longitud recorrido con 1 salida: ≤25 m en general (50 m en sectores de riesgo mínimo o si >50% ocupantes tiene otra salida; excepciones en plantas sobre rasante baja ocupación)",
          "Puertas en recorrido de evacuación: apertura en sentido evacuación si ocupación ≥50 personas",
          "Señalización: señales visibles desde todo punto del recorrido",
        ],
      },
      {
        h: "SI 4-SI 6 — Instalaciones PCI, Bomberos y Estructura",
        items: [
          "SI 4: dotación de instalaciones (BIE, detección, alarma, extinción automática, etc.) según uso y superficie",
          "SI 5: viales de aproximación (anchura ≥3,5 m, altura libre ≥4,5 m, capacidad portante ≥20 kN/m²); entorno edificios de h>9 m: espacio para vehículo escalera (aprox. 5 m libres fachada accesible)",
          "SI 6: resistencia al fuego de la estructura durante el tiempo necesario para evacuar y que actúen los bomberos; valores R según uso y altura del edificio",
        ],
      },
    ],
    claves: [
      "Superficie sectores: Vivienda 2.500 m² · Administrativo 2.500 m² · Docente 4.000 m² · Hospitalario 1.500 m² · Comercial 2.500 m²",
      "Duplicar superficie sector: instalación automática de extinción",
      "Puertas entre sectores: EI2 t-C5 (t = mitad resistencia pared); por vestíbulo: t = cuarta parte",
      "Medianerías entre edificios: EI 120",
      "Franja vertical propagación fachada: 1 m de EI 60",
      "Reacción al fuego zonas ocupables: techos/paredes C-s2,d0 · escaleras protegidas B-s1,d0",
      "Riesgo especial alto: R 180 estructura · EI 180 paredes · 2×EI2 45-C5 puertas",
      "Densidades ocupación: vivienda 20 · hospitalización 15 · oficinas 10 · aulas 1,5",
      "Reacción fachada >18 m: B-s3,d0; cámara ventilada >28 m: A2-s3,d0",
    ],
  },

  "E5": {
    intro: "El RD 164/2025 aprueba el nuevo Reglamento de Seguridad contra Incendios en Establecimientos Industriales (RSCIEI), que regula la protección frente a incendios en uso industrial: prevención, detección, propagación y extinción.",
    bloques: [
      { h: "Objeto y ámbito (Arts. 1–2)", items: [
        "Uso industrial: actividades Ley 21/1992 art. 3.1, almacenes industriales, talleres reparación vehículos y servicios auxiliares.",
        "Almacén logístico es establecimiento industrial si QT ≥ 3.000.000 MJ.",
        "Exclusiones: nucleares/radiactivos, extracción minerales, actividades agrarias/ganaderas, instalaciones militares, instalaciones servicio ferroviario (art. 42.1 Ley 38/2015).",
        "Si existen otras normas sectoriales específicas, el RSCIEI se aplica solo con carácter complementario.",
      ]},
      { h: "Definiciones clave (Art. 3)", items: [
        "Protección pasiva: derivada de los requisitos constructivos (prevenir, impedir/retrasar propagación, facilitar extinción y evacuación).",
        "Protección activa: medios, equipos y sistemas (manuales o automáticos) que actúan directamente en detección, control o extinción.",
        "Técnicas de seguridad equivalente: soluciones que difieren de las prescripciones pero ofrecen igual o mayor nivel de seguridad.",
        "Diseño prestacional: soluciones específicas para un emplazamiento concreto, siguiendo UNE-ISO 23932 y UNE-ISO 16733-1.",
        "Modificaciones significativas: aumento de superficie o de NRI, o cualquier cambio que comprometa las exigencias básicas.",
      ]},
      { h: "Compatibilidad reglamentaria (Art. 4)", items: [
        "Usos subsidiarios dentro del establecimiento industrial deben cumplir DB-SI cuando superen: 250 m² (administrativo, comercial, docente, pública concurrencia, alojamiento) o 100 m² (aparcamiento).",
        "Residencial Vivienda y Residencial Público: siempre deben cumplir DB-SI, sin umbral de superficie.",
        "Estas zonas deben constituir un sector de incendio independiente del sector industrial.",
      ]},
      { h: "Cumplimiento y exenciones (Art. 5)", items: [
        "Exención casi total: Qs ≤ 42 MJ/m² y superficie ≤ 120 m² en recinto propio → solo deben cumplir art. 12 (mantenimiento) + extintores y alumbrado de emergencia del Anexo III, más memoria técnica.",
        "Técnicas de seguridad equivalente o diseño prestacional (art. 5.1.b): bajo responsabilidad del proyectista, con informe de organismo de control.",
        "Adaptaciones razonables en edificios existentes (art. 5.3): con informe previo de organismo de control.",
      ]},
      { h: "Exigencias básicas (Art. 6)", items: [
        "(a) Propagación interior · (b) Propagación exterior · (c) Evacuación de ocupantes.",
        "(d) Instalaciones de PCI · (e) Intervención Servicios de Extinción e Intervención · (f) Resistencia estructural al incendio.",
      ]},
      { h: "Proyecto y puesta en servicio (Arts. 10–11)", items: [
        "Proyecto puede sustituirse por memoria técnica si: sup < 300 m² + todos sectores riesgo intrínseco bajo + no aplican arts. 10.3 ni 5.3.",
        "Puesta en servicio: comunicación ante órgano competente de industria de la CCAA, con proyecto/memoria + certificado técnico.",
        "Acta de inspección inicial de organismo de control (OC): obligatoria si sup de sectores de riesgo medio y alto ≥ 1.000 m², o si aplican arts. 10.3 o 5.3.",
      ]},
      { h: "Configuraciones – Anexo I", items: [
        "Tipo A (AV/AH): el establecimiento ocupa parcialmente un edificio con otros establecimientos. AV = separación vertical; AH = separación horizontal. Mezcla → AV.",
        "Tipo B: ocupa totalmente un edificio con estructura independiente, adyacente o a ≤ 3 m de otros.",
        "Tipo C: ocupa totalmente edificios a más de 3 m de otros (distancia libre de combustibles).",
        "Tipo D: espacio abierto. Si cubierto, requiere apertura lateral L ≥ 25% (A < 500 m², H < 5 m) hasta L ≥ 70% (A > 1.500 m², H ≥ 5 m).",
      ]},
      { h: "Nivel de riesgo intrínseco (NRI) – Tabla 1.3.1", items: [
        "BAJO 1: Qs ≤ 425 MJ/m² · BAJO 2: 425 < Qs ≤ 850 MJ/m²",
        "MEDIO 3: ≤ 1.275 · MEDIO 4: ≤ 1.700 · MEDIO 5: ≤ 3.400 (MJ/m²)",
        "ALTO 6: ≤ 6.800 · ALTO 7: ≤ 13.600 · ALTO 8: > 13.600 (MJ/m²)",
        "Coeficiente Ci (tabla 1.3.2): 1,60 (grado 1) / 1,40 / 1,20 / 1,00 / 1,00. Si fumígeno: Ci × 1,20 (máx 1,92).",
      ]},
    ],
    claves: [
      "Exención RSCIEI: Qs ≤ 42 MJ/m² + superficie ≤ 120 m² (solo extintores + emergencia + mantenimiento)",
      "Memoria técnica sustituye al proyecto: sup < 300 m² + todos riesgo bajo + sin arts. 10.3/5.3",
      "Acta OC obligatoria: superficie riesgo medio + alto ≥ 1.000 m² (o aplican arts. 10.3/5.3)",
      "Tipo A (parcial edificio) · B (total, ≤3 m) · C (total, >3 m) · D (espacio abierto)",
      "NRI: Bajo 1–2 (Qs ≤ 850) · Medio 3–5 (Qs ≤ 3.400) · Alto 6–8 (Qs > 3.400) – MJ/m²",
      "Ci máx: 1,60 (grado 1 no fumígeno) / 1,92 (grado 1 fumígeno)",
      "Uso subsidiario → DB-SI si > 250 m² (adm./com./docente...) o > 100 m² (aparcamiento) o SIEMPRE (residencial vivienda)",
    ],
  },

  "E6": {
    intro: "El DB-SUA (Seguridad de Utilización y Accesibilidad) del CTE, aprobado por RD 314/2006 y con última modificación en 2022 (RD 450/2022), regula 9 exigencias básicas: caídas, impacto/atrapamiento, aprisionamiento, iluminación, alta ocupación, ahogamiento, vehículos en movimiento, rayo y accesibilidad.",
    bloques: [
      { h: "SUA 1 – Suelos y desniveles", items: [
        "Clases de suelos según Rd (péndulo UNE 41901): clase 1 (15 < Rd ≤ 35) · clase 2 (35 < Rd ≤ 45) · clase 3 (Rd > 45).",
        "Tabla 1.2: interior seco <6% → clase 1; interior seco ≥6% o escaleras → clase 2; interior húmedo → clase 2/3; exterior / piscinas / duchas → clase 3.",
        "Discontinuidades: resalto máx. 4 mm; elemento saliente puntual máx. 12 mm; desniveles ≤ 5 cm → pendiente máx. 25%.",
        "Barrera de protección obligatoria si diferencia de cota > 55 cm. En zonas públicas: señalización visual y táctil desde 25 cm del borde si dif ≤ 55 cm.",
      ]},
      { h: "SUA 1 – Barreras de protección", items: [
        "Altura mínima: ≥ 0,90 m (diferencia de cota ≤ 6 m) o ≥ 1,10 m (diferencia de cota > 6 m). Excepción: hueco escalera ancho < 40 cm → 0,90 m.",
        "En Residencial Vivienda y escuelas infantiles: no escalables (sin apoyos 30–50 cm sobre suelo), sin aberturas ≥ 10 cm. En uso público (resto): sin aberturas ≥ 15 cm.",
        "Frente a filas de asientos fijos: puede reducirse a 70 cm con elemento horizontal de 50 cm a 50 cm de altura.",
      ]},
      { h: "SUA 1 – Escaleras", items: [
        "Uso restringido: ancho ≥ 0,80 m · contrahuella ≤ 20 cm · huella ≥ 22 cm.",
        "Uso general: huella ≥ 28 cm (tramos rectos) · contrahuella 13–18,5 cm (máx. 17,5 sin ascensor o en uso público) · 54 ≤ 2C+H ≤ 70 cm.",
        "Tramos: mín. 3 peldaños · altura máx. 2,25 m en uso público (3,20 m resto) · anchura libre según tabla 4.1 (mín. 0,80 m escalera uso general).",
        "Pasamanos: si dif > 55 cm · en ambos lados si ancho libre > 1,20 m o sin ascensor alternativo · altura 90–110 cm.",
      ]},
      { h: "SUA 1 – Rampas", items: [
        "Pendiente máx.: 12% general · itinerario accesible: ≤ 10% (<3 m), ≤ 8% (<6 m), ≤ 6% (resto) · aparcamiento vehículos: ≤ 16%.",
        "Pendiente transversal accesible: máx. 2%.",
        "Tramos: máx. 15 m (9 m si accesible) · anchura libre igual que escaleras (tabla 4.1).",
        "Mesetas: ≥ anchura de rampa y longitud ≥ 1,50 m (entre tramos misma dirección).",
      ]},
      { h: "SUA 2 – Impacto y atrapamiento · SUA 3 – Aprisionamiento", items: [
        "SUA 2: altura libre ≥ 2,20 m zonas generales (2,10 m restringidas); umbrales puertas ≥ 2,00 m.",
        "Vidrios en áreas de riesgo: clasificación X(Y)Z según UNE-EN 12600; zona de riesgo en puertas hasta 1,50 m altura y 0,30 m a cada lado.",
        "Puertas correderas: distancia al objeto fijo más próximo ≥ 20 cm.",
        "SUA 3: fuerza apertura puertas de salida ≤ 140 N general; ≤ 25 N itinerario accesible; ≤ 65 N si RF en itinerario accesible.",
      ]},
      { h: "SUA 4 – Iluminación", items: [
        "Alumbrado normal: ≥ 100 lux interiores · ≥ 20 lux exteriores · ≥ 50 lux aparcamientos; uniformidad media ≥ 40%.",
        "Alumbrado de emergencia: entra en funcionamiento automáticamente cuando la tensión baja del 70% del valor nominal.",
        "50% de iluminación a los 5 s; 100% a los 60 s; duración mínima 1 hora.",
        "En vías evacuación ≤ 2 m de ancho: ≥ 1 lux en eje central; en equipos de seguridad: ≥ 5 lux; índice Ra ≥ 40.",
      ]},
      { h: "SUA 5–6–7–8", items: [
        "SUA 5 (alta ocupación): aplicable a graderíos previstos para > 3.000 espectadores de pie. Pendiente graderío ≤ 50%; barreras si > 5 filas y pendiente > 6%.",
        "SUA 6 (ahogamiento): piscina infantil máx. 50 cm de profundidad; andén ≥ 1,20 m; escaleras cada ≤ 15 m hasta 1 m bajo el agua.",
        "SUA 7 (vehículos): espacio acceso/espera aparcamiento ≥ 4,5 m; señalización vel. máx. 20 km/h.",
        "SUA 8 (rayo): sistema obligatorio si Ne > Na; SIEMPRE si sustancias peligrosas o altura > 43 m (eficiencia E ≥ 0,98, nivel 1); E = 1 − Na/Ne.",
      ]},
      { h: "SUA 9 – Accesibilidad", items: [
        "Itinerario accesible al exterior del edificio (parcela → entrada principal).",
        "Residencial Vivienda: ascensor accesible si > 2 plantas desde entrada accesible o > 12 viviendas en plantas sin entrada accesible.",
        "Otros usos: ascensor accesible si > 2 plantas desde entrada accesible o > 200 m² útiles en plantas sin acceso accesible.",
        "Plantas con zonas públicas > 100 m² útiles o elementos accesibles: ascensor accesible.",
      ]},
    ],
    claves: [
      "Suelos: clase 1 (interior seco <6%) · clase 2 (húmedo o seco ≥6%) · clase 3 (exterior/piscinas/duchas)",
      "Barrera protección: dif. cota > 55 cm → h ≥ 0,90 m (dif ≤ 6 m) / h ≥ 1,10 m (dif > 6 m)",
      "Escalera general: H ≥ 28 cm · C 13–18,5 cm · 54 ≤ 2C+H ≤ 70 cm · tramo máx. 2,25 m (uso público)",
      "Rampa accesible: ≤ 10% (<3 m) · ≤ 8% (<6 m) · ≤ 6% (resto); tramo ≤ 9 m; meseta ≥ 1,50 m",
      "Emergencia: ≥ 1 h · ≥ 1 lux eje vía (≤2 m) · 5 lux en equipos · 50% a 5 s · 100% a 60 s",
      "Pararrayos SIEMPRE (E ≥ 0,98): sustancias peligrosas o altura > 43 m",
      "Fuerza apertura: 140 N general · 25 N itinerario accesible · 65 N RF en itinerario accesible",
    ],
  },

  "E7": {
    intro: "El Documento de Apoyo DA DB-SUA/2 (versión 29/06/2018) establece criterios de flexibilidad para la adecuación efectiva de las condiciones de accesibilidad en edificios existentes, cuya solicitud de licencia fue anterior al 12 de septiembre de 2010.",
    bloques: [
      { h: "Objeto y criterios de aplicación (Aptos. 1–2)", items: [
        "Edificio existente = licencia de obras anterior al 12/09/2010 (Disposición transitoria 3ª RD 173/2010).",
        "Tabla 1: condiciones básicas de accesibilidad del DB-SUA y DB-SI que se deben respetar.",
        "Tabla 2: tolerancias admisibles para determinadas condiciones, en especial para usuarios de silla de ruedas.",
        "Si no es viable alcanzar ni las tolerancias de la tabla 2, el proyectista puede aplicar otras medidas bajo su responsabilidad para lograr la mayor adecuación posible.",
      ]},
      { h: "Tolerancias SUA 1 – Tabla 2", items: [
        "Discontinuidades en accesos: desniveles ≤ 5 cm salvados con pendiente ≤ 25%.",
        "Rampa accesible: ≤ 12% (longitud ≤ 3 m) · ≤ 10% (≤ 10 m) · ≤ 8% (≤ 15 m) · ≤ 6% (sin límite).",
        "Anchura libre de paso: ≥ 0,90 m en tramos rectos y entre pasamanos.",
        "Mesetas intermedias: ≥ 1,20 m de longitud (obra nueva: 1,50 m); meseta cambio dirección ≥ 1,20 m.",
        "Pasamanos: puede arrancar con el peldaño si la prolongación interfiere la circulación.",
      ]},
      { h: "Tolerancias SUA 9 – Tabla 2", items: [
        "Itinerario accesible: puede comunicar con una entrada que no sea la principal (si es de uso frecuente, de longitud similar y debidamente señalizada).",
        "Espacio de giro: diámetro admisible ≥ 1,20 m (deseable 1,50 m; por debajo de 1,20 m no garantiza uso autónomo).",
        "Aseos privados exclusivos de trabajadores: exentos de ser accesibles si sup. privada ≤ 100 m² y número de trabajadores ≤ 10.",
        "Alojamientos accesibles: establecimientos con < 10 alojamientos admitidos sin alojamiento accesible para silla de ruedas.",
      ]},
      { h: "Anejo A – Accesos y pequeños desniveles", items: [
        "Orden de preferencia: (1) solución a nivel (traslado acceso), (2) rampa, (3) plataforma elevadora vertical, (4) plataforma elevadora inclinada. Siempre escalera como alternativa al recorrido mecánico.",
        "Orugas motorizadas y sillas salvaescaleras NO son adecuación efectiva (no permiten uso autónomo).",
        "Rampas móviles y tapices: facilitadores de movilidad, no soluciones de accesibilidad.",
      ]},
      { h: "Anejo A.2 – Plataformas elevadoras verticales (UNE-EN 81-41)", items: [
        "Con puertas adyacentes (para silla A o B + acompañante): 125×125 o 110×140 cm; carga ≥ 385 kg.",
        "Con una puerta o dos enfrentadas (sin acompañante, silla tipo A): 80×125 cm; (con acompañante, tipo A/B): 90×140 cm.",
        "Carga mínima: 250 kg/m². No son 'ascensor accesible' aunque la reglamentación las denomine ascensor.",
        "Espacio deseable delante: giro de 1,50 m; mínimo viable: 1,20 m.",
      ]},
      { h: "Anejo A.3 – Plataformas elevadoras inclinadas / salvaescaleras (UNE-EN 81-40)", items: [
        "Dimensiones: 70×90 cm (silla tipo A) o 75×100 cm (tipo A o B); carga ≥ 225–250 kg.",
        "Solo para personas instruidas o con supervisión y asistencia; controles con llave para evitar uso no autorizado.",
        "En posición desplegada: espacio libre ≥ 60 cm para no impedir el uso seguro de la escalera (excepciones con recorrido alternativo o ≤ 8 peldaños).",
        "NO aptas para evacuación de emergencia del edificio.",
      ]},
      { h: "Anejo B – Instalación de ascensores en edificios existentes", items: [
        "Cabina mínima para usuario de silla de ruedas: 90×120 cm (puerta única o dos enfrentadas) · 125×125 cm o 120×140 cm (puertas adyacentes).",
        "Anchura mínima de paso de puerta: 80 cm (UNE-EN 81-70 §5.2.1).",
        "Reducción anchura escalera para instalar ascensor: mínimo 0,80 m y ≥ P/160 (evacuación descendente); ≥ P/(160−10h) (evacuación ascendente). Requieren medidas compensatorias.",
        "Si escalera sirve ≤ 8 viviendas y h ≤ 14 m: admitida escalera de uso restringido (huella mín 25 cm).",
      ]},
      { h: "Anejo C – Servicios higiénicos accesibles", items: [
        "Local de reducidas dimensiones: sup. pública ≤ 100 m² + ocupación ≤ 50 personas.",
        "Soluciones admisibles en locales pequeños: aseo unisex único, aseos compartidos personal y público, suficiencia de aseos accesibles en zonas comunes del centro comercial (recorrido ≤ 50 m).",
        "Espacio de maniobra de 1,50 m deseable; se admite 1,20 m si no es posible.",
        "Si no es viable cabina accesible para silla de ruedas: al menos una barra vertical de sujeción junto al inodoro.",
      ]},
    ],
    claves: [
      "Edificio existente = licencia anterior a 12/09/2010 (RD 173/2010, Disposición transitoria 3ª)",
      "Rampa edificio existente: 12% (≤3 m) · 10% (≤10 m) · 8% (≤15 m) · 6% sin límite",
      "Plataforma vertical: 125×125 o 110×140 cm (puertas adjuntas) · 80×125 o 90×140 cm (puertas frontales)",
      "Plataforma inclinada: solo personas instruidas · no apta para evacuación · espacio libre ≥ 60 cm en escalera",
      "Cabina ascensor mín.: 90×120 cm (puerta frontal) · anchura paso puerta ≥ 80 cm",
      "Escalera reducible hasta 0,80 m (y ≥ P/160) para instalar ascensor – con medidas compensatorias",
      "Local reducidas dimensiones: sup. pública ≤ 100 m² + ocupación ≤ 50 personas",
    ],
  },

  "E8": {
    intro: "El CTE DB-HE (Ahorro de Energía), actualizado por RD 450/2022, establece en seis secciones (HE0–HE6) las exigencias de eficiencia energética y uso de energías renovables para edificios de nueva construcción e intervenciones en existentes.",
    bloques: [
      { h: "HE0 – Limitación del consumo energético", items: [
        "Parámetros: Cep,nren (energía primaria no renovable) y Cep,tot (energía primaria total)",
        "Zonas climáticas de invierno α, A, B, C, D, E — valores residencial nueva construcción: α=20 · A=25 · B=28 · C=32 · D=38 · E=43 kWh/m²·año",
        "Intervenciones en existentes ≈ el doble de los valores de nueva construcción",
        "Territorios extrapeninsulares (Canarias, Ceuta, Melilla): valores × 1,25",
        "Sistema de referencia para demostrar cumplimiento por comparación con edificio de referencia",
      ]},
      { h: "HE1 – Control de la demanda energética (envolvente)", items: [
        "Ulim muros y suelos (W/m²K): α=0,80 · A=0,70 · B=0,56 · C=0,49 · D=0,41 · E=0,37",
        "Ulim cubiertas (W/m²K): α=0,55 · A=0,50 · B=0,44 · C=0,40 · D=0,35 · E=0,33",
        "Ulim huecos (W/m²K): A=3,2 · B=2,7 · C=2,3 · D=2,1 · E=1,80",
        "qsol;jul,lim (control solar julio): 2,00 kWh/m²·mes residencial · 4,00 otros usos",
        "Permeabilidad Q100 ventanas: α/A/B ≤ 27 m³/h·m² · C/D/E ≤ 9 m³/h·m²",
        "n50 estanquidad (residencial nueva >120 m²): V/A ≤ 2 → 6 h⁻¹ · V/A ≥ 4 → 3 h⁻¹ (interpolación lineal)",
      ]},
      { h: "HE2 – Rendimiento instalaciones térmicas", items: [
        "Remite al Reglamento de Instalaciones Térmicas en los Edificios (RITE, RD 1027/2007)",
      ]},
      { h: "HE3 – Condiciones de las instalaciones de iluminación", items: [
        "VEEI (W/m² por 100 lux): Administrativo=3,0 · Almacenes/aparcamientos=4,0 · Centros comerciales=6,0 · Hostelería/restauración=8,0 · Habitaciones hotel=10,0 · Locales >600 lux=2,5",
        "Potencia máxima instalada: aparcamiento ≤600 lux → 5 W/m² · >600 lux → 10 W/m² · Otros usos → 25 W/m²",
        "Control obligatorio: encendido manual exterior + encendido por horario centralizado",
        "Zonas esporádicas (aseos, escaleras): el horario puede sustituirse por detección de presencia o pulsador temporizador",
        "Luz natural: obligatoria cuando T·(Aw/A) > 0,11 + condición geométrica (θ>65°, ai>2hi o ai>2hi/Tc)",
      ]},
      { h: "HE4 – Contribución mínima renovable para ACS", items: [
        "Ámbito: nueva construcción con ACS >100 l/d · reforma integral o cambio de uso con ACS >100 l/d",
        "Contribución mínima: ≥70% de la demanda energética anual para ACS",
        "Reducción al 60% si la demanda de ACS es inferior a 5.000 l/d",
        "Bombas de calor ACS: SCOPdhw ≥ 2,5 (eléctricas) o ≥ 1,15 (térmicas) · temp. preparación ≥ 45°C",
      ]},
      { h: "HE5 – Generación mínima de electricidad renovable", items: [
        "Ámbito: edificios nueva construcción >1.000 m² · ampliaciones >1.000 m² · reformas íntegras >1.000 m²",
        "Pmin = mínimo de: P1 = Fpr;el × S (Fpr;el: 0,005 residencial · 0,010 otros usos) y P2 = 0,1 × (0,5·Sc – Soc)",
        "Si no se puede alcanzar Pmin por razones urbanísticas o de protección, se justifica y se maximiza",
      ]},
      { h: "HE6 – Infraestructura de recarga de vehículos eléctricos", items: [
        "Ámbito: nueva construcción con aparcamiento · existentes en cambio de uso/ampliación/reforma (condiciones específicas)",
        "Exclusiones: no residencial ≤10 plazas · existentes ≤20 plazas si el coste supera el 7% de la intervención",
        "Residencial privado: conducción de cables para el 100% de las plazas",
        "No residencial: conducción para ≥20% de plazas + 1 estación/40 plazas (AGE: 1/20 plazas) · accesibles: 1 estación/5 plazas",
      ]},
    ],
    claves: [
      "HE0 zona C nueva residencial: 32 kWh/m²·año (no renovable) · extrapeninsular ×1,25",
      "HE1 Ulim muros C: 0,49 · cubiertas B: 0,44 · huecos D: 2,1 W/m²K",
      "HE1 qsol;jul residencial: 2,00 kWh/m²·mes · Q100 zona C: ≤9 m³/h·m²",
      "HE3 VEEI hostelería: 8,0 · zonas esporádicas → presencia o temporizador · luz natural si T(Aw/A)>0,11",
      "HE4 renovable ACS: ≥70% (60% si <5000 l/d) · SCOPdhw bomba calor eléctrica ≥2,5",
      "HE5 ámbito >1.000 m² · Fpr;el: 0,005 residencial / 0,010 otros",
      "HE6 residencial: conducción 100% · no residencial: 20% conducción + 1 estación/40 plazas",
    ],
  },

  "E9": {
    intro: "El RITE (RD 1027/2007, modificado) regula las exigencias de eficiencia energética, bienestar e higiene, y seguridad de las instalaciones térmicas en los edificios: climatización (calefacción, refrigeración, ventilación) y producción de ACS.",
    bloques: [
      { h: "Estructura y ámbito (Parte I, Cap. I-II)", items: [
        "Ámbito: instalaciones fijas de climatización y ACS en edificios (nueva construcción y reformas)",
        "Se considera reforma: incorporación/sustitución de subsistemas, ampliación, cambio de energía, cambio de uso",
        "Exigencias técnicas: bienestar e higiene · eficiencia energética y renovables · seguridad (arts. 11-13)",
        "Documentos reconocidos del RITE: documentos técnicos sin carácter reglamentario con reconocimiento ministerial",
      ]},
      { h: "Documentación técnica y condiciones administrativas (Cap. III)", items: [
        "Potencia >70 kW → Proyecto firmado por técnico titulado competente",
        "Potencia ≥5 kW y ≤70 kW → Memoria técnica (instalador habilitado o técnico titulado)",
        "Potencia <5 kW → Sin documentación preceptiva ante la CCAA",
        "Tras pruebas: el instalador habilitado y el director de la instalación suscriben el Certificado de la Instalación",
        "Puesta en servicio: registro del certificado en el órgano competente de la CCAA antes de conectar energía",
      ]},
      { h: "IT 1 – Bienestar e higiene (IT 1.1)", items: [
        "Condiciones interiores diseño (tabla 1.4.1.1): VERANO 23-25°C / HR 45-60% · INVIERNO 21-23°C / HR 40-50%",
        "Temperatura de dimensionamiento: calefacción = 21°C · refrigeración = 25°C",
        "Categorías calidad del aire interior (IDA): IDA1 hospitales/guarderías (20 dm³/s·p) · IDA2 oficinas/aulas (12,5) · IDA3 restaurantes/cines (8) · IDA4 (5)",
        "Piscinas climatizadas: temperatura agua 24-30°C · tolerancia ±1,5°C · humedad local <65% · presión negativa 20-40 Pa",
        "Categorías aire de extracción (AE): AE1 (oficinas) puede retornarse · AE2 solo transferencia a servicios · AE3/AE4 nunca recirculables",
        "AE4 incluye: aparcamientos, campanas de humos, laboratorios químicos, locales de pinturas y solventes",
      ]},
      { h: "IT 1 – Eficiencia energética (IT 1.2)", items: [
        "Procedimiento simplificado (valores límite) o alternativo (consumo calculado equivalente)",
        "Fraccionamiento generadores: potencia >400 kW con combustible líquido/gaseoso → mínimo 2 generadores",
        "Regulación quemadores: modulante para gas · ≤70 kW y combustible líquido puede ser de 1 o 2 marchas",
        "Cargas de cálculo: invierno TS99% · verano TS1% · usos especiales (hospitales): TS99,6% y TS0,4%",
        "Temperatura máxima de entrada a emisores de calefacción: 60°C",
      ]},
      { h: "Mantenimiento, uso e inspección (Cap. VI, IT 3)", items: [
        "5-70 kW: empresa mantenedora según Manual de Uso y Mantenimiento, sin contrato formal obligatorio",
        ">70 kW: contrato de mantenimiento obligatorio con empresa mantenedora habilitada",
        ">5.000 kW calor o >1.000 kW frío (o solar >400 kW): director de mantenimiento técnico titulado competente",
        "Registro de operaciones de mantenimiento: conservar al menos 5 años desde cada actuación",
        "Certificado de mantenimiento anual (cuando hay contrato): enviado al órgano competente de la CCAA",
      ]},
    ],
    claves: [
      "Proyecto si >70 kW · Memoria técnica si 5-70 kW · Sin documentación si <5 kW",
      "Condiciones diseño: verano 23-25°C/45-60%HR · invierno 21-23°C/40-50%HR · dim. refrigeración: 25°C",
      "IDA1=20 dm³/s·p · IDA2=12,5 · IDA3=8 · IDA4=5 · solo AE1 puede retornarse",
      "AE4: aparcamientos, campanas de humos, laboratorios químicos — nunca recirculable",
      "Piscinas climatizadas: agua 24-30°C · aire=agua+1-2°C (máx 30°C) · HR local <65%",
      "Fraccionamiento: >400 kW combustible líquido/gaseoso → ≥2 generadores",
      "Mantenimiento: contrato obligatorio >70 kW · director técnico >5.000 kW calor / >1.000 kW frío · registro 5 años",
    ],
  },

  "E10": {
    intro: "El CTE DB-HS (Salubridad), actualizado por RD 450/2022, establece en seis secciones (HS1–HS6) las condiciones para proteger la salud de los usuarios frente a humedades, residuos, calidad del aire, agua, evacuación y radón.",
    bloques: [
      { h: "HS 1 – Protección frente a la humedad", items: [
        "Ámbito: muros/suelos en contacto con el terreno · fachadas/cubiertas en contacto con el exterior",
        "Presencia de agua: BAJA (cara inf. suelo > nivel freático) · MEDIA (<2 m bajo freático) · ALTA (≥2 m bajo freático)",
        "Grado de impermeabilidad mínimo (tabla 2.1): Ks≤10⁻² + alta → 5 · Ks<10⁻² + media → 3 · baja → 1",
        "Condiciones constructivas (C): C1=hormigón hidrófugo in situ · C2=hormigón fluido · C3=fábrica con mortero hidrófugo",
        "Impermeabilización (I): I1=lámina o líquido · I2=pintura o I1 · I3=revestimiento hidrófugo interior (fábrica)",
        "Drenaje (D): D1=capa drenante+filtrante · D2=pozo drenante c/50 m (diámetro ≥0,7 m, 2 bombas) · D3=tubo drenante en arranque · D4=canaletas cámara",
        "Ventilación cámara (V1): caudal ≥0,7 l/s·m² superficie útil · 50% aberturas inferior + 50% coronación · distancia entre aberturas ≤5 m · relación Ss/Ah: 10<Ss/Ah<30",
        "Encuentros muro-fachada (interior): impermeabilizante >15 cm sobre nivel suelo exterior + banda refuerzo hacia abajo ≥20 cm",
        "Esquinas/rincones: banda de refuerzo ≥15 cm de anchura centrada en la arista",
        "Limitación de condensaciones superficiales e intersticiales: según DB-HE1",
      ]},
      { h: "HS 2 – Recogida y evacuación de residuos", items: [
        "Obligación: espacios y medios para extraer residuos ordinarios de acuerdo con el sistema público de recogida",
        "Facilitar la separación selectiva en origen y la recogida selectiva",
        "Almacén de contenedores de edificio + espacio de reserva + posibles bajantes de residuos",
      ]},
      { h: "HS 3 – Calidad del aire interior", items: [
        "Objetivo: ventilación adecuada, eliminación de contaminantes habituales, caudal suficiente de aire exterior",
        "Evacuación de productos de combustión: con carácter general, por la cubierta del edificio, independientemente del combustible",
        "En viviendas y aparcamientos: cumplimiento de esta sección HS3 · resto de edificios: RITE IT 1.1.4.2",
      ]},
      { h: "HS 4 – Suministro de agua", items: [
        "Agua apta para consumo · caudales suficientes · sin alteración de propiedades · prevención de retornos",
        "Equipos de ACS con acumulación: condiciones para evitar el desarrollo de gérmenes patógenos (Legionella)",
        "Ahorro y control del agua: criterios de diseño, señalización y dispositivos ahorradores",
      ]},
      { h: "HS 5 – Evacuación de aguas", items: [
        "Medios para extraer aguas residuales de forma independiente o conjunta con pluviales y escorrentías",
        "Comprende: aguas fecales (residuales) + aguas pluviales (precipitaciones) + escorrentías de cubierta y exteriores",
      ]},
      { h: "HS 6 – Protección frente al radón (RD 732/2019 + RD 450/2022)", items: [
        "Radón: gas noble radiactivo procedente del terreno que puede acumularse en recintos cerrados",
        "Riesgo variable por municipio según clasificación del potencial de radón del subsuelo",
        "Medidas: barrera de protección · espacio de contención ventilado · despresurización del terreno",
      ]},
    ],
    claves: [
      "HS1 presencia agua: baja=sobre freático · media=0-2m bajo freático · alta=≥2m bajo freático",
      "HS1 grado imp. mínimo: Ks≤10⁻² + alta → 5 · Ks≤10⁻⁵ + alta → 4 · baja → 1",
      "HS1 V1 cámara: ≥0,7 l/s·m² · aberturas 50%inf+50%cor · distancia ≤5 m",
      "HS1 D2 pozos drenantes: c/50 m · diámetro ≥0,7 m · 2 bombas de achique",
      "HS1 encuentro muro-fachada interior: impermeabilizante >15 cm sobre nivel suelo · banda refuerzo ≥20 cm",
      "HS1 esquinas/rincones: banda refuerzo ≥15 cm centrada en arista",
      "HS3 combustión: evacuación general por cubierta · calidad aire en viviendas/aparcamientos → HS3; resto → RITE",
      "DB-HS comprende 6 secciones (HS1-HS6): la 6ª (radón) incorporada por RD 732/2019",
    ],
  },

  "E11": {
    intro: "El CTE DB-SE-AE (Acciones en la Edificación) cuantifica las acciones gravitatorias, climáticas y accidentales sobre los edificios para la verificación de la seguridad estructural. Clasifica las acciones en permanentes (peso propio, pretensado, terreno) y variables (uso, viento, nieve, térmicas, accidentales).",
    bloques: [
      { h: "Sobrecargas de uso (Tabla 3.1)", items: [
        "A1 viviendas: 2 kN/m² uniforme + 2 kN conc.; B oficinas/admin: 2 kN/m²",
        "C3 vestíbulos públicos y salas exposición: 5 kN/m² + 4 kN conc.",
        "C5 aglomeraciones (estadios, discotecas): 5 kN/m² + 4 kN conc.; barandillas: 3,0 kN/m",
        "D1-D2 locales comerciales e hipermercados: 5 kN/m² (D2: conc. 7 kN)",
        "E vehículos ligeros (aparcamiento): 2 kN/m² + 20 kN conc. (0,2×0,2 m)",
        "Tabiquería ordinaria ≤1,2 kN/m²: carga uniforme equivalente; en viviendas: 1,0 kN/m²",
        "Barandillas: C5=3,0 kN/m · C3/C4/E/F=1,6 kN/m · resto=0,8 kN/m",
        "Reducción sobrecargas: ≥5 plantas mismo uso → coef. 0,8; área tributaria ≥100 m² → coef. 0,7",
      ]},
      { h: "Viento", items: [
        "Presión estática: qe = qb · ce · cp",
        "qb simplificado: 0,5 kN/m² en cualquier punto de España",
        "ce en zona urbana hasta 8 plantas: 2,0 (constante, independiente de la altura)",
        "Coeficientes de rozamiento superficial: acero/aluminio=0,01 · rugoso=0,02 · muy rugoso=0,04",
      ]},
      { h: "Temperatura", items: [
        "No considerar acciones térmicas si existen juntas de dilatación ≤40 m en hormigón/acero",
        "Interior protegido (con climatización): temperatura constante de 20°C todo el año",
      ]},
      { h: "Nieve", items: [
        "Valor mínimo en cubiertas planas de pisos con altitud <1.000 m: 1,0 kN/m²",
        "Pamplona/Iruña (450 m): sk = 0,7 kN/m² (zona climática 5)",
        "qn = µ · sk; µ: α≤30° → 1; entre 30° y 60° → interpolación lineal; α≥60° → 0",
        "Limahoyas (semisuma inclinaciones >30°): µ = 2,0",
        "Peso nieve prensada: 2 kN/m³; recién caída: 1,2 kN/m³",
      ]},
      { h: "Acciones accidentales", items: [
        "Sismo: remisión a la NSCE (Norma de Construcción Sismorresistente)",
        "Impacto vehículos ≤30 kN: 50 kN paralelo + 25 kN perp. a la vía; altura 0,6 m sobre rodadura; sup. 0,25×1,5 m",
      ]},
    ],
    claves: [
      "qe = qb · ce · cp; qb simplificado = 0,5 kN/m²; ce urbano ≤8 plantas = 2,0",
      "Viviendas A1: 2 kN/m²; C5 aglomeraciones y C3 vestíbulos: 5 kN/m²",
      "Aparcamiento E: 2 kN/m² + 20 kN conc.",
      "Tabiquería viviendas: 1,0 kN/m²; ordinaria ≤1,2 kN/m²: carga uniforme equiv.",
      "Nieve mín. cubiertas planas <1.000 m alt.: 1,0 kN/m²; Pamplona sk=0,7",
      "Acciones térmicas: no necesarias si juntas dilatación ≤40 m",
      "Impacto vehículos: 50 kN paralelo + 25 kN perp.; altura 0,6 m",
      "Barandillas C5: 3 kN/m; C3-C4-E-F: 1,6 kN/m; resto: 0,8 kN/m",
    ],
  },

  "E12": {
    intro: "El CTE DB-SE-C regula el reconocimiento del terreno (estudio geotécnico), la selección del tipo de cimentación y los criterios de dimensionado para cimentaciones directas y profundas, incluyendo pilotes y micropilotes.",
    bloques: [
      { h: "Clasificación de construcciones (C-0 a C-4)", items: [
        "C-0: <4 plantas y <300 m² · C-1: otras de <4 plantas",
        "C-2: 4-10 plantas · C-3: 11-20 plantas · C-4: singulares o >20 plantas",
        "La clasificación determina las exigencias mínimas del reconocimiento geotécnico",
      ]},
      { h: "Grupos de terreno (T-1 a T-3)", items: [
        "T-1 favorables: poca variabilidad, práctica habitual cimentación directa aislada",
        "T-2 intermedios: variabilidad moderada o singularidades locales",
        "T-3 desfavorables: expansivos, colapsables, blandos, kársticos, rellenos >3 m, desnivel >15°, marismas, susceptibles deslizamientos, volcánicos, residuales",
      ]},
      { h: "Reconocimiento del terreno", items: [
        "Mínimo 3 puntos de reconocimiento con carácter general",
        "Técnicas: calicatas, sondeos mecánicos, ensayos de penetración, ensayos geofísicos",
        "Categorías de muestras: A (inalteradas, para resistencia/deformabilidad) · B (alteradas, clasificación) · C (no cumple B)",
      ]},
      { h: "Cimentaciones directas", items: [
        "Tipos: zapata aislada, combinada, corrida, pozo, emparrillado, losa",
        "Zapata rígida: v ≤ 2h · flexible: v > 2h",
        "Solera de asiento (hormigón de limpieza): espesor mínimo 10 cm",
        "Profundidad habitual: 0,5–0,8 m bajo rasante exterior",
        "Cimentación compensada: peso tierras excavadas ≈ peso edificio → presión neta mínima",
      ]},
      { h: "Cimentaciones profundas (pilotes)", items: [
        "Definición: extremo inferior a profundidad > 8 × diámetro o anchura mínima",
        "Pilotes por fuste ('flotantes'): carga transmitida principalmente por rozamiento lateral",
        "Pilotes por punta ('columna'): apoyo en estrato competente en la punta",
        "Reconocimiento geotécnico para pilotes columna: profundizar ≥5D bajo la punta teórica",
        "Control nivelación obligatorio en C-3 y C-4: ≥10% pilares (mín. 4 ref.) · precisión 0,1 mm · distancia ≤20 m en muros",
      ]},
    ],
    claves: [
      "C-0 (<4 pl. <300 m²) · C-3 (11-20 pl.) · C-4 (>20 pl. o singulares)",
      "T-3: expansivos, colapsables, blandos, kársticos, rellenos>3 m, desnivel>15°, marismas",
      "Mín. 3 puntos reconocimiento; muestras categoría A para resistencia/deformabilidad",
      "Zapata rígida: v ≤ 2h · solera asiento: mín. 10 cm",
      "Cimentación profunda: extremo inferior >8×diámetro",
      "Pilotes flotantes=por fuste; columna=por punta; reconocimiento ≥5D bajo punta",
      "Nivelación obligatoria C-3 y C-4: ≥10% pilares · precisión 0,1 mm",
    ],
  },

  "E13": {
    intro: "La Ley Foral 10/2010 del derecho a la vivienda en Navarra garantiza el acceso a una vivienda digna regulando el régimen de vivienda de protección oficial (VPO) y de precio tasado (VPT): características, acceso, baremo, adjudicación y régimen jurídico.",
    bloques: [
      { h: "Tipos de vivienda protegida (art. 7)", items: [
        "VPO: precio ≤ 1,30 × módulo ponderado · sup. ≤ 90 m² (120 m² fam. numerosas)",
        "VPT: precio ≤ 1,50 × módulo ponderado · sup. ≤ 120 m² (140 m² fam. numerosas)",
        "Arrendamiento VPO: duración mínima 21 años; tras ese plazo puede venderse a precio VPT 1ª transmisión",
      ]},
      { h: "Destino y ocupación (art. 8)", items: [
        "Destino exclusivo: domicilio habitual y permanente del titular",
        "Plazo máximo para ocupar: 6 meses desde calificación definitiva",
        "Habitualidad: ocupación ≥ 9 meses/año (salvo autorización de desocupación temporal)",
      ]},
      { h: "Rentas máximas (art. 10)", items: [
        "Renta VPO: 5,40 €/m²/mes (municipios ≤10.000 hab: 5,10 €/m²)",
        "Garaje VPO: 60 €/mes · Trastero VPO: 2 €/m²/mes",
        "Arrendamiento asequible: 8,25 €/m² · Garaje: 72,47 € · Trastero: 2,41 €/m²",
      ]},
      { h: "Requisitos de acceso (art. 17-18)", items: [
        "7 requisitos: necesidad vivienda · residencia habitual · inscrito en Censo · capacidad económica · no titular vivienda adecuada · no transmitido en 5 años (salvo ingresos <100.000 €) · capacidad legal y empadronado en Navarra",
        "VPO propiedad: ingresos entre 19.000 € y 4,5 × SARA",
        "VPT propiedad: ingresos entre 24.000 € y 6,5 × SARA",
      ]},
      { h: "Reservas y baremo (art. 26-28)", items: [
        "Reservas propiedad: 6% discapacidad (mín. 4% motriz grave) · 3% fam. numerosas · 3% terrorismo · 3% violencia de género",
        "Baremo: 7 ptos/miembro familia (máx. 55) · 10 ptos vivienda inadecuada · 10 ptos Bolsa Alquiler · 5 ptos alquiler privado · 3 ptos/año cuenta ahorro (máx. 15) · 4/8 ptos empadronado >4/>8 años · 7 ptos fam. monoparental",
        "Adjudicación propiedad: 4 procedimientos al año (1 marzo · 1 junio · 1 septiembre · 1 diciembre)",
      ]},
      { h: "Régimen jurídico (art. 43-49)", items: [
        "Régimen de protección: indefinido, sin descalificación anticipada (art. 43)",
        "Prohibición disposición gratuita: primeros 5 años desde calificación definitiva",
        "Derecho de tanteo: 60 días desde comunicación de la transmisión",
        "Derecho de retracto: 2 meses desde entrega de copia del contrato",
      ]},
    ],
    claves: [
      "VPO: ≤1,30×módulo ponderado · ≤90 m² · ingresos 19.000€–4,5×SARA",
      "VPT: ≤1,50×módulo ponderado · ≤120 m² · ingresos 24.000€–6,5×SARA",
      "Arrendamiento VPO: renta 5,40€/m² · garaje 60€ · trastero 2€/m²",
      "Ocupación en 6 meses desde calificación definitiva · habitualidad ≥9 meses/año",
      "Protección indefinida · sin descalificación · prohibición gratuita 5 años",
      "Tanteo: 60 días · retracto: 2 meses",
      "Baremo: 7 ptos/miembro (máx.55) · 10 ptos vivienda inadecuada · periodicidad trimestral",
    ],
  },

  "E14": {
    intro: "El Título V bis de la Ley Foral 10/2010 (incorporado por LF 8/2013) regula las viviendas deshabitadas en poder de personas jurídicas. El Título VII crea el Registro General de Viviendas de Navarra como instrumento de conocimiento del parque residencial.",
    bloques: [
      { h: "Concepto de vivienda deshabitada (art. 42 bis)", items: [
        "Definición: vivienda no destinada a uso residencial durante >6 meses consecutivos en un año",
        "Solo sujetas a sanción: personas jurídicas (en condominio, si titularidad mayoritaria es jurídica)",
        "Excluidas: vivienda habitual · segunda residencia (máx. 1 por persona/unidad familiar) · turísticas con licencia · arrendadas temporada ≥30 días/año · fuera de Navarra · fuera de ordenación sin cédula",
      ]},
      { h: "Indicios de desocupación (art. 42 ter)", items: [
        "Agua: consumo <0,21 m³/mes o <2,47 m³/año",
        "Electricidad: consumo <24 kWh/mes o <291 kWh/año",
        "Otros indicios: padrón, correspondencia en otra dirección, declaraciones de vecinos",
      ]},
      { h: "Procedimiento (art. 42 quinquies)", items: [
        "Competencia: departamento de vivienda del Gobierno de Navarra (delegable en entidades locales)",
        "Trámite de audiencia: 10 días para alegaciones del titular",
        "Medidas de fomento que suspenden el procedimiento: habitar en 3 meses · calificar rehabilitación en 3 meses · ceder a Bolsa de Alquiler en 6 meses",
        "Plazo máximo resolución: 1 año desde incoación; caducidad si no se resuelve",
      ]},
      { h: "Registro de Viviendas Deshabitadas (art. 42 sexies)", items: [
        "Cancelación de la inscripción: acreditar habitación efectiva ≥6 meses ininterrumpidos",
        "Plan bienal de control e inspección de viviendas deshabitadas",
        "Comunicación al Ayuntamiento para incorporar al censo municipal",
      ]},
      { h: "Registro General de Viviendas de Navarra (art. 75-78)", items: [
        "Naturaleza: titularidad pública, carácter administrativo, adscrito al departamento de vivienda",
        "Contenido mínimo (art. 78): dirección · titular Registro Propiedad · cédula habitabilidad · tipo protección · IEE · cert. eficiencia energética · ayudas · datos arrendamiento · indicios desocupación",
        "Datos de acceso público: dirección · cédula habitabilidad · tipo protección · IEE · cert. energético · ayudas · origen si desahucio bancario",
      ]},
    ],
    claves: [
      "Deshabitada = sin uso residencial >6 meses consecutivos en un año",
      "Solo personas jurídicas sujetas a sanción",
      "Indicios: agua <0,21 m³/mes · electricidad <24 kWh/mes (291 kWh/año)",
      "Procedimiento: audiencia 10 días · plazo máx. 1 año (caducidad)",
      "Medidas fomento: habitar 3 meses · rehabilitar 3 meses · Bolsa Alquiler 6 meses",
      "Cancelación deshabitada: ≥6 meses habitación efectiva ininterrumpida",
      "Registro Gral. Viviendas: administrativo · público · adscrito a departamento vivienda",
    ],
  },

  "E15": {
    intro: "El Decreto Foral 61/2013 desarrolla los Títulos II y IV de la Ley Foral 10/2010, regulando el procedimiento de calificación de las viviendas protegidas, sus características constructivas y las ayudas económicas (subvenciones y préstamos) para adquirentes, arrendatarios y promotores.",
    bloques: [
      { h: "Características constructivas (art. 10-13)", items: [
        "VPO: ≤90 m² (120 m² fam. numerosas) · VPT: ≤120 m² (140 m² fam. numerosas)",
        "Dormitorios: 1 dorm→≤60 m² · 2 dorm→≤80 m² (≤85 m² discapacidad motriz) · fam. numerosas→≥4 dorm",
        "Terrazas/balcones: ≤10% de la superficie útil interior",
        "Garaje vinculado: mín. 10,81 m² · máx. 14 m² (salvo discapacidad motriz)",
        "Trastero: mín. 2 m² · máx. 15 m² · altura libre ≥1,5 m",
        "Estándar energético: desde 2017 mín. B · desde 2018 mín. A · desde 2019 consumo casi nulo",
      ]},
      { h: "Precios máximos (art. 15-17)", items: [
        "VPO 1ª transmisión: 1,30 × módulo ponderado · 2ª+ transmisión: 1,30 × módulo sin ponderar (gral.) o 1,20 (especial)",
        "VPT 1ª transmisión: 1,50 × módulo ponderado · 2ª+ transmisión: 1,50 × módulo sin ponderar",
        "Trasteros VPO: 0,52 × módulo · Trasteros VPT: 0,60 × módulo",
        "Renta anual máx. VPO arrendamiento: 4,5% del precio máx. venta en 2ª transmisión",
      ]},
      { h: "Procedimiento de calificación (art. 20-25)", items: [
        "Calificación provisional: el promotor tiene 36 meses + prórroga máx. 18 meses para solicitar la definitiva",
        "Cantidades a cuenta: solo tras calificación provisional + autorización adm. + cuenta bancaria especial + seguro/aval",
        "Calificación definitiva = cédula de habitabilidad clase A durante 30 años",
        "Entrega llaves: plazo máximo 3 meses desde calificación definitiva",
      ]},
      { h: "Subvenciones a adquirentes (art. 27)", items: [
        "≤ 2 × IPREM: VPO 12% · VPT 6%",
        "2–2,5 × IPREM: VPO 10% · VPT 4%",
        "2,5–3,5 × IPREM: VPO 6% · VPT 2%",
        "Familias numerosas ≤3,5 × IPREM: +3% (cat. general) o +6% (cat. especial)",
      ]},
      { h: "Subvenciones a arrendatarios y préstamos (art. 28-31)", items: [
        "VPO arrendamiento: 1,4–1,7 × IPREM → 25% · 1–1,4 × IPREM → 50% · <IPREM → 75%",
        "Violencia de género: 90% (1er año) · 75% (2º año)",
        "Alquiler Joven: <35 años · vivienda ≤75 m² útiles · unidad familiar ≤4 miembros",
        "Préstamos cualificados: máx. 80% precio venta · hasta 30 años + carencia hasta 3 años",
      ]},
    ],
    claves: [
      "VPO 1ª transm.: 1,30×módulo ponderado · VPT: 1,50×módulo ponderado",
      "Trastero: mín. 2 m², máx. 15 m² · garaje: 10,81–14 m²",
      "Calific. definitiva = cédula habitabilidad clase A por 30 años",
      "Plazo calific. definitiva: 36 meses + prórroga 18 meses desde provisional",
      "Entrega llaves: máx. 3 meses desde calificación definitiva",
      "Renta anual VPO arrendamiento: 4,5% precio máx. venta 2ª transmisión",
      "Subvención adquirente: ≤2×IPREM → VPO 12% · VPT 6%",
      "Préstamo cualificado: máx. 80% · hasta 30 años + 3 años carencia",
    ],
  },

  E16: {
    intro: "El DF 61/2013 regula las actuaciones protegibles de rehabilitación de edificios (art. 45-57) y la Ordenanza Municipal de Rehabilitación de Pamplona. Exige antigüedad >25 años, presupuesto mínimo de 2.000 €/viv y porcentaje mínimo del 50% de superficie útil destinada a vivienda.",
    bloques: [
      {
        h: "Condiciones para ser protegible (art. 45-48)",
        items: [
          "≥50% superficie útil total (exc. baja y sótano) destinada a vivienda",
          "Antigüedad >25 años (exc.: accesibilidad sobrevenida o normativa técnica obligatoria)",
          "No protegibles: vaciado >60% forjados; derribo de fachadas; superficie >120 m²",
          "Presupuesto protegible mínimo: 2.000 €/viv (excluidos locales)",
          "Presupuesto máximo: precio VPO/m² × 120 m²",
          "Presupuesto subvencionable: ≤50% módulo ponderado × 120 m² + 20% módulo × anejos",
        ],
      },
      {
        h: "Plazos (art. 49-51)",
        items: [
          "Inicio obras: máx. 6 meses desde calificación provisional",
          "Fin obras (solicitud calificación definitiva): máx. 36 meses",
          "Prórroga de plazo: hasta 18 meses adicionales",
          "Desistimiento: 12 meses de espera para nueva calificación provisional",
        ],
      },
      {
        h: "Subvenciones a personas físicas (art. 55.1)",
        items: [
          "Ingresos ≤2,5×IPREM, <50 años: 10%",
          "Ingresos ≤2,5×IPREM, ≥50 años: 20%",
          "Ingresos ≤2,5×IPREM, ARP o edad ≥65 o <35 años: 45%",
          "Ingresos ≤2,5×IPREM, PIG-ARP o discapacidad ≥40%: 50%",
          "Ingresos 2,5-3,5×IPREM, <50 años: 5%",
          "Ingresos 2,5-3,5×IPREM, ≥50 años: 10%",
          "Ingresos 2,5-3,5×IPREM, ARP o edad ≥65 o <35 años: 30%",
          "Ingresos 2,5-3,5×IPREM, PIG-ARP o discapacidad ≥40%: 40%",
        ],
      },
      {
        h: "Subvenciones a comunidades de vecinos (art. 55.2)",
        items: [
          "Mejora envolvente térmica hasta CTE-HE1 nueva construcción: 40%",
          "Ascensor NUEVO + adaptación COMPLETA a accesibilidad universal: 60%",
          "Sin ascensor + obras de adaptación SIN ascensor (parcial): 40%",
          "Con ascensor existente + obras de adaptación COMPLETA: 40%",
          "Con ascensor existente + obras de adaptación PARCIAL: 20%",
          "Eficiencia térmica mediante instalaciones centralizadas: 40%",
          "Anillado de instalaciones: 20%",
        ],
      },
      {
        h: "Subvenciones máximas por vivienda (art. 55.3)",
        items: [
          "CCVV – máximo general: 5.000 €/viv",
          "Sin ascensor previo + adaptación completa: 10.000 €/viv (o 13.000 €/viv si <11 viv/núcleo)",
          "Mejora de envolvente: 6.000 €/viv",
          "Personas físicas en general: 13.000 €/viv",
          "ARP o unifamiliar aislada/adosada horizontalmente: 26.000 €/viv",
        ],
      },
      {
        h: "Rehabilitación para alquiler (art. 57)",
        items: [
          "ARP + edificio >50 años: 40% del presupuesto subvencionable",
          "Edificio ≥50 años (fuera de ARP): 22%",
          "Edificio 25-50 años: 11%",
          "Permanencia mínima en arrendamiento: 5 años",
          "Entidades locales / entidades públicas: 75%, máx. 60.000 €, 10 años",
        ],
      },
      {
        h: "Áreas de Rehabilitación Preferente (art. 54)",
        items: [
          "Edificación >50 años Y ordenanza municipal dotada ≥1% módulo ponderado/habitante/año",
          "Centros históricos: >70% de edificios con antigüedad >50 años",
        ],
      },
      {
        h: "Ordenanza Municipal de Rehabilitación de Pamplona",
        items: [
          "Ámbito: Casco Antiguo, Ensanches, Milagrosa y resto de la ciudad",
          "Período mínimo de destino: 5 años (uso privativo) / 15 años (alquiler)",
          "Pagos a cuenta: posibles al ejecutar ≥70% de la obra",
        ],
      },
    ],
    claves: [
      "2.000 €/viv mínimo de presupuesto protegible; máximo = VPO/m² × 120 m²",
      "Antigüedad >25 años (salvo accesibilidad sobrevenida o normativa técnica obligatoria)",
      "Inicio obras: 6 meses; fin: 36 meses; prórroga: 18 meses; desistimiento: espera 12 meses",
      "Ascensor nuevo + accesibilidad completa: 60% (la subvención más alta de CCVV)",
      "Personas en ARP o unifamiliar: hasta 26.000 €/viv",
      "Alquiler en ARP + >50 años: 40%; ≥50 años fuera ARP: 22%; 25-50 años: 11%",
      "Ordenanza Pamplona: destino alquiler mínimo 15 años; pagos a cuenta al 70% ejecución",
    ],
  },

  E17: {
    intro: "El DF 61/2013 regula tres grupos de actuaciones adicionales: Viviendas de Integración Social (VIS, art. 62-77), otras actuaciones específicas (bolsa alquiler, viviendas libres de precio limitado, apartamentos mayores/discapacidad, regeneración energética, art. 77-90) y el Fondo Foral de Vivienda Social (art. 87).",
    bloques: [
      {
        h: "Viviendas de Integración Social (VIS) – Requisitos (art. 66-68)",
        items: [
          "Viviendas usadas, antigüedad ≥15 años, con cédula de habitabilidad",
          "Precio ≤módulo ponderado sin corregir; superficie ≤120 m² (subvencionable ≤90 m²)",
          "Beneficiarios: ingresos >3.000 € y <1,7×IPREM",
          "Permanencia en Navarra: ≥3 años ininterrumpidos inmediatamente anteriores",
        ],
      },
      {
        h: "VIS – Ayudas (art. 73-74)",
        items: [
          "Vinculación: no transmisión en los 10 años siguientes (excepto mortis causa)",
          "Subvención compra: 30% del precio (45% si ingresos <IPREM)",
          "Entidades locales que compran para alquiler social: 40%",
          "Arrendatarios VIS: 90% renta 1er año / 75% renta 2º año",
        ],
      },
      {
        h: "Bolsa de alquiler (art. 77)",
        items: [
          "Vivienda vacía >1 año + cédula de habitabilidad",
          "Gestión: sociedad instrumental del Gobierno de Navarra",
          "Precio arrendamiento: ≤precio VPO de igual superficie",
        ],
      },
      {
        h: "Viviendas libres de precio limitado (art. 78)",
        items: [
          "Precio máx. en subárea 10.4 del POT: 2.370 €/m² útil",
          "Precio máx. en resto de Navarra: 2.031,43 €/m² útil",
          "Anejos: precio ≤40% del precio de la vivienda",
        ],
      },
      {
        h: "Apartamentos protegidos para mayores/discapacidad (art. 80)",
        items: [
          "Subvención promotor: 20% (protección 30 años) / 10% (protección 15 años)",
          "Subvención arrendatario (VPO régimen general): 25% si ingresos <1,7×IPREM",
        ],
      },
      {
        h: "Regeneración energética de conjuntos residenciales (art. 81-85)",
        items: [
          "Envolvente térmica hasta CTE-HE1: 50% (vs. 40% del régimen general)",
          "Subvención máxima: 7.500 €/viv (vs. 6.000 €/viv del régimen general)",
          "Accesibilidad en PIG: +5% adicional sobre el porcentaje base",
        ],
      },
      {
        h: "Fondo Foral de Vivienda Social (art. 87)",
        items: [
          "Subvención a la entidad administradora: 100% de obras, honorarios y tasas",
        ],
      },
    ],
    claves: [
      "VIS: usadas ≥15 años, precio ≤módulo, ingresos >3.000 € y <1,7×IPREM",
      "VIS compra: 30% (45% si <IPREM); entidades locales: 40%; arrendatario: 90%/75%",
      "Vinculación VIS: 10 años sin transmitir (excepto mortis causa)",
      "Bolsa alquiler: vacía >1 año; precio ≤VPO",
      "Libre precio limitado: 2.370 €/m² (subárea 10.4) / 2.031,43 €/m² (resto)",
      "Regeneración energética: envolvente 50%, máx. 7.500 €/viv",
      "Fondo Foral Vivienda Social: 100% de subvención al gestor",
    ],
  },

  E18: {
    intro: "El DF 142/2004 establece las condiciones mínimas de habitabilidad de las viviendas en Navarra. Regula la cédula de habitabilidad (clases A, B y provisional) y el Anexo I (condiciones aplicables a todas las viviendas existentes).",
    bloques: [
      {
        h: "Cédula de habitabilidad (art. 5-7)",
        items: [
          "Clase A (nueva planta o rehab. integral): vigencia 30 años",
          "Clase B (2ª y sucesivas renovaciones, existente sin cédula previa): vigencia 10 años",
          "Provisional (excepcional, con obras pendientes): vigencia 9 meses",
          "Incumplimiento sobrevenido → pérdida automática de vigencia",
          "Exigible para contratos de suministro (agua, gas, electricidad) y ante notario en compraventas",
        ],
      },
      {
        h: "Informe previo y tramitación (art. 9-10)",
        items: [
          "Entidad local solicita informe previo al departamento antes de conceder licencia de obra nueva",
          "Plazo: 2 meses; silencio = favorable (permite continuar tramitación)",
          "Toda vivienda debe cumplir Anexo I; nueva o reforma: Anexo I + II; protección pública: I + II + III",
          "Excepción Anexo I: construcción anterior a 1944 + propietario-residente desde antes de julio 1985 (cédula personal e intransferible)",
        ],
      },
      {
        h: "Condiciones de salubridad (Anexo I, art. 2-5)",
        items: [
          "Suministro agua potable: mínimo 500 l/vivienda/día",
          "Evacuación de aguas residuales a red de alcantarillado o fosa séptica",
          "No se pueden considerar habitables las viviendas en planta sótano",
        ],
      },
      {
        h: "Condiciones de seguridad (Anexo I, art. 3)",
        items: [
          "Barandilla/antepecho en desniveles >60 cm: altura mínima 90 cm",
        ],
      },
      {
        h: "Superficies y dimensiones mínimas (Anexo I, art. 11-12)",
        items: [
          "Cocina independiente: ≥5 m² (rectángulo 1,80×1,20 m)",
          "Sala de estar: ≥9 m² (rectángulo 2,50×3,00 m)",
          "Dormitorio principal: ≥8 m² (cuadrado 2,00 m de lado)",
          "Dormitorios adicionales: ≥6 m²",
          "Aseo (inodoro + lavabo + ducha/bañera): ≥1,5 m²",
          "Cómputo de superficies: solo zonas con altura libre ≥1,90 m (si altura media >2,10 m)",
        ],
      },
      {
        h: "Iluminación y ventilación (Anexo I, art. 7 y 19)",
        items: [
          "Iluminación exterior: ≥0,8 m² ni <8% de los primeros 20 m² de la habitación",
          "Ventilación: al menos 1/3 de la superficie de iluminación",
          "Patios con dormitorios/salas: ≥6 m², círculo ø≥2 m, luces rectas ≥2 m",
          "Patios solo cocina: ≥4 m², luces rectas ≥1,50 m",
        ],
      },
    ],
    claves: [
      "Cédula A: 30 años / Cédula B: 10 años / Provisional: 9 meses",
      "Informe previo del departamento: 2 meses; silencio = favorable",
      "Agua: 500 l/viv/día; barandilla en desniveles >60 cm: h≥90 cm",
      "Cocina ≥5 m²; sala ≥9 m²; dormitorio principal ≥8 m²; aseo ≥1,5 m²",
      "Ventilación: ≥1/3 de la superficie de iluminación",
      "Sótanos: nunca habitables",
      "Excepción Anexo I: construcción <1944 + propietario-residente desde antes jul-1985",
    ],
  },

  E19: {
    intro: "El Anexo II del DF 142/2004 regula las condiciones de habitabilidad aplicables a viviendas nuevas y a rehabilitaciones equiparables (PEM/m² >70% módulo ponderado o vaciado >60% forjados). Abarca acceso vertical, alturas, superficies, instalaciones y garajes.",
    bloques: [
      {
        h: "Ámbito y equiparación a obra nueva (art. 1)",
        items: [
          "Equiparable a obra nueva: afecta a todas las viviendas Y PEM/m² >70% del módulo ponderado",
          "También: vaciado total o demolición >60% forjados (excluida cubierta)",
        ],
      },
      {
        h: "Ascensor (art. 4)",
        items: [
          "Obligatorio cuando alguna vivienda se accede desde la 3ª planta (sin contar baja)",
          "≤16 viviendas: fondo 1,20 m × anchura 1,00 m",
          ">16 viviendas: fondo 1,40 m × anchura 1,10 m",
          "Máximo 24 viviendas por ascensor",
        ],
      },
      {
        h: "Alturas (art. 12)",
        items: [
          "Techo horizontal: ≥2,40 m",
          "Distribución, aseos, cocinas y tendederos cubiertos (con falso techo): ≥2,20 m",
          "Rehabilitación sin sustitución de forjados: puede admitirse ≥2,20 m",
        ],
      },
      {
        h: "Superficies (art. 13-16)",
        items: [
          "Sala de estar (1-2 dorm): ≥12 m², rectángulo 2,70×3,50 m; (+2 m²/dorm adicional)",
          "Cocina 1 dormitorio: ≥5 m²; cocina ≥2 dormitorios: ≥7 m² (rectángulo 3×1,60 m)",
          "Dormitorio principal: ≥10 m², cuadrado 2,50 m de lado",
          "Dormitorios adicionales: ≥8 m²",
          "Baño (ducha+inodoro+lavabo): ≥2,50 m²",
          "Aseo: ≥1,70 m²",
          "Dotación baños: ≤3 dorm → 1 baño; ≥4 dorm → 1 baño + 1 aseo",
        ],
      },
      {
        h: "Tendedero y pasos (art. 17-18)",
        items: [
          "Tendedero: longitud mínima 6 m de cuerda (tramos ≥1 m, separación horizontal ≥20 cm)",
          "Pasillos: anchura mínima 90 cm (estrechamientos puntuales hasta 80 cm admitidos)",
          "Puertas de paso: anchura mínima 80 cm",
          "Escaleras interiores: ≥90 cm, huella ≥27 cm, contrahuella ≤19 cm",
        ],
      },
      {
        h: "Garajes (art. 8)",
        items: [
          "Altura mínima libre: 2,10 m en toda plaza, rampa y circulación",
          "Zaguán (desnivel >1 m entre vía y garaje): pendiente ≤6%, fondo ≥5 m",
          "Rampa: anchura ≥3 m, pendiente máxima 20%",
          "Plaza (acceso frontal): 2,3 × 4,7 m; con pared lateral: anchura ≥2,8 m",
          "Plaza en línea: 2,2 × 5,0 m",
          "Pasillo de maniobra: ≥3,5 m; si el ángulo de entrada >45°: ≥4,5 m",
        ],
      },
      {
        h: "Instalaciones (art. 20)",
        items: [
          "Presión agua: 1-4,5 kg/cm²",
          "Velocidad máxima: 1,5 m/s",
          "ACS: 13 l/min a 40 °C o 75 l acumulados",
        ],
      },
    ],
    claves: [
      "Ascensor: obligatorio si hay viviendas en planta 3ª (sin contar baja); máx. 24 viv/ascensor",
      "≤16 viv: ascensor 1,20×1,00 m; >16 viv: 1,40×1,10 m",
      "Altura libre: ≥2,40 m (≥2,20 m en distribución, aseos, cocinas)",
      "Sala estar 1-2 dorm: ≥12 m²; dorm principal ≥10 m²; baño ≥2,50 m²",
      "Cocina ≥5 m² (1 dorm) / ≥7 m² (≥2 dorm); tendedero: ≥6 m cuerda",
      "Garaje: h≥2,10 m; plaza 2,3×4,7 m; rampa ≥3 m, pendiente ≤20%",
      "Agua: 1-4,5 kg/cm², ≤1,5 m/s; ACS: 13 l/min a 40°C o 75 l",
    ],
  },

  E20: {
    intro: "La LF 17/2020 de Actividades con Incidencia Ambiental regula las formas de intervención administrativa ambiental en Navarra: evaluación ambiental, autorización ambiental integrada (AAI), autorización ambiental unificada (AAU), licencia de actividad clasificada (LAC) y declaración responsable.",
    bloques: [
      {
        h: "Principios (art. 2)",
        items: [
          "Prevención, precaución o cautela",
          "Quien contamina paga",
          "Economía circular",
          "Reparación o corrección preferentemente en la fuente",
          "Participación",
        ],
      },
      {
        h: "Formas de intervención ambiental (art. 8)",
        items: [
          "Evaluación ambiental estratégica (EAE) y evaluación de impacto ambiental (EIA)",
          "Autorización ambiental integrada (AAI)",
          "Autorización ambiental unificada (AAU)",
          "Evaluación de afecciones ambientales",
          "Licencia de actividad clasificada (LAC)",
          "Declaración responsable ambiental",
        ],
      },
      {
        h: "Licencia de actividad clasificada – LAC (art. 36-52)",
        items: [
          "Precede a la construcción, montaje o traslado de la instalación",
          "Competente: entidad local donde se ubique la actividad",
          "Resolución: plazo máximo 4 meses; silencio = desestimación (negativo)",
          "Inicio actividad: máx. 2 años desde la concesión",
          "Habilitación de inicio: declaración responsable del titular de cumplimiento de condiciones",
          "Caducidad: si no se presenta la declaración responsable de puesta en marcha → LAC ineficaz",
          "Modificación no sustancial: comunicar y esperar 1 mes; si no hay respuesta → puede realizarse",
          "Modificación sustancial: nueva tramitación completa",
          "Cese en suelo no urbanizable: demolición/retirada en máx. 5 años",
        ],
      },
      {
        h: "Inspección (art. 56-58)",
        items: [
          "GN (departamento de medio ambiente): AAI, AAU y EIA",
          "Entidad local + departamentos del GN que emitieron informe vinculante: LAC",
          "Personal inspector = agente de la autoridad",
        ],
      },
      {
        h: "Anejo 3 – actividades sujetas a LAC (selección)",
        items: [
          "Grupo 1: calderas/instalaciones de combustión ≥250 kW y <5 MW (excl. generación eléctrica)",
          "Grupo 2.2: talleres metálicos sin tratamiento superficial ≤2.000 m²",
          "Grupo 15.5: alojamiento turístico no sujeto a declaración responsable estatal",
          "Grupo 15.6: establecimientos comerciales/servicios >300 m² o >10 kW de potencia",
        ],
      },
    ],
    claves: [
      "LAC: plazo resolución 4 meses; silencio negativo",
      "Inicio actividad: máx. 2 años + declaración responsable de puesta en marcha",
      "Sin declaración responsable → LAC caduca y deviene ineficaz",
      "Modificación no sustancial: 1 mes silencio = puede realizarse",
      "Cese en suelo no urbanizable: demolición en máx. 5 años",
      "Personal inspector = agente de la autoridad",
      "Grupos LAC: calderas ≥250 kW-<5 MW; talleres metálicos ≤2.000 m²; aloj. turístico sin DR; comercial >300 m²",
    ],
  },
  E30: {
    intro:
      "Título III del TRLFOTU (DFL 1/2017), arts. 84-129: régimen urbanístico del suelo. Clasificación (urbano/urbanizable/no urbanizable), derechos y deberes por clase de suelo, aprovechamiento, régimen del suelo no urbanizable y expropiaciones. Es el tema de los porcentajes y superficies: memorizar cifras.",
    bloques: [
      {
        h: "Deberes generales y normas de aplicación directa (arts. 85-87)",
        items: [
          "Deber de conservación (art. 85): seguridad, salubridad, ornato público y habitabilidad. Límite del deber: la MITAD del coste de reposición del bien, excluido el valor del suelo (art. 85.3)",
          "Adaptación al ambiente (art. 86): normas de aplicación directa, independientes de la clasificación; prohibida toda construcción en áreas amenazadas por riesgos (86.d)",
          "Alturas sin plan (art. 87): máximo 3 plantas medidas en cada punto del terreno; en solares de manzanas edificadas en más de 2/3, el Ayuntamiento puede autorizar la altura media de los edificios ya construidos",
        ],
      },
      {
        h: "Clasificación del suelo (arts. 88-93)",
        items: [
          "Tres clases: urbano, urbanizable y no urbanizable (art. 88). Municipio sin planeamiento: lo que no sea urbano es NO URBANIZABLE (art. 89)",
          "Suelo urbano (art. 90): integrado en malla urbana + (a) urbanizado en ejecución del planeamiento, (b) servicios instalados y operativos, o (c) edificación en 2/3 del espacio apto",
          "Categorías: consolidado (solo actuaciones edificatorias o de dotación) / no consolidado (renovación o reforma de la urbanización)",
          "Solar (art. 91): urbanizado con acceso rodado, abastecimiento, evacuación de aguas y electricidad + calzada pavimentada y encintado de aceras + alineaciones y rasantes señaladas",
          "SNU (art. 92): PROTECCIÓN = letras a-b-c (legislación sectorial, OT, riesgos); PRESERVACIÓN = letras d-e (valores según planeamiento municipal). 8 subcategorías",
          "Cédula urbanística (art. 94): ordenanza obligatoria en municipios de MÁS DE 5.000 habitantes",
        ],
      },
      {
        h: "Derechos y deberes: los porcentajes (arts. 95-105)",
        items: [
          "Aprovechamiento materializable (art. 95.3): suelo urbano CONSOLIDADO = 100%; NO CONSOLIDADO = 90% del de la unidad o área de reparto",
          "Cesión en SUC por actuación edificatoria (art. 96.1.a): terrenos fuera de alineaciones, máximo 10% de la superficie de la finca",
          "Actuaciones de dotación (art. 96.2.a): cesión del 10% del INCREMENTO de aprovechamiento; excepcional entre 5% y 15%",
          "SUNC y urbanizable (arts. 96.3.c y 98.d): cesión del 10% del aprovechamiento (salvo mera sustitución sin incremento)",
          "Áreas de reparto (art. 99.1): el aprovechamiento tipo de áreas del mismo uso global no puede ser inferior en un 15% al más alto",
          "Edificabilidad residencial (art. 102): superficie útil × coeficiente 1,15; se deducen conductos >100 cm² y alturas libres <1,50 m",
          "Plazo de deberes de cesión/equidistribución/urbanización si el plan no lo fija (art. 104.2): 8 AÑOS desde publicación en BON",
          "Urbanización y edificación simultáneas (art. 105): garantía máx. 30% de la carga urbanística",
        ],
      },
      {
        h: "Suelo no urbanizable (arts. 108-119)",
        items: [
          "Actividades: permitidas / autorizables / prohibidas (art. 110). Permitidas: aperos ≤15 m², cierres de parcela, ampliaciones agrícolas-ganaderas ≤20% superficie construida",
          "Servidumbre de caminos públicos, vías pecuarias y Camino de Santiago sin normativa propia: 3 metros (art. 111.2)",
          "Industrial/terciario en SNU preservación (art. 113.2): cesión del 10% del incremento de VALOR de los terrenos",
          "Vivienda unifamiliar aislada en preservación (art. 115): parcela ≥10.000 m²; ≥50% a usos agrarios; residencia habitual; prohibido repetir en 5 años; 2 viviendas por edificación solo con parentesco hasta 3er grado",
          "Barrios rurales tradicionales (art. 116): parcela mínima 1.500 m²",
          "Autorización (art. 117): informe municipal y remisión en 2 meses; resolución del Departamento: silencio de 2 meses = DENEGADA (trampa: silencio negativo); ejecución en 2 años; reposición al cese en máx. 5 años",
        ],
      },
      {
        h: "Expropiaciones (arts. 120-129)",
        items: [
          "Valoraciones: siempre por legislación ESTATAL (arts. 120 y 125)",
          "Aceptación del precio ofrecido por la Administración: derecho a percibirlo incrementado en un 5% (art. 125.3)",
          "Jurado de Expropiación de Navarra (art. 126): 5 miembros designados por el Gobierno de Navarra + secretario licenciado en Derecho; resuelve en 4 MESES; silencio = desestimación; agota vía administrativa",
          "Expropiación por incumplimiento (art. 128): alegaciones 15 días; plazo de subsanación entre 1 y 3 meses; si subsana → expediente sancionador sustitutorio",
        ],
      },
    ],
    claves: [
      "Deber de conservación: límite = 1/2 coste de reposición SIN valor del suelo (art. 85.3)",
      "Sin plan: máx. 3 plantas; manzana edificada 2/3 → media (art. 87)",
      "Suelo urbano por edificación: 2/3 del espacio apto (art. 90.1.c)",
      "Aprovechamiento: SUC 100% / SUNC 90% (art. 95.3)",
      "Cesiones del 10%: SUNC, urbanizable, dotación (sobre incremento, 5-15% excepcional)",
      "Aprovechamiento tipo entre áreas mismo uso: diferencia máx. 15% (art. 99.1)",
      "Edificabilidad residencial = superficie útil × 1,15 (art. 102)",
      "Deberes urbanísticos sin plazo en plan: 8 años (art. 104.2)",
      "Garantía urbanización+edificación simultánea: ≤30% (art. 105)",
      "SNU: aperos ≤15 m²; ampliación ≤20%; servidumbre caminos 3 m",
      "Vivienda SNU preservación: 10.000 m² (barrios rurales: 1.500 m²); 50% agrario; 5 años",
      "Art. 117: silencio del Departamento 2 meses = DENEGADA; ejecución 2 años; reposición 5 años",
      "Jurado Expropiación: 5 miembros, resuelve en 4 meses, silencio negativo",
      "Mutuo acuerdo: aceptar precio de la Administración = +5%",
    ],
  },
  E31: {
    intro:
      "Título IV del TRLFOTU (DFL 1/2017), arts. 130-189: ejecución del planeamiento. Unidades de ejecución, parcelación y reparcelación, y los 6 sistemas de actuación (3 privados: compensación, reparcelación voluntaria y agente urbanizador; 3 públicos: cooperación, ejecución forzosa y expropiación). Tema de plazos y quórums.",
    bloques: [
      {
        h: "Disposiciones generales (arts. 130-141)",
        items: [
          "Presupuesto: aprobación definitiva del instrumento más detallado (art. 131). Sistemas generales: directamente o por Plan Especial",
          "Proyectos de Urbanización (art. 134): NO pueden contener determinaciones de ordenación ni régimen del suelo; no modifican el planeamiento; se tramitan como Estudios de Detalle (art. 74)",
          "Obras antes de aprobar los instrumentos de gestión: solo con fianza del 20% del coste de urbanización + conformidad expresa de los propietarios registrales (art. 134.6)",
          "En SUC: Proyectos de Obras Ordinarias, por la LF de Administración Local (art. 135)",
          "Actuaciones asistemáticas: SUC (completar parcelas hasta solar); sistemáticas: SUNC y urbanizable mediante unidades de ejecución (arts. 137-138)",
          "Realojo y retorno (art. 140): en expropiación, obligación de la expropiante/beneficiario; en asistemáticas de alquiler, del propietario",
        ],
      },
      {
        h: "Unidades de ejecución, parcelación y reparcelación (arts. 142-156)",
        items: [
          "UE: cumplimiento CONJUNTO de cesión, equidistribución y urbanización; en SUNC pueden ser discontinuas (art. 142.2)",
          "Programación de plazos obligatoria: municipios >3.000 hab (o que prevean alcanzarlos) y >1.000 hab en la Comarca de Pamplona (art. 142.4)",
          "Parcelación rústica = finalidad exclusiva explotación agraria; urbanística = facilitar edificación o uso sujeto a licencia (art. 145)",
          "Silencio en licencias de parcelación y declaración de innecesariedad: SIEMPRE DENEGATORIO (art. 148.4)",
          "Reparcelación (art. 150): derechos <15% de la parcela mínima → indemnización en metálico; no se readjudican terrenos edificados conforme al plan ni los de diferencia <15%",
          "Reparcelación económica (art. 154): cuando la material no sea posible en más del 50% de la superficie",
          "Normalización de fincas (art. 155): solo linderos; no puede afectar al valor en más del 15%; audiencia de 15 días",
        ],
      },
      {
        h: "Sistemas privados (arts. 160-174)",
        items: [
          "Recepción de obras de urbanización (art. 160.3): acto formal en 1 MES desde solicitud; silencio de 3 MESES = recibidas; garantía ≥1 año; vicios ocultos 15 AÑOS",
          "COMPENSACIÓN: estatutos presentados por >35% de la superficie; constitución de la Junta en 3 meses por escritura pública; la aprobación definitiva de estatutos incorpora automáticamente a todos los propietarios (art. 162)",
          "Exclusión (art. 163): solicitar expropiación ANTES de la aprobación inicial del proyecto de reparcelación; el Ayto. inicia la expropiación en 3 meses",
          "Proyecto de Reparcelación: quórum >50% de la superficie (art. 164). Junta: naturaleza administrativa; recurso de ALZADA ante la Administración; representante municipal en el órgano rector; poder adjudicador si ejecuta obra pública (art. 165)",
          "REPARCELACIÓN VOLUNTARIA: unanimidad de propietarios o propietario único; Junta de Reparcelación por escritura (art. 168)",
          "AGENTE URBANIZADOR: seleccionado en pública competencia con un Programa de Actuación Urbanizadora (alternativa técnica + convenio + proposición jurídico-económica, art. 172); garantía provisional 2% de las obras; concurrencia pública 30 días; resolución en 40 días (art. 174)",
          "Propietario disconforme con retribución en terrenos: pago en metálico por conducto notarial en 10 días desde la aprobación del PAU (art. 173.2.b)",
        ],
      },
      {
        h: "Sistemas públicos (arts. 175-186)",
        items: [
          "COOPERACIÓN: propietarios aportan suelo, la Administración urbaniza a su costa; pagos a cuenta de inversiones de los 6 meses siguientes, plazo de pago ≥1 mes (art. 176); reparcelación formulada por el Ayto. o por >35% de la superficie (art. 177)",
          "EJECUCIÓN FORZOSA: a instancia de ≥25% de la superficie, por: no presentar estatutos en 6 meses / no constituir Junta en 3 meses / no presentar reparcelación en 6 meses (art. 178.2); adhesión de propietarios: 15 días prorrogables",
          "Comisión Gestora: paritaria propietarios-Administración; presidente elegido ENTRE los representantes de la Administración, con voto de calidad (art. 179.2)",
          "Pago de obras en terrenos: requiere asentimiento de propietarios >40% (art. 182.3)",
          "EXPROPIACIÓN: por unidades de ejecución COMPLETAS; relación de bienes con información pública de 15 días (art. 185); liberación de expropiaciones con condiciones (art. 186)",
        ],
      },
      {
        h: "Obtención de terrenos dotacionales (arts. 187-189)",
        items: [
          "Sistemas generales en SUNC/urbanizable: cesión (inclusión/adscripción a área de reparto), ocupación directa o, en su defecto, expropiación (art. 187)",
          "En SUC: sistemas generales y locales se obtienen por EXPROPIACIÓN (art. 188)",
          "Ocupación directa (art. 189): ocupación tras 1 mes desde la notificación, con acta; transcurridos 4 AÑOS sin aprobación del instrumento redistributivo, el propietario puede pedir justiprecio, que opera por ministerio de la ley a los 6 meses de la solicitud",
        ],
      },
    ],
    claves: [
      "6 sistemas: privados = compensación, reparcelación voluntaria, agente urbanizador; públicos = cooperación, ejecución forzosa, expropiación (art. 157)",
      "Plan sin sistema → compensación o reparcelación voluntaria (art. 158.2)",
      "Proyecto de Urbanización: sin ordenación; fianza 20% para anticipar obras (art. 134)",
      "Programación de plazos: >3.000 hab o >1.000 Comarca Pamplona (art. 142.4)",
      "Silencio parcelación: SIEMPRE negativo (art. 148.4)",
      "Recepción obras: 1 mes acto formal; silencio 3 meses = recibidas; garantía ≥1 año; vicios ocultos 15 años (art. 160.3)",
      "Compensación: 35% presenta estatutos → 3 meses constituir Junta → >50% aprueba reparcelación",
      "Junta de Compensación: recurso de alzada; fiduciaria; poder adjudicador",
      "Agente urbanizador: garantía 2%; concurrencia 30 días; resolución 40 días; metálico por conducto notarial 10 días",
      "Ejecución forzosa: 25% propietarios; 6/3/6 meses; Comisión paritaria con presidente de la Administración",
      "Cooperación: reparcelación por Ayto. o >35%; pagos a cuenta 6 meses",
      "SUC: dotaciones por expropiación (art. 188)",
      "Ocupación directa: 4 años sin redistribución → justiprecio a los 6 meses (art. 189.4)",
      "Reparcelación: <15% parcela mínima → metálico; normalización: valor ≤15%",
    ],
  },
  E32: {
    intro:
      "Título V del TRLFOTU (DFL 1/2017), arts. 190-225: licencias, órdenes de ejecución, ruina, protección de la legalidad y régimen sancionador. Título VII, arts. 247-256: entidades privadas colaboradoras urbanísticas. Tema estrella de disciplina: dominar plazos de prescripción y cuantías de multas.",
    bloques: [
      {
        h: "Licencias urbanísticas (arts. 190-197)",
        items: [
          "Licencia = acto de control PREVIO, REGLADO y DECLARATIVO (art. 190.1)",
          "No sujetos (art. 190.4): obras municipales en término propio, parcelaciones en proyecto de reparcelación, eximidos por legislación sectorial, órdenes de ejecución, actos sujetos a DR/comunicación",
          "En dominio público: licencia ADEMÁS de la autorización o concesión del titular demanial (art. 190.5)",
          "Plazo para solicitar licencia de edificación en defecto de plan (art. 193): 1 año (>5.000 hab) / 2 años (<5.000); se DUPLICAN en actuaciones asistemáticas",
          "Procedimiento (art. 194): se solicita con PROYECTO BÁSICO + declaración del técnico; informe de habitabilidad (viviendas nueva planta) en 2 meses, silencio = evacuado; el proyecto de EDIFICACIÓN se presenta antes del inicio de obras y el Ayto. tiene 15 días para verificar conformidad",
          "Resolución: 2 MESES; silencio POSITIVO salvo normativa básica estatal; NUNCA contra planeamiento: licencias así obtenidas son nulas de pleno derecho (arts. 194.7 y 196)",
          "DR sin presentar cuando era preceptiva = obra SIN LICENCIA a todos los efectos (art. 195.8)",
          "Eficacia (art. 197): sin plazo expreso → 1 año para comenzar y 3 para acabar; caducidad con audiencia de 15 días hábiles; prórroga: solicitud antes de 2 meses de concluir el plazo y transcurrida al menos la mitad; prórroga de fin de obras solo con cobertura de aguas hecha; caducada, si no se pide nueva licencia en 6 meses → expropiación posible",
        ],
      },
      {
        h: "Órdenes de ejecución y ruina (arts. 198-199)",
        items: [
          "Órdenes de ejecución (art. 198): incumplimiento → ejecución subsidiaria o multas coercitivas: hasta 12 sucesivas, por períodos de 1 mes, de 600 a 6.000 €, hasta el límite del deber de conservación",
          "Ruina (art. 199.2), tres supuestos: (a) coste de obras > 50% del valor actual del edificio EXCLUIDO el terreno; (b) agotamiento generalizado de elementos estructurales; (c) obras no autorizables por fuera de ordenación",
          "Urgencia: el ALCALDE, bajo su responsabilidad, dispone lo necesario (art. 199.4)",
        ],
      },
      {
        h: "Protección de la legalidad (arts. 200-211)",
        items: [
          "Obras EN CURSO sin licencia (art. 202): suspensión inmediata; incompatibles → demolición; compatibles → requerimiento para legalizar en 2 meses",
          "Obras CONCLUIDAS (art. 203): la Entidad Local puede actuar en 4 AÑOS desde la total terminación o aparición de signos externos",
          "SNU sin autorización (art. 204): el Departamento insta al Ayto.; si no actúa en 3 meses, actúa subsidiariamente",
          "Prescripción de la acción de restauración (art. 205): dominio público, viales, zonas verdes, espacios libres, BIC públicos = SIN PLAZO; SNU de protección privado = 10 años",
          "Reposición (art. 207): multas coercitivas hasta 12, mensuales, 600-6.000 €; ampliación de plazo por una sola vez, máx. 6 meses",
          "Medidas cautelares (art. 208): corte de agua y electricidad — las suministradoras cumplen en 5 días; retirada de materiales y maquinaria en 2 días",
          "Infracción grave/muy grave prescrita → régimen de FUERA DE ORDENACIÓN: solo obras mínimas de seguridad e higiene (art. 210)",
          "Responsables (art. 213): promotor, empresario de las obras y técnico director; si hay licencia manifiestamente ilegal, quien la otorgó; también el propietario conocedor y los intermediarios en parcelaciones ilegales",
        ],
      },
      {
        h: "Infracciones y sanciones (arts. 214-225)",
        items: [
          "MULTAS (art. 218.1): leves 300-6.000 €; graves 6.000-60.000 €; muy graves 60.000-300.000 €. Si el beneficio supera la sanción, se incrementa hasta igualarlo",
          "Muy graves (art. 216): parcelaciones contra planeamiento que afecten a dominio público/equipamientos/zonas verdes; parcelaciones en SNU DE PROTECCIÓN; incumplimientos que afecten a sistemas generales, zonas verdes, SNU protección o patrimonio histórico",
          "Graves típicas (art. 215): parcelaciones en SNU (no protección), exceso de edificabilidad o altura, parcela inferior a la mínima, distancias, no paralizar obras en 72 HORAS (4º requerimiento → Ministerio Fiscal)",
          "Reincidencia: misma infracción en 4 años con sanción firme (art. 220.1.f). Restaurar antes del expediente exime en leves (art. 220.4)",
          "Reducción (art. 221): 30% si legalizable (pago 1 mes + conformidad + fianza 50%); 50% si NO legalizable (pago 1 mes + conformidad + aval 100% de la reposición)",
          "Procedimiento sancionador (art. 224): resolver en 6 meses, ampliable otros 6; si no → caducidad (cabe reiniciar si no prescribió, con otro instructor)",
          "PRESCRIPCIÓN (art. 225): infracciones muy graves 10 años / graves 8 / leves 4; sanciones: muy graves 4 años / graves 2 / leves 6 meses; parcelación ilegal = infracción continuada",
        ],
      },
      {
        h: "Entidades colaboradoras urbanísticas (Título VII, arts. 247-256)",
        items: [
          "Colaboran en funciones de los arts. 190 y 192; intervención VOLUNTARIA, nunca autoridad; los informes municipales PREVALECEN; sus certificados de conformidad equivalen a los municipales (art. 249)",
          "Acreditación ENAC según UNE-EN ISO/IEC 17020 (tipo A); seguro RC ≥1.000.000 €; plantilla mínima: 1 arquitecto o ingeniero con 10 años de experiencia + 1 abogado con 10 años (art. 251)",
          "Obligaciones: conservar expedientes 7 años; comunicar tarifas con 2 meses de antelación; no subcontratar (art. 252)",
          "Sanciones (art. 255): leves 3.000-30.000 €; graves 30.001-100.000 €; muy graves 100.001-500.000 €; 2 muy graves firmes → cancelación registral obligatoria; reducción del 50% por pronto pago y conformidad",
          "Prescripción (art. 256.5): 3 años muy graves / 2 años graves / 6 meses leves. El ALCALDE resuelve el procedimiento",
        ],
      },
    ],
    claves: [
      "Licencia: control previo + reglado + declarativo (art. 190.1)",
      "Licencia: silencio POSITIVO a los 2 meses, salvo normativa básica estatal y NUNCA contra planeamiento (art. 194.7)",
      "Proyecto básico para solicitar; proyecto de edificación antes de obras (conformidad 15 días)",
      "Plazos por defecto: 1 año inicio / 3 años fin de obras (art. 197.6)",
      "Ruina: coste > 50% valor edificio SIN terreno; agotamiento estructural; fuera de ordenación (art. 199.2)",
      "Multas coercitivas: hasta 12, mensuales, 600-6.000 € (arts. 198.3 y 207.3)",
      "En curso → suspensión + 2 meses legalizar; concluidas → 4 años (arts. 202-203)",
      "Sin prescripción: dominio público, viales, zonas verdes, BIC; SNU protección: 10 años (art. 205)",
      "Multas: 300-6.000 / 6.000-60.000 / 60.000-300.000 € (art. 218)",
      "No parar obras en 72 h = grave; 4º requerimiento → Fiscal (art. 215.20)",
      "Prescripción infracciones: 10/8/4 años; sanciones: 4/2 años/6 meses (art. 225)",
      "Reducción sanción: 30% legalizable (fianza 50%) / 50% no legalizable (aval 100%)",
      "Sancionador: 6+6 meses; caducidad y posible reinicio (art. 224)",
      "Entidades colaboradoras: ENAC 17020 tipo A; RC ≥1 M€; técnico y abogado con 10 años; expedientes 7 años",
    ],
  },
  E52: {
    intro:
      "Historia de la evolución urbanística de Pamplona: de Pompaelo a la ciudad actual. La clave interpretativa es que Pamplona fue PLAZA FUERTE militar: la muralla comprimió la ciudad hasta finales del XIX, y la forma urbana actual es la liberación progresiva de esa servidumbre (ensanches) más la planificación del siglo XX. Tema de fechas, nombres y planes.",
    bloques: [
      {
        h: "Origen, ciudad romana y ciudad medieval",
        items: [
          "Poblado vascón IRUÑA ('la ciudad'); fundación romana POMPAELO por Cneo Pompeyo Magno h. 75-74 a.C. (guerras sertorianas; Estrabón atribuye la fundación a Pompeyo)",
          "Pompaelo sobre la colina de la futura Navarrería (en torno al solar de la catedral); enlace peninsular con Aquitania",
          "Ciudad medieval = 'ciudad de los burgos': TRES núcleos independientes, amurallados y enfrentados ENTRE SÍ: Navarrería (núcleo primitivo, navarros, señorío del obispo), Burgo de San Cernin (h. 1090, francos occitanos del Camino de Santiago, privilegios 1129 de Alfonso I el Batallador) y Población de San Nicolás (s. XII). Apéndices: burgo de San Miguel y Judería",
          "Guerra de la Navarrería (1276): San Cernin y San Nicolás, con tropas francesas, arrasan la Navarrería (despoblada casi medio siglo)",
          "PRIVILEGIO DE LA UNIÓN: 8 de septiembre de 1423, CARLOS III EL NOBLE — una sola universidad, concejo y comunidad; Casa Consistorial construida en la 'tierra de nadie' donde confluían los burgos",
        ],
      },
      {
        h: "Ciudad fortificada (s. XVI-XVIII)",
        items: [
          "Conquista de Navarra (Fernando el Católico): 1512 → Pamplona, plaza fronteriza frente a Francia",
          "CIUDADELA (1571): la encarga FELIPE II al ingeniero italiano GIACOMO PALEARO 'EL FRATÍN' (informe previo negativo de Antonelli, 1569; intervino el virrey Vespasiano Gonzaga)",
          "Planta: PENTÁGONO estrellado con 5 baluartes (Santa María, Santiago, San Antón, La Victoria, Santa Tecla); modelos: ciudadelas de AMBERES y TURÍN; núcleo terminado h. 1646",
          "Siglo XVIII: proyecto general de JORGE PRÓSPERO DE VERBOOM (1726) para Ciudadela y recinto",
          "Consecuencia: uno de los recintos abaluartados mejor conservados de Europa, pero prohibición de crecer extramuros → hacinamiento e insalubridad en el XIX",
        ],
      },
      {
        h: "Expansión y ensanches",
        items: [
          "PRIMER ENSANCHE — Ley de 22 de agosto de 1888: autoriza demoler los baluartes de LA VICTORIA y SAN ANTÓN (los orientados a la ciudad) y el revellín intermedio; vivienda burguesa MODERNISTA y ECLÉCTICA",
          "Derribo de portales 1905-1906 (Taconera, Portal Nuevo, San Nicolás); Rochapea en 1914",
          "SEGUNDO ENSANCHE — Ley de 7 de enero de 1915: derribo del frente SUR de murallas (San Nicolás-Tejería); inicio simbólico 25/7/1915, ejecución 1918-1921",
          "Proyectado por el arquitecto SERAPIO ESPARZA: trama regular en CUADRÍCULA, eje Av. Carlos III, Plaza de los Fueros",
          "Idea fuerza: I y II Ensanche = salida del corsé militar; desde ahí la ciudad crece sin muralla",
        ],
      },
      {
        h: "Plan de Alineaciones 1957 y desarrollo de la 2ª mitad del s. XX",
        items: [
          "Antecedente 1945: informes de BLEIN y BIDAGOR (recomiendan crecer al NOROESTE: San Juan-Iturrama); el geógrafo Urabayen discrepó (defendía el llano norte hacia Ezkaba)",
          "PLAN GENERAL DE ALINEACIONES DE 1957: primer instrumento de conjunto del s. XX; documento INTERMEDIO entre los ensanches del XIX y los planes generales de la Ley del Suelo de 1956",
          "Sus Ordenanzas: zonificación, régimen de edificación, condiciones volumétricas y estéticas (Título I ordenación; Título II condiciones generales). Da lugar al III ENSANCHE",
          "TERCER ENSANCHE: San Juan e Iturrama; 1ª Zona aprobada por Pleno 27/12/1962 y 21/5/1963; ejes Pío XII, Av. de Bayona y Sancho el Fuerte (trazado del antiguo FC del Irati); predominio del BLOQUE ABIERTO y altísima densidad",
          "Barrios de promoción social: TXANTREA (años 50; iglesia San José 1953), Rochapea, San Jorge, Etxabakoitz, Milagrosa, Azpilagaña",
          "Suelo industrial: polígonos desde 1964 (Diputación); LANDABEN = 170 Ha",
        ],
      },
      {
        h: "PGOU 1984 y ciudad actual",
        items: [
          "PGOU DE 1984: primer Plan General moderno e integral; sustituye al de 1957; cambio de cultura urbanística (calidad de diseño y espacio público)",
          "Octubre 1984: OFICINA DE REHABILITACIÓN DE VIVIENDAS (convenio MOPU-GN-Ayto.) con PERI en el casco; años 80-90: Rochapea, San Jorge, MENDILLORRI y rondas",
          "LF 10/1994 introduce la figura del PLAN MUNICIPAL (sustituye conceptualmente al PGOU)",
          "PLAN MUNICIPAL VIGENTE: Texto Refundido aprobado por Acuerdo C.O.T. de 18/12/2002, homologado a la LF 35/2002; organiza el suelo urbano en UNIDADES INTEGRADAS (barrios)",
          "Crecimientos del cambio de siglo: LEZKAIRU y Mendillorri; PSIS de las dos universidades, Comarca-I y suelos ferroviarios; escala territorial: POT 3 'Área Central'",
        ],
      },
    ],
    claves: [
      "Pompaelo: Pompeyo, h. 75-74 a.C.; poblado vascón Iruña",
      "Tres burgos: Navarrería / San Cernin (1090, francos, privilegios 1129) / San Nicolás (s. XII)",
      "Guerra de la Navarrería: 1276",
      "Privilegio de la Unión: 8-9-1423, Carlos III el Noble",
      "Ciudadela: Felipe II, 1571, El Fratín; pentágono 5 baluartes; modelos Amberes/Turín; Verboom 1726",
      "I Ensanche: Ley 22-8-1888 (baluartes Victoria y San Antón); modernista/ecléctico",
      "II Ensanche: Ley 7-1-1915; derribo 1918-1921; Serapio Esparza; cuadrícula",
      "Plan de Alineaciones 1957 = documento intermedio; da lugar al III Ensanche",
      "III Ensanche (San Juan-Iturrama): Pleno 27-12-1962 y 21-5-1963; bloque abierto",
      "Txantrea: años 50 (San José 1953); Landaben 170 Ha; polígonos desde 1964",
      "PGOU 1984: primer plan integral; Oficina de Rehabilitación oct. 1984",
      "Plan Municipal vigente: TR Acuerdo C.O.T. 18-12-2002, homologado a LF 35/2002",
      "TRAMPA: la Ciudadela es de Felipe II, no de Fernando el Católico (suyo fue el castillo de Santiago previo)",
      "TRAMPA: no mezclar 1888 (baluartes) con 1915 (frente sur)",
    ],
  },
  E53: {
    intro:
      "El Plan Municipal de Pamplona: trayectoria (PGOU-84 → homologación a la LF 35/2002 → Texto Refundido 2008), documentos que lo integran (art. 5 NUG) y la Normativa Urbanística General (79 artículos). Concepto transversal: cada determinación es de carácter GENERAL, ESTRUCTURANTE o PORMENORIZADO. Ojo: el Plan remite a la LF 35/2002, hoy derogada por el TRLFOTU-2017.",
    bloques: [
      {
        h: "Trayectoria y aprobación",
        items: [
          "Origen: PGOU de Pamplona, Resoluciones Ministeriales de 7 y 16 de noviembre de 1984 (referencia temporal del art. 3 NUG: 23/11/1984)",
          "Homologación a la LF 35/2002: ORDEN FORAL 181/2007, de 12 de abril (BON 67, 30/5/2007)",
          "TEXTO REFUNDIDO de la homologación: Acuerdo del Ayuntamiento de 18 de enero de 2008 (BON 22, 18/2/2008) — la fecha que el Ayto. da como 'aprobación del Plan Municipal'",
          "El Acuerdo C.O.T. 18/12/2002 es el acuerdo sobre el texto del Plan, previo a la homologación",
          "Vigencia INDEFINIDA (art. 3); revisión (art. 6) cuando: 200.000 hab de derecho, 75% de licencias de las viviendas planificadas en urbanizable, o 75% de ocupación del suelo comercial/actividad económica",
        ],
      },
      {
        h: "Documentos del Plan (art. 5) y jerarquía (art. 4)",
        items: [
          "MEMORIA: objetivos y justificación del modelo. PLANOS DE INFORMACIÓN: reflejan la realidad de partida, SIN carácter normativo",
          "PLANOS DE PROPUESTA: ordenación (preceptos jurídicos gráficos, mismo valor que las Normas) + gestión",
          "NORMAS URBANÍSTICAS Generales y Particulares; CATÁLOGO (régimen de protección); PROGRAMA DE ACTUACIÓN; ESTUDIO ECONÓMICO FINANCIERO",
          "Jerarquía (art. 4): Normas + Planos de Propuesta PREVALECEN sobre el resto; en contradicción, la determinación más coherente con los objetivos; interpretación EXTENSIVA para cesiones y cargas, RESTRICTIVA para aprovechamientos privativos",
          "Conjunto documental publicado: Memoria, NUG, NUP, Catálogo, OGE, Ordenanza de Urbanización, de Accesibilidad, de Actividades MINP, de Procedimiento, Normas de Diseño y Calidad, planos",
        ],
      },
      {
        h: "División territorial (arts. 8-15)",
        items: [
          "Niveles: UNIDAD INTEGRADA (estructura general) → UNIDADES BÁSICAS y PARCELAS (pormenorización de la edificación)",
          "Por clase de suelo: ZONAS (urbano) / SECTORES (urbanizable) / ÁREAS (no urbanizable)",
          "ÁREA DE REPARTO: ámbito con un mismo aprovechamiento tipo; POLÍGONO y UNIDAD DE EJECUCIÓN: ámbito de gestión (pueden ser discontinuos)",
          "SISTEMAS GENERALES (art. 15): infraestructuras de red general, equipamiento comunitario y espacios libres públicos",
          "Cada determinación se etiqueta GENERAL / ESTRUCTURANTE / PORMENORIZADO: estructurantes = clasificación, usos globales, áreas de reparto y su aprovechamiento tipo, sistemas generales, % VPO; pormenorizadas = unidades básicas, parcelas, UE, usos pormenorizados/detallados, plazos",
        ],
      },
      {
        h: "Clasificación, usos y aprovechamientos",
        items: [
          "Clases (art. 21): urbano, urbanizable, no urbanizable. Urbano consolidado: Z (regulado por la NUP), Z.O. (ordenada del PGOU-84 incorporada), Z.O.R. (ordenación remitida); no consolidado: Z.N. (nuevo desarrollo) y Z.N.O. (nuevo desarrollo ordenado)",
          "Urbanizable (arts. 23, 54): sectorizado S (a desarrollar por Plan Parcial) y S.O. (asume Plan Parcial existente); no sectorizado S.N. No urbanizable: Áreas 'A' en categorías PROTECCIÓN y PRESERVACIÓN",
          "Usos (art. 27): por asignación = GLOBAL (estructurante) / PORMENORIZADO / DETALLADO; por compatibilidad = principal, permitido (1), necesario (2), TOLERADO (3, máx. 25% de superficie construida), prohibido (4); por funcionalidad = residencial, productivo, dotacional, espacios libres",
          "Aprovechamiento tipo (art. 33): m² de techo del uso característico por m² de suelo → unidades de aprovechamiento (U.A.); solo donde hay áreas de reparto",
          "Piezas habitables (art. 39): módulo 110 m² construidos = 4 piezas; máximo 40% de viviendas de dos piezas por promoción",
          "VPO (art. 19): mínimo 15% de la nueva capacidad residencial de los 8 años siguientes (estructurante)",
          "Garajes (art. 31): planeamiento incorporado 1 plaza/vivienda + 1/100 m² no residencial; resto: 1,3 plazas/vivienda, comercial-oficinas 1/75 m², industrial 1/200 m²",
        ],
      },
      {
        h: "Gestión, áreas de reparto y suelo no urbanizable",
        items: [
          "Sistema de actuación general en suelo urbano: COOPERACIÓN (art. 43); plazos de 1 año: planeamiento pormenorizado, Proyecto del Sistema/Urbanización (ZN y ZOR) y solicitud de licencia",
          "Áreas de reparto: 19 en SU no consolidado (ARZ1-ARZ19, la ARZ12 ELIMINADA), cada una coincide con una UE; 7 en urbanizable (ARS1-ARS7, la mayor ARS3 Lezkairu-Arrosadía, 1.545.376 m²)",
          "Fuera de ordenación (art. 20): sin obras de consolidación; horizonte de demolición/expropiación 15 años",
          "Plazos: Plan Parcial de sector 2 años (art. 55); sistemas generales 3 años con cargo a UE en urbano / 4 años en urbanizable; 15 años los demás (arts. 51, 56)",
          "SNU (arts. 62-63): supuestos 1-3 = PROTECCIÓN; 4-5 = PRESERVACIÓN; subcategorías (ambiental, explotación natural, infraestructuras, cultural, riesgos); la VIVIENDA está PROHIBIDA en todas las subcategorías",
        ],
      },
    ],
    claves: [
      "PGOU-84: RRMM 7 y 16-11-1984; referencia de consolidados: 23-11-1984",
      "Homologación: OF 181/2007 (12 abril); Texto Refundido: Acuerdo Ayto. 18-1-2008 (BON 18-2-2008)",
      "Planos de INFORMACIÓN sin valor normativo; los de PROPUESTA con el mismo valor que las Normas",
      "Prevalecen Normas + Planos de Propuesta; cesiones extensivo / aprovechamientos restrictivo (art. 4)",
      "División: UI > UB/parcela; Zona-Sector-Área; Área de Reparto; Polígono/UE (art. 8)",
      "Zonas urbano: Z, Z.O., Z.O.R. (consolidado) / Z.N., Z.N.O. (no consolidado)",
      "Uso tolerado (nº 3): máximo 25% de la superficie construida",
      "Aprovechamiento tipo = m² techo uso característico / m² suelo → U.A. (art. 33)",
      "110 m² = 4 piezas habitables; máx. 40% viviendas de 2 piezas (art. 39)",
      "VPO: 15% de la nueva capacidad residencial en 8 años (art. 19)",
      "Revisión: 200.000 hab / 75% licencias / 75% ocupación actividad económica (art. 6)",
      "Sistema general en SU: COOPERACIÓN; plazos de 1 año (art. 43)",
      "19 ARZ (ARZ12 eliminada) + 7 ARS; fuera de ordenación: 15 años",
      "TRAMPA: clasificación (clases de suelo) ≠ calificación (asignación de usos)",
      "TRAMPA: el Plan remite a la LF 35/2002, derogada → leer en clave TRLFOTU-2017",
    ],
  },
  E54: {
    intro:
      "El Catálogo del Plan Municipal (Texto Refundido, Acuerdo C.O.T. 18/12/2002): régimen de protección individualizada del patrimonio. Patrimonio EDIFICADO (4 categorías de bienes, 3 grados de protección, glosario de obras) y patrimonio NATURAL (3 categorías, 2 grados). Redactado bajo la LF 10/1994 y el DF 85/1995, ambos derogados → leer en clave TRLFOTU-2017.",
    bloques: [
      {
        h: "Marco y conceptos previos",
        items: [
          "El Catálogo es documento del Plan Municipal (art. 5.6 NUG): protección INDIVIDUALIZADA que complementa la general de Normas y Ordenanzas",
          "Marco: LPHE 16/1985 (art. 21, catalogación en Conjuntos Históricos); LF 10/1994 (arts. 81.g, 83, 87.1, 71) y DF 85/1995 (arts. 29.1.d y 33, contenido del Catálogo) — AMBOS DEROGADOS, hoy TRLFOTU-2017. Cita la LF 10/1994, no la 35/2002 (es anterior a la homologación)",
          "Fecha límite de selección: 1968 (distancia histórica de ~30 años)",
          "CRITERIO CLAVE: el grado de protección NO es un índice del valor del edificio, sino la categoría ligada al régimen de obras adecuado; el valor real está en la ficha",
          "Interpretación (art. 3): vinculante la MÁS RESTRICTIVA / mayor protección; la FICHA PARTICULAR prevalece sobre las normas generales",
          "Antecedentes: catálogos del PGOU-84 ('Inventario del Patrimonio Urbano'), y previos de 1979 (Casco Antiguo, MOPU), I Ensanche y zonas verdes",
        ],
      },
      {
        h: "Patrimonio edificado: tipos de bienes y estadística",
        items: [
          "CUATRO categorías (art. 5): 1) ZONAS ARQUEOLÓGICAS (Área A: restos de valor excepcional documentados, incluye patios de manzana del Casco Viejo y castillo de Luis el Hutín; Área B: restos probados o presumidos sin documentación suficiente)",
          "2) RECINTOS, cinco: R1 Recinto amurallado, R2 Ciudadela, R3 Catedral y Palacio Arzobispal, R4 Palacio de Navarra, R5 Plaza de las Recoletas",
          "3) EDIFICIOS: 488 en tres grados; 4) ELEMENTOS: EVE vinculados a la edificación (114 = 95 escudos + 19 varios; su catalogación NO cataloga el edificio) y ENVE no vinculados (54: 8 puentes, 4 cruceros, 5 fuentes, 13 monumentos, 7 varios, 17 panteones)",
          "Estadística de edificios: Grado 1 = 29 (5,94%); Grado 2 = 61 (12,5%); Grado 3 = 392 (80,32%). Por zonas: Casco Viejo 316 (64,75%), Ensanches 129 (26,43%)",
          "Fichas individualizadas: 552 (5 recintos + 488 edificios + 54 ENVE; los EVE van en la ficha del edificio)",
          "Actuaciones (art. 7): PERMITIDAS (licencia salvo informe desfavorable en consulta previa) / AUTORIZABLES (según compatibilidad caso a caso) / PROHIBIDAS",
        ],
      },
      {
        h: "Glosario de obras (art. 8) — definiciones de examen",
        items: [
          "REHABILITACIÓN: adecuar a un uso pudiendo variar elementos, pero MANTENIENDO LA TRAZA Y ESTRUCTURA GENERAL",
          "RESTAURACIÓN: devolver al estado original; RESTITUCIÓN: devolver al estado primitivo incluyendo aportaciones históricas de interés",
          "RECONSTRUCCIÓN: volver a levantar lo desaparecido fiel a su origen; REEDIFICACIÓN: sustituir con volumen similar; SUSTITUCIÓN: cambiar por otro de características diferentes",
          "VACIADO: derribo de estructuras internas MANTENIENDO LAS FACHADAS; se considera vaciado cuando el derribo supera el 50% de la superficie interior",
          "REESTRUCTURACIÓN: alteración total o parcial del trazado u organización espacial; AMPLIACIÓN: 3 casos (sin aumento de volumen / con volumen sin más ocupación / con volumen y más ocupación en planta)",
        ],
      },
      {
        h: "Grados de protección de edificios (arts. 20, 25-30)",
        items: [
          "GRADO 1: los más emblemáticos, protección GLOBAL, hito en la trama urbana. PROHIBIDOS: vaciado, reestructuración total y AMPLIACIÓN EN ALTURA; reestructuración parcial solo excepcional (incendios, ascensores)",
          "GRADO 2: valores NOTABLES, permanencia asegurada; zonas interiores menores permiten régimen de obras más amplio. Reestructuración PARCIAL autorizable, TOTAL prohibida; vaciado prohibido; ampliaciones en planta y altura autorizables",
          "GRADO 3: el resto; normalmente se protege SOLO LA FACHADA. Reestructuración TOTAL y VACIADO autorizables; régimen específico para locales comerciales catalogados",
          "Fachadas protegidas (art. 24): PROHIBIDO cerrar balcones y terrazas, instalar instalaciones en fachada (salvo bajantes de pluviales), antenas y marquesinas",
          "Ruina (art. 22): el edificio catalogado declarado en ruina DEBE SER REHABILITADO a cargo de su propietario",
          "Procedimiento (arts. 40-43): toda licencia añade MEMORIA DE PROTECCIÓN; consulta previa PRECEPTIVA en grados 1 y 2 (en grado 3, solo si afecta a elementos de interés o cubierta); BIC → autorización previa de la Institución Príncipe de Viana; zonas arqueológicas: Área A excavación/catas, Área B catas",
          "ENVE (art. 39): permitidas solo conservación, restauración y consolidación; NO se autorizan reestructuración ni demolición",
        ],
      },
      {
        h: "Patrimonio natural (Normativa, arts. 1-15)",
        items: [
          "TRES categorías (art. 5): ÁRBOLES AISLADOS (protección de parte aérea, subterránea —proyección de copa, 1,5 m de profundidad— y suelo bajo copa), PARQUES Y JARDINES, y ALINEACIONES ARBOLADAS",
          "DOS grados (art. 8), no tres: GRADO 1 = mantenimiento/mejora y recuperación de lo original; GRADO 2 = además rehabilitación y/o adaptación",
          "Grado 1: Sequoia de la Diputación, Sequoia del INAP (además MONUMENTO NATURAL MN-25, O.F. 926/1996 — su régimen de Espacio Natural PREVALECE), Sophora de Recoletas; Jardines de la Taconera, Parque de la Media Luna, Jardín de Diputación",
          "Grado 2: 14 árboles notables; parques (Ciudadela-Vuelta del Castillo, Antoniutti, Yamaguchi, campus UN y UPNA, Parque Fluvial…) y ~30 alineaciones arboladas",
          "Prohibida toda actuación sobre arbolado público sin autorización; talas de grado 2 compensadas con plantación de número similar; el pavimento no puede pasar a predominar",
          "Infracciones (art. 15): valoración conforme a las NORMAS GRANADA (UNESCO 1990), sin perjuicio de la LF 9/1996 de Espacios Naturales de Navarra",
        ],
      },
    ],
    claves: [
      "Catálogo = documento del Plan (art. 5.6 NUG); TR Acuerdo C.O.T. 18-12-2002",
      "Marco: LPHE 16/1985 art. 21 + LF 10/1994 + DF 85/1995 (derogados → TRLFOTU-2017)",
      "Fecha límite de catalogación: 1968",
      "El grado NO mide el valor: es el régimen de obras adecuado; la ficha prima sobre la norma general",
      "4 categorías edificado: zonas arqueológicas (A/B), recintos (R1-R5), edificios (488), elementos (EVE 114 / ENVE 54); 552 fichas",
      "Grados: G1 = 29 (5,94%) / G2 = 61 (12,5%) / G3 = 392 (80,32%); Casco Viejo 316",
      "G1: prohibidos vaciado, reestructuración total y ampliación en altura",
      "G2: reestructuración parcial sí / total no; vaciado prohibido",
      "G3: solo fachada; reestructuración total y vaciado AUTORIZABLES",
      "Vaciado = derribo interior >50% manteniendo fachadas (art. 8)",
      "Catalogado en ruina → DEBE rehabilitarse a cargo del propietario (art. 22)",
      "BIC: autorización previa de la Institución Príncipe de Viana (arts. 41, 43)",
      "Consulta previa preceptiva en G1-G2; en G3 solo elementos de interés o cubierta (art. 43)",
      "Patrimonio natural: 3 categorías y DOS grados (edificado tiene tres)",
      "Sequoia del INAP = Monumento Natural MN-25 (OF 926/1996); prevalece su régimen",
      "Infracciones patrimonio natural: Normas Granada (UNESCO 1990) + LF 9/1996",
    ],
  },

  E21: {
    intro:
      "El Decreto Foral 26/2022 desarrolla la LF 17/2020 de actividades con incidencia ambiental. Para el arquitecto municipal el núcleo es el Título IV (licencia de actividad clasificada: tramitación, plazos y régimen de modificaciones) y los Anejos I y II, que fijan los umbrales de superficie y aforo a partir de los cuales el expediente necesita informe preceptivo y VINCULANTE de protección civil o de salud pública. Tema de plazos y porcentajes: es donde se juega el examen.",
    bloques: [
      {
        h: "Título I — Disposiciones generales (arts. 1-11)",
        items: [
          "Objeto (art. 1): procedimientos de AAI, AAU, evaluación de afecciones ambientales y LAC; régimen de inspección y restauración de la legalidad; sustitución de la sanción de multa por prestación ambiental",
          "Instalación existente (art. 2.a): autorizada ANTES del 22 de junio de 2021, o que hubiera solicitado las autorizaciones, siempre que se ponga en funcionamiento como máximo 12 meses después",
          "Órgano ambiental (art. 2.c): el de la Dirección General con competencias en medio ambiente; hace el análisis técnico y formula las DIA e informes de impacto ambiental. No confundir con el órgano sustantivo (el que autoriza la implantación)",
          "Instalaciones independientes (art. 3): lo son cuando no guardan relación técnica, o cuando la guardan pero no constituyen unidades subordinadas → cada una con su propia autorización",
          "Varios titulares (art. 4): responsabilidad SOLIDARIA, salvo que la autorización detalle el alcance de cada uno y así se haya pedido al presentar la solicitud",
          "Silencio (art. 7): DESESTIMATORIO en todos los procedimientos del reglamento. La resolución expresa tardía no queda vinculada al sentido del silencio",
          "Confidencialidad (art. 8.3): NUNCA son confidenciales la ubicación ni los impactos ambientales — consumos de agua, energía y combustibles, producción de residuos, emisiones a la atmósfera y aguas residuales",
          "Tramitación electrónica (art. 6); régimen sancionador por remisión al Título III de la LF 17/2020 (art. 10); registros con desagregación por sexo (art. 11)",
        ],
      },
      {
        h: "Título IV — Tramitación de la licencia de actividad clasificada (arts. 45-56)",
        items: [
          "Solicitud ante la ENTIDAD LOCAL con proyecto técnico; el plazo se computa desde la presentación siempre que se acompañe el proyecto (art. 45)",
          "Proyecto técnico (art. 46): 4 documentos — memoria, diagrama de flujo, documentación gráfica y presupuesto económico de las medidas de protección ambiental. Residuos con código LER",
          "Inadmisión a trámite (art. 47): expresa y motivada, plazo de 15 DÍAS, solo por razones de competencia municipal (planeamiento urbanístico u ordenanzas)",
          "Información pública (art. 48): no inferior a 20 DÍAS desde publicación en el BON + tablón + notificación personal a propietarios y ocupantes de las fincas inmediatas (y a los Concejos en municipios compuestos). Alegaciones al promotor: 15 días",
          "Informes de los Departamentos (art. 49): PRECEPTIVOS Y VINCULANTES para la entidad local; plazo 1 MES desde la recepción del resultado de la información pública; si no se emiten, se continúa la tramitación",
          "Si se deniega la autorización en suelo no urbanizable: resolución motivada poniendo fin al procedimiento y archivo (art. 49.3)",
          "La LAC incluye las condiciones de la autorización de vertido a colector; informe a las Mancomunidades (art. 51)",
          "Propuesta de resolución + audiencia de 15 días (art. 52). Resolución: 4 MESES desde documentación completa; silencio DESESTIMATORIO; publicación en el BON; traslado a los Concejos en 5 días (art. 53)",
          "Licencia de obras mientras se tramita la LAC (art. 55): solo si NO requiere autorización en SNU, NO presenta riesgos para la seguridad, NO presenta riesgos para la salud y NO requiere autorización ganadera. Obras bajo exclusiva responsabilidad del titular",
          "Puesta en marcha (art. 56): declaración responsable del promotor con la fecha de inicio; si no se pone en funcionamiento, resolución expresa de caducidad previa audiencia",
        ],
      },
      {
        h: "Modificaciones de la actividad (arts. 57-64)",
        items: [
          "Procedimiento (art. 57): el titular notifica indicando si la considera sustancial; el órgano lo determina expresamente en 1 MES; si es no sustancial y no hay pronunciamiento contrario en ese mes, puede ejecutarse. La resolución que califica la modificación vale 4 MESES",
          "Umbrales de modificación SUSTANCIAL (art. 58): +50% capacidad de producción · +50% consumo de agua, materias primas o energía · +25% emisión másica de contaminantes atmosféricos · +25% emisión o concentración de vertidos · +40% capacidad de almacenamiento de productos químicos",
          "Residuos: peligrosos, +4 t/año Y +25% del total autorizado; no peligrosos, +20 t/año Y más del 50%",
          "También: alcanzar por sí sola los umbrales del Anejo 3 de la LF 17/2020 o del Anejo I del reglamento; aumento del nivel de riesgo intrínseco (8 niveles, Tabla 1.3 Anexo I del RD 2267/2004); nueva instalación del Anejo II; aumento de categoría de toxicidad de biocidas",
          "Criterios NO limitativos; la suma de dos o más modificaciones no sustanciales puede ser sustancial (art. 58.3)",
          "Procedimiento de modificación sustancial (art. 59): subsanación 10 días · información pública no inferior a 15 días · informes vinculantes 1 mes · audiencia 15 días · resolución 3 MESES",
          "Puesta en funcionamiento de la modificación sustancial: máximo 2 AÑOS y declaración responsable previa; las condiciones se aplican desde la fecha de esa declaración (arts. 60-61)",
          "No se conceden licencias de obras hasta resolver la modificación sustancial (art. 61.4) — al revés que en el otorgamiento inicial (art. 55)",
          "Modificación de oficio (art. 63) y a solicitud del titular (art. 64): resolución en 3 MESES; en la instada por el titular el silencio es desestimatorio; se acompaña estudio justificativo de las MTD",
        ],
      },
      {
        h: "Título VI — Restauración de la legalidad ambiental (arts. 77-81)",
        items: [
          "Actividad sin licencia (art. 77): la Administración determina si procede legalización o clausura definitiva, previa audiencia; la tramitación es la misma que hubiera correspondido para autorizarla",
          "Fianzas o avales equivalentes al valor de la restauración; se devuelven al verificarse el cumplimiento (art. 78)",
          "Incumplimiento de medidas cautelares (art. 79): alegaciones en plazo no inferior a 10 ni superior a 15 días; resolución en 6 MESES desde el acuerdo de inicio; pago voluntario 1 mes y después vía de apremio (Hacienda Tributaria de Navarra)",
          "Reposición e indemnización (art. 80): NO puede iniciarse mientras haya un procedimiento sancionador en curso sobre los mismos hechos y sujetos",
          "Los hechos probados en resoluciones penales firmes y en las sancionadoras que agotan la vía administrativa VINCULAN; resolución en 6 meses o caducidad (art. 81)",
        ],
      },
      {
        h: "Anejo I — Informe de PROTECCIÓN CIVIL (umbrales de memoria)",
        items: [
          "Todas las AAI y todas las AAU, excepto las explotaciones ganaderas",
          "Grupos 1 a 14 (industrias y almacenamientos): superficie construida > 1.000 m² (se exceptúa el grupo 8, ganaderas)",
          "15.1 Espectáculos y actividades recreativas en locales cubiertos: aforo > 100 personas (también locales sociales y sociedades gastronómicas con ocupación > 100)",
          "15.2 Tanatorios y velatorios: ocupación > 100 personas",
          "15.5 Alojamiento turístico: superficie construida > 500 m², EXCEPTO casas rurales — y campings SIEMPRE, sin umbral",
          "15.6 Comercial y centros comerciales: zona de ventas > 750 m²",
          "Sanitario con hospitalización o con ocupantes que precisan ayuda para evacuar: > 500 m²; resto de sanitario: > 1.000 m²",
          "Residencial público no turístico (residencias de mayores, juveniles): > 500 m² · Aparcamientos: > 1.000 m² · Docente: > 1.000 m² · Administrativo: > 2.000 m² · Cultural y religioso: > 500 m²",
          "Infraestructuras de transporte (estaciones, aeropuertos): SIEMPRE, sin umbral",
          "La ocupación se calcula con las densidades del CTE DB-SI; en establecimientos con elementos comunes de circulación se toma la superficie del conjunto y su actividad principal",
        ],
      },
      {
        h: "Anejo II — Informe de SALUD PÚBLICA",
        items: [
          "Almacenamiento, distribución o aplicación de biocidas (salvo los de uso autorizado para el público en general)",
          "Nuevos cementerios o ampliación de los existentes",
          "Establecimientos no sanitarios de tatuaje o piercing",
          "Centros sanitarios con internamiento y centros socio-sanitarios residenciales",
          "Cualquier actividad con clubes de fumadores, uso recreativo del agua, agua de consumo humano no procedente de red pública, reutilización de aguas regeneradas o recicladas",
          "Instalaciones de riesgo de legionela: torres de refrigeración y condensadores evaporativos, agua climatizada con agitación constante, centrales humidificadoras industriales, ACS de edificios prioritarios",
        ],
      },
    ],
    claves: [
      "Silencio en TODOS los procedimientos del reglamento: desestimatorio (art. 7)",
      "Inadmisión a trámite: 15 días y solo por competencia municipal (planeamiento u ordenanzas)",
      "Información pública LAC: 20 días (la de la modificación sustancial: 15 días)",
      "Informes autonómicos: preceptivos y VINCULANTES, plazo 1 mes; si no llegan, se continúa",
      "Resolución LAC: 4 meses · Modificación (sustancial, de oficio o a instancia): 3 meses",
      "Modificación: el órgano califica en 1 mes; la calificación caduca a los 4 meses; puesta en funcionamiento en 2 años",
      "Porcentajes: 50% producción y consumos · 25% emisiones y vertidos · 40% almacenamiento químico",
      "Residuos peligrosos: 4 t/año + 25%; no peligrosos: 20 t/año + 50%",
      "Licencia de obras: SÍ cabe mientras se tramita la LAC inicial (4 requisitos del art. 55); NO cabe mientras se tramita una modificación sustancial (art. 61.4)",
      "Anejo I: industrias 1.000 m² · comercial 750 m² de zona de ventas · alojamiento turístico 500 m² (campings siempre) · administrativo 2.000 m² · aforo 100 personas",
      "Instalación existente: autorizada antes del 22-06-2021 (+12 meses para ponerse en marcha)",
      "Título VI: resolución en 6 meses; el sancionador en curso bloquea el procedimiento de reposición",
    ],
  },

  E22: {
    intro:
      "La Ley Foral 7/2003 de Turismo de Navarra ordena el sector turístico foral. Del temario interesan cuatro cosas: el reparto de competencias (la Comunidad Foral clasifica, inspecciona y sanciona; las entidades locales otorgan licencias), el Registro de Turismo de Navarra y su acceso por declaración responsable, las clases de alojamiento turístico y el concepto de restauración. Ojo a la diferencia entre CLASE (art. 16) y MODALIDAD (art. 18).",
    bloques: [
      {
        h: "Título I — Objeto, fines y principios (arts. 1-4)",
        items: [
          "8 fines (art. 3): impulsar el turismo como sector económico y social; promover Navarra como destino; fomentarlo también como valor social; delimitar competencias; ordenar la actividad con un modelo de gestión sostenible; proteger los derechos de los usuarios; proteger y preservar los recursos turísticos; propiciar la formación de los profesionales",
          "5 principios (art. 4): tratamiento UNITARIO de Navarra como destino; coordinación, colaboración y cooperación entre Administraciones; calidad; contribución al desarrollo de los ciudadanos y del patrimonio con respeto, mejora y sostenibilidad; promoción como factor de equilibrio territorial y de mantenimiento de la vida rural",
          "Ámbito (art. 2): sujetos que realizan actividad turística, canales y plataformas de comercialización, Administraciones, turistas y usuarios, y asociaciones de titulares o gestores",
        ],
      },
      {
        h: "Competencias (arts. 5-7)",
        items: [
          "Comunidad Foral (art. 5): formular la política turística, promocionar la imagen de Navarra, planificar y ordenar, desarrollo reglamentario, programas de calidad, y las potestades de INSCRIPCIÓN, CLASIFICACIÓN, INSPECCIÓN y SANCIÓN",
          "Registros y estadísticas del sector a través del OBSERVATORIO DE TURISMO DE NAVARRA (art. 5.1.i)",
          "Entidades locales (art. 6): promover y fomentar sus recursos, protegerlos y conservarlos, colaborar con la Comunidad Foral, OTORGAR LAS LICENCIAS que la legislación les atribuye, desarrollar sus infraestructuras turísticas y gestionar sus servicios",
          "Relaciones interadministrativas (art. 7): eficacia, coordinación, colaboración, cooperación e información mutua",
        ],
      },
      {
        h: "Conceptos (art. 12)",
        items: [
          "Recurso turístico: bien material o manifestación de la realidad física, geográfica, social o cultural susceptible de generar corrientes turísticas (desplazamiento y permanencia fuera del domicilio)",
          "Empresa turística: quien en nombre propio, de manera HABITUAL y con ÁNIMO DE LUCRO realiza actividad o presta servicio turístico. Se PRESUME la habitualidad cuando se hace publicidad por cualquier medio",
          "Entidad turística no empresarial: SIN ánimo de lucro, promueve el desarrollo turístico",
          "Establecimiento turístico: conjunto de bienes muebles e inmuebles que forman una UNIDAD FUNCIONAL AUTÓNOMA ordenada por el titular",
          "Canal o plataforma de oferta turística: sistema que comercializa, publicita o facilita la reserva, incluso por enlace o alojamiento de contenidos",
          "Viajes combinados y servicios de viaje vinculados: los del art. 151 del RDL 1/2007 (TRLGDCU)",
        ],
      },
      {
        h: "Régimen jurídico de la actividad (art. 13) y consulta previa (art. 13 bis)",
        items: [
          "El ejercicio de la actividad turística es LIBRE, sin más límites que las normas aplicables; pero con carácter previo al inicio hay que estar inscrito en el Registro de Turismo de Navarra",
          "Prestadores de otros Estados de la UE sin establecimiento en Navarra: NO sujetos al deber de inscripción, sin perjuicio de la supervisión del Departamento",
          "ACTIVIDAD CLANDESTINA: publicitar por cualquier medio o prestar efectivamente servicios sujetos a inscripción sin haber presentado la declaración responsable",
          "Precios LIBRES; las tarifas siempre a disposición del usuario y expuestas en lugar visible del establecimiento",
          "Todos los establecimientos turísticos son PÚBLICOS y de acceso libre, sin limitaciones discriminatorias por nacimiento, raza, sexo, religión, opinión o cualquier otra circunstancia personal o social",
          "Consulta potestativa previa (art. 13 bis): sobre la clasificación turística, antes de cualquier trámite; se responde en 2 MESES; NO es vinculante y la falta de respuesta NO supone conformidad; las entidades locales pueden formularla al tramitar sus licencias",
        ],
      },
      {
        h: "Registro de Turismo de Navarra (art. 14)",
        items: [
          "Registro PÚBLICO de naturaleza administrativa: establecimientos, empresas, entidades no empresariales y profesiones turísticas",
          "Inscripción OBLIGATORIA: alojamiento (art. 16), mediación (art. 25), actividades complementarias (art. 28) y las que se determinen reglamentariamente. En los demás casos es potestativa",
          "Pero la inscripción es obligatoria para acceder a AYUDAS Y SUBVENCIONES, salvo las destinadas a la creación de empresas y establecimientos turísticos",
          "Se practica por DECLARACIÓN RESPONSABLE: su presentación con la documentación exigida basta para tener por cumplido el deber de inscripción",
          "Inexactitud, falsedad u omisión ESENCIAL: imposibilidad de continuar la actividad y cancelación; la resolución puede impedir volver a inscribirse durante un máximo de 6 MESES",
          "Modificación sustancial que obliga a anotación: variación del número de PLAZAS, ampliación de servicios, cambio de uso turístico y CAMBIO DE TITULARIDAD",
          "Baja definitiva: comunicación previa. El cese superior a 2 AÑOS consecutivos conlleva cancelación DE OFICIO, previa audiencia",
        ],
      },
      {
        h: "Alojamiento turístico (arts. 15-22 bis)",
        items: [
          "Concepto (art. 15): alojamiento temporal mediante precio, con o sin servicios complementarios. Principio de UNIDAD DE EXPLOTACIÓN: una única titularidad empresarial por establecimiento, edificio o parte homogénea",
          "Excluidos: alojamientos para uso exclusivo de miembros de entidades privadas; el subordinado a actividades escolares, culturales, ambientales, religiosas o deportivas no comercializadas turísticamente; los de fines institucionales, sociales, asistenciales, laborales o de programas para juventud y tercera edad",
          "CLASES (art. 16.1): establecimientos hoteleros · campamentos de turismo · albergues turísticos · casas rurales · apartamentos turísticos y viviendas turísticas · alojamientos singulares · los que se determinen reglamentariamente",
          "MODALIDADES hoteleras (art. 18): Hotel · Hotel-Rural · Hotel-Apartamento · Hostal · Pensión. El Hotel ocupa la totalidad de un edificio o parte independiente con entradas, escaleras y ascensores de uso exclusivo de la clientela (excepcionalmente varios edificios como conjunto arquitectónico homogéneo)",
          "Placa normalizada OBLIGATORIA junto a la entrada principal con el distintivo y la clasificación; la categoría debe figurar en la publicidad y en las FACTURAS (art. 16.4-5)",
          "Dispensa excepcional de requisitos técnicos (art. 16.3): motivada, previo informe técnico, a solicitud del interesado y con factores compensatorios; pensada para edificios de singular valor arquitectónico, rehabilitados en cascos históricos o de arquitectura tradicional",
          "Apartamentos turísticos: sometidos a régimen de PROPIEDAD HORIZONTAL. Viviendas turísticas: chalés, casas independientes o adosados (art. 22)",
          "Albergues (art. 20): habitaciones mayoritariamente de capacidad múltiple; quedan excluidos los Albergues Juveniles de la Red de Albergues de Juventud, que tienen normativa propia",
          "Campamentos de turismo (art. 19): la acampada libre y las juveniles se rigen por su normativa específica; los bungalós deben ser explotados por el MISMO titular del campamento",
          "Alojamientos singulares (art. 22 bis): por excepcionalidad o morfología no encajan en ninguna clase. NO lo son los que simplemente incumplen requisitos técnicos de su clase",
        ],
      },
      {
        h: "Restauración (arts. 23-24)",
        items: [
          "Establecimientos de restauración: de forma habitual, profesional y mediante precio, suministran desde instalaciones fijas o móviles abiertas al público comidas y bebidas para consumo EN SUS PROPIAS DEPENDENCIAS",
          "EXCLUIDA la restauración social colectiva: comedores asistenciales, institucionales, escolares, universitarios, sociales o laborales destinados a colectivos particulares y no al público en general",
          "Modalidades (art. 24): restaurantes; otros que se determinen reglamentariamente; establecimientos de hostelería con actividades gastronómicas declaradas de interés turístico o de carácter emblemático, singular o de arraigo",
        ],
      },
    ],
    claves: [
      "Comunidad Foral: inscripción, clasificación, inspección y sanción · Entidades locales: LICENCIAS",
      "Registros y estadísticas: Observatorio de Turismo de Navarra",
      "Habitualidad de la empresa turística: se PRESUME por hacer publicidad",
      "Actividad clandestina: publicitar o prestar servicios sin la declaración responsable previa",
      "Consulta previa de clasificación: 2 meses, potestativa y NO vinculante; el silencio no da conformidad",
      "Inscripción potestativa, salvo alojamiento, mediación y complementarias — pero obligatoria para ayudas y subvenciones",
      "Falsedad esencial: cancelación + prohibición de inscribirse hasta 6 meses",
      "Cese de actividad > 2 años consecutivos: cancelación de oficio previa audiencia",
      "Cambio de titularidad y variación de plazas = modificación SUSTANCIAL a anotar",
      "6 clases de alojamiento (art. 16) vs 5 modalidades hoteleras (art. 18): hostal y pensión son MODALIDADES, no clases",
      "Placa normalizada junto a la entrada principal; categoría en publicidad y facturas",
      "Apartamento turístico = propiedad horizontal; vivienda turística = chalé, adosado o casa independiente",
      "Unidad de explotación: una única titularidad por establecimiento o parte homogénea del edificio",
      "Restauración: consumo en las propias dependencias; excluida la restauración social colectiva",
    ],
  },

  E25: {
    intro:
      "El RD 1627/1997 desarrolla la Ley 31/1995 de Prevención de Riesgos Laborales para las obras de construcción. Define los agentes (promotor, proyectista, coordinadores, dirección facultativa, contratista, subcontratista y autónomo) y encadena tres documentos: ESTUDIO (o estudio básico) en fase de proyecto → PLAN del contratista en fase de ejecución → LIBRO DE INCIDENCIAS durante la obra. No se aplica a industrias extractivas.",
    bloques: [
      {
        h: "Ámbito y definiciones (arts. 1-2)",
        items: [
          "Disposiciones mínimas de seguridad y salud en obras de construcción, en el marco de la Ley 31/1995. NO se aplica a industrias extractivas a cielo abierto, subterráneas o por sondeos",
          "Promotor: cualquier persona por cuenta de la cual se realiza una obra. Proyectista: autor del proyecto por encargo del promotor",
          "Dirección facultativa: técnico o técnicos designados por el promotor para la dirección y control de la ejecución. El coordinador de ejecución está INTEGRADO en ella; el coordinador de proyecto, no",
          "Contratista: asume el compromiso ante el PROMOTOR. Subcontratista: lo asume ante el CONTRATISTA",
          "Trabajador autónomo: sin contrato de trabajo y de forma personal y directa. Si emplea trabajadores por cuenta ajena pasa a tener la consideración de contratista o subcontratista",
          "Contratistas y subcontratistas tienen la consideración de EMPRESARIO a efectos de la normativa de prevención",
          "Si el promotor contrata directamente a trabajadores autónomos, es CONTRATISTA respecto de ellos — salvo la construcción o reparación que contrate un cabeza de familia respecto de su propia vivienda",
        ],
      },
      {
        h: "Coordinadores (art. 3)",
        items: [
          "Coordinador en fase de PROYECTO: obligatorio cuando intervengan VARIOS PROYECTISTAS",
          "Coordinador en fase de EJECUCIÓN: obligatorio cuando intervenga más de una empresa, o una empresa y trabajadores autónomos, o varios autónomos. Se designa antes del inicio de los trabajos o tan pronto se constate esa circunstancia",
          "Ambas designaciones pueden recaer en la misma persona",
          "La designación NO exime al promotor de sus responsabilidades",
          "Cuando no sea necesario designar coordinador, sus funciones (aprobar el plan, controlar accesos) las asume la DIRECCIÓN FACULTATIVA",
        ],
      },
      {
        h: "Estudio de seguridad y salud vs estudio básico (arts. 4-6)",
        items: [
          "Estudio COMPLETO si concurre alguno de estos 4 supuestos (art. 4.1): PEC ≥ 450.759,08 € (las 75 millones de pesetas del texto original) · duración estimada > 30 días laborables empleando en algún momento a más de 20 trabajadores simultáneamente · volumen de mano de obra > 500 jornadas · obras de túneles, galerías, conducciones subterráneas y presas",
          "En cualquier otro caso: ESTUDIO BÁSICO. Nunca se queda una obra sin ninguno de los dos",
          "Lo elabora el técnico competente designado por el promotor; si hay coordinador de proyecto, le corresponde a él elaborarlo o hacer que se elabore bajo su responsabilidad",
          "5 documentos del estudio completo (art. 5.2): MEMORIA descriptiva · PLIEGO de condiciones particulares · PLANOS · MEDICIONES · PRESUPUESTO. El estudio básico no exige esta estructura documental: basta con precisar las normas aplicables y los riesgos",
          "El presupuesto se incorpora al presupuesto general de la obra como UN CAPÍTULO MÁS; solo caben partidas alzadas en elementos de difícil previsión; no incluye los costes de la correcta ejecución profesional de los trabajos",
          "El contratista puede proponer alternativas en el plan, con justificación técnica, siempre que no disminuyan el importe total ni los niveles de protección",
          "Tanto el estudio como el básico deben contemplar las previsiones e informaciones útiles para los previsibles TRABAJOS POSTERIORES",
        ],
      },
      {
        h: "Plan de seguridad y salud (art. 7)",
        items: [
          "Lo elabora CADA CONTRATISTA en aplicación del estudio o del estudio básico, en función de su propio sistema de ejecución",
          "Se aprueba ANTES DEL INICIO DE LA OBRA por el coordinador de ejecución (o por la dirección facultativa si no hay coordinador)",
          "Obras de las Administraciones públicas: el plan, con informe del coordinador, se eleva para su aprobación a la ADMINISTRACIÓN QUE HAYA ADJUDICADO LA OBRA",
          "Es el instrumento básico de ordenación de la actividad preventiva en la obra",
          "Puede modificarse durante la ejecución, pero siempre con aprobación expresa en los mismos términos",
          "Debe estar en la obra a disposición permanente de la dirección facultativa, de los trabajadores y sus representantes, y de la Inspección de Trabajo",
        ],
      },
      {
        h: "Obligaciones de los agentes (arts. 8-12)",
        items: [
          "Coordinador de ejecución (art. 9): coordinar la aplicación de los principios de prevención, coordinar la actuación de contratistas, subcontratistas y autónomos, APROBAR el plan y sus modificaciones, organizar la coordinación de actividades empresariales (art. 24 LPRL), coordinar el control de los métodos de trabajo y adoptar medidas para que solo accedan a la obra personas autorizadas",
          "Contratistas y subcontratistas (art. 11): cumplir y hacer cumplir el plan, aplicar los principios de la acción preventiva, cumplir el Anexo IV, informar a los autónomos y atender las instrucciones del coordinador",
          "Responden SOLIDARIAMENTE de las consecuencias del incumplimiento de las medidas del plan (art. 42.2 LPRL). Las responsabilidades del coordinador, la dirección facultativa y el promotor no les eximen",
          "Autónomos (art. 12): cumplir el Anexo IV y el plan, usar equipos conformes al RD 1215/1997 y EPI conformes al RD 773/1997, y atender las instrucciones del coordinador",
        ],
      },
      {
        h: "Libro de incidencias y paralización (arts. 13-14)",
        items: [
          "Un libro por centro de trabajo, con HOJAS POR DUPLICADO, para el control y seguimiento del plan",
          "Lo facilita el COLEGIO PROFESIONAL al que pertenezca el técnico que haya aprobado el plan; en obras de las Administraciones públicas, la OFICINA DE SUPERVISIÓN DE PROYECTOS u órgano equivalente",
          "Debe mantenerse siempre en la obra, en poder del coordinador de ejecución o, si no lo hay, de la dirección facultativa",
          "Efectuada una anotación, se notifica al contratista afectado y a los representantes de sus trabajadores. Si la anotación se refiere al incumplimiento de advertencias previas o a una paralización, se remite copia a la INSPECCIÓN DE TRABAJO en 24 HORAS",
          "Paralización (art. 14): ante RIESGO GRAVE E INMINENTE, el coordinador o cualquier persona integrada en la dirección facultativa puede paralizar los tajos o la totalidad de la obra, dejando constancia en el libro y advirtiendo antes al contratista",
          "Quien ordena la paralización debe dar cuenta a la Inspección de Trabajo, a los contratistas y subcontratistas afectados y a los representantes de sus trabajadores",
        ],
      },
      {
        h: "Otras disposiciones (arts. 15-19)",
        items: [
          "Información a los trabajadores COMPRENSIBLE (art. 15); copia del plan y de sus modificaciones a los representantes de los trabajadores (art. 16.3)",
          "VISADO (art. 17): la inclusión del estudio o del estudio básico en el proyecto de ejecución es requisito necesario para el visado colegial, para la expedición de la LICENCIA MUNICIPAL y para las demás autorizaciones administrativas",
          "En obras de las AAPP, la Oficina de Supervisión de Proyectos hace declaración expresa sobre la inclusión del estudio",
          "El AVISO PREVIO del art. 18 está DEROGADO",
          "Comunicación de apertura del centro de trabajo (art. 19): previa al comienzo de los trabajos, la presentan únicamente los CONTRATISTAS e incluye el plan de seguridad y salud",
        ],
      },
    ],
    claves: [
      "No aplica a industrias extractivas (cielo abierto, subterráneas o por sondeos)",
      "Coordinador de PROYECTO: varios proyectistas · Coordinador de EJECUCIÓN: más de una empresa",
      "La designación de coordinador NO exime al promotor de sus responsabilidades",
      "Estudio completo: PEC ≥ 450.759,08 € · > 30 días laborables con > 20 trabajadores simultáneos · > 500 jornadas · túneles, galerías, conducciones subterráneas y presas",
      "5 documentos del estudio: memoria, pliego, planos, mediciones y presupuesto",
      "El presupuesto del estudio va como un capítulo más del presupuesto general de la obra",
      "El plan lo hace CADA contratista y lo aprueba el coordinador de ejecución antes del inicio de la obra",
      "Obra pública: aprueba el plan la Administración que adjudicó la obra, con informe del coordinador",
      "Sin coordinador, sus funciones las asume la dirección facultativa",
      "Libro de incidencias: hojas por duplicado; lo facilita el Colegio profesional del técnico que aprobó el plan (o la Oficina de Supervisión de Proyectos en obra pública)",
      "Copia a la Inspección de Trabajo en 24 horas si la anotación reitera un incumplimiento o hay paralización",
      "Paralización: riesgo grave e inminente; puede ordenarla el coordinador o cualquiera de la dirección facultativa",
      "Sin estudio (o básico) no hay visado ni licencia municipal (art. 17)",
      "Aviso previo (art. 18): DEROGADO. Queda la comunicación de apertura del art. 19, que presenta el contratista e incluye el plan",
      "Contratistas y subcontratistas: responsabilidad solidaria (art. 42.2 LPRL)",
    ],
  },

  E23: {
    intro:
      "La Ley Foral 2/1989 es la norma marco de los espectáculos públicos y actividades recreativas en Navarra: una ley corta (18 artículos en los cuatro capítulos del temario) pero que reparte competencias entre el Gobierno de Navarra y los Ayuntamientos y fija el esquema de intervención que luego desarrolla el Decreto Foral 202/2002 (tema 24). Para el técnico municipal el hilo conductor es la cadena LICENCIA DE ACTIVIDAD → LICENCIA DE APERTURA → autorización especial para lo extraordinario, más la potestad de prohibir y suspender del Capítulo IV. Conviene estudiarla en pareja con el tema 24, porque la ley remite constantemente al Catálogo y el Catálogo presupone las definiciones de la ley.",
    bloques: [
      {
        h: "Capítulo I — Ámbito de aplicación (arts. 1-3)",
        nota:
          "El artículo 1 delimita el ámbito con un criterio deliberadamente amplio y luego recorta por el lado de lo privado. Lo importante es que la amplitud no se mide por el tipo de acto sino por su capacidad de congregar público: da igual quién sea el titular, si gana dinero o si lo hace una vez al año. La exclusión de lo privado, además, no es completa: la ley se va del terreno de los espectáculos pero deja intacta la exigencia de licencia municipal y de condiciones técnicas del local, que es justo lo que interesa al Ayuntamiento.",
        items: [
          "Se aplica a los espectáculos y actividades recreativas realizados ÍNTEGRAMENTE en territorio de la Comunidad Foral que vayan dirigidos al público en general o SEAN CAPACES DE CONGREGARLO (art. 1.1). Los cuatro criterios indiferentes: titularidad pública o privada, con o sin fines lucrativos, de modo habitual o esporádico",
          "Quedan excluidas (art. 1.2) las actividades restringidas al ámbito puramente privado o de carácter familiar no abiertas a la pública concurrencia, y las que se realicen en ejercicio de los derechos fundamentales reconocidos por la Constitución (manifestaciones, cultos, reuniones…)",
          "Pero la exclusión es solo parcial: los locales donde se desarrollen esas actividades CON FINES DE DIVERSIÓN O ESPARCIMIENTO siguen necesitando LICENCIA MUNICIPAL y deben reunir condiciones técnicas para evitar molestias a terceros y garantizar la seguridad de personas y bienes. La ley enumera cuatro frentes: solidez de las estructuras, funcionamiento de las instalaciones, prevención y protección contra incendios, y salubridad e higiene",
          "El Catálogo (art. 2) se remite a desarrollo reglamentario —es el DF 202/2002— y debe definir las actividades según sus características propias con tres criterios: regular y catalogar adecuando, desarrollando e impulsando las actividades y en todo caso NO RESTRINGIÉNDOLAS; facultar a los Ayuntamientos para aplicar la normativa, otorgar licencias y ampliar o restringir el horario; e imponer sanciones con criterios de PROPORCIONALIDAD, atendiendo a la capacidad económica de las empresas y a la gravedad del incumplimiento",
          "Cláusula de compatibilidad (art. 3): la Ley Foral se aplica sin perjuicio de las demás normas que incidan en aspectos distintos de los que ella regula (ruido, actividades clasificadas, patrimonio, consumo…)",
        ],
      },
      {
        h: "Capítulo II — Locales: licencias (arts. 4-6)",
        nota:
          "Aquí está el núcleo de lo que se pregunta a un arquitecto municipal. La regla es doble licencia previa —actividad y apertura— y una exigencia de precisión: la licencia no habilita para «hostelería» en abstracto, sino para la figura exacta del Catálogo, lo que explica que cambiar de uso o ampliar actividades obligue a pedir licencia nueva y no baste una simple comunicación. Junto a esa vía ordinaria conviven dos atajos tasados: la autorización especial para lo extraordinario (art. 4.4) y la licencia especial por procedimiento abreviado para lo eventual o desmontable (art. 6).",
        items: [
          "Ningún local, SEA CERRADO O DESCUBIERTO, puede dedicarse a espectáculos o actividades recreativas sin haber obtenido previamente las licencias de ACTIVIDAD y de APERTURA (art. 4.1). Son dos licencias distintas y ambas previas",
          "La licencia de actividad debe reflejar CON EXACTITUD la actividad a que se destina el local, según las definiciones del Catálogo del art. 2 (art. 4.2)",
          "Destinar el local a una actividad distinta de la anterior, o ampliar actividades, exige NUEVA LICENCIA (art. 4.3): no cabe modificar la existente ni resolverlo por comunicación",
          "La celebración de un espectáculo o actividad de carácter EXTRAORDINARIO —distinto de los habituales y no cubierto por la licencia— exige AUTORIZACIÓN ESPECIAL, que se otorga una vez comprobadas las condiciones de seguridad (art. 4.4). Este es el precepto que desarrolla el art. 31 del DF 202/2002 con el plazo de 15 días",
          "Condiciones técnicas para la licencia de actividad (art. 5): el solicitante debe acreditar que el local cumple el CTE (RD 314/2006) y los reglamentos específicos de cada tipo de espectáculo. Excepción expresa: los arts. 26, 27, 28, 29, 32 y 33 del Capítulo II del Título I del Reglamento General de Policía de Espectáculos (RD 2816/1982) NO son de aplicación en Navarra",
          "Instalaciones EVENTUALES, PORTÁTILES O DESMONTABLES (art. 6): licencia especial otorgada en procedimiento administrativo ABREVIADO, previa comprobación de las condiciones de seguridad adecuadas a cada caso",
        ],
      },
      {
        h: "Capítulo III — Celebración: autorizaciones y competencia (art. 7)",
        nota:
          "El artículo 7 es el más preguntable del tema porque combina una lista cerrada de seis supuestos con un reparto de competencias que no es intuitivo, y encima remata con un silencio administrativo POSITIVO. La lógica del reparto: el Gobierno de Navarra se queda lo que excede del municipio o tiene regulación sectorial propia (taurinos, itinerarios supramunicipales, juegos de azar, lo excepcional no catalogado); el Ayuntamiento o Concejo se queda lo que ocurre en su suelo o en sus locales (vía pública y extraordinarios). Un truco de memoria: al municipio le tocan las letras b) y e); al Gobierno, las otras cuatro.",
        items: [
          "Regla general (art. 7.1): los espectáculos que tengan lugar DE MODO HABITUAL en locales con licencia NO necesitan ningún otro trámite para celebrarse",
          "Necesitan autorización administrativa EXPRESA seis supuestos (art. 7.2): a) espectáculos taurinos · b) los que se celebren en vías públicas u ocupen espacios de uso público · c) los que discurran sobre un itinerario por MÁS DE UN MUNICIPIO · d) los juegos de azar, según su normativa propia · e) los de carácter extraordinario que se aparten de la licencia del local (art. 4.4) · f) los de características EXCEPCIONALES no incluidos en el Catálogo",
          "SILENCIO POSITIVO: si solicitada la autorización la Administración no se pronuncia en el plazo que reglamentariamente se determine, se entiende CONCEDIDA (art. 7.2 in fine)",
          "Competencia (art. 7.3): el GOBIERNO DE NAVARRA en las letras a), c), d) y f) —taurinos, itinerarios supramunicipales, juegos de azar y excepcionales no catalogados—; el AYUNTAMIENTO O CONCEJO donde se celebren en las letras b) y e) —vía pública y extraordinarios—",
        ],
      },
      {
        h: "Capítulo III — Empresas, artistas y público (arts. 8-10)",
        nota:
          "Tres sujetos y tres estatutos jurídicos. La empresa se define por asumir responsabilidades frente al público Y frente a la Administración, no por organizar sin más. Del artista interesa sobre todo la «causa legítima» para negarse a actuar, porque la ley la define y la vincula precisamente a la seguridad. Y del público, el bloque de los menores de dieciséis años, que es donde se concentran las preguntas de detalle.",
        items: [
          "Empresa (art. 8.1): personas físicas o jurídicas que ORGANIZAN el espectáculo y ASUMEN, frente al público y a la Administración, las responsabilidades derivadas de su celebración",
          "Obligaciones de la empresa (art. 8.2): adoptar las medidas de seguridad e higiene, pudiendo exigírsele servicios de seguridad y vigilancia cuando se prevea gran concentración de personas; responder de los daños que le sean imputables POR NEGLIGENCIA O IMPREVISIÓN, con obligación de asegurar los riesgos en los casos reglamentarios, sin que el seguro excluya su responsabilidad PRINCIPAL Y SOLIDARIA; ofrecer lo anunciado salvo fuerza mayor y devolver lo pagado si se suspende; y tener a disposición del público los libros y hojas de reclamaciones",
          "Artistas o ejecutantes (art. 9): lo son quienes actúan para proporcionar diversión, esparcimiento o recreo, CON O SIN RETRIBUCIÓN. Solo pueden negarse a actuar o alterar su actuación por causa legítima o fuerza mayor, y la ley define CAUSA LEGÍTIMA como la carencia o insuficiencia de las medidas de seguridad o higiene, cuyo estado tienen DERECHO A COMPROBAR antes del inicio. La actuación de menores se somete al Estatuto de los Trabajadores",
          "Público (art. 10.1): quienes acuden a presenciar o tomar parte sin otro fin que el esparcimiento, PAGUEN O NO un precio",
          "Derechos del público (art. 10.2): que se desarrolle en las condiciones anunciadas; devolución del importe si se suspende o se modifica en aspectos ESENCIALES, salvo que ello ocurra una vez iniciado y por fuerza mayor; usar las hojas de reclamaciones; y trato no discriminatorio, salvo por razones objetivas y PÚBLICAMENTE ESTABLECIDAS",
          "Prohibiciones al público (art. 10.4): exigir actuaciones distintas de las anunciadas; FUMAR en locales cerrados salvo donde la empresa lo autorice y señale con carteles visibles; portar armas u objetos que puedan usarse como tales; entrar sin cumplir los requisitos de admisión hechos públicos; y adoptar conductas peligrosas o molestas",
          "MENORES DE DIECISÉIS AÑOS (art. 10.5) — cuatro prohibiciones de entrada o participación: a) salas de fiestas, discotecas y similares, SALVO actuaciones en directo, en cuyo caso pueden acceder acompañados de progenitores o tutores, correctamente identificados y sin poder permanecer al terminar la actuación · b) los clasificados como reservados para adultos · c) los que se celebren DURANTE LA NOCHE, salvo acompañados de mayores de edad responsables de su seguridad · d) los taurinos y los de grave riesgo para la integridad física, a los que solo pueden acudir COMO ESPECTADORES",
          "Regla de cierre del art. 10.5: a los menores de dieciséis años que accedan a espectáculos no prohibidos no se les puede servir ni permitir la consumición de bebidas alcohólicas",
        ],
      },
      {
        h: "Capítulo III — Solicitud, localidades y horarios (arts. 11-12)",
        nota:
          "Bloque breve y muy memorizable. Dos ideas: la venta de localidades debe garantizar que quede aforo para el público general (contra la práctica de colocar todo por canales cerrados), y el horario general es reglamentario pero con una válvula municipal, ya que la propia norma prevé los casos en que los Alcaldes pueden modificarlo.",
        items: [
          "La solicitud de autorización previa (art. 11.1) se presenta con la debida antelación indicando denominación y características del espectáculo, artistas o ejecutantes, lugar, fechas y horarios y las demás circunstancias que se señalen",
          "Venta de localidades (art. 11.2): en las condiciones que se establezcan reglamentariamente, de modo que se asegure la posibilidad de concurrencia del público en general en AL MENOS UNA PARTE del total del aforo. Queda PROHIBIDA la reventa callejera o con recargo sobre el precio de la empresa",
          "Puntualidad y apertura (art. 12.1-2): deben comenzar a la hora anunciada y los locales estar abiertos y debidamente iluminados con antelación suficiente para permitir el acceso en condiciones de seguridad y comodidad; el órgano competente puede señalar un plazo de antelación para esa apertura",
          "Horario general (art. 12.3): se fija REGLAMENTARIAMENTE atendiendo a las clases de espectáculo, las características de sus públicos, las molestias o riesgos que originen, las estaciones o épocas del año y la distinción entre laborables y festivos. El propio horario general determina los casos en que puede ser modificado por los ALCALDES y las circunstancias para horarios particulares",
        ],
      },
      {
        h: "Capítulo IV — Registro, prohibición y suspensión (arts. 13-16)",
        nota:
          "El Capítulo IV da a la Administración tres herramientas de intervención escalonadas: registrar, prohibir antes y suspender durante. La distinción entre prohibir (art. 14, sobre lo que aún no ha empezado) y suspender (art. 15, sobre lo que ya está en marcha) es la pregunta clásica, junto con la excepción de urgencia que permite a los agentes presentes ordenar la suspensión por sí mismos sin esperar a resolución.",
        items: [
          "Registro municipal (art. 13.1): los Ayuntamientos deben mantener un registro de empresas y locales donde figuren todos los locales con licencias de actividad y apertura CON MENCIÓN EXPRESA DE SU AFORO, y todas las empresas que organicen espectáculos",
          "Los Ayuntamientos dan traslado al Gobierno de Navarra de todos los asientos, y sobre esa base el Gobierno mantiene un REGISTRO GENERAL (art. 13.2)",
          "Se PROHIBIRÁN cinco tipos de espectáculos (art. 14.1): a) los que puedan constituir DELITO · b) los que puedan dar lugar a DESÓRDENES PÚBLICOS · c) los de grave peligro para artistas o público, o los que se realicen en locales SIN LICENCIA · d) los que impliquen CRUELDAD O MALTRATO para los animales, sin que se entiendan comprendidos los espectáculos taurinos celebrados conforme a sus normas · e) los que proceda prohibir conforme a la legislación de protección de menores o de propiedad intelectual",
          "La prohibición la adopta el ORGANISMO COMPETENTE PARA AUTORIZAR el espectáculo. Si la entidad local competente no adopta ninguna medida tras ser requerida por el Gobierno de Navarra, o si es preciso actuar con urgencia, puede hacerlo el Gobierno EN SU LUGAR (art. 14.2)",
          "SUSPENSIÓN (art. 15): los espectáculos que ya se estén desarrollando pueden suspenderse en los mismos casos y por los mismos órganos del art. 14. Excepción de urgencia: cuando existan razones de MÁXIMA URGENCIA así valoradas por los agentes o delegados de la autoridad PRESENTES EN EL ACTO, pueden estos por sí mismos ordenar la suspensión",
          "Cláusula estatal (art. 16): todo lo anterior se aplica sin perjuicio de las facultades de la Administración del Estado en casos de peligro extraordinario para la seguridad pública o por aplicación de la legislación sobre estados excepcionales",
        ],
      },
      {
        h: "Capítulo IV — Inspección y control (arts. 17-18)",
        nota:
          "Este es el bloque que afecta directamente al arquitecto municipal, porque es el que le atribuye la condición de agente de la autoridad cuando inspecciona y el que permite exigir certificados técnicos en cualquier momento. Fíjate en el detalle del art. 17.4: los certificados no se archivan sin más, los Servicios Técnicos deben VERIFICARLOS y, en su caso, rectificarlos dejando constancia en el propio documento.",
        items: [
          "Vigilancia (art. 17.1): el Gobierno de Navarra y las Entidades Locales con cuerpos de policía propios dispondrán servicios ordinarios de protección y vigilancia para asegurar el normal desenvolvimiento y el cumplimiento de la legalidad",
          "Inspección (art. 17.2): ambas Administraciones deben designar PERSONAL TÉCNICO que realice las inspecciones necesarias en locales e instalaciones. En el ejercicio de sus funciones, ese personal tiene la consideración de AGENTE DE LA AUTORIDAD",
          "Las empresas están obligadas a facilitar el LIBRE ACCESO de las personas designadas y a prestarles la colaboración necesaria (art. 17.3)",
          "Certificados (art. 17.4): en CUALQUIER MOMENTO puede exigirse a las empresas titulares la presentación de certificados suscritos por técnicos competentes que acrediten el cumplimiento de las condiciones de seguridad. Una vez en poder de la Administración, los Servicios Técnicos del apartado 2 deben VERIFICARLOS y en su caso RECTIFICARLOS, dejando siempre constancia en los mismos de tales actuaciones",
          "Apoyo y sustitución (art. 18): el Gobierno presta apoyo técnico a las Entidades locales PREVIA PETICIÓN de éstas. Si una entidad local no ejercita las funciones de inspección, debe hacerlo el Gobierno en su lugar, previo requerimiento y SOLO si aquélla no dispone de personal propio cualificado",
        ],
      },
    ],
    claves: [
      "Ámbito: realizados íntegramente en Navarra + dirigidos al público o CAPACES DE CONGREGARLO; da igual titularidad, lucro y habitualidad",
      "Lo privado o familiar queda excluido, pero el local con fines de diversión sigue necesitando licencia municipal y condiciones técnicas",
      "Doble licencia previa: ACTIVIDAD + APERTURA, en local cerrado o descubierto",
      "Cambio de actividad o ampliación = NUEVA licencia (art. 4.3), no modificación",
      "Art. 5: se exige el CTE, salvo los arts. 26, 27, 28, 29, 32 y 33 del RD 2816/1982, inaplicables en Navarra",
      "Instalaciones eventuales, portátiles o desmontables: licencia especial en procedimiento ABREVIADO (art. 6)",
      "Seis supuestos de autorización expresa (art. 7.2): taurinos · vía pública · itinerario supramunicipal · juegos de azar · extraordinarios · excepcionales no catalogados",
      "Competencia: GOBIERNO a), c), d) y f) · AYUNTAMIENTO O CONCEJO b) y e)",
      "Silencio administrativo POSITIVO en la autorización del art. 7.2",
      "La empresa responde de daños por negligencia o imprevisión; el seguro no excluye su responsabilidad principal y SOLIDARIA",
      "Causa legítima del artista para no actuar = carencia o insuficiencia de medidas de seguridad o higiene, que tiene derecho a comprobar antes",
      "Menores de 16: discotecas salvo directo con progenitores · reservados a adultos · nocturnos salvo acompañados · taurinos solo como espectadores",
      "Reventa callejera o con recargo: PROHIBIDA. La venta debe dejar parte del aforo al público general",
      "El horario general es reglamentario, pero él mismo fija cuándo pueden modificarlo los ALCALDES",
      "Registro municipal con mención expresa del AFORO; traslado al Gobierno, que lleva el registro general",
      "Taurinos: excluidos de la prohibición por crueldad o maltrato animal si se celebran conforme a sus normas",
      "PROHIBIR (art. 14) = antes · SUSPENDER (art. 15) = ya empezado; en máxima urgencia lo ordenan los propios agentes presentes",
      "El personal técnico de inspección tiene consideración de AGENTE DE LA AUTORIDAD",
      "Los certificados de técnico competente pueden exigirse en cualquier momento, y los Servicios Técnicos los verifican y rectifican dejando constancia",
      "El Gobierno solo sustituye a la entidad local si ésta no dispone de personal propio cualificado",
    ],
  },

  E33: {
    intro:
      "Título VI de la LFOTU, el más corto de los cinco que estudias del DFL 1/2017 y también el más manejable: veinte artículos con tres instrumentos de intervención en el mercado del suelo. La lógica es de intensidad creciente. Primero los PATRIMONIOS PÚBLICOS DEL SUELO —el municipal y el Banco Foral—, que son masas de bienes SEPARADAS del resto del patrimonio y afectadas a un fin. Después el DERECHO DE SUPERFICIE, que permite construir vivienda protegida sin perder la titularidad pública del suelo. Y por último los DERECHOS DE TANTEO Y RETRACTO, que son la intervención más intrusiva porque se proyectan sobre transmisiones entre particulares. Todo el título gira sobre una misma idea: que la Administración disponga de suelo para vivienda protegida sin tener que expropiarlo cada vez.",
    bloques: [
      {
        h: "Patrimonio Municipal del Suelo — concepto y bienes (arts. 226-229)",
        nota:
          "La palabra que define el patrimonio municipal del suelo es SEPARADO: no es una parte más de los bienes municipales sino un patrimonio distinto, vinculado a tres finalidades tasadas —regular el mercado de terrenos, obtener reservas para actuaciones públicas y facilitar la ejecución del planeamiento—. De ahí se sigue todo lo demás, incluida la exigencia de inventario y contabilidad diferenciados del art. 232. Del art. 227 lo examinable son los tres modos de integración, que no son equivalentes: unos bienes entran AUTOMÁTICAMENTE, otros por acuerdo plenario potestativo, y en los municipios de más de cinco mil habitantes hay además una incorporación OBLIGATORIA.",
        items: [
          "Art. 226 — CONCEPTO: el patrimonio municipal del suelo constituye un PATRIMONIO SEPARADO de los demás bienes de titularidad municipal, vinculado al cumplimiento de tres finalidades — REGULAR EL MERCADO de terrenos · obtener RESERVAS DE SUELO para actuaciones de iniciativa pública · y FACILITAR LA EJECUCIÓN DEL PLANEAMIENTO",
          "Art. 227.1 — integración AUTOMÁTICA en todos los municipios: los bienes obtenidos por CESIONES, ya sea en terrenos o EN METÁLICO · los procedentes de EXPROPIACIONES URBANÍSTICAS de cualquier clase · y los procedentes del ejercicio del DERECHO DE TANTEO Y RETRACTO",
          "Art. 227.2 — integración POTESTATIVA: los Ayuntamientos PODRÁN incorporar los bienes patrimoniales clasificados por el planeamiento como suelo URBANO O URBANIZABLE cuya inclusión se determine por ACUERDO PLENARIO",
          "Art. 227.3 — integración OBLIGATORIA: los Ayuntamientos DE MÁS DE CINCO MIL HABITANTES DEBERÁN incluir en su patrimonio público de suelo los terrenos que se adquieran con dicha finalidad",
          "Art. 228 — EXPROPIACIÓN para patrimonializar: los Ayuntamientos pueden expropiar terrenos URBANOS, URBANIZABLES Y NO URBANIZABLES que sean necesarios y estén incluidos en el planeamiento, con el fin de incorporarlos al patrimonio municipal de suelo",
          "Art. 229 — RESERVAS DE SUELO: los Planes Generales Municipales pueden establecer, sobre suelo no urbanizable DE PRESERVACIÓN, reservas de terreno de posible adquisición para incorporarlo al patrimonio público. En su defecto o insuficiencia, los Ayuntamientos pueden establecerlas por el procedimiento de DELIMITACIÓN DE UNIDADES DE EJECUCIÓN",
          "Art. 229.2 — efecto capital: el establecimiento o delimitación de estas reservas IMPLICA LA DECLARACIÓN DE UTILIDAD PÚBLICA Y LA NECESIDAD DE EXPROPIACIÓN a efectos expropiatorios",
        ],
      },
      {
        h: "Patrimonio Municipal del Suelo — destino, gestión y control (arts. 230-232)",
        nota:
          "El destino es la parte más preguntable porque tiene doble regla. Los BIENES, una vez incorporados al proceso de urbanización y edificación, van a vivienda protegida o a otros usos de interés social. Los INGRESOS obtenidos por su enajenación tienen una lista propia de seis destinos alternativos, además de la conservación y ampliación del propio patrimonio. Y en la gestión hay una regla de procedimiento que conviene fijar por contraste: la enajenación es ordinariamente por concurso o subasta, pero cuando el destino sea uso comercial o RESIDENCIAL DE VIVIENDA LIBRE la subasta pública es obligatoria — lo que impide colocar suelo público para vivienda libre por concurso a medida.",
        items: [
          "Art. 230.1 — destino de los BIENES: una vez incorporados al proceso de urbanización y edificación, deberán destinarse a la construcción de VIVIENDAS SUJETAS A ALGÚN RÉGIMEN DE PROTECCIÓN PÚBLICA o a OTROS USOS DE INTERÉS SOCIAL",
          "Art. 230.2 — destino de los INGRESOS obtenidos por enajenación de terrenos y por la sustitución en metálico del aprovechamiento: la conservación y ampliación del propio patrimonio municipal del suelo, o bien — a) obras de URBANIZACIÓN · b) obtención y ejecución de SISTEMAS GENERALES · c) construcción de EQUIPAMIENTOS COLECTIVOS u otras instalaciones de uso público municipal promovidos por Administraciones o sus sociedades instrumentales · d) operaciones de iniciativa pública de REHABILITACIÓN, RENOVACIÓN O REGENERACIÓN urbanas y ayudas a la iniciativa privada con la misma finalidad · e) gastos de REALOJO Y RETORNO · f) compra y rehabilitación de edificios para vivienda protegida o equipamiento público",
          "Art. 231.2.a — ENAJENACIÓN por concurso o subasta: ordinariamente por uno u otro procedimiento, pero cuando el destino sea de USOS COMERCIALES O RESIDENCIALES DE VIVIENDA LIBRE la enajenación se realizará POR SUBASTA PÚBLICA; el procedimiento de subasta se aplica también PREFERENTEMENTE cuando los bienes se destinen a usos industriales",
          "Tipo de licitación en subasta (art. 231.2.a): como mínimo el VALOR URBANÍSTICO, incorporando los costes proporcionales de planeamiento, urbanización, gestión y actuaciones administrativas y materiales de adecuación, MINORADO en la depreciación correspondiente a los años transcurridos desde su construcción",
          "Subasta desierta: si no se produce adjudicación o se declara desierto el concurso, puede acordarse EXCEPCIONALMENTE la ENAJENACIÓN DIRECTA, siempre que se celebre en las MISMAS CONDICIONES y por precio NO INFERIOR al que fue objeto de licitación",
          "Art. 231.2.b — enajenación DIRECTA a precio no inferior al valor de los terrenos, a entidades de carácter ASISTENCIAL, SOCIAL O SINDICAL SIN ÁNIMO DE LUCRO que promuevan vivienda protegida y acrediten experiencia y medios para garantizar la viabilidad",
          "Art. 231.2.c — CESIÓN, incluso a TÍTULO GRATUITO y por TIEMPO INDEFINIDO, a otras Administraciones, organismos públicos, entes instrumentales o sociedades públicas, con fines de vivienda protegida, equipamiento comunitario u otras instalaciones de uso público o interés social",
          "Art. 231.2.d — adjudicación del DERECHO DE SUPERFICIE por concurso público u otros procedimientos de selección",
          "Art. 232 — CONTROL, tres exigencias: gestión SEPARADA del resto de bienes, indicándolo en el INVENTARIO como carácter vinculado y separado · creación de un REGISTRO DEL PATRIMONIO MUNICIPAL DEL SUELO con las entradas de terrenos o metálico y las salidas justificadas con destino a las finalidades del art. 230 · y documentación CONTABLE expresa y diferenciada de los bienes, su movimiento patrimonial, enajenaciones y destino final, con técnicas de contabilidad y presupuestación públicas",
        ],
      },
      {
        h: "Banco Foral de Suelo Público (arts. 233-238)",
        nota:
          "El equivalente autonómico del patrimonio municipal: la Comunidad Foral DEBE constituirlo, mantenerlo y gestionarlo, y también es un patrimonio SEPARADO, en este caso dentro del Patrimonio de Navarra. Estúdialo por contraste con el municipal, porque el examen los intercambia. Dos diferencias de destino conviene retenerlas: el Banco añade expresamente los ALOJAMIENTOS DOTACIONALES a la vivienda protegida y a los usos de interés social; y los bienes obtenidos como DOTACIÓN SUPRAMUNICIPAL del art. 55.6 tienen un destino todavía más estrecho, pues solo pueden ir a vivienda protegida o a alojamientos dotacionales, sin la válvula del interés social.",
        items: [
          "Art. 233 — la Administración de la Comunidad Foral DEBERÁ constituir, mantener y gestionar su propio patrimonio de suelo, denominado BANCO FORAL DE SUELO PÚBLICO, con la finalidad de intervenir en el mercado del suelo. Constituye un PATRIMONIO SEPARADO dentro del Patrimonio de Navarra, y puede colaborar con los municipios y otras entidades públicas para facilitarles la adquisición o disponibilidad de terrenos",
          "Art. 234 — BIENES INTEGRANTES: los terrenos de titularidad pública foral adquiridos por expropiación o cualquier otro procedimiento para su incorporación · los bienes patrimoniales del Patrimonio de Navarra que se le ADSCRIBAN · los terrenos obtenidos por CESIÓN PARA LA DOTACIÓN SUPRAMUNICIPAL · y los INGRESOS obtenidos por la gestión, enajenación o actos de gravamen a título oneroso",
          "Art. 235 — la Administración Foral puede adquirir por cualquiera de las fórmulas previstas en la ley y por EXPROPIACIÓN, y establecer RESERVAS DE SUELO en suelo no urbanizable, especialmente por medio de los instrumentos de PLANEAMIENTO TERRITORIAL",
          "Art. 236.1 — DESTINO: viviendas sujetas a algún régimen de protección pública, ALOJAMIENTOS DOTACIONALES, u otros usos de interés social",
          "Art. 236.2 — destino REFORZADO: los bienes obtenidos en concepto de DOTACIÓN SUPRAMUNICIPAL del art. 55.6 se destinarán ÚNICAMENTE a vivienda protegida o alojamientos dotacionales",
          "Art. 236.3 — los ingresos por cesiones, cánones y demás negocios a título oneroso se destinan a la conservación, gestión y ampliación del Banco, entendiéndose incluidos los gastos de elaboración de instrumentos de planeamiento y gestión y los gastos de urbanización del art. 139",
          "Art. 237.1 — SEIS modalidades de gestión: adscripción a organismos o entes instrumentales · CESIÓN a otras administraciones, incluso a título gratuito y por tiempo indefinido · ENAJENACIÓN DIRECTA a precio no inferior al valor de los terrenos a entidades asistenciales, sociales o sindicales sin ánimo de lucro · adjudicación DIRECTA del derecho de superficie a administraciones, entes instrumentales, sociedades públicas o de capital mixto dedicadas a vivienda protegida · adjudicación del derecho de superficie a COOPERATIVAS DE VIVIENDA por concurso público u otros procedimientos que garanticen la igualdad · y adjudicación del derecho de superficie a entidades asistenciales, sociales o sindicales sin ánimo de lucro",
          "Art. 237.2 — los bienes calificados como equipamientos comunitarios con destino a ALOJAMIENTOS DOTACIONALES se gestionan DE FORMA DIRECTA por la Administración foral, pudiendo no obstante ser objeto de CONCESIÓN ADMINISTRATIVA para su construcción y explotación",
          "Art. 237 bis — contenido mínimo del acto de constitución del DERECHO DE SUPERFICIE sobre bienes del Banco destinados a vivienda protegida: determinación de los bienes · DURACIÓN, prorrogable HASTA LOS 99 AÑOS previa solicitud de los ocupantes legales formulada antes del vencimiento y vinculada al COMPROMISO DE MEJORAS que justifiquen la prolongación de la vida útil · título oneroso o gratuito, precio y canon · número y características de las viviendas · régimen y calificación y condiciones de acceso · PRECIO MÁXIMO mensual de alquiler o de venta por metro cuadrado útil · plazo máximo de ejecución de las obras · obligaciones de control y auditoría · régimen de infracciones y penalidades · y forma de REVERSIÓN a la Administración",
          "Art. 237 bis.2-4: las personas superficiarias deben acreditar SOLVENCIA económica y técnica previa y presentar programas de conservación, mantenimiento y gestión; el derecho exige ESCRITURA PÚBLICA e INSCRIPCIÓN registral; y debe quedar garantizada en todo caso la CONSERVACIÓN DE LA TITULARIDAD PÚBLICA DEL SUELO",
          "Art. 237 ter — CONCESIÓN ADMINISTRATIVA sobre bienes destinados a alojamientos dotacionales: el pliego debe incluir la determinación de los bienes, las obras e instalaciones a ejecutar, la DURACIÓN MÁXIMA, QUE NO PODRÁ SUPERAR LOS 99 AÑOS, y las causas de extinción, el canon, el régimen interior de uso, y el destino de las obras al término del plazo",
          "Art. 238 — CONTROL: gestión separada del resto del Patrimonio de Navarra, con indicación en el inventario de su carácter vinculado y separado, y documentación contable expresa y diferenciada",
        ],
      },
      {
        h: "Derecho de superficie (arts. 239-241)",
        nota:
          "Ojo al plazo, porque aquí la LFOTU se aparta de la ley estatal: el TRLSRU fija un máximo de NOVENTA Y NUEVE años (art. 53.2), pero el art. 240.2 de la LFOTU lo limita a SETENTA Y CINCO, salvo la prórroga del art. 237 bis para los bienes del Banco Foral, que sí puede llegar a noventa y nueve. Es una discrepancia que se presta a pregunta cruzada con el tema E28. El resto del régimen coincide: si no se edifica en plazo el derecho se extingue, y al vencer el término la entidad superficiante hace suya la propiedad de lo edificado SIN INDEMNIZACIÓN alguna.",
        items: [
          "Art. 239 — SUJETOS que pueden constituirlo: la Administración de la Comunidad Foral, las ENTIDADES LOCALES, los organismos públicos, los entes instrumentales y las sociedades públicas, sobre terrenos de su propiedad, INCLUIDOS los adquiridos por cesión y los integrantes del patrimonio público del suelo",
          "Art. 239 — DESTINO: construcción de viviendas sujetas a algún régimen de protección pública o a otros usos de interés social, correspondiendo el derecho al SUPERFICIARIO",
          "Art. 240.1-2 — EXTINCIÓN: se extingue si NO SE EDIFICA en el plazo previsto en el acuerdo de constitución. El plazo NO PODRÁ EXCEDER DE SETENTA Y CINCO AÑOS, sin perjuicio de la prórroga hasta 99 del art. 237 bis para el Banco Foral",
          "Art. 240.3 — al extinguirse por transcurso del plazo, la ENTIDAD SUPERFICIANTE HACE SUYA la propiedad de lo edificado SIN DEBER SATISFACER INDEMNIZACIÓN ALGUNA, cualquiera que sea el título por el que se constituyó",
          "Art. 240.4-5 — la extinción por decurso del término provoca la de TODA CLASE de derechos reales o personales impuestos por el superficiario; si por otra causa se reúnen en la misma persona la propiedad del suelo y el derecho del superficiario, las cargas continúan gravándolos SEPARADAMENTE",
          "Art. 241 — BENEFICIOS: la concesión del derecho de superficie por las Administraciones goza de los beneficios de la legislación de viviendas de protección pública, siempre que se cumplan sus requisitos",
        ],
      },
      {
        h: "Derechos de tanteo y retracto (arts. 242-246)",
        nota:
          "La intervención más incisiva del título, y la que más plazos tiene. Fíjalos en cadena porque el examen los intercambia: OCHO AÑOS es el plazo máximo de vigencia de la delimitación de la zona · UN MES para ejercer el tanteo desde la notificación fehaciente, y otro mes para el retracto desde que se conoce la enajenación · TRES MESES para hacer efectiva la liquidación, pasados los cuales CADUCA el derecho · y DOS AÑOS para cumplir la finalidad que motivó la adquisición. Y retén el cierre registral del art. 245.7, que es lo que hace efectivo el sistema: los notarios deniegan la escritura y el Registro no inscribe si no se acredita la comunicación previa.",
        items: [
          "Art. 242.1 — FINALIDADES de la delimitación de zonas: regularizar el mercado de suelo, constituir o ampliar patrimonio público, o ENJUGAR DÉFICIT DOTACIONALES. Pueden delimitarlas el GOBIERNO DE NAVARRA y los AYUNTAMIENTOS en el planeamiento territorial y urbanístico, sometiendo a tanteo y retracto las transmisiones por COMPRAVENTA O PERMUTA de terrenos y edificaciones",
          "Art. 242.2 — procedimiento alternativo de delimitación: aprobación inicial por ORDEN FORAL del titular del Departamento · INFORMACIÓN PÚBLICA durante UN MES y audiencia de las entidades locales afectadas · informe de la COMISIÓN DE ORDENACIÓN DEL TERRITORIO sobre las alegaciones · y aprobación mediante DECRETO FORAL del Gobierno de Navarra",
          "Art. 242.3 — la delimitación debe especificar al menos: la delimitación GEOGRÁFICA con referencia a calles, sectores o parcelas catastrales · el PLAZO durante el que podrá ejercitarse el derecho, QUE NO PODRÁ SER SUPERIOR A OCHO AÑOS desde la delimitación · y la FINALIDAD a la que vayan a destinarse los suelos o edificaciones",
          "Art. 242.5 — la aprobación de la delimitación IMPLICA LA DECLARACIÓN DE UTILIDAD PÚBLICA a efectos expropiatorios",
          "Art. 243 — tanteo y retracto SIN NECESIDAD DE DELIMITACIÓN: la Comunidad Foral y los municipios tienen estos derechos en TODOS los supuestos de transmisión por compraventa o permuta de suelo destinado por el planeamiento a VIVIENDA PROTEGIDA. Si el precio supera el máximo fijado por la legislación de VPO, la Administración ejercerá el derecho POR EL PRECIO MÁXIMO LEGALMENTE ESTABLECIDO",
          "Art. 244 — PERMUTAS de terrenos por edificación futura: el ejercicio del derecho consiste en la ASUNCIÓN POR LA ADMINISTRACIÓN DEL COMPROMISO de entregar las edificaciones a construir, o parte de ellas, en las mismas condiciones pactadas entre las partes",
          "Art. 245.1 — DEBER DE COMUNICACIÓN: todo propietario de terrenos no edificados o de edificaciones en zona delimitada que pretenda transmitir está obligado a comunicar FEHACIENTEMENTE a la Administración autora de la delimitación el PRECIO, las CONDICIONES DE PAGO y la IDENTIDAD DEL ADQUIRENTE",
          "Art. 245.2 — TANTEO: UN MES desde la notificación fehaciente. Transcurrido sin que la Administración notifique su acuerdo de adquirir, la enajenación puede efectuarse libremente",
          "Art. 245.3 — RETRACTO: UN MES desde que la Administración tuvo conocimiento de la enajenación, en caso de falta de comunicación; y en los mismos plazos cuando la enajenación se hubiera realizado sin ajustarse a los precios y condiciones notificados",
          "Art. 245.4 — LIQUIDACIÓN: la Administración dispone de TRES MESES desde el ejercicio del derecho para hacer efectiva la liquidación; transcurrido ese plazo CADUCA el derecho de tanteo o retracto a su favor",
          "Art. 245.5-6 — el pago será EN METÁLICO salvo que transmitente y Administración convengan otra forma; y en todo caso la Administración deberá CUMPLIR LA FINALIDAD que motivó la adquisición EN EL PLAZO DE DOS AÑOS desde el ejercicio del derecho",
          "Art. 245.7 — CIERRE NOTARIAL Y REGISTRAL: los NOTARIOS denegarán la formalización en escritura pública de las transmisiones en zonas delimitadas cuando no se les acredite debidamente la comunicación; y NO TENDRÁN ACCESO AL REGISTRO DE LA PROPIEDAD las escrituras de compraventa o permuta afectadas si no aparece acreditado el cumplimiento de las obligaciones de comunicación",
          "Art. 246 — SUPLETORIEDAD: en lo no contemplado, los derechos administrativos de tanteo y retracto se rigen por la LEGISLACIÓN CIVIL DE NAVARRA",
        ],
      },
    ],
    claves: [
      "El patrimonio municipal del suelo es un PATRIMONIO SEPARADO, con tres finalidades: regular el mercado, obtener reservas y facilitar la ejecución del planeamiento",
      "Entran AUTOMÁTICAMENTE: cesiones (en terrenos o metálico), expropiaciones urbanísticas y lo obtenido por tanteo y retracto",
      "Los municipios de MÁS DE 5.000 HABITANTES deben incluir los terrenos que adquieran con esa finalidad",
      "Las reservas de suelo del art. 229 se establecen sobre NO URBANIZABLE DE PRESERVACIÓN e implican utilidad pública y necesidad de expropiación",
      "Los BIENES van a vivienda protegida o interés social; los INGRESOS tienen su propia lista de seis destinos (art. 230.2)",
      "Uso comercial o RESIDENCIAL DE VIVIENDA LIBRE: enajenación por SUBASTA PÚBLICA obligatoria",
      "Subasta desierta: cabe enajenación directa en las MISMAS condiciones y por precio NO INFERIOR al de licitación",
      "Triple control del patrimonio municipal: inventario separado + REGISTRO propio + contabilidad diferenciada (art. 232)",
      "El Banco Foral de Suelo Público es de constitución OBLIGATORIA y es patrimonio separado dentro del Patrimonio de Navarra",
      "El Banco añade los ALOJAMIENTOS DOTACIONALES al destino; la dotación supramunicipal del art. 55.6 solo puede ir a vivienda protegida o alojamientos dotacionales",
      "Los alojamientos dotacionales se gestionan DE FORMA DIRECTA, con posible concesión administrativa (art. 237.2)",
      "DERECHO DE SUPERFICIE: máximo 75 AÑOS en la LFOTU (frente a los 99 del TRLSRU), prorrogable hasta 99 solo en el Banco Foral",
      "Al extinguirse por plazo, lo edificado revierte SIN INDEMNIZACIÓN alguna",
      "Concesión sobre alojamientos dotacionales: máximo 99 AÑOS (art. 237 ter)",
      "La delimitación de zonas de tanteo y retracto dura como máximo OCHO AÑOS e implica declaración de utilidad pública",
      "En suelo destinado a VIVIENDA PROTEGIDA hay tanteo y retracto SIN necesidad de delimitación previa (art. 243)",
      "Si el precio supera el máximo de VPO, la Administración ejerce el derecho POR EL PRECIO MÁXIMO LEGAL",
      "Plazos: 1 MES tanteo · 1 MES retracto · 3 MESES para liquidar, o caduca · 2 AÑOS para cumplir la finalidad",
      "Sin acreditar la comunicación, el NOTARIO deniega la escritura y el REGISTRO no inscribe (art. 245.7)",
      "Supletoriamente rige la LEGISLACIÓN CIVIL DE NAVARRA (art. 246)",
    ],
  },

  E34: {
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
  },

  E35: {
    intro:
      "Tema TEMÁTICO: el enunciado no cita ninguna norma, pero en Navarra la fuente troncal es la Sección 1.ª del Capítulo I del Título V de la LFOTU, artículos 190 a 197. La idea que lo ordena es la contraposición entre CONTROL PREVIO y CONTROL POSTERIOR: la licencia autoriza antes de actuar; la declaración responsable y la comunicación habilitan desde su presentación y la Administración comprueba después. Sobre esa base el tema añade dos capas que conviene tener separadas — el régimen de los actos promovidos por las Administraciones públicas, con la exención de control local de los PSIS declarados de interés general, y la trampa del propio enunciado: la APERTURA de actividades no es en Navarra una licencia urbanística, sino materia de intervención ambiental. Aviso sobre el material: el .txt del tema recoge el concepto del art. 190.1, las rúbricas de los arts. 190-197 y los preceptos verificados (arts. 47, 72.5, 77.5 y la reforma del 192 por la LF 4/2021), pero NO el articulado literal de los arts. 191 a 197; esos artículos figuran aquí por su función y no por sus apartados numéricos.",
    bloques: [
      {
        h: "Concepto de licencia urbanística (art. 190.1)",
        nota:
          "La definición del art. 190.1 se pregunta casi literal y sus tres adjetivos tienen consecuencias distintas. PREVIO significa que no cabe iniciar la obra o el uso sin obtenerla. REGLADO, que no hay margen de discrecionalidad: si el proyecto se ajusta al ordenamiento debe otorgarse, y si no, debe denegarse — de ahí que sean nulas las reservas de dispensación (art. 80 LFOTU). Y DECLARATIVO, que la licencia no crea el derecho a edificar sino que constata que un derecho preexistente puede ejercerse; esto conecta con el art. 11.2 del TRLSRU, según el cual la edificabilidad prevista no se patrimonializa hasta su realización efectiva.",
        items: [
          "Art. 190.1 (literal): la licencia urbanística es un ACTO ADMINISTRATIVO DE CONTROL PREVIO, de carácter REGLADO y DECLARATIVO, mediante el cual la Administración correspondiente autoriza las actuaciones urbanísticas proyectadas PREVIA COMPROBACIÓN DE SU CONFORMIDAD AL ORDENAMIENTO URBANÍSTICO VIGENTE",
          "CONTROL PREVIO: la comprobación se hace ANTES de actuar; no puede iniciarse la obra o el uso sin haberla obtenido",
          "REGLADO: no es una potestad discrecional. Si el proyecto se ajusta al ordenamiento, DEBE otorgarse; si no se ajusta, DEBE denegarse. No caben dispensas — son nulas de pleno derecho las reservas de dispensación (art. 80 LFOTU)",
          "DECLARATIVO: no otorga derechos nuevos, sino que CONSTATA que el derecho preexistente a edificar o usar puede ejercerse conforme a la ordenación",
          "Competencia MUNICIPAL: la actividad urbanística pública corresponde con carácter general a los municipios (art. 11 LFOTU). En el régimen de gran población aplicable a Pamplona, la concesión de cualquier tipo de licencia corresponde a la JUNTA DE GOBIERNO LOCAL (art. 127.1.e LRBRL)",
        ],
      },
      {
        h: "Mapa de la Sección 1.ª (arts. 190-197)",
        nota:
          "Ocho artículos que conviene saber ubicar por su rúbrica, porque el examen pregunta con frecuencia «en qué artículo se regula» o pide identificar la materia. La secuencia tiene una lógica clara: primero QUÉ se sujeta a cada título habilitante (190 licencia, 191 obras municipales, 192 declaración responsable o comunicación), después CUÁNDO y CÓMO se tramita (193 plazos, 194 procedimiento de licencia, 195 procedimiento de declaración responsable), y por último CÓMO termina y qué efectos produce (196 resolución y silencio, 197 eficacia).",
        items: [
          "Art. 190 — ACTOS SUJETOS A LICENCIA: enumera los actos de transformación, construcción, edificación y uso del suelo y del subsuelo que requieren licencia municipal. Entre ellos, obras de edificación de NUEVA PLANTA y de AMPLIACIÓN, obras en edificios existentes, la PRIMERA UTILIZACIÓN U OCUPACIÓN de edificios e instalaciones, parcelaciones, demoliciones y movimientos de tierra",
          "Art. 191 — OBRAS ORDINARIAS PROMOVIDAS POR LA ADMINISTRACIÓN MUNICIPAL: el Ayuntamiento no se somete a licencia a sí mismo, pero sigue un procedimiento de aprobación que cumple la función de control de legalidad urbanística. Es la primera pata del régimen de los actos de las Administraciones públicas",
          "Art. 192 — ACTOS SUJETOS A DECLARACIÓN RESPONSABLE O COMUNICACIÓN PREVIA: enumera los actos que NO requieren licencia (se desarrolla en el tema 36)",
          "Art. 193 — PLAZOS PARA LA SOLICITUD de licencias",
          "Art. 194 — COMPETENCIA Y PROCEDIMIENTO PARA EL OTORGAMIENTO: órgano municipal competente y trámites —solicitud con documentación o proyecto, informes técnicos y jurídicos, resolución—, con supletoriedad de la Ley 39/2015 en lo no previsto",
          "Art. 195 — PROCEDIMIENTO GENERAL PARA LOS ACTOS SUJETOS A DECLARACIÓN RESPONSABLE O COMUNICACIÓN: presentación con la documentación exigida, habilitación para actuar desde ese momento y comprobación municipal a posteriori",
          "Art. 196 — RESOLUCIÓN del procedimiento de solicitud de licencias y régimen del SILENCIO administrativo",
          "Art. 197 — EFICACIA DE LAS LICENCIAS: condiciones, plazos de iniciación, ejecución y caducidad, y transmisión",
          "Quedan FUERA de este tema los arts. 198-199, Sección 2.ª, sobre órdenes de ejecución y declaración de ruina",
        ],
      },
      {
        h: "La «apertura» no es licencia urbanística en Navarra",
        nota:
          "Es la trampa central del enunciado y conviene tenerla muy clara porque afecta a cómo se informa un expediente real. El enunciado del tema agrupa «obras, primera utilización u ocupación, apertura», pero en Navarra el control de la implantación y apertura de ACTIVIDADES no se rige por la LFOTU sino por la legislación de intervención ambiental. Son dos títulos habilitantes distintos que suelen coexistir en la misma implantación: el de OBRA, por vía urbanística, y el de ACTIVIDAD, por vía ambiental.",
        items: [
          "URBANISMO (obras y usos del suelo) → LFOTU, arts. 190 y siguientes. La PRIMERA UTILIZACIÓN U OCUPACIÓN sí es un acto sujeto a licencia URBANÍSTICA (art. 190)",
          "ACTIVIDAD / apertura (incidencia ambiental) → LEY FORAL 4/2005, de 22 de marzo, de intervención para la protección ambiental, y DECRETO FORAL 93/2006, de 28 de diciembre, su reglamento de desarrollo. Por esa vía se canalizan la licencia de actividad clasificada y los regímenes de declaración responsable o comunicación para actividades, según su incidencia ambiental",
          "En la práctica una implantación suele necesitar AMBOS títulos —el de obra y el de actividad—, y la primera utilización o la apertura se vinculan a la comprobación del fin de obra",
          "En Pamplona, las licencias y declaraciones de ACTIVIDAD, APERTURA y PRIMERA UTILIZACIÓN se gestionan de forma DIFERENCIADA de las de obra, y se declaran o solicitan previamente al inicio de la actividad o del uso del edificio",
        ],
      },
      {
        h: "Actos promovidos por las Administraciones públicas (arts. 191 y 47)",
        nota:
          "Dos capas que no deben mezclarse. La primera son las obras ordinarias del PROPIO AYUNTAMIENTO, que no se autolicencia pero sigue un procedimiento interno de aprobación con la misma función de control de legalidad (art. 191). La segunda es la EXENCIÓN DE CONTROL LOCAL del art. 47 para obras de otras Administraciones amparadas en un Plan o Proyecto Sectorial de Incidencia Supramunicipal: es una exención de licencia y de cualquier otro control preventivo local, pero NO de las obligaciones tributarias ante las entidades locales, y está sujeta a una cadena de requisitos que hay que poder recitar.",
        items: [
          "Capa 1 — art. 191: obras ordinarias promovidas por la Administración MUNICIPAL, con procedimiento de aprobación en sustitución de la licencia a sí misma",
          "Capa 2 — art. 47: las obras previstas en un PSIS NO estarán sujetas a licencia ni a cualquier otro control preventivo local, SIN PERJUICIO DE LAS OBLIGACIONES TRIBUTARIAS ante las entidades locales",
          "Requisito 1 — que se trate de construcción y reparación de INFRAESTRUCTURAS, DOTACIONES E INSTALACIONES, y su puesta en funcionamiento, DECLARADAS DE INTERÉS GENERAL por el Gobierno de Navarra. La declaración puede hacerse SIMULTÁNEAMENTE con la aprobación definitiva del PSIS o CON POSTERIORIDAD mediante decreto foral",
          "Requisito 2 — que el Departamento competente COMUNIQUE dicha declaración a las entidades locales afectadas",
          "Requisito 3 — que, con carácter previo al inicio de las obras o a su puesta en funcionamiento, el PROMOTOR ACREDITE ante el Departamento la sujeción del proyecto de ejecución a las determinaciones del PSIS y a la normativa protectora del medio ambiente",
          "Requisito 4 — que el Departamento, PREVIA AUDIENCIA de las entidades locales afectadas, AUTORICE la ejecución de las obras con las determinaciones necesarias",
          "Requisito 5 — que el Departamento comunique el cumplimiento de todos estos requisitos a las entidades locales; DESDE ESA NOTIFICACIÓN el promotor puede iniciar directamente las obras o la puesta en funcionamiento",
          "Requisito 6 — finalizadas las obras, el promotor presenta CERTIFICACIÓN DE TÉCNICO COMPETENTE acreditativa de que se han llevado a cabo conforme al proyecto de ejecución, de la que el Departamento da traslado a las entidades locales",
          "Requisito 7 — verificado el cumplimiento de las condiciones de la autorización, el Departamento AUTORIZA EL INICIO DE LA ACTIVIDAD",
        ],
      },
      {
        h: "Licencia frente a declaración responsable y comunicación",
        nota:
          "El cuadro de diferencias es el corazón del tema y se resume en cuándo interviene la Administración. Pero por encima de la distinción hay un principio común que es la pregunta más segura de todo el temario de disciplina: ni el silencio ni una declaración responsable legitiman jamás lo contrario a la ordenación. La LFOTU lo dice dos veces —arts. 72.5 y 77.5— con la consecuencia expresa de NULIDAD DE PLENO DERECHO y el deber municipal de iniciar la revisión de oficio, en línea con el art. 11.3 del TRLSRU y con el art. 47.1.f de la Ley 39/2015.",
        items: [
          "LICENCIA — control PREVIO: la Administración autoriza ANTES de actuar, tras comprobar la conformidad del proyecto con el ordenamiento. No puede iniciarse la obra o el uso sin el acto de otorgamiento. Procedimiento: arts. 194 y 196",
          "DECLARACIÓN RESPONSABLE — control POSTERIOR: documento en el que el interesado MANIFIESTA BAJO SU RESPONSABILIDAD que cumple los requisitos y que dispone de la documentación acreditativa. HABILITA PARA ACTUAR DESDE SU PRESENTACIÓN con la documentación completa; el Ayuntamiento comprueba después",
          "COMUNICACIÓN PREVIA — control POSTERIOR: puesta en conocimiento de la Administración de la intención de realizar una actuación; habilita igualmente desde su presentación, con comprobación posterior. Procedimiento de ambas: art. 195",
          "En Pamplona la declaración responsable se presenta SIEMPRE con anterioridad al inicio de las obras y se comprueba EN ESE MISMO MOMENTO por técnico municipal — control posterior inmediato",
          "PRINCIPIO COMÚN, art. 72.5 (literal): «No podrán adquirirse por silencio administrativo facultades o derechos que contravengan la ordenación territorial o urbanística y que culminan determinando la NULIDAD DE PLENO DERECHO de estos actos. Por ello la Administración municipal deberá iniciar el correspondiente procedimiento de REVISIÓN DE OFICIO»",
          "Art. 77.5 — en el mismo sentido: la aprobación por silencio no puede vulnerar las leyes ni el planeamiento de rango superior; tampoco pueden adquirirse por silencio facultades o derechos que contravengan la legislación y la ordenación, siendo NULOS de pleno derecho e INEFICACES los así obtenidos",
          "SUPLETORIEDAD: en lo no previsto rige la Ley 39/2015 en materia de procedimiento, silencio y revisión",
        ],
      },
      {
        h: "Régimen en Pamplona",
        nota:
          "Pamplona no tiene una ordenanza única de licencias: el régimen está disperso en varias normas municipales, lo que obliga a saber cuál se aplica a cada supuesto. Estas ordenanzas son además el objeto del tema siguiente, así que conviene estudiar ambos temas seguidos. Los datos de gestión que siguen proceden de la sede electrónica y son los que cambian con más facilidad; conviene contrastarlos antes del examen.",
        items: [
          "Ordenanza Municipal Reguladora de las LICENCIAS URBANÍSTICAS DE OBRAS MENORES (BON de 23/05/2007)",
          "Ordenanza Municipal Reguladora del Procedimiento de CONTROL POSTERIOR de la declaración responsable y la comunicación previa (BON de 12/05/2014)",
          "Texto Refundido del PLAN MUNICIPAL de Pamplona (BON de 18/02/2008) y ORDENANZA GENERAL DE EDIFICACIÓN, como normativa sustantiva de contraste",
          "Gestión: Área de Gobierno Estratégico, Urbanismo, Vivienda y Agenda 2030; resuelve la CONCEJALÍA DELEGADA del Área",
          "ICIO: 5 % del presupuesto de la obra, en régimen de AUTOLIQUIDACIÓN PREVIA",
          "Obras comunicadas: tramitación INMEDIATA; la declaración responsable se presenta antes del inicio y se comprueba en ese momento por técnico municipal",
        ],
      },
    ],
    claves: [
      "Licencia = acto de control PREVIO, REGLADO y DECLARATIVO (art. 190.1)",
      "Fuente del tema: LFOTU, Título V, Cap. I, Sección 1.ª, arts. 190-197. Fuera quedan los arts. 198-199 (órdenes de ejecución y ruina)",
      "Mapa: 190 actos sujetos a licencia · 191 obras municipales · 192 DR o comunicación · 193 plazos · 194 competencia y procedimiento · 195 procedimiento de DR · 196 resolución y silencio · 197 eficacia",
      "La PRIMERA UTILIZACIÓN U OCUPACIÓN está sujeta a LICENCIA (art. 190)",
      "La APERTURA de actividades NO es licencia urbanística en Navarra: va por la LF 4/2005 y el DF 93/2006",
      "Una implantación suele necesitar DOS títulos: obra (LFOTU) y actividad (LF 4/2005)",
      "Obras del propio Ayuntamiento: art. 191, procedimiento interno en sustitución de la licencia",
      "PSIS de interés general: EXENTOS de licencia y de cualquier control preventivo local, pero NO de las obligaciones tributarias (art. 47)",
      "La declaración de interés general se hace con la aprobación definitiva del PSIS o después POR DECRETO FORAL",
      "El promotor del PSIS puede iniciar las obras DESDE LA NOTIFICACIÓN del cumplimiento de los requisitos por el Departamento",
      "Finalizadas las obras del PSIS: certificación de TÉCNICO COMPETENTE y, verificada, autorización del inicio de la actividad",
      "DR y comunicación HABILITAN DESDE SU PRESENTACIÓN con documentación completa; la licencia exige acto expreso previo",
      "El silencio NUNCA otorga facultades contra la ordenación: NULIDAD DE PLENO DERECHO y revisión de oficio (arts. 72.5 y 77.5)",
      "Supletoriedad de la Ley 39/2015 en procedimiento, silencio y revisión",
      "En Pamplona las licencias las concede la JUNTA DE GOBIERNO LOCAL (art. 127.1.e LRBRL)",
      "ICIO en Pamplona: 5 % del presupuesto, con autoliquidación previa",
    ],
  },

  E36: {
    intro:
      "Cuatro normas de tres niveles que hay que estudiar como un sistema encajado. Arriba, la LEY 12/2012 estatal, que suprimió las licencias de apertura para el pequeño comercio y las sustituyó por declaración responsable con control posterior. En el medio, el ART. 192 de la LFOTU, que traslada esa lógica al urbanismo navarro enumerando los actos que no precisan licencia. Y abajo, las DOS ORDENANZAS DE PAMPLONA que lo aplican materialmente: la de obras menores de 2007 y la de control posterior de 2014. El tema es de aplicación diaria y muy numérico: umbrales de superficie, plazos de subsanación y de resolución, y plazos de inicio y finalización de obra. Dos advertencias que arrastran las cuatro normas: el art. 192 NO define «obra menor» sino que remite a las ordenanzas municipales, y tanto la Ley 12/2012 como las ordenanzas siguen citando la Ley 30/1992, derogada — sus remisiones deben leerse hechas a la Ley 39/2015, donde el régimen de la declaración responsable está hoy en el art. 69.",
    bloques: [
      {
        h: "Art. 192 LFOTU — actos sujetos a declaración responsable o comunicación",
        nota:
          "Ocho letras, de las que las dos últimas son las más recientes y las que más se preguntan por ser reforma de la Ley Foral 4/2021: el autoconsumo solar y los puntos de recarga de vehículo eléctrico. En la letra g) hay dos datos que el examen manipula — que la instalación se admite SIN LIMITACIÓN DE POTENCIA, de modo que cualquier cifra que aparezca en un distractor es falsa, y que las excepciones son TRES y tasadas. Y el apartado 2 cierra el artículo con la regla que impide leer la declaración responsable como una patente de corso: no exime ni condiciona las facultades municipales de inspección, control y sanción.",
        items: [
          "Art. 192.1 — quedan sujetas al régimen de declaración responsable o comunicación, A LOS EFECTOS DE SU CONSTANCIA, REALIZACIÓN Y CONTROL POSTERIOR: a) las obras ligadas al ACONDICIONAMIENTO DE LOCALES para desempeñar la actividad comercial conforme a la normativa sectorial · b) las obras de ESCASA ENTIDAD O DIMENSIÓN que se determinen en las ORDENANZAS MUNICIPALES · c) CERRAMIENTOS Y VALLADOS · d) CARTELES PUBLICITARIOS visibles desde la vía pública · e) OBRAS MENORES · f) TRABAJOS PREVIOS a la construcción, tales como sondeos, prospecciones, catas y ensayos",
          "Letra g) — INSTALACIONES DE APROVECHAMIENTO DE ENERGÍA SOLAR PARA AUTOCONSUMO sobre edificaciones o construcciones y PÉRGOLAS DE APARCAMIENTO, SIN LIMITACIÓN DE POTENCIA",
          "TRES excepciones tasadas de la letra g), que sí requieren licencia: las instalaciones en edificios declarados BIEN DE INTERÉS CULTURAL o CATALOGADOS —con aplicación del art. 62.7.c— · las que afecten a los CIMIENTOS O LA ESTRUCTURA del edificio · y las que necesiten EVALUACIÓN DE IMPACTO AMBIENTAL",
          "Letra h) — PUNTOS DE RECARGA DE VEHÍCULOS ELÉCTRICOS situados EN EL INTERIOR DE EDIFICACIONES, salvo que pudieran suponer impacto sobre bienes declarados de interés cultural o sujetos a cualquier otro régimen de protección",
          "Art. 192.2 (literal): el régimen de declaración responsable NO EXIME NI CONDICIONA las facultades de INSPECCIÓN, CONTROL Y SANCIÓN de la entidad local sobre las obras que no se ajusten a la legislación, al planeamiento o a la propia declaración responsable",
          "Redacción vigente fijada por la LEY FORAL 4/2021, de 22 de abril, que añadió las letras g) y h). Su finalidad expresa fue aclarar que las instalaciones de autoconsumo solar quedan sujetas a declaración responsable y NO a licencia de obras",
          "CLAVE SISTEMÁTICA: el art. 192 NO define qué es una obra menor. Las letras b) y e) remiten a las ORDENANZAS MUNICIPALES, lo que enlaza este bloque directamente con la Ordenanza de obras menores de Pamplona",
        ],
      },
      {
        h: "Ley 12/2012, Título I — supresión de licencias en el comercio (arts. 1-5)",
        nota:
          "Norma estatal nacida para eliminar la licencia previa de apertura en el pequeño comercio, y cuyo dato más preguntado es el UMBRAL DE SUPERFICIE, porque ha cambiado dos veces: nació en 300 m², pasó a 500 y hoy está en 750 M² de superficie útil de exposición y venta al público, fijados por la Ley 14/2013. Las cifras antiguas son distractores clásicos. Retén también que el art. 3.2 trata el CAMBIO DE TITULARIDAD como comunicación previa «a los solos efectos informativos», y que la exención de licencia para obras solo opera cuando NO se requiere proyecto conforme al art. 2.2 de la LOE — si hace falta proyecto, seguimos en el terreno de la licencia.",
        items: [
          "Art. 1 — OBJETO: impulso y dinamización de la actividad comercial minorista y de determinados servicios mediante la eliminación de cargas y restricciones, en particular la SUPRESIÓN DE LAS LICENCIAS DE ÁMBITO MUNICIPAL vinculadas con los establecimientos comerciales, sus instalaciones y determinadas obras previas",
          "Art. 2.1 — ÁMBITO: actividades comerciales minoristas y determinados servicios previstos en el ANEXO de la ley, realizados en establecimientos PERMANENTES situados en cualquier parte del territorio nacional, cuya superficie útil de EXPOSICIÓN Y VENTA AL PÚBLICO NO SEA SUPERIOR A 750 METROS CUADRADOS",
          "Evolución del umbral: 300 m² en el RDL 19/2012 → 500 m² → 750 M² vigentes, fijados por la Ley 14/2013 de emprendedores",
          "Art. 2.2 — quedan AL MARGEN del Título I las actividades que tengan impacto en el PATRIMONIO HISTÓRICO-ARTÍSTICO o en el USO PRIVATIVO Y OCUPACIÓN DE BIENES DE DOMINIO PÚBLICO",
          "Art. 3.1 — INEXIGIBILIDAD DE LICENCIA: no podrá exigirse licencia previa de instalaciones, de funcionamiento o de actividad, ni otras análogas que sujeten a previa autorización el ejercicio de la actividad o la apertura del establecimiento",
          "Art. 3.2 — CAMBIO DE TITULARIDAD: tampoco está sujeto a licencia; será exigible COMUNICACIÓN PREVIA a la administración competente A LOS SOLOS EFECTOS INFORMATIVOS",
          "Art. 3.3 — OBRAS: no será exigible licencia para las obras ligadas al acondicionamiento de los locales CUANDO NO REQUIERAN LA REDACCIÓN DE UN PROYECTO DE OBRA conforme al art. 2.2 de la LOE",
          "Art. 3.4 — límite: la inexigibilidad NO rige respecto de las OBRAS DE EDIFICACIÓN que fuesen precisas conforme al ordenamiento, que se siguen rigiendo por su normativa en cuanto a licencia previa, requisitos y competencia",
          "Art. 4 — las licencias que no puedan exigirse SE SUSTITUYEN por declaraciones responsables o comunicaciones previas. El declarante deberá estar en posesión del JUSTIFICANTE DE PAGO DEL TRIBUTO cuando sea preceptivo; la declaración debe contener manifestación EXPLÍCITA del cumplimiento de los requisitos y, en su caso, de disponer de la documentación y del proyecto; los proyectos han de estar FIRMADOS POR TÉCNICOS COMPETENTES; y varias actuaciones sobre la misma actividad o local se TRAMITARÁN CONJUNTAMENTE",
          "Art. 5 — SUJECIÓN AL RÉGIMEN GENERAL DE CONTROL: la presentación habilita desde ese momento para el ejercicio material de la actividad, pero NO PREJUZGA la adecuación del establecimiento a la normativa ni limita las potestades de comprobación, inspección, sanción y control de cualquier Administración. Habilita además a las ENTIDADES LOCALES a regular el procedimiento de comprobación posterior",
          "DESFASE NORMATIVO: los arts. 4.1 y 5 remiten al art. 71 bis de la Ley 30/1992, DEROGADA. La base jurídica vigente de la declaración responsable y la comunicación es el ART. 69 DE LA LEY 39/2015",
          "DF 11.ª — habilita a las Comunidades Autónomas a AMPLIAR el umbral de superficie, el catálogo de actividades y otros supuestos de inexigibilidad de licencia",
        ],
      },
      {
        h: "Ordenanza de obras menores de Pamplona — concepto y dos regímenes",
        nota:
          "Ordenanza de 2007 que reparte las obras menores en dos vías según su sencillez: RÉGIMEN DE COMUNICACIÓN para lo elemental (Título I) y PROCEDIMIENTO ABREVIADO, que sigue siendo licencia, para el resto (Título II). El concepto de obra menor del art. 2 se pregunta por sus tres notas acumulativas —sencillez técnica, escasa entidad constructiva y escasa entidad económica— y por su lista de exclusiones. Dos límites operativos que conviene tener presentes al informar: las actuaciones comunicadas NO valen si hay que colocar andamios u ocupar la vía pública, ni en edificios o elementos catalogados; y en el Casco Antiguo las obras de fachada y cubierta salen del régimen de comunicación.",
        items: [
          "Art. 2 — CONCEPTO de obra menor: se caracteriza por ser de SENCILLEZ TÉCNICA y ESCASA ENTIDAD CONSTRUCTIVA Y ECONÓMICA, consistiendo normalmente en pequeñas obras de simple reparación, decoración, ornato o cerramiento, que no precisan proyecto técnico ni presupuestos elevados; es la CONCURRENCIA CONJUNTA de esas circunstancias la que define el concepto",
          "Art. 2 — en ningún caso suponen alteración de VOLUMEN o superficie construida, del USO OBJETIVO, reestructuración, redistribución o modificación sustancial de elementos estructurales o comunes, modificación sustancial del diseño exterior ni alteración del NÚMERO DE VIVIENDAS; tampoco afectan a la ESTRUCTURA ni a las condiciones de HABITABILIDAD O SEGURIDAD",
          "EXCLUSIONES del concepto: las obras del art. 2.2 de la LOE, por ser obras mayores que requieren proyecto · las obras en edificios que no se ajusten a la ordenación del planeamiento · las que afecten a la ESTRUCTURA PORTANTE, incluidas escaleras y entreplantas, o a elementos comunes —salvo las obras en fachadas, cubiertas e instalaciones que la propia ordenanza contempla— · las que supongan IMPLANTACIÓN DE UNA ACTIVIDAD en local no utilizado antes o sustancialmente diferente a la autorizada · y las que supongan implantación o modificación sustancial de ACTIVIDADES CLASIFICADAS",
          "TÍTULO I — RÉGIMEN DE COMUNICACIÓN (obras menores simples, art. 3): obras INTERIORES EN VIVIENDAS que no afecten a la habitabilidad, no supongan cambio de uso ni del número de viviendas y no afecten a elementos comunes —revestimientos, carpintería interior, aparatos sanitarios, instalaciones—; y obras EN FACHADAS Y CUBIERTAS salvo Casco Antiguo y siempre que se mantengan MATERIALES, COLORES Y DISEÑO existentes —retejado, bajantes, pintura, reparación de paramentos, barandillas y molduras, carpintería exterior—",
          "LÍMITES de las actuaciones comunicadas (art. 3): en ningún caso pueden tramitarse así las obras que exijan la colocación de ANDAMIOS, la OCUPACIÓN DE LA VÍA PÚBLICA por cualquier medio —salvo contenedores, que van por su propia ordenanza— o el uso de TRABAJOS TEMPORALES EN ALTURA O VEHÍCULOS GRÚA. Tampoco las obras en edificios o elementos CATALOGADOS",
          "Art. 4 — documentación de las comunicadas: instancia normalizada con la UBICACIÓN de la obra y constancia de haber sido revisada previamente por el personal encargado del enterado · acreditación de representación · MEMORIA descriptiva · PRESUPUESTO detallado por partidas con materiales y mano de obra · FOTOGRAFÍAS en actuaciones sobre fachadas o cubiertas · y autoliquidación de tributos con justificante de pago",
          "TÍTULO II — PROCEDIMIENTO ABREVIADO (art. 6): obras interiores de albañilería y tabiquería que superen los supuestos de comunicadas · nueva implantación de instalaciones en viviendas · obras en LOCALES —fachadas, revestimientos, instalaciones— · cerramientos de balcones y toldos en plantas elevadas previa aprobación de MODELO COMÚN para la comunidad · toldos y RÓTULOS en locales · apertura de huecos en planta baja de locales con licencia de apertura sin modificar la configuración general de la fachada · obras en fachadas y cubiertas excluidas de comunicadas por cambiar materiales, colores o diseño o por estar en CASCO ANTIGUO, y rehabilitaciones integrales de fachada, que deben mantener DISEÑO UNITARIO · obras en instalaciones comunes · catas y derribos puntuales previos a un proyecto · y pequeñas reformas en zonas ajardinadas",
          "PROTECCIÓN Y ABREVIADO: no pueden tramitarse por procedimiento abreviado las obras en edificios y elementos catalogados con GRADOS DE PROTECCIÓN 1 Y 2. En GRADO 3 sí se sigue el abreviado, tanto para las obras del art. 6 como para las del art. 3, siempre que no afecten a elementos de interés reseñados en el catálogo, y también en obras de restauración, reparación y mantenimiento de dichos elementos",
        ],
      },
      {
        h: "Ordenanza de obras menores — procedimiento, plazos y efectos",
        nota:
          "El bloque con más cifras del tema, y conviene fijarlas por parejas para no cruzarlas: DIEZ DÍAS HÁBILES de subsanación · QUINCE DÍAS HÁBILES para el análisis excepcional de una comunicada, con efecto de conformidad si el Ayuntamiento no dice nada · UN MES para resolver el abreviado · CUATRO DÍAS para retirar la licencia · y TRES MESES para iniciar y SEIS para terminar las obras, prorrogables como máximo por la mitad. Y una regla clásica que cae mucho, el art. 10.4: la licencia ampara las OBRAS pero NO los USOS, de modo que si el uso no está legalizado ni es legalizable, la ejecución de la obra no da derecho a la licencia de uso.",
        items: [
          "Art. 5 — procedimiento de las COMUNICADAS: la documentación se analiza DE INMEDIATO por el personal encargado del enterado, con tres salidas — si está INCOMPLETA se informa al solicitante, que puede dejarla en registro y completarla en DIEZ DÍAS HÁBILES o retirarla para completarla antes; si no subsana en plazo, se ARCHIVAN las actuaciones sin más trámite · si la actuación NO corresponde a este procedimiento, se notifica la necesidad de ajustarse al tipo de licencia que proceda · si es CORRECTA, se completa con DILIGENCIA DE «CONFORME» firmada por el encargado, se registra junto con el justificante de pago y se estima concluso el procedimiento",
          "Art. 5.3 — SILENCIO POSITIVO EXCEPCIONAL: cuando por causas excepcionales la documentación no pueda analizarse de inmediato, en el plazo máximo de QUINCE DÍAS HÁBILES se comunicarán las deficiencias o la inadecuación del procedimiento. Transcurrido ese plazo SIN COMUNICACIÓN ALGUNA, se entenderá que la actuación es CONFORME y el interesado podrá iniciar las obras",
          "Art. 8 — OCUPACIÓN DE VÍA PÚBLICA y medios auxiliares: se solicita PREFERENTEMENTE a la vez que la licencia abreviada; si se pide por separado, solo se autoriza SI PREVIAMENTE SE HA OTORGADO la licencia de obras. Exige plano de ubicación y, si hay andamios, montacargas, vehículos grúa o trabajos en altura, certificado de contratación de director de obra o de ejecución o, en su defecto, de que la instalación y retirada se harán bajo dirección de técnico competente, con documentos VISADOS",
          "Art. 9 — procedimiento ABREVIADO: se inicia por solicitud normalizada; a efectos de cómputo, el expediente se considera iniciado en la fecha de entrada de la DOCUMENTACIÓN COMPLETA. Si falta documentación se requiere subsanación en DIEZ DÍAS HÁBILES con advertencia de tenerle por DESISTIDO",
          "Art. 9.3 — la resolución deberá producirse en plazo NO SUPERIOR A UN MES, contado desde el día siguiente a aquel en que la documentación esté completa y subsanadas las deficiencias. El informe municipal puede proponer DENEGACIÓN si no cumple la normativa urbanística, u OTORGAMIENTO con requisitos o medidas correctoras, dándose cuenta periódicamente al órgano competente de las licencias otorgadas",
          "Art. 9.4-5 — el plazo máximo se INTERRUMPE mediante requerimiento de subsanación, que debe precisar las deficiencias y el plazo. Los titulares podrán RETIRAR la licencia en los CUATRO DÍAS siguientes a su tramitación; si no la retiran, se les comunica en su domicilio",
          "Art. 10.1 — en ningún caso se entenderán adquiridas POR SILENCIO las licencias que vayan contra la legislación o el planeamiento, ni cuando por falseamiento, error u omisión de datos no fuera posible la notificación de subsanación o de inadecuación de procedimiento",
          "Art. 10.3.e — PLAZOS DE OBRA: comenzar a los TRES MESES desde la concesión de la licencia abreviada o desde la comunicación, y finalizar en SEIS MESES desde la concesión o comunicación, salvo plazo de ejecución superior señalado en la licencia. Transcurridos, puede declararse la CADUCIDAD, salvo prórroga o aplazamiento por un plazo que como máximo equivaldrá a LA MITAD de los anteriores",
          "Art. 10.3 — otras condiciones: producen efectos entre Ayuntamiento e interesado pero NO alteran las situaciones jurídicas privadas · se entienden otorgadas SALVO EL DERECHO DE PROPIEDAD Y SIN PERJUICIO DE TERCEROS · solo pueden ejecutarse las obras descritas · el interesado debe tener a disposición municipal la licencia o el impreso diligenciado y facilitar el acceso para inspecciones · no pueden invocarse para excluir o disminuir la RESPONSABILIDAD CIVIL O PENAL · son TRANSMISIBLES, pero antiguo y nuevo titular deben comunicarlo POR ESCRITO, quedando ambos sujetos a responsabilidad si no lo hacen · y obligan a reparar los desperfectos en vías públicas",
          "Art. 10.4 — REGLA CLÁSICA: la licencia de obras ampara las OBRAS pero NO LOS USOS urbanísticos. Si los usos no estuviesen legalizados y no fueran legalizables, la ejecución de las obras NO otorga derecho a la licencia que ampare el uso; las diligencias de conformidad y las licencias abreviadas se otorgan en el entendimiento de que los usos están legalizados",
        ],
      },
      {
        h: "Ordenanza de control posterior de Pamplona (BON 12/05/2014)",
        nota:
          "Es la norma que da cobertura al control ex post en Pamplona, al amparo del art. 5 de la Ley 12/2012 y del art. 84 de la LRBRL. Su distinción básica se pregunta invertida con frecuencia: la COMUNICACIÓN PREVIA sirve para el CAMBIO DE TITULARIDAD de una actividad ya en funcionamiento, mientras que la DECLARACIÓN RESPONSABLE sirve para PONER EN MARCHA una actividad y, en su caso, ejecutar obras de acondicionamiento sin proyecto. Ambas habilitan desde su presentación. Del procedimiento retén el plazo único de DIEZ DÍAS para subsanar y el efecto característico: la eficacia queda EN SUSPENSO hasta la subsanación, y si no se subsana se declara la INEFICACIA.",
        items: [
          "Art. 1 — OBJETO: regular el procedimiento de control posterior del Ayuntamiento de Pamplona sobre las actividades iniciadas mediante comunicación previa o declaración responsable, y sobre las OBRAS DE ACONDICIONAMIENTO de los locales cuando NO requieran proyecto conforme al art. 2.2 de la LOE. El control se limita a la IMPLANTACIÓN y no excluye los demás procedimientos de control sobre el funcionamiento",
          "Art. 3 — COMUNICACIÓN PREVIA: acto por el que el interesado pone en conocimiento del Ayuntamiento el CAMBIO DE TITULARIDAD de actividades YA EN FUNCIONAMIENTO. Su presentación HABILITA para comenzar el ejercicio de la actividad",
          "Art. 4 — DECLARACIÓN RESPONSABLE: acto por el que quien pretende PONER EN MARCHA una actividad manifiesta bajo su responsabilidad que cumple los requisitos, que dispone de la documentación acreditativa y que se COMPROMETE A MANTENER SU CUMPLIMIENTO durante la duración de la actividad. Puede además manifestar la intención de realizar obras de acondicionamiento sin proyecto, o tener por objeto EXCLUSIVO esas obras en actividades ya en funcionamiento. Su presentación HABILITA para iniciar la actividad o las obras",
          "Art. 5 — presentación: instancia normalizada en el registro municipal, con el CERTIFICADO TÉCNICO que corresponda, el documento acreditativo del PAGO DE LA TASA y el ALTA EN EL IAE. Deben mantenerse EN EL LUGAR DE LA ACTIVIDAD, a disposición del Ayuntamiento, copia del documento diligenciado con su entrada en registro, copia del certificado técnico y la documentación complementaria",
          "Art. 5.4 — SUBSANACIÓN: si la documentación fuera inexacta o insuficiente se requiere al interesado para que en DIEZ DÍAS subsane, con aviso de que en otro caso se dictará resolución declarando la INEFICACIA de la declaración responsable y, en su caso, el CESE de la actividad. La eficacia queda EN SUSPENSO hasta la subsanación",
          "Art. 6 — FASE DE COMPROBACIÓN: en COMUNICACIÓN PREVIA el control se centra en la correspondencia entre los datos comunicados y los obrantes en el Ayuntamiento sobre ubicación del local, actividad y titular anterior. En DECLARACIÓN RESPONSABLE, en verificar si la actividad puede acogerse al trámite y comprobar el certificado técnico, el USO URBANÍSTICO y las condiciones básicas del local —superficie mínima, entreplantas—",
          "Art. 6.5 — el control puede completarse con INSPECCIÓN IN SITU, previo requerimiento de la documentación técnica. De las actuaciones se levanta ACTA, que tiene en todo caso la consideración de DOCUMENTO PÚBLICO y el valor probatorio correspondiente en los procedimientos sancionadores, sin perjuicio de las pruebas que aporte el administrado",
          "Art. 7.1 — TERMINACIÓN favorable: valorado que concurren las circunstancias adecuadas, se concluye el procedimiento mediante RESOLUCIÓN del órgano competente en materia de urbanismo, que se notifica al interesado y debe estar EN EL LOCAL a disposición de las administraciones",
          "Art. 7.2 — actividad ajena al ámbito de la Ley 12/2012 u obras no amparadas: requerimiento de DIEZ DÍAS para alegar; a la vista de ello, resolución declarando la INEFICACIA, concesión de plazo para solicitar licencia y SUSPENSIÓN de la actividad. Si no fuera legalizable, CIERRE del establecimiento; igual si hay deficiencias técnicas NO subsanables, previo período de diez días de audiencia",
          "Art. 7.3 — deficiencias SUBSANABLES: requerimiento para corregirlas en el plazo que se considere oportuno. Si fueran ESENCIALES, previa valoración técnico-jurídica, se acuerda la SUSPENSIÓN CAUTELAR con plazo para subsanar. Esa suspensión, como ACTO DE TRÁMITE CUALIFICADO, es recurrible en vía administrativa y judicial. Corregidas, se resuelve como en el 7.1; en caso contrario, ineficacia y CIERRE DEFINITIVO",
          "Art. 7.5 — INEXACTITUD, FALSEDAD U OMISIÓN DE CARÁCTER ESENCIAL, o la no presentación: imposibilidad de continuar con el ejercicio del derecho o actividad DESDE EL MOMENTO EN QUE SE TENGA CONSTANCIA, sin perjuicio de responsabilidades penales, civiles o administrativas. La resolución puede determinar la obligación de RESTITUIR la situación jurídica al momento previo y la IMPOSIBILIDAD DE INSTAR UN NUEVO PROCEDIMIENTO con el mismo objeto durante un período determinado — regla equivalente al art. 69.4 de la Ley 39/2015",
          "Los plazos concedidos para adoptar medidas correctoras o subsanar se consideran PLAZOS DE AUDIENCIA PREVIA a la resolución sobre el cese cautelar o definitivo, y todo ello sin perjuicio del oportuno EXPEDIENTE SANCIONADOR",
        ],
      },
    ],
    claves: [
      "Art. 192 LFOTU: ocho letras. NO define «obra menor» — remite a las ORDENANZAS MUNICIPALES (letras b y e)",
      "Autoconsumo solar: SIN LIMITACIÓN DE POTENCIA (cualquier cifra en un distractor es falsa)",
      "Tres excepciones de la letra g): BIC o catalogado · afección a cimientos o estructura · necesidad de EIA",
      "Puntos de recarga: solo los situados EN EL INTERIOR de edificaciones (letra h)",
      "Las letras g) y h) las añadió la LEY FORAL 4/2021, de 22 de abril",
      "Art. 192.2: la declaración responsable NO exime ni condiciona la inspección, control y sanción municipales",
      "Ley 12/2012: umbral vigente de 750 M² de superficie útil de exposición y venta (antes 300 y 500)",
      "Quedan fuera las actividades con impacto en el PATRIMONIO HISTÓRICO-ARTÍSTICO o en el dominio público (art. 2.2)",
      "Cambio de titularidad: comunicación previa A LOS SOLOS EFECTOS INFORMATIVOS (art. 3.2)",
      "La exención de licencia para obras solo opera si NO se requiere proyecto ex art. 2.2 LOE (art. 3.3)",
      "Las remisiones al art. 71 bis de la Ley 30/1992 deben leerse hechas al ART. 69 DE LA LEY 39/2015",
      "Obra menor: sencillez técnica + escasa entidad constructiva + escasa entidad económica, CONJUNTAMENTE",
      "Comunicadas: NO valen con andamios, ocupación de vía pública, trabajos en altura o grúa, ni en edificios catalogados",
      "Casco Antiguo: las obras de fachada y cubierta salen del régimen de comunicación y van al abreviado",
      "Catalogados grados 1 y 2: excluidos del abreviado. Grado 3: admite abreviado con límites",
      "Plazos de la ordenanza: 10 DÍAS HÁBILES subsanación · 15 DÍAS HÁBILES análisis excepcional con conformidad por silencio · 1 MES resolución del abreviado · 4 DÍAS para retirar la licencia",
      "Obras: iniciar en 3 MESES y terminar en 6 MESES; prórroga máxima igual a LA MITAD de esos plazos",
      "Art. 10.4: la licencia ampara las OBRAS pero NO LOS USOS",
      "Ordenanza de 2014: COMUNICACIÓN PREVIA = cambio de titularidad · DECLARACIÓN RESPONSABLE = puesta en marcha y obras sin proyecto",
      "Subsanación en la ordenanza de control posterior: 10 DÍAS, con la eficacia EN SUSPENSO hasta subsanar",
      "El acta de inspección es DOCUMENTO PÚBLICO con valor probatorio (art. 6.5)",
      "La suspensión cautelar es ACTO DE TRÁMITE CUALIFICADO y por tanto recurrible (art. 7.3)",
    ],
  },

  E24: {
    intro:
      "El Decreto Foral 202/2002 es el desarrollo reglamentario que la Ley Foral 2/1989 anunciaba en su art. 2: aprueba el CATÁLOGO de establecimientos, espectáculos públicos y actividades recreativas y regula los REGISTROS de empresas y locales. Es un tema de definiciones, y por eso se examina con preguntas de detalle: qué nivel sonoro corresponde a cada figura, qué establecimiento exige vestíbulo estanco, cuál no puede tener pista de baile, qué diámetro mínimo tiene una pista. La clave para no perderse es entender que el Catálogo escalona los locales de hostelería por su intensidad musical —bar y cafetería (75 dBA) < bar especial y café-espectáculo (90 dBA) < discoteca (baile)— y que a cada escalón le corresponden exigencias constructivas mayores.",
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
          "Al subir a 90 dBA la norma exige contrapartidas constructivas, y son las mismas en las dos figuras: vestíbulo o departamento estanco con absorción acústica y doble puerta con cierre automático, más un controlador de presión acústica que no solo limita sino que REGISTRA los niveles de emisión. La diferencia entre ambas está en el directo: el bar especial vive de la música reproducida y tiene prohibido el escenario; el café-espectáculo se define justamente por las actuaciones en directo y por eso necesita escenario, camerino y una superficie mínima. Ninguno de los dos puede tener espacios de baile —ese es el salto a discoteca.",
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
          "La discoteca es la única figura del Catálogo definida por el baile, y arrastra la condición urbanística más severa de todo el Decreto: solo es autorizable en edificios con estructura INDEPENDIENTE respecto a los usos de vivienda. Esa frase del art. 9.4 es la que un técnico municipal maneja al informar una licencia y por eso cae con frecuencia. La discoteca de juventud no es un local distinto sino un régimen horario de funcionamiento sobre una discoteca ya licenciada.",
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
          "Del bloque final de establecimientos conviene retener los adverbios, porque son la trampa habitual: los salones recreativos explotan juegos recreativos, los salones de JUEGO se dedican EXCLUSIVAMENTE a máquinas de juego y las salas de bingo, PREFERENTEMENTE al bingo. En instalaciones deportivas, la lista de diez tipos del art. 20 se pregunta sobre todo por la pareja frontón/trinquete, que se distinguen por la contracancha y el número de paredes laterales.",
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
          "La sección 3ª es la que aplica el técnico municipal a diario. Dos exigencias de contenido en la licencia: la actividad exacta según el Catálogo y el AFORO MÁXIMO —y si hay espacios de uso diferenciado, el aforo de cada uno—. El concepto de actividades COMPATIBLES tiene una definición cerrada que conviene memorizar por sus tres criterios. Y el art. 31 aporta los plazos que más se preguntan del tema: 15 días para solicitar y 2 días naturales de antelación en la notificación.",
        items: [
          "Regla general (art. 29): ningún edificio, local o instalación puede dedicarse a espectáculos o actividades recreativas dirigidos al público sin haber obtenido previamente la LICENCIA MUNICIPAL DE APERTURA. Las instalaciones eventuales, portátiles o desmontables necesitan LICENCIA ESPECIAL previa acreditación de las condiciones de seguridad",
          "Contenido de la licencia (art. 30.1): debe señalar con exactitud la actividad o actividades siguiendo las definiciones del Catálogo, ASÍ COMO EL AFORO MÁXIMO del local",
          "Varias actividades en un local (art. 30.2): se hace constar cada una y deben ser COMPATIBLES. Son compatibles las que NO DIFIERAN en cuanto a horario de cierre, dotaciones o público al que se autoriza el acceso, con las únicas excepciones del art. 10 (discotecas de juventud) y de la disposición adicional cuarta. Si el local cuenta con varios espacios de uso diferenciado, debe expresarse el AFORO DE CADA UNO",
          "La concesión de estas licencias no excluye la obligación de obtener las demás autorizaciones de la normativa específica aplicable (art. 30.3)",
          "ACTIVIDADES EXTRAORDINARIAS (art. 31.1): la empresa titular de un local con licencia que pretenda desarrollar con carácter extraordinario otra actividad distinta pero COMPATIBLE E INCLUIDA EN EL CATÁLOGO debe obtener autorización especial del Ayuntamiento, adjuntando MEMORIA DESCRIPTIVA de la actividad y de las instalaciones y medios necesarios. Plazo de solicitud: antelación mínima de QUINCE DÍAS respecto del inicio",
          "Certificado técnico (art. 31.2): si la nueva actividad afecta significativamente a las condiciones de seguridad, salubridad o molestias a terceros, el Ayuntamiento requiere CERTIFICADO DE TÉCNICO COMPETENTE que justifique la idoneidad del local y las medidas correctoras. Se entiende que AFECTA SIGNIFICATIVAMENTE cuando, entre otras, se altera la ocupación o su distribución respecto a los elementos de EVACUACIÓN y/o se aumenta el nivel de emisión de RUIDOS O VIBRACIONES",
          "Notificación y validez (art. 31.3): la autorización se notifica al interesado y al Departamento de Presidencia, Justicia e Interior con antelación mínima de al menos DOS DÍAS NATURALES respecto al inicio, y establece su plazo de validez. Si las solicitudes se reiteran dentro del mismo año, el Ayuntamiento PUEDE DENEGARLAS",
        ],
      },
      {
        h: "Registro de Empresas y Locales (arts. 32-35)",
        nota:
          "El registro municipal se divide en dos secciones con una lógica clara: la Primera para quien organiza SIN local determinado, la Segunda para los locales del Catálogo. De ahí se sigue la diferencia de procedimiento —la Sección Primera se inscribe tras conceder la autorización; la Segunda, DE OFICIO tras la licencia de apertura—. Los plazos del art. 35 son la pregunta fina: quince días como regla, pero diez si la variación afecta solo al nombre comercial o a la empresa titular.",
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
        h: "Disposiciones adicionales",
        nota:
          "Cuatro disposiciones cortas que resuelven casos concretos y se preguntan precisamente por eso. La adicional primera y la cuarta funcionan como excepciones al régimen general de compatibilidad del art. 30.2, y la tercera explica por qué en Navarra ya no existe la figura del «Café-Bar».",
        items: [
          "DA PRIMERA: los establecimientos de los artículos 11 a 26 —del cibercentro al parque zoológico, es decir, los que no son hostelería— pueden contar con SERVICIO DE BEBIDAS, sin perjuicio de otras condiciones de la normativa sectorial",
          "DA SEGUNDA: los titulares de los establecimientos de la Sección Primera del Capítulo II no permitirán SACAR BEBIDAS fuera del local o de las zonas autorizadas como terrazas, pudiendo ser sancionados por infracción del art. 24 de la Ley Foral 2/1989",
          "DA TERCERA: los establecimientos que a la entrada en vigor contaran con licencia de CAFÉ-BAR quedan catalogados formalmente como BARES. Los Ayuntamientos, a solicitud de los interesados y previa comprobación, deben REDEFINIR las licencias anteriores para adaptarlas a las definiciones del Catálogo, y remitir después al Departamento nueva FICHA DE LOCAL con copia de la Resolución",
          "DA CUARTA: las actividades de RESTAURANTE y BAR ESPECIAL pueden realizarse en el mismo establecimiento, siempre que el local cuente con las licencias correspondientes y ambas se desarrollen en ESPACIOS DE USO DIFERENCIADO",
          "Disposición derogatoria única: queda derogado el Decreto Foral 131/1989, modificado por el DF 193/1991, que aprobó el Catálogo anterior",
        ],
      },
    ],
    claves: [
      "Ambientación = música reproducida, NUNCA en vivo · Amenización = en directo, complementaria, sin escenario y sin publicidad de los ejecutantes",
      "Pista de baile: círculo inscrito de DIÁMETRO MÍNIMO 5 m, libre de obstáculos",
      "Servicio de bebidas: exclusivo para asistentes, sin cocina ni instalaciones que exijan salida de humos",
      "75 dBA: bar, cafetería y restaurante · 90 dBA: bar especial y café-espectáculo",
      "Solo el RESTAURANTE, de los tres de 75 dBA, admite amenización; y música en vivo únicamente en banquetes con autorización del Ayuntamiento",
      "Bar especial y café-espectáculo: vestíbulo estanco con absorción acústica, doble puerta con cierre automático y controlador de presión acústica que además REGISTRA",
      "El bar especial NO puede tener escenario ni espacios de baile; el café-espectáculo sí tiene escenario y camerino, pero tampoco baile",
      "Café-espectáculo: mínimo 50 m² útiles para público, sin contar barra, aseos, almacenes, escenario ni camerino; toda la actividad en el interior",
      "DISCOTECA: solo autorizable en edificios con ESTRUCTURA INDEPENDIENTE respecto a los usos de vivienda (art. 9.4)",
      "Discoteca de juventud: público de 14 a 18 años, sobre una licencia de discoteca ya existente; prohibido incluso ALMACENAR o EXHIBIR alcohol y tabaco",
      "Salones recreativos = juegos recreativos · Salones de juego = EXCLUSIVAMENTE máquinas de juego · Bingo = PREFERENTEMENTE bingo",
      "Trinquete = frontón cerrado, SIN contracancha y con DOS paredes laterales",
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
    ],
  },

  E26: {
    intro:
      "El tema reúne DOS decretos forales que se leen encadenados: el DF 108/2014, que regula el informe de evaluación de los edificios (IEE), y el DF 322/2000, que regula el LIBRO DEL EDIFICIO. La bisagra entre ambos es el art. 10.2 del DF 108/2014: el informe de evaluación se incorpora al libro del edificio y, si el libro no existe, el informe pasa a ser su primer documento. Del DF 108/2014 el armazón son cuatro decisiones encadenadas — QUIÉN está obligado (art. 3) → QUÉ se mira (art. 4) → CÓMO se califican las deficiencias (art. 7) → QUÉ calificación recibe el edificio (art. 8), con los cuatro escalones apto / apto con deficiencias leves / no apto provisionalmente / no apto. Del DF 322/2000 interesa la cadena documental: quién lo formaliza (el promotor), qué contiene (cinco apartados del art. 4), a quién y cómo se entrega (acta de recepción del art. 16) y quién lo mantiene después (la comunidad de propietarios). Es un tema muy propio del arquitecto municipal, porque el Ayuntamiento aparece en los dos extremos: recibe e inscribe el IEE, y la licencia de primera utilización marca los plazos del libro.",
    bloques: [
      {
        h: "Objeto y ámbito de aplicación (arts. 1-2)",
        nota:
          "El ámbito se define por la tipología, no por el uso: lo determinante es que haya más de una vivienda, aunque el edificio tenga simultáneamente otros usos. La exclusión de las unifamiliares tiene una frontera muy nítida y muy preguntable: lo que decide no es si hay accesos independientes ni si comparten sótano, sino si las viviendas se superponen verticalmente. Dos adosados que comparten garaje mancomunado bajo rasante siguen siendo unifamiliares; dos viviendas una encima de otra, con portales separados, no lo son nunca.",
        items: [
          "Triple objeto (art. 1): regular el informe de evaluación derivado de la Ley 8/2013 · favorecer la conservación y rehabilitación del parque y la regeneración y renovación de los tejidos urbanos, asegurando seguridad, salubridad y accesibilidad y dando a conocer la eficiencia energética · aprobar el programa de evaluaciones obligatorias en Navarra",
          "Ámbito (art. 2.1): edificios de TIPOLOGÍA RESIDENCIAL COLECTIVA, entendiendo por tales los que cuentan con MÁS DE UNA VIVIENDA, independientemente de que el edificio contenga simultáneamente otros usos",
          "Se ASIMILAN a esa tipología los edificios destinados a ser ocupados o habitados por un grupo de personas que, sin constituir núcleo familiar, comparten servicios y se someten a un régimen común: hoteles y residencias",
          "Para determinar el número de viviendas se considera, además de las cédulas de habitabilidad vigentes, el NÚMERO DE VIVIENDAS INCLUIDAS EN EL CATASTRO (art. 2.1)",
          "EXCLUIDAS las viviendas unifamiliares, entendiendo por tales las aisladas o adosadas HORIZONTALMENTE, aun cuando estas últimas compartan en planta bajo rasante garajes o trasteros mancomunados (art. 2.2)",
          "Regla de cierre: en NINGÚN CASO se consideran unifamiliares las viviendas SUPERPUESTAS VERTICALMENTE, aunque cuenten con accesos independientes",
        ],
      },
      {
        h: "Obligatoriedad del informe (art. 3)",
        nota:
          "La regla general es la antigüedad de cincuenta años, pero junto a ella hay dos vías de obligación anticipada que conviene no confundir: la del apartado 2, ligada a pedir ayudas de rehabilitación protegida para tres tipos concretos de obra, y la del apartado 3, que permite al Ayuntamiento exigirlo a cualquier edificio con deficiencias evidentes aunque no tenga la edad. El orden de prelación de los documentos para acreditar la antigüedad es literal y se pregunta tal cual.",
        items: [
          "Regla general (art. 3.1): deben evaluarse los edificios de tipología residencial colectiva con antigüedad IGUAL O SUPERIOR A 50 AÑOS",
          "ORDEN DE PRELACIÓN para acreditar la antigüedad, si hay documentos discrepantes: 1º calificación definitiva como vivienda protegida · 2º inscripción en el CATASTRO · 3º Registro de la Propiedad · 4º expedición de cédula de habitabilidad · 5º certificado de final de obra · 6º cualquier otro documento válido en derecho",
          "Obligación anticipada por rehabilitación protegida (art. 3.2): todo proyecto que se pretenda calificar como rehabilitación protegida y tenga por objetivo la CONSOLIDACIÓN ESTRUCTURAL, la adaptación completa a la normativa de ACCESIBILIDAD universal, o la mejora de la ENVOLVENTE TÉRMICA, debe incorporar el informe previa o simultáneamente a la redacción del proyecto",
          "Obligación anticipada por riesgo (art. 3.3): los ayuntamientos o el departamento competente pueden imponer el informe a edificios que aún no hayan alcanzado la antigüedad o el vencimiento de una evaluación previa, si presentan deficiencias evidentes estructurales, constructivas o de instalaciones que puedan suponer riesgo para las personas, tanto en el interior como en la VÍA PÚBLICA",
          "EXENTOS los edificios declarados en RUINA, sin perjuicio de las obligaciones derivadas de esa declaración (art. 3.4)",
          "La obligación corresponde a los PROPIETARIOS cualquiera que sea el régimen de propiedad, que deben encomendar la evaluación a técnicos competentes y facilitarles el acceso al edificio, viviendas y locales (art. 3.5)",
          "Los propietarios de edificios NO obligados mantienen íntegro el deber de mantenimiento y conservación de la LOE y de la legislación urbanística (art. 3.6)",
        ],
      },
      {
        h: "Alcance de la evaluación (art. 4)",
        nota:
          "El alcance tiene un límite explícito que protege al técnico y que conviene tener claro: la evaluación se hace con los sentidos. No es objeto detectar vicios o daños ocultos ni determinar con precisión el origen de las patologías —solo formular un prediagnóstico—, y si hace falta más, el evaluador propone un informe pericial aparte. Con las instalaciones sujetas a inspección sectorial propia el técnico no inspecciona: se limita a pedir los papeles.",
        items: [
          "La evaluación comprende el EDIFICIO COMPLETO, elementos comunes y viviendas o locales, y todas las plantas desde la CIMENTACIÓN A LA CUBIERTA, aunque alguna supere el ámbito del edificio (garajes mancomunados o plantas de uso distinto al residencial)",
          "Excepción por portales (art. 4.1): en edificios en régimen de propiedad horizontal con varios portales para los que se hayan constituido COMUNIDADES DE PROPIETARIOS INDEPENDIENTES, puede efectuarse una evaluación por cada comunidad o portal",
          "Si el técnico no puede acceder a la totalidad de las viviendas o locales, debe reflejarlo en el informe indicando si supone limitación al contenido técnico y, en su caso, la VALIDEZ del informe para el conjunto del edificio (art. 4.2)",
          "Aspecto a) ESTADO GENERAL: elementos estructurales, constructivos e instalaciones que no requieran inspección sectorial específica, constatando las patologías APRECIABLES CON LOS SENTIDOS. Para las instalaciones con inspección específica el técnico se LIMITA A REQUERIR contratos de mantenimiento, boletines o informes que acrediten el cumplimiento",
          "Límite expreso del alcance: NO es objeto de la evaluación la detección de vicios o daños OCULTOS, ni la determinación precisa del origen de las patologías, aunque SÍ la formulación de un PREDIAGNÓSTICO de sus posibles causas. Si hace falta más, el evaluador propone a los propietarios un informe pericial o técnico —del propio evaluador o de otro— con diagnóstico preciso, forma de subsanación y necesidad de proyecto",
          "Aspecto b) ACCESIBILIDAD: grado de accesibilidad y enumeración de elementos que incumplen el DB-SUA y la normativa de accesibilidad y no discriminación. Si el edificio es técnicamente inaccesible, hay que determinar si puede mejorar mediante AJUSTES RAZONABLES que no supongan carga desproporcionada (Ley 8/2013), indicándolos en el informe",
          "Aspecto c) EFICIENCIA ENERGÉTICA: certificación con el contenido y procedimiento de la normativa vigente. Si ya existe certificado válido y no ha habido variaciones en las características energéticas del edificio o sus instalaciones, basta ADJUNTARLO; en caso contrario hay que certificar de nuevo",
        ],
      },
      {
        h: "Técnicos evaluadores y el informe (arts. 5-6)",
        nota:
          "La habilitación profesional es doble y cerrada —arquitecto o arquitecto técnico— porque se trata del edificio considerado en su conjunto, excluidas precisamente las instalaciones que exigen inspección especializada. La exigencia de independencia, imparcialidad y objetividad se traslada íntegra a las entidades de control de calidad que quieran redactarlo.",
        items: [
          "Técnicos (art. 5): el informe lo redacta técnico con titulación de ARQUITECTO, o titulados que ejerzan la profesión de ARQUITECTO TÉCNICO, sin perjuicio de la normativa básica estatal sobre competencias profesionales",
          "El técnico debe garantizar la INDEPENDENCIA, IMPARCIALIDAD Y OBJETIVIDAD del informe; los mismos requisitos se exigen a las entidades de control de calidad de la edificación u otras sociedades que puedan redactarlo, y en todos los casos el informe va FIRMADO POR UN TÉCNICO COMPETENTE",
          "Contenido del informe (art. 6.1): características generales del edificio · estado general según el art. 4.3 · deficiencias observadas · su calificación y su carácter LOCAL O GENERAL · el plazo para subsanarlas · y la calificación final del edificio",
          "El informe se elabora obligatoriamente mediante la APLICACIÓN INFORMÁTICA creada por el departamento competente en materia de vivienda, según modelo normalizado (art. 6.2)",
        ],
      },
      {
        h: "Calificación de las deficiencias (art. 7)",
        nota:
          "Dos ejes independientes: gravedad y extensión. En gravedad, el criterio que separa lo muy grave de lo grave es el peligro y la inmediatez: lo muy grave compromete la estabilidad y hay que subsanarlo de manera inmediata; lo grave no representa peligro inmediato y se subsana en el plazo que fije el propio informe. Ojo a dos supuestos que el decreto califica expresamente como graves aunque no lo parezcan: la simple ausencia de los controles obligatorios de las instalaciones y el riesgo en la circulación por elementos comunes, con o sin discapacidad de los usuarios.",
        items: [
          "MUY GRAVES: por su importancia comprometen la estabilidad del elemento constructivo y suponen la inestabilidad del edificio en su conjunto o un PELIGRO para moradores o viandantes; deben subsanarse DE MANERA INMEDIATA. El informe incluirá las medidas de subsanación definitiva y su plazo y, en su caso, las MEDIDAS PROVISIONALES Y URGENTES que garanticen la estabilidad mientras se elabora el informe detallado, el proyecto de reparación y se ejecutan las obras",
          "GRAVES: sin representar peligro inmediato para la estabilidad ni riesgo para moradores o viandantes, deben subsanarse en el plazo que el propio informe establezca. La necesidad se deriva de la importancia de la deficiencia en sí, de que su evolución previsible derive en MUY GRAVE en plazo inferior a un año, o de que su permanencia provoque deterioro progresivo hacia grave inestabilidad o insalubridad dentro del periodo de vigencia",
          "Se califica también como GRAVE la AUSENCIA de los controles obligatorios de las instalaciones dentro de los plazos que imponga su normativa sectorial",
          "Y son igualmente GRAVES las deficiencias que provocan que la circulación por los ELEMENTOS COMUNES suponga riesgo para los usuarios, SUFRAN O NO DISCAPACIDAD",
          "LEVES: aquellas cuya importancia o evolución prevista no permite calificarlas como graves o muy graves, pero cuya resolución resulta necesaria para un adecuado mantenimiento del edificio evitando su progresivo deterioro",
          "Por EXTENSIÓN — GENERALIZADAS: con independencia de su gravedad, las que afectan a MÁS DEL 50 % de la superficie del elemento constructivo considerado (fachada, cubierta, escalera, carpinterías…), excepto si dicho elemento es singular y de escasa relevancia en el conjunto",
          "Por EXTENSIÓN — LOCALIZADAS: las que afectan a menos del 50 % del elemento, o las que, aun afectando a un porcentaje mayor o incluso a su totalidad, recaen sobre un elemento de ESCASA RELEVANCIA sobre el conjunto del edificio",
        ],
      },
      {
        h: "Calificación del edificio (art. 8)",
        nota:
          "Cuatro escalones. La frontera entre «no apto provisionalmente» y «no apto» es el plazo del año, y la doble condición del provisional conviene retenerla completa: deficiencias graves, plazo improrrogable inferior a un año Y ausencia de peligro para usuarios o viandantes. La ventaja práctica del provisional es que, subsanado, la nueva evaluación se limita a las deficiencias del informe inicial y no obliga a repetir un IEE completo.",
        items: [
          "APTO: el edificio no presenta ninguna deficiencia que deba ser reseñada en el informe",
          "APTO CON DEFICIENCIAS LEVES: presenta ese tipo de deficiencias que, por afectar exclusivamente al mantenimiento, pueden subsanarse a lo largo del periodo de vigencia del informe. Tiene los mismos efectos que el apto, pero sirve de aviso y recordatorio del mantenimiento pendiente",
          "NO APTO PROVISIONALMENTE: el informe incluye deficiencias GRAVES para cuya subsanación se ha establecido un plazo IMPRORROGABLE INFERIOR A UN AÑO y dichas deficiencias NO representan peligro para usuarios ni viandantes",
          "Cómo sale del provisional: subsanadas las deficiencias en plazo y tras nueva evaluación LIMITADA a las deficiencias recogidas en el informe inicial, se certifica que se han efectuado las reparaciones exigidas y se alcanza la condición de apto o apto con deficiencias leves — no hace falta un IEE completo nuevo",
          "NO APTO: el edificio con deficiencias MUY GRAVES. También el que cuenta con deficiencias graves cuya subsanación precise un plazo SUPERIOR A UN AÑO. Transcurrido el plazo del informe para subsanar, debe someterse a NUEVO informe de evaluación completo",
        ],
      },
      {
        h: "Vigencia y renovación (art. 9)",
        nota:
          "La vigencia es de diez años, pero el día inicial tiene una regla antielusión: se cuenta desde la entrada en el registro, salvo que el propietario se demore más de seis meses en presentarlo, en cuyo caso el plazo corre desde la firma del técnico y se pierde el tiempo transcurrido. En la renovación funciona la prórroga tácita mientras se hace la nueva evaluación, con el tope de un año.",
        items: [
          "Vigencia de DIEZ AÑOS desde su ENTRADA EN EL REGISTRO, excepto cuando entre la firma del informe y dicha entrada hubieran transcurrido más de 6 MESES, caso en el que el plazo se cuenta desde la FIRMA del informe por el técnico (art. 9.1)",
          "El plazo puede REDUCIRSE cuando circunstancias sobrevenidas modifiquen y empeoren sustancialmente las condiciones de seguridad, salubridad, accesibilidad, eficiencia energética y ornato existentes al emitir el informe; los propietarios quedan obligados a subsanar o a someterse a nueva evaluación",
          "Los AYUNTAMIENTOS, de oficio o a instancia de parte, pueden declarar la PÉRDIDA ANTICIPADA de la vigencia del informe si circunstancias sobrevenidas lo requieren",
          "Todos los edificios obligados deben contar con un informe VIGENTE que los califique como APTO o APTO CON DEFICIENCIAS LEVES (art. 9.2)",
          "PRÓRROGA EN LA RENOVACIÓN: se entiende prorrogada la vigencia del informe anterior durante el tiempo empleado en realizar la nueva evaluación, siempre que no transcurra más de UN AÑO desde la fecha de pérdida de vigencia",
          "Un informe favorable NO exime: los propietarios mantienen íntegramente los deberes de mantenimiento y conservación establecidos legalmente (art. 9.3)",
        ],
      },
      {
        h: "Destino del informe y libro del edificio (art. 10)",
        nota:
          "Este artículo contiene la única obligación que pesa directamente sobre el técnico frente a la Administración, y es la que más conviene tener presente en el ejercicio profesional: si aparecen deficiencias muy graves con riesgo inminente, el informe lo remite al Ayuntamiento el propio técnico que lo firma, no el propietario. Y si la urgencia impide comunicarlo al Ayuntamiento, la vía alternativa es el departamento de extinción de incendios.",
        items: [
          "El técnico realiza el informe en la aplicación informática y lo firma con FIRMA DIGITAL válida; después entrega al propietario o a su representante los CÓDIGOS DE ACCESO que permiten hacer uso del informe firmado, y copia si se solicita (art. 10.1)",
          "RIESGO INMINENTE: si el informe indica patologías o deficiencias muy graves que puedan suponer riesgo inminente para las personas, además de prever las medidas del art. 7, el informe debe ser remitido al ayuntamiento POR EL TÉCNICO QUE LO FIRMA en el plazo más breve posible. Si la inminencia exige medidas inmediatas y no se puede comunicar al ayuntamiento, se pone en conocimiento del Departamento competente en materia de EXTINCIÓN DE INCENDIOS",
          "LIBRO DEL EDIFICIO (art. 10.2): el informe se incorpora al libro del edificio cuando exista o, si no existiera, CONSTITUYE EL PRIMER DOCUMENTO QUE LO INTEGRE, añadiéndose después los informes y proyectos necesarios para subsanar deficiencias",
          "Transmisiones (art. 10.3): en la venta o arrendamiento de viviendas de un edificio obligado, el adquirente o el arrendatario puede exigir, JUNTO CON LA CÉDULA DE HABITABILIDAD, copia del informe",
          "Inscripción (art. 10.4): el propietario o su representante remite al ayuntamiento las claves de acceso al original digital solicitando su inclusión en el registro. El ayuntamiento incorpora el informe al registro en el plazo máximo de DOS MESES",
        ],
      },
      {
        h: "Efectos del cumplimiento y del incumplimiento (art. 11)",
        nota:
          "El decreto es de 2014 y cita la Ley Foral 35/2002 de Ordenación del Territorio y Urbanismo, hoy refundida en el Decreto Foral Legislativo 1/2017 (LFOTU); las referencias a sus artículos 87, 196 y 212 deben leerse trasladadas al texto refundido vigente. Lo importante para el examen es el mecanismo: carecer del informe no es por sí solo infracción, pero desoír el requerimiento municipal sí lo convierte en incumplimiento de los deberes de conservación, con multas coercitivas, ejecución subsidiaria y, en el caso más grave, posible declaración de ruina.",
        items: [
          "Cumplir en plazo con calificación de apto o apto con deficiencias leves (art. 11.1) permite ACREDITAR con el informe el cumplimiento de las obligaciones de la LOE y de la legislación urbanística —conservando el deber de mantenimiento durante la vigencia— y acometer obras acogiéndose a la calificación como REHABILITACIÓN PROTEGIDA",
          "CARECER del informe estando obligado (art. 11.2.1): consecuencias del art. 16 LOE · si se desoye el requerimiento del ayuntamiento o del departamento, se incumplen los deberes de uso, conservación y rehabilitación y puede declararse la responsabilidad por INFRACCIÓN GRAVE, sin perjuicio de que pueda declararse la RUINA · no puede solicitarse la calificación provisional de rehabilitación protegida · ejecución forzosa previo apercibimiento mediante MULTAS COERCITIVAS y/o EJECUCIÓN SUBSIDIARIA · en hoteles y residencias, medidas del departamento sectorial competente",
          "NO EJECUTAR las obras tras un informe de no apto o no apto provisionalmente (art. 11.2.2): consecuencias del art. 16 LOE · infracción GRAVE en materia urbanística o, subsidiariamente, infracción MUY GRAVE de la Ley Foral 10/2010 del Derecho a la Vivienda · ejecución forzosa con multas coercitivas y/o ejecución subsidiaria",
          "Consecuencia específica sobre la habitabilidad: el departamento competente en vivienda puede abrir expediente sobre la PÉRDIDA ANTICIPADA DE VIGENCIA DE LAS CÉDULAS DE HABITABILIDAD de las viviendas del edificio, según el art. 12 del DF 142/2004, en función de la gravedad, peligrosidad o insalubridad apreciadas",
          "Para usos distintos del de vivienda incluidos en el ámbito, los departamentos competentes pueden iniciar expedientes que conduzcan a la ORDEN DE CESE DE LA ACTIVIDAD",
        ],
      },
      {
        h: "Registro General de Evaluación de Edificios (arts. 12-13)",
        nota:
          "El registro foral no compite con los municipales: sirve de base a todos ellos, de modo que el Ayuntamiento y el Gobierno de Navarra manejan la misma información. El reparto de papeles en la inscripción es la pregunta típica: el propietario aporta el código, el Ayuntamiento lo introduce y practica la inscripción.",
        items: [
          "El departamento competente en vivienda crea el registro general de evaluación de edificios de Navarra, que sirve de BASE para todos los registros municipales sobre esta materia (art. 12.1)",
          "Cuádruple objeto (art. 12.2): proporcionar a los ayuntamientos la misma información de que dispone el Gobierno de Navarra · servir de base de datos al departamento para conocer el estado del parque y elaborar planes · facilitar a los profesionales y de modo indirecto a los ciudadanos la elaboración de los informes · nutrir los censos de construcciones, edificios, viviendas y locales precisados de rehabilitación de la Ley 8/2013, integrándose en el registro general de viviendas de Navarra cuando éste se establezca",
          "El departamento debe poner a disposición de ayuntamientos, ciudadanos y profesionales una aplicación informática que posibilite la elaboración, presentación y registro de los informes (art. 12.3)",
          "Procedimiento de inscripción (art. 13): una vez el propietario dispone de los códigos de acceso al informe firmado, SOLICITA al ayuntamiento la formalización de la inscripción; después el AYUNTAMIENTO introduce el código facilitado y practica la inscripción en el registro general mediante la aplicación informática",
        ],
      },
      {
        h: "Disposiciones adicionales y transitorias",
        nota:
          "El programa de implantación gradual de la DT 1ª ya está agotado en su calendario de fechas cerradas: las seis primeras letras cubrían de 2017 a 2021. Lo que sigue vivo hoy es la letra f), que es la regla permanente: quien cumple cincuenta años a partir del 1 de enero de 2020 dispone de un año desde esa fecha para tener el informe.",
        items: [
          "DA PRIMERA: las solicitudes de calificación provisional de rehabilitación protegida de edificios de 50 o más años presentadas a partir del 1 DE JULIO DE 2015 deben aportar copia del informe de evaluación",
          "DA SEGUNDA: en ámbitos definidos por el ayuntamiento y según sus directrices, las oficinas de rehabilitación de viviendas y edificios (ORVE) pueden realizar informes técnicos que sirven de ORIENTACIÓN para las actuaciones sobre el medio urbano y para la elaboración de los propios informes de evaluación",
          "DT PRIMERA — calendario cerrado: 100 o más años a 31/12/2013 → antes del 1 de enero de 2017 · 50 o más años a 31/12/2013 → antes de 2018 · los que cumplen 50 años entre 2014 y 2016 → antes de 2019 · entre 2017 y 2018 → antes de 2020 · durante 2019 → antes de 2021",
          "DT PRIMERA — REGLA PERMANENTE (letra f): los que adquieran la antigüedad de 50 años a partir del 1 DE ENERO DE 2020 deben disponer del informe antes de que transcurra UN AÑO desde la fecha en que hubieran adquirido dicha antigüedad",
          "DT SEGUNDA: los edificios con inspección técnica efectuada conforme al RDL 8/2011 no están obligados a contar con el informe durante el periodo de vigencia de aquella inspección, siempre que ese plazo fuera IGUAL O INFERIOR A DIEZ AÑOS",
          "DT SEGUNDA: quienes ya contaran con informe de evaluación antes de la entrada en vigor del decreto y dentro de su vigencia debían presentarlo para inscripción en el plazo máximo de 1 AÑO; de no solicitarse la inscripción en plazo, el informe se entiende COMO NO EFECTUADO",
        ],
      },
      {
        h: "DF 322/2000 — Libro del Edificio: obligatoriedad y custodia (arts. 1-3)",
        nota:
          "El segundo decreto del tema. Su ámbito es más estrecho de lo que parece: obligatorio en los edificios DESTINADOS A VIVIENDA que se construyan en Navarra, no en cualquier edificación. En rehabilitación también es obligatorio, pero con un contenido recortado — solo los datos y documentos que se deriven de la propia actividad rehabilitadora, no toda la historia del edificio, que sería imposible reconstruir. El dato que más se pregunta de este bloque es el plazo de un mes para registrar y archivar.",
        items: [
          "OBLIGATORIEDAD (art. 1): en todos los edificios DESTINADOS A VIVIENDA que se construyan en la Comunidad Foral a partir de la entrada en vigor del decreto",
          "En REHABILITACIÓN (art. 1.1): es obligatoria la formalización del libro en las obras que afecten a la TOTALIDAD del edificio destinado a viviendas, a sus instalaciones generales o a sus elementos comunes, y en las rehabilitaciones BENEFICIARIAS DE AYUDAS PÚBLICAS. Pero en él figurarán EXCLUSIVAMENTE los datos y documentos que se deriven de la propia actividad rehabilitadora",
          "Y además en cualquier otro supuesto en que resulte obligatorio por aplicación de la LOE (art. 1.2)",
          "CUSTODIA Y ACTUALIZACIÓN (art. 2.1): corresponden al propietario del edificio o persona en quien delegue. En edificios en RÉGIMEN DE PROPIEDAD HORIZONTAL, asume esas funciones quien venga obligado a la custodia de documentación por la legislación de propiedad horizontal",
          "En toda inscripción o incorporación de documentos debe constar la FECHA Y LA FIRMA de quien tiene atribuida la custodia (art. 2.2)",
          "PLAZO DE UN MES (art. 2.3): las operaciones de mantenimiento, reforma, rehabilitación o cualquier otra que modifique los datos del libro deben registrarse en el plazo de UN MES desde que se produzcan o hayan finalizado; y los documentos que deban archivarse se incorporan en UN MES desde que se obtuvieran",
          "EFECTO JUSTIFICATIVO (art. 2.4): la existencia del libro debidamente actualizado, con las operaciones de mantenimiento y reparación, surte efectos para JUSTIFICAR EL CUMPLIMIENTO de las obligaciones que la LOE impone a propietarios y usuarios, y de cualquier otra obligación de mantenimiento de la normativa sectorial",
          "ACCESO (art. 3): el libro estará a disposición de TODOS LOS COPROPIETARIOS y de los representantes de la Administración que inspeccionen el cumplimiento de las obligaciones o la ejecución de las operaciones de control o mantenimiento obligatorias. En ambos casos puede exigirse efectuar copias de todo o parte del contenido A COSTA DEL SOLICITANTE",
        ],
      },
      {
        h: "Libro del Edificio: contenido (arts. 4-14)",
        nota:
          "Cinco apartados, precedidos de una copia del propio decreto foral que hace de guía para la actualización — un detalle que se pregunta porque es contraintuitivo. De los datos generales conviene retener los que tienen formato tasado: la fotografía de fachada con tamaño mínimo y el archivador DIN A4 con índice. Y las tres garantías del art. 9 son las de la LOE: diez, tres y un año.",
        items: [
          "El libro incluye EN PRIMER LUGAR una copia del propio Decreto Foral que regula su contenido, que constituye la GUÍA PARA SU ACTUALIZACIÓN (art. 4)",
          "CINCO APARTADOS (art. 4): Datos Generales del Edificio · Archivo de Documentos · Proyecto y otros Documentos Técnicos · Registro de Incidencias · Registro de Operaciones de Mantenimiento y Rehabilitación",
          "Los DATOS GENERALES (art. 5) se subdividen a su vez en cinco: Identificación del Edificio · Datos Jurídico-Administrativos · Intervinientes en el proceso edificatorio · Garantías y Seguros · Otros Datos u Observaciones",
          "IDENTIFICACIÓN (art. 6): nombre, si lo tiene · dirección postal completa y REFERENCIA CATASTRAL · datos registrales de la escritura de Declaración de Obra Nueva y División en Propiedad Horizontal · plano de emplazamiento a escala suficiente · cédula parcelaria · y FOTOGRAFÍA de la fachada principal del edificio terminado, en tamaño MÍNIMO DE 9 POR 13 CENTÍMETROS",
          "INTERVINIENTES (art. 8): promotor · autores del proyecto o proyectos · dirección facultativa · constructor · y subcontratistas e industriales instaladores, debiendo constar expresamente al menos los ejecutores de FONTANERÍA, CALEFACCIÓN, ELECTRICIDAD, GAS, ELEVADORES, TELECOMUNICACIONES, CONTRAINCENDIOS Y CLIMATIZACIÓN en todos los casos en que el edificio las contenga",
          "GARANTÍAS (art. 9.1), las tres de la LOE: DIEZ AÑOS por daños que tengan su origen o afecten a cimentación, soportes, vigas, forjados u otros elementos estructurales y comprometan directamente la resistencia mecánica o estabilidad · TRES AÑOS por vicios o defectos de los elementos constructivos o de las instalaciones · UN AÑO por vicios o defectos que afecten a los elementos de TERMINACIÓN O ACABADO",
          "ARCHIVO DE DOCUMENTOS (art. 11): archivador de hojas FORMATO DIN A4 con una nota de instrucciones sobre la forma de archivar y un ÍNDICE enumerativo. Contiene actas, escrituras, licencias, autorizaciones de uso, certificado final de obras, calificación definitiva o documentos de ayudas, pólizas de seguros, garantías de suministradores, acta de recepción del libro, estatutos de la agrupación o cooperativa, estatutos de la comunidad y otros. Todos los documentos deben ser ORIGINALES O COPIAS AUTENTICADAS O COMPULSADAS; si no son originales, se hará constar la situación del original",
          "PROYECTO Y DOCUMENTACIÓN TÉCNICA (art. 12): copia VISADA Y COMPLETA del proyecto arquitectónico si el edificio se construyó SIN MODIFICACIÓN ALGUNA sobre el proyecto y así consta expresamente en el certificado final de obras. Si hubo modificaciones, el proyecto se SUSTITUYE por la DOCUMENTACIÓN FINAL DE OBRAS, igualmente completa y visada y con al menos la misma documentación y especificaciones",
          "INSTRUCCIONES DE USO Y MANTENIMIENTO (art. 12.3), con cinco apartados por unidad: descripción · precauciones y recomendaciones · prohibiciones · mantenimiento por el usuario y/o por personal cualificado · calendario de operaciones recomendables y obligatorias. Las instrucciones de las instalaciones PROPIAS DE CADA VIVIENDA se suministran a sus adquirentes, no van al libro",
          "CALENDARIO (art. 12.4): agrupa las acciones de mantenimiento obligatorio y recomendable por su frecuencia en períodos mensual, trimestral, anual, etc., e INFERIORES A VEINTE AÑOS",
          "REGISTRO DE INCIDENCIAS (art. 13): reformas o cambios de uso que afecten al conjunto del edificio, sus instalaciones o elementos comunes —con descripción, datos del proyecto, fecha de la licencia y ayudas públicas— y cualquier otra incidencia que modifique los datos iniciales",
          "REGISTRO DE OPERACIONES (art. 14): archivador DIN A4 con contratos de mantenimiento, registro de operaciones de mantenimiento, de reparación y de rehabilitación. Se consideran de REHABILITACIÓN las que no quepa incluir entre las de mantenimiento por su envergadura o por no estar en el calendario con periodicidad INFERIOR A VEINTE AÑOS, o las acogidas a algún tipo de AYUDA PÚBLICA",
        ],
      },
      {
        h: "Libro del Edificio: formalización, entrega y depósito (arts. 15-18)",
        nota:
          "El reparto de papeles es lo examinable: el PROMOTOR formaliza y custodia hasta la firma del acta de recepción; la COMUNIDAD cumplimenta después los registros, que se entregan en blanco con hojas según modelo oficial. El art. 16.3 contiene la nota literal que debe figurar en las copias entregadas a cada comprador, con su plazo de dos meses, y el art. 17 impone una previsión constructiva que hay que comprobar al informar un proyecto: el espacio para el armario del libro.",
        items: [
          "FORMALIZACIÓN (art. 15): acabada la obra, el PROMOTOR formaliza el libro cumplimentando los Datos Generales COMPLETOS, con excepción de los seguros que corresponda formalizar a la comunidad de propietarios (art. 9.2), e incorpora al archivo los documentos correspondientes y la documentación técnica del art. 12, salvo la del 12.5 (modificaciones durante la vida del edificio)",
          "Los REGISTROS de Incidencias y de Operaciones de Mantenimiento y Rehabilitación se suministran SIN CUMPLIMENTAR, con hojas preparadas según MODELO OFICIAL, para que los cumplimenten los propietarios",
          "ENTREGA (art. 16.1): el promotor entrega el libro al adquirente en el acto de transmisión de la propiedad si hay un único propietario; si el edificio está en PROPIEDAD HORIZONTAL, a la COMUNIDAD una vez constituida y designados sus representantes. Se firman DOS COPIAS del ACTA DE RECEPCIÓN —una se incorpora al propio libro y otra sirve al promotor como justificante—. El promotor CUSTODIA el libro hasta la firma del acta",
          "Promociones con varios edificios o portales con comunidades independientes: UN EJEMPLAR del libro POR CADA COMUNIDAD (art. 16.2)",
          "A los adquirentes de viviendas en propiedad horizontal se les entregan, en el acto de transmisión, COPIAS DE LAS HOJAS DE DATOS GENERALES según modelo oficial, firmadas por el promotor y con una nota apreciable advirtiendo de que, constituida la comunidad y elegidos los representantes, deberán solicitar fehacientemente la entrega del libro completo, con firma del acta de recepción EN EL PLAZO DE DOS MESES desde la recepción de la solicitud (art. 16.3)",
          "Negativa a recibir (art. 16.5): si constituida la comunidad no se solicita la entrega, el promotor puede efectuarla por propia iniciativa; si el representante se niega a recibir el libro o a firmar el acta, el promotor repetirá fehacientemente la solicitud y, de persistir la negativa, lo COMUNICARÁ AL DEPARTAMENTO competente para el inicio de las acciones oportunas",
          "Si el edificio queda como PROPIEDAD DEL PROMOTOR, la formalización debe efectuarse en el plazo de DOS MESES DESDE LA OBTENCIÓN DE LA LICENCIA DE PRIMERA UTILIZACIÓN (art. 16.6). En transmisión de la propiedad en régimen VERTICAL, debe transmitirse SIMULTÁNEAMENTE el libro completo (16.7)",
          "ESPACIO DE DEPÓSITO (art. 17): en edificios de viviendas de NUEVA PLANTA en propiedad horizontal en los que no exista local de uso exclusivo de los representantes, debe preverse un espacio ACCESIBLE DESDE ELEMENTO COMÚN en el que pueda instalarse un armario con capacidad para contener el libro. La comunidad puede decidir después otra ubicación",
          "TRAMITACIÓN FINAL (art. 18): al solicitar las CÉDULAS DE HABITABILIDAD como viviendas libres o la CALIFICACIÓN DEFINITIVA de viviendas protegidas, el promotor debe aportar copias firmadas de las hojas de Datos Generales del Edificio",
          "Disposición final única: el decreto se aplica, CON EXCEPCIÓN DEL ARTÍCULO 17, a los edificios de nueva planta con viviendas que soliciten cédula de habitabilidad o calificación definitiva con posterioridad al 1 DE ENERO DE 2001",
        ],
      },
    ],
    claves: [
      "Ámbito: residencial colectiva = MÁS DE UNA VIVIENDA, aunque el edificio tenga otros usos. Asimilados: hoteles y residencias",
      "Nunca son unifamiliares las viviendas SUPERPUESTAS VERTICALMENTE, aunque tengan accesos independientes; sí lo son las adosadas horizontalmente con garaje mancomunado bajo rasante",
      "Obligación general: antigüedad ≥ 50 AÑOS. Exentos los declarados en RUINA",
      "Prelación de la antigüedad: calificación definitiva VPO → catastro → Registro de la Propiedad → cédula → certificado final de obra → otro documento",
      "Rehabilitación protegida que obliga al IEE anticipado: consolidación estructural, accesibilidad universal completa o mejora de envolvente térmica",
      "Varios portales con comunidades independientes: cabe una evaluación por portal",
      "Se evalúa con LOS SENTIDOS: no son objeto los vicios ocultos ni el origen preciso, pero sí un PREDIAGNÓSTICO",
      "Instalaciones con inspección sectorial propia: el técnico solo REQUIERE los contratos, boletines e informes",
      "Redactan arquitecto o arquitecto técnico, con independencia, imparcialidad y objetividad",
      "Deficiencia GRAVE también: la ausencia de los controles obligatorios de instalaciones, y el riesgo en la circulación por elementos comunes (con o sin discapacidad)",
      "Generalizada = más del 50 % del elemento · Localizada = menos del 50 %, o más si el elemento es de escasa relevancia",
      "NO APTO PROVISIONALMENTE: deficiencias graves + plazo improrrogable INFERIOR a un año + SIN peligro para usuarios o viandantes",
      "NO APTO: deficiencias muy graves, o graves que exijan MÁS de un año",
      "Del provisional se sale con evaluación LIMITADA a las deficiencias del informe inicial; del no apto, con informe COMPLETO nuevo",
      "Vigencia 10 años desde la entrada en el REGISTRO, salvo que pasen más de 6 MESES desde la firma: entonces cuenta desde la FIRMA",
      "Prórroga en la renovación mientras se hace la nueva evaluación, con tope de UN AÑO desde la pérdida de vigencia",
      "Riesgo inminente: lo remite al ayuntamiento EL PROPIO TÉCNICO que firma; si no puede, al departamento de EXTINCIÓN DE INCENDIOS",
      "El informe se incorpora al LIBRO DEL EDIFICIO o, si no existe, es su PRIMER DOCUMENTO",
      "El ayuntamiento inscribe en el registro en plazo máximo de DOS MESES",
      "El incumplimiento puede llevar a la pérdida anticipada de vigencia de las CÉDULAS DE HABITABILIDAD (art. 12 DF 142/2004)",
      "Regla permanente vigente: quien cumple 50 años desde el 1/1/2020 tiene UN AÑO para disponer del informe",
      "— LIBRO DEL EDIFICIO (DF 322/2000) —",
      "Obligatorio en edificios DESTINADOS A VIVIENDA; en rehabilitación, solo con los datos derivados de la propia actividad rehabilitadora",
      "Plazo de UN MES para registrar operaciones y para archivar documentos desde que se obtienen",
      "El libro actualizado JUSTIFICA el cumplimiento de las obligaciones de la LOE para propietarios y usuarios",
      "Copias a costa del SOLICITANTE, sea copropietario o Administración inspectora",
      "El libro empieza con una copia del propio Decreto Foral, que hace de guía para su actualización",
      "Cinco apartados: Datos Generales · Archivo de Documentos · Proyecto y Documentos Técnicos · Registro de Incidencias · Registro de Operaciones",
      "Fotografía de la fachada principal del edificio terminado: mínimo 9 × 13 cm",
      "Garantías: 10 años estructurales · 3 años elementos constructivos e instalaciones · 1 año terminación o acabado",
      "Documentos del archivo: originales o copias AUTENTICADAS O COMPULSADAS; si no, se hace constar dónde está el original",
      "Si hubo modificaciones sobre el proyecto, éste se SUSTITUYE por la documentación final de obras, completa y visada",
      "Calendario de mantenimiento: por frecuencias INFERIORES A VEINTE AÑOS. Rehabilitación = lo que excede de eso o lleva ayuda pública",
      "El PROMOTOR formaliza y custodia hasta el acta de recepción; los registros se entregan EN BLANCO según modelo oficial",
      "Acta de recepción por DUPLICADO: una copia al libro y otra al promotor como justificante",
      "Varios portales con comunidades independientes: un ejemplar POR CADA COMUNIDAD",
      "Plazo de DOS MESES para firmar el acta desde la solicitud fehaciente de la comunidad, y DOS MESES desde la licencia de primera utilización si el edificio queda para el promotor",
      "En nueva planta y PH sin local de representantes: espacio accesible desde ELEMENTO COMÚN para el armario del libro (art. 17)",
      "El promotor aporta copias firmadas de los Datos Generales al pedir la cédula de habitabilidad o la calificación definitiva",
    ],
  },

  E27: {
    intro:
      "El Decreto Foral 23/2011 desarrolla y adapta a Navarra el RD 105/2008 sobre producción y gestión de residuos de construcción y demolición. Es un tema de cifras: umbrales de separación por fracciones, cuantías de fianza, ratios de generación y plazos. El esquema conceptual es sencillo y conviene fijarlo antes de memorizar números — hay tres sujetos (PRODUCTOR, POSEEDOR y GESTOR) y a cada uno le corresponde un documento: el productor redacta el ESTUDIO de gestión dentro del proyecto, el poseedor redacta el PLAN que aprueba la dirección facultativa, y el gestor lleva el REGISTRO de entradas y salidas y emite los certificados. Para el técnico municipal el punto crítico es la fianza: se deposita con la solicitud de licencia y se devuelve contra certificado de gestor autorizado.",
    bloques: [
      {
        h: "Objeto y ámbito (arts. 1-2)",
        nota:
          "La jerarquía de gestión del art. 1.a) marca el orden de preferencia de todo el decreto y se repite luego en las obligaciones del poseedor: prevención, preparación para la reutilización, reciclado, otras formas de valorización y, en último lugar, eliminación. De las exclusiones del art. 2.2, la que más se pregunta es la de las obras menores domiciliarias, que solo quedan fuera si no superan los 50 kg — un umbral en peso que no hay que confundir con los 50 m³ que definen la obra de escasa entidad.",
        items: [
          "Cuádruple objeto (art. 1): establecer el régimen jurídico de la producción y gestión de RCDs fomentando por este orden su PREVENCIÓN, PREPARACIÓN PARA LA REUTILIZACIÓN, RECICLADO y otras formas de VALORIZACIÓN · establecer las fianzas exigibles · concretar la cantidad mínima de RCDs sujeta a gestión específica diferenciada · establecer los requisitos técnicos mínimos de las plantas de tratamiento",
          "NO tienen consideración de RCDs (art. 2.2): las tierras y piedras NO CONTAMINADAS por sustancias peligrosas reutilizadas en la misma obra, en obra distinta o en restauración, acondicionamiento o relleno, siempre que se acredite de forma FEHACIENTE su destino a reutilización",
          "Tampoco: los residuos de industrias extractivas (Directiva 2006/21/CE) · los lodos de dragado no peligrosos reubicados en el interior de aguas superficiales · y los residuos de OBRAS MENORES de construcción o reparación domiciliaria cuando NO SUPEREN LOS 50 KG DE PESO",
          "Los residuos generados en obra y regulados por legislación específica (peligrosos y no peligrosos), cuando estén mezclados con otros RCDs, se rigen por este decreto en lo no contemplado por aquella legislación (art. 2.3)",
        ],
      },
      {
        h: "Definiciones clave (art. 3)",
        nota:
          "Tres definiciones se preguntan una y otra vez. La de productor, porque lo ata a la LICENCIA URBANÍSTICA y solo subsidiariamente al titular del inmueble. La de poseedor, porque incluye expresamente a constructor, subcontratistas y autónomos, y excluye igual de expresamente a los trabajadores por cuenta ajena. Y la pareja obra menor / obra de escasa entidad, que se distinguen por criterios distintos: la menor por su naturaleza (domiciliaria, sencilla, sin proyecto y sin alterar volumen, uso ni número de viviendas), la de escasa entidad por el volumen de residuos que genera.",
        items: [
          "PRODUCTOR (art. 3.f): el titular de la LICENCIA URBANÍSTICA de la obra; en las obras que no precisen licencia, el titular del BIEN INMUEBLE. También quien efectúe operaciones de tratamiento o mezcla que cambien la naturaleza o composición de los residuos, y el importador o adquirente en cualquier Estado miembro de la UE",
          "POSEEDOR (art. 3.h): quien tiene en su poder los RCDs sin ser gestor. En todo caso lo es quien EJECUTA la obra —constructor, subcontratistas o trabajadores autónomos—; en ningún caso lo son los TRABAJADORES POR CUENTA AJENA",
          "GESTOR (art. 3.g): quien recoge, transporta, valoriza y/o elimina RCDs, incluida la vigilancia de esas operaciones y el mantenimiento posterior al cierre de los vertederos, y las actuaciones como negociante o agente",
          "OBRA DE ESCASA ENTIDAD (art. 3.c): la que, sin ser obra menor, genera residuos que NO SUPERAN LOS 50 M³ y en general no precisa proyecto firmado por titulados, aunque puede precisar licencia de obra o declaración responsable",
          "OBRA MENOR de construcción o reparación domiciliaria (art. 3.d): en domicilio particular, comercio, oficina o inmueble del sector servicios, de SENCILLA TÉCNICA y escasa entidad constructiva y económica, que no suponga alteración del volumen, del uso, de las instalaciones de uso común ni del número de viviendas y locales, y que no precisa proyecto firmado por titulados",
          "ALMACENAMIENTO (art. 3.k): depósito temporal previo a la valorización o eliminación por tiempo INFERIOR A DOS AÑOS, salvo plazos reglamentarios menores. No incluye el depósito temporal en las instalaciones de producción con los mismos fines",
          "RESIDUO INERTE (art. 3.e): no peligroso que no experimenta transformaciones físicas, químicas o biológicas significativas, no es soluble ni combustible, no reacciona, no es biodegradable y no afecta negativamente a otras materias; su lixiviabilidad, contenido de contaminantes y ecotoxicidad del lixiviado deben ser insignificantes",
          "Se considera PARTE INTEGRANTE DE LA OBRA toda instalación de servicio exclusivo cuyo montaje y desmontaje tenga lugar durante la ejecución o al final: plantas de machaqueo, de hormigón, de prefabricados, de mezclas bituminosas, talleres de encofrados y de ferralla, almacenes y plantas de tratamiento de la propia obra",
        ],
      },
      {
        h: "Obligaciones del productor: el estudio de gestión (art. 4)",
        nota:
          "El estudio de gestión tiene siete contenidos mínimos numerados, y el examen suele atacar por dos sitios: el séptimo —la valoración del coste, que va en CAPÍTULO INDEPENDIENTE del presupuesto, igual que ocurre con el estudio de seguridad y salud— y el recorte del art. 4.2, que permite que el proyecto básico presentado para pedir licencia lleve solo cinco de los siete puntos, dejando fuera precisamente los planos y el pliego.",
        items: [
          "Contenido mínimo del ESTUDIO DE GESTIÓN (art. 4.1.a): 1) estimación de la cantidad en toneladas y/o m³ codificada según el Anejo 2A, pudiendo usarse los ratios del Anejo 3 · 2) medidas de PREVENCIÓN de generación · 3) operaciones de reutilización, valorización o eliminación previstas · 4) medidas para la SEPARACIÓN en obra · 5) PLANOS de las instalaciones de almacenamiento, manejo y separación · 6) prescripciones del PLIEGO de condiciones técnicas particulares · 7) valoración del COSTE previsto, que formará parte del presupuesto del proyecto EN CAPÍTULO INDEPENDIENTE",
          "En obras de DEMOLICIÓN, REHABILITACIÓN, REPARACIÓN O REFORMA (art. 4.1.b): inventario de los residuos PELIGROSOS que se generarán, incluido en el estudio de gestión, previendo su RETIRADA SELECTIVA para evitar mezclas y asegurar su envío a gestores autorizados de residuos peligrosos",
          "Documentación acreditativa de la gestión efectiva (art. 4.1.c): debe conservarse, para cada año natural, durante los CINCO AÑOS siguientes",
          "Fianza (art. 4.1.d): constituirla salvo que se trate de obra menor de construcción o reparación domiciliaria, que se rige por lo que establezcan las ORDENANZAS MUNICIPALES",
          "PROYECTO BÁSICO para licencia (art. 4.2): en obras de edificación, cuando se presente proyecto básico para obtener la licencia urbanística, contendrá al menos los documentos 1, 2, 3, 4 y 7 de la letra a) y la letra b) — es decir, quedan fuera los PLANOS (5) y el PLIEGO (6)",
        ],
      },
      {
        h: "Obligaciones del poseedor: el plan y la separación (art. 5)",
        nota:
          "El plan del poseedor sigue el mismo circuito que el plan de seguridad y salud: lo redacta quien ejecuta, lo aprueba la dirección facultativa, lo acepta la propiedad y desde ese momento es documento contractual. Los siete umbrales de separación del apartado 4 son el dato numérico más preguntado del tema; conviene fijarlos como una escala descendente y recordar que se miden por fracción individualizada sobre el total de la obra, no sobre lo generado en un momento dado.",
        items: [
          "PLAN (art. 5.1): quien ejecuta la obra debe presentar a la propiedad un plan que refleje cómo cumplirá sus obligaciones sobre los RCDs. Una vez APROBADO POR LA DIRECCIÓN FACULTATIVA y ACEPTADO POR LA PROPIEDAD, pasa a formar parte de los documentos contractuales de la obra",
          "Entrega (art. 5.2): cuando no los gestione por sí mismo, el poseedor debe entregarlos a gestor autorizado o participar en un acuerdo voluntario o convenio de colaboración. Destino preferente y por este orden: REUTILIZACIÓN, RECICLADO u otras formas de VALORIZACIÓN; solo se destinan a eliminación cumpliendo las condiciones del art. 10",
          "Mientras estén en su poder debe mantenerlos en condiciones adecuadas de higiene y seguridad y EVITAR LA MEZCLA de fracciones ya seleccionadas que impida o dificulte su posterior valorización o eliminación (art. 5.3)",
          "UMBRALES DE SEPARACIÓN OBLIGATORIA por fracciones (art. 5.4), cuando la cantidad prevista para el TOTAL DE LA OBRA de cada fracción individualizada supere: HORMIGÓN 80 t · LADRILLOS, TEJAS Y CERÁMICOS 40 t · METAL 2 t · MADERA 1 t · VIDRIO 1 t · PLÁSTICO 0,5 t · PAPEL Y CARTÓN 0,5 t",
          "La separación se hace PREFERENTEMENTE en la propia obra. Si por FALTA DE ESPACIO FÍSICO no resulta técnicamente viable, el poseedor puede encomendarla a un gestor en instalación externa, debiendo obtener de él documentación acreditativa de que ha cumplido esa obligación EN SU NOMBRE",
          "El poseedor sufraga los costes de gestión, entrega al productor los certificados/facturas acreditativos y mantiene la documentación de cada año natural durante los CINCO AÑOS siguientes (art. 5.5)",
        ],
      },
      {
        h: "Fianzas y Registro de Constructor-Poseedor (art. 6)",
        nota:
          "Hay dos sistemas alternativos para garantizar la correcta gestión, y esa alternativa es la clave del artículo. O bien el productor deposita fianza obra por obra con la solicitud de licencia, o bien contrata a un constructor-poseedor inscrito en el Registro foral, que ya tiene depositada una fianza general por su actividad. Las obras de escasa entidad solo pueden usar la segunda vía; las demás pueden elegir. Los tres importes —11 €/t, 17 €/m³, mínimo 1.000 € y máximo 3 %— y el plazo de devolución de 15 días son datos de examen seguro.",
        items: [
          "Obras de ESCASA ENTIDAD (art. 6.1): el productor cumple contratando a un CONSTRUCTOR-POSEEDOR inscrito en el Registro de Constructor-Poseedor de RCDs que mantiene el departamento competente en medio ambiente",
          "Obras que precisan licencia y NO son de escasa entidad (art. 6.2.a): depositar JUNTO CON LA SOLICITUD DE LICENCIA fianza o aval bancario de 11 EUROS/T o 17 EUROS/M³ de RCDs que no sean tierras de excavación, con un MÍNIMO DE 1.000 EUROS y un MÁXIMO DEL 3 % DEL PRESUPUESTO del proyecto",
          "Devolución (art. 6.2.b-c): terminadas las obras, el productor solicita la devolución ante el AYUNTAMIENTO acompañando el certificado/factura de entrega del Anejo 2 D. Caben DEVOLUCIONES PARCIALES con certificados parciales. El Ayuntamiento devuelve la fianza en plazo NO SUPERIOR A 15 DÍAS desde la presentación del certificado",
          "Alternativa (art. 6.2.d): también estos productores pueden acogerse al sistema del apartado 1 contratando a un constructor-poseedor inscrito en el Registro",
          "REGISTRO DE CONSTRUCTOR-POSEEDOR (art. 6.3): inscripción preferentemente por registro electrónico, aportando identificación y domicilio del constructor —que debe tener personalidad jurídica propia— y resguardo del depósito ante Hacienda de Navarra de fianza en metálico o aval por valor de 1.000 EUROS para obras de escasa entidad (RCDs ≤ 50 m³) o 50.000 EUROS para obras cuyos RCDs superen los 50 m³",
          "Obra contratada con una Administración Pública (art. 6.4): no se entiende finalizado el contrato y no puede devolverse en su totalidad la fianza de garantía del contrato mientras el adjudicatario no presente el certificado/factura que acredite la correcta gestión de los residuos",
        ],
      },
      {
        h: "Obligaciones del gestor (art. 7)",
        nota:
          "Trece obligaciones, de las que interesa retener las que tienen número o condición singular: la autorización es de gestor de residuos NO PELIGROSOS; la fianza del gestor no se calcula por obra sino por la CAPACIDAD MÁXIMA DE ALMACENAMIENTO de la instalación, y es requisito previo para obtener la autorización; y el envío del registro al departamento es SEMESTRAL como mínimo.",
        items: [
          "Obtener autorización de GESTOR DE RESIDUOS NO PELIGROSOS para almacenamiento y transferencia, tratamiento previo, valorización y eliminación. Las plantas móviles en centros fijos deben preverse en la autorización de ese centro; las que operen en obras distintas de donde se generaron y no sean centros fijos requieren autorización propia",
          "Llevar el REGISTRO de entradas y salidas del Anejo 2 C, codificado según el Anejo 2 A, que garantiza la TRAZABILIDAD TOTAL; ponerlo a disposición del departamento y de los órganos de inspección, y mantener la información de cada año natural durante los CINCO AÑOS siguientes",
          "Extender al poseedor o gestor que le entrega los RCDs los CERTIFICADOS/FACTURAS del Anejo 2 D, que garantizan la cesión de titularidad de los residuos. Si el gestor efectúa operaciones que no sean de valorización o eliminación, debe además transmitir los certificados de la operación subsiguiente",
          "Los residuos recibidos en instalaciones de almacenamiento y transferencia o de tratamiento previo SIEMPRE se entregan a un gestor de valorización o eliminación para su tratamiento final, y no pueden usarse en obras de construcción o restauración sin tratamiento complementario",
          "Si carece de autorización para residuos peligrosos, debe disponer de un procedimiento de admisión que asegure su DETECCIÓN Y SEGREGACIÓN previa al tratamiento, almacenarlos adecuadamente y derivarlos a gestores autorizados, sin perjuicio de la responsabilidad del productor, poseedor o gestor precedente",
          "Envío al departamento, con periodicidad MÍNIMA SEMESTRAL y en formato electrónico, de copia del registro de entradas y salidas; las autorizaciones pueden fijar periodicidades distintas según la actividad",
          "FIANZA DEL GESTOR: se establece por el departamento en función de la CAPACIDAD MÁXIMA DE ALMACENAMIENTO de RCDs de la instalación, y es REQUISITO NECESARIO PREVIO para obtener la autorización de gestor",
          "Asegurar que los áridos y materiales reciclados obtenidos están caracterizados por un LABORATORIO HOMOLOGADO según la normativa técnica aplicable a su uso final, y garantizar la formación y cualificación del personal de dirección y explotación",
        ],
      },
      {
        h: "Valorización en la propia obra (art. 8)",
        nota:
          "Es la excepción que permite reciclar in situ sin ser gestor autorizado, y está sujeta a cuatro condiciones acumulativas: que el residuo esté en la lista del Anejo 2 B, que no lleve más del 1 % de impropios, que se empleen los medios de una planta de tratamiento salvo la báscula, y que se comunique a la Administración, que puede denegarlo motivadamente. Fíjate en quién recibe la comunicación: el Ayuntamiento si la obra tiene licencia, la Dirección General de Medio Ambiente y Agua si no la requiere.",
        items: [
          "Se EXIME de autorización de gestión a los poseedores-productores de los RCDs listados en el ANEJO 2 B tratados por el método allí indicado, cuando se realicen en la MISMA OBRA, adecuándose al proyecto y sin poner en peligro la salud humana ni dañar el medio ambiente, sin molestias por ruido ni olores y sin dañar el paisaje ni los espacios naturales protegidos",
          "Los RCDs del Anejo 2 B solo pueden valorizarse en la propia obra si NO CONTIENEN MÁS DEL 1 % DE MATERIALES IMPROPIOS. La lista comprende hormigón, ladrillos, tejas y cerámicos, sus mezclas, mezclas bituminosas y balasto de vías férreas, todos con método R5",
          "Deben emplearse los medios de los puntos 2 o 3 del Anejo 1 EXCEPTO EN LO REFERENTE A LA BÁSCULA, de modo que la eficacia de la separación sea como mínimo similar a la de una planta de tratamiento",
          "COMUNICACIÓN previa: al AYUNTAMIENTO si no estuviera contemplado en el proyecto de obra, o a la DIRECCIÓN GENERAL DE MEDIO AMBIENTE Y AGUA si la obra no requiere licencia municipal. Ambos pueden DENEGARLO MOTIVADAMENTE",
          "Las cantidades eximidas son solo las generadas en la propia obra solicitada, que figuren en el proyecto y en el estudio de gestión, y deben utilizarse en esa misma obra (art. 8.3)",
          "Los Ayuntamientos que hayan registrado valorizaciones en obra envían anualmente a la Dirección General de Medio Ambiente y Agua, ANTES DEL 1 DE MARZO del año siguiente, un listado con las obras inscritas: número y ubicación, poseedor-productor, códigos LER, cantidades valorizadas y gestión realizada",
        ],
      },
      {
        h: "Restauración, relleno y vertedero (arts. 9-11)",
        nota:
          "El art. 9 impide que el relleno de huecos se use como vertido encubierto: exige autorización ambiental que declare EXPRESAMENTE que se trata de valorización, tratamiento previo para aprovechar los pétreos y una impermeabilización del emplazamiento con valores concretos. El art. 10 impone tratamiento previo antes de cualquier vertedero, con tres excepciones tasadas. Y el art. 11 cierra el círculo económico: las fianzas no devueltas acaban financiando la recuperación de zonas degradadas.",
        items: [
          "Requisitos para valorizar residuos inertes en restauración, acondicionamiento o relleno (art. 9): autorización ambiental de la LF 4/2005 que DECLARE EXPRESAMENTE que se trata de actividad de valorización · autorización de gestor indicando las operaciones · cumplir los requisitos del art. 7 EXCEPTO SU PUNTO 2 · que el resultado sea la SUSTITUCIÓN DE RECURSOS NATURALES que habrían debido emplearse",
          "Tratamiento previo (art. 9.5): los RCDs destinados a restauración o relleno deben haber sido tratados para aprovechar como mínimo los materiales PÉTREOS (hormigón, cerámica…) y haberles sido retirada la TOTALIDAD de los residuos peligrosos y de los no peligrosos no inertes, salvo que el proyecto de restauración aprobado especifique los tipos admisibles",
          "Criterios de admisión de los inertes: los del apartado 2.1 de la Decisión 2003/33/CE (art. 9.6)",
          "IMPERMEABILIZACIÓN (art. 9.7): salvo que lo desaconsejen razones técnicas, los emplazamientos alcanzarán una impermeabilización natural o artificial equivalente a K = 1 × 10⁻⁷ M/S EN UN ESPESOR DE 1 M; la capa de impermeabilización geológica ARTIFICIAL tendrá un espesor MÍNIMO DE 0,5 M",
          "VERTEDERO (art. 10.1): los RCDs que vayan a depositarse en vertedero autorizado deben haber sido tratados para aprovechar como mínimo los materiales pétreos y con retirada total de los peligrosos y de los no inertes",
          "Tres EXCEPCIONES a esa exigencia (art. 10.2-3): los residuos inertes cuyo tratamiento sea TÉCNICAMENTE INVIABLE · los RCDs cuyo tratamiento no contribuya a los objetivos del art. 1 ni a reducir los peligros para la salud o el medio ambiente · y los vertederos ubicados en POBLACIONES AISLADAS que reciban exclusivamente RCDs inertes generados en dichas poblaciones",
          "FONDO PARA LA RECUPERACIÓN DE ZONAS DEGRADADAS (art. 11): transcurridos SEIS MESES desde la finalización de las obras sin que el titular haya presentado justificante de entrega a gestor autorizado, y previa notificación del Ayuntamiento, las fianzas no devueltas pueden incorporarse a un fondo destinado a la rehabilitación, restauración o recuperación de zonas degradadas o con vertidos incontrolados",
          "Régimen sancionador (art. 12): el establecido en la normativa vigente en materia de residuos, sin regulación propia en este decreto",
        ],
      },
      {
        h: "Anejos: plantas de tratamiento y ratios",
        nota:
          "De los anejos, lo examinable son los ratios del Anejo 3 —porque son los que un técnico municipal usa para comprobar si la estimación del estudio de gestión es razonable y para calcular la fianza— y la estructura en tres niveles de las plantas del Anejo 1. Un detalle útil: el ratio de obra nueva es el mismo, 0,146 m³/m², para residencial, no residencial e industrial.",
        items: [
          "ANEJO 1 — tres niveles: centros de ALMACENAMIENTO Y TRANSFERENCIA (R13), plantas FIJAS de tratamiento (R12/R5) y plantas MÓVILES (R5)",
          "Equipamiento común de los centros de almacenamiento: cercado perimetral con puerta de cerradura inviolable y cuneta o sistema equivalente que conduzca las aguas de escorrentía a una BALSA DE DECANTACIÓN si son abiertos o al descubierto · medios informáticos de registro · BÁSCULA de pesaje en la recepción · persona de recepción en posición adecuada para inspeccionar visualmente la carga y decidir su aceptación o rechazo · medidas contra la emisión de polvo · acopios claramente identificados",
          "Plantas fijas: TRATAMIENTO PREVIO (R12) con separación manual de voluminosos y segregación de peligrosos · TRATAMIENTO PRIMARIO (R5) con trommel o criba vibratoria, machacadora de mandíbulas o similar y trommel final, que permitan separar como mínimo TRES FRACCIONES —finos, gravas y gruesos—, con separador automático tipo OVERBAND para los férricos · TRATAMIENTO SECUNDARIO (R5) OPCIONAL, con lavado o soplado de los pétreos y, optativamente, molino de impactos para trituración secundaria",
          "ANEJO 3 — RATIOS de obra nueva: 0,146 M³/M² construido, el mismo para residencial, no residencial e industrial",
          "ANEJO 3 — RATIOS de reforma: residencial 0,57 m³/m² · naves industriales 1,263 m³/m² · locales comerciales 0,89 m³/m²",
          "ANEJO 3 — RATIOS de demolición: edificios de estructura de hormigón 1,22 m³/m² · obra de fábrica 0,746 m³/m² · naves industriales 1,263 m³/m²",
          "ANEJO 3 — excavación: 1,6 T POR M² construido. Esponjamiento de tierras: V × 1,1",
          "ANEJO 2 D — CERTIFICADO/FACTURA de entrega: información mínima de cuatro puntos — nombre del productor o gestor de procedencia · descripción de la obra de procedencia y nº de licencia si se requiere · cantidad en toneladas recibidas · código de la operación realizada (D o R)",
        ],
      },
      {
        h: "Disposiciones adicionales y transitoria",
        nota:
          "Tres disposiciones cortas que resuelven casos concretos y por eso se preguntan. La adicional primera es la más útil en la práctica municipal, porque saca del régimen general los excedentes de excavación de la obra pública sometida a evaluación de impacto ambiental — pero solo parcialmente: el estudio de gestión del art. 4.1.a se sigue exigiendo. La adicional segunda explica por qué las cifras del decreto (ratios del Anejo 3 y fianzas del art. 6) pueden estar desactualizadas respecto del texto de 2011: son actualizables por Orden Foral.",
        items: [
          "DA PRIMERA — excedentes de excavación en obra pública: las medidas del decreto, SALVO LO REFERIDO EN EL ARTÍCULO 4.1.a (el estudio de gestión), NO son aplicables a los excedentes generados en excavaciones y demoliciones de obras de TITULARIDAD PÚBLICA sometidas a evaluación de impacto ambiental, a los que se aplica la legislación de evaluación de impacto ambiental de proyectos. Si esos excedentes estuvieran CONTAMINADOS por sustancias peligrosas, se aplica la normativa específica de residuos",
          "DA SEGUNDA — actualización de cifras: los valores de los RATIOS de generación de residuos de los distintos tipos de obra y la cuantía de las FIANZAS del art. 6 y del Anexo III pueden actualizarse mediante ORDEN FORAL del departamento competente, en función de la evolución que sufra el sector",
          "DT ÚNICA — plazos de adaptación, todos de SEIS MESES: las instalaciones de tratamiento de RCDs con autorización vigente antes de la entrada en vigor debían adaptarse al Anejo I en 6 meses desde ésta · los titulares de emplazamientos con actividades autorizadas del art. 9 (restauración, acondicionamiento o relleno), en 6 meses desde el día siguiente a la publicación en el BON · y los titulares de ACTIVIDADES EXTRACTIVAS en ejecución con planes de restauración aprobados que incluyan RCDs debían adaptar dichos planes en el mismo plazo de 6 meses",
        ],
      },
    ],
    claves: [
      "Jerarquía: prevención → preparación para la reutilización → reciclado → otras valorizaciones → eliminación",
      "Obras menores domiciliarias: excluidas solo si NO SUPERAN LOS 50 KG de peso",
      "Obra de ESCASA ENTIDAD: residuos que no superan 50 M³ (no confundir con los 50 kg de la obra menor)",
      "PRODUCTOR = titular de la LICENCIA urbanística; sin licencia, el titular del inmueble",
      "POSEEDOR = quien ejecuta (constructor, subcontratistas, autónomos). NUNCA los trabajadores por cuenta ajena",
      "Almacenamiento: depósito temporal INFERIOR A DOS AÑOS previo a valorización o eliminación",
      "El coste de gestión va en CAPÍTULO INDEPENDIENTE del presupuesto del proyecto",
      "Proyecto básico para licencia: solo los puntos 1, 2, 3, 4 y 7 + letra b) — sin planos ni pliego",
      "El PLAN del poseedor lo aprueba la DIRECCIÓN FACULTATIVA y lo acepta la propiedad: pasa a ser documento contractual",
      "Umbrales de separación: hormigón 80 t · cerámicos 40 t · metal 2 t · madera 1 t · vidrio 1 t · plástico 0,5 t · papel y cartón 0,5 t",
      "Sin espacio físico en obra: cabe encomendar la separación a gestor externo, con documentación de que cumplió EN SU NOMBRE",
      "Fianza de licencia: 11 €/t o 17 €/m³, mínimo 1.000 € y máximo 3 % del presupuesto; no computan las tierras de excavación",
      "Devolución de la fianza por el Ayuntamiento: plazo NO SUPERIOR A 15 DÍAS, y caben devoluciones parciales",
      "Registro de Constructor-Poseedor: fianza de 1.000 € (obras ≤ 50 m³) o 50.000 € (> 50 m³)",
      "Documentación de productor, poseedor y gestor: conservar CINCO AÑOS por cada año natural",
      "El gestor necesita autorización de residuos NO PELIGROSOS; su fianza se fija por CAPACIDAD MÁXIMA DE ALMACENAMIENTO y es previa a la autorización",
      "Envío del registro de entradas y salidas al departamento: periodicidad mínima SEMESTRAL",
      "Valorización en la propia obra: RCDs del Anejo 2 B con menos del 1 % de impropios y medios de planta salvo la BÁSCULA",
      "Listado municipal anual de valorizaciones en obra: antes del 1 DE MARZO del año siguiente",
      "Relleno y restauración: impermeabilización k = 1 × 10⁻⁷ m/s en 1 m de espesor; capa artificial mínimo 0,5 m",
      "Fianzas no devueltas tras SEIS MESES sin justificante: al fondo de recuperación de zonas degradadas",
      "Ratio de obra nueva: 0,146 m³/m² para residencial, no residencial e industrial. Excavación: 1,6 t/m²",
      "Excedentes de excavación de obra PÚBLICA con EIA: fuera del decreto SALVO el estudio de gestión del art. 4.1.a (DA 1ª)",
      "Ratios y fianzas son actualizables por ORDEN FORAL (DA 2ª)",
      "Todos los plazos de adaptación de la DT única son de SEIS MESES",
    ],
  },

  E28: {
    intro:
      "El RDL 7/2015 (TRLSRU) es la ley estatal del suelo: no clasifica suelo —eso es competencia autonómica— sino que fija las CONDICIONES BÁSICAS de igualdad en derechos y deberes, y sobre todo el régimen de VALORACIONES, que sí es competencia exclusiva del Estado. De ahí su estructura mental: dos SITUACIONES BÁSICAS del suelo (rural y urbanizado, art. 21) que no se confunden con las clases de suelo de la LFOTU, y a cada situación le corresponde un método de valoración (capitalización de rentas en rural, residual estático en urbanizado). Conviene tener presente que la Sentencia del TC 143/2017 anuló bastantes incisos por invadir competencias autonómicas, y el temario incluye además los títulos de expropiación, derecho de superficie y Registro de la Propiedad.",
    bloques: [
      {
        h: "Título Preliminar — Objeto y definiciones (arts. 1-4)",
        nota:
          "Las definiciones del art. 2 se preguntan por su literalidad numérica: los 183 días de la residencia habitual y, sobre todo, las doce mensualidades que marcan cuándo una carga es desproporcionada en propiedad horizontal. Esa cifra es la que aplica un técnico al informar si unas obras de accesibilidad son exigibles o no.",
        items: [
          "Objeto (art. 1): regula para TODO EL TERRITORIO ESTATAL las condiciones básicas que garantizan la igualdad en el ejercicio de derechos y deberes relacionados con el suelo, y un desarrollo sostenible, competitivo y eficiente del medio urbano. Establece además las bases económicas y medioambientales del régimen del suelo, su valoración y la responsabilidad patrimonial",
          "ACTUACIONES SOBRE EL MEDIO URBANO (art. 2.1): rehabilitación edificatoria cuando haya insuficiencia o degradación de los requisitos básicos de funcionalidad, seguridad y habitabilidad, y regeneración y renovación urbanas cuando afecten a edificios y a tejidos urbanos, pudiendo incluir nueva edificación en sustitución de edificios demolidos. Tienen CARÁCTER INTEGRADO cuando articulan medidas sociales, ambientales y económicas en una estrategia global y unitaria",
          "INFRAVIVIENDA (art. 2.2): edificación o parte de ella destinada a vivienda que no reúne las condiciones mínimas exigidas. En todo caso, las que incumplan requisitos de superficie, número, dimensión y características de las piezas habitables, las que presenten deficiencias graves en dotaciones e instalaciones básicas y las que no cumplan los mínimos de seguridad, accesibilidad universal y habitabilidad",
          "RESIDENCIA HABITUAL (art. 2.3): la que constituya el domicilio de quien la ocupa durante un período SUPERIOR A 183 DÍAS AL AÑO",
          "COSTE DE REPOSICIÓN (art. 2.4): valor actual de construcción de un inmueble de nueva planta EQUIVALENTE AL ORIGINAL en características constructivas y superficie útil, en condiciones de que su ocupación sea autorizable",
          "AJUSTES RAZONABLES (art. 2.5): medidas de adecuación para la accesibilidad universal de forma eficaz, segura y práctica sin carga desproporcionada. En edificios en PROPIEDAD HORIZONTAL la carga se entiende DESPROPORCIONADA cuando el coste de las obras repercutido anualmente, descontadas las ayudas públicas, EXCEDE DE DOCE MENSUALIDADES ordinarias de gastos comunes",
          "Ordenación territorial y urbanística (art. 4): son FUNCIONES PÚBLICAS NO SUSCEPTIBLES DE TRANSACCIÓN; determinan las facultades y deberes de la propiedad conforme al destino del suelo, sin conferir derecho a indemnización salvo en los casos expresamente establecidos. El ejercicio de la potestad de ordenación debe ser MOTIVADO, con expresión de los intereses generales a que sirve",
        ],
      },
      {
        h: "Actuaciones de transformación urbanística y edificatorias (art. 7)",
        nota:
          "El artículo 7 es la pieza que articula toda la ley, porque de la calificación de la actuación depende el paquete de deberes del art. 18. La distinción crítica es entre actuación de URBANIZACIÓN (nueva o de reforma/renovación) y actuación de DOTACIÓN, que se caracteriza en negativo: incrementa dotaciones para reajustar la proporción con más edificabilidad o nuevos usos, pero NO requiere reformar la urbanización. Si hiciera falta reformarla, ya sería actuación de urbanización.",
        items: [
          "ACTUACIONES DE URBANIZACIÓN (art. 7.1.a): las de NUEVA URBANIZACIÓN, que suponen el paso de un ámbito de suelo rural a urbanizado creando parcelas aptas para la edificación conectadas con las redes de servicios; y las que tengan por objeto REFORMAR O RENOVAR la urbanización de un ámbito ya urbanizado",
          "ACTUACIONES DE DOTACIÓN (art. 7.1.b): las que tienen por objeto INCREMENTAR LAS DOTACIONES PÚBLICAS de un ámbito de suelo urbanizado para reajustar su proporción con la mayor edificabilidad o densidad o con los nuevos usos asignados, y que NO REQUIERAN la reforma o renovación de la urbanización",
          "ACTUACIONES EDIFICATORIAS (art. 7.2), siempre que no concurran las condiciones anteriores, incluso cuando requieran obras complementarias de urbanización: las de nueva edificación y sustitución de la existente, y las de REHABILITACIÓN EDIFICATORIA en los términos de la LOE",
          "Inicio y terminación (art. 7.4): las actuaciones de urbanización se entienden INICIADAS cuando, aprobados y eficaces todos los instrumentos, empieza la ejecución material de las obras, presumiéndose por acta administrativa o notarial. La CADUCIDAD de cualquiera de los instrumentos RESTITUYE el suelo a la situación en que se hallaba al inicio. La TERMINACIÓN se presume a la recepción de las obras por la Administración",
        ],
      },
      {
        h: "Estatuto de la propiedad: facultades y deberes (arts. 11-17)",
        nota:
          "Aquí está una de las reglas más citadas de toda la ley: la previsión de edificabilidad por el planeamiento NO se integra por sí misma en el contenido del derecho de propiedad; la patrimonialización solo se produce con su realización efectiva. Y el otro dato imprescindible para el técnico municipal es el límite del deber de conservación: la MITAD del valor actual de construcción de un inmueble equivalente, elevable hasta el 75 % del coste de reposición si la legislación autonómica lo prevé y hay inejecución injustificada.",
        items: [
          "Régimen estatutario (art. 11.1-2): el régimen urbanístico de la propiedad es ESTATUTARIO y resulta de su vinculación a concretos destinos. La previsión de edificabilidad por sí misma NO integra el contenido del derecho: la PATRIMONIALIZACIÓN se produce únicamente con su REALIZACIÓN EFECTIVA y condicionada al cumplimiento de deberes y levantamiento de cargas",
          "SILENCIO (art. 11.3): en ningún caso pueden entenderse adquiridas por silencio administrativo facultades o derechos que contravengan la ordenación territorial o urbanística. Y serán EXPRESOS, CON SILENCIO NEGATIVO, los actos que autoricen movimientos de tierras, explanaciones, parcelaciones y divisiones de fincas; obras de edificación e instalaciones de nueva planta; casas prefabricadas e instalaciones similares; y talas de masas arbóreas (art. 11.4, con incisos anulados por la STC 143/2017)",
          "Primera ocupación por comunicación previa o declaración responsable (art. 11.5): si no resulta que la edificación cumple los requisitos, la Administración debe adoptar medidas para el cese de la ocupación; si no lo hace EN SEIS MESES, responde de los perjuicios a terceros de buena fe, pudiendo repercutirlos al sujeto obligado",
          "Deberes generales de la propiedad (art. 15.1), cualquiera que sea la situación del suelo: dedicarlos a usos compatibles con la ordenación · CONSERVARLOS en condiciones legales de seguridad, salubridad, accesibilidad universal y ornato · realizar las obras adicionales que la Administración ordene por motivos turísticos o culturales o para la mejora de la calidad y sostenibilidad del medio urbano, hasta donde alcance el deber legal de conservación",
          "LÍMITE DEL DEBER DE CONSERVACIÓN (art. 15.3): la MITAD DEL VALOR ACTUAL DE CONSTRUCCIÓN de un inmueble de nueva planta equivalente al original. Lo que exceda de ese límite corre a cargo de los fondos de la Administración que ordene las obras",
          "Inejecución injustificada (art. 15.4): procede la ejecución subsidiaria sustituyendo al titular y asumiendo la facultad de edificar o rehabilitar con cargo a aquél. En tales supuestos el límite máximo del deber de conservación PUEDE ELEVARSE, si así lo dispone la legislación autonómica, HASTA EL 75 % DEL COSTE DE REPOSICIÓN",
          "Deberes en suelo rural (art. 16): costear y ejecutar las obras para mantener terrenos y masa vegetal evitando riesgos de erosión, incendio e inundación; garantizar seguridad y salud públicas; prevenir la contaminación. En suelo rural no sometido a actuación de urbanización quedan PROHIBIDAS las parcelaciones urbanísticas",
        ],
      },
      {
        h: "Deberes de la promoción y realojamiento (arts. 18-19)",
        nota:
          "El porcentaje de cesión de la letra b) es de los datos más preguntados: horquilla general del 5 al 15 %, con posibilidad excepcional de llegar al 20 % cuando el valor de las parcelas resultantes sea sensiblemente superior al medio. Del art. 19, el dato fino es la superficie mínima de la vivienda de retorno, con su doble condición.",
        items: [
          "Deberes de las actuaciones de urbanización (art. 18.1): entregar el suelo de viales, espacios libres, zonas verdes y demás dotaciones públicas · entregar, con destino a PATRIMONIO PÚBLICO DE SUELO, el suelo libre de cargas correspondiente al porcentaje de la edificabilidad media ponderada · costear y ejecutar todas las obras de urbanización y las infraestructuras de conexión, ampliación y reforzamiento exteriores · entregar esas obras junto con el suelo · garantizar el REALOJAMIENTO y el retorno · e INDEMNIZAR a los titulares de construcciones que deban demolerse y de obras, instalaciones, plantaciones y sembrados no conservables",
          "PORCENTAJE DE CESIÓN (art. 18.1.b): con carácter general no puede ser INFERIOR AL 5 % NI SUPERIOR AL 15 %. Excepcionalmente la legislación autonómica puede reducirlo o incrementarlo de forma proporcionada y motivada HASTA UN MÁXIMO DEL 20 % en caso de incremento, para ámbitos en que el valor de las parcelas resultantes sea sensiblemente inferior o superior al medio",
          "En las ACTUACIONES DE DOTACIÓN (art. 18.2), el deber de entrega se determina atendiendo SOLO AL INCREMENTO de la edificabilidad media ponderada que resulte de la modificación del planeamiento, y puede cumplirse SUSTITUYENDO la entrega de suelo POR SU VALOR EN METÁLICO",
          "Los terrenos incluidos en el ámbito están afectados CON CARÁCTER DE GARANTÍA REAL al cumplimiento de estos deberes, que se presumen cumplidos con la recepción de las obras (art. 18.6)",
          "REALOJAMIENTO (art. 19.1): lo garantiza la Administración expropiante o el beneficiario cuando se actúa por expropiación —la entrega de la vivienda de reemplazo EQUIVALE AL ABONO DEL JUSTIPRECIO, salvo que el expropiado opte por percibirlo en metálico, en cuyo caso pierde el derecho de realojo—, y el promotor cuando se actúa por ámbitos de gestión conjunta no expropiatorios",
          "DERECHO DE RETORNO (art. 19.2): el propietario debe proporcionar nueva vivienda de superficie NO INFERIOR AL 50 % DE LA ANTERIOR siempre que tenga AL MENOS 90 M², o no inferior a la que tuviere si no alcanzaba dicha superficie, de características análogas y ubicada en el mismo solar o en el entorno",
          "El derecho de realojamiento es PERSONAL E INTRANSFERIBLE, salvo herederos forzosos o cónyuge supérstite que acrediten compartir la vivienda en términos de residencia habitual (art. 19.3). Si no es materialmente posible ofrecer vivienda, hay derecho a su EQUIVALENTE ECONÓMICO (19.5)",
        ],
      },
      {
        h: "Situaciones básicas del suelo y reservas (arts. 20-22)",
        nota:
          "El art. 21 es el corazón conceptual de la ley: solo hay DOS situaciones básicas, rural y urbanizado, y no coinciden con las clases de suelo autonómicas. Todo suelo urbanizable sectorizado y con plan aprobado sigue estando EN SITUACIÓN DE RURAL hasta que termine la actuación de urbanización — de ahí que se valore por capitalización de rentas y no por expectativas. La regla de la circunvalación del 21.3.b) evita convertir en urbanizado cualquier finca colindante con una vía rápida.",
        items: [
          "SITUACIÓN DE SUELO RURAL (art. 21.2): en todo caso el preservado por la ordenación de su transformación mediante la urbanización, incluyendo como mínimo los terrenos excluidos por la legislación de protección del dominio público, la naturaleza o el patrimonio cultural, los de valores ecológicos, agrícolas, ganaderos, forestales y paisajísticos y los que presenten RIESGOS naturales o tecnológicos. Y ADEMÁS el suelo para el que se prevea o permita su paso a urbanizado HASTA QUE TERMINE la correspondiente actuación de urbanización",
          "SITUACIÓN DE SUELO URBANIZADO (art. 21.3): el que, ESTANDO LEGALMENTE INTEGRADO EN UNA MALLA URBANA conformada por una red de viales, dotaciones y parcelas propia del núcleo, cumpla alguna de estas tres condiciones — haber sido urbanizado en ejecución del instrumento de ordenación · tener instaladas y operativas las infraestructuras y servicios necesarios mediante conexión en red, o poder llegar a contar con ellos sin más obras que las de conexión · estar ocupado por la edificación en el porcentaje que determine la legislación autonómica",
          "Regla antielusión: el hecho de que el suelo sea COLINDANTE CON CARRETERAS DE CIRCUNVALACIÓN o vías de comunicación interurbanas NO comporta por sí mismo su consideración como suelo urbanizado (art. 21.3.b)",
          "También están en situación de urbanizado los NÚCLEOS RURALES TRADICIONALES legalmente asentados cuando la legislación autonómica les atribuya la condición de suelo urbano o asimilada y cuenten con las dotaciones requeridas (art. 21.4)",
          "RESERVA DE VIVIENDA PROTEGIDA (art. 20.1.b): como mínimo, los terrenos necesarios para realizar el 40 POR CIENTO de la edificabilidad residencial prevista en el suelo rural que vaya a incluirse en actuaciones de NUEVA URBANIZACIÓN y el 20 POR CIENTO en el suelo urbanizado que deba someterse a actuaciones de REFORMA O RENOVACIÓN de la urbanización (porcentajes vigentes tras la Ley 12/2023; el texto original de 2015 fijaba el 30 % y el 10 %). La legislación autonómica puede fijar o permitir excepcionalmente una reserva inferior o eximirla para determinados municipios o actuaciones",
          "Documentación ambiental y económica (art. 22): el informe de sostenibilidad ambiental de las actuaciones de urbanización debe incluir un MAPA DE RIESGOS NATURALES; en consultas deben recabarse los informes de la Administración HIDROLÓGICA, de COSTAS y de CARRETERAS e infraestructuras afectadas, que son DETERMINANTES para la memoria ambiental, de la que solo cabe disentir de forma expresamente motivada; y la documentación debe incluir INFORME O MEMORIA DE SOSTENIBILIDAD ECONÓMICA que pondere el impacto en las Haciendas Públicas",
        ],
      },
      {
        h: "Reglas procedimentales y normas civiles (arts. 23-28)",
        nota:
          "De este bloque interesan al técnico municipal tres cosas: el resumen ejecutivo obligatorio en la información pública, los requisitos notariales y registrales de la declaración de obra nueva, y la regla del art. 27.3 que permite al adquirente rescindir el contrato en cuatro años si no se hizo constar la situación urbanística.",
        items: [
          "Efecto de los instrumentos de distribución (art. 23.1): SUBROGACIÓN de las fincas de origen por las de resultado y reparto de titularidad entre propietarios, promotor y Administración. Las transmisiones por aportación y las adjudicaciones proporcionales están EXENTAS con carácter permanente de ITP y AJD y no se consideran transmisión a efectos de la plusvalía municipal (art. 23.7)",
          "RESUMEN EJECUTIVO (art. 25.3): la documentación expuesta al público debe incluirlo, expresando la delimitación de los ámbitos en que la ordenación proyectada ALTERA LA VIGENTE con plano de situación y alcance de la alteración, y los ámbitos en que se suspendan la ordenación o los procedimientos, con la duración de la suspensión",
          "FINCA vs PARCELA (art. 26.1): finca es la unidad de suelo o de edificación atribuida exclusiva y excluyentemente a uno o varios propietarios en proindiviso, que puede situarse en rasante, vuelo o subsuelo; PARCELA es la unidad de suelo que tenga atribuida EDIFICABILIDAD Y USO, o solo uso urbanístico independiente",
          "Los NOTARIOS exigirán, para su testimonio, la acreditación documental de la autorización administrativa de las segregaciones o divisiones, y los REGISTRADORES la exigirán para inscribir (art. 26.2)",
          "Transmisión de fincas (art. 27): NO modifica la situación del titular respecto de los deberes; el nuevo titular queda SUBROGADO. En las enajenaciones debe hacerse constar la situación urbanística cuando los terrenos no sean susceptibles de uso privado o edificación, tengan edificaciones fuera de ordenación o se destinen a vivienda protegida, y los deberes pendientes. Su infracción faculta al adquirente para RESCINDIR el contrato en el plazo de CUATRO AÑOS",
          "DECLARACIÓN DE OBRA NUEVA (art. 28): en construcción, los notarios exigen el acto administrativo habilitante y certificación de técnico competente sobre el ajuste al proyecto; TERMINADA, además certificación de finalización conforme al proyecto, acreditación del cumplimiento de los requisitos para la entrega a los usuarios y las autorizaciones que garanticen el destino al uso previsto y los requisitos de EFICIENCIA ENERGÉTICA",
          "Obras prescritas (art. 28.4): cuando ya no proceda adoptar medidas de restablecimiento que impliquen demolición por haber transcurrido los plazos, se inscriben con certificación del Ayuntamiento o de técnico competente, acta notarial o certificación catastral descriptiva y gráfica, comprobando el Registrador la inexistencia de anotación preventiva de disciplina urbanística y que el suelo no es demanial",
        ],
      },
      {
        h: "Título V — Valoraciones (arts. 34-41)",
        nota:
          "Este es el título más preguntado y el que menos margen deja: hay un método por situación básica y no cabe elegir. En rural, capitalización de la renta anual real o potencial, LA QUE SEA SUPERIOR, con corrección al alza por factores objetivos de localización y con prohibición expresa de computar expectativas urbanísticas. En urbanizado sin edificar, residual estático sobre el valor de repercusión. Y en urbanizado ya edificado, el valor es EL SUPERIOR de dos: comparación conjunta suelo+edificación, o residual solo del suelo.",
        items: [
          "Ámbito (art. 34.1): estas reglas rigen la valoración cuando tenga por objeto la verificación de las operaciones de reparto de beneficios y cargas, la fijación del JUSTIPRECIO expropiatorio cualquiera que sea su finalidad, el precio en la VENTA O SUSTITUCIÓN FORZOSAS, y la determinación de la RESPONSABILIDAD PATRIMONIAL",
          "Fechas de referencia (art. 34.2): en reparto de beneficios y cargas, la fecha de INICIACIÓN DEL PROCEDIMIENTO de aprobación del instrumento · en expropiación, el momento de iniciación del expediente de justiprecio individualizado o de EXPOSICIÓN AL PÚBLICO del proyecto si hay tasación conjunta · en venta o sustitución forzosas, la iniciación del procedimiento de declaración del incumplimiento · en responsabilidad patrimonial, la entrada en vigor de la disposición o el comienzo de eficacia del acto lesivo",
          "Criterios generales (art. 35): el valor del suelo corresponde a su PLENO DOMINIO, LIBRE DE TODA CARGA. El suelo se tasa según su SITUACIÓN y CON INDEPENDENCIA de la causa de la valoración y del instrumento que la motive. Las edificaciones en suelo rural se tasan CON INDEPENDENCIA de los terrenos si se ajustan a la legalidad; en suelo urbanizado, CONJUNTAMENTE con el suelo. Si están FUERA DE ORDENACIÓN, su valor se reduce en proporción al tiempo transcurrido de su vida útil",
          "SUELO RURAL (art. 36.1.a): capitalización de la RENTA ANUAL REAL O POTENCIAL, LA QUE SEA SUPERIOR, según su estado en el momento de la valoración. La renta potencial atiende al rendimiento del uso o explotación de que sean susceptibles usando medios técnicos normales, incluyendo como ingresos las SUBVENCIONES ESTABLES y descontando los costes de explotación",
          "Corrección al alza en rural (art. 36.1.a): por FACTORES OBJETIVOS DE LOCALIZACIÓN —accesibilidad a núcleos de población o centros de actividad económica, ubicación en entornos de singular valor ambiental o paisajístico—, justificados en el expediente y en los términos reglamentarios",
          "PROHIBICIÓN CLAVE (art. 36.2): en ningún caso pueden considerarse EXPECTATIVAS derivadas de la asignación de edificabilidades y usos por la ordenación que no hayan sido aún plenamente realizados. Las edificaciones en rural que deban valorarse aparte se tasan por COSTE DE REPOSICIÓN según su estado y antigüedad",
          "SUELO URBANIZADO NO EDIFICADO, o con edificación ilegal o en ruina física (art. 37.1): se toman el uso y edificabilidad atribuidos por la ordenación —si no tiene asignados, la EDIFICABILIDAD MEDIA y el USO MAYORITARIO del ámbito espacial homogéneo—, se aplica el VALOR DE REPERCUSIÓN por el MÉTODO RESIDUAL ESTÁTICO y se descuenta el valor de los DEBERES Y CARGAS PENDIENTES",
          "SUELO EDIFICADO O EN CURSO DE EDIFICACIÓN (art. 37.2): el valor será EL SUPERIOR de — a) la tasación CONJUNTA de suelo y edificación ajustada a la legalidad por el MÉTODO DE COMPARACIÓN, aplicado exclusivamente a los usos existentes; o b) el método RESIDUAL del apartado 1 aplicado exclusivamente al SUELO, sin consideración de la edificación existente",
          "En suelo urbanizado sometido a actuaciones de REFORMA O RENOVACIÓN, el método residual considera los usos y edificabilidades atribuidos por la ordenación EN SU SITUACIÓN DE ORIGEN (art. 37.3)",
          "Indemnización de la facultad de participar en actuaciones de nueva urbanización (art. 38): requiere cuatro requisitos acumulativos y se calcula aplicando el mismo porcentaje de participación de la comunidad en las plusvalías del art. 18.1.b) a la diferencia de valor entre la situación de origen y la de actuación terminada",
          "Equidistribución (art. 40): las aportaciones de suelo se tasan por el valor que correspondería al suelo SI ESTUVIERA TERMINADA LA ACTUACIÓN",
        ],
      },
      {
        h: "Título VI — Expropiación y responsabilidad patrimonial (arts. 42-48)",
        nota:
          "Del régimen expropiatorio interesan sobre todo la reversión y la retasación. La reversión decae si el uso dotacional público se implantó y mantuvo OCHO AÑOS, y en las expropiaciones para urbanizar procede si han pasado DIEZ AÑOS sin concluir la urbanización. La retasación es la figura propia de esta ley: no devuelve el suelo, sino que da al expropiado la diferencia de valor cuando la Administración aumenta después los usos o la edificabilidad.",
        items: [
          "Efecto de la aprobación de los instrumentos (art. 42.2): conlleva la DECLARACIÓN DE UTILIDAD PÚBLICA Y LA NECESIDAD DE OCUPACIÓN de los bienes cuando habiliten para su ejecución y ésta deba producirse por expropiación, extendiéndose a los terrenos precisos para CONECTAR la actuación con las redes generales de servicios",
          "La delimitación de un ámbito para actuaciones sobre el medio urbano, firme en vía administrativa, comporta la declaración de utilidad pública o interés social a efectos de expropiación, VENTA Y SUSTITUCIÓN FORZOSAS, y su sujeción a los derechos de TANTEO Y RETRACTO a favor de la Administración actuante (art. 42.3)",
          "Las VÍAS RURALES comprendidas en la superficie expropiada se entienden de PROPIEDAD MUNICIPAL salvo prueba en contrario; las vías urbanas que desaparezcan se entienden transmitidas de pleno derecho al organismo expropiante (art. 42.4)",
          "Justiprecio (art. 43): se fija por expediente individualizado o por TASACIÓN CONJUNTA y, si hay acuerdo con el expropiado, puede satisfacerse EN ESPECIE. En actuaciones sobre el medio urbano NO ES PRECISO el consentimiento del propietario para pagar en especie, siempre que se efectúe dentro del propio ámbito de gestión y del plazo de terminación de las obras",
          "REVERSIÓN — NO procede (art. 47.1) si: el uso dotacional público que motivó la expropiación fue efectivamente implantado y MANTENIDO DURANTE OCHO AÑOS, o el nuevo uso es igualmente dotacional público · la expropiación fue para formar o ampliar un PATRIMONIO PÚBLICO DE SUELO y el nuevo uso es compatible con sus fines · fue para ejecutar una ACTUACIÓN DE URBANIZACIÓN · fue por INCUMPLIMIENTO de deberes o no levantamiento de cargas · y los restantes supuestos de la LEF",
          "Suelo expropiado para ejecutar una actuación de urbanización (art. 47.2): procede la REVERSIÓN cuando hayan transcurrido DIEZ AÑOS desde la expropiación sin que la urbanización se haya concluido; y procede la RETASACIÓN cuando se alteren los usos o la edificabilidad por una modificación del planeamiento que no se efectúe en el marco de un nuevo ejercicio pleno de la potestad de ordenación y ello suponga un incremento de valor",
          "SUPUESTOS INDEMNIZATORIOS (art. 48): la alteración de las condiciones de ejecución de la urbanización o de participación de los propietarios · las VINCULACIONES Y LIMITACIONES SINGULARES que excedan de los deberes legales o restrinjan edificabilidad o uso sin distribución equitativa · la modificación o extinción de la eficacia de títulos habilitantes por cambio sobrevenido de la ordenación · su ANULACIÓN, la demora injustificada y la denegación improcedente, sin indemnización si hay dolo, culpa o negligencia graves del perjudicado · y la ocupación de terrenos destinados a dotaciones públicas",
          "Las situaciones de FUERA DE ORDENACIÓN producidas por cambios en la ordenación NO SON INDEMNIZABLES, sin perjuicio de que pueda serlo la imposibilidad de usar y disfrutar lícitamente la construcción durante su vida útil (art. 48.a)",
          "Ocupación de terrenos dotacionales (art. 48.e): transcurridos CUATRO AÑOS desde la ocupación sin aprobación definitiva del instrumento que adjudique otros de valor equivalente, los interesados pueden advertir a la Administración su propósito de iniciar el justiprecio, quedando facultados para iniciarlo transcurridos SEIS MESES desde dicha advertencia",
        ],
      },
      {
        h: "Derecho de superficie (arts. 53-54)",
        nota:
          "Tema corto y muy memorizable, con dos cifras que caen: los noventa y nueve años de plazo máximo y la doble exigencia de escritura pública e inscripción registral para su válida constitución —la inscripción aquí es CONSTITUTIVA, no meramente declarativa—.",
        items: [
          "Contenido (art. 53.1): atribuye al superficiario la facultad de realizar construcciones en la RASANTE, EL VUELO Y EL SUBSUELO de finca ajena, manteniendo la PROPIEDAD TEMPORAL de lo construido. También puede constituirse sobre construcciones ya realizadas o sobre viviendas, locales o elementos privativos",
          "Constitución (art. 53.2): requiere ESCRITURA PÚBLICA E INSCRIPCIÓN en el Registro de la Propiedad. En la escritura debe fijarse NECESARIAMENTE el plazo de duración, que NO PODRÁ EXCEDER DE NOVENTA Y NUEVE AÑOS. Solo puede constituirlo el PROPIETARIO DEL SUELO, sea público o privado",
          "Puede constituirse a TÍTULO ONEROSO O GRATUITO; en el oneroso la contraprestación puede ser suma alzada, canon periódico, adjudicación de viviendas o locales o derechos de arrendamiento, o varias modalidades a la vez (art. 53.3)",
          "El superficiario puede constituir la propiedad superficiaria en RÉGIMEN DE PROPIEDAD HORIZONTAL con separación del terreno y transmitir y gravar como fincas independientes durante el plazo, SIN NECESIDAD del consentimiento del propietario del suelo (art. 54.2)",
          "El SUBSUELO corresponde al propietario del suelo y se transmite y grava junto con éste, salvo que haya sido incluido en el derecho de superficie (art. 54.4)",
          "Extinción (art. 54.5): se extingue si no se edifica conforme a la ordenación en el plazo previsto y, en todo caso, por transcurso del plazo. Al extinguirse por plazo, el propietario del suelo HACE SUYA la propiedad de lo edificado SIN INDEMNIZACIÓN alguna, y se extinguen todos los derechos reales o personales impuestos por el superficiario",
        ],
      },
      {
        h: "Registro de la Propiedad (arts. 65-68)",
        nota:
          "La pregunta habitual de este capítulo es la clase de asiento que corresponde a cada acto, porque el art. 67 los reparte en tres cajones. Regla práctica: inscripción para lo que altera el dominio, anotación preventiva para lo litigioso o en tramitación —con caducidad a los cuatro años— y nota marginal para lo meramente informativo, con vigencia indefinida pero sin más efecto que dar a conocer la situación urbanística.",
        items: [
          "Actos INSCRIBIBLES (art. 65.1): los actos firmes de aprobación de expedientes de ejecución que modifiquen fincas o atribuyan dominio · las cesiones obligatorias de terrenos · la INCOACIÓN de expedientes de disciplina urbanística o restauración de la legalidad · las condiciones especiales de los actos habilitantes · los actos de transferencia y gravamen del aprovechamiento urbanístico · la INTERPOSICIÓN DE RECURSO contencioso-administrativo que pretenda la anulación de instrumentos · los actos y sentencias firmes que declaren esa anulación · y cualquier otro acto que modifique el dominio o la descripción de fincas determinadas",
          "CLASES DE ASIENTO (art. 67): por INSCRIPCIÓN los actos de las letras a), b), g) y h) del art. 65.1 y la superficie ocupada a favor de la Administración por dotaciones públicas · por ANOTACIÓN PREVENTIVA los de las letras c) y f) —disciplina urbanística y recurso contencioso—, que CADUCAN A LOS CUATRO AÑOS y pueden prorrogarse · por NOTA MARGINAL los demás, con VIGENCIA INDEFINIDA pero sin más efecto que dar a conocer la situación urbanística en el momento del título que las originó",
          "En la incoación de expedientes de disciplina sobre actuaciones que hayan creado nuevas fincas registrales por parcelación, reparcelación, obra nueva o propiedad horizontal, la Administración está OBLIGADA a acordar la anotación preventiva; su omisión genera RESPONSABILIDAD de la Administración frente al adquirente de buena fe (art. 65.2)",
          "Los actos pueden inscribirse mediante CERTIFICACIÓN ADMINISTRATIVA expedida por el órgano urbanístico actuante, salvo que la legislación establezca otra cosa (art. 66)",
          "Expedientes de distribución de beneficios y cargas (art. 68): su iniciación o la afección de los terrenos se hace constar por NOTA AL MARGEN de la última inscripción de dominio, con duración de TRES AÑOS PRORROGABLE POR OTROS TRES a instancia del órgano o agrupación que la solicitó",
          "El título que inscribe el proyecto de distribución es SUFICIENTE para la modificación de entidades hipotecarias, rectificación de descripciones registrales, inmatriculación de fincas o excesos de cabida, reanudación del tracto sucesivo y cancelación de derechos reales incompatibles (art. 68.5)",
        ],
      },
    ],
    claves: [
      "Residencia habitual: más de 183 DÍAS al año · Carga desproporcionada en PH: más de DOCE MENSUALIDADES de gastos comunes",
      "Actuación de DOTACIÓN: incrementa dotaciones sin requerir reforma o renovación de la urbanización",
      "La edificabilidad prevista NO integra por sí sola la propiedad: la patrimonialización exige REALIZACIÓN EFECTIVA",
      "Deber de conservación: la MITAD del valor actual de construcción; hasta el 75 % del coste de reposición si hay inejecución injustificada y lo prevé la ley autonómica",
      "Cesión de la edificabilidad media ponderada: entre el 5 % y el 15 %, excepcionalmente hasta el 20 %",
      "Vivienda de retorno: no inferior al 50 % de la anterior si tenía al menos 90 m²",
      "En expropiación, la vivienda de reemplazo EQUIVALE al justiprecio; si el expropiado cobra en metálico, pierde el realojo",
      "SOLO DOS situaciones básicas: rural y urbanizado. El urbanizable sigue siendo RURAL hasta terminar la urbanización",
      "Ser colindante con una circunvalación NO convierte el suelo en urbanizado",
      "Rural: capitalización de la renta real o POTENCIAL, la que sea SUPERIOR, corregible al alza por localización",
      "PROHIBIDO valorar expectativas urbanísticas no realizadas (art. 36.2)",
      "Urbanizado sin edificar: residual ESTÁTICO sobre el valor de repercusión, descontando deberes y cargas pendientes",
      "Urbanizado edificado: el SUPERIOR entre comparación conjunta (suelo+edificación) y residual solo del suelo",
      "Fuera de ordenación: el valor se reduce en proporción al tiempo transcurrido de su vida útil, y la situación NO es indemnizable",
      "No hay reversión si el uso dotacional se implantó y mantuvo OCHO AÑOS",
      "Expropiación para urbanizar: reversión a los DIEZ AÑOS sin concluir · retasación si aumentan usos o edificabilidad",
      "Ocupación de dotacionales: a los 4 AÑOS cabe advertir, y a los 6 MESES de la advertencia iniciar el justiprecio",
      "Derecho de superficie: escritura pública + inscripción (constitutiva), máximo 99 AÑOS, y al extinguirse lo edificado revierte SIN indemnización",
      "Asientos: inscripción (dominio) · anotación preventiva (disciplina y recurso, caduca a los 4 AÑOS) · nota marginal (informativa, indefinida)",
      "Nota marginal de distribución de beneficios y cargas: TRES AÑOS prorrogables por otros TRES",
    ],
  },

  E29: {
    intro:
      "El DFL 1/2017 refunde la Ley Foral de Ordenación del Territorio y Urbanismo (LFOTU) y es la norma que un arquitecto del Ayuntamiento de Pamplona maneja a diario. Esta primera parte cubre tres bloques: los principios y la acción pública (Título Preliminar), el reparto de competencias y la organización administrativa foral (Título I), y sobre todo el Título II, que contiene la escalera completa del planeamiento — primero los cuatro instrumentos de ordenación TERRITORIAL, después los instrumentos de ordenación URBANÍSTICA municipal. La distinción que vertebra todo el título II es la de determinaciones ESTRUCTURANTES frente a PORMENORIZADAS (art. 49), porque de ella dependen qué instrumento puede modificar qué y quién aprueba definitivamente cada cosa.",
    bloques: [
      {
        h: "Título Preliminar — Principios, participación y acción pública (arts. 1-9)",
        nota:
          "De este título se preguntan los plazos y la acción pública. Fíjate en que hay dos niveles de participación: el mínimo genérico de veinte días de exposición pública para cualquier instrumento, y el proceso de participación ciudadana reforzado, previo a la aprobación inicial, que solo se exige para los instrumentos territoriales, los Planes Generales, Parciales, Especiales y de Actuación Urbana y las modificaciones que planteen nueva urbanización.",
        items: [
          "La actividad de ordenación del territorio y urbanística es una FUNCIÓN PÚBLICA que comprende la planificación, organización, dirección y control de la ocupación y utilización del suelo (art. 2.1)",
          "Actividad urbanística (art. 3.2), cinco aspectos: la ordenación urbanística de los municipios a través del PLANEAMIENTO · la EJECUCIÓN y gestión del planeamiento · la INTERVENCIÓN en el uso del suelo y la edificación · la PROTECCIÓN DE LA LEGALIDAD urbanística · y la INTERVENCIÓN EN EL MERCADO DE SUELO",
          "PARTICIPACIÓN MÍNIMA (art. 7.2): cualquier instrumento de ordenación territorial o urbanístico se somete a un período NO MENOR DE VEINTE DÍAS de participación ciudadana mediante exposición pública y, en su caso, audiencia a las entidades locales, previamente a su aprobación definitiva",
          "PARTICIPACIÓN REFORZADA (art. 7.3): los instrumentos de ordenación territorial del art. 28.1, los Planes Generales Municipales, Planes Parciales, Planes Especiales y Planes Especiales de Actuación Urbana, y las modificaciones que planteen actuaciones de NUEVA URBANIZACIÓN, cuentan con un proceso de participación ciudadana de carácter CONSULTIVO PREVIO A LA APROBACIÓN INICIAL",
          "El PLAN DE PARTICIPACIÓN (art. 7.4) debe contener al menos: identificación de los agentes sociales y ciudadanos interesados · resúmenes de las propuestas de ordenación más importantes · la Memoria de viabilidad y sostenibilidad económica · la metodología y herramientas de difusión, incluyendo participación on-line y sesiones explicativas · y las conclusiones valoradas del proceso",
          "Acceso a la información (art. 8): sin obligación de acreditar interés determinado. Cabe DENEGARLA en tres casos — expedientes en que la legislación básica no reconoce el derecho de acceso · datos amparados por propiedad intelectual o confidencialidad de datos y expedientes personales · documentos o datos INCONCLUSOS, solicitudes manifiestamente ABUSIVAS o formuladas de forma tan general que sea imposible determinar el objeto. Plazo de resolución: DOS MESES, salvo que la Ordenanza de la cédula urbanística fije uno menor. Las resoluciones denegatorias son motivadas y AGOTAN LA VÍA ADMINISTRATIVA",
          "ACCIÓN PÚBLICA (art. 9): es pública la acción para exigir ante los órganos administrativos y la Jurisdicción Contencioso-Administrativa la observancia de la legislación y el planeamiento. Si está motivada por obras ilegales, puede ejercitarse DURANTE LA EJECUCIÓN y hasta el transcurso de los plazos para adoptar las medidas de protección de la legalidad",
        ],
      },
      {
        h: "Título I — Competencias y organización (arts. 10-22)",
        nota:
          "La regla de reparto es una cláusula residual a favor del municipio: la actividad urbanística corresponde con carácter general a los Municipios, que ejercen cuantas competencias no estén expresamente atribuidas a otras Administraciones. A la Comunidad Foral le quedan la ordenación territorial completa y, en urbanismo, esencialmente el control de legalidad mediante la aprobación definitiva de los Planes Generales.",
        items: [
          "COMUNIDAD FORAL (art. 10): le corresponde íntegramente la función pública de ordenación del territorio —formulación, aprobación y ejecución de los instrumentos territoriales—. En materia urbanística: la dirección e impulso de la actividad · la COORDINACIÓN Y EL CONTROL DE LEGALIDAD del planeamiento, especialmente mediante la APROBACIÓN DEFINITIVA DE LOS PLANES GENERALES MUNICIPALES · la formulación de Planes urbanísticos de conjunto y la aprobación definitiva de Planes Parciales y Especiales que afecten a varios municipios en defecto de acuerdo · y la cooperación y asistencia a los Municipios",
          "MUNICIPIOS (art. 11): la actividad urbanística pública les corresponde CON CARÁCTER GENERAL, ejerciendo cuantas competencias no estén expresamente atribuidas a otras Administraciones",
          "SUBROGACIÓN (art. 12): el incumplimiento por una Entidad Local de las obligaciones impuestas directamente por la ley foral faculta al titular del Departamento para adoptar las medidas necesarias A CUENTA Y EN SUSTITUCIÓN de aquélla. También le corresponde subrogarse en el ejercicio de la POTESTAD EXPROPIATORIA ante la inactividad municipal frente al incumplimiento de deberes urbanísticos",
          "Cuatro ÓRGANOS forales (art. 13.1): el Gobierno de Navarra · el Departamento competente · la COMISIÓN DE ORDENACIÓN DEL TERRITORIO · el CONSEJO SOCIAL DE POLÍTICA TERRITORIAL",
          "COMISIÓN DE ORDENACIÓN DEL TERRITORIO (art. 14): órgano CONSULTIVO Y DE COORDINACIÓN, presidido por el titular del Departamento, del que forman parte CUATRO REPRESENTANTES DE LOS AYUNTAMIENTOS a propuesta de la Federación Navarra de Municipios y Concejos. Informa la Estrategia Territorial, los Planes de Ordenación Territorial, los Planes y Proyectos Sectoriales de Incidencia Supramunicipal —y su propia incidencia supramunicipal antes de la declaración— y los Planes con Incidencia en la Ordenación del Territorio. Sus acuerdos sobre planeamiento municipal son RECURRIBLES ante el Gobierno de Navarra",
          "CONSEJO SOCIAL DE POLÍTICA TERRITORIAL (art. 15): órgano PARTICIPATIVO Y DELIBERANTE que emite informes PRECEPTIVOS Y NO VINCULANTES sobre las disposiciones generales de ordenación del territorio, la Estrategia Territorial, los Planes de Ordenación Territorial y los Planes de Acción Territorial. Recibe anualmente una Memoria del Departamento",
          "Asistencia preferente (art. 20.3) a: municipios con mayor dificultad por emplazamiento o forma de asentamiento · municipios con valores ambientales o histórico-artísticos reconocidos · MUNICIPIOS DE MENOS DE 2.000 HABITANTES · mancomunidades y asociaciones de municipios con fines urbanísticos · municipios declarados TURÍSTICOS",
          "CONVENIOS URBANÍSTICOS (arts. 23-26): tienen carácter JURÍDICO-ADMINISTRATIVO y se rigen por transparencia y publicidad. Son NULAS DE PLENO DERECHO las estipulaciones que contravengan, infrinjan o defrauden normas imperativas, incluidas las del planeamiento. Los de PLANEAMIENTO los aprueba el Ayuntamiento previa información pública de VEINTE DÍAS mínimo, y aunque obligan a tramitar la alteración, el Ayuntamiento CONSERVA LA PLENITUD DE SU POTESTAD de planeamiento por razones de interés público: si no se aprueba el cambio, el convenio se entiende AUTOMÁTICAMENTE RESUELTO",
          "En todos los municipios existirá un REGISTRO Y ARCHIVO de convenios urbanísticos; el ejemplar custodiado DA FE a todos los efectos legales, y cualquier ciudadano puede consultarlos y obtener certificaciones y copias (art. 26)",
        ],
      },
      {
        h: "Instrumentos de ordenación territorial (arts. 27-30)",
        nota:
          "Cuatro instrumentos en el art. 28.1 y una quinta categoría abierta en el 28.2. La clasificación de las determinaciones del art. 29 es la que más se pregunta, porque distingue tres intensidades: las vinculantes SOBRE EL TERRITORIO tienen aplicación directa e inmediata y prevalecen sobre el planeamiento local contrario; las vinculantes PARA LA PLANIFICACIÓN no se aplican directamente pero obligan al plan municipal cuando se elabore o modifique; y las orientativas no vinculan.",
        items: [
          "Cuatro instrumentos (art. 28.1): la ESTRATEGIA TERRITORIAL DE NAVARRA · los PLANES DE ORDENACIÓN TERRITORIAL (POT) · los PLANES DIRECTORES DE ACCIÓN TERRITORIAL · los PLANES Y PROYECTOS SECTORIALES DE INCIDENCIA SUPRAMUNICIPAL (PSIS)",
          "También son instrumentos de ordenación territorial los PLANES CON INCIDENCIA EN LA ORDENACIÓN DEL TERRITORIO, como los Planes de Ordenación de los Recursos Naturales o el Plan Director de Carreteras, que se rigen por su legislación específica (art. 28.2)",
          "TRES TIPOS DE DETERMINACIONES (art. 29.1): a) VINCULANTES SOBRE EL TERRITORIO — ratifican o modifican el régimen jurídico directa e inmediatamente aplicable a los terrenos y PREVALECEN sobre las previsiones contrarias del planeamiento local · b) VINCULANTES PARA LA PLANIFICACIÓN — sin aplicación directa, obligan a atenerse a su contenido al elaborar, aprobar y modificar el planeamiento urbanístico local · c) ORIENTATIVAS — criterios, directrices y guías NO VINCULANTES",
          "La EJECUTIVIDAD comienza a partir de la publicación de la aprobación definitiva en el Boletín Oficial de Navarra (art. 29.2), y los planes, programas y proyectos con incidencia territorial deben JUSTIFICAR SU COHERENCIA con los instrumentos territoriales de carácter general que les afecten (art. 29.3)",
          "ESTRATEGIA TERRITORIAL DE NAVARRA (arts. 31-33): instrumento de planificación ESTRATÉGICA cuyas determinaciones tienen carácter ORIENTATIVO. Se somete a información pública y audiencia de las entidades locales por plazo de AL MENOS DOS MESES, informan la Comisión de Ordenación del Territorio y el Consejo Social, y SE APRUEBA POR EL PARLAMENTO DE NAVARRA. El Consejo Social hace seguimiento ANUAL y remite CADA CUATRO AÑOS una memoria al Gobierno y al Parlamento. Su ACTUALIZACIÓN corresponde al Gobierno de Navarra a propuesta del Consejo Social",
          "PLANES DE ORDENACIÓN TERRITORIAL (arts. 34-37): ordenan áreas de ámbito SUPRAMUNICIPAL, incluyendo en general TÉRMINOS MUNICIPALES COMPLETOS. Sus determinaciones tienen CARÁCTER VINCULANTE SALVO que en ellos se establezca expresamente su carácter orientativo. Elaboración con fases de AVANCE y de PROYECTO, ambas con información pública y audiencia de las entidades locales por plazo mínimo de UN MES, con una Comisión de Seguimiento que informa. Se APRUEBAN POR EL GOBIERNO DE NAVARRA MEDIANTE DECRETO FORAL",
          "Vigencia INDEFINIDA (art. 37.1). La REVISIÓN es la adopción de nuevos criterios sobre la estructura general y orgánica del territorio por elección de un modelo sustancialmente distinto o circunstancias sobrevenidas; la ACTUALIZACIÓN, la incorporación de contenidos que complementen la información o ayuden a interpretar sus determinaciones; el resto son MODIFICACIONES, que se tramitan como la aprobación pero SIN FASE DE AVANCE. Revisión, modificación y actualización pueden aprobarse de oficio o A INSTANCIA DE AL MENOS UN TERCIO de las entidades locales de su ámbito",
          "PLANES DIRECTORES DE ACCIÓN TERRITORIAL (arts. 38-41): concretan, coordinan y programan las actuaciones sectoriales derivadas de un POT, con PROGRAMACIÓN A OCHO AÑOS. Pueden establecer RESERVAS DE SUELO que vinculan al planeamiento local. Información pública y audiencia por plazo mínimo de DOS MESES. Se aprueban por el Gobierno mediante decreto foral, pudiendo acordarse la declaración de utilidad pública o interés social y la urgencia a efectos expropiatorios",
        ],
      },
      {
        h: "Planes y Proyectos Sectoriales de Incidencia Supramunicipal (arts. 42-47)",
        nota:
          "La diferencia entre PLAN y PROYECTO sectorial es el objeto: el Plan ordena actuaciones residenciales, de actividad económica o el desarrollo de políticas públicas; el Proyecto implanta infraestructuras o instalaciones. Los dos datos numéricos que caen son la cesión del 10 % del aprovechamiento lucrativo a los Ayuntamientos y la garantía del 6 % en los de iniciativa particular. Y el art. 47 es importante para el técnico municipal porque explica por qué determinadas obras no pasan por licencia.",
        items: [
          "PLANES Sectoriales (art. 42.1): actuaciones RESIDENCIALES, de ACTIVIDAD ECONÓMICA o el desarrollo de planes y políticas públicas cuya incidencia trascienda del municipio o municipios sobre los que se asienten. PROYECTOS Sectoriales (art. 42.2): implantación de INFRAESTRUCTURAS O INSTALACIONES del sistema de transportes, hidráulicas, de gestión ambiental, energéticas, de telecomunicación y análogas",
          "Sus determinaciones VINCULAN al planeamiento de los entes locales afectados, que además deberán adaptar su planeamiento con ocasión de su revisión o modificación cuando el objeto de ésta se vea directamente afectado (art. 42.3)",
          "Corresponde al GOBIERNO DE NAVARRA declarar un Plan o Proyecto como de Incidencia Supramunicipal, motivando y justificando en el expediente que afecta a la ordenación en ámbito supramunicipal con función vertebradora, que la declaración es necesaria para su adecuada inserción territorial, y que se ha sometido previamente a un PLAN DE PARTICIPACIÓN pública (art. 42.4)",
          "CESIÓN DEL 10 POR 100 (art. 43.2): el desarrollo de un Plan Sectorial debe prever la cesión a los Ayuntamientos afectados del 10 % DEL APROVECHAMIENTO LUCRATIVO susceptible de tráfico inmobiliario, LIBRE DE CARGAS de urbanización y cualesquiera otras, en proporción a la superficie de su término incluida en el área de actuación. No computan como aprovechamiento lucrativo los equipamientos y dotaciones públicas de uso o servicio públicos",
          "INICIATIVA PARTICULAR (arts. 43.3 y 44.3): deben contener además estudio de viabilidad y sostenibilidad económica y duración estimada, y los compromisos del promotor, que es OBLIGATORIO GARANTIZAR. La garantía total NO PODRÁ SER INFERIOR AL 6 POR CIENTO del coste de implantación de los servicios y ejecución de las obras de urbanización",
          "Procedimiento (art. 45.2): el promotor lo somete a consideración del Gobierno · el Departamento, previo informe de la Comisión de Ordenación del Territorio, eleva propuesta de aprobación o desestimación de la DECLARACIÓN · el Gobierno declara la incidencia supramunicipal · se publica en el BON y se somete el expediente por plazo mínimo de UN MES a información pública y audiencia a los Ayuntamientos · informadas las alegaciones, nuevo informe de la Comisión · el Gobierno acuerda la aprobación",
          "SILENCIO NEGATIVO (art. 45.3): se entienden DESESTIMADAS las solicitudes de aprobación de Planes y Proyectos Sectoriales de iniciativa PRIVADA cuando, transcurrido el plazo de CUATRO MESES desde el ingreso del expediente completo, no haya recaído resolución expresa",
          "VIGENCIA INDEFINIDA, pero el Gobierno puede acordar su EXTINCIÓN (art. 46) si transcurren DOS AÑOS desde la aprobación definitiva sin iniciarse las obras de urbanización, o si iniciadas se interrumpen más de dos años sin fuerza mayor · si el promotor renuncia · si modificaciones sustanciales privan de sentido su finalidad · por razones de interés público justificadas · si finalizó su ejecución y cumplió su finalidad, incorporándose entonces al planeamiento municipal · o si lo solicitan las entidades locales para su incorporación",
          "EXENCIÓN DE CONTROLES LOCALES (art. 47): las obras previstas en un PSIS NO están sujetas a licencia ni a cualquier otro control preventivo local cuando se trate de construcción y reparación de infraestructuras, dotaciones e instalaciones DECLARADAS DE INTERÉS GENERAL por el Gobierno de Navarra y se cumpla el circuito de comunicación, acreditación previa, autorización del Departamento previa audiencia de las entidades locales y certificación final de técnico competente. Subsisten en todo caso las OBLIGACIONES TRIBUTARIAS ante las entidades locales",
        ],
      },
      {
        h: "Determinaciones estructurantes y pormenorizadas (arts. 48-50)",
        nota:
          "Esta es la distinción capital del tema, porque decide el instrumento y la Administración competente: lo estructurante lo aprueba definitivamente el Gobierno de Navarra y lo pormenorizado el Ayuntamiento. Regla mental: estructurante es lo que define el MODELO —clases de suelo, sectores, sistemas generales, edificabilidad y usos globales del urbanizable, normas de protección del no urbanizable, áreas de patrimonio municipal—; pormenorizado es todo lo que permite ejecutar materialmente —alineaciones, condiciones de parcela y edificación, usos pormenorizados, sistemas locales, fuera de ordenación, unidades de ejecución y sistemas de actuación, plazos, catálogo y áreas de reparto—.",
        items: [
          "Instrumentos de planeamiento urbanístico municipal (art. 48.2): el PLAN GENERAL MUNICIPAL sobre la extensión completa del término, y los planes de desarrollo —PLANES PARCIALES, PLANES ESPECIALES, PLANES ESPECIALES DE ACTUACIÓN URBANA y ESTUDIOS DE DETALLE—. Pueden formularse además PLANES ESPECIALES INDEPENDIENTES sin desarrollar el Plan General. También son instrumentos de ordenación los CATÁLOGOS y las ORDENANZAS de Edificación y de Urbanización (art. 48.3)",
          "ESTRUCTURANTES (art. 49.2): el señalamiento de las CLASES de suelo y, en no urbanizable, de sus categorías y subcategorías · la delimitación de los SECTORES con sus criterios y condiciones básicas · la definición de los SISTEMAS GENERALES de vías públicas, servicios urbanos, espacios libres y equipamientos al servicio de toda la población · en suelo urbanizable, la EDIFICABILIDAD MÁXIMA y los USOS GLOBALES de cada sector y el porcentaje obligatorio de VIVIENDA PROTEGIDA · las NORMAS DE PROTECCIÓN del suelo no urbanizable · y la delimitación de áreas de reserva para PATRIMONIO MUNICIPAL DE SUELO",
          "PORMENORIZADAS (art. 49.3): ALINEACIONES Y RASANTES · condiciones de los actos sobre las parcelas · tipo de obras admisibles y condiciones, morfología y tipología de las edificaciones · régimen de USOS PORMENORIZADOS e intervenciones admisibles y prohibidas · SISTEMAS LOCALES · la relación de construcciones FUERA DE ORDENACIÓN · la delimitación de UNIDADES DE EJECUCIÓN y fijación de los SISTEMAS DE ACTUACIÓN · el señalamiento de PLAZOS para el cumplimiento de deberes · el CATÁLOGO de elementos a conservar · determinaciones de accesibilidad · la delimitación de ÁREAS DE REPARTO, su aprovechamiento tipo y coeficientes de homogeneización · determinaciones de eficiencia energética · y la definición de áreas de renovación, regeneración y rehabilitación",
          "SECTOR (art. 50): unidad espacial de dimensión significativa que cumple dos funciones — ser el ámbito respecto al cual se establecen las condiciones básicas de ordenación estructurante, y ser el ámbito para desarrollar la ordenación pormenorizada mediante Plan Parcial o Plan Especial. Los sectores con distintas clasificaciones o usos globales deben establecer SUBSECTORES a efectos de verificar las determinaciones de vivienda y dotaciones de los arts. 54 y 55",
        ],
      },
      {
        h: "Estándares de vivienda protegida (art. 54)",
        nota:
          "El artículo más numérico del tema y de aplicación directa en Pamplona, que queda en el tramo del 50 % por estar en el ámbito del planeamiento supramunicipal de la Comarca. Fíjate en que los tres tramos no solo cambian de porcentaje, sino también de tipos de actuación computables: solo el tramo del 50 % incluye las actuaciones de SUSTITUCIÓN, y el tramo del 20 % excluye además las de dotación.",
        items: [
          "TRAMO DEL 50 %: municipios incluidos en el ámbito del planeamiento supramunicipal de la COMARCA DE PAMPLONA y municipios de población igual o superior a 10.000 habitantes — el 50 % de la nueva capacidad residencial en actuaciones de nueva urbanización, DOTACIÓN, SUSTITUCIÓN y renovación o reforma de la urbanización. Si el incremento de viviendas es IGUAL O INFERIOR A 3, el Ayuntamiento puede reducir o eliminar el estándar por acuerdo de mayoría simple del Pleno",
          "TRAMO DEL 35 %: municipios de población igual o superior a 2.000 e inferior a 10.000 habitantes — el 35 % de la nueva capacidad residencial en actuaciones de nueva urbanización, dotación y renovación o reforma. Umbral de dispensa: incremento IGUAL O INFERIOR A 10 viviendas",
          "TRAMO DEL 20 %: municipios de población inferior a 2.000 habitantes — el 20 % de la nueva capacidad residencial en actuaciones de nueva urbanización y renovación o reforma. Umbral de dispensa: incremento IGUAL O INFERIOR A 25 viviendas",
          "REDUCCIÓN POR INVIABILIDAD: justificada la inviabilidad objetiva de la actuación y transcurridos AL MENOS CUATRO AÑOS desde la publicación de la aprobación definitiva del Plan Municipal, el Ayuntamiento puede solicitar al departamento de vivienda reducir el porcentaje hasta el 30 % (tramo del 50 %) o hasta el 10 % (tramo del 35 %). Los municipios de la COMARCA DE PAMPLONA quedan EXCLUIDOS de esta posibilidad de reducción",
          "Cómputo (art. 54.2): el incremento del número de viviendas es la diferencia entre el número fijado por la nueva ordenación y el previamente establecido. En actuaciones de SUSTITUCIÓN edificatoria, aun manteniendo el uso preexistente, se calcula por la diferencia entre las NUEVAS CÉDULAS DE HABITABILIDAD emitidas y las existentes con anterioridad",
          "Localización (art. 54.3): el estándar debe garantizarse EN LA MISMA ZONA O ÁREA DE REPARTO; si no fuera posible o recomendable por razones socio-urbanísticas, en otras zonas siempre que las determinaciones de vivienda protegida se aprueben con carácter PREVIO O SIMULTÁNEO al de vivienda libre y exista justificación suficiente",
          "DISTRIBUCIÓN INTERNA (art. 54.4): al menos el 60 % del total de las viviendas deben ser de PROTECCIÓN OFICIAL (VPO), salvo si el número de viviendas es igual o inferior a 3, en cuyo caso el 100 % deben serlo · en los tramos del 50 % y del 35 %, cuando las VPO resultantes sean 10 O MÁS, como mínimo el 30 % de ellas se destinarán a ARRENDAMIENTO · en actuaciones de dotación y sustitución, las nuevas viviendas en edificios donde la mayoría en número fueran protegidas deben ser protegidas del mismo tipo",
        ],
      },
      {
        h: "Estándares dotacionales y de aparcamiento (art. 55)",
        nota:
          "Los módulos del art. 55 son de aplicación diaria al informar un plan parcial, y hay que tenerlos memorizados con su unidad, porque el examen juega con cambiarla. Observa que los espacios libres aparecen dos veces con criterios distintos: como SISTEMA GENERAL, 5 m²/habitante o 15 m² por cada 100 m² construidos; y como DOTACIÓN LOCAL dentro del sector, 20 m² por cada 100 m² construidos con un mínimo del 10 % de la superficie del sector.",
        items: [
          "SISTEMA GENERAL de espacios libres públicos (art. 55.3.a): superficie conjunta útil NO INFERIOR A 5 M² POR HABITANTE o de 15 M² POR CADA 100 M² CONSTRUIDOS de uso residencial, referido a la capacidad total máxima de los suelos urbanos y urbanizables. Pueden exceptuarse los núcleos de población INFERIORES A 500 HABITANTES a criterio del Departamento",
          "DOTACIONES LOCALES en sectores de suelo urbanizable residencial (art. 55.3.b): reservas no inferiores a 50 M² POR CADA 115 M² CONSTRUIDOS de uso residencial, con independencia de los sistemas generales interiores. De esa reserva, la destinada específicamente a ZONAS VERDES Y ESPACIOS LIBRES no será inferior a 20 M² POR CADA 100 M² CONSTRUIDOS NI AL 10 % DE LA SUPERFICIE TOTAL DEL SECTOR, sin computar los sistemas generales incluidos",
          "POLÍGONOS INDUSTRIALES o de servicios (art. 55.3.c): al menos el 10 % DEL TOTAL DEL SECTOR se destinará a GRANDES ZONAS VERDES, evitando su acumulación en zonas residuales y marginales",
          "APARCAMIENTOS en suelo urbanizable o urbano no consolidado residencial (art. 55.4): como mínimo DOS PLAZAS POR CADA 100 M² de edificación de cualquier uso sobre rasante en edificación colectiva, o TRES PLAZAS POR VIVIENDA en sectores de edificación unifamiliar, descontando los espacios destinados a garajes. En espacios o edificios de USO PÚBLICO, como mínimo 0,5 PLAZAS POR VIVIENDA y 0,5 PLAZAS POR CADA 100 M² de usos comerciales y terciarios",
          "La administración competente puede fijar una dotación mayor o menor de plazas, a ubicar en el espacio público, atendiendo al contexto, al modelo de movilidad sostenible y al transporte público, siendo CONDICIÓN IMPRESCINDIBLE la realización de un ESTUDIO DE MOVILIDAD",
          "RESERVA DOTACIONAL SUPRAMUNICIPAL (art. 55.6): en sectores de suelo urbanizable de uso predominante residencial, reserva de suelo no inferior a 3 M² POR CADA 100 M² CONSTRUIDOS de uso residencial, con CONDICIÓN DE SOLAR, calificada para vivienda protegida y alojamientos dotacionales, con edificabilidad no inferior al 7 % DE LA EDIFICABILIDAD TOTAL DEL SECTOR. Esta edificabilidad NO computa para la adjudicación de aprovechamiento al ayuntamiento, ni se suma para el aprovechamiento máximo del sector, ni genera reservas dotacionales",
          "Si la parcela resultante de esa reserva tuviera superficie IGUAL O INFERIOR A 300 M², pasa a formar parte del PATRIMONIO DEL MUNICIPIO, que deberá destinarla a dotaciones públicas (art. 55.6)",
          "La superficie de equipamiento EDUCATIVO O DE SALUD se concreta en función de las necesidades de la política educativa o sanitaria foral, mediante informe PREVIO A LA APROBACIÓN PROVISIONAL del Plan General Municipal (art. 55.5)",
        ],
      },
      {
        h: "El Plan General Municipal (arts. 57-59)",
        nota:
          "La estructura en dos piezas —Estrategia y Modelo de Ocupación Territorial primero, Plan Urbanístico Municipal después— es la gran novedad del modelo navarro y explica la tramitación en dos tiempos del art. 71. Retén el reparto de escalas del art. 57.3: el Plan General establece la ordenación pormenorizada ÚNICAMENTE para el suelo urbano consolidado, y solo fija criterios generales para el urbano no consolidado y el urbanizable.",
        items: [
          "Objeto (art. 57): instrumento básico que establece la ordenación urbanística de un TÉRMINO MUNICIPAL COMPLETO mediante regulación integrada y global, definiendo la estrategia y modelo municipal de ocupación del territorio y la ORDENACIÓN ESTRUCTURANTE para todo el término",
          "REPARTO DE ESCALAS (art. 57.3): el Plan General establece la ordenación PORMENORIZADA únicamente para todo el SUELO URBANO CONSOLIDADO, y fija CRITERIOS GENERALES para la ordenación pormenorizada del suelo urbano NO consolidado y del urbanizable. En municipios MENORES DE 500 HABITANTES puede establecer la pormenorizada de todo el suelo urbano o urbanizable si así se ha establecido en la Estrategia y Modelo",
          "DOS COMPONENTES (art. 58.1): la ESTRATEGIA Y MODELO DE OCUPACIÓN TERRITORIAL, que tiene CARÁCTER PREVIO a la formulación del Plan Urbanístico Municipal, y el PLAN URBANÍSTICO MUNICIPAL, que define los aspectos propios de la ordenación y régimen del suelo",
          "Documentación de la Estrategia (art. 58.4): análisis y diagnóstico territorial —medio físico, paisaje, infraestructuras y servicios, movilidad, patrimonio, estudio demográfico, actividad económica y necesidades residenciales y dotacionales— · evaluación del planeamiento vigente y grado de cumplimiento · objetivos territoriales y ambientales · estrategias de desarrollo, modelo de crecimiento y ALTERNATIVAS de ordenación con ventajas e inconvenientes · Modelo de Ordenación del Territorio justificando su adecuación a los instrumentos territoriales · esquema de la ordenación estructurante · y conclusiones valoradas de la participación",
          "Documentación del Plan Urbanístico Municipal (art. 58.5): Memoria · incidencia sobre el territorio y afecciones ambientales · planos de información y ordenación · NORMATIVA, que incorporará un artículo señalando las determinaciones estructurantes · programa de desarrollo y ejecución · MEMORIA DE VIABILIDAD Y SOSTENIBILIDAD ECONÓMICA · sistema de INDICADORES de gestión, sostenibilidad y resultado · y RESUMEN EJECUTIVO con los ámbitos alterados y la propuesta de suspensión de licencias",
          "MUNICIPIOS DE POBLACIÓN IGUAL O INFERIOR A 3.000 HABITANTES (art. 59): misma estructura de dos componentes, pero la Estrategia consiste en una MEMORIA SIMPLIFICADA y el Plan Urbanístico Municipal reduce su documentación, sin exigirse el sistema de indicadores ni el resumen ejecutivo",
          "Objetivos del planeamiento general (art. 52): fomentar el CRECIMIENTO COMPACTO completando las tramas urbanas con prioridad sobre la extensión discontinua · eficiencia energética · MOVILIDAD SOSTENIBLE · accesibilidad, declarándose causa suficiente para cambiar la clasificación y calificación la ocupación de dominio público indispensable para ascensores y aparcamientos adaptados, sin que esa ocupación compute a efectos de edificabilidad, altura, volumen o distancias · y preservación del PAISAJE",
        ],
      },
      {
        h: "Planeamiento de desarrollo (arts. 60-65)",
        nota:
          "Cada figura tiene un límite propio que es justo lo que se pregunta. El Plan Parcial no puede tocar lo estructurante, salvo un ajuste de la delimitación del sector de hasta el 3 %. El Estudio de Detalle no puede incrementar el aprovechamiento ni alterar las condiciones de los predios colindantes, y solo cabe donde ya hay ordenación pormenorizada. Y el Plan Especial de Actuación Urbana es la figura obligada para cualquier modificación en suelo urbano (art. 77.6).",
        items: [
          "PLANES PARCIALES (art. 60): establecen en un SECTOR DE SUELO URBANIZABLE la ordenación pormenorizada, o modifican o completan la ya establecida por el Plan General. NO pueden aprobarse sin que previa o simultáneamente se haya aprobado definitivamente el Plan General Municipal",
          "Límite del Plan Parcial (art. 60.3): en ningún caso puede modificar las determinaciones ESTRUCTURANTES, SALVO la delimitación del sector por ajustes de superficie que mejoren su ordenación y ejecución y que NO SUPONGAN UNA DIFERENCIA SUPERIOR O INFERIOR AL 3 POR CIENTO del ámbito. Sí puede modificar cualquier determinación PORMENORIZADA del Plan General para el sector justificando su congruencia con la ordenación estructurante",
          "PLANES ESPECIALES (art. 61.1): desarrollan sobre CUALQUIER CLASE O CATEGORÍA DE SUELO las determinaciones estructurantes del Plan General y establecen, modifican o completan su ordenación pormenorizada, con finalidades de ordenación de SISTEMAS GENERALES, protección de ámbitos de valor natural, paisajístico o cultural, ordenación de usos en SUELO NO URBANIZABLE, y mejora de la ACCESIBILIDAD",
          "PLANES ESPECIALES DE ACTUACIÓN URBANA (art. 61.2): desarrollan sobre SUELO URBANO las determinaciones del Plan General o, justificadamente, las modifican o establecen directamente, para regular actuaciones de REHABILITACIÓN EDIFICATORIA, de DOTACIÓN, y de REFORMA O RENOVACIÓN de la urbanización",
          "Excepción del art. 61.3: cuando consistan en actuaciones de regeneración o renovación de CARÁCTER INTEGRADO, los PEAU pueden incluso regular actuaciones de NUEVA URBANIZACIÓN mediante reclasificación de suelos no urbanizables cuando resulten necesarios para dotaciones públicas e infraestructuras, con un MÁXIMO DEL 10 POR CIENTO de la superficie total del ámbito",
          "Rehabilitación, regeneración y renovación (art. 62.1): REHABILITACIÓN EDIFICATORIA — edificios, instalaciones y espacios privativos vinculados, ante insuficiencia o degradación de funcionalidad, seguridad, accesibilidad y habitabilidad · REGENERACIÓN URBANA — añade la mejora de la calidad, accesibilidad y sostenibilidad del MEDIO URBANO ante obsolescencia o vulnerabilidad de áreas urbanas o pobreza energética grave · RENOVACIÓN URBANA — añade la renovación y mejora de EQUIPAMIENTOS y demás dotaciones ante obsolescencia de barrios o conjuntos homogéneos, o deterioro que exija demolición, sustitución o realojo",
          "ESTUDIOS DE DETALLE (art. 63): establecen, modifican o reajustan alineaciones y rasantes —salvo las de elementos viarios que sean SISTEMAS GENERALES—, el tipo de obras admisibles y condiciones de las edificaciones, ordenación y composición de volúmenes y alturas, morfología y tipología, ordenación de fachadas, y determinaciones de accesibilidad",
          "Límites del Estudio de Detalle (art. 63.2): solo pueden formularse sobre ámbitos con ORDENACIÓN PORMENORIZADA ya establecida; NO pueden INCREMENTAR EL APROVECHAMIENTO tipo o medio; y EN NINGÚN CASO pueden alterar las condiciones urbanísticas de los PREDIOS COLINDANTES. No se considera incremento el aumento de superficie por obras de eficiencia energética o accesibilidad universal, ni ciertos cerramientos ligeros en edificaciones de más de treinta años bajo protección pública que no superen el 20 % de la superficie edificada, en cuyo caso los propietarios entregan a la Administración el 10 % DEL VALOR CATASTRAL de la nueva superficie",
          "CATÁLOGOS (art. 64): el Plan General o el Plan Especial pueden incluir un catálogo de edificios y elementos históricos, culturales o ambientales con medidas de protección específicas y diferenciadas. También pueden aprobarse como instrumento de desarrollo EN DOCUMENTO SEPARADO, con la iniciativa, tramitación y aprobación previstas para los Planes Especiales",
        ],
      },
      {
        h: "Tramitación, suspensión de licencias y efectos (arts. 66-83)",
        nota:
          "La tramitación del Plan General es larga pero tiene una lógica clara: Comisión de Seguimiento mixta desde el principio, Estrategia y Modelo aprobada previo CONCIERTO con el Departamento, y solo después el Plan Urbanístico Municipal, que termina con aprobación definitiva del Departamento. El régimen de suspensión de licencias del art. 70 es de aplicación inmediata en el trabajo municipal: un año la potestativa previa, dos años el tope conjunto y tres años de veda para volver a suspender por la misma finalidad.",
        items: [
          "COMISIÓN DE SEGUIMIENTO del Plan General (art. 66.4): entre 3 y 5 representantes de la Entidad Local y entre 2 y 3 del Departamento, PRESIDIDA POR UN REPRESENTANTE DEL DEPARTAMENTO. Establece y controla la agenda del proceso y dirige y supervisa sus aspectos metodológicos, documentales y de participación social. Los retrasos o paralizaciones injustificadas por inactividad municipal pueden conllevar la SUBROGACIÓN del Departamento en la elaboración del Plan",
          "Propuestas particulares de avance (art. 67.3): los particulares pueden presentar propuestas de ordenación con contenido de avance para que el Ayuntamiento se pronuncie en el plazo máximo de DOS MESES; en caso de silencio, éste se entiende POSITIVO",
          "SUSPENSIÓN DE LICENCIAS (art. 70): la Administración competente para la aprobación inicial puede acordarla ANTES de ésta para estudiar la formación o reforma del plan, publicándolo en el BON y en los diarios. El acuerdo de APROBACIÓN INICIAL determina POR SÍ SOLO la suspensión en las áreas cuyas nuevas determinaciones supongan modificación del régimen vigente",
          "PLAZOS DE LA SUSPENSIÓN (art. 70.3): la potestativa previa se extingue en todo caso en UN AÑO; si dentro de ese plazo se produce la aprobación inicial, la suspensión se mantiene pero sus efectos se extinguen definitivamente a los DOS AÑOS desde el acuerdo inicial de suspensión. Si no hubo suspensión previa, la derivada de la aprobación inicial dura un MÁXIMO DE DOS AÑOS. En cualquier caso la suspensión se extingue con la APROBACIÓN DEFINITIVA",
          "Extinguidos los efectos, NO pueden acordarse nuevas suspensiones EN EL PLAZO DE TRES AÑOS por idéntica finalidad (art. 70.4). Los peticionarios de licencias solicitadas antes de la publicación tienen derecho a ser INDEMNIZADOS del coste oficial de los proyectos y a la devolución de las tasas (art. 70.6)",
          "Tramitación del Plan General (art. 71): se redacta primero la ESTRATEGIA Y MODELO, con información pública de al menos UN MES, y el ayuntamiento la aprueba previo CONCIERTO con el Departamento, que en plazo máximo de DOS MESES la eleva a la Comisión de Ordenación del Territorio. Después se redacta el Plan Urbanístico Municipal, con aprobación inicial, información pública mínima de UN MES, informes sectoriales que se emiten en DOS MESES —transcurridos, se tienen por evacuados—, aprobación provisional en plazo máximo de SEIS MESES previa Declaración Ambiental Estratégica, y remisión al Departamento",
          "APROBACIÓN DEFINITIVA (art. 71.16-17): el titular del Departamento puede otorgarla, otorgarla incorporando determinaciones —que el ayuntamiento debe recoger en TEXTO REFUNDIDO en un máximo de TRES MESES— o denegarla si el plan contiene determinaciones manifiestamente contrarias. Notifica en el plazo de TRES MESES desde el ingreso del expediente completo; transcurrido sin notificación, se entiende APROBADO el Plan General Municipal",
          "Tramitación de Planes Parciales y Especiales (art. 72): aprobación inicial por el ayuntamiento e información pública mínima de UN MES. En planes de iniciativa particular, el plazo para acordar o denegar la aprobación inicial es de DOS MESES desde la presentación completa, entendiéndose aprobado inicialmente por silencio. El plazo máximo para la APROBACIÓN DEFINITIVA es de DOS MESES desde el fin de la información pública, con silencio igualmente estimatorio. El plan aprobado se remite al Departamento en un máximo de DIEZ DÍAS",
          "ESTUDIOS DE DETALLE (art. 74): se tramitan como los anteriores salvo que pueden iniciarse directamente por aprobación inicial, el período de información pública es de VEINTE DÍAS y el plazo para acordar o denegar la aprobación inicial es de DOS MESES",
          "REVISIÓN vs MODIFICACIÓN (art. 76): la REVISIÓN es la adopción de nuevos criterios sobre la estructura general y orgánica del territorio por elección de un modelo distinto en su mayoría, circunstancias sobrevenidas demográficas o económicas, o AGOTAMIENTO DE SU CAPACIDAD, y sustituye el instrumento revisado. Todo lo demás es MODIFICACIÓN, aun cuando lleve consigo cambios en la CLASIFICACIÓN O CALIFICACIÓN del suelo",
          "Regla del art. 77.6: la modificación de determinaciones urbanísticas DE CUALQUIER TIPO relativas al SUELO URBANO se tramita mediante un PLAN ESPECIAL DE ACTUACIÓN URBANA. Y las modificaciones estructurantes de iniciativa particular se entienden DESESTIMADAS si transcurren TRES MESES sin resolución expresa, pudiendo el promotor solicitar la subrogación del Departamento (art. 78.2)",
          "REGISTRO DE PLANEAMIENTO (art. 79.3): dependiente del Departamento, centraliza los instrumentos de ordenación territorial y planes urbanísticos aprobados definitivamente por la Comunidad Foral y por los Municipios. Es PÚBLICO, y la publicidad se hace efectiva por certificación, nota informativa o copia, sin que su importe exceda del coste administrativo",
          "PROHIBICIÓN DE DISPENSAS (art. 80): son NULAS DE PLENO DERECHO las reservas de dispensación contenidas en los Planes y las que se concedan con independencia de ellos",
          "FUERA DE ORDENACIÓN (art. 82): el planeamiento debe relacionar expresamente los edificios disconformes cuya demolición esté prevista. Si uno resulta disconforme y no aparece en la relación, el Ayuntamiento resuelve expresamente de oficio o a instancia de parte, previa audiencia, declarándolo fuera de ordenación o modificando el planeamiento. Salvo otro régimen o que la expropiación o demolición no esté programada en DIEZ AÑOS, no caben obras de consolidación, aumento de volumen, modernización o incremento del valor de expropiación, pero SÍ las reparaciones que exijan la seguridad e higiene y las obras necesarias y parciales de consolidación",
        ],
      },
    ],
    claves: [
      "Participación: mínimo 20 DÍAS de exposición pública para cualquier instrumento; proceso consultivo PREVIO A LA APROBACIÓN INICIAL en POT, PGM, Parciales, Especiales, PEAU y modificaciones con nueva urbanización",
      "Información urbanística: se resuelve en DOS MESES y la denegación motivada AGOTA la vía administrativa",
      "Cláusula residual: la actividad urbanística corresponde a los MUNICIPIOS salvo atribución expresa a otra Administración",
      "Comisión de Ordenación del Territorio: consultiva y de coordinación, con CUATRO representantes de los Ayuntamientos (FNMC)",
      "Consejo Social de Política Territorial: informes PRECEPTIVOS y NO VINCULANTES",
      "Determinaciones territoriales: vinculantes SOBRE EL TERRITORIO (aplicación directa, prevalecen sobre el plan local) · vinculantes PARA LA PLANIFICACIÓN · orientativas",
      "Estrategia Territorial: ORIENTATIVA y la aprueba el PARLAMENTO · POT: VINCULANTE salvo declaración expresa en contra y lo aprueba el GOBIERNO por decreto foral",
      "POT: vigencia indefinida; la modificación no necesita fase de AVANCE; revisión/modificación a instancia de UN TERCIO de las entidades locales",
      "PSIS: cesión del 10 % del aprovechamiento lucrativo a los Ayuntamientos · garantía del 6 % en iniciativa particular · silencio NEGATIVO a los 4 MESES · extinción si pasan 2 AÑOS sin iniciar",
      "PSIS declarados de interés general: EXENTOS de licencia municipal, pero no de las obligaciones tributarias",
      "ESTRUCTURANTE: clases de suelo, sectores, sistemas generales, edificabilidad y usos globales del urbanizable, protección del no urbanizable, patrimonio municipal de suelo",
      "PORMENORIZADA: alineaciones y rasantes, condiciones de parcela y edificación, usos pormenorizados, sistemas locales, fuera de ordenación, unidades de ejecución y sistemas de actuación, plazos, catálogo, áreas de reparto",
      "Vivienda protegida: 50 % Comarca de Pamplona y municipios ≥ 10.000 hab · 35 % entre 2.000 y 10.000 · 20 % por debajo de 2.000",
      "Dispensa por número de viviendas: ≤ 3 (tramo 50 %) · ≤ 10 (tramo 35 %) · ≤ 25 (tramo 20 %)",
      "Al menos el 60 % de las protegidas deben ser VPO (el 100 % si son 3 o menos); con 10 o más VPO, el 30 % en alquiler",
      "Espacios libres: 5 m²/habitante o 15 m²/100 m² construidos como SISTEMA GENERAL · 20 m²/100 m² y mínimo 10 % del sector como DOTACIÓN LOCAL",
      "Dotaciones locales en urbanizable residencial: 50 m² por cada 115 m² construidos · Polígonos industriales: 10 % a grandes zonas verdes",
      "Aparcamiento: 2 plazas/100 m² en colectiva o 3 plazas/vivienda en unifamiliar; 0,5 plazas por vivienda en espacio público",
      "Reserva dotacional supramunicipal: 3 m²/100 m² construidos, con edificabilidad ≥ 7 % del sector; si la parcela ≤ 300 m², pasa al patrimonio municipal",
      "El PGM ordena pormenorizadamente SOLO el urbano consolidado; criterios generales para el resto",
      "El Plan Parcial no toca lo estructurante, salvo ajuste del sector de hasta el 3 %",
      "El Estudio de Detalle no incrementa el aprovechamiento ni altera las condiciones de los PREDIOS COLINDANTES",
      "Cualquier modificación en SUELO URBANO se tramita mediante PLAN ESPECIAL DE ACTUACIÓN URBANA (art. 77.6)",
      "Suspensión de licencias: 1 AÑO la previa · tope conjunto de 2 AÑOS · veda de 3 AÑOS para repetir por idéntica finalidad",
      "Aprobación definitiva del PGM: 3 MESES para notificar; el silencio es POSITIVO. Texto refundido en 3 MESES si se incorporan determinaciones",
      "Fuera de ordenación: caben reparaciones de seguridad e higiene y consolidaciones parciales, no aumento de volumen ni modernización",
    ],
  },
};
