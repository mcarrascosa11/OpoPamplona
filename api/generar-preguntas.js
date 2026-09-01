import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { tema, contenido, numero = 10 } = req.body;

    if (!tema || !contenido) {
      return res.status(400).json({ error: "Faltan el tema o el contenido" });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
Eres un preparador experto de oposiciones de Arquitecto.

Genera ${numero} preguntas tipo test sobre el siguiente tema.

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
      config: {
        responseMimeType: "application/json",
      },
    });

    const resultado = JSON.parse(response.text);
    return res.status(200).json(resultado);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Error generando las preguntas",
    });
  }
}
