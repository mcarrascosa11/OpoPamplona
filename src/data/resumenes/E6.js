// Resumen del tema E6. Formato: cabecera de src/data/resumenes.js.
// Revisado el 01-11-2026 contra temas/E_Tema06.txt (DB-SUA consolidado de 14-06-2022: RD 732/2019 y
// RD 450/2022), que es el texto vigente el 21-05-2026: no hay modificaciones del DB-SUA entre 2022 y la
// convocatoria. Alcance oficial de E6: Introducción; SUA 1 a SUA 7; SUA 9; anejo A. La SUA 8 (rayo) NO entra:
// su bloque se conserva marcado como fuera del alcance. Correcciones: escalón aislado (zonas comunes de
// Residencial Vivienda y estrado o escenario), tabla 4.1 de escaleras (Residencial Vivienda 1,00 m, no
// 0,80 m), ascensor en Residencial Vivienda («o rampa accesible»), alojamientos accesibles (más de 250),
// áreas de riesgo de impacto (0,30 m a cada lado), acristalamientos (solo Residencial Vivienda) e itinerario
// accesible (1,10 m en zonas comunes de Residencial Vivienda). Añadidos: Introducción, anejo A y memorización.
export default {
    intro:
      "El DB-SUA del CTE establece las exigencias de seguridad de utilización y accesibilidad en edificios y establecimientos. Se estructura en 9 secciones (SUA 1 a SUA 9) que cubren riesgos de caídas, impacto, aprisionamiento, iluminación, alta ocupación, ahogamiento, vehículos, rayo y accesibilidad. Es aplicable a obras de edificación, incluyendo instalaciones fijas, equipamiento propio y elementos de urbanización adscritos. En edificios existentes se admiten soluciones alternativas si no son viables las del DB. Texto vigente: el consolidado de 14-06-2022 (RD 732/2019 y RD 450/2022), sin cambios hasta el 21-05-2026. Para la convocatoria entran la Introducción, SUA 1 a SUA 7, SUA 9 y el anejo A (terminología): la SUA 8 (rayo) no se estudia.",
    bloques: [
      {
        h: "Introducción — objeto, ámbito y criterios generales de aplicación",
        nota:
          "Muy útil para la ventanilla de licencias: cómo se aplica el DB a reformas, ampliaciones y cambios de uso. La clave es que la reforma aplica el DB a lo que se modifica «siempre que ello suponga una mayor adecuación» y que nunca puede empeorar lo existente.",
        items: [
          "Objeto: cada Sección SUA 1 a SUA 9 se corresponde con una exigencia básica del art. 12 de la Parte I del CTE; aplicar bien el conjunto del DB supone satisfacer el requisito básico «Seguridad de utilización y accesibilidad»",
          "Ámbito: el general del CTE (art. 2 de la Parte I); las obras de edificación, con sus instalaciones fijas, el equipamiento propio y los elementos de urbanización adscritos al edificio (art. 2.3 LOE); las exigencias para edificios se aplican igual a los establecimientos",
          "Fuera del DB (reglamentación específica): riesgos de las instalaciones de los edificios, de las actividades laborales, de las zonas reservadas a personal de mantenimiento y de los elementos singulares de las infraestructuras del transporte (andenes, pasarelas, pasos inferiores), y la accesibilidad de estos últimos",
          "Soluciones alternativas: por el procedimiento del art. 5 del CTE; en obras en edificios existentes, si las condiciones del DB no son técnica o económicamente viables o son incompatibles con su grado de protección, se aplican las que permitan la mayor adecuación posible, dejando constancia en la documentación final de las limitaciones al uso",
          "Uso no definido en el anejo A: cumple las condiciones del uso al que mejor pueda asimilarse",
          "Cambio de uso de parte del edificio o ampliación: el DB se aplica a esa parte, con al menos un itinerario accesible que la comunique con la vía pública cuando lo exija la SUA 9",
          "Reforma manteniendo el uso: el DB se aplica a los elementos modificados, siempre que ello suponga una mayor adecuación; en todo caso, la reforma no puede menoscabar las condiciones preexistentes cuando sean menos estrictas que las del DB",
          "Normas UNE: la versión citada aunque haya otra posterior, salvo las armonizadas (Reglamento UE 305/2011); disposiciones reglamentarias: la versión vigente al aplicar el DB",
        ],
      },
      {
        h: "SUA 1 — Seguridad frente al riesgo de caídas",
        nota:
          "Apartado muy denso en cifras y uno de los más preguntados. La relación 2C + H = 54-70 cm es clave para escaleras. Las rampas de itinerarios accesibles tienen pendientes máximas decrecientes (10%, 8%, 6%) según longitud. Ojo: la clase de resbaladicidad 3 es la máxima, no la mínima. Las barreras de protección son obligatorias a partir de 55 cm de desnivel, no de 50 cm. La resbaladicidad no se exige en Residencial Vivienda.",
        items: [
          "Resbaladicidad: solo en usos Residencial Público, Sanitario, Docente, Comercial, Administrativo y Pública Concurrencia, excluidas las zonas de ocupación nula; Rd = valor PTV del ensayo del péndulo (UNE 41901:2017 EX); la clase se mantiene durante la vida útil",
          "Resbaladicidad suelos: clase 0 (Rd≤15) · 1 (15-35) · 2 (35-45) · 3 (>45); exigibles clase 1 (interior seco, pendiente <6%), 2 (interior seco ≥6% y escaleras, o húmedo <6%), 3 (interior húmedo ≥6% y escaleras, zonas exteriores, piscinas y duchas)",
          "Zonas húmedas: entradas desde el exterior (salvo accesos directos a zonas de uso restringido), terrazas cubiertas, vestuarios, baños, aseos, cocinas; piscinas: zonas para usuarios descalzos y fondo de vasos de profundidad ≤1,50 m",
          "Discontinuidades (salvo uso restringido o exteriores): juntas con resalto máximo 4 mm; elementos salientes puntuales máximo 12 mm (si >6 mm, ángulo ≤45º con pavimento)",
          "Desniveles ≤5 cm: pendiente máxima 25%",
          "Zonas circulación: no perforaciones por las que pase una esfera de 1,5 cm; barreras para delimitar zonas de circulación ≥80 cm",
          "Escalón aislado o dos consecutivos en zonas de circulación: prohibidos salvo en zonas de uso restringido, zonas comunes de Residencial Vivienda, accesos y salidas de los edificios y acceso a un estrado o escenario; nunca en el itinerario accesible",
          "Barreras protección obligatorias: desnivel >55 cm (salvo que la disposición constructiva haga muy improbable la caída o la barrera sea incompatible con el uso)",
          "Desniveles ≤55 cm en zonas de uso público: diferenciación visual y táctil que empieza a 25 cm del borde, como mínimo",
          "Altura barreras: 0,90 m si desnivel ≤6 m; 1,10 m si >6 m; 0,90 m en huecos escaleras <40 cm anchura; medida desde el suelo o la línea de inclinación de la escalera",
          "Resistencia de las barreras: la fuerza horizontal del apartado 3.2.1 del DB SE-AE",
          "Barreras no escalables (cualquier zona de Residencial Vivienda o escuelas infantiles y zonas de uso público de Comercial o Pública Concurrencia): sin puntos de apoyo (salientes >5 cm) entre 30 y 50 cm ni salientes de más de 15 cm de fondo entre 50 y 80 cm; aberturas que no atraviese una esfera de 10 cm (salvo triángulos huella-contrahuella si distancia ≤5 cm)",
          "Barreras en zonas de uso público de otros usos: solo la condición de aberturas, con esfera de 15 cm",
          "Barreras delante de asientos fijos: altura reducible a 70 cm con elemento horizontal de ≥50 cm de anchura a ≥50 cm de altura; resisten 3 kN/m horizontal + 1,0 kN/m vertical",
          "Escaleras uso restringido: anchura ≥0,80 m; contrahuella ≤20 cm; huella ≥22 cm; curvas: huella en el eje (anchura <1 m) o a 50 cm del lado estrecho, ≥5 cm en el lado estrecho y ≤44 cm en el ancho; mesetas partidas con peldaños a 45º y escalones sin tabica permitidos (superposición ≥2,5 cm); barandilla en lados abiertos",
          "Escaleras uso general: huella ≥28 cm; contrahuella 13-18,5 cm (≤17,5 cm en uso público o sin ascensor); relación 54 ≤ 2C + H ≤ 70 cm; NO bocel; tabicas verticales o ≤15º con la vertical en evacuación ascendente o sin itinerario accesible alternativo",
          "Escaleras curvas: huella ≥28 cm a 50 cm del borde interior; ≤44 cm en el exterior; misma contrahuella en toda la escalera entre dos plantas (variación ≤1 cm entre tramos de plantas diferentes)",
          "Tramos escaleras uso general: ≥3 peldaños; altura máxima 2,25 m (uso público/sin ascensor) o 3,20 m (resto); solo tramos rectos en hospitalización y tratamientos intensivos, escuelas infantiles y primaria/secundaria",
          "Anchura útil escaleras: según evacuación (SI 3) y como mínimo la tabla 4.1: Residencial Vivienda (incluida la escalera al aparcamiento) 1,00 m; Sanitario 1,40 m en zonas de pacientes con giros ≥90º y 1,20 m en otras zonas; en el resto, anchura creciente con el número de personas (0,80 m hasta 25 y 0,90 m hasta 50, salvo 1,00 m si comunica con zona accesible). La tabla del TXT está descolocada: no memorizar más columnas que estas",
          "Anchura útil: libre de obstáculos, entre paredes o barreras, sin descontar pasamanos que sobresalgan ≤12 cm; en curvas se excluye la zona con huella <17 cm",
          "Mesetas escaleras: misma anchura que escalera + longitud ≥1 m (eje); si cambio dirección, anchura no se reduce y no barren puertas (salvo ocupación nula); en hospitalización con giro 180º ≥1,60 m; en uso público franja visual/táctil en el arranque y sin pasillos <1,20 m ni puertas a <40 cm del primer peldaño",
          "Pasamanos escaleras: ≥1 lado si salva >55 cm; ambos lados si anchura >1,20 m o sin ascensor; intermedios si anchura >4 m (separación ≤4 m; en escalinatas monumentales, al menos uno); altura 90-110 cm (otro a 65-75 cm en escuelas infantiles y primaria); prolongación 30 cm en uso público o sin ascensor (al menos un lado); en Sanitario continuo y prolongado en ambos lados; separado ≥4 cm del paramento",
          "Rampas: más del 4% = rampa; pendiente ≤12% (≤10% si <3 m accesible, ≤8% si <6 m, ≤6% resto accesibles; ≤16% aparcamientos vehículos+peatones no accesibles); pendiente transversal accesibles ≤2%",
          "Tramos rampas: longitud ≤15 m (≤9 m accesibles; sin límite en aparcamientos de vehículos y personas); anchura mínima según tabla 4.1 escaleras; si accesible: rectas o radio ≥30 m, anchura ≥1,20 m, superficie horizontal 1,20 m al inicio/final",
          "Mesetas rampas: anchura rampa + longitud ≥1,50 m (eje); si cambio dirección, anchura no se reduce; sin pasillos <1,20 m ni puertas a <40 cm del arranque (≥1,50 m si accesible)",
          "Pasamanos rampas: ≥1 lado si salva >550 mm y pendiente ≥6%; ambos lados y continuo si accesible, pendiente ≥6% y salva >18,5 cm; zócalo lateral ≥10 cm si accesible; altura 90-110 cm (otro a 65-75 cm en infantiles/primaria y accesibles); prolongación 30 cm si accesible y tramo >3 m",
          "Pasillos escalonados en graderíos: contrahuella constante; huellas de dos dimensiones alternas para acceder a nivel a las filas",
          "Acristalamientos en Residencial Vivienda a más de 6 m sobre la rasante y con vidrio transparente (salvo practicables o fácilmente desmontables): toda la superficie exterior en un radio de 0,85 m desde un punto del borde practicable a ≤1,30 m de altura; los reversibles, con bloqueo en posición invertida",
        ],
      },
      {
        h: "SUA 2 — Impacto y atrapamiento",
        nota:
          "Preguntas frecuentes sobre altura libre de paso (2,20 m general, 2,10 m restringido), vidrios de seguridad X(Y)Z según UNE-EN 12600 y disposición de puertas en pasillos estrechos. Ojo: en pasillos <2,50 m las puertas laterales deben abrir para que el barrido NO invada el pasillo.",
        items: [
          "Altura libre paso: ≥2,10 m (uso restringido) · ≥2,20 m (resto); umbrales puertas ≥2 m",
          "Elementos fijos que sobresalgan de fachadas sobre zonas de circulación: ≥2,20 m",
          "Paredes circulación: sin salientes que no arranquen del suelo, volando >15 cm en zona 15 cm – 2,20 m",
          "Elementos volados de altura <2 m (mesetas o tramos de escalera o rampa): elementos fijos que restrinjan el acceso y sean detectables por bastón",
          "Puertas laterales de recintos (no de ocupación nula) en pasillos <2,50 m: barrido NO invade pasillo (salvo uso restringido); en >2,50 m no invade la anchura de evacuación (SI 3)",
          "Puertas vaivén entre circulaciones: partes transparentes/translúcidas entre 0,7-1,5 m",
          "Puertas industriales, comerciales, de garaje, portones y puertas peatonales automáticas: reglamentación específica + marcado CE",
          "Vidrios en áreas de riesgo de impacto sin barrera de protección (UNE-EN 12600:2003): puertas (suelo-1,50 m, anchura de la puerta + 0,30 m a cada lado) y paños fijos (suelo-0,90 m); excluidos los vidrios de mayor dimensión ≤30 cm",
          "Parámetros X(Y)Z según diferencia de cota a ambos lados: >12 m: X cualquiera, Y B o C, Z 1; 0,55-12 m: X cualquiera, Y B o C, Z 1 ó 2; <0,55 m: X 1, 2 ó 3, Y B o C, Z cualquiera",
          "Vidrios puertas y duchas/bañeras: laminados o templados resistiendo impacto nivel 3",
          "Grandes superficies acristaladas confundibles con puertas (excluido el interior de viviendas): señalización visual contrastada a 0,85-1,10 m y 1,50-1,70 m (salvo montantes ≤0,60 m o travesaño a la altura inferior); también puertas de vidrio sin cercos ni tiradores",
          "Atrapamiento puertas correderas manuales: distancia a fijo más próximo ≥20 cm",
          "Apertura/cierre automáticos: dispositivos protección según tipo",
        ],
      },
      {
        h: "SUA 3 — Aprisionamiento",
        nota:
          "Poco voluminoso pero con cifras exactas. La fuerza de apertura de puertas de salida es 140 N máximo (25 N general en accesibles, 65 N si son resistentes al fuego). Los aseos/vestuarios accesibles en uso público deben tener llamada de asistencia.",
        items: [
          "Puertas con bloqueo interior: sistema desbloqueo desde exterior si personas pueden quedar atrapadas",
          "Iluminación controlada desde interior (excepto baños/aseos de viviendas)",
          "Aseos/vestuarios accesibles en uso público: dispositivo llamada asistencia interior, perceptible desde control o paso frecuente, con confirmación recepción",
          "Fuerza apertura puertas salida: ≤140 N (≤25 N accesibles general; ≤65 N accesibles resistentes al fuego)",
          "Maniobra puertas batientes/pivotantes/deslizantes con pestillos media vuelta: método ensayo UNE-EN 12046-2:2000",
        ],
      },
      {
        h: "SUA 4 — Iluminación inadecuada",
        nota:
          "Trampa común: confundir lux de alumbrado normal con lux de emergencia. Normal: 20 exterior, 100 interior, 50 aparcamiento. Emergencia: 1 lux en eje central vías ≤2 m, 5 lux en equipos de seguridad. El alumbrado de emergencia debe alcanzar 50% a los 5 s y 100% a los 60 s. Señales de seguridad: luminancia color ≥2 cd/m².",
        items: [
          "Alumbrado normal (medido a nivel del suelo): ≥20 lux (exterior) · ≥100 lux (interior) · ≥50 lux (aparcamientos interiores); uniformidad media ≥40%",
          "Balizamiento: en Pública Concurrencia con nivel bajo de iluminación (cines, teatros, auditorios, discotecas…), en rampas y en cada peldaño de escaleras",
          "Alumbrado emergencia: instalación fija con fuente propia de energía; entra automáticamente si tensión <70% nominal",
          "Zonas con emergencia: recintos con ocupación >100 pers; recorridos de evacuación hasta exterior seguro y zonas de refugio; aparcamientos cerrados o cubiertos >100 m² construidos (con pasillos y escaleras); locales de equipos generales de protección contra incendios y de riesgo especial; aseos generales de planta en edificios de uso público; cuadros de distribución o accionamiento del alumbrado; señales de seguridad; itinerarios accesibles",
          "Luminarias emergencia: situadas ≥2 m altura; en cada puerta de salida y puntos de peligro/equipos; como mínimo en puertas de recorridos de evacuación, escaleras (cada tramo iluminado directamente), cambios de nivel, cambios de dirección e intersecciones",
          "Emergencia vías evacuación ≤2 m: ≥1 lux eje central, ≥0,5 lux banda central (mitad anchura); >2 m → bandas de 2 m máximo",
          "Emergencia equipos seguridad, protección incendios manual, cuadros: ≥5 lux",
          "Relación iluminancia máx/mín en eje central: ≤40:1; niveles con reflexión nula en paredes y techos y factor de mantenimiento",
          "Tiempo respuesta: ≥50% a los 5 s, 100% a los 60 s",
          "Autonomía: 1 hora mínimo",
          "Índice rendimiento cromático Ra: ≥40",
          "Señales evacuación: luminancia color seguridad ≥2 cd/m²; relación max/min dentro color ≤10:1; relación Lblanca/Lcolor >10 entre 5:1 y 15:1; 50% a 5 s, 100% a 60 s",
        ],
      },
      {
        h: "SUA 5 — Alta ocupación",
        nota:
          "Aplicable solo a graderíos para >3.000 espectadores de pie. La densidad de ocupación es 4 pers/m² (del DB-SI). Las barreras rompeolas son obligatorias en graderíos >5 filas y pendiente >6%.",
        items: [
          "Ámbito: graderíos de estadios, pabellones polideportivos, centros de reunión y otros de uso cultural previstos para >3.000 espectadores de pie (4 pers/m²); evacuación según SI 3",
          "Pendiente graderío: ≤50%",
          "Longitud fila: ≤20 m (accesos en ambos extremos); ≤10 m (acceso en un extremo)",
          "Diferencia cota fila-salida graderío: ≤4 m",
          "Barreras rompeolas: >5 filas y pendiente >6% → barrera 1,10 m delante primera fila + adicionales según pendiente: 6-10% cada 5 m; 10-25% cada 4 m; 25-50% cada 3 m",
          "Barreras: resisten fuerza horizontal 5,0 kN/m en borde superior",
          "Aberturas barreras: ≤2 alineadas en filas sucesivas; ángulo <60º con barreras; anchura 1,10-1,40 m",
        ],
      },
      {
        h: "SUA 6 — Ahogamiento",
        nota:
          "Aplicable a piscinas de uso colectivo (no competición/enseñanza exclusiva, no unifamiliares, no médicas). Las piscinas infantiles tienen restricciones específicas (50 cm profundidad máxima, sin escaleras).",
        items: [
          "Ámbito: piscinas uso colectivo; excluidas competición/enseñanza exclusiva, unifamiliares, baños termales, hidroterapia y usos exclusivamente médicos",
          "Barreras protección: si acceso niños no controlado → barreras 1,20 m, resisten 0,5 kN/m, cumplen SUA 1.3.2.3; acceso solo por puntos con cierre/bloqueo",
          "Profundidad piscinas infantiles: ≤50 cm",
          "Profundidad resto piscinas: ≤3 m; zonas <1,40 m; señalización puntos >1,40 m y valores max/min (rótulos en paredes del vaso y andén)",
          "Cambios profundidad: infantiles ≤6%; recreo/polivalentes ≤10% hasta 1,40 m y ≤35% resto",
          "Huecos vaso: rejas/dispositivo anti-atrapamiento",
          "Materiales fondo ≤1,50 m: clase 3 resbaladicidad",
          "Revestimiento interior: color claro",
          "Andén/playa: clase 3 resbaladicidad; anchura ≥1,20 m; evita encharcamiento",
          "Escaleras (excepto infantiles): profundidad ≥1 m bajo agua o hasta 30 cm sobre el suelo del vaso; cerca de ángulos y cambios pendiente; ≤15 m entre escaleras; peldaños antideslizantes, sin aristas vivas, no sobresalen del plano pared",
          "Pozos/depósitos accesibles: tapas/rejillas con rigidez/resistencia + cierres anti-apertura no autorizada",
        ],
      },
      {
        h: "SUA 7 — Vehículos en movimiento",
        nota:
          "Aplicable a zonas de uso Aparcamiento (por definición del anejo A, >100 m² construidos; excluidos los garajes de vivienda unifamiliar y, del DB, los aparcamientos robotizados) y vías de circulación de vehículos en edificios. Velocidad máxima señalizada: 20 km/h. Si >200 vehículos o >5.000 m², los itinerarios peatonales deben estar diferenciados.",
        items: [
          "Ámbito: uso Aparcamiento (>100 m², no garajes unifamiliares) y vías circulación vehículos en edificios",
          "Espacio acceso/espera en la incorporación al exterior: profundidad ≥4,5 m; pendiente ≤5%",
          "Recorridos peatonales por rampa vehículos (salvo solo de emergencia): anchura ≥80 cm; protección barrera ≥80 cm o pavimento nivel superior (desnivel según SUA 1.3.1)",
          "Plantas de aparcamiento >200 vehículos o >5.000 m²: itinerarios peatonales de zonas de uso público diferenciados (pavimento con pinturas/relieve o nivel superior); si desnivel >55 cm → barrera SUA 1.3.2",
          "Protección frente a puertas de comunicación (en esos aparcamientos): barreras a ≥1,20 m de la puerta, altura ≥80 cm",
          "Señalización (código de la circulación): sentido circulación y salidas, velocidad máxima 20 km/h, zonas de tránsito y paso de peatones; gálibos/alturas si acceso transporte pesado; zonas almacenamiento/carga-descarga delimitadas",
          "Accesos de vehículos a viales exteriores desde uso Aparcamiento: dispositivos que alerten al conductor de la presencia de peatones",
        ],
      },
      {
        h: "SUA 8 — Protección contra el rayo (FUERA DEL ALCANCE de la convocatoria)",
        nota:
          "No se estudia: el alcance oficial de E6 es Introducción, SUA 1 a SUA 7, SUA 9 y anejo A. Se conserva solo como referencia. Fórmulas clave: Ne = Ng·Ae·C1·10⁻⁶; Na = 5,5·10⁻³/(C2·C3·C4·C5); E = 1 - Na/Ne. Instalación obligatoria si Ne > Na, o siempre en edificios >43 m o con sustancias tóxicas/inflamables/explosivas (eficiencia E ≥ 0,98). El nivel de protección 1 corresponde a E > 0,98.",
        items: [
          "Obligatoriedad: Ne > Na; o SIEMPRE si >43 m o sustancias tóxicas/radioactivas/inflamables/explosivas (E ≥ 0,98)",
          "Ne = Ng · Ae · C1 · 10⁻⁶ [impactos/año]; Ng = densidad impactos terreno (mapa); Ae = superficie captura equivalente (perímetro + 3H); C1 = entorno (0,5 mismo altura/más alto · 0,75 más bajos · 1 aislado · 2 colina)",
          "Na = 5,5·10⁻³ / (C2·C3·C4·C5)",
          "C2: tipo construcción (0,5-3 según cubierta/estructura); C3: contenido (3 inflamable · 1 resto); C4: uso (0,5 no ocupado · 3 pública concurrencia/sanitario/comercial/docente · 1 resto); C5: continuidad servicio (5 esencial/impacto ambiental · 1 resto)",
          "Eficiencia E = 1 - Na/Ne",
          "Nivel protección 1: E > 0,98 · Nivel 2: 0,95 < E < 0,98 · Nivel 3: 0,80 < E < 0,95 · Nivel 4: 0 < E < 0,80 (instalación no obligatoria)",
        ],
      },
      {
        h: "SUA 9 — Accesibilidad",
        nota:
          "Sección muy extensa y con muchos números. En el examen suelen preguntar cuándo es obligatorio el ascensor accesible, cuántas plazas de aparcamiento accesibles o reservadas, y las dimensiones del itinerario accesible (1,20 m anchura, 1,50 m giro). Ojo: en las zonas comunes de Residencial Vivienda la anchura de pasillos del itinerario accesible es 1,10 m (no 1,20 m), igual que dentro de la vivienda accesible. Las plazas reservadas para auditivas son 1 por cada 50 plazas si la actividad tiene componente auditiva y hay >50 asientos.",
        items: [
          "Dentro de las viviendas (incluidas unifamiliares y sus zonas exteriores privativas) la accesibilidad solo se exige en las que deban ser accesibles",
          "Exterior: la parcela tendrá al menos un itinerario accesible que comunique una entrada principal (en conjuntos de unifamiliares, la entrada a la zona privativa de cada vivienda) con la vía pública y las zonas comunes exteriores",
          "Itinerario accesible: desniveles por rampa accesible o ascensor; NO escalones; giro Ø1,50 m libre (vestíbulo o portal, fondo de pasillos >10 m y frente a ascensores); pasillos ≥1,20 m (1,10 m en zonas comunes de Residencial Vivienda); estrechamientos puntuales ≥1,00 m y ≤0,50 m longitud; puertas ≥0,80 m (≥0,78 m en ángulo apertura); mecanismos 0,80-1,20 m; fuerza ≤25 N (≤65 N resistentes fuego); pendiente ≤4% o rampa accesible; trasversal ≤2%",
          "Ascensor accesible o rampa accesible obligatorio (Residencial Vivienda): >2 plantas desde entrada principal accesible hasta vivienda/zona comunitaria, o >12 viviendas en plantas sin entrada principal accesible; en el resto de casos, previsión dimensional y estructural del ascensor",
          "Plantas con viviendas accesibles para silla de ruedas: ascensor o rampa accesible hasta las plantas de entrada accesible y las de sus elementos asociados (trastero, plaza de aparcamiento, sala de comunidad, tendedero…)",
          "Ascensor accesible o rampa accesible obligatorio (otros usos): >2 plantas desde entrada hasta planta no ocupación nula, o >200 m² útiles (excluida ocupación nula) en plantas sin entrada accesible; también las plantas con >100 m² útiles de uso público o con elementos accesibles",
          "Itinerario accesible en cada planta: en Residencial Vivienda, del acceso accesible a viviendas, zonas comunitarias y elementos asociados a viviendas accesibles; en otros usos, a zonas de uso público, todo origen de evacuación (salvo ocupación nula) y elementos accesibles",
          "Viviendas accesibles (silla de ruedas y discapacidad auditiva): el número que fije la reglamentación aplicable",
          "Alojamientos accesibles (Residencial Público): 1 (5-50) · 2 (51-100) · 4 (101-150) · 6 (151-200) · más de 200: 8, y uno más cada 50 alojamientos o fracción adicionales a 250",
          "Plazas aparcamiento accesibles: Residencial Vivienda con aparcamiento propio, 1 por vivienda accesible silla ruedas; otros usos con aparcamiento propio >100 m² construidos: Residencial Público, 1 por alojamiento accesible; Comercial, Pública Concurrencia o aparcamiento de uso público, 1 cada 33 o fracción; otros, 1 cada 50 o fracción hasta 200 y 1 más cada 100 adicionales; en todo caso ≥1 por cada plaza reservada silla ruedas",
          "Plazas reservadas (asientos fijos): 1 silla ruedas cada 100 plazas o fracción; 1 auditiva cada 50 plazas si actividad con componente auditiva y >50 asientos; zonas espera asientos fijos: 1 silla ruedas cada 100",
          "Piscinas: entrada al vaso con grúa o elemento adaptado (excepto infantiles) en piscinas abiertas al público, de Residencial Público con alojamientos accesibles y de edificios con viviendas accesibles silla ruedas",
          "Mobiliario fijo de atención al público: al menos 1 punto de atención accesible, o como alternativa un punto de llamada accesible",
          "Servicios higiénicos accesibles (cuando una disposición exija aseos o vestuarios): 1 aseo accesible cada 10 inodoros o fracción (puede ser compartido por ambos sexos); en cada vestuario: 1 cabina + 1 aseo + 1 ducha accesibles cada 10 unidades o fracción (si no hay cabinas individuales, al menos 1 cabina accesible)",
          "Mecanismos accesibles: interruptores, intercomunicadores, pulsadores alarma (excepto interior viviendas y ocupación nula); altura 0,80-1,20 m; tomas corriente/señal 0,40-1,20 m; ≥35 cm a rincones; contraste cromático; NO interruptores giro/palanca; NO temporización en aseos/vestuarios accesibles",
          "Señalización: SIA (Símbolo Internacional Accesibilidad, UNE 41501:2002) para entradas, itinerarios, plazas aparcamiento y servicios higiénicos accesibles, con flecha direccional en su caso; ascensores accesibles: SIA + Braille y arábigo alto relieve 0,80-1,20 m en jamba derecha en sentido salida; servicios generales: pictogramas sexo alto relieve y contraste 0,80-1,20 m, a la derecha de la puerta",
          "Bandas visuales/táctiles: color contrastado; relieve 3±1 mm interior, 5±1 mm exterior; arranque escaleras: 80 cm longitud, anchura itinerario, acanaladuras perpendiculares; itinerario accesible a punto llamada/atención: acanaladura paralela marcha, 40 cm anchura",
          "La señalización de los medios de evacuación para personas con discapacidad en incendio se regula en DB SI 3-7",
        ],
      },
      {
        h: "Anejo A — Terminología (lo más preguntable)",
        nota:
          "Las definiciones del anejo A son las que dan el contenido real a la SUA 9: itinerario accesible, ascensor accesible, plazas accesibles o reservadas y vivienda accesible. También definen los usos a efectos del DB, con dos matices propios frente al DB-SI: consultorios, análisis clínicos y ambulatorios son Sanitario, no Administrativo, y el uso Aparcamiento empieza en 100 m² construidos.",
        items: [
          "Uso restringido: zonas o elementos de circulación limitados a un máximo de 10 personas usuarios habituales, incluido el interior de las viviendas y de los alojamientos de Residencial Público, pero excluidas las zonas comunes de los edificios de viviendas; uso general: lo que no es uso restringido",
          "Uso público: zonas susceptibles de ser utilizadas por el público en general, personas no familiarizadas con el edificio; uso privado: lo que no es de uso público (en Residencial Vivienda, todas las zonas); ambos independientes de la titularidad",
          "Usos: Residencial Vivienda (alojamiento permanente); Residencial Público (alojamiento temporal regentado por un titular distinto de los ocupantes: hoteles, hostales, residencias, pensiones, apartamentos turísticos); Pública Concurrencia (cultural, religioso y transporte de personas); Comercial (incluye por asimilación lavanderías y peluquerías)",
          "Uso Aparcamiento: estacionamiento de vehículos con superficie construida >100 m² (incluidas revisiones sin riesgo adicional); se excluyen los garajes de una vivienda unifamiliar y, del ámbito del DB-SUA, los aparcamientos robotizados",
          "Ascensor accesible: UNE-EN 81-70:2004; botonera con Braille y alto relieve contrastados; en grupos, llamada individual; cabina mínima 1,00 × 1,25 m o 1,10 × 1,40 m según el edificio (1,40 × 1,40 m con dos puertas en ángulo)",
          "Plaza de aparcamiento accesible: próxima al acceso peatonal y comunicada por itinerario accesible; espacio de aproximación lateral ≥1,20 m en batería (compartible por dos plazas) o trasero ≥3,00 m en línea; si tiene recarga de vehículo eléctrico, el itinerario llega hasta ella y tomas a 80-120 cm",
          "Plaza reservada silla de ruedas: próxima al acceso y salida; 0,80 × 1,20 m (aproximación frontal) o 0,80 × 1,50 m (lateral); asiento anejo para acompañante. Plaza para discapacidad auditiva: bucle de inducción u otro sistema",
          "Punto de atención accesible: plano de trabajo ≥0,80 m de ancho a ≤0,85 m de altura, hueco inferior ≥70 × 80 × 50 cm; bucle de inducción si hay intercomunicador. Punto de llamada accesible: intercomunicador con mecanismo accesible y comunicación bidireccional con personas con discapacidad auditiva",
          "Aseo accesible: giro Ø1,50 m; puertas abatibles hacia el exterior o correderas; lavabo sin pedestal con hueco 70 × 50 cm y ≤85 cm; inodoro con transferencia lateral ≥80 cm (ambos lados en uso público) y asiento a 45-50 cm; barras horizontales a 70-75 cm, ≥70 cm de longitud, abatibles en el lado de transferencia; espejo ≤0,90 m",
          "Vivienda accesible silla de ruedas: sin escalones; pasillos ≥1,10 m; giro Ø1,50 m en vestíbulo, estancia principal, todos los dormitorios, cocina y al menos un baño; 0,90 m a un lado y a los pies de la cama; encimera ≤85 cm; terraza con giro Ø1,20 m y resalto ≤5 cm",
          "Alojamiento accesible: cumple lo aplicable de las viviendas accesibles para silla de ruedas y discapacidad auditiva y tiene alarma con señales visuales visibles desde todo punto interior, incluido el aseo",
        ],
      },
    ],
    claves: [
      "DB-SUA: 9 secciones (SUA 1 caídas a SUA 9 accesibilidad); para la convocatoria no entra la SUA 8 (rayo)",
      "Reforma con el mismo uso: el DB se aplica a lo modificado si supone mayor adecuación y nunca puede empeorar lo existente",
      "Clase resbaladicidad 3 = máxima (no mínima); clase 1 = interiores secos pendiente <6%; no se exige en Residencial Vivienda",
      "Barreras protección obligatorias: desnivel >55 cm; altura 0,90 m (≤6 m) o 1,10 m (>6 m)",
      "Escaleras uso general: 54 ≤ 2C + H ≤ 70; huella ≥28 cm; contrahuella 13-18,5 cm (≤17,5 cm uso público/sin ascensor)",
      "Escaleras uso restringido: anchura ≥0,80 m; contrahuella ≤20 cm; huella ≥22 cm",
      "Rampas accesibles: ≤10% (<3 m), ≤8% (<6 m), ≤6% (resto); pendiente transversal ≤2%; tramos ≤9 m",
      "Pasamanos: 90-110 cm (65-75 cm infantiles/accesibles); prolongación 30 cm",
      "SUA 2: altura libre ≥2,20 m (2,10 m restringido; 2 m umbrales); puertas laterales pasillos <2,50 m → barrido NO invade pasillo",
      "Vidrios riesgo impacto: UNE-EN 12600; puertas duchas/bañeras: nivel 3",
      "SUA 3: fuerza apertura ≤140 N (≤25 N accesibles; ≤65 N accesibles resistentes fuego)",
      "SUA 4: normal 20/100/50 lux; emergencia 1 lux eje vías, 5 lux equipos; 50% a 5 s, 100% a 60 s; 1 h autonomía",
      "SUA 5: solo >3.000 espectadores pie; barreras rompeolas si >5 filas y pendiente >6%",
      "SUA 6: piscinas infantiles ≤50 cm profundidad; fondo ≤1,50 m clase 3 resbaladicidad",
      "SUA 7: velocidad máxima 20 km/h; >200 vehículos o >5.000 m² → itinerarios peatonales diferenciados",
      "SUA 9: ascensor o rampa accesible en residencial si >2 plantas o >12 viviendas sin entrada accesible; otros usos si >2 plantas o >200 m²",
      "Plazas aparcamiento accesibles: 1/33 (comercial/concurrencia), 1/50 (otros)",
      "Plazas reservadas: 1 silla ruedas/100; 1 auditiva/50 si componente auditiva y >50 asientos",
      "Itinerario accesible: ≥1,20 m (1,10 m zonas comunes de viviendas); puertas ≥0,80 m; giro Ø1,50 m; fuerza ≤25 N",
      "Uso restringido: máximo 10 personas usuarios habituales; incluye el interior de las viviendas, no sus zonas comunes",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Resbaladicidad: clase mínima exigible (tablas 1.1 y 1.2, SUA 1)",
          columnas: ["Localización", "Pendiente < 6 %", "Pendiente ≥ 6 % y escaleras"],
          filas: [
            ["Zonas interiores secas", "Clase 1", "Clase 2"],
            ["Zonas interiores húmedas (entradas desde el exterior, terrazas cubiertas, vestuarios, baños, aseos, cocinas…)", "Clase 2", "Clase 3"],
            ["Zonas exteriores, piscinas (zonas de pies descalzos y fondo ≤1,50 m) y duchas", "Clase 3", "Clase 3"]
          ],
          nota: "Clases por Rd (péndulo, UNE 41901:2017 EX): 0 ≤15; 1 de 15 a 35; 2 de 35 a 45; 3 >45. Solo se exige en Residencial Público, Sanitario, Docente, Comercial, Administrativo y Pública Concurrencia, excluidas las zonas de ocupación nula. Las entradas que son accesos directos a zonas de uso restringido no cuentan como húmedas."
        },
        {
          titulo: "Escaleras de uso restringido y de uso general (SUA 1, apartados 4.1 y 4.2)",
          columnas: ["Parámetro", "Uso restringido", "Uso general"],
          filas: [
            ["Anchura del tramo", "≥ 0,80 m", "Tabla 4.1 (Residencial Vivienda 1,00 m; Sanitario 1,20-1,40 m)"],
            ["Contrahuella", "≤ 20 cm", "13-18,5 cm (≤ 17,5 cm en uso público o sin ascensor alternativo)"],
            ["Huella", "≥ 22 cm", "≥ 28 cm en tramos rectos; en curvos ≥ 28 cm a 50 cm del borde interior y ≤ 44 cm en el exterior"],
            ["Relación", "—", "54 cm ≤ 2C + H ≤ 70 cm"],
            ["Tabicas y bocel", "Se admiten escalones sin tabica (superposición ≥ 2,5 cm) y mesetas partidas a 45º", "No se admite bocel; tabicas verticales o ≤ 15º si evacuación ascendente o sin itinerario accesible alternativo"],
            ["Tramo", "—", "≥ 3 peldaños; altura máxima 2,25 m (uso público o sin ascensor) o 3,20 m (resto)"],
            ["Mesetas", "—", "≥ 1 m de longitud; 1,60 m en hospitalización con giros de 180º"],
            ["Pasamanos", "Barandilla en lados abiertos", "Un lado si salva > 55 cm; ambos si anchura > 1,20 m o sin ascensor; intermedios si > 4 m; altura 90-110 cm"]
          ],
          nota: "Trampas: 18,5 cm es la contrahuella máxima de uso general, no de uso restringido; 28 cm es la huella de uso general. Entre dos plantas, todas las contrahuellas iguales; entre tramos de plantas distintas, la contrahuella no varía más de 1 cm."
        },
        {
          titulo: "Rampas (SUA 1, apartado 4.3)",
          columnas: ["Tipo de rampa", "Pendiente máxima", "Longitud máxima de tramo", "Otras condiciones"],
          filas: [
            ["General", "12 %", "15 m", "Mesetas ≥ 1,50 m; pasamanos en un lado si salva > 550 mm y pendiente ≥ 6 %"],
            ["Itinerario accesible, longitud < 3 m", "10 %", "9 m", "Recta o radio ≥ 30 m; anchura ≥ 1,20 m; rellano horizontal de 1,20 m al principio y al final"],
            ["Itinerario accesible, longitud < 6 m", "8 %", "9 m", "Pasamanos en ambos lados si pendiente ≥ 6 % y salva > 18,5 cm; zócalo ≥ 10 cm"],
            ["Itinerario accesible, resto", "6 %", "9 m", "Puertas y pasillos a ≥ 1,50 m del arranque"],
            ["Aparcamiento, vehículos y personas (no accesible)", "16 %", "Sin límite", "Además, condiciones de la SUA 7"]
          ],
          nota: "Más del 4 % ya es rampa. Pendiente transversal de las rampas accesibles ≤ 2 %. Si la rampa es curva, la pendiente se mide en el lado más desfavorable. Prolongación de pasamanos 30 cm en rampas accesibles con tramos de más de 3 m."
        },
        {
          titulo: "Barreras de protección en el DB-SUA",
          columnas: ["Dónde", "Altura mínima", "Otras condiciones"],
          filas: [
            ["Desniveles > 55 cm hasta 6 m (SUA 1)", "0,90 m", "Resistencia según SE-AE 3.2.1"],
            ["Desniveles > 6 m (SUA 1)", "1,10 m", "Salvo huecos de escalera < 40 cm de anchura: 0,90 m"],
            ["Delante de fila de asientos fijos (SUA 1)", "0,70 m", "Elemento horizontal ≥ 50 cm de anchura a ≥ 50 cm de altura; 3 kN/m + 1,0 kN/m"],
            ["Delimitación de zonas de circulación (SUA 1)", "0,80 m", "—"],
            ["Graderíos y tribunas > 5 filas y pendiente > 6 % (SUA 5)", "1,10 m", "5,0 kN/m; cada 5, 4 o 3 m según pendiente"],
            ["Piscinas con acceso de niños no controlado (SUA 6)", "1,20 m", "0,5 kN/m; no escalables (SUA 1, 3.2.3)"],
            ["Recorridos peatonales en rampas de vehículos y frente a puertas (SUA 7)", "0,80 m", "Frente a puertas, a ≥ 1,20 m de ellas"]
          ],
          nota: "No escalables (Residencial Vivienda, escuelas infantiles y zonas de uso público de Comercial y Pública Concurrencia): sin apoyos > 5 cm entre 30 y 50 cm ni salientes de > 15 cm de fondo entre 50 y 80 cm; esfera de 10 cm. En uso público de otros usos, solo esfera de 15 cm."
        },
        {
          titulo: "Alumbrado normal y de emergencia (SUA 4)",
          columnas: ["Concepto", "Valor"],
          filas: [
            ["Alumbrado normal: exteriores / interiores / aparcamientos interiores", "20 / 100 / 50 lux, a nivel del suelo"],
            ["Uniformidad media del alumbrado normal", "≥ 40 %"],
            ["Fallo de alimentación", "Tensión < 70 % de la nominal"],
            ["Emergencia en vías de evacuación ≤ 2 m", "≥ 1 lux en el eje y ≥ 0,5 lux en la banda central (mitad de la anchura)"],
            ["Emergencia en equipos de seguridad, protección manual contra incendios y cuadros", "≥ 5 lux"],
            ["Relación máxima/mínima en el eje", "≤ 40:1"],
            ["Respuesta", "50 % a los 5 s y 100 % a los 60 s"],
            ["Autonomía", "1 hora"],
            ["Índice de rendimiento cromático Ra", "≥ 40"],
            ["Luminarias", "A ≥ 2 m sobre el suelo"],
            ["Señales de seguridad", "≥ 2 cd/m²; máx./mín. ≤ 10:1; blanco/color entre 5:1 y 15:1"]
          ],
          nota: "Zonas con emergencia: recintos > 100 personas; recorridos de evacuación; aparcamientos cerrados o cubiertos > 100 m²; locales de equipos de incendios y de riesgo especial; aseos generales de planta en uso público; cuadros del alumbrado; señales de seguridad; itinerarios accesibles."
        },
        {
          titulo: "Accesibilidad entre plantas: ascensor accesible o rampa accesible (SUA 9, 1.1.2)",
          columnas: ["Edificio", "Obligatorio si…", "Si no se llega al umbral"],
          filas: [
            ["Residencial Vivienda", "> 2 plantas desde una entrada principal accesible hasta alguna vivienda o zona comunitaria, o > 12 viviendas en plantas sin entrada principal accesible", "Previsión, al menos dimensional y estructural, del ascensor"],
            ["Plantas con viviendas accesibles para silla de ruedas", "Siempre: hasta la entrada accesible y las plantas de sus elementos asociados", "—"],
            ["Otros usos", "> 2 plantas desde una entrada principal accesible hasta planta no de ocupación nula, o > 200 m² útiles (sin ocupación nula) en plantas sin entrada accesible", "—"],
            ["Plantas de otros usos con uso público > 100 m² útiles o con elementos accesibles", "Siempre", "—"]
          ],
          nota: "Cabina del ascensor accesible (anejo A): 1,00 × 1,25 m en Residencial Vivienda sin viviendas accesibles y en otros edificios con ≤ 1.000 m² útiles fuera de la planta de acceso; 1,10 × 1,40 m con viviendas accesibles o > 1.000 m²; con dos puertas en ángulo, 1,40 × 1,40 m en ambos casos."
        },
        {
          titulo: "Dotación de elementos accesibles (SUA 9, 1.2)",
          columnas: ["Elemento", "Dotación mínima"],
          filas: [
            ["Alojamientos accesibles (Residencial Público)", "5-50: 1 · 51-100: 2 · 101-150: 4 · 151-200: 6 · > 200: 8, y uno más cada 50 o fracción adicionales a 250"],
            ["Plazas de aparcamiento accesibles: Residencial Vivienda", "1 por vivienda accesible para silla de ruedas"],
            ["Plazas de aparcamiento accesibles: Residencial Público (aparcamiento > 100 m²)", "1 por alojamiento accesible"],
            ["Plazas de aparcamiento accesibles: Comercial, Pública Concurrencia, aparcamiento público", "1 cada 33 plazas o fracción"],
            ["Plazas de aparcamiento accesibles: otros usos", "1 cada 50 o fracción hasta 200 y 1 más cada 100 adicionales o fracción"],
            ["Plazas reservadas para silla de ruedas (asientos fijos y zonas de espera)", "1 cada 100 plazas o fracción"],
            ["Plazas reservadas para discapacidad auditiva", "1 cada 50 plazas o fracción, si hay > 50 asientos y componente auditiva"],
            ["Aseos accesibles", "1 cada 10 inodoros o fracción (puede ser compartido por ambos sexos)"],
            ["Vestuarios", "En cada uno: 1 cabina, 1 aseo y 1 ducha accesibles cada 10 unidades o fracción"],
            ["Piscinas (públicas, Residencial Público con alojamientos accesibles, edificios con viviendas accesibles)", "Entrada al vaso con grúa o elemento adaptado; no en infantiles"],
            ["Mobiliario de atención al público", "1 punto de atención accesible o, alternativamente, 1 punto de llamada accesible"]
          ],
          nota: "En todo caso, el aparcamiento tendrá al menos una plaza accesible por cada plaza reservada para usuarios de silla de ruedas."
        },
        {
          titulo: "Itinerario accesible frente a vivienda accesible (anejo A)",
          columnas: ["Parámetro", "Itinerario accesible", "Vivienda accesible (silla de ruedas)"],
          filas: [
            ["Desniveles", "Rampa accesible o ascensor accesible; sin escalones", "Sin escalones"],
            ["Pasillos", "≥ 1,20 m (1,10 m en zonas comunes de Residencial Vivienda)", "≥ 1,10 m"],
            ["Estrechamientos puntuales", "≥ 1,00 m, longitud ≤ 0,50 m, a ≥ 0,65 m de huecos o cambios de dirección", "Igual"],
            ["Giro", "Ø 1,50 m en vestíbulo o portal, al fondo de pasillos > 10 m y frente a ascensores", "Ø 1,50 m en vestíbulo, estancia, dormitorios, cocina y un baño; Ø 1,20 m en terraza"],
            ["Puertas", "≥ 0,80 m en el marco (≥ 0,78 m a máxima apertura); mecanismos a 0,80-1,20 m; Ø 1,20 m libre a ambos lados; ≥ 0,30 m al rincón", "Igual"],
            ["Fuerza de apertura de puertas de salida", "≤ 25 N (≤ 65 N si son resistentes al fuego)", "—"],
            ["Pendiente", "≤ 4 % longitudinal o rampa accesible; ≤ 2 % transversal", "—"]
          ],
          nota: "No son parte del itinerario accesible: escaleras, rampas y pasillos mecánicos, puertas giratorias, barreras tipo torno ni elementos inadecuados para personas con marcapasos u otros dispositivos médicos."
        }
      ],
      datos: [
        "Introducción: el DB se aplica a las obras de edificación, incluidas las instalaciones fijas, el equipamiento propio y los elementos de urbanización adscritos (art. 2.3 LOE); lo que se exige a los edificios vale también para los establecimientos.",
        "SUA 1: juntas con resalto ≤ 4 mm; salientes puntuales ≤ 12 mm; desniveles de hasta 5 cm con pendiente ≤ 25 %; perforaciones que no admitan una esfera de 1,5 cm.",
        "SUA 1: diferencias de nivel de hasta 55 cm en zonas de uso público, con diferenciación visual y táctil desde 25 cm del borde.",
        "SUA 1: acristalamientos de Residencial Vivienda a más de 6 m, limpiables desde dentro en un radio de 0,85 m desde un punto a ≤ 1,30 m de altura.",
        "SUA 2: altura libre 2,20 m (2,10 m en uso restringido; 2 m en umbrales de puertas); salientes de paredes ≤ 15 cm entre 15 cm y 2,20 m; elementos de fachada a ≥ 2,20 m.",
        "SUA 2: áreas de riesgo de impacto: puertas hasta 1,50 m de altura y 0,30 m a cada lado; paños fijos hasta 0,90 m. Vidrios de duchas, bañeras y puertas: impacto de nivel 3.",
        "SUA 2: señalización de grandes acristalamientos a 0,85-1,10 m y 1,50-1,70 m; puertas de vaivén transparentes entre 0,7 y 1,5 m; correderas manuales a ≥ 20 cm del objeto fijo.",
        "SUA 3: puertas de salida ≤ 140 N; en itinerarios accesibles ≤ 25 N (≤ 65 N resistentes al fuego); llamada de asistencia en aseos y cabinas accesibles de uso público.",
        "SUA 5: más de 3.000 espectadores de pie (4 personas/m²); pendiente ≤ 50 %; filas de 20 m (10 m si un solo acceso); fila a ≤ 4 m de cota de una salida; aberturas de 1,10 a 1,40 m.",
        "SUA 6: barreras de 1,20 m; profundidad 50 cm en infantiles y 3 m en el resto, con zonas < 1,40 m; cambios de profundidad 6 % (infantiles), 10 % hasta 1,40 m y 35 % en el resto; andén ≥ 1,20 m de clase 3; escaleras a ≤ 15 m entre sí, hasta 1 m bajo el agua o 30 cm sobre el fondo.",
        "SUA 7: espacio de acceso y espera ≥ 4,5 m de profundidad y ≤ 5 % de pendiente; recorridos peatonales por rampa de 80 cm; más de 200 vehículos o 5.000 m² → itinerarios diferenciados; 20 km/h.",
        "SUA 9: mecanismos accesibles a 0,80-1,20 m (tomas de corriente o señal a 0,40-1,20 m); bandas táctiles de 3±1 mm en interior y 5±1 mm en exterior; las de arranque de escaleras de 80 cm y las de itinerario a puntos de llamada o atención de 40 cm.",
        "Anejo A: plaza reservada de silla de ruedas 0,80 × 1,20 m (frontal) o 0,80 × 1,50 m (lateral); plaza de aparcamiento accesible con espacio lateral ≥ 1,20 m o trasero ≥ 3,00 m.",
        "Anejo A: punto de atención accesible con plano de ≥ 0,80 m a ≤ 0,85 m de altura y hueco de 70 × 80 × 50 cm; inodoro accesible con asiento a 45-50 cm y transferencia ≥ 80 cm; barras de apoyo de 30-40 mm a 45-55 mm del paramento, soportan 1 kN."
      ],
      excepciones: [
        "Resbaladicidad: no se exige en Residencial Vivienda ni en zonas de ocupación nula.",
        "Discontinuidades del pavimento: no se aplican en zonas de uso restringido ni exteriores.",
        "Escalón aislado: solo en uso restringido, zonas comunes de Residencial Vivienda, accesos y salidas de los edificios y acceso a estrado o escenario, y nunca en el itinerario accesible.",
        "Barreras en desniveles > 55 cm: no si la disposición constructiva hace muy improbable la caída o si la barrera es incompatible con el uso previsto.",
        "Huecos de escalera de anchura < 40 cm: barrera de 0,90 m aunque el desnivel supere 6 m.",
        "Rampas: los itinerarios de uso restringido y los de vehículos en aparcamientos no siguen las reglas generales de rampas; estos últimos tienen 16 % y tramos sin límite de longitud.",
        "Puertas laterales a pasillos < 2,50 m: la regla de barrido no se aplica en zonas de uso restringido ni a recintos de ocupación nula.",
        "Vidrios de áreas de riesgo: se excluyen los de mayor dimensión ≤ 30 cm y los protegidos por barrera de la SUA 1.",
        "Señalización de grandes acristalamientos: no hace falta con montantes a ≤ 0,60 m o con travesaño a la altura inferior; no se exige en el interior de las viviendas.",
        "Iluminación controlada desde el interior de recintos con bloqueo: no se exige en baños o aseos de viviendas.",
        "SUA 6: no se aplica a piscinas exclusivamente de competición o enseñanza, de viviendas unifamiliares, baños termales, hidroterapia ni usos exclusivamente médicos; las infantiles no llevan escaleras ni grúa.",
        "SUA 7: no se aplica a los garajes de una vivienda unifamiliar; los aparcamientos robotizados quedan fuera del DB-SUA.",
        "Mecanismos accesibles: no se exigen en el interior de las viviendas ni en zonas de ocupación nula.",
        "Plazas de aparcamiento accesibles en Residencial Vivienda: la señalización no se exige en las vinculadas a un residente.",
        "Edificios existentes: si las condiciones del DB no son técnica o económicamente viables o son incompatibles con su grado de protección, soluciones que permitan la mayor adecuación posible; en la tabla 4.1 se admite menor anchura de escalera para instalar un ascensor si se acredita la no viabilidad de otras alternativas.",
        "SUA 8 (rayo): existe en el DB pero no entra en el alcance de la convocatoria."
      ]
    }
  };
