import { createClient } from "@supabase/supabase-js";

const URL = import.meta.env.VITE_SUPABASE_URL;
const PUBLIC_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;

const LS_CODE = "oposicion-pamplona-sync";
let cachedCode = null;
let cachedHash = "";

async function sha256Hex(value) {
  if (!globalThis.crypto?.subtle) return "";
  const data = new TextEncoder().encode(value);
  const digest = await globalThis.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

async function getSyncCodeHash() {
  try {
    const code = (localStorage.getItem(LS_CODE) || "").trim();
    if (!code) return "";
    if (code === cachedCode) return cachedHash;
    cachedCode = code;
    cachedHash = await sha256Hex(code);
    return cachedHash;
  } catch {
    return "";
  }
}

async function secureFetch(input, init = {}) {
  const headers = new Headers(input instanceof Request ? input.headers : undefined);
  new Headers(init.headers || {}).forEach((value, key) => headers.set(key, value));

  const syncHash = await getSyncCodeHash();
  if (syncHash) headers.set("x-sync-code-hash", syncHash);
  else headers.delete("x-sync-code-hash");

  return globalThis.fetch(input, { ...init, headers });
}

export const supabase = URL && PUBLIC_KEY
  ? createClient(URL, PUBLIC_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
      global: { fetch: secureFetch },
    })
  : null;

export const supaDisponible = () => !!supabase;
