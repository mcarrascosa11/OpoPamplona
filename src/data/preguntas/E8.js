// Banco de preguntas del tema E8. Formato y reglas: cabecera de src/data/preguntas.js.
export default [
  // ---------- E8 · CTE DB-HE, AHORRO DE ENERGÍA (Introducción; HE 0, HE 1, HE 3, HE 4, HE 5 y HE 6; anejo A) ----------
  // 01-11-2026, chequeo del tema: 15 activas con la mezcla de Zizur Mayor 2026 (GUIA_PREGUNTAS.md,
  // sección 2 bis): 3 META (E8-11, E8-12, E8-24), 3 DATO (E8-01, E8-03, E8-13), 2 NEG (E8-15, E8-25),
  // 1 LISTA (E8-10), 1 LIT (E8-18), 1 AFIRM (E8-06), 1 SEL (E8-09), 1 DEF (E8-26), 1 ALCANCE (E8-14) y
  // 1 COMB2 (E8-02). Letra correcta: A 4, B 4, C 4, D 3 (metas correctas: E8-11 «a) y c)» y E8-24 «Todas»;
  // E8-12 lleva «Ninguna», falsa).
  // Reescritas in situ conservando el id: E8-01, E8-02, E8-03, E8-06, E8-09, E8-10, E8-11, E8-12, E8-13,
  // E8-14, E8-15 y E8-18.
  // Retiradas (estado "retirada", no se borran porque el historial va por id): E8-04, E8-05, E8-07, E8-08,
  // E8-16, E8-17, E8-19, E8-20, E8-21, E8-22 y E8-23, por repetir datos de otras activas (tablas Ulim,
  // Q100, n50, extrapeninsular, luz natural, umbral HE 5, recarga) o por ser cálculos sin enunciado de examen.
  // Nuevas: E8-24 (META, exclusiones HE 0), E8-25 (NEG, recinto habitable, anejo A) y E8-26 (DEF, edificio
  // de consumo de energía casi nulo).
  // Fuente: DB-HE consolidado de 14-06-2022 (RD 732/2019, RD 450/2022 y su corrección de errores, BOE
  // 02-02-2023), que es el vigente el 21-05-2026: el RD 314/2006 no tiene modificaciones posteriores en el
  // BOE (última actualización, 15-06-2022) y el proyecto de RD de modificación del CTE sometido a
  // información pública el 07-11-2025 no se había aprobado. HE 2 (remisión al RITE) es materia de E9.

  { id: "E8-01", tema: "E8", subtema: "HE 0 · Cep,nren,lim residencial", tipo: "DATO",
    q: "Conforme a lo establecido en la tabla 3.1.a de la Sección HE 0 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, el valor límite del consumo de energía primaria no renovable (Cep,nren,lim) de un edificio nuevo de uso residencial privado situado en la zona climática de invierno C es:",
    o: ["25 kW·h/m²·año.", "28 kW·h/m²·año.", "32 kW·h/m²·año.", "38 kW·h/m²·año."],
    c: 2, exp: "DB-HE, Sección HE 0, apartado 3.1, tabla 3.1.a-HE0 («Valor límite Cep,nren,lim [kW·h/m2·año] para uso residencial privado»): en la fila «Edificios nuevos y ampliaciones» los valores son α 20, A 25, B 28, C 32, D 38 y E 43. A la zona C le corresponden 32 kW·h/m²·año. a) 25 es el de la zona A; b) 28, el de la zona B; d) 38, el de la zona D. Para «Cambios de uso a residencial privado y reformas» la fila es otra (en zona C, 65)." },

  { id: "E8-02", tema: "E8", subtema: "HE 0 · territorio extrapeninsular", tipo: "COMB2",
    q: "Según la Sección HE 0 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, ¿por qué factores se multiplican en territorio extrapeninsular (Illes Balears, Canarias, Ceuta y Melilla) los valores límite del consumo de energía primaria no renovable (Cep,nren,lim) para uso residencial privado y para uso distinto del residencial privado, respectivamente?",
    o: ["1,15 y 1,40.", "1,25 y 1,40.", "1,40 y 1,25.", "1,25 y 1,15."],
    c: 1, exp: "DB-HE, HE 0, apartado 3.1: al pie de la tabla 3.1.a-HE0 (uso residencial privado), «En territorio extrapeninsular (Illes Balears, Canarias, Ceuta y Melilla) se multiplicarán los valores de la tabla por 1,25»; al pie de la tabla 3.1.b-HE0 (uso distinto del residencial privado), «se multiplicarán los valores resultantes por 1,40». a) 1,15 es el factor de la tabla 3.2.a-HE0, que limita el consumo de energía primaria total (Cep,tot) en residencial privado, no el no renovable. c) invierte los dos factores. d) acierta el residencial, pero da para el uso distinto el 1,15 del Cep,tot residencial." },

  { id: "E8-03", tema: "E8", subtema: "HE 1 · Ulim de muros y suelos", tipo: "DATO",
    q: "Conforme a lo establecido en la tabla 3.1.1.a de la Sección HE 1 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, ¿cuál es el valor límite de transmitancia térmica (Ulim) de los muros y suelos en contacto con el aire exterior en la zona climática de invierno C?",
    o: ["0,41 W/m²K.", "0,49 W/m²K.", "0,56 W/m²K.", "0,70 W/m²K."],
    c: 1, exp: "DB-HE, HE 1, apartado 3.1.1, tabla 3.1.1.a-HE1, fila «Muros y suelos en contacto con el aire exterior (US, UM)»: α 0,80, A 0,70, B 0,56, C 0,49, D 0,41 y E 0,37 W/m²K. a) 0,41 es el valor de la zona D; c) 0,56, el de la zona B; d) 0,70, el de la zona A. No hay que confundirlo con las cubiertas en contacto con el aire exterior, que en zona C tienen 0,40." },

  { id: "E8-06", tema: "E8", subtema: "HE 1 · envolvente térmica", tipo: "AFIRM",
    q: "Señale la respuesta CORRECTA en relación con las condiciones de la envolvente térmica que establece la Sección HE 1 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo:",
    o: ["En edificios nuevos de uso residencial privado con superficie útil total superior a 120 m² se limita el valor de n50 (cambio de aire a 50 Pa).",
        "El valor límite del parámetro de control solar (qsol;jul,lim) es de 4,00 kWh/m²·mes en uso residencial privado y de 2,00 en otros usos.",
        "Los huecos con uso de escaparate en unidades de uso con actividad comercial pueden incrementar el valor de UH en un 25 %.",
        "La permeabilidad al aire (Q100) de los huecos de la envolvente térmica no superará 27 m³/h·m² en las zonas climáticas C, D y E."],
    c: 0, exp: "DB-HE, HE 1, apartado 3.1.3.4: «En edificios nuevos de uso residencial privado con una superficie útil total superior a 120 m2, la relación del cambio de aire con una presión diferencial de 50 Pa (n50) no superará el valor límite de la tabla 3.1.3.b-HE1» (6 h⁻¹ con V/A ≤ 2 y 3 h⁻¹ con V/A ≥ 4, interpolando entre ambos). b) invierte la tabla 3.1.2-HE1: residencial privado 2,00 y otros usos 4,00 kWh/m²·mes. c) la nota de la tabla 3.1.1.a-HE1 permite incrementar UH «en un 50%». d) la tabla 3.1.3.a-HE1 fija ≤ 27 m³/h·m² para las zonas α, A y B y ≤ 9 m³/h·m² para C, D y E." },

  { id: "E8-09", tema: "E8", subtema: "HE 3 · VEEIlim por uso", tipo: "SEL",
    q: "Conforme a lo establecido en la Sección HE 3 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, ¿cuál de los siguientes usos del recinto tiene un valor límite de eficiencia energética de la instalación (VEEIlim) de 8,0 W/m² por cada 100 lux?",
    o: ["Bibliotecas, museos y galerías de arte.", "Religioso en general.", "Zonas comunes en edificios no residenciales.", "Habitaciones de hoteles, hostales, etc."],
    c: 1, exp: "DB-HE, HE 3, apartado 3.1, tabla 3.1-HE3: «Religioso en general» tiene 8,0, el mismo valor que hostelería y restauración, salones de actos y salas de reuniones, y tiendas y pequeño comercio. a) Bibliotecas, museos y galerías de arte tienen 5,0; c) Zonas comunes en edificios no residenciales, 6,0; d) Habitaciones de hoteles, hostales, etc., 10,0, el valor más alto de la tabla." },

  { id: "E8-10", tema: "E8", subtema: "HE 3 · control en zonas de uso esporádico", tipo: "LISTA",
    q: "Según el apartado 3.3 de la Sección HE 3 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, en zonas de uso esporádico (aseos, pasillos, escaleras, zonas de tránsito, aparcamientos, etc.) el sistema de encendidos por horario centralizado en cada cuadro eléctrico se podrá sustituir por:",
    o: ["Un control de encendido y apagado por detección de presencia temporizado o un sistema de temporización mediante pulsador.",
        "Un control de encendido y apagado por detección de presencia temporizado o un sistema de regulación según el aporte de luz natural.",
        "Un sistema de temporización mediante pulsador o un sistema de regulación y control por sistema centralizado de gestión.",
        "Un control de encendido y apagado por detección de presencia temporizado, sin que quepa otra alternativa."],
    c: 0, exp: "DB-HE, HE 3, apartado 3.3: cada zona dispondrá de «a) un sistema de encendido y apagado manual externo al cuadro eléctrico, y b) un sistema de encendidos por horario centralizado en cada cuadro eléctrico»; y «En zonas de uso esporádico [...] el sistema del apartado b) se podrá sustituir por una de las dos siguientes opciones: un control de encendido y apagado por sistema de detección de presencia temporizado, o un sistema de temporización mediante pulsador». b) la regulación según el aporte de luz natural es otra exigencia (apartado 3.4), no una alternativa al horario. c) la regulación por sistema centralizado de gestión es uno de los tipos de sistema de control del anejo A, no una de las dos opciones. d) omite el pulsador temporizado, que es la segunda opción admitida." },

  { id: "E8-11", tema: "E8", subtema: "HE 3 · exclusiones del aprovechamiento de luz natural", tipo: "META",
    q: "Conforme a lo establecido en el apartado 3.4 de la Sección HE 3 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, están excluidas de la exigencia de incorporar sistemas de aprovechamiento de la luz natural:",
    o: ["Las zonas comunes en edificios residenciales.", "Las aulas y laboratorios de los edificios docentes.", "Las tiendas y pequeño comercio.", "Las respuestas a) y c) son correctas."],
    c: 3, exp: "DB-HE, HE 3, apartado 3.4.2: «Las zonas comunes en edificios residenciales, las habitaciones de hospital, las habitaciones de hoteles, hostales, etc., así como las tiendas y pequeño comercio están excluidas de la exigencia de incorporar sistemas de aprovechamiento de la luz natural». La a) y la c) están en esa lista; la b) no: las aulas y laboratorios no figuran entre las excluidas, así que se les exige el sistema cuando se cumple T(Aw/A) > 0,11 junto con alguna de las condiciones geométricas del apartado 3.4.1. Por eso la correcta es la d)." },

  { id: "E8-12", tema: "E8", subtema: "HE 4 · contribución renovable mínima", tipo: "META",
    q: "Según la Sección HE 4 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, la contribución mínima de energía procedente de fuentes renovables para ACS y para climatización de piscina:",
    o: ["Cubrirá al menos el 60 % de la demanda energética anual, y podrá reducirse al 50 % cuando la demanda de ACS sea inferior a 5.000 l/d.",
        "Cubrirá al menos el 70 % de la demanda energética anual, y podrá reducirse al 60 % cuando la demanda de ACS sea inferior a 10.000 l/d.",
        "Cubrirá al menos el 70 % de la demanda energética anual, y podrá reducirse al 60 % cuando la demanda de ACS sea inferior a 5.000 l/d.",
        "Ninguna de las respuestas anteriores es correcta."],
    c: 2, exp: "DB-HE, HE 4, apartado 3.1.1: «La contribución mínima de energía procedente de fuentes renovables cubrirá al menos el 70% de la demanda energética anual para ACS y para climatización de piscina [...]. Esta contribución mínima podrá reducirse al 60% cuando la demanda de ACS sea inferior a 5000 l/d». a) rebaja los dos porcentajes; b) cambia el umbral de 5.000 l/d por 10.000 l/d. Como la c) es literal, la d) es falsa. Solo cuenta la aportación renovable «con origen in situ o en las proximidades del edificio, o procedente de biomasa sólida»." },

  { id: "E8-13", tema: "E8", subtema: "HE 4 · bombas de calor para ACS", tipo: "DATO",
    q: "Según el apartado 3.1 de la Sección HE 4 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, ¿qué rendimiento medio estacional (SCOPdhw) mínimo deben tener las bombas de calor accionadas eléctricamente destinadas a la producción de ACS para poder considerar su contribución renovable?",
    o: ["1,15.", "2,0.", "2,5.", "3,0."],
    c: 2, exp: "DB-HE, HE 4, apartado 3.1.4: las bombas de calor «deberán disponer de un valor de rendimiento medio estacional (SCOPdhw) igual o superior a 2,5 cuando sean accionadas eléctricamente e igual o superior a 1,15 cuando sean accionadas mediante energía térmica», determinado para la temperatura de preparación del ACS, «que no será inferior a 45ºC». a) 1,15 es el de las accionadas mediante energía térmica; b) 2,0 y d) 3,0 no aparecen en la sección." },

  { id: "E8-14", tema: "E8", subtema: "HE 5 · superficie construida", tipo: "ALCANCE",
    q: "Conforme a lo establecido en el apartado 1 de la Sección HE 5 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, para saber si un edificio supera los 1.000 m² construidos, ¿cómo se trata la superficie de las zonas destinadas a aparcamiento en el interior del edificio?",
    o: ["Se incluye en la superficie construida en todo caso.", "Se incluye solo cuando el aparcamiento sea de uso público.", "Se excluye en todo caso, como las zonas exteriores comunes.", "Se incluye siempre que no supere el 10 % de la superficie construida."],
    c: 0, exp: "DB-HE, HE 5, apartado 1: «Se considerará que la superficie construida incluye la superficie de las zonas destinadas a aparcamiento en el interior del edificio y excluye las zonas exteriores comunes». La regla no distingue entre aparcamiento público o privado (b) ni pone límites de proporción (d); lo que se excluye son las zonas exteriores comunes, no el aparcamiento interior (c). La sección se aplica a edificios nuevos «cuando superen los 1.000 m2 construidos», a ampliaciones que incrementen la superficie construida «en más de 1.000 m2» y a reformas íntegras o cambios de uso característico «cuando se superen los 1.000 m2 de superficie construida»." },

  { id: "E8-15", tema: "E8", subtema: "HE 6 · dotaciones de recarga", tipo: "NEG",
    q: "Señale la respuesta INCORRECTA en relación con lo establecido en el apartado 3 de la Sección HE 6 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, sobre las dotaciones mínimas para la infraestructura de recarga de vehículos eléctricos:",
    o: ["En los edificios de uso residencial privado se instalarán sistemas de conducción de cables para el 100 % de las plazas de aparcamiento.",
        "En los edificios de uso distinto al residencial privado se instalará una estación de recarga por cada 40 plazas de aparcamiento, o fracción.",
        "En los edificios de uso distinto al residencial privado de la Administración General del Estado, una estación por cada 20 plazas, o fracción.",
        "Si el aparcamiento dispone de plazas accesibles, se instalará una estación de recarga por cada 10 plazas de aparcamiento accesibles."],
    c: 3, exp: "DB-HE, HE 6, apartado 3: «En los edificios de uso residencial privado se instalarán sistemas de conducción de cables que permitan el futuro suministro a estaciones de recarga para el 100% de las plazas de aparcamiento» (a); en uso distinto, conducción para al menos el 20 % de las plazas y «una estación de recarga por cada 40 plazas de aparcamiento, o fracción» (b); en los de titularidad de la Administración General del Estado o de sus organismos, «una estación de recarga por cada 20 plazas de aparcamiento, o fracción» (c). La d) es la incorrecta: con plazas accesibles «se instalará una estación de recarga por cada 5 plazas de aparcamiento accesibles», que se computan a efectos del cumplimiento." },

  { id: "E8-18", tema: "E8", subtema: "HE 1 · reformas y coeficiente K", tipo: "LIT",
    q: "De acuerdo con el apartado 3.1.1 de la Sección HE 1 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, en el caso de reformas:",
    o: ["Se podrán superar los valores de la tabla 3.1.1.a-HE1 cuando el parámetro de control solar (qsol;jul) obtenido considerando los elementos afectados no supere el obtenido aplicando los valores de la tabla.",
        "Se podrán superar los valores de la tabla 3.1.1.a-HE1 cuando el coeficiente global de transmisión de calor (K) obtenido considerando la transmitancia térmica final de los elementos afectados no supere el obtenido aplicando los valores de la tabla.",
        "Se podrán superar los valores de la tabla 3.1.1.a-HE1 cuando el coeficiente global de transmisión de calor (K) obtenido considerando la transmitancia térmica final de toda la envolvente no supere el obtenido aplicando los valores de la tabla.",
        "Se podrán superar los valores de la tabla 3.1.1.a-HE1 cuando el coeficiente global de transmisión de calor (K) obtenido considerando la transmitancia final de los elementos afectados no lo supere en más de un 10 %."],
    c: 1, exp: "DB-HE, HE 1, apartado 3.1.1.2: en reformas, el Ulim de la tabla 3.1.1.a-HE1 se aplica solo a los elementos que «se sustituyan, incorporen, o modifiquen sustancialmente» o que vean modificadas sus condiciones con incremento de las necesidades energéticas; y «Asimismo, en reformas se podrán superar los valores de la tabla 3.1.1.a-HE1 cuando el coeficiente global de transmisión de calor (K) obtenido considerando la transmitancia térmica final de los elementos afectados no supere el obtenido aplicando los valores de la tabla». a) cambia K por el control solar qsol;jul, que es otra exigencia (apartado 3.1.2). c) extiende el cálculo a toda la envolvente, cuando el texto se refiere a los elementos afectados. d) añade una tolerancia del 10 % que la norma no contempla." },

  { id: "E8-24", tema: "E8", subtema: "HE 0 · exclusiones del ámbito", tipo: "META",
    q: "Conforme a lo establecido en la Sección HE 0 del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, se excluyen del ámbito de aplicación de la exigencia de limitación del consumo energético:",
    o: ["Las construcciones provisionales con un plazo previsto de utilización igual o inferior a dos años.",
        "Los edificios aislados con una superficie útil total inferior a 50 m².",
        "Los edificios industriales, de la defensa y agrícolas no residenciales, o partes de ellos, de baja demanda energética.",
        "Todas las respuestas anteriores son correctas."],
    c: 3, exp: "DB-HE, HE 0, apartado 1 (Ámbito de aplicación): «Se excluyen del ámbito de aplicación: [...] b) construcciones provisionales con un plazo previsto de utilización igual o inferior a dos años; c) edificios industriales, de la defensa y agrícolas no residenciales, o partes de los mismos, de baja demanda energética [...]; d) edificios aislados con una superficie útil total inferior a 50 m2». La lista se completa con la letra a) del texto: los edificios protegidos oficialmente, en la medida en que el cumplimiento pudiese alterar de manera inaceptable su carácter o aspecto. Las tres opciones son literales, así que la correcta es la d)." },

  { id: "E8-25", tema: "E8", subtema: "Anejo A · recinto habitable", tipo: "NEG",
    q: "De conformidad con el anejo A, Terminología, del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, ¿cuál de los siguientes no es un recinto habitable?",
    o: ["Las cocinas, baños, aseos, pasillos y distribuidores, en edificios de cualquier uso.", "Las zonas comunes de circulación en el interior de los edificios.", "Los trasteros y las salas técnicas, en edificios de cualquier uso.", "Las aulas, bibliotecas y despachos, en edificios de uso docente."],
    c: 2, exp: "DB-HE, anejo A, «Recinto habitable»: se consideran habitables, entre otros, «b) aulas, bibliotecas, despachos, en edificios de uso docente», «e) cocinas, baños, aseos, pasillos y distribuidores, en edificios de cualquier uso» y «f) zonas comunes de circulación en el interior de los edificios». En cambio, «se incluyen explícitamente como no habitables los garajes, trasteros, las salas técnicas, y desvanes no acondicionados, y sus zonas comunes». Por eso la c) no es un recinto habitable." },

  { id: "E8-26", tema: "E8", subtema: "Introducción y anejo A · edificio de consumo casi nulo", tipo: "DEF",
    q: "Según la introducción y el anejo A, Terminología, del Documento Básico DB-HE Ahorro de energía del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, se define como edificio de consumo de energía casi nulo:",
    o: ["El edificio, nuevo o existente, que cumple las exigencias del DB HE en lo referente a la limitación de consumo energético para edificios de nueva construcción.",
        "El edificio de nueva construcción que cumple las exigencias del DB HE en lo referente a la limitación de la demanda energética de calefacción y refrigeración.",
        "El edificio, nuevo o existente, cuyo consumo de energía primaria total se cubre en más de un 50 % con energía procedente de fuentes renovables.",
        "El edificio, nuevo o existente, que cumple las exigencias del DB HE en lo referente a la limitación de consumo energético para reformas y cambios de uso."],
    c: 0, exp: "DB-HE, introducción (apartado II, Ámbito de aplicación) y anejo A: «Edificio de consumo de energía casi nulo: edificio, nuevo o existente, que cumple con las exigencias reglamentarias establecidas en este Documento Básico “DB HE Ahorro de Energía” en lo referente a la limitación de consumo energético para edificios de nueva construcción». b) lo reduce a obra nueva y lo refiere a la demanda, no al consumo. c) el DB no lo define por un porcentaje de renovables. d) toma como referencia los límites de reformas y cambios de uso, que son más altos (en residencial zona C, Cep,nren,lim 65 frente a 32 kW·h/m²·año)." },

  // ---------- Retiradas el 01-11-2026 (se conservan por el historial) ----------
  { id: "E8-04", tema: "E8", estado: "retirada",
    q: "Según el CTE DB-HE1, ¿cuál es el valor de transmitancia límite de cubierta (Ulim,cu) para la zona climática B?",
    o: ["0,44 W/m²K", "0,40 W/m²K", "0,50 W/m²K", "0,33 W/m²K"],
    c: 0, exp: "Tabla 3.1.1.a del DB-HE1: Ulim para cubiertas: zona α = 0,55; A = 0,50; B = 0,44; C = 0,40; D = 0,35; E = 0,33 W/m²K. La zona B exige cubiertas con transmitancia ≤ 0,44 W/m²K." },
  { id: "E8-05", tema: "E8", estado: "retirada",
    q: "En el CTE DB-HE1, ¿cuál es la transmitancia límite de huecos (Ulim,hu) para la zona climática D?",
    o: ["2,7 W/m²K", "1,80 W/m²K", "2,1 W/m²K", "2,3 W/m²K"],
    c: 1, exp: "Tabla 3.1.1.a del DB-HE1: para huecos, los valores son α = 3,2; A = 2,7; B = 2,3; C = 2,1; D = 1,8; E = 1,8 W/m²K. Por tanto, para la zona climática D corresponde 1,80 W/m²K." },
  { id: "E8-07", tema: "E8", estado: "retirada",
    q: "En el DB-HE1, ¿cuál es el límite de permeabilidad al aire Q100 (caudal a 100 Pa) para ventanas en las zonas climáticas C, D y E?",
    o: ["≤9 m³/h·m²", "≤18 m³/h·m²", "≤6 m³/h·m²", "≤27 m³/h·m²"],
    c: 0, exp: "Tabla 3.1.3.a del DB-HE1: la permeabilidad al aire Q100 de ventanas y puertas exteriores es ≤27 m³/h·m² para las zonas α, A y B, y ≤9 m³/h·m² para las zonas C, D y E (el doble de exigencia en zonas más frías)." },
  { id: "E8-08", tema: "E8", estado: "retirada",
    q: "Según el DB-HE1, ¿cuál es el valor límite de la tasa de renovación de aire n50 para edificios residenciales de nueva construcción con superficie >120 m² y relación V/A ≤ 2?",
    o: ["3 h⁻¹", "6 h⁻¹", "8 h⁻¹", "10 h⁻¹"],
    c: 1, exp: "Tabla 3.1.3.b del DB-HE1: para edificios residenciales de nueva construcción con superficie >120 m², n50,lim es de 6 h⁻¹ cuando V/A ≤ 2, y de 3 h⁻¹ cuando V/A ≥ 4, interpolando linealmente entre ambos valores. Este parámetro controla la estanquidad de la envolvente frente al aire." },
  { id: "E8-16", tema: "E8", estado: "retirada", subtema: "HE0 · territorio extrapeninsular",
    q: "Un edificio residencial privado de nueva construcción se ubica en zona climática C de Illes Balears. ¿Cuál es el Cep,nren,lim aplicable?",
    o: ["32 kWh/m²·año", "38 kWh/m²·año", "40 kWh/m²·año", "43 kWh/m²·año"],
    c: 2, exp: "Tabla 3.1.a-HE0: en uso residencial privado, zona C de nueva construcción = 32 kWh/m²·año. En Illes Balears el valor se multiplica por 1,25: 32 × 1,25 = 40 kWh/m²·año." },
  { id: "E8-17", tema: "E8", estado: "retirada", subtema: "HE1 · estanquidad",
    q: "En un edificio residencial privado nuevo de 130 m², con una compacidad V/A = 3, ¿qué n50 límite resulta al interpolar linealmente la tabla HE1?",
    o: ["3 h⁻¹", "4,5 h⁻¹", "6 h⁻¹", "9 h⁻¹"],
    c: 1, exp: "Tabla 3.1.3.b-HE1: n50 = 6 h⁻¹ para V/A ≤2 y 3 h⁻¹ para V/A ≥4. Para V/A = 3, punto medio, corresponde 4,5 h⁻¹ mediante interpolación lineal." },
  { id: "E8-19", tema: "E8", estado: "retirada", subtema: "HE3 · potencia instalada",
    q: "En una zona de uso distinto de aparcamiento se proyecta una iluminancia media de 700 lux. ¿Cuál es la potencia máxima instalada por superficie iluminada según HE3?",
    o: ["5 W/m²", "10 W/m²", "25 W/m²", "20 W/m²"],
    c: 2, exp: "Tabla 3.2-HE3: para otros usos, la potencia máxima instalada es 10 W/m² cuando la iluminancia media es ≤600 lux y 25 W/m² cuando es >600 lux. Los 5 W/m² corresponden a aparcamientos." },
  { id: "E8-20", tema: "E8", estado: "retirada", subtema: "HE3 · luz natural",
    q: "Una oficina tiene T(Aw/A) = 0,12 y cerramiento acristalado al exterior con θ = 70°. ¿Debe disponer de aprovechamiento automático de luz natural?",
    o: ["Queda fuera al exigir una ratio de 0,15", "Queda fuera al ser un cerramiento exterior", "Se exige por superar 0,11 y cumplir condición geométrica", "Se exige en aparcamientos"],
    c: 2, exp: "HE3, apartado 3.4: se exige cuando T(Aw/A) >0,11 y concurre una condición geométrica. En cerramientos al exterior, θ >65° es una de ellas. Deben regularse las luminarias a menos de 5 m de una ventana y las situadas bajo lucernario." },
  { id: "E8-21", tema: "E8", estado: "retirada", subtema: "HE4 · ámbito",
    q: "Un edificio existente tiene una demanda de ACS de 200 l/d y se sustituye íntegramente su instalación de generación térmica. ¿Qué consecuencia tiene para HE4?",
    o: ["Queda fuera por tratarse de un edificio existente", "Entra por superar 100 l/d y reformar íntegramente la generación térmica", "Queda fuera al no superar 5.000 l/d", "Entra por incrementar la superficie construida"],
    c: 1, exp: "HE4, apartado 1: se aplica a edificios existentes con ACS superior a 100 l/d cuando se reforme íntegramente el edificio, la instalación de generación térmica o exista cambio de uso característico." },
  { id: "E8-22", tema: "E8", estado: "retirada", subtema: "HE5 · umbral",
    q: "¿Cuál de estas actuaciones queda dentro del ámbito de HE5 exclusivamente por superar su umbral de superficie?",
    o: ["Edificio nuevo de 1.000 m² construidos", "Ampliación que añade exactamente 1.000 m²", "Edificio existente de 1.000 m² con reforma parcial", "Cambio de uso característico en edificio existente de 1.001 m²"],
    c: 3, exp: "HE5 se aplica a nueva construcción cuando supere 1.000 m², ampliaciones cuando el incremento sea de más de 1.000 m² y edificios existentes con reforma íntegra o cambio de uso cuando superen 1.000 m². El texto exige superar el umbral, no igualarlo." },
  { id: "E8-23", tema: "E8", estado: "retirada", subtema: "HE6 · cálculo de dotación",
    q: "Un edificio no residencial dispone de 120 plazas de aparcamiento, sin régimen especial de Administración General del Estado. ¿Qué dotación mínima cumple HE6?",
    o: ["Conducción para 12 plazas y 6 estaciones de recarga", "Conducción para 24 plazas y 3 estaciones de recarga", "Conducción para 120 plazas y 3 estaciones de recarga", "Conducción para 24 plazas y una estación de recarga"],
    c: 1, exp: "HE6: uso no residencial exige sistemas de conducción para al menos el 20% de las plazas y una estación por cada 40 plazas o fracción. Para 120 plazas: 24 plazas con conducción y 3 estaciones." },
];
