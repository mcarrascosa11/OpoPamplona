// Selección adaptativa de preguntas.
// Las preguntas falladas tienen más probabilidad de volver a aparecer.

export function seleccionarPreguntasAdaptativas(preguntas, historial = {}, cantidad = 20) {
  if (!Array.isArray(preguntas) || preguntas.length === 0) return [];

  const pesos = preguntas.map((pregunta, index) => {
    const id = pregunta.id ?? pregunta.codigo ?? `pregunta-${index}`;
    const registro = historial[id] || {};
    const fallos = Number(registro.fallos || 0);
    const aciertos = Number(registro.aciertos || 0);

    // Peso base 1. Cada fallo aumenta mucho la probabilidad.
    // Varias respuestas correctas reducen ligeramente el peso, pero
    // nunca hacen que una pregunta desaparezca por completo.
    let peso = 1;
    if (fallos > 0) peso += fallos * 2;
    if (aciertos > 1) peso *= Math.max(0.7, 1 - (aciertos - 1) * 0.1);

    return { pregunta, peso: Math.max(0.5, peso), id };
  });

  const disponibles = [...pesos];
  const resultado = [];
  const limite = Math.min(cantidad, disponibles.length);

  // Muestreo ponderado sin repetir preguntas dentro de la sesión.
  for (let i = 0; i < limite; i++) {
    const total = disponibles.reduce((sum, item) => sum + item.peso, 0);
    let objetivo = Math.random() * total;
    let elegido = disponibles[disponibles.length - 1];

    for (const item of disponibles) {
      objetivo -= item.peso;
      if (objetivo <= 0) {
        elegido = item;
        break;
      }
    }

    resultado.push(elegido.pregunta);
    disponibles.splice(disponibles.indexOf(elegido), 1);
  }

  return resultado;
}
