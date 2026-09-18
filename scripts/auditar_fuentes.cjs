/*
 * Auditoría de fuentes locales del temario.
 *
 * No decide si un dato jurídico o técnico es verdadero: localiza señales de
 * extracción frágil (tablas convertidas en líneas, fórmulas, caracteres
 * dañados) y las cruza con la cobertura actual de resumen y preguntas.
 *
 * Uso: node scripts/auditar_fuentes.cjs
 */
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const ROOT = path.resolve(__dirname, "..");
const TEMAS_DIR = path.join(ROOT, "temas");
const OUTPUT = path.join(ROOT, "auditoria_fuentes.csv");
const VERIFICATIONS = path.join(__dirname, "verificaciones_fuentes.json");

const csv = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
const n = (regex, text) => (text.match(regex) || []).length;

function codeFromFile(name) {
  const specific = /^E_Tema(\d{2})\.txt$/i.exec(name);
  if (specific) return `E${Number(specific[1])}`;
  const general = /^Tema(\d{2})\.txt$/i.exec(name);
  if (general) return `G${Number(general[1])}`;
  return null;
}

function tableExtractionSignals(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  const cueIndexes = [];
  const cue = /\b(tabla|cuadro|figura|esquema|anexo)\b/i;
  lines.forEach((line, index) => {
    if (cue.test(line)) cueIndexes.push(index);
  });

  let orphanCells = 0;
  let fragmentedTableBlocks = 0;
  let markdownTables = 0;
  for (const index of cueIndexes) {
    const windowLines = lines.slice(index, index + 85).map((line) => line.trim()).filter(Boolean);
    // Algunas fuentes ya preservan filas Markdown. Son datos que hay que
    // validar, pero no una tabla rota por la extracción.
    const markdownRows = windowLines.filter((line) => /^\|.+\|$/.test(line));
    if (markdownRows.length >= 2) {
      markdownTables += 1;
      continue;
    }
    // Una extracción de tabla suele dejar cabeceras y valores como líneas de
    // una sola celda: α, A, B, 0,49, 1.000, ≤27, etc.
    const cells = windowLines.filter((line) => (
      line.length <= 38 &&
      (/^[αA-Z]$/u.test(line) || /\d/.test(line) || /[≤≥=×]/.test(line))
    ));
    orphanCells += cells.length;
    if (cells.length >= 10) fragmentedTableBlocks += 1;
  }

  return {
    markers: cueIndexes.length,
    fragmentedTableBlocks,
    markdownTables,
    orphanCells,
    formulas: n(/[≤≥=×]|\b(?:kW|W|m²|m3|m²K|%|h-1)\b/g, text),
  };
}

function sourceRisk({ invalidChars, formFeeds, fragmentedTableBlocks, orphanCells, formulas }) {
  let points = 0;
  if (invalidChars) points += 8;
  if (fragmentedTableBlocks >= 4) points += 5;
  else if (fragmentedTableBlocks >= 1) points += 3;
  if (orphanCells >= 100) points += 3;
  else if (orphanCells >= 30) points += 2;
  if (formulas >= 80) points += 2;
  else if (formulas >= 25) points += 1;

  if (points >= 8) return { label: "CRÍTICO", points };
  if (points >= 5) return { label: "ALTO", points };
  if (points >= 2) return { label: "MEDIO", points };
  return { label: "BAJO", points };
}

async function main() {
  if (!fs.existsSync(TEMAS_DIR)) throw new Error(`No existe ${TEMAS_DIR}`);

  const [{ RESUMENES }, { PREGUNTAS }] = await Promise.all([
    import(pathToFileURL(path.join(ROOT, "src", "data", "resumenes.js")).href),
    import(pathToFileURL(path.join(ROOT, "src", "data", "preguntas.js")).href),
  ]);
  const verifications = fs.existsSync(VERIFICATIONS)
    ? JSON.parse(fs.readFileSync(VERIFICATIONS, "utf8"))
    : {};

  const files = fs.readdirSync(TEMAS_DIR)
    .filter((name) => codeFromFile(name))
    .sort((a, b) => {
      const ca = codeFromFile(a);
      const cb = codeFromFile(b);
      const group = (code) => code.startsWith("G") ? 0 : 1;
      return group(ca) - group(cb) || Number(ca.slice(1)) - Number(cb.slice(1));
    });

  const rows = files.map((file) => {
    const codigo = codeFromFile(file);
    const text = fs.readFileSync(path.join(TEMAS_DIR, file), "utf8");
    const lineas = text.replace(/\r/g, "").split("\n");
    const signals = tableExtractionSignals(text);
    const risk = sourceRisk({
      invalidChars: n(/�/g, text),
      formFeeds: n(/\f/g, text),
      ...signals,
    });
    const resumen = RESUMENES[codigo];
    const preguntas = PREGUNTAS.filter((question) => question.tema === codigo);
    const tablasRenderizadas = (resumen?.memorizacion?.tablas?.length || 0)
      + (resumen?.bloques || []).reduce((total, bloque) => total + (bloque.tablas?.length || 0), 0);
    const verification = verifications[codigo];
    const verified = verification?.estado === "VERIFICADO";
    const actions = [];

    if (!verified && (risk.label === "CRÍTICO" || risk.label === "ALTO")) actions.push("VERIFICAR_FUENTE_Y_RECONSTRUIR_TABLAS");
    else if (!verified && risk.label === "MEDIO") actions.push("REVISAR_ESTRUCTURA_DE_DATOS");
    if (!resumen) actions.push("CREAR_RESUMEN");
    else if (!tablasRenderizadas && (signals.fragmentedTableBlocks || signals.markdownTables)) actions.push("AÑADIR_TABLAS_AL_RESUMEN");
    if (!preguntas.length) actions.push("CREAR_BANCO_BASE");
    if (!actions.length) actions.push("REVISIÓN_EDITORIAL");

    const priority = (verified ? 0 : risk.points) + (!resumen ? 3 : 0) + (!preguntas.length ? 2 : 0);
    return {
      codigo,
      archivo: file,
      caracteres: text.length,
      lineas: lineas.length,
      paginas: n(/\f/g, text) + 1,
      marcadores_tabla: signals.markers,
      tablas_markdown_intactas: signals.markdownTables,
      bloques_tabla_fragmentados: signals.fragmentedTableBlocks,
      celdas_huerfanas: signals.orphanCells,
      senales_formula: signals.formulas,
      caracteres_danados: n(/�/g, text),
      riesgo_fuente: risk.label,
      verificacion_fuente: verification?.estado || "PENDIENTE",
      prioridad: priority,
      resumen: resumen ? "SÍ" : "NO",
      tablas_renderizadas: tablasRenderizadas,
      preguntas: preguntas.length,
      accion: actions.join(" + "),
    };
  });

  rows.sort((a, b) => b.prioridad - a.prioridad || a.codigo.localeCompare(b.codigo, "es"));
  const header = Object.keys(rows[0] || {});
  fs.writeFileSync(OUTPUT, [header.join(","), ...rows.map((row) => header.map((key) => csv(row[key])).join(","))].join("\n"), "utf8");

  const byRisk = rows.reduce((acc, row) => {
    acc[row.riesgo_fuente] = (acc[row.riesgo_fuente] || 0) + 1;
    return acc;
  }, {});
  console.log("=== AUDITORÍA DE FUENTES ===");
  console.log(`Temas con fuente local: ${rows.length}`);
  console.log(`Riesgo: crítico ${byRisk.CRÍTICO || 0} · alto ${byRisk.ALTO || 0} · medio ${byRisk.MEDIO || 0} · bajo ${byRisk.BAJO || 0}`);
  console.log(`Informe: ${OUTPUT}`);
  console.log("\nPrioridad inicial:");
  rows.slice(0, 20).forEach((row) => console.log(`${row.codigo.padEnd(4)} P${row.prioridad} · ${row.riesgo_fuente.padEnd(7)} · ${row.accion}`));
}

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
