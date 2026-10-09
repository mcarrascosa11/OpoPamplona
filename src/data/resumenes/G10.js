// Resumen del tema G10. Formato: cabecera de src/data/resumenes.js.
export default {
    intro:
      "El RGPD (Reglamento UE 2016/679) es la norma marco de protección de datos personales en la UE, de aplicación directa desde mayo 2018. La LO 3/2018 (LOPDGDD) lo adapta al ordenamiento español. Juntos regulan principios del tratamiento, bases de licitud, derechos de los interesados y condiciones especiales para categorías sensibles.",
    bloques: [
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
        ],
      },
      {
        h: "Derechos de los interesados (arts. 12-22 RGPD)",
        nota:
          "Los derechos se agrupan bien en dos bloques: los de INFORMACIÓN Y CONTROL —acceso, rectificación, supresión— y los de OPOSICIÓN Y LIMITACIÓN, más el de portabilidad. El plazo general de respuesta es de UN MES desde la recepción, prorrogable en DOS MESES MÁS cuando sea necesario por la complejidad o el número de solicitudes, informando al interesado dentro del primer mes. Ojo a dos delimitaciones: el derecho de SUPRESIÓN —el «derecho al olvido»— no opera cuando el tratamiento es necesario para cumplir una obligación legal o para el ejercicio de poderes públicos; y la PORTABILIDAD solo cabe cuando el tratamiento se basa en consentimiento o contrato y se efectúa por medios automatizados, de modo que no alcanza a los tratamientos administrativos ordinarios.",
        items: [
          "Plazo de respuesta (art. 12.3): 1 mes; prórroga de 2 meses adicionales si solicitud compleja (informar dentro del 1.er mes)",
          "Solicitudes infundadas/excesivas/repetitivas (art. 12.5): el responsable puede cobrar canon razonable o negarse a actuar; la carga de probar el carácter repetitivo recae en el responsable",
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
        h: "Otras disposiciones LOPDGDD",
        nota:
          "La LO 3/2018 no sustituye al Reglamento europeo: lo desarrolla en lo que éste dejó a los Estados y añade materia propia. Para un ayuntamiento lo esencial es que el DELEGADO DE PROTECCIÓN DE DATOS es OBLIGATORIO en todas las autoridades y organismos públicos, sin excepción por tamaño, y que su designación debe comunicarse a la Agencia Española de Protección de Datos. La ley incorpora además el bloque de derechos digitales del Título X, que es donde vive el derecho a la desconexión digital en el ámbito laboral.",
        items: [
          "Art. 3: datos de personas fallecidas → familiares y herederos pueden solicitar acceso/rectificación/supresión, salvo prohibición del fallecido (que no afecta a datos patrimoniales)",
          "Art. 5.3: deber de confidencialidad se mantiene AUN DESPUÉS de finalizar la relación con el responsable/encargado",
        ],
      },
    ],
    claves: [
      "6 principios art. 5 RGPD: licitud-lealtad-transparencia / limitación finalidad / minimización / exactitud / limitación conservación / integridad-confidencialidad + accountability",
      "6 bases de licitud art. 6 RGPD (a-f); intereses legítimos NO aplica a autoridades públicas en ejercicio de funciones",
      "Consentimiento: retirable en cualquier momento; tan fácil retirar como dar; retirada no afecta licitud previa",
      "Menores: 16 años (RGPD) pero 14 años en España (LOPDGDD art. 7)",
      "Categorías especiales art. 9 RGPD: prohibición + 10 excepciones; LOPDGDD: para ideología/sindical/religión/orientación sexual → solo consentimiento NO basta",
      "Plazo respuesta derechos: 1 mes + prórroga 2 meses (informar dentro del 1.er mes)",
      "Supresión art. 17: 6 causas tasadas; excepciones: libertad expresión, obligación legal, interés público, archivo/investigación, reclamaciones",
      "Portabilidad: solo si basado en consentimiento o contrato + tratamiento automatizado",
      "Oposición a mercadotecnia directa: cese INCONDICIONAL (≠ oposición general que admite motivos legítimos imperiosos)",
      "Decisiones automatizadas: 3 excepciones (contrato / autorización legal / consentimiento explícito) + garantías mínimas",
      "Acceso repetitivo LOPDGDD: más de 1 vez en 6 meses sin causa legítima → puede considerarse repetitivo",
    ],
  };
