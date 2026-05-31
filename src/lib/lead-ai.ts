import type { LeadProcessInput } from "@/lib/lead-scoring";

const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export type LeadAiInsights = {
  summary: string;
};

export async function generateLeadSummary(
  lead: LeadProcessInput,
  score: number
): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return fallbackSummary(lead, score);
  }

  const prompt = `Je bent sales-assistent voor Dakralux (dakwerken, regio Brugge/West-Vlaanderen).

Schrijf een korte samenvatting (2-3 zinnen) van deze lead voor het CRM-notitieveld.
Antwoord ALLEEN met platte tekst in het Nederlands (BE), geen JSON of markdown.

Lead (score ${score}/100):
- Naam: ${lead.naam}
- E-mail: ${lead.email}
- Telefoon: ${lead.telefoon || "niet opgegeven"}
- Gemeente: ${lead.gemeente || "niet opgegeven"}
- Dienst: ${lead.dienst || "niet opgegeven"}
- Urgentie: ${lead.urgentie || "niet opgegeven"}
- Bericht: ${lead.bericht || "n.v.t."}`;

  try {
    const res = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 250,
      }),
    });

    if (!res.ok) {
      console.error("Groq API:", res.status, await res.text());
      return fallbackSummary(lead, score);
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };

    const text = data.choices?.[0]?.message?.content?.trim();
    return text || fallbackSummary(lead, score);
  } catch (err) {
    console.error("Groq:", err);
    return fallbackSummary(lead, score);
  }
}

function fallbackSummary(lead: LeadProcessInput, score: number): string {
  const parts = [
    `${lead.naam} vraagt een offerte`,
    lead.dienst ? `voor ${lead.dienst}` : null,
    lead.gemeente ? `in ${lead.gemeente}` : null,
  ].filter(Boolean);

  return `${parts.join(" ")}. Lead score: ${score}/100.`;
}

export function formatLeadNotities(score: number, summary: string): string {
  return [`Score: ${score}/100`, "", summary].join("\n");
}
