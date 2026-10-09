// Resumen del tema E14. Formato: cabecera de src/data/resumenes.js.
export default {
  intro:
    "La Ley Foral 10/2010, de 10 de mayo, del derecho a la vivienda en Navarra, regula en su Título V bis los instrumentos administrativos para evitar la existencia de viviendas deshabitadas y en su Título VII el Registro General de Viviendas de Navarra, configurando un sistema de detección, declaración, inscripción y seguimiento de la deshabitación con efectos sancionadores, expropiatorios y estadísticos.",
  bloques: [
    {
      h: "Definición de vivienda deshabitada y excepciones (art. 42 bis)",
      nota:
        "El concepto de vivienda es amplio e incluye proindiviso y edificaciones en trámite de autorización. La trampa del examen suele estar en la presunción de deshabitación (6 meses consecutivos) y en las excepciones, especialmente la segunda residencia (1 por persona o unidad familiar) y la vivienda habitual (IRPF o empadronamiento). Otra trampa clave: solo las personas jurídicas son sancionables; las físicas quedan fuera de la potestad sancionadora. Para contar el total de viviendas del titular se consideran todas las del Estado español, aunque solo las de Navarra pueden declararse deshabitadas.",
      items: [
        "Art. 42 bis.1: vivienda = edificación con autorizaciones para ocupación o en trámite, con uso residencial en suelo urbano o urbanizable, independientemente del porcentaje de titularidad o del régimen de plena propiedad o proindiviso",
        "Presunción de deshabitación: no destino efectivo al uso residencial durante más de 6 meses consecutivos en un año desde el último día de efectiva habitación (que ponga fin a al menos 6 meses consecutivos de uso habitacional)",
        "Viviendas nunca habitadas: plazo desde que el estado de ejecución permita solicitar autorizaciones o desde la notificación de su otorgamiento; si solicitadas pero no concedidas, se descuenta el plazo de otorgamiento",
        "Excepciones que NO son deshabitadas: vivienda habitual (IRPF o empadronamiento o mayor consumo); segunda residencia (1 por persona/unidad familiar, la de mayor valor catastral si 3+ y no habitual); uso turístico con licencias; arrendamiento por temporadas o actividades con ocupación ≥ 30 días/año; fuera de Navarra; fuera de ordenación sin cédula de habitabilidad",
        "Art. 42 bis.3.g: para determinar el número total de viviendas del titular se consideran TODAS las del territorio español, aunque solo las de Navarra pueden declararse deshabitadas",
        "Art. 42 bis.4: viviendas deshabitadas de titularidad de personas físicas NO son objeto de potestad sancionadora",
        "Art. 42 bis.5: solo persona jurídica (constituida regular o irregularmente) o participación mayoritaria en condominio; titularidad = pleno dominio o participación mayoritaria",
        "Art. 42 bis.6: resolución declarativa mediante procedimiento contradictorio y normativa básica de procedimiento administrativo",
      ],
    },
    {
      h: "Indicios de no habitación y umbrales de consumo (art. 42 ter)",
      nota:
        "Los indicios son pruebas circunstanciales que deben valorarse en conjunto; ninguno por sí solo es concluyente. Los valores de consumo son datos numéricos clave y preguntables: se toman de las empresas suministradoras de la localidad, pero en defecto de datos específicos aplican los umbrales fijos del artículo. La pregunta clásica consiste en confundir los valores mensuales con los anuales.",
      items: [
        "Indicios: datos de padrón y registros públicos; carencia o consumos anormalmente bajos de suministros; recepción de correo en otros lugares; comunicaciones telefónicas e informáticas en otros lugares; declaraciones o actos del titular; declaraciones de vecinos; negativa injustificada a facilitar comprobaciones + otros indicios de falta de ocupación",
        "Consumo de suministros: media habitual por vivienda y año de las empresas suministradoras de la localidad de referencia; en defecto, valores fijos del artículo",
        "Agua (valores por defecto): inferior a 0,21 m³ por vivienda y mes, o inferior a 2,47 m³ por vivienda y año",
        "Electricidad (valores por defecto): inferior a 24 kWh por vivienda y mes, o inferior a 291 kWh por vivienda y año",
      ],
    },
    {
      h: "Obligaciones de información y colaboración (art. 42 quáter)",
      nota:
        "Este artículo configura un deber generalizado de colaboración que abarca a personas físicas, jurídicas, públicas y privadas. La trampa está en que no se requiere consentimiento de los afectados para la cesión de datos entre administraciones, ayuntamientos, empresas suministradoras y entidades financieras. El plazo de respuesta es de 30 días. Las empresas suministradoras deben remitir listados de viviendas por debajo de los umbrales con datos del titular del contrato.",
      items: [
        "Art. 42 quáter.1: personas físicas o jurídicas, públicas o privadas, obligadas a proporcionar datos a la Administración Foral y a entidades locales con delegación",
        "Requerimiento: adecuado, pertinente y no excesivo; especifica necesidad y disposiciones legales aplicables",
        "Objeto del requerimiento: investigación individualizada de viviendas concretas o indagación de circunstancias para el Plan bienal de inspección",
        "Soporte informático: si la información se conserva en dicho soporte, debe suministrarse así si se requiere",
        "Compañías suministradoras (agua, electricidad, gas): remiten consumos medios y listados de viviendas por debajo de umbrales, con dirección, titular del contrato, NIF/CIF y domicilio, sin consentimiento de afectados",
        "Ayuntamientos: remiten padrón de viviendas sin personas inscritas, con ubicación, referencia catastral, titular, NIF/CIF y domicilio, sin consentimiento",
        "Entidades financieras, gestoras de activos e inmobiliarias: anualmente (datos a 31 de diciembre) y a solicitud, remiten viviendas deshabitadas de su titularidad con ubicación, catastro, finca registral, titular, NIF/CIF; si es VPP, número de expediente de calificación",
        "Plazo de remisión: 30 días desde recepción de la petición o desde la fecha de referencia para las comunicaciones anuales",
      ],
    },
    {
      h: "Procedimiento de declaración de vivienda deshabitada (art. 42 quinquies)",
      nota:
        "Procedimiento contradictorio con plazo máximo de resolución de 1 año. La trampa está en las medidas de fomento: aceptarlas suspende el procedimiento por 3 meses, pero si no se cumple el compromiso (habitación > 6 meses, solicitud de rehabilitación protegida o cesión a Bolsa de Alquiler en 6 meses), se reanuda y se declara deshabitada. El titular registral o catastral es el interesado principal; en proindiviso, todos los cotitulares son representantes por solidaridad.",
      items: [
        "Competencia: departamento competente en vivienda; delegable en entidades locales con recursos. Procedimiento sancionador: siempre del departamento competente",
        "Interesados: titular registral o, en su defecto, titular catastral; también titulares de derechos reales inscritos en el Registro de la Propiedad",
        "Pro indiviso o comunidad sin personalidad jurídica: cada cotitular tiene consideración de representante por responsabilidad solidaria, sin perjuicio de comunicación a los demás",
        "Inicio: acuerdo del órgano correspondiente del departamento competente o entidad local",
        "Acuerdo de inicio: especifica indicios de no habitación y medidas de fomento (arrendamiento o rehabilitación protegida); abre trámite de audiencia de 10 días",
        "Si se acredita inexistencia de indicios: resolución de terminación estimando alegaciones y archivo del procedimiento",
        "Sin alegaciones o no desvirtúan indicios y no se aceptan medidas: resolución declarando deshabitada; traslado al Registro de Viviendas Deshabitadas",
        "Aceptación de medidas de arrendamiento + compromiso de habitación en 3 meses: suspensión del procedimiento a efectos del cómputo del plazo máximo",
        "Aceptación de medidas de rehabilitación + compromiso de solicitud de calificación provisional en 3 meses: suspensión del procedimiento a efectos del cómputo del plazo máximo",
        "Acreditada habitación > 6 meses o presentada solicitud de rehabilitación: archivo. Si no, reanudación y declaración deshabitada. Para rehabilitación: necesaria acreditación de ejecución de obras y habitación > 6 meses; plazo de obras = licencia o normativa urbanística",
        "Cesión a Bolsa de Alquiler: acreditar formalización en 6 meses mediante contrato; incumplimiento = reanudación y declaración deshabitada",
        "Plazo máximo de resolución: 1 año desde incoación; transcurrido, caducidad",
      ],
    },
    {
      h: "Registro de Viviendas Deshabitadas (art. 42 sexies)",
      nota:
        "El Registro de Viviendas Deshabitadas es un instrumento de control y seguimiento integrado en el Registro General de Viviendas. Se configura como fichero de titularidad pública. Sus efectos son triples: censo municipal, base para sanción o expropiación, y fuente estadística. La cancelación exige acreditar 6 meses de habitación ininterrumpida; si no se acredita, se abre audiencia de 10 días hábiles.",
      items: [
        "Creación: instrumento para control y seguimiento de viviendas declaradas deshabitadas; acceso a resoluciones declarativas y otras con incidencia en la no habitación",
        "Fichero de titularidad pública conforme a normativa de protección de datos",
        "Integración en el Registro General de Viviendas de Navarra; organización y funcionamiento por Título VII, sin perjuicio de especialidades del Título V bis",
        "Efectos de la inscripción: a) inclusión en censo de deshabitadas del Ayuntamiento (Ley Foral Haciendas Locales); b) base para expediente sancionador o expropiatorio; c) información estadística para políticas públicas",
        "Cancelación: acreditación previa de habitación efectiva durante 6 meses ininterrumpidos. Si no acreditada: plazo de audiencia de 10 días hábiles y resolución manteniendo o cancelando",
        "Responsabilidad de titulares registrales o catastrales: comunicar alteraciones de datos o inscripción, con documentos probatorios",
        "Comprobaciones y control: conforme al Plan bienal de control e inspección; delegable en entidades locales",
      ],
    },
    {
      h: "Registro General de Viviendas de Navarra: naturaleza, objetivos y contenido (arts. 75-78)",
      nota:
        "El Registro General es de titularidad pública, administrativo y adscrito al departamento competente en vivienda. Su objetivo es centralizar toda la información sobre viviendas en Navarra y coordinarse con el Registro de la Riqueza Territorial y el sistema informativo de la Ley 8/2013. El contenido mínimo es extenso y preguntable por enumeración: desde datos catastrales hasta contratos de arrendamiento, pasando por el certificado de eficiencia energética y las ayudas públicas.",
      items: [
        "Art. 75: creación como registro de titularidad pública, de naturaleza administrativa, adscrito al departamento competente en materia de vivienda",
        "Art. 76: objetivos — centralizar datos, seguimiento de la situación, acceso a otras administraciones, políticas públicas, estudios y proyectos, diseño de política de vivienda, coordinación con Registro de la Riqueza Territorial, Catastros y sistema informativo de la Ley 8/2013",
        "Art. 77: actuaciones — disponer información permanente, integrada y actualizada; incorporar datos de otras administraciones; incorporar al Registro de la Riqueza Territorial y sistema informativo de la Ley 8/2013; garantizar acceso público",
        "Art. 78.1: ámbito = viviendas en Navarra; vivienda según legislación aplicable en materia de vivienda",
        "Art. 78.2: contenido mínimo — dirección postal/catastral, superficie, antigüedad, georreferenciación; titular en Registro Riqueza Territorial; cédula de habitabilidad; tipo de protección y régimen de uso/acceso; informe de evaluación de edificios; certificado de eficiencia energética; ayudas públicas; datos de arrendamiento (promotor, arrendatario, ayudas); indicios de desocupación; contratos de arrendamiento (Título IX); otros datos de interés",
        "Art. 78.3: creación y mantenimiento con datos de la Administración Foral y otras administraciones públicas",
      ],
    },
    {
      h: "Información pública, protección de datos y conservación (arts. 79-83)",
      nota:
        "La información de acceso público es limitada y específica: no todo el registro es público. La protección de datos se rige por la LOPD 15/1999, el RD 1720/2007 y el Decreto Foral 143/1994. La conservación exige mantenimiento y actualización permanentes, con suministro recíproco entre administraciones sin consentimiento de los afectados. El deber de colaboración general está condicionado a que los datos no consten en archivos de la Administración.",
      items: [
        "Art. 79.2: información pública — dirección postal/catastral, superficie, antigüedad, georreferenciación; existencia de cédula de habitabilidad en vigor (copia sin acreditar propiedad); tipo de protección y régimen de uso; Libro del Edificio Existente e Informe de Evaluación de Edificios; certificado de eficiencia energética; ayudas públicas; origen por desahucio de entidad bancaria; lo que determine el departamento competente conforme a protección de datos",
        "Art. 80.1: protección de datos — LOPD 15/1999, RD 1720/2007, Decreto Foral 143/1994",
        "Art. 80.2: responsable del fichero debe adoptar medidas técnicas, de gestión y organizativas para confidencialidad, seguridad, integridad y derechos de los afectados",
        "Art. 81: creación con información actual de la Administración; identificación de inmuebles mediante datos propios y Registro de la Riqueza Territorial",
        "Art. 82.1-2: conservación = mantenimiento y actualización permanente; responsable = Administración Foral; integración de bases de datos y archivos relevantes",
        "Art. 82.3: suministro recíproco entre administraciones mediante medios electrónicos, informáticos y telemáticos; sin consentimiento de afectados para datos personales",
        "Art. 82.4: actuaciones de conservación — gestionar/actualizar datos; recibir/supervisar propuestas de modificación; coordinar con otros órganos; instar colaboración; colaborar con órganos interesados",
        "Art. 82.5: departamento competente establece medidas organizativas y técnicas para autenticidad, confidencialidad, integridad, disponibilidad y conservación",
        "Art. 83.1: deber de colaboración general de personas naturales/jurídicas, públicas/privadas; limitado a cuando sea estrictamente necesario por no constar en archivos de la Administración",
        "Art. 83.2: administraciones y entidades públicas obligadas a suministrar datos relevantes, por disposición general o requerimiento concreto",
        "Art. 83.3: cesión de datos personales no precisa consentimiento de los afectados",
      ],
    },
  ],
  claves: [
    "Ley Foral 10/2010, de 10 de mayo — derecho a la vivienda en Navarra",
    "Presunción de deshabitación: > 6 meses consecutivos sin uso residencial en un año",
    "Solo personas jurídicas (o participación mayoritaria en condominio) son objeto de sanción; personas físicas no",
    "Umbrales de consumo: agua < 0,21 m³/mes o < 2,47 m³/año; electricidad < 24 kWh/mes o < 291 kWh/año",
    "Plazo máximo de resolución del procedimiento: 1 año desde incoación; caducidad transcurrido",
    "Trámite de audiencia: 10 días en el procedimiento de declaración; 10 días hábiles para cancelación de inscripción",
    "Cancelación en Registro de Viviendas Deshabitadas: requiere habitación efectiva de 6 meses ininterrumpidos",
    "Segunda residencia: máximo 1 por persona/unidad familiar; si 3+ viviendas, la de mayor valor catastral entre las no habituales",
    "El Registro de Viviendas Deshabitadas se integra en el Registro General de Viviendas de Navarra",
    "Registro General: de titularidad pública, administrativo, adscrito al departamento competente en vivienda",
    "Cesión de datos entre administraciones y a empresas suministradoras: sin consentimiento de los afectados",
    "Para contar viviendas totales del titular: se consideran todas las del territorio español",
  ],
};
