const fs = require("fs");
const path = require("path");

const file = path.resolve("src/data/preguntas.js");
const out = path.resolve("auditoria_preguntas.csv");

if (!fs.existsSync(file)) {
  console.error("No existe " + file);
  process.exit(1);
}

const src = fs.readFileSync(file, "utf8");

function objects(s) {
  const r = [];
  let start = -1, depth = 0, quote = null, esc = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (quote) {
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") { quote = ch; continue; }
    if (ch === "{") { if (!depth) start = i; depth++; }
    if (ch === "}") {
      depth--;
      if (!depth && start >= 0) {
        r.push(s.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return r;
}

function str(o, name) {
  const m = o.match(new RegExp(name + "\\s*:\\s*\"((?:\\\\.|[^\"\\\\])*)\""));
  return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n").replace(/\\\\/g, "\\") : "";
}

function num(o, name) {
  const m = o.match(new RegExp(name + "\\s*:\\s*(\\d+)"));
  return m ? Number(m[1]) : null;
}

function opts(o) {
  const m = o.match(/o\\s*:\\s*\\[((?:.|\\n|\\r)*?)\\]\\s*,\\s*c\\s*:/);
  if (!m) return [];
  const r = [], re = /"((?:\\\\.|[^"\\\\])*)"/g;
  let x;
  while ((x = re.exec(m[1]))) r.push(x[1].replace(/\\"/g, '"').replace(/\\n/g, "\n"));
  return r;
}

function norm(s) {
  return s.toLowerCase()
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .replace(/[^\\p{L}\\p{N}\\s]/gu, " ")
    .replace(/\\s+/g, " ")
    .trim();
}

function sim(a, b) {
  const A = new Set(norm(a).split(" ").filter(Boolean));
  const B = new Set(norm(b).split(" ").filter(Boolean));
  if (!A.size || !B.size) return 0;
  let n = 0;
  for (const x of A) if (B.has(x)) n++;
  return n / new Set([...A, ...B]).size;
}

const badWords = [
  "unicamente", "exclusivamente", "siempre", "nunca",
  "solo", "solamente", "en todos los casos", "sin excepcion"
];

const qs = [];

for (const o of objects(src)) {
  const id = str(o, "id");
  if (!/^(E|G)\\d+-\\d+$/.test(id)) continue;

  const tema = str(o, "tema");
  const q = str(o, "q");
  const exp = str(o, "exp");
  const c = num(o, "c");
  const options = opts(o);
  const warnings = [];

  if (!q) warnings.push("SIN_ENUNCIADO");
  if (options.length !== 4) warnings.push("NO_HAY_4_OPCIONES");
  if (c === null || c < 0 || c > 3) warnings.push("RESPUESTA_INVALIDA");
  if (!exp) warnings.push("SIN_EXPLICACION");

  if (badWords.some(w => norm(q).includes(w))) {
    warnings.push("ABSOLUTO_EN_ENUNCIADO");
  }

  if (options.length === 4 && c !== null) {
    const lens = options.map(x => x.length);
    const avg = lens.reduce((a,b) => a+b, 0) / 4;

    if (options[c].length > avg * 1.8 && options[c].length - Math.min(...lens) > 40) {
      warnings.push("CORRECTA_MUCHO_MAS_LARGA");
    }

    for (let i = 0; i < 4; i++) {
      for (let j = i + 1; j < 4; j++) {
        if (norm(options[i]) === norm(options[j])) warnings.push("OPCIONES_DUPLICADAS");
        else if (sim(options[i], options[j]) >= 0.85) warnings.push("OPCIONES_MUY_PARECIDAS");
      }
    }

    const distractors = options.filter((_, i) => i !== c);
    if (distractors.filter(x => badWords.some(w => norm(x).includes(w))).length >= 2) {
      warnings.push("DISTRACTORES_ABSOLUTOS");
    }
    if (distractors.some(x => {
      const n = norm(x);
      return n === "todas las anteriores" || n === "ninguna de las anteriores";
    })) {
      warnings.push("TODAS_NINGUNA");
    }
  }

  if (exp && !/(art\\.?|articulo|arts\\.?|ley|decreto|real decreto|ordenanza|disposicion)/i.test(exp)) {
    warnings.push("SIN_REFERENCIA_NORMATIVA");
  }

  if (q.length < 70) warnings.push("ENUNCIADO_CORTO");
  if (q.length > 650) warnings.push("ENUNCIADO_LARGO");

  qs.push({id, tema, q, options, c, exp, warnings});
}

for (let i = 0; i < qs.length; i++) {
  for (let j = i + 1; j < qs.length; j++) {
    const a = norm(qs[i].q), b = norm(qs[j].q);
    if (a && a === b) {
      qs[i].warnings.push("DUPLICADA:" + qs[j].id);
      qs[j].warnings.push("DUPLICADA:" + qs[i].id);
    } else if (a && b && sim(a, b) >= 0.90) {
      qs[i].warnings.push("MUY_PARECIDA:" + qs[j].id);
      qs[j].warnings.push("MUY_PARECIDA:" + qs[i].id);
    }
  }
}

function state(w) {
  if (w.includes("SIN_ENUNCIADO") || w.includes("NO_HAY_4_OPCIONES") || w.includes("RESPUESTA_INVALIDA")) return "ERROR";
  if (w.length >= 2) return "REVISAR";
  if (w.length === 1) return "ATENCION";
  return "OK";
}

function csv(v) {
  return '"' + String(v ?? "").replace(/"/g, '""').replace(/\\r?\\n/g, " ") + '"';
}

const rows = [[
  "ID","TEMA","ESTADO","AVISOS","PREGUNTA",
  "A","B","C","D","CORRECTA","EXPLICACION"
]];

for (const p of qs) {
  rows.push([
    p.id, p.tema, state(p.warnings), p.warnings.join(" | "), p.q,
    p.options[0] || "", p.options[1] || "", p.options[2] || "", p.options[3] || "",
    p.c === null ? "" : String.fromCharCode(65 + p.c), p.exp
  ]);
}

fs.writeFileSync(out, rows.map(r => r.map(csv).join(";")).join("\n"), "utf8");

const counts = {OK:0, ATENCION:0, REVISAR:0, ERROR:0};
for (const p of qs) counts[state(p.warnings)]++;

console.log("=== AUDITORIA ===");
console.log("Preguntas: " + qs.length);
console.log("OK: " + counts.OK);
console.log("ATENCION: " + counts.ATENCION);
console.log("REVISAR: " + counts.REVISAR);
console.log("ERROR: " + counts.ERROR);
console.log("Informe: " + out);
for (const p of qs) {
  const s = state(p.warnings);
  if (s !== "OK") console.log(s + " | " + p.id + " | " + p.warnings.join(", "));
}
