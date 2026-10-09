// Resumen del tema E11. Formato: cabecera de src/data/resumenes.js.
export default {
  intro: "El DB-SE-AE es el Documento Básico del CTE que determina las acciones sobre los edificios para verificar el cumplimiento de los requisitos de seguridad estructural y aptitud al servicio del DB-SE; todos sus valores son característicos salvo indicación contraria.",
  bloques: [
    {
      h: "Generalidades y ámbito de aplicación (apdo. 1.1)",
      nota: "Trampa frecuente: las fuerzas de rozamiento NO se definen en este DB, sino que se consideran efectos de las acciones. También suele caer qué construcciones quedan fuera de alcance (silos, tanques, aparatos elevadores). Recordar que el ámbito es exclusivamente edificios, no infraestructuras.",
      items: [
        "Ámbito: determinación de acciones sobre edificios para verificar cumplimiento de requisitos de seguridad estructural (capacidad portante y estabilidad) y aptitud al servicio del DB-SE",
        "Fuera de alcance: acciones sobre aparatos elevadores, puentes grúa, silos y tanques",
        "Fuerzas de rozamiento: no se definen en este DB; se consideran efectos de las acciones",
        "Todos los valores tienen sentido de característicos salvo indicación expresa en contrario"
      ]
    },
    {
      h: "Acciones permanentes: peso propio, pretensado y terreno (apdo. 2)",
      nota: "El peso propio parece trivial pero es muy preguntable por la tabiquería. Clave: tabiques ordinarios ≤1,2 kN/m² se asimilan a carga equivalente uniforme; en viviendas basta 1,0 kN/m² de superficie construida sin medir tabique a tabique. Fachadas y elementos pesados son acción local, no sobrecarga de uso.",
      items: [
        "Peso propio: elementos estructurales, cerramientos, tabiquería, carpinterías, revestimientos, rellenos y equipo fijo",
        "Valor característico: valor medio a partir de dimensiones nominales y pesos específicos medios (Anejo C)",
        "Tabiques ordinarios ≤1,2 kN/m² y distribución homogénea: asimilables a carga equivalente uniforme = peso por m² de alzado × (superficie tabiquería / superficie planta)",
        "En viviendas: basta considerar 1,0 kN/m² de superficie construida como peso propio de tabiquería",
        "Tabiquería más pesada: carga equivalente uniforme citada + incremento local igual al exceso sobre 1,2 kN/m² de alzado",
        "Fachadas y compartimentación pesados: acción local asignada a elementos que inequívocamente los soporten; en continuidad con plantas inferiores, totalidad del peso sobre sí mismo por seguridad",
        "Equipos fijos: valor definido por los suministradores",
        "Pretensado: según lo establecido en la Instrucción EHE",
        "Acciones del terreno: empujes, desplazamientos y deformaciones según el DB-SE-C"
      ]
    },
    {
      h: "Sobrecargas de uso: valores y reducción (apdo. 3.1)",
      nota: "La Tabla 3.1 es de memorización obligatoria. Trampa clásica: la carga concentrada actúa simultáneamente con la distribuida SOLO en zonas de tráfico y aparcamiento; en el resto es independiente y no simultánea. Otra trampa: balcones volados llevan la sobrecarga de la zona servida MÁS 2 kN/m lineal en bordes. La reducción por superficie tributaria o número de plantas (Tabla 3.2) solo aplica a categorías A, B, C y D.",
      items: [
        "Sobrecarga de uso: peso de todo lo que puede gravitar por razón del uso; equipos pesados o acumulación en bibliotecas/almacenes se determinan por suministrador o propiedad",
        "Valores característicos Tabla 3.1: A1 viviendas 2 kN/m²; A2 trasteros 3; B oficinas 2; C1 mesas/sillas 3; C2 asientos fijos 4; C3 vestíbulos/salas exposición 5; C4 gimnasio 5; C5 aglomeración 5; D1 comercios 5; D2 grandes superficies 5; E tráfico 2; F cubiertas transitables privadas 1; G1 cubiertas <20° 1; G2 cubiertas >40° 0",
        "Carga concentrada: simultánea con distribuida en tráfico/aparcamiento; independiente y no simultánea en resto; superficie 200 mm lado en tráfico, 50 mm en resto",
        "Zonas de acceso y evacuación de A y B (portales, escaleras): incremento de 1 kN/m² sobre valor de zona servida",
        "Balcones volados: sobrecarga de uso de zona servida + 2 kN/m lineal actuando en bordes",
        "Porches/aceras/espacios tránsito sobre elemento portante: 1 kN/m² si privados, 3 kN/m² si públicos",
        "Reducción Tabla 3.2: aplicable a categorías A, B, C y D; elementos horizontales por superficie tributaria; elementos verticales por número de plantas del mismo uso; simultánea en verticales solo si distintos usuarios"
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
        "Presión estática del viento: qe = qb · ce · cp",
        "qb (presión dinámica): valor simplificado 0,5 kN/m² en cualquier punto de España; valores precisos en Anejo D por emplazamiento geográfico",
        "ce (coeficiente de exposición): en edificios urbanos de hasta 8 plantas puede tomarse 2,0 constante; en general según Tabla 3.4 por altura y grado de aspereza del entorno (I borde del mar a V centro de negocios)",
        "cp (coeficiente eólico): depende de forma y orientación; negativo indica succión; edificios de pisos (Tabla 3.5) cp presión 0,7-0,8, cs succión -0,3 a -0,7 según esbeltez",
        "Cubierta plana en edificios de pisos: succión del lado de la seguridad, despreciable",
        "Fuerzas tangenciales: producto de presión exterior por coeficiente de rozamiento (0,01 muy lisa, 0,02 rugosa, 0,04 muy rugosa); innecesarias en barlovento/sotavento si no superan 10% de la perpendicular",
        "Naves y construcciones diáfanas: acción individualizada en cada elemento; huecos >30% en dos lados → estructura como marquesina o pared libre; presión interior cpi según Tabla 3.6 o proporcional a huecos dominantes"
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
        "Elementos de envolvente no directamente expuestos: media entre ambiente y protegido",
        "Edificios habituales de hormigón o acero con juntas de dilatación que eviten elementos continuos >40 m: no se consideran acciones térmicas"
      ]
    },
    {
      h: "Carga de nieve: valores, coeficiente de forma y acumulación (apdo. 3.5)",
      nota: "Para cubiertas planas de edificios de pisos por debajo de 1000 m basta 1,0 kN/m². Fórmula qn = µ·sk. El coeficiente de forma µ es clave: 1 para ≤30°, 0 para ≥60°; en limahoyas con semisuma de inclinaciones β>30° llega a 2,0. No confundir el peso específico de la nieve recién caída (1,2) con la prensada (2,0) o con granizo (4,0). Elementos volados por encima de 1000 m requieren carga lineal de hielo.",
      items: [
        "Cubiertas planas edificios de pisos <1000 m de altitud: suficiente 1,0 kN/m²",
        "Valor característico: qn = µ · sk (proyección horizontal)",
        "sk: Tabla 3.8 para capitales de provincia y ciudades autónomas; Anejo E para otras localidades; por encima de altitudes tabuladas, ordenanza municipal o datos empíricos",
        "Peso específico de nieve acumulada: 1,2 kN/m³ recién caída; 2,0 prensada o empapada; 4,0 mezclada con granizo",
        "Coeficiente de forma µ: 1 para inclinación ≤30°, 0 para ≥60° (interpolación lineal); con impedimento al deslizamiento µ = 1; limahoyas con semisuma β >30° → µ = 2,0, si no µ = 1 + β/30° en 2 m de anchura",
        "Acumulación en discontinuidades: carga lineal pa = min(µi, 1) · pd, donde pd = (1-µ)·L·sk; repartida en 2 m a cada lado de la discontinuidad",
        "Elementos volados en edificios >1000 m: carga lineal hielo pn = k · µ² · sk con k = 3 metros",
        "Protegida de viento: reducción 20%; fuertemente expuesto: aumento 20%"
      ]
    },
    {
      h: "Acciones accidentales: sismo, incendio e impacto (apdo. 4)",
      nota: "Sismo e incendio se remiten a otras normas (NSCE y DB-SI respectivamente). El impacto de vehículos ligeros tiene valores fijos (50/25 kN) que suelen caer en examen. Carretillas elevadoras: 5 veces su peso máximo autorizado. Las acciones por helicópteros u otros vehículos deben definirse expresamente en proyecto.",
      items: [
        "Sismo: regulado en la NSCE (Norma de construcción sismorresistente: parte general y edificación)",
        "Incendio: acciones térmicas en DB-SI; zonas tránsito vehículos servicios protección contra incendios: 20 kN/m² en superficie 3x8 m dentro de banda de 5 m; comprobación local independiente: 100 kN en círculo de 20 cm de diámetro",
        "Impacto de vehículos ligeros (≤30 kN): fuerzas estáticas equivalentes de 50 kN dirección paralela a vía y 25 kN perpendicular, no simultáneas; aplicadas en superficie rectangular 0,25x1,5 m a 0,6 m sobre rodadura (verticales) o altura del elemento si <1,8 m (horizontales)",
        "Carretillas elevadoras: fuerza estática equivalente = 5 × peso máximo autorizado; superficie 0,4x1,5 m a 0,75 m sobre rodadura (en ausencia de datos específicos)",
        "Otras acciones accidentales: fábricas químicas, laboratorios o almacenes de explosivos → constar en proyecto valor característico y modelo empleado"
      ]
    }
  ],
  claves: [
    "DB-SE-AE: valores característicos salvo indicación contraria",
    "qb viento simplificado en España: 0,5 kN/m²; ce urbano hasta 8 plantas: 2,0 constante",
    "Viviendas sobrecarga de uso: 2 kN/m² uniforme y 2 kN concentrada; tabiquería: 1,0 kN/m² de superficie construida",
    "Cubiertas planas edificios de pisos <1000 m: carga de nieve 1,0 kN/m²",
    "Peso específico nieve: 1,2 kN/m³ recién caída; 2,0 prensada; 4,0 con granizo",
    "Incremento radiación solar S/O superficie oscura: +42°C; protegido interior: 20°C todo el año",
    "Edificios habituales hormigón/acero con juntas dilatación que limiten a 40 m: no se consideran acciones térmicas",
    "Impacto vehículos ligeros: 50 kN paralelo a vía, 25 kN perpendicular, no simultáneas",
    "Zonas tránsito vehículos bomberos: 20 kN/m² en superficie 3x8 m; comprobación local 100 kN en círculo 20 cm",
    "Balcones volados: sobrecarga zona servida + 2 kN/m lineal en bordes",
    "Barandillas zonas tráfico vehículos: fuerza horizontal mínima 50 kN",
    "Carretillas elevadoras: fuerza impacto = 5 × peso máximo autorizado"
  ],
};
