import { airtableFetch, type AirtableRecord } from "@/lib/airtable-api";

function escapeFormulaString(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

export async function findExistingLeadByEmail(
  email: string
): Promise<AirtableRecord | null> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return null;

  const formula = `LOWER({Email}) = '${escapeFormulaString(normalized)}'`;
  const path = `?maxRecords=1&filterByFormula=${encodeURIComponent(formula)}`;

  const result = await airtableFetch<{ records: AirtableRecord[] }>(path);
  if (!result.ok || !result.data?.records.length) return null;

  return result.data.records[0];
}

export function formatDuplicateNote(existing: AirtableRecord): string {
  const naam = String(existing.fields.Naam ?? "onbekend");
  const datum = existing.createdTime
    ? new Date(existing.createdTime).toLocaleDateString("nl-BE")
    : "eerdere datum";
  return `⚠️ Mogelijke dubbel: ${naam} (${datum}) had al een aanvraag met dit e-mailadres.`;
}
