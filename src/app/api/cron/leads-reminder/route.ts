import { NextResponse } from "next/server";
import { isCronAuthorized } from "@/lib/admin-auth";
import { processOverdueLeadReminders } from "@/lib/lead-reminders";

export const runtime = "nodejs";

export async function GET(req: Request) {
  if (!isCronAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await processOverdueLeadReminders();
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    console.error("Cron leads-reminder:", err);
    return NextResponse.json({ error: "Cron failed" }, { status: 500 });
  }
}
