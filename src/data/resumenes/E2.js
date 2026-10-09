// Resumen del tema E2. Formato: cabecera de src/data/resumenes.js.
export default {
    intro:
      "El Real Decreto 314/2006, de 17 de marzo, aprueba el Código Técnico de la Edificación (CTE): el marco que desarrolla la LOE y traduce sus requisitos básicos en exigencias comprobables durante el proyecto, la obra y la vida del edificio. Este tema no consiste solo en memorizar DB: ordena qué es obligatorio, cómo se acredita, quién controla y qué documentación deja cada fase.",
    bloques: [
      {
        h: "Qué es el CTE, dónde se aplica y cómo se estructura (arts. 1-3)",
        nota:
          "El CTE es el desarrollo reglamentario de la LOE para los requisitos de seguridad y habitabilidad; no es un catálogo voluntario de buenas prácticas. La trampa habitual está en la excepción de las obras nuevas: sus cinco condiciones son ACUMULATIVAS. En edificios existentes la regla tampoco es “todo o nada”: se exige la mayor adecuación efectiva posible cuando el cumplimiento íntegro no sea viable, pero esa excepción debe justificarse y quedar documentada.",
        items: [
          "Art. 1: marco normativo de exigencias básicas de calidad para edificios E INSTALACIONES; desarrolla la LOE y cubre proyecto, construcción, mantenimiento, conservación, uso e intervenciones en existentes",
          "Requisitos desarrollados: SE · SI · SUA · HS · HR · HE. La funcionalidad se rige por normativa específica, SALVO la accesibilidad de personas con movilidad o comunicación reducida, que sí desarrolla el CTE",
          "Art. 2.1: se aplica a edificaciones públicas y privadas cuyos proyectos requieren licencia o autorización legalmente exigible",
          "Excepción a obra nueva: construcción de sencillez técnica Y escasa entidad constructiva Y sin uso residencial o público, ni eventual ni permanente, Y de una sola planta Y que no afecte a la seguridad de las personas",
          "Edificios existentes: cumplimiento justificado en proyecto o memoria técnica; con declaración responsable/comunicación previa debe manifestarse que se posee ese proyecto o memoria",
          "Si el cumplimiento no es urbanística, técnica o económicamente viable, o es incompatible con intervención/protección: mayor grado posible de adecuación efectiva, siempre justificado; documentación final = prestación alcanzada + condicionantes de uso/mantenimiento",
          "Intervenciones: no pueden rebajar condiciones preexistentes inferiores al DB; las superiores solo pueden reducirse hasta el mínimo del DB. Todo cambio de uso característico debe cumplir el CTE",
          "Dos partes: Parte I = disposiciones/condiciones generales + exigencias básicas; Parte II = DB, reglamentarios, actualizables y con caracterización/cuantificación + procedimientos de verificación",
        ],
      },
      {
        h: "DB, Documentos Reconocidos y Registro General (arts. 3-4)",
        nota:
          "La distinción que conviene fijar es tajante: los DB son parte reglamentaria del CTE; los Documentos Reconocidos son apoyo técnico sin carácter reglamentario. Un Documento Reconocido puede facilitar la aplicación, pero no sustituye por sí mismo la exigencia del DB. El Registro General es público e informativo y recoge más cosas que esos documentos.",
        items: [
          "DB: caracterizan y cuantifican exigencias mediante niveles o valores límite y ofrecen métodos de verificación o soluciones sancionadas por la práctica; pueden remitirse a instrucciones, reglamentos y normas técnicas",
          "Documentos Reconocidos: técnicos, SIN carácter reglamentario y reconocidos por el Ministerio competente; pueden ser guías/códigos de buena práctica, métodos de evaluación, soluciones, programas, bases de datos o comentarios",
          "No pueden referirse a la utilización de un producto o sistema constructivo particular o bajo patente",
          "Registro General del CTE: en el Ministerio de Vivienda, adscrito a la Dirección General de Arquitectura y Política de Vivienda; carácter PÚBLICO e INFORMATIVO",
          "Además de los Documentos Reconocidos, puede inscribir distintivos voluntarios de calidad, certificaciones de prestaciones finales/gestión/ciclo de vida, organismos de evaluación de innovaciones, entidades de control y laboratorios",
        ],
      },
      {
        h: "Cómo se cumple el CTE: soluciones, productos y responsables (art. 5)",
        nota:
          "Hay dos caminos para acreditar la exigencia: aplicar el DB o apartarse de él mediante una solución alternativa. El segundo no es una licencia para proyectar libremente: exige responsabilidad del proyectista o director de obra, conformidad previa del promotor y prueba documental de una prestación al menos equivalente. Es una oposición clásica entre “cumplir el método” y “demostrar el resultado”.",
        items: [
          "Responsables: los agentes de la edificación conforme al capítulo III LOE, cada uno dentro de su intervención",
          "Vía ordinaria: aplicar las soluciones técnicas de los DB basta para acreditar el cumplimiento de las exigencias que les corresponden",
          "Vía alternativa: el proyectista o director de obra, bajo su responsabilidad y con conformidad previa del promotor, debe justificar documentalmente prestaciones AL MENOS EQUIVALENTES a las obtenibles con el DB",
          "Productos incorporados permanentemente: marcado CE cuando proceda según su uso previsto; los DB pueden exigir además características técnicas determinadas",
          "Productos, equipos y sistemas innovadores: conformes si acreditan las exigencias mediante evaluación técnica FAVORABLE de idoneidad para el uso previsto, otorgada por entidad autorizada",
        ],
      },
      {
        h: "Proyecto básico, ejecución y contenido documental (art. 6 y Anejo I)",
        nota:
          "El proyecto debe permitir valorar e interpretar inequívocamente la obra y justificar el CTE, no limitarse a describirla. La pareja que más cae es BÁSICO / EJECUCIÓN: el básico sirve para obtener licencia, pero nunca para empezar a construir; el de ejecución desarrolla aquel sin bajar prestaciones ni cambiar las condiciones autorizadas, salvo lo legalizable.",
        items: [
          "El proyecto concreta: requisitos de productos/equipos/sistemas y su recepción; características y controles de cada unidad; compatibilidad entre sistemas; pruebas de servicio; e instrucciones de uso y mantenimiento",
          "Proyecto básico: características generales y prestaciones mediante soluciones justificadas; suficiente para licencia/concesiones/autorizaciones, INSUFICIENTE para iniciar construcción",
          "Proyecto de ejecución: desarrolla el básico y define toda la obra; no puede rebajar prestaciones del básico ni alterar usos/condiciones de licencia, salvo aspectos legalizables",
          "Proyectos parciales u otros documentos se integran como documentos diferenciados bajo coordinación del proyectista",
          "Anejo I: los elementos con asterisco (*) son el contenido mínimo del proyecto básico; el proyecto completo se ordena en Memoria, Planos, Pliego de condiciones, Mediciones y Presupuesto",
          "Memoria: descriptiva, constructiva y justificación del CTE; Planos: los necesarios para definir en detalle; Pliego: prescripciones de productos, ejecución y pruebas; Presupuesto aproximado* en el básico",
        ],
      },
      {
        h: "Ejecución, controles, Libro del Edificio y seguimiento (arts. 7-8 y Anejo II)",
        nota:
          "El control de calidad se ordena cronológicamente: primero se recibe el producto, después se controla cómo se ejecuta y finalmente se prueba el edificio terminado. No confundir quién aporta y quién recopila la documentación: el suministrador la entrega al constructor; el constructor la facilita al director de ejecución; este recopila el control. Al acabar, la documentación sigue viva dentro del Libro del Edificio y del plan de mantenimiento.",
        items: [
          "Obra: se ejecuta conforme al proyecto y modificaciones autorizadas por el director de obra, legislación, buena práctica e instrucciones de DO y DEO",
          "Tres controles durante construcción: recepción de productos/equipos/sistemas; ejecución; y obra terminada",
          "Recepción (art. 7.2): documentación de suministro + distintivos de calidad/evaluaciones de idoneidad + ensayos. El suministrador entrega documentos al constructor y este los facilita al DEO",
          "Ejecución (art. 7.3): el DEO verifica replanteo, materiales, correcta ejecución/disposición de elementos e instalaciones, compatibilidad entre sistemas y controles previstos",
          "Obra terminada (art. 7.4): comprobaciones y pruebas de servicio previstas en proyecto, ordenadas por la dirección facultativa o exigidas legalmente",
          "Libro del Edificio: documentación de productos, instrucciones de uso y mantenimiento y plan de mantenimiento. Propietarios y usuarios han de usar adecuadamente, comunicar anomalías y documentar reparaciones, reformas o rehabilitaciones",
          "Anejo II — seguimiento obligatorio: Libro de Órdenes y Asistencias; Libro de Incidencias; proyecto/anexos/modificaciones autorizadas; licencia y autorizaciones; certificado final de obra",
          "Certificado final: DEO certifica dirección de ejecución material y control cuantitativo/cualitativo; DO certifica conformidad con proyecto objeto de licencia y aptitud para uso. Se anejan modificaciones y controles/resultados",
        ],
      },
      {
        h: "Mapa de exigencias básicas: SE, SI y SUA (arts. 9-12)",
        nota:
          "El art. 9 da la regla de lectura: los artículos formulan prestaciones cualitativas; los DB fijan, cuando corresponda, parámetros, niveles o valores límite. Aprende los acrónimos como una secuencia funcional, no como letras sueltas. Importante actualización: ya no es DB-SU, sino DB-SUA, y suma la accesibilidad como SUA 9.",
        items: [
          "Art. 9: los niveles/valores límite de un DB son obligatorios CUANDO EL PROPIO DB lo establece expresamente; sus procedimientos no excluyentes acreditan cumplimiento según el estado actual de conocimientos",
          "SE: SE1 resistencia y estabilidad; SE2 aptitud al servicio (sin deformaciones, comportamiento dinámico, degradaciones o anomalías inadmisibles)",
          "SI: SI1 propagación interior · SI2 propagación exterior · SI3 evacuación · SI4 instalaciones de protección · SI5 intervención de bomberos · SI6 resistencia estructural al incendio",
          "SUA: SUA1 caídas · SUA2 impacto/atrapamiento · SUA3 aprisionamiento · SUA4 iluminación inadecuada · SUA5 alta ocupación · SUA6 ahogamiento · SUA7 vehículos en movimiento · SUA8 rayo · SUA9 accesibilidad",
        ],
      },
      {
        h: "Mapa de exigencias básicas: HS, HR y HE (arts. 13-15)",
        nota:
          "Este bloque es muy preguntable por enumeración y por la asociación del número con su objeto. Dos actualizaciones especialmente fáciles de fallar: HS incorpora HS6 frente al radón, y HE empieza por HE0 —limitación del consumo— y termina en HE6 —recarga de vehículos eléctricos—. HE2 se desarrolla a través del RITE.",
        items: [
          "HS: HS1 humedad · HS2 recogida y evacuación de residuos · HS3 calidad del aire interior · HS4 suministro de agua · HS5 evacuación de aguas · HS6 protección frente a exposición al radón",
          "HR: limita el riesgo de molestias o enfermedades por ruido aéreo, impactos, vibraciones de instalaciones y ruido reverberante",
          "HE: HE0 limitación del consumo energético · HE1 control de la demanda mediante envolvente térmica · HE2 instalaciones térmicas (RITE) · HE3 iluminación · HE4 contribución renovable para ACS y climatización de piscinas cubiertas · HE5 generación eléctrica renovable · HE6 infraestructura de recarga de vehículos eléctricos",
          "En HE0 importan zona climática, uso y —en existentes— alcance de la intervención; el consumo debe satisfacerse en gran medida con energía renovable",
        ],
      },
      {
        h: "Régimen transitorio original del RD 314/2006",
        nota:
          "Los plazos transitorios aparecen en el texto fuente del RD de aprobación y son material histórico: sirven para identificar qué régimen se aplicaba a expedientes en el arranque del CTE, no para proyectar hoy con las versiones ya actualizadas. Precisamente por eso conviene separar estas reglas de las exigencias vigentes del bloque anterior.",
        items: [
          "Disposición transitoria primera: el CTE no se aplicaba a obras de nueva construcción o intervenciones con licencia solicitada a la entrada en vigor del RD 314/2006",
          "Régimen de aplicación voluntaria inicial: 6 meses para NBE-CT-79 y CPI-96; 12 meses para NBE-AE-88, NBE-FL-90, NBE-EA-95 y normas sobre instalaciones de agua",
          "Las disposiciones transitorias específicas de los DB fijaron plazos de adaptación; no deben confundirse con el contenido actual de cada DB",
        ],
      },
    ],
    claves: [
      "RD 314/2006 de 17 de marzo — CTE aprobado",
      "CTE: exige calidad en proyecto, construcción, mantenimiento, conservación, uso e intervención en existentes; funcionalidad solo entra por accesibilidad",
      "Excepción obra nueva: sencillez + escasa entidad + sin residencial/público + una planta + sin riesgo personas (TODAS)",
      "Existentes: mayor adecuación efectiva posible si cumplimiento íntegro inviable/incompatible, con justificación y constancia final de prestaciones y condicionantes",
      "Parte I: condiciones generales y exigencias; Parte II: DB reglamentarios. Documentos Reconocidos: técnicos, pero NO reglamentarios",
      "Dos vías: DB = acreditación suficiente; alternativa = responsabilidad proyectista/DO + conformidad promotor + prestación al menos equivalente justificada",
      "Básico: licencia sí, construcción no. Ejecución: desarrolla sin rebajar prestaciones ni alterar condiciones autorizadas, salvo legalizable",
      "Tres controles de obra: recepción = documentación + distintivos/evaluación + ensayos; ejecución; obra terminada",
      "Anejo II: Órdenes y Asistencias + Incidencias + proyecto/modificaciones + licencia/autorizaciones + certificado final",
      "SUA tiene 9 exigencias (incluida accesibilidad); HS llega a HS6 (radón); HE va de HE0 a HE6 (recarga VE)",
      "Transitoria 1ª original: CTE no se aplicaba a obras con licencia ya solicitada a su entrada en vigor; es régimen histórico",
    ],
  };
