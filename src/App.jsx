import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { TEMAS_GENERAL, TEMAS_ESP, temaTitulo, esGeneral, temaNum, totalGeneral, totalEsp } from "./data/temas.js";
import { PREGUNTAS } from "./data/preguntas.js";
import { RESUMENES } from "./data/resumenes.js";
import { SUPUESTOS } from "./data/supuestos.js";
import { loadState, saveState, syncDisponible, getCodigo, setCodigo } from "./lib/storage.js";
import { supabase } from "./lib/supabase.js";

/* ---------- TOKENS (tablero de delineación) ---------- */
// Los valores son variables CSS: cambian solas con el atributo data-theme del <div id="app-wrap">.
const C = {
  paper: "var(--c-paper)", card: "var(--c-card)", ink: "var(--c-ink)", ink2: "var(--c-ink2)", hair: "var(--c-hair)", hairA: "var(--c-hair-a)",
  red: "var(--c-red)", redSoft: "var(--c-redsoft)", ok: "var(--c-ok)", okSoft: "var(--c-oksoft)", slate: "var(--c-slate)", amber: "var(--c-amber)",
};
const INK_FIJA = "#1C1B19"; // texto sobre subrayados: siempre oscuro, el fondo pastel no cambia con el tema
const MONO = "ui-monospace, 'SF Mono', 'Cascadia Mono', 'Roboto Mono', Menlo, Consolas, monospace";
const SANS = "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const defaultState = () => ({ temas: {}, falladas: [], supuestos: {}, sesiones: [], leidos: {} });
const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmtTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function App() {
  const [state, setState] = useState(null);
  const [saving, setSaving] = useState("idle");
  const [tab, setTab] = useState("inicio");
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem("opo-dark-mode") === "1"; } catch { return false; }
  });

  useEffect(() => { loadState().then((s) => setState(s || defaultState())); }, []);

  const persist = useCallback(async (next) => {
    setState(next); setSaving("saving");
    const ok = await saveState(next); setSaving(ok ? "idle" : "error");
  }, []);

  const toggleDark = () => {
    setDarkMode((v) => {
      const next = !v;
      try { localStorage.setItem("opo-dark-mode", next ? "1" : "0"); } catch {}
      return next;
    });
  };

  if (!state) return (
    <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "center" }} data-theme={darkMode ? "dark" : "light"}>
      <style>{baseCSS}</style>
      <div style={{ fontFamily: MONO, color: C.ink2 }}>Cargando expediente…</div>
    </div>
  );

  return (
    <div style={wrap} data-theme={darkMode ? "dark" : "light"}>
      <style>{baseCSS}</style>
      <Header tab={tab} setTab={setTab} saving={saving} darkMode={darkMode} toggleDark={toggleDark} />
      <main style={{ maxWidth: 920, margin: "0 auto", padding: "0 18px 64px" }}>
        {tab === "inicio" && <Inicio state={state} setTab={setTab} reload={() => loadState().then((s) => setState(s || defaultState()))} />}
        {tab === "temas" && <VistaLectura state={state} persist={persist} />}
        {tab === "resumenes" && <Resumenes />}
        {tab === "test" && <Test state={state} persist={persist} />}
        {tab === "supuestos" && <Supuestos state={state} persist={persist} />}
        {tab === "progreso" && <Progreso state={state} persist={persist} />}
      </main>
    </div>
  );
}

function Header({ tab, setTab, saving, darkMode, toggleDark }) {
  const tabs = [["inicio", "Inicio"], ["temas", "Leer temas"], ["resumenes", "Resúmenes"], ["test", "Test · 1ª"], ["supuestos", "Supuestos · 2ª"], ["progreso", "Progreso"]];
  return (
    <header style={{ borderBottom: `2px solid ${C.ink}`, marginBottom: 24, background: C.paper, position: "sticky", top: 0, zIndex: 5 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "14px 18px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 2, color: C.red, fontWeight: 700 }}>COAVN · OPOSICIÓN ENERO 2027</div>
            <h1 style={{ fontFamily: SANS, fontSize: 22, fontWeight: 800, margin: "2px 0 0", color: C.ink, letterSpacing: -0.4 }}>Arquitecto/a — Ayuntamiento de Pamplona</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={toggleDark} title="Cambiar tema" style={{
              fontFamily: MONO, fontSize: 11, padding: "5px 10px", border: `1.5px solid ${C.hair}`,
              background: "transparent", color: C.ink2, borderRadius: 4, cursor: "pointer",
            }}>{darkMode ? "☀ Claro" : "☾ Oscuro"}</button>
            <div style={{ fontFamily: MONO, fontSize: 10.5, color: saving === "error" ? C.red : C.ink2 }}>
              {saving === "saving" ? "guardando…" : saving === "error" ? "⚠ sin guardar" : "● guardado"}
            </div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 2, marginTop: 12, flexWrap: "wrap" }}>
          {tabs.map(([k, label]) => (
            <button key={k} onClick={() => setTab(k)} className="navbtn" style={{
              fontFamily: MONO, fontSize: 12, padding: "8px 12px", border: "none", cursor: "pointer",
              background: tab === k ? C.ink : "transparent", color: tab === k ? C.paper : C.ink2,
              borderTopLeftRadius: 4, borderTopRightRadius: 4, fontWeight: tab === k ? 700 : 500,
            }}>{label}</button>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ---------- INICIO + sincronización ---------- */
function Inicio({ state, setTab, reload }) {
  const [codigo, setCod] = useState(getCodigo());
  const [backupMsg, setBackupMsg] = useState(null); // { ok, texto }
  const fileInputRef = useRef(null);
  const vistas = Object.values(state.temas).reduce((a, t) => a + (t.vistas || 0), 0);
  const aciertos = Object.values(state.temas).reduce((a, t) => a + (t.aciertos || 0), 0);
  const fallos = Object.values(state.temas).reduce((a, t) => a + (t.fallos || 0), 0);
  const pct = vistas ? Math.round((aciertos / vistas) * 100) : 0;
  // Nota neta con el criterio real de la 1ª prueba: cada fallo resta 1/3 y los
  // blancos ni suman ni restan. El porcentaje bruto de aciertos siempre pinta
  // mejor que la nota que saldría en el examen, así que se muestran los dos.
  const pctNeto = vistas ? Math.round(Math.max(0, (aciertos - fallos / 3) / vistas) * 100) : 0;
  const guardarCodigo = async () => { setCodigo(codigo); await reload(); };

  const exportarProgreso = () => {
    const payload = { app: "oposicion-pamplona", version: 1, exportadoEl: new Date().toISOString(), codigo: getCodigo(), data: state };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `oposicion-pamplona-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setBackupMsg({ ok: true, texto: "Backup descargado." });
  };

  const importarProgreso = async (file) => {
    try {
      const json = JSON.parse(await file.text());
      if (!json || typeof json !== "object" || !json.data || typeof json.data !== "object") {
        throw new Error("el archivo no tiene el formato esperado");
      }
      if (!window.confirm("Esto sustituirá tu progreso actual en este dispositivo por el del backup. ¿Continuar?")) return;
      if (json.codigo) { setCodigo(json.codigo); setCod(json.codigo); }
      await saveState(json.data);
      await reload();
      setBackupMsg({ ok: true, texto: "Progreso importado correctamente." });
    } catch (e) {
      setBackupMsg({ ok: false, texto: `Error al importar: ${e.message}` });
    }
  };

  return (
    <div>
      <Ficha codigo="PLAN DE ATAQUE" titulo="Cómo se gana esta plaza">
        <p style={p}>Dos pruebas eliminatorias. La <b>1ª</b> (test, 100 preguntas, 30 pts, penaliza 1/3) solo te deja competir: basta superar 15. La <b>2ª</b> (supuestos, 70 pts, mínimo 35) decide la plaza y rompe los empates. <b>Las horas, en la 2ª.</b></p>
        <p style={p}>Sin consulta de textos en ninguna prueba: hay que llevar artículos, plazos y umbrales memorizados. Por eso el test cita el artículo en cada explicación.</p>
      </Ficha>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12, margin: "18px 0" }}>
        <Stat n={PREGUNTAS.length} label="preguntas en el banco" />
        <Stat n={vistas} label="respondidas" />
        <Stat n={`${pct}%`} label="aciertos brutos" accent={pct >= 70 ? C.ok : pct >= 50 ? C.amber : C.red} />
        <Stat n={`${pctNeto}%`} label="neto (−1/3 por fallo)" accent={pctNeto >= 50 ? C.ok : pctNeto >= 35 ? C.amber : C.red} />
        <Stat n={SUPUESTOS.length} label="supuestos" />
      </div>

      <Ficha codigo="SINCRONIZACIÓN" titulo="Mismo progreso en tus 3 dispositivos">
        {syncDisponible() ? (
          <>
            <p style={pSmall}>Escribe un código personal (el que quieras) e introdúcelo igual en cada dispositivo. Tu progreso se sincroniza con ese código.</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
              <input value={codigo} onChange={(e) => setCod(e.target.value)} placeholder="p. ej. marcos-2027"
                style={{ fontFamily: MONO, fontSize: 13, padding: "9px 12px", border: `1.5px solid ${C.hair}`, borderRadius: 4, background: C.card, color: C.ink, flex: "1 1 200px" }} />
              <button className="cta" style={ctaPrimary} onClick={guardarCodigo}>Guardar y sincronizar</button>
            </div>
            {getCodigo() && <p style={{ ...pSmall, marginTop: 8 }}>Código activo: <b style={{ fontFamily: MONO }}>{getCodigo()}</b></p>}
          </>
        ) : (
          <p style={pSmall}>Ahora mismo el progreso se guarda solo en este dispositivo. Para sincronizar entre los tres, configura Supabase (ver README) y rellena las variables de entorno; entonces aparecerá aquí el campo de código.</p>
        )}
      </Ficha>

      <Ficha codigo="COPIA DE SEGURIDAD" titulo="Backup de tu progreso">
        <p style={pSmall}>Tu progreso vive en este dispositivo{getCodigo() ? " (y sincronizado con tu código)" : ", sin copia en ningún otro sitio"}. Descarga un archivo de vez en cuando por si pierdes el móvil o cambias de dispositivo sin haber configurado un código.</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
          <button className="cta" style={ctaGhost} onClick={exportarProgreso}>Exportar progreso</button>
          <button className="cta" style={ctaGhost} onClick={() => fileInputRef.current?.click()}>Importar progreso</button>
          <input ref={fileInputRef} type="file" accept="application/json" style={{ display: "none" }}
            onChange={(e) => { const f = e.target.files?.[0]; e.target.value = ""; if (f) importarProgreso(f); }} />
        </div>
        {backupMsg && <p style={{ ...pSmall, marginTop: 8, color: backupMsg.ok ? C.ok : C.red }}>{backupMsg.texto}</p>}
      </Ficha>

      <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
        <button className="cta" style={ctaPrimary} onClick={() => setTab("test")}>Empezar un test →</button>
        <button className="cta" style={ctaGhost} onClick={() => setTab("resumenes")}>Ver resúmenes</button>
        <button className="cta" style={ctaGhost} onClick={() => setTab("supuestos")}>Supuestos</button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   COLORES DE SUBRAYADO
   ═══════════════════════════════════════════════════════════════════════ */
const COLORES_SUB = { amarillo: "#FDE068", verde: "#86EFAC", rosa: "#F9A8D4" };

/* ═══════════════════════════════════════════════════════════════════════
   PARSER DE TEMAS (Formato A + Formato B + fallback plain)
   ═══════════════════════════════════════════════════════════════════════ */

// Detecta el formato dominante del texto
function detectarFormato(texto) {
  const primeras = texto.split("\n").slice(0, 15).join("\n");
  if (/^={5,}/m.test(primeras) || /^#{5,}/m.test(primeras)) return "A";
  if (/^Tema\s+\d+\.\-/m.test(primeras) || /^(CAPÍTULO|TÍTULO|Artículo\s+\d+)/m.test(primeras)) return "B";
  return "plain";
}

// Tokeniza una línea en tipo semántico
function tipificarLinea(linea, formato) {
  const t = linea.trimEnd();
  const tl = t.trimStart();

  // ── Marcadores Formato A ─────────────────────────────────────────────
  if (/^={5,}/.test(t)) return { tipo: "hrA", texto: "" };
  if (/^#{5,}/.test(t)) return { tipo: "hrB", texto: "" };
  if (/^-{5,}/.test(t)) return { tipo: "hrC", texto: "" };
  if (/^>>>\s?/.test(t)) return { tipo: "aviso", texto: t.replace(/^>>>\s?/, "") };
  if (/^(BLOQUE|PARTE)\s+\S+\s*[—\-]/.test(t)) return { tipo: "seccionA", texto: t };
  if (/^(DATOS CLAVE|TRAMPAS DE EXAMEN|TRAMPAS|FUENTES)(\s*[:–—]|\s*$)/i.test(t))
    return { tipo: "seccionFinal", texto: t };

  // ── Marcadores Formato B ─────────────────────────────────────────────
  if (/^(TÍTULO|CAPÍTULO|SECCIÓN)\s+/i.test(t) && t === t.toUpperCase())
    return { tipo: "cabMayor", texto: t };
  if (/^Artículo\s+(\d+[\w]*)\.\s*/i.test(t)) {
    const m = t.match(/^Artículo\s+(\d+[\w]*)\./i);
    return { tipo: "articulo", num: m[1], texto: t };
  }
  if (/^(Disposición\s+(adicional|transitoria|derogatoria|final)|ANEXO\s)/i.test(t))
    return { tipo: "disposicion", texto: t };
  if (/^(Preámbulo|Exposición de motivos|decreto:|dispongo:)/i.test(tl))
    return { tipo: "encabSeccion", texto: t };

  // ── Primera línea tipo "Tema N.-" (solo informativa, no la primera vez) ─
  if (/^Tema\s+\d+\.\-/.test(t)) return { tipo: "tituloTema", texto: t };

  // ── Vacía ────────────────────────────────────────────────────────────
  if (!t.trim()) return { tipo: "vacia", texto: "" };

  return { tipo: "parrafo", texto: t };
}

// Construye el TOC a partir de los tokens
function construirTOC(tokens) {
  return tokens
    .filter((tk) => ["cabMayor", "articulo", "disposicion", "seccionA", "seccionFinal"].includes(tk.tipo))
    .map((tk, i) => ({ ...tk, ancla: `tl-${i}-${tk.tipo}` }));
}

// Divide el contenido en segmentos según los subrayados (offsets de char)
function splitByMarks(contenido, marks) {
  if (!contenido) return [];
  if (!marks.length) return [{ text: contenido, markId: null }];
  const sorted = [...marks]
    .filter((m) => m.inicio >= 0 && m.fin <= contenido.length && m.fin > m.inicio)
    .sort((a, b) => a.inicio - b.inicio);
  const segs = [];
  let pos = 0;
  for (const m of sorted) {
    if (m.inicio > pos) segs.push({ text: contenido.slice(pos, m.inicio), markId: null });
    segs.push({ text: contenido.slice(m.inicio, m.fin), markId: m.id, color: m.color });
    pos = m.fin;
  }
  if (pos < contenido.length) segs.push({ text: contenido.slice(pos), markId: null });
  return segs;
}

// Offset de carácter de un nodo de texto dentro de un contenedor DOM
function getCharOffset(container, node, offsetInNode) {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  let count = 0;
  let cur;
  while ((cur = walker.nextNode())) {
    if (cur === node) return count + offsetInNode;
    count += cur.nodeValue.length;
  }
  return count + offsetInNode;
}

// Offset de carácter bajo un punto de pantalla (x, y) — usado por el modo
// subrayado táctil, que no depende de la selección nativa del navegador.
function caretOffsetFromPoint(container, x, y) {
  let node, offset;
  if (document.caretRangeFromPoint) {
    const range = document.caretRangeFromPoint(x, y);
    if (!range) return null;
    node = range.startContainer; offset = range.startOffset;
  } else if (document.caretPositionFromPoint) {
    const pos = document.caretPositionFromPoint(x, y);
    if (!pos) return null;
    node = pos.offsetNode; offset = pos.offset;
  } else return null;
  if (!container.contains(node)) return null;
  return getCharOffset(container, node, offset);
}

/* ═══════════════════════════════════════════════════════════════════════
   ÍNDICE DE 72 TEMAS (lista completa para el sidebar)
   ═══════════════════════════════════════════════════════════════════════ */
const LISTA_TEMAS = [
  ...TEMAS_GENERAL.map((t, i) => ({ codigo: `G${i + 1}`, serie: "G", numero: i + 1, titulo: t })),
  ...TEMAS_ESP.map((t, i)     => ({ codigo: `E${i + 1}`, serie: "E", numero: i + 1, titulo: t })),
];

/* ═══════════════════════════════════════════════════════════════════════
   COMPONENTE PRINCIPAL — VISTA DE LECTURA
   ═══════════════════════════════════════════════════════════════════════ */
function VistaLectura({ state, persist }) {
  const leidos = state?.leidos || {};
  const marcarLeido = (codigo, val) => {
    persist({ ...state, leidos: { ...leidos, [codigo]: val } });
  };
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);
  const [contenido, setContenido] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);
  const raizRef = useRef(null);

  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const onChange = () => {
      const activa = !!document.fullscreenElement;
      setFullscreen(activa);
      setSidebarVisible(!activa); // al entrar en pantalla completa, oculta la lista; al salir, la recupera
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) raizRef.current?.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.();
  };
  const [disponibles, setDisponibles] = useState(null);
  const [fontSize, setFontSize] = useState(() => {
    try { return parseInt(localStorage.getItem("lect-fs") || "15", 10); } catch { return 15; }
  });
  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  const [tocAbierto, setTocAbierto] = useState(false);
  const [subrayados, setSubrayados] = useState([]);
  const [popup, setPopup] = useState(null); // { inicio, fin, x, y }
  const [subrayadoModo, setSubrayadoModo] = useState(() => {
    try { return localStorage.getItem("lect-subrayado-modo") === "1"; } catch { return false; }
  });
  const [anclaSub, setAnclaSub] = useState(null); // { offset, x, y } — primer toque en modo subrayado
  const contenedorRef = useRef(null);
  const bodyRef = useRef(null);
  const popupRef = useRef(null);

  // Lista de códigos disponibles
  useEffect(() => {
    if (!supabase) return;
    supabase.from("temas").select("codigo").then(({ data }) => {
      if (data) setDisponibles(new Set(data.map((r) => r.codigo)));
    });
  }, []);

  // Cierra popup al hacer clic fuera
  useEffect(() => {
    if (!popup) return;
    const abiertoEn = Date.now();
    const close = (e) => {
      // En móvil, tras seleccionar texto con el dedo el navegador dispara un
      // mousedown/touchstart "fantasma" ~300ms después sobre el propio texto
      // (no el popup): sin este margen, el popup se cerraba solo antes de
      // poder tocar un color.
      if (Date.now() - abiertoEn < 400) return;
      if (popupRef.current && !popupRef.current.contains(e.target)) setPopup(null);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
    };
  }, [popup]);

  // El tema (claro/oscuro) es global — ver toggleDark en el Header. Aquí solo alias a los tokens.
  const bg = C.paper, bgCard = C.card, tinta = C.ink, tinta2 = C.ink2, borde = C.hair;

  const persistFs = (v) => { setFontSize(v); try { localStorage.setItem("lect-fs", String(v)); } catch {} };

  const temasFiltrados = useMemo(() => {
    const q = busqueda.toLowerCase();
    if (!q) return LISTA_TEMAS;
    return LISTA_TEMAS.filter((t) => t.codigo.toLowerCase().includes(q) || t.titulo.toLowerCase().includes(q));
  }, [busqueda]);

  const cargarTema = useCallback(async (tema) => {
    setSeleccionado(tema);
    setContenido(null);
    setError(null);
    setCargando(true);
    setSidebarAbierto(false);
    setSubrayados([]);
    setPopup(null);
    setAnclaSub(null);
    if (contenedorRef.current) contenedorRef.current.scrollTop = 0;
    if (!supabase) {
      setError("Supabase no está configurado (faltan VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).");
      setCargando(false);
      return;
    }
    try {
      const { data, error: err } = await supabase
        .from("temas").select("contenido").eq("codigo", tema.codigo).maybeSingle();
      if (err) throw err;
      if (!data) {
        setError(`El tema ${tema.codigo} no tiene texto disponible todavía.`);
      } else {
        setContenido(data.contenido);
        const codigo = getCodigo();
        if (codigo) {
          const { data: subs } = await supabase
            .from("subrayados").select("id, inicio, fin, color")
            .eq("codigo", codigo).eq("tema_codigo", tema.codigo);
          setSubrayados(subs || []);
        }
      }
    } catch (e) {
      setError(`Error de red: ${e.message}`);
    }
    setCargando(false);
  }, []);

  // TOC (solo para el índice navegable — el cuerpo se renderiza como texto plano)
  const { toc, formato } = useMemo(() => {
    if (!contenido) return { toc: [], formato: null };
    const fmt = detectarFormato(contenido);
    if (fmt === "plain") return { toc: [], formato: "plain" };
    const tks = contenido.split("\n").map((l) => tipificarLinea(l, fmt));
    return { toc: construirTOC(tks), formato: fmt };
  }, [contenido]);

  // Segmentos de texto con/sin subrayado
  const segments = useMemo(() => splitByMarks(contenido || "", subrayados), [contenido, subrayados]);

  // Captura de selección de texto
  const handleSeleccion = useCallback(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !bodyRef.current) return;
    const range = sel.getRangeAt(0);
    if (!bodyRef.current.contains(range.commonAncestorContainer)) return;
    const inicio = getCharOffset(bodyRef.current, range.startContainer, range.startOffset);
    const fin    = getCharOffset(bodyRef.current, range.endContainer,   range.endOffset);
    if (fin <= inicio) return;
    const rects = range.getClientRects();
    if (!rects.length) return;
    const last = rects[rects.length - 1];
    setPopup({ inicio, fin, x: last.left + last.width / 2, y: last.bottom + 8 });
  }, []);

  const guardarSubrayado = useCallback(async (color) => {
    if (!popup || !seleccionado) return;
    const codigo = getCodigo();
    const mark = { inicio: popup.inicio, fin: popup.fin, color, tema_codigo: seleccionado.codigo };
    setPopup(null);
    window.getSelection()?.removeAllRanges();
    if (supabase && codigo) {
      const { data, error: err } = await supabase
        .from("subrayados").insert({ ...mark, codigo })
        .select("id, inicio, fin, color").single();
      if (!err && data) setSubrayados((prev) => [...prev, data]);
    } else {
      setSubrayados((prev) => [...prev, { id: Date.now(), ...mark }]);
    }
  }, [popup, seleccionado]);

  // Modo subrayado táctil: en vez de depender de la selección nativa (que en
  // móvil/tablet abre el menú del sistema de copiar/pegar y se come el gesto),
  // el usuario toca el inicio y luego el final del pasaje a subrayar.
  const toggleSubrayadoModo = useCallback(() => {
    setSubrayadoModo((v) => {
      const nv = !v;
      try { localStorage.setItem("lect-subrayado-modo", nv ? "1" : "0"); } catch {}
      return nv;
    });
    setAnclaSub(null);
  }, []);

  const handleTapSubrayado = useCallback((e) => {
    if (!subrayadoModo || !bodyRef.current) return;
    if (e.target.closest && e.target.closest("mark")) return; // deja que borrarSubrayado gestione el toque
    const offset = caretOffsetFromPoint(bodyRef.current, e.clientX, e.clientY);
    if (offset == null) return;
    if (!anclaSub) {
      setAnclaSub({ offset, x: e.clientX, y: e.clientY });
    } else {
      const inicio = Math.min(anclaSub.offset, offset);
      const fin = Math.max(anclaSub.offset, offset);
      setAnclaSub(null);
      if (fin > inicio) setPopup({ inicio, fin, x: e.clientX, y: e.clientY + 8 });
    }
  }, [subrayadoModo, anclaSub]);

  const borrarSubrayado = useCallback(async (e, id) => {
    e.stopPropagation();
    setSubrayados((prev) => prev.filter((m) => m.id !== id));
    const codigo = getCodigo();
    if (supabase && codigo) {
      await supabase.from("subrayados").delete().eq("id", id).eq("codigo", codigo);
    }
  }, []);

  const esMovil = typeof window !== "undefined" && window.innerWidth < 700;

  // Se invoca como función —{renderSidebar()}— y no como <Componente />: al estar
  // definida dentro del render, su identidad cambia en cada pasada y React
  // remontaría el subárbol entero, perdiendo el scroll de la lista al elegir tema.
  const renderSidebar = () => (
    <div style={{
      width: 280, flexShrink: 0, borderRight: `1px solid ${borde}`,
      background: bgCard, display: "flex", flexDirection: "column",
      height: "100%", overflow: "hidden",
    }}>
      <div style={{ padding: "12px 12px 8px", borderBottom: `1px solid ${borde}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
          <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1.5, color: C.red }}>
            {LISTA_TEMAS.length} TEMAS
          </span>
          <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 0.5, color: C.ok }}>
            {Object.values(leidos).filter(Boolean).length}/{LISTA_TEMAS.length} leídos
          </span>
        </div>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por número o título…"
          style={{
            width: "100%", fontFamily: SANS, fontSize: 13, padding: "7px 10px",
            border: `1.5px solid ${borde}`, borderRadius: 4, background: bg,
            color: tinta, boxSizing: "border-box",
          }}
        />
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "4px 0" }}>
        {temasFiltrados.map((t) => {
          const activo   = seleccionado?.codigo === t.codigo;
          const hayTexto = disponibles == null || disponibles.has(t.codigo);
          const leido    = !!leidos[t.codigo];
          return (
            <div key={t.codigo} style={{
              display: "flex", alignItems: "center",
              background: activo ? C.red : "transparent",
              borderLeft: activo ? "3px solid #7B0F1E" : "3px solid transparent",
            }}>
              <button
                onClick={(e) => { e.stopPropagation(); marcarLeido(t.codigo, !leido); }}
                title={leido ? "Marcar como no leído" : "Marcar como leído"}
                style={{
                  flexShrink: 0, width: 28, height: 34, border: "none", background: "transparent",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  color: leido ? (activo ? "#fff" : C.ok) : (activo ? "rgba(255,255,255,0.45)" : tinta2),
                }}
              >
                <span style={{
                  width: 15, height: 15, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center",
                  border: `1.5px solid ${leido ? "currentColor" : (activo ? "rgba(255,255,255,0.5)" : borde)}`,
                  background: leido ? "currentColor" : "transparent", fontSize: 10, lineHeight: 1,
                }}>
                  {leido && <span style={{ color: activo ? C.red : bgCard, fontWeight: 700 }}>✓</span>}
                </span>
              </button>
              <button onClick={() => cargarTema(t)}
                title={!hayTexto ? "Solo disponible en PDF" : undefined}
                style={{
                  flex: 1, display: "block", textAlign: "left", minWidth: 0,
                  padding: "9px 14px 9px 0", border: "none", cursor: "pointer", background: "transparent",
                  color: activo ? "#fff" : hayTexto ? tinta : tinta2,
                  opacity: hayTexto ? (leido && !activo ? 0.6 : 1) : 0.45,
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 10.5, fontWeight: 700, marginRight: 6, opacity: 0.75 }}>{t.codigo}</span>
                <span style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.4 }}>{t.titulo}</span>
                {!hayTexto && <span style={{ fontFamily: MONO, fontSize: 9, marginLeft: 6, opacity: 0.6 }}>PDF</span>}
              </button>
            </div>
          );
        })}
        {temasFiltrados.length === 0 && (
          <p style={{ fontFamily: SANS, fontSize: 13, color: tinta2, padding: "16px 14px" }}>Sin resultados.</p>
        )}
      </div>
    </div>
  );

  const alturaPanel = fullscreen ? "calc(100vh - 46px)" : "calc(100vh - 180px)";

  return (
    <div ref={raizRef} style={{ margin: fullscreen ? 0 : "0 -18px", background: bg, minHeight: "80vh" }}>
      {/* ── Controles ── */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8, padding: "8px 14px",
        borderBottom: `1px solid ${borde}`, background: bgCard, flexWrap: "wrap",
      }}>
        <button onClick={() => esMovil ? setSidebarAbierto((v) => !v) : setSidebarVisible((v) => !v)}
          style={{ ...ctaGhost, padding: "6px 12px", fontSize: 12 }}
        >{esMovil ? "☰ Temas" : sidebarVisible ? "◧ Ocultar lista" : "☰ Mostrar lista"}</button>

        {seleccionado && (
          <span style={{ fontFamily: MONO, fontSize: 11, color: C.red, fontWeight: 700 }}>
            {seleccionado.codigo}
          </span>
        )}
        {seleccionado && (
          <button onClick={() => marcarLeido(seleccionado.codigo, !leidos[seleccionado.codigo])}
            style={{
              ...ctaGhost, padding: "5px 10px", fontSize: 11,
              ...(leidos[seleccionado.codigo] ? { color: C.ok, border: `1.5px solid ${C.ok}` } : null),
            }}
          >{leidos[seleccionado.codigo] ? "✓ Leído" : "Marcar leído"}</button>
        )}
        {seleccionado && toc.length > 0 && (
          <button onClick={() => setTocAbierto((v) => !v)}
            style={{ ...ctaGhost, padding: "5px 10px", fontSize: 11 }}
          >Índice</button>
        )}
        {seleccionado && (
          <button onClick={toggleSubrayadoModo}
            title="En móvil/tablet, la selección nativa a veces abre el menú de copiar en vez de subrayar: este modo lo evita"
            style={{
              ...ctaGhost, padding: "5px 10px", fontSize: 11,
              ...(subrayadoModo ? { color: C.amber, border: `1.5px solid ${C.amber}` } : null),
            }}
          >{subrayadoModo ? "✓ Modo subrayado" : "🖍 Subrayar"}</button>
        )}
        {subrayadoModo && (
          <span style={{ fontFamily: MONO, fontSize: 10, color: C.amber, background: "#FEF3C7", padding: "3px 8px", borderRadius: 12 }}>
            {anclaSub ? "Toca el final del pasaje" : "Toca el inicio del pasaje"}
          </span>
        )}
        {subrayados.length > 0 && (
          <span style={{ fontFamily: MONO, fontSize: 10, color: C.amber, background: "#FEF3C7", padding: "3px 8px", borderRadius: 12 }}>
            {subrayados.length} subrayado{subrayados.length !== 1 ? "s" : ""}
          </span>
        )}

        <div style={{ flex: 1 }} />

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: tinta2 }}>A</span>
          {[13, 15, 17].map((sz) => (
            <button key={sz} onClick={() => persistFs(sz)} style={{
              fontFamily: MONO, fontSize: sz === 13 ? 10 : sz === 15 ? 12 : 14,
              padding: "3px 7px", border: `1.5px solid ${fontSize === sz ? tinta : borde}`,
              background: fontSize === sz ? tinta : "transparent",
              color: fontSize === sz ? bg : tinta2, borderRadius: 3, cursor: "pointer",
            }}>A</button>
          ))}
        </div>
        <button onClick={toggleFullscreen} title="Pantalla completa"
          style={{ ...ctaGhost, padding: "5px 10px", fontSize: 11 }}
        >{fullscreen ? "⤡ Salir" : "⤢ Pantalla completa"}</button>
      </div>

      {/* ── TOC dropdown ── */}
      {tocAbierto && toc.length > 0 && (
        <div style={{
          background: bgCard, borderBottom: `1px solid ${borde}`,
          padding: "10px 14px", maxHeight: 240, overflowY: "auto",
        }}>
          <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1.5, color: C.red, marginBottom: 8 }}>
            ÍNDICE DE SECCIONES / ARTÍCULOS
          </div>
          <div style={{ columns: "2 200px", gap: 8 }}>
            {toc.map((item, i) => (
              <a key={i} href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setTocAbierto(false);
                  const container = contenedorRef.current;
                  if (!container || !contenido) return;
                  const charPos = contenido.indexOf(item.texto.slice(0, 40));
                  if (charPos < 0) return;
                  const fraction = charPos / contenido.length;
                  container.scrollTop = fraction * (container.scrollHeight - container.clientHeight);
                }}
                style={{
                  display: "block", fontFamily: SANS, fontSize: 12, color: tinta,
                  textDecoration: "none", padding: "3px 0",
                  paddingLeft: item.tipo === "articulo" ? 14 : 0,
                  fontWeight: item.tipo === "cabMayor" ? 700 : 400,
                  borderBottom: `1px solid ${borde}`, marginBottom: 2,
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}
              >
                {item.texto.length > 70 ? item.texto.slice(0, 70) + "…" : item.texto}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ── Layout ── */}
      <div style={{ display: "flex", height: alturaPanel, overflow: "hidden" }}>
        <div style={{
          display: (esMovil ? sidebarAbierto : sidebarVisible) ? "flex" : "none",
          flexDirection: "column",
          position: esMovil ? "absolute" : "relative",
          zIndex: esMovil ? 20 : 1,
          height: esMovil ? alturaPanel : "100%",
          boxShadow: esMovil ? "4px 0 12px rgba(0,0,0,0.15)" : "none",
          width: 280, flexShrink: 0,
        }}>
          {renderSidebar()}
        </div>

        {/* Panel de lectura */}
        <div ref={contenedorRef} style={{ flex: 1, overflowY: "auto", padding: "24px 0" }}>
          {!seleccionado && (
            <div style={{ textAlign: "center", padding: "60px 24px", color: tinta2 }}>
              <div style={{ fontFamily: MONO, fontSize: 14, marginBottom: 10 }}>← Selecciona un tema</div>
              <div style={{ fontFamily: SANS, fontSize: 13 }}>
                {supabase ? "Los temas se cargan desde Supabase." : "⚠ Supabase no configurado."}
              </div>
            </div>
          )}

          {cargando && (
            <div style={{ textAlign: "center", padding: "60px 24px", color: tinta2, fontFamily: MONO, fontSize: 13 }}>
              Cargando {seleccionado?.codigo}…
            </div>
          )}

          {error && (
            <div style={{ maxWidth: 680, margin: "32px auto", padding: "0 24px" }}>
              <div style={{ background: C.redSoft, borderLeft: `4px solid ${C.red}`, padding: "14px 18px", borderRadius: 4 }}>
                <div style={{ fontFamily: MONO, fontSize: 11, color: C.red, marginBottom: 6 }}>ERROR</div>
                <p style={{ fontFamily: SANS, fontSize: 14, color: C.ink, margin: 0 }}>{error}</p>
              </div>
            </div>
          )}

          {contenido && !cargando && (
            <div style={{ maxWidth: fullscreen ? "min(1400px, 92vw)" : "70ch", margin: "0 auto", padding: "0 24px 48px" }}>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 1.5, color: C.red, marginBottom: 4 }}>
                  {seleccionado.codigo} · {formato === "A" ? "FORMATO ESTRUCTURADO" : formato === "B" ? "ARTICULADO LEGAL" : "TEXTO PLANO"}
                  {!getCodigo() && (
                    <span style={{ marginLeft: 10, color: C.amber }}>
                      · Sin código de sincronización — los subrayados no se guardarán
                    </span>
                  )}
                </div>
                <h1 style={{ fontFamily: SANS, fontSize: fontSize + 4, fontWeight: 800, color: tinta, margin: 0, lineHeight: 1.25 }}>
                  {seleccionado.titulo}
                </h1>
              </div>

              {/* Cuerpo: texto plano con subrayados como <mark> */}
              <div
                ref={bodyRef}
                onMouseUp={handleSeleccion}
                onTouchEnd={() => setTimeout(handleSeleccion, 200)}
                onClick={handleTapSubrayado}
                style={{
                  fontFamily: SANS, fontSize, lineHeight: 1.85, color: tinta,
                  whiteSpace: "pre-wrap", wordBreak: "break-word", cursor: subrayadoModo ? "crosshair" : "text",
                  ...(subrayadoModo
                    ? { userSelect: "none", WebkitUserSelect: "none", WebkitTouchCallout: "none" }
                    : { userSelect: "text", WebkitUserSelect: "text" }),
                }}
              >
                {segments.map((seg, i) =>
                  seg.markId ? (
                    <mark
                      key={i}
                      onClick={(e) => borrarSubrayado(e, seg.markId)}
                      title="Clic para borrar subrayado"
                      style={{
                        background: COLORES_SUB[seg.color] || COLORES_SUB.amarillo,
                        color: INK_FIJA, cursor: "pointer", borderRadius: 2,
                      }}
                    >{seg.text}</mark>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Marcador del punto de inicio en modo subrayado táctil ── */}
      {anclaSub && (
        <div style={{
          position: "fixed", left: anclaSub.x, top: anclaSub.y,
          transform: "translate(-50%, -140%)", zIndex: 199, pointerEvents: "none",
          background: C.amber, color: INK_FIJA, fontFamily: MONO, fontWeight: 700,
          fontSize: 10, padding: "3px 7px", borderRadius: 6, whiteSpace: "nowrap",
        }}>
          inicio ↓
        </div>
      )}

      {/* ── Popup selector de color ── */}
      {popup && (
        <div ref={popupRef} style={{
          position: "fixed", left: popup.x, top: popup.y,
          transform: "translateX(-50%)", zIndex: 200,
          background: C.card, border: `1px solid ${C.hair}`,
          borderRadius: 10, boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
          padding: "8px 12px", display: "flex", gap: 10, alignItems: "center",
        }}>
          {Object.entries(COLORES_SUB).map(([nombre, hex]) => (
            <button key={nombre} onClick={() => guardarSubrayado(nombre)}
              title={nombre.charAt(0).toUpperCase() + nombre.slice(1)}
              style={{
                width: 28, height: 28, borderRadius: "50%",
                background: hex, border: "2px solid rgba(0,0,0,0.15)",
                cursor: "pointer", flexShrink: 0,
              }}
            />
          ))}
          <button onClick={() => { setPopup(null); window.getSelection()?.removeAllRanges(); }}
            style={{
              fontFamily: MONO, fontSize: 14, color: C.ink2,
              background: "none", border: "none", cursor: "pointer", padding: "0 2px", lineHeight: 1,
            }}
          >✕</button>
        </div>
      )}
    </div>
  );
}

/* ---------- RESÚMENES ---------- */
function Resumenes() {
  const disponibles = [...Object.keys(RESUMENES)].sort((a, b) => {
    if (esGeneral(a) !== esGeneral(b)) return esGeneral(a) ? -1 : 1;
    return temaNum(a) - temaNum(b);
  });
  const [sel, setSel] = useState(disponibles[0] || null);
  // Índices de bloque abiertos. Se parte de todo plegado: así el tema entra de
  // una pantalla y se despliega solo lo que se va a repasar.
  const [abiertos, setAbiertos] = useState(() => new Set());
  const [clavesAbierto, setClavesAbierto] = useState(false);
  const r = sel ? RESUMENES[sel] : null;

  const cambiarTema = (k) => {
    setSel(k);
    setAbiertos(new Set());
    setClavesAbierto(false);
  };
  const alternar = (i) => setAbiertos((prev) => {
    const n = new Set(prev);
    n.has(i) ? n.delete(i) : n.add(i);
    return n;
  });
  const todoAbierto = r && abiertos.size === r.bloques.length;

  const generales = disponibles.filter(esGeneral);
  const especificos = disponibles.filter((k) => !esGeneral(k));

  return (
    <div>
      <Ficha codigo="RESÚMENES" titulo="Repaso por tema">
        <p style={pSmall}>Resúmenes orientados a examen: datos, artículos, plazos y ubicación de cada concepto. Crecen igual que el banco de test. Disponibles ahora: {disponibles.length} tema(s).</p>
        <select
          value={sel || ""}
          onChange={(e) => cambiarTema(e.target.value)}
          style={{
            width: "100%", marginTop: 10, fontFamily: MONO, fontSize: 13,
            padding: "10px 12px", borderRadius: 4, cursor: "pointer",
            border: `1.5px solid ${C.hair}`, background: C.card, color: C.ink,
          }}
        >
          <optgroup label={`PARTE GENERAL (${generales.length})`}>
            {generales.map((k) => (
              <option key={k} value={k}>{k} · {temaTitulo(k).split("—")[0].trim()}</option>
            ))}
          </optgroup>
          <optgroup label={`PARTE ESPECÍFICA (${especificos.length})`}>
            {especificos.map((k) => (
              <option key={k} value={k}>{k} · {temaTitulo(k).split("—")[0].trim()}</option>
            ))}
          </optgroup>
        </select>
      </Ficha>

      {r && (
        <Ficha codigo={`${sel} · ${esGeneral(sel) ? "GENERAL (solo test)" : "ESPECÍFICO"}`} titulo={temaTitulo(sel)}>
          <p style={{ ...p, fontStyle: "italic", color: C.ink2 }}>{r.intro}</p>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14, marginBottom: 4 }}>
            <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 1, color: C.slate }}>
              {r.bloques.length} BLOQUES
            </span>
            <div style={{ flex: 1 }} />
            <button
              onClick={() => setAbiertos(todoAbierto ? new Set() : new Set(r.bloques.map((_, i) => i)))}
              style={{ ...ctaGhost, padding: "4px 10px", fontSize: 11 }}
            >{todoAbierto ? "Plegar todo" : "Abrir todo"}</button>
          </div>

          {r.bloques.map((b, i) => {
            const abierto = abiertos.has(i);
            return (
              <div key={i} style={{ borderBottom: `1px solid ${C.hair}` }}>
                <button
                  onClick={() => alternar(i)}
                  aria-expanded={abierto}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
                    background: "transparent", border: "none", cursor: "pointer",
                    padding: "11px 2px", color: abierto ? C.red : C.slate,
                    fontFamily: MONO, fontSize: 11, letterSpacing: 1, fontWeight: 700,
                  }}
                >
                  <span style={{ flexShrink: 0, fontSize: 13, lineHeight: 1, width: 12 }}>{abierto ? "−" : "+"}</span>
                  <span style={{ flex: 1 }}>{b.h.toUpperCase()}</span>
                  <span style={{ flexShrink: 0, fontWeight: 500, opacity: 0.6 }}>{b.items.length}</span>
                </button>
                {abierto && (
                  <div style={{ padding: "0 0 14px 22px" }}>
                    {b.nota && <p style={{ ...p, margin: "0 0 10px", fontSize: 14 }}>{b.nota}</p>}
                    {b.items.map((it, j) => (
                      <div key={j} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                        <span style={{ color: C.red, fontFamily: MONO, flexShrink: 0 }}>·</span>
                        <span style={{ ...p, margin: 0, fontSize: 14 }}>{it}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {r.claves?.length > 0 && (
            <div style={{ marginTop: 18, borderLeft: `3px solid ${C.red}`, background: C.redSoft }}>
              <button
                onClick={() => setClavesAbierto((v) => !v)}
                aria-expanded={clavesAbierto}
                style={{
                  display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
                  background: "transparent", border: "none", cursor: "pointer", padding: "10px 14px",
                  fontFamily: MONO, fontSize: 10.5, letterSpacing: 1, color: C.red, fontWeight: 700,
                }}
              >
                <span style={{ flexShrink: 0, fontSize: 13, lineHeight: 1, width: 12 }}>{clavesAbierto ? "−" : "+"}</span>
                <span style={{ flex: 1 }}>CLAVES QUE MÁS CAEN</span>
                <span style={{ flexShrink: 0, fontWeight: 500, opacity: 0.7 }}>{r.claves.length}</span>
              </button>
              {clavesAbierto && (
                <div style={{ padding: "0 14px 12px 36px" }}>
                  {r.claves.map((c, i) => <div key={i} style={{ ...pSmall, margin: "0 0 4px", color: C.ink }}>— {c}</div>)}
                </div>
              )}
            </div>
          )}
        </Ficha>
      )}
    </div>
  );
}

/* ---------- TEST ---------- */
function Test({ state, persist }) {
  const [fase, setFase] = useState("config");
  const [pool, setPool] = useState([]); const [idx, setIdx] = useState(0);
  const [sel, setSel] = useState(null); const [shown, setShown] = useState(false);
  const [answers, setAnswers] = useState([]); const [confirmFin, setConfirmFin] = useState(false); const [filtroRev, setFiltroRev] = useState("todas");
  const [modo, setModo] = useState("todos"); const [num, setNum] = useState(10);
  const [parteR, setParteR] = useState("E"); const [desde, setDesde] = useState(1); const [hasta, setHasta] = useState(5);
  const [temaUnico, setTemaUnico] = useState(1);
  const [alcanceFallos, setAlcanceFallos] = useState("recientes");
  const [examen, setExamen] = useState(false); const [tiempoExamen, setTiempoExamen] = useState(90);
  const [segRestantes, setSegRestantes] = useState(0);
  const temasDisp = [...new Set(PREGUNTAS.map((q) => q.tema))];

  useEffect(() => {
    if (fase !== "run" || !examen) return;
    const id = setInterval(() => setSegRestantes((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [fase, examen]);

  useEffect(() => {
    if (examen && fase === "run" && segRestantes === 0) finalizar();
  }, [segRestantes]);

  const enRango = (q) => {
    if (q.tema[0] !== parteR) return false;
    const n = temaNum(q.tema);
    const lo = Math.min(desde, hasta), hi = Math.max(desde, hasta);
    return n >= lo && n <= hi;
  };
  const disponiblesRango = PREGUNTAS.filter(enRango).length;
  const enTema = (q) => q.tema === `${parteR}${temaUnico}`;
  const disponiblesTema = PREGUNTAS.filter(enTema).length;

  const iniciar = () => {
    let base = PREGUNTAS;
    if (modo === "falladas") {
      const ids = alcanceFallos === "recientes" ? state.falladas.slice(-100) : state.falladas;
      base = PREGUNTAS.filter((q) => ids.includes(q.id));
    } else if (modo === "rango") base = PREGUNTAS.filter(enRango);
    else if (modo === "tema") base = PREGUNTAS.filter(enTema);
    if (!base.length) return;
    const seleccion = shuffle(base).slice(0, Math.min(num, base.length)).map((q) => ({ ...q, _order: shuffle([0, 1, 2, 3]) }));
    setPool(seleccion);
    setIdx(0); setSel(null); setShown(false);
    setAnswers(new Array(seleccion.length).fill(null));
    setConfirmFin(false); setFiltroRev("todas");
    if (examen) setSegRestantes(tiempoExamen * 60);
    setFase("run");
  };
  const cur = pool[idx];
  const esBlanco = (a) => a === null || a === undefined;
  const marcarRespuesta = (i, v) => setAnswers((prev) => { const n = [...prev]; n[i] = v; return n; });
  const sinContestar = answers.filter(esBlanco).length;
  const corregir = (ans) => pool.map((q, i) => ({
    id: q.id, tema: q.tema, blank: esBlanco(ans[i]),
    ok: !esBlanco(ans[i]) && q._order.indexOf(q.c) === ans[i],
  }));

  const finalizar = async (ansParam) => {
    const rs = corregir(ansParam || answers);
    const next = { ...state, temas: { ...state.temas }, falladas: [...state.falladas] };
    rs.forEach((r) => {
      const t = next.temas[r.tema] || { vistas: 0, aciertos: 0, fallos: 0 }; t.vistas += 1;
      if (r.ok) { t.aciertos += 1; next.falladas = next.falladas.filter((x) => x !== r.id); }
      else if (!r.blank) { t.fallos += 1; next.falladas = [...next.falladas.filter((x) => x !== r.id), r.id]; }
      next.temas[r.tema] = t;
    });
    const a = rs.filter((r) => r.ok).length, f = rs.filter((r) => !r.ok && !r.blank).length, b = rs.filter((r) => r.blank).length;
    next.sesiones = [...state.sesiones, { fecha: Date.now(), n: rs.length, aciertos: a, fallos: f, blancos: b, examen }].slice(-30);
    await persist(next);
    setConfirmFin(false);
    setFase("fin");
  };

  // ── Modo práctica: corrección al momento ──
  const responder = () => { if (sel === null || shown) return; marcarRespuesta(idx, sel); setShown(true); };
  const enBlanco = () => { if (shown) return; marcarRespuesta(idx, null); setShown(true); };
  const siguiente = async () => { if (idx + 1 < pool.length) { setIdx(idx + 1); setSel(null); setShown(false); } else await finalizar(); };

  // ── Modo examen: sin corrección hasta el final, navegación libre ──
  const irA = (i) => { if (i >= 0 && i < pool.length) { setIdx(i); setConfirmFin(false); } };

  if (fase === "config") {
    const nF = state.falladas.length;
    const maxTema = parteR === "G" ? totalGeneral : totalEsp;
    const nums = Array.from({ length: maxTema }, (_, i) => i + 1);
    const presets = parteR === "G" ? [[1, 5], [6, 10], [11, 13]] : [[1, 5], [6, 10], [11, 15], [16, 20], [21, 25], [26, 30], [31, 35], [36, 40], [41, 45], [46, 50], [51, 55], [56, 59]];
    const okComenzar = (modo === "falladas" && !nF) || (modo === "rango" && !disponiblesRango) || (modo === "tema" && !disponiblesTema);
    return (
      <Ficha codigo="1ª PRUEBA · TEST" titulo="Configura la tanda">
        <p style={p}>Cuatro opciones, una válida. Corrección como el examen real: cada fallo resta 1/3; en blanco, ni suma ni resta.</p>
        <Label>Modo</Label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          <Chip on={modo === "todos"} onClick={() => setModo("todos")}>Todo el banco ({PREGUNTAS.length})</Chip>
          <Chip on={modo === "tema"} onClick={() => setModo("tema")}>Un solo tema</Chip>
          <Chip on={modo === "rango"} onClick={() => setModo("rango")}>Por rango de temas</Chip>
          <Chip on={modo === "falladas"} onClick={() => setModo("falladas")} disabled={!nF}>Repasar mis fallos ({nF})</Chip>
        </div>

        {modo === "tema" && (
          <div style={{ border: `1px solid ${C.hair}`, borderRadius: 6, padding: 14, marginBottom: 16, background: C.paper }}>
            <Label>Parte</Label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
              <Chip on={parteR === "G"} onClick={() => { setParteR("G"); setTemaUnico(1); }}>General (1–{totalGeneral})</Chip>
              <Chip on={parteR === "E"} onClick={() => { setParteR("E"); setTemaUnico(1); }}>Específica (1–{totalEsp})</Chip>
            </div>
            <Label>Tema</Label>
            <select value={temaUnico} onChange={(e) => setTemaUnico(+e.target.value)} style={{ ...selectStyle, width: "100%" }}>
              {nums.map((n) => <option key={n} value={n}>{parteR}{n} · {(parteR === "G" ? TEMAS_GENERAL : TEMAS_ESP)[n - 1]}</option>)}
            </select>
            <p style={{ ...pSmall, marginTop: 10, marginBottom: 0, color: disponiblesTema ? C.ok : C.red }}>
              {disponiblesTema} pregunta(s) disponible(s) en este tema.{!disponiblesTema ? " Aún no hay preguntas aquí; se irá poblando." : ""}
            </p>
          </div>
        )}

        {modo === "falladas" && (
          <div style={{ border: `1px solid ${C.hair}`, borderRadius: 6, padding: 14, marginBottom: 16, background: C.paper }}>
            <Label>Alcance</Label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Chip on={alcanceFallos === "recientes"} onClick={() => setAlcanceFallos("recientes")}>Últimos 100 fallos ({Math.min(nF, 100)})</Chip>
              <Chip on={alcanceFallos === "todos"} onClick={() => setAlcanceFallos("todos")}>Todos mis fallos ({nF})</Chip>
            </div>
          </div>
        )}

        {modo === "rango" && (
          <div style={{ border: `1px solid ${C.hair}`, borderRadius: 6, padding: 14, marginBottom: 16, background: C.paper }}>
            <Label>Parte</Label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
              <Chip on={parteR === "G"} onClick={() => { setParteR("G"); setDesde(1); setHasta(5); }}>General (1–{totalGeneral})</Chip>
              <Chip on={parteR === "E"} onClick={() => { setParteR("E"); setDesde(1); setHasta(5); }}>Específica (1–{totalEsp})</Chip>
            </div>
            <Label>Atajos</Label>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
              {presets.map(([a, b]) => (
                <Chip key={`${a}-${b}`} on={desde === a && hasta === b} onClick={() => { setDesde(a); setHasta(b); }}>{a}–{b}</Chip>
              ))}
              <Chip on={desde === 1 && hasta === maxTema} onClick={() => { setDesde(1); setHasta(maxTema); }}>Todos</Chip>
            </div>
            <Label>Rango exacto</Label>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ ...pSmall, margin: 0 }}>Del tema</span>
              <select value={desde} onChange={(e) => setDesde(+e.target.value)} style={selectStyle}>{nums.map((n) => <option key={n} value={n}>{parteR}{n}</option>)}</select>
              <span style={{ ...pSmall, margin: 0 }}>al</span>
              <select value={hasta} onChange={(e) => setHasta(+e.target.value)} style={selectStyle}>{nums.map((n) => <option key={n} value={n}>{parteR}{n}</option>)}</select>
            </div>
            <p style={{ ...pSmall, marginTop: 10, marginBottom: 0, color: disponiblesRango ? C.ok : C.red }}>
              {disponiblesRango} pregunta(s) disponible(s) en este rango.{!disponiblesRango ? " Aún no hay preguntas aquí; se irá poblando." : ""}
            </p>
          </div>
        )}

        <Label>Nº de preguntas</Label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
          {[5, 10, 20, 40, 100].map((n) => <Chip key={n} on={num === n} onClick={() => setNum(n)}>{n}</Chip>)}
        </div>

        <Label>Simulacro de examen</Label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: examen ? 10 : 18 }}>
          <Chip on={!examen} onClick={() => setExamen(false)}>Practicar (corrección al momento)</Chip>
          <Chip on={examen} onClick={() => setExamen(true)}>Examen cronometrado (sin corrección hasta el final)</Chip>
        </div>
        {examen && (
          <div style={{ border: `1px solid ${C.hair}`, borderRadius: 6, padding: 14, marginBottom: 18, background: C.paper }}>
            <Label>Tiempo del simulacro</Label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[30, 60, 90, 120].map((m) => <Chip key={m} on={tiempoExamen === m} onClick={() => setTiempoExamen(m)}>{m} min</Chip>)}
            </div>
            <p style={{ ...pSmall, marginTop: 10, marginBottom: 0 }}>Como en el examen real: puedes moverte libremente entre preguntas y cambiar lo marcado hasta que finalices. No se corrige nada sobre la marcha; las respuestas válidas y las explicaciones aparecen todas juntas al terminar. El reloj corre desde el primer segundo y no se puede pausar; al agotarse, lo que quede sin contestar cuenta como en blanco.</p>
          </div>
        )}

        <button className="cta" style={ctaPrimary} onClick={iniciar} disabled={okComenzar}>Comenzar</button>
        <p style={{ ...pSmall, marginTop: 14 }}>Temas con preguntas ahora: {temasDisp.length} de 72. El resto se irá poblando.</p>
      </Ficha>
    );
  }
  if (fase === "run" && cur && examen) {
    const contestadas = pool.length - sinContestar;
    const marcada = answers[idx];
    const ultima = idx + 1 === pool.length;
    const bajoTiempo = segRestantes <= 300;
    return (
      <div>
        <div style={{ textAlign: "center", padding: "18px 16px 14px", background: bajoTiempo ? C.redSoft : C.hairA, borderRadius: 8, marginBottom: 14, border: `1.5px solid ${bajoTiempo ? C.red : C.hair}` }}>
          <div style={{ fontFamily: MONO, fontSize: 48, fontWeight: 700, letterSpacing: 3, color: bajoTiempo ? C.red : C.ink, lineHeight: 1 }}>{fmtTime(segRestantes)}</div>
          <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 0.5, color: bajoTiempo ? C.red : C.ink2, marginTop: 6 }}>
            {bajoTiempo ? "⚠ ÚLTIMOS 5 MINUTOS" : `tiempo restante · simulacro de ${tiempoExamen} min`}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(90px,1fr))", gap: 8, marginBottom: 16 }}>
          <Stat n={`${contestadas}/${pool.length}`} label="contestadas" />
          <Stat n={sinContestar} label="sin contestar" accent={sinContestar ? C.amber : C.ok} />
        </div>
        <Ficha codigo={`${cur.tema} · ${temaTitulo(cur.tema)}`} titulo={`Pregunta ${idx + 1} / ${pool.length}`}>
          <p style={{ ...p, fontWeight: 600, fontSize: 16 }}>{cur.q}</p>
          <div style={{ display: "grid", gap: 8, margin: "16px 0" }}>
            {cur._order.map((origIdx, shownIdx) => (
              <button key={shownIdx} onClick={() => marcarRespuesta(idx, marcada === shownIdx ? null : shownIdx)} className="opt"
                style={{ textAlign: "left", padding: "12px 14px", background: marcada === shownIdx ? C.hairA : C.card, border: `1.5px solid ${marcada === shownIdx ? C.ink : C.hair}`, borderRadius: 4, cursor: "pointer", fontFamily: SANS, fontSize: 14.5, color: C.ink, display: "flex", gap: 10, lineHeight: 1.45 }}>
                <span style={{ fontFamily: MONO, fontWeight: 700, color: C.ink2 }}>{String.fromCharCode(97 + shownIdx)})</span>
                <span>{cur.o[origIdx]}</span>
              </button>
            ))}
          </div>
          <p style={{ ...pSmall, marginBottom: 14 }}>
            {esBlanco(marcada)
              ? "Sin contestar. Puedes dejarla en blanco y volver a ella antes de finalizar."
              : "Pulsa otra opción para cambiarla, o la misma para dejarla en blanco."}
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
            <button className="cta" style={ctaGhost} onClick={() => irA(idx - 1)} disabled={idx === 0}>← Anterior</button>
            <button className="cta" style={ctaGhost} onClick={() => irA(idx + 1)} disabled={ultima}>Siguiente →</button>
            <button className="cta" style={ctaPrimary} onClick={() => (sinContestar ? setConfirmFin(true) : finalizar())}>Finalizar y corregir</button>
          </div>
          {confirmFin && (
            <div style={{ border: `1.5px solid ${C.amber}`, borderRadius: 4, padding: 14, marginBottom: 16, background: C.paper }}>
              <p style={{ ...pSmall, margin: "0 0 10px" }}>Quedan <b>{sinContestar}</b> pregunta(s) sin contestar: contarán como en blanco (ni suman ni restan). ¿Finalizar y corregir?</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button className="cta" style={ctaPrimary} onClick={() => finalizar()}>Sí, finalizar</button>
                <button className="cta" style={ctaGhost} onClick={() => setConfirmFin(false)}>Seguir contestando</button>
                <button className="cta" style={ctaGhost} onClick={() => irA(answers.findIndex(esBlanco))}>Ir a la primera sin contestar</button>
              </div>
            </div>
          )}
          <Label>Navegación · {pool.length} preguntas</Label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {pool.map((q, i) => {
              const hecha = !esBlanco(answers[i]); const actual = i === idx;
              return (
                <button key={q.id} onClick={() => irA(i)} className="opt" title={`Pregunta ${i + 1} · ${hecha ? "contestada" : "sin contestar"}`}
                  style={{ minWidth: 34, height: 30, padding: "0 6px", borderRadius: 4, cursor: "pointer", fontFamily: MONO, fontSize: 12, fontWeight: 700,
                    background: actual ? C.ink : hecha ? C.hairA : C.card, color: actual ? C.paper : hecha ? C.ink : C.ink2,
                    border: `1.5px solid ${actual ? C.ink : hecha ? C.ink2 : C.hair}` }}>{i + 1}</button>
              );
            })}
          </div>
        </Ficha>
      </div>
    );
  }
  if (fase === "run" && cur) {
    return (
      <Ficha codigo={`${cur.tema} · ${temaTitulo(cur.tema)}`} titulo={`Pregunta ${idx + 1} / ${pool.length}`}>
        <p style={{ ...p, fontWeight: 600, fontSize: 16 }}>{cur.q}</p>
        <div style={{ display: "grid", gap: 8, margin: "16px 0" }}>
          {cur._order.map((origIdx, shownIdx) => {
            const isC = origIdx === cur.c; let bg = C.card, border = C.hair;
            if (shown) { if (isC) { bg = C.okSoft; border = C.ok; } else if (sel === shownIdx) { bg = C.redSoft; border = C.red; } }
            else if (sel === shownIdx) border = C.ink;
            return (
              <button key={shownIdx} onClick={() => !shown && setSel(shownIdx)} disabled={shown} className="opt"
                style={{ textAlign: "left", padding: "12px 14px", background: bg, border: `1.5px solid ${border}`, borderRadius: 4, cursor: shown ? "default" : "pointer", fontFamily: SANS, fontSize: 14.5, color: C.ink, display: "flex", gap: 10, lineHeight: 1.45 }}>
                <span style={{ fontFamily: MONO, fontWeight: 700, color: shown && isC ? C.ok : C.ink2 }}>{String.fromCharCode(97 + shownIdx)})</span>
                <span>{cur.o[origIdx]}</span>
              </button>
            );
          })}
        </div>
        {shown && (
          <div style={{ borderLeft: `3px solid ${C.slate}`, padding: "8px 14px", background: C.card, margin: "4px 0 16px" }}>
            <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 1, color: C.slate, marginBottom: 4 }}>EXPLICACIÓN</div>
            <p style={{ ...pSmall, margin: 0 }}>{cur.exp}</p>
          </div>
        )}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {!shown && <button className="cta" style={ctaPrimary} onClick={responder} disabled={sel === null}>Comprobar</button>}
          {!shown && <button className="cta" style={ctaGhost} onClick={enBlanco}>Dejar en blanco</button>}
          {shown && <button className="cta" style={ctaPrimary} onClick={siguiente}>{idx + 1 < pool.length ? "Siguiente →" : "Ver resultado"}</button>}
        </div>
      </Ficha>
    );
  }
  if (fase === "fin") {
    const rs = corregir(answers);
    const a = rs.filter((r) => r.ok).length, f = rs.filter((r) => !r.ok && !r.blank).length, b = rs.filter((r) => r.blank).length;
    const neto = a - f / 3, sobre30 = pool.length ? Math.max(0, (neto / pool.length) * 30) : 0;
    const aprobado = sobre30 >= 15;
    const visibles = pool
      .map((q, i) => ({ q, i, r: rs[i] }))
      .filter(({ r }) => (filtroRev === "fallos" ? !r.ok && !r.blank : filtroRev === "blancos" ? r.blank : true));
    return (
      <>
      <Ficha codigo={examen ? "RESULTADO · SIMULACRO DE EXAMEN" : "RESULTADO"} titulo={examen ? `Simulacro corregido (criterio real, ${tiempoExamen} min)` : "Tanda corregida (criterio real)"}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: 12, marginBottom: 18 }}>
          <Stat n={a} label="aciertos" accent={C.ok} /><Stat n={f} label="fallos (−1/3)" accent={C.red} />
          <Stat n={b} label="en blanco" /><Stat n={neto.toFixed(2)} label="nota neta" />
        </div>
        <div style={{ borderLeft: `3px solid ${aprobado ? C.ok : C.red}`, padding: "10px 14px", background: C.card, marginBottom: examen ? 14 : 18 }}>
          <p style={{ ...pSmall, margin: 0 }}>Equivalente sobre 30: <b style={{ fontFamily: MONO, color: aprobado ? C.ok : C.red }}>{sobre30.toFixed(2)}</b> pts. Corte de la 1ª prueba: 15/30. En duda razonable, contesta; en duda total, blanco.</p>
        </div>
        {examen && (
          <div style={{ marginBottom: 18 }}>
            <div style={{ position: "relative", height: 10, background: C.hair, borderRadius: 5 }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${Math.min(100, (sobre30 / 30) * 100)}%`, background: aprobado ? C.ok : C.red, borderRadius: 5 }} />
              <div title="Corte: 15/30" style={{ position: "absolute", left: "50%", top: -3, bottom: -3, width: 2, background: C.ink }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 10, color: C.ink2, marginTop: 4 }}>
              <span>0</span><span>corte · 15</span><span>30</span>
            </div>
          </div>
        )}
        <button className="cta" style={ctaPrimary} onClick={() => setFase("config")}>Otra tanda</button>
      </Ficha>

      <Ficha codigo="REVISIÓN" titulo="Pregunta a pregunta">
        <p style={p}>Aquí está la corrección completa: la opción válida, lo que marcaste y la explicación de cada pregunta.</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
          <Chip on={filtroRev === "todas"} onClick={() => setFiltroRev("todas")}>Todas ({pool.length})</Chip>
          <Chip on={filtroRev === "fallos"} onClick={() => setFiltroRev("fallos")} disabled={!f}>Solo fallos ({f})</Chip>
          <Chip on={filtroRev === "blancos"} onClick={() => setFiltroRev("blancos")} disabled={!b}>Solo en blanco ({b})</Chip>
        </div>
        {visibles.map(({ q, i, r }) => {
          const acc = r.ok ? C.ok : r.blank ? C.ink2 : C.red;
          return (
            <div key={q.id} style={{ border: `1px solid ${C.hair}`, borderLeft: `3px solid ${acc}`, borderRadius: 4, padding: 14, marginBottom: 12, background: C.paper }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 0.5, color: C.ink2 }}>{i + 1} · {q.tema} — {temaTitulo(q.tema)}</span>
                <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 1, fontWeight: 700, color: acc }}>
                  {r.ok ? "✓ ACIERTO" : r.blank ? "— EN BLANCO" : "✗ FALLO"}
                </span>
              </div>
              <p style={{ ...p, fontWeight: 600 }}>{q.q}</p>
              <div style={{ display: "grid", gap: 6, margin: "10px 0 12px" }}>
                {q._order.map((origIdx, shownIdx) => {
                  const esCorrecta = origIdx === q.c, esTuya = answers[i] === shownIdx;
                  let bg = C.card, border = C.hair;
                  if (esCorrecta) { bg = C.okSoft; border = C.ok; } else if (esTuya) { bg = C.redSoft; border = C.red; }
                  return (
                    <div key={shownIdx} style={{ padding: "9px 12px", background: bg, border: `1.5px solid ${border}`, borderRadius: 4, fontFamily: SANS, fontSize: 14, color: C.ink, display: "flex", gap: 10, lineHeight: 1.45 }}>
                      <span style={{ fontFamily: MONO, fontWeight: 700, color: esCorrecta ? C.ok : C.ink2 }}>{String.fromCharCode(97 + shownIdx)})</span>
                      <span style={{ flex: 1 }}>{q.o[origIdx]}</span>
                      {(esCorrecta || esTuya) && (
                        <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 0.5, alignSelf: "center", whiteSpace: "nowrap", color: esCorrecta ? C.ok : C.red }}>
                          {esCorrecta && esTuya ? "correcta · tu respuesta" : esCorrecta ? "correcta" : "tu respuesta"}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div style={{ borderLeft: `3px solid ${C.slate}`, padding: "8px 14px", background: C.card }}>
                <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 1, color: C.slate, marginBottom: 4 }}>EXPLICACIÓN</div>
                <p style={{ ...pSmall, margin: 0 }}>{q.exp}</p>
              </div>
            </div>
          );
        })}
        <button className="cta" style={ctaGhost} onClick={() => setFase("config")}>Otra tanda</button>
      </Ficha>
      </>
    );
  }
  return null;
}

/* ---------- SUPUESTOS ---------- */
const BLOQUES_SUP = [
  { id: "licencia",         label: "Licencia / Disciplina" },
  { id: "ruina_disciplina", label: "Ruina / Disciplina" },
  { id: "cte_si_sua",       label: "CTE – SI / SUA" },
  { id: "valoraciones",     label: "Valoraciones" },
  { id: "croquis",          label: "Croquis / Proyecto" },
  { id: "mixto",            label: "Mixto" },
];
const CRIT_META = [
  { id: "estructura", label: "Estructura del informe" },
  { id: "normativa",  label: "Normativa citada" },
  { id: "calculo",    label: "Cálculo justificado" },
  { id: "croquis",    label: "Croquis / Expr. gráfica" },
  { id: "conclusion", label: "Conclusión unívoca" },
];
function calcPesos(sup) {
  const raw = sup.pesos || {};
  const activos = CRIT_META.filter((c) => raw[c.id] != null);
  if (!activos.length) return Object.fromEntries(CRIT_META.map((c) => [c.id, 14]));
  const suma = activos.reduce((s, c) => s + raw[c.id], 0);
  if (!suma) return Object.fromEntries(activos.map((c) => [c.id, Math.round(70 / activos.length)]));
  return Object.fromEntries(activos.map((c) => [c.id, Math.round((raw[c.id] / suma) * 70 * 10) / 10]));
}

function Supuestos({ state, persist }) {
  const [fase, setFase] = useState("lista");
  const [sup, setSup] = useState(null);
  const [filtroBloque, setFiltroBloque] = useState("todos");
  const [filtroDif, setFiltroDif] = useState(0);
  const [intentos, setIntentos] = useState([]);
  const [verHistorial, setVerHistorial] = useState(false);

  // Cronómetro
  const [seg, setSeg] = useState(0);
  const [corriendo, setCorriendo] = useState(false);
  const [tiempoObj, setTiempoObj] = useState(0);
  const timerRef = useRef(null);

  // Autocorrección Fase 1
  const [notaGlobal, setNotaGlobal] = useState(null);
  const [notasLibres, setNotasLibres] = useState("");
  const [guardado, setGuardado] = useState(false);

  const cargarIntentos = useCallback(async () => {
    const codigo = getCodigo();
    if (!supabase || !codigo) return;
    const { data } = await supabase
      .from("intentos_supuesto")
      .select("*")
      .eq("codigo", codigo)
      .order("created_at", { ascending: false });
    if (data) setIntentos(data);
  }, []);

  useEffect(() => { cargarIntentos(); }, [cargarIntentos]);

  useEffect(() => {
    if (corriendo) timerRef.current = setInterval(() => setSeg((s) => s + 1), 1000);
    else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [corriendo]);

  const abrirSupuesto = (s) => {
    setSup(s); setSeg(0); setCorriendo(false);
    setTiempoObj(s.tiempo_estimado_min);
    setNotaGlobal(null); setNotasLibres(""); setGuardado(false);
    setFase("sesion");
  };

  const volverALista = () => {
    setCorriendo(false); clearInterval(timerRef.current);
    setSup(null); setFase("lista");
  };

  const guardarIntento = async () => {
    const codigo = getCodigo();
    const intento = {
      supuesto_id: sup.id,
      codigo: codigo || "anon",
      fecha: new Date().toISOString(),
      minutos_empleados: Math.round(seg / 60),
      autonota: notaGlobal,
      notas_autocorreccion: notasLibres || null,
      rubrica: null,
    };
    if (supabase && codigo) {
      await supabase.from("intentos_supuesto").insert(intento);
      await cargarIntentos();
    } else {
      const prev = state.supuestos[sup.id]?.intentos || [];
      await persist({ ...state, supuestos: { ...state.supuestos, [sup.id]: { intentos: [...prev, intento] } } });
    }
    setGuardado(true);
  };

  // ── LISTA ──
  if (fase === "lista" && !verHistorial) {
    const filtrados = SUPUESTOS.filter((s) =>
      (filtroBloque === "todos" || s.bloque === filtroBloque) &&
      (filtroDif === 0 || s.dificultad === filtroDif)
    );
    return (
      <div>
        <Ficha codigo="2ª PRUEBA · SUPUESTOS" titulo="Resolver supuestos teórico-prácticos">
          <p style={p}>Por escrito, a mano, sin textos, con material de dibujo (escalímetro, escuadra, cartabón). Vale <b>70 puntos</b> y decide la plaza. La app cronometra y autocorrige; el examen lo resuelves en papel.</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
            <select value={filtroBloque} onChange={(e) => setFiltroBloque(e.target.value)} style={selectStyle}>
              <option value="todos">Todos los bloques</option>
              {BLOQUES_SUP.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
            </select>
            <select value={filtroDif} onChange={(e) => setFiltroDif(+e.target.value)} style={selectStyle}>
              <option value={0}>Toda dificultad</option>
              <option value={1}>★ Básico</option>
              <option value={2}>★★ Medio</option>
              <option value={3}>★★★ Avanzado</option>
            </select>
            <button className="cta" style={ctaGhost} onClick={() => setVerHistorial(true)}>Historial</button>
          </div>
        </Ficha>
        <div style={{ display: "grid", gap: 10 }}>
          {filtrados.length === 0 && <p style={{ ...pSmall, padding: "14px 0" }}>Ningún supuesto coincide con los filtros.</p>}
          {filtrados.map((s) => {
            const mis = intentos.filter((i) => i.supuesto_id === s.id);
            const ultimo = mis[0];
            const bMeta = BLOQUES_SUP.find((b) => b.id === s.bloque);
            return (
              <button key={s.id} onClick={() => abrirSupuesto(s)} className="opt"
                style={{ textAlign: "left", border: `1px solid ${C.hair}`, background: C.card, borderRadius: 6, padding: "14px 16px", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
                  <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 0.5, color: "#fff", background: C.slate, borderRadius: 3, padding: "2px 7px", fontWeight: 700 }}>{bMeta?.label || s.bloque}</span>
                    <span style={{ fontFamily: MONO, fontSize: 11, color: C.amber }}>{"★".repeat(s.dificultad)}{"☆".repeat(3 - s.dificultad)}</span>
                    <span style={{ fontFamily: MONO, fontSize: 10.5, color: C.ink2 }}>~{s.tiempo_estimado_min} min</span>
                  </div>
                  {mis.length > 0 && (
                    <span style={{ fontFamily: MONO, fontSize: 10.5, color: C.ok }}>
                      {mis.length} intento{mis.length > 1 ? "s" : ""} · última nota {ultimo.autonota ?? "—"}/70
                    </span>
                  )}
                </div>
                <div style={{ fontFamily: SANS, fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{s.titulo}</div>
                <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.ink2 }}>{s.temas.join(" · ")} · {s.fuente}</div>
                {mis.length === 0 && <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.ink2, marginTop: 4 }}>Sin practicar</div>}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ── HISTORIAL ──
  if (verHistorial) {
    const locales = Object.entries(state.supuestos || {}).flatMap(([sid, v]) =>
      Array.isArray(v?.intentos) ? v.intentos : []
    );
    const todos = intentos.length ? intentos : locales;
    const porBloque = BLOQUES_SUP.map((b) => {
      const mis = todos.filter((i) => SUPUESTOS.find((s) => s.id === i.supuesto_id)?.bloque === b.id);
      const conNota = mis.filter((i) => i.autonota != null);
      return { ...b, n: mis.length, media: conNota.length ? Math.round(conNota.reduce((s, i) => s + i.autonota, 0) / conNota.length) : null };
    }).filter((b) => b.n > 0);
    return (
      <div>
        <button className="cta" style={{ ...ctaGhost, marginBottom: 14 }} onClick={() => setVerHistorial(false)}>← Volver al listado</button>
        <Ficha codigo="HISTORIAL · SUPUESTOS" titulo="Resumen por bloque">
          {porBloque.length === 0 ? (
            <p style={p}>Sin intentos registrados aún. Completa algún supuesto primero.</p>
          ) : (
            <div style={{ display: "grid", gap: 10 }}>
              {porBloque.map((b) => (
                <div key={b.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontFamily: SANS, fontSize: 13, color: C.ink, flex: 1 }}>{b.label}</div>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: C.ink2 }}>{b.n} intento{b.n > 1 ? "s" : ""}</div>
                  <div style={{ fontFamily: MONO, fontSize: 14, fontWeight: 700, color: b.media != null ? (b.media >= 50 ? C.ok : b.media >= 35 ? C.amber : C.red) : C.ink2 }}>
                    {b.media != null ? `${b.media}/70` : "—"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Ficha>
        <Ficha codigo="TODOS LOS INTENTOS" titulo="Historial completo">
          {todos.length === 0 ? <p style={p}>Sin intentos.</p> : (
            <div style={{ display: "grid", gap: 0 }}>
              {todos.slice(0, 30).map((intento, i) => {
                const s = SUPUESTOS.find((s) => s.id === intento.supuesto_id);
                const nota = intento.autonota;
                return (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: `1px solid ${C.hair}` }}>
                    <div>
                      <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: C.ink }}>{s?.titulo || intento.supuesto_id}</div>
                      <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.ink2 }}>
                        {new Date(intento.fecha || intento.created_at).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "2-digit" })} · {intento.minutos_empleados ?? "?"} min
                      </div>
                    </div>
                    <div style={{ fontFamily: MONO, fontSize: 15, fontWeight: 700, flexShrink: 0, color: nota != null ? (nota >= 50 ? C.ok : nota >= 35 ? C.amber : C.red) : C.ink2 }}>
                      {nota ?? "—"}/70
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Ficha>
      </div>
    );
  }

  // ── SESIÓN ──
  if (fase === "sesion" && sup) {
    const superado = tiempoObj > 0 && seg > tiempoObj * 60;
    return (
      <div>
        <button className="cta" style={{ ...ctaGhost, marginBottom: 14 }} onClick={volverALista}>← Volver al listado</button>
        <Ficha codigo={`SUPUESTO · ${BLOQUES_SUP.find((b) => b.id === sup.bloque)?.label || sup.bloque}`} titulo={sup.titulo}>
          {/* Cronómetro grande */}
          <div style={{ textAlign: "center", padding: "28px 16px 22px", background: superado ? C.redSoft : C.hairA, borderRadius: 8, marginBottom: 20, border: `1.5px solid ${superado ? C.red : C.hair}` }}>
            <div style={{ fontFamily: MONO, fontSize: 60, fontWeight: 700, letterSpacing: 3, color: superado ? C.red : C.ink, lineHeight: 1 }}>
              {fmtTime(seg)}
            </div>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 0.5, color: superado ? C.red : C.ink2, marginTop: 8 }}>
              {superado ? "⚠ TIEMPO OBJETIVO SUPERADO" : tiempoObj > 0 ? `objetivo: ${String(tiempoObj).padStart(2, "0")}:00` : "sin objetivo fijado"}
            </div>
          </div>
          {/* Controles */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginBottom: 22 }}>
            <button className="cta" style={corriendo ? ctaPrimary : ctaGhost} onClick={() => setCorriendo((c) => !c)}>
              {corriendo ? "Pausar" : seg === 0 ? "Iniciar reloj" : "Continuar"}
            </button>
            <button className="cta" style={ctaGhost} onClick={() => { setSeg(0); setCorriendo(false); }}>Reset</button>
            <div style={{ display: "flex", alignItems: "center", gap: 6, border: `1.5px solid ${C.hair}`, borderRadius: 4, padding: "5px 10px", background: C.card }}>
              <span style={{ fontFamily: MONO, fontSize: 11, color: C.ink2 }}>Objetivo:</span>
              <input type="number" value={tiempoObj} min={0} max={240}
                onChange={(e) => setTiempoObj(Math.max(0, +e.target.value))}
                style={{ fontFamily: MONO, fontSize: 13, width: 46, border: "none", outline: "none", background: "transparent", textAlign: "center", color: C.ink }} />
              <span style={{ fontFamily: MONO, fontSize: 11, color: C.ink2 }}>min</span>
            </div>
          </div>
          {/* Enunciado */}
          <Label>Enunciado del supuesto</Label>
          <div style={{ whiteSpace: "pre-wrap", fontFamily: SANS, fontSize: 14.5, lineHeight: 1.7, color: C.ink, background: C.card, border: `1px solid ${C.hair}`, padding: "16px 18px", borderRadius: 6, marginBottom: 12 }}>
            {sup.enunciado}
          </div>
          <p style={{ ...pSmall, fontStyle: "italic" }}>Resuelve en papel. Cuando termines, pulsa el botón de abajo para registrar el tiempo y autocorregir.</p>
        </Ficha>
        <button className="cta"
          style={{ ...ctaPrimary, width: "100%", padding: "16px 20px", fontSize: 15, letterSpacing: 0.5 }}
          disabled={seg < 60}
          onClick={() => { setCorriendo(false); setFase("autocorreccion"); }}>
          {seg < 60 ? `Inicia el reloj para habilitar (${seg}s)` : "TERMINAR Y AUTOCORREGIR"}
        </button>
        {seg < 60 && <p style={{ ...pSmall, textAlign: "center", marginTop: 8 }}>El botón se activa al minuto de reloj corrido.</p>}
      </div>
    );
  }

  // ── AUTOCORRECCIÓN (Fase 1: nota global; Fase 2 añadirá rúbrica por criterio) ──
  if (fase === "autocorreccion" && sup) {
    return (
      <div>
        <Ficha codigo={`AUTOCORRECCIÓN · ${BLOQUES_SUP.find((b) => b.id === sup.bloque)?.label || sup.bloque}`} titulo={sup.titulo}>
          <Label>Guión de corrección del tribunal</Label>
          <div style={{ whiteSpace: "pre-wrap", fontFamily: SANS, fontSize: 13.5, lineHeight: 1.65, color: C.ink, borderLeft: `3px solid ${C.ok}`, padding: "12px 16px", background: C.okSoft, borderRadius: "0 4px 4px 0", marginBottom: 20 }}>
            {sup.guion}
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 20, background: C.card, border: `1px solid ${C.hair}`, borderRadius: 6, padding: "12px 16px" }}>
            <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.ink2, textTransform: "uppercase", letterSpacing: 1 }}>Tiempo empleado</div>
            <div style={{ fontFamily: MONO, fontSize: 26, fontWeight: 700, color: C.ink }}>{fmtTime(seg)}</div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: C.ink2 }}>({Math.round(seg / 60)} min)</div>
          </div>
          <Label>Puntuación estimada (sobre 70)</Label>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
            {[0, 10, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70].map((n) => (
              <Chip key={n} on={notaGlobal === n} onClick={() => !guardado && setNotaGlobal(n)} disabled={guardado}>{n}</Chip>
            ))}
          </div>
          <Label>Notas de autocorrección (qué faltó, qué sobró…)</Label>
          <textarea value={notasLibres} onChange={(e) => !guardado && setNotasLibres(e.target.value)} disabled={guardado} rows={4}
            placeholder="Ej.: Olvidé citar el art. 192 LFOTU · El croquis no estaba acotado · La conclusión era ambigua…"
            style={{ width: "100%", fontFamily: SANS, fontSize: 13.5, lineHeight: 1.55, padding: 12, borderRadius: 4, border: `1.5px solid ${C.hair}`, background: guardado ? C.paper : C.card, color: C.ink, resize: "vertical", boxSizing: "border-box" }} />
          {!guardado ? (
            <button className="cta" style={{ ...ctaPrimary, marginTop: 14 }} disabled={notaGlobal === null} onClick={guardarIntento}>
              Guardar intento
            </button>
          ) : (
            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontFamily: MONO, fontSize: 12, color: C.ok }}>✓ Guardado — {notaGlobal}/70 · {Math.round(seg / 60)} min</span>
              <button className="cta" style={ctaGhost} onClick={volverALista}>Volver al listado</button>
            </div>
          )}
        </Ficha>
      </div>
    );
  }

  return null;
}

/* ---------- PROGRESO ---------- */
function Progreso({ state, persist }) {
  const entradas = Object.entries(state.temas).map(([k, t]) => ({ k, ...t, pct: t.vistas ? Math.round((t.aciertos / t.vistas) * 100) : 0 })).sort((a, b) => a.pct - b.pct);
  const flojos = entradas.filter((e) => e.vistas >= 3 && e.pct < 60);
  const reset = async () => { if (window.confirm("¿Borrar todo el progreso (test y supuestos)? No se puede deshacer.")) await persist(defaultState()); };
  return (
    <div>
      <Ficha codigo="PROGRESO" titulo="Dónde estás flojo">
        {entradas.length === 0 ? <p style={p}>Aún no hay datos. Haz una tanda de test y aparecerá tu rendimiento por tema.</p> : (
          <>
            {flojos.length > 0 && (
              <div style={{ borderLeft: `3px solid ${C.red}`, padding: "8px 14px", background: C.redSoft, marginBottom: 16 }}>
                <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 1, color: C.red, marginBottom: 4 }}>PRIORIDAD</div>
                <p style={{ ...pSmall, margin: 0 }}>Temas por debajo del 60%: {flojos.map((f) => f.k).join(", ")}. Repásalos antes de avanzar.</p>
              </div>
            )}
            <div style={{ display: "grid", gap: 8 }}>
              {entradas.map((e) => (
                <div key={e.k} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontFamily: MONO, fontSize: 11, width: 38, color: C.ink2, flexShrink: 0 }}>{e.k}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: SANS, fontSize: 12.5, color: C.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{temaTitulo(e.k)}</div>
                    <div style={{ height: 6, background: C.hair, borderRadius: 3, marginTop: 3, overflow: "hidden" }}><div style={{ width: `${e.pct}%`, height: "100%", background: e.pct >= 70 ? C.ok : e.pct >= 50 ? C.amber : C.red }} /></div>
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 12, width: 64, textAlign: "right", color: C.ink, flexShrink: 0 }}>{e.pct}% <span style={{ color: C.ink2, fontSize: 10 }}>({e.vistas})</span></div>
                </div>
              ))}
            </div>
          </>
        )}
      </Ficha>
      {state.sesiones.length > 0 && (
        <Ficha codigo="HISTORIAL" titulo="Últimas tandas">
          <div style={{ display: "grid", gap: 6 }}>
            {[...state.sesiones].reverse().slice(0, 10).map((s, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 12, color: C.ink2, borderBottom: `1px solid ${C.hair}`, paddingBottom: 5 }}>
                <span>{new Date(s.fecha).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}</span>
                <span><b style={{ color: C.ok }}>{s.aciertos}✓</b> · <b style={{ color: C.red }}>{s.fallos}✗</b> · {s.blancos}∅ <span style={{ color: C.ink }}>/ {s.n}</span></span>
              </div>
            ))}
          </div>
        </Ficha>
      )}
      <div style={{ marginTop: 18 }}><button className="cta" style={{ ...ctaGhost, color: C.red, borderColor: C.red }} onClick={reset}>Borrar progreso</button></div>
    </div>
  );
}

/* ---------- UI ---------- */
function Ficha({ codigo, titulo, children }) {
  return (
    <section style={{ border: `1px solid ${C.hair}`, background: C.card, borderRadius: 6, marginBottom: 14, overflow: "hidden" }}>
      <div style={{ borderBottom: `1px solid ${C.hair}`, padding: "8px 16px", background: "rgba(0,0,0,0.015)" }}>
        <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 1.5, color: C.red, fontWeight: 700 }}>{codigo}</span>
      </div>
      <div style={{ padding: 18 }}>
        <h2 style={{ fontFamily: SANS, fontSize: 19, fontWeight: 800, margin: "0 0 10px", color: C.ink, letterSpacing: -0.3 }}>{titulo}</h2>
        {children}
      </div>
    </section>
  );
}
const Stat = ({ n, label, accent }) => (
  <div style={{ border: `1px solid ${C.hair}`, background: C.card, borderRadius: 6, padding: "12px 14px" }}>
    <div style={{ fontFamily: MONO, fontSize: 26, fontWeight: 700, color: accent || C.ink, lineHeight: 1 }}>{n}</div>
    <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 0.5, color: C.ink2, marginTop: 6, textTransform: "uppercase" }}>{label}</div>
  </div>
);
const Chip = ({ on, onClick, disabled, children }) => (
  <button onClick={onClick} disabled={disabled} className="opt" style={{ fontFamily: MONO, fontSize: 12.5, padding: "7px 13px", borderRadius: 20, cursor: disabled ? "not-allowed" : "pointer", border: `1.5px solid ${on ? C.ink : C.hair}`, background: on ? C.ink : "transparent", color: on ? C.paper : (disabled ? C.hair : C.ink2), fontWeight: on ? 700 : 500 }}>{children}</button>
);
const Label = ({ children, style }) => (<div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 1, color: C.ink2, marginBottom: 7, textTransform: "uppercase", ...style }}>{children}</div>);

const wrap = { minHeight: "100vh", background: C.paper, color: C.ink, fontFamily: SANS, backgroundImage: `linear-gradient(${C.hairA} 1px, transparent 1px), linear-gradient(90deg, ${C.hairA} 1px, transparent 1px)`, backgroundSize: "28px 28px" };
const p = { fontFamily: SANS, fontSize: 14.5, lineHeight: 1.6, color: C.ink, margin: "0 0 10px" };
const pSmall = { fontFamily: SANS, fontSize: 12.5, lineHeight: 1.55, color: C.ink2, margin: "0 0 6px" };
const ctaPrimary = { fontFamily: MONO, fontSize: 13, fontWeight: 700, padding: "11px 20px", background: C.red, color: "#fff", border: "none", borderRadius: 4, cursor: "pointer", letterSpacing: 0.3 };
const ctaGhost = { fontFamily: MONO, fontSize: 13, fontWeight: 600, padding: "10px 18px", background: "transparent", color: C.ink, border: `1.5px solid ${C.ink}`, borderRadius: 4, cursor: "pointer" };
const selectStyle = { fontFamily: MONO, fontSize: 13, padding: "7px 10px", border: `1.5px solid ${C.hair}`, borderRadius: 4, background: C.card, color: C.ink, cursor: "pointer" };
const baseCSS = `
:root, [data-theme="light"] {
  --c-paper: #EDEAE3; --c-card: #F7F5F0; --c-ink: #1C1B19; --c-ink2: #54514B; --c-hair: #C9C4B8; --c-hair-a: rgba(201,196,184,0.25);
  --c-red: #B0182B; --c-redsoft: #F1DADA; --c-ok: #2F6B3C; --c-oksoft: #DDE9DD; --c-slate: #3B4A5A; --c-amber: #9A6B17;
}
[data-theme="dark"] {
  --c-paper: #18181B; --c-card: #232326; --c-ink: #E8E6E1; --c-ink2: #A8A399; --c-hair: #3F3F46; --c-hair-a: rgba(63,63,70,0.4);
  --c-red: #E5484D; --c-redsoft: #3B1E20; --c-ok: #4ADE80; --c-oksoft: #1C3324; --c-slate: #93C5FD; --c-amber: #FBBF24;
}
* { box-sizing: border-box; } html, body { margin: 0; padding: 0; background: var(--c-paper); } .navbtn:hover { color: ${C.ink} !important; } .opt:hover:not(:disabled) { border-color: ${C.ink} !important; } .cta:hover:not(:disabled) { opacity: 0.9; } .cta:disabled { opacity: 0.4; cursor: not-allowed; } button:focus-visible, textarea:focus-visible, input:focus-visible { outline: 2px solid ${C.slate}; outline-offset: 2px; } @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }`;
