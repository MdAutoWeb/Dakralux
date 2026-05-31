import { NextResponse } from "next/server";

/** Legacy endpoint — doorverwijzen naar /api/leads/process */
export async function POST(request: Request) {
  const body = await request.text();
  const url = new URL(request.url);
  const processUrl = `${url.origin}/api/leads/process`;

  const res = await fetch(processUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
