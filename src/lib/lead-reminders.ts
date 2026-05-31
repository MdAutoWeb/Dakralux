import { airtableFetch, listAllRecords } from "@/lib/airtable-api";
import { sendOverdueReminderEmail } from "@/lib/lead-email";

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function processOverdueLeadReminders(): Promise<{
  reminded: number;
  skipped: number;
}> {
  const today = todayIso();
  const records = await listAllRecords();

  const overdue = records.filter((rec) => {
    const f = rec.fields;
    if (f.Status === "Done") return false;
    if (f["Herinnering verstuurd"] === true) return false;
    const next = String(f["Volgende actie"] ?? "");
    return next && next < today;
  });

  if (overdue.length === 0) {
    return { reminded: 0, skipped: 0 };
  }

  await sendOverdueReminderEmail(
    overdue.map((rec) => ({
      naam: String(rec.fields.Naam ?? "?"),
      email: String(rec.fields.Email ?? "?"),
      volgendeActie: String(rec.fields["Volgende actie"] ?? ""),
      prioriteit: String(rec.fields.Prioriteit ?? ""),
      recordId: rec.id,
    }))
  );

  let reminded = 0;
  for (const rec of overdue) {
    const patch = await airtableFetch(`/${rec.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        fields: { "Herinnering verstuurd": true },
        typecast: true,
      }),
    });
    if (patch.ok) reminded++;
  }

  return { reminded, skipped: records.length - overdue.length };
}
