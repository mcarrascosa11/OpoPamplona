import { createClient } from "@supabase/supabase-js";

/* ------------------------------------------------------------------
   ALMACENAMIENTO
   - Por defecto: localStorage (cada dispositivo lleva su progreso).
   - Si defines VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY y el usuario
     introduce un "código de sincronización", el progreso se guarda en
     Supabase con ese código como clave → sincroniza entre dispositivos
     que usen el mismo código. Sin login.
   ------------------------------------------------------------------ */

const URL = import.meta.env.VITE_SUPABASE_URL;
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supa = URL && ANON ? createClient(URL, ANON) : null;

const LS_DATA = "oposicion-pamplona-v1";
const LS_CODE = "oposicion-pamplona-sync";

export const syncDisponible = () => !!supa;
export const getCodigo = () => {
  try { return localStorage.getItem(LS_CODE) || ""; } catch { return ""; }
};
export const setCodigo = (c) => {
  try { c ? localStorage.setItem(LS_CODE, c.trim()) : localStorage.removeItem(LS_CODE); } catch {}
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
