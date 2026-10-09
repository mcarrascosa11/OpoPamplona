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
        "Cambio de uso parcial: afecta a la parte modificada y a los medios de evacuación que la sirvan, aunque estén fuera de ella",
        "Reforma: nunca puede rebajar condiciones preexistentes inferiores al DB; si altera ocupación o distribución, afecta también a elementos de evacuación"
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
          ["Comercial / Pública Concurrencia / Hospitalario", "EI 120", "EI 90", "EI 120", "EI 180"],
          ["Aparcamiento", "EI 120", "EI 120", "EI 120", "EI 120"],
          ["Puerta entre sectores", "EI2 t-C5", "t = ½ pared", "Con vestíbulo y 2 puertas: t = ¼", ""],
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
        "Una sola salida de planta: no se admite en Hospitalario (hospitalización/intensivo >90 m²); ocupación ≤100 pers (≤500 en edificio de viviendas; ≤50 si evacuación ascendente >2 m; ≤50 alumnos infantil/primaria/secundaria)",
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
        "Tabla 5.1: no protegidas admitidas hasta h≤14 m (Vivienda, Admin, Docente), h≤10 m (Comercial, Pública concurrencia); no admitidas en Aparcamiento ni hospitalización/intensivo; protegidas hasta h≤28 m (Vivienda, Admin, Docente, Residencial Público), h≤20 m (Comercial, Pública concurrencia, Hospitalario otras), h≤14 m (hospitalización/intensivo); especialmente protegidas admitidas en todo caso",
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
        "Bocas incendio equipadas: riesgo especial alto por sólidos; Admin >2.000 m²; Residencial Público >1.000 m² o >50 plazas; Docente >2.000 m²; Comercial >500 m²; Pública concurrencia >500 m²; Aparcamiento >500 m² (excluidos robotizados); Hospitalario en todo caso; tipo 25 mm (Vivienda) o 45 mm (resto, salvo indicación)",
        "Columna seca: Vivienda/Admin/Docente/Comercial/Pública concurrencia si h>24 m; Hospitalario si h>15 m; Aparcamiento si >3 plantas bajo rasante o >4 sobre rasante; sustituible por bie en algunos casos según municipio",
        "Sistema alarma: Admin/Docente >1.000 m²; Residencial Público >500 m²; Pública concurrencia >500 pers (con megafonía); señales visuales + acústicas; visuales perceptibles en viviendas accesibles para discapacitados auditivos",
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
          ["Comercial / Pública Concurrencia / Hospitalario", "R 120", "R 90", "R 120", "R 180"],
          ["Aparcamiento exclusivo o sobre otro uso", "", "R 90", "R 90", "R 90"],
          ["Aparcamiento bajo otro uso", "", "R 120", "R 120", "R 120 (R 180 robotizado)"],
        ]},
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
    "Refugio discapacitados: 1 silla de ruedas/100 ocupantes; 1 otra discapacidad/33 ocupantes (excepto Vivienda)"
  ],
};
