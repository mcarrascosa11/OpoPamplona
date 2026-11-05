/* ------------------------------------------------------------------
   CALENDARIO DEL PLAN DE ESTUDIO
   De lunes a viernes, la sesión del bloque de ese día; el sábado, el
   simulacro Pamplona; el domingo, libre. Una sesión cuenta como hecha
   si alguna tanda guardada lleva ese día en su campo plan (la app lo
   pone al terminar la sesión de hoy, el simulacro o una recuperada).
   Las tandas antiguas, sin plan, cuentan para el día en que se
   hicieron si son del mismo tipo.
   Los días anteriores al inicio del plan no cuentan como pendientes.
   ------------------------------------------------------------------ */
import { BLOQUES_SEMANA } from "../data/reparto.js";

export const PLAN_INICIO = "2026-11-05";
export const TITULO_SIMULACRO = "Simulacro Pamplona";
const DIAS_CORTOS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const DIAS_LARGOS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

export const isoLocal = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const desdeIso = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d, 12); };
const sumarDias = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

// Qué toca un día: { tipo: "bloque" | "simulacro" | "libre", bloque? }
export function planDelDia(fecha) {
  const dia = fecha.getDay();
  if (dia === 0) return { tipo: "libre" };
  if (dia === 6) return { tipo: "simulacro" };
  return { tipo: "bloque", bloque: BLOQUES_SEMANA.find((b) => b.dia === dia) };
}

function hecha(sesiones, fecha, item) {
  const iso = isoLocal(fecha);
  return (sesiones || []).some((s) => {
    if (s.plan) return s.plan === iso;
    if (isoLocal(new Date(s.fecha)) !== iso) return false;
    return item.tipo === "simulacro" ? s.titulo === TITULO_SIMULACRO : String(s.titulo || "").startsWith(`Sesión de hoy · ${item.bloque?.titulo}`);
  });
}

function describir(fecha, hoyIso, sesiones) {
  const iso = isoLocal(fecha);
  const item = planDelDia(fecha);
  let estado;
  if (item.tipo === "libre") estado = "libre";
  else if (iso < PLAN_INICIO) estado = "antes";
  else if (hecha(sesiones, fecha, item)) estado = "hecha";
  else if (iso === hoyIso) estado = "hoy";
  else if (iso < hoyIso) estado = "pendiente";
  else estado = "futura";
  const nombre = item.tipo === "simulacro" ? "Simulacro" : item.tipo === "libre" ? "Libre" : item.bloque.titulo;
  return {
    iso, item, estado, nombre,
    corto: `${DIAS_CORTOS[fecha.getDay()]} ${fecha.getDate()}`,
    largo: `${DIAS_LARGOS[fecha.getDay()]} ${fecha.getDate()}`,
  };
}

// Semana actual, de lunes a domingo.
export function semanaPlan(sesiones, hoy = new Date()) {
  const hoyIso = isoLocal(hoy);
  const lunes = sumarDias(hoy, -((hoy.getDay() + 6) % 7));
  return Array.from({ length: 7 }, (_, i) => describir(sumarDias(lunes, i), hoyIso, sesiones));
}

// Sesiones atrasadas de los últimos 14 días, de la más reciente a la más antigua.
export function sesionesPendientes(sesiones, hoy = new Date()) {
  const hoyIso = isoLocal(hoy);
  const out = [];
  for (let i = 1; i <= 14; i++) {
    const d = describir(sumarDias(hoy, -i), hoyIso, sesiones);
    if (d.estado === "pendiente") out.push(d);
  }
  return out;
}

export const fechaDeIso = desdeIso;
