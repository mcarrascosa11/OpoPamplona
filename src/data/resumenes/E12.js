// Resumen del tema E12. Formato: cabecera de src/data/resumenes.js.
export default {
  intro: "El Documento Basico SE-C del CTE desarrolla los requisitos de seguridad estructural de cimentaciones, elementos de contencion y acondicionamiento del terreno, estableciendo criterios de estudio geotecnico, tipologias constructivas, condiciones de ejecucion y sistemas de control.",
  bloques: [
    {
      h: "Estudio geotecnico: reconocimiento y contenido",
      nota: "Es la base de todo el DB-SE-C. La oposicion suele preguntar por la clasificacion de edificios y terrenos, el numero minimo de puntos de reconocimiento y las profundidades orientativas. La trampa esta en confundir los grupos de terreno T-1/T-2/T-3 con los tipos de construccion C-0 a C-4, o en olvidar que C-0 y T-1 exigen complementar la penetracion con calicatas.",
      items: [
        "Art. 3.1: el estudio geotecnico se acomete en fase inicial de proyecto, antes de que la estructura este totalmente dimensionada; su autoria corresponde al proyectista, tecnico competente o Director de Obra, con visado colegial",
        "Tabla 3.1: tipos de construccion C-0 (<4 plantas, <300 m2), C-1 (<4 plantas), C-2 (4-10), C-3 (11-20), C-4 (>20 o singulares); en el computo se incluyen sotanos",
        "Tabla 3.2: grupos de terreno T-1 (favorables), T-2 (intermedios), T-3 (desfavorables: expansivos, colapsables, blandos, karsticos, rellenos >3 m, deslizamientos, etc.)",
        "Minimo 3 puntos de reconocimiento; distancias maximas dmax y profundidades orientativas P segun Tabla 3.3",
        "Tabla 3.4: numero minimo de sondeos mecanicos y porcentaje de sustitucion por pruebas de penetracion segun tipo y grupo",
        "Profundidad de reconocimiento: cota donde el aumento neto de tension sea igual o inferior al 10% de la tension efectiva vertical preexistente; unidad geotecnica resistente comprobada en al menos 2 m + 0,3 m por planta",
        "Pilotes: cota de aplicacion de cargas a 2/3 de la longitud; pilotes columna: profundidad investigada aproximadamente 5D por debajo de la punta",
        "T-3 o reconocimientos insuficientes: intercalar puntos en zonas problematicas",
        "Prospeccion: C-0 y T-1 requieren complementar pruebas de penetracion con calicatas u otras tecnicas; no se pueden usar exclusivamente metodos geofisicos",
        "Muestras: categoria A (estructura, densidad, humedad), B (humedad, granulometria, plasticidad), C (restantes); Tabla 3.5 vincula categoria minima al ensayo",
        "Agua freatica: minimo una muestra en el 50% de los sondeos; sulfatos en suelos >=3000 mg/kg o en aguas >=600 mg/l exigen cementos SR/MR",
        "Contenido del estudio: unidades geotecnicas, perfiles (minimo 2 para C-0/C-1, 3 para resto), niveles freaticos, parametros resistentes y deformables, alternativas de cimentacion",
        "Confirmacion: Director de Obra aprecia validez y suficiencia una vez iniciadas las excavaciones"
      ]
    },
    {
      h: "Cimentaciones directas: tipologias y condiciones constructivas",
      nota: "Las cimentaciones directas son la solucion preferente cuando el terreno lo permite. El examen suele contrastar tipologias y sus aplicaciones, o preguntar por el concepto de rigidez estructural de zapatas. La cimentacion compensada es un concepto clave para losas con sotanos.",
      items: [
        "Definicion: reparten cargas en un plano de apoyo horizontal; se emplean cuando las condiciones lo permiten, habitualmente a poca profundidad (4.1)",
        "Tipologias: zapata aislada, combinada, corrida, pozo de cimentacion, emparrillado y losa (Tabla 4.1)",
        "Zapatas aisladas: interiores cuadradas; medianeria rectangulares (mayor dimension paralela a medianeria); esquina cuadradas; rigidez estructural: rigida si v <= 2h, flexible si v > 2h (4.1.1)",
        "Vigas de atado: evitan desplazamientos laterales; vigas centradoras: redistribuyen cargas y presiones, especialmente en zapatas excentricas (4.1.1)",
        "Zapatas combinadas/corridas: cuando capacidad portante es pequena, pilares proximos o cargas elevadas; corrida para 3+ pilares alineados o muros (4.1.2)",
        "Pozos: relleno con hormigon pobre o plinto de gran rigidez; comprobacion ELU y ELS analoga a zapatas aisladas anadiendo peso columna hormigon pobre (4.1.3)",
        "Emparrillados: terreno de baja capacidad y alta deformabilidad; zapatas corridas entrecruzadas en malla ortogonal para rigidizar y reducir asientos diferenciales (4.1.4)",
        "Losas: continuas, con refuerzos, pedestales, cajon, nervada o aligerada; cimentacion compensada cuando peso tierras excavadas aproximadamente igual a peso edificio, minimizando asientos (4.1.5)"
      ]
    },
    {
      h: "Condiciones constructivas de cimentaciones directas",
      nota: "Este apartado desarrolla la ejecucion material. La oposicion suele caer en las cotas de excavacion, las inclinaciones de taludes entre zapatas a diferentes niveles y el espesor de la solera de asiento. La presencia de agua y el hielo son condicionantes que siempre generan preguntas practicas.",
      items: [
        "Precauciones terreno: retirar elementos encontrados en fondo de excavacion; sustituir bolsadas blandas por material de compresibilidad equivalente o hormigon en masa (4.5.1.1)",
        "Solera de asiento: capa de regularizacion de hormigon, espesor minimo 10 cm (4.5.1.2)",
        "Terminacion excavacion: inmediatamente antes de solera; si no es posible, dejar 10-15 cm por encima de cota definitiva (4.5.1.3.1)",
        "Profundidad minima: 0,5-0,8 m por debajo de rasante aunque terreno firme sea superficial (4.5.1.3.2)",
        "Taludes entre zapatas a diferentes niveles: rocas y suelos duros 1H:1V; suelos flojos a medios 2H:1V (4.5.1.3.3)",
        "Agua en excavacion: agotamiento durante toda la ejecucion; saneamiento previo en arcillas con humedad proxima al limite liquido (4.5.1.3.4)",
        "Drenajes: empedrados con pendiente longitudinal >=3-4 cm/m; perforaciones inclinadas >=5 cm/m (4.5.1.3.5)",
        "Hielo: no construir antes del deshielo completo o excavar hasta retirar capa helada (4.5.1.3.6)",
        "Ejecucion zapatas HA: recubrimiento minimo segun EHE; armaduras verticales pilares hasta capa inferior de zapata; hormigonado a seccion completa si paredes cohesionan (4.5.1.4)",
        "Losas: solera de asiento 10 cm minimo; recubrimientos segun EHE (4.5.2)",
        "Pozos: limpieza y apisonamiento del fondo antes de relleno (4.5.3)"
      ]
    },
    {
      h: "Control de cimentaciones directas",
      nota: "El control se organiza en tres fases: terreno, materiales y ejecucion. La oposicion distingue entre comprobaciones durante la obra y finales. La nivelacion obligatoria en edificios C-3 y C-4 es un dato numerico recurrente.",
      items: [
        "Confirmacion estudio geotecnico: Director de Obra verifica validez antes de ejecutar; resultado incorporado a documentacion final (4.6.2)",
        "Comprobaciones terreno: coincidencia de nivel de apoyo, estratigrafia, nivel freatico, resistencia, ausencia de defectos y corrientes subterraneas (4.6.2.2)",
        "Materiales: idoneidad y resistencias conforme a proyecto (4.6.3)",
        "Durante ejecucion: replanteo, dimensiones, materiales, compactacion, encofrados, armaduras, recubrimientos, vibracion, vigas de atado/centradoras, agotamientos, juntas e impermeabilizaciones (4.6.4)",
        "Comprobaciones finales: comportamiento de zapatas, cargas admisibles, asientos; prohibicion de plantar arboles sobre terrenos expansivos (4.6.5)",
        "Edificios C-3 y C-4: sistema de nivelacion obligatorio para control de asientos; punto de referencia inmovil; minimo 10% de pilares o un punto cada 20 m en muros; minimo 4 referencias; precision 0,1 mm (4.6.5.2)"
      ]
    },
    {
      h: "Cimentaciones profundas: definiciones, tipologias y ejecucion",
      nota: "La definicion de profundidad (>8 veces el diametro) es el umbral que distingue directas de profundas. El examen contrasta pilotes por fuste frente a pilotes por punta, y las limitaciones de diametro para pilotes aislados hormigonados in situ. Los micropilotes inyectados quedan excluidos del calculo de este DB.",
      items: [
        "Definicion: cimentacion profunda cuando el extremo inferior esta a profundidad >8 veces su diametro o ancho (5.1.1.1)",
        "Clasificacion: pilote aislado, grupo de pilotes, zonas pilotadas, micropilotes; los micropilotes inyectados no se contemplan en el DB (5.1.1.3)",
        "Por forma de trabajo: por fuste (flotantes, sin estrato resistente claro) y por punta (columna, con estrato resistente) (5.1.2.1)",
        "Materiales: hormigon in situ, prefabricado, acero, madera, mixtos (5.1.2.2.1)",
        "Equivalencia cilindrica: por punta se iguala area; por fuste se iguala contorno; en perfiles H, contorno = 2 por (ancho ala + canto) (5.1.2.2.2)",
        "Pilotes-pantalla: factor reductor f = 7,0 + 3,0 por L/B para resistencia por punta (5.1.2.2.2)",
        "Prefabricados hincados: juntas con resistencia menor o igual a la del pilote; arriostramiento en dos direcciones ortogonales si son aislados (5.1.2.2.4)",
        "Hormigonados in situ: <0,45 m no aislados salvo poca responsabilidad; 0,45-1,00 m aislados con arriostramiento; >1,00 m aislados sin arriostramiento si se garantiza integridad (5.1.2.2.5)"
      ]
    },
    {
      h: "Condiciones constructivas y control de cimentaciones profundas",
      nota: "La ejecucion de pilotes hormigonados in situ exige controlar la continuidad del fuste. El examen suele preguntar por las dosificaciones de hormigon, las tolerancias de ejecucion y la frecuencia de ensayos de integridad. La norma UNE EN 1536 es la referencia constructiva.",
      items: [
        "Entubacion recuperable: resguardo minimo de 3 m de hormigon fresco por encima del extremo inferior de la tuberia (5.4.1.1.1)",
        "Camisa perdida: cuando existan corrientes subterraneas o riesgo de deformacion por presion lateral del hormigon (5.4.1.1.2)",
        "Excavacion en seco: solo si paredes estables y sin riesgo de alteracion; lodos tixotropicos en terrenos susceptibles (5.4.1.1.3-4)",
        "Barrena continua: no como pilotes aislados salvo registro continuo de parametros; no inclinacion >6 grados; no capas inestables >3D (5.4.1.1.9)",
        "Terrenos inestables: no cohesivos con cu<15kPa, N<7 o D60/D10<2 bajo freatico (5.4.1.1.10)",
        "Hormigon: cemento >=325 kg/m3 (seco), >=375 kg/m3 (sumergido); A/C <0,6; finos d<0,125 mm >=400-450 kg/m3; cono Abrams >=160 mm bombeado/sumergido, >=180 mm con fluido; mantener >=100 mm durante 4 h (5.4.1.1.2)",
        "Control ejecucion: parte con identificacion, terrenos, niveles, armaduras, hormigones, tiempos e incidencias (5.4.2.1)",
        "Ensayos de integridad: transparencia sonica, impedancia mecanica o sondeos mecanicos; frecuencia minima: 1/20 pilotes; aislados 45-100 cm: 2/20; >100 cm: 5/20 (5.4.2.1.8-9)",
        "Prefabricados hincados: no interrumpir hinca hasta rechazo previsto; en arcillas y C-3/C-4 comprobar rechazo a las 24 h (5.4.2.2)",
        "Tolerancias: posicion e<0,1 por Deq (Deq<=1,5m) o e<0,15m (Deq>1,5m); inclinacion i<0,02 m/m (theta<=4 grados) o i<0,04 m/m (theta>4 grados) (5.4.3)"
      ]
    },
    {
      h: "Elementos de contencion: pantallas, muros y ejecucion",
      nota: "La distincion entre pantallas y muros es estructural y de secuencia constructiva. Las pantallas se ejecutan previamente a la excavacion y son flexibles; los muros pueden ser de gravedad o en L. El examen suele preguntar por los tipos de pantalla y las exclusiones del DB.",
      items: [
        "Pantallas: ejecutadas previamente a la excavacion; empotramiento en terreno por debajo del fondo indispensable; estructuras flexibles; excluidas las de solo impermeabilizacion (6.1.1)",
        "Tipos de pantalla: continuas de hormigon, de pilotes, de tablestacas (hormigon, acero, madera) (Tabla 6.1)",
        "Pantallas continuas: espesor 0,4-1,50 m; paneles de 2,5-4,5 m de ancho; estabilidad con lodos tixotropicos en suelos sin cohesion bajo freatico (6.1.1.1)",
        "Pantallas de pilotes: separacion ejes <2D si no estanca; secantes bajo nivel freatico; efecto de arco en terreno entre pilotes (6.1.1.2)",
        "Muros: gravedad (equilibrio por peso), aligerados, contrafuertes, en L o mensula, bataches, sotano (6.1.2)",
        "Bataches: placas 3x3 m, espesor 40-80 mm, hormigonadas contra terreno, minimo 3 anclajes; solo sobre nivel freatico salvo justificacion (6.1.2.11)",
        "Muros de sotano: cajones cerrados; forjados actuan como arriostramiento transversal (6.1.2.12)"
      ]
    },
    {
      h: "Control de elementos de contencion",
      nota: "La ejecucion de pantallas con hormigon sumergido exige control estricto del lodo y del tubo Tremie. Las cifras de dosificacion, diametro del tubo y ritmo de hormigonado son clasicas en el examen. La norma de referencia es UNE EN 1538.",
      items: [
        "Pantallas continuas: especificaciones segun UNE EN 1538:2011+A1:2016 (6.4.1.2.1)",
        "Muretes guia: profundidad 0,5-1,5 m; distancia entre muretes 20-50 mm superior al espesor de pantalla; parte superior >=1,5 m sobre maxima cota prevista del nivel freatico (6.4.1.2.1)",
        "Hormigon: cemento >=325 kg/m3 (seco), >=375 kg/m3 (sumergido); A/C entre 0,45 y 0,6; cono Abrams 160-220 mm; mantener >=100 mm durante 4 h (6.4.1.2.3)",
        "Tubo Tremie: diametro interior >6 por tamano maximo arido y >150 mm; exterior <=0,5 por anchura pantalla y <=0,8 por anchura interior jaula; recorrido horizontal <=2,5 m por tubo (6.4.1.2.4)",
        "Inmersion tubo Tremie >=3 m en hormigon (2 m si se conoce nivel con precision); ritmo >25 m3/h; sin interrupcion dentro del 75% del tiempo de fraguado (6.4.1.2.4)",
        "Muros: cimentacion segun capitulos 4 y 5; excavacion con minima alteracion geotecnica; juntas y hormigonado segun EHE (6.4.1.3)",
        "Control: docilidad y fluidez del hormigon durante todo el hormigonado; caracteristicas de impermeabilizacion y relleno del trasdos (6.4.2)"
      ]
    },
    {
      h: "Acondicionamiento del terreno: excavaciones, rellenos y gestion del agua",
      nota: "Este capitulo aborda excavaciones, rellenos y gestion del agua. Los coeficientes de seguridad para taludes y las formulas de subpresion son materia de calculo y teoria. La distincion entre los cuatro tipos de rotura hidraulica es pregunta frecuente.",
      items: [
        "Excavaciones: taludes sin contencion mecanica anadida; analisis de estabilidad global, erosion y desecacion en expansivos (7.2.1)",
        "ELU taludes en suelos: gammaR=1,5 (persistentes/transitorias), gammaR=1,1 (extraordinarias); gammaE=gammaF=gammaM=1 (7.2.2.1)",
        "Estados limite de servicio: subsidencias por cambios en agua subterranea, fluencia, perdidas de suelo; levantamiento del fondo segun 6.3.2.2.2 (7.2.3)",
        "Control de movimientos: preceptivo si no se descartan ELS por calculo o si las hipotesis no son fiables (7.2.4)",
        "Rellenos: seleccion por granulometria, compactabilidad, plasticidad; no usar suelos expansivos, solubles ni susceptibles a helada (7.3.2)",
        "Compactacion: definir por ensayo Proctor; en materiales gruesos usar ensayos de campo o zonas de prueba (7.3.3-4)",
        "Gestion del agua: control de freatica y analisis de roturas hidraulicas (7.4.1)",
        "Agotamientos: gravedad, vacio o electroosmosis; esquema que evite subsidencias inaceptables en entorno (7.4.2)",
        "Roturas hidraulicas: subpresion, levantamiento del fondo, erosion interna y tubificacion (7.4.3)",
        "Subpresion: Ed,dst = Gd,dst + Qd,dst; Ed,stb = Gd,stb; gamma=1 y 1,5 sobre desestabilizadoras; gamma=0,9 sobre estabilizadoras; gammaM=1,25 (drenada), gammaM=1,40 (sin drenaje) (7.4.3)"
      ]
    }
  ],
  claves: [
    "Construcciones C-0 a C-4 y terrenos T-1 a T-3 definen la intensidad del reconocimiento geotecnico",
    "Minimo 3 puntos de reconocimiento; C-0 y T-1 requieren complementar penetracion con calicatas",
    "Profundidad unidad geotecnica resistente: 2 m + 0,3 m por cada planta",
    "Cimentacion profunda: profundidad > 8 veces el diametro o ancho",
    "Zapata rigida: vuelo v <= 2h; flexible: v > 2h",
    "Solera de asiento: espesor minimo 10 cm",
    "Suelos con sulfatos >=3000 mg/kg o aguas >=600 mg/l exigen cementos con resistencia a sulfatos (SR/MR)",
    "Hormigon pilotes: >=325 kg/m3 en seco, >=375 kg/m3 sumergido; A/C < 0,6",
    "Ensayos de integridad: minimo 1 por cada 20 pilotes; 2 por cada 20 si diametro 45-100 cm; 5 por cada 20 si diametro >100 cm",
    "Edificios C-3 y C-4: nivelacion obligatoria del 10% de pilares con precision 0,1 mm",
    "Pantallas continuas: espesor 0,4-1,50 m; muretes guia de 0,5-1,5 m de profundidad",
    "Tubo Tremie: diametro >150 mm, inmersion >=3 m, ritmo >25 m3/h",
    "Taludes en suelos: gammaR = 1,5 en situaciones persistentes/transitorias; gammaR = 1,1 en extraordinarias",
    "Subpresion: coeficiente de minoracion 0,9 sobre acciones permanentes estabilizadoras; gammaM = 1,25 (drenada) y 1,40 (sin drenaje)"
  ],
};
