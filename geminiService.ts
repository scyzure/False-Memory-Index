
import { GoogleGenAI, Type } from "@google/genai";

// Robust check for environment variables in various deployment scenarios
const getApiKey = () => {
  try {
    return process.env.API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY || null;
  } catch (e) {
    return null;
  }
};

const apiKey = getApiKey();
const ai = apiKey && apiKey !== "undefined" ? new GoogleGenAI({ apiKey }) : null;

export const getPoeticInsight = async (photoUrl: string, title: string, description: string) => {
  // Graceful fallback if no API key is present
  if (!ai) {
    return {
      mood: "Ethereal & Transient",
      poeticCaption: "A silent fragment of a memory, caught in the threshold between light and shadow.",
      technicalAnalysis: "The composition utilizes minimalist framing to emphasize the void and the passage of time."
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: await fetchImageAsBase64(photoUrl)
            }
          },
          {
            text: `You are a world-class art critic and poet. Analyze this photograph titled "${title}". 
            The photographer describes it as: "${description}". 
            Provide a short poetic caption (1 sentence), the mood of the piece, and a brief technical analysis of its composition.`
          }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            mood: { type: Type.STRING },
            poeticCaption: { type: Type.STRING },
            technicalAnalysis: { type: Type.STRING }
          },
          required: ["mood", "poeticCaption", "technicalAnalysis"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      mood: "Contemplative",
      poeticCaption: "A moment frozen in the amber of time, where shadows speak louder than light.",
      technicalAnalysis: "The composition uses high contrast to evoke a sense of mystery and depth."
    };
  }
};

async function fetchImageAsBase64(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Image fetch failed");
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(',')[1]);
      };
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    return "";
  }
}
