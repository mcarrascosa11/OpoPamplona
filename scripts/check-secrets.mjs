import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";

const patrones = [
  ["OpenAI", /sk-(?:proj-)?[A-Za-z0-9_-]{20,}/g],
  ["Google API", /AIza[0-9A-Za-z_-]{30,}/g],
  ["GitHub token", /(?:ghp_|github_pat_)[A-Za-z0-9_]{20,}/g],
  ["AWS access key", /AKIA[0-9A-Z]{16}/g],
  ["Slack token", /xox[baprs]-[0-9A-Za-z-]{20,}/g],
  ["Supabase secret", /sb_secret_[A-Za-z0-9_-]{20,}/g],
  ["Stripe secret", /(?:sk|rk)_live_[0-9A-Za-z]{16,}/g],
  ["Private key", /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g],
];

const archivos = execFileSync("git", ["ls-files", "-z"])
  .toString("utf8")
  .split("\0")
  .filter(Boolean);

const hallazgos = [];
for (const archivo of archivos) {
  if (archivo === ".env.example") continue;
  let st;
  try { st = statSync(archivo); } catch { continue; }
  if (!st.isFile() || st.size > 2_000_000) continue;

  const buf = readFileSync(archivo);
  if (buf.includes(0)) continue;
  const texto = buf.toString("utf8");

  for (const [nombre, patron] of patrones) {
    patron.lastIndex = 0;
    if (patron.test(texto)) hallazgos.push(`${archivo}: posible ${nombre}`);
  }
}

if (hallazgos.length) {
  console.error("Posibles secretos encontrados:\n" + hallazgos.map((x) => " - " + x).join("\n"));
  process.exit(1);
}
console.log(`Secret scan básico OK (${archivos.length} archivos rastreados).`);
