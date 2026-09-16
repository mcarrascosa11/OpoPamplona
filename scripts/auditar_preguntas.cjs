const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const ROOT = path.resolve(__dirname, "..");
const source = path.join(ROOT, "src", "data", "preguntas.js");
const output = path.join(ROOT, "auditoria_preguntas.csv");

async function main() {
  if (!fs.existsSync(source)) {
    throw new Error("No se encuentra " + source);
  }

  // Carga real del archivo JS. Esto evita intentar parsear el código con regex.
  const mod = await import(pathToFileURL(source).href + "?audit=" + Date.now());
  const preguntas = mod.PREGUNTAS;

  if (!Array.isArray(preguntas)) {
    throw new Error("No se ha encontrado PREGUNTAS en preguntas.js");
  }

  const warnings = [
    "unicamente", "exclusivamente", "siempre", "nunca",
    "solo", "solamente", "en todos los casos", "sin excepcion"
  ];

  function norm(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\\u0300-\\u036f]/g, "")
      .replace(/[^\\p{L}\\p{N}\\s]/gu, " ")
      .replace(/\\s+/g, " ")
      .trim();
  }

  function similarity(a, b) {
    const A = new Set(norm(a).split(" ").filter(Boolean));
    const B = new Set(norm(b).split(" ").filter(Boolean));
    if (!A.size || !B.size) return 0;
    let intersection = 0;
    for (const x of A) if (B.has(x)) intersection++;
    return intersection / new Set([...A, ...B]).size;
  }

  const rows = [];

  for (const p of preguntas) {
    const q = String(p.q || "");
    const options = Array.isArray(p.o) ? p.o.map(String) : [];
    const c = Number.isInteger(p.c) ? p.c : null;
    const exp = String(p.exp || "");
    const issues = [];

    if (!q) issues.push("SIN_ENUNCIADO");
    if (options.length !== 4) issues.push("NO_HAY_4_OPCIONES");
    if (c === null || c < 0 || c > 3) issues.push("RESPUESTA_INVALIDA");
    if (!exp) issues.push("SIN_EXPLICACION");

    const nq = norm(q);
    if (warnings.some(w => nq.includes(w))) {
      issues.push("ABSOLUTO_EN_ENUNCIADO");
    }

    if (options.length === 4 && c !== null) {
      const lengths = options.map(x => x.length);
      const avg = lengths.reduce((a, b) => a + b, 0) / 4;

      // Señal de que la respuesta correcta destaca visualmente por longitud.
      if (options[c].length > avg * 1.8 && options[c].length - Math.min(...lengths) > 40) {
        issues.push("CORRECTA_MUCHO_MAS_LARGA");
      }

      for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
          const a = norm(options[i]);
          const b = norm(options[j]);
          if (a && a === b) issues.push("OPCIONES_DUPLICADAS");
          else if (a && b && similarity(options[i], options[j]) >= 0.85) {
            issues.push("OPCIONES_MUY_PARECIDAS");
          }
        }
      }

      const distractors = options.filter((_, i) => i !== c);
      const absoluteDistractors = distractors.filter(x =>
        warnings.some(w => norm(x).includes(w))
      );
      if (absoluteDistractors.length >= 2) {
        issues.push("DISTRACTORES_ABSOLUTOS");
      }

      if (distractors.some(x => {
        const n = norm(x);
        return n === "todas las anteriores" || n === "ninguna de las anteriores";
      })) {
        issues.push("TODAS_NINGUNA");
      }
    }

    if (exp && !/(art\\.?|articulo|arts\\.?|ley|decreto|real decreto|ordenanza|disposicion)/i.test(exp)) {
      issues.push("SIN_REFERENCIA_NORMATIVA");
    }

    if (q.length < 70) issues.push("ENUNCIADO_CORTO");
    if (q.length > 650) issues.push("ENUNCIADO_LARGO");

    rows.push({ ...p, issues });
  }

  // Detecta preguntas iguales o casi iguales.
  for (let i = 0; i < rows.length; i++) {
    for (let j = i + 1; j < rows.length; j++) {
      const a = norm(rows[i].q);
      const b = norm(rows[j].q);
      if (a && a === b) {
        rows[i].issues.push("PREGUNTA_DUPLICADA:" + rows[j].id);
        rows[j].issues.push("PREGUNTA_DUPLICADA:" + rows[i].id);
      } else if (a && b && similarity(a, b) >= 0.90) {
        rows[i].issues.push("PREGUNTA_MUY_PARECIDA:" + rows[j].id);
        rows[j].issues.push("PREGUNTA_MUY_PARECIDA:" + rows[i].id);
      }
    }
  }

  function state(issues) {
    if (issues.some(x =>
      x === "SIN_ENUNCIADO" ||
      x === "NO_HAY_4_OPCIONES" ||
      x === "RESPUESTA_INVALIDA"
    )) return "ERROR";
    if (issues.length >= 2) return "REVISAR";
    if (issues.length === 1) return "ATENCION";
    return "OK";
  }

  function csv(value) {
    return '"' + String(value ?? "")
      .replace(/"/g, '""')
      .replace(/\\r?\\n/g, " ") + '"';
  }

  const csvRows = [[
    "ID", "TEMA", "ESTADO", "AVISOS", "PREGUNTA",
    "A", "B", "C", "D", "CORRECTA", "EXPLICACION"
  ]];

  for (const p of rows) {
    csvRows.push([
      p.id,
      p.tema,
      state(p.issues),
      p.issues.join(" | "),
      p.q,
      ...(p.o || ["", "", "", ""]).slice(0, 4),
      p.c === null || p.c === undefined ? "" : String.fromCharCode(65 + p.c),
      p.exp
    ]);
  }

  fs.writeFileSync(
    output,
    csvRows.map(row => row.map(csv).join(";")) .join("\\n"),
    "utf8"
  );

  const counts = { OK: 0, ATENCION: 0, REVISAR: 0, ERROR: 0 };
  for (const p of rows) counts[state(p.issues)]++;

  console.log("=== AUDITORIA DEL BANCO ===");
  console.log("Preguntas: " + rows.length);
  console.log("OK: " + counts.OK);
  console.log("ATENCION: " + counts.ATENCION);
  console.log("REVISAR: " + counts.REVISAR);
  console.log("ERROR: " + counts.ERROR);
  console.log("Informe: " + output);
  console.log("");

  for (const p of rows) {
    const s = state(p.issues);
    if (s !== "OK") {
      console.log(s + " | " + p.id + " | " + p.issues.join(", "));
    }
  }
}

main().catch(error => {
  console.error("ERROR:", error.message);
  process.exit(1);
});
