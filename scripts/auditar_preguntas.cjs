const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const ROOT = path.resolve(__dirname, "..");
const source = path.join(ROOT, "src", "data", "preguntas.js");
const output = path.join(ROOT, "auditoria_preguntas.csv");

async function main() {
  if (!fs.existsSync(source)) throw new Error("No se encuentra " + source);

  const mod = await import(pathToFileURL(source).href + "?audit=" + Date.now());
  const preguntas = mod.PREGUNTAS;

  if (!Array.isArray(preguntas)) {
    throw new Error("No se ha encontrado PREGUNTAS en preguntas.js");
  }

  function norm(value) {
    return String(value ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  const absoluteWords = [
    "unicamente", "exclusivamente", "siempre", "nunca",
    "solo", "solamente", "en todos los casos", "sin excepcion"
  ];

  const rows = preguntas.map((p) => {
    const q = String(p.q ?? "");
    const options = Array.isArray(p.o) ? p.o.map(String) : [];
    const c = Number.isInteger(p.c) ? p.c : null;
    const exp = String(p.exp ?? "");
    const issues = [];

    // ERRORES OBJETIVOS: no dependen de interpretar la norma.
    if (!q.trim()) issues.push("SIN_ENUNCIADO");
    if (options.length !== 4) issues.push("NO_HAY_4_OPCIONES");
    if (c === null || c < 0 || c > 3) issues.push("RESPUESTA_INVALIDA");
    if (!exp.trim()) issues.push("SIN_EXPLICACION");

    if (options.length === 4) {
      const normalizedOptions = options.map(norm);

      // Solo duplicados REALES. No se usa similitud difusa.
      for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
          if (normalizedOptions[i] && normalizedOptions[i] === normalizedOptions[j]) {
            issues.push("OPCIONES_DUPLICADAS");
          }
        }
      }

      // Señal, no error: la correcta destaca mucho por longitud.
      if (c !== null && c >= 0 && c < 4) {
        const lengths = options.map(x => x.length);
        const sorted = [...lengths].sort((a, b) => a - b);
        const median = (sorted[1] + sorted[2]) / 2;
        if (median > 0 && lengths[c] >= median * 2 && lengths[c] - median >= 50) {
          issues.push("CORRECTA_MUCHO_MAS_LARGA");
        }
      }

      // Señal, no error: uso de absolutos en distractores.
      const distractors = options.filter((_, i) => i !== c);
      if (distractors.some(x => absoluteWords.some(w => norm(x).includes(w)))) {
        issues.push("DISTRACTOR_ABSOLUTO");
      }
    }

    // La pregunta puede ser corta y ser perfectamente válida.
    // Solo marcamos si es extremadamente corta.
    if (q.trim().length > 0 && q.trim().length < 35) {
      issues.push("ENUNCIADO_MUY_CORTO");
    }

    return { ...p, q, o: options, c, exp, issues };
  });

  // Duplicados exactos de enunciado. Solo se marca la coincidencia literal
  // normalizada; NO se usa similitud por palabras.
  const byQuestion = new Map();

  for (const p of rows) {
    const key = norm(p.q);
    if (!key) continue;
    if (!byQuestion.has(key)) byQuestion.set(key, []);
    byQuestion.get(key).push(p);
  }

  for (const group of byQuestion.values()) {
    if (group.length > 1) {
      for (const p of group) {
        const others = group.filter(x => x !== p).map(x => x.id).join(",");
        p.issues.push("PREGUNTA_DUPLICADA:" + others);
      }
    }
  }

  function state(issues) {
    const hard = [
      "SIN_ENUNCIADO",
      "NO_HAY_4_OPCIONES",
      "RESPUESTA_INVALIDA",
      "SIN_EXPLICACION",
      "OPCIONES_DUPLICADAS"
    ];
    if (issues.some(x => hard.includes(x))) return "ERROR";
    if (issues.length > 0) return "ATENCION";
    return "OK";
  }

  function csv(value) {
    return '"' + String(value ?? "")
      .replace(/"/g, '""')
      .replace(/\r?\n/g, " ") + '"';
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
      p.o[0] || "",
      p.o[1] || "",
      p.o[2] || "",
      p.o[3] || "",
      p.c === null ? "" : String.fromCharCode(65 + p.c),
      p.exp
    ]);
  }

  fs.writeFileSync(output, csvRows.map(r => r.map(csv).join(";")).join("\n"), "utf8");

  const counts = { OK: 0, ATENCION: 0, ERROR: 0 };
  for (const p of rows) counts[state(p.issues)]++;

  console.log("=== AUDITORIA DEL BANCO ===");
  console.log("Preguntas: " + rows.length);
  console.log("OK: " + counts.OK);
  console.log("ATENCION: " + counts.ATENCION);
  console.log("ERROR: " + counts.ERROR);
  console.log("Informe: " + output);
  console.log("");
  console.log("La auditoria NO determina si una respuesta es jurídicamente correcta.");
  console.log("Solo detecta problemas objetivos y señales para revisión humana/IA.");
  console.log("");

  for (const p of rows) {
    const s = state(p.issues);
    if (s !== "OK") {
      console.log(s + " | " + p.id + " | " + p.issues.join(", "));
    }
  }
}

main().catch(error => {
  console.error("ERROR:", error);
  process.exit(1);
});
