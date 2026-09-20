import { supabase } from "./supabase.js";

/* ------------------------------------------------------------------
   ALMACENAMIENTO
   - Por defecto: localStorage (cada dispositivo lleva su progreso).
   - Si hay Supabase y un código de sincronización, el progreso se replica.
   - El código se trata como una credencial: las nuevas altas exigen al menos
     20 caracteres y la UI puede generar 128 bits aleatorios.
   ------------------------------------------------------------------ */

const supa = supabase;
const LS_DATA = "oposicion-pamplona-v1";
const LS_CODE = "oposicion-pamplona-sync";
const MIN_CODE_LENGTH = 20;

export const syncDisponible = () => !!supa;
export const getCodigo = () => {
  try { return localStorage.getItem(LS_CODE) || ""; } catch { return ""; }
};
export const codigoSeguro = (c) => !c || c.trim().length >= MIN_CODE_LENGTH;
export const generarCodigoSeguro = () => {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
};
export const setCodigo = (c) => {
  const limpio = (c || "").trim();
  if (limpio && !codigoSeguro(limpio)) return false;
  try {
    limpio ? localStorage.setItem(LS_CODE, limpio) : localStorage.removeItem(LS_CODE);
    return true;
  } catch {
    return false;
  }
};

export async function loadState() {
  const codigo = getCodigo();
  if (supa && codigo) {
    try {
      const { data, error } = await supa
        .from("progreso").select("data").eq("codigo", codigo).maybeSingle();
      if (!error && data && data.data) {
        try { localStorage.setItem(LS_DATA, JSON.stringify(data.data)); } catch {}
        return data.data;
      }
    } catch { /* sin red: cae a local */ }
  }
  try {
    const raw = localStorage.getItem(LS_DATA);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

export async function saveState(state) {
  try { localStorage.setItem(LS_DATA, JSON.stringify(state)); } catch {}
  const codigo = getCodigo();
  if (supa && codigo) {
    try {
      const { error } = await supa.from("progreso").upsert(
        { codigo, data: state, updated_at: new Date().toISOString() },
        { onConflict: "codigo" }
      );
      if (error) return false;
    } catch { return false; }
  }
  return true;
}
