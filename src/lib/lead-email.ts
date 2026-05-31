import { Resend } from "resend";
import type { LeadProcessInput } from "@/lib/lead-scoring";
import type { LeadPriority } from "@/lib/lead-scoring";

const FROM =
  process.env.DAKRALUX_FROM_EMAIL ?? "Dakralux <no-reply@dakralux.be>";
const REPLY_TO = process.env.DAKRALUX_REPLY_TO ?? "info@dakralux.be";
const NOTIFY = process.env.LEADS_NOTIFY_EMAIL ?? process.env.DAKRALUX_NOTIFY_EMAIL;

export async function sendLeadEmails(params: {
  lead: LeadProcessInput;
  score: number;
  priority: LeadPriority;
  nextAction: string;
  recordId: string;
  isDuplicate: boolean;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  const { lead, score, priority, nextAction, recordId, isDuplicate } = params;

  const customerText = [
    `Beste ${lead.naam},`,
    "",
    "Bedankt voor uw aanvraag bij Dakralux. We hebben uw bericht goed ontvangen.",
    "We bekijken uw situatie en nemen normaal binnen één werkdag contact met u op.",
    "",
    "Met vriendelijke groet,",
    "Team Dakralux",
    "https://dakralux.be",
  ].join("\n");

  try {
    await resend.emails.send({
      from: FROM,
      to: lead.email,
      replyTo: REPLY_TO,
      subject: "Uw offerteaanvraag bij Dakralux — ontvangen",
      text: customerText,
    });
  } catch (err) {
    console.error("Resend klant:", err);
  }

  if (!NOTIFY) return;

  const dupLabel = isDuplicate ? " [MOGELIJKE DUBBEL]" : "";
  const ownerText = [
    `Nieuwe lead${dupLabel} via dakralux.be`,
    "",
    `Naam: ${lead.naam}`,
    `E-mail: ${lead.email}`,
    `Telefoon: ${lead.telefoon || "—"}`,
    `Gemeente: ${lead.gemeente || "—"}`,
    `Dienst: ${lead.dienst || "—"}`,
    `Urgentie: ${lead.urgentie || "—"}`,
    `Score: ${score}/100 | Prioriteit: ${priority}`,
    `Volgende actie: ${nextAction}`,
    "",
    `Bericht:`,
    lead.bericht ?? "",
    "",
    `Airtable record: ${recordId}`,
  ].join("\n");

  try {
    await resend.emails.send({
      from: FROM,
      to: NOTIFY,
      replyTo: lead.email,
      subject: `${isDuplicate ? "⚠️ " : ""}Nieuwe lead: ${lead.naam} (${priority})`,
      text: ownerText,
    });
  } catch (err) {
    console.error("Resend eigenaar:", err);
  }
}

export async function sendOverdueReminderEmail(leads: {
  naam: string;
  email: string;
  volgendeActie: string;
  prioriteit?: string;
  recordId: string;
}[]): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const notify = NOTIFY;
  if (!apiKey || !notify || leads.length === 0) return;

  const resend = new Resend(apiKey);
  const lines = leads.map(
    (l, i) =>
      `${i + 1}. ${l.naam} (${l.email}) — prioriteit ${l.prioriteit ?? "?"} — was gepland op ${l.volgendeActie}`
  );

  const text = [
    `Goedemorgen,`,
    "",
    `Er ${leads.length === 1 ? "staat" : "staan"} ${leads.length} lead(s) met een verstreken opvolgdatum:`,
    "",
    ...lines,
    "",
    "Open Airtable → view “🔥 Vandaag opvolgen” om ze af te werken.",
  ].join("\n");

  try {
    await resend.emails.send({
      from: FROM,
      to: notify,
      subject: `⏰ ${leads.length} lead(s) wachten op opvolging — Dakralux`,
      text,
    });
  } catch (err) {
    console.error("Resend herinnering:", err);
  }
}
