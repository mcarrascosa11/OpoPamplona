// Resumen del tema G10. Formato: cabecera de src/data/resumenes.js.
// 01-11-2026, chequeo del tema: datos contrastados con el RGPD consolidado de EUR-Lex (con las correcciones
// de errores de 2018 y 2021) y con la LO 3/2018 consolidada del BOE. Alcance: RGPD capítulos I a III
// (arts. 1-23) y LO 3/2018 títulos I a III (arts. 1-18). Se añade el bloque de memorización.
export default {
    intro:
      "El RGPD (Reglamento UE 2016/679) es la norma marco de protección de datos personales en la UE, de aplicación directa desde mayo 2018. La LO 3/2018 (LOPDGDD) lo adapta al ordenamiento español. Juntos regulan principios del tratamiento, bases de licitud, derechos de los interesados y condiciones especiales para categorías sensibles. El alcance de la convocatoria es el RGPD, capítulos I a III (arts. 1-23), y la LO 3/2018, títulos I a III (arts. 1-18).",
    bloques: [
      {
        h: "Ámbito y definiciones (arts. 1-4 RGPD; arts. 1-3 LOPDGDD)",
        nota:
          "El RGPD se aplica al tratamiento total o parcialmente automatizado y al no automatizado de datos contenidos o destinados a un fichero. Quedan fuera cuatro supuestos tasados (art. 2.2), entre ellos las actividades exclusivamente personales o domésticas y los fines penales de las autoridades competentes. La LOPDGDD añade dos exclusiones propias: los datos de personas fallecidas (con el régimen especial del art. 3) y las materias clasificadas.",
        items: [
          "Art. 2.2 RGPD, no se aplica: a) actividad fuera del Derecho de la Unión; b) Estados miembros en el capítulo 2 del título V del TUE; c) persona física en actividades exclusivamente personales o domésticas; d) autoridades competentes con fines penales",
          "Art. 3 RGPD: se aplica a establecimientos del responsable o encargado en la Unión (trate donde trate) y a responsables o encargados no establecidos cuando traten datos de interesados que se encuentren en la Unión por ofertarles bienes o servicios o controlar su comportamiento",
          "Art. 4 RGPD: 26 definiciones; dato personal = persona física identificada o identificable (directa o indirectamente)",
          "Art. 2.2 LOPDGDD, no se aplica: tratamientos excluidos por el art. 2.2 RGPD, datos de personas fallecidas (salvo art. 3) y materias clasificadas",
          "Art. 2.3 LOPDGDD: régimen electoral, instituciones penitenciarias, Registro Civil, Registros de la Propiedad y Mercantiles → su legislación específica y, supletoriamente, RGPD y LOPDGDD",
          "Art. 3 LOPDGDD: familiares, personas vinculadas de hecho y herederos pueden pedir acceso, rectificación o supresión, salvo prohibición expresa del fallecido o de una ley (que no afecta a los datos patrimoniales de los herederos)",
        ],
      },
      {
        h: "Principios del tratamiento (art. 5 RGPD)",
        nota:
          "Los seis principios del art. 5.1 se preguntan pidiendo el que falta o cambiando un adjetivo, así que conviene recitarlos con su denominación completa: licitud, lealtad y transparencia · limitación de la FINALIDAD · MINIMIZACIÓN de datos · EXACTITUD · limitación del PLAZO DE CONSERVACIÓN · integridad y confidencialidad. Y por encima de ellos, el apartado 2 añade el que lo cambia todo: la RESPONSABILIDAD PROACTIVA, que invierte la carga —el responsable no solo debe cumplir, sino ser capaz de DEMOSTRAR que cumple—.",
        items: [
          "a) Licitud, lealtad y transparencia",
          "b) Limitación de la finalidad: solo para los fines recogidos",
          "c) Minimización de datos: adecuados, pertinentes y limitados a lo necesario",
          "d) Exactitud: datos exactos y actualizados",
          "e) Limitación del plazo de conservación: no más de lo necesario para los fines",
          "f) Integridad y confidencialidad: seguridad adecuada",
          "Art. 5.2: Responsabilidad proactiva (accountability) del responsable del tratamiento",
        ],
      },
      {
        h: "Bases de licitud (art. 6 RGPD) y categorías especiales (art. 9)",
        nota:
          "Seis bases de licitud, y para una Administración la relevante casi nunca es el consentimiento sino el CUMPLIMIENTO DE UNA OBLIGACIÓN LEGAL o el ejercicio de PODERES PÚBLICOS. De hecho el interés legítimo, base habitual en el sector privado, NO es aplicable al tratamiento realizado por autoridades públicas en el ejercicio de sus funciones — matiz del art. 6.1 in fine que se pregunta. Las categorías especiales del art. 9 parten de una PROHIBICIÓN general de tratamiento que solo cede por las excepciones tasadas del apartado 2.",
        items: [
          "6 bases de licitud (art. 6.1.a-f): consentimiento / contrato o medidas precontractuales / obligación legal / intereses vitales / interés público o poderes públicos / intereses legítimos (este último NO aplica a autoridades públicas en ejercicio de funciones)",
          "Consentimiento (art. 7): libre, específico, informado, inequívoco; retirable en cualquier momento; retirada no afecta licitud previa; tan fácil retirar como dar",
          "Menores: RGPD art. 8 → 16 años para servicios sociedad de la información; LOPDGDD art. 7 → España fija 14 años",
          "Categorías especiales (art. 9 RGPD): prohibición de tratar datos de origen étnico/racial, opiniones políticas, convicciones religiosas/filosóficas, afiliación sindical, datos genéticos, biométricos identificativos, de salud, vida/orientación sexual + 10 excepciones (a-j)",
          "LOPDGDD art. 9.1: para ideología, afiliación sindical, religión, orientación sexual, creencias, origen racial → el solo consentimiento NO basta para levantar la prohibición",
          "LOPDGDD art. 8: obligación legal → norma de Derecho de la Unión o con rango de ley; interés público o poderes públicos → competencia atribuida por norma con rango de ley",
        ],
      },
      {
        h: "Derechos de los interesados (arts. 12-22 RGPD)",
        nota:
          "Los derechos se agrupan bien en dos bloques: los de INFORMACIÓN Y CONTROL —acceso, rectificación, supresión— y los de OPOSICIÓN Y LIMITACIÓN, más el de portabilidad. El responsable responde SIN DILACIÓN INDEBIDA y, en cualquier caso, en UN MES desde la recepción, prorrogable en DOS MESES MÁS cuando sea necesario por la complejidad o el número de solicitudes, informando al interesado dentro del primer mes. Ojo a dos delimitaciones: el derecho de SUPRESIÓN —el «derecho al olvido»— no opera cuando el tratamiento es necesario para cumplir una obligación legal o para el ejercicio de poderes públicos; y la PORTABILIDAD solo cabe cuando el tratamiento se basa en consentimiento o contrato y se efectúa por medios automatizados, de modo que no alcanza a los tratamientos administrativos ordinarios.",
        items: [
          "Plazo de respuesta (art. 12.3): sin dilación indebida y, en todo caso, 1 mes; prórroga de 2 meses adicionales si es necesario por complejidad y número de solicitudes (informar dentro del 1.er mes, con los motivos)",
          "Solicitudes manifiestamente infundadas o excesivas, en especial por repetitivas (art. 12.5): el responsable puede cobrar canon razonable o negarse a actuar; la carga de demostrar el carácter manifiestamente infundado o excesivo recae en el responsable",
          "Derecho de acceso (art. 15): confirmación + información sobre finalidades, categorías, destinatarios, plazo conservación, derechos...",
          "Rectificación (art. 16): sin dilación indebida",
          "Supresión/Derecho al olvido (art. 17): 6 causas (a-f); excepciones art. 17.3: libertad de expresión, obligación legal, interés público en salud, archivo/investigación, reclamaciones",
          "Limitación (art. 18): 4 supuestos: impugnación exactitud / tratamiento ilícito / fines de reclamación / oposición pendiente de verificación",
          "Portabilidad (art. 20): solo si basado en CONSENTIMIENTO o CONTRATO Y tratamiento AUTOMATIZADO; no aplica a interés público/poderes públicos",
          "Oposición (art. 21): para mercadotecnia directa = cese OBLIGATORIO e INCONDICIONAL; para arts. 6.1.e/f = el responsable puede invocar motivos legítimos imperiosos",
          "Decisiones automatizadas (art. 22): derecho a no ser objeto de ellas; 3 excepciones: contrato, autorización legal, consentimiento explícito; si excepción: derecho a intervención humana, expresar punto de vista, impugnar",
          "LOPDGDD art. 13.3: ejercicio del derecho de acceso más de 1 vez en 6 meses = puede considerarse repetitivo",
        ],
      },
      {
        h: "Otras disposiciones LOPDGDD (títulos II y III)",
        nota:
          "La LO 3/2018 no sustituye al Reglamento europeo: lo desarrolla en lo que éste dejó a los Estados. En los títulos II y III que entran en la convocatoria precisa la exactitud, la confidencialidad, el consentimiento (también el de los menores), las categorías especiales y los datos penales, y regula la información «por capas» y el ejercicio de los derechos. El delegado de protección de datos y los derechos digitales (como la desconexión digital) están en otros títulos de la ley, fuera del alcance de este tema.",
        items: [
          "Art. 3: datos de personas fallecidas → familiares y herederos pueden solicitar acceso/rectificación/supresión, salvo prohibición del fallecido (que no afecta a datos patrimoniales)",
          "Art. 4.2: la inexactitud no es imputable al responsable que adoptó medidas razonables si los datos se obtuvieron del afectado, de un mediador o intermediario, de otro responsable por portabilidad o de un registro público",
          "Art. 5.3: deber de confidencialidad se mantiene AUN DESPUÉS de finalizar la relación con el responsable/encargado",
          "Art. 6: consentimiento para varias finalidades → que conste de forma específica e inequívoca para todas; no se puede supeditar el contrato a consentir finalidades ajenas a la relación contractual",
          "Art. 11: información básica (identidad del responsable, finalidad, posibilidad de ejercer los derechos de los arts. 15 a 22 RGPD) + dirección electrónica u otro medio para el resto",
          "Art. 12: derechos ejercitables directamente o por representante legal o voluntario; la prueba de haber respondido recae en el responsable; actuaciones gratuitas",
        ],
      },
    ],
    claves: [
      "6 principios art. 5 RGPD: licitud-lealtad-transparencia / limitación finalidad / minimización / exactitud / limitación conservación / integridad-confidencialidad + accountability",
      "6 bases de licitud art. 6 RGPD (a-f); intereses legítimos NO aplica a autoridades públicas en ejercicio de funciones",
      "Consentimiento: retirable en cualquier momento; tan fácil retirar como dar; retirada no afecta licitud previa",
      "Menores: 16 años (RGPD) pero 14 años en España (LOPDGDD art. 7)",
      "Categorías especiales art. 9 RGPD: prohibición + 10 excepciones; LOPDGDD: para ideología/sindical/religión/orientación sexual → solo consentimiento NO basta",
      "Plazo respuesta derechos: sin dilación indebida y, en todo caso, 1 mes + prórroga 2 meses (informar dentro del 1.er mes)",
      "Supresión art. 17: 6 causas tasadas; excepciones: libertad expresión, obligación legal, interés público, archivo/investigación, reclamaciones",
      "Portabilidad: solo si basado en consentimiento o contrato + tratamiento automatizado",
      "Oposición a mercadotecnia directa: cese INCONDICIONAL (≠ oposición general que admite motivos legítimos imperiosos)",
      "Decisiones automatizadas: 3 excepciones (contrato / autorización legal / consentimiento explícito) + garantías mínimas",
      "Acceso repetitivo LOPDGDD: más de 1 vez en 6 meses sin causa legítima → puede considerarse repetitivo",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Edades del consentimiento",
          columnas: ["Norma", "Regla", "Por debajo de esa edad"],
          filas: [
            ["RGPD, art. 8.1 (oferta directa a niños de servicios de la sociedad de la información)", "Lícito si el niño tiene como mínimo 16 años; los Estados pueden fijar por ley una edad inferior, nunca menor de 13", "Solo lícito si el consentimiento lo dio o autorizó el titular de la patria potestad o tutela, y en esa medida"],
            ["LOPDGDD, art. 7.1", "Consentimiento del menor válido si es mayor de 14 años", "Menor de 14: solo lícito si consta el del titular de la patria potestad o tutela (art. 7.2)"],
            ["LOPDGDD, art. 7.1, párrafo 2", "Excepción: cuando la ley exija la asistencia de los titulares de la patria potestad o tutela para el acto o negocio jurídico", "—"],
            ["LOPDGDD, art. 12.6", "Los titulares de la patria potestad pueden ejercer en nombre de los menores de 14 años los derechos de acceso, rectificación, cancelación, oposición u otros", "—"]
          ],
          nota: "Trampa clásica: 16 y 13 son del RGPD; 14 es la edad que fijó España dentro de ese margen."
        },
        {
          titulo: "Plazos del tema",
          columnas: ["Supuesto", "Plazo", "Artículo"],
          filas: [
            ["Respuesta a una solicitud de los arts. 15 a 22", "Sin dilación indebida y, en todo caso, 1 mes desde la recepción", "12.3 RGPD"],
            ["Prórroga por complejidad y número de solicitudes", "Otros 2 meses; se comunica dentro del primer mes, con los motivos", "12.3 RGPD"],
            ["No dar curso a la solicitud", "Informar sin dilación y a más tardar en 1 mes (razones, reclamación y acciones judiciales)", "12.4 RGPD"],
            ["Información si los datos no se obtienen del interesado", "Plazo razonable y como máximo 1 mes; o en la primera comunicación con el interesado; o cuando se comuniquen por primera vez a otro destinatario", "14.3 RGPD"],
            ["Rectificación y supresión", "Sin dilación indebida", "16 y 17.1 RGPD"],
            ["Mención del derecho de oposición", "A más tardar en la primera comunicación con el interesado, claramente y al margen de otra información", "21.4 RGPD"],
            ["Levantamiento de la limitación", "Se informa al interesado antes de levantarla", "18.3 RGPD"],
            ["Acceso repetitivo", "Más de una ocasión en 6 meses, salvo causa legítima", "13.3 LOPDGDD"]
          ]
        },
        {
          titulo: "Bases de licitud (art. 6.1 RGPD) y su desarrollo en la LOPDGDD",
          columnas: ["Letra", "Base", "Precisión"],
          filas: [
            ["a)", "Consentimiento para uno o varios fines específicos", "Varias finalidades: que conste de forma específica e inequívoca para todas (art. 6.2 LOPDGDD)"],
            ["b)", "Ejecución de un contrato o medidas precontractuales a petición del interesado", "No se puede supeditar el contrato a consentir finalidades ajenas a la relación (art. 6.3 LOPDGDD)"],
            ["c)", "Cumplimiento de una obligación legal del responsable", "Solo si lo prevé una norma de Derecho de la UE o con rango de ley (art. 8.1 LOPDGDD)"],
            ["d)", "Proteger intereses vitales del interesado o de otra persona física", "—"],
            ["e)", "Misión en interés público o ejercicio de poderes públicos", "Solo si deriva de una competencia atribuida por norma con rango de ley (art. 8.2 LOPDGDD)"],
            ["f)", "Intereses legítimos del responsable o de un tercero", "No se aplica a las autoridades públicas en el ejercicio de sus funciones (art. 6.1, párrafo 2, RGPD)"]
          ]
        },
        {
          titulo: "Derechos del interesado: cuándo proceden y sus límites",
          columnas: ["Derecho (art. RGPD)", "Cuándo procede", "Límites o excepciones"],
          filas: [
            ["Acceso (15)", "Confirmación de si se tratan sus datos, acceso y la información de las letras a) a h); copia", "Canon razonable por copias adicionales; la copia no debe afectar a derechos de otros"],
            ["Rectificación (16)", "Datos inexactos; completar los incompletos, también con declaración adicional", "—"],
            ["Supresión (17)", "6 causas: ya no necesarios, retirada del consentimiento, oposición, tratamiento ilícito, obligación legal, servicios a niños del art. 8.1", "17.3: libertad de expresión e información; obligación legal o interés público; salud pública; archivo, investigación o estadística; reclamaciones"],
            ["Limitación (18)", "4 supuestos: impugnación de la exactitud; tratamiento ilícito sin querer supresión; datos que el interesado necesita para reclamaciones; oposición en verificación", "Solo conservación salvo consentimiento, reclamaciones, derechos de otra persona o interés público importante"],
            ["Portabilidad (20)", "Consentimiento o contrato Y medios automatizados", "No en misión de interés público ni en ejercicio de poderes públicos"],
            ["Oposición (21)", "Tratamientos basados en el art. 6.1.e) o f), por su situación particular; mercadotecnia directa en todo momento", "General: cede ante motivos legítimos imperiosos o reclamaciones. Mercadotecnia: cese sin excepción"],
            ["No ser objeto de decisiones automatizadas (22)", "Decisiones basadas únicamente en tratamiento automatizado con efectos jurídicos o significativos", "Contrato, autorización legal o consentimiento explícito; en contrato y consentimiento, garantías mínimas"]
          ]
        },
        {
          titulo: "Información al interesado: RGPD y capas de la LOPDGDD",
          columnas: ["Contenido", "Art. 13 RGPD (datos del interesado)", "Art. 14 RGPD (datos no del interesado)", "Información básica, art. 11 LOPDGDD"],
          filas: [
            ["Identidad y contacto del responsable (y representante)", "Sí", "Sí", "Sí"],
            ["Fines y base jurídica", "Sí", "Sí", "La finalidad"],
            ["Categorías de datos", "No", "Sí", "Solo si los datos no se obtuvieron del afectado"],
            ["Fuente de los datos", "No", "Sí", "Solo si los datos no se obtuvieron del afectado"],
            ["Derechos de los arts. 15 a 22", "Sí", "Sí", "La posibilidad de ejercerlos"],
            ["Elaboración de perfiles", "Sí (decisiones automatizadas)", "Sí (decisiones automatizadas)", "Sí, si los datos se tratarán para perfiles, con el derecho a oponerse"]
          ],
          nota: "La información básica se completa indicando una dirección electrónica u otro medio de acceso sencillo e inmediato a la restante información."
        }
      ],
      datos: [
        "Art. 1 RGPD: la libre circulación de datos en la Unión no podrá ser restringida ni prohibida por motivos de protección de las personas físicas.",
        "Art. 4 RGPD: 26 definiciones. Seudonimización: datos que ya no pueden atribuirse a un interesado sin información adicional que figure por separado. Limitación del tratamiento: marcado de los datos conservados para limitar su tratamiento futuro.",
        "Art. 4.11 RGPD y art. 6.1 LOPDGDD: consentimiento = manifestación de voluntad libre, específica, informada e inequívoca, por declaración o clara acción afirmativa.",
        "Art. 9.2 RGPD: 10 excepciones a la prohibición de categorías especiales (letras a a j).",
        "Art. 9.2 LOPDGDD: los tratamientos de las letras g), h) e i) del art. 9.2 RGPD fundados en Derecho español requieren norma con rango de ley.",
        "Art. 10 RGPD: datos penales solo bajo supervisión de autoridades públicas o con autorización del Derecho de la Unión o de los Estados; registro completo de condenas, solo bajo control de autoridades públicas.",
        "Art. 10.3 LOPDGDD: fuera de esos supuestos, datos penales solo por abogados y procuradores para recoger la información de sus clientes.",
        "Art. 12.5 RGPD: información y actuaciones gratuitas; si son manifiestamente infundadas o excesivas, canon razonable o negativa a actuar.",
        "Art. 17.1 RGPD: 6 causas de supresión (a-f); art. 17.3: 5 excepciones (a-e). Art. 18.1: 4 supuestos de limitación. Art. 22.2: 3 excepciones.",
        "Art. 23.1 RGPD: el Derecho de la Unión o de los Estados puede limitar los derechos de los arts. 12 a 22 y 34 por 10 objetivos (letras a a j), entre ellos seguridad del Estado, defensa, seguridad pública y ejecución de demandas civiles.",
        "Art. 4.2 LOPDGDD: 4 casos de inexactitud no imputable (datos del afectado, de un mediador o intermediario, de otro responsable por portabilidad o de un registro público).",
        "Art. 13.2 LOPDGDD: el acceso se entiende otorgado con un sistema de acceso remoto, directo y seguro que garantice de modo permanente el acceso a la totalidad de los datos.",
        "Art. 15.2 LOPDGDD: tras la oposición a mercadotecnia directa, el responsable puede conservar los datos identificativos necesarios para impedir tratamientos futuros con ese fin.",
        "Art. 16.2 LOPDGDD: la limitación del tratamiento debe constar claramente en los sistemas de información del responsable."
      ],
      excepciones: [
        "Intereses legítimos (art. 6.1.f RGPD): no se aplican a las autoridades públicas en el ejercicio de sus funciones.",
        "Categorías especiales: prohibición general del art. 9.1 RGPD que cede por las 10 excepciones del art. 9.2; pero para identificar ideología, afiliación sindical, religión, orientación sexual, creencias u origen racial o étnico, el solo consentimiento no basta (art. 9.1 LOPDGDD).",
        "Fallecidos (art. 3 LOPDGDD): familiares y herederos no pueden acceder ni pedir rectificación o supresión si el fallecido lo prohibió o lo dice una ley, pero la prohibición no afecta al acceso de los herederos a los datos patrimoniales.",
        "Tratamiento que no requiere identificación (art. 11.2 RGPD): no se aplican los arts. 15 a 20, salvo que el interesado facilite información adicional que permita identificarlo.",
        "Información (arts. 13.4 y 14.5 RGPD): no se debe si el interesado ya la tiene; si no proceden del interesado, tampoco si es imposible o desproporcionado, si una norma establece la obtención o comunicación, o por secreto profesional.",
        "Portabilidad (art. 20.3 RGPD): no se aplica al tratamiento necesario para una misión de interés público o el ejercicio de poderes públicos.",
        "Oposición (art. 21 RGPD): la general cede ante motivos legítimos imperiosos o reclamaciones; la de mercadotecnia directa, no.",
        "Decisiones automatizadas (art. 22.4 RGPD): no pueden basarse en categorías especiales, salvo art. 9.2.a) o g) con medidas adecuadas.",
        "Consentimiento del menor (art. 7.1 LOPDGDD): mayor de 14 años, salvo que la ley exija la asistencia de los titulares de la patria potestad o tutela.",
        "Ámbito (art. 2.3 LOPDGDD): régimen electoral, instituciones penitenciarias y Registros Civil, de la Propiedad y Mercantiles se rigen por su legislación específica y, supletoriamente, por el RGPD y la LOPDGDD."
      ]
    }
  };
