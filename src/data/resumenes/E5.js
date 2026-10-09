// Resumen del tema E5. Formato: cabecera de src/data/resumenes.js.
export default {
    intro:
      "El RD 164/2025 establece los requisitos de seguridad contra incendios en establecimientos industriales: prevención, detección, limitación de propagación y extinción. Es de aplicación complementaria cuando otra legislación sectorial específica regule la actividad. Define protección pasiva (constructiva) y activa (equipos/sistemas), y establece un sistema de caracterización por configuración del edificio, sectorización y nivel de riesgo intrínseco (NRI) determinado por la densidad de carga de fuego ponderada y corregida (Qs).",
    bloques: [
      {
        h: "Disposiciones generales y ámbito (Arts. 1–4)",
        nota:
          "En el examen se confunde a menudo con el RIPCI (RD 513/2017): el RIPCI regula los equipos de protección activa; este reglamento regula el conjunto de la seguridad en establecimientos industriales (pasiva + activa). Ojo: los almacenes logísticos solo entran si QT ≥ 3.000.000 MJ y son de actividad principal logística; no entran los de venta física, archivos ni herramientas. Los talleres de reparación de vehículos SÍ entran.",
        items: [
          "Objeto (art. 1): requisitos de seguridad en incendio para establecimientos industriales; medidas de prevención, detección, limitación de propagación y extinción",
          "Aplicación complementaria (art. 1.2): las normas sectoriales específicas prevalecen; este reglamento solo cubre lo no previsto",
          "Uso industrial (art. 2.1): actividades industriales (Ley 21/1992), almacenes industriales, talleres reparación vehículos, servicios auxiliares",
          "Exclusiones (art. 2.2): nucleares/radiactivas, extracción minerales, agrarias/ganaderas, militares, instalaciones servicio ferroviario",
          "Almacén industrial (art. 3.b): recinto cubierto/no para almacenar productos; acceso solo personas autorizadas; NO abierto al público",
          "Almacén logístico: solo si QT ≥ 3.000.000 MJ y actividad principal es logística; excluidos venta física, archivos, herramientas",
          "Protección pasiva (art. 3.c): requisitos constructivos para prevenir, retrasar propagación y facilitar extinción/evacuación",
          "Protección activa (art. 3.d): medios/equipos/sistemas manuales o automáticos para detección, control, extinción",
          "Técnicas de seguridad equivalente (art. 3.e): soluciones que difieren de las prescripciones pero ofrecen nivel igual o mayor",
          "Diseño prestacional (art. 3.f): soluciones diseñadas para un emplazamiento concreto garantizando nivel igual o mayor",
          "Modificaciones significativas (art. 3.h): aumento superficie o nivel de riesgo intrínseco; las no significativas NO requieren nueva documentación",
          "Compatibilidad CTE DB-SI (art. 4): usos no industriales en mismo edificio con distinta titularidad → DB-SI; usos subsidiarios dentro del industrial → DB-SI si superan superficies umbral (250 m² salvo residencial siempre y aparcamiento 100 m²)",
        ],
      },
      {
        h: "Cumplimiento y exigencias básicas (Arts. 5–6)",
        nota:
          "Clásica pregunta trampa: ¿qué establecimientos están exentos de cumplir TODO el reglamento? Respuesta: los de Qs ≤ 42 MJ/m², superficie ≤ 120 m² y en recinto propio separado físicamente → solo art. 12 (mantenimiento), anexo III (extintores + alumbrado emergencia) y memoria técnica. Las 6 exigencias básicas del art. 6.1 son las que se desarrollan en anexos II y III.",
        items: [
          "Cumplimiento mínimo exigible (art. 5.1): vía a) prescripciones completas; vía b) técnicas equivalentes o diseño prestacional (responsabilidad proyectista + conformidad titular + informe organismo control)",
          "Exención parcial (art. 5.2): Qs ≤ 42 MJ/m² + superficie ≤ 120 m² + recinto propio separado físicamente → solo art. 12, anexo III (extintores y alumbrado emergencia) y memoria técnica firmada por técnico competente",
          "Adaptaciones razonables (art. 5.3): para naves de polígonos con planeamiento anterior a la entrada en vigor o edificios existentes que no puedan cumplir; requieren informe previo de organismo de control habilitado",
          "Exigencias básicas (art. 6.1): a) propagación interior · b) propagación exterior · c) evacuación · d) instalaciones protección · e) intervención bomberos · f) resistencia estructural",
        ],
      },
      {
        h: "Caracterización: configuraciones y sectorización (Art. 7 + Anexo I.1–I.2)",
        nota:
          "La caracterización es el corazón del reglamento. Primero se clasifica la configuración del edificio/espacio, luego se identifican sectores/áreas de incendio. Las configuraciones A, B, C son para edificios; D para espacios abiertos. Si hay comunicaciones (túneles, pasarelas) entre edificios tipo C, siguen siendo C si las comunicaciones tienen compartimentación y no afecta el colapso estructural.",
        items: [
          "Configuración tipo A: establecimiento ocupa parte de edificio con otros usos; AV (separación vertical), AH (separación horizontal); si mezcla → AV",
          "Configuración tipo B: edificio completo con estructura independiente, adyacente o a ≤ 3 m de otros edificios",
          "Configuración tipo C: edificio completo a > 3 m del más próximo, libre de combustibles; varios edificios de mismo establecimiento a >3 m o con muro separador entre sectores → independientes",
          "Configuración tipo D: espacio abierto (descubierto o cubierto sin cerramientos laterales); si zona cubierta no cumple aberturas laterales → se reclasifica como A, B o C",
          "Aberturas laterales tipo D: si H < 5m → L ≥ 25% siempre; si H ≥ 5m → L ≥ 25% (A<500), ≥50% (500-1500), ≥70% (A>1500); A no admitido si H<5m y 500-1500",
          "Sector de incendio (Anexo I.2.1.a): zona de edificio que confina el incendio durante un tiempo mediante elementos resistentes al fuego o espacios perimetrales",
          "Área de incendio (Anexo I.2.1.b): espacio abierto separado de otras zonas por perímetro, con elementos resistentes al fuego o espacios perimetrales",
        ],
      },
      {
        h: "Nivel de riesgo intrínseco y carga de fuego (Anexo I.3)",
        nota:
          "El NRI se clasifica en bajo (1-2), medio (3-5) y alto (6-8) según Qs. Los valores de Qs son clave: 425, 850, 1275, 1700, 3400, 6800, 13600. Se calcula por métodos de combustibilidad, fabricación o almacenamiento. Los elementos constructivos separados del interior por EI 30 pueden no contabilizarse. Se puede descartar carga de fuego de elementos constructivos si la desviación es <10%.",
        items: [
          "NRI BAJO: 1 (Qs ≤ 425) · 2 (425 < Qs ≤ 850)",
          "NRI MEDIO: 3 (850 < Qs ≤ 1.275) · 4 (1.275 < Qs ≤ 1.700) · 5 (1.700 < Qs ≤ 3.400)",
          "NRI ALTO: 6 (3.400 < Qs ≤ 6.800) · 7 (6.800 < Qs ≤ 13.600) · 8 (Qs > 13.600)",
          "Qs = densidad carga de fuego ponderada y corregida (MJ/m²); QT = carga total (MJ) = Qs × A (sin dividir por A)",
          "Método 3.2.1 (combustibilidad): Qs = Σ(qi·Gi·Ci)·R / A; qi = poder calorífico, Gi = masa, Ci = coef. peligrosidad, R = coef. actividad",
          "Método 3.2.2 (fabricación): Qs = Σ(qsi·Si·Ci)·R / A + construcción; qsi de tabla 1.3.5; no se contabiliza 'almacén de día'",
          "Método 3.2.3 (almacenamiento): Qs = Σ(qvi·hi·Si·Ci)·R / A + construcción; qvi de tabla 1.3.5; bruto vs neto según pasillos",
          "Elementos constructivos: no contabilizar si separados del interior por EI 30; descartar totalidad si desviación <10%",
          "Simplificación: descartar materiales no representativos si desviación de Qs <10% del total",
          "Coeficiente Ci: 1,60 (grado 1, fumígeno 1,92) · 1,40 (grado 2, fumígeno 1,68) · 1,20 (grado 3, fumígeno 1,44) · 1,00 (grados 4-5, fumígeno 1,20)",
        ],
      },
      {
        h: "Requisitos constructivos y protección activa (Arts. 8–9)",
        nota:
          "Los requisitos constructivos están en el anexo II y las dotaciones de protección activa en el anexo III, ambos en función de la caracterización (configuración + NRI + superficie). Los productos de construcción deben tener marcado CE según Reglamento (UE) 2024/3110 (nuevo) o 305/2011. Los equipos de protección activa cumplen el RIPCI (RD 513/2017).",
        items: [
          "Requisitos constructivos (art. 8.1): anexo II según caracterización",
          "Protección activa (art. 8.2): anexo III según caracterización",
          "Anexo IV: requisitos para casos singulares que difieren de la caracterización general",
          "Productos construcción (art. 9.1): marcado CE conforme Reglamento (UE) 2024/3110 o 305/2011",
          "Productos sin marcado CE (art. 9.2): informes de ensayo, certificaciones u otra documentación técnica; operador económico debe proporcionar información al destinatario",
          "Protección activa (art. 9.3): cumple RIPCI (RD 513/2017)",
          "Productos con prestaciones mínimas (art. 9.4): características/prestaciones en proyecto; comprobación en construcción; constancia en certificado final",
        ],
      },
      {
        h: "Proyecto, puesta en servicio y mantenimiento (Arts. 10–12)",
        nota:
          "Trampa frecuente: ¿cuándo se puede sustituir el proyecto por memoria técnica? Respuesta: superficie < 300 m² + TODOS los sectores/áreas de NRI bajo + NO aplica art. 10.3 (técnicas equivalentes/prestacional) ni art. 5.3 (adaptaciones). La puesta en servicio requiere acta de inspección inicial de organismo de control cuando la superficie de sectores/áreas medio+alto sume ≥ 1.000 m² o cuando se apliquen art. 10.3 o 5.3.",
        items: [
          "Proyecto obligatorio (art. 10.1): para establecimientos del art. 2 y modificaciones significativas (art. 12.4); redactado por persona técnica titulada competente",
          "Técnicas equivalentes/prestacional (art. 10.3): justificación documental + informe organismo de control; diseño prestacional sigue UNE-ISO 23932 y UNE-ISO 16733-1; métodos de cálculo verificados UNE-ISO 16730-1",
          "Memoria técnica en vez de proyecto (art. 10.4): superficie < 300 m² + todos sectores/áreas NRI bajo + NO art. 10.3 ni 5.3",
          "Puesta en servicio (art. 11.1): comunicación con proyecto/memoria + certificado técnico + acta inspección inicial (si ≥1.000 m² medio/alto o art. 10.3/5.3) + documentación RIPCI art. 20",
          "Declaración responsable (art. 11.2): alternativa si la CCAA lo permite; documentación a disposición de la administración",
          "Documentación en Libro del Edificio (art. 11.3)",
          "Funcionamiento y mantenimiento (art. 12): titular responsable; equipos sujetos a RIPCI; ocupantes deben conocer características y actuación; plan de autoprotección si aplica RD 393/2007",
          "Modificaciones significativas (art. 12.4): requieren nueva documentación arts. 10-11; no significativas → titular documenta y justifica",
        ],
      },
    ],
    claves: [
      "RIPCI = equipos/protección activa; RD 164/2025 = seguridad completa en industriales (pasiva+activa)",
      "Almacén logístico: QT ≥ 3.000.000 MJ + actividad principal logística; NO venta física, archivos, herramientas",
      "Qs ≤ 42 MJ/m² + ≤120 m² + recinto propio separado → solo art. 12 + anexo III (extintores+alumbrado) + memoria",
      "Configuración A: parte de edificio (AV vertical, AH horizontal, mezcla=AV)",
      "Configuración B: edificio completo independiente, adyacente o ≤3 m",
      "Configuración C: edificio completo >3 m libre de combustibles",
      "Configuración D: espacio abierto; si cubierto sin aberturas suficientes → reclasificar A/B/C",
      "NRI: bajo 1-2 (≤850) · medio 3-5 (850-3400) · alto 6-8 (>3400)",
      "Elementos constructivos con EI 30 hacia interior → no contabilizan en Qs",
      "Memoria técnica en vez de proyecto: <300 m² + todo NRI bajo + sin técnicas equivalentes/adaptaciones",
      "Acta inspección inicial obligatoria: ≥1.000 m² de medio+alto o técnicas equivalentes/adaptaciones",
      "Diseño prestacional: UNE-ISO 23932 + UNE-ISO 16733-1; cálculo UNE-ISO 16730-1",
      "Productos construcción: marcado CE Reglamento (UE) 2024/3110 (nuevo) o 305/2011",
    ],
  };
