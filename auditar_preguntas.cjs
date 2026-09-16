const fs = require("fs");
const path = require("path");

const ARCHIVO = path.resolve("src/data/preguntas.js");
const SALIDA = path.resolve("auditoria_preguntas.csv");

if (!fs.existsSync(ARCHIVO)) {
  console.error(`ERROR: no encuentro ${ARCHIVO}`);
  process.exit(1);
}

const texto = fs.readFileSync(ARCHIVO, "utf8");

// ------------------------------------------------------------
// Extraer bloques de preguntas { ... }
// respetando strings y llaves internas.
// ------------------------------------------------------------

function extraerBloques(src) {
  const bloques = [];
  let inicio = -1;
  let profundidad = 0;
  let string = null;
  let escape = false;

  for (let i = 0; i < src.length; i++) {
    const ch = src[i];

    if (string) {
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === string) {
        string = null;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === "`") {
      string = ch;
      continue;
    }

    if (ch === "{") {
      if (profundidad === 0) inicio = i;
      profundidad++;
    }

    if (ch === "}") {
      profundidad--;

      if (profundidad === 0 && inicio >= 0) {
        bloques.push(src.slice(inicio, i + 1));
        inicio = -1;
      }
    }
  }

  return bloques;
}

// ------------------------------------------------------------
// Extraer campos de cada pregunta
// ------------------------------------------------------------

function campoTexto(bloque, nombre) {
  const r = new RegExp(
    `${nombre}\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`
  );
  const m = bloque.match(r);
  if (!m) return "";

  return m[1]
    .replace(/\\"/g, '"')
    .replace(/\\n/g, "\n")
    .replace(/\\\\/g, "\\");
}

function campoNumero(bloque, nombre) {
  const r = new RegExp(`${nombre}\\s*:\\s*(\\d+)`);
  const m = bloque.match(r);
  return m ? Number(m[1]) : null;
}

function opciones(bloque) {
  const m = bloque.match(/o\s*:\s*\[((?:.|\n|\r)*?)\]\s*,?\s*c\s*:/);
  if (!m) return [];

  const contenido = m[1];
  const resultado = [];
  const re = /"((?:\\.|[^"\\])*)"/g;
  let x;

  while ((x = re.exec(contenido))) {
    resultado.push(
      x[1]
        .replace(/\\"/g, '"')
        .replace(/\\n/g, "\n")
        .replace(/\\\\/g, "\\")
    );
  }

  return resultado;
}

// ------------------------------------------------------------
// Auditoría
// ------------------------------------------------------------

const bloques = extraerBloques(texto);

const preguntas = [];

for (const bloque of bloques) {
  const id = campoTexto(bloque, "id");

  // Evita objetos que no sean preguntas
  if (!/^E\d+-\d+/.test(id)) continue;

  const tema = campoTexto(bloque, "tema");
  const q = campoTexto(bloque, "q");
  const exp = campoTexto(bloque, "exp");
  const c = campoNumero(bloque, "c");
  const o = opciones(bloque);

  const avisos = [];

  // ---------- ESTRUCTURA ----------

  if (!q) avisos.push("SIN_ENUNCIADO");

  if (o.length !== 4) {
    avisos.push(`OPCIONES_${o.length}`);
  }

  if (c === null || c < 0 || c > 3) {
    avisos.push("RESPUESTA_INVALIDA");
  }

  if (!exp) {
    avisos.push("SIN_EXPLICACION");
  }

  // ---------- PREGUNTA DEMASIADO OBVIA ----------

  const qLower = q.toLowerCase();

  const palabrasTrampa = [
    "únicamente",
    "exclusivamente",
    "siempre",
    "nunca",
    "solo",
    "solamente",
    "en todos los casos"
  ];

  const numTrampa = palabrasTrampa.filter(x => qLower.includes(x)).length;

  if (numTrampa >= 2) {
    avisos.push("ENUNCIADO_CON_MUCHAS_PALABRAS_TRAMPA");
  }

  // ---------- DISTRACTORES SOSPECHOSOS ----------

  if (o.length === 4 && c !== null) {
    const correcta = o[c];

    const absurdas = o.filter((x, i) => {
      if (i === c) return false;

      const l = x.toLowerCase();

      return (
        l.includes("ninguna de las anteriores") ||
        l.includes("todas las anteriores") ||
        l.startsWith("siempre") ||
        l.startsWith("nunca") ||
        l.startsWith("únicamente") ||
        l.startsWith("exclusivamente")
      );
    });

    if (absurdas.length >= 2) {
      avisos.push("DISTRACTORES_OBVIOS");
    }

    // Correcta muchísimo más larga que la media
    const longitudes = o.map(x => x.length);
    const media =
      longitudes.reduce((a, b) => a + b, 0) / longitudes.length;

    if (correcta.length > media * 1.8) {
      avisos.push("CORRECTA_MUCHO_MAS_LARGA");
    }

    // Opciones prácticamente iguales
    for (let i = 0; i < o.length; i++) {
      for (let j = i + 1; j < o.length; j++) {
        const a = o[i].toLowerCase().replace(/\W/g, "");
        const b = o[j].toLowerCase().replace(/\W/g, "");

        if (a === b || a.includes(b) || b.includes(a)) {
          avisos.push("OPCIONES_MUY_PARECIDAS");
        }
      }
    }
  }

  // ---------- EXPLICACIÓN ----------

  if (exp) {
    if (!/art(?:ículo)?\.?\s*\d+/i.test(exp)) {
      avisos.push("EXPLICACION_SIN_ARTICULO");
    }
  }

  // ---------- LONGITUD ----------

  if (q.length < 70) {
    avisos.push("ENUNCIADO_MUY_CORTO");
  }

  if (q.length > 600) {
    avisos.push("ENUNCIADO_MUY_LARGO");
  }

  // ---------- RESULTADO ----------

  let estado = "OK";

  if (
    avisos.includes("SIN_ENUNCIADO") ||
    avisos.includes("OPCIONES_0") ||
    avisos.includes("RESPUESTA_INVALIDA")
  ) {
    estado = "ERROR";
  } else if (avisos.length >= 2) {
    estado = "REVISAR";
  } else if (avisos.length === 1) {
    estado = "ATENCION";
  }

  preguntas.push({
    id,
    tema,
    estado,
    avisos: avisos.join(" | "),
    q,
    opciones: o,
    correcta: c,
    exp
  });
}

// ------------------------------------------------------------
// Estadísticas
// ------------------------------------------------------------

const total = preguntas.length;
const errores = preguntas.filter(x => x.estado === "ERROR").length;
const revisar = preguntas.filter(x => x.estado === "REVISAR").length;
const atencion = preguntas.filter(x => x.estado === "ATENCION").length;
const ok = preguntas.filter(x => x.estado === "OK").length;

console.log("");
console.log("========================================");
console.log(" AUDITORÍA DE PREGUNTAS");
console.log("========================================");
console.log(`Total preguntas: ${total}`);
console.log(`OK:              ${ok}`);
console.log(`ATENCIÓN:        ${atencion}`);
console.log(`REVISAR:         ${revisar}`);
console.log(`ERROR:           ${errores}`);
console.log("========================================");
console.log("");

// ------------------------------------------------------------
// Mostrar problemas
// ------------------------------------------------------------

for (const p of preguntas) {
  if (p.estado === "OK") continue;

  console.log(
    `${p.estado.padEnd(9)} ${p.id.padEnd(12)} ${p.tema.padEnd(6)} ${p.avisos}`
  );
}

// ------------------------------------------------------------
// CSV
// ------------------------------------------------------------

function csv(v) {
  const s = String(v ?? "");
  return `"${s.replace(/"/g, '""').replace(/\n/g, " ")}"`;
}

const filas = [];

filas.push([
  "ID",
  "TEMA",
  "ESTADO",
  "AVISOS",
  "PREGUNTA",
  "A",
  "B",
  "C",
  "D",
  "CORRECTA",
  "EXPLICACION"
].map(csv).join(";"));

for (const p of preguntas) {
  filas.push([
    p.id,
    p.tema,
    p.estado,
    p.avisos,
    p.q,
    p.opciones[0] || "",
    p.opciones[1] || "",
    p.opciones[2] || "",
    p.opciones[3] || "",
    p.correcta !== null ? String.fromCharCode(65 + p.correcta) : "",
    p.exp
  ].map(csv).join(";"));
}

fs.writeFileSync(SALIDA, filas.join("\n"), "utf8");

console.log("");
console.log(`Informe generado: ${SALIDA}`);
console.log("");
