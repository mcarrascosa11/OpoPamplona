// Resumen del tema E38. Formato: cabecera de src/data/resumenes.js.
export default {
    intro:
      "La Orden ECO/805/2003 es la norma de valoración con FINALIDAD FINANCIERA —garantía hipotecaria, entidades aseguradoras, fondos de pensiones e instituciones de inversión colectiva— y por eso no debe confundirse con el RD 1492/2011, que es el reglamento de valoraciones URBANÍSTICAS del tema siguiente: distinta finalidad, distintos métodos y distintos resultados para el mismo inmueble. Todo el tema se ordena alrededor de CUATRO MÉTODOS (coste, comparación, actualización de rentas y residual) y de los VALORES TÉCNICOS que cada uno produce. La clave para no perderse es entender esa correspondencia: el coste da el VALOR DE REEMPLAZAMIENTO, bruto o neto; la comparación da el valor por comparación y, ajustado, el hipotecario; la actualización da el valor por actualización; y el residual da el valor residual, por procedimiento dinámico o estático. A partir de ahí, cada método tiene sus requisitos de aplicabilidad, que es justo lo que se pregunta.",
    bloques: [
      {
        h: "Ámbito, principios y definiciones (arts. 1-6)",
        nota:
          "Los principios del art. 3 se preguntan por su nombre y su enunciado, y dos de ellos condicionan todo lo demás. El de FINALIDAD explica por qué esta Orden y el reglamento urbanístico llegan a cifras distintas: la finalidad de la valoración condiciona el método. Y el de MAYOR Y MEJOR USO obliga a valorar el inmueble por su destino económicamente más aconsejable dentro de las posibilidades LEGALES Y FÍSICAS. Del art. 5, retén la superficie COMPROBADA POR EL TASADOR y, cuando no pueda comprobarse, la MENOR entre la catastral y la registral, sin olvidar la excepción motivada para terrenos y fincas rústicas.",
        items: [
          "Art. 2 — ÁMBITO: la Orden se aplica cuando el valor de tasación se utilice para GARANTÍA HIPOTECARIA de créditos que formen parte de la cartera de cobertura de títulos hipotecarios, para el valor razonable de entidades ASEGURADORAS Y REASEGURADORAS, y para las demás finalidades financieras que enumera. Es valoración FINANCIERA, no urbanística",
          "Art. 3 — PRINCIPIO DE ANTICIPACIÓN: el valor de un inmueble en explotación económica es función de las EXPECTATIVAS DE RENTA que previsiblemente proporcionará en el futuro",
          "Art. 3 — PRINCIPIO DE FINALIDAD: la finalidad de la valoración CONDICIONA EL MÉTODO y las técnicas a seguir; los criterios y métodos deben ser coherentes con esa finalidad",
          "Art. 3 — PRINCIPIO DE MAYOR Y MEJOR USO: el valor de un inmueble susceptible de distintos usos será el que resulte de destinarlo, DENTRO DE LAS POSIBILIDADES LEGALES Y FÍSICAS, al económicamente más aconsejable; y si admite distintas intensidades edificatorias, el que resulte de construirlo con la más aconsejable dentro de esas posibilidades",
          "Art. 4 — ANTIGÜEDAD: número de años transcurridos entre la fecha de construcción o la de la ÚLTIMA REHABILITACIÓN INTEGRAL y la fecha de la valoración",
          "Art. 4 — COMPARABLES: inmuebles similares al objeto de valoración o adecuados para la homogeneización, atendiendo a localización, uso, tipología, superficie, antigüedad, estado de conservación u otra característica física relevante",
          "Art. 4 — ACTUALIZACIÓN DE UNA TASACIÓN: revisión de una tasación anterior emitida POR LA MISMA ENTIDAD TASADORA antes de transcurrir DOS AÑOS desde su emisión, en la que se modifiquen advertencias, condicionantes o valores",
          "Art. 4 — DEPRECIACIÓN FÍSICA: pérdida del valor de reemplazamiento bruto en función de la ANTIGÜEDAD, el ESTADO DE CONSERVACIÓN y la DURACIÓN DE SUS COMPONENTES. DEPRECIACIÓN FUNCIONAL: pérdida por DEFECTUOSA ADAPTACIÓN A LA FUNCIÓN a que se destina",
          "Art. 5 — SUPERFICIE: en edificios y elementos se utiliza la COMPROBADA POR EL TASADOR; si no puede comprobarse, la MENOR entre catastral y registral. Si la comprobada supera en más de un 5 % alguna de ellas en edificios, o más de un 10 % en elementos, su adopción exige verificar su ADECUACIÓN URBANÍSTICA. En terrenos y fincas rústicas sin comprobación viable puede usarse excepcionalmente la MAYOR, con justificación expresa, razonada y destacada",
        ],
      },
      {
        h: "Los cuatro métodos y sus valores técnicos (arts. 15-16)",
        nota:
          "Este es el esqueleto del tema y conviene memorizarlo como una tabla de correspondencias método → valor técnico, porque las preguntas suelen consistir en cruzarlos mal. Los cuatro métodos permiten obtener tres valores generales: valor de MERCADO, valor HIPOTECARIO y valor de REEMPLAZAMIENTO. Y hay una regla transversal que se pregunta sola: cuando la finalidad es la garantía hipotecaria del art. 2.a, en la aplicación de los métodos SE ELIMINARÁN LOS ELEMENTOS ESPECULATIVOS.",
        items: [
          "Art. 15.1 — CUATRO MÉTODOS: a) método del COSTE · b) método de COMPARACIÓN · c) método de ACTUALIZACIÓN DE RENTAS · d) método RESIDUAL",
          "Art. 15.2 — dichos métodos permiten obtener el VALOR DE MERCADO, el VALOR HIPOTECARIO y el VALOR DE REEMPLAZAMIENTO",
          "Art. 16.2 — REGLA TRANSVERSAL: en la aplicación de los métodos para la finalidad de garantía hipotecaria del art. 2.a SE ELIMINARÁN LOS ELEMENTOS ESPECULATIVOS",
          "Art. 15 bis — MODELOS AUTOMATIZADOS DE VALORACIÓN: previstos para las finalidades del art. 18 del RDL 24/2021, con requisitos propios",
          "Correspondencia método → valor técnico: COSTE → valor de REEMPLAZAMIENTO, bruto o neto · COMPARACIÓN → valor POR COMPARACIÓN (valor de mercado) y valor POR COMPARACIÓN AJUSTADO (valor hipotecario) · ACTUALIZACIÓN → valor POR ACTUALIZACIÓN (permite ambos) · RESIDUAL → valor RESIDUAL (permite ambos)",
        ],
      },
      {
        h: "Método del coste (arts. 17-19)",
        nota:
          "El más sencillo y el que más se parece a lo que hace un arquitecto a diario. Es aplicable a TODA CLASE de edificios y elementos de edificios, cualquiera que sea su estado —en proyecto, en construcción o rehabilitación, o terminados—, y produce el valor de reemplazamiento. La distinción entre BRUTO y NETO es la pregunta segura: el bruto suma las tres inversiones y el neto resta las depreciaciones. Y ojo a la circularidad aparente del art. 18.2: para determinar el valor del terreno dentro del método del coste se acude al método de COMPARACIÓN o al RESIDUAL, no al propio coste.",
        items: [
          "Art. 17.1 — APLICABILIDAD: a la valoración de TODA CLASE DE EDIFICIOS Y ELEMENTOS DE EDIFICIOS, en proyecto, en construcción o rehabilitación, o terminados",
          "Art. 17.2 — mediante este método se calcula el VALOR DE REEMPLAZAMIENTO, que podrá ser BRUTO O NETO",
          "Art. 18.1 — VALOR DE REEMPLAZAMIENTO BRUTO (VRB): suma de tres inversiones — a) el VALOR DEL TERRENO en que se encuentra el edificio, o el del EDIFICIO A REHABILITAR · b) el COSTE DE LA EDIFICACIÓN o de las obras de rehabilitación · c) los GASTOS NECESARIOS para realizar el reemplazamiento",
          "Art. 18.2 — para determinar el valor del terreno o del edificio a rehabilitar se utilizará el MÉTODO DE COMPARACIÓN o el MÉTODO RESIDUAL",
          "VALOR DE REEMPLAZAMIENTO NETO: el bruto MINORADO en las DEPRECIACIONES —física y funcional— que correspondan según la antigüedad, el estado de conservación y la adaptación funcional del inmueble",
        ],
      },
      {
        h: "Método de comparación (arts. 20-23)",
        nota:
          "El art. 21 requiere información suficiente sobre AL MENOS SEIS transacciones u ofertas de comparables. Ese seis reaparece en el método de actualización para presumir un mercado de alquileres representativo. El valor POR COMPARACIÓN permite determinar el valor de mercado y el AJUSTADO el hipotecario. No se ajusta siempre un porcentaje fijo: el art. 23 exige el ajuste cuando concurre la advertencia específica del art. 12.3; si no hay datos para estimar la reducción, fija el 10 %, o el 15 % si hay gran volatilidad.",
        items: [
          "Art. 20.1 — APLICABILIDAD: a la valoración de TODA CLASE DE INMUEBLES siempre que se cumplan los requisitos del art. 21. Puede aplicarse igualmente a la valoración del DERECHO DE SUPERFICIE (art. 53) y de las CONCESIONES ADMINISTRATIVAS (art. 54)",
          "Art. 20.3 — DOS VALORES TÉCNICOS: el valor POR COMPARACIÓN, que determina el VALOR DE MERCADO, y el valor POR COMPARACIÓN AJUSTADO, que determina el VALOR HIPOTECARIO",
          "Art. 21.1 — REQUISITOS: a) existencia de un MERCADO REPRESENTATIVO de los inmuebles comparables · b) disponer de suficientes datos sobre transacciones u ofertas que permitan identificar parámetros adecuados para la HOMOGENEIZACIÓN · c) disponer de información suficiente sobre AL MENOS SEIS TRANSACCIONES U OFERTAS de comparables que reflejen adecuadamente la situación actual del mercado",
          "Art. 21.2 — requisitos ADICIONALES para la finalidad de garantía hipotecaria: disponer de datos para estimar la evolución de los precios de compraventa en el mercado local durante AL MENOS LOS DOS AÑOS ANTERIORES a la fecha de valoración, y de información adecuada sobre esa evolución",
          "Arts. 22-23 — procedimiento de cálculo por comparación y AJUSTE del valor por comparación para obtener el valor hipotecario",
        ],
      },
      {
        h: "Método de actualización de rentas (arts. 24-33)",
        nota:
          "Es el método de los inmuebles que producen renta, y su aplicabilidad se define por esa aptitud: toda clase de inmuebles SUSCEPTIBLES DE PRODUCIR RENTAS y los derechos reales del art. 52.2, SALVO LAS OPCIONES DE COMPRA. A diferencia del método de comparación, cuyos tres requisitos son acumulativos, aquí basta con que se cumpla AL MENOS UNO de los del art. 25 — matiz que se pregunta. Del cálculo, los conceptos con nombre propio son los FLUJOS DE CAJA, el VALOR DE REVERSIÓN y el TIPO DE ACTUALIZACIÓN.",
        items: [
          "Art. 24.1 — APLICABILIDAD: a la valoración de toda clase de inmuebles SUSCEPTIBLES DE PRODUCIR RENTAS y a la de los derechos reales del art. 52.2, SALVO LAS OPCIONES DE COMPRA",
          "Art. 24.2 — produce el VALOR POR ACTUALIZACIÓN, que permite determinar tanto el valor de mercado como el valor hipotecario",
          "Art. 25.1 — basta con que se cumpla AL MENOS UNO de los requisitos. El primero es la existencia de un MERCADO DE ALQUILERES representativo de los comparables, para presumir el cual es necesario disponer como mínimo de SEIS DATOS DE RENTAS DE ALQUILER sobre comparables que reflejen la situación actual del mercado",
          "Art. 27 — FLUJOS DE CAJA en el método de actualización, con reglas propias para los inmuebles CON MERCADO DE ALQUILERES (art. 28) y para OTROS INMUEBLES EN ARRENDAMIENTO (art. 29)",
          "Art. 31 — VALOR DE REVERSIÓN. Art. 32 — TIPO DE ACTUALIZACIÓN. Art. 33 — FÓRMULA DE CÁLCULO del valor por actualización",
        ],
      },
      {
        h: "Método residual: dinámico y estático (arts. 34-42)",
        nota:
          "El método que más interesa a un arquitecto municipal, porque es el que se aplica al suelo. Su pregunta central es la delimitación entre los dos procedimientos, y se resuelve por el PLAZO: el DINÁMICO sirve para terrenos urbanos o urbanizables, estén o no edificados, y para edificios en proyecto, construcción o rehabilitación, incluso con obras paralizadas; el ESTÁTICO solo para solares e inmuebles en rehabilitación en los que pueda COMENZARSE LA EDIFICACIÓN EN UN PLAZO NO SUPERIOR A UN AÑO, y para solares edificados. La fórmula del estático es memorizable y cae con frecuencia: F = VM · (1 − b) − Σ Ci.",
        items: [
          "Art. 34.1 — DOS PROCEDIMIENTOS: a) análisis de inversiones con VALORES ESPERADOS, o procedimiento DINÁMICO · b) análisis de inversiones con VALORES ACTUALES, o procedimiento ESTÁTICO",
          "Art. 34.2 — el DINÁMICO se aplica a: TERRENOS URBANOS O URBANIZABLES, estén o no edificados, y EDIFICIOS EN PROYECTO, CONSTRUCCIÓN O REHABILITACIÓN, incluso en el caso de que las obras estén PARALIZADAS",
          "Art. 34.3 — el ESTÁTICO SOLO puede aplicarse a SOLARES E INMUEBLES EN REHABILITACIÓN en los que pueda comenzarse la edificación o rehabilitación en un PLAZO NO SUPERIOR A UN AÑO, así como a los SOLARES EDIFICADOS",
          "Art. 34.4 — produce el VALOR RESIDUAL, que permite determinar tanto el valor de mercado como el hipotecario",
          "Art. 35.1 — REQUISITOS, cuatro acumulativos: información adecuada para determinar la PROMOCIÓN MÁS PROBABLE con arreglo al régimen urbanístico aplicable · información suficiente sobre COSTES DE CONSTRUCCIÓN, gastos de promoción, financieros y de comercialización para un promotor de tipo medio · información de mercado para calcular los PRECIOS DE VENTA más probables en las fechas previstas de comercialización · e información suficiente sobre los RENDIMIENTOS de promociones semejantes",
          "Art. 41 — MARGEN DE BENEFICIO DEL PROMOTOR: lo fija la entidad tasadora a partir de la información sobre promociones de semejante naturaleza, atendiendo al más habitual en promociones de características y emplazamiento similares, así como a los gastos financieros y de comercialización más frecuentes",
          "Art. 42 — FÓRMULA DEL PROCEDIMIENTO ESTÁTICO: F = VM · (1 − b) − Σ Ci, donde F es el valor del terreno o inmueble a rehabilitar, VM el valor del inmueble EN LA HIPÓTESIS DE EDIFICIO TERMINADO, b el margen o beneficio neto del promotor en tanto por uno, y Ci cada uno de los pagos necesarios considerados",
          "Arts. 36-38 — procedimiento de cálculo dinámico, con sus FLUJOS DE CAJA (art. 37) y su TIPO DE ACTUALIZACIÓN (art. 38)",
        ],
      },
      {
        h: "Valoración de inmuebles, terrenos y derechos (arts. 43-60)",
        nota:
          "El Capítulo II aplica los métodos a cada tipo de bien. En los terrenos de nivel I rige COMPARACIÓN y, si no es posible, RESIDUAL. En los restantes terrenos de nivel II rige comparación SIN CONSIDERAR su posible utilización urbanística, con el VALOR CATASTRAL como techo si no puede calcularse; los sujetos a explotación económica distinta de la agropecuaria tienen la regla propia del art. 51.2. Un proyecto de construcción sobre el terreno no altera estas reglas.",
        items: [
          "Art. 43.1 — las valoraciones se expresarán por FINCAS REGISTRALES INDEPENDIENTES; para valorar un inmueble integrado por varios elementos se valora cada uno",
          "Art. 51.1 — TERRENOS DE NIVEL URBANÍSTICO I: el valor de tasación es el VALOR POR COMPARACIÓN, en su caso ajustado; cuando su cálculo no sea posible, el VALOR RESIDUAL. En ambos casos se descuentan, cuando proceda, los GASTOS DE DEMOLICIÓN",
          "Art. 51.1 — REGLA CLAVE: la existencia de un PROYECTO DE CONSTRUCCIÓN sobre un determinado terreno NO PERMITE VALORARLO DE MANERA DIFERENTE a la prevista en esta sección",
          "Art. 51.3 — RESTANTES TERRENOS DE NIVEL URBANÍSTICO II: el valor de tasación es el valor POR COMPARACIÓN SIN CONSIDERACIÓN ALGUNA a su posible utilización urbanística; si no fuera posible calcularlo, será COMO MÁXIMO EL VALOR CATASTRAL del terreno",
          "Art. 51.4 — los valores del apartado 1 se calculan teniendo en cuenta el APROVECHAMIENTO URBANÍSTICO SUSCEPTIBLE DE APROPIACIÓN por su propietario EN LA FECHA DE LA TASACIÓN",
          "Art. 51.2 — terrenos sujetos a EXPLOTACIÓN ECONÓMICA distinta de la agropecuaria: valor por ACTUALIZACIÓN",
          "Art. 55 — SERVIDUMBRES: se valoran RESTANDO del valor del inmueble supuesto LIBRE de la carga, el valor del mismo inmueble TENIENDO EN CUENTA el efecto de la servidumbre que lo grava; ambos valores se calculan por el método que corresponda",
          "Art. 56 — NUDA PROPIEDAD, USUFRUCTO, USO Y HABITACIÓN: la base para el prorrateo es el valor por ACTUALIZACIÓN según el art. 28; el USUFRUCTO es el valor actual actuarial de los flujos de caja durante el período de vigencia del derecho, y la NUDA PROPIEDAD la diferencia entre la base de prorrateo y ese valor",
          "Otros derechos: CONCESIONES ADMINISTRATIVAS (art. 54), LIMITACIONES DEL DOMINIO (art. 57), OPCIONES DE COMPRA (art. 58), inmuebles con TIEMPO COMPARTIDO (art. 59) y COMPROMISOS DE COMPRA A PLAZOS (art. 60)",
          "Sección 3.ª — valoración de FINCAS RÚSTICAS (art. 48)",
        ],
      },
    ],
    claves: [
      "Finalidad FINANCIERA (garantía hipotecaria, aseguradoras, fondos): NO confundir con el RD 1492/2011, que es valoración URBANÍSTICA",
      "Tres principios que caen: ANTICIPACIÓN · FINALIDAD · MAYOR Y MEJOR USO",
      "Mayor y mejor uso: dentro de las posibilidades LEGALES Y FÍSICAS",
      "Superficie: la COMPROBADA POR EL TASADOR; si no puede comprobarse, la MENOR entre catastral y registral, salvo excepción motivada para terrenos y fincas rústicas (art. 5)",
      "Antigüedad: desde la construcción o la ÚLTIMA REHABILITACIÓN INTEGRAL",
      "Actualización de una tasación: misma entidad tasadora y antes de DOS AÑOS",
      "CUATRO métodos: coste · comparación · actualización de rentas · residual",
      "Permiten obtener tres valores: de MERCADO, HIPOTECARIO y de REEMPLAZAMIENTO",
      "Para garantía hipotecaria SE ELIMINAN LOS ELEMENTOS ESPECULATIVOS (art. 16.2)",
      "COSTE → valor de reemplazamiento BRUTO (suma de 3 inversiones) o NETO (bruto menos depreciaciones)",
      "Dentro del método del coste, el terreno se valora por COMPARACIÓN o por RESIDUAL",
      "COMPARACIÓN: exige AL MENOS SEIS transacciones u ofertas de comparables (art. 21.1.c)",
      "Valor por comparación = mercado · valor por comparación AJUSTADO = hipotecario",
      "ACTUALIZACIÓN: basta con cumplir AL MENOS UNO de los requisitos; el mercado de alquileres exige SEIS datos de rentas",
      "Se excluyen del método de actualización las OPCIONES DE COMPRA (art. 24.1)",
      "RESIDUAL DINÁMICO: terrenos urbanos o urbanizables y edificios en proyecto, construcción o rehabilitación, incluso paralizados",
      "RESIDUAL ESTÁTICO: solo solares e inmuebles en rehabilitación que puedan empezar EN UN AÑO, y solares edificados",
      "Fórmula del estático: F = VM · (1 − b) − Σ Ci",
      "Las valoraciones se expresan por FINCAS REGISTRALES INDEPENDIENTES (art. 43.1)",
      "Terrenos nivel I: comparación y, en su defecto, residual, descontando gastos de demolición",
      "Restantes terrenos nivel II: comparación SIN considerar la utilización urbanística; techo del VALOR CATASTRAL si no puede calcularse (art. 51.3)",
      "Un PROYECTO DE CONSTRUCCIÓN sobre el terreno NO permite valorarlo de manera diferente (art. 51.1)",
      "Servidumbre: valor libre de carga MENOS valor gravado (art. 55)",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Orden ECO/805/2003, arts. 15–16: métodos y valores técnicos",
          columnas: ["Método", "Aplicación característica", "Valor técnico obtenido"],
          filas: [
            ["Coste", "Edificios y elementos, incluso en proyecto, construcción o rehabilitación; art. 17", "Reemplazamiento bruto o neto"],
            ["Comparación", "Inmuebles con mercado y datos suficientes; arts. 20–21", "Por comparación: mercado; por comparación ajustado: hipotecario"],
            ["Actualización de rentas", "Inmuebles susceptibles de producir rentas; arts. 24–25", "Por actualización: puede determinar mercado o hipotecario"],
            ["Residual", "Terrenos y supuestos del art. 34; requisitos del art. 35", "Residual dinámico o estático: puede determinar mercado o hipotecario"]
          ],
          nota: "Orden ECO/805/2003, arts. 15–17, 20, 24 y 34. Para garantía hipotecaria del art. 2.a se eliminan los elementos especulativos (art. 16.2); la elección del método depende también de la finalidad y de sus requisitos."
        },
        {
          titulo: "Orden ECO/805/2003, art. 5: superficie adoptada",
          columnas: ["Objeto o supuesto", "Regla", "Condición especial"],
          filas: [
            ["Edificio o elemento comprobable", "Superficie comprobada por el tasador", "Edificio: si supera en más del 5 % la registral o catastral, verificar adecuación urbanística; también si carece de obra nueva inscrita"],
            ["Elemento de edificio comprobable", "Superficie comprobada por el tasador", "Si supera en más del 10 % la registral o catastral, verificar adecuación urbanística"],
            ["Edificio o elemento sin comprobación posible", "Menor entre superficie catastral y registral", "En el supuesto específico del art. 5.1.b cabe usar la menor con partes comunes aun sin comprobar estas, con sus condiciones"],
            ["Terreno o finca rústica sin comprobación viable", "Menor entre superficie registral y catastral", "Cabe la mayor si se justifica de manera expresa, razonada y destacada"]
          ],
          nota: "Orden ECO/805/2003, art. 5.1.a–e y 5.2. La superficie de vivienda protegida para su valor máximo legal es la de la cédula de calificación; el umbral es estrictamente superior, no igual al 5 % o 10 %."
        },
        {
          titulo: "Orden ECO/805/2003: datos mínimos y ajuste por comparación",
          columnas: ["Regla", "Dato que se memoriza", "Condición"],
          filas: [
            ["Comparación, art. 21.1", "Al menos 6 transacciones u ofertas comparables", "Además, mercado representativo y datos para homogeneizar; requisitos acumulativos"],
            ["Comparación hipotecaria, art. 21.2", "Evolución de compraventas del mercado local durante al menos 2 años anteriores", "Requisito adicional para art. 2.a, junto con información del ciclo y depuración de elementos especulativos"],
            ["Actualización: mercado de alquiler, art. 25.1.a", "Al menos 6 datos de rentas de alquiler comparables", "También datos suficientes para homogeneizar; es una de tres vías alternativas de acceso al método"],
            ["Actualización hipotecaria, art. 25.2", "Evolución local de alquileres durante al menos 2 años anteriores", "Exigencia adicional cuando se usa la vía del mercado de alquiler o del contrato de arrendamiento"],
            ["Ajuste por comparación, art. 23.2", "10 %; 15 % si hay gran volatilidad", "Solo si procede el ajuste y los datos no permiten estimar la reducción necesaria"]
          ],
          nota: "Orden ECO/805/2003, arts. 21, 23 y 25. El ajuste del art. 23 requiere los presupuestos de la advertencia específica del art. 12.3; 10 % y 15 % no son rebajas universales."
        },
        {
          titulo: "Orden ECO/805/2003, arts. 34–42: residual dinámico frente a estático",
          columnas: ["Procedimiento", "Ámbito", "Cálculo esencial"],
          filas: [
            ["Dinámico", "Terrenos urbanos o urbanizables, edificados o no; edificios en proyecto, construcción o rehabilitación, incluso con obras paralizadas", "Cobros y pagos futuros actualizados; arts. 36–39"],
            ["Estático", "Solares e inmuebles en rehabilitación si puede iniciarse la obra en un plazo no superior a 1 año; también solares edificados", "F = VM × (1 − b) − Σ Ci; arts. 40–42"]
          ],
          nota: "Orden ECO/805/2003, arts. 34–42. Ambos exigen los cuatro requisitos del art. 35.1; el dinámico exige además información sobre plazos de construcción, comercialización y, en su caso, gestión y urbanización (art. 35.2)."
        },
        {
          titulo: "Orden ECO/805/2003: valoración por clase y finalidad",
          columnas: ["Supuesto", "Regla principal", "Artículo"],
          filas: [
            ["Edificio hipotecario terminado, uso propio o vacío no ligado a explotación", "Comparación ajustada si procede; si no puede calcularse, actualización del art. 28; después, como máximo reemplazamiento neto", "45.2.c"],
            ["Edificio hipotecario terminado ligado a actividad económica", "Menor entre comparación, actualización si es posible y reemplazamiento neto", "45.2.a"],
            ["Edificio en construcción para aseguradoras o fondos de pensiones", "Valor inicial más certificaciones abonadas que respondan a obra efectivamente ejecutada", "46.1"],
            ["Finca rústica: tierra y mejoras necesarias", "Menor entre comparación, ajustada en su caso, y actualización de la explotación", "49.a"],
            ["Terreno de nivel urbanístico I", "Comparación, ajustada en su caso; si no puede calcularse, residual; descontar demolición cuando proceda", "51.1"],
            ["Restantes terrenos de nivel II", "Comparación sin considerar posible utilización urbanística; si no puede calcularse, como máximo valor catastral", "51.3"]
          ],
          nota: "Orden ECO/805/2003, arts. 45–46, 49 y 51. El art. 51.2 establece regla específica para terrenos sujetos a explotación económica distinta de la agropecuaria."
        }
      ],
      datos: [
        "Orden ECO/805/2003, art. 2: cuatro finalidades: garantía hipotecaria de la cartera de cobertura, aseguradoras y reaseguradoras, instituciones de inversión colectiva inmobiliarias y fondos de pensiones.",
        "Orden ECO/805/2003, art. 3.1.f: el principio de prudencia elige el menor valor entre escenarios igualmente probables y es obligatorio para las finalidades del art. 2.a, b y d.",
        "Orden ECO/805/2003, art. 3.1.k: el principio de sostenibilidad considera cuando proceda indicadores del efecto de factores medioambientales, incluidos riesgos ambientales y climáticos.",
        "Orden ECO/805/2003, art. 4: actualización de tasación significa revisión por la misma entidad tasadora antes de 2 años con cambio de advertencias, condicionantes o valores; una valoración intermedia de obra no la implica.",
        "Orden ECO/805/2003, art. 4: nivel urbanístico II incluye no urbanizable con edificación limitada a usos de su naturaleza o explotación permitida y urbanizable sin ámbito de desarrollo o sin condiciones de desarrollo definidas; nivel I es el resto.",
        "Orden ECO/805/2003, arts. 18–19: reemplazamiento bruto = terreno o edificio a rehabilitar + edificación u obras + gastos necesarios; neto = bruto menos depreciación física y funcional.",
        "Orden ECO/805/2003, art. 26: actualización de rentas exige estimar flujos de caja y valor de reversión, elegir tipo de actualización y aplicar la fórmula.",
        "Orden ECO/805/2003, art. 42: en F = VM × (1 − b) − Σ Ci, b es el beneficio neto del promotor expresado en tanto por uno.",
        "Orden ECO/805/2003, art. 43.1 y 43.4: valoraciones por fincas registrales independientes; un procedimiento profesional distinto de los cuatro métodos solo cabe cuando ninguno sea utilizable y exige justificación detallada.",
        "Orden ECO/805/2003, art. 44.2: edificio en demolición o legalmente en ruina se valora según las reglas de terrenos, salvo calificación como finca rústica.",
        "Orden ECO/805/2003, art. 45.3: en edificios sujetos a protección pública, la tasación hipotecaria no puede superar el valor máximo legal.",
        "Orden ECO/805/2003, art. 47.1: en IIC inmobiliarias, un inmueble en proyecto, construcción o rehabilitación se tasa para la hipótesis de terminado sin corrección al alza por tendencia de mercado hasta acabar las obras.",
        "Orden ECO/805/2003, art. 51.1: un proyecto de construcción sobre el terreno no permite alterar su regla de tasación.",
        "Orden ECO/805/2003, art. 56.4: el valor del derecho de uso y habitación es el del usufructo calculado conforme a ese artículo dividido por 1,12."
      ],
      excepciones: [
        "Orden ECO/805/2003, art. 3.1.d y f: probabilidad selecciona los escenarios más probables; prudencia elige el menor valor solo entre escenarios igualmente probables.",
        "Orden ECO/805/2003, art. 5.1.c: superar en más del 5 % la superficie registral o catastral obliga a verificar adecuación urbanística en edificios; en elementos el umbral es más del 10 %.",
        "Orden ECO/805/2003, art. 20.3 y 23: valor por comparación y valor por comparación ajustado son distintos; el ajuste se hace cuando concurre la advertencia específica legal, no de forma automática en toda tasación.",
        "Orden ECO/805/2003, art. 25.1: para actualización basta una de tres vías: mercado de alquileres, contrato de arrendamiento o explotación económica con datos suficientes; comparación exige conjuntamente los requisitos del art. 21.1.",
        "Orden ECO/805/2003, art. 24.1: la actualización puede valorar derechos reales del art. 52.2, pero excluye las opciones de compra, cuya valoración específica figura en el art. 58.",
        "Orden ECO/805/2003, art. 34: dinámico utiliza valores esperados y admite obras paralizadas; estático utiliza valores actuales y, para solares sin edificar o inmuebles a rehabilitar, exige posible inicio en no más de un año.",
        "Orden ECO/805/2003, arts. 45.2.b y 47.2: el inmueble hipotecario arrendado se compara también con valor libre de inquilinos; en IIC inmobiliarias, si está arrendado, se adopta el menor entre comparación libre de inquilinos y actualización del art. 29.",
        "Orden ECO/805/2003, art. 47.4: la regla general del valor máximo legal en IIC tiene una excepción formulada para VPO con menos de cinco años de afección restantes; no trasladarla automáticamente a las finalidades de los arts. 45 y 46.",
        "Orden ECO/805/2003, art. 51.2–3: antes de aplicar la regla residual de nivel II del art. 51.3, los terrenos con explotación económica distinta de la agropecuaria siguen la actualización del art. 30.",
        "Orden ECO/805/2003, arts. 55–56: servidumbre = diferencia entre valor libre y valor con carga; nuda propiedad y usufructo se prorratean partiendo de actualización del art. 28."
      ]
    },
  };
