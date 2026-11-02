// Resumen del tema E16. Formato: cabecera de src/data/resumenes.js.
// Revisado el 01-11-2026 (chequeo del tema). Fuentes: TXT del tema (DF 61/2013, cap. III, arts. 44-60, y
// Ordenanza municipal de ayudas a la rehabilitación en el texto del BON n.º 251, de 05-12-2023, vigente).
// Vigencia a 21-05-2026: el índice de LexNavarra (r=32564) confirma la estructura del cap. III (arts. 44-60,
// con «Nota de Vigencia» en los arts. 55 y 58), pero el texto de esos artículos no se pudo leer allí (la
// página se corta en el art. 30). Fuera del DF, la DT 15.ª de la LF 10/2010 (redacción de la LF 9/2025,
// BON 138, de 11-07-2025, y de la LF 15/2025, BON 247, de 12-12-2025) cambia desde el 1-1-2026 la
// subvención de la envolvente térmica y crea un régimen especial para obras de 15.000 € o menos; y la
// DA 28.ª de la LF 10/2010 (LF 20/2022) regula la ayuda del art. 57.3 con 15 años de alquiler. Se avisa
// en cada sitio. Además, desde el 1-1-2019 las referencias al IPREM de la normativa foral de vivienda se
// entienden hechas al SARA (DA 19.ª de la LF 10/2010, añadida por la LF 28/2018): afecta a los tramos del
// art. 55.1 y al 1,4 del art. 57.4. Corregido: los porcentajes municipales del ascensor (no hay «100 % en PIG» para el
// ascensor: el «hasta el 100 %» es de b.3, b.4 y b.5), el cuadro del art. 55.1 y los límites C) y D) del
// art. 55.3. Añadidos los cuadros municipales completos (Casco Antiguo y resto de la ciudad).
export default {
  intro: "El Tema 16 combina el Capítulo III del Decreto Foral 61/2013, de 18 de septiembre (rehabilitación protegida: arts. 44-54, disposiciones generales y calificación; arts. 55-60, ayudas), con la Ordenanza reguladora de las ayudas municipales a la rehabilitación de edificios del Ayuntamiento de Pamplona (texto del BON 251/2023), que da ayudas complementarias en dos ámbitos: Casco Antiguo (Título III) y resto de la ciudad, incluidos Ensanches y Milagrosa (Título IV). Lo foral exige edificio de más de 25 años y calificación provisional antes de empezar las obras; lo municipal exige más de 50 años y consulta previa a la Oficina de Rehabilitación de Viviendas (ORV). Ojo a la vigencia: para las solicitudes de calificación provisional presentadas desde el 1-1-2026, la envolvente térmica se subvenciona por la DT 15.ª de la LF 10/2010 (50 % y 12.500 €/vivienda), no por el 40 % y los 6.000 € del art. 55 del DF; y desde el 1-1-2019 el IPREM que cita el DF se entiende hecho al SARA (DA 19.ª de la LF 10/2010).",

  bloques: [
    {
      h: "Actuaciones protegibles y condiciones del edificio (arts. 44-46 DF)",
      nota: "El art. 45 es el núcleo: qué se protege (45.1), qué no (45.3) y los acabados (45.4-5). El art. 46 fija las condiciones mínimas del inmueble.",
      items: [
        "Art. 44: la calificación es un procedimiento administrativo que comprueba la legalidad y las condiciones; incluye calificación provisional y definitiva. Las obras no podrán iniciarse hasta obtener la calificación provisional.",
        "Art. 45.1.a: adecuación estructural, funcional o ambas de un edificio en el que el 50 %, al menos, de su superficie útil total, deducidas la planta baja y las superficies bajo rasante, se destine a vivienda.",
        "Adecuación estructural: seguridad constructiva que garantice estabilidad, resistencia, firmeza y solidez (DF 142/2004).",
        "Adecuación funcional: accesos, estanqueidad frente a lluvia y humedad, aislamiento térmico, redes generales (agua, gas, electricidad, telefonía, saneamiento), seguridad frente a accidentes y siniestros, y accesibilidad universal; incluye la renovación de acabados comunes necesaria por las obras protegibles.",
        "Art. 45.1.b-d: ahorro energético y adaptación normativa (agua, gas, electricidad, antenas, incendios, ventilación, ruidos, saneamiento, calefacción); habitabilidad (exige adecuación estructural y funcional suficiente, salvo accesibilidad por discapacidad); accesibilidad universal (supresión de barreras).",
        "Art. 45.1.e-g: ampliar la vivienda hasta 120 m² útiles; crear viviendas uniendo (máx. 120 m² útiles) o dividiendo (Anexo II DF 142/2004); en ambos casos sin incrementar el volumen de la envolvente ni la superficie construida.",
        "Art. 45.1.h: mejora de eficiencia de instalaciones térmicas centralizadas (CTE DB-HE-2); las redes de calor urbanas cuentan como centralizadas si al menos el 50 % de su demanda es residencial; incluye el anillado interior de calefacción.",
        "Art. 45.3: no son protegibles el vaciado interior (se demuele, superpone o sustituye más del 60 % de los forjados horizontales, excluidos cubierta y derribos del planeamiento); el derribo de fachadas exteriores, salvo si no conlleva vaciado; la ampliación o creación de viviendas por encima de 120 m²; y, en instalaciones térmicas centralizadas, la descentralización, el mantenimiento y lo hecho en el interior de las viviendas (salvo el anillado), incluidos los repartidores de costes.",
        "Excepción al vaciado: edificios residenciales de más de 100 años cuyo deterioro lo aconseje, que mantengan fachadas y elementos de interés y sean BIC, inventariados o catalogados; y las renovaciones del art. 56.2 (PIG).",
        "Art. 45.4-5: acabados solo protegibles si los exigen obras estructurales, de accesibilidad o de habitabilidad; si son de calidad superior, se computan al precio de calidad similar.",
        "Art. 46: antigüedad superior a 25 años desde el fin de la construcción, salvo adaptaciones sobrevenidas por discapacidad o adaptación de instalaciones a normativa técnica obligatoria; adaptación al planeamiento (si está fuera de ordenación, que el planeamiento no prevea su sustitución por otros usos); organización que permita cumplir la habitabilidad; si se denegó la provisional y se hicieron las obras, no cabe nueva solicitud; garantizar la adecuación estructural y funcional (certificado o IEE), salvo la accesibilidad imposible por las características del edificio.",
        "DT 15.ª.1 LF 10/2010 (redacción LF 9/2025): desde el 1-1-2026 repite el requisito de más de 25 años y sus dos excepciones, y permite cambiarlo por orden foral."
      ]
    },

    {
      h: "Presupuestos y sus límites (arts. 47-48 DF)",
      nota: "Tres presupuestos: general (sin límites), protegible (lo que se protege) y subvencionable (base de la subvención).",
      items: [
        "Art. 47.1: presupuesto general = PEM + gastos generales y beneficio industrial, hasta un máximo del 15 % del PEM entre ambos.",
        "Art. 47.2: presupuesto protegible = general menos partidas no protegibles + hasta un máximo del 10 % de honorarios de proyecto y dirección de obra + tasas de licencia municipal de obra.",
        "Art. 47.2: los honorarios del Informe de Evaluación de Edificios entran si la calificación provisional se solicita en los cinco primeros años desde el informe.",
        "Art. 47.2: en ningún caso entran el IVA ni el ICIO.",
        "Art. 47.3: presupuesto subvencionable = base de cálculo de las subvenciones; igual al protegible si no lo reducen los límites del DF.",
        "Art. 48.1: el presupuesto general carece de límites inferior o superior.",
        "Art. 48.2.a: límite inferior del protegible: 2.000 € por vivienda (protegible de viviendas, sin locales, dividido por el número de viviendas resultante).",
        "Art. 48.2.b: límite superior: el de VPO por m² útil de vivienda y anejos al solicitar la provisional; si la vivienda supera 120 m² útiles, 120 × precio máximo de venta del m² útil de VPO.",
        "Art. 48.2.b: en actuaciones sobre todo el edificio o elementos comunes, la superficie computable de locales comerciales no puede exceder del 40 % de la de las viviendas; talleres de artesanos y anejos agrícolas y ganaderos, hasta 100 m².",
        "Art. 48.3: subvencionable máximo = 50 % del módulo ponderado × m² útiles de vivienda (máx. 120 m²) + 20 % del módulo ponderado × m² útiles de anejos, sin superar nunca el protegible; su límite inferior es el mismo del 48.2.a.",
        "Art. 48.4: la superficie útil se calcula según el art. 21 del Anexo II del DF 142/2004."
      ]
    },

    {
      h: "Calificación provisional y definitiva, plazos y titularidad (arts. 49-53 DF)",
      nota: "Regla de oro: las obras empezadas antes de la calificación provisional hacen que toda la actuación deje de ser protegible. Excepción legal desde 2025: DT 15.ª.2 LF 10/2010 para presupuestos protegibles de 15.000 € o menos.",
      items: [
        "Art. 49.1: la resolución de calificación indica, entre otros extremos, el módulo ponderado, la autorización de patrimonio si procede y el plazo máximo de 6 meses para iniciar y 36 meses para terminar, ambos desde la provisional.",
        "Art. 49.2: solo son protegibles las actuaciones iniciadas después de la calificación provisional; si se inician antes, la actuación en su conjunto no es protegible.",
        "Art. 49.3: la provisional surte efectos de informe favorable previo a licencia (habitabilidad y normativa básica), limitado a los elementos afectados, y da acceso a préstamos cualificados.",
        "Art. 49.4: la fecha de la calificación definitiva es la de la diligencia de terminación de obra, que surte sus efectos.",
        "Art. 49.5: la vivienda debe ser residencia habitual y permanente del solicitante, salvo promotores en alquiler y comunidades de propietarios.",
        "Art. 50: la solicitud provisional se presenta en el Departamento o en las Oficinas de Rehabilitación, con: personalidad; propiedad, usufructo o alquiler (nota simple o, el inquilino, contrato y autorización del propietario); proyecto técnico o memoria; licencia de obra o compromiso de solicitarla; declaración del IRPF (salvo comunidades y arrendadores); en comunidades, declaración responsable sobre el IEE si es obligatorio; referencia catastral; declaración de estar al corriente tributario; otras autorizaciones.",
        "Art. 51.1: inicio de obras en 6 meses desde la provisional; solicitud de definitiva en 36 meses desde la provisional; prórroga justificada a instancia del promotor de hasta 18 meses más, pedida antes de vencer el plazo inicial.",
        "Art. 51.2: si la definitiva no se solicita en plazo, archivo directo por Resolución del Director General.",
        "Art. 51.3: si el promotor desiste, no puede pedir nueva provisional hasta que pasen más de 12 meses desde el desistimiento.",
        "Art. 52.1: la definitiva se solicita en el plazo máximo de 1 mes desde la terminación, con licencia (si no se aportó), certificado final de obra (visado si hubo proyecto), facturas y certificado de empadronamiento expedido como máximo con 1 mes de antelación.",
        "Art. 52.2: incumplimiento de un requisito esencial durante las obras → archivo de oficio, previa audiencia, y decaimiento del derecho a la definitiva.",
        "Art. 53.1: dominio, uso o disfrute y ausencia de cargas, con nota simple de antigüedad no superior a 2 meses respecto a la solicitud de provisional; prórroga por causa justificada, pero siempre antes de la definitiva.",
        "Art. 53.2: si cambia la titularidad, el nuevo titular pide ser reconocido como promotor antes de la definitiva (cuentan sus ingresos). Fallecimiento durante la tramitación: si se pide en 2 meses, plazo de 3 a 6 meses desde la definitiva para acreditar la titularidad; tras la definitiva y antes del abono, se paga a quien acredite ser heredero en 1 año.",
        "Art. 53.4: el usufructuario puede promover con autorización del nudo propietario, y ambos pueden asociarse.",
        "DT 15.ª.2 LF 10/2010 (redacción LF 9/2025): hasta que haya regulación específica, con presupuesto protegible de 15.000 € o menos se pueden empezar las obras tras presentar la solicitud de provisional; terminarlas en 9 meses y pedir la definitiva en 12 meses, sin prórroga."
      ]
    },

    {
      h: "Áreas de Rehabilitación Preferente y PIG (arts. 54 y 56 DF)",
      nota: "Las ARP suben la subvención (45 % o 30 % según ingresos) y, dentro de ellas, los Proyectos de Intervención Global (PIG) la suben más (50 % o 40 %).",
      items: [
        "Art. 54.1: las declara el Departamento. Criterios: zonas consolidadas por la edificación hace más de 50 años con planeamiento adecuado (Plan Especial de Protección y/o Reforma Interior o, en municipios de menos de 3.000 habitantes, el Plan General pormenorizado) y ordenanza municipal específica con dotación no inferior al 1 % del módulo ponderado por habitante del área y año.",
        "Art. 54.2: también centros históricos y conjuntos con Plan Especial en vigor en los que más del 70 % de los edificios tenga más de 50 años; 90 % en conjuntos dispersos de edificaciones tradicionales rurales; informe previo de la Oficina de Rehabilitación, en su caso, y ordenanza de ayudas con la misma dotación del 1 %.",
        "Art. 56.1-2: el Departamento puede aprobar PIG dentro de las ARP; subvención máxima del 60 % del módulo ponderado por m² útil para edificios completos de viviendas promovidos por Administraciones o sociedades públicas.",
        "Art. 56.3: se cobra tras la obra; no se aplican los límites de presupuesto; 30 años con precio máximo de precio tasado y derecho de tanteo y retracto a favor de la Comunidad Foral; en alquiler, renta máxima de VPO."
      ]
    },

    {
      h: "Subvenciones forales (art. 55 DF)",
      nota: "Art. 55.1 (promotores usuarios, por ingresos ponderados en veces el IPREM, que desde el 1-1-2019 se lee SARA por la DA 19.ª de la LF 10/2010), art. 55.2 (comunidades de vecinos) y art. 55.3 (máximos en euros). El art. 55 lleva «Nota de Vigencia» en LexNavarra. Envolvente térmica: desde el 1-1-2026, DT 15.ª.6 LF 10/2010.",
      items: [
        "Art. 55.1, hasta 2,5 IPREM: 10 % (edificio de más de 25 y menos de 50 años); 20 % (50 años o más); 45 % en ARP o si el solicitante o su cónyuge tienen 65 años o más o menos de 35; 50 % en PIG de ARP o adaptación interior para discapacidad igual o superior al 40 %.",
        "Art. 55.1, entre 2,5 y 3,5 IPREM: 5 %; 10 %; 30 %; 40 % en los mismos supuestos.",
        "Art. 55.1, adicionales si es para uso propio, no acumulables entre sí: familia numerosa especial +10 %; general +5 %; víctimas del terrorismo +5 %; víctimas de violencia de género +5 %; perceptores de renta de inclusión social +5 %.",
        "Art. 55.1: la base imponible general más rentas exentas debe superar la décima parte del presupuesto protegible; se suman las actuaciones con provisional en los 5 años anteriores.",
        "Art. 55.2, comunidades: envolvente térmica (edificios sin DB-HE, hasta exigencias de obra nueva) 40 %; ascensor nuevo en edificio de más de 25 años + adaptación completa 60 %; edificio con ascensor + adaptación completa 40 %; ascensor nuevo + adaptación parcial justificada 40 %; edificio con ascensor + adaptación parcial 20 %; instalaciones térmicas centralizadas 40 %; anillado interior 20 %.",
        "Art. 55.2: solo para comunidades de vecinos, pero también para propietarios de edificios completos destinados a alquiler o a su domicilio. Adaptación completa = valores de la tabla 2 de tolerancias admisibles del DA DB-SUA/2. Cabina de menos de 70 × 90 cm o plataforma no cabinada: sin ayuda.",
        "Art. 55.2: en envolvente, certificado de eficiencia energética registrado antes (para la provisional) y después (para la definitiva); su coste puede sumarse al presupuesto.",
        "Art. 55.3: máximos: comunidades 5.000 €/vivienda (6.000 € en el caso C y 7.000 € en el caso D del cuadro); edificio sin ascensor con adaptación completa 10.000 €/vivienda (13.000 € si hay menos de 11 viviendas por núcleo de comunicación vertical); con ascensor sin adaptación completa 3.000 €; envolvente 6.000 €; personas físicas 13.000 € (26.000 € en ARP o unifamiliares); alquiler del art. 57 12.000 €; instalaciones térmicas centralizadas 6.000 €; anillado 3.000 €.",
        "Unifamiliar (art. 55.3): aisladas o adosadas horizontalmente, aunque compartan garaje o trasteros bajo rasante; no lo son las de edificios con unidades de uso superpuestas, salvo que todas pertenezcan a una sola vivienda.",
        "DT 15.ª.6 LF 10/2010 (LF 9/2025 y LF 15/2025), solicitudes desde el 1-1-2026: envolvente térmica 50 % del presupuesto subvencionable, máximo 12.500 €/vivienda (14.000 € en PIG); retirada de amianto, ayuda adicional de 1.000 €/vivienda con máximo de 18.000 € por edificio. Modificables por orden foral."
      ]
    },

    {
      h: "Alquiler, exclusión social, préstamos y tramitación (arts. 57-60 DF)",
      nota: "El alquiler tiene su propio cuadro (40/22/11 %) y un compromiso de 5 años. Las viviendas de entidades locales del art. 57.3 se rigen hoy también por la DA 28.ª de la LF 10/2010.",
      items: [
        "Art. 57.1: en ARP con edificio de más de 50 años 40 % (máx. 26 % del módulo ponderado × superficie útil, hasta 120 m²); 50 años o más 22 % (máx. 14 %); entre 25 y 50 años 11 % (máx. 7 %). En todos, renta anual no superior a la de una VPO de la misma superficie.",
        "Art. 57.2: justificar el arrendamiento antes de 1 año desde la definitiva; al menos 5 años de arrendamiento efectivo; si se desocupa en esos 5 años: alquilar de nuevo a precio VPO, devolver la subvención o inscribirla en la bolsa de alquiler. Sin ingresos por alquiler en el IRPF se presume que no hay arrendamiento.",
        "Art. 57.3: 75 % del coste, máximo 60.000 €/vivienda, para viviendas de entidades locales o cambio de uso de locales en planta baja o entreplanta; el DF dice 10 años de alquiler, pero la DA 28.ª de la LF 10/2010 (LF 20/2022) exige 15 años.",
        "Art. 57.4: promotores públicos y entidades locales: subvención igual al alquiler durante 10 años, si la renta no excede del 55 % del precio máximo y los ingresos del inquilino son inferiores a 1,4 IPREM.",
        "Art. 58: Viviendas de Integración Social: subvención de edificio de más de 50 años sea cual sea su antigüedad; adquirentes de VIS y perceptores de renta de inclusión social: 50 % del coste necesario, sin ingresos mínimos, presupuesto protegible igual o superior a 2.000 € e inferior a 12.000 €, incompatible con otras ayudas del Gobierno de Navarra para rehabilitación.",
        "Art. 59: préstamos cualificados hasta la totalidad del protegible menos la subvención; amortización máxima de 35 años; se pueden pedir si lo que financia el solicitante, descontada la subvención, excede de 9.000 € por vivienda.",
        "Art. 60.2: el abono de oficio tras la definitiva; anticipos en el art. 58 a entidades locales y entes sin ánimo de lucro del Convenio VIS, hasta 100.000 € renovables con aval (las entidades locales no lo necesitan).",
        "Art. 60.3: el plazo de resolución es el del art. 6 de la LF 10/2010 (hoy, 3 meses para las calificaciones y 6 meses para las ayudas, con silencio desestimatorio, según la LF 9/2025)."
      ]
    },

    {
      h: "Ordenanza de Pamplona: régimen general y procedimiento (arts. 1-18)",
      nota: "Ayudas de la ORV en tres ámbitos (art. 1): Casco Antiguo; Primer y Segundo Ensanche y Milagrosa (planeamiento de desarrollo); resto de la ciudad.",
      items: [
        "Art. 2.3: incompatibles con otras subvenciones del Ayuntamiento para las mismas actuaciones, salvo las de carácter social a personas físicas propietarias.",
        "Art. 3: instruye el titular de la Secretaría Técnica del Área gestora; concede la Alcaldía (sin perjuicio de delegaciones).",
        "Art. 5.j-k: licencia de obras previa o conjunta a la calificación; trabajos iniciados una vez calificado el expediente, salvo la DT 1.ª.",
        "Art. 6: destino mínimo de 5 años (ayudas complementarias o elementos privativos) y de 15 años (destino a alquiler); la enajenación o gravamen es incumplimiento y causa de reintegro.",
        "Art. 7.3: la subvención, sola o con otras, no puede superar el coste; el exceso se reintegra con interés de demora.",
        "Art. 8.2: subcontratación admitida hasta el 100 %, salvo que la convocatoria o el convenio no lo autoricen.",
        "Art. 9.4: pagos a cuenta en casos extraordinarios, con el 70 % del total ejecutado y previo informe de necesidad de la ORV; garantía obligatoria en anticipos de más de 60.000 €, salvo entidades del Sector Público.",
        "Art. 12: procedimiento ordinario de evaluación individualizada (concurrencia no competitiva, por orden de presentación completa y mientras haya crédito); concesión directa de las nominativas y, excepcionalmente, a propuesta de la ORV; los convenios son el instrumento habitual (art. 18).",
        "Art. 15.1: consulta previa obligatoria a la ORV con documento técnico (adecuación estructural, funcional, estética y urbanística; Libro del Edificio Existente o IEE; seguridad, visibilidad y accesibilidad).",
        "Art. 15.3: tres ofertas como mínimo si el gasto subvencionable supera 40.000 € en obra o 15.000 € en suministro de bienes de equipo o consultoría o asistencia técnica.",
        "Art. 16: inadmisión si no se acreditan los requisitos en 4 meses desde la notificación del informe de deficiencias; concesión y pago en 2 meses desde la notificación de la concesión; plazo máximo para resolver y notificar 6 meses, con silencio desestimatorio; agotado el gasto, prioridad en la convocatoria siguiente."
      ]
    },

    {
      h: "Ordenanza de Pamplona: obras protegibles y presupuesto (arts. 19-21)",
      nota: "El art. 19 tiene cuatro apartados: a) adecuación estructural y funcional (y estética); b) mejoras (b.1 a b.9); c) interiores de viviendas; d) calefacciones de distrito.",
      items: [
        "Art. 19.a: obras mínimas para la calificación provisional; no incluye mantenimiento y conservación. Sin otras obras, más de 7.000 € de PEM por vivienda o unidad catastral de otros usos (sin garajes ni trasteros); 4.000 € si se hacen con b.1, b.2, b.6, b.7 o b.8.",
        "Art. 19.b.1: envolvente en edificios sin DB-HE hasta exigencias de obra nueva, con certificado energético registrado antes y después.",
        "Art. 19.b.2: eficiencia de instalaciones térmicas centralizadas, renovables (DB-HE4 y HE5, con la anterior), anillado y sustitución por equipos exclusivamente renovables. No protegibles: generadores de combustible fósil salvo gas natural, descentralización, mantenimiento, obras individuales interiores y repartidores de costes.",
        "Art. 19.b.3 a b.5: adecuación urbanística (incluidas indemnizaciones); columnas de baños, cocinas, calderas y ventilación de patios (ventilación permanente de al menos 2 m²); trabajos singulares de acabados de fachadas.",
        "Art. 19.b.6 a b.9: ascensor con adaptación completa (tabla 2 del DA DB-SUA/2); ascensor sin adaptación completa (cabina de menos de 70 × 90 cm o plataforma no cabinada, sin ayuda); edificios con ascensor que logran la adaptación completa; adquisición de local para ascensor, hasta 800 €/m² construido.",
        "Art. 19.c-d: interiores de viviendas (habitabilidad, vivienda accesible CTE-SUA) incluidos en el expediente del edificio; calefacciones de distrito (central y redes).",
        "Art. 20: renovación en el Casco Antiguo, si la autoriza la normativa y mejora sustancialmente la habitabilidad y la imagen urbana.",
        "Art. 21.1: presupuesto protegible = coste real de las obras (con medios auxiliares) + honorarios técnicos hasta el 10 % del PEM + administración de fincas hasta el 2 % del PEM.",
        "Art. 21.2-3: no son gasto subvencionable los tributos locales ni el IVA deducible ni los impuestos personales sobre la renta.",
        "Art. 21.4: para a y b, máximo de 40 × módulo ponderado vigente por vivienda o unidad registral (sin garajes ni trasteros), sumando lo hecho en 10 años desde la provisional; no se aplica a b.3, b.4 y b.5.",
        "Art. 21.5: para c, 65 % del módulo ponderado por m² útil, computando como mínimo 60 m² y como máximo 90 m².",
        "Art. 21.6: para d, 8 × módulo ponderado por vivienda o local servido (sin garajes ni trasteros), sumando 10 años."
      ]
    },

    {
      h: "Ordenanza de Pamplona: Casco Antiguo y resto de la ciudad (arts. 22-30)",
      nota: "Requisitos parecidos en los dos ámbitos; cambian el cuadro de ayudas privativas, los porcentajes del ascensor sin adaptación completa (b.7) y del edificio con ascensor (b.8), el resultado exigido al IEE y los realojos (solo en el Casco).",
      items: [
        "Arts. 22 y 27: edificio de más de 50 años (más de 30 años si es adaptación para personas con movilidad reducida), con el porcentaje de vivienda que exija el DF, adaptado al planeamiento; excluidos los fuera de ordenación, los equipamientos y los cambios de uso desde residencial.",
        "Art. 22: Casco Antiguo = «Unidad Integrada VIII - Casco Viejo»; IEE o Libro del Edificio con resultado apto al acabar las obras. Art. 27: resto (I y II Ensanche sin ZO-2, PEAU Milagrosa, Z-1 y ZN-1 de Arrosadía-Lezkairu, y el resto de la ciudad); IEE apto o apto con deficiencias leves.",
        "Art. 27.6: calefacción de distrito: al menos el 75 % de las unidades servidas de vivienda y elementos de más de 20 años; beneficiarias, cooperativas y agrupaciones sin ánimo de lucro, no empresas de servicios energéticos.",
        "Arts. 24.2 y 29.2: alquiler con renta anual por m² útil no superior al 5 % del módulo ponderado, mantenida al menos 15 años.",
        "Arts. 24.3 y 29.3: ayudas por ingresos ponderados (SARA) para elementos privativos (19.c), cuadros de comunidades (19.a y b) y ayuda complementaria a personas físicas: 12 % (máx. 1.000 €) por debajo de 1 SARA y 6 % (máx. 2.000 €) entre 1 y 2 SARA; la suma por vivienda no puede superar su presupuesto protegible máximo.",
        "Art. 24.4-5: renovación 35 % del protegible; edificios de equipamiento 12 % (obras a, b.3 y b.5), con compromiso de 5 años.",
        "Art. 25: realojos temporales en viviendas municipales, por un máximo de 6 meses prorrogables hasta acabar las obras; renta en % de la renta máxima de VPO según ingresos; si no se desaloja en 15 días, se reintegra la diferencia y se pierden las subvenciones.",
        "Arts. 26 y 30: préstamos sin intereses a personas de menos de 70 años, con residencia continuada, sin otros inmuebles en 10 años e ingresos inferiores a 1 SARA: hasta el 100 % de lo que les toque pagar, con hipoteca o garantía personal, devolución en 10 años como máximo, revisión cada 3 años. Realojo vitalicio para propietarios sin recursos de 70 años o más, cediendo la vivienda al Ayuntamiento.",
        "Art. 29: calefacciones de distrito, 12 % (eficiencia) y 17 % (sustitución por renovables)."
      ]
    }
  ],

  memorizacion: {
    tablas: [
      {
        titulo: "Actuaciones protegibles y exclusiones (art. 45 DF)",
        columnas: ["Actuación", "Regla"],
        filas: [
          ["Adecuación estructural/funcional", "Edificio con al menos el 50 % de su superficie útil (sin planta baja ni bajo rasante) destinado a vivienda"],
          ["Mejora energética y adaptación normativa", "Protegible"],
          ["Habitabilidad", "Exige adecuación estructural y funcional suficiente (salvo accesibilidad por discapacidad)"],
          ["Accesibilidad universal", "Protegible"],
          ["Ampliación", "Hasta 120 m² útiles"],
          ["Unión o división de viviendas", "Sin aumentar volumen de la envolvente ni superficie construida"],
          ["Redes de calor urbanas", "Centralizadas si al menos el 50 % de la demanda es residencial"],
          ["Vaciado interior", "No protegible si se demuele, superpone o sustituye más del 60 % de los forjados"],
          ["Excepción al vaciado", "Residencial de más de 100 años, deteriorado, con fachadas, BIC, inventariado o catalogado; renovaciones PIG"],
          ["Derribo de fachadas exteriores", "No protegible, salvo si no conlleva vaciado"],
          ["Descentralización térmica, mantenimiento, repartidores", "No protegibles (sí el anillado interior)"]
        ]
      },

      {
        titulo: "Presupuestos (arts. 47-48 DF)",
        columnas: ["Concepto", "Límite / cálculo"],
        filas: [
          ["Presupuesto general", "PEM + GG + BI (GG + BI máx. 15 % del PEM); sin límites"],
          ["Honorarios de proyecto y dirección en el protegible", "Hasta un máximo del 10 %"],
          ["Honorarios del IEE", "Si la provisional se pide en 5 años desde el informe"],
          ["IVA e ICIO", "Nunca en el protegible"],
          ["Protegible mínimo", "2.000 €/vivienda"],
          ["Protegible máximo", "Precio VPO por m² útil; si más de 120 m², 120 × precio máximo VPO"],
          ["Locales en el edificio", "Máx. 40 % de la superficie computable de viviendas"],
          ["Talleres y anejos agrícolas", "Hasta 100 m²"],
          ["Subvencionable máximo", "50 % MP × m² útiles vivienda (máx. 120) + 20 % MP × m² útiles anejos"]
        ]
      },

      {
        titulo: "Plazos de la rehabilitación protegida (DF)",
        columnas: ["Trámite", "Plazo"],
        filas: [
          ["Inicio de obras", "6 meses desde la provisional (art. 51.1)"],
          ["Solicitud de la definitiva", "36 meses desde la provisional (art. 51.1)"],
          ["Prórroga", "Hasta 18 meses más, pedida antes de vencer (art. 51.1)"],
          ["Definitiva tras terminar", "1 mes (art. 52.1)"],
          ["Empadronamiento", "Expedido con 1 mes de antelación como máximo (art. 52.1)"],
          ["Nueva provisional tras desistir", "Más de 12 meses (art. 51.3)"],
          ["Nota simple", "Antigüedad no superior a 2 meses (art. 53.1)"],
          ["Herederos (fallecimiento tras la definitiva)", "1 año (art. 53.2.b)"],
          ["Justificar el alquiler", "Antes de 1 año desde la definitiva (art. 57.2)"],
          ["Obras de 15.000 € o menos (DT 15.ª.2 LF 10/2010)", "Inicio tras solicitar; terminar en 9 meses; definitiva en 12 meses"]
        ]
      },

      {
        titulo: "Subvención foral a promotores usuarios (art. 55.1 DF)",
        columnas: ["Supuesto", "Hasta 2,5 veces el IPREM (hoy SARA)", "Entre 2,5 y 3,5 veces"],
        filas: [
          ["Edificio de más de 25 y menos de 50 años", "10 %", "5 %"],
          ["Edificio de 50 años o más", "20 %", "10 %"],
          ["ARP, o solicitante o cónyuge de 65 años o más o de menos de 35", "45 %", "30 %"],
          ["PIG de ARP, o adaptación interior por discapacidad del 40 % o más", "50 %", "40 %"]
        ],
        nota: "Adicionales para uso propio, no acumulables entre sí: +10 % familia numerosa especial; +5 % familia numerosa general, víctimas del terrorismo, víctimas de violencia de género y renta de inclusión social."
      },

      {
        titulo: "Subvención foral a comunidades de vecinos (art. 55.2 DF)",
        columnas: ["Actuación (edificios de más de 25 años)", "Subvención"],
        filas: [
          ["Envolvente térmica hasta exigencias de obra nueva", "40 % (desde 1-1-2026: 50 %, DT 15.ª.6 LF 10/2010)"],
          ["Sin ascensor: ascensor + adaptación completa", "60 %"],
          ["Con ascensor: adaptación completa", "40 %"],
          ["Sin ascensor: ascensor + adaptación parcial justificada", "40 %"],
          ["Con ascensor: adaptación parcial justificada", "20 %"],
          ["Instalaciones térmicas centralizadas (CTE DB-HE-2)", "40 %"],
          ["Anillado interior", "20 %"]
        ]
      },

      {
        titulo: "Subvención foral máxima (art. 55.3 DF)",
        columnas: ["Expediente", "Máximo"],
        filas: [
          ["Comunidades (regla general)", "5.000 €/vivienda"],
          ["Comunidades, casos C) y D) del cuadro", "6.000 € (C) y 7.000 € (D) por vivienda"],
          ["Sin ascensor que alcanza la adaptación completa", "10.000 €/vivienda (13.000 € si hay menos de 11 viviendas por núcleo)"],
          ["Con ascensor sin adaptación completa", "3.000 €/vivienda"],
          ["Envolvente térmica", "6.000 €/vivienda (desde 1-1-2026: 12.500 €, 14.000 € en PIG)"],
          ["Personas físicas", "13.000 €/vivienda"],
          ["Personas físicas en ARP o unifamiliar", "26.000 €/vivienda"],
          ["Alquiler (art. 57)", "12.000 €/vivienda"],
          ["Instalaciones térmicas centralizadas", "6.000 €/vivienda"],
          ["Anillado interior", "3.000 €/vivienda"]
        ],
        nota: "El TXT no rotula las filas del cuadro del art. 55.2; contadas por orden, C) es «con ascensor + adaptación completa» y D) «sin ascensor + ascensor con adaptación parcial». Amianto (DT 15.ª.6.b LF 10/2010, redacción LF 15/2025): 1.000 €/vivienda, máximo 18.000 € por edificio."
      },

      {
        titulo: "Alquiler y exclusión social (arts. 57-58 DF)",
        columnas: ["Supuesto", "Subvención", "Tope"],
        filas: [
          ["ARP y edificio de más de 50 años", "40 %", "26 % MP × superficie útil (máx. 120 m²)"],
          ["Edificio de 50 años o más", "22 %", "14 % MP (máx. 120 m²)"],
          ["Edificio de 25 a 50 años", "11 %", "7 % MP (máx. 120 m²)"],
          ["Viviendas de entidades locales / locales a vivienda (57.3)", "75 % del coste", "60.000 €/vivienda"],
          ["Promotores públicos (57.4)", "Igual al alquiler, 10 años", "Renta ≤ 55 % del precio máximo; inquilinos < 1,4 veces el IPREM (hoy SARA)"],
          ["Riesgo de exclusión (58.2)", "50 % del coste necesario", "Protegible de 2.000 € a menos de 12.000 €"]
        ],
        nota: "Renta anual no superior a la de una VPO de igual superficie; alquiler efectivo durante al menos 5 años (art. 57.2). En el 57.3, la DA 28.ª de la LF 10/2010 exige 15 años de alquiler (el DF dice 10)."
      },

      {
        titulo: "Áreas de Rehabilitación Preferente y PIG (arts. 54 y 56 DF)",
        columnas: ["Condición", "Dato"],
        filas: [
          ["Zona consolidada", "Hace más de 50 años, con Plan Especial (o Plan General si menos de 3.000 habitantes)"],
          ["Centros históricos y conjuntos", "Más del 70 % de edificios con más de 50 años"],
          ["Conjuntos dispersos tradicionales rurales", "90 % de los edificios"],
          ["Ordenanza municipal", "Dotación no inferior al 1 % del MP por habitante del área y año"],
          ["Subvención PIG", "Hasta 60 % del MP por m² útil (edificios completos de promotores públicos)"],
          ["Limitación PIG", "30 años: precio tasado y tanteo y retracto a favor de la Comunidad Foral"]
        ]
      },

      {
        titulo: "Préstamos y anticipos (arts. 59-60 DF)",
        columnas: ["Concepto", "Dato"],
        filas: [
          ["Cuantía del préstamo", "Hasta todo el protegible, excluida la subvención"],
          ["Amortización", "Máximo 35 años"],
          ["Umbral para pedirlo", "Más de 9.000 € por vivienda a financiar"],
          ["Anticipos (art. 58, Convenio VIS)", "Hasta 100.000 € renovables con aval; entidades locales sin aval"]
        ]
      },

      {
        titulo: "Ordenanza: límites del presupuesto protegible (art. 21)",
        columnas: ["Obras", "Límite"],
        filas: [
          ["Honorarios técnicos", "Hasta el 10 % del PEM"],
          ["Administración de fincas", "Hasta el 2 % del PEM"],
          ["Apartados a y b (salvo b.3, b.4, b.5)", "40 × MP por vivienda o unidad registral; suma de 10 años"],
          ["Apartado c (interiores)", "65 % del MP por m² útil; computa entre 60 y 90 m²"],
          ["Apartado d (calefacción de distrito)", "8 × MP por vivienda o local servido; suma de 10 años"],
          ["Local para ascensor (b.9)", "800 €/m² construido"],
          ["Mínimo de 19.a sin otras obras", "Más de 7.000 € de PEM por vivienda (4.000 € con b.1, b.2, b.6, b.7 o b.8)"]
        ]
      },

      {
        titulo: "Ordenanza: subvención a comunidades (arts. 24.3.2 y 29.3)",
        columnas: ["Actuación (art. 19)", "Casco Antiguo", "Resto de la ciudad"],
        filas: [
          ["a. Adecuación estructural, funcional, instalaciones, estética", "24 % (30 % en PIG)", "24 % (30 % en PIG)"],
          ["b.1. Envolvente térmica", "24 % (30 % en PIG)", "24 % (30 % en PIG)"],
          ["b.2. Instalaciones térmicas centralizadas, renovables, anillado", "24 %", "24 %"],
          ["b.2´. Sustitución por equipos exclusivamente renovables", "29 %", "29 %"],
          ["b.3, b.4, b.5. Adecuación urbanística, columnas, fachadas singulares", "Hasta el 100 %", "Hasta el 100 %"],
          ["b.6. Ascensor nuevo con adaptación completa", "36 %", "36 %"],
          ["b.7. Ascensor nuevo sin adaptación completa", "36 %", "24 %"],
          ["b.8. Edificio con ascensor que logra la adaptación completa", "36 %", "30 %"],
          ["b.9. Adquisición de local para ascensor", "36 %", "36 %"]
        ],
        nota: "Solo en el Casco Antiguo: renovación 35 % y edificios de equipamiento 12 %. Solo en el resto: calefacciones de distrito 12 % (eficiencia) y 17 % (renovables)."
      },

      {
        titulo: "Ordenanza: obras en elementos privativos (19.c) por ingresos",
        columnas: ["Ingresos ponderados", "Casco Antiguo (art. 24.3.1)", "Resto (art. 29.3)"],
        filas: [
          ["Menos de 1 SARA", "36 %", "36 %"],
          ["Menos de 1,5 SARA", "—", "30 %"],
          ["Menos de 2 SARA", "30 %", "24 %"],
          ["Menos de 2,5 SARA", "24 %", "—"],
          ["Menos de 3,5 SARA", "18 %", "18 %"],
          ["Más de 3,5 SARA o persona jurídica", "10 %", "10 %"]
        ],
        nota: "Ayuda complementaria a personas físicas por obras a, b.1 y b.2 (los dos ámbitos): 12 % con máximo de 1.000 € (menos de 1 SARA) y 6 % con máximo de 2.000 € (entre 1 y 2 SARA)."
      },

      {
        titulo: "Ordenanza: requisitos, plazos y cifras",
        columnas: ["Concepto", "Dato"],
        filas: [
          ["Antigüedad del edificio", "Más de 50 años (más de 30 para adaptación a movilidad reducida)"],
          ["IEE al acabar las obras", "Casco: apto; resto: apto o apto con deficiencias leves"],
          ["Calefacción de distrito", "Al menos 75 % de unidades de vivienda; instalación de más de 20 años"],
          ["Alquiler beneficiario", "Renta anual por m² ≤ 5 % del MP durante 15 años"],
          ["Consulta previa a la ORV", "Obligatoria, con documento técnico"],
          ["Tres ofertas", "Más de 40.000 € en obra; más de 15.000 € en suministro o consultoría"],
          ["Inadmisión", "4 meses desde el informe de deficiencias"],
          ["Concesión y pago", "2 meses desde la notificación de la concesión"],
          ["Resolver y notificar", "6 meses; silencio desestimatorio"],
          ["Pago a cuenta", "70 % ejecutado + informe de necesidad de la ORV"],
          ["Garantía de anticipos", "Más de 60.000 €, salvo Sector Público"],
          ["Destino", "5 años (complementarias, privativos, equipamientos); 15 años (alquiler)"],
          ["Realojo temporal", "Máx. 6 meses, prorrogable; desalojo en 15 días"],
          ["Préstamo sin intereses", "Menos de 70 años, menos de 1 SARA; devolución en 10 años, revisión cada 3"],
          ["Realojo vitalicio", "70 años o más, cediendo la vivienda"]
        ]
      },

      {
        titulo: "Ordenanza: renta de los realojos (art. 25.4), % de la renta máxima de VPO",
        columnas: ["Tipo de realojo", "< 1 SARA", "< 1,5 SARA", "< 2 SARA", "< 2,5 SARA"],
        filas: [
          ["Actuaciones públicas o convenios", "10 %", "20 %", "30 %", "40 %"],
          ["Resto de realojos", "—", "20 %", "—", "60 %"]
        ]
      }
    ],

    datos: [
      "Antigüedad foral: más de 25 años desde el fin de la construcción (art. 46.1); municipal: más de 50 años (30 para movilidad reducida).",
      "Vivienda: al menos el 50 % de la superficie útil total, deducidas planta baja y bajo rasante (art. 45.1.a).",
      "Vaciado: más del 60 % de los forjados horizontales, sin contar la cubierta (art. 45.3.a); excepción en edificios de más de 100 años.",
      "Ampliación o nuevas viviendas por unión: máximo 120 m² útiles (art. 45.1.e-f).",
      "Redes de calor: al menos el 50 % de la demanda, residencial (art. 45.1.h).",
      "GG + BI: máximo 15 % del PEM; honorarios: hasta un máximo del 10 %; IEE: si la provisional se pide en 5 años (art. 47).",
      "Protegible mínimo: 2.000 €/vivienda; locales: máximo 40 % de la superficie de viviendas; anejos: 100 m² (art. 48).",
      "Subvencionable: 50 % MP × m² vivienda (máx. 120) + 20 % MP × m² anejos (art. 48.3).",
      "Plazos: 6 meses para iniciar, 36 para pedir la definitiva, prórroga de hasta 18, 1 mes tras terminar, 12 meses tras desistir (arts. 51-52).",
      "Nota simple: no más de 2 meses; herederos: 2 meses para pedir y de 3 a 6 meses para acreditar; 1 año tras la definitiva (art. 53).",
      "ARP: zona de más de 50 años; más del 70 % de edificios de más de 50 años (90 % rural disperso); ordenanza con 1 % del MP por habitante y año (art. 54).",
      "PIG: hasta 60 % del MP por m² útil; 30 años de precio tasado y tanteo y retracto (art. 56).",
      "Promotor usuario: 10/20/45/50 % (hasta 2,5 veces el IPREM) y 5/10/30/40 % (de 2,5 a 3,5 veces); adicionales +10 % o +5 %, no acumulables (art. 55.1). Desde el 1-1-2019 el IPREM se lee SARA (DA 19.ª LF 10/2010).",
      "Base imponible: más de la décima parte del protegible; acumulación de 5 años (art. 55.1).",
      "Comunidades: ascensor + adaptación completa 60 %; resto de supuestos 40 % o 20 % (art. 55.2).",
      "Máximos: 5.000 / 6.000 / 7.000 / 10.000 / 13.000 / 3.000 €; personas físicas 13.000 € (26.000 € en ARP o unifamiliar) (art. 55.3).",
      "Envolvente desde el 1-1-2026 (DT 15.ª LF 10/2010): 50 %, 12.500 €/vivienda (14.000 € PIG); amianto 1.000 €/vivienda, máx. 18.000 €/edificio.",
      "Alquiler: 40/22/11 %, topes 26/14/7 % del MP; 5 años de alquiler efectivo (art. 57).",
      "Entidades locales: 75 %, máx. 60.000 €/vivienda (art. 57.3; 15 años de alquiler según la DA 28.ª LF 10/2010).",
      "Exclusión social: 50 %, protegible de 2.000 € a menos de 12.000 €, sin ingresos mínimos (art. 58).",
      "Préstamos: hasta 35 años; si lo financiado supera 9.000 €/vivienda (art. 59); anticipos de hasta 100.000 € (art. 60).",
      "Ordenanza, presupuesto: honorarios 10 % del PEM; administración de fincas 2 %; 40 × MP (a y b); 65 % MP, 60-90 m² (c); 8 × MP (d); 10 años de acumulación.",
      "Ordenanza, comunidades: 24 % (30 % PIG) en a y b.1; 29 % renovables; hasta 100 % en b.3-b.5; ascensor con adaptación completa 36 %.",
      "Ordenanza, diferencias: b.7 36 % Casco / 24 % resto; b.8 36 % Casco / 30 % resto.",
      "Ordenanza, privativos: 36/30/24/18/10 % por tramos de SARA; complementaria 12 % (máx. 1.000 €) y 6 % (máx. 2.000 €).",
      "Ordenanza, otras: renovación 35 %; equipamientos 12 %; calefacción de distrito 12 % y 17 %; local para ascensor 800 €/m².",
      "Ordenanza, procedimiento: 40.000 € / 15.000 € para tres ofertas; 4 meses inadmisión; 2 meses pago; 6 meses para resolver; pago a cuenta con el 70 %; garantía en anticipos de más de 60.000 €.",
      "Ordenanza, destino: 5 años (privativos) y 15 años (alquiler)."
    ],

    excepciones: [
      "Obras iniciadas antes de la calificación provisional: la actuación en su conjunto no es protegible (art. 49.2). Excepción legal: con presupuesto protegible de 15.000 € o menos pueden empezar tras presentar la solicitud (DT 15.ª.2 LF 10/2010, redacción LF 9/2025).",
      "Antigüedad de más de 25 años: no se exige en adaptaciones sobrevenidas por discapacidad ni en adaptación de instalaciones a normativa técnica obligatoria (art. 46.1).",
      "Vaciado de más del 60 %: se permite en edificios residenciales de más de 100 años deteriorados, con fachadas, que sean BIC, inventariados o catalogados, y en las renovaciones de PIG.",
      "Derribo de fachadas exteriores: no protegible, salvo que no conlleve vaciado interior.",
      "Instalaciones térmicas: no se protegen descentralización, mantenimiento ni obras en el interior de las viviendas, salvo el anillado; tampoco los repartidores de costes.",
      "Habitabilidad: exige adecuación estructural y funcional suficiente, salvo en las condiciones de accesibilidad por discapacidad.",
      "Residencia habitual del solicitante: no se exige a promotores en alquiler ni a comunidades (art. 49.5).",
      "IRPF en la solicitud provisional: no lo presentan las comunidades ni los arrendadores (art. 50.5).",
      "Complementos del art. 55.1: solo para uso propio y no acumulables entre sí.",
      "Ayudas del art. 55.2: solo para comunidades, salvo propietarios de edificios completos destinados a alquiler o a su domicilio.",
      "Cabinas de menos de 70 × 90 cm y plataformas no cabinadas: no mejoran la accesibilidad y no tienen ayuda (DF y Ordenanza).",
      "Envolvente térmica: desde el 1-1-2026 rige el 50 % y 12.500 €/vivienda de la DT 15.ª LF 10/2010, no el 40 % y los 6.000 € del art. 55.",
      "IPREM: las referencias del DF (tramos del art. 55.1, 1,4 veces del art. 57.4) se entienden hechas al SARA desde el 1-1-2019 (DA 19.ª LF 10/2010); los multiplicadores no cambian.",
      "PIG: no se aplican los límites de presupuesto del DF, pero hay 30 años de precio tasado y tanteo y retracto.",
      "Exclusión social: sin ingresos mínimos e incompatible con otras ayudas forales de rehabilitación.",
      "Ordenanza: incompatible con otras subvenciones municipales para lo mismo, salvo las sociales a personas físicas propietarias.",
      "Ordenanza: el límite de 40 × MP no se aplica a b.3, b.4 y b.5.",
      "Ordenanza: generadores de combustible fósil no protegibles, salvo gas natural.",
      "Ordenanza: las calefacciones de distrito no tienen que alcanzar la adecuación completa del edificio; no pueden ser beneficiarias las empresas de servicios energéticos.",
      "Ordenanza: garantía obligatoria en anticipos de más de 60.000 €, salvo entidades del Sector Público.",
      "Ordenanza: la enajenación o el gravamen incumplen siempre la obligación de destino y obligan a reintegrar."
    ]
  },

  claves: [
    "Rehabilitación foral: edificio de más de 25 años, salvo discapacidad o normativa técnica obligatoria.",
    "Vivienda: al menos el 50 % de la superficie útil (sin planta baja ni bajo rasante).",
    "Vaciado no protegible: más del 60 % de forjados (excepción: más de 100 años con protección).",
    "Ampliación protegible: hasta 120 m² útiles.",
    "Protegible mínimo: 2.000 €/vivienda; GG + BI máx. 15 %; honorarios hasta 10 %; sin IVA ni ICIO.",
    "Subvencionable: 50 % MP vivienda (máx. 120 m²) + 20 % MP anejos.",
    "Plazos: 6 meses inicio; 36 meses definitiva; prórroga 18; 1 mes tras terminar; 12 meses tras desistir.",
    "Nota simple de menos de 2 meses.",
    "ARP: más del 70 % de edificios de más de 50 años (90 % rural disperso); ordenanza con 1 % del MP.",
    "Promotor usuario: 10/20/45/50 % y 5/10/30/40 %; adicionales no acumulables.",
    "Comunidades: ascensor + adaptación completa 60 %; máximos 5.000 a 13.000 €/vivienda.",
    "Personas físicas: 13.000 €; ARP o unifamiliar: 26.000 €.",
    "Envolvente desde 1-1-2026: 50 % y 12.500 €/vivienda (DT 15.ª LF 10/2010).",
    "Alquiler foral: 40/22/11 %; 5 años de alquiler efectivo.",
    "Exclusión social: 50 %, de 2.000 a menos de 12.000 €.",
    "Préstamos: 35 años; más de 9.000 €/vivienda.",
    "Pamplona: más de 50 años; consulta previa a la ORV obligatoria.",
    "Pamplona comunidades: 24 % (30 % PIG); renovables 29 %; ascensor con adaptación completa 36 %; b.3-b.5 hasta 100 %.",
    "Pamplona, ascensor sin adaptación completa: 36 % Casco / 24 % resto.",
    "Pamplona privativos: 36/30/24/18/10 %; complementaria 12 % (1.000 €) y 6 % (2.000 €).",
    "Pamplona: 40 × MP; 65 % MP (60-90 m²); 8 × MP; 10 años.",
    "Pamplona: tres ofertas por encima de 40.000 € (obra) o 15.000 € (suministro o consultoría).",
    "Pamplona: pago a cuenta con el 70 %; garantía en anticipos de más de 60.000 €.",
    "Pamplona: destino 5 años (privativos) y 15 años (alquiler).",
    "Pamplona: resolver en 6 meses; silencio desestimatorio."
  ]
};
