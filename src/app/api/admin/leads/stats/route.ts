import { NextResponse } from "next/server";
import { isAdminAuthorized } from "@/lib/admin-auth";
import { getLeadDashboardStats } from "@/lib/lead-stats";

export const runtime = "nodejs";

export async function GET(req: Request) {
  if (!isAdminAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const stats = await getLeadDashboardStats();
    return NextResponse.json(stats);
  } catch (err) {
    console.error("Lead stats:", err);
    return NextResponse.json({ error: "Stats ophalen mislukt" }, { status: 500 });
  }
}
