import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { TEMAS_GENERAL, TEMAS_ESP, temaTitulo, esGeneral, temaNum, totalGeneral, totalEsp } from "./data/temas.js";
import { PREGUNTAS } from "./data/preguntas.js";
import { RESUMENES } from "./data/resumenes.js";
import { SUPUESTOS } from "./data/supuestos.js";
import { loadState, saveState, syncDisponible, getCodigo, setCodigo } from "./lib/storage.js";
import { supabase } from "./lib/supabase.js";

/* ---------- TOKENS (tablero de delineación) ---------- */
const C = {
  paper: "#EDEAE3", card: "#F7F5F0", ink: "#1C1B19", ink2: "#54514B", hair: "#C9C4B8",
  red: "#B0182B", redSoft: "#F1DADA", ok: "#2F6B3C", okSoft: "#DDE9DD", slate: "#3B4A5A", amber: "#9A6B17",
};
const MONO = "ui-monospace, 'SF Mono', 'Cascadia Mono', 'Roboto Mono', Menlo, Consolas, monospace";
const SANS = "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const defaultState = () => ({ temas: {}, falladas: [], supuestos: {}, sesiones: [] });
const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmtTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function App() {
  const [state, setState] = useState(null);
  const [saving, setSaving] = useState("idle");
  const [tab, setTab] = useState("inicio");

  useEffect(() => { loadState().then((s) => setState(s || defaultState())); }, []);

  const persist = useCallback(async (next) => {
    setState(next); setSaving("saving");
    const ok = await saveState(next); setSaving(ok ? "idle" : "error");
  }, []);

  if (!state) return <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ fontFamily: MONO, color: C.ink2 }}>Cargando expediente…</div></div>;

  return (
    <div style={wrap}>
      <style>{baseCSS}</style>
      <Header tab={tab} setTab={setTab} saving={saving} />
      <main style={{ maxWidth: 920, margin: "0 auto", padding: "0 18px 64px" }}>
        {tab === "inicio" && <Inicio state={state} setTab={setTab} reload={() => loadState().then((s) => setState(s || defaultState()))} />}
        {tab === "temas" && <VistaLectura />}
        {tab === "resumenes" && <Resumenes />}
        {tab === "test" && <Test state={state} persist={persist} />}
        {tab === "supuestos" && <Supuestos state={state} persist={persist} />}
        {tab === "progreso" && <Progreso state={state} persist={persist} />}
      </main>
    </div>
  );
}

function Header({ tab, setTab, saving }) {
  const tabs = [["inicio", "Inicio"], ["temas", "Leer temas"], ["resumenes", "Resúmenes"], ["test", "Test · 1ª"], ["supuestos", "Supuestos · 2ª"], ["progreso", "Progreso"]];
  return (
    <header style={{ borderBottom: `2px solid ${C.ink}`, marginBottom: 24, background: C.paper, position: "sticky", top: 0, zIndex: 5 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "14px 18px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 2, color: C.red, fontWeight: 700 }}>COAVN · OPOSICIÓN ENERO 2027</div>
            <h1 style={{ fontFamily: SANS, fontSize: 22, fontWeight: 800, margin: "2px 0 0", color: C.ink, letterSpacing: -0.4 }}>Arquitecto/a — Ayuntamiento de Pamplona</h1>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: saving === "error" ? C.red : C.ink2 }}>
            {saving === "saving" ? "guardando…" : saving === "error" ? "⚠ sin guardar" : "● guardado"}
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
  const vistas = Object.values(state.temas).reduce((a, t) => a + (t.vistas || 0), 0);
  const aciertos = Object.values(state.temas).reduce((a, t) => a + (t.aciertos || 0), 0);
  const pct = vistas ? Math.round((aciertos / vistas) * 100) : 0;
  const guardarCodigo = async () => { setCodigo(codigo); await reload(); };

  return (
    <div>
      <Ficha codigo="PLAN DE ATAQUE" titulo="Cómo se gana esta plaza">
        <p style={p}>Dos pruebas eliminatorias. La <b>1ª</b> (test, 100 preguntas, 30 pts, penaliza 1/3) solo te deja competir: basta superar 15. La <b>2ª</b> (supuestos, 70 pts, mínimo 35) decide la plaza y rompe los empates. <b>Las horas, en la 2ª.</b></p>
        <p style={p}>Sin consulta de textos en ninguna prueba: hay que llevar artículos, plazos y umbrales memorizados. Por eso el test cita el artículo en cada explicación.</p>
      </Ficha>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12, margin: "18px 0" }}>
        <Stat n={PREGUNTAS.length} label="preguntas en el banco" />
        <Stat n={vistas} label="respondidas" />
        <Stat n={`${pct}%`} label="aciertos" accent={pct >= 70 ? C.ok : pct >= 50 ? C.amber : C.red} />
        <Stat n={SUPUESTOS.length} label="supuestos" />
      </div>

      <Ficha codigo="SINCRONIZACIÓN" titulo="Mismo progreso en tus 3 dispositivos">
        {syncDisponible() ? (
          <>
            <p style={pSmall}>Escribe un código personal (el que quieras) e introdúcelo igual en cada dispositivo. Tu progreso se sincroniza con ese código.</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
              <input value={codigo} onChange={(e) => setCod(e.target.value)} placeholder="p. ej. marcos-2027"
                style={{ fontFamily: MONO, fontSize: 13, padding: "9px 12px", border: `1.5px solid ${C.hair}`, borderRadius: 4, background: "#fff", color: C.ink, flex: "1 1 200px" }} />
              <button className="cta" style={ctaPrimary} onClick={guardarCodigo}>Guardar y sincronizar</button>
            </div>
            {getCodigo() && <p style={{ ...pSmall, marginTop: 8 }}>Código activo: <b style={{ fontFamily: MONO }}>{getCodigo()}</b></p>}
          </>
        ) : (
          <p style={pSmall}>Ahora mismo el progreso se guarda solo en este dispositivo. Para sincronizar entre los tres, configura Supabase (ver README) y rellena las variables de entorno; entonces aparecerá aquí el campo de código.</p>
        )}
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
function VistaLectura() {
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);
  const [contenido, setContenido] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [disponibles, setDisponibles] = useState(null);
  const [fontSize, setFontSize] = useState(() => {
    try { return parseInt(localStorage.getItem("lect-fs") || "15", 10); } catch { return 15; }
  });
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem("lect-dark") === "1"; } catch { return false; }
  });
  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  const [tocAbierto, setTocAbierto] = useState(false);
  const [subrayados, setSubrayados] = useState([]);
  const [popup, setPopup] = useState(null); // { inicio, fin, x, y }
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
    const close = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) setPopup(null);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [popup]);

  const bg     = darkMode ? "#18181B" : C.paper;
  const bgCard = darkMode ? "#27272A" : C.card;
  const tinta  = darkMode ? "#E4E4E7" : C.ink;
  const tinta2 = darkMode ? "#A1A1AA" : C.ink2;
  const borde  = darkMode ? "#3F3F46" : C.hair;

  const persistFs   = (v) => { setFontSize(v); try { localStorage.setItem("lect-fs", String(v)); } catch {} };
  const persistDark = (v) => { setDarkMode(v); try { localStorage.setItem("lect-dark", v ? "1" : "0"); } catch {} };

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

  const borrarSubrayado = useCallback(async (e, id) => {
    e.stopPropagation();
    setSubrayados((prev) => prev.filter((m) => m.id !== id));
    const codigo = getCodigo();
    if (supabase && codigo) {
      await supabase.from("subrayados").delete().eq("id", id).eq("codigo", codigo);
    }
  }, []);

  const esMovil = typeof window !== "undefined" && window.innerWidth < 700;

  const SidebarEl = () => (
    <div style={{
      width: 280, flexShrink: 0, borderRight: `1px solid ${borde}`,
      background: bgCard, display: "flex", flexDirection: "column",
      height: "100%", overflow: "hidden",
    }}>
      <div style={{ padding: "12px 12px 8px", borderBottom: `1px solid ${borde}` }}>
        <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1.5, color: C.red, marginBottom: 6 }}>
          {LISTA_TEMAS.length} TEMAS
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
          return (
            <button key={t.codigo} onClick={() => cargarTema(t)}
              title={!hayTexto ? "Solo disponible en PDF" : undefined}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "9px 14px", border: "none", cursor: "pointer",
                background: activo ? C.red : "transparent",
                color: activo ? "#fff" : hayTexto ? tinta : tinta2,
                borderLeft: activo ? "3px solid #7B0F1E" : "3px solid transparent",
                opacity: hayTexto ? 1 : 0.45,
              }}
            >
              <span style={{ fontFamily: MONO, fontSize: 10.5, fontWeight: 700, marginRight: 6, opacity: 0.75 }}>{t.codigo}</span>
              <span style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.4 }}>{t.titulo}</span>
              {!hayTexto && <span style={{ fontFamily: MONO, fontSize: 9, marginLeft: 6, opacity: 0.6 }}>PDF</span>}
            </button>
          );
        })}
        {temasFiltrados.length === 0 && (
          <p style={{ fontFamily: SANS, fontSize: 13, color: tinta2, padding: "16px 14px" }}>Sin resultados.</p>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ margin: "0 -18px", background: bg, minHeight: "80vh" }}>
      {/* ── Controles ── */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8, padding: "8px 14px",
        borderBottom: `1px solid ${borde}`, background: bgCard, flexWrap: "wrap",
      }}>
        <button onClick={() => setSidebarAbierto((v) => !v)}
          style={{ ...ctaGhost, padding: "6px 12px", fontSize: 12, display: esMovil ? "inline-flex" : "none" }}
        >☰ Temas</button>

        {seleccionado && (
          <span style={{ fontFamily: MONO, fontSize: 11, color: C.red, fontWeight: 700 }}>
            {seleccionado.codigo}
          </span>
        )}
        {seleccionado && toc.length > 0 && (
          <button onClick={() => setTocAbierto((v) => !v)}
            style={{ ...ctaGhost, padding: "5px 10px", fontSize: 11 }}
          >Índice</button>
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
        <button onClick={() => persistDark(!darkMode)}
          style={{ ...ctaGhost, padding: "5px 10px", fontSize: 11 }}
        >{darkMode ? "☀ Claro" : "☾ Oscuro"}</button>
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
      <div style={{ display: "flex", height: "calc(100vh - 180px)", overflow: "hidden" }}>
        <div style={{
          display: (!esMovil || sidebarAbierto) ? "flex" : "none",
          flexDirection: "column",
          position: esMovil ? "absolute" : "relative",
          zIndex: esMovil ? 20 : 1,
          height: esMovil ? "calc(100vh - 180px)" : "100%",
          boxShadow: esMovil ? "4px 0 12px rgba(0,0,0,0.15)" : "none",
          width: 280, flexShrink: 0,
        }}>
          <SidebarEl />
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
            <div style={{ maxWidth: "70ch", margin: "0 auto", padding: "0 24px 48px" }}>
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
                style={{
                  fontFamily: SANS, fontSize, lineHeight: 1.85, color: tinta,
                  whiteSpace: "pre-wrap", wordBreak: "break-word", userSelect: "text", cursor: "text",
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
                        color: tinta, cursor: "pointer", borderRadius: 2,
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

      {/* ── Popup selector de color ── */}
      {popup && (
        <div ref={popupRef} style={{
          position: "fixed", left: popup.x, top: popup.y,
          transform: "translateX(-50%)", zIndex: 200,
          background: "#fff", border: `1px solid ${C.hair}`,
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
  const disponibles = Object.keys(RESUMENES);
  const [sel, setSel] = useState(disponibles[0] || null);
  const r = sel ? RESUMENES[sel] : null;
  return (
    <div>
      <Ficha codigo="RESÚMENES" titulo="Repaso por tema">
        <p style={pSmall}>Resúmenes orientados a examen: datos, artículos, plazos y ubicación de cada concepto. Crecen igual que el banco de test. Disponibles ahora: {disponibles.length} tema(s).</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
          {disponibles.map((k) => <Chip key={k} on={sel === k} onClick={() => setSel(k)}>{k} · {temaTitulo(k).split("—")[0].trim()}</Chip>)}
        </div>
      </Ficha>

      {r && (
        <Ficha codigo={`${sel} · ${esGeneral(sel) ? "GENERAL (solo test)" : "ESPECÍFICO"}`} titulo={temaTitulo(sel)}>
          <p style={{ ...p, fontStyle: "italic", color: C.ink2 }}>{r.intro}</p>
          {r.bloques.map((b, i) => (
            <div key={i} style={{ marginTop: 16 }}>
              <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 1, color: C.slate, fontWeight: 700, borderBottom: `1px solid ${C.hair}`, paddingBottom: 4, marginBottom: 8 }}>{b.h.toUpperCase()}</div>
              {b.items.map((it, j) => (
                <div key={j} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: C.red, fontFamily: MONO, flexShrink: 0 }}>·</span>
                  <span style={{ ...p, margin: 0, fontSize: 14 }}>{it}</span>
                </div>
              ))}
            </div>
          ))}
          {r.claves?.length > 0 && (
            <div style={{ marginTop: 18, borderLeft: `3px solid ${C.red}`, background: C.redSoft, padding: "10px 14px" }}>
              <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: 1, color: C.red, marginBottom: 6 }}>CLAVES QUE MÁS CAEN</div>
              {r.claves.map((c, i) => <div key={i} style={{ ...pSmall, margin: "0 0 4px", color: C.ink }}>— {c}</div>)}
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
  const [resp, setResp] = useState([]); const [modo, setModo] = useState("todos"); const [num, setNum] = useState(10);
  const [parteR, setParteR] = useState("E"); const [desde, setDesde] = useState(1); const [hasta, setHasta] = useState(5);
  const temasDisp = [...new Set(PREGUNTAS.map((q) => q.tema))];

  const enRango = (q) => {
    if (q.tema[0] !== parteR) return false;
    const n = temaNum(q.tema);
    const lo = Math.min(desde, hasta), hi = Math.max(desde, hasta);
    return n >= lo && n <= hi;
  };
  const disponiblesRango = PREGUNTAS.filter(enRango).length;

  const iniciar = () => {
    let base = PREGUNTAS;
    if (modo === "falladas") base = PREGUNTAS.filter((q) => state.falladas.includes(q.id));
    else if (modo === "rango") base = PREGUNTAS.filter(enRango);
    if (!base.length) return;
    setPool(shuffle(base).slice(0, Math.min(num, base.length)).map((q) => ({ ...q, _order: shuffle([0, 1, 2, 3]) })));
    setIdx(0); setSel(null); setShown(false); setResp([]); setFase("run");
  };
  const cur = pool[idx];
  const responder = () => { if (sel === null || shown) return; const ok = cur._order.indexOf(cur.c) === sel; setShown(true); setResp((r) => [...r, { id: cur.id, tema: cur.tema, ok, blank: false }]); };
  const enBlanco = () => { if (shown) return; setShown(true); setResp((r) => [...r, { id: cur.id, tema: cur.tema, ok: false, blank: true }]); };
  const siguiente = async () => { if (idx + 1 < pool.length) { setIdx(idx + 1); setSel(null); setShown(false); } else { await cerrar(); setFase("fin"); } };
  const cerrar = async () => {
    const next = { ...state, temas: { ...state.temas }, falladas: [...state.falladas] };
    resp.forEach((r) => {
      const t = next.temas[r.tema] || { vistas: 0, aciertos: 0, fallos: 0 }; t.vistas += 1;
      if (r.ok) { t.aciertos += 1; next.falladas = next.falladas.filter((x) => x !== r.id); }
      else if (!r.blank) { t.fallos += 1; if (!next.falladas.includes(r.id)) next.falladas.push(r.id); }
      next.temas[r.tema] = t;
    });
    const a = resp.filter((r) => r.ok).length, f = resp.filter((r) => !r.ok && !r.blank).length, b = resp.filter((r) => r.blank).length;
    next.sesiones = [...state.sesiones, { fecha: Date.now(), n: resp.length, aciertos: a, fallos: f, blancos: b }].slice(-30);
    await persist(next);
  };

  if (fase === "config") {
    const nF = state.falladas.length;
    const maxTema = parteR === "G" ? totalGeneral : totalEsp;
    const nums = Array.from({ length: maxTema }, (_, i) => i + 1);
    const presets = parteR === "G" ? [[1, 5], [6, 10], [11, 13]] : [[1, 5], [6, 10], [11, 15], [16, 20], [21, 25], [26, 30], [31, 35], [36, 40], [41, 45], [46, 50], [51, 55], [56, 59]];
    const okComenzar = (modo === "falladas" && !nF) || (modo === "rango" && !disponiblesRango);
    return (
      <Ficha codigo="1ª PRUEBA · TEST" titulo="Configura la tanda">
        <p style={p}>Cuatro opciones, una válida. Corrección como el examen real: cada fallo resta 1/3; en blanco, ni suma ni resta.</p>
        <Label>Modo</Label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          <Chip on={modo === "todos"} onClick={() => setModo("todos")}>Todo el banco ({PREGUNTAS.length})</Chip>
          <Chip on={modo === "rango"} onClick={() => setModo("rango")}>Por rango de temas</Chip>
          <Chip on={modo === "falladas"} onClick={() => setModo("falladas")} disabled={!nF}>Repasar falladas ({nF})</Chip>
        </div>

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
          {[5, 10, 20, 40].map((n) => <Chip key={n} on={num === n} onClick={() => setNum(n)}>{n}</Chip>)}
        </div>
        <button className="cta" style={ctaPrimary} onClick={iniciar} disabled={okComenzar}>Comenzar</button>
        <p style={{ ...pSmall, marginTop: 14 }}>Temas con preguntas ahora: {temasDisp.length} de 72. El resto se irá poblando.</p>
      </Ficha>
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
    const a = resp.filter((r) => r.ok).length, f = resp.filter((r) => !r.ok && !r.blank).length, b = resp.filter((r) => r.blank).length;
    const neto = a - f / 3, sobre30 = pool.length ? Math.max(0, (neto / pool.length) * 30) : 0;
    return (
      <Ficha codigo="RESULTADO" titulo="Tanda corregida (criterio real)">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: 12, marginBottom: 18 }}>
          <Stat n={a} label="aciertos" accent={C.ok} /><Stat n={f} label="fallos (−1/3)" accent={C.red} />
          <Stat n={b} label="en blanco" /><Stat n={neto.toFixed(2)} label="nota neta" />
        </div>
        <div style={{ borderLeft: `3px solid ${C.red}`, padding: "10px 14px", background: C.card, marginBottom: 18 }}>
          <p style={{ ...pSmall, margin: 0 }}>Equivalente sobre 30: <b style={{ fontFamily: MONO }}>{sobre30.toFixed(2)}</b> pts. Corte de la 1ª prueba: 15/30. En duda razonable, contesta; en duda total, blanco.</p>
        </div>
        <button className="cta" style={ctaPrimary} onClick={() => setFase("config")}>Otra tanda</button>
      </Ficha>
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
          <div style={{ textAlign: "center", padding: "28px 16px 22px", background: superado ? C.redSoft : `${C.hair}40`, borderRadius: 8, marginBottom: 20, border: `1.5px solid ${superado ? C.red : C.hair}` }}>
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
            <div style={{ display: "flex", alignItems: "center", gap: 6, border: `1.5px solid ${C.hair}`, borderRadius: 4, padding: "5px 10px", background: "#fff" }}>
              <span style={{ fontFamily: MONO, fontSize: 11, color: C.ink2 }}>Objetivo:</span>
              <input type="number" value={tiempoObj} min={0} max={240}
                onChange={(e) => setTiempoObj(Math.max(0, +e.target.value))}
                style={{ fontFamily: MONO, fontSize: 13, width: 46, border: "none", outline: "none", background: "transparent", textAlign: "center", color: C.ink }} />
              <span style={{ fontFamily: MONO, fontSize: 11, color: C.ink2 }}>min</span>
            </div>
          </div>
          {/* Enunciado */}
          <Label>Enunciado del supuesto</Label>
          <div style={{ whiteSpace: "pre-wrap", fontFamily: SANS, fontSize: 14.5, lineHeight: 1.7, color: C.ink, background: "#fff", border: `1px solid ${C.hair}`, padding: "16px 18px", borderRadius: 6, marginBottom: 12 }}>
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
            style={{ width: "100%", fontFamily: SANS, fontSize: 13.5, lineHeight: 1.55, padding: 12, borderRadius: 4, border: `1.5px solid ${C.hair}`, background: guardado ? C.paper : "#fff", color: C.ink, resize: "vertical", boxSizing: "border-box" }} />
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

const wrap = { minHeight: "100vh", background: C.paper, color: C.ink, fontFamily: SANS, backgroundImage: `linear-gradient(${C.hair}40 1px, transparent 1px), linear-gradient(90deg, ${C.hair}40 1px, transparent 1px)`, backgroundSize: "28px 28px" };
const p = { fontFamily: SANS, fontSize: 14.5, lineHeight: 1.6, color: C.ink, margin: "0 0 10px" };
const pSmall = { fontFamily: SANS, fontSize: 12.5, lineHeight: 1.55, color: C.ink2, margin: "0 0 6px" };
const ctaPrimary = { fontFamily: MONO, fontSize: 13, fontWeight: 700, padding: "11px 20px", background: C.red, color: "#fff", border: "none", borderRadius: 4, cursor: "pointer", letterSpacing: 0.3 };
const ctaGhost = { fontFamily: MONO, fontSize: 13, fontWeight: 600, padding: "10px 18px", background: "transparent", color: C.ink, border: `1.5px solid ${C.ink}`, borderRadius: 4, cursor: "pointer" };
const selectStyle = { fontFamily: MONO, fontSize: 13, padding: "7px 10px", border: `1.5px solid ${C.hair}`, borderRadius: 4, background: "#fff", color: C.ink, cursor: "pointer" };
const baseCSS = `* { box-sizing: border-box; } .navbtn:hover { color: ${C.ink} !important; } .opt:hover:not(:disabled) { border-color: ${C.ink} !important; } .cta:hover:not(:disabled) { opacity: 0.9; } .cta:disabled { opacity: 0.4; cursor: not-allowed; } button:focus-visible, textarea:focus-visible, input:focus-visible { outline: 2px solid ${C.slate}; outline-offset: 2px; } @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }`;
