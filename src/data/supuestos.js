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

  {
    id: "SUP-E32-A",
    titulo: "Declaración de ruina ordinaria: informe técnico y procedimiento",
    bloque: "ruina_disciplina",
    dificultad: 2,
    fuente: "E32 · LFOTU Tít. V Cap. I Secc. 2ª · enunciado generado",
    tiempo_estimado_min: 45,
    temas: ["E32"],
    pesos: { estructura: 15, normativa: 20, calculo: 25, croquis: null, conclusion: 10 },
    enunciado:
`El propietario de un edificio residencial de cuatro plantas en Pamplona solicita que el Ayuntamiento declare el estado ruinoso. Como arquitecto municipal, elabora el informe técnico y describe el procedimiento que debe seguirse.

Datos del edificio: valor actual del edificio excluido el valor del terreno = 280.000 €; coste de las obras de reparación necesarias para su consolidación = 155.000 €. Además, los forjados de las plantas 2.ª y 3.ª presentan deterioro generalizado con deformaciones inadmisibles en sus elementos estructurales principales.`,
    guion:
`GUIÓN DE CORRECCIÓN (E32 · LFOTU):

1. SUPUESTOS DE DECLARACIÓN DE RUINA (art. 199.2, l. 218)
   El art. 199.2 prevé tres supuestos:
   a) Coste obras > 50 % del valor actual del edificio o plantas afectadas,
      excluido el valor del terreno (art. 199.2.a, l. 220).
   b) Agotamiento generalizado de elementos estructurales o fundamentales
      (art. 199.2.b, l. 222).
   c) Obras no autorizables por fuera de ordenación (art. 199.2.c, l. 224).

2. COMPROBACIÓN SUPUESTO a) — CÁLCULO (art. 199.2.a, l. 220)
   · Coste de obras: 155.000 €
   · Valor actual excluido terreno: 280.000 €
   · Ratio: 155.000 / 280.000 = 55,36 % → SUPERIOR AL 50 %
   → CUMPLE: procede declaración de ruina por este supuesto.
   PUNTO CRÍTICO: el cálculo es concluyente por sí solo.

3. COMPROBACIÓN SUPUESTO b) — AGOTAMIENTO ESTRUCTURAL (art. 199.2.b, l. 222)
   · Los forjados de P2 y P3 presentan deterioro generalizado de sus
     elementos estructurales principales.
   → También cumple el supuesto del art. 199.2.b; aunque el supuesto a)
     ya es suficiente, la concurrencia de ambos refuerza el pronunciamiento.

4. PROCEDIMIENTO (art. 199.1, l. 216)
   · El Ayuntamiento actúa de oficio o a instancia de cualquier interesado.
   · Previa audiencia del propietario y de los moradores.
   · En su caso, de conformidad con las previsiones del planeamiento.
   · Adoptar las medidas necesarias para asegurar la integridad física de
     los ocupantes y de terceras personas.

5. EFECTOS Y OBLIGACIONES POSTERIORES
   · Si el propietario no cumple → el Ayuntamiento lo ejecuta a su costa
     (art. 199.3, l. 226).
   · Urgencia y peligro en la demora → el Alcalde, bajo su responsabilidad,
     dispondrá lo necesario para asegurar la integridad física
     (art. 199.4, l. 228).
   · Las edificaciones declaradas en ruina deberán ser sustituidas o
     rehabilitadas conforme al planeamiento en el plazo por éste establecido
     (art. 199.5, l. 230).
   · Agotados los plazos sin solicitar licencia → la Administración
     sancionará el retraso (art. 199.5 párr. 2.º, l. 232).

6. PRONUNCIAMIENTO
   Procede la declaración de ruina al concurrir el supuesto del art. 199.2.a
   (ratio 55,36 % > 50 %, l. 220) y, adicionalmente, el del art. 199.2.b
   (agotamiento estructural generalizado, l. 222).

CRITERIO: cálculo correcto del ratio (art. 199.2.a) + identificación de
los supuestos concurrentes + procedimiento (audiencia propietario y moradores,
art. 199.1) + efectos posteriores (rehabilitar/sustituir y consecuencias del
incumplimiento, art. 199.3-5).`,
  },

  {
    id: "SUP-E32-B",
    titulo: "Obras de ampliación concluidas sin licencia: legalidad, plazos y sanciones",
    bloque: "licencia",
    dificultad: 3,
    fuente: "E32 · LFOTU Tít. V Cap. II y III · enunciado generado",
    tiempo_estimado_min: 55,
    temas: ["E32"],
    pesos: { estructura: 15, normativa: 25, calculo: 15, croquis: null, conclusion: 15 },
    enunciado:
`La inspección urbanística detecta que un particular ha añadido una planta entera a su vivienda unifamiliar en suelo urbano sin contar con licencia urbanística. Según el expediente, los signos físicos exteriores de la obra son visibles desde la vía pública desde hace exactamente 2 años; la ampliación resulta compatible con las determinaciones del planeamiento vigente; y el promotor sigue siendo propietario del inmueble.

Como arquitecto municipal, redacta el informe sobre la situación urbanística, el procedimiento de protección de la legalidad aplicable, las personas responsables y el régimen sancionador que corresponde.`,
    guion:
`GUIÓN DE CORRECCIÓN (E32 · LFOTU):

1. CALIFICACIÓN DEL ACTO (art. 190.2.b, l. 20)
   · La ampliación de edificios existentes está sujeta a licencia urbanística
     (art. 190.2.b, l. 20).
   · Las obras han concluido sin licencia → aplica el art. 203 (obras
     ejecutadas ilegalmente, l. 283), no el art. 202 (obras en curso, l. 276).

2. PLAZO DE ACTUACIÓN MUNICIPAL (art. 203, l. 283)
   · La Entidad Local tiene 4 años desde la total terminación de las obras
     o desde la aparición de signos físicos exteriores que permitan su
     conocimiento (art. 203, l. 284).
   · Han transcurrido 2 años → plazo vigente: la Administración puede actuar
     (2 años < 4 años).

3. PROCEDIMIENTO SEGÚN COMPATIBILIDAD (art. 202.b, l. 280)
   · Obras compatibles con la ordenación vigente → art. 203 remite a los
     acuerdos del art. 202 (l. 283); por ser compatibles, se aplica
     el art. 202.b (l. 280):
     requerir al interesado para que, en el plazo del requerimiento o en
     su defecto 2 meses, solicite la preceptiva licencia o su modificación.
   · Si no se solicita licencia o si fuera denegada → demolición,
     reconstrucción o cesación definitiva a costa del interesado
     (art. 202.b in fine, l. 280).
   CONTRASTE: si las obras fueran incompatibles con el planeamiento →
   demolición directa sin posibilidad de legalización (art. 202.a, l. 278).

4. PERSONAS RESPONSABLES (art. 213.1, l. 380)
   · El promotor, el empresario de las obras y el técnico director de
     las mismas (art. 213.1, l. 380).
   · A efectos de responsabilidad, también es promotor el propietario
     del suelo que ha tenido conocimiento de las obras infractoras
     (art. 213.3, l. 386). Aquí promotor y propietario actual coinciden.

5. CALIFICACIÓN DE LA INFRACCIÓN Y SANCIÓN
   · Adición de planta = exceso de edificación sobre la edificabilidad
     permitida (superficie construida) → infracción GRAVE (art. 215.5,
     l. 440: "entendiéndose por la misma tanto la superficie construida
     como el volumen").
   · Multa: desde 6.000 hasta 60.000 euros (art. 218.1.b, l. 502).
   · Si el beneficio obtenido supera la sanción → se incrementa en la
     cuantía equivalente al beneficio (art. 218.2, l. 506).

6. PRESCRIPCIÓN DE LA INFRACCIÓN (art. 225.1, l. 598)
   · Infracciones graves prescriben a los 8 años desde su comisión
     o desde la aparición de signos exteriores (art. 225.4, l. 604).
   · Han transcurrido 2 años → la infracción NO ha prescrito (2 < 8 años).

7. PRONUNCIAMIENTO
   · Actuar: plazo municipal no agotado (2 años < 4 años, art. 203, l. 284).
   · Obras compatibles → requerir legalización en 2 meses (art. 202.b, l. 280).
   · Incoar expediente sancionador: infracción grave art. 215.5 (l. 440),
     multa 6.000-60.000 € (art. 218.1.b, l. 502).
   · Infracción no prescrita: 2 años < 8 años (art. 225.1, l. 598).

CRITERIO: distinción art. 202 (en curso) / art. 203 (concluidas) + verificar
plazo 4 años (art. 203) + aplicar art. 202.b (compatible: 2 meses para
legalizar) + calificar infracción grave art. 215.5 + sanción exacta
6.000-60.000 € (art. 218.1.b) + prescripción 8 años (art. 225.1).`,
  },

  {
    id: "SUP-E03-A",
    titulo: "DB-SI · Ocupación y dimensionado de escalera en edificio mixto Administrativo / Pública concurrencia",
    bloque: "cte_si_sua",
    dificultad: 3,
    fuente: "E3 · DB-SI SI3 · enunciado generado",
    tiempo_estimado_min: 60,
    temas: ["E3"],
    pesos: { estructura: 10, normativa: 20, calculo: 30, croquis: null, conclusion: 10 },
    enunciado:
`Se proyecta en Pamplona un edificio de uso principalmente Administrativo (oficinas) de cuatro plantas sobre rasante. El edificio dispone de una sola escalera interior de 1,20 m de anchura útil, declarada en el proyecto como escalera no protegida. No existe instalación automática de extinción.

Superficies útiles:

  Planta baja (PB, cota ±0,00 — salida del edificio)
    · Vestíbulo y zonas de uso público ............. 120 m²
    · Zona de oficinas ............................. 240 m²
  Planta 1.ª (PB +3,00 m) — zona de oficinas ....... 400 m²
  Planta 2.ª (PB +6,00 m) — zona de oficinas ....... 400 m²
  Planta 3.ª (PB +9,00 m) — zona de oficinas ....... 400 m²
  Planta 4.ª (PB +12,00 m) — sala polivalente multiusos
    (congresos y conferencias abiertos al público) .. 300 m²

Se pide:
  a) Calcular la ocupación de cada planta y la ocupación total del edificio.
  b) Determinar en qué plantas es necesaria más de una salida de planta.
  c) Verificar si la escalera no protegida es admisible y, si no lo es, indicar el tipo exigido.
  d) Verificar si la anchura de 1,20 m es suficiente para la escalera exigida en c)
     y, en caso negativo, calcular la anchura mínima necesaria.`,
    guion:
`GUIÓN DE CORRECCIÓN (DB-SI · E_Tema03.txt):

1. CLASIFICACIÓN DE USO DE LA SALA POLIVALENTE (P4)
   Uso para congresos y conferencias abiertos al público
   → uso PÚBLICA CONCURRENCIA, subcategoría "salones de uso múltiple
     en edificios para congresos, hoteles, etc." (tabla 2.1, l. 1286)
   → densidad: 1 m²/persona (l. 1286).
   Resto del edificio (PB, P1-P3): uso Administrativo.

2. CÁLCULO DE OCUPACIÓN — tabla 2.1 (l. 1180)

   PB vestíbulo/zona uso público:
     120 m² / 2 m²/persona = 60 personas (l. 1216)
   PB oficinas:
     240 m² / 10 m²/persona = 24 personas (l. 1214)
   PB total: 84 personas

   P1 oficinas:  400 / 10 = 40 personas (l. 1214)
   P2 oficinas:  400 / 10 = 40 personas
   P3 oficinas:  400 / 10 = 40 personas
   P4 salón multiusos (Pública concurrencia):
     300 m² / 1 m²/persona = 300 personas (l. 1286)

   TOTAL EDIFICIO: 504 personas

3. NÚMERO DE SALIDAS POR PLANTA — tabla 3.1 (l. 1325)
   Una única salida admisible si: P ≤ 100 personas + recorrido ≤ 25 m
   + h evacuación descendente ≤ 28 m (l. 1335, 1351, 1359).

   PB: 84 < 100 → 1 salida admisible (si recorrido ≤ 25 m)
   P1: 40 < 100 → 1 salida admisible
   P2: 40 < 100 → 1 salida admisible
   P3: 40 < 100 → 1 salida admisible
   P4: 300 > 100 → MÁS DE UNA SALIDA DE PLANTA NECESARIA (l. 1335)

   Nota (l. 1378-1381): con más de 1 salida obligada en P4, "al menos
   dos salidas de planta conducen a dos escaleras diferentes". Con una
   sola escalera es necesaria una segunda vía de escape independiente
   desde P4 (segunda escalera, salida directa a exterior, terraza, etc.).

4. PROTECCIÓN DE LA ESCALERA — tabla 5.1 (l. 1570)
   La escalera única comunica con todos los usos; debe cumplir las
   condiciones más restrictivas de los usos de cada planta (l. 1607-1610):

   P1-P3 (Administrativo) — no protegida: h ≤ 14 m (l. 1580). h = 9 m ✓
   P4 (Pública concurrencia) — no protegida: h ≤ 10 m (l. 1582).
     h = 12 m > 10 m → ESCALERA NO PROTEGIDA NO ADMISIBLE.

   Debe ser ESCALERA PROTEGIDA.
   Comprobación: Pública concurrencia, protegida → h ≤ 20 m (l. 1582).
   12 m < 20 m ✓.

5. CAPACIDAD DE LA ESCALERA PROTEGIDA — tabla 4.2 (l. 1524)
   E = personas que usan la escalera (PB sale directamente al exterior):
   E = P1 + P2 + P3 + P4 = 40 + 40 + 40 + 300 = 420 personas
   Plantas servidas: 4

   Fila de la tabla 4.2 (l. 1532), escalera protegida, 4 plantas:
     1,20 m → 356 personas  (420 > 356 → INSUFICIENTE)

   Fila de la tabla 4.2 (l. 1535), escalera protegida, 4 plantas:
     1,50 m → 472 personas  (420 < 472 → CUMPLE ✓)

   ANCHURA MÍNIMA NECESARIA: 1,50 m.
   (Tabla 4.2 válida para escalera de doble tramo con anchura constante,
    l. 1554; otras configuraciones → fórmula E ≤ 3S + 160·AS, l. 1455.)

CRITERIO: uso P4 = Pública concurrencia, densidad 1 m²/p (tabla 2.1) +
cálculo P por planta y total (504) + solo P4 necesita >1 salida (300>100) +
escalera no protegida NO admisible (h=12m >10m, tabla 5.1, uso más
restrictivo l.1607) → protegida exigida + tabla 4.2: 356<420 insuficiente
→ anchura mínima 1,50 m (capacidad 472).`,
  },

  {
    id: "SUP-E03-B",
    titulo: "DB-SI · Recorridos de evacuación: tramo ciego y límites 25/50 m en local comercial",
    bloque: "cte_si_sua",
    dificultad: 2,
    fuente: "E3 · DB-SI SI3 · enunciado generado",
    tiempo_estimado_min: 40,
    temas: ["E3"],
    pesos: { estructura: 10, normativa: 25, calculo: 25, croquis: null, conclusion: 10 },
    enunciado:
`Un local de venta de ropa (uso Comercial) ocupa la planta baja de un edificio residencial en Pamplona. Superficie útil del área de ventas: 480 m². El local dispone de dos salidas de planta: Salida P (fachada principal) y Salida L (fachada lateral). No existe instalación automática de extinción.

Datos de recorridos medidos desde el punto más desfavorable del local:

  Recorrido hasta Salida P: ..................................... 54 m
  Recorrido hasta Salida L: ..................................... 46 m
  Recorrido hasta el punto desde el cual existen
  al menos dos itinerarios alternativos: ........................ 28 m

Se pide:
  a) Calcular la ocupación del local y verificar si la dotación de dos salidas es suficiente.
  b) Verificar si se cumplen las condiciones de longitud de recorrido de evacuación
     del DB-SI con las dos salidas existentes.
  c) ¿Permitiría la instalación de un sistema automático de extinción sanear
     el incumplimiento detectado?`,
    guion:
`GUIÓN DE CORRECCIÓN (DB-SI · E_Tema03.txt):

1. OCUPACIÓN — tabla 2.1 (l. 1180)
   Local comercial, área de ventas en planta baja → 2 m²/persona (l. 1237).
   P = 480 / 2 = 240 personas.

   Número de salidas (tabla 3.1, l. 1335): P > 100 → más de una salida necesaria.
   El local tiene 2 salidas → dotación suficiente ✓.

2. CONDICIONES DE RECORRIDO con 2 salidas — tabla 3.1 (l. 1364-1376)

   REGLA A — Recorrido hasta alguna salida de planta (l. 1364-1365):
     "La longitud de los recorridos de evacuación hasta alguna salida
      de planta no excede de 50 m"
     Salida P: 54 m > 50 m  — no es la más próxima; no determina incumplimiento.
     Salida L: 46 m < 50 m  — "hasta alguna salida" se refiere a la más próxima.
     → CUMPLE.

   REGLA B — Tramo sin bifurcación (l. 1373-1376):
     "La longitud [...] desde su origen hasta llegar a algún punto desde el
      cual existan al menos dos recorridos alternativos no excede de [...]
      la longitud máxima admisible cuando se dispone de una sola salida,
      en el resto de los casos."
     Longitud máxima con una sola salida (Comercial, planta baja): 25 m (l. 1351).
     Tramo hasta bifurcación: 28 m > 25 m → NO CUMPLE.

3. ¿SE CORRIGE CON EXTINCIÓN AUTOMÁTICA? — nota (1) tabla 3.1 (l. 1383-1384)
   "La longitud de los recorridos de evacuación que se indican se puede
    aumentar un 25% cuando se trate de sectores de incendio protegidos con
    una instalación automática de extinción."

   Regla A con extinción: 50 × 1,25 = 62,5 m → Salida L 46 m < 62,5 m ✓
   Regla B con extinción: 25 × 1,25 = 31,25 m → tramo 28 m < 31,25 m ✓
   CON INSTALACIÓN AUTOMÁTICA DE EXTINCIÓN: CUMPLE.

   Sin rociadores: reubicar/añadir salida de forma que el tramo sin
   alternativa desde el punto más desfavorable quede ≤ 25 m.

CRITERIO: P = 480/2 = 240 → 2 salidas mínimo (l.1335) ✓ + Regla A: 46m<50m
(l.1364) ✓ + Regla B: tramo 28m>25m (l.1373-1376) ✗ + corrección con
rociadores: 25×1,25=31,25m; 28m<31,25m ✓ (l.1383).`,
  },

  {
    id: "SUP-E06-A",
    titulo: "DB-SUA · Escalera de uso general sin ascensor + rampa itinerario accesible",
    bloque: "cte_si_sua",
    dificultad: 2,
    fuente: "E6 · DB-SUA SUA1 · enunciado generado",
    tiempo_estimado_min: 40,
    temas: ["E6"],
    pesos: { estructura: 10, normativa: 20, calculo: 30, croquis: null, conclusion: 10 },
    enunciado:
`Se proyecta un edificio de uso Administrativo de tres plantas sobre rasante. No se dispone de ascensor. El acceso desde la calle se resuelve con una rampa exterior perteneciente al itinerario accesible.

Datos de la escalera interior (uso general, tramos rectos):

  Huella:                  H = 28 cm
  Contrahuella:            C = 18 cm
  Peldaños por tramo:      10
  Anchura útil del tramo:  1,10 m
  Pasamanos:               uno (lado izquierdo)

Datos de la rampa exterior (itinerario accesible):

  Pendiente longitudinal:  7 %
  Longitud del tramo:      8 m

Se pide:
  a) Verificar si la escalera cumple los límites de huella, contrahuella
     y la relación 2C + H.
  b) Verificar si la altura salvada por tramo es admisible.
  c) Verificar si la rampa cumple la pendiente y la longitud máxima de tramo.`,
    guion:
`GUIÓN DE CORRECCIÓN (DB-SUA · E_Tema06.txt):

1. ESCALERA DE USO GENERAL SIN ASCENSOR — ap. 4.2.1 (l. 615-620)
   Límites aplicables cuando no se dispone de ascensor como alternativa:

   Huella mínima:       H ≥ 28 cm (l. 615)
   Contrahuella máxima: C ≤ 17,5 cm (l. 617-618: "siempre que no se
     disponga ascensor como alternativa [...] la contrahuella medirá
     17,5 cm, como máximo")
   Relación (l. 619-620): 54 cm ≤ 2C + H ≤ 70 cm

   Comprobación:
     H = 28 cm → 28 ≥ 28 ✓
     C = 18 cm → 18 > 17,5  → INCUMPLE (exceso de 0,5 cm)
     2C + H = 2×18 + 28 = 64 cm → 54 ≤ 64 ≤ 70 ✓

   PUNTO CRÍTICO: la relación cumple, pero la contrahuella NO cumple.
   Son condiciones independientes; ambas deben satisfacerse.

   Pasamanos (l. 772-773):
     "cuando no se disponga ascensor [...] dispondrán de pasamanos
      en ambos lados."
     Con un solo pasamanos → INCUMPLE.

2. ALTURA SALVADA POR TRAMO — ap. 4.2.2 punto 1 (l. 654-655)
   Límite sin ascensor: 2,25 m
   (l. 655: "así como siempre que no se disponga ascensor como
    alternativa a la escalera")
   Altura por tramo = 10 × 0,18 m = 1,80 m < 2,25 m ✓

3. RAMPA ITINERARIO ACCESIBLE — ap. 4.3.1 y 4.3.2 (l. 802-804, 823-824)

   Pendiente máxima según longitud del tramo (l. 802-804):
     L < 3 m → máx 10 %
     L < 6 m → máx  8 %
     L ≥ 6 m → máx  6 %
   Tramo: L = 8 m → aplica límite del 6 %.
   Pendiente proyectada: 7 % > 6 % → INCUMPLE.

   Longitud máxima de tramo accesible (l. 823-824):
     "si la rampa pertenece a itinerarios accesibles [...] la longitud
      del tramo será de 9 m, como máximo."
   L = 8 m ≤ 9 m ✓

   Corrección posible sin reducir pendiente: dividir en 2 tramos
   de L < 6 m cada uno → límite pasa a 8 % > 7 % ✓.

RESUMEN DE INCUMPLIMIENTOS:
  · Escalera: C = 18 cm > 17,5 cm (l. 617-618).
  · Escalera: pasamanos solo en 1 lado (l. 772-773).
  · Rampa:    pendiente 7 % > 6 % para tramo ≥ 6 m (l. 802).

CRITERIO: C ≤ 17,5 cm sin ascensor (l.617-618) + relación 2C+H = 64 ∈
[54,70] ✓ (l.620) + condiciones independientes + altura tramo 1,80 m <
2,25 m ✓ (l.655) + rampa accesible L=8m ≥ 6m → máx 6% (l.802); 7%>6% ✗
+ longitud 8m ≤ 9m ✓ (l.823).`,
  },

  {
    id: "SUP-E38-A",
    titulo: "Orden ECO/805/2003 · Método residual estático: valor máximo de solar",
    bloque: "valoraciones",
    dificultad: 2,
    fuente: "E38 · Orden ECO/805/2003 art. 42 · enunciado generado",
    tiempo_estimado_min: 35,
    temas: ["E38"],
    pesos: { estructura: 10, normativa: 20, calculo: 30, croquis: null, conclusion: 10 },
    enunciado:
`Un promotor inmobiliario solicita la tasación de un solar en Pamplona para conocer el precio máximo que puede pagar por él. El solar está clasificado como suelo urbano consolidado y puede edificarse de forma inmediata.

Datos de la promoción prevista:

  VM (valor del inmueble en hipótesis de edificio terminado,
      calculado por método de comparación):           2.500.000 €

  Pagos necesarios previstos (Σ Ci):
    · Costes de construcción:                         1.050.000 €
    · Honorarios técnicos y licencias:                  105.000 €
    · Gastos de comercialización:                        75.000 €
    · Gastos financieros:                                20.000 €
    Total Σ Ci:                                       1.250.000 €

  Margen neto del promotor (b):                          0,20 (20 %)

Se pide:
  a) Indicar en qué procedimiento del método residual se encuadra el cálculo
     y justificar por qué es el aplicable.
  b) Calcular el valor residual del solar (F).`,
    guion:
`GUIÓN DE CORRECCIÓN (Orden ECO/805/2003 · E_Tema38.txt):

1. ELECCIÓN DEL PROCEDIMIENTO (art. 34, l. 564-577)
   Art. 34.3 (l. 577): "El método residual sólo se podrá aplicar mediante
   el procedimiento estático, a los solares e inmuebles en rehabilitación
   en los que se pueda comenzar la edificación o rehabilitación en un plazo
   no superior a un año, así como a los solares edificados."

   El solar puede edificarse de inmediato → procedimiento ESTÁTICO.
   (Plazos pendientes de gestión urbanística → habría que evaluar el
   procedimiento dinámico, art. 34.2, l. 571-576.)

2. PASOS DEL PROCEDIMIENTO ESTÁTICO (art. 40, l. 652-663)
   a) Estimar costes de construcción y gastos necesarios (l. 655).
   b) Estimar VM del inmueble terminado (l. 657).
   c) Fijar margen del promotor (l. 659).
   d) Aplicar fórmula (l. 661).

3. FÓRMULA (art. 42, l. 668-681)
   F = VM · (1 – b) – Σ Ci   (l. 671)

   Donde:
     F  = Valor del terreno o inmueble a rehabilitar  (l. 675)
     VM = Valor del inmueble terminado = 2.500.000 €  (l. 677)
     b  = Margen neto del promotor = 0,20             (l. 679)
     Σ Ci = Suma de pagos necesarios = 1.250.000 €    (l. 681)

   F = 2.500.000 × (1 – 0,20) – 1.250.000
   F = 2.500.000 × 0,80       – 1.250.000
   F = 2.000.000              – 1.250.000
   F = 750.000 €

   El valor residual (precio máximo a pagar por el solar): 750.000 €.

CRITERIO: identificar procedimiento estático (art. 34.3, l. 577) +
citar y aplicar F = VM(1-b) - ΣCi (art. 42, l. 671) +
resultado correcto 750.000 €.`,
  },

  {
    id: "SUP-E39-A",
    titulo: "RD 1492/2011 · Valoración de suelo rural por capitalización de renta",
    bloque: "valoraciones",
    dificultad: 2,
    fuente: "E39 · RD 1492/2011 arts. 7, 9, 11 · enunciado generado",
    tiempo_estimado_min: 30,
    temas: ["E39"],
    pesos: { estructura: 10, normativa: 20, calculo: 30, croquis: null, conclusion: 10 },
    enunciado:
`El Ayuntamiento de Pamplona expropia una parcela de suelo rural con aprovechamiento agrícola de secano para ejecutar un nuevo vial. La propietaria impugna el justiprecio y aporta los siguientes datos de la explotación:

  Superficie de la finca:                        1,5 ha
  Ingresos anuales de la explotación (I):     3.600 €/ha/año
  Costes anuales de la explotación (C):       1.600 €/ha/año
  Tipo de capitalización general (r1):             3 %
    (art. 12.1.a; remite a Disp. Adicional 7.ª TRLSRU)

Se considera que la renta es constante y la explotación de vida útil ilimitada.

Se pide:
  a) Calcular la renta anual de la explotación (R) por hectárea y en total.
  b) Calcular el valor del suelo por capitalización (V total de la finca).`,
    guion:
`GUIÓN DE CORRECCIÓN (RD 1492/2011 · E_Tema39.txt):

AVISO NORMATIVA (l. 268): El art. 12.b y el Anexo I (coeficiente
corrector r2 para actividades agropecuarias/forestales) fueron declarados
nulos de pleno derecho por STS de 8 de junio de 2020. Solo se aplica r1
(tipo general). El art. 2 figura "(Derogado)" (l. 64).

1. MÉTODO APLICABLE (art. 7.1, l. 139-141)
   "Cuando el suelo estuviera en situación de rural, los terrenos se
    valorarán mediante la capitalización de la renta anual real o potencial
    de la explotación [...] según su estado en el momento al que deba
    entenderse referida la valoración y adoptándose la que sea superior."

2. CÁLCULO DE LA RENTA (art. 9.1, l. 156-169)
   R = I – C   (l. 161)
   R = 3.600 – 1.600 = 2.000 €/ha/año
   R total (1,5 ha) = 2.000 × 1,5 = 3.000 €/año

3. CAPITALIZACIÓN — RENTA CONSTANTE, VIDA ILIMITADA (art. 11.b, l. 249-260)
   "Cuando se considere una renta de la explotación, R, constante a lo
    largo del tiempo, la expresión [...] se transformará en V = R / r"

   V = R / r1 = 3.000 / 0,03 = 100.000 €

   El valor del suelo rural de la finca: 100.000 €.

   Nota: podría aplicarse factor de corrección por localización al alza
   (art. 7.3, l. 145), si concurren las circunstancias del art. 17.

CRITERIO: citar art. 7.1 (método capitalización suelo rural) +
R = I - C = 2.000 €/ha (art. 9, l. 161) + V = R/r = 100.000 €
(art. 11.b, l. 249-260) + mencionar nulidad r2/Anexo I (STS 2020, l. 268).`,
  },
];
