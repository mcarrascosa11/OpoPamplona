// Tema E04 — RIPCI. Resumen elaborado exclusivamente a partir de E_Tema04.txt.
export const RESUMEN_E04 = {
  intro: "El RIPCI regula las condiciones y requisitos de diseño, instalación/aplicación, mantenimiento e inspección de equipos, sistemas y componentes de protección activa contra incendios. El resumen se limita al contenido del E_Tema04.txt.",
  bloques: [
    { h: "Disposiciones generales", items: [
      "Objeto: condiciones y requisitos para diseño, instalación/aplicación, mantenimiento e inspección de instalaciones de protección activa contra incendios.",
      "La protección activa comprende medios, equipos y sistemas manuales o automáticos para detección, control y/o extinción.",
      "Empresa instaladora: instala equipos y sistemas y coloca señales, balizamientos o planos de evacuación luminiscentes. Empresa mantenedora: realiza operaciones de mantenimiento."
    ]},
    { h: "Sistemas de detección y alarma", items: [
      "Diseño, instalación, puesta en servicio y uso según UNE 23007-14; compatibilidad de componentes según UNE-EN 54-13; alarma por voz según UNE 23007-32.",
      "Pulsadores: recorrido máximo 25 m y parte superior entre 80 y 120 cm.",
      "El equipo de control e indicación debe permitir identificar la zona activada.",
      "Los dispositivos de alarma visual se disponen en los supuestos indicados por el reglamento."
    ]},
    { h: "Abastecimiento de agua e hidrantes", items: [
      "El abastecimiento comprende fuentes de agua, equipos de impulsión y red general para garantizar caudal, presión y autonomía.",
      "Zona protegida por hidrante: recorrido real inferior a 100 m en zonas urbanas y a 40 m en el resto.",
      "Al menos un hidrante tendrá salida de 100 mm, en las condiciones establecidas.",
      "Caudal mínimo por boca: 500 l/min. La presión mínima depende de si se utiliza para llenado de camiones o para impulsión directa."
    ]},
    { h: "Extintores", items: [
      "Extintor portátil: masa ≤20 kg. Extintor móvil: masa >20 kg y sobre ruedas.",
      "Deben situarse visibles y accesibles, preferentemente próximos a las salidas, con la parte superior entre 80 y 120 cm.",
      "Recorrido máximo horizontal hasta un extintor: 15 m.",
      "Clases de fuego: A sólidos con brasas; B líquidos o sólidos licuables; C gases; D metales; F aceites y grasas de cocina."
    ]},
    { h: "Bocas de incendio equipadas", items: [
      "Manguera semirrígida: 25 mm. Manguera plana: 45 mm.",
      "Boquilla y válvula o sistema de apertura: máximo 1,50 m sobre el suelo.",
      "Una BIE se sitúa a un máximo de 5 m de cada salida de sector, salvo las excepciones previstas.",
      "Radio de acción: longitud de manguera más 5 m. Separación máxima entre BIE: 50 m.",
      "Longitud máxima de manguera: 20 m plana y 30 m semirrígida.",
      "Durante una hora deben funcionar las dos BIE hidráulicamente más desfavorables: 25 mm, 85 l/min y 4 bar; 45 mm, 160 l/min y 3,5 bar. Presión máxima de entrada: 9 bar.",
      "Prueba previa al servicio: presión estática igual a la máxima de servicio y como mínimo 980 kPa durante dos horas para BIE con manguera semirrígida o plana."
    ]},
    { h: "Sistemas de columna seca", items: [
      "Toma de agua exterior con conexión siamesa, llaves incorporadas y racores de 70 mm; columna de acero galvanizado DN80.",
      "Ascendente: salidas en plantas pares hasta la octava y en todas a partir de ella; válvula de seccionamiento cada cuatro plantas.",
      "Descendente: válvula de seccionamiento y salida en cada planta.",
      "Las bocas de salida se sitúan en recintos de escaleras o vestíbulos previos.",
      "El recorrido máximo hasta las columnas secas debe ser inferior a 60 m.",
      "Prueba: mínimo 1470 kPa hasta 30 m de altura y 2450 kPa por encima de 30 m, durante dos horas."
    ]},
    { h: "Sistemas fijos de extinción", items: [
      "Rociadores automáticos y agua pulverizada: red de tuberías, puesto de control y boquillas; diseño de rociadores según UNE-EN 12845.",
      "Agua nebulizada: UNE-CEN/TS 14972.",
      "Espuma física: red, tanque de espumógeno, dosificador/proporcionador y boquillas; diseño UNE-EN 13565-2.",
      "Polvo: recipiente de polvo, gas propelente, tuberías, válvulas selectoras, accionamiento/control y boquillas. Requiere seguridad o evacuación, retardo y prealarma.",
      "Agentes gaseosos: dispositivos de accionamiento, control, recipientes, tuberías y difusores. También requieren seguridad o evacuación, retardo y prealarma.",
      "Aerosoles condensados: dispositivos de accionamiento, equipos de control y generadores de aerosol.",
      "Cocinas comerciales: sistemas certificados conforme UNE-EN 17446; instalación y mantenimiento por empresas habilitadas para el sistema correspondiente."
    ]},
    { h: "Control de humos y calor", items: [
      "Finalidad: limitar los efectos del calor y humo, favorecer la evacuación y facilitar la extinción.",
      "Cuatro estrategias: flotabilidad de gases calientes, presurización diferencial, ventilación horizontal y extracción de humos.",
      "Flotabilidad: UNE 23585 para proyecto y UNE 23584 para instalación, puesta en marcha y mantenimiento en los supuestos indicados.",
      "Presión diferencial: UNE-EN 12101-6 y UNE 23584 en lo no previsto.",
      "Los componentes de extracción de calor y humos se someten a las normas de la serie UNE-EN 12101 indicadas."
    ]},
    { h: "Mantas ignífugas y alumbrado de emergencia", items: [
      "Las mantas ignífugas extinguen pequeños fuegos por sofocación; su caducidad no debe exceder de 20 años.",
      "Deben ser visibles, accesibles y estar próximas a los puntos donde se estime mayor probabilidad de uso.",
      "El alumbrado de emergencia asegura iluminación tras el fallo del alumbrado normal y permite identificar equipos y medios de protección.",
      "El alumbrado de emergencia cumple las especificaciones del REBT e ITC-BT-28."
    ]},
    { h: "Señalización luminiscente", items: [
      "Su función es informar de la situación de equipos e instalaciones de protección contra incendios de utilización manual incluso ante fallo del alumbrado normal.",
      "Puede ser fotoluminiscente o estar alimentada eléctricamente.",
      "Las señales deben ser claramente visibles y pueden reforzarse mediante balizamientos y planos de evacuación.",
      "Señales de medios manuales y sistemas de alerta/alarma: UNE 23033-1. Planos de evacuación: UNE 23032.",
      "Sistemas fotoluminiscentes: UNE 23035-4; categoría A en los centros donde se desarrollen las actividades indicadas en el anexo I de la Norma Básica de Autoprotección."
    ]}
  ],
  claves: [
    "Pulsador: 25 m / 80-120 cm",
    "Hidrante: <100 m urbano / <40 m resto; 500 l/min",
    "Extintor: 15 m / 80-120 cm",
    "BIE: separación 50 m; radio = manguera + 5 m",
    "BIE 25 mm: 85 l/min / 4 bar; BIE 45 mm: 160 l/min / 3,5 bar",
    "Columna seca: recorrido <60 m; DN80",
    "Manta ignífuga: caducidad ≤20 años",
    "Humos: flotabilidad / presión diferencial / ventilación horizontal / extracción"
  ]
};
