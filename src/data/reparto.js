/* ==================================================================
   REPARTO ESTIMADO DEL EXAMEN DE PAMPLONA (100 preguntas)
   Calculado en noviembre de 2026 con los 9 exámenes navarros de la app
   (mitad de peso para los del Gobierno de Navarra y mitad para los de
   ayuntamientos), un 15 % repartido por igual entre temas y 14 preguntas
   para los temas propios de Pamplona (G12 y E52–E59), según cuánto
   preguntan otros ayuntamientos de su propio planeamiento y ordenanzas.
   Es una estimación: sirve para el simulacro y para priorizar, no es
   un dato oficial.
   ================================================================== */
export const REPARTO_PAMPLONA = {
  G1: 1, G2: 1, G3: 0, G4: 1, G5: 1, G6: 3, G7: 2, G8: 1, G9: 1, G10: 1, G11: 0, G12: 1, G13: 0,
  E1: 3, E2: 1, E3: 4, E4: 1, E5: 0, E6: 3, E7: 1, E8: 1, E9: 0, E10: 1, E11: 0, E12: 1,
  E13: 3, E14: 1, E15: 1, E16: 1, E17: 0, E18: 3, E19: 3,
  E20: 2, E21: 0, E22: 0, E23: 0, E24: 0,
  E25: 1, E26: 1, E27: 1,
  E28: 3, E29: 10, E30: 5, E31: 4, E32: 1, E33: 1, E34: 1, E35: 2, E36: 0,
  E37: 2, E38: 1, E39: 0, E40: 1, E41: 0, E42: 0, E43: 0, E44: 1, E45: 2, E46: 0,
  E47: 1, E48: 1, E49: 1, E50: 1,
  E51: 3, E52: 1, E53: 4, E54: 1, E55: 2, E56: 2, E57: 1, E58: 1, E59: 1,
};

const rango = (letra, desde, hasta) => Array.from({ length: hasta - desde + 1 }, (_, i) => `${letra}${desde + i}`);

/* Bloques de la semana tipo del plan de estudio: cada día de lunes a
   viernes trabaja un bloque que pesa parecido en el examen (16–24
   preguntas de 100). El sábado es para el simulacro y el domingo, libre. */
export const BLOQUES_SEMANA = [
  { dia: 1, nombre: "Lunes", titulo: "Suelo y urbanismo", detalle: "E28–E31", temas: rango("E", 28, 31) },
  { dia: 2, nombre: "Martes", titulo: "CTE y edificación", detalle: "E1–E12 y E25–E27", temas: [...rango("E", 1, 12), ...rango("E", 25, 27)] },
  { dia: 3, nombre: "Miércoles", titulo: "Pamplona y territorio", detalle: "E37–E46, E51–E59 y G12", temas: [...rango("E", 37, 46), ...rango("E", 51, 59), "G12"] },
  { dia: 4, nombre: "Jueves", titulo: "Parte general y contratos", detalle: "G1–G13 (sin G12) y E47–E50", temas: [...rango("G", 1, 13).filter((t) => t !== "G12"), ...rango("E", 47, 50)] },
  { dia: 5, nombre: "Viernes", titulo: "Vivienda, actividades y licencias", detalle: "E13–E24 y E32–E36", temas: [...rango("E", 13, 24), ...rango("E", 32, 36)] },
];

export const bloqueDelDia = (fecha = new Date()) => BLOQUES_SEMANA.find((b) => b.dia === fecha.getDay()) || null;
export const pesoBloque = (b) => b.temas.reduce((s, t) => s + (REPARTO_PAMPLONA[t] || 0), 0);
