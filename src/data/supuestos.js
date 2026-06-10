/* ==================================================================
   SUPUESTOS PRÁCTICOS (2ª prueba)
   Enunciados representativos sobre la parte específica del temario y
   el formato de las bases (informe técnico, sin textos, con material
   de dibujo). 'guion' = puntos y normas que un tribunal espera ver.
   No hay autocorrección: el opositor se puntúa contra el guión.
   ================================================================== */

export const SUPUESTOS = [
  {
    id: "SUP-01",
    titulo: "Cambio de uso de local a vivienda en manzana con patio",
    temas: ["E29", "E35", "E18", "E56", "E2"],
    minutos: 60,
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
    temas: ["E18", "E19"],
    minutos: 45,
    enunciado:
`Se solicita habitabilidad para una vivienda existente en el Casco Antiguo, resultado de la división de una vivienda mayor. Datos: superficie útil 21,5 m²; estar-comedor-cocina integrado de 14 m²; un dormitorio de 6 m²; baño de 3 m². Altura libre 2,35 m. Ventila a un patio de 5 m² al que abren estar y dormitorio.

Redacta el informe de comprobación del DF 142/2004 (condiciones de viviendas existentes, anexo I) e indica si procede o no la habitabilidad.`,
    guion:
`GUIÓN DE CORRECCIÓN:

1. RÉGIMEN APLICABLE
   · Vivienda existente → anexo I del DF 142/2004 (condiciones rebajadas).

2. COMPROBACIONES (cada parámetro frente al anexo I)
   · Superficie útil mínima, programa mínimo y superficies por pieza.
   · Altura libre mínima en vivienda existente.
   · Dimensión y condiciones del patio; luces rectas a estancias/dormitorios.
   · Ventilación e iluminación de piezas habitables.

3. PUNTOS CRÍTICOS
   · Altura 2,35 m: contrastar con el mínimo del anexo I.
   · Patio de 5 m² con estar y dormitorio: ¿cumple superficie / círculo inscribible / luces rectas?

4. CONCLUSIÓN MOTIVADA citando apartados del anexo I.

CRITERIO: dominio de las cifras del DF 142/2004 de memoria. Mide retención de datos.`,
  },
  {
    id: "SUP-03",
    titulo: "Valoración de inmueble en suelo urbanizado",
    temas: ["E28", "E38", "E39"],
    minutos: 50,
    enunciado:
`A efectos de una expropiación parcial, hay que valorar una edificación residencial conforme a la legalidad en suelo en situación de urbanizado. Datos orientativos: edificabilidad y uso atribuidos por el planeamiento, valor de repercusión del suelo conocido, coste de construcción de referencia y antigüedad de la edificación de 25 años.

Expón el método de valoración aplicable según el RDL 7/2015 y el RD 1492/2011, las variables que intervienen y el esquema de cálculo (puedes plantear la formulación sin cifras exactas).`,
    guion:
`GUIÓN DE CORRECCIÓN:

1. MARCO NORMATIVO
   · RDL 7/2015 (Tít. V) + RD 1492/2011. Situación urbanizado → método residual / por edificabilidad.

2. VALOR DEL SUELO
   · Valor de repercusión × edificabilidad atribuida por el uso.

3. VALOR DE LA EDIFICACIÓN
   · Coste de reposición (VRB) − depreciación física y funcional por antigüedad/estado → VRN.
   · Antigüedad 25 años → coeficiente de depreciación.

4. VALOR TOTAL Y CORRECCIONES
   · Suma suelo + edificación; posibles indemnizaciones. Mención a ECO/805/2003 (VRB/VRN) si procede.

5. ESQUEMA DE CÁLCULO ORDENADO Y JUSTIFICADO.

CRITERIO: elegir bien el método según la situación básica del suelo y desarrollar la formulación con orden.`,
  },
  {
    id: "SUP-04",
    titulo: "Evacuación: ocupación y anchura de salidas (DB-SI 3)",
    temas: ["E3", "E6"],
    minutos: 50,
    enunciado:
`Una planta de uso pública concurrencia de 600 m² útiles destinada a sala polivalente debe evacuarse. Determina, conforme al DB-SI (SI 3) y DB-SUA: la ocupación de cálculo, el número de salidas necesario, la anchura mínima de los elementos de evacuación (puertas y pasillos) y comprueba la longitud máxima de recorrido de evacuación.

Acompaña croquis acotado de la solución (usa el material de dibujo).`,
    guion:
`GUIÓN DE CORRECCIÓN:

1. OCUPACIÓN (DB-SI 3, tabla 2.1)
   · Densidad de ocupación según uso → ocupación total.

2. Nº Y DISPOSICIÓN DE SALIDAS
   · ¿Una salida o ≥2? Umbrales de ocupación y recorridos.

3. DIMENSIONADO (SI 3, ap. 4)
   · Puertas A ≥ P/200 ≥ 0,80 m. Pasillos A ≥ P/200 ≥ 1,00 m. Hipótesis de bloqueo de una salida.

4. RECORRIDOS DE EVACUACIÓN
   · Longitud máxima según nº de salidas (≤25 m salida única; ≤50 m varias). Verificar.

5. CROQUIS
   · Planta acotada con salidas, sentidos de evacuación y anchuras, coherente con los cálculos.

CRITERIO: justifica el material de dibujo. Cálculo correcto + croquis legible y acotado.`,
  },
];
