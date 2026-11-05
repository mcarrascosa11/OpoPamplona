/* ------------------------------------------------------------------
   REPASO ESPACIADO (cajas tipo Leitner)
   Cada pregunta fallada o dejada en blanco entra en la caja 1 y vuelve
   al día siguiente. Cada acierto cuando le toca la pasa a la caja
   siguiente: vuelve a los 3, 7, 14 y 30 días. Tras acertarla en la
   caja 5 queda superada (caja 6). Un fallo la devuelve a la caja 1.
   Los campos caja y proxima se añaden al registro de cada pregunta
   (state.preguntas[id]); los estados antiguos, sin ellos, siguen
   funcionando: sus fallos pendientes cuentan como vencidos.
   ------------------------------------------------------------------ */
export const INTERVALOS_DIAS = [1, 3, 7, 14, 30];
const DIA = 86_400_000;
const MARGEN = 12 * 3_600_000; // un acierto unas horas antes de su fecha también cuenta

const finDelDia = (ahora) => { const d = new Date(ahora); d.setHours(23, 59, 59, 999); return d.getTime(); };

// resultado: "ok" | "fallo" | "blanco". Devuelve solo { caja, proxima }.
export function siguienteRepaso(registro, resultado, ahora = Date.now()) {
  const caja = Number(registro?.caja) || 0;
  const proxima = Number(registro?.proxima) || 0;
  if (resultado !== "ok") return { caja: 1, proxima: ahora + INTERVALOS_DIAS[0] * DIA };
  if (caja >= 1 && caja <= 5) {
    if (proxima && ahora < proxima - MARGEN) return { caja, proxima };
    const nueva = caja + 1;
    return nueva <= 5 ? { caja: nueva, proxima: ahora + INTERVALOS_DIAS[nueva - 1] * DIA } : { caja: 6, proxima: null };
  }
  return { caja, proxima: proxima || null };
}

// Preguntas que toca repasar hoy, de la más atrasada a la más reciente.
export function preguntasVencidas(preguntas, historial = {}, falladas = [], ahora = Date.now()) {
  const limite = finDelDia(ahora);
  const pendientes = new Set(falladas || []);
  const out = [];
  for (const q of preguntas) {
    const h = historial[q.id];
    const caja = Number(h?.caja) || 0;
    if (caja >= 1 && caja <= 5) {
      const p = Number(h.proxima) || 0;
      if (p <= limite) out.push({ q, p });
    } else if (!caja && pendientes.has(q.id)) {
      out.push({ q, p: Number(h?.ultima) || 0 }); // fallo antiguo, de antes de las cajas
    }
  }
  return out.sort((a, b) => a.p - b.p).map((x) => x.q);
}

export function resumenCajas(historial = {}, falladas = [], idsActivos = null) {
  const r = { enRepaso: 0, superadas: 0 };
  const vistos = new Set();
  for (const [id, h] of Object.entries(historial)) {
    if (idsActivos && !idsActivos.has(id)) continue;
    const caja = Number(h?.caja) || 0;
    if (caja >= 1 && caja <= 5) r.enRepaso++;
    else if (caja === 6) r.superadas++;
    if (caja) vistos.add(id);
  }
  for (const id of falladas || []) if (!vistos.has(id) && (!idsActivos || idsActivos.has(id))) r.enRepaso++;
  return r;
}

/* ------------------------------------------------------------------
   SEGURIDAD AL CONTESTAR
   Con penalización de 1/3, contestar compensa si la probabilidad de
   acertar supera el 25 %.
   ------------------------------------------------------------------ */
export const NIVELES_SEGURIDAD = [
  { id: "seguro", nombre: "Seguro" },
  { id: "dudo", nombre: "Dudo" },
  { id: "ciegas", nombre: "A ciegas" },
];

export function consejoSeguridad(aciertos, fallos) {
  const n = aciertos + fallos;
  if (n < 5) return { pct: n ? Math.round((aciertos / n) * 100) : null, texto: "Aún pocas respuestas para sacar conclusiones." };
  const pct = Math.round((aciertos / n) * 100);
  const media = (aciertos - fallos / 3) / n;
  const texto = pct > 30
    ? `Contestar compensa: ganas ${media.toFixed(2).replace(".", ",")} netas por pregunta de media.`
    : pct < 25
      ? "Mejor en blanco: contestando pierdes netas de media."
      : "Da casi igual contestar o dejarla: en blanco te ahorras el riesgo.";
  return { pct, texto };
}
