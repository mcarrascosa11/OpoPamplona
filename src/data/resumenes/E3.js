// Resumen del tema E3. Formato: cabecera de src/data/resumenes.js.
export default {
  intro: "El Documento Básico SI del CTE desarrolla el requisito básico Seguridad en caso de incendio (art. 11) mediante seis exigencias (SI 1 a SI 6) que regulan la propagación interior y exterior, la evacuación, las instalaciones de protección, la intervención de bomberos y la resistencia al fuego de la estructura.",
  bloques: [
    {
      h: "Objeto, ámbito y criterios generales del DB-SI",
      nota: "Este bloque fija las reglas de lectura de todo el documento. La trampa clásica del examen es confundir el ámbito: el DB-SI no se aplica a establecimientos industriales sujetos al RSCIEI. También es frecuente que pregunten por la asimilación de usos (ambulatorio → Administrativo; personas con necesidad de ayuda → Hospitalario) y por la imposibilidad de rebajar condiciones preexistentes en reformas.",
      items: [
        "Art. 11: el requisito básico se concreta en 6 exigencias (SI 1 a SI 6); el objetivo es reducir el riesgo de daños por incendio accidental",
        "Ámbito: aplica a obras de edificación; NO a establecimientos industriales sujetos al RSCIEI",
        "Soluciones alternativas: admisibles bajo art. 5 CTE con justificación documental; en edificios protegidos, mayor adecuación efectiva posible si es incompatible",
        "Normas armonizadas UNE-EN: se aplica la última versión cuya referencia haya sido publicada en el DOUE conforme al Reglamento (UE) nº 305/2011",
        "Sanitario ambulatorio y centros de educación especial se asimilan a uso Administrativo; personas que precisan ayuda para evacuar se asimilan a uso Hospitalario",
        "Alquiler de trasteros se considera uso Almacén; áreas públicas de venta con autoabastecimiento son uso Comercial, no Almacén",
        "Uso Almacén (RD 164/2025, en vigor desde el 10-05-2025): se aplica la tabla 1.1 de SI 1 más la caracterización y los requisitos de los anexos I a IV del RSCIEI; la ocupación, con la densidad de «archivos, almacenes» (40 m²/persona). Zona de uso Almacén: la destinada principalmente a almacenar con QT ≥ 3 millones de MJ",
        "Trasteros en alquiler: NRI medio, subnivel 5, si la altura de almacenamiento es ≤ 3 m; NRI alto (subnivel según RSCIEI) si es > 3 m",
        "Áreas de archivo abiertas en oficinas y áreas de venta con autoabastecimiento: no son Almacén; pero si QT ≥ 3·10⁶ MJ y altura de almacenamiento > 5,00 m, se suman las condiciones del RSCIEI más exigentes",
        "Cambio de uso parcial: afecta a la parte modificada y a los medios de evacuación que la sirvan hasta el espacio exterior seguro, estén o no en ella; excepción: transformar en vivienda zonas de un edificio de Residencial Vivienda existente no obliga a aplicar el DB a los elementos comunes de evacuación",
        "Reforma con el mismo uso: el DB se aplica a los elementos modificados siempre que suponga mayor adecuación; si altera la ocupación o su distribución, también a los elementos de evacuación; en todo caso no puede menoscabar las condiciones preexistentes cuando sean menos estrictas que las del DB",
        "Certificados de ensayo de productos sin marcado CE: antigüedad menor que 5 años (reacción al fuego) y menor que 10 años (resistencia al fuego)"
      ]
    },
    {
      h: "SI 1 - Compartimentación en sectores de incendio",
      nota: "La tabla 1.1 es de examen obligado. La trampa está en las superficies límite y sus excepciones (espacio diáfano, riesgo mínimo, centros comerciales con extinción automática). La tabla 1.2 de resistencia al fuego de separadores varía según uso y altura de evacuación; recordar que 2.500 m² es la cifra recurrente para la mayoría de usos.",
      items: [
        "Tabla 1.1: todo establecimiento constituye sector diferenciado, salvo en Residencial Vivienda si es Docente, Administrativo o Residencial Público y no excede de 500 m²",
        "Superficies máximas: Residencial Vivienda, Administrativo, Residencial Público, Pública Concurrencia y Hospitalario (salvo excepciones) → 2.500 m²; Docente >1 planta → 4.000 m²; Comercial → 2.500 m² (10.000 m² si edificio íntegro con extinción automática y h evacuación ≤10 m)",
        "Espacio diáfano: puede superar límites si ≥90% en una planta, salidas directas al exterior, ≥75% perímetro fachada y sin zona habitable superior",
        "No hay límite de superficie para sectores de riesgo mínimo",
        "Tabla 1.2: en bajo rasante, EI 120 para todos los usos (el riesgo mínimo no se admite en bajo rasante); sobre rasante varía desde EI 60 hasta EI 180 según uso y altura",
        "Puertas entre sectores: EI2 t-C5, siendo t la mitad del tiempo de la pared; o la cuarta parte si el paso se realiza a través de vestíbulo de independencia con dos puertas",
        "Escaleras y ascensores entre sectores o entre riesgo especial y resto del edificio: compartimentados; ascensores con puerta E 30 o vestíbulo EI2 30-C5 (siempre vestíbulo en riesgo especial o Aparcamiento)"
      ],
      tablas: [
        { titulo: "SI 1 · Sectores: límites de superficie más preguntables", tabla: [
          ["Uso / situación", "Límite", "Matiz decisivo"],
          ["Residencial Vivienda / Administrativo / Residencial Público", "2.500 m²", "En Vivienda, separadores entre viviendas: al menos EI 60"],
          ["Docente", "4.000 m²", "Solo si el edificio tiene más de una planta; con una sola, no exige sectores"],
          ["Comercial", "2.500 m²", "10.000 m² si ocupa edificio íntegro, extinción automática y h evacuación ≤10 m"],
          ["Hospitalario: hospitalización o unidades especiales", "1.500 m²", "Al menos dos sectores y espacio para pacientes del contiguo"],
          ["Pública Concurrencia", "2.500 m²", "Excepciones condicionadas para determinados espacios"],
          ["Sector de riesgo mínimo", "Sin límite", "No se admite bajo rasante"],
        ]},
        { titulo: "SI 1 · Separadores de sectores: paredes y techos", tabla: [
          ["Uso del sector", "Bajo rasante", "h ≤15 m", "15<h≤28 m", "h>28 m"],
          ["Vivienda / Residencial Público / Docente / Administrativo", "EI 120", "EI 60", "EI 90", "EI 120"],
          ["Comercial / Pública Concurrencia / Hospitalario", "EI 120 (EI 180 si h > 28 m)", "EI 90", "EI 120", "EI 180"],
          ["Aparcamiento (paredes con otros usos)", "EI 120 (EI 180 si robotizado)", "EI 120", "EI 120", "EI 120"],
          ["Sector de riesgo mínimo", "No se admite", "EI 120", "EI 120", "EI 120"],
          ["Puertas de paso entre sectores", "EI2 t-C5", "t = ½ de la pared", "Con vestíbulo y 2 puertas: t = ¼", "—"],
        ]},
      ]
    },
    {
      h: "SI 1 - Riesgo especial, espacios ocultos y reacción al fuego",
      nota: "La clasificación de riesgo (tabla 2.1) y sus condiciones (tabla 2.2) son muy preguntables. La trampa es no distinguir entre riesgo bajo, medio y alto, y sus consecuencias en resistencia al fuego y vestíbulos. La reacción al fuego (tabla 4.1) suele caer por asociación de clases con zonas.",
      items: [
        "Tabla 2.1: clasifica locales/zonas en riesgo bajo, medio y alto según superficie, volumen, potencia instalada o carga de fuego",
        "Ejemplos de riesgo especial: talleres, almacenes combustibles, archivos, cocinas según potencia, salas de calderas, centros de transformación, sala de máquinas de ascensores, aparcamientos ≤100 m²",
        "Tabla 2.2: estructura R 90/120/180; paredes/techos EI 90/120/180; vestíbulo de independencia obligatorio en medio y alto; puertas EI2 45-C5 (bajo), 2×EI2 30-C5 (medio), 2×EI2 45-C5 (alto); recorrido máximo ≤25 m, aumentable 25% con extinción automática",
        "Espacios ocultos: la compartimentación debe tener continuidad; si están compartimentados respecto a ocupables puede reducirse a la mitad en registros de mantenimiento",
        "Paso de instalaciones: mantener resistencia mediante obturación automática (compuerta EI t o intumescente) o elementos pasantes con igual resistencia; excluidas penetraciones ≤50 cm²",
        "Tabla 4.1 reacción al fuego: zonas ocupables C-s2,d0 (techos/paredes) y EFL (suelos); pasillos/escaleras protegidas B-s1,d0 y CFL-s1; aparcamientos/riesgo especial B-s1,d0 y BFL-s1; espacios ocultos no estancos B-s3,d0 y BFL-s2",
        "Carpas y cerramientos textiles: nivel T2 conforme UNE-EN 15619:2014 o C-s2,d0 conforme UNE-EN 13501-1:2007"
      ],
      tablas: [
        { titulo: "SI 1 · Condiciones de zonas de riesgo especial", tabla: [
          ["Característica", "Bajo", "Medio", "Alto"],
          ["Estructura portante", "R 90", "R 120", "R 180"],
          ["Paredes y techos", "EI 90", "EI 120", "EI 180"],
          ["Vestíbulo en cada comunicación", "No", "Sí", "Sí"],
          ["Puertas de comunicación", "EI2 45-C5", "2 × EI2 30-C5", "2 × EI2 45-C5"],
          ["Recorrido hasta salida", "≤25 m", "≤25 m", "≤25 m"],
        ]},
        { titulo: "SI 1 · Reacción al fuego de revestimientos", tabla: [
          ["Situación", "Techos y paredes", "Suelos"],
          ["Zonas ocupables (no vivienda)", "C-s2,d0", "EFL"],
          ["Pasillos y escaleras protegidos", "B-s1,d0", "CFL-s1"],
          ["Aparcamientos y riesgo especial", "B-s1,d0", "BFL-s1"],
          ["Espacios ocultos no estancos", "B-s3,d0", "BFL-s2"],
        ]},
      ]
    },
    {
      h: "SI 2 - Propagación exterior (fachadas y cubiertas)",
      nota: "Este bloque regula fachadas y cubiertas. La trampa clásica es la distancia horizontal entre huecos no EI 60 según ángulo, y la franja de encuentro forjado-fachada. También suele caer la clasificación de reacción al fuego de fachadas según altura total.",
      items: [
        "Medianerías: elementos verticales separadores de otro edificio → EI 120",
        "Fachadas enfrentadas: puntos no EI 60 separados distancia d según ángulo α (0º→3,00 m; 45º→2,75 m; 60º→2,50 m; 90º→2,00 m; 135º→1,25 m; 180º→0,50 m); interpolación lineal para valores intermedios",
        "Propagación vertical: fachada EI 60 en franja de 1 m sobre encuentro forjado-fachada (reducible con saliente apto para impedir llamas)",
        "Reacción al fuego sistemas constructivos fachada (>10% superficie): D-s3,d0 si h≤10 m; C-s3,d0 si h≤18 m; B-s3,d0 si h>18 m",
        "Aislamiento en cámaras ventiladas: D-s3,d0 (h≤10 m); B-s3,d0 (h≤28 m); A2-s3,d0 (h>28 m); barreras E 30 para limitar desarrollo vertical",
        "Fachadas ≤18 m con arranque accesible al público: B-s3,d0 hasta altura de 3,5 m",
        "Cubiertas: REI 60 en franja de 0,50 m desde medianería y 1,00 m sobre encuentro con compartimentador; alternativa: prolongar medianería 0,60 m sobre cubierta",
        "Encuentro cubierta-fachada: altura h según distancia d (d≥2,50 m→h=0; d=0→h=5,00 m); materiales de cubierta a <5 m de fachada no EI 60 → BROOF (t1)"
      ],
      tablas: [
        { titulo: "SI 2 · Fachadas: distancia entre puntos no EI 60", tabla: [
          ["Ángulo α", "0°", "45°", "60°", "90°", "135°", "180°"],
          ["Distancia d mínima", "3,00 m", "2,75 m", "2,50 m", "2,00 m", "1,25 m", "0,50 m"],
        ]},
        { titulo: "SI 2 · Fachadas: reacción al fuego por altura", tabla: [
          ["Elemento", "h≤10 m", "10<h≤18 m", "18<h≤28 m", "h>28 m"],
          ["Sistema constructivo de fachada (>10%)", "D-s3,d0", "C-s3,d0", "B-s3,d0", "B-s3,d0"],
          ["Aislamiento en cámara ventilada", "D-s3,d0", "B-s3,d0", "B-s3,d0", "A2-s3,d0"],
          ["Arranque accesible al público (h≤18 m)", "B-s3,d0 hasta 3,5 m", "B-s3,d0 hasta 3,5 m", "—", "—"],
        ]},
      ]
    },
    {
      h: "SI 3 - Ocupación, salidas y recorridos de evacuación",
      nota: "La tabla de densidades (2.1) y la de número de salidas/longitud de recorridos (3.1) son fundamentales. La trampa habitual es confundir superficie útil con construida, o no aplicar el aumento del 25% en recorridos cuando hay extinción automática. Una sola salida tiene restricciones severas de ocupación y altura.",
      items: [
        "Tabla 2.1 densidades: Residencial Vivienda/Público → 20 m²/pers; Administrativo oficinas → 10; Docente conjunto planta → 10, aulas → 1,5; Comercial áreas venta sótano/baja → 2; Pública concurrencia sentados definidos → 1 pers/asiento, de pie → 0,25; Aparcamiento → 15 o 40 según caso",
        "Una sola salida de planta: no se admite en plantas de hospitalización o de tratamiento intensivo, ni en salas o unidades para pacientes hospitalizados de más de 90 m²; ocupación ≤100 pers (500 en el conjunto del edificio en salida de edificio de viviendas; 50 si hay que salvar más de 2 m en ascendente; 50 alumnos en escuelas infantiles, primaria o secundaria)",
        "Una sola salida: altura de evacuación descendente ≤28 m (Residencial Público: como máximo la segunda planta sobre la de salida, o 28 m si ≤20 plazas con detección y alarma) o ≤10 m si es ascendente",
        "Recorrido con una sola salida: ≤25 m (35 m en Aparcamiento; 50 m si salida directa al exterior y ≤25 pers)",
        "Más de una salida: recorrido ≤50 m (35 m en zonas con ocupantes que duermen, hospitalización/intensivo o escuela infantil; 75 m en espacios al aire libre de riesgo irrelevante)",
        "Desde origen hasta punto con dos recorridos alternativos: ≤15 m en hospitalización/intensivo",
        "Aumento del 25% en recorridos cuando el sector tenga instalación automática de extinción",
        "Compatibilidad de evacuación: establecimientos Comercial/Pública concurrencia o Docente/Hospitalario/Residencial Público/Administrativo >1.500 m² integrados en edificio de uso principal distinto → salidas de uso habitual independientes de zonas comunes"
      ],
      tablas: [
        { titulo: "SI 3 · Salidas y recorridos de evacuación", tabla: [
          ["Configuración", "Ocupación / condición", "Recorrido máximo"],
          ["Una salida", "≤100 pers.; excepciones: 500 en edificio de viviendas; 50 si ascenso >2 m", "25 m"],
          ["Una salida: Aparcamiento", "Condiciones generales", "35 m"],
          ["Una salida directa al exterior", "Ocupación ≤25 pers.", "50 m"],
          ["Más de una salida", "Regla general", "50 m"],
          ["Más de una: duermen / hospitalización / infantil-primaria", "Regla especial", "35 m"],
          ["Extinción automática", "Sector protegido", "+25% de recorrido"],
        ]},
      ]
    },
    {
      h: "SI 3 - Dimensionado, escaleras y puertas de evacuación",
      nota: "La tabla 4.1 de dimensionado y la 5.1 de protección de escaleras son de examen directo. La trampa está en las fórmulas (P/200, P/160, etc.) y en la distinción entre escaleras no protegidas, protegidas y especialmente protegidas según uso y altura. Las puertas tienen reglas estrictas de apertura y fuerza.",
      items: [
        "Tabla 4.1: puertas A ≥ P/200 ≥ 0,80 m (hoja mín 0,60 m, máx 1,23 m); pasillos A ≥ P/200 ≥ 1,00 m; escaleras no protegidas descendente A ≥ P/160; ascendente A ≥ P/(160-10h)",
        "Escaleras protegidas: E ≤ 3S + 160 As; pasillos protegidos: P ≤ 3S + 200 A",
        "Tabla 4.2: capacidad escaleras protegidas según anchura y número de plantas (ej: 1,00 m y 2 plantas = 224 pers; cada planta adicional +32)",
        "Tabla 5.1: no protegidas admitidas hasta h≤14 m (Vivienda, Admin, Docente), h≤10 m (Comercial, Pública concurrencia, Hospitalario otras zonas), «baja más una» (Residencial Público); no admitidas en Aparcamiento ni hospitalización/intensivo; protegidas hasta h≤28 m (Vivienda, Admin, Docente, Residencial Público), h≤20 m (Comercial, Pública concurrencia, Hospitalario otras), h≤14 m (hospitalización/intensivo); especialmente protegidas admitidas en todo caso",
        "Escaleras no protegidas ascendente >2,80 m: no pueden servir a más de 100 personas",
        "Puertas de salida de planta/edificio o >50 personas: abatibles con eje vertical; cierre que no actúe con actividad o fácil apertura sin llave; UNE-EN 179 (familiarizados) o UNE-EN 1125 (no familiarizados)",
        "Apertura en sentido de evacuación obligatoria: >200 pers en Vivienda o >100 pers en otros usos; o >50 ocupantes del recinto",
        "Puertas giratorias: deben tener puertas abatibles contiguas o sistema de abatimiento automático en emergencia (fuerza ≤220 N)",
        "Puertas peatonales automáticas: en fallo o emergencia, abren o permiten abatimiento (corredera/pliegue ≤220 N; abatible/giro-batiente ≤150 N; si es accesible DB-SUA ≤25 N, o ≤65 N si resistente al fuego)"
      ]
    },
    {
      h: "SI 3 - Señalización, control de humo y evacuación de discapacitados",
      nota: "Este bloque complementa la evacuación. Suele caer la señalización fotoluminiscente (normas UNE 23035) y el control de humo obligatorio en aparcamientos cerrados y grandes ocupaciones. La evacuación de discapacitados es clave: plazas de refugio y sus dimensiones.",
      items: [
        "Señalización: UNE 23034:1988; salidas con rótulo SALIDA; salidas de emergencia exclusivas con rótulo Salida de emergencia; señales de dirección en recorridos; SIA en itinerarios accesibles; ZONA DE REFUGIO en zonas correspondientes",
        "Fotoluminiscencia: UNE 23035-1, -2, -4; mantenimiento UNE 23035-3",
        "Control de humo: obligatorio en aparcamientos no abiertos; Comercial/Pública concurrencia >1.000 pers; atrios >500 pers o previstos para evacuación >500 pers",
        "Sistemas control humo: UNE 23584:2008, UNE 23585:2017, UNE-EN 12101-6:2006; en aparcamientos válidos sistemas DB HS-3 mecánicos con caudal 150 l/plaza·s, aportación máx 120 l/plaza·s, activación automática por detección",
        "Discapacidad: en Vivienda h>28 m, Residencial Público/Admin/Docente h>14 m, Comercial/Pública concurrencia h>10 m, Aparcamiento >1.500 m² → toda planta no ocupación nula sin salida accesible debe tener paso a sector alternativo o zona de refugio",
        "Plazas refugio: 1 silla de ruedas/100 ocupantes; 1 otra movilidad reducida/33 ocupantes (excepto Vivienda); dimensiones 1,20×0,80 m (silla ruedas) o 0,80×0,60 m (otra)",
        "Itinerarios accesibles desde todo origen en zona accesible hasta zona de refugio, sector alternativo o salida accesible"
      ]
    },
    {
      h: "SI 4 - Instalaciones de protección contra incendios",
      nota: "La tabla 1.1 de dotación es extensa y preguntable. La trampa está en los umbrales de superficie y altura que disparan cada instalación. Es fundamental diferenciar entre extintores (siempre), bocas (según uso y superficie), columnas secas (altura), detección/alarma (superficie/ocupación) e instalaciones automáticas (alturas o usos específicos).",
      items: [
        "Extintores portátiles: siempre; eficacia 21A-113B; a 15 m recorrido máximo; en riesgo especial; en Hospitalario riesgo alto >500 m² un extintor móvil 25 kg por cada 2.500 m²",
        "Bocas incendio equipadas: riesgo especial alto por sólidos (tipo 45 mm, salvo 25 mm en Residencial Vivienda); por uso, tipo 25 mm: Admin >2.000 m²; Residencial Público >1.000 m² o >50 personas alojadas; Docente >2.000 m²; Comercial >500 m²; Pública concurrencia >500 m²; Aparcamiento >500 m² (excluidos robotizados); Hospitalario en todo caso",
        "Columna seca: Vivienda/Admin/Docente/Comercial/Pública concurrencia si h>24 m; Hospitalario si h>15 m; Aparcamiento si >3 plantas bajo rasante o >4 sobre rasante; sustituible por bie en algunos casos según municipio",
        "Sistema alarma: Admin/Docente/Comercial >1.000 m²; Residencial Público: detección y alarma >500 m²; Pública concurrencia >500 pers (apto para megafonía); señales visuales + acústicas; visuales perceptibles en viviendas accesibles para discapacitados auditivos",
        "Sistema detección: Vivienda h>50 m; Admin >2.000 m² (riesgo alto) o >5.000 m² (todo); Docente >2.000 m² (riesgo alto) o >5.000 m² (todo); Residencial Público >500 m²; Comercial >2.000 m²; Pública concurrencia >1.000 m²; Aparcamiento >500 m²; Hospitalario en todo caso; robotizados con pulsadores",
        "Instalación automática extinción: edificio h>80 m; cocinas Hospitalario/Residencial Público >20 kW u otros >50 kW; centros transformación según potencia y aislamiento; Comercial área venta >1.500 m² y QS>500 MJ/m²; todo aparcamiento robotizado; Residencial Público h>28 m o >5.000 m²",
        "Ascensor emergencia: plantas h>28 m; Hospitalario zonas hospitalización/intensivo h>15 m",
        "Hidrantes exteriores: según altura, superficie y uso; uno por cada 10.000 m² adicionales; computables los de vía pública a <100 m"
      ]
    },
    {
      h: "SI 5 - Intervención de bomberos",
      nota: "Este bloque es más mecánico pero suele caer por las dimensiones de viales y espacios de maniobra. La trampa está en los radios de giro (5,30 m y 12,50 m), la separación máxima del vehículo a fachada según altura y las dimensiones de los huecos de acceso por fachada.",
      items: [
        "Viales aproximación: anchura libre ≥3,5 m; gálibo ≥4,5 m; capacidad portante ≥20 kN/m²; radios mínimos curvas 5,30 m y 12,50 m con anchura circulación 7,20 m",
        "Espacio maniobra: edificios h evacuación descendente >9 m; anchura libre ≥5 m; altura libre = altura edificio; separación vehículo-fachada: ≤23 m (h≤15 m), ≤18 m (15<h≤20 m), ≤10 m (h>20 m); distancia máxima a accesos ≤30 m; pendiente ≤10%; resistencia punzonamiento 100 kN sobre 20 cm Ø",
        "Acceso bombeo columna seca: <18 m de cada punto de conexión; visible desde camión",
        "Vías de acceso sin salida de más de 20 m: espacio suficiente para la maniobra de los vehículos de extinción",
        "Zonas edificadas limítrofes o interiores a áreas forestales: franja de 25 m sin vegetación que propague el incendio, camino perimetral de 5 m (puede ir en la franja), preferentemente dos vías de acceso alternativas; si solo hay una, fondo de saco circular de 12,50 m de radio",
        "Huecos fachada para acceso bomberos: dimensiones mínimas 0,80×1,20 m; distancia entre ejes verticales ≤25 m; alféizar ≤1,20 m sobre nivel de planta; no instalar elementos que impidan acceso (excepto seguridad en h≤9 m)",
        "Aparcamientos robotizados: vía compartimentada EI 120 con puertas EI2 60-C5 por cada sector; sistema extracción humo 3 renovaciones/hora"
      ]
    },
    {
      h: "SI 6 - Resistencia al fuego de la estructura",
      nota: "Las tablas 3.1 y 3.2 son de memorización obligada. La trampa está en distinguir elementos principales de secundarios, y en que la resistencia del suelo entre sectores depende del uso del sector inferior. Es clave el concepto de cubierta ligera (carga permanente ≤1 kN/m²) que puede ser R 30.",
      items: [
        "Elementos principales tabla 3.1: Vivienda unifamiliar R 30; Residencial/Docente/Admin R 60 (h≤15 m), R 90 (≤28 m), R 120 (>28 m); Comercial/Pública concurrencia/Hospitalario R 90 (h≤15 m), R 120 (≤28 m), R 180 (>28 m); Aparcamiento sobre otro uso R 90; bajo otro uso R 120 (R 180 si robotizado)",
        "Elementos estructurales de suelos entre sectores: resistencia función del uso del sector inferior",
        "Zonas riesgo especial tabla 3.2: bajo R 90, medio R 120, alto R 180; no inferior a estructura portante de la planta del edificio",
        "Cubiertas ligeras (carga permanente ≤1 kN/m²) no previstas para evacuación y h≤28 m: pueden ser R 30 si su fallo no ocasiona daños graves ni compromete estabilidad ni compartimentación",
        "Elementos en escalera protegida o pasillo protegido: mínimo R 30; en escalera especialmente protegida no se exige",
        "Elementos secundarios: si su colapso no afecta a ocupantes, estabilidad global, evacuación o compartimentación → sin exigencia; suelos que deban garantizar R → accesibles por escalera con igual R o protegida",
        "Estructuras textiles (carpas): R 30, excepto si el textil es T2 o C-s2,d0 y presenta perforación ≥20 cm² tras ensayo UNE-EN 14115:2002"
      ],
      tablas: [
        { titulo: "SI 6 · Estructura principal: resistencia R", tabla: [
          ["Uso", "Sótano", "h≤15 m", "15<h≤28 m", "h>28 m"],
          ["Vivienda unifamiliar", "R 30", "R 30", "—", "—"],
          ["Residencial Vivienda / Público / Docente / Administrativo", "R 120", "R 60", "R 90", "R 120"],
          ["Comercial / Pública Concurrencia / Hospitalario", "R 120 (R 180 si h > 28 m)", "R 90", "R 120", "R 180"],
          ["Aparcamiento exclusivo o sobre otro uso", "", "R 90", "R 90", "R 90"],
          ["Aparcamiento bajo otro uso", "", "R 120", "R 120", "R 120 (R 180 robotizado)"],
        ]},
      ]
    },
    {
      h: "Anejo SI A - Terminología",
      nota: "El anejo A entra en el alcance oficial. Las definiciones llevan cifras que el tribunal convierte en preguntas de dato o de definición: altura de evacuación (hasta la salida de EDIFICIO, no de planta), origen de evacuación, sector de riesgo mínimo, vestíbulo de independencia y zona de refugio.",
      items: [
        "Altura de evacuación: máxima diferencia de cotas entre un origen de evacuación y la salida de edificio que le corresponda; no cuentan las plantas más altas con solo zonas de ocupación nula",
        "Aparcamiento abierto: en cada planta, aberturas permanentes ≥ 1/20 de su superficie construida, de las que ≥ 1/40 repartidas entre las dos paredes opuestas más próximas; borde superior de las aberturas a ≤ 0,5 m del techo",
        "Ascensor de emergencia: 630 kg; cabina 1,10 × 1,40 m (Hospitalario 1,20 × 2,10 m); paso 1,00 m; recorrido completo en menos de 60 s; acceso desde escalera protegida o vestíbulo de escalera especialmente protegida con puerta E30; pulsador «USO EXCLUSIVO BOMBEROS»; fuente propia de 1 h; uno por cada 1.000 ocupantes o fracción",
        "Escalera protegida: recinto exclusivo de circulación, EI 120; máximo dos accesos por planta con puertas EI2 60-C5; tapas de registro EI 60; en planta de salida, ≤ 15 m hasta salida de edificio; humo: ventanas ≥ 1 m² por planta, o conductos de 50 cm² por m³ (lados ≤ 4:1; rejillas de entrada < 1 m y de salida > 1,80 m), o presión diferencial",
        "Escalera especialmente protegida: la protegida más un vestíbulo de independencia diferente en cada acceso; no lo necesita la abierta al exterior (huecos ≥ 5A m² por planta) ni la planta de salida en evacuación ascendente",
        "Pasillo protegido: condiciones equivalentes a la escalera protegida; ventilación por huecos ≥ 0,2L m²; rejillas en paramentos opuestos separadas 10 m como máximo",
        "Espacio exterior seguro: 0,5P m² dentro de un radio de 0,1P m desde la salida (no se comprueba si P ≤ 50); si no comunica con la red viaria, no vale ninguna zona a menos de 15 m del edificio; la cubierta solo si su estructura es independiente",
        "Origen de evacuación: todo punto ocupable salvo el interior de viviendas y los recintos de densidad ≤ 1 pers/5 m² y superficie ≤ 50 m² (habitaciones de hotel, despachos…)",
        "Recorridos alternativos: forman en el punto un ángulo mayor que 45º o están separados por elementos EI 30. Altura máxima salvada en ascendente: 4 m hasta salida de planta y 6 m hasta el exterior (1 m y 2 m en hospitalización, intensivo, escuela infantil y primaria)",
        "Recorridos en Comercial > 400 m² de público: por pasillos definidos, salvo los diez primeros metros, con tramos ≤ 20 m; con carros, no más de diez cajas entre salidas; sin carros, paso por cajas válido si ≥ 0,70 m",
        "Salida de edificio: puerta o hueco a espacio exterior seguro; hasta 500 personas vale un espacio exterior con dos recorridos alternativos a dos espacios seguros, uno de ellos ≤ 50 m",
        "Salida de planta: arranque de escalera compartimentada como sector o puerta a escalera protegida, pasillo protegido o vestíbulo de escalera especialmente protegida (0,70 m²/ocupante en hospitalización y 1,50 m² en intensivo); paso a otro sector por vestíbulo con 0,5 m²/pers en los 30 m primeros; o salida de edificio",
        "Sector bajo rasante: algún recorrido debe salvar en ascendente 1,5 m o más",
        "Sector de riesgo mínimo: solo circulación, no bajo rasante, carga de fuego ≤ 40 MJ/m² en el sector y ≤ 50 MJ/m² en cada recinto, separado por EI 120 con vestíbulos y con salidas de edificio directas",
        "Uso Aparcamiento: más de 100 m²; excluidos los garajes de vivienda unifamiliar y los aparcamientos exteriores aunque estén cubiertos. Robotizado: sin presencia de personas; no cumple las condiciones de evacuación",
        "Uso Hospitalario: hospitalización de 24 horas y ocupantes en su mayoría incapaces de cuidarse; las zonas ambulatorias, condiciones de Administrativo. Residencial Público: alojamiento temporal regentado por un titular distinto de los ocupantes",
        "Superficie útil en Comercial sin implantación definida: al menos el 75 % de la construida de las zonas de público",
        "Vestíbulo de independencia: paredes EI 120; puertas con ¼ de la resistencia del compartimentador y al menos EI2 30-C5; 0,50 m entre barridos de puertas; Ø 1,20 m libre en itinerario accesible (Ø 1,50 m si contiene zona de refugio)",
        "Zona de refugio: plazas de 1,20 × 0,80 m (silla de ruedas) o 0,80 × 0,60 m (otra movilidad reducida); en rellanos de escaleras protegidas, vestíbulos de especialmente protegidas o pasillos protegidos; círculo Ø 1,50 m"
      ]
    }
  ],
  claves: [
    "DB-SI: 6 exigencias (SI 1 a SI 6); no aplica a industriales sujetos al RSCIEI",
    "Superficie sector incendio: 2.500 m² (general), 4.000 m² (Docente >1 planta), 10.000 m² (Comercial con extinción automática y h evacuación ≤10 m)",
    "Puertas entre sectores: EI2 t-C5 (t = mitad de la pared; cuarta parte si hay vestíbulo con dos puertas)",
    "Recorrido evacuación: 25 m (1 salida), 50 m (>1 salida); aumentable 25% con extinción automática",
    "Escaleras protegidas: E ≤ 3S + 160 As; no protegidas ascendente >2,80 m máximo 100 personas",
    "Resistencia estructura principal: Vivienda unifamiliar R 30; Comercial/Pública concurrencia/Hospitalario h>28 m → R 180",
    "Riesgo especial alto: estructura R 180; paredes/techos EI 180; 2 puertas EI2 45-C5",
    "Reacción al fuego fachada: B-s3,d0 si h>18 m (o hasta 3,5 m si accesible al público en h≤18 m)",
    "Control humo: obligatorio en aparcamientos no abiertos, Comercial/Pública concurrencia >1.000 pers, atrios >500 pers",
    "Refugio discapacitados: 1 silla de ruedas/100 ocupantes; 1 otra discapacidad/33 ocupantes (excepto Vivienda)",
    "Vigencia: versión del DB-SI de 4 de marzo de 2025, con las modificaciones del RD 164/2025 (BOE 10-04-2025, en vigor el 10-05-2025: uso Almacén, trasteros, salida de planta). El proyecto de modificación del CTE sometido a información pública el 7-11-2025 (fachadas y aparcamientos) no estaba aprobado el 21-05-2026: no se estudia"
  ],
  memorizacion: {
    tablas: [
      {
        titulo: "SI 1 · Tabla 1.1: superficie máxima de cada sector de incendio",
        columnas: ["Uso", "Superficie construida máxima", "Matiz decisivo"],
        filas: [
          ["Residencial Vivienda", "2.500 m²", "Elementos que separan viviendas entre sí: al menos EI 60"],
          ["Administrativo", "2.500 m²", "—"],
          ["Residencial Público", "2.500 m²", "Habitaciones y oficios de planta: paredes EI 60; si el establecimiento supera 500 m², puertas EI2 30-C5"],
          ["Docente", "4.000 m² si tiene más de una planta", "Con una única planta no es preciso compartimentar en sectores"],
          ["Comercial", "2.500 m² en general; 10.000 m² si ocupa todo un edificio íntegramente protegido con extinción automática y h de evacuación ≤ 10 m", "Edificio exento con extinción: zonas de público en un único sector si h descendente ≤ 10 m y ascendente ≤ 4 m"],
          ["Hospitalario", "1.500 m² en plantas de hospitalización o unidades especiales (al menos dos sectores); 2.500 m² en otras zonas", "Excepción: plantas ≤ 1.500 m² con salidas directas al exterior seguro y recorridos ≤ 25 m"],
          ["Pública Concurrencia", "2.500 m²", "Más si: EI 120, salidas a sector de riesgo mínimo o de edificio, revestimientos B-s1,d0 / BFL-s1, carga de fuego ≤ 200 MJ/m² y sin zona habitable encima. Cajas escénicas: sector propio"],
          ["Aparcamiento", "Sector diferenciado si está integrado con otros usos", "Comunicación por vestíbulo de independencia; robotizados bajo otro uso: sectores ≤ 10.000 m³"],
          ["Sector de riesgo mínimo", "Sin límite", "No se admite bajo rasante"],
        ],
        nota: "Las superficies máximas pueden DUPLICARSE con instalación automática de extinción (SI 1-1.1). No computan en el sector los locales de riesgo especial, las escaleras y pasillos protegidos, los vestíbulos de independencia ni las escaleras compartimentadas como sector. Zonas de uso subsidiario que deben ser sector propio: Residencial Vivienda en todo caso; alojamiento, Administrativo, Comercial o Docente > 500 m² (250 m² si el uso principal es Almacén); Pública Concurrencia > 500 personas (250 m² con Almacén); Aparcamiento > 100 m²; Almacén con QT ≥ 3·10⁶ MJ. Espacio diáfano: ≥ 90 % en una planta, salidas directas al exterior, ≥ 75 % de perímetro en fachada y sin zona habitable encima."
      },
      {
        titulo: "SI 1 · Tabla 1.2: paredes y techos que delimitan sectores",
        columnas: ["Uso del sector", "Bajo rasante", "h ≤ 15 m", "15 < h ≤ 28 m", "h > 28 m"],
        filas: [
          ["Riesgo mínimo (cualquier uso)", "No se admite", "EI 120", "EI 120", "EI 120"],
          ["Residencial Vivienda, Residencial Público, Docente, Administrativo", "EI 120", "EI 60", "EI 90", "EI 120"],
          ["Comercial, Pública concurrencia, Hospitalario", "EI 120 (EI 180 si h > 28 m)", "EI 90", "EI 120", "EI 180"],
          ["Aparcamiento", "EI 120 (EI 180 robotizado)", "EI 120", "EI 120", "EI 120"],
        ],
        nota: "Puertas de paso entre sectores: EI2 t-C5, con t = mitad de la pared; o la cuarta parte si se pasa por vestíbulo de independencia y dos puertas. Techo que separa de una planta superior: REI en vez de EI. Suelo: depende del uso de la planta inferior (SI 6). Ascensores entre sectores: puertas E 30 o vestíbulo con puerta EI2 30-C5; en riesgo especial y Aparcamiento, siempre vestíbulo."
      },
      {
        titulo: "SI 1 · Tabla 2.1: umbrales de riesgo especial más preguntados",
        columnas: ["Local o zona", "Bajo", "Medio", "Alto"],
        filas: [
          ["Talleres de mantenimiento, almacenes de combustibles, archivos", "100 < V ≤ 200 m³", "200 < V ≤ 400 m³", "V > 400 m³"],
          ["Almacén de residuos", "5 < S ≤ 15 m²", "15 < S ≤ 30 m²", "S > 30 m²"],
          ["Cocinas (potencia instalada)", "20 < P ≤ 30 kW", "30 < P ≤ 50 kW", "P > 50 kW"],
          ["Lavanderías, vestuarios de personal, camerinos", "20 < S ≤ 100 m²", "100 < S ≤ 200 m²", "S > 200 m²"],
          ["Salas de calderas (potencia útil nominal)", "70 < P ≤ 200 kW", "200 < P ≤ 600 kW", "P > 600 kW"],
          ["Trasteros en Residencial Vivienda", "50 < S ≤ 100 m²", "100 < S ≤ 500 m²", "S > 500 m²"],
          ["Roperos y custodia de equipajes (Residencial Público)", "S ≤ 20 m²", "20 < S ≤ 100 m²", "S > 100 m²"],
          ["Imprenta y reprografía (Administrativo)", "100 < V ≤ 200 m³", "200 < V ≤ 500 m³", "V > 500 m³"],
          ["Laboratorios clínicos (Hospitalario)", "V ≤ 350 m³", "350 < V ≤ 500 m³", "V > 500 m³"],
          ["Almacenes en Comercial (QS)", "425 < QS ≤ 850 MJ/m²", "850 < QS ≤ 3.400 MJ/m²", "QS > 3.400 MJ/m²"],
        ],
        nota: "Riesgo bajo EN TODO CASO: aparcamiento ≤ 100 m² o integrado en vivienda unifamiliar, salas de máquinas de climatización (RITE), local de contadores y cuadros generales, sala de maquinaria de ascensores, sala de grupo electrógeno, centro de transformación con aislamiento seco o de punto de inflamación > 300 ºC. Riesgo alto en todo caso: esterilización y almacenes anejos (Hospitalario); maquinaria frigorífica con amoniaco, medio en todo caso. Freidoras: 1 kW por litro. Las cocinas con extinción automática no son riesgo especial, salvo en Hospitalario y Residencial Público."
      },
      {
        titulo: "SI 1 · Tabla 2.2 y SI 6 tabla 3.2: condiciones de las zonas de riesgo especial",
        columnas: ["Condición", "Bajo", "Medio", "Alto"],
        filas: [
          ["Estructura portante", "R 90", "R 120", "R 180"],
          ["Paredes y techos que la separan", "EI 90", "EI 120", "EI 180"],
          ["Vestíbulo de independencia en cada comunicación", "No", "Sí", "Sí"],
          ["Puertas de comunicación", "EI2 45-C5", "2 × EI2 30-C5", "2 × EI2 45-C5"],
          ["Recorrido máximo hasta alguna salida del local", "25 m", "25 m", "25 m"],
        ],
        nota: "El recorrido puede aumentarse un 25 % con extinción automática. La estructura no puede ser menor que la de los sectores del uso al que sirve, salvo bajo cubierta no prevista para evacuación cuyo fallo no afecte a otras plantas ni a la compartimentación: R 30. Extintores: uno fuera junto a la puerta y, dentro, recorrido ≤ 15 m (bajo y medio) o ≤ 10 m (alto)."
      },
      {
        titulo: "SI 1 · Tabla 4.1: reacción al fuego de los revestimientos",
        columnas: ["Situación", "Techos y paredes", "Suelos"],
        filas: [
          ["Zonas ocupables (excluido el interior de viviendas)", "C-s2,d0", "EFL"],
          ["Pasillos y escaleras protegidos", "B-s1,d0", "CFL-s1"],
          ["Aparcamientos y recintos de riesgo especial", "B-s1,d0", "BFL-s1"],
          ["Espacios ocultos no estancos (patinillos, falsos techos, suelos elevados)", "B-s3,d0", "BFL-s2"],
        ],
        nota: "Solo cuando superen el 5 % de las superficies de paredes, techos o suelos del recinto. En uso Hospitalario, las zonas ocupables se tratan como pasillos y escaleras protegidos. Carpas: nivel T2 (UNE-EN 15619) o C-s2,d0. Pública concurrencia: butacas tapizadas UNE-EN 1021-1 y 1021-2; telones y cortinas, clase 1 (UNE-EN 13773). Penetraciones de instalaciones de hasta 50 cm²: no precisan obturación."
      },
      {
        titulo: "SI 2 · Fachadas y cubiertas",
        columnas: ["Elemento", "Exigencia"],
        filas: [
          ["Medianerías (separadores de otro edificio)", "EI 120"],
          ["Fachadas: distancia d entre puntos no EI 60 según ángulo α", "0º: 3,00 m · 45º: 2,75 m · 60º: 2,50 m · 90º: 2,00 m · 135º: 1,25 m · 180º: 0,50 m (interpolación lineal); entre edificios colindantes, el 50 % de d hasta la bisectriz"],
          ["Propagación vertical por fachada", "Franja EI 60 de 1 m de altura; se reduce en la dimensión de un saliente apto para impedir el paso de las llamas"],
          ["Sistemas constructivos de fachada (> 10 % de su superficie)", "D-s3,d0 hasta 10 m · C-s3,d0 hasta 18 m · B-s3,d0 por encima de 18 m"],
          ["Aislamiento en cámaras ventiladas", "D-s3,d0 hasta 10 m · B-s3,d0 hasta 28 m · A2-s3,d0 por encima de 28 m; barreras E 30 para limitar su desarrollo vertical"],
          ["Fachadas ≤ 18 m con arranque accesible al público", "B-s3,d0 hasta 3,5 m de altura como mínimo"],
          ["Cubierta", "REI 60 en franja de 0,50 m desde el edificio colindante y de 1,00 m sobre el encuentro con compartimentadores de sector o de riesgo especial alto; alternativa: prolongar el elemento 0,60 m por encima del acabado"],
          ["Encuentro cubierta-fachada", "d ≥ 2,50 m: h = 0 · 2,00: 1,00 · 1,50: 2,00 · 1,00: 3,00 · 0,50: 4,00 · d = 0: h = 5,00 m"],
          ["Revestimientos de cubierta a menos de 5 m de fachada no EI 60", "BROOF (t1), incluidos lucernarios y voladizos de más de 1 m"],
        ],
        nota: "Las tablas de reacción al fuego de fachada se aplican según la ALTURA TOTAL de la fachada y considerando el uso final del sistema (capas interiores no protegidas por una capa EI 30)."
      },
      {
        titulo: "SI 3 · Tabla 2.1: densidades de ocupación más preguntadas (m²/persona útiles)",
        columnas: ["Uso", "Zona", "Densidad"],
        filas: [
          ["Cualquiera", "Salas de máquinas, limpieza / aseos de planta", "Nula / 3"],
          ["Residencial Vivienda / Residencial Público", "Plantas de vivienda / zonas de alojamiento", "20 / 20"],
          ["Aparcamiento", "Vinculado a actividad sujeta a horarios / otros casos", "15 / 40"],
          ["Administrativo", "Oficinas / vestíbulos y zonas de uso público", "10 / 2"],
          ["Docente", "Conjunto de la planta / laboratorios, talleres / aulas / aulas infantiles y salas de lectura", "10 / 5 / 1,5 / 2"],
          ["Hospitalario", "Salas de espera / hospitalización / ambulatorios y diagnóstico / tratamiento a internados", "2 / 15 / 10 / 20"],
          ["Comercial", "Ventas en sótano, baja y entreplanta / en otras plantas / muebles y vehículos", "2 / 3 / 5"],
          ["Pública concurrencia", "Asientos definidos / sentados sin asientos definidos / de pie / discotecas", "1 pers/asiento / 0,5 / 0,25 / 0,5"],
          ["Pública concurrencia", "Bares de pie / sentados / comida rápida / gimnasio con aparatos / sin aparatos", "1 / 1,5 / 1,2 / 5 / 1,5"],
          ["Archivos, almacenes", "—", "40"],
        ],
        nota: "Se calcula sobre la superficie ÚTIL, salvo que sea previsible una ocupación mayor o una disposición legal exija una menor. Los aparcamientos robotizados se consideran sin ocupación."
      },
      {
        titulo: "SI 3 · Tabla 3.1: salidas de planta y recorridos de evacuación",
        columnas: ["Situación", "Límite general", "Excepciones"],
        filas: [
          ["Una salida: dónde no se admite", "Plantas de hospitalización o tratamiento intensivo", "Salas o unidades de hospitalizados de más de 90 m²"],
          ["Una salida: ocupación", "100 personas", "500 en el edificio (salida de edificio de viviendas); 50 si hay que subir más de 2 m; 50 alumnos (infantil, primaria, secundaria)"],
          ["Una salida: recorrido", "25 m", "35 m en Aparcamiento; 50 m con salida directa al exterior y ≤ 25 personas, o al aire libre de riesgo irrelevante"],
          ["Una salida: altura de evacuación", "28 m descendente; 10 m ascendente", "Residencial Público: como máximo 2.ª planta sobre la de salida (28 m si ≤ 20 plazas con detección y alarma)"],
          ["Más de una salida: recorrido", "50 m", "35 m donde se duerme, hospitalización, intensivo, escuela infantil y primaria; 75 m al aire libre"],
          ["Hasta un punto con dos recorridos alternativos", "La longitud máxima de una sola salida", "15 m en hospitalización o tratamiento intensivo"],
        ],
        nota: "Todas las longitudes se pueden aumentar un 25 % en sectores con instalación automática de extinción. En Residencial Vivienda, la planta de salida necesita más de una salida si la ocupación del edificio excede de 500 personas."
      },
      {
        titulo: "SI 3 · Dimensionado (tabla 4.1) y protección de escaleras (tabla 5.1)",
        columnas: ["Elemento", "Regla"],
        filas: [
          ["Puertas y pasos", "A ≥ P/200 ≥ 0,80 m; hoja entre 0,60 y 1,23 m; Hospitalario ≥ 1,05 m"],
          ["Pasillos y rampas", "A ≥ P/200 ≥ 1,00 m; Hospitalario ≥ 2,20 m (2,10 m en puertas); 0,80 m si ≤ 10 usuarios habituales"],
          ["Escaleras no protegidas", "Descendente A ≥ P/160; ascendente A ≥ P/(160 − 10h)"],
          ["Escaleras protegidas / pasillos protegidos", "E ≤ 3S + 160 AS / P ≤ 3S + 200 A"],
          ["Zonas al aire libre", "Pasos y rampas A ≥ P/600; escaleras A ≥ P/480"],
          ["Filas de asientos", "Salida por un extremo: 30 cm con 7 asientos, +2,5 cm por asiento, máx. 12; por dos extremos: 30 cm hasta 14, +1,25 cm; 50 cm desde 30 asientos; paso de 1,20 m cada 25 filas"],
          ["No protegida, descendente", "h ≤ 14 m Vivienda, Administrativo, Docente; h ≤ 10 m Comercial, Pública concurrencia y Hospitalario (otras zonas); baja más una en Residencial Público; no se admite en hospitalización ni Aparcamiento"],
          ["Protegida, descendente", "h ≤ 28 m Vivienda, Administrativo, Docente, Residencial Público; h ≤ 20 m Comercial, Pública concurrencia y Hospitalario (otras zonas); h ≤ 14 m hospitalización; no se admite en Aparcamiento"],
          ["Ascendente", "No protegida: h ≤ 2,80 m siempre; 2,80-6,00 m si P ≤ 100; más de 6,00 m no. Protegida: se admite en todo caso (salvo Aparcamiento)"],
          ["Especialmente protegida", "Se admite en todo caso"],
        ],
        nota: "Puerta de salida de una escalera protegida a la planta de salida: al menos el 80 % de la anchura de cálculo de la escalera. Tabla 4.2: escalera protegida de 1,00 m sirve a 224 personas con 2 plantas, +32 por planta más."
      },
      {
        titulo: "SI 4 · Tabla 1.1: dotación de instalaciones por uso",
        columnas: ["Uso", "BIE", "Columna seca", "Alarma / detección", "Otras"],
        filas: [
          ["En general", "Riesgo especial alto por sólidos", "—", "—", "Extintor 21A-113B a 15 m; ascensor de emergencia si h > 28 m; extinción automática si h > 80 m; hidrantes si h desc. > 28 m o asc. > 6 m"],
          ["Residencial Vivienda", "—", "h > 24 m", "Detección y alarma si h > 50 m", "Hidrante entre 5.000 y 10.000 m²"],
          ["Administrativo / Docente", "> 2.000 m²", "h > 24 m", "Alarma > 1.000 m²; detección > 2.000 m² en riesgo alto y > 5.000 m² en todo el edificio", "Hidrante entre 5.000 y 10.000 m²"],
          ["Residencial Público", "> 1.000 m² o > 50 alojados", "h > 24 m", "Detección y alarma > 500 m²", "Extinción automática si h > 28 m o > 5.000 m²; hidrante 2.000-10.000 m²"],
          ["Hospitalario", "En todo caso", "h > 15 m", "Detección y alarma en todo caso (teléfono directo con bomberos si > 100 camas)", "Ascensor de emergencia en hospitalización e intensivo con h > 15 m; extintor móvil de 25 kg por cada 2.500 m² en riesgo alto > 500 m²"],
          ["Comercial", "> 500 m²", "h > 24 m", "Alarma > 1.000 m²; detección > 2.000 m²", "Extinción automática si el área de ventas > 1.500 m² y > 500 MJ/m²; extintores de 50 kg en riesgo medio y alto > 1.000 m²; hidrante 1.000-10.000 m²"],
          ["Pública concurrencia", "> 500 m²", "h > 24 m", "Alarma > 500 personas (megafonía); detección > 1.000 m²", "Hidrantes en cines, teatros, auditorios y discotecas de 500 a 10.000 m² y recintos deportivos de 5.000 a 10.000 m²"],
          ["Aparcamiento", "> 500 m² (no robotizados)", "> 3 plantas bajo rasante o > 4 sobre rasante", "Detección > 500 m²; robotizados, pulsadores", "Extinción automática en todo robotizado; hidrante 1.000-10.000 m²"],
        ],
        nota: "Hidrantes: uno más por cada 10.000 m² adicionales o fracción; computan los de la vía pública a menos de 100 m de la fachada accesible. El municipio puede sustituir la columna seca por BIE. Extinción automática en cocinas > 20 kW (Hospitalario y Residencial Público) o > 50 kW (resto)."
      },
      {
        titulo: "SI 5 · Intervención de los bomberos",
        columnas: ["Condición", "Valor"],
        filas: [
          ["Vial de aproximación", "Anchura libre 3,5 m · gálibo 4,5 m · 20 kN/m² · curvas con radios 5,30 y 12,50 m y anchura 7,20 m"],
          ["Espacio de maniobra (h de evacuación descendente > 9 m)", "Anchura libre 5 m · altura libre la del edificio · pendiente ≤ 10 % · punzonamiento 100 kN sobre 20 cm Ø · ≤ 30 m hasta los accesos"],
          ["Separación máxima vehículo-fachada", "23 m (h ≤ 15 m) · 18 m (15 < h ≤ 20 m) · 10 m (h > 20 m)"],
          ["Columna seca", "Equipo de bombeo a menos de 18 m de cada conexión, visible desde el camión"],
          ["Huecos en fachada", "0,80 × 1,20 m · alféizar ≤ 1,20 m · ejes a ≤ 25 m · sin obstáculos salvo elementos de seguridad en plantas con h ≤ 9 m"],
          ["Áreas forestales", "Franja de 25 m · camino perimetral de 5 m · dos accesos o fondo de saco de 12,50 m de radio"],
          ["Aparcamientos robotizados", "Vía EI 120 con puertas EI2 60-C5 por sector; extracción de humo de 3 renovaciones/hora"],
        ],
        nota: "Tapas de registro de más de 0,15 × 0,15 m en el espacio de maniobra: también deben resistir el punzonamiento (UNE-EN 124:2015)."
      },
      {
        titulo: "SI 6 · Tabla 3.1: resistencia al fuego suficiente de la estructura principal",
        columnas: ["Uso del sector", "Sótano", "h ≤ 15 m", "h ≤ 28 m", "h > 28 m"],
        filas: [
          ["Vivienda unifamiliar", "R 30", "R 30", "—", "—"],
          ["Residencial Vivienda, Residencial Público, Docente, Administrativo", "R 120", "R 60", "R 90", "R 120"],
          ["Comercial, Pública concurrencia, Hospitalario", "R 120 (R 180 si h > 28 m)", "R 90", "R 120", "R 180"],
          ["Aparcamiento exclusivo o sobre otro uso", "R 90", "R 90", "R 90", "R 90"],
          ["Aparcamiento bajo otro uso", "R 120 (R 180 robotizado)", "R 120", "R 120", "R 120"],
        ],
        nota: "Suelo entre sectores: según el uso del sector INFERIOR. Viviendas unifamiliares adosadas: la estructura común, como Residencial Vivienda. Cubierta ligera (≤ 1 kN/m²) no evacuable y a ≤ 28 m: R 30. Escalera o pasillo protegido: R 30; especialmente protegida: sin exigencia. Carpas: R 30."
      },
    ],
    datos: [
      "Art. 11 CTE: objetivo, reducir a límites aceptables el riesgo de que los usuarios sufran daños derivados de un incendio de origen ACCIDENTAL, por las características de su proyecto, construcción, uso y mantenimiento; seis exigencias SI 1 a SI 6.",
      "SI 1 propagación interior · SI 2 propagación exterior · SI 3 evacuación de ocupantes · SI 4 instalaciones de protección · SI 5 intervención de los bomberos · SI 6 resistencia al fuego de la estructura.",
      "Normas de puertas: cierre automático UNE-EN 1154; coordinación de dos hojas UNE-EN 1158; retención electromagnética UNE-EN 1155.",
      "Certificados de productos sin marcado CE: < 5 años (reacción) y < 10 años (resistencia).",
      "Espacios ocultos: continuidad de la compartimentación; si están compartimentados, resistencia reducible a la mitad en los registros de mantenimiento.",
      "Paso de instalaciones: compuerta cortafuegos EI t (i↔o), dispositivo intumescente o elementos pasantes con la misma resistencia; libres las penetraciones ≤ 50 cm².",
      "Campanas de cocina de riesgo especial: 50 cm de materiales no A1; registros cada 3 m en horizontal; conductos EI 30; filtros a 1,20 m (parrilla o gas) o 0,50 m; bandeja de grasas < 3 l; ventiladores F 400 90.",
      "Puertas: abatibles de eje vertical si son salida de planta o de edificio o sirven a más de 50 personas; UNE-EN 179 (manilla o pulsador, usuarios familiarizados) y UNE-EN 1125 (barra horizontal, no familiarizados).",
      "Abren en el sentido de la evacuación: más de 200 personas en Residencial Vivienda o 100 en los demás casos, o más de 50 ocupantes del recinto.",
      "Fuerzas de apertura: giratorias automáticas y correderas ≤ 220 N; abatibles automáticas ≤ 150 N; en itinerario accesible ≤ 25 N (65 N si son resistentes al fuego), aplicadas a 1.000 ± 10 mm de altura.",
      "Señalización: UNE 23034:1988; «SALIDA», «Salida de emergencia», «Sin salida» (nunca sobre las hojas), SIA y «ZONA DE REFUGIO»; fotoluminiscentes UNE 23035-1, -2 y -4, mantenimiento UNE 23035-3.",
      "Control de humo obligatorio: aparcamientos no abiertos; Comercial o Pública concurrencia de más de 1.000 personas; atrios de más de 500 personas. En aparcamiento: 150 l/plaza·s de extracción, aportación máxima 120 l/plaza·s, ventiladores F300 60, conductos E300 60 (EI 60 si cruzan sectores).",
      "Personas con discapacidad: zona de refugio o paso a sector alternativo en Residencial Vivienda h > 28 m; Residencial Público, Administrativo o Docente h > 14 m; Comercial o Pública concurrencia h > 10 m; plantas de Aparcamiento > 1.500 m². Plazas: 1 silla de ruedas por cada 100 ocupantes y 1 de otra movilidad reducida por cada 33 (no en Vivienda).",
      "Compatibilidad de evacuación: Comercial o Pública concurrencia de cualquier superficie y Docente, Hospitalario, Residencial Público o Administrativo de más de 1.500 m² integrados en edificio de otro uso principal: salidas de uso habitual independientes; Pública concurrencia ≤ 500 m² en centros comerciales puede salir a las zonas comunes.",
      "Ascensor de emergencia: 630 kg, cabina 1,10 × 1,40 m (1,20 × 2,10 en Hospitalario), recorrido en menos de 60 s, autonomía de 1 h, uno por cada 1.000 ocupantes.",
      "Sector de riesgo mínimo: ≤ 40 MJ/m² en el sector y ≤ 50 MJ/m² en cada recinto; EI 120; vestíbulos; salidas de edificio directas.",
      "Escalera protegida: EI 120; dos accesos por planta con puertas EI2 60-C5; 15 m en la planta de salida; ventilación de 1 m² por planta o 50 cm²/m³.",
      "Espacio exterior seguro: 0,5P m² en un radio de 0,1P m (no se comprueba con P ≤ 50); 15 m al edificio si no comunica con la red viaria.",
      "Sector bajo rasante: ascendente ≥ 1,5 m. Origen de evacuación: no lo son el interior de las viviendas ni los recintos ≤ 50 m² con densidad ≤ 1 pers/5 m².",
      "Aparcamiento abierto: aberturas de 1/20 de la superficie construida (1/40 entre las paredes opuestas más próximas) y borde superior a ≤ 0,5 m del techo.",
    ],
    excepciones: [
      "El DB-SI NO se aplica a los edificios, establecimientos y zonas de uso industrial sujetos al Reglamento de seguridad contra incendios en los establecimientos industriales: allí las exigencias básicas se cumplen aplicando ese reglamento.",
      "Edificios protegidos: si la aplicación del DB es incompatible con su grado de protección, se admiten soluciones alternativas con la mayor adecuación posible, técnica y económica; las limitaciones de uso constan en la documentación final.",
      "Privación de libertad o limitaciones psíquicas: no se aplican las condiciones incompatibles, sino alternativas técnicamente justificadas.",
      "Asimilaciones: ocupantes que en su mayoría precisan ayuda para evacuar (geriátricos, educación especial) → Hospitalario; sanitario o asistencial ambulatorio → Administrativo; alquiler de trasteros y almacenes → Almacén; áreas de venta con autoabastecimiento → Comercial, no Almacén.",
      "Establecimientos de Docente, Administrativo o Residencial Público de hasta 500 m² en edificios de Residencial Vivienda: no tienen que ser sector diferenciado.",
      "Docente de una única planta: no es preciso compartimentarlo en sectores.",
      "Ascensores entre sectores: no se precisa medida en el sector más alto si el más bajo es de riesgo mínimo o si en este se disponen la puerta EI2 30-C5 del vestíbulo y la E 30 del ascensor.",
      "Cocinas con extinción automática: no son locales de riesgo especial, salvo en Hospitalario y Residencial Público.",
      "Garaje de vivienda unifamiliar: no es uso Aparcamiento (es riesgo especial bajo) y su recorrido hasta una salida de la vivienda no está limitado.",
      "Señal «SALIDA»: no se exige en Residencial Vivienda ni en salidas de recintos ≤ 50 m² fácilmente visibles con ocupantes familiarizados.",
      "Escaleras que comunican sectores pero no superan la altura de las no protegidas: basta con que estén compartimentadas; no tienen que ser protegidas. Residencial Público con menos de 20 plazas: detección y alarma en lugar de escalera protegida.",
      "Escalera especialmente protegida: sin vestíbulo si es abierta al exterior o en la planta de salida en evacuación ascendente; su estructura no tiene exigencia de resistencia al fuego.",
      "Elementos estructurales secundarios cuyo colapso no afecta a ocupantes, estabilidad, evacuación ni compartimentación (pequeñas entreplantas, suelos o escaleras ligeras): sin exigencia de resistencia al fuego.",
      "Aparcamientos robotizados: sin ocupación ni condiciones de evacuación del DB, pero con medios de escape para el personal de mantenimiento; detección con pulsadores y extinción automática en todo caso.",
    ],
  },
};
