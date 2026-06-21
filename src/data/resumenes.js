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
        h: "Tipos de discriminación (LO 3/2007 arts. 6-9)",
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
        items: [
          "Acciones positivas (art. 11): medidas específicas en favor de mujeres para corregir desigualdad de hecho; poderes públicos Y también personas privadas; razonables y proporcionales; solo mientras subsistan las desigualdades",
          "Carga de la prueba (art. 13): si la actora alega discriminación → la DEMANDADA debe probar ausencia de discriminación y proporcionalidad; NO aplica en procesos PENALES",
        ],
      },
      {
        h: "LF 17/2019 — datos y plazos clave",
        items: [
          "Representación equilibrada (art. 4.1.f): ningún sexo >60% ni <40%, tendiendo al 50%",
          "Plan Estratégico Igualdad (art. 14): vigencia 6 años; diseñado por Instituto Navarro para la Igualdad; aprobado por GOBIERNO DE NAVARRA previo informe del Consejo Navarro de Igualdad; remitido al PARLAMENTO DE NAVARRA para debate y aprobación final",
          "Informe de impacto de género (art. 22.2): obligatorio en anteproyectos de ley foral, disposiciones normativas generales y planes del Gobierno de Navarra",
          "Informe de impacto de género en ordenanzas locales (art. 22.4): también obligatorio, sin excepción por tamaño",
          "OPE (art. 24.7): informe de impacto de género + 2% de plazas para víctimas de violencia de género (si superan proceso selectivo y acreditan condición)",
          "Ayudas públicas (art. 18.1): cláusulas de igualdad en bases reguladoras; art. 18.2: prohibición a entidades sancionadas (declaración responsable)",
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
        items: [
          "Sujetos plenos (art. 2): Administración CFN y organismos, entidades locales, UPNA, consorcios, sociedades/fundaciones públicas con participación >50%",
          "Otros sujetos obligados solo en transparencia (art. 3): partidos, sindicatos, organizaciones empresariales; entidades privadas con subvenciones >20.000 € o ≥20% de ingresos y al menos 5.000 €; centros concertados; prestadores de servicios públicos",
        ],
      },
      {
        h: "Publicidad activa — obligaciones de información (arts. 11-18)",
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
        items: [
          "Titular: cualquier persona física o jurídica; no es necesario motivar ni acreditar interés alguno (art. 30.2)",
          "Limitaciones tasadas (art. 31.1): seguridad pública, secreto en toma de decisiones, investigación penal/administrativa, tutela judicial, vigilancia e inspección, intereses económicos y comerciales, secreto profesional/PI, medio ambiente, información protegida por ley",
          "Datos especiales/penales: acceso solo con consentimiento expreso y escrito del afectado o norma con rango de ley (art. 32.1)",
          "Acceso parcial obligatorio cuando solo parte de la información está limitada (art. 33)",
        ],
      },
      {
        h: "Procedimiento de acceso (arts. 34-44)",
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
        items: [
          "Carácter: potestativo (sustitutivo de recursos administrativos)",
          "Plazo interposición: 1 mes desde notificación, o en cualquier momento desde el silencio",
          "Plazo resolución CTN: 3 meses; silencio = desestimación",
          "Actos CTN: directamente ejecutivos y obligatorios para los sujetos destinatarios; impugnables en contencioso-administrativo",
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
    ],
  },

  G8: {
    intro:
      "El DFL 251/1993 aprueba el Estatuto del Personal al Servicio de las Administraciones Públicas de Navarra. Regula el acceso a la función pública, la carrera administrativa (grados), las situaciones administrativas, el régimen retributivo y el régimen disciplinario del personal funcionario, eventual y contratado.",
    bloques: [
      {
        h: "Grupos/Niveles y titulación (art. 12)",
        items: [
          "Nivel A: Licenciado/Ingeniero/Arquitecto",
          "Nivel B: Diplomado/IT/AT/FP3",
          "Nivel C: Bachillerato/FP2",
          "Nivel D: Graduado Escolar/FP1",
          "Nivel E: Certificado de Escolaridad",
        ],
      },
      {
        h: "Acceso y turno restringido (arts. 15-16)",
        items: [
          "Turno restringido: mínimo 5 años de antigüedad como funcionario de carrera (art. 15.1.b); para niveles C/D/E sin titulación: 8 años (art. 15.2)",
          "Ascenso de grado: período total máx. 6 años 7 meses; mínimo 2 años en grado anterior; máximo 8 años en mismo grado (salvo grado 7) (art. 16)",
        ],
      },
      {
        h: "Situaciones administrativas — excedencias (arts. 26-28 bis)",
        items: [
          "Excedencia voluntaria: no puede pedir reingreso hasta cumplir 1 año; no devenga retribuciones ni computa antigüedad; conserva nivel/grado/antigüedad (art. 26)",
          "Excedencia especial (hijos/familiares): máximo 3 años por sujeto causante (art. 27.1)",
          "Excedencia violencia de género: sin tiempo mínimo previo; reserva de puesto 6 meses (prorrogable hasta 18 en períodos de 3); retribuciones íntegras 2 primeros meses (art. 28 bis)",
        ],
      },
      {
        h: "Retribuciones (arts. 40-43)",
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
        items: [
          "Personal eventual: nombrado y cesado libremente por el DF y Corporaciones Locales; cesa al cesar quien lo nombró (art. 87)",
          "Contrato por exceso/acumulación de tareas: máximo 9 meses; sin prórroga ni nuevo contrato para la misma necesidad (art. 88.1.d)",
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
        h: "Plazos clave del procedimiento (arts. 67-87)",
        items: [
          "Prescripción responsabilidad patrimonial: 1 año desde el hecho o manifestación del efecto lesivo (art. 67.1)",
          "Subsanación de solicitudes: 10 días; si no subsana → tenido por desistido (art. 68.1)",
          "Período de prueba ordinario: 10-30 días; extraordinario: máx. 10 días adicionales (art. 77.2)",
          "Audiencia al interesado: 10-15 días (art. 82.2)",
          "Información pública: mínimo 20 días (art. 83.2)",
          "Reducción 20% sanción: condicionada al desistimiento o renuncia de recurso en vía administrativa (art. 85.3)",
          "Actuaciones complementarias: alegaciones en 7 días; completadas en máx. 15 días (art. 87)",
        ],
      },
      {
        h: "Caducidad y ejecución forzosa (arts. 95-100)",
        items: [
          "Caducidad por paralización: paralización 3 meses por causa del interesado → advertencia → archivo (art. 95.1)",
          "Medios de ejecución forzosa (art. 100.1): apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas",
        ],
      },
      {
        h: "Revisión de oficio (arts. 106-107)",
        items: [
          "Revisión nulidad de pleno derecho: requiere dictamen favorable del Consejo de Estado; si iniciada de oficio y pasan 6 meses → caducidad (art. 106.1)",
          "Declaración de lesividad: no puede adoptarse tras 4 años desde el acto; caducidad del procedimiento si no se resuelve en 6 meses (art. 107.2)",
        ],
      },
      {
        h: "Recursos administrativos (arts. 112-126)",
        items: [
          "Alzada: interponer en 1 mes (acto expreso) o 3 meses (presunto); resolver en 3 meses; silencio = desestimación (art. 122)",
          "Reposición: 1 mes para interponer (expreso); 1 mes para resolver; silencio = desestimación",
          "Revisión extraordinaria: motivo a) → 4 años; motivos b)-d) → 3 meses desde conocimiento (art. 125.2)",
        ],
      },
      {
        h: "TAN — LF 6/1990 arts. 332-340",
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
      "TAN: potestativo, gratuito, vecinos legitimados, no suspende ejecución, 6 meses para resolver",
    ],
  },

  G6: {
    intro:
      "La Ley 39/2015, de 1 de octubre, de Procedimiento Administrativo Común de las Administraciones Públicas (Títulos Preliminar I-III, arts. 1-52) establece los principios generales, el régimen de los interesados, la actividad de las AAPP, y la teoría de los actos administrativos: validez, eficacia, notificación, nulidad y anulabilidad.",
    bloques: [
      {
        h: "Relación electrónica obligatoria (art. 14)",
        items: [
          "Obligados exclusivamente por medios electrónicos (art. 14.2): personas jurídicas, entidades sin personalidad, profesionales colegiados en ejercicio, representantes de los anteriores, empleados públicos por razón de su cargo",
          "Las personas físicas pueden elegir canal, salvo que una norma reglamentaria lo imponga",
        ],
      },
      {
        h: "Plazos y cómputo (arts. 21, 30-33)",
        items: [
          "Plazo supletorio para resolver y notificar: 3 meses (art. 21.3)",
          "Plazos por días = hábiles; último día inhábil → primer día hábil siguiente (art. 30.2/30.5)",
          "Registro electrónico en día inhábil → primera hora del primer día hábil siguiente (art. 31.2.b)",
          "Urgencia: reducción a la mitad de TODOS los plazos, salvo presentación de solicitudes y recursos (art. 33.1)",
        ],
      },
      {
        h: "Silencio administrativo (arts. 24-25)",
        items: [
          "Regla general en procedimientos a solicitud del interesado: silencio positivo (art. 24.1)",
          "Silencio desestimatorio (art. 24.1): derecho de petición, dominio/servicio público, actividades que puedan dañar el medio ambiente, responsabilidad patrimonial",
          "Procedimientos de oficio desfavorables o sancionadores: vencimiento del plazo → caducidad (art. 25.1.b)",
        ],
      },
      {
        h: "Actos administrativos: motivación, eficacia y convalidación (arts. 35, 39, 52)",
        items: [
          "Motivación obligatoria (art. 35.1): lista taxativa (letras a-i) — limitación de derechos, resolución de recursos, separación de criterio anterior, suspensión, etc.",
          "Retroactividad: solo en sustitución de actos anulados o efectos favorables si el supuesto de hecho existía y no lesiona terceros (art. 39.3)",
          "Convalidación: solo actos anulables; efectos desde la fecha de la convalidación, no retroactivos (art. 52)",
        ],
      },
      {
        h: "Notificación (arts. 40-44)",
        items: [
          "Plazo para cursar: 10 días desde que el acto es dictado (art. 40.2)",
          "Contenido mínimo: texto íntegro, si pone fin a la vía administrativa, recursos procedentes, órgano y plazo (art. 40.2)",
          "Notificación electrónica rechazada: 10 días naturales sin acceder (art. 43.2)",
          "Notificación infructuosa → BOE obligatorio; boletín autonómico/provincial y tablón: facultativo (art. 44)",
        ],
      },
      {
        h: "Invalidez: nulidad y anulabilidad (arts. 47-48)",
        items: [
          "Nulidad de pleno derecho (art. 47.1): 7 causas tasadas (letras a-g), incluyendo prescindencia total y absoluta del procedimiento (letra e)",
          "Anulabilidad: cualquier infracción del OJ, incluida la de forma (art. 48.1)",
          "Defecto de forma → anulabilidad solo si impide alcanzar el fin del acto O genera indefensión (art. 48.2)",
        ],
      },
    ],
    claves: [
      "Obligados electrónicos: PJ, entidades sin personalidad, colegiados en ejercicio, representantes, empleados públicos",
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
        items: [
          "Art. 2.2: el sector público institucional comprende: a) organismos públicos y entidades de derecho público; b) entidades de derecho privado vinculadas/dependientes; c) universidades públicas.",
          "Art. 2.3: son Administraciones Públicas la AGE, las CCAA, las EE.LL. y los organismos/entidades del art. 2.2.a. Las del 2.2.b (privadas) y 2.2.c (universidades) NO son AAPP.",
          "Art. 3.1: las AAPP actúan conforme a eficacia, jerarquía, descentralización, desconcentración y coordinación.",
          "Art. 3.1 letras a-k: 11 principios adicionales, entre ellos servicio efectivo, objetividad, buena fe, confianza legítima, eficiencia, cooperación.",
        ],
      },
      {
        h: "Órganos administrativos (art. 5)",
        items: [
          "Art. 5.1: son órganos las unidades con funciones que tengan efectos jurídicos frente a terceros O cuya actuación sea preceptiva.",
          "Art. 5.3: crear un órgano exige: a) integración y dependencia jerárquica; b) funciones y competencias; c) dotación de créditos necesarios.",
          "Art. 5.4: no cabe crear órganos que dupliquen los existentes sin suprimir o restringir la competencia del anterior.",
        ],
      },
      {
        h: "Abstención y recusación (arts. 23-24)",
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
        items: [
          "Art. 32.1: responsabilidad por funcionamiento normal O anormal de los servicios públicos; excluida la fuerza mayor.",
          "Art. 32.1 (párrafo 2): la anulación del acto NO presupone por sí misma derecho a indemnización.",
          "Art. 32.2: el daño debe ser efectivo, evaluable económicamente e individualizado.",
          "Art. 33.1: actuación conjunta → responsabilidad solidaria frente al particular.",
          "Art. 33.2: concurrencia sin fórmula conjunta → criterios de competencia, interés público e intensidad; solidaria si no es posible determinar la parte.",
          "Art. 34.3: cuantía calculada con referencia al día de la lesión + actualización según el Índice de Garantía de la Competitividad.",
          "Art. 34.4: la indemnización puede sustituirse por compensación en especie o pagos periódicos con acuerdo del interesado.",
          "Art. 36.1: el particular exige siempre la indemnización a la Administración, nunca directamente al funcionario.",
          "Art. 36.2: la Administración exige de oficio la responsabilidad al personal por dolo o culpa/negligencia graves.",
          "Art. 37: la vía penal NO suspende el procedimiento de responsabilidad patrimonial, salvo que la determinación de hechos en sede penal sea necesaria.",
        ],
      },
      {
        h: "Relaciones interadministrativas (arts. 140-158)",
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
    ],
  },

  G4: {
    intro:
      "La Ley Foral 6/1990, de 2 de julio, de la Administración Local de Navarra regula la organización y el régimen de los entes locales navarros. Entran en el temario el Título Preliminar (arts. 1-5), las secciones 1.ª-4.ª y 8.ª del Cap. I del Tít. I (municipios, arts. 6-12 y 29-32) y la Sección 4.ª del Cap. II (mancomunidades, arts. 47-53).",
    bloques: [
      {
        h: "Título Preliminar — principios y entes locales (arts. 1-5)",
        items: [
          "Art. 1: principios de la Administración Local de Navarra: autonomía, participación, desconcentración, eficacia y coordinación.",
          "Art. 2: los municipios son las entidades locales básicas de la organización territorial de Navarra.",
          "Art. 3: otros entes locales: a) comarcas; b) concejos; c) corporaciones de carácter tradicional (Bardenas Reales, Aezkoa, Roncal, Salazar, Aralar…); d) mancomunidades de ayuntamientos; e) mancomunidades de planificación general.",
          "Art. 4: en materias de administración local que corresponden a Navarra → Ley Foral; en las restantes → legislación general del Estado.",
        ],
      },
      {
        h: "El municipio — organización, población y término (arts. 6-12)",
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
        items: [
          "Art. 29: los municipios tienen las competencias que la legislación general reconoce a todos los del Estado + las que las leyes forales atribuyan.",
          "Art. 30.1: el municipio puede delegar en concejos obras o servicios de su competencia. NUNCA son delegables las competencias URBANÍSTICAS.",
          "Art. 31: servicios mínimos obligatorios; la dispensa la otorga el Gobierno de Navarra, que determina la entidad que asumirá el servicio (puede ser la comarca).",
          "Art. 32.1: Concejo Abierto obligatorio en municipios con < 100 habitantes.",
          "Art. 32.2: Concejo Abierto voluntario: petición de la mayoría de vecinos + decisión del ayuntamiento por 2/3 de sus miembros + aprobación del Gobierno de Navarra.",
          "Art. 32.3: en Concejo Abierto, gobierno = Alcalde + Asamblea vecinal (todos los electores). Art. 32.4.b: el Alcalde puede designar una Comisión de 2 a 4 vocales.",
        ],
      },
      {
        h: "Mancomunidades (arts. 47-53)",
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
        ],
      },
    ],
    claves: [
      "Principios (art. 1): autonomía, participación, desconcentración, eficacia, coordinación",
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
      "El Título X LRBRL (introducido por la Ley 57/2003) establece el régimen de organización de los municipios de gran población. El Ayuntamiento de Pamplona se rige por este régimen en virtud del art. 9 bis de la Ley Foral 6/1990. El Decreto de Organización Municipal desarrolla la estructura interna de la Administración ejecutiva.",
    bloques: [
      {
        h: "El Pleno (arts. 122-123 LRBRL)",
        items: [
          "Art. 122.1: el Pleno = Alcalde + Concejales; órgano de máxima representación política.",
          "Art. 122.2: el Pleno es convocado y presidido por el Alcalde; éste decide los empates con voto de calidad. Puede delegar la convocatoria y presidencia en un concejal.",
          "Art. 122.3: comisiones formadas por miembros designados por los grupos políticos en proporción al número de concejales.",
          "Art. 122.5: el Secretario general del Pleno (habilitado nacional) presta asesoramiento legal. Es preceptivo: si lo pide el Presidente o 1/3 de miembros (con antelación); en asuntos con mayoría especial; para control/fiscalización si lo pide el Presidente o 1/4 de concejales.",
          "Art. 123.2: mayoría ABSOLUTA del número legal para: párrafos c), e), f), j) y o) y planeamiento general urbanístico. Demás acuerdos: mayoría SIMPLE.",
          "Art. 123.3: solo son delegables a las comisiones los párrafos d), k), m) y ñ).",
        ],
      },
      {
        h: "El Alcalde y Tenientes de Alcalde (arts. 124-125 LRBRL)",
        items: [
          "Art. 124.1-3: máxima representación del municipio; responsable ante el Pleno; tratamiento de Excelencia.",
          "Art. 124.5: NO delegables: b) dirección política, e) nombramiento de Tenientes de Alcalde, h) medidas de urgencia, j) Jefatura de la Policía Municipal; y tampoco: convocar/presidir la JGL, decidir empates, dictar bandos. Los párrafos c) y k) son delegables solo en la JGL.",
          "Art. 125.1: Tenientes de Alcalde nombrados por el Alcalde entre concejales miembros de la JGL; sustituyen al Alcalde por orden de nombramiento en vacante, ausencia o enfermedad.",
          "Art. 125.2: tratamiento de los Tenientes de Alcalde: Ilustrísima.",
        ],
      },
      {
        h: "Junta de Gobierno Local (arts. 126-127 LRBRL)",
        items: [
          "Art. 126.2: miembros nombrados y cesados libremente por el Alcalde; número máximo = 1/3 del número legal del Pleno, además del Alcalde.",
          "Art. 126.3: la JGL responde solidariamente ante el Pleno.",
          "Art. 126.4: Secretaría de la JGL: concejal miembro designado por el Alcalde.",
          "Art. 126.5: deliberaciones SECRETAS; concejales no miembros y titulares de órganos directivos solo pueden asistir si son convocados expresamente por el Alcalde.",
          "Art. 127.1.e: la concesión de licencias corresponde a la JGL, salvo atribución expresa por ley sectorial a otro órgano.",
          "Art. 127.2: la JGL puede delegar en Tenientes de Alcalde u otros concejales los párrafos e), g), h) (con excepciones) y l).",
        ],
      },
      {
        h: "Otros órganos (arts. 128-132 LRBRL)",
        items: [
          "Art. 128.3: la presidencia del distrito corresponde en todo caso a un concejal.",
          "Art. 130.1.A: órganos SUPERIORES = Alcalde + miembros de la JGL.",
          "Art. 130.1.B: órganos DIRECTIVOS = coordinadores generales, directores generales, titular del órgano de apoyo a la JGL, titular de la asesoría jurídica, Secretario general del Pleno, Interventor general, titular del órgano de gestión tributaria.",
          "Art. 130.3: coordinadores y directores generales deben ser funcionarios de carrera subgrupo A1.",
          "Art. 131: Consejo Social de la Ciudad — integrado por representantes de organizaciones económicas, sociales, profesionales y de vecinos más representativas; emite informes sobre desarrollo económico, planificación estratégica y grandes proyectos urbanos.",
          "Art. 132: Comisión especial de Sugerencias y Reclamaciones — creada por el Pleno; formada por representantes de todos los grupos en proporción; informe anual al Pleno + informes extraordinarios si la gravedad o urgencia lo aconsejan.",
        ],
      },
      {
        h: "Decreto de Organización Municipal de Pamplona",
        items: [
          "Estructura: 11 grandes áreas de gobierno. Dependen directamente del Alcalde: Área de Alcaldía y Área de Igualdad.",
          "Área de Transparencia, Innovación y Política Lingüística: ANIMSA adscrita.",
          "Área de Ciudad Habitable y Vivienda: Gerencia de Urbanismo + Pamplona Centro Histórico adscritos.",
          "Área de Cultura y Educación: OA Escuelas Infantiles + Fundación Teatro Gayarre adscritos.",
          "Área de Economía Local Sostenible: integra los órganos de gestión económico-financiera, presupuestaria e Intervención; Mercairuña y Comiruña adscritas.",
          "Art. 2 Decreto: todas las áreas dispondrán de, al menos, una dirección y una secretaría técnica.",
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
      "Consejo Social: representantes de organizaciones económicas, sociales, profesionales y de vecinos — art. 131",
      "Comisión Sugerencias: informe anual al Pleno + informes extraordinarios posibles — art. 132.3",
      "ANIMSA → Área de Transparencia; Gerencia Urbanismo → Área Ciudad Habitable — Decreto Pamplona",
    ],
  },
  G2: {
    intro:
      "La LORAFNA (LO 13/1982, de 10 de agosto, de Reintegración y Amejoramiento del Régimen Foral de Navarra) no es un Estatuto de Autonomía ordinario: parte del reconocimiento constitucional de los derechos históricos y los «amejorar» democráticamente. Navarra es una Comunidad Foral —denominación propia— con instituciones, régimen tributario y competencias singulares.",
    bloques: [
      {
        h: "Título Preliminar (arts. 1-9) — bases",
        items: [
          "Art. 1: Navarra es una Comunidad Foral con régimen, autonomía e instituciones propias, indivisible, integrada en la Nación española.",
          "Art. 9: castellano, lengua oficial; vascuence, cooficial en las zonas vascoparlantes en los términos que establezca una ley foral.",
        ],
      },
      {
        h: "Instituciones forales (arts. 10-38)",
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
        h: "Competencias (arts. 39-67)",
        items: [
          "Art. 40: competencias exclusivas → potestad legislativa, reglamentaria, administrativa e inspectora; Derecho navarro prevalente; Derecho estatal supletorio.",
          "Art. 44: competencias exclusivas (urbanismo, obras públicas, cultura, patrimonio, turismo, asistencia social, cooperativas, etc.).",
          "Art. 45: régimen tributario propio mediante el Convenio Económico con el Estado.",
          "Art. 47: competencia plena en enseñanza en toda su extensión (salvo títulos académicos y alta inspección estatal).",
          "Art. 48: competencia exclusiva en Derecho Civil Foral.",
        ],
      },
      {
        h: "Poder Judicial (arts. 59-67)",
        items: [
          "Art. 59: el Tribunal Superior de Justicia de Navarra culmina la organización judicial en el ámbito territorial navarro.",
          "Art. 61: casación en Derecho Civil Foral navarro → TSJ; lo contencioso-administrativo foral → también el TSJ.",
        ],
      },
      {
        h: "Relaciones con el Estado y reforma (arts. 68-71)",
        items: [
          "Art. 69: Junta de Cooperación = instrumento ordinario de relaciones interadministrativas; igual número de representantes de cada parte.",
          "Art. 70: acuerdos de cooperación con el País Vasco u otras CCAA limítrofes requieren autorización de las Cortes Generales.",
          "Art. 71: el amejoramiento es inmodificable unilateralmente. Reforma: iniciativa de la Diputación Foral o del Gobierno → acuerdo común → aprobación del Parlamento navarro y de las Cortes Generales.",
        ],
      },
    ],
    claves: [
      "Navarra: Comunidad Foral (no Comunidad Autónoma ordinaria) — art. 1",
      "Lengua: castellano oficial; vascuence cooficial en zonas vascoparlantes por ley foral — art. 9",
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
      "La CE de 1978 consta de Preámbulo, Título Preliminar (arts. 1-9), 10 Títulos (169 artículos), 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final. Para este tema entran: Título Preliminar, Título I (derechos y deberes) y del Título VIII los Capítulos I y II.",
    bloques: [
      {
        h: "Título Preliminar (arts. 1-9)",
        items: [
          "Art. 1: Estado social y democrático de Derecho. Valores superiores: libertad, justicia, igualdad y pluralismo político. Soberanía en el pueblo español. Forma política: Monarquía parlamentaria.",
          "Art. 2: unidad de la Nación + derecho a la autonomía de nacionalidades y regiones + solidaridad.",
          "Art. 3: castellano lengua oficial (deber de conocerla, derecho a usarla); demás lenguas cooficiales según Estatutos.",
          "Art. 5: la capital del Estado es la villa de Madrid.",
          "Art. 9.3 (clave): garantiza legalidad, jerarquía normativa, publicidad de las normas, irretroactividad de lo sancionador no favorable, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad de los poderes públicos.",
        ],
      },
      {
        h: "Título I — estructura (arts. 10-55)",
        items: [
          "Art. 10: dignidad de la persona como fundamento del orden político.",
          "Capítulo I (arts. 11-13): españoles y extranjeros. Mayoría de edad a los 18 (art. 12).",
          "Capítulo II — Art. 14: igualdad ante la ley.",
          "Cap. II Sección 1ª (arts. 15-29): derechos fundamentales y libertades públicas.",
          "Cap. II Sección 2ª (arts. 30-38): derechos y deberes de los ciudadanos (aquí: propiedad art. 33, fundación art. 34, deber de trabajar art. 35).",
          "Capítulo III (arts. 39-52): principios rectores de la política social y económica (vivienda art. 47, medio ambiente art. 45, patrimonio art. 46).",
          "Capítulo IV (arts. 53-54): garantías. Capítulo V (art. 55): suspensión de derechos.",
        ],
      },
      {
        h: "Niveles de protección (muy preguntado)",
        items: [
          "Art. 14 + Sección 1ª + objeción de conciencia (art. 30): máxima protección → reserva de ley orgánica, contenido esencial, procedimiento preferente y sumario, y recurso de amparo ante el TC (art. 53.2).",
          "Resto del Cap. II (Sección 2ª): vinculan a los poderes públicos, regulación por ley que respete el contenido esencial (art. 53.1), pero NO amparo.",
          "Cap. III (principios rectores): informan la legislación y la práctica; solo alegables ante la jurisdicción ordinaria conforme a las leyes que los desarrollen (art. 53.3).",
        ],
      },
      {
        h: "Datos sueltos que caen",
        items: [
          "Art. 15: abolida la pena de muerte salvo leyes penales militares en tiempo de guerra.",
          "Art. 17.2: detención preventiva máx. 72 horas. Art. 17.4: habeas corpus.",
          "Art. 25.3: la Administración civil no puede imponer sanciones que impliquen privación de libertad.",
          "Art. 54: Defensor del Pueblo, alto comisionado de las Cortes Generales (ley orgánica).",
          "Art. 55.1: en estado de excepción se exceptúa de suspensión el art. 17.3. Del art. 18 solo se suspenden los apartados 2 y 3 (no el honor, 18.1).",
        ],
      },
      {
        h: "Título VIII — Caps. I y II (organización territorial y local)",
        items: [
          "Art. 137: el Estado se organiza en municipios, provincias y CCAA; todas con autonomía para sus intereses.",
          "Art. 140: autonomía de los municipios, personalidad jurídica plena. Concejales por sufragio universal; Alcaldes elegidos por los Concejales o por los vecinos; ley regula el concejo abierto.",
          "Art. 141: la provincia es entidad local; alteración de límites por ley orgánica de las Cortes Generales; gobierno por Diputaciones; en archipiélagos, Cabildos o Consejos.",
          "Art. 142: las Haciendas locales se nutren de tributos propios y de participación en los del Estado y las CCAA.",
        ],
      },
    ],
    claves: [
      "Valores superiores (1.1): libertad, justicia, igualdad, pluralismo político",
      "Forma política (1.3): Monarquía parlamentaria",
      "Detención: 72 horas (17.2)",
      "Mayoría de edad: 18 (art. 12)",
      "Amparo: art. 14 + Sección 1ª + art. 30",
      "Alteración límites provinciales: ley orgánica de Cortes Generales (141)",
      "Sección 1ª = arts. 15-29 · Sección 2ª = arts. 30-38 · Principios rectores = 39-52",
    ],
  },

  G13: {
    intro:
      "El régimen de bienes de las entidades locales en Navarra se regula por la LF 6/1990 (Título IV, Cap. I, arts. 97-138) y el DF 280/1990 (Reglamento de Bienes: Título I, caps. I y II, y Título I, cap. V, sección 1ª). Las preguntas de examen se concentran en plazos, mayorías y competencias órgano-Presidente/Pleno.",
    bloques: [
      {
        h: "Clasificación y régimen (arts. 97-100 LF / arts. 1-8 Reg.)",
        items: [
          "Tres clases: dominio público (uso o servicio público), comunales (aprovechamiento vecinos) y patrimoniales",
          "Bienes comunales: considerados dominio público a todos los efectos (art. 99.2 LF / art. 5 Reg.)",
          "Dominio público y comunales: inalienables + imprescriptibles + inembargables + no sujetos a tributo (art. 100 LF / art. 6 Reg.)",
          "Parcelas sobrantes y efectos no utilizables → bienes patrimoniales (art. 102.1 LF / art. 10 Reg.)",
        ],
      },
      {
        h: "Calificación y alteración (arts. 101-104 LF / arts. 9-14 Reg.)",
        items: [
          "Alteración EXPRESA: expediente + info pública 1 mes + Pleno; si dominio público → mayoría absoluta (art. 103.1 LF)",
          "Alteración AUTOMÁTICA sin expediente (art. 103.3 LF / art. 13 Reg.): (a) aprobación definitiva planes urbanísticos, (b) adscripción patrimonial >25 años a uso/servicio público o comunal, (c) cesión obligatoria para uso público",
          "Adscripción a organismo autónomo: Pleno (puede delegar en Presidente si no requiere afectación previa) — art. 104 LF",
          "Bienes adscritos: conservan calificación original; el organismo solo tiene facultades de conservación y uso (art. 104.2 LF)",
        ],
      },
      {
        h: "Adquisición (arts. 105-109 LF)",
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
};
