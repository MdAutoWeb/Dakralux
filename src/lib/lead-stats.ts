import { listAllRecords } from "@/lib/airtable-api";

export type LeadDashboardStats = {
  total: number;
  thisWeek: number;
  thisMonth: number;
  byStatus: Record<string, number>;
  byPriority: Record<string, number>;
  duplicates: number;
  overdue: number;
  conversionRate: number;
  averageScore: number;
};

function weekStart(): Date {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function monthStart(): Date {
  const d = new Date();
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function getLeadDashboardStats(): Promise<LeadDashboardStats> {
  const records = await listAllRecords();

  const week0 = weekStart();
  const month0 = monthStart();
  const today = todayIso();

  const byStatus: Record<string, number> = {};
  const byPriority: Record<string, number> = {};
  let duplicates = 0;
  let overdue = 0;
  let done = 0;
  let scoreSum = 0;
  let scoreCount = 0;
  let thisWeek = 0;
  let thisMonth = 0;

  for (const rec of records) {
    const f = rec.fields;
    const created = rec.createdTime ? new Date(rec.createdTime) : null;
    if (created && created >= week0) thisWeek++;
    if (created && created >= month0) thisMonth++;

    const status = String(f.Status ?? "Onbekend");
    byStatus[status] = (byStatus[status] ?? 0) + 1;
    if (status === "Done") done++;

    const priority = String(f.Prioriteit ?? "Geen");
    byPriority[priority] = (byPriority[priority] ?? 0) + 1;

    if (f.Dubbel === true) duplicates++;

    const next = String(f["Volgende actie"] ?? "");
    if (next && next < today && status !== "Done") overdue++;

    const score = typeof f["Lead score"] === "number" ? f["Lead score"] : null;
    if (score !== null) {
      scoreSum += score;
      scoreCount++;
    }
  }

  const total = records.length;
  const conversionRate = total > 0 ? Math.round((done / total) * 100) : 0;
  const averageScore = scoreCount > 0 ? Math.round(scoreSum / scoreCount) : 0;

  return {
    total,
    thisWeek,
    thisMonth,
    byStatus,
    byPriority,
    duplicates,
    overdue,
    conversionRate,
    averageScore,
  };
}
