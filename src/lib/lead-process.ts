import {
  AIRTABLE_BRON_WEBSITE,
  AIRTABLE_STATUS_NIEUW,
} from "@/lib/airtable-lead";
import { airtableFetch } from "@/lib/airtable-api";
import { findExistingLeadByEmail, formatDuplicateNote } from "@/lib/lead-duplicates";
import { formatLeadNotities, generateLeadSummary } from "@/lib/lead-ai";
import { sendLeadEmails } from "@/lib/lead-email";
import {
  calculateLeadScore,
  nextActionDate,
  priorityFromScore,
  type LeadProcessInput,
} from "@/lib/lead-scoring";

export type ProcessLeadResult = {
  recordId: string;
  score: number;
  priority: string;
  nextAction: string;
  isDuplicate: boolean;
};

export async function processLead(input: LeadProcessInput): Promise<ProcessLeadResult> {
  const score = calculateLeadScore(input);
  const priority = priorityFromScore(score);
  const nextAction = nextActionDate(priority);
  const summary = await generateLeadSummary(input, score);

  const existing = await findExistingLeadByEmail(input.email);
  const isDuplicate = !!existing;

  let notities = formatLeadNotities(score, summary);
  if (isDuplicate && existing) {
    notities = `${formatDuplicateNote(existing)}\n\n${notities}`;
  }

  const fields: Record<string, unknown> = {
    Naam: input.naam.trim(),
    Email: input.email.trim(),
    Telefoon: input.telefoon || "",
    Dienst: input.dienst || "",
    Bericht: input.bericht ?? "",
    Status: AIRTABLE_STATUS_NIEUW,
    Bron: AIRTABLE_BRON_WEBSITE,
    Prioriteit: priority,
    "Volgende actie": nextAction,
    Notities: notities,
    "Lead score": score,
    Dubbel: isDuplicate,
    "Herinnering verstuurd": false,
  };

  if (input.gemeente) fields.Gemeente = input.gemeente;
  if (input.urgentie) fields.Urgentie = input.urgentie;

  const result = await airtableFetch<{ id: string }>("", {
    method: "POST",
    body: JSON.stringify({ fields, typecast: true }),
  });

  if (!result.ok) {
    console.error("Airtable create lead failed:", result.status, result.text);
    throw new Error("AIRTABLE_CREATE_FAILED");
  }

  const recordId = result.data!.id;

  await sendLeadEmails({
    lead: input,
    score,
    priority,
    nextAction,
    recordId,
    isDuplicate,
  });

  return { recordId, score, priority, nextAction, isDuplicate };
}
