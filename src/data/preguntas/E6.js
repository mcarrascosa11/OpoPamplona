// Banco de preguntas del tema E6. Formato y reglas: cabecera de src/data/preguntas.js.
export default [
  // ---------- E6 · CTE DB-SUA, SEGURIDAD DE UTILIZACIÓN Y ACCESIBILIDAD ----------
  // 01-11-2026, chequeo del tema: 15 activas con la mezcla de Zizur Mayor 2026 (GUIA_PREGUNTAS.md,
  // sección 2 bis): 3 META (E6-03, E6-12, E6-14), 3 DATO (E6-02, E6-04, E6-08), 2 NEG (E6-07, E6-11),
  // 1 LISTA (E6-10), 1 LIT (E6-05), 1 AFIRM (E6-06), 1 SEL (E6-15), 1 DEF (E6-17), 1 ALCANCE (E6-09) y
  // 1 COMB2 (E6-01). Letra correcta: A 3, B 4, C 4, D 4 (metas correctas: E6-03 «a) y c)» y E6-12 «Todas»;
  // E6-14 lleva «Ninguna», falsa).
  // Reescritas in situ conservando el id: E6-01 a E6-12, E6-14 y E6-15.
  // Retiradas (estado "retirada", no se borran porque el historial va por id): E6-13, porque la Sección
  // SUA 8 (rayo) no entra en el alcance oficial de E6 (Introducción; SUA 1 a SUA 7; SUA 9; anejo A), y
  // E6-16, porque preguntaba la DA DB-SUA/2, que es materia de E7, con un dato que no está en el texto del tema.
  // Nueva: E6-17 (anejo A, uso restringido).
  // Fuente: DB-SUA consolidado de 14-06-2022 (RD 732/2019 y RD 450/2022), que es el vigente el 21-05-2026:
  // no hay modificaciones del DB-SUA entre esa fecha y la convocatoria (el proyecto de RD de modificación del
  // CTE sometido a información pública el 07-11-2025 no se había aprobado).

  { id: "E6-16", tema: "E6", estado: "retirada", subtema: "Ascensor accesible (DA DB-SUA/2, tema E7)", tipo: "DATO",
    q: "Anchura mínima de paso de una puerta de ascensor accesible para usuario de silla de ruedas (DA DB-SUA/2):",
    o: ["75 cm", "80 cm", "85 cm", "70 cm"],
    c: 1, exp: "80 cm de anchura libre de paso es el mínimo para uso por personas en silla de ruedas." },

  { id: "E6-01", tema: "E6", subtema: "SUA 1: resbaladicidad de los suelos", tipo: "COMB2",
    q: "Conforme a lo establecido en la tabla 1.2 de la Sección SUA 1 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, en un edificio de uso Docente, ¿qué clase deben tener, como mínimo, el suelo de una zona interior seca con pendiente menor que el 6 % y la escalera de una zona de aseos, respectivamente?",
    o: ["Clase 1 y clase 2.",
        "Clase 1 y clase 3.",
        "Clase 2 y clase 2.",
        "Clase 2 y clase 3."],
    c: 1, exp: "Tabla 1.2 de la Sección SUA 1 del DB-SUA: en zonas interiores secas, «superficies con pendiente menor que el 6%», clase 1; en zonas interiores húmedas, «tales como las entradas a los edificios desde el espacio exterior, terrazas cubiertas, vestuarios, baños, aseos, cocinas, etc.», las «superficies con pendiente igual o mayor que el 6% y escaleras», clase 3. El uso Docente está entre los que deben cumplir la tabla (apartado 1.1). a) es falsa: la clase 2 es la de las escaleras de zonas interiores secas, no la de las de zonas húmedas. c) es falsa: la clase 2 en suelo seco corresponde a pendientes iguales o mayores que el 6 %, y la escalera de aseos exige clase 3. d) es falsa en su primer dato: el suelo seco con pendiente menor que el 6 % solo exige clase 1." },

  { id: "E6-02", tema: "E6", subtema: "SUA 1: discontinuidades en el pavimento", tipo: "DATO",
    q: "Conforme a lo establecido en el apartado 2 de la Sección SUA 1 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, excepto en zonas de uso restringido o exteriores, el suelo no tendrá juntas que presenten un resalto de más de:",
    o: ["3 mm.", "4 mm.", "6 mm.", "12 mm."],
    c: 1, exp: "Apartado 2.1.a) de la Sección SUA 1 del DB-SUA: el suelo «no tendrá juntas que presenten un resalto de más de 4 mm». 12 mm es lo máximo que pueden sobresalir del pavimento los elementos salientes puntuales y de pequeña dimensión, como los cerraderos de puertas, y 6 mm es el saliente a partir del cual sus caras enfrentadas a la circulación no deben formar un ángulo con el pavimento que exceda de 45º. 3 mm no es ningún límite del apartado (el relieve de 3±1 mm es el de las bandas señalizadoras interiores del SUA 9)." },

  { id: "E6-03", tema: "E6", subtema: "SUA 1: protección de los desniveles", tipo: "META",
    q: "Conforme a lo establecido en el apartado 3.1 de la Sección SUA 1 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, existirán barreras de protección en los desniveles, huecos y aberturas, balcones, ventanas, etc., con una diferencia de cota mayor que 55 cm, excepto:",
    o: ["Cuando la disposición constructiva haga muy improbable la caída.",
        "Cuando el desnivel se encuentre en una zona de uso restringido.",
        "Cuando la barrera sea incompatible con el uso previsto.",
        "Las respuestas a) y c) son correctas."],
    c: 3, exp: "Apartado 3.1.1 de la Sección SUA 1 del DB-SUA: existirán barreras de protección en los desniveles con una diferencia de cota mayor que 55 cm, «excepto cuando la disposición constructiva haga muy improbable la caída o cuando la barrera sea incompatible con el uso previsto». Son las excepciones a) y c), así que la correcta es d). b) es falsa: el uso restringido no exime de la barrera; es uno de los casos en que se admite un escalón aislado en zonas de circulación (apartado 2, punto 3), no de la protección de desniveles." },

  { id: "E6-04", tema: "E6", subtema: "SUA 1: altura de las barreras de protección", tipo: "DATO",
    q: "Según el apartado 3.2.1 de la Sección SUA 1 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, fuera del caso de los huecos de escaleras de anchura menor que 40 cm, cuando la diferencia de cota que protegen exceda de 6 m, las barreras de protección tendrán, como mínimo, una altura de:",
    o: ["0,90 m.", "1,00 m.", "1,10 m.", "1,20 m."],
    c: 2, exp: "Apartado 3.2.1 de la Sección SUA 1 del DB-SUA: las barreras tendrán como mínimo «una altura de 0,90 m cuando la diferencia de cota que protegen no exceda de 6 m y de 1,10 m en el resto de los casos, excepto en el caso de huecos de escaleras de anchura menor que 40 cm, en los que la barrera tendrá una altura de 0,90 m». 0,90 m es la altura para desniveles de hasta 6 m y para esos huecos de escalera; 1,20 m es la altura de las barreras de las piscinas con acceso de niños no controlado (SUA 6); 1,00 m no es ninguna altura de barrera del DB." },

  { id: "E6-05", tema: "E6", subtema: "SUA 1: escaleras de uso restringido", tipo: "LIT",
    q: "De acuerdo con la Sección SUA 1 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, en las escaleras de uso restringido:",
    o: ["La anchura de cada tramo será de 0,80 m, como mínimo; la contrahuella será de 20 cm, como máximo, y la huella de 22 cm, como mínimo.",
        "La anchura de cada tramo será de 0,90 m, como mínimo; la contrahuella será de 20 cm, como máximo, y la huella de 22 cm, como mínimo.",
        "La anchura de cada tramo será de 0,80 m, como mínimo; la contrahuella será de 18,5 cm, como máximo, y la huella de 22 cm, como mínimo.",
        "La anchura de cada tramo será de 0,80 m, como mínimo; la contrahuella será de 20 cm, como máximo, y la huella de 28 cm, como mínimo."],
    c: 0, exp: "Apartado 4.1 de la Sección SUA 1 del DB-SUA: «La anchura de cada tramo será de 0,80 m, como mínimo.» «La contrahuella será de 20 cm, como máximo, y la huella de 22 cm, como mínimo.» b) cambia la anchura: 0,90 m es una de las anchuras de la tabla 4.1 de escaleras de uso general. c) cambia la contrahuella: 18,5 cm es la máxima de las escaleras de uso general (apartado 4.2.1). d) cambia la huella: 28 cm es la mínima de los tramos rectos de las escaleras de uso general." },

  { id: "E6-06", tema: "E6", subtema: "SUA 1: escaleras de uso general", tipo: "AFIRM",
    q: "Señale la respuesta CORRECTA en relación con las escaleras de uso general reguladas en la Sección SUA 1 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo:",
    o: ["En tramos rectos la huella medirá 28 cm, como mínimo, y se admite el bocel en las escaleras de evacuación descendente.",
        "Cada tramo tendrá 3 peldaños, como mínimo, y la máxima altura que puede salvar un tramo en zonas de uso público es 3,20 m.",
        "Dispondrán de pasamanos en ambos lados cuando su anchura libre exceda de 1,00 m o no se disponga ascensor alternativo.",
        "La huella H y la contrahuella C cumplirán, a lo largo de una misma escalera, la relación 54 cm ≤ 2C + H ≤ 70 cm."],
    c: 3, exp: "Apartado 4.2.1.1 de la Sección SUA 1 del DB-SUA: «La huella H y la contrahuella C cumplirán a lo largo de una misma escalera la relación siguiente: 54 cm ≤ 2C + H ≤ 70 cm». a) es falsa: el apartado 4.2.1.2 dice «No se admite bocel», sin excepción. b) es falsa en la altura: «La máxima altura que puede salvar un tramo es 2,25 m en zonas de uso público, así como siempre que no se disponga ascensor como alternativa a la escalera, y 3,20 m en los demás casos» (4.2.2.1). c) es falsa en la anchura: los pasamanos van en ambos lados «cuando su anchura libre exceda de 1,20 m» o cuando no haya ascensor alternativo (4.2.4.1)." },

  { id: "E6-07", tema: "E6", subtema: "SUA 1: rampas", tipo: "NEG",
    q: "Señale la respuesta INCORRECTA: conforme a lo establecido en el apartado 4.3 de la Sección SUA 1 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo:",
    o: ["Los itinerarios cuya pendiente exceda del 4 % se consideran rampa a efectos del DB-SUA.",
        "Las rampas de itinerarios accesibles de longitud menor que 3 m tendrán una pendiente del 10 %, como máximo.",
        "Las rampas de itinerarios accesibles de longitud igual o mayor que 6 m tendrán una pendiente del 8 %, como máximo.",
        "La pendiente transversal de las rampas que pertenezcan a itinerarios accesibles será del 2 %, como máximo."],
    c: 2, exp: "Apartado 4.3 de la Sección SUA 1 del DB-SUA. La c) es la INCORRECTA: las rampas de itinerarios accesibles tendrán una pendiente máxima «del 10% cuando su longitud sea menor que 3 m, del 8% cuando la longitud sea menor que 6 m y del 6% en el resto de los casos» (4.3.1.1.a); a partir de 6 m de longitud, por tanto, el 6 %, no el 8 %. a) es literal del 4.3.1: «Los itinerarios cuya pendiente exceda del 4% se consideran rampa a efectos de este DB-SUA». b) es literal del 4.3.1.1.a. d) es literal del 4.3.1.2: «La pendiente transversal de las rampas que pertenezcan a itinerarios accesibles será del 2%, como máximo»." },

  { id: "E6-08", tema: "E6", subtema: "SUA 2: impacto con elementos fijos", tipo: "DATO",
    q: "¿Cuál es la altura libre de paso mínima en las zonas de circulación que no sean de uso restringido, de acuerdo con la Sección SUA 2 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo?",
    o: ["2,00 m.", "2,10 m.", "2,20 m.", "2,50 m."],
    c: 2, exp: "Apartado 1.1.1 de la Sección SUA 2 del DB-SUA: «La altura libre de paso en zonas de circulación será, como mínimo, 2,10 m en zonas de uso restringido y 2,20 m en el resto de las zonas. En los umbrales de las puertas la altura libre será 2 m, como mínimo.» 2,10 m es la de las zonas de uso restringido y 2,00 m la de los umbrales de las puertas. 2,50 m es la anchura de pasillo a partir de la cual cambia la regla del barrido de las puertas laterales (apartado 1.2), no una altura libre." },

  { id: "E6-09", tema: "E6", subtema: "SUA 3: fuerza de apertura de las puertas de salida", tipo: "ALCANCE",
    q: "Conforme a lo establecido en el apartado 1 de la Sección SUA 3 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, la fuerza de apertura de las puertas de salida será de 140 N, como máximo:",
    o: ["En todo caso, incluidas las puertas de salida situadas en itinerarios accesibles.",
        "Excepto en itinerarios accesibles, donde será de 25 N en general y de 65 N si son resistentes al fuego.",
        "Excepto en itinerarios accesibles, donde será de 65 N en general y de 25 N si son resistentes al fuego.",
        "Excepto en zonas de uso público, donde será de 25 N en general y de 65 N si son resistentes al fuego."],
    c: 1, exp: "Apartado 1.3 de la Sección SUA 3 del DB-SUA: «La fuerza de apertura de las puertas de salida será de 140 N, como máximo, excepto en las situadas en itinerarios accesibles, en las que se aplicará lo establecido en la definición de los mismos en el anejo A Terminología (como máximo 25 N, en general, 65 N cuando sean resistentes al fuego).» a) es falsa: la regla tiene la excepción de los itinerarios accesibles. c) invierte las dos cifras: 25 N es la general y 65 N la de las puertas resistentes al fuego. d) es falsa: la excepción se refiere a los itinerarios accesibles, no a las zonas de uso público." },

  { id: "E6-10", tema: "E6", subtema: "SUA 4: alumbrado normal en zonas de circulación", tipo: "LISTA",
    q: "Conforme a la Sección SUA 4 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, en cada zona se dispondrá una instalación de alumbrado capaz de proporcionar, medida a nivel del suelo, una iluminancia mínima de:",
    o: ["20 lux en zonas exteriores, 100 lux en zonas interiores y 50 lux en aparcamientos interiores.",
        "20 lux en zonas exteriores, 100 lux en zonas interiores y 100 lux en aparcamientos interiores.",
        "50 lux en zonas exteriores, 100 lux en zonas interiores y 50 lux en aparcamientos interiores.",
        "20 lux en zonas exteriores, 200 lux en zonas interiores y 50 lux en aparcamientos interiores."],
    c: 0, exp: "Apartado 1.1 de la Sección SUA 4 del DB-SUA: alumbrado capaz de proporcionar «una iluminancia mínima de 20 lux en zonas exteriores y de 100 lux en zonas interiores, excepto aparcamientos interiores en donde será de 50 lux, medida a nivel del suelo». El factor de uniformidad media será del 40 % como mínimo. b) quita la excepción de los aparcamientos interiores (50 lux, no 100). c) sube el exterior a 50 lux, que es la cifra de los aparcamientos interiores. d) duplica la de las zonas interiores: son 100 lux." },

  { id: "E6-11", tema: "E6", subtema: "SUA 4: dotación de alumbrado de emergencia", tipo: "NEG",
    q: "Según la Sección SUA 4 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, ¿cuál de las siguientes zonas o elementos no está entre los que deben contar con alumbrado de emergencia?",
    o: ["Todo recinto cuya ocupación sea mayor que 100 personas.",
        "Los aseos generales de planta en edificios de uso público.",
        "Los recorridos desde todo origen de evacuación hasta el espacio exterior seguro.",
        "Los aparcamientos cerrados o cubiertos de más de 50 m² de superficie construida."],
    c: 3, exp: "Apartado 2.1 de la Sección SUA 4 del DB-SUA. Cuentan con alumbrado de emergencia, entre otros: «a) Todo recinto cuya ocupación sea mayor que 100 personas»; «b) Los recorridos desde todo origen de evacuación hasta el espacio exterior seguro y hasta las zonas de refugio»; «c) Los aparcamientos cerrados o cubiertos cuya superficie construida exceda de 100 m2»; «e) Los aseos generales de planta en edificios de uso público». La d) no está en la lista porque el umbral de los aparcamientos es de 100 m², no de 50 m² (50 lux es la iluminancia del alumbrado normal en aparcamientos interiores). a), b) y c) son literales de la lista." },

  { id: "E6-12", tema: "E6", subtema: "SUA 6: piscinas", tipo: "META",
    q: "Conforme a la Sección SUA 6 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, en las piscinas de uso colectivo a las que es aplicable dicha Sección:",
    o: ["La profundidad del vaso en piscinas infantiles será 50 cm, como máximo.",
        "En el resto de piscinas la profundidad será de 3 m, como máximo, y contarán con zonas cuya profundidad será menor que 1,40 m.",
        "El suelo del andén o playa que circunda el vaso será de clase 3 y tendrá una anchura de 1,20 m, como mínimo.",
        "Todas las respuestas anteriores son correctas."],
    c: 3, exp: "Sección SUA 6 del DB-SUA. Apartado 1.2.1.1: «La profundidad del vaso en piscinas infantiles será 50 cm, como máximo. En el resto de piscinas la profundidad será de 3 m, como máximo, y contarán con zonas cuya profundidad será menor que 1,40 m.» Apartado 1.3.1: «El suelo del andén o playa que circunda el vaso será de clase 3 […], tendrá una anchura de 1,20 m, como mínimo, y su construcción evitará el encharcamiento.» Las tres son literales, así que la correcta es d)." },

  { id: "E6-13", tema: "E6", estado: "retirada", subtema: "SUA 8: rayo (fuera del alcance oficial de E6)", tipo: "ALCANCE",
    q: "¿En qué casos obliga siempre el DB-SUA 8 a instalar un sistema de protección contra el rayo con eficiencia E ≥ 0,98?",
    o: ["Cuando el edificio manipule sustancias tóxicas, radioactivas, inflamables o explosivas, o su altura supere 43 m",
        "Cuando la frecuencia esperada de impactos Ne > 0,01 impactos/año",
        "Cuando el edificio sea de uso industrial o esté en zona de alta densidad de impactos",
        "Cuando la frecuencia esperada de impactos Ne sea mayor que el riesgo admisible Na"],
    c: 0, exp: "SUA 8 §1.2: los edificios en los que se manipulen sustancias tóxicas, radioactivas, altamente inflamables o explosivas, y los edificios cuya altura sea superior a 43 m, dispondrán siempre de sistemas de protección contra el rayo de eficiencia E ≥ 0,98 (nivel de protección 1), con independencia del resultado de Ne/Na." },

  { id: "E6-14", tema: "E6", subtema: "SUA 5: graderíos para espectadores de pie", tipo: "META",
    q: "Según la Sección SUA 5 del Documento Básico DB-SUA del Código Técnico de la Edificación, aplicable a los graderíos de estadios, pabellones polideportivos, centros de reunión y otros edificios de uso cultural previstos para más de 3.000 espectadores de pie, ¿cuál de las siguientes condiciones deben cumplir esos graderíos?",
    o: ["La pendiente no será mayor que el 50 %.",
        "La longitud de una fila con accesos desde pasillos en sus dos extremos será de 30 m, como máximo.",
        "La diferencia de cota entre cualquier fila y alguna salida del graderío será de 6 m, como máximo.",
        "Ninguna de las respuestas anteriores es correcta."],
    c: 0, exp: "Apartado 2 de la Sección SUA 5 del DB-SUA: «La pendiente no será mayor que 50%.» b) es falsa: «La longitud de una fila que tenga accesos desde pasillos situados en sus dos extremos será de 20 m, como máximo» (10 m si solo tiene acceso por un extremo). c) es falsa: «La diferencia de cota entre cualquier fila de espectadores y alguna salida del graderío será de 4 m, como máximo». Como a) es correcta, d) es falsa." },

  { id: "E6-15", tema: "E6", subtema: "SUA 9: accesibilidad entre plantas (ascensor accesible)", tipo: "SEL",
    q: "Conforme a lo establecido en el apartado 1.1.2 de la Sección SUA 9 del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, ¿cuál de los siguientes edificios debe disponer de ascensor accesible o rampa accesible que comunique las plantas que no sean de ocupación nula con las de entrada accesible al edificio?",
    o: ["Uno de uso Residencial Vivienda con más de 8 viviendas en plantas sin entrada principal accesible al edificio.",
        "Uno de uso Residencial Vivienda en el que haya que salvar más de una planta desde alguna entrada principal accesible.",
        "Uno de uso Administrativo con más de 200 m² útiles, sin contar zonas de ocupación nula, en plantas sin entrada accesible.",
        "Uno de uso Administrativo en el que haya que salvar más de una planta desde alguna entrada principal accesible."],
    c: 2, exp: "Apartado 1.1.2 de la Sección SUA 9 del DB-SUA: los edificios de otros usos «en los que haya que salvar más de dos plantas desde alguna entrada principal accesible al edificio hasta alguna planta que no sea de ocupación nula, o cuando en total existan más de 200 m2 de superficie útil […] excluida la superficie de zonas de ocupación nula en plantas sin entrada accesible al edificio, dispondrán de ascensor accesible o rampa accesible». a) es falsa: en Residencial Vivienda el umbral es «más de 12 viviendas en plantas sin entrada principal accesible». b) y d) son falsas: en ambos casos hay que salvar «más de dos plantas», no más de una; en Residencial Vivienda, por debajo de los umbrales, el proyecto solo debe prever, al menos dimensional y estructuralmente, el ascensor." },

  { id: "E6-17", tema: "E6", subtema: "Anejo A: uso restringido", tipo: "DEF",
    q: "Según el Anejo A, Terminología, del Documento Básico DB-SUA del Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, el uso restringido se define como la utilización de las zonas o elementos de circulación:",
    o: ["Limitados a un máximo de 10 personas que tienen el carácter de usuarios habituales, incluidos el interior de las viviendas y las zonas comunes de los edificios de viviendas.",
        "Limitados a un máximo de 10 personas que tienen el carácter de usuarios habituales, incluido el interior de las viviendas, pero excluidas las zonas comunes de los edificios de viviendas.",
        "Limitados a un máximo de 25 personas que tienen el carácter de usuarios habituales, incluido el interior de las viviendas, pero excluidas las zonas comunes de los edificios de viviendas.",
        "Limitados a un máximo de 10 personas, sean o no usuarios habituales, incluido el interior de las viviendas, pero excluidas las zonas comunes de los edificios de viviendas."],
    c: 1, exp: "Anejo A del DB-SUA, «Uso restringido»: «Utilización de las zonas o elementos de circulación limitados a un máximo de 10 personas que tienen el carácter de usuarios habituales, incluido el interior de las viviendas y de los alojamientos (en uno o más niveles) de uso Residencial Público, pero excluidas las zonas comunes de los edificios de viviendas.» a) es falsa: las zonas comunes de los edificios de viviendas quedan excluidas (por eso en ellas rigen, por ejemplo, las escaleras de uso general). c) cambia el máximo de 10 por 25 personas, cifra de la primera columna de la tabla 4.1 de escaleras. d) es falsa: las personas deben tener el carácter de usuarios habituales." },
];
