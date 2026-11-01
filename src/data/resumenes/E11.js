// Resumen del tema E11. Formato: cabecera de src/data/resumenes.js.
// Revisado el 01-11-2026 contra temas/E_Tema11.txt (DB SE-AE, versión de abril de 2009, la vigente el 21-05-2026:
// ni el RD 732/2019 ni el RD 450/2022 modifican este DB; contrastado con codigotecnico.org, DBSE-AE.pdf).
// Añadido el bloque de memorización (tablas 3.1 a 3.8 y reglas sueltas). Corregidos: categoría B («zonas
// administrativas», no «oficinas»), cubiertas ligeras G1 (0,4 kN/m²), temperatura de la envolvente no expuesta y
// reparto de la acumulación de nieve (ancho no mayor de 2,0 m a un lado u otro). Alcance oficial: apartados 1 a 4;
// el anejo A (terminología) y los anejos C, D y E quedan fuera.
export default {
  intro: "El DB-SE-AE es el Documento Básico del CTE que determina las acciones sobre los edificios para verificar el cumplimiento de los requisitos de seguridad estructural y aptitud al servicio del DB-SE; todos sus valores son característicos salvo indicación contraria. Se organiza en generalidades (1), acciones permanentes (2: peso propio, pretensado, terreno), acciones variables (3: sobrecarga de uso, barandillas, viento, térmicas, nieve) y acciones accidentales (4: sismo, incendio, impacto, otras).",
  bloques: [
    {
      h: "Generalidades y ámbito de aplicación (apdo. 1.1)",
      nota: "Trampa frecuente: las fuerzas de rozamiento NO se definen en este DB, sino que se consideran efectos de las acciones. También suele caer qué construcciones quedan fuera de alcance (silos, tanques, aparatos elevadores). Recordar que el ámbito es exclusivamente edificios, no infraestructuras.",
      items: [
        "Ámbito: determinación de acciones sobre edificios para verificar cumplimiento de requisitos de seguridad estructural (capacidad portante y estabilidad) y aptitud al servicio del DB-SE",
        "Fuera de alcance: acciones y fuerzas que actúan sobre elementos tales como aparatos elevadores o puentes grúa, o construcciones como los silos o los tanques",
        "Fuerzas de rozamiento: no se definen en este DB; se consideran efectos de las acciones",
        "Todos los valores tienen sentido de característicos salvo indicación expresa en contrario",
        "Los tipos de acciones y su tratamiento se establecen en el DB-SE"
      ]
    },
    {
      h: "Acciones permanentes: peso propio, pretensado y terreno (apdo. 2)",
      nota: "El peso propio parece trivial pero es muy preguntable por la tabiquería. Clave: tabiques ordinarios ≤1,2 kN/m² se asimilan a carga equivalente uniforme; en viviendas basta 1,0 kN/m² de superficie construida sin medir tabique a tabique. Fachadas y elementos pesados son acción local, no sobrecarga de uso.",
      items: [
        "Peso propio: elementos estructurales, cerramientos y elementos separadores, tabiquería, carpinterías, revestimientos (pavimentos, guarnecidos, enlucidos, falsos techos), rellenos (tierras) y equipo fijo",
        "Valor característico: valor medio a partir de dimensiones nominales y pesos específicos medios (Anejo C)",
        "Tabiques ordinarios ≤1,2 kN/m² y distribución homogénea: asimilables a carga equivalente uniforme = peso por m² de alzado × (superficie tabiquería / superficie planta)",
        "En viviendas: basta considerar 1,0 kN por m² de superficie construida como peso propio de tabiquería",
        "Tabiquería más pesada: carga equivalente uniforme citada + incremento local igual al exceso sobre 1,2 kN/m² de alzado",
        "Medición directa de la tabiquería proyectada: considerar las alteraciones y modificaciones razonables en la vida del edificio",
        "Fachadas y compartimentación pesados: acción local asignada a elementos que inequívocamente los soporten; en continuidad con plantas inferiores, totalidad del peso sobre sí mismo por seguridad",
        "Equipos e instalaciones fijas (calderas colectivas, transformadores, aparatos de elevación, torres de refrigeración): valor de los suministradores",
        "Pretensado: según lo establecido en la Instrucción EHE (remisión literal del DB de 2009)",
        "Acciones del terreno: empujes, desplazamientos y deformaciones según el DB-SE-C"
      ]
    },
    {
      h: "Sobrecargas de uso: valores y reducción (apdo. 3.1)",
      nota: "La Tabla 3.1 es de memorización obligatoria. Trampa clásica: la carga concentrada actúa simultáneamente con la distribuida SOLO en zonas de tráfico y aparcamiento; en el resto es independiente y no simultánea. Otra trampa: balcones volados llevan la sobrecarga de la zona servida MÁS 2 kN/m lineal en bordes. La reducción por superficie tributaria o número de plantas (Tabla 3.2) solo aplica a categorías A, B, C y D.",
      items: [
        "Sobrecarga de uso: peso de todo lo que puede gravitar por razón del uso; equipos pesados o acumulación en bibliotecas/almacenes/industrias no están en el DB: valores del suministrador o exigencias de la propiedad",
        "Valores característicos Tabla 3.1: A1 viviendas 2 kN/m²; A2 trasteros 3; B zonas administrativas 2; C1 mesas y sillas 3; C2 asientos fijos 4; C3 vestíbulos/salas exposición 5; C4 gimnasio 5; C5 aglomeración 5; D1 locales comerciales 5; D2 grandes superficies 5; E tráfico 2; F cubiertas transitables privadas 1; G1 cubiertas <20° 1 (ligeras sobre correas 0,4); G2 cubiertas >40° 0",
        "Carga concentrada: simultánea con distribuida en tráfico/aparcamiento; independiente y no simultánea en resto; superficie cuadrada de 200 mm en tráfico, 50 mm de lado en resto",
        "Zonas de acceso y evacuación de A y B (portales, mesetas, escaleras): incremento de 1 kN/m² sobre valor de zona servida",
        "Balcones volados: sobrecarga de uso de la categoría con la que se comunique + 2 kN/m lineal actuando en bordes",
        "Almacén o biblioteca: sobrecarga media en memoria e instrucciones de uso y mantenimiento, y placa en obra con dicho valor",
        "Porches/aceras/espacios tránsito sobre elemento portante o terreno que empuja: 1 kN/m² si privados, 3 kN/m² si de acceso público",
        "Los valores ya incluyen la alternancia de carga, salvo elementos críticos (vuelos) o zonas de aglomeración",
        "Reducción Tabla 3.2: aplicable a categorías A, B, C y D; elementos horizontales por superficie tributaria; elementos verticales por número de plantas del mismo uso; simultánea en verticales solo si mismo uso y distintos usuarios"
      ]
    },
    {
      h: "Acciones sobre barandillas y elementos divisorios (apdo. 3.2)",
      nota: "Distinguir la fuerza sobre barandillas según uso (Tabla 3.3) de la exigencia específica en zonas de tráfico de vehículos, donde el mínimo es 50 kN. Los elementos divisorios (tabiques) solo resisten la mitad de la fuerza horizontal de barandillas. La fuerza se aplica a 1,2 m de altura o en el borde superior si es menor.",
      items: [
        "Barandillas, petos, antepechos y quitamiedos: fuerza horizontal uniforme según Tabla 3.3 (C5 3,0 kN/m; C3, C4, E, F 1,6 kN/m; resto 0,8 kN/m); aplicada a 1,2 m o borde superior si menor",
        "Zonas de tráfico y aparcamiento: parapetos/barandillas que delimiten áreas accesibles a vehículos deben resistir fuerza horizontal uniforme sobre 1 m a 1,2 m de altura, valor definido en proyecto según uso y características, no inferior a 50 kN",
        "Elementos divisorios (tabiques): fuerza horizontal mitad de la definida en Tabla 3.3 según uso a cada lado"
      ]
    },
    {
      h: "Acción del viento: fórmula, exposición y coeficientes eólicos (apdo. 3.3)",
      nota: "Fórmula base qe = qb·ce·cp. qb simplificado = 0,5 kN/m² para todo España. Trampa: en urbano hasta 8 plantas ce = 2,0 constante. Para edificios de pisos se usan coeficientes globales (Tabla 3.5); para naves diáfanas se individualiza en cada elemento y si hay >30% de huecos en dos lados se trata como marquesina. No olvidar las fuerzas tangenciales por rozamiento.",
      items: [
        "No aplicable a edificios en altitudes superiores a 2.000 m (datos empíricos) ni a construcciones de esbeltez superior a 6 (efectos dinámicos)",
        "Presión estática del viento: qe = qb · ce · cp",
        "qb (presión dinámica): valor simplificado 0,5 kN/m² en cualquier punto de España; valores precisos en Anejo D por emplazamiento geográfico",
        "ce (coeficiente de exposición): en edificios urbanos de hasta 8 plantas puede tomarse 2,0 constante; en general según Tabla 3.4 por altura y grado de aspereza del entorno (I borde del mar a V centro de negocios); por encima de 30 m, Anejo D",
        "cp (coeficiente eólico o de presión): depende de forma y orientación; negativo indica succión; edificios de pisos (Tabla 3.5) cp presión 0,7-0,8, cs succión -0,3 a -0,7 según esbeltez",
        "Comprobación en todas direcciones aunque haya medianeras (bastan dos ortogonales, en los dos sentidos); con coeficiente global, excentricidad del 5% de la dimensión máxima",
        "Cubierta plana en edificios de pisos: succión del lado de la seguridad, despreciable",
        "Fuerzas tangenciales: producto de presión exterior por coeficiente de rozamiento (0,01 muy lisa, 0,02 rugosa, 0,04 muy rugosa); innecesarias en barlovento/sotavento si no superan 10% de la perpendicular",
        "Naves y construcciones diáfanas: acción individualizada en cada elemento; huecos >30% en al menos dos lados → estructura como marquesina o pared libre; presión interior cpi según Tabla 3.6 o proporcional a huecos (doble: 0,75 cpe; triple: 0,9 cpe); hueco dominante: área al menos 10 veces la suma del resto"
      ]
    },
    {
      h: "Acciones térmicas (apdo. 3.4)",
      nota: "Se separan efectos de verano (dilatación) e invierno (contracción) respecto a temperatura de referencia (10°C o media anual). Trampa de examen: el incremento por radiación solar en superficies oscuras orientadas a sur u oeste llega a +42°C. Edificios habituales de hormigón o acero con juntas de dilatación que limiten elementos continuos a 40 m quedan exentos de considerar esta acción.",
      items: [
        "Efectos globales: variación de temperatura media respecto a temperatura de referencia (10°C o media anual del emplazamiento); separadamente verano (dilatación) e invierno (contracción)",
        "Temperaturas extremas: Anejo E",
        "Elementos expuestos a intemperie: mínima = extrema del ambiente; máxima verano = extrema ambiente + incremento por radiación solar (Tabla 3.7: N/E muy claro 0°C, claro 2°C, oscuro 4°C; S/O muy claro 18°C, claro 30°C, oscuro 42°C)",
        "Elementos protegidos en interior: 20°C durante todo el año",
        "Elementos de envolvente no directamente expuestos: media entre los expuestos a la intemperie y los protegidos en el interior",
        "Edificios habituales de hormigón o acero con juntas de dilatación que eviten elementos continuos >40 m: pueden no considerarse acciones térmicas; para otros materiales, cada DB fija la distancia máxima entre juntas"
      ]
    },
    {
      h: "Carga de nieve: valores, coeficiente de forma y acumulación (apdo. 3.5)",
      nota: "Para cubiertas planas de edificios de pisos por debajo de 1000 m basta 1,0 kN/m². Fórmula qn = µ·sk. El coeficiente de forma µ es clave: 1 para ≤30°, 0 para ≥60°; en limahoyas con semisuma de inclinaciones β>30° llega a 2,0. No confundir el peso específico de la nieve recién caída (1,2) con la prensada (2,0) o con granizo (4,0). Elementos volados por encima de 1000 m requieren carga lineal de hielo.",
      items: [
        "Los modelos solo cubren el depósito natural; en cubiertas accesibles, considerar acumulaciones por redistribución artificial",
        "Cubiertas planas edificios de pisos <1000 m de altitud: suficiente 1,0 kN/m²; en otros casos o estructuras ligeras sensibles a carga vertical, cálculo",
        "Carga por unidad de superficie en proyección horizontal: qn = µ · sk",
        "sk: Tabla 3.8 para capitales de provincia y ciudades autónomas (Pamplona 450 m → 0,7 kN/m²); Anejo E para otras localidades; por encima de altitudes tabuladas, ordenanza municipal o datos empíricos",
        "Peso específico de nieve acumulada: 1,2 kN/m³ recién caída; 2,0 prensada o empapada; 4,0 mezclada con granizo",
        "Coeficiente de forma µ: 1 para inclinación ≤30°, 0 para ≥60° (interpolación lineal); con impedimento al deslizamiento µ = 1; limahoyas con faldones en sentido contrario y semisuma β >30° → µ = 2,0, si no µ = 1 + β/30° en 2 m de anchura; asimetría por viento: µ a la mitad en las partes en que la acción sea favorable",
        "Acumulación en discontinuidades: carga lineal pa = min(µi, 1) · pd, donde pd = (1-µ)·L·sk; repartida uniformemente en un ancho no mayor que 2,0 m a un lado u otro de la limahoya o cambio de nivel",
        "Elementos volados en edificios >1000 m: carga lineal hielo pn = k · µ² · sk con k = 3 metros",
        "Protegida de viento: reducción 20%; fuertemente expuesto: aumento 20%",
        "Elementos que impidan el deslizamiento: coeficiente de rozamiento nieve-cubierta nulo"
      ]
    },
    {
      h: "Acciones accidentales: sismo, incendio e impacto (apdo. 4)",
      nota: "Sismo e incendio se remiten a otras normas (NCSE y DB-SI respectivamente). El impacto de vehículos ligeros tiene valores fijos (50/25 kN) que suelen caer en examen. Carretillas elevadoras: 5 veces su peso máximo autorizado. Las acciones por helicópteros u otros vehículos deben definirse expresamente en proyecto.",
      items: [
        "Sismo: regulado en la NCSE (Norma de construcción sismorresistente: parte general y edificación)",
        "Incendio: acciones térmicas en DB-SI; zonas tránsito vehículos servicios protección contra incendios: 20 kN/m² en superficie 3x8 m dentro de banda de 5 m; comprobación local independiente y no simultánea: 100 kN en círculo de 20 cm de diámetro",
        "Impacto: solo impactos accidentales; los elementos afectados se dimensionan para él salvo medidas de protección de eficacia verificada; se representa con una fuerza estática equivalente",
        "Impacto de vehículos: desde el exterior donde y cuando lo establezca la ordenanza municipal; desde el interior en todas las zonas con circulación de vehículos",
        "Impacto de vehículos de hasta 30 kN: fuerzas estáticas equivalentes de 50 kN dirección paralela a vía y 25 kN perpendicular, no simultáneas; aplicadas en superficie rectangular 0,25x1,5 m a 0,6 m sobre rodadura (verticales) o altura del elemento si <1,8 m (horizontales)",
        "Carretillas elevadoras: fuerza estática equivalente = 5 × peso máximo autorizado; superficie 0,4x1,5 m a 0,75 m sobre rodadura (en ausencia de datos específicos); características en memoria e instrucciones de uso y mantenimiento",
        "Otros vehículos (helicópteros) citados en las instrucciones de uso: valor característico y modelo definidos en proyecto",
        "Otras acciones accidentales: fábricas químicas, laboratorios o almacenes de explosivos → constar en proyecto valor característico y modelo empleado"
      ]
    }
  ],
  claves: [
    "DB-SE-AE: valores característicos salvo indicación contraria",
    "qb viento simplificado en España: 0,5 kN/m²; ce urbano hasta 8 plantas: 2,0 constante",
    "Viviendas sobrecarga de uso: 2 kN/m² uniforme y 2 kN concentrada; tabiquería: 1,0 kN/m² de superficie construida",
    "Cubiertas planas edificios de pisos <1000 m: carga de nieve 1,0 kN/m²",
    "Pamplona: sk = 0,7 kN/m² (450 m de altitud)",
    "Peso específico nieve: 1,2 kN/m³ recién caída; 2,0 prensada; 4,0 con granizo",
    "Incremento radiación solar S/O superficie oscura: +42°C; protegido interior: 20°C todo el año",
    "Edificios habituales hormigón/acero con juntas dilatación que limiten a 40 m: no se consideran acciones térmicas",
    "Impacto vehículos ligeros: 50 kN paralelo a vía, 25 kN perpendicular, no simultáneas",
    "Zonas tránsito vehículos bomberos: 20 kN/m² en superficie 3x8 m; comprobación local 100 kN en círculo 20 cm",
    "Balcones volados: sobrecarga zona servida + 2 kN/m lineal en bordes",
    "Barandillas zonas tráfico vehículos: fuerza horizontal mínima 50 kN",
    "Carretillas elevadoras: fuerza impacto = 5 × peso máximo autorizado"
  ],
  memorizacion: {
    tablas: [
      {
        titulo: "Tabla 3.1. Valores característicos de las sobrecargas de uso",
        columnas: ["Categoría", "Subcategoría de uso", "Uniforme (kN/m²)", "Concentrada (kN)"],
        filas: [
          ["A Zonas residenciales", "A1 Viviendas y zonas de habitaciones en hospitales y hoteles", "2", "2"],
          ["A Zonas residenciales", "A2 Trasteros", "3", "2"],
          ["B Zonas administrativas", "—", "2", "2"],
          ["C Zonas de acceso al público", "C1 Zonas con mesas y sillas", "3", "4"],
          ["C Zonas de acceso al público", "C2 Zonas con asientos fijos", "4", "4"],
          ["C Zonas de acceso al público", "C3 Zonas sin obstáculos al libre movimiento (vestíbulos de edificios públicos, administrativos, hoteles; salas de exposición en museos)", "5", "4"],
          ["C Zonas de acceso al público", "C4 Gimnasio o actividades físicas", "5", "7"],
          ["C Zonas de acceso al público", "C5 Zonas de aglomeración (salas de conciertos, estadios)", "5", "4"],
          ["D Zonas comerciales", "D1 Locales comerciales", "5", "4"],
          ["D Zonas comerciales", "D2 Supermercados, hipermercados o grandes superficies", "5", "7"],
          ["E Tráfico y aparcamiento de vehículos ligeros (peso total < 30 kN)", "—", "2", "20 (1)"],
          ["F Cubiertas transitables accesibles sólo privadamente (2)", "—", "1", "2"],
          ["G Cubiertas accesibles únicamente para conservación (3)", "G1 Cubiertas con inclinación inferior a 20º", "1 (4)(6)", "2"],
          ["G Cubiertas accesibles únicamente para conservación (3)", "G1 Cubiertas ligeras sobre correas, sin forjado (5)", "0,4 (4)", "1"],
          ["G Cubiertas accesibles únicamente para conservación (3)", "G2 Cubiertas con inclinación superior a 40º", "0", "2"]
        ],
        nota: "(1) Dos cargas concentradas de 10 kN separadas 1,8 m; o uniforme de 3,0 kN/m² (nervios o viguetas doblemente apoyados), 2,0 kN/m² (losas, reticulares, nervios continuos) o 1,0 kN/m² (vigas, ábacos, soportes, zapatas). (2) Cubiertas transitables de uso público: el valor del uso de la zona desde la que se accede. (3) Entre 20º y 40º, interpolación lineal entre G1 y G2. (4) Valor sobre la proyección horizontal. (5) Cubierta ligera: carga permanente del cerramiento no mayor de 1 kN/m². (6) Área tributaria menor que la total, no menor de 10 m², en la parte más desfavorable, si figura en el plan de mantenimiento. (7) La sobrecarga G1 no es concomitante con el resto de acciones variables. La C excluye las superficies de las categorías A, B y D."
      },
      {
        titulo: "Reglas complementarias de la sobrecarga de uso (apdo. 3.1.1)",
        columnas: ["Caso", "Regla"],
        filas: [
          ["Carga concentrada en tráfico y aparcamiento", "Simultánea con la uniforme; cuadrado de 200 mm"],
          ["Carga concentrada en el resto", "Independiente y no simultánea; cuadrado de 50 mm de lado"],
          ["Accesos y evacuación de A y B (portales, mesetas, escaleras)", "Valor de la zona servida + 1 kN/m²"],
          ["Balcones volados (comprobación local)", "Sobrecarga de la categoría con la que se comunica + 2 kN/m lineal en el borde"],
          ["Porches, aceras y espacios de tránsito sobre elemento portante o terreno que empuja", "1 kN/m² privados; 3 kN/m² de acceso público"],
          ["Almacén o biblioteca", "Valor en memoria e instrucciones de uso y mantenimiento + placa en obra"],
          ["Alternancia de carga", "Incluida en los valores, salvo elementos críticos (vuelos) y zonas de aglomeración"]
        ],
        nota: "A efectos de combinación, las sobrecargas de cada tipo de uso son acciones diferentes, y los ítems de cada subcategoría de la tabla 3.1 son tipos distintos."
      },
      {
        titulo: "Tabla 3.2. Coeficiente de reducción de sobrecargas (categorías A, B, C y D)",
        columnas: ["Elemento", "Criterio", "Valor del criterio", "Coeficiente"],
        filas: [
          ["Vertical (pilar, muro)", "Número de plantas del mismo uso", "1 ó 2", "1,0"],
          ["Vertical (pilar, muro)", "Número de plantas del mismo uso", "3 ó 4", "0,9"],
          ["Vertical (pilar, muro)", "Número de plantas del mismo uso", "5 ó más", "0,8"],
          ["Horizontal (vigas, nervios, ménsulas, ábacos)", "Superficie tributaria", "16 m²", "1,0"],
          ["Horizontal (vigas, nervios, ménsulas, ábacos)", "Superficie tributaria", "25 m²", "0,9"],
          ["Horizontal (vigas, nervios, ménsulas, ábacos)", "Superficie tributaria", "50 m²", "0,8"],
          ["Horizontal (vigas, nervios, ménsulas, ábacos)", "Superficie tributaria", "100 m²", "0,7"]
        ],
        nota: "En un elemento vertical, los dos coeficientes pueden aplicarse a la vez si las plantas de encima son del mismo uso y de diferentes usuarios (constará en la memoria y en las instrucciones de uso y mantenimiento). Con 1 ó 2 plantas, puede aplicarse a los verticales la reducción por superficie tributaria."
      },
      {
        titulo: "Tabla 3.3. Fuerza horizontal sobre barandillas y elementos divisorios",
        columnas: ["Categoría de uso", "Fuerza horizontal (kN/m)"],
        filas: [
          ["C5", "3,0"],
          ["C3, C4, E, F", "1,6"],
          ["Resto de los casos", "0,8"],
          ["Elementos divisorios (tabiques)", "La mitad de la tabla, según el uso a cada lado"],
          ["Parapetos que delimitan áreas accesibles a vehículos", "Fijada en proyecto, no inferior a qk = 50 kN, sobre 1 m"]
        ],
        nota: "Barandillas: aplicada a 1,2 m o en el borde superior si está a menos altura. Parapetos de vehículos: a 1,2 m sobre la superficie de rodadura o en el borde superior si está a menos altura."
      },
      {
        titulo: "Viento: expresión qe = qb · ce · cp y cifras (apdo. 3.3)",
        columnas: ["Concepto", "Valor o regla"],
        filas: [
          ["qb, presión dinámica", "0,5 kN/m² simplificado en todo el territorio; precisa en Anejo D"],
          ["ce, coeficiente de exposición", "Tabla 3.4 (altura y aspereza); 2,0 constante en edificios urbanos de hasta 8 plantas; más de 30 m, Anejo D"],
          ["cp, coeficiente eólico o de presión", "Forma y orientación; negativo = succión"],
          ["Límites del DB", "No aplicable por encima de 2.000 m de altitud ni a esbeltez superior a 6"],
          ["Acantilados o escarpas de pendiente mayor de 40º", "Altura desde su base; solo para alturas inferiores a 50 m"],
          ["Excentricidad con coeficiente global", "5 % de la dimensión máxima, del lado desfavorable"],
          ["Coeficiente de rozamiento (fuerzas tangenciales)", "0,01 muy lisa (acero, aluminio); 0,02 rugosa (hormigón); 0,04 muy rugosa (ondas, nervaduras, pliegues)"],
          ["Rozamiento despreciable a barlovento y sotavento", "Si no supera el 10 % de la fuerza perpendicular"],
          ["Naves con huecos > 30 % en al menos dos lados", "Como marquesina o pared libre"],
          ["Hueco dominante", "Área al menos 10 veces la suma de los demás huecos"],
          ["Presión interior por huecos", "Doble que el resto: cpi = 0,75 cpe; triple: cpi = 0,9 cpe; intermedios, interpolación; si no, tabla 3.6"]
        ],
        nota: "En edificios de pisos con cubierta plana, la succión del viento sobre ella opera del lado de la seguridad y se puede despreciar."
      },
      {
        titulo: "Tabla 3.4. Coeficiente de exposición ce",
        columnas: ["Grado de aspereza", "3 m", "6 m", "9 m", "12 m", "15 m", "18 m", "24 m", "30 m"],
        filas: [
          ["I Borde del mar o lago (≥ 5 km de agua)", "2,4", "2,7", "3,0", "3,1", "3,3", "3,4", "3,5", "3,7"],
          ["II Rural llano sin obstáculos", "2,1", "2,5", "2,7", "2,9", "3,0", "3,1", "3,3", "3,5"],
          ["III Rural accidentada o con obstáculos aislados", "1,6", "2,0", "2,3", "2,5", "2,6", "2,7", "2,9", "3,1"],
          ["IV Zona urbana en general, industrial o forestal", "1,3", "1,4", "1,7", "1,9", "2,1", "2,2", "2,4", "2,6"],
          ["V Centro de negocio de grandes ciudades", "1,2", "1,2", "1,2", "1,4", "1,5", "1,6", "1,9", "2,0"]
        ],
        nota: "Altura medida respecto a la rasante media de la fachada a barlovento. El entorno se clasifica en el primero de los tipos al que pertenezca para la dirección analizada."
      },
      {
        titulo: "Tabla 3.5. Coeficiente eólico global en edificios de pisos",
        columnas: ["Esbeltez en el plano paralelo al viento", "< 0,25", "0,50", "0,75", "1,00", "1,25", "≥ 5,00"],
        filas: [
          ["Presión, cp", "0,7", "0,7", "0,8", "0,8", "0,8", "0,8"],
          ["Succión, cs", "-0,3", "-0,4", "-0,4", "-0,5", "-0,6", "-0,7"]
        ]
      },
      {
        titulo: "Acciones térmicas (apdo. 3.4) y tabla 3.7",
        columnas: ["Concepto", "Valor"],
        filas: [
          ["Temperatura de referencia", "Media anual del emplazamiento o 10 ºC"],
          ["Mínima en elementos a la intemperie", "La extrema del ambiente (Anejo E)"],
          ["Máxima en elementos a la intemperie", "Extrema del ambiente + radiación solar (tabla 3.7)"],
          ["Radiación, Norte y Este", "Muy claro 0 ºC; claro 2 ºC; oscuro 4 ºC"],
          ["Radiación, Sur y Oeste", "Muy claro 18 ºC; claro 30 ºC; oscuro 42 ºC"],
          ["Elementos protegidos en el interior", "20 ºC todo el año"],
          ["Envolvente no directamente expuesta", "Media entre los dos casos anteriores"],
          ["Juntas de dilatación (hormigón o acero, edificios habituales)", "Sin elementos continuos de más de 40 m → pueden no considerarse"]
        ]
      },
      {
        titulo: "Nieve: cifras del apartado 3.5",
        columnas: ["Concepto", "Valor"],
        filas: [
          ["Cubierta plana de edificio de pisos, altitud < 1.000 m", "1,0 kN/m²"],
          ["Carga sobre cubierta", "qn = µ · sk (proyección horizontal)"],
          ["Protegida del viento / fuertemente expuesta", "−20 % / +20 %"],
          ["Hielo en elementos volados, altitud > 1.000 m", "pn = k · µ² · sk, con k = 3 m"],
          ["Peso específico", "1,2 kN/m³ recién caída; 2,0 prensada o empapada; 4,0 con granizo"],
          ["µ sin impedimento al deslizamiento", "1 hasta 30º; 0 desde 60º; interpolación entre ambos"],
          ["µ con impedimento", "1, sea cual sea la inclinación"],
          ["Limahoya, faldón siguiente en el mismo sentido", "µ del de debajo en una anchura de 2 m"],
          ["Limahoya, faldones en sentido contrario", "β > 30º: µ = 2,0 en ambos; si no, µ = 1 + β/30º en 2 m"],
          ["Distribución asimétrica por viento", "µ a la mitad en las partes en que la acción sea favorable"],
          ["Descarga de faldón / acumulación", "pd = (1 − µ) · L · sk; pa = min(µi, 1) · pd en un ancho no mayor de 2,0 m"]
        ]
      },
      {
        titulo: "Tabla 3.8. sk en capitales de la zona y valores extremos",
        columnas: ["Capital", "Altitud (m)", "sk (kN/m²)"],
        filas: [
          ["Pamplona/Iruña", "450", "0,7"],
          ["Vitoria/Gasteiz", "520", "0,7"],
          ["San Sebastián/Donostia", "0", "0,3"],
          ["Logroño", "380", "0,6"],
          ["Zaragoza", "210", "0,5"],
          ["Huesca", "470", "0,7"],
          ["Soria", "1.090", "0,9"],
          ["Teruel", "950", "0,9"],
          ["Burgos", "860", "0,6"],
          ["Madrid", "660", "0,6"],
          ["León (valor máximo de la tabla)", "820", "1,2"],
          ["Ávila / Cuenca", "1.130 / 1.010", "1,0"],
          ["Capitales costeras del sur y Canarias, Ceuta y Melilla (mínimo)", "0-40", "0,2"]
        ],
        nota: "Otras localidades: Anejo E, según zona y altitud. Por encima de las altitudes tabuladas: ordenanza municipal o datos empíricos."
      },
      {
        titulo: "Acciones accidentales (apdo. 4)",
        columnas: ["Acción", "Valor o regla"],
        filas: [
          ["Sismo", "Remisión a la NCSE"],
          ["Incendio", "Agresión térmica en el DB-SI"],
          ["Vehículos de bomberos", "20 kN/m² en 3 m × 8 m, en cualquier posición de una banda de 5 m de ancho"],
          ["Comprobación local (bomberos)", "100 kN en círculo de 20 cm de diámetro, independiente y no simultánea"],
          ["Impacto de vehículos de hasta 30 kN", "50 kN paralela a la vía y 25 kN perpendicular, no simultáneas"],
          ["Superficie de impacto de vehículos", "0,25 m de alto × 1,5 m (o anchura del elemento); a 0,6 m en verticales; altura del elemento si < 1,8 m en horizontales"],
          ["Carretillas elevadoras", "5 × peso máximo autorizado; 0,4 m × 1,5 m; a 0,75 m si no hay información específica"],
          ["Helicópteros u otros vehículos", "Valor característico y modelo definidos en el proyecto"],
          ["Fábricas químicas, laboratorios, almacenes de explosivos", "Acciones específicas en el proyecto, con valor característico y modelo"]
        ]
      }
    ],
    datos: [
      "Ámbito (1.1): acciones sobre los edificios para verificar la seguridad estructural (capacidad portante y estabilidad) y la aptitud al servicio del DB-SE. Los tipos de acciones y su tratamiento se establecen en el DB-SE.",
      "Estructura del DB: acciones permanentes (2: peso propio, pretensado, terreno), variables (3: sobrecarga de uso, barandillas y divisorios, viento, térmicas, nieve) y accidentales (4: sismo, incendio, impacto, otras).",
      "Peso propio (2.1): valor medio con dimensiones nominales y pesos específicos medios (Anejo C). Tabiques ordinarios de hasta 1,2 kN/m² de alzado y reparto homogéneo: carga uniforme equivalente = peso por m² de alzado × superficie de tabiquería / superficie de planta. Viviendas: 1,0 kN por m² de superficie construida.",
      "Remisiones del DB: pretensado a la Instrucción EHE (2.2), terreno al DB-SE-C (2.3), sismo a la NCSE (4.1), incendio al DB-SI (4.2).",
      "Sobrecarga de uso (3.1): peso de todo lo que puede gravitar sobre el edificio por razón de su uso; los valores de la tabla 3.1 incluyen el uso normal y el poco habitual (acumulación de personas, traslado de mobiliario).",
      "Viento: qe = qb · ce · cp; qb = 0,5 kN/m²; ce = 2,0 en edificios urbanos de hasta 8 plantas; comprobación en todas direcciones aunque haya medianeras, bastando dos ortogonales y los dos sentidos.",
      "Térmicas: temperatura de referencia, la media anual o 10 ºC; interior 20 ºC; juntas cada 40 m como máximo en edificios habituales de hormigón o acero.",
      "Nieve: 1,0 kN/m² en cubiertas planas de edificios de pisos por debajo de 1.000 m; qn = µ · sk; Pamplona sk = 0,7 kN/m².",
      "Impacto: 50/25 kN no simultáneos para vehículos de hasta 30 kN; carretillas, cinco veces su peso máximo autorizado.",
      "Bomberos: 20 kN/m² en 3 × 8 m dentro de una banda de 5 m; local, 100 kN en círculo de 20 cm."
    ],
    excepciones: [
      "Fuera del DB: acciones sobre aparatos elevadores o puentes grúa, silos y tanques. Las fuerzas de rozamiento no se definen: son efectos de las acciones.",
      "Equipos pesados y acumulación de materiales en bibliotecas, almacenes o industrias: no están en la tabla 3.1; valores del suministrador o de la propiedad.",
      "La carga concentrada solo es simultánea con la uniforme en tráfico y aparcamiento de vehículos ligeros.",
      "La alternancia de carga ya está incluida, salvo en elementos críticos (vuelos) y zonas de aglomeración.",
      "La reducción de la tabla 3.2 solo vale para las categorías A, B, C y D (no E, F ni G).",
      "La sobrecarga G1 no es concomitante con el resto de acciones variables.",
      "Viento: el DB no se aplica por encima de 2.000 m de altitud ni a esbelteces superiores a 6; con acantilados, solo hasta 50 m de altura.",
      "La succión del viento en cubiertas planas de edificios de pisos se puede despreciar; el rozamiento a barlovento y sotavento, si no supera el 10 % de la fuerza perpendicular.",
      "Acciones térmicas: pueden no considerarse en edificios habituales de hormigón o acero con juntas que impidan elementos continuos de más de 40 m.",
      "Nieve: los modelos solo cubren el depósito natural; con impedimento al deslizamiento, µ = 1 sea cual sea la inclinación.",
      "Impacto: solo se consideran los accidentales; los elementos se dimensionan para él salvo medidas de protección de eficacia verificada. El impacto exterior de vehículos, solo donde y cuando lo diga la ordenanza municipal.",
      "La carga local de 100 kN de los vehículos de bomberos se considera de forma independiente y no simultánea con la de 20 kN/m²."
    ]
  }
};
