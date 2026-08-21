// Tema E03 — DB-SI. Resumen elaborado exclusivamente a partir de E_Tema03.txt.
export const RESUMEN_E03 = {
  intro: "El DB-SI establece reglas y procedimientos para cumplir las exigencias básicas de seguridad en caso de incendio. Se organiza en SI 1 a SI 6: propagación interior, propagación exterior, evacuación, instalaciones de protección, intervención de bomberos y resistencia al fuego de la estructura.",
  bloques: [
    { h: "Mapa del DB-SI", items: [
      "SI 1: Propagación interior · SI 2: Propagación exterior · SI 3: Evacuación de ocupantes · SI 4: Instalaciones de protección contra incendios · SI 5: Intervención de los bomberos · SI 6: Resistencia al fuego de la estructura.",
      "Los sectores se compartimentan según las condiciones establecidas en SI 1; las superficies máximas pueden duplicarse con instalación automática de extinción.",
      "El DB-SI incluye además un Anejo A de terminología y los anejos de cálculo de resistencia al fuego."
    ]},
    { h: "SI 1 — Propagación interior", items: [
      "La compartimentación en sectores de incendio se determina según el uso, superficie y condiciones del edificio.",
      "Las zonas de riesgo especial se clasifican en bajo, medio y alto, con exigencias crecientes de resistencia al fuego y vestíbulo de independencia en los supuestos indicados.",
      "Los espacios ocultos y los pasos de instalaciones deben mantener la compartimentación contra incendios.",
      "La reacción al fuego de los elementos constructivos se determina según la situación y el uso del espacio.",
      "Las puertas entre sectores y las de vestíbulos de independencia tienen clases de resistencia al fuego específicas."
    ]},
    { h: "SI 2 — Propagación exterior", items: [
      "Las medianerías o elementos verticales separadores de otro edificio deben cumplir la resistencia al fuego exigida.",
      "La separación horizontal entre huecos de fachadas enfrentadas o en ángulo se determina según el ángulo entre planos.",
      "La propagación vertical por fachada exige una franja resistente al fuego en las condiciones indicadas.",
      "Las fachadas y cámaras ventiladas tienen clases de reacción al fuego según la altura del edificio.",
      "Las cubiertas deben resolver la propagación exterior en los encuentros con edificios y elementos compartimentadores."
    ]},
    { h: "SI 3 — Evacuación de ocupantes", items: [
      "La ocupación se determina mediante la superficie útil y las densidades de ocupación de la tabla correspondiente.",
      "Las condiciones de salida única y de más de una salida dependen de ocupación, uso, altura y longitud de los recorridos.",
      "La anchura de puertas, pasos, pasillos y rampas se determina mediante las relaciones establecidas en el DB-SI y sus mínimos.",
      "En determinados supuestos las puertas deben abrir en el sentido de la evacuación.",
      "Se establecen condiciones específicas para control de humo y para la evacuación de personas con discapacidad, incluyendo sectores alternativos y zonas de refugio."
    ]},
    { h: "SI 4 — Instalaciones de protección contra incendios", items: [
      "La dotación de extintores, BIE, columna seca, detección, alarma, hidrantes y sistemas automáticos depende del uso y de las condiciones establecidas en la tabla de dotación.",
      "Los extintores deben disponerse de forma que el recorrido real hasta alguno de ellos no exceda de 15 m en las condiciones generales indicadas.",
      "La señalización de las instalaciones manuales de protección contra incendios debe cumplir el RIPCI."
    ]},
    { h: "SI 5 — Intervención de bomberos", items: [
      "Viales de aproximación: anchura mínima libre 3,5 m; altura mínima libre 4,5 m; capacidad portante 20 kN/m².",
      "En tramos curvos, el carril debe quedar delimitado por una corona circular de radios mínimos 5,30 m y 12,50 m, con anchura libre de circulación 7,20 m.",
      "Los edificios con altura de evacuación descendente mayor de 9 m deben disponer de espacio de maniobra con las condiciones indicadas.",
      "Separación máxima del vehículo de bomberos a fachada: 23 m hasta 15 m de altura de evacuación; 18 m entre más de 15 y 20 m; 10 m por encima de 20 m.",
      "Huecos de acceso por fachada: alféizar ≤1,20 m; dimensiones mínimas 0,80 × 1,20 m; separación máxima entre ejes verticales consecutivos 25 m.",
      "En zonas edificadas limítrofes o interiores a áreas forestales se exige una franja de 25 m y las condiciones de acceso indicadas."
    ]},
    { h: "SI 6 — Resistencia al fuego de la estructura", items: [
      "La resistencia al fuego puede determinarse mediante las tablas de los anejos, métodos simplificados o ensayos.",
      "Los elementos estructurales principales deben alcanzar la clase R exigida o soportar el tiempo equivalente de exposición al fuego.",
      "Para riesgo especial: R90 bajo, R120 medio y R180 alto.",
      "Las cubiertas ligeras no destinadas a evacuación pueden ser R30 en las condiciones previstas por el DB-SI.",
      "Los elementos estructurales secundarios cuyo colapso no comprometa ocupantes, estabilidad global, evacuación ni compartimentación pueden quedar sin exigencia de resistencia al fuego."
    ]},
    { h: "Terminología útil", items: [
      "Vestíbulo de independencia: recinto de uso exclusivo para circulación situado entre zonas para aportar mayor garantía de compartimentación contra incendios.",
      "Zona de ocupación nula: zona donde la presencia de personas es ocasional o de mantenimiento y que no se considera para determinar ocupantes o altura de evacuación.",
      "Zona de refugio: zona con superficie suficiente para las plazas exigibles, situada en los lugares previstos por el DB-SI."
    ]}
  ],
  claves: [
    "SI1 interior · SI2 exterior · SI3 evacuación · SI4 instalaciones · SI5 bomberos · SI6 estructura",
    "Vial bomberos: 3,5 m / 4,5 m / 20 kN/m²",
    "Acceso fachada: 0,80 × 1,20 m; separación máxima 25 m",
    "Riesgo especial: R90 / R120 / R180",
    "Zona de refugio: 1,20 × 0,80 m para silla de ruedas y 0,80 × 0,60 m para otras personas con movilidad reducida"
  ]
};
