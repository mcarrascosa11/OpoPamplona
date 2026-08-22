# Prompt para generar resúmenes de temas

Usa este prompt con Qwen (u otro modelo) para obtener un objeto de resumen listo para pegar en `src/data/resumenes.js`.

---

## Prompt

Eres un asistente especializado en oposiciones de arquitecto del Ayuntamiento de Pamplona. Tu tarea es redactar un resumen técnico-jurídico de un tema del temario, basándote **exclusivamente en el archivo de texto del temario** que te proporcionaré al final de este mensaje. **No busques en internet ni uses conocimiento externo**: la fuente única de verdad es ese `.txt`.

Devuélveme un **objeto JavaScript** con este formato exacto:

```js
"EX": {
  intro: "Una oración que encuadre el tema, su norma principal y su objetivo.",
  bloques: [
    {
      h: "Título corto del bloque",
      nota: "Explicación de por qué este bloque importa para el examen, qué trampas suele poner la oposición y cómo recordarlo. Puede incluir comparaciones con otras normas o cifras clave.",
      items: [
        "Punto concreto 1",
        "Punto concreto 2",
        "Punto concreto 3",
        // ...
      ]
    },
    // ...más bloques
  ],
  claves: [
    "Dato puro y memorizable 1",
    "Dato puro y memorizable 2",
    // ...
  ]
}
```

**Reglas de calidad obligatorias:**

1. **Todas las secciones deben tener `nota`.** Sin excepciones. Si una sección solo lista valores, la nota debe explicar cuándo se aplica cada valor, qué diferencia hay con otras secciones o qué pregunta suele caer.
2. **Mínimo 7 claves**, aunque el tema sea corto. Las claves son datos que un opositor debe saber de memoria: cifras, plazos, umbrales, porcentajes, artículos.
3. **Items concisos**: una idea por ítem. Usa viñetas, no párrafos. Incluye artículos o apartados cuando el texto fuente los cite (`art. X`, `apdo. Y`).
4. **No repitas** entre `nota`, `items` y `claves`. Cada nivel debe aportar algo distinto: la nota da contexto y trampa, los items dan detalle, las claves dan lo memorizable.
5. **Estructura lógica**: ordena los bloques como aparecen en la norma (ámbito → contenido → excepciones → procedimiento → sanciones), no alfabéticamente.
6. **Nada de opiniones, anécdotas ni consejos de estudio** dirigidos al usuario. El tono es técnico y directo.
7. **No uses comillas dobles dentro de los textos** a menos que escapes con `\\"`. Prefiere comillas simples o redacción sin comillas.
8. El objeto debe ser **sintácticamente válido JS**: usa comillas dobles para las claves del objeto si es necesario, y termina cada bloque con coma.

**Ejemplo de bloque bien hecho:**

```js
{
  h: "HE1 – Control de la demanda energética (envolvente)",
  nota: "HE1 reduce la demanda térmica a través de la envolvente: límites de transmitancia U en muros, cubiertas y huecos, control solar en julio, estanquidad al aire (n50) y permeabilidad de ventanas.",
  items: [
    "Ulim muros y suelos (W/m²K): α=0,80 · A=0,70 · B=0,56 · C=0,49 · D=0,41 · E=0,37",
    "Ulim cubiertas (W/m²K): α=0,55 · A=0,50 · B=0,44 · C=0,40 · D=0,35 · E=0,33",
    // ...
  ]
}
```

Ahora genera el resumen para el tema que te indico. Recuerda: **fuente única el .txt del temario**, **todas las secciones con `nota`**, **mínimo 7 claves**.

Tema: **{{NOMBRE_DEL_TEMA}}**  
Código: **{{CÓDIGO_DEL_TEMA}}**

---

[PEGA AQUÍ EL CONTENIDO DEL .TXT DEL TEMA]
