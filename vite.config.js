import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const adaptiveTestPlugin = () => ({
  name: "adaptive-test-selection",
  transform(code, id) {
    if (!id.endsWith("/src/App.jsx")) return null;

    const importLine = 'import { seleccionarPreguntasAdaptativas } from "./lib/testSelection.js";';
    if (!code.includes(importLine)) code = `${importLine}\n${code}`;

    const temasMarker = 'const disponiblesTema = PREGUNTAS.filter(enTema).length;';
    const temasReplacement = `${temasMarker}\n  const temasLeidos = Object.keys(state.leidos || {}).filter((codigo) => state.leidos[codigo]);\n  const disponiblesAprendido = PREGUNTAS.filter((q) => temasLeidos.includes(q.tema)).length;`;
    if (!code.includes("const disponiblesAprendido")) {
      if (!code.includes(temasMarker)) throw new Error("No se encontró el cálculo de disponibilidad por tema");
      code = code.replace(temasMarker, temasReplacement);
    }

    const modeMarker = 'else if (modo === "tema") base = PREGUNTAS.filter(enTema);';
    const modeReplacement = `${modeMarker}\n    else if (modo === "aprendido") base = PREGUNTAS.filter((q) => temasLeidos.includes(q.tema));`;
    if (!code.includes('modo === "aprendido") base')) {
      if (!code.includes(modeMarker)) throw new Error("No se encontró la selección de preguntas por tema");
      code = code.replace(modeMarker, modeReplacement);
    }

    const selectionMarker = 'const seleccion = shuffle(base).slice(0, Math.min(num, base.length)).map((q) => ({ ...q, _order: shuffle([0, 1, 2, 3]) }));';
    const selectionReplacement = 'const seleccion = (modo === "aprendido" ? seleccionarPreguntasAdaptativas(base, state.preguntas || {}, Math.min(num, base.length)) : shuffle(base).slice(0, Math.min(num, base.length))).map((q) => ({ ...q, _order: shuffle([0, 1, 2, 3]) }));';
    if (!code.includes('modo === "aprendido" ? seleccionarPreguntasAdaptativas')) {
      if (!code.includes(selectionMarker)) throw new Error("No se encontró el selector de preguntas esperado en App.jsx");
      code = code.replace(selectionMarker, selectionReplacement);
    }

    const guardMarker = '(modo === "tema" && !disponiblesTema);';
    const guardReplacement = '(modo === "tema" && !disponiblesTema) || (modo === "aprendido" && !disponiblesAprendido);';
    if (!code.includes('modo === "aprendido" && !disponiblesAprendido')) {
      if (!code.includes(guardMarker)) throw new Error("No se encontró la validación de inicio del test");
      code = code.replace(guardMarker, guardReplacement);
    }

    const chipMarker = '<Chip on={modo === "falladas"} onClick={() => setModo("falladas")} disabled={!nF}>Repasar mis fallos ({nF})</Chip>';
    const chipReplacement = `${chipMarker}\n          <Chip on={modo === "aprendido"} onClick={() => setModo("aprendido")} disabled={!disponiblesAprendido}>Repasar lo aprendido ({temasLeidos.length} temas)</Chip>`;
    if (!code.includes('setModo("aprendido")')) {
      if (!code.includes(chipMarker)) throw new Error("No se encontró el selector de modos del test");
      code = code.replace(chipMarker, chipReplacement);
    }

    const panelMarker = '{modo === "rango" && (';
    const learnedPanel = `{modo === "aprendido" && (\n          <div style={{ border: \`1px solid ${C.hair}\`, borderRadius: 6, padding: 14, marginBottom: 16, background: C.paper }}>\n            <p style={{ ...pSmall, margin: 0 }}>Incluye preguntas de todos los temas marcados como leídos. Las preguntas que más has fallado tienen mayor probabilidad de aparecer.</p>\n            <p style={{ ...pSmall, marginTop: 8, marginBottom: 0, color: disponiblesAprendido ? C.ok : C.red }}>{temasLeidos.length} tema(s) leído(s) · {disponiblesAprendido} pregunta(s) disponible(s).</p>\n          </div>\n        )}\n\n        ${panelMarker}`;
    if (!code.includes('Incluye preguntas de todos los temas marcados como leídos')) {
      if (!code.includes(panelMarker)) throw new Error("No se encontró el panel de configuración del rango");
      code = code.replace(panelMarker, learnedPanel);
    }

    return { code, map: null };
  },
});

export default defineConfig({
  plugins: [react(), adaptiveTestPlugin()],
});
