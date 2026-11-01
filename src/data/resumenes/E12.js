// Resumen del tema E12. Formato: cabecera de src/data/resumenes.js.
// Revisado el 01-11-2026: el DB SE-C vigente el 21-05-2026 es la versión de 20-12-2019 (RD 732/2019),
// sin modificaciones posteriores (BOE consolidado del RD 314/2006, BOE-A-2006-5515, y codigotecnico.org).
// El TXT (temas/E_Tema12.txt) es el texto literal de esa versión para el alcance oficial: apartados 3,
// 4.1, 4.5, 4.6, 5.1, 5.4, 6.1, 6.4, 7 y anejo A. Corregido: cementos frente a sulfatos (3.2.6.12),
// terrenos inestables para barrena continua (5.4.1.1.10) y referencias de párrafos del 5.4.1.1. Añadida
// la memorización. Ojo: la tabla 3.7 del TXT está descolocada (20 cifras para 11 filas): no se usa.
export default {
  intro: "El Documento Básico SE-C (Seguridad estructural: Cimientos) del CTE, en el alcance de la convocatoria: estudio geotécnico (apartado 3), cimentaciones directas (4.1 tipologías, 4.5 condiciones constructivas y 4.6 control), cimentaciones profundas (5.1 definiciones y tipologías, 5.4 condiciones constructivas y de control), elementos de contención (6.1 definiciones y tipologías, 6.4 condiciones constructivas y de control), acondicionamiento del terreno (7) y terminología (anejo A). Versión vigente: la de diciembre de 2019 (RD 732/2019), que actualiza las normas UNE citadas. Lo que más cae: la clasificación C-0 a C-4 y T-1 a T-3, las cifras del reconocimiento (3 puntos, tablas 3.3 y 3.4, 2 m + 0,3 m por planta, 5D), el umbral de cimentación profunda (más de 8 veces el diámetro), la zapata rígida (v ≤ 2h), la solera de 10 cm, la nivelación de los C-3 y C-4 y las cifras de pilotes, pantallas y tubo Tremie.",
  bloques: [
    {
      h: "Estudio geotécnico: generalidades, reconocimiento y contenido (apartado 3)",
      nota: "Es la base de todo el DB SE-C. Se suele preguntar por la clasificación de construcciones y terrenos, el número mínimo de puntos de reconocimiento y las profundidades orientativas. La trampa está en confundir los grupos de terreno T-1/T-2/T-3 con los tipos de construcción C-0 a C-4, o en olvidar que en C-0 y T-1 la penetración debe complementarse siempre con otras técnicas, como calicatas.",
      items: [
        "3.1: el estudio geotécnico se acomete en la fase inicial del proyecto y en cualquier caso antes de que la estructura esté totalmente dimensionada; su autoría corresponde al proyectista, a otro técnico competente o, en su caso, al Director de Obra, y contará con el preceptivo visado colegial",
        "3.1: salvo justificación, el reconocimiento no podrá ser inferior al establecido en el DB",
        "Tabla 3.1: tipos de construcción C-0 (menos de 4 plantas y menos de 300 m²), C-1 (otras de menos de 4 plantas), C-2 (4 a 10 plantas), C-3 (11 a 20), C-4 (monumentales o singulares, o más de 20 plantas); en el cómputo de plantas se incluyen los sótanos",
        "Tabla 3.2: grupos de terreno T-1 (favorables), T-2 (intermedios, rellenos antrópicos que probablemente no superen 3,0 m) y T-3 (desfavorables: expansivos, colapsables, blandos o sueltos, kársticos, variables, rellenos de más de 3 m, deslizamientos, rocas volcánicas, desnivel de más de 15º, residuales y marismas)",
        "La unidad a considerar es el edificio o el conjunto de edificios de una misma promoción",
        "Mínimo 3 puntos de reconocimiento; distancias máximas dmáx y profundidades orientativas P según la tabla 3.3; puntos reflejados en un plano o en coordenadas UTM",
        "Más de 10.000 m² en planta: se puede reducir la densidad de puntos hasta el 50 % sobre el exceso de superficie; las reglas no se aplican a los estudios de los proyectos de urbanización",
        "Tabla 3.4: número mínimo de sondeos mecánicos y porcentaje de sustitución por pruebas continuas de penetración",
        "Profundidad del reconocimiento: cota en la que el aumento neto de tensión sea igual o inferior al 10 % de la tensión efectiva vertical previa, salvo que se alcance una unidad geotécnica resistente, comprobada en al menos 2 m más 0,3 m por planta; reparto de cargas 1H:2V",
        "Cimentaciones profundas: carga aplicada a 2/3 de la longitud de los pilotes; en pilotes columna, investigar unos 5D por debajo de la punta",
        "T-3 o reconocimiento insuficiente: intercalar puntos en las zonas problemáticas",
        "Prospección (3.2.2): calicatas, sondeos mecánicos, pruebas continuas de penetración o métodos geofísicos; en C-0 y T-1 la penetración se complementa siempre con otras técnicas (calicatas); no se pueden usar exclusivamente métodos geofísicos; la geofísica no es aconsejable en cascos urbanos consolidados",
        "Ensayos de campo (3.2.3): en sondeo SPT, molinete (Vane Test), presiométrico, Lefranc y Lugeon; en superficie o pozo, carga con placa; en pozo, bombeo",
        "Muestras (3.2.4): categoría A (inalteradas estructura, densidad, humedad, granulometría, plasticidad y componentes químicos estables), B (humedad, granulometría, plasticidad y componentes químicos) y C (las demás); la tabla 3.5 fija la categoría mínima por ensayo",
        "Ensayos de laboratorio (3.2.6): agua freática, al menos una muestra en el 50 % de los sondeos; finos (limo + arcilla) por debajo o por encima del 35 %; sulfatos en suelos de 3000 mg/kg o más (600 en el agua) exigen cementos con resistencia adicional a los sulfatos (UNE 80303-1:2017, exposición tipo Q)",
        "Contenido del estudio (3.3): unidades geotécnicas, perfiles (mínimo 2 para C-0 y C-1; 3 para el resto), niveles freáticos, parámetros; clasificación sísmica de cada unidad en municipios con aceleración de al menos 0,08 g (justificar si no se exploran 30 m); conclusiones y lista de valores del párrafo 8 (cota, presiones admisibles, resistencia de pilotes por punta y fuste, empujes, balasto, asientos, ripabilidad, nivel freático, agresividad…)",
        "3.4: una vez iniciadas las excavaciones, el Director de Obra aprecia la validez y suficiencia de los datos del estudio"
      ]
    },
    {
      h: "Cimentaciones directas: tipologías (4.1)",
      nota: "Las cimentaciones directas son la solución preferente cuando las condiciones lo permiten. Se contrastan tipologías y su utilización, y el concepto de rigidez estructural de las zapatas. La cimentación compensada es un concepto clave de las losas con sótanos.",
      items: [
        "Definición: reparten las cargas en un plano de apoyo horizontal; habitualmente, pero no siempre, a poca profundidad (también llamadas superficiales)",
        "Tabla 4.1: zapata aislada (pilar aislado, interior, medianero o de esquina), combinada (2 o más pilares contiguos), corrida (alineaciones de 3 o más pilares o muros), pozo de cimentación (pilar aislado), emparrillado (pilares y muros en retícula) y losa (conjunto de pilares y muros)",
        "Zapatas aisladas: interiores cuadradas; medianería rectangulares con la mayor dimensión paralela a la medianería; esquina cuadradas; rígida si v ≤ 2h, flexible si v > 2h (4.1.1)",
        "Vigas de atado: evitan desplazamientos laterales (ver NCSE); vigas centradoras: resisten momentos o redistribuyen cargas, sobre todo en medianería y esquina; no aconsejable el apoyo directo de vigas de unión en terrenos expansivos o colapsables (4.1.1)",
        "Zapatas combinadas y corridas: capacidad portante pequeña o moderada, pilares muy próximos o cargas elevadas; combinada habitualmente rectangular, a veces trapecial (4.1.2)",
        "Pozos: relleno de hormigón pobre con la zapata encima, o plinto de gran rigidez; se añade el peso de la columna de hormigón pobre; vigas centradoras si hay momentos sin colaboración lateral justificada (4.1.3)",
        "Emparrillados: terreno de baja capacidad y alta deformabilidad o heterogéneo; zapatas corridas entrecruzadas en malla habitualmente ortogonal (4.1.4)",
        "Losas: continua y uniforme, con refuerzos bajo pilares, con pedestales, en cajón, nervada o aligerada; cimentación compensada cuando el peso de las tierras excavadas es semejante al peso total del edificio (4.1.5)"
      ]
    },
    {
      h: "Cimentaciones directas: condiciones constructivas (4.5)",
      nota: "La ejecución material. Caen las cotas de excavación, las inclinaciones entre zapatas a distinto nivel y el espesor de la solera de asiento. El agua y el hielo generan preguntas prácticas.",
      items: [
        "Precauciones: retirar los puntos duros del fondo; sustituir bolsadas blandas por suelo de compresibilidad equivalente compactado u hormigón en masa; si hay puntos excepcionalmente blandos, proyectar de nuevo la zapata (4.5.1.1)",
        "Solera de asiento u hormigón de limpieza: espesor mínimo 10 cm (4.5.1.2)",
        "Terminación de la excavación inmediatamente antes de la solera; si no es posible, dejarla 10 a 15 cm por encima de la cota definitiva (4.5.1.3.1)",
        "Aunque el firme sea muy superficial, conviene profundizar 0,5 a 0,8 m bajo la rasante; cimientos muy largos: llaves o anclajes verticales al menos cada 10 m (4.5.1.3.2)",
        "Zapatas a distinto nivel: línea de unión de bordes inferiores máx. 1H:1V en rocas y suelos duros; 2H:1V en suelos flojos a medios (4.5.1.3.3)",
        "Agua: agotamiento durante toda la cimentación; saneamiento del fondo en arcillas con humedad próxima al límite líquido (4.5.1.3.4)",
        "Drenajes: perforaciones inclinadas con al menos 5 cm por metro; empedrados con pendiente longitudinal de al menos 3 a 4 cm por metro; geotextil filtro (4.5.1.3.5)",
        "Hielo: no construir antes del deshielo completo o excavar hasta retirar la capa helada; temperatura mínima de hormigonado según EHE (4.5.1.3.6)",
        "Zapatas de hormigón armado: armaduras de pilares hasta la capa inferior de la zapata; hormigonado a sección completa si las paredes tienen cohesión; no circular sobre hormigón fresco (4.5.1.4)",
        "Losas: agotamiento desde pozos filtrantes, nunca desde sumideros, si puede haber sifonamiento; solera recomendada de 10 cm mínimo; sótanos bajo el freático según DB-HS 1 (4.5.2)",
        "Pozos: excavación manual si no se alcanza el freático, mecánica en cualquier caso; limpieza y compactación del fondo antes del relleno (4.5.3)"
      ]
    },
    {
      h: "Cimentaciones directas: control (4.6)",
      nota: "El control se organiza en terreno, materiales, ejecución y comprobaciones finales. La nivelación obligatoria de los C-3 y C-4 es un dato numérico recurrente.",
      items: [
        "Generalidades: no sobrecargas cercanas no previstas; vigilar vías de agua; no obras nuevas que pongan en peligro la cimentación (perforaciones, cargaderos, excavaciones próximas); los sótanos solo para el uso proyectado; cualquier modificación la autoriza el Director de Obra (4.6.1)",
        "Terreno: confirmación del estudio geotécnico (3.4) y comprobación de nivel de apoyo, estratigrafía, freático, resistencia y humedad, defectos y corrientes subterráneas (4.6.2)",
        "Materiales: ajustados al proyecto e idóneos; resistencias indicadas (4.6.3)",
        "Durante la ejecución: replanteo, dimensiones, materiales, compactación, encofrados, armaduras y esperas, recubrimientos, espesor del hormigón de limpieza, vibrado, zapatas contiguas, vigas de atado y centradoras, agotamientos, juntas e impermeabilizaciones (4.6.4)",
        "Comprobaciones finales: comportamiento de las zapatas, cargas admisibles, asientos si lo exige el proyecto o el Director de Obra; no árboles ni zonas verdes sin drenaje, sobre todo en terrenos expansivos (4.6.5)",
        "C-3 y C-4: nivelación obligatoria con referencia inmóvil; al menos el 10 % de los pilares o un punto cada 20 m de muro; mínimo 4 referencias; precisión 0,1 mm; lecturas recomendadas al 50 % de la estructura, al final y al terminar la tabiquería de cada dos plantas (4.6.5)"
      ]
    },
    {
      h: "Cimentaciones profundas: definiciones y tipologías (5.1)",
      nota: "El umbral de más de 8 veces el diámetro separa las directas de las profundas. Se contrastan pilotes por fuste y por punta, hincados e in situ, y las limitaciones de diámetro para pilotes aislados hormigonados in situ. Los micropilotes inyectados quedan fuera del cálculo del DB.",
      items: [
        "Cimentación profunda: extremo inferior a profundidad superior a 8 veces su diámetro o ancho; se contempla cuando la superficial no sea técnicamente viable (5.1.1)",
        "Tipos: pilote aislado, grupo de pilotes, zonas pilotadas y micropilotes; el cálculo de micropilotes inyectados no se contempla en el DB (5.1.1)",
        "Forma de trabajo: por fuste («flotantes», sin estrato claramente más resistente) y por punta («columna», con estrato claramente más resistente) (5.1.2.1)",
        "Materiales: hormigón in situ, hormigón prefabricado (armado, pretensado o postensado), acero (tubulares o perfiles en doble U o en H, hincados con azuches), madera (zonas blandas amplias) y mixtos (5.1.2.2.1)",
        "Equivalencia a cilindro: por punta se igualan áreas; por fuste, el contorno; perfiles en H: contorno = doble de (ancho de ala + canto); pilotes-pantalla (sección rectangular B x L): factor reductor f de la fórmula (5.3) para la resistencia por punta, que en el TXT sale descolocada (f = 0,7 + 0,3·B/L en el DB); el fuste, con el perímetro real (5.1.2.2.2)",
        "Procedimiento: prefabricados hincados (sin excavación previa, desplazan el terreno) e in situ (en excavaciones previas); también intermedios (5.1.2.2.3)",
        "Hincados: profundidad de hinca mayor de 8 veces el diámetro equivalente; la resistencia del pilote nunca será superior a la de sus juntas; aislados con arriostramiento en dos direcciones ortogonales (5.1.2.2.4)",
        "In situ: menos de 0,45 m, no aislados salvo elementos de poca responsabilidad; 0,45 a 1,00 m, aislados con arriostramiento en dos direcciones e integridad controlada; más de 1,00 m, aislados sin arriostramiento con integridad controlada y armado para excentricidades (5.1.2.2.5)",
        "Configuración: normalmente pilotes de igual longitud; en grupos importa la separación (5.1.3)"
      ]
    },
    {
      h: "Cimentaciones profundas: condiciones constructivas y control (5.4)",
      nota: "La ejecución in situ exige asegurar la continuidad del fuste. Caen la dosificación del hormigón, la barrena continua, la frecuencia de ensayos de integridad y las tolerancias. Las normas de referencia son UNE EN 1536:2011+A1:2016 (in situ) y UNE EN 12699:2016 (hincados).",
      items: [
        "Entubación recuperable: resguardo de al menos 3 m de hormigón fresco por encima del extremo inferior de la tubería (5.4.1.1, párr. 1)",
        "Camisa perdida: si hay corrientes subterráneas que puedan lavar el hormigón o terrenos deformables por la presión lateral del hormigón (párr. 2); excavación en seco si las paredes son estables; lodos tixotrópicos en terrenos alterables (párr. 3 a 5)",
        "Barrena continua: armadura introducida después en el hormigón fresco hasta un mínimo de 6 m o 9D (párr. 8); no se ejecutan como pilotes aislados (salvo registro continuo de parámetros), con inclinación de más de 6º (salvo control del direccionado y de la armadura) ni con capas inestables de más de 3 diámetros (salvo pilotes de prueba o registro continuo y tubo telescópico) (párr. 9); no recomendables en zona sísmica o a tracción (párr. 11)",
        "Terrenos inestables: no cohesivos uniformes con D60/D10 < 2 bajo el freático; no cohesivos flojos con N < 7; cohesivos muy blandos con cu < 15 kPa (párr. 10)",
        "Materias primas: cementos con adiciones (tipo II) preferibles; no aluminato de calcio; SR/MR si la agresividad es muy elevada; árido máx. 32 mm o 1/4 de la separación entre redondos; preferible 25 mm rodado y 20 mm machaqueo (5.4.1.1.1)",
        "Hormigón (tabla 5.2): cemento 325 kg/m³ (vertido en seco) y 375 kg/m³ (sumergido); A/C máx. 0,6; finos (≤ 0,125 mm, cemento incluido) 400 o 450 kg/m³ según el árido grueso (corte en 8 mm)",
        "Consistencia (tabla 5.3): cono de 130 a 180 mm en seco; 160 mm o más bombeado o sumergido bajo agua; 180 mm o más bajo fluido estabilizador; no bajar de 100 mm durante 4 horas y todo el hormigonado (5.4.1.1.2)",
        "Control in situ: parte de cada pilote; controles de replanteo, excavación, lodo, armaduras y hormigón; tubo Tremie elevado unos 20 cm al empezar (5.4.2.1)",
        "Ensayos de integridad: transparencia sónica, impedancia mecánica o sondeos mecánicos; mínimo 1 por cada 20 pilotes; 2 por cada 20 en aislados de 45 a 100 cm; 5 por cada 20 en aislados de más de 100 cm (5.4.2.1)",
        "Hincados: registrar la curva completa de hinca de un cierto número de pilotes; no interrumpir hasta el rechazo; en arcillas y C-3/C-4, comprobar el rechazo tras 24 horas como mínimo (5.4.2.2)",
        "Tolerancias: ver tabla de memorización (5.4.3); ensayos de pilotes: carga estática, dinámica, integridad y control; C-3 y C-4 con prefabricados: pruebas dinámicas de hinca contrastadas con pruebas de carga (5.4.4)"
      ]
    },
    {
      h: "Elementos de contención: definiciones y tipologías (6.1)",
      nota: "Pantallas y muros se distinguen por estructura y secuencia: la pantalla se ejecuta antes de excavar, se empotra y trabaja a flexión; el muro de gravedad resiste por su peso. Se pregunta por los tipos y las exclusiones del DB.",
      items: [
        "Pantallas: se construyen desde la superficie antes de excavar y trabajan fundamentalmente a flexión; empotramiento por debajo del fondo, en general indispensable; peso propio de influencia muy escasa o nula; estructuras flexibles; excluidas las que solo impermeabilizan (6.1.1)",
        "Bajo el freático, impermeabilización suplementaria según DB-HS 1; la fase crítica de la pantalla es la de ejecución (6.1.1)",
        "Tabla 6.1: in situ (continuas de hormigón y de pilotes) y prefabricadas (tablestacas de hormigón, acero o madera hincadas, y paneles de hormigón en zanja)",
        "Pantallas continuas: zanja de 0,4 a 1,50 m de espesor; paneles de ancho generalmente de 2,5 a 4,5 m; estabilidad con lodos tixotrópicos (bentonitas, sepiolitas) (6.1.1.1)",
        "Pantallas de pilotes: si no es estanca, separación entre ejes inferior al doble del diámetro; efecto de arco; hormigón proyectado si queda abierta mucho tiempo; secantes bajo el freático (6.1.1.2)",
        "Tablestacas: hincadas a golpes o vibración; las de acero se hincan más fácilmente y con menos vibraciones que las de hormigón (6.1.1.3)",
        "Muros: excluidos los de simple protección o revestimiento, los exentos por ambas caras, los de depósitos no enterrados, los muros-criba y los de suelo reforzado (6.1.2)",
        "Tipos: de gravedad (equilibran por su peso, sin armadura en general), gravedad aligerados, contrafuertes, en L o ménsula, de sótano y por bataches (6.1.2)",
        "Bataches: placas de unos 3 x 3 m hormigonadas contra el terreno y ancladas, módulos con al menos 3 anclajes; no se abre uno sin anclar la placa superior; salvo justificación, solo sobre el nivel freático; estabilidad exclusivamente por los anclajes (6.1.2)",
        "Muros de sótano: cajones cerrados; los forjados arriostran transversalmente (6.1.2)"
      ]
    },
    {
      h: "Elementos de contención: condiciones constructivas y control (6.4)",
      nota: "La pantalla hormigonada bajo lodo exige controlar lodo, hormigón y tubo Tremie. Son clásicas las cifras de muretes guía, dosificación, diámetro e inmersión del tubo y ritmo de hormigonado. La norma de referencia es UNE EN 1538:2011+A1:2016.",
      items: [
        "Si aparecen puntos discordantes con el proyecto, comprobar y recalcular la contención (6.4.1.1)",
        "Al disponer una pantalla se analizan su ejecución, las fases de excavación, los anclajes, el agotamiento, la sujeción por forjados y la retirada de elementos provisionales (6.4.1.2.1)",
        "Muretes guía: de hormigón armado in situ, de 0,5 a 1,5 m de profundidad; separación 20 a 50 mm mayor que el espesor de la pantalla; parte superior horizontal y conveniente al menos 1,5 m sobre la máxima cota del freático (6.4.1.2.1)",
        "Hormigón: recomendado 325 kg/m³ en seco sin freático y 375 kg/m³ sumergido; mínimo según árido (tabla 6.5); finos ≤ 450 kg/m³ con árido de hasta 16 mm y ≤ 400 kg/m³ en el resto; A/C entre 0,45 y 0,6, aprobada por el Director de Obra (6.4.1.2.3.1)",
        "Consistencia: cono de 160 a 220 mm, recomendado no inferior a 180 mm; no bajar de 100 mm durante 4 horas y todo el hormigonado del panel; hormigón de central (6.4.1.2.3)",
        "Puesta en obra: separación entre barras de al menos 5 veces el diámetro del árido; Tremie con diámetro interior mayor de 6 veces el árido y de 150 mm; recorrido horizontal máx. 2,50 m (6.4.1.2.4)",
        "Hormigonado: Tremie sobre el fondo y levantado 10 a 20 cm, con tapón o pelota; inmerso al menos 3 m (2 m si se conoce el nivel con precisión); ritmo conveniente de más de 25 m³/h; sin interrupción, dentro del 75 % del comienzo de fraguado (6.4.1.2.4)",
        "Muros: cimentación según los capítulos 4 y 5; agotamiento durante toda la obra; juntas y curado según EHE (6.4.1.3)",
        "Control: se aplican las comprobaciones 4.6.2 a 4.6.5; en pantallas, ensayos de consistencia del hormigón fresco (sobre todo con superplastificantes); en muros, impermeabilización y relleno del trasdós (6.4.2)"
      ]
    },
    {
      h: "Acondicionamiento del terreno: excavaciones, rellenos y gestión del agua (7)",
      nota: "Excavaciones en talud, rellenos controlados y gestión del agua. Caen los coeficientes de seguridad de taludes y de subpresión y los cuatro tipos de rotura hidráulica.",
      items: [
        "Acondicionamiento: excavaciones o rellenos controlados para adaptar la topografía, más la gestión del agua; no contempla edificaciones vecinas, que requieren estudio específico (7.1)",
        "Excavación: vaciado o desmonte limitado por un talud, sin contención mecánica añadida; se consideran reptación, inestabilidad global, erosión, aumento de humedad y desecación de expansivos; protección preceptiva de escorrentías y drenaje del trasdós (7.2.1)",
        "Taludes en suelos, sin construcciones afectadas: γR = 1,5 (persistentes y transitorias) y 1,1 (extraordinarias); γE = γF = γM = 1; estabilización combinando geometría y drenaje (7.2.2.1)",
        "Taludes en roca: bloques, cuñas o masa; bulonado y drenaje; mallas de retención y de absorción de energía (7.2.2.2)",
        "Estados límite de servicio: subsidencias por cambios en el agua subterránea, fluencia lenta drenada, pérdidas de suelo o actuaciones profundas (7.2.3)",
        "Control de movimientos preceptivo si no se pueden descartar los ELS o las hipótesis no son fiables (7.2.4)",
        "Rellenos: suelos predominantemente granulares; no se usan normalmente expansivos o solubles, ni heladizos o con hielo, nieve o turba como relleno estructural; mejora con humedad, cal o cemento, granulometría, protección o capas drenantes (7.3.2)",
        "Control del relleno: compacidad como porcentaje del Proctor; en escolleras, métodos de campo; la sobrecompactación es perjudicial (7.3.4)",
        "Agotamientos: basados en estudio geotécnico e hidrogeológico; por permeabilidad decreciente, por gravedad, por vacío o por electroósmosis; posible recarga si hay subsidencia inaceptable (7.4.2)",
        "Roturas hidráulicas: subpresión, levantamiento del fondo (sifonamiento), erosión interna y tubificación; medidas: tapices impermeables que alargan el camino de filtración, filtros y pozos de alivio (7.4.3)",
        "Subpresión: Ed,dst = Gd,dst + Qd,dst y Ed,stb = Gd,stb; coeficientes 1 y 1,5 sobre las desestabilizadoras y 0,9 sobre las estabilizadoras; γM 1,25 (drenada) y 1,40 (sin drenaje) (7.4.3)"
      ]
    },
    {
      h: "Terminología (anejo A)",
      nota: "Definiciones cortas que dan para preguntas de definición y de pertenencia: fracciones del suelo, empujes, sifonamiento, rozamiento negativo, suelo cohesivo y granular.",
      items: [
        "Fracciones: arcilla menos de 0,002 mm; limo de 0,002 a 0,06 mm; arena de 0,06 a 2 mm (fina hasta 0,2, media hasta 0,6); grava de 2 a 60 mm (fina hasta 6, media hasta 20)",
        "Suelo cohesivo: finos con plasticidad iguales o superiores al 35 % en peso; suelo granular: arenas y gravas de más del 65 %",
        "Empuje activo (desplazamiento en la dirección del movimiento del terreno), pasivo (en dirección contraria) y al reposo (desplazamiento nulo)",
        "Rozamiento negativo: incremento de carga en un pilote por el asentamiento del terreno que le rodea; sifonamiento: el flujo ascendente iguala la presión de tierras y anula la presión efectiva",
        "Módulo de balasto (de reacción o de Winkler): tensión entre desplazamiento; NSPT corregido a una energía del 60 %; RMR de Bieniawski para macizos rocosos",
        "Suelo normalmente consolidado (presión efectiva igual a la de sobreconsolidación) y sobreconsolidado (inferior)"
      ]
    }
  ],
  claves: [
    "Construcciones C-0 a C-4 y terrenos T-1 a T-3 fijan la intensidad del reconocimiento; los sótanos cuentan como plantas",
    "Mínimo 3 puntos de reconocimiento; en C-0 y T-1 la penetración se complementa siempre con calicatas u otras técnicas",
    "Unidad geotécnica resistente: comprobarla en 2 m más 0,3 m por planta; profundas: carga a 2/3 de la longitud y 5D bajo la punta en pilotes columna",
    "Cimentación profunda: extremo inferior a más de 8 veces el diámetro o ancho",
    "Zapata rígida: vuelo v ≤ 2h; flexible: v > 2h",
    "Solera de asiento: espesor mínimo 10 cm; excavación 10 a 15 cm por encima si no se hormigona en seguida",
    "Zapatas a distinto nivel: 1H:1V en rocas y suelos duros; 2H:1V en suelos flojos a medios",
    "Sulfatos de 3000 mg/kg o más en el terreno (600 en el agua): cementos con resistencia adicional a los sulfatos",
    "Hormigón de pilotes: 325 kg/m³ en seco y 375 kg/m³ sumergido; A/C máx. 0,6",
    "Ensayos de integridad: 1 por cada 20 pilotes; 2 por cada 20 en aislados de 45 a 100 cm; 5 por cada 20 en aislados de más de 100 cm",
    "C-3 y C-4: nivelación obligatoria del 10 % de los pilares, mínimo 4 referencias, precisión 0,1 mm",
    "Pantallas continuas: espesor 0,4 a 1,50 m; muretes guía de 0,5 a 1,5 m de profundidad",
    "Tubo Tremie: diámetro interior de más de 150 mm, inmersión de 3 m, ritmo de más de 25 m³/h",
    "Taludes en suelos: γR = 1,5 (persistentes y transitorias) y 1,1 (extraordinarias)",
    "Subpresión: 0,9 sobre las permanentes estabilizadoras; γM 1,25 (drenada) y 1,40 (sin drenaje)"
  ],
  memorizacion: {
    tablas: [
      {
        titulo: "Tipos de construcción (tabla 3.1)",
        columnas: ["Tipo", "Descripción"],
        filas: [
          ["C-0", "Menos de 4 plantas y superficie construida inferior a 300 m²"],
          ["C-1", "Otras construcciones de menos de 4 plantas"],
          ["C-2", "Entre 4 y 10 plantas"],
          ["C-3", "Entre 11 y 20 plantas"],
          ["C-4", "Conjuntos monumentales o singulares, o de más de 20 plantas"]
        ],
        nota: "En el cómputo de plantas se incluyen los sótanos. C-3 y C-4 arrastran exigencias propias: nivelación obligatoria (4.6.5), rechazo a las 24 h en arcillas (5.4.2.2) y pruebas dinámicas de hinca contrastadas con pruebas de carga (5.4.4)."
      },
      {
        titulo: "Grupos de terreno (tabla 3.2)",
        columnas: ["Grupo", "Descripción"],
        filas: [
          ["T-1 Favorables", "Poca variabilidad; práctica habitual de cimentación directa mediante elementos aislados"],
          ["T-2 Intermedios", "Variabilidad, o no siempre la misma solución de cimentación, o rellenos antrópicos de cierta relevancia que probablemente no superen 3,0 m"],
          ["T-3 Desfavorables", "Los no clasificables en los anteriores; en especial: expansivos, colapsables, blandos o sueltos, kársticos en yesos o calizas, variables, rellenos antrópicos de más de 3 m, zonas de deslizamientos, rocas volcánicas en coladas delgadas o con cavidades, desnivel de más de 15º, residuales y marismas"]
        ],
        nota: "Trampa: 3 m es la frontera de los rellenos entre T-2 y T-3; 15º la del desnivel. En T-3 el número de determinaciones de laboratorio nunca será inferior al del T-2."
      },
      {
        titulo: "Distancias máximas y profundidades orientativas (tabla 3.3)",
        columnas: ["Construcción", "T-1: dmáx (m)", "T-1: P (m)", "T-2: dmáx (m)", "T-2: P (m)"],
        filas: [
          ["C-0, C-1", "35", "6", "30", "18"],
          ["C-2", "30", "12", "25", "25"],
          ["C-3", "25", "14", "20", "30"],
          ["C-4", "20", "16", "17", "35"]
        ],
        nota: "P es la profundidad orientativa bajo el nivel final de la excavación. Mínimo 3 puntos: si dmáx excede las dimensiones de la parcela, se reduce. Más de 10.000 m²: reducción de densidad de hasta el 50 % sobre el exceso."
      },
      {
        titulo: "Sondeos mecánicos mínimos y sustitución por penetración (tabla 3.4)",
        columnas: ["Construcción", "Mínimo T-1", "Mínimo T-2", "% sustitución T-1", "% sustitución T-2"],
        filas: [
          ["C-0", "—", "1", "—", "66"],
          ["C-1", "1", "2", "70", "50"],
          ["C-2", "2", "3", "70", "50"],
          ["C-3", "3", "3", "50", "40"],
          ["C-4", "3", "3", "40", "30"]
        ],
        nota: "El porcentaje es la parte del total de puntos que puede sustituirse por pruebas continuas de penetración cuando los sondeos superan el mínimo."
      },
      {
        titulo: "Categoría mínima de las muestras (3.2.4 y tabla 3.5)",
        columnas: ["Categoría", "Qué conserva", "Ensayos que la exigen como mínimo"],
        filas: [
          ["A", "Estructura, densidad, humedad, granulometría, plasticidad y componentes químicos estables", "Peso específico aparente y porosidad, permeabilidad, resistencia, deformabilidad y expansividad"],
          ["B", "Humedad, granulometría, plasticidad y componentes químicos estables", "Humedad y peso específico de las partículas"],
          ["C", "No cumple las especificaciones de la B", "Identificación organoléptica, granulometría, límites de Atterberg, materia orgánica y CaCO3, y sulfatos solubles"]
        ],
        nota: "Tabla 3.5 del TXT con las columnas separadas: la asignación se ha hecho por orden de filas (12 propiedades y 12 categorías). Las muestras se parafinan o protegen y se toman también muestras de agua de los acuíferos."
      },
      {
        titulo: "Tipos de cimientos directos (tabla 4.1)",
        columnas: ["Cimiento", "Elementos a los que sirve"],
        filas: [
          ["Zapata aislada", "Pilar aislado, interior, medianero o de esquina"],
          ["Zapata combinada", "2 o más pilares contiguos"],
          ["Zapata corrida", "Alineaciones de 3 o más pilares o muros"],
          ["Pozo de cimentación", "Pilar aislado"],
          ["Emparrillado", "Conjunto de pilares y muros distribuidos, en general, en retícula"],
          ["Losa", "Conjunto de pilares y muros"]
        ],
        nota: "Formas: interior cuadrada; medianería rectangular con la mayor dimensión paralela a la medianería; esquina cuadrada; combinada rectangular o trapecial."
      },
      {
        titulo: "Pilotes hormigonados in situ aislados según diámetro (5.1.2.2.5)",
        columnas: ["Diámetro", "¿Aislado?", "Condición"],
        filas: [
          ["Menor de 0,45 m", "No", "Salvo elementos de poca responsabilidad"],
          ["0,45 a 1,00 m", "Sí", "Arriostramiento en dos direcciones ortogonales e integridad controlada (5.4)"],
          ["Mayor de 1,00 m", "Sí, sin arriostramiento", "Integridad controlada y armado para excentricidades y momentos"]
        ],
        nota: "Los mismos cortes (45 y 100 cm) fijan la frecuencia de los ensayos de integridad: 1 por cada 20 pilotes en general, 2 por cada 20 en aislados de 45 a 100 cm y 5 por cada 20 en aislados de más de 100 cm (5.4.2.1)."
      },
      {
        titulo: "Tolerancias de ejecución de pilotes (5.4.3)",
        columnas: ["Pilote", "Posición en la plataforma", "Inclinación"],
        filas: [
          ["In situ", "e < 0,1·Deq si Deq ≤ 1,5 m; e < 0,15 m si Deq > 1,5 m", "i < 0,02 m/m si θ ≤ 4º; i < 0,04 m/m si θ > 4º"],
          ["Prefabricado hincado", "En tierra: el mayor entre el 15 % de Deq y 5 cm; en agua: según proyecto", "i < 0,02 m/m si θ ≤ 4º; i < 0,04 m/m si θ > 4º"]
        ],
        nota: "Tolerancias más estrictas, en el Pliego y antes de empezar. El centro del pilote es el de gravedad de las armaduras longitudinales, o el del mayor círculo inscrito si no está armado."
      },
      {
        titulo: "Hormigón de pilotes y de pantallas",
        columnas: ["Parámetro", "Pilotes in situ (5.4.1.1)", "Pantallas (6.4.1.2)"],
        filas: [
          ["Cemento", "325 kg/m³ en seco; 375 kg/m³ sumergido", "Recomendado 325 kg/m³ en seco sin freático; 375 kg/m³ sumergido; mínimo por árido: 350 (32 mm), 370 (25), 385 (20), 400 (16)"],
          ["Agua/cemento", "Máx. 0,6", "Entre 0,45 y 0,6, aprobada por el Director de Obra"],
          ["Finos ≤ 0,125 mm (con cemento)", "400 o 450 kg/m³ según árido grueso (corte en 8 mm)", "≤ 450 kg/m³ con árido de hasta 16 mm; ≤ 400 kg/m³ en el resto"],
          ["Cono de Abrams", "130-180 mm en seco; 160 mm o más bombeado o bajo agua; 180 mm o más bajo fluido estabilizador", "160-220 mm; recomendado no inferior a 180 mm"],
          ["Mantenimiento", "No inferior a 100 mm durante 4 h y todo el hormigonado", "No inferior a 100 mm durante 4 h y todo el hormigonado del panel"],
          ["Árido", "Máx. 32 mm o 1/4 de la separación de redondos; preferible 25 mm rodado, 20 mm machaqueo", "Separación de barras de al menos 5 veces el árido"]
        ],
        nota: "Las materias primas de pantallas remiten a las de pilotes (6.4.1.2.2)."
      },
      {
        titulo: "Tubo Tremie",
        columnas: ["Regla", "Valor"],
        filas: [
          ["Inicio en pilotes (5.4.2.1)", "No descansa en el fondo: se eleva unos 20 cm"],
          ["Inicio en pantallas (6.4.1.2.4)", "Sobre el fondo y levantado 10 a 20 cm, con tapón o «pelota»"],
          ["Diámetro interior", "Mayor de 6 veces el árido máximo y de 150 mm"],
          ["Diámetro exterior", "No más del mínimo de 0,50 de la anchura de la pantalla y 0,80 de la anchura interior de la jaula"],
          ["Recorrido horizontal por tubo", "Máx. 2,50 m"],
          ["Inmersión", "Al menos 3 m; 2 m si se conoce con precisión el nivel del hormigón"],
          ["Ritmo y continuidad", "Conveniente más de 25 m³/h; dentro del 75 % del comienzo de fraguado"]
        ],
        nota: "En pilotes con entubación recuperable el resguardo es de 3 m de hormigón fresco sobre el extremo inferior de la tubería."
      },
      {
        titulo: "Coeficientes de seguridad del capítulo 7",
        columnas: ["Comprobación", "Coeficientes"],
        filas: [
          ["Taludes en suelos, sin construcciones afectadas (7.2.2.1)", "γR = 1,5 persistentes y transitorias; γR = 1,1 extraordinarias; γE = γF = γM = 1"],
          ["Subpresión, acciones desestabilizadoras (7.4.3)", "1 (permanentes) y 1,5 (variables)"],
          ["Subpresión, acciones estabilizadoras (7.4.3)", "0,9 (minoración de las permanentes)"],
          ["Subpresión, resistencia del terreno (7.4.3)", "γM = 1,25 drenada; γM = 1,40 sin drenaje"]
        ],
        nota: "Las roturas hidráulicas son cuatro: subpresión, levantamiento del fondo, erosión interna y tubificación."
      },
      {
        titulo: "Fracciones del suelo (anejo A)",
        columnas: ["Fracción", "Tamaño", "Subdivisión"],
        filas: [
          ["Arcilla", "Menos de 0,002 mm", "Con límites plástico y líquido"],
          ["Limo", "0,002 a 0,06 mm", "Con plasticidad se comporta como arcilla; sin ella, como arena"],
          ["Arena", "0,06 a 2 mm", "Fina hasta 0,2; media hasta 0,6; gruesa más de 0,6"],
          ["Grava", "2 a 60 mm", "Fina hasta 6; media hasta 20; gruesa más de 20"]
        ],
        nota: "Suelo cohesivo: finos con plasticidad de al menos el 35 % en peso. Suelo granular: arenas y gravas de más del 65 %. El 35 % de finos es también el corte del 3.2.6 para los estados límite."
      }
    ],
    datos: [
      "Estudio geotécnico: en la fase inicial del proyecto y antes de que la estructura esté totalmente dimensionada; autor: proyectista, otro técnico competente o Director de Obra (3.1).",
      "Mínimo 3 puntos de reconocimiento (3.2.1).",
      "Profundidad del reconocimiento: aumento neto de tensión de hasta el 10 % de la tensión efectiva vertical previa; unidad resistente comprobada en 2 m más 0,3 m por planta; reparto 1H:2V (3.2.1).",
      "Cimentaciones profundas: carga a 2/3 de la longitud de los pilotes; pilotes columna: unos 5D bajo la punta (3.2.1).",
      "Agua freática: al menos una muestra en el 50 % de los sondeos; sulfatos: 3000 mg/kg en el terreno y 600 en el agua (3.2.6).",
      "Laboratorio: tabla 3.7 para hasta 2000 m², multiplicada por (s/2000)^1/2 en superficies mayores; para C-3 o C-4 se recomienda incrementarla un 50 % (3.2.6).",
      "Perfiles geotécnicos: mínimo 2 en C-0 y C-1, 3 en el resto (3.3).",
      "Clasificación sísmica de las unidades: municipios con aceleración de al menos 0,08 g; justificar si no se exploran 30 m; justificación más matizada cuanto más se aparte C de 1,15 (3.3).",
      "Zapata rígida: v ≤ 2h (4.1.1). Solera de asiento: 10 cm mínimo (4.5.1.2).",
      "Excavación: 10 a 15 cm por encima de la cota si no se hormigona en seguida; profundizar 0,5 a 0,8 m bajo la rasante; llaves cada 10 m como máximo en cimientos muy largos (4.5.1.3).",
      "Drenaje: perforaciones con al menos 5 cm por metro; empedrados con 3 a 4 cm por metro (4.5.1.3.5).",
      "Nivelación C-3 y C-4: 10 % de los pilares, un punto cada 20 m de muro, mínimo 4 referencias, precisión 0,1 mm (4.6.5).",
      "Cimentación profunda: más de 8 veces el diámetro o ancho (5.1.1); hinca de más de 8 veces el diámetro equivalente (5.1.2.2.4).",
      "Barrena continua: armadura hasta un mínimo de 6 m o 9D; prohibida (salvo medidas) con inclinación de más de 6º o capas inestables de más de 3 diámetros; terrenos inestables: D60/D10 < 2, N < 7 o cu < 15 kPa (5.4.1.1).",
      "Entubación recuperable: 3 m de hormigón fresco por encima del extremo inferior de la tubería (5.4.1.1).",
      "Pantallas continuas: espesor de 0,4 a 1,50 m y paneles de 2,5 a 4,5 m (6.1.1.1); pantallas de pilotes no estancas: separación entre ejes inferior a 2 diámetros (6.1.1.2).",
      "Muretes guía: 0,5 a 1,5 m de profundidad; separación 20 a 50 mm mayor que la pantalla; conveniente 1,5 m sobre el máximo freático (6.4.1.2.1).",
      "Lodo tixotrópico (tabla 6.6): densidad límite 1,10 g/ml (fresco), 1,20 (listo para reempleo) y 1,15 (antes de hormigonar); viscosidad Marsh 32 a 50 s (32 a 60 en reempleo); pH 7 a 11 (7 a 12 en reempleo); arena antes de hormigonar 3 %.",
      "Normas UNE citadas: EN 1536:2011+A1:2016 (pilotes in situ), EN 12699:2016 (hincados), EN 1538:2011+A1:2016 (pantallas) y 80303-1:2017 (cementos resistentes a sulfatos)."
    ],
    excepciones: [
      "Salvo justificación, el reconocimiento no puede ser inferior al del DB (3.1); y las reglas de densidad no se aplican a los estudios de los proyectos de urbanización (3.2.1).",
      "La unidad geotécnica resistente sustituye al criterio del 10 % de la tensión cuando las presiones de la cimentación no producen deformaciones apreciables (3.2.1).",
      "Geofísica: nunca como único método; siempre contrastada con sondeos mecánicos (3.2.2).",
      "La rigidez estructural de la zapata (v ≤ 2h) no presupone ninguna distribución de presiones en el terreno (4.1.1).",
      "No es aconsejable apoyar directamente las vigas de unión entre zapatas en terrenos expansivos o colapsables (4.1.1).",
      "Agotamiento en terrenos con riesgo de sifonamiento: desde pozos filtrantes y nunca desde sumideros (4.5.2.2).",
      "Pilotes in situ de menos de 0,45 m: no aislados, salvo elementos de poca responsabilidad (5.1.2.2.5).",
      "Barrena continua: no aislados salvo registro continuo de parámetros; no con más de 6º salvo control del direccionado y de la armadura; no con capas inestables de más de 3D salvo pilotes de prueba o registro continuo con tubo telescópico (5.4.1.1).",
      "Micropilotes inyectados: su cálculo no se contempla en el DB (5.1.1).",
      "Pantallas excluidas: las que solo tienen por objeto la impermeabilización o estanqueidad (6.1.1). Muros excluidos: simple protección o revestimiento, exentos, depósitos no enterrados, muros-criba y suelo reforzado (6.1.2).",
      "Bataches: salvo justificación, solo sobre el nivel freático; no se empotran y su estabilidad depende exclusivamente de los anclajes (6.1.2).",
      "Tremie: la inmersión de 3 m puede bajar a 2 m si se conoce con precisión el nivel del hormigón, y reducirse más solo cerca de la superficie (6.4.1.2.4).",
      "Los rellenos con expansivos o solubles no se usan normalmente, y los heladizos o con hielo, nieve o turba no se emplean como relleno estructural (7.3.2).",
      "Escolleras o rellenos con muchos gruesos: no se aplica el Proctor; se comprueba por métodos de campo (7.3.4)."
    ]
  }
};
