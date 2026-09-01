import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const adaptiveTestPlugin = () => ({
  name: "adaptive-test-selection",
  transform(code, id) {
    if (!id.endsWith("/src/App.jsx")) return null;

    const original = 'const seleccion = shuffle(base).slice(0, Math.min(num, base.length)).map((q) => ({ ...q, _order: shuffle([0, 1, 2, 3]) }));';
    const replacement = 'const seleccion = seleccionarPreguntasAdaptativas(base, state.preguntas || {}, num).map((q) => ({ ...q, _order: shuffle([0, 1, 2, 3]) }));';

    if (!code.includes(original)) {
      throw new Error("No se encontró el selector de preguntas esperado en App.jsx");
    }

    return {
      code: `import { seleccionarPreguntasAdaptativas } from "./lib/testSelection.js";\n${code.replace(original, replacement)}`,
      map: null,
    };
  },
});

export default defineConfig({
  plugins: [react(), adaptiveTestPlugin()],
});
