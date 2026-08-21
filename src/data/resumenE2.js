// Tema E2 — CTE: RD 314/2006 y Parte I.
// Fuente principal: BOE-A-2006-5515, texto consolidado vigente.
import { RESUMENES } from "./resumenes.js";

export const RESUMEN_E2 = {
  intro: "El CTE es el marco normativo que concreta las exigencias básicas de calidad de los edificios para satisfacer los requisitos de seguridad y habitabilidad previstos por la LOE. La Parte I es el mapa del sistema: define cuándo se aplica, cómo se acredita el cumplimiento, qué debe contener el proyecto y qué controles existen durante proyecto, obra y vida útil. La trampa central es distinguir EXIGENCIA BÁSICA, DOCUMENTO BÁSICO y SOLUCIÓN ADOPTADA: la exigencia es obligatoria; el DB ofrece parámetros, límites y procedimientos de verificación; y el proyectista puede adoptar soluciones alternativas si justifica documentalmente que alcanzan prestaciones equivalentes.",
  bloques: [
    {
      h: "Objeto, ámbito y estructura (arts. 1-4)",
      nota: "Empieza por la cadena LOE → requisitos básicos → CTE → exigencias básicas → DB. El CTE no sustituye toda la normativa de edificación: desarrolla los requisitos de seguridad y habitabilidad de la LOE, mientras que los requisitos de funcionalidad se rigen por su normativa específica, salvo la accesibilidad de personas con movilidad o comunicación reducidas.",
      items: [
        "Art. 1.1: CTE = marco normativo de las exigencias básicas de calidad que deben cumplir los edificios, incluidas sus instalaciones, para satisfacer los requisitos básicos de SEGURIDAD y HABITABILIDAD de la LOE.",
        "Art. 1.2: seis requisitos: seguridad estructural · seguridad en caso de incendio · seguridad de utilización y accesibilidad · higiene, salud y protección del medio ambiente · protección frente al ruido · ahorro de energía y aislamiento térmico.",
        "Art. 1.3: la FUNCIONALIDAD y los aspectos funcionales de los elementos constructivos se rigen por normativa específica, salvo los vinculados a la accesibilidad de personas con movilidad o comunicación reducidas.",
        "Art. 1.4: las exigencias básicas deben cumplirse en PROYECTO, CONSTRUCCIÓN, MANTENIMIENTO, CONSERVACIÓN y USO, y también en las intervenciones en edificios existentes.",
        "Art. 2.1: se aplica, en los términos de la LOE y con sus limitaciones, a edificaciones públicas y privadas cuyos proyectos precisen licencia o autorización legalmente exigible.",
        "Art. 2.2: nueva construcción, salvo construcciones de sencillez técnica y escasa entidad constructiva que CUMPLAN A LA VEZ: no residencial ni pública, una sola planta y sin afectar a la seguridad de las personas.",
        "Art. 2.3: también se aplica a intervenciones en edificios existentes; el cumplimiento se justifica en proyecto o memoria suscrita por técnico competente junto a la solicitud de licencia o autorización.",
        "Art. 2.6: todo CAMBIO DE USO CARACTERÍSTICO de edificio existente debe cumplir las exigencias básicas del CTE; si afecta solo a parte del edificio o establecimiento, se aplica en los términos de los DB.",
        "Art. 3.1: dos partes: PARTE I = disposiciones y condiciones generales + exigencias básicas; PARTE II = DOCUMENTOS BÁSICOS.",
        "Art. 4: los DOCUMENTOS RECONOCIDOS son documentos técnicos externos e independientes del CTE que facilitan el cumplimiento de determinadas exigencias y contribuyen al fomento de la calidad; se inscriben en el Registro General del CTE.",
      ],
    },
    {
      h: "Cómo se cumple el CTE: prestaciones, soluciones y alternativas (art. 5)",
      nota: "Este artículo es de los más rentables. El CTE NO obliga siempre a copiar literalmente una solución del DB. Lo obligatorio es satisfacer las exigencias básicas. Hay dos vías: adoptar las soluciones basadas en los procedimientos de los DB o justificar documentalmente soluciones alternativas con prestaciones equivalentes. En test suelen intercambiar 'solución alternativa' por 'solución no justificada' o hacer creer que el DB es el único camino posible.",
      items: [
        "Art. 5.1.1: los edificios deben proyectarse, construirse, mantenerse y conservarse de forma que satisfagan las exigencias básicas del CTE.",
        "Art. 5.1.2: pueden adoptarse soluciones técnicas diferentes a las contenidas en los DB si se JUSTIFICA DOCUMENTALMENTE que cumplen las exigencias básicas con prestaciones al menos equivalentes.",
        "Art. 5.2: productos, equipos y materiales deben cumplir las especificaciones del proyecto, satisfacer las exigencias reglamentarias aplicables y disponer, cuando proceda, de las características exigibles para su correcta instalación, uso y mantenimiento.",
        "Los niveles o valores límite fijados expresamente por los DB son de obligado cumplimiento; los procedimientos incluidos en los DB son NO EXCLUYENTES.",
      ],
    },
    {
      h: "Proyecto y control del proyecto (art. 6)",
      nota: "La Parte I no diseña el edificio: fija la cadena documental. El proyecto debe describir el edificio y definir las obras con detalle suficiente para que puedan valorarse e interpretarse inequívocamente. La trampa es confundir el contenido mínimo del proyecto con el Anejo I: el artículo 6 remite expresamente al Anejo I.",
      items: [
        "Art. 6.1.1: el proyecto describirá el edificio y definirá las obras de ejecución con el detalle suficiente para que puedan valorarse e interpretarse inequívocamente durante su ejecución.",
        "Art. 6.1.2: debe contener la información necesaria para acreditar el cumplimiento del CTE y de las demás disposiciones aplicables; su contenido mínimo se recoge en el ANEJO I.",
        "Art. 6.1.3: el proyecto puede desarrollarse o completarse mediante proyectos parciales u otros documentos técnicos, sin duplicar documentación ni reducir el nivel de prestaciones del proyecto.",
        "Art. 6.2: el control del proyecto tiene por objeto verificar el cumplimiento del CTE y demás normativa aplicable. Los agentes responsables responden conforme a sus obligaciones y responsabilidades establecidas en la LOE.",
      ],
    },
    {
      h: "Ejecución y controles en obra (art. 7)",
      nota: "Tres controles que debes separar: recepción de productos, control de ejecución y control de la obra terminada. El primero verifica qué entra en obra; el segundo, cómo se ejecuta; el tercero, el resultado construido.",
      items: [
        "Art. 7.1: durante la construcción se controlará la ejecución para verificar que se realiza conforme al proyecto, sus modificaciones autorizadas, la legislación aplicable, las normas de buena práctica constructiva y las instrucciones de la dirección facultativa.",
        "Art. 7.2: CONTROL DE RECEPCIÓN EN OBRA de productos, equipos y sistemas: se comprueba documentación, distintivos o evaluaciones de idoneidad cuando procedan y, cuando sea necesario, ensayos.",
        "Art. 7.3: CONTROL DE EJECUCIÓN: se comprueba que la ejecución se ajusta al proyecto, modificaciones, legislación y buena práctica.",
        "Art. 7.4: CONTROL DE LA OBRA TERMINADA: se comprueba que el edificio satisface las prestaciones previstas; incluye pruebas de servicio cuando proceda.",
      ],
    },
    {
      h: "El edificio terminado: uso, conservación y Libro del Edificio (art. 8)",
      nota: "El CTE no termina con el certificado final de obra. La Parte I extiende el cumplimiento al uso, mantenimiento y conservación. La documentación final debe recoger las modificaciones introducidas durante la obra y entregarse al usuario conforme al Libro del Edificio.",
      items: [
        "Art. 8.1: el edificio debe utilizarse y mantenerse conforme a las instrucciones de uso y mantenimiento contenidas en el Libro del Edificio.",
        "Art. 8.2: las obras de mantenimiento y conservación deben realizarse conforme a las instrucciones de uso y mantenimiento y a la normativa aplicable.",
        "Art. 8.3: el edificio y sus instalaciones deben conservarse para mantener las condiciones de seguridad, habitabilidad y funcionalidad previstas en proyecto.",
      ],
    },
    {
      h: "Exigencias básicas: el mapa que debes recitar (arts. 9-15)",
      nota: "Aquí conviene memorizar la correspondencia requisito → exigencias básicas. La Parte I es especialmente propensa a preguntas de nomenclatura: qué exige SE, qué pertenece a SI, qué está dentro de SUA, o qué número corresponde a cada exigencia. No confundas el requisito con el DB: el requisito es el objetivo legal; el DB es el instrumento técnico de verificación.",
      items: [
        "Art. 9: las exigencias básicas se desarrollan para satisfacer los requisitos básicos de la LOE y se concretan en prestaciones o características de los edificios.",
        "Art. 10 — SE: resistencia y estabilidad, aptitud al servicio y, en la formulación vigente, capacidad portante y comportamiento adecuado frente a acciones e influencias previsibles durante construcción y uso previsto.",
        "Art. 11 — SI: propagación interior · propagación exterior · evacuación de ocupantes · instalaciones de protección contra incendios · intervención de bomberos · resistencia estructural al incendio.",
        "Art. 12 — SUA: seguridad frente al riesgo de caídas · impacto o atrapamiento · aprisionamiento en recintos · iluminación inadecuada · alta ocupación · ahogamiento · vehículos en movimiento · acción del rayo · accesibilidad.",
        "Art. 13 — HS: protección frente a la humedad · recogida y evacuación de residuos · calidad del aire interior · suministro de agua · evacuación de aguas · protección frente a la exposición al radón.",
        "Art. 14 — HR: limita, dentro de los edificios y en condiciones normales de utilización, el riesgo de molestias o enfermedades derivadas del ruido; abarca ruido aéreo, impactos, instalaciones y reverberación.",
        "Art. 15 — HE: limitación del consumo energético · condiciones de las instalaciones térmicas · condiciones de las instalaciones de iluminación · contribución mínima de energía renovable para cubrir la demanda de ACS · generación mínima de energía eléctrica procedente de fuentes renovables · dotaciones mínimas para infraestructura de recarga de vehículos eléctricos.",
      ],
    },
    {
      h: "Anejo I — Contenido del proyecto",
      nota: "El Anejo I organiza la documentación del proyecto. La secuencia útil es: memoria → planos → pliego → mediciones → presupuesto. La memoria se divide en descriptiva y constructiva; dentro de la constructiva aparece la justificación del CTE. Es una pregunta clásica cambiar el orden o atribuir las verificaciones a los planos.",
      items: [
        "Cinco grandes documentos: MEMORIA · PLANOS · PLIEGO DE CONDICIONES · MEDICIONES · PRESUPUESTO.",
        "Memoria: memoria descriptiva + memoria constructiva, incluyendo la justificación de las prestaciones y del cumplimiento del CTE y demás normativa aplicable.",
        "Planos: información gráfica necesaria para definir y ejecutar las obras y para acreditar las características del edificio.",
        "Pliego de condiciones: condiciones técnicas particulares de los materiales, productos, sistemas y ejecución, además de prescripciones sobre verificaciones y controles.",
        "Mediciones: desarrollo por partidas de las unidades de obra, con medición aproximada o exacta según el grado de definición del proyecto.",
        "Presupuesto: presupuesto aproximado en fase de proyecto básico y presupuesto detallado por partidas en proyecto de ejecución.",
      ],
    },
    {
      h: "Anejo II — Seguimiento de la obra",
      nota: "No confundas los tres documentos: Libro de Órdenes y Asistencias recoge las instrucciones de la dirección facultativa; Libro de Incidencias se vincula a seguridad y salud; y el proyecto, sus modificaciones y la documentación final se incorporan a la documentación de seguimiento y al Libro del Edificio.",
      items: [
        "La documentación del seguimiento de la obra incluye el Libro de Órdenes y Asistencias, el Libro de Incidencias en materia de seguridad y salud cuando proceda, y la documentación de los controles realizados durante la obra.",
        "Al finalizar, se incorpora la documentación final de la obra con las modificaciones introducidas durante su ejecución.",
        "La documentación se entrega al promotor para su incorporación al Libro del Edificio y para su transmisión a los usuarios conforme al régimen aplicable.",
      ],
    },
  ],
  claves: [
    "CTE = desarrollo reglamentario de los requisitos de SEGURIDAD y HABITABILIDAD de la LOE",
    "PARTE I = reglas generales + exigencias básicas; PARTE II = DOCUMENTOS BÁSICOS",
    "El CTE se aplica también a INTERVENCIONES EN EDIFICIOS EXISTENTES",
    "CAMBIO DE USO CARACTERÍSTICO = cumplimiento de las exigencias básicas del CTE",
    "Solución alternativa: válida si se JUSTIFICA DOCUMENTALMENTE una prestación al menos equivalente",
    "DB: procedimientos NO EXCLUYENTES; valores límite expresamente establecidos = OBLIGATORIOS",
    "Tres controles: RECEPCIÓN DE PRODUCTOS · EJECUCIÓN · OBRA TERMINADA",
    "SE: comportamiento estructural · SI: 6 exigencias · SUA: 9 exigencias · HS: 6 exigencias · HR: ruido · HE: 6 exigencias",
    "HS 6 = protección frente al RADÓN",
    "HE 6 = infraestructura mínima para RECARGA DE VEHÍCULOS ELÉCTRICOS",
    "Proyecto: MEMORIA · PLANOS · PLIEGO · MEDICIONES · PRESUPUESTO",
    "Libro de Órdenes ≠ Libro de Incidencias: dirección facultativa vs seguridad y salud",
  ],
};

// Integración con el registro principal. temas.js importa este módulo antes de
// que App consuma RESUMENES, por lo que E2 queda disponible sin duplicar el
// gran fichero de resúmenes existente.
RESUMENES.E2 = RESUMEN_E2;
