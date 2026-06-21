/* ==================================================================
   SUPUESTOS PRÁCTICOS (2ª prueba)
   Por escrito, a mano, sin textos, con material de dibujo.
   Vale 70 puntos; decide la plaza.

   Campos:
   · bloque        — categoría temática (enum)
   · dificultad    — 1 básico | 2 medio | 3 avanzado
   · fuente        — procedencia del enunciado
   · tiempo_estimado_min
   · temas         — códigos del temario implicados
   · pesos         — { estructura, normativa, calculo, croquis, conclusion }
                     null en un criterio = criterio no aplicable en este supuesto.
                     El resto se normaliza a 70 en tiempo de ejecución.
                     Si no se define pesos, reparto igual entre los 5 criterios.
   · enunciado     — texto completo tal como llegaría al opositor
   · guion         — puntos y normas que el tribunal espera ver
   ================================================================== */

export const SUPUESTOS = [
  {
    id: "SUP-01",
    titulo: "Cambio de uso de local a vivienda en manzana con patio",
    bloque: "licencia",
    dificultad: 2,
    fuente: "Enunciado representativo · temario específico Pamplona 2024",
    tiempo_estimado_min: 60,
    temas: ["E29", "E35", "E18", "E56", "E2"],
    pesos: { estructura: 15, normativa: 20, calculo: 15, croquis: null, conclusion: 20 },
    enunciado:
`Llega a la Gerencia de Urbanismo una solicitud para transformar un local comercial en planta baja en una vivienda, en un edificio de manzana con patio del Segundo Ensanche de Pamplona. El local tiene 58 m² útiles, una única fachada a calle y un patio interior al fondo. El solicitante aporta proyecto básico.

Como arquitecto municipal, redacta el informe técnico sobre la viabilidad: título habilitante exigible, condiciones urbanísticas, normativa técnica de aplicación y pronunciamiento (favorable / desfavorable / a subsanar).`,
    guion:
`GUIÓN DE CORRECCIÓN:

1. ENCUADRE URBANÍSTICO
   · Uso pormenorizado admitido por el Plan Municipal y la Ordenanza General de Edificación (manzana con patio): ¿se permite residencial en planta baja?
   · Comprobar que no esté fuera de ordenación.

2. TÍTULO HABILITANTE
   · Cambio de uso → licencia urbanística (DFL 1/2017, Tít. V; art. 192). No procede declaración responsable para uso residencial.
   · Primera utilización/ocupación posterior.

3. HABITABILIDAD (DF 142/2004)
   · Superficie útil mínima, programa mínimo, alturas libres.
   · Una sola fachada + patio → analizar luces rectas y dimensión del patio (anexo II). PUNTO CRÍTICO.

4. CTE APLICABLE AL CAMBIO DE USO
   · DB-HS (HS1, HS3, HS4/HS5), DB-HE, DB-SI, DB-SUA, DB-HR.

5. ACCESIBILIDAD
   · Itinerario accesible desde vía pública; verificar umbral/desniveles.

6. PRONUNCIAMIENTO MOTIVADO
   · Si patio o luces rectas no cumplen DF 142/2004 → desfavorable o a subsanar, indicando el defecto concreto.

CRITERIO: estructura de informe + cita de norma correcta + detección del punto crítico (habitabilidad/patio).`,
  },

  {
    id: "SUP-02",
    titulo: "Verificación de habitabilidad de vivienda existente",
    bloque: "cte_si_sua",
    dificultad: 1,
    fuente: "Enunciado representativo · temario específico Pamplona 2024",
    tiempo_estimado_min: 45,
    temas: ["E18", "E19"],
    pesos: { estructura: 12, normativa: 18, calculo: 28, croquis: null, conclusion: 12 },
    enunciado:
`Se solicita habitabilidad para una vivienda existente en el Casco Antiguo, resultado de la división de una vivienda mayor. Datos: superficie útil 21,5 m²; estar-comedor-cocina integrado de 14 m²; un dormitorio de 6 m²; baño de 3 m². Altura libre 2,35 m. Ventila a un patio de 5 m² al que abren estar y dormitorio.

Redacta el informe de comprobación del DF 142/2004 (condiciones de viviendas existentes, Anexo I) e indica si procede o no la habitabilidad.`,
    guion:
`GUIÓN DE CORRECCIÓN:

1. RÉGIMEN APLICABLE
   · Vivienda existente → Anexo I del DF 142/2004 (condiciones rebajadas respecto al Anexo II).

2. COMPROBACIONES (cada parámetro frente al Anexo I)
   · Superficie útil mínima y programa mínimo (cocina, estar, dormitorio, aseo).
   · Dimensiones mínimas por pieza: estar ≥9 m², dormitorio principal ≥8 m², aseo ≥1,5 m².
   · Altura libre mínima: ≥2,10 m (Anexo I). Dato: 2,35 m → CUMPLE.
   · Patio de 5 m² con estar y dormitorio: superficie mín. 6 m² → NO CUMPLE. PUNTO CRÍTICO.
   · Luces rectas ≥2 m desde patio a estancias habitables.

3. PUNTOS CRÍTICOS
   · Patio de 5 m² < 6 m² mínimo exigido (Anexo I, art. 7.1) para dormitorios y estancias.
   · Dormitorio de 6 m² = mínimo Anexo I (dormitorios adicionales ≥6 m²). Verificar que cumple 2 m de lado.

4. CONCLUSIÓN MOTIVADA
   · Desfavorable por incumplimiento del patio (5 m² < 6 m²), citando art. 7.1 del Anexo I.

CRITERIO: dominio de las cifras del DF 142/2004 de memoria. Mide retención de datos numéricos precisos.`,
  },

  {
    id: "SUP-03",
    titulo: "Valoración de inmueble en suelo urbanizado a efectos de expropiación",
    bloque: "valoraciones",
    dificultad: 2,
    fuente: "Enunciado representativo · temario específico Pamplona 2024",
    tiempo_estimado_min: 50,
    temas: ["E28", "E38", "E39"],
    pesos: { estructura: 10, normativa: 15, calculo: 35, croquis: null, conclusion: 10 },
    enunciado:
`A efectos de una expropiación parcial, hay que valorar una edificación residencial conforme a la legalidad en suelo en situación de urbanizado. Datos orientativos: edificabilidad y uso atribuidos por el planeamiento, valor de repercusión del suelo conocido, coste de construcción de referencia y antigüedad de la edificación de 25 años.

Expón el método de valoración aplicable según el RDL 7/2015 y el RD 1492/2011, las variables que intervienen y el esquema de cálculo (puedes plantear la formulación sin cifras exactas).`,
    guion:
`GUIÓN DE CORRECCIÓN:

1. MARCO NORMATIVO
   · RDL 7/2015 (Título V, arts. 34-38) + RD 1492/2011. Situación de suelo urbanizado → método de valoración por edificabilidad (art. 22 RDL 7/2015).

2. VALOR DEL SUELO
   · Valor de repercusión × edificabilidad atribuida según el uso. Identificar el uso predominante y sus parámetros.

3. VALOR DE LA EDIFICACIÓN
   · Coste de reposición bruto (VRB) = módulo de construcción × superficie construida.
   · Depreciación: física (por antigüedad, 25 años → coeficiente) y funcional (por estado de conservación).
   · Valor de reposición neto (VRN) = VRB × (1 – depreciación).
   · Referencia ECO/805/2003 para cálculo de VRB/VRN si el tipo de bien lo exige.

4. VALOR TOTAL
   · Suelo + edificación. Posibles correcciones por cargas, servidumbres o derechos reales.
   · Mencionar posible indemnización por traslado o cese de actividad si procede.

5. ESQUEMA DE CÁLCULO ORDENADO Y JUSTIFICADO.

CRITERIO: elegir correctamente el método según la situación básica del suelo; desarrollar la formulación con orden y justificar cada variable.`,
  },

  {
    id: "SUP-04",
    titulo: "Evacuación: ocupación y anchura de salidas (DB-SI 3)",
    bloque: "cte_si_sua",
    dificultad: 2,
    fuente: "Enunciado representativo · temario específico Pamplona 2024",
    tiempo_estimado_min: 50,
    temas: ["E3", "E6"],
    pesos: { estructura: 10, normativa: 15, calculo: 20, croquis: 15, conclusion: 10 },
    enunciado:
`Una planta de uso pública concurrencia de 600 m² útiles destinada a sala polivalente debe evacuarse. Determina, conforme al DB-SI (SI 3) y DB-SUA: la ocupación de cálculo, el número de salidas necesario, la anchura mínima de los elementos de evacuación (puertas y pasillos) y comprueba la longitud máxima de recorrido de evacuación.

Acompaña croquis acotado de la solución (usa el material de dibujo).`,
    guion:
`GUIÓN DE CORRECCIÓN:

1. OCUPACIÓN (DB-SI 3, tabla 2.1)
   · Pública concurrencia, sala polivalente → densidad de ocupación según uso específico.
   · Ocupación total P = superficie útil / densidad.

2. Nº Y DISPOSICIÓN DE SALIDAS
   · ¿Una salida o ≥2? Umbrales: P > 500 → obliga a ≥2 salidas. Si P ≤ 500 puede bastar una (verificar recorrido).

3. DIMENSIONADO (SI 3, ap. 4)
   · Puertas: A ≥ P/200 ≥ 0,80 m.
   · Pasillos: A ≥ P/200 ≥ 1,00 m.
   · Hipótesis de inutilización de la salida de mayor capacidad (con ≥2 salidas).

4. RECORRIDOS DE EVACUACIÓN
   · Longitud máxima según nº de salidas: ≤25 m con salida única; ≤50 m con varias. Verificar.

5. CROQUIS
   · Planta acotada con salidas, sentidos de evacuación y anchuras, coherente con los cálculos anteriores.

CRITERIO: cálculo correcto de P y dimensionado + croquis legible, acotado y coherente. El croquis tiene peso específico en la nota.`,
  },
];
