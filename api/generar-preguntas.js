import { timingSafeEqual } from "node:crypto";
import { GoogleGenAI } from "@google/genai";

function autorizado(req) {
  const esperado = process.env.GENERAR_PREGUNTAS_TOKEN || "";
  const cabecera = req.headers.authorization || "";
  const recibido = cabecera.startsWith("Bearer ") ? cabecera.slice(7) : "";
  if (!esperado || !recibido) return false;

  const a = Buffer.from(esperado);
  const b = Buffer.from(recibido);
  return a.length === b.length && timingSafeEqual(a, b);
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  if (!process.env.GENERAR_PREGUNTAS_TOKEN) {
    return res.status(503).json({ error: "Endpoint desactivado" });
  }
  if (!autorizado(req)) {
    return res.status(401).json({ error: "No autorizado" });
  }
  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({ error: "Generador no configurado" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const { tema, contenido, numero = 10 } = body;
    const n = Number(numero);

    if (typeof tema !== "string" || typeof contenido !== "string" || !tema.trim() || !contenido.trim()) {
      return res.status(400).json({ error: "Faltan el tema o el contenido" });
    }
    if (!Number.isInteger(n) || n < 1 || n > 20) {
      return res.status(400).json({ error: "numero debe estar entre 1 y 20" });
    }
    if (tema.length > 500 || contenido.length > 120000) {
      return res.status(413).json({ error: "Contenido demasiado grande" });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const prompt = `
Eres un preparador experto de oposiciones de Arquitecto.

Genera ${n} preguntas tipo test sobre el siguiente tema.

TEMA:
${tema}

CONTENIDO OFICIAL:
${contenido}

REGLAS:
- Cada pregunta debe tener exactamente 4 opciones.
- Solo puede haber una respuesta correcta.
- La respuesta debe poder justificarse exclusivamente con el contenido proporcionado.
- No inventes normativa, artículos, cifras ni plazos.
- Prioriza preguntas difíciles y con matices técnicos.
- No copies literalmente preguntas anteriores.
- Devuelve únicamente JSON válido.

FORMATO:
{
  "preguntas": [
    {
      "pregunta": "...",
      "opciones": ["...", "...", "...", "..."],
      "correcta": 0,
      "explicacion": "..."
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: { responseMimeType: "application/json" },
    });

    const resultado = JSON.parse(response.text);
    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Error generando preguntas:", error?.message || error);
    return res.status(500).json({ error: "Error generando las preguntas" });
  }
}
