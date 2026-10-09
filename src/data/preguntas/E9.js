// Banco de preguntas del tema E9. Formato y reglas: cabecera de src/data/preguntas.js.
export default [
  // ── E9: RITE – Reglamento de Instalaciones Térmicas en los Edificios ───────
  { id: "E9-01", tema: "E9",
  q: "Según el artículo 1 del RITE, ¿cuál es su objeto principal?",
  o: [
    "Regular exclusivamente la eficiencia energética de los edificios",
    "Establecer las exigencias de eficiencia energética y seguridad de las instalaciones térmicas en los edificios",
    "Regular exclusivamente las instalaciones de calefacción y refrigeración",
    "Establecer las exigencias de seguridad estructural de las instalaciones térmicas"
  ],
  c: 1,
  exp: "Art. 1 RITE: establece las exigencias de eficiencia energética y seguridad que deben cumplir las instalaciones térmicas destinadas a atender la demanda de bienestar e higiene de las personas."
},
  { id: "E9-02", tema: "E9",
  q: "A efectos del RITE, ¿cuál de las siguientes se considera una instalación térmica?",
  o: [
    "Únicamente una instalación fija de calefacción",
    "Únicamente una instalación de producción de ACS",
    "Las instalaciones fijas de climatización o las destinadas a la producción de ACS",
    "Únicamente las instalaciones de refrigeración"
  ],
  c: 2,
  exp: "Art. 2.1 RITE: incluye las instalaciones fijas de climatización (calefacción, refrigeración y ventilación) y las destinadas a la producción de ACS."
},
  { id: "E9-03", tema: "E9",
  q: "¿Cuál de las siguientes situaciones puede constituir una reforma de una instalación térmica según el RITE?",
  o: [
    "Únicamente sustituir una luminaria",
    "Cambiar el uso previsto del edificio",
    "Realizar exclusivamente operaciones de mantenimiento preventivo",
    "Modificar únicamente elementos decorativos"
  ],
  c: 1,
  exp: "Art. 2.3 RITE: entre los supuestos de reforma se encuentra el cambio de uso previsto del edificio, además de la incorporación o modificación de subsistemas, sustitución de generadores, ampliación de equipos o cambio de energía."
},
  { id: "E9-04", tema: "E9",
  q: "Cuando la potencia térmica nominal a instalar en generación de calor o frío sea mayor de 70 kW, ¿qué documentación técnica se requiere?",
  o: [
    "Una memoria técnica",
    "Un proyecto",
    "Ninguna documentación",
    "Únicamente un certificado de mantenimiento"
  ],
  c: 1,
  exp: "Art. 15.1.a RITE: cuando la potencia térmica nominal sea mayor de 70 kW se requiere proyecto."
},
  { id: "E9-05", tema: "E9",
  q: "Para una instalación con potencia térmica nominal de 50 kW, ¿qué documentación puede sustituir al proyecto?",
  o: [
    "No se requiere documentación",
    "Una memoria técnica",
    "Un certificado de inspección inicial",
    "Un certificado de mantenimiento"
  ],
  c: 1,
  exp: "Art. 15.1.b RITE: entre 5 kW y 70 kW, ambos incluidos, el proyecto puede ser sustituido por una memoria técnica."
},
  { id: "E9-06", tema: "E9",
  q: "Una instalación térmica con una potencia inferior a 5 kW, ¿precisa acreditar el cumplimiento reglamentario ante el órgano competente de la Comunidad Autónoma?",
  o: [
    "Sí, siempre mediante proyecto",
    "Sí, siempre mediante memoria técnica",
    "No",
    "Solo si se trata de una instalación de refrigeración"
  ],
  c: 2,
  exp: "Art. 15.1.c y art. 24.2 RITE: para instalaciones menores de 5 kW no es preceptiva la documentación ni la acreditación del cumplimiento reglamentario ante el órgano competente de la Comunidad Autónoma."
},
  { id: "E9-07", tema: "E9",
  q: "¿Quién suscribe el certificado de la instalación una vez realizadas satisfactoriamente las pruebas de puesta en servicio?",
  o: [
    "El titular y la empresa distribuidora",
    "El proyectista exclusivamente",
    "El instalador habilitado y el director de la instalación cuando su participación sea preceptiva",
    "La Comunidad Autónoma"
  ],
  c: 2,
  exp: "Art. 23.1 RITE: el certificado lo suscriben el instalador habilitado y el director de la instalación cuando su participación sea preceptiva."
},
  { id: "E9-08", tema: "E9",
  q: "Para la puesta en servicio de una instalación térmica de las comprendidas en el artículo 15.1.a) y b), es necesario:",
  o: [
    "Registrar el certificado de la instalación en el órgano competente de la Comunidad Autónoma",
    "Obtener autorización previa del Ayuntamiento",
    "Registrar únicamente el proyecto en el Ministerio",
    "Disponer exclusivamente del certificado de mantenimiento"
  ],
  c: 0,
  exp: "Art. 24.1 y 24.3 RITE: para la puesta en servicio es necesario el registro del certificado de la instalación en el órgano competente de la Comunidad Autónoma."
},
  { id: "E9-09", tema: "E9",
  q: "¿Desde qué momento es responsable el titular o usuario del cumplimiento del RITE en lo relativo al uso y mantenimiento?",
  o: [
    "Desde la solicitud de licencia de obra",
    "Desde la recepción provisional de la instalación",
    "Desde la primera inspección",
    "Desde el primer mantenimiento"
  ],
  c: 1,
  exp: "Art. 25.1 RITE: el titular o usuario es responsable desde el momento en que se realiza la recepción provisional."
},
  { id: "E9-10", tema: "E9",
  q: "Las operaciones de mantenimiento de las instalaciones sujetas al RITE serán realizadas, con carácter general, por:",
  o: [
    "El titular exclusivamente",
    "El proyectista",
    "Empresas mantenedoras habilitadas",
    "La empresa suministradora de energía"
  ],
  c: 2,
  exp: "Art. 26.1 RITE: las operaciones de mantenimiento se realizarán por empresas mantenedoras habilitadas."
},
  { id: "E9-11", tema: "E9",
  q: "En una instalación térmica con potencia nominal total superior a 70 kW, el titular debe:",
  o: [
    "Realizar personalmente el mantenimiento",
    "Suscribir un contrato de mantenimiento con una empresa mantenedora",
    "Contratar únicamente una inspección anual",
    "Solicitar un nuevo proyecto cada año"
  ],
  c: 1,
  exp: "Art. 26.6.b RITE: las instalaciones superiores a 70 kW deben mantenerse mediante empresa mantenedora con contrato de mantenimiento."
},
  { id: "E9-12", tema: "E9",
  q: "¿Cuándo es obligatorio que el mantenimiento se realice bajo la dirección de un técnico titulado competente con funciones de director de mantenimiento?",
  o: [
    "Siempre que la instalación supere 70 kW",
    "Cuando supere 5.000 kW en calor y/o 1.000 kW en frío, o 400 kW de calefacción o refrigeración solar",
    "Solo en instalaciones residenciales",
    "Solo en instalaciones de ACS"
  ],
  c: 1,
  exp: "Art. 26.6.c RITE: se exige para potencias superiores a 5.000 kW en calor y/o 1.000 kW en frío, y para instalaciones solares de calefacción o refrigeración superiores a 400 kW."
},
  { id: "E9-13", tema: "E9",
  q: "¿Durante cuánto tiempo debe conservarse el registro de operaciones de mantenimiento?",
  o: [
    "2 años",
    "3 años",
    "5 años",
    "10 años"
  ],
  c: 2,
  exp: "Art. 27.2 RITE: debe conservarse durante un tiempo no inferior a cinco años desde la fecha de ejecución de la correspondiente operación."
},
  { id: "E9-14", tema: "E9",
  q: "En las condiciones interiores de diseño del RITE para actividad sedentaria de 1,2 met, la temperatura operativa de verano es:",
  o: [
    "21–23 °C",
    "22–24 °C",
    "23–25 °C",
    "25–27 °C"
  ],
  c: 2,
  exp: "Tabla 1.4.1.1 RITE: en verano, la temperatura operativa de diseño es 23–25 °C."
},
  { id: "E9-15", tema: "E9",
  q: "En las condiciones interiores de diseño del RITE, la humedad relativa de invierno debe estar comprendida entre:",
  o: [
    "20–40 %",
    "30–50 %",
    "40–50 %",
    "45–60 %"
  ],
  c: 2,
  exp: "Tabla 1.4.1.1 RITE: en invierno, la humedad relativa de diseño es 40–50 %."
},
  { id: "E9-16", tema: "E9",
  q: "¿Qué temperatura interior de cálculo se emplea para dimensionar los sistemas de calefacción y refrigeración?",
  o: [
    "20 °C para calefacción y 24 °C para refrigeración",
    "21 °C para calefacción y 25 °C para refrigeración",
    "22 °C para calefacción y 26 °C para refrigeración",
    "23 °C para calefacción y 25 °C para refrigeración"
  ],
  c: 1,
  exp: "IT 1.1.4.1.2 RITE: para dimensionamiento, 21 °C en calefacción y 25 °C en refrigeración."
},
  { id: "E9-17", tema: "E9",
  q: "¿Qué categoría de calidad del aire interior corresponde a las oficinas?",
  o: [
    "IDA 1",
    "IDA 2",
    "IDA 3",
    "IDA 4"
  ],
  c: 1,
  exp: "IT 1.1.4.2.2 RITE: las oficinas corresponden a IDA 2."
},
  { id: "E9-18", tema: "E9",
  q: "¿Cuál es el caudal mínimo de aire exterior por persona correspondiente a IDA 1 mediante el método indirecto?",
  o: [
    "5 dm³/s por persona",
    "8 dm³/s por persona",
    "12,5 dm³/s por persona",
    "20 dm³/s por persona"
  ],
  c: 3,
  exp: "Tabla 1.4.2.1 RITE: IDA 1 = 20 dm³/s·persona; IDA 2 = 12,5; IDA 3 = 8; IDA 4 = 5."
},
  { id: "E9-19", tema: "E9",
  q: "Si en un local está permitido fumar, el caudal mínimo de aire exterior será, como mínimo:",
  o: [
    "Igual al de la tabla correspondiente",
    "La mitad del indicado en la tabla",
    "El doble del indicado en la tabla",
    "El triple del indicado en la tabla"
  ],
  c: 2,
  exp: "IT 1.1.4.2.3: cuando esté permitido fumar, los caudales de aire exterior serán como mínimo el doble de los indicados en la tabla 1.4.2.1."
},
  { id: "E9-20", tema: "E9",
  q: "¿Qué categoría de aire de extracción corresponde a los aparcamientos y a los laboratorios químicos?",
  o: [
    "AE 1",
    "AE 2",
    "AE 3",
    "AE 4"
  ],
  c: 3,
  exp: "IT 1.1.4.2.5 RITE: los aparcamientos y laboratorios químicos están incluidos en AE 4, aire de muy alto nivel de contaminación."
},
  { id: "E9-21", tema: "E9",
  q: "¿Qué categoría de aire de extracción puede retornarse a los locales?",
  o: [
    "AE 1, siempre que esté exento de humo de tabaco",
    "AE 2",
    "AE 3",
    "AE 4"
  ],
  c: 0,
  exp: "IT 1.1.4.2.5 RITE: solo el aire AE 1, exento de humo de tabaco, puede ser retornado a los locales."
},
  { id: "E9-22", tema: "E9",
  q: "¿Entre qué temperaturas debe mantenerse el agua de las piscinas climatizadas?",
  o: [
    "20–26 °C",
    "22–28 °C",
    "24–30 °C",
    "26–32 °C"
  ],
  c: 2,
  exp: "IT 1.1.4.3.2 RITE: la temperatura del agua de las piscinas climatizadas estará comprendida entre 24 °C y 30 °C."
},
  { id: "E9-23", tema: "E9",
  q: "Para el cálculo de las cargas térmicas máximas de invierno, ¿qué percentil de temperatura seca se utiliza con carácter general?",
  o: [
    "TS 0,4 %",
    "TS 1 %",
    "TS 99 %",
    "TS 99,6 %"
  ],
  c: 2,
  exp: "IT 1.2.4.1.1 RITE: para las cargas máximas de invierno se emplea TS 99 %. Para usos especiales justificados puede utilizarse TS 99,6 %."
},
  { id: "E9-24", tema: "E9",
  q: "Para el cálculo de las cargas térmicas máximas de verano, ¿qué percentil se utiliza con carácter general?",
  o: [
    "TS 0,4 %",
    "TS 1 %",
    "TS 99 %",
    "TS 99,6 %"
  ],
  c: 1,
  exp: "IT 1.2.4.1.1 RITE: para las cargas máximas de verano se utilizan las temperaturas seca y húmeda coincidente correspondientes al percentil 1 %."
},
  { id: "E9-25", tema: "E9",
  q: "En una central de producción de calor con generadores que utilizan combustible líquido o gaseoso y una potencia útil nominal superior a 400 kW, ¿cuántos generadores deben instalarse como mínimo?",
  o: [
    "Uno",
    "Dos",
    "Tres",
    "Cuatro"
  ],
  c: 1,
  exp: "IT 1.2.4.1.2.2 RITE: si la potencia útil nominal es mayor de 400 kW se instalarán dos o más generadores."
},
  { id: "E9-26", tema: "E9",
  q: "La regulación de los quemadores alimentados por combustible gaseoso será:",
  o: [
    "Siempre de una marcha",
    "Siempre de dos marchas",
    "Siempre modulante",
    "Modulante únicamente cuando superen 400 kW"
  ],
  c: 2,
  exp: "IT 1.2.4.1.2.3 RITE: la regulación de los quemadores alimentados por combustible gaseoso será siempre modulante."
},
  { id: "E9-27", tema: "E9",
  q: "Según la tabla de aislamiento de tuberías, para un fluido caliente de 40–60 °C, una tubería de diámetro exterior D ≤ 35 mm situada en el interior de un edificio requiere un espesor mínimo de:",
  o: [
    "20 mm",
    "25 mm",
    "30 mm",
    "35 mm"
  ],
  c: 1,
  exp: "Tabla 1.2.4.2.1 RITE: para D ≤ 35 mm y fluidos calientes de 40–60 °C por el interior de edificios, el espesor mínimo es 25 mm."
},
  { id: "E9-28", tema: "E9",
  q: "Para tuberías de fluidos fríos situadas en el interior de edificios, con D ≤ 35 mm y temperatura del fluido entre >0 y 10 °C, el espesor mínimo de aislamiento es:",
  o: [
    "20 mm",
    "25 mm",
    "30 mm",
    "40 mm"
  ],
  c: 1,
  exp: "Tabla 1.2.4.2.3 RITE: para D ≤ 35 mm y temperatura >0–10 °C, el espesor mínimo es 25 mm."
},
  { id: "E9-29", tema: "E9",
  q: "En una prueba de resistencia mecánica de un circuito cerrado de agua refrigerada o agua caliente hasta 100 °C, la presión de prueba será:",
  o: [
    "La presión máxima de trabajo",
    "Una vez y media la presión máxima efectiva de trabajo, con un mínimo de 6 bar",
    "Dos veces la presión máxima de trabajo, con un mínimo de 4 bar",
    "Una vez y media la presión máxima de trabajo, con un mínimo de 3 bar"
  ],
  c: 1,
  exp: "IT 2.2.2.4 RITE: para estos circuitos la presión de prueba será 1,5 veces la presión máxima efectiva de trabajo, con un mínimo de 6 bar."
},
  { id: "E9-30", tema: "E9",
  q: "Según la IT 3.3, ¿cuál es la periodicidad del mantenimiento preventivo de una instalación de potencia útil nominal superior a 70 kW?",
  o: [
    "Anual",
    "Semestral",
    "Trimestral",
    "Mensual"
  ],
  c: 3,
  exp: "Tabla 3.1 RITE: para instalaciones de potencia superior a 70 kW, la periodicidad mínima del mantenimiento preventivo es mensual."
},
];
