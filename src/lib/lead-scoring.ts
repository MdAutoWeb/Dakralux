export type LeadPriority = "Hoog" | "Normaal" | "Laag";

export const URGENTIE_OPTIONS = [
  "Dringend (lek/schade)",
  "Binnen 3 maanden",
  "Planbaar",
  "Gewoon info",
] as const;

export type LeadProcessInput = {
  naam: string;
  email: string;
  telefoon?: string;
  dienst?: string;
  bericht?: string;
  gemeente?: string;
  urgentie?: string;
};

function urgentieScore(urgentie?: string): number {
  if (!urgentie?.trim()) return 0;
  if (urgentie.includes("Dringend")) return 40;
  if (urgentie.includes("Binnen 3 maanden")) return 25;
  if (urgentie.includes("Planbaar")) return 10;
  return 0;
}

export function calculateLeadScore(input: LeadProcessInput): number {
  let score = 0;

  score += urgentieScore(input.urgentie);

  if (input.dienst?.trim()) {
    score += 20;
  }

  if (input.gemeente?.trim()) {
    score += 15;
  }

  if ((input.bericht ?? "").trim().length > 80) {
    score += 10;
  }

  return Math.min(score, 100);
}

export function priorityFromScore(score: number): LeadPriority {
  if (score >= 60) return "Hoog";
  if (score >= 30) return "Normaal";
  return "Laag";
}

export function nextActionDate(priority: LeadPriority): string {
  const days = priority === "Hoog" ? 1 : priority === "Normaal" ? 3 : 7;
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}
