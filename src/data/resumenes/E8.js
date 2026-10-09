// Resumen del tema E8. Formato: cabecera de src/data/resumenes.js.
export default {
    intro: "El CTE DB-HE (Ahorro de Energía), con articulado de 14 de junio de 2022, establece seis exigencias (HE0–HE6) sobre consumo, envolvente, iluminación, renovables y recarga. Las cifras de este resumen se han contrastado con las tablas oficiales: estudia siempre la fila completa, no una secuencia comprimida de números.",
    bloques: [
      { h: "HE0 – Limitación del consumo energético", nota: "HE0 fija límites de consumo de energía primaria no renovable (Cep,nren) y total (Cep,tot). No memorices que las reformas son ‘el doble’: tienen su propia fila y no coincide exactamente en todas las zonas.", items: [
        "Parámetros: Cep,nren (energía primaria no renovable) y Cep,tot (energía primaria total)",
        "En residencial privado: usa la tabla Cep,nren o Cep,tot según el indicador; obra nueva/ampliación y reforma/cambio de uso son filas distintas",
        "Cep,nren extrapeninsular (Illes Balears, Canarias, Ceuta y Melilla): × 1,25; Cep,tot residencial extrapeninsular: × 1,15",
        "Sistema de referencia para demostrar cumplimiento por comparación con edificio de referencia",
      ]},
      { h: "HE1 – Control de la demanda energética (envolvente)", nota: "HE1 limita U, control solar, permeabilidad y estanquidad. Atención: la primera columna de la tabla de huecos es α; si falta, todos los valores quedan desplazados una zona.", items: [
        "Ulim: límites de transmitancia de los elementos de la envolvente térmica",
        "qsol;jul: límite de control solar en julio; se aplica en los supuestos de nueva construcción, ampliación, cambio de uso y determinadas reformas",
        "Q100: permeabilidad al aire de los huecos; n50: renovación de aire a 50 Pa para residencial nuevo >120 m²",
      ]},
      { h: "HE2 – Rendimiento instalaciones térmicas", nota: "HE2 no incluye valores propios en el DB-HE; remite integramente al RITE, que regula eficiencia, bienestar e higiene de las instalaciones térmicas.", items: [
        "Remite al Reglamento de Instalaciones Térmicas en los Edificios (RITE, RD 1027/2007)",
      ]},
      { h: "HE3 – Condiciones de las instalaciones de iluminación", nota: "HE3 exige VEEI, potencia máxima instalada, control y aprovechamiento de luz natural. No confundas VEEI con potencia máxima: son tablas diferentes.", items: [
        "VEEI: límite por uso del recinto, expresado en W/m² por cada 100 lux",
        "Potencia máxima instalada: aparcamientos = 5 W/m²; otros usos = 10 W/m² si Em ≤600 lux y 25 W/m² si Em >600 lux",
        "Control obligatorio: encendido manual exterior + encendido por horario centralizado",
        "Zonas esporádicas (aseos, escaleras): el horario puede sustituirse por detección de presencia o pulsador temporizador",
        "Luz natural: T(Aw/A) > 0,11 + condición geométrica; regula luminarias a menos de 5 m de ventana y bajo lucernario",
      ]},
      { h: "HE4 – Contribución mínima renovable para ACS", nota: "HE4 fija la contribución renovable para ACS y climatización de piscina cubierta. La demanda incluye pérdidas de distribución, acumulación y recirculación.", items: [
        "Ámbito: nueva construcción con ACS >100 l/d; edificio existente con ACS >100 l/d y reforma íntegra, reforma íntegra de la generación térmica o cambio de uso; y ciertos incrementos >50% en edificios con ACS inicial >5.000 l/d",
        "Contribución mínima: ≥70% de la demanda energética anual para ACS",
        "Reducción al 60% si la demanda de ACS es inferior a 5.000 l/d",
        "Bombas de calor ACS: SCOPdhw ≥ 2,5 (eléctricas) o ≥ 1,15 (térmicas) · temp. preparación ≥ 45°C",
      ]},
      { h: "HE5 – Generación mínima de electricidad renovable", nota: "HE5 exige electricidad renovable para autoconsumo o red. El umbral es ‘superen’ o ‘más de’ 1.000 m²: 1.000 m² exactos no bastan.", items: [
        "Ámbito: nueva construcción >1.000 m² · ampliación que incremente >1.000 m² · reforma íntegra o cambio de uso característico de existente >1.000 m²",
        "Pmin = mínimo de: P1 = Fpr;el × S (Fpr;el: 0,005 residencial · 0,010 otros usos) y P2 = 0,1 × (0,5·Sc – Soc)",
        "Si no se puede alcanzar Pmin por razones urbanísticas o de protección, se justifica y se maximiza",
      ]},
      { h: "HE6 – Infraestructura de recarga de vehículos eléctricos", nota: "HE6 establece la preinstalación o instalación de puntos de recarga en aparcamientos de nueva construcción e intervenciones en existentes, con porcentajes distintos para residencial y no residencial.", items: [
        "Ámbito: nueva construcción con aparcamiento · existentes en cambio de uso/ampliación/reforma (condiciones específicas)",
        "Exclusiones: no residencial ≤10 plazas · existentes ≤20 plazas si el coste supera el 7% de la intervención",
        "Residencial privado: conducción de cables para el 100% de las plazas",
        "No residencial: conducción para ≥20% de plazas + 1 estación/40 plazas (AGE: 1/20 plazas) · accesibles: 1 estación/5 plazas",
      ]},
    ],
    claves: [
      "HE0 residencial nuevo: zona C Cep,nren = 32 kWh/m²·año · extrapeninsular ×1,25",
      "HE1 Ulim: muros C = 0,49 · cubiertas B = 0,44 · huecos D = 1,8 W/m²K",
      "HE1 qsol;jul residencial: 2,00 kWh/m²·mes · Q100 zona C: ≤9 m³/h·m²",
      "HE3 VEEI hostelería: 8,0 · zonas esporádicas → presencia o temporizador · luz natural si T(Aw/A)>0,11",
      "HE4 renovable ACS: ≥70% (60% si <5000 l/d) · SCOPdhw bomba calor eléctrica ≥2,5",
      "HE5 ámbito >1.000 m² · Fpr;el: 0,005 residencial / 0,010 otros",
      "HE6 residencial: conducción 100% · no residencial: 20% conducción + 1 estación/40 plazas",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "HE0 · Cep,nren,lim residencial privado (kWh/m²·año)",
          columnas: ["Caso", "α", "A", "B", "C", "D", "E"],
          filas: [
            ["Nuevos y ampliaciones", "20", "25", "28", "32", "38", "43"],
            ["Cambio a residencial y reformas", "40", "50", "55", "65", "70", "80"],
          ],
          nota: "En Illes Balears, Canarias, Ceuta y Melilla: ×1,25. Cep,tot residencial tiene otra tabla: nuevos 40/50/56/64/76/86 y reforma/cambio 55/75/80/90/105/115; allí el factor es ×1,15.",
        },
        {
          titulo: "HE1 · Ulim de la envolvente (W/m²K)",
          columnas: ["Elemento", "α", "A", "B", "C", "D", "E"],
          filas: [
            ["Muros y suelos al exterior", "0,80", "0,70", "0,56", "0,49", "0,41", "0,37"],
            ["Cubiertas al exterior", "0,55", "0,50", "0,44", "0,40", "0,35", "0,33"],
            ["Huecos", "3,2", "2,7", "2,3", "2,1", "1,8", "1,8"],
          ],
          nota: "Huecos = conjunto de marco, vidrio y, en su caso, cajón de persiana. La columna α es esencial.",
        },
        {
          titulo: "HE1 · Control solar y estanquidad",
          columnas: ["Parámetro", "Condición", "Límite"],
          filas: [
            ["qsol;jul", "Residencial privado", "2,00 kWh/m²·mes"],
            ["qsol;jul", "Otros usos", "4,00 kWh/m²·mes"],
            ["Q100 huecos", "Zonas α, A y B", "≤27 m³/h·m²"],
            ["Q100 huecos", "Zonas C, D y E", "≤9 m³/h·m²"],
            ["n50 residencial nuevo >120 m²", "V/A ≤2 / V/A ≥4", "6 h⁻¹ / 3 h⁻¹"],
          ],
          nota: "Entre los valores de compacidad se interpola linealmente. n50 no se aplica por vivienda aislada, sino al conjunto del edificio nuevo considerado.",
        },
        {
          titulo: "HE3 · VEEIlim (selección de usos)",
          columnas: ["Uso del recinto", "VEEIlim (W/m² por 100 lux)"],
          filas: [
            ["Administrativo en general", "3,0"],
            ["Almacenes, cocinas y aparcamientos", "4,0"],
            ["Zonas comunes no residenciales / centros comerciales", "6,0"],
            ["Hostelería y restauración", "8,0"],
            ["Habitaciones de hotel", "10,0"],
            ["Locales con iluminancia >600 lux", "2,5"],
          ],
          nota: "No confundir con potencia máxima instalada: aparcamientos 5 W/m²; otros usos, 10 W/m² si Em ≤600 lux y 25 W/m² si Em >600 lux.",
        },
        {
          titulo: "HE4 · Renovable para ACS y piscina cubierta",
          columnas: ["Concepto", "Exigencia"],
          filas: [
            ["Contribución renovable mínima", "≥70% de la demanda energética anual"],
            ["Reducción", "60% si ACS <5.000 l/d"],
            ["Bomba de calor eléctrica", "SCOPdhw ≥2,5"],
            ["Bomba de calor térmica", "SCOPdhw ≥1,15"],
            ["Temperatura de preparación ACS", "≥45 °C"],
          ],
          nota: "La contribución incluye ACS y climatización de piscina cubierta, con pérdidas de distribución, acumulación y recirculación.",
        },
        {
          titulo: "HE5 · Generación eléctrica renovable",
          columnas: ["Caso", "Regla"],
          filas: [
            ["Ámbito", "Nueva >1.000 m²; ampliación >1.000 m²; reforma íntegra o cambio de uso >1.000 m²"],
            ["P1", "Fpr;el × S: 0,005 residencial / 0,010 resto de usos"],
            ["P2", "0,1 × (0,5 × Sc − Soc)"],
            ["Pmin", "El menor de P1 y P2"],
          ],
        },
        {
          titulo: "HE6 · Infraestructura de recarga",
          columnas: ["Uso", "Conducción de cables", "Estaciones"],
          filas: [
            ["Residencial privado", "100% de plazas", "La sección no fija ratio general"],
            ["No residencial", "≥20% de plazas", "1 por cada 40 plazas o fracción"],
            ["AGE / organismos vinculados", "≥20% de plazas", "1 por cada 20 plazas o fracción"],
            ["Plazas accesibles", "—", "1 por cada 5 plazas accesibles"],
          ],
        },
      ],
    },
  };
