// Resumen del tema E19. Formato: cabecera de src/data/resumenes.js.
// Rehecho el 02-11-2026 a partir de temas/E_Tema19.txt. El resumen anterior no era de este tema: desde el
// commit 32a8f99 (22-08-2026) contenía la LF 17/2020 (tema E20) y tablas del DFL 1/2017, Título IV (tema E31),
// que siguen en sus propios resúmenes. Vigencia contrastada con LexNavarra (detalle.asp?r=16273): el anexo II
// tiene la redacción del Decreto Foral 5/2006, de 16 de enero (BON de 30-01-2006), la misma del texto del tema,
// sin modificaciones posteriores hasta el 21-05-2026.
export default {
    intro:
      "Anexo II del Decreto Foral 142/2004, de 22 de marzo, por el que se regulan las condiciones mínimas de habitabilidad de las viviendas en la Comunidad Foral de Navarra: las condiciones de los edificios y viviendas de nueva planta, de las viviendas de nueva creación en edificio existente y de las rehabilitaciones equiparables a obra nueva, que además deben cumplir el anexo 1 (viviendas existentes, tema E18). Redacción vigente el 21-05-2026: la del Decreto Foral 5/2006, de 16 de enero (BON de 30-01-2006), que sustituyó el anexo entero; es la del texto del tema y la que recoge LexNavarra, sin cambios posteriores (el Decreto Foral 2/2016 solo tocó los arts. 6 y 9 del decreto, que son del E18). Tres capítulos y 21 artículos: I, ámbito de aplicación (art. 1); II, condiciones del edificio (arts. 2-10: servicios, seguridad, accesos y ascensores, circulaciones, escaleras, patios, garajes, trasteros y otras); III, condiciones de las viviendas (arts. 11-21: programa, alturas, estancias, baños, tendederos, circulación, iluminación y ventilación, instalaciones y medición de superficies). Es un tema de cifras: superficies, figuras inscribibles, alturas, anchuras y porcentajes.",
    bloques: [
      {
        h: "Capítulo I. Ámbito de aplicación (art. 1)",
        nota:
          "La clave es saber cuándo una rehabilitación cuenta como obra nueva. Hay tres vías: la económica (la intervención afecta a la totalidad de las viviendas y el PEM por m² construido afectado supera el 70 % del módulo ponderado), el vaciado total del edificio y la demolición y reposición de más del 60 % de la superficie de los forjados, sin contar la cubierta. Las dos últimas valen con independencia del presupuesto. Trampa: confundir el 70 % (presupuesto) con el 60 % (forjados).",
        items: [
          "Art. 1.1: cumplen este anexo Y el anexo 1 las viviendas de nueva planta, las de nueva creación en edificio existente y las rehabilitadas cuyas obras sean equiparables a obras de nueva planta",
          "Art. 1.2: la rehabilitación es equiparable a obra de nueva planta cuando la intervención vincula a la TOTALIDAD de las viviendas del edificio y su presupuesto de ejecución material, dividido por los m² CONSTRUIDOS afectados, supera el 70 % del módulo ponderado que se fija cada año para las actuaciones protegibles en materia de vivienda",
          "Art. 1.3: al pedir licencia de rehabilitación, para ver si se equipara a obra nueva, se acumulan los presupuestos de las obras del edificio terminadas en los CINCO AÑOS anteriores a la solicitud",
          "Art. 1.4: también se equipara, independientemente del presupuesto, el VACIADO TOTAL del edificio preexistente o la demolición y reposición de MÁS DEL 60 % de la superficie de los forjados, excluida la cubierta",
          "Art. 1.5: en rehabilitaciones parciales de edificios o viviendas, solo las condiciones del anexo compatibles con la naturaleza de la intervención",
          "Art. 1.6: en ampliaciones, las condiciones del anexo en la zona ampliada; la ampliación no puede deteriorar la habitabilidad de las viviendas existentes ni de sus elementos comunes",
        ],
      },
      {
        h: "Capítulo II. Servicios, instalaciones y seguridad del edificio (arts. 2-3)",
        nota:
          "Dos parejas de cifras que se cruzan: 40 cm (desnivel en elementos comunes o locales vinculados) y 60 cm (desnivel dentro de la vivienda y caída entre peldaños sin tabica); y 95 cm de altura de la protección con la esfera de 12 cm. En la ventilación colectiva: 8 plantas por colector (las dos últimas, con conducto propio), 400 cm² el colector y 150 cm² y 2 m las acometidas.",
        items: [
          "Art. 2.1-2.3: instalaciones de telecomunicaciones según su normativa; casilleros postales en los portales; bajantes de saneamiento ventiladas",
          "Art. 2.4.a: un colector sirve a un máximo de OCHO plantas y las DOS ÚLTIMAS llevan conducto independiente; sección mínima del colector, 400 cm²; rematado por aspirador estático o dinámico",
          "Art. 2.4.b: cada acometida sirve a un solo local, con longitud mínima de 2 m y sección mínima de 150 cm², protegida por rejilla; no se le conectan impulsores de aire ni campanas extractoras",
          "Art. 2.4.c: a un mismo colector no pueden conectarse conductos de ventilación y salidas de humos o gases",
          "Art. 3.1: protección, antepecho o barandado en desniveles de MÁS DE 40 cm en elementos comunes o locales vinculados a las viviendas, o de MÁS DE 60 cm dentro de ellas: resiste las acciones de la normativa de acciones en la edificación; altura mínima de 95 cm desde el pavimento terminado; por debajo de esa altura no pasa una esfera de 12 cm; si los huecos se cierran con elementos frágiles (vidrio, cerámica), armado u otro sistema justificado para que su rotura no los haga desaparecer",
          "Art. 3.2: en escaleras sin tabica, si el hueco entre peldaños permite una caída de más de 60 cm, tampoco pasa la esfera de 12 cm",
          "Art. 3.3: en edificios de más de una vivienda, puerta de portal con apertura accionable desde el exterior y desde el interior de cada vivienda, y dispositivo de comunicación oral entre viviendas y portal",
          "Art. 3.4: puerta de cada vivienda con cerradura de llave y mirilla",
        ],
      },
      {
        h: "Accesos y ascensores (art. 4)",
        nota:
          "Ascensor obligatorio cuando alguna vivienda tiene su acceso en la planta TERCERA sin contar la baja. Si no es obligatorio, la obra nueva de vivienda colectiva deja el hueco. Dos exenciones distintas: rehabilitación equiparable en edificios de menos de baja más seis plantas si es imposible instalarlo (4.4) y división de una vivienda si concurren a la vez las dos circunstancias del 4.5. Cabina: 1,20 x 1 m hasta 16 viviendas; 1,40 x 1,10 m con más de 16, salvo que haya más de un ascensor de 1 x 1,20 m. Máximo, 24 viviendas por ascensor.",
        items: [
          "Art. 4.1: los accesos al edificio y a las viviendas cumplen el art. 5 (circulaciones)",
          "Art. 4.2: ascensor obligatorio para CADA NÚCLEO de comunicaciones verticales en los edificios de vivienda colectiva con alguna vivienda cuyo acceso esté en la PLANTA TERCERA, sin contar la baja",
          "Art. 4.3: edificios de nueva planta de vivienda colectiva sin ascensor obligatorio: hueco para instalarlo después y espacios para sus accesos, maquinaria e instalaciones, con las mismas dimensiones que si estuviera instalado",
          "Art. 4.4: rehabilitaciones equiparables a obra nueva en edificios con menos de BAJA MÁS SEIS plantas: eximidas del ascensor o del hueco si su instalación es imposible",
          "Art. 4.5: división de una vivienda existente en otras más pequeñas: se puede no exigir ascensor ni hueco si concurren SIMULTÁNEAMENTE a) que no aumente la superficie destinada a vivienda y b) que el ascensor no pueda colocarse sin que cedan superficie propietarios de otras fincas del edificio distintos de los de la vivienda que se divide",
          "Art. 4.6: cabina: a) hasta 16 viviendas, 1,20 m de fondo y 1 m de anchura; b) más de 16, fondo mínimo de 1,40 m y anchura mínima de 1,10 m, salvo que exista más de un ascensor de 1 x 1,20 m. El fondo mínimo se mide perpendicularmente a todas las puertas de la cabina",
          "Art. 4.7: número de ascensores: no más de 24 viviendas por ascensor",
          "Art. 4.8: si hay plantas de garaje o trasteros de las viviendas, los ascensores llegan a ellas en las mismas condiciones de accesibilidad que al resto",
        ],
      },
      {
        h: "Circulaciones comunes y escaleras de uso común (arts. 5-6)",
        nota:
          "Alturas libres de los elementos comunes: 2,40 m en pasillos y rampas (2,20 m con falso techo si la zona no tiene más de 2,50 m de ancho; 2,10 m bajo vigas o conductos de no más de 0,80 m de fondo) y 2,10 m en escaleras. Anchuras: 1 m en pasillos, rampas y escaleras; 1,20 m en las mesetas a las que abren puertas. Iluminación de la escalera: 1 m² por planta y rosca, con 0,3 m² practicables; la cenital es una alternativa con sus propias cifras.",
        items: [
          "Art. 5.1: puerta del portal de 0,90 x 2,00 m como mínimo",
          "Art. 5.2: pasillos y rampas hasta las viviendas y sus dependencias: anchura mínima de 1 m y altura libre de 2,40 m; en zonas de anchura no mayor de 2,50 m, falso techo que deje 2,20 m; bajo vigas, conductos e instalaciones colgadas, 2,10 m si el elemento no tiene más de 0,80 m de fondo",
          "Art. 6.1: la escalera comunica todas las plantas con acceso a viviendas con la de acceso al edificio; si no baja a los sótanos de garaje, las salidas de emergencia de estos van directamente al exterior",
          "Art. 6.2.a: anchura mínima del peldañeado y de las mesetas intermedias, 1 m; altura libre mínima de 2,10 m en cualquier punto de la escalera y de los rellanos, hasta una distancia igual a la anchura de la escalera",
          "Art. 6.2.b: mesetas sin puertas, al menos la anchura de la escalera; mesetas a las que abren viviendas, locales o ascensor, 1,20 m, con el hueco de las puertas a 25 cm como mínimo del peldaño más próximo",
          "Art. 6.3.1: iluminación y ventilación directas a espacio exterior con al menos las condiciones de patio de fachada, o a patio interior: 1 m² por planta y rosca completa, con 0,3 m² practicables para ventilar; nunca a través de terrazas privadas, tendederos o terrazas comunes cubiertas",
          "Art. 6.3.2-6.3.3: la apertura no invade el recorrido de evacuación en 2 m de altura; el hueco, salvo en planta baja, ilumina directamente el recorrido de evacuación, a 3 m como máximo del punto más cercano de su eje",
          "Art. 6.3.4: iluminación cenital: hueco central de 1 m² en el que quepa un cilindro de 0,5 m de diámetro (no central: 1,3 m², cilindro de 0,8 m y 1,3 m de lado de contacto con la escalera), que llega siempre hasta la planta del portal; lucernario de 2 m² si forma menos de 45° con la horizontal o de 3 m² si más, con su punto más alto a menos de 17 m de la cota del portal, 0,80 m² de ventilación y situado verticalmente sobre el hueco",
          "Art. 6.3.5: distribuidor de planta sin iluminación ni ventilación propias e independizado de la escalera: conducto de ventilación hasta cubierta como el de cocinas y baños",
        ],
      },
      {
        h: "Patios (art. 7)",
        nota:
          "Los patios a los que abren estar, cocinas, dormitorios o escaleras son siempre descubiertos. Tres clases: de manzana (espacio exterior si cabe un cilindro de 12 m), interior o de parcela (ø 3 m y 0,25 H; 12 m² y H²/10; luces rectas de 3 m) y de fachada (entrante de más de 1,5 m, frente de 3 m, fondo no mayor de vez y media el frente; 6 m de luces rectas para los huecos de estar de sus laterales). H se mide desde el pavimento de la primera planta que se ilumina por el patio.",
        items: [
          "Patio de manzana: lo regula el planeamiento (dimensiones, alineaciones…), con independencia del número de parcelas que lo formen; si se puede inscribir un cilindro recto de 12 m de diámetro en la base, es espacio exterior a efectos de habitabilidad; si no, patio interior",
          "Patio interior o de parcela: en una sola parcela, o en varias si es mancomunado; si hay que sumar dimensiones para llegar a los mínimos, se inscribe su carácter mancomunado en el Registro de la Propiedad",
          "Dimensiones mínimas del patio de parcela: cilindro inscrito de ø 3 m y 0,25 H; superficie de 12 m² y H²/10; luces rectas de 3 m",
          "Luces rectas de un hueco: la mínima perpendicular libre de obstáculos que pueda aplicarse a cualquier punto de la superficie del hueco",
          "Altura H: desde la cota del pavimento de la primera planta que se ilumina por el patio hasta la coronación del edificio (punto más alto del cierre, antepecho o elemento de cubierta del perímetro del patio, del edificio de la misma parcela); si no es uniforme, media ponderada en la finca propia, sin contar chimeneas u otros elementos cuyo lado de contacto con el patio no pase de 60 cm. Por encima de la coronación caben elementos o plantas retranqueados que no sobresalgan de planos de 45°",
          "Patios de una sola planta de viviendas unifamiliares: condiciones básicas del art. 7.1 del anexo 1, salvo las luces rectas, que serán de al menos 3 m",
          "Entrantes de patios de parcela o de manzana: solo pueden abrirse en ellos huecos necesarios para iluminación y ventilación si tienen al menos las dimensiones de los patios de fachada",
          "Patio exterior o de fachada: entrantes de más de 1,5 m de profundidad en la fachada exterior o de patio de manzana, con frente abierto de al menos 3 m y profundidad (perpendicular a la fachada) no mayor de vez y media su anchura; si en sus paredes laterales abren huecos de salas de estar necesarios para la iluminación mínima, sus luces rectas serán de 6 m",
        ],
      },
      {
        h: "Garajes de nueva creación en edificios de vivienda (art. 8)",
        nota:
          "Artículo de muchas cifras. Ejes: altura libre de 2,10 m, puerta incluida; zaguán de 5 m de fondo al 6 % y 3,5 m de ancho con puerta de 3 m (en unifamiliar, 2,5 / 3 / 2,5 m); rampas de 3 m al 20 % en recta y de 3,5 m al 15 % en curva de radio inferior a 20 m, con radio mínimo de 6 m; pasillos de 3,5 m (4,5 m si las plazas forman más de 45°); plazas de 2,3 x 4,7 m (en línea, 2,2 x 5; con pared lateral, 2,8 x 4,7; para minusválidos, 3,20 x 4,70).",
        items: [
          "Art. 8.1.1-8.1.2: garaje es el local destinado al estacionamiento regular de vehículos; el artículo no se aplica a los garajes de uso público; en los de uso simultáneo público y privado, sí en el área de las plazas vinculadas a viviendas y en sus accesos",
          "Art. 8.1.3: en un garaje mancomunado no son salidas de emergencia las que atraviesan fincas o portales privados, salvo que se haya constituido la servidumbre",
          "Art. 8.1.4: altura libre mínima de 2,10 m en cualquier punto de plazas, rampas y circulación de vehículos o personas, incluido el espacio de la puerta de acceso",
          "Art. 8.2.1: rampa descendente que salve más de 1 m: zaguán con pendiente máxima del 6 % y 5 m de fondo mínimo antes de la rampa (sin contar acera ni calzada), 3,5 m de anchura y puerta de 3 m; en viviendas unifamiliares, 2,5 m de fondo, 3 m de anchura y puerta de 2,5 m, salvo que el garaje sea común a varias viviendas",
          "Art. 8.2.2: garajes de 100 o más plazas: acceso y salida de vehículos diferenciados, o rampa y acceso dobles; la rampa doble tendrá 5,40 m de anchura mínima",
          "Art. 8.2.3: rampas: en tramos rectos, 3 m de anchura y pendiente máxima del 20 %; en tramos curvos con radio inferior a 20 m, 3,5 m y 15 % (medidos en el eje de cada dirección); radio mínimo de curvatura en el eje, 6 m",
          "Art. 8.2.4: rampa de doble sentido sin visibilidad entre sus extremos o de más de 30 m: dispositivo que indique el sentido prioritario",
          "Art. 8.2.5: el garaje puede tener como acceso ascensor de vehículos o elevacoches: si es el único acceso de vehículos, un aparato por cada 20 plazas o fracción; si el garaje tiene 6 o más plazas, zaguán de 5 m de anchura por 10 m de fondo",
          "Art. 8.3: pasillos de vehículos de 3,5 m libres (4,5 m en todo el frente de las plazas que formen más de 45°), sin pilares ni otros elementos que reduzcan la anchura; en los giros, carril de 3 m con radio mínimo de 5 m en su eje; pasillos de personas de 1 m que no invaden las plazas; a través de una plaza solo se accede al trastero vinculado a esa plaza",
          "Art. 8.4.1-8.4.3: plaza plana con pendiente máxima del 6 %: 2,3 x 4,7 m con acceso frontal y 2,2 x 5 m en línea; limitada por pared lateral (salvo en línea), 2,8 x 4,7 m, con elementos que pueden reducir la anchura eficaz a 2,5 m en los 2,5 m del fondo; un elemento lateral de más de 1,2 m de largo se asimila a pared",
          "Art. 8.4.4-8.4.5: acceso a la plaza sin obstáculos en la prolongación de sus lados, con recorrido máximo de 5 m (si se supera, condiciones de pasillo); en los planos del proyecto, todas las plazas, rampas y pasillos representados, acotados y numerados, justificando los radios de giro",
          "Art. 8.4.6: plazas vinculadas a viviendas para minusválidos: 3,20 m de frente por 4,70 m de fondo; 2,30 m de anchura si tienen un lateral completo libre de obstáculos lindando con el pasillo",
        ],
      },
      {
        h: "Trasteros y otras condiciones del edificio (arts. 9-10)",
        nota:
          "Trastero: vinculado registralmente a la vivienda y destinado en exclusiva a sus enseres; puerta de 80 x 200 cm y ventilación de 0,5 volúmenes/hora. En planta baja, forjado separado 0,5 m del terreno si hay piezas vivideras; pendiente máxima del pavimento interior, 0,5 %.",
        items: [
          "Art. 9.1: trasteros = locales vinculados registralmente a la vivienda y destinados en exclusiva al almacenamiento de enseres de la propia vivienda",
          "Art. 9.2-9.3: accesos con las condiciones de circulación de los arts. 4 y 5; puerta con paso libre de 80 x 200 cm; ventilación que garantice una renovación mínima de 0,5 volúmenes por hora",
          "Art. 10: además del CTE, el reglamento de baja tensión, telecomunicaciones y demás normativa sectorial, la calidad de materiales y ejecución garantiza las condiciones básicas del anexo 1 y estas mínimas",
          "Art. 10.a: si hay dormitorio, cocina, comedor o sala de estar en planta baja, forjado separado 0,5 m del terreno formando cámara ventilada, u otra solución justificada en proyecto que aísle eficazmente de la humedad del terreno",
          "Art. 10.b: pendiente máxima del pavimento dentro de la vivienda, 0,5 %",
          "Art. 10.c: patios de parcela accesibles para su limpieza, salvo los de uso privativo con acceso desde la vivienda; siempre con desagüe sifónico para las pluviales",
        ],
      },
      {
        h: "Capítulo III. Programa, superficie mínima y alturas (arts. 11-12)",
        nota:
          "30 m² útiles y cuatro piezas: estar, dormitorio, baño y cocina. Alturas: 2,40 m general; 2,20 m con falso techo en distribuidores, aseos, cocinas y tendederos cubiertos; 2,20 m en rehabilitación sin sustituir forjados; 2 m en huecos de paso. Con techo inclinado de más del 30 %, lo que no supere 2,20 m no cuenta.",
        items: [
          "Art. 11.1: superficie útil total mínima de 30 m²; como mínimo, sala de estar, un dormitorio, un baño y una cocina",
          "Art. 11.2: la vivienda no sirve de paso obligado a otro uso o local; toda habitación a la que solo se accede desde la vivienda forma parte de ella a todos los efectos",
          "Art. 12.1: altura libre mínima de 2,40 m en techos horizontales o con pendiente inferior al 30 %; falsos techos que dejen 2,20 m en elementos de distribución, aseos, cocinas y tendederos cubiertos",
          "Art. 12.2: en rehabilitación de viviendas existentes sin sustituir forjados, 2,20 m",
          "Art. 12.3: techos inclinados de más del 30 %: la superficie que no supere 2,20 m de altura libre no computa para las superficies mínimas ni para inscribir figuras",
          "Art. 12.4-12.5: 2 m en huecos de paso y elementos singulares (puertas, arcos, vigas); en escaleras interiores, la altura que el art. 6 fija para las comunes (2,10 m)",
        ],
      },
      {
        h: "Sala de estar, cocina y dormitorios (arts. 13-15)",
        nota:
          "Cuadro del estar: con 1 o 2 dormitorios, 12 m² y rectángulo de 2,7 x 3,5 m; con más de 2, «+2 m²/D°» y rectángulo de 3 x 4 m; si estar y cocina son un solo espacio, +4 m² y comunicación de 3,50 m² sin obstáculos. Cocina: 5 m² (un dormitorio) o 7 m²; rectángulo de 3 x 1,60 m o cuadrado de 2,20 m. Dormitorios: uno de 10 m² con cuadrado de 2,50 m; los demás, 8 m² con cuadrado de 2,40 m o rectángulo de 4 x 2 m. Toda habitación de más de 4 m² con hueco de iluminación es dormitorio secundario.",
        items: [
          "Art. 13.1: sala de estar según el número de dormitorios: 1 o 2, 12 m² y rectángulo inscribible de 2,7 x 3,5 m; más de 2, «+2 m²/D°» y rectángulo de 3 x 4 m",
          "Art. 13.2: estar y cocina integrados en un solo espacio: a la superficie del cuadro se suman 4 m², con el mismo rectángulo mínimo en la zona de estar",
          "Art. 13.3: estar y cocina forman un mismo espacio si no pueden independizarse sin obra y su comunicación tiene al menos 3,50 m² sin obra, elemento fijo ni puerta que la interfiera",
          "Art. 14.1: cocina de 5 m² en viviendas de un solo dormitorio y de 7 m² en las demás; en ella se puede inscribir un rectángulo de 3 x 1,60 m o un cuadrado de 2,20 m de lado",
          "Art. 14.2: la cocina integrada en la sala de estar permite inscribir una de esas figuras, sin solaparse con la del estar",
          "Art. 14.3: la cocina independiente no es paso obligado a ninguna dependencia, salvo despensa, oficio o tendedero, ni da acceso directo a dormitorio o aseo",
          "Art. 15.1: al menos un dormitorio de 10 m² o más con cuadrado inscribible de 2,50 m de lado; los demás, 8 m² con cuadrado de 2,40 m o rectángulo de 4 x 2 m",
          "Art. 15.2: ningún dormitorio sirve de paso a otra habitación independiente, salvo baños o vestidores vinculados al propio dormitorio",
          "Art. 15.3: toda habitación independiente de más de 4 m² con hueco de iluminación cumple las condiciones de dormitorio secundario y se considera tal a todos los efectos (se excluyen aseos, cocina y oficios o despensas con acceso exclusivo desde la cocina); en rehabilitación, los dormitorios afectados solo en acabados cumplen el anexo I",
        ],
      },
      {
        h: "Baño, aseo y cuarto inodoro (art. 16)",
        nota:
          "Tres piezas con su superficie: baño de 2,50 m² (ducha, inodoro y lavabo, con reserva para bañera de 1,40 x 0,70 m), aseo de 1,70 m² (ducha o bañera, inodoro y lavabo) y cuarto inodoro de 1,50 m² y 0,9 m de ancho (inodoro y lavabo). Dotación: hasta 3 dormitorios, 1 baño; 4 o más, 1 baño + 1 aseo. Es la redacción del DF 5/2006 y la preguntó Zizur Mayor en 2026 (reserva 5).",
        items: [
          "Art. 16.1: baño de 2,50 m² como mínimo con ducha, inodoro y lavabo; reserva de espacio para cambiar el plato de ducha por una bañera de 1,40 x 0,70 m",
          "Art. 16.2: aseo de 1,70 m² como mínimo con ducha o bañera, inodoro y lavabo",
          "Art. 16.3: equipamiento mínimo: hasta 3 dormitorios, 1 baño; 4 o más dormitorios, 1 baño + 1 aseo",
          "Art. 16.4: al menos en un baño se puede inscribir un cilindro de 120 cm de diámetro y 70 cm de altura sin más reformas que quitar el bidé y cambiar el giro de la puerta",
          "Art. 16.5: un baño o un aseo accesible desde los espacios de circulación; si todos los dormitorios tienen baño privativo, basta un cuarto inodoro con acceso desde la circulación; el espacio del inodoro solo abre a anteaseo, circulación o dormitorio",
          "Art. 16.6-16.7: separación entre paramentos de 1,20 m sin aparatos enfrentados y de 1,60 m con aparatos enfrentados; anchura mínima de 0,90 m donde haya aparatos; 60 cm libres no solapables para lavabo, inodoro y bidé",
          "Art. 16.8: cuarto inodoro con inodoro y lavabo como mínimo, 1,50 m² y anchura no inferior a 0,9 m",
          "Art. 16.9-16.10: con techo inclinado de más del 30 %, 2 m libres sobre los aparatos y en la circulación entre ellos y con la puerta; suelos y paredes revestidos de azulejo o material impermeable hasta 2 m",
        ],
      },
      {
        h: "Tendederos y espacios de circulación interior (arts. 17-18)",
        nota:
          "Tendedero: 6 m de cuerda en tramos de al menos 1 m, separados 20 cm, con 150 cm libres debajo y protección de vistas (salvo a patio interior o de manzana sin acceso público). Cerrado: 2,4 m² y hueco practicable de 1,20 m². Circulación interior: vestíbulo de 1,10 m, pasillos de 90 cm (80 cm en estrechamientos), puertas de 80 cm y escaleras de 90 cm con huella de 27 cm y contrahuella de 19 cm.",
        items: [
          "Art. 17.1: en toda vivienda se puede tender ropa al exterior con protección de vistas desde la calle: 6 m de cuerda en tramos de 1 m o más, separados entre sí o de otros elementos 20 cm como mínimo, con 150 cm libres bajo las cuerdas (sin obstáculos ni barrido de puertas); sin protección de vistas si se tiende a patio interior o a patio de manzana sin acceso público",
          "Art. 17.2-17.3: el tendedero abierto, sus cuerdas y celosías no interfieren las luces rectas de huecos necesarios para la iluminación mínima; el cerrado se separa de la vivienda con cierres y huecos como los exigidos frente al exterior (normativa térmica, acústica o sectorial)",
          "Art. 17.4-17.5: tendedero cerrado de 2,4 m² como mínimo, con cuerdas en las condiciones del 17.1, hueco practicable al exterior de al menos 1,20 m² y evacuación de agua; no puede abrir a él ningún hueco necesario para iluminar o ventilar la vivienda",
          "Art. 17.6-17.7: en las rehabilitaciones a las que se aplica el anexo se admiten patios destinados solo a tender, de 2 x 2 m en planta como mínimo, para un máximo de dos viviendas por planta; pueden estar cubiertos, con 2 m² de ventilación permanente en la coronación, toma de aire exterior de 0,10 m² en la planta más baja y sumidero",
          "Art. 18.1-18.3: vestíbulo con cuadrado inscribible de 1,10 m tras la puerta de entrada; pasillos de 90 cm, con estrechamientos hasta 80 cm si el elemento que los produce no tiene más fondo que la anchura libre que deja; puertas de paso interiores de 80 cm",
          "Art. 18.4-18.5: escaleras interiores de 90 cm de anchura, huella mínima de 27 cm y contrahuella máxima de 19 cm (no se aplica a las de acceso a espacios no habitables, como altillos); peldaños compensados con huella de 27 cm medida a 45 cm del borde interior",
        ],
      },
      {
        h: "Iluminación y ventilación (art. 19)",
        nota:
          "El estar abre a espacio libre exterior o patio de manzana (salvo en unifamiliar); cocina, comedor y dormitorios pueden abrir también a patio de parcela; siempre con 3 m de luces rectas. Hueco: 1 m² y 10 % de la superficie útil (solo cuentan los primeros 20 m²; +50 % si abre a espacio cubierto o mirador), con al menos un 70 % de vidrio transparente y a no más de 2 m del rectángulo mínimo. Ventilación directa: un tercio de la iluminación mínima. Conductos de tiro forzado en cocinas y baños, campana de 10 cm, rejilla de 70 cm² en aseos y 300 m³/h si estar y cocina son un mismo espacio.",
        items: [
          "Art. 19.1: sala de estar con iluminación y ventilación de espacio libre exterior o patio de manzana, excepto en vivienda unifamiliar; cocina, comedor y dormitorios pueden abrir también a patio de parcela; luces rectas mínimas de 3 m en todos los casos",
          "Art. 19.2: hueco de iluminación de 1 m² y el 10 % de la superficie útil en planta de cada habitación; si abre a espacio cubierto o mirador, la superficie se incrementa un 50 %, y el hueco exterior del mirador tendrá al menos el 10 % de la superficie útil del mirador más la de las habitaciones que abren a él",
          "Art. 19.3-19.5: solo cuentan los primeros 20 m² de cada habitación; el hueco cuenta entero si tiene al menos un 70 % de vidrio transparente (si no, solo la parte transparente); los huecos necesarios, a no más de 2 m en planta del rectángulo mínimo inscribible",
          "Art. 19.6-19.7: estar y dormitorios no se iluminan a través de galerías de uso común; en rehabilitaciones con fachada mantenida por imposición administrativa basta el punto 19.4 del anexo 1",
          "Art. 19.8-19.9: en estar, cocina y dormitorio principal, un hueco practicable de 70 x 70 cm libres en la banda de 95 a 180 cm sobre el pavimento; huecos de ventilación directa de al menos un tercio de la superficie mínima de iluminación, con el mecanismo de apertura a 1,50 m de altura como máximo",
          "Art. 19.10: cocina y baños, aseos o cuartos inodoros con conducto de ventilación por tiro forzado permanente hasta cubierta, independiente de los de campanas, calderas u otros fines y rematado con pieza aspiradora; también las despensas sin ventilación directa; la cocina, además, con conducto independiente para la campana de 10 cm de diámetro mínimo",
          "Art. 19.11-19.12: puertas de aseos con rejilla o hueco inferior de 70 cm² como mínimo; si estar y cocina forman un mismo espacio, además de la ventilación permanente, ventilación mecánica hasta cubierta de 300 m³/h",
        ],
      },
      {
        h: "Instalaciones mínimas de las viviendas (art. 20)",
        nota:
          "Agua: presión entre 1 y 4,5 kg/cm² y velocidad de 1,5 m/s como máximo; agua caliente de 13 l/min a 40 °C o 75 l acumulados. Calefacción capaz de llegar a 20 °C. Persiana o contraventana exterior en todos los huecos con vidrio.",
        items: [
          "Art. 20.1: la vivienda tiene los servicios del art. 2, canalizados por su interior según los reglamentos técnicos de cada instalación",
          "Art. 20.2: redes de agua fría y caliente en cocina y aseos con presión entre 1 y 4,5 kg/cm² y velocidad máxima de 1,5 m/s; agua caliente instantánea de 13 l/min a 40 °C o acumulada de 75 l",
          "Art. 20.3-20.4: llaves de corte en cada dependencia con fontanería; en la cocina, tomas de agua y desagüe para fregadero, lavadora y lavavajillas, con llave de corte independiente para lavadora y lavavajillas; red eléctrica empotrada y toma de tierra según el Reglamento Electrotécnico de Baja Tensión",
          "Art. 20.5: tomas de TV, radio, telefonía y demás telecomunicaciones según su normativa",
          "Art. 20.6: todos los huecos exteriores con vidrio llevan persiana o contraventana exterior para oscurecer y proteger del sol; se admite oscurecimiento interior si otros elementos exteriores protegen de la radiación solar",
          "Art. 20.7: sistema de calefacción que permita alcanzar 20 °C en todo el interior",
        ],
      },
      {
        h: "Medición de superficies (art. 21)",
        nota:
          "Construida = cierre exterior y ejes de medianeras + 50 % de terrazas y balcones privativos (100 % de miradores y tendederos cerrados) + parte proporcional de comunes. Útil = apartados a) y b) menos muros, tabiques, antepechos, estructura vertical, conductos de más de 100 cm² y lo que tenga menos de 1,50 m de altura libre. Las cifras deben figurar en todo documento y en la publicidad de venta o alquiler. El DF 61/2013 (tema E15) mide la superficie útil con este artículo.",
        items: [
          "Art. 21.1: superficies útiles y construidas medidas con estos criterios; las cifras deben figurar en todo documento que se refiera a ellas y en la publicidad de venta o alquiler",
          "Art. 21.2.a y c: superficie construida = la limitada por el perímetro exterior del cierre de las fachadas y los ejes de medianeras o separaciones con otras viviendas, locales o elementos comunes, más la parte proporcional de los elementos comunes",
          "Art. 21.2.b: más el 50 % de las superficies exteriores de uso privativo (terrazas, balcones…); miradores y tendederos cerrados, el 100 %; tendederos accesibles y abiertos, con el mismo criterio que las terrazas",
          "Art. 21.2.b: no computan las terrazas formadas por la cubierta plana de otro elemento si el edificio está en división horizontal y esa cubierta es elemento común, ni los espacios exteriores descubiertos de las viviendas en planta baja, aunque estén pavimentados",
          "Art. 21.3: superficie útil = apartados a) y b) menos muros, tabiques, antepechos de terrazas, elementos estructurales verticales, conductos exentos o que sobresalgan con sección horizontal de más de 100 cm² y la superficie con altura libre inferior a 1,50 m",
          "Art. 21.4: superficie útil de cada recinto o trastero: la comprendida en el perímetro de la cara interior de sus cerramientos, con las mismas deducciones",
          "Art. 21.5-21.6: garaje: superficie construida dentro del perímetro exterior de los cierres de la superficie cubierta y del eje de los que lo separan de otros usos o medianeras; superficie útil de una plaza: la del rectángulo que la delimita, libre de obstáculos, sin rampas, pasillos ni espacios residuales",
        ],
      },
    ],
    claves: [
      "Ámbito: obra nueva, viviendas nuevas en edificio existente y rehabilitaciones equiparables, que cumplen el anexo II y el anexo 1 (art. 1.1)",
      "Rehabilitación = obra nueva: totalidad de viviendas + PEM por m² construido > 70 % del módulo ponderado; o vaciado total; o demolición y reposición de más del 60 % de los forjados sin la cubierta (arts. 1.2 y 1.4); se acumulan las obras de los 5 años anteriores (art. 1.3)",
      "Protección de desniveles: más de 40 cm en elementos comunes, más de 60 cm dentro de la vivienda; 95 cm de altura; esfera de 12 cm (art. 3)",
      "Ascensor obligatorio con acceso a alguna vivienda en planta 3.ª sin contar la baja; cabina de 1,20 x 1 m (hasta 16 viviendas) o 1,40 x 1,10 m (más de 16, salvo más de un ascensor de 1 x 1,20 m); máximo 24 viviendas por ascensor (art. 4)",
      "Escalera común: 1 m de ancho; mesetas con puertas, 1,20 m (puertas a 25 cm del peldaño); altura libre de 2,10 m; hueco de 1 m² por planta con 0,3 m² practicables (art. 6)",
      "Patio de parcela: ø 3 m y 0,25 H; 12 m² y H²/10; luces rectas de 3 m. Patio de manzana = espacio exterior si cabe un cilindro de 12 m. Patio de fachada: más de 1,5 m de fondo, frente de 3 m, fondo no mayor de vez y media el frente (art. 7)",
      "Garaje: altura de 2,10 m; plaza de 2,3 x 4,7 m (en línea 2,2 x 5; con pared 2,8 x 4,7; minusválidos 3,20 x 4,70); rampa recta de 3 m al 20 %, curva de 3,5 m al 15 %; pasillo de 3,5 m (4,5 m con plazas a más de 45°) (art. 8)",
      "Vivienda: 30 m² útiles; estar + dormitorio + baño + cocina (art. 11.1)",
      "Altura libre: 2,40 m; 2,20 m con falso techo en distribuidores, aseos, cocinas y tendederos cubiertos y en rehabilitación sin sustituir forjados; 2 m en huecos de paso (art. 12)",
      "Estar de 12 m² con 1 o 2 dormitorios (rectángulo 2,7 x 3,5 m), +4 m² si es estar-cocina; cocina de 5 m² (un dormitorio) o 7 m² (rectángulo 3 x 1,60 o cuadrado de 2,20 m); dormitorio principal de 10 m² (cuadrado de 2,50 m), resto de 8 m² (cuadrado de 2,40 m o 4 x 2 m) (arts. 13-15)",
      "Baño 2,50 m², aseo 1,70 m², cuarto inodoro 1,50 m²; hasta 3 dormitorios, 1 baño; 4 o más, 1 baño + 1 aseo (art. 16)",
      "Tendedero: 6 m de cuerda en tramos de 1 m, separados 20 cm, 150 cm libres debajo; cerrado, 2,4 m² y hueco de 1,20 m² (art. 17)",
      "Circulación interior: vestíbulo de 1,10 m; pasillo de 90 cm (80 cm en estrechamientos); puertas de 80 cm; escalera de 90 cm, huella de 27 cm y contrahuella de 19 cm (art. 18)",
      "Iluminación: 1 m² y 10 % de la superficie útil (solo los primeros 20 m²; +50 % si abre a espacio cubierto o mirador); vidrio transparente de al menos el 70 %; ventilación de un tercio; luces rectas de 3 m (art. 19)",
      "Agua entre 1 y 4,5 kg/cm² y hasta 1,5 m/s; agua caliente de 13 l/min a 40 °C o 75 l; calefacción para 20 °C (art. 20)",
      "Superficie construida: 50 % de terrazas y balcones, 100 % de miradores y tendederos cerrados; útil: sin conductos de más de 100 cm² ni zonas de menos de 1,50 m de altura (art. 21)",
    ],
    memorizacion: {
      tablas: [
        {
          titulo: "Rehabilitación equiparable a obra de nueva planta (art. 1)",
          columnas: ["Vía", "Requisito", "¿Depende del presupuesto?"],
          filas: [
            ["Económica (1.2)", "La intervención vincula a la TOTALIDAD de las viviendas y el PEM dividido por los m² construidos afectados supera el 70 % del módulo ponderado anual de las actuaciones protegibles", "Sí: se acumulan las obras terminadas en el edificio en los 5 años anteriores a la solicitud de licencia (1.3)"],
            ["Vaciado (1.4)", "Vaciado total del edificio preexistente", "No: «independientemente de su presupuesto»"],
            ["Forjados (1.4)", "Demolición y reposición de más del 60 % de la superficie de los forjados, excluida la cubierta", "No: «independientemente de su presupuesto»"]
          ],
          nota: "Si no se llega por ninguna vía: rehabilitación parcial, con las condiciones del anexo compatibles con la intervención (1.5). Ampliación: condiciones del anexo en la zona ampliada, sin deteriorar lo existente (1.6). Trampa: el 70 % es del presupuesto; el 60 %, de los forjados."
        },
        {
          titulo: "Ascensores (art. 4)",
          columnas: ["Supuesto", "Regla", "Apartado"],
          filas: [
            ["Vivienda colectiva con alguna vivienda con acceso en planta 3.ª (sin contar la baja)", "Ascensor obligatorio en cada núcleo de comunicaciones verticales", "4.2"],
            ["Nueva planta de vivienda colectiva sin ascensor obligatorio", "Hueco y espacios para instalarlo después, con las dimensiones reales", "4.3"],
            ["Rehabilitación equiparable a obra nueva, edificio de menos de baja más seis plantas", "Exenta de ascensor o de hueco si su instalación es imposible", "4.4"],
            ["División de una vivienda en otras menores", "Puede no exigirse si concurren a la vez: no aumenta la superficie de vivienda y el ascensor exige que cedan superficie propietarios de otras fincas del edificio", "4.5"],
            ["Ascensor que sirve a 16 viviendas o menos", "Cabina de 1,20 m de fondo x 1 m de anchura", "4.6.a"],
            ["Ascensor que sirve a más de 16 viviendas", "Cabina de 1,40 m de fondo x 1,10 m de anchura como mínimo, salvo que exista más de un ascensor de 1 x 1,20 m", "4.6.b"],
            ["Número de ascensores", "No más de 24 viviendas por ascensor", "4.7"],
            ["Plantas de garaje o trasteros de las viviendas", "Los ascensores llegan en las mismas condiciones de accesibilidad", "4.8"]
          ],
          nota: "El fondo mínimo de la cabina se mide perpendicularmente a todas sus puertas. Trampa: «baja más seis» es la exención del 4.4, no la planta que obliga a poner ascensor."
        },
        {
          titulo: "Superficies y figuras mínimas de la vivienda y sus piezas (arts. 11-18)",
          columnas: ["Pieza", "Superficie mínima", "Figura inscribible o dotación", "Artículo"],
          filas: [
            ["Vivienda", "30 m² útiles", "Sala de estar, un dormitorio, un baño y una cocina", "11.1"],
            ["Sala de estar (1 o 2 dormitorios)", "12 m²", "Rectángulo de 2,7 x 3,5 m", "13.1"],
            ["Sala de estar (más de 2 dormitorios)", "«+2 m²/D°»", "Rectángulo de 3 x 4 m", "13.1"],
            ["Estar y cocina en un solo espacio", "Superficie del cuadro + 4 m²", "Mismo rectángulo en la zona de estar; comunicación de 3,50 m² sin obra, elemento fijo ni puerta", "13.2-13.3"],
            ["Cocina (vivienda de un dormitorio)", "5 m²", "Rectángulo de 3 x 1,60 m o cuadrado de 2,20 m", "14.1"],
            ["Cocina (resto de viviendas)", "7 m²", "Rectángulo de 3 x 1,60 m o cuadrado de 2,20 m", "14.1"],
            ["Dormitorio principal (al menos uno)", "10 m²", "Cuadrado de 2,50 m", "15.1"],
            ["Resto de dormitorios", "8 m²", "Cuadrado de 2,40 m o rectángulo de 4 x 2 m", "15.1"],
            ["Baño", "2,50 m²", "Ducha, inodoro y lavabo; reserva para bañera de 1,40 x 0,70 m", "16.1"],
            ["Aseo", "1,70 m²", "Ducha o bañera, inodoro y lavabo", "16.2"],
            ["Cuarto inodoro", "1,50 m² y 0,9 m de anchura", "Inodoro y lavabo", "16.8"],
            ["Tendedero cerrado", "2,4 m²", "Hueco practicable al exterior de 1,20 m²", "17.4"],
            ["Patio tendedero (solo en rehabilitación)", "2 x 2 m en planta", "Para un máximo de dos viviendas por planta", "17.6"],
            ["Vestíbulo", "—", "Cuadrado de 1,10 m tras la puerta de entrada", "18.1"]
          ],
          nota: "Toda habitación independiente de más de 4 m² con hueco de iluminación es dormitorio secundario (15.3). Con techo inclinado de más del 30 %, lo que no supere 2,20 m de altura libre no cuenta para estas superficies ni figuras (12.3)."
        },
        {
          titulo: "Dotación de baños y aseos (art. 16.3, redacción del DF 5/2006)",
          columnas: ["Dormitorios", "Equipamiento mínimo"],
          filas: [
            ["Hasta 3", "1 baño"],
            ["4 o más", "1 baño + 1 aseo"]
          ],
          nota: "Pregunta de reserva 5 de Zizur Mayor (2026): las opciones trampa bajaban el umbral a 2 dormitorios o cambiaban el aseo por un segundo baño. Si todos los dormitorios tienen baño privativo, basta un cuarto inodoro con acceso desde la circulación (16.5)."
        },
        {
          titulo: "Alturas libres mínimas",
          columnas: ["Lugar", "Altura", "Artículo"],
          filas: [
            ["Vivienda: techos horizontales o con pendiente inferior al 30 %", "2,40 m", "12.1"],
            ["Vivienda: falso techo en elementos de distribución, aseos, cocinas y tendederos cubiertos", "2,20 m", "12.1"],
            ["Vivienda rehabilitada sin sustituir forjados", "2,20 m", "12.2"],
            ["Techo inclinado de más del 30 %: no computa la superficie que no supere", "2,20 m", "12.3"],
            ["Huecos de paso y elementos singulares (puertas, arcos, vigas)", "2 m", "12.4"],
            ["Baños, aseos o cuartos inodoros con techo inclinado de más del 30 %: zona de aparatos y circulación", "2 m", "16.9"],
            ["Pasillos y rampas comunes hasta las viviendas", "2,40 m", "5.2"],
            ["Zona común de anchura no mayor de 2,50 m, con falso techo", "2,20 m", "5.2"],
            ["Bajo vigas o conductos comunes de no más de 0,80 m de fondo", "2,10 m", "5.2"],
            ["Escaleras comunes y rellanos; también las escaleras interiores (12.5)", "2,10 m", "6.2.a"],
            ["Garajes: plazas, rampas y circulación, puerta incluida", "2,10 m", "8.1.4"],
            ["Superficie útil: se deduce la que tenga una altura libre inferior a", "1,50 m", "21.3"],
            ["Tendedero: espacio libre bajo las cuerdas", "150 cm", "17.1"],
            ["Revestimiento impermeable en cuartos con aparatos sanitarios", "Hasta 2 m", "16.10"]
          ],
          nota: "Regla rápida: 2,40 de pie, 2,20 con falso techo o en rehabilitación, 2,10 en escaleras y garajes, 2 en puertas y 1,50 para contar superficie útil."
        },
        {
          titulo: "Anchuras y dimensiones de circulación",
          columnas: ["Elemento", "Medida", "Artículo"],
          filas: [
            ["Puerta del portal", "0,90 x 2,00 m", "5.1"],
            ["Pasillos y rampas comunes", "1 m", "5.2"],
            ["Escalera común (peldañeado y mesetas intermedias)", "1 m", "6.2.a"],
            ["Meseta a la que abren viviendas, locales o ascensor", "1,20 m; puertas a 25 cm del peldaño más próximo", "6.2.b"],
            ["Pasillo de la vivienda", "90 cm (estrechamientos hasta 80 cm)", "18.2"],
            ["Puertas de paso interiores", "80 cm", "18.3"],
            ["Escalera interior", "90 cm de anchura; huella de 27 cm como mínimo; contrahuella de 19 cm como máximo", "18.4"],
            ["Peldaños compensados", "Huella de 27 cm medida a 45 cm del borde interior", "18.5"],
            ["Puerta del trastero", "Paso de 80 x 200 cm", "9.2"],
            ["Pasillo de personas del garaje", "1 m", "8.3.3"]
          ],
          nota: "Fuera de la vivienda manda el metro (pasillos, rampas, escalera); dentro, los 90 cm (pasillo y escalera) y los 80 cm (puertas y estrechamientos)."
        },
        {
          titulo: "Escalera común: iluminación y ventilación (art. 6.3)",
          columnas: ["Solución", "Condiciones"],
          filas: [
            ["Iluminación directa (6.3.1-6.3.3)", "A espacio exterior con al menos condiciones de patio de fachada, o a patio interior; 1 m² por planta y rosca, con 0,3 m² practicables; nunca por terrazas privadas, tendederos ni terrazas comunes cubiertas; a 3 m como máximo del eje del recorrido (salvo en planta baja); la apertura respeta 2 m de altura del recorrido"],
            ["Cenital: hueco central (6.3.4.a)", "1 m² y cilindro de 0,5 m de diámetro; llega siempre hasta la planta del portal"],
            ["Cenital: hueco no central (6.3.4.a)", "1,3 m², cilindro de 0,8 m y 1,3 m de lado de contacto con la escalera"],
            ["Cenital: lucernario (6.3.4.b)", "2 m² si forma menos de 45° con la horizontal y 3 m² si más; punto más alto a menos de 17 m de la cota del portal; 0,80 m² de ventilación; vertical sobre el hueco"],
            ["Distribuidor de planta sin luz ni ventilación propias e independizado (6.3.5)", "Conducto de ventilación hasta cubierta como el de cocinas y baños"]
          ],
          nota: "La escalera comunica todas las plantas con acceso a viviendas con la de acceso al edificio (6.1)."
        },
        {
          titulo: "Patios (art. 7)",
          columnas: ["Clase", "Condición", "Dimensiones"],
          filas: [
            ["De manzana", "Regulado por el planeamiento; espacio exterior si cabe un cilindro recto de 12 m de diámetro en la base; si no, patio interior", "Cilindro de 12 m"],
            ["Interior o de parcela", "En una parcela o mancomunado (inscrito en el Registro de la Propiedad si se suman dimensiones para cumplir)", "Cilindro de ø 3 m y 0,25 H; superficie de 12 m² y H²/10; luces rectas de 3 m"],
            ["De una sola planta en vivienda unifamiliar", "Condiciones básicas del art. 7.1 del anexo 1", "Luces rectas de al menos 3 m"],
            ["Exterior o de fachada", "Entrante de más de 1,5 m de profundidad en fachada exterior o de patio de manzana", "Frente abierto de al menos 3 m; profundidad no mayor de vez y media la anchura; 6 m de luces rectas para huecos de estar en las paredes laterales"]
          ],
          nota: "H: desde el pavimento de la primera planta que se ilumina por el patio hasta la coronación (media ponderada si no es uniforme; no cuentan chimeneas u otros elementos de hasta 60 cm de contacto). Por encima de la coronación, retranqueos dentro de planos de 45°. Luces rectas: la mínima perpendicular libre de obstáculos aplicable a cualquier punto del hueco. Los patios a los que abren estar, cocinas, dormitorios o escaleras son siempre descubiertos."
        },
        {
          titulo: "Garajes (art. 8)",
          columnas: ["Elemento", "Medida", "Apartado"],
          filas: [
            ["Altura libre (puerta incluida)", "2,10 m", "8.1.4"],
            ["Zaguán antes de una rampa que salve más de 1 m", "Pendiente máxima del 6 %; fondo de 5 m; anchura de 3,5 m; puerta de 3 m", "8.2.1"],
            ["Zaguán en vivienda unifamiliar (garaje no común)", "Fondo de 2,5 m; anchura de 3 m; puerta de 2,5 m", "8.2.1"],
            ["Garaje de 100 o más plazas", "Acceso y salida diferenciados o rampa y acceso dobles; rampa doble de 5,40 m", "8.2.2"],
            ["Rampa en tramo recto", "3 m de anchura; pendiente máxima del 20 %", "8.2.3"],
            ["Rampa en curva de radio inferior a 20 m", "3,5 m de anchura; pendiente máxima del 15 %; radio mínimo en el eje de 6 m", "8.2.3"],
            ["Rampa de doble sentido sin visibilidad o de más de 30 m", "Dispositivo de sentido prioritario", "8.2.4"],
            ["Ascensor de vehículos o elevacoches", "Si es el único acceso, un aparato por cada 20 plazas o fracción; si el garaje tiene 6 o más plazas, zaguán de 5 m de anchura x 10 m de fondo", "8.2.5"],
            ["Pasillo de vehículos", "3,5 m; 4,5 m si las plazas forman más de 45°", "8.3.1"],
            ["Giros", "Carril de 3 m con radio de 5 m en su eje", "8.3.2"],
            ["Plaza con acceso frontal / en línea", "2,3 x 4,7 m / 2,2 x 5 m; pendiente máxima del 6 %", "8.4.1"],
            ["Plaza limitada por pared lateral", "2,8 x 4,7 m (reducible a 2,5 m de anchura en los 2,5 m del fondo)", "8.4.2"],
            ["Elemento lateral que se asimila a pared", "Más de 1,2 m de longitud", "8.4.3"],
            ["Recorrido de acceso a la plaza", "Máximo de 5 m sin obstáculos; si es mayor, condiciones de pasillo", "8.4.4"],
            ["Plaza para vivienda de minusválidos", "3,20 x 4,70 m; 2,30 m de ancho con un lateral libre junto al pasillo", "8.4.6"]
          ],
          nota: "No se aplica a los garajes de uso público (en los mixtos, sí en la zona de plazas vinculadas a viviendas). En los planos del proyecto, todas las plazas, rampas y pasillos representados, acotados y numerados (8.4.5)."
        },
        {
          titulo: "Iluminación y ventilación de la vivienda (art. 19)",
          columnas: ["Concepto", "Valor", "Apartado"],
          filas: [
            ["Sala de estar", "A espacio libre exterior o patio de manzana (salvo vivienda unifamiliar)", "19.1"],
            ["Cocina, comedor y dormitorios", "También a patio de parcela", "19.1"],
            ["Luces rectas mínimas", "3 m", "19.1"],
            ["Hueco de iluminación", "1 m² y el 10 % de la superficie útil en planta", "19.2"],
            ["Hueco a espacio cubierto o mirador", "+50 %; el hueco exterior del mirador, el 10 % de su superficie más la de las piezas que abren a él", "19.2"],
            ["Superficie computable de cada habitación", "Los primeros 20 m²", "19.3"],
            ["Vidrio transparente", "Al menos el 70 % del hueco (si no, solo cuenta la parte transparente)", "19.4"],
            ["Distancia del hueco al rectángulo mínimo", "2 m en planta como máximo", "19.5"],
            ["Hueco practicable en estar, cocina y dormitorio principal", "70 x 70 cm libres entre 95 y 180 cm de altura", "19.8"],
            ["Ventilación directa", "Un tercio de la superficie mínima de iluminación; mecanismo a 1,50 m como máximo", "19.9"],
            ["Conducto de la campana", "Independiente, de 10 cm de diámetro como mínimo", "19.10"],
            ["Rejilla en puertas de aseos", "70 cm²", "19.11"],
            ["Estar y cocina en un mismo espacio", "Ventilación mecánica hasta cubierta de 300 m³/h", "19.12"]
          ],
          nota: "Cocina y baños, aseos o cuartos inodoros llevan conducto de ventilación por tiro forzado permanente hasta cubierta, también las despensas sin ventilación directa (19.10)."
        },
        {
          titulo: "Instalaciones y ventilación colectiva (arts. 2, 9 y 20)",
          columnas: ["Elemento", "Valor", "Artículo"],
          filas: [
            ["Colector de ventilación", "Máximo 8 plantas (las 2 últimas con conducto propio); sección de 400 cm²; aspirador estático o dinámico", "2.4.a"],
            ["Acometida individual", "Un solo local; longitud de 2 m; sección de 150 cm²; rejilla; sin impulsores ni campanas", "2.4.b"],
            ["Trasteros", "Renovación de 0,5 volúmenes por hora", "9.3"],
            ["Presión del agua en cocina y aseos", "Entre 1 y 4,5 kg/cm²", "20.2"],
            ["Velocidad del agua", "1,5 m/s como máximo", "20.2"],
            ["Agua caliente", "13 l/min a 40 °C (instantánea) o 75 l (acumulada)", "20.2"],
            ["Tomas de la cocina", "Fregadero, lavadora y lavavajillas (llave de corte propia para lavadora y lavavajillas)", "20.4"],
            ["Calefacción", "20 °C en todo el interior", "20.7"]
          ],
          nota: "A un mismo colector no se conectan conductos de ventilación y salidas de humos o gases (2.4.c). Todos los huecos exteriores con vidrio llevan persiana o contraventana exterior (20.6)."
        },
        {
          titulo: "Seguridad (art. 3) y otras condiciones (art. 10)",
          columnas: ["Condición", "Valor", "Artículo"],
          filas: [
            ["Desnivel que exige protección en elementos comunes o locales vinculados", "Más de 40 cm", "3.1"],
            ["Desnivel que exige protección dentro de la vivienda", "Más de 60 cm", "3.1"],
            ["Altura del antepecho o barandado", "95 cm desde el pavimento terminado", "3.1.b"],
            ["Hueco que no debe atravesarse bajo esa altura", "Esfera de 12 cm de diámetro", "3.1.b"],
            ["Escalera sin tabica", "Si la caída entre peldaños supera 60 cm, esfera de 12 cm", "3.2"],
            ["Forjado en planta baja con piezas vivideras", "Separado 0,5 m del terreno, cámara ventilada", "10.a"],
            ["Pendiente máxima del pavimento interior", "0,5 %", "10.b"]
          ],
          nota: "Edificios de más de una vivienda: portal con apertura desde el exterior y desde cada vivienda y comunicación oral (3.3). Puerta de la vivienda con cerradura de llave y mirilla (3.4)."
        },
        {
          titulo: "Medición de superficies (art. 21)",
          columnas: ["Concepto", "Cómo se mide", "Apartado"],
          filas: [
            ["Superficie construida", "Perímetro exterior del cierre de fachadas y ejes de medianeras o separaciones + exteriores privativos + parte proporcional de comunes", "21.2"],
            ["Terrazas y balcones de uso privativo", "50 %", "21.2.b"],
            ["Miradores y tendederos cerrados", "100 %", "21.2.b"],
            ["Tendederos accesibles y abiertos", "Como las terrazas (50 %)", "21.2.b"],
            ["Terraza sobre cubierta plana común (división horizontal)", "No computa", "21.2.b"],
            ["Espacios exteriores descubiertos de viviendas en planta baja", "No computan, aunque estén pavimentados", "21.2.b"],
            ["Superficie útil de la vivienda", "Apartados a) y b) menos muros, tabiques, antepechos, estructura vertical, conductos de más de 100 cm² y zonas de menos de 1,50 m de altura libre", "21.3"],
            ["Superficie útil de un recinto o trastero", "Cara interior de sus cerramientos, con las mismas deducciones", "21.4"],
            ["Superficie útil de una plaza de garaje", "Rectángulo que la delimita, libre de obstáculos, sin rampas, pasillos ni espacios residuales", "21.6"]
          ],
          nota: "Las cifras deben figurar en todo documento que se refiera a ellas y en la publicidad de venta o alquiler (21.1)."
        }
      ],
      datos: [
        "Art. 1.1: la vivienda nueva cumple el anexo II y también el anexo 1 (condiciones de las viviendas existentes).",
        "Art. 1.3: para equiparar una rehabilitación a obra nueva se acumulan los presupuestos de las obras terminadas en el edificio en los cinco años anteriores a la solicitud de licencia.",
        "Art. 2.4.a: un colector de ventilación sirve a 8 plantas como máximo; las dos últimas llevan conducto independiente.",
        "Art. 3.3: en edificios de más de una vivienda, el portal se abre desde el exterior y desde cada vivienda, con comunicación oral entre viviendas y portal.",
        "Art. 4.2: el ascensor es obligatorio en cada núcleo de comunicaciones verticales, no uno por edificio.",
        "Art. 4.6: el fondo mínimo de la cabina se mide perpendicularmente a todas las puertas con que cuente.",
        "Art. 5.1: puerta del portal de 0,90 x 2,00 m.",
        "Art. 6.3.4.b: el punto más alto del lucernario, a menos de 17 m de la cota del portal.",
        "Art. 7: los patios a los que abren salas de estar, cocinas, dormitorios o escaleras son siempre descubiertos.",
        "Art. 7.b: el patio mancomunado que necesita sumar dimensiones para cumplir inscribe su carácter mancomunado en el Registro de la Propiedad.",
        "Art. 7.b: en la altura H del patio no cuentan las chimeneas u otros elementos cuyo lado de contacto con el patio no supere 60 cm.",
        "Art. 8.1.3: en un garaje mancomunado no valen como salidas de emergencia las que atraviesan fincas o portales privados, salvo servidumbre constituida.",
        "Art. 8.2.5: si el ascensor de vehículos o elevacoches es el único acceso de vehículos, un aparato por cada 20 plazas o fracción.",
        "Art. 8.3.3: a través de una plaza de aparcamiento solo se accede al trastero vinculado a esa misma plaza.",
        "Art. 9.1: el trastero está vinculado registralmente a la vivienda y destinado en exclusiva a los enseres de la propia vivienda.",
        "Art. 11.2: toda habitación a la que solo se accede desde la vivienda forma parte de ella a todos los efectos.",
        "Art. 12.5: en las escaleras interiores, la altura libre es la de las escaleras comunes (2,10 m).",
        "Art. 13.3: estar y cocina son un mismo espacio si no pueden independizarse sin obra y su comunicación tiene 3,50 m² sin obra, elemento fijo ni puerta.",
        "Art. 14.2: en la cocina integrada, su figura no puede solaparse con la de la sala de estar.",
        "Art. 16.4: al menos un baño admite un cilindro de 120 cm de diámetro y 70 cm de altura quitando el bidé y cambiando el giro de la puerta.",
        "Art. 16.6-16.7: 1,20 m entre paramentos sin aparatos enfrentados, 1,60 m con aparatos enfrentados, 0,90 m de anchura donde haya aparatos y 60 cm libres por lavabo, inodoro y bidé.",
        "Art. 17.7: el patio tendedero puede estar cubierto, con 2 m² de ventilación permanente en la coronación, toma de aire de 0,10 m² en la planta más baja y sumidero.",
        "Art. 19.2: si el hueco abre a espacio cubierto o mirador, la superficie mínima de iluminación sube un 50 %.",
        "Art. 19.8: en estar, cocina y dormitorio principal, hueco practicable de 70 x 70 cm libres entre 95 y 180 cm de altura.",
        "Art. 19.10: conducto de ventilación por tiro forzado permanente hasta cubierta en la cocina y en baños, aseos o cuartos inodoros, y en las despensas sin ventilación directa.",
        "Art. 20.6: persiana o contraventana exterior en todos los huecos exteriores con vidrio.",
        "Art. 21.1: las superficies útiles y construidas figuran en todo documento y en la publicidad de venta o alquiler.",
        "Vigencia: anexo II en la redacción del Decreto Foral 5/2006, de 16 de enero (BON de 30-01-2006); sin cambios hasta el 21-05-2026."
      ],
      excepciones: [
        "Rehabilitación parcial: solo las condiciones del anexo compatibles con la naturaleza de la intervención (art. 1.5).",
        "Ampliación: el anexo solo se exige en la zona ampliada, pero sin deteriorar las viviendas existentes ni sus elementos comunes (art. 1.6).",
        "Vaciado total o demolición y reposición de más del 60 % de los forjados: obra nueva aunque el presupuesto no llegue al 70 % (art. 1.4).",
        "Ascensor: exentas las rehabilitaciones equiparables de edificios de menos de baja más seis plantas si es imposible instalarlo (art. 4.4).",
        "Ascensor: puede no exigirse al dividir una vivienda si no aumenta la superficie de vivienda y el ascensor obliga a que cedan superficie propietarios de otras fincas del edificio; las dos condiciones a la vez (art. 4.5).",
        "Cabina para más de 16 viviendas: no hace falta 1,40 x 1,10 m si existe más de un ascensor de 1 x 1,20 m (art. 4.6.b).",
        "Escalera: el hueco ilumina directamente el recorrido de evacuación excepto en planta baja (art. 6.3.3).",
        "Si la escalera no llega a los sótanos de garaje, las salidas de emergencia de estos van directamente al exterior (art. 6.1).",
        "Patio de manzana: solo es espacio exterior si cabe un cilindro de 12 m; si no, es patio interior (art. 7.a).",
        "Patio de una sola planta en vivienda unifamiliar: basta el art. 7.1 del anexo 1, pero con luces rectas de al menos 3 m (art. 7.b).",
        "Entrantes de patios de parcela o de manzana: solo reciben huecos de iluminación y ventilación si tienen las dimensiones de patio de fachada (art. 7.b).",
        "Garajes de uso público: fuera del art. 8, salvo la zona de plazas vinculadas a viviendas de los garajes mixtos (art. 8.1.2).",
        "Zaguán reducido (2,5 / 3 / 2,5 m) en viviendas unifamiliares, salvo garaje común a varias viviendas (art. 8.2.1).",
        "Plaza junto a pared: 2,8 x 4,7 m, salvo en aparcamientos en línea (art. 8.4.2); plaza para minusválidos de 2,30 m de anchura si tiene un lateral libre junto al pasillo (art. 8.4.6).",
        "Planta baja: cabe otra solución distinta del forjado separado 0,5 m si el proyecto justifica el aislamiento eficaz de la humedad del terreno (art. 10.a).",
        "Patios de parcela accesibles para limpieza, salvo los privativos con acceso desde la vivienda (art. 10.c).",
        "Altura de 2,20 m: con falso techo solo en distribuidores, aseos, cocinas y tendederos cubiertos, y en rehabilitación si no se sustituyen forjados (art. 12).",
        "Cocina independiente: puede ser paso a despensa, oficio o tendedero, pero no da acceso directo a dormitorio o aseo (art. 14.3).",
        "Dormitorio: solo puede ser paso a baños o vestidores vinculados a él (art. 15.2).",
        "Habitación de más de 4 m² con hueco = dormitorio secundario, salvo aseos, cocina y oficios o despensas con acceso exclusivo desde la cocina; en rehabilitación, los dormitorios afectados solo en acabados cumplen el anexo I (art. 15.3).",
        "Si todos los dormitorios tienen baño privativo, basta un cuarto inodoro accesible desde la circulación (art. 16.5).",
        "Tendido sin protección de vistas: a patio interior o a patio de manzana sin acceso público (art. 17.1).",
        "Escaleras interiores: sus mínimos no se aplican a las que dan acceso a espacios no habitables, como altillos (art. 18.4).",
        "Pasillos: estrechamientos hasta 80 cm si el elemento que los produce no tiene más fondo que la anchura libre que deja (art. 18.2).",
        "Sala de estar: en vivienda unifamiliar no tiene que abrir a espacio libre exterior o patio de manzana (art. 19.1).",
        "Rehabilitación con fachada mantenida por imposición administrativa: basta el punto 19.4 del anexo 1 (art. 19.7).",
        "Oscurecimiento interior admitido si otros elementos exteriores protegen de la radiación solar (art. 20.6).",
        "Superficie construida: no computan las terrazas sobre cubierta común en división horizontal ni los espacios exteriores descubiertos de planta baja (art. 21.2.b).",
        "No exigible: lo que se publique después del 21-05-2026, aunque modifique o sustituya este anexo."
      ]
    }
  };
