// Resumen del tema E38. Formato: cabecera de src/data/resumenes.js.
export default {
    intro:
      "La Orden ECO/805/2003 es la norma de valoración con FINALIDAD FINANCIERA —garantía hipotecaria, entidades aseguradoras, fondos de pensiones e instituciones de inversión colectiva— y por eso no debe confundirse con el RD 1492/2011, que es el reglamento de valoraciones URBANÍSTICAS del tema siguiente: distinta finalidad, distintos métodos y distintos resultados para el mismo inmueble. Todo el tema se ordena alrededor de CUATRO MÉTODOS (coste, comparación, actualización de rentas y residual) y de los VALORES TÉCNICOS que cada uno produce. La clave para no perderse es entender esa correspondencia: el coste da el VALOR DE REEMPLAZAMIENTO, bruto o neto; la comparación da el valor por comparación y, ajustado, el hipotecario; la actualización da el valor por actualización; y el residual da el valor residual, por procedimiento dinámico o estático. A partir de ahí, cada método tiene sus requisitos de aplicabilidad, que es justo lo que se pregunta. Texto vigente a 21-05-2026: el consolidado tras la Orden ECM/599/2025 (BOE de 12-06-2025, en vigor desde el 12-08-2025), que añadió el principio de SOSTENIBILIDAD y el art. 15 bis (modelos automatizados de valoración), exigió la trazabilidad de los comparables (art. 22) y dejó en DOS AÑOS el plazo de la actualización de una tasación (art. 4).",
    bloques: [
      {
        h: "Ámbito, principios y definiciones (arts. 1-6)",
        nota:
          "Los principios del art. 3 se preguntan por su nombre y su enunciado, y dos de ellos condicionan todo lo demás. El de FINALIDAD explica por qué esta Orden y el reglamento urbanístico llegan a cifras distintas: la finalidad de la valoración condiciona el método. Y el de MAYOR Y MEJOR USO obliga a valorar el inmueble por su destino económicamente más aconsejable dentro de las posibilidades LEGALES Y FÍSICAS. Del art. 5, retén la superficie COMPROBADA POR EL TASADOR y, cuando no pueda comprobarse, la MENOR entre la catastral y la registral, sin olvidar la excepción motivada para terrenos y fincas rústicas.",
        items: [
          "Art. 1 — OBJETO: el régimen jurídico del cálculo del VALOR DE TASACIÓN de bienes inmuebles y determinados derechos, y la elaboración de los INFORMES Y CERTIFICADOS en que se formalice, siempre que se haga para alguna de las finalidades de su ámbito",
          "Art. 2 — ÁMBITO: la Orden se aplica cuando el valor de tasación se utilice para CUATRO FINALIDADES: a) GARANTÍA HIPOTECARIA de créditos o préstamos que formen o vayan a formar parte de la cartera de cobertura de títulos hipotecarios · b) entidades ASEGURADORAS Y REASEGURADORAS (valor razonable y valoración de activos del art. 68 de la Ley 20/2015) · c) patrimonio de las INSTITUCIONES DE INVERSIÓN COLECTIVA INMOBILIARIAS · d) patrimonio inmobiliario de los FONDOS DE PENSIONES. Es valoración FINANCIERA, no urbanística",
          "Art. 3 — PRINCIPIO DE ANTICIPACIÓN: el valor de un inmueble en explotación económica es función de las EXPECTATIVAS DE RENTA que previsiblemente proporcionará en el futuro",
          "Art. 3 — PRINCIPIO DE FINALIDAD: la finalidad de la valoración CONDICIONA EL MÉTODO y las técnicas a seguir; los criterios y métodos deben ser coherentes con esa finalidad",
          "Art. 3 — PRINCIPIO DE MAYOR Y MEJOR USO: el valor de un inmueble susceptible de distintos usos será el que resulte de destinarlo, DENTRO DE LAS POSIBILIDADES LEGALES Y FÍSICAS, al económicamente más aconsejable; y si admite distintas intensidades edificatorias, el que resulte de construirlo, dentro de esas posibilidades, con la intensidad que permita obtener su MAYOR VALOR",
          "Art. 3 — PROBABILIDAD: ante varios escenarios razonables se eligen los MÁS PROBABLES. PRUDENCIA: ante escenarios IGUALMENTE probables se elige el que dé el MENOR VALOR de tasación, y es de aplicación OBLIGATORIA en las finalidades del art. 2.a), b) y d), no en las instituciones de inversión colectiva. Los principios sirven como criterios de INTERPRETACIÓN y, en su caso, de INTEGRACIÓN de la Orden (art. 3.2)",
          "Art. 3.1.k — SOSTENIBILIDAD (añadido por la Orden ECM/599/2025): los métodos deben considerar, cuando corresponda, indicadores del efecto de los factores MEDIOAMBIENTALES sobre el inmueble, incluidos los riesgos medioambientales y CLIMÁTICOS",
          "Art. 4 — ANTIGÜEDAD: número de años transcurridos entre la fecha de construcción o la de la ÚLTIMA REHABILITACIÓN INTEGRAL y la fecha de la valoración",
          "Art. 4 — COMPARABLES: inmuebles similares al objeto de valoración o adecuados para la homogeneización, atendiendo a localización, uso, tipología, superficie, antigüedad, estado de conservación u otra característica física relevante",
          "Art. 4 — ACTUALIZACIÓN DE UNA TASACIÓN: revisión de una tasación anterior emitida POR LA MISMA ENTIDAD TASADORA antes de transcurrir DOS AÑOS desde su emisión, en la que se modifiquen advertencias, condicionantes o valores",
          "Art. 4 — DEPRECIACIÓN FÍSICA: pérdida del valor de reemplazamiento bruto en función de la ANTIGÜEDAD, el ESTADO DE CONSERVACIÓN y la DURACIÓN DE SUS COMPONENTES. DEPRECIACIÓN FUNCIONAL: pérdida por DEFECTUOSA ADAPTACIÓN A LA FUNCIÓN a que se destina (obsolescencia, diseño, falta de adaptación a su uso)",
          "Art. 4 — VALOR DE MERCADO (VM): precio al que podría venderse el inmueble entre un VENDEDOR VOLUNTARIO y un COMPRADOR INDEPENDIENTE en la FECHA DE LA TASACIÓN, con oferta pública al mercado y un plazo normal para negociar; NO incluye impuestos ni gastos de comercialización. VALOR HIPOTECARIO (VH): tasación PRUDENTE de la posibilidad futura de comerciar con el inmueble, atendiendo a sus aspectos DURADEROS A LARGO PLAZO, a las condiciones NORMALES Y LOCALES del mercado, a su uso actual y a sus usos alternativos; SIN ELEMENTOS ESPECULATIVOS",
          "Art. 4 — VALOR DE REEMPLAZAMIENTO BRUTO (VRB) o a nuevo: suma de las inversiones necesarias para construir, EN LA FECHA DE LA VALORACIÓN, otro inmueble de las mismas características (capacidad, uso, calidad) pero con TECNOLOGÍA Y MATERIALES ACTUALES. NETO (VRN) o actual: el VRB menos la depreciación física y funcional en la fecha de la valoración",
          "Art. 4 — NIVELES URBANÍSTICOS: NIVEL II = no urbanizable en el que no se permita edificar para usos diferentes a su naturaleza agrícola, forestal o ganadera o ligados a una explotación económica permitida, y urbanizable NO INCLUIDO en un ámbito de desarrollo o, estándolo, sin condiciones de desarrollo definidas; NIVEL I = todos los demás. FINCA RÚSTICA: terreno de nivel II que se dedique o pueda dedicarse a una actividad agraria",
          "Art. 4 — INMUEBLE LIGADO A UNA ACTIVIDAD ECONÓMICA: edificio o elemento de USO MONOVALENTE vinculado o vinculable a una explotación (industriales y agrarios, transporte y aparcamientos, hoteles, hospitales, recreativos y deportivos, enseñanza y culturales, equipamiento social, residencias de estudiantes o de la tercera edad). Las cámaras acorazadas o frigoríficas, lavanderías y cocinas de hostelería NUNCA son instalaciones polivalentes",
          "Art. 5 — SUPERFICIE: en edificios y elementos se utiliza la COMPROBADA POR EL TASADOR; si no puede comprobarse, la MENOR entre catastral y registral. Si la comprobada supera en más de un 5 % alguna de ellas en edificios, o más de un 10 % en elementos, su adopción exige verificar su ADECUACIÓN URBANÍSTICA. En terrenos y fincas rústicas sin comprobación viable puede usarse excepcionalmente la MAYOR, con justificación expresa, razonada y destacada",
          "Art. 5.1.d — los espacios con VALORES INDEPENDIENTES se valoran por separado, y el informe incluye una TABLA con la superficie adoptada de cada espacio (cuerpos independientes, zonas comunes, espacios exteriores privativos…). Art. 5.1.e — en viviendas protegidas, para el valor máximo legal, la superficie de la CÉDULA DE CALIFICACIÓN",
          "Art. 6 — los valores se reflejan en un INFORME y, en su caso, en un CERTIFICADO DE TASACIÓN (Título III), en la moneda de curso legal del país donde estén los bienes y, si no es el euro, también en euros al tipo de cambio oficial de la fecha de la tasación",
        ],
      },
      {
        h: "Los cuatro métodos y sus valores técnicos (arts. 15, 15 bis y 16)",
        nota:
          "Este es el esqueleto del tema y conviene memorizarlo como una tabla de correspondencias método → valor técnico, porque las preguntas suelen consistir en cruzarlos mal. Los cuatro métodos permiten obtener tres valores generales: valor de MERCADO, valor HIPOTECARIO y valor de REEMPLAZAMIENTO. Y hay una regla transversal que se pregunta sola: cuando la finalidad es la garantía hipotecaria del art. 2.a, en la aplicación de los métodos SE ELIMINARÁN LOS ELEMENTOS ESPECULATIVOS. Ojo a la trampa del examen de Zizur: no existe un «método de reversión»; el valor de reversión es un paso del método de actualización.",
        items: [
          "Art. 15.1 — CUATRO MÉTODOS: a) método del COSTE · b) método de COMPARACIÓN · c) método de ACTUALIZACIÓN DE RENTAS · d) método RESIDUAL",
          "Art. 15.2 — dichos métodos permiten obtener el VALOR DE MERCADO, el VALOR HIPOTECARIO y el VALOR DE REEMPLAZAMIENTO",
          "Art. 16.2 — REGLA TRANSVERSAL: en la aplicación de los métodos para la finalidad de garantía hipotecaria del art. 2.a SE ELIMINARÁN LOS ELEMENTOS ESPECULATIVOS",
          "Art. 15 bis — MODELOS AUTOMATIZADOS DE VALORACIÓN (añadido por la Orden ECM/599/2025), para las finalidades del art. 18 del RDL 24/2021: solo inmuebles con cierto grado de HOMOGENEIDAD y situados en un MERCADO ACTIVO en transacciones; deben estimar tanto el VALOR DE MERCADO como el VALOR HIPOTECARIO; metodología sólida, regular y contrastada, documentada a disposición del Banco de España, que desarrollará los requisitos MEDIANTE CIRCULAR",
          "Correspondencia método → valor técnico: COSTE → valor de REEMPLAZAMIENTO, bruto o neto · COMPARACIÓN → valor POR COMPARACIÓN (valor de mercado) y valor POR COMPARACIÓN AJUSTADO (valor hipotecario) · ACTUALIZACIÓN → valor POR ACTUALIZACIÓN (permite ambos) · RESIDUAL → valor RESIDUAL (permite ambos)",
        ],
      },
      {
        h: "Método del coste (arts. 17-19)",
        nota:
          "El más sencillo y el que más se parece a lo que hace un arquitecto a diario. Es aplicable a TODA CLASE de edificios y elementos de edificios, cualquiera que sea su estado —en proyecto, en construcción o rehabilitación, o terminados—, y produce el valor de reemplazamiento. La distinción entre BRUTO y NETO es la pregunta segura (cayó en Navarra 2026 y en Zizur 2026): el bruto suma las tres inversiones y el neto resta las depreciaciones. Y ojo a la circularidad aparente del art. 18.2: para determinar el valor del terreno dentro del método del coste se acude al método de COMPARACIÓN o al RESIDUAL, no al propio coste.",
        items: [
          "Art. 17.1 — APLICABILIDAD: a la valoración de TODA CLASE DE EDIFICIOS Y ELEMENTOS DE EDIFICIOS, en proyecto, en construcción o rehabilitación, o terminados",
          "Art. 17.2 — mediante este método se calcula el VALOR DE REEMPLAZAMIENTO, que podrá ser BRUTO O NETO",
          "Art. 18.1 — VALOR DE REEMPLAZAMIENTO BRUTO (VRB): suma de tres inversiones — a) el VALOR DEL TERRENO en que se encuentra el edificio, o el del EDIFICIO A REHABILITAR · b) el COSTE DE LA EDIFICACIÓN o de las obras de rehabilitación · c) los GASTOS NECESARIOS para realizar el reemplazamiento",
          "Art. 18.2 — para determinar el valor del terreno o del edificio a rehabilitar se utilizará el MÉTODO DE COMPARACIÓN o el MÉTODO RESIDUAL",
          "Art. 18.3 — el coste de la edificación es el COSTE DE LA CONSTRUCCIÓN POR CONTRATA = costes de EJECUCIÓN MATERIAL + GASTOS GENERALES, en su caso + BENEFICIO INDUSTRIAL del constructor. No incluye los elementos no esenciales fácilmente desmontables ni, salvo en inmuebles ligados a una explotación económica, los acabados e instalaciones no polivalentes. En edificios históricos o artísticos se tiene en cuenta además el valor particular de los elementos que les dan ese carácter",
          "Art. 18.4 — GASTOS NECESARIOS: los medios del mercado, a precios de la fecha de la valoración y con independencia de quién acometa el reemplazamiento: impuestos no recuperables y aranceles de la declaración de obra nueva, honorarios técnicos de proyecto y dirección, licencias y tasas, primas de los seguros obligatorios y honorarios de la inspección técnica, gastos de administración del promotor y otros estudios necesarios. NO son gastos necesarios el BENEFICIO DEL PROMOTOR ni los gastos FINANCIEROS o de COMERCIALIZACIÓN",
          "Art. 18.5-6 — en inmuebles en construcción o rehabilitación se atiende a la obra ejecutada en la fecha de la valoración, SIN ACOPIOS NI MOBILIARIO. En la hipótesis de edificio terminado, los precios de las unidades de obra pueden corregirse con la evolución del mercado, pero el valor del suelo solo puede modificarse con la obra TERMINADA y exige ACTUALIZAR la tasación",
          "Art. 19.1 — VALOR DE REEMPLAZAMIENTO NETO: se restará del valor de reemplazamiento bruto la DEPRECIACIÓN FÍSICA Y FUNCIONAL del EDIFICIO TERMINADO",
          "Art. 19.2 — DEPRECIACIÓN FÍSICA por uno de tres procedimientos: a) vidas útiles total y residual estimadas y JUSTIFICADAS por el tasador · b) AMORTIZACIÓN LINEAL: VRB, EXCLUIDO EL VALOR DE MERCADO DEL TERRENO, × antigüedad / vida útil total, con vida útil máxima de 100 años en residencial, 75 en oficinas, 50 en comerciales y 35 en industrial e inmuebles ligados a una explotación económica (en edificios sin uso determinado, ponderando por superficies) · c) suma de los costes y gastos para transformar el edificio actual en uno NUEVO de similares características",
          "Art. 19.3-4 — los ELEMENTOS de un edificio siguen el régimen de depreciación del edificio en que se encuentran; la DEPRECIACIÓN FUNCIONAL es el valor de los costes y gastos necesarios para adaptar el edificio a los usos a que se destina o para corregir errores de diseño u obsolescencia",
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
          "Art. 21.2 — requisitos ADICIONALES para la finalidad de garantía hipotecaria: a) datos para estimar la evolución de los precios de compraventa en el mercado local durante AL MENOS LOS DOS AÑOS ANTERIORES a la fecha de valoración · b) información sobre el comportamiento histórico de las variables que determinan los precios y sobre la coyuntura inmobiliaria · c) procedimientos para detectar datos anormales y ELIMINAR ELEMENTOS ESPECULATIVOS",
          "Art. 22.1 — PROCEDIMIENTO: cualidades del inmueble que influyen en su valor; análisis del segmento de mercado con TRANSACCIONES REALES Y OFERTAS FIRMES; selección de una MUESTRA REPRESENTATIVA tras eliminar los precios anormales; HOMOGENEIZACIÓN con criterios, coeficientes o ponderaciones adecuados; y asignación del valor NETO DE GASTOS DE COMERCIALIZACIÓN, previa deducción de las servidumbres y limitaciones del dominio no consideradas",
          "Art. 22.1.c-d (Orden ECM/599/2025) — la sociedad de tasación debe poder acreditar las FUENTES y justificar la TRAZABILIDAD de los comparables; indicar si homogeneiza el valor UNITARIO o el TOTAL; justificar las variables, los coeficientes y la PONDERACIÓN DE TESTIGOS; y, si usa una superficie distinta de la útil comprobada, incluir un coeficiente que recoja ese efecto",
          "Art. 22.2 — reglas especiales: en la hipótesis de edificio terminado, precios de inmuebles terminados similares EN LA FECHA DE LA TASACIÓN, corregibles razonadamente por la tendencia del mercado hasta la terminación; en FINCAS RÚSTICAS, homogeneización por valores unitarios POR HECTÁREA según clases de tierra o cultivos",
          "Art. 23 — AJUSTE: el valor por comparación se ajusta (valor por comparación ajustado) cuando concurran los requisitos de la advertencia específica del art. 12.3; la entidad tasadora aplica la reducción que considere necesaria y, si los datos no permiten estimarla, un 10 % en todo caso y un 15 % si aprecia gran volatilidad de precios",
        ],
      },
      {
        h: "Método de actualización de rentas (arts. 24-33)",
        nota:
          "Es el método de los inmuebles que producen renta, y su aplicabilidad se define por esa aptitud: toda clase de inmuebles SUSCEPTIBLES DE PRODUCIR RENTAS y los derechos reales del art. 52.2, SALVO LAS OPCIONES DE COMPRA. A diferencia del método de comparación, cuyos tres requisitos son acumulativos, aquí basta con que se cumpla AL MENOS UNO de los del art. 25 — matiz que se pregunta. Del cálculo, los conceptos con nombre propio son los FLUJOS DE CAJA, el VALOR DE REVERSIÓN y el TIPO DE ACTUALIZACIÓN.",
        items: [
          "Art. 24.1 — APLICABILIDAD: a la valoración de toda clase de inmuebles SUSCEPTIBLES DE PRODUCIR RENTAS y a la de los derechos reales del art. 52.2, SALVO LAS OPCIONES DE COMPRA",
          "Art. 24.2 — produce el VALOR POR ACTUALIZACIÓN, que permite determinar tanto el valor de mercado como el valor hipotecario",
          "Art. 25.1 — basta con que se cumpla AL MENOS UNO de los requisitos: a) MERCADO DE ALQUILERES representativo de los comparables, para presumir el cual es necesario disponer como mínimo de SEIS DATOS DE RENTAS DE ALQUILER que reflejen la situación actual del mercado · b) CONTRATO DE ARRENDAMIENTO sobre el inmueble · c) inmueble que produzca o pueda producir ingresos como LIGADO A UNA ACTIVIDAD ECONÓMICA, con datos contables o ratios medias suficientes",
          "Art. 26 — el cálculo exige: a) estimar los FLUJOS DE CAJA · b) estimar el VALOR DE REVERSIÓN · c) elegir el TIPO DE ACTUALIZACIÓN · d) aplicar la FÓRMULA. El residual dinámico tiene los mismos pasos SIN el valor de reversión (art. 36)",
          "Art. 27 — FLUJOS DE CAJA INMOBILIARIOS (cobros y pagos que traen causa del inmueble) u OPERATIVOS (beneficio de la explotación después de impuestos + amortizaciones − inversiones en inmovilizado y, en su caso, variación del fondo de maniobra; en la finalidad 2.a, solo beneficios ORDINARIOS). Se usan las hipótesis más probables y se calculan en unidades monetarias del año de la tasación, SIN EFECTO INFLACIONISTA",
          "Arts. 28-30 — reglas de flujos para inmuebles CON MERCADO DE ALQUILERES, estén alquilados, vacíos o explotados por su dueño (art. 28; durante el contrato, las rentas pactadas, y si superan las de comparables solo si es previsible que no cambien); OTROS INMUEBLES ARRENDADOS (art. 29; las cláusulas del contrato) y OTROS INMUEBLES EN EXPLOTACIÓN ECONÓMICA (art. 30; cuantías medias del sector)",
          "Art. 30 — explotación económica: en la finalidad 2.a, las cuantías medias solo se corrigen al alza si los mayores ingresos son duraderos al menos 5 AÑOS; sin cuantías medias, las propias de la explotación con datos de al menos los 2 ÚLTIMOS AÑOS (en proyecto, previsiones completas de al menos 3 EJERCICIOS), que en la finalidad 2.a se REDUCEN AL MENOS UN 10 %",
          "Art. 31 — VALOR DE REVERSIÓN: con flujos del art. 28, el valor del TERRENO al final de la vida útil, ajustado con la plusvalía o minusvalía justificada; con flujos del art. 29, el valor previsible del INMUEBLE AL FINAL DEL CONTRATO; con flujos del art. 30, el VALOR DE REEMPLAZAMIENTO NETO al final de la explotación",
          "Art. 32 — TIPO DE ACTUALIZACIÓN: tipo nominal adecuado al riesgo del proyecto y similar al que usa el mercado, convertido en REAL con un índice de inflación esperada; NO INFERIOR a la rentabilidad media anual del tipo medio de la DEUDA DEL ESTADO con vencimiento SUPERIOR A 2 AÑOS (IGUAL O SUPERIOR A 5 AÑOS en la finalidad 2.a), tomando el tipo medio de un período continuado de entre 3 MESES Y 1 AÑO anterior a la tasación, publicado por un organismo público o un mercado organizado",
          "Art. 33 — FÓRMULA: el valor por actualización es el VALOR ACTUAL de los flujos de caja y del valor de reversión esperados para el tipo de actualización elegido (la fórmula figura como imagen en el BOE)",
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
          "Art. 35.2 — el DINÁMICO exige además información sobre los PLAZOS de construcción o rehabilitación, de comercialización y, en su caso, de gestión urbanística y de ejecución de la urbanización",
          "Arts. 36-37 — procedimiento DINÁMICO: estimar flujos de caja, elegir el tipo y aplicar la fórmula, justificando hipótesis y parámetros. Los cobros parten de los valores en venta previstos EN LAS FECHAS DE COMERCIALIZACIÓN (hipótesis de edificio terminado); los pagos, de los costes de construcción, los gastos necesarios del art. 18.3-4, los de comercialización y, en su caso, los financieros de un promotor de tipo medio",
          "Art. 37.5 — el inmueble a promover se determina por el MAYOR Y MEJOR USO; pero si se conoce el destino decidido por la propiedad y no se opone a la normativa urbanística, se atiende a él; y en SOLARES EDIFICADOS conforme al régimen urbanístico se atiende a la EDIFICACIÓN EXISTENTE, salvo que pueda materializarse el mayor y mejor uso",
          "Art. 38 — TIPO DEL DINÁMICO: la RENTABILIDAD MEDIA ANUAL DEL PROYECTO SIN FINANCIACIÓN AJENA que obtendría un promotor medio = TIPO LIBRE DE RIESGO (el del art. 32, real o nominal según lo sea la estimación de los flujos) + PRIMA DE RIESGO, que fija la entidad tasadora según el tipo de activo, ubicación, liquidez, plazo y volumen de inversión; si los flujos incluyen financiación ajena, la prima se incrementa según el GRADO DE APALANCAMIENTO",
          "Art. 39 — valor residual dinámico = valor actual de los COBROS por la venta del inmueble terminado − valor actual de los PAGOS por costes y gastos, al tipo de actualización fijado (F = valor del terreno o inmueble a rehabilitar)",
          "Art. 40 — procedimiento ESTÁTICO: a) costes de construcción, gastos necesarios, de comercialización y, en su caso, financieros normales · b) VALOR EN VENTA en la hipótesis de edificio terminado EN LA FECHA DE LA TASACIÓN · c) MARGEN DE BENEFICIO DEL PROMOTOR · d) fórmula",
          "Art. 41 — MARGEN DE BENEFICIO DEL PROMOTOR: lo fija la entidad tasadora a partir de la información sobre promociones de semejante naturaleza, atendiendo al más habitual en promociones de características y emplazamiento similares, así como a los gastos financieros y de comercialización más frecuentes",
          "Art. 42 — FÓRMULA DEL PROCEDIMIENTO ESTÁTICO: F = VM · (1 − b) − Σ Ci, donde F es el valor del terreno o inmueble a rehabilitar, VM el valor del inmueble EN LA HIPÓTESIS DE EDIFICIO TERMINADO, b el margen o beneficio neto del promotor en tanto por uno, y Ci cada uno de los pagos necesarios considerados",
        ],
      },
      {
        h: "Valoración de inmuebles, terrenos y derechos (arts. 43-60)",
        nota:
          "El Capítulo II aplica los métodos a cada tipo de bien. En los terrenos de nivel I rige COMPARACIÓN y, si no es posible, RESIDUAL. En los restantes terrenos de nivel II rige comparación SIN CONSIDERAR su posible utilización urbanística, con el VALOR CATASTRAL como techo si no puede calcularse; los sujetos a explotación económica distinta de la agropecuaria tienen la regla propia del art. 51.2. Un proyecto de construcción sobre el terreno no altera estas reglas. En los edificios, la regla depende de la FINALIDAD (hipotecaria, art. 45; aseguradoras y fondos, art. 46; instituciones de inversión colectiva, art. 47) y de la situación del inmueble.",
        items: [
          "Art. 43.1 — las valoraciones se expresarán por FINCAS REGISTRALES INDEPENDIENTES; para valorar un inmueble integrado por varios elementos se valora cada uno y se suman (art. 43.2)",
          "Art. 43.4 — si no es posible ningún método del art. 15, cabe un PROCEDIMIENTO ADMITIDO EN LA PRÁCTICA PROFESIONAL, explicado y justificado en el informe y con la advertencia del art. 11.d)",
          "Art. 44.2 — los edificios EN DEMOLICIÓN y los declarados legalmente EN RUINA se valoran como TERRENOS, salvo que sean fincas rústicas",
          "Art. 45 — VALOR HIPOTECARIO de edificios: en construcción, el VRN (con obras paralizadas sin reanudación a corto plazo, el menor entre reemplazamiento y residual); terminados ligados a una actividad económica, el MENOR de comparación, actualización y VRN; arrendados o destinados al alquiler (salvo viviendas), el menor de actualización y comparación libre de inquilinos; viviendas arrendadas, el menor de actualización (art. 29) y comparación libre de inquilinos; uso propio o vacíos, COMPARACIÓN, si no ACTUALIZACIÓN (art. 28) y si no, COMO MÁXIMO el VRN",
          "Art. 45.3 y 46.3 — en los inmuebles acogidos a PROTECCIÓN PÚBLICA, el valor de tasación EN NINGÚN CASO será superior al VALOR MÁXIMO LEGAL",
          "Art. 46 — ASEGURADORAS Y FONDOS DE PENSIONES: en construcción o rehabilitación, el VALOR INICIAL (terreno o edificio antes de las obras) MÁS LAS CERTIFICACIONES abonadas que respondan a obra efectivamente realizada; terminados ligados a una actividad económica, el menor de comparación, actualización y VRN; arrendados, la actualización del art. 29 sin superar la comparación libre de inquilinos; uso propio o vacíos, comparación, si no actualización (art. 28) y si no, como máximo el VRN. Aquí la comparación no se ajusta",
          "Art. 47 — INSTITUCIONES DE INVERSIÓN COLECTIVA: en proyecto o construcción, el valor para la hipótesis de edificio terminado en la fecha de la tasación SIN CORRECCIONES AL ALZA; terminados, el menor entre comparación libre de inquilinos y actualización del art. 29 si están arrendados; VPO con menos de 5 AÑOS de afección: VML + máximo[0, ((60 − Tr)/60) × (VTL − VML)]",
          "Arts. 48-49 — FINCAS RÚSTICAS: valor de tasación = SUMA de a) la tierra con los edificios e instalaciones no desmontables necesarios para su explotación (el MENOR entre comparación, ajustada en su caso, y actualización de la explotación) · b) los edificios de explotaciones distintas (como inmuebles ligados a una explotación; como máximo el VRN) · c) otros edificios, como residencias o recreativos (según los arts. 45 a 47)",
          "Art. 50 — la sección de terrenos se aplica a los urbanos, urbanizables y no urbanizables que no se valoren como fincas rústicas, y también a los inmuebles construidos sin impedimento legal para su demolición cuyo mayor y mejor uso sea el de terreno",
          "Art. 51.1 — TERRENOS DE NIVEL URBANÍSTICO I: el valor de tasación es el VALOR POR COMPARACIÓN, en su caso ajustado; cuando su cálculo no sea posible, el VALOR RESIDUAL. En ambos casos se descuentan, cuando proceda, los GASTOS DE DEMOLICIÓN",
          "Art. 51.1 — REGLA CLAVE: la existencia de un PROYECTO DE CONSTRUCCIÓN sobre un determinado terreno NO PERMITE VALORARLO DE MANERA DIFERENTE a la prevista en esta sección",
          "Art. 51.3 — RESTANTES TERRENOS DE NIVEL URBANÍSTICO II: el valor de tasación es el valor POR COMPARACIÓN SIN CONSIDERACIÓN ALGUNA a su posible utilización urbanística; si no fuera posible calcularlo, será COMO MÁXIMO EL VALOR CATASTRAL del terreno",
          "Art. 51.4 — los valores del apartado 1 se calculan teniendo en cuenta el APROVECHAMIENTO URBANÍSTICO SUSCEPTIBLE DE APROPIACIÓN por su propietario EN LA FECHA DE LA TASACIÓN",
          "Art. 51.2 — terrenos sujetos a EXPLOTACIÓN ECONÓMICA distinta de la agropecuaria: valor por ACTUALIZACIÓN (art. 30)",
          "Art. 52.2 — DERECHOS Y LIMITACIONES de la sección 5.ª: superficie · concesión administrativa · servidumbre · nuda propiedad, usufructo, uso y habitación · limitaciones de dominio · opciones de compra · tiempo compartido · compromisos de compra a plazos",
          "Arts. 53-54 — DERECHO DE SUPERFICIE y CONCESIÓN ADMINISTRATIVA: el edificio se valora como en pleno dominio restando el valor actual de los pagos al concedente y de la reversión, o por actualización sin valor de reversión para el titular; el derecho sobre el terreno, por el RESIDUAL DINÁMICO; la propiedad del terreno gravado, sumando el valor actual de los pagos y de la reversión; y cabe la comparación si hay datos suficientes",
          "Art. 55 — SERVIDUMBRES: se valoran RESTANDO del valor del inmueble supuesto LIBRE de la carga, el valor del mismo inmueble TENIENDO EN CUENTA el efecto de la servidumbre que lo grava; ambos valores se calculan por el método que corresponda",
          "Art. 56 — NUDA PROPIEDAD, USUFRUCTO, USO Y HABITACIÓN: la base para el prorrateo es el valor por ACTUALIZACIÓN según el art. 28; el USUFRUCTO es el valor actual actuarial de los flujos de caja durante el período de vigencia del derecho, y la NUDA PROPIEDAD la diferencia entre la base de prorrateo y ese valor; la proporción resultante se aplica al valor de tasación; el USO Y HABITACIÓN = usufructo / 1,12",
          "Arts. 57-60 — LIMITACIONES DEL DOMINIO: valor sin la limitación menos el valor de esta · OPCIONES DE COMPRA (finalidad 2.c): diferencia positiva entre el valor del inmueble y el precio de ejercicio actualizado; nula si es negativa, nula o improbable · TIEMPO COMPARTIDO: actualización con interés de la deuda pública · COMPROMISOS DE COMPRA A PLAZOS: valor del inmueble menos el precio pactado actualizado",
        ],
      },
    ],
    claves: [
      "Finalidad FINANCIERA (garantía hipotecaria, aseguradoras, fondos): NO confundir con el RD 1492/2011, que es valoración URBANÍSTICA",
      "Tres principios que caen: ANTICIPACIÓN · FINALIDAD · MAYOR Y MEJOR USO",
      "Mayor y mejor uso: dentro de las posibilidades LEGALES Y FÍSICAS",
      "Prudencia: el MENOR valor entre escenarios IGUALMENTE probables; obligatoria en las finalidades 2.a, b y d",
      "Superficie: la COMPROBADA POR EL TASADOR; si no puede comprobarse, la MENOR entre catastral y registral, salvo excepción motivada para terrenos y fincas rústicas (art. 5)",
      "Antigüedad: desde la construcción o la ÚLTIMA REHABILITACIÓN INTEGRAL",
      "Actualización de una tasación: misma entidad tasadora y antes de DOS AÑOS",
      "CUATRO métodos: coste · comparación · actualización de rentas · residual (no existe «método de reversión»)",
      "Permiten obtener tres valores: de MERCADO, HIPOTECARIO y de REEMPLAZAMIENTO",
      "Para garantía hipotecaria SE ELIMINAN LOS ELEMENTOS ESPECULATIVOS (art. 16.2)",
      "COSTE → valor de reemplazamiento BRUTO (suma de 3 inversiones) o NETO (bruto menos depreciaciones)",
      "VRN = VRB − depreciación física y funcional del EDIFICIO TERMINADO (art. 19.1)",
      "Gastos necesarios: NUNCA el beneficio del promotor ni los gastos financieros o de comercialización (art. 18.4)",
      "Vida útil máxima: residencial 100 · oficinas 75 · comerciales 50 · industrial y ligados a explotación 35 años (art. 19.2.b)",
      "Dentro del método del coste, el terreno se valora por COMPARACIÓN o por RESIDUAL",
      "COMPARACIÓN: exige AL MENOS SEIS transacciones u ofertas de comparables (art. 21.1.c)",
      "Valor por comparación = mercado · valor por comparación AJUSTADO = hipotecario",
      "ACTUALIZACIÓN: basta con cumplir AL MENOS UNO de los requisitos; el mercado de alquileres exige SEIS datos de rentas",
      "Se excluyen del método de actualización las OPCIONES DE COMPRA (art. 24.1)",
      "Tipo de actualización: no inferior a la DEUDA DEL ESTADO a más de 2 años (5 o más en hipotecaria) (art. 32.2)",
      "RESIDUAL DINÁMICO: terrenos urbanos o urbanizables y edificios en proyecto, construcción o rehabilitación, incluso paralizados",
      "RESIDUAL ESTÁTICO: solo solares e inmuebles en rehabilitación que puedan empezar EN UN AÑO, y solares edificados",
      "Fórmula del estático: F = VM · (1 − b) − Σ Ci",
      "Las valoraciones se expresan por FINCAS REGISTRALES INDEPENDIENTES (art. 43.1)",
      "Protección pública: el valor de tasación NUNCA supera el valor máximo legal (arts. 45.3 y 46.3)",
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
          titulo: "Orden ECO/805/2003, art. 3.1: los once principios",
          columnas: ["Principio", "Idea clave"],
          filas: [
            ["Anticipación", "El valor de un inmueble en explotación económica depende de las expectativas de renta futuras"],
            ["Finalidad", "La finalidad de la valoración condiciona el método y las técnicas"],
            ["Mayor y mejor uso", "Uso económicamente más aconsejable e intensidad de mayor valor, dentro de las posibilidades legales y físicas"],
            ["Probabilidad", "Entre escenarios razonables, los que se estimen más probables"],
            ["Proporcionalidad", "Amplitud del informe según la importancia, el uso y la singularidad del objeto"],
            ["Prudencia", "Entre escenarios igualmente probables, el de menor valor; obligatorio en las finalidades 2.a, b y d"],
            ["Sustitución", "El valor equivale al de otros activos de características similares sustitutivos"],
            ["Temporalidad", "El valor de un inmueble es variable a lo largo del tiempo"],
            ["Transparencia", "El informe contiene la información necesaria y suficiente y detalla hipótesis y documentación"],
            ["Valor residual", "El valor de cada factor de producción es el total menos el de los demás factores"],
            ["Sostenibilidad", "Efecto de los factores medioambientales, incluidos los riesgos climáticos (Orden ECM/599/2025)"]
          ],
          nota: "Orden ECO/805/2003, art. 3. Los principios se utilizan como criterios de interpretación y, en su caso, de integración de la Orden (art. 3.2)."
        },
        {
          titulo: "Orden ECO/805/2003, art. 4: definiciones con cifra",
          columnas: ["Definición", "Dato"],
          filas: [
            ["Actualización de una tasación", "Revisión por la misma entidad tasadora antes de 2 años desde la emisión, con cambio de advertencias, condicionantes o valores"],
            ["Edificio destinado a uso determinado", "Superficie sobre rasante de ese uso igual o superior a 2/3 de la total sobre rasante"],
            ["Inmueble en rehabilitación", "Licencia + proyecto visado + acondicionamiento de al menos el 50 % de la superficie edificada + coste de al menos el 50 % del VRB sin terreno; en reforma parcial, al menos una planta completa"],
            ["Superficie útil", "No computan cerramientos interiores fijos, elementos estructurales verticales, conductos de sección superior a 100 cm², suelo con altura libre inferior a 1,5 m ni espacios exteriores"],
            ["Superficie construida sin partes comunes", "Útil + cerramientos exteriores al 100 % (fachada o medianeros) o al 50 % (compartidos con otros elementos del edificio)"],
            ["Superficie construida con partes comunes", "La anterior + la parte proporcional de los elementos comunes según su cuota"],
            ["Vida útil", "Total, desde la construcción o última rehabilitación integral; residual, desde la fecha de la tasación"]
          ],
          nota: "Orden ECO/805/2003, art. 4. La exclusión de los espacios exteriores de la superficie útil y el plazo de dos años de la actualización proceden de la Orden ECM/599/2025."
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
          titulo: "Orden ECO/805/2003, art. 18: composición del valor de reemplazamiento bruto",
          columnas: ["Sumando", "Cómo se determina", "Qué no incluye"],
          filas: [
            ["Terreno o edificio a rehabilitar", "Método de comparación o método residual (art. 18.2)", "—"],
            ["Coste de la edificación u obras", "Coste de la construcción por contrata: ejecución material + gastos generales, en su caso + beneficio industrial del constructor (art. 18.3)", "Elementos no esenciales fácilmente desmontables; acabados e instalaciones no polivalentes, salvo en inmuebles ligados a una explotación económica"],
            ["Gastos necesarios", "Impuestos no recuperables y aranceles de la obra nueva, honorarios técnicos, licencias y tasas, seguros obligatorios e inspección técnica, administración del promotor y otros estudios (art. 18.4)", "Beneficio del promotor; gastos financieros o de comercialización"]
          ],
          nota: "Orden ECO/805/2003, art. 18. En construcción o rehabilitación se atiende a la obra ejecutada en la fecha de la valoración, sin acopios ni mobiliario (art. 18.5). VRN = VRB − depreciación física y funcional del edificio terminado (art. 19.1)."
        },
        {
          titulo: "Orden ECO/805/2003, art. 19.2.b): vida útil total máxima en la amortización lineal",
          columnas: ["Uso del edificio", "Vida útil máxima"],
          filas: [
            ["Residencial", "100 años"],
            ["Oficinas", "75 años"],
            ["Comercial", "50 años"],
            ["Industrial e inmuebles ligados a una explotación económica", "35 años"],
            ["Edificio no destinado a un uso determinado", "Ponderación de los plazos anteriores según la superficie de cada uso"]
          ],
          nota: "Depreciación física lineal = VRB, excluido el valor de mercado del terreno, × antigüedad / vida útil total, que estima el tasador con esos máximos. Alternativas: vidas útiles total y residual justificadas por el tasador (art. 19.2.a) o coste de transformar el edificio en uno nuevo de similares características (art. 19.2.c)."
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
          titulo: "Orden ECO/805/2003, arts. 30 y 32: cifras del método de actualización",
          columnas: ["Regla", "Dato", "Ámbito"],
          filas: [
            ["Ingresos superiores a la media del sector, art. 30.3.a", "Duraderos al menos los 5 años siguientes a la tasación", "Finalidad hipotecaria (2.a)"],
            ["Cuantías propias de la explotación, art. 30.5", "Datos de al menos los 2 últimos años; en proyecto, previsiones completas de al menos 3 ejercicios", "Cuando no hay cuantías medias del sector"],
            ["Reducción de esas cuantías, art. 30.5", "Al menos un 10 %", "Finalidad hipotecaria (2.a)"],
            ["Tipo nominal mínimo, art. 32.2", "Rentabilidad media anual de la Deuda del Estado con vencimiento superior a 2 años", "General"],
            ["Vencimiento de referencia, art. 32.2", "Igual o superior a 5 años", "Finalidad hipotecaria (2.a)"],
            ["Tipo medio, art. 32.2", "Período continuado de entre 3 meses y 1 año anterior a la tasación", "Publicado por un organismo público o un mercado organizado"]
          ],
          nota: "Orden ECO/805/2003, arts. 30 y 32. El tipo nominal se convierte en real con un índice de inflación esperada (art. 32.1). En el residual dinámico, tipo = tipo libre de riesgo del art. 32 + prima de riesgo (art. 38)."
        },
        {
          titulo: "Orden ECO/805/2003, art. 31: valor de reversión según el régimen de flujos",
          columnas: ["Flujos de caja", "Valor de reversión"],
          filas: [
            ["Inmuebles con mercado de alquileres (art. 28)", "Valor del terreno al final de la vida útil, ajustado con la plusvalía o minusvalía razonable y justificada"],
            ["Otros inmuebles arrendados (art. 29)", "Valor previsible del inmueble al final del contrato: libre de inquilinos, con el suelo ajustado y menos la depreciación física y funcional"],
            ["Inmuebles en explotación económica (art. 30)", "Valor de reemplazamiento neto al final del período de explotación"]
          ],
          nota: "Orden ECO/805/2003, art. 31. El valor por actualización es el valor actual de los flujos de caja y del valor de reversión (art. 33)."
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
            ["Edificio hipotecario en construcción o rehabilitación", "Reemplazamiento neto; con obras paralizadas sin reanudación a corto plazo, el menor entre reemplazamiento y residual del terreno y de la edificación realizada", "45.1.a"],
            ["Edificio hipotecario terminado ligado a actividad económica", "Menor entre comparación, actualización si es posible y reemplazamiento neto", "45.2.a"],
            ["Edificio hipotecario terminado arrendado o destinado al alquiler, salvo viviendas", "Menor entre actualización (art. 28; art. 29 si no hay mercado de alquileres y está arrendado) y comparación, ajustada en su caso, libre de inquilinos", "45.2.b"],
            ["Vivienda arrendada, finalidad hipotecaria", "Menor entre actualización del art. 29 y comparación, ajustada en su caso, libre de inquilinos; si no pueden calcularse, como máximo reemplazamiento neto", "45.2.b"],
            ["Edificio hipotecario terminado, uso propio o vacío no ligado a explotación", "Comparación ajustada si procede; si no puede calcularse, actualización del art. 28; después, como máximo reemplazamiento neto", "45.2.c"],
            ["Inmueble con protección pública (hipotecaria, aseguradoras y fondos)", "Nunca superior al valor máximo legal", "45.3 y 46.3"],
            ["Edificio en construcción para aseguradoras o fondos de pensiones", "Valor inicial más certificaciones abonadas que respondan a obra efectivamente ejecutada", "46.1"],
            ["Institución de inversión colectiva: inmueble terminado", "Arrendado: menor entre comparación libre de inquilinos y actualización del art. 29; no arrendado: comparación libre de inquilinos", "47.2"],
            ["Finca rústica: tierra y mejoras necesarias", "Menor entre comparación, ajustada en su caso, y actualización de la explotación", "49.a"],
            ["Terreno de nivel urbanístico I", "Comparación, ajustada en su caso; si no puede calcularse, residual; descontar demolición cuando proceda", "51.1"],
            ["Terreno sujeto a explotación económica distinta de la agropecuaria", "Actualización por el procedimiento del art. 30", "51.2"],
            ["Restantes terrenos de nivel II", "Comparación sin considerar posible utilización urbanística; si no puede calcularse, como máximo valor catastral", "51.3"]
          ],
          nota: "Orden ECO/805/2003, arts. 45–47, 49 y 51. En instituciones de inversión colectiva, las viviendas de protección oficial con menos de 5 años de afección pueden superar el valor máximo legal con el tope de la fórmula del art. 47.4; esa excepción no existe en las finalidades de los arts. 45 y 46."
        }
      ],
      datos: [
        "Orden ECO/805/2003, art. 2: cuatro finalidades: garantía hipotecaria de la cartera de cobertura, aseguradoras y reaseguradoras, instituciones de inversión colectiva inmobiliarias y fondos de pensiones.",
        "Orden ECO/805/2003, art. 3.1.f: el principio de prudencia elige el menor valor entre escenarios igualmente probables y es obligatorio para las finalidades del art. 2.a, b y d.",
        "Orden ECO/805/2003, art. 3.1.k: el principio de sostenibilidad considera cuando proceda indicadores del efecto de factores medioambientales, incluidos riesgos ambientales y climáticos.",
        "Orden ECO/805/2003, art. 4: actualización de tasación significa revisión por la misma entidad tasadora antes de 2 años con cambio de advertencias, condicionantes o valores; una valoración intermedia de obra no la implica.",
        "Orden ECO/805/2003, art. 4: nivel urbanístico II incluye no urbanizable con edificación limitada a usos de su naturaleza o explotación permitida y urbanizable sin ámbito de desarrollo o sin condiciones de desarrollo definidas; nivel I es el resto.",
        "Orden ECO/805/2003, art. 4: el valor de mercado excluye impuestos y gastos de comercialización; el valor hipotecario excluye los elementos especulativos.",
        "Orden ECO/805/2003, art. 15.2: los cuatro métodos permiten obtener el valor de mercado, el valor hipotecario y el valor de reemplazamiento.",
        "Orden ECO/805/2003, art. 15 bis: los modelos automatizados solo valoran inmuebles con cierto grado de homogeneidad situados en un mercado activo, deben estimar el valor de mercado y el hipotecario, y el Banco de España desarrollará sus requisitos mediante circular.",
        "Orden ECO/805/2003, arts. 18–19: reemplazamiento bruto = terreno o edificio a rehabilitar + edificación u obras + gastos necesarios; neto = bruto menos depreciación física y funcional.",
        "Orden ECO/805/2003, art. 18.3: coste de la construcción por contrata = ejecución material + gastos generales, en su caso + beneficio industrial del constructor.",
        "Orden ECO/805/2003, art. 19.2.b: depreciación física lineal = VRB sin el valor de mercado del terreno × antigüedad / vida útil total (máximos de 100, 75, 50 y 35 años).",
        "Orden ECO/805/2003, art. 22.1.e: el valor por comparación se asigna neto de gastos de comercialización, previa deducción de las servidumbres y limitaciones del dominio no consideradas.",
        "Orden ECO/805/2003, art. 26: actualización de rentas exige estimar flujos de caja y valor de reversión, elegir tipo de actualización y aplicar la fórmula.",
        "Orden ECO/805/2003, art. 27.4: los flujos de caja se calculan en unidades monetarias del año de la tasación, sin efecto inflacionista.",
        "Orden ECO/805/2003, art. 38: tipo del residual dinámico = tipo libre de riesgo (art. 32) + prima de riesgo fijada por la entidad tasadora; es la rentabilidad media anual del proyecto sin financiación ajena de un promotor medio.",
        "Orden ECO/805/2003, art. 40.1.b: en el residual estático el valor en venta se estima para la hipótesis de edificio terminado en la fecha de la tasación; en el dinámico, en las fechas previstas de comercialización (art. 37.2).",
        "Orden ECO/805/2003, art. 42: en F = VM × (1 − b) − Σ Ci, b es el beneficio neto del promotor expresado en tanto por uno.",
        "Orden ECO/805/2003, art. 43.1 y 43.4: valoraciones por fincas registrales independientes; un procedimiento profesional distinto de los cuatro métodos solo cabe cuando ninguno sea utilizable y exige justificación detallada.",
        "Orden ECO/805/2003, art. 44.2: edificio en demolición o legalmente en ruina se valora según las reglas de terrenos, salvo calificación como finca rústica.",
        "Orden ECO/805/2003, arts. 45.3 y 46.3: en edificios sujetos a protección pública, el valor de tasación no puede superar el valor máximo legal.",
        "Orden ECO/805/2003, art. 47.1: en IIC inmobiliarias, un inmueble en proyecto, construcción o rehabilitación se tasa para la hipótesis de terminado sin corrección al alza por tendencia de mercado hasta acabar las obras.",
        "Orden ECO/805/2003, art. 47.4: en IIC, vivienda de protección oficial con menos de 5 años de afección: valor de tasación como máximo VML + máximo[0, ((60 − Tr)/60) × (VTL − VML)], con Tr en meses hasta la expiración del régimen.",
        "Orden ECO/805/2003, art. 49: finca rústica = tierra con edificios e instalaciones necesarios (menor entre comparación y actualización de la explotación) + edificios de otras explotaciones (como máximo VRN) + otros edificios según los arts. 45 a 47.",
        "Orden ECO/805/2003, art. 51.1: un proyecto de construcción sobre el terreno no permite alterar su regla de tasación.",
        "Orden ECO/805/2003, art. 52.2: ocho grupos de derechos o limitaciones: superficie, concesión administrativa, servidumbre, nuda propiedad-usufructo-uso-habitación, limitaciones de dominio, opciones de compra, tiempo compartido y compromisos de compra a plazos.",
        "Orden ECO/805/2003, art. 56.4: el valor del derecho de uso y habitación es el del usufructo calculado conforme a ese artículo dividido por 1,12.",
        "Orden ECO/805/2003, art. 58: el valor de la opción de compra es la diferencia positiva entre el valor del inmueble (art. 47) y el precio de ejercicio actualizado; es nulo si la diferencia es negativa o nula o si su ejercicio es improbable."
      ],
      excepciones: [
        "Orden ECO/805/2003, art. 3.1.d y f: probabilidad selecciona los escenarios más probables; prudencia elige el menor valor solo entre escenarios igualmente probables.",
        "Orden ECO/805/2003, art. 5.1.c: superar en más del 5 % la superficie registral o catastral obliga a verificar adecuación urbanística en edificios; en elementos el umbral es más del 10 %.",
        "Orden ECO/805/2003, art. 18.3: el coste por contrata no incluye los acabados e instalaciones no polivalentes, salvo en los inmuebles ligados a una explotación económica; en edificios históricos o artísticos se suma el valor particular de los elementos que les dan ese carácter.",
        "Orden ECO/805/2003, art. 18.4: los gastos de administración del promotor sí son gasto necesario; el beneficio del promotor y los gastos financieros o de comercialización no.",
        "Orden ECO/805/2003, art. 20.3 y 23: valor por comparación y valor por comparación ajustado son distintos; el ajuste se hace cuando concurre la advertencia específica legal, no de forma automática en toda tasación.",
        "Orden ECO/805/2003, art. 25.1: para actualización basta una de tres vías: mercado de alquileres, contrato de arrendamiento o explotación económica con datos suficientes; comparación exige conjuntamente los requisitos del art. 21.1.",
        "Orden ECO/805/2003, art. 24.1: la actualización puede valorar derechos reales del art. 52.2, pero excluye las opciones de compra, cuya valoración específica figura en el art. 58.",
        "Orden ECO/805/2003, arts. 16.2, 27.3, 29 y 30: en la finalidad hipotecaria se eliminan los elementos especulativos, solo cuentan los beneficios ordinarios, los flujos superiores a los de comparables atribuibles a elementos especulativos se sustituyen por estos, y las cuantías medias solo se corrigen al alza si los mayores ingresos duran al menos cinco años.",
        "Orden ECO/805/2003, art. 34: dinámico utiliza valores esperados y admite obras paralizadas; estático utiliza valores actuales y, para solares sin edificar o inmuebles a rehabilitar, exige posible inicio en no más de un año.",
        "Orden ECO/805/2003, art. 37.5: el inmueble a promover sigue el mayor y mejor uso, salvo que se conozca el destino decidido por la propiedad y no se oponga a la normativa urbanística; en solares edificados conforme al régimen urbanístico se atiende a la edificación existente, salvo que pueda materializarse el mayor y mejor uso.",
        "Orden ECO/805/2003, arts. 38.3 y 41: el texto vigente no fija primas de riesgo ni márgenes del promotor mínimos: los determina la entidad tasadora con la información de que disponga.",
        "Orden ECO/805/2003, art. 45.1.a: en la tasación hipotecaria el inmueble en construcción se valora por su reemplazamiento neto, pero con obras paralizadas sin reanudación a corto plazo se toma el menor entre el valor de reemplazamiento y el residual.",
        "Orden ECO/805/2003, arts. 45.2.b y 47.2: el inmueble hipotecario arrendado se compara también con valor libre de inquilinos; en IIC inmobiliarias, si está arrendado, se adopta el menor entre comparación libre de inquilinos y actualización del art. 29.",
        "Orden ECO/805/2003, art. 47.4: la regla general del valor máximo legal en IIC tiene una excepción formulada para VPO con menos de cinco años de afección restantes; no trasladarla automáticamente a las finalidades de los arts. 45 y 46.",
        "Orden ECO/805/2003, art. 51.2–3: antes de aplicar la regla residual de nivel II del art. 51.3, los terrenos con explotación económica distinta de la agropecuaria siguen la actualización del art. 30.",
        "Orden ECO/805/2003, arts. 55–56: servidumbre = diferencia entre valor libre y valor con carga; nuda propiedad y usufructo se prorratean partiendo de actualización del art. 28."
      ]
    },
  };
