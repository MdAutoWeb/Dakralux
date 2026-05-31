import { NextResponse } from "next/server";
import { getHcaptchaSecretKey } from "@/lib/hcaptcha-config";
import { processLead } from "@/lib/lead-process";
import { URGENTIE_OPTIONS } from "@/lib/lead-scoring";

export const runtime = "nodejs";

type ProcessBody = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  gemeente?: string;
  urgentie?: string;
  hcaptchaToken?: string;
};

async function verifyHcaptcha(token: string): Promise<boolean> {
  const secret = getHcaptchaSecretKey();
  if (!secret) {
    console.error("HCAPTCHA_SECRET_KEY ontbreekt");
    return false;
  }

  const res = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

function isValidOption(value: string | undefined, options: readonly string[]): boolean {
  if (!value?.trim()) return true;
  return options.includes(value.trim());
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ProcessBody;

    if (!body.hcaptchaToken?.trim()) {
      return NextResponse.json(
        { error: "Captcha-verificatie is verplicht." },
        { status: 400 }
      );
    }

    const captchaOk = await verifyHcaptcha(body.hcaptchaToken);
    if (!captchaOk) {
      return NextResponse.json(
        { error: "Captcha-verificatie mislukt. Probeer opnieuw." },
        { status: 400 }
      );
    }

    const naam = body.name?.trim();
    const email = body.email?.trim();
    const bericht = body.message?.trim();

    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: "Naam, e-mail en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    const urgentie = body.urgentie?.trim();

    if (!isValidOption(urgentie, URGENTIE_OPTIONS)) {
      return NextResponse.json({ error: "Ongeldige keuze voor urgentie." }, { status: 400 });
    }

    const result = await processLead({
      naam,
      email,
      telefoon: body.phone?.trim(),
      dienst: body.service?.trim(),
      bericht,
      gemeente: body.gemeente?.trim(),
      urgentie,
    });

    return NextResponse.json({
      success: true,
      recordId: result.recordId,
      score: result.score,
      priority: result.priority,
      nextAction: result.nextAction,
      isDuplicate: result.isDuplicate,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "";

    if (message === "AIRTABLE_CREATE_FAILED") {
      return NextResponse.json(
        { error: "Lead kon niet worden opgeslagen." },
        { status: 500 }
      );
    }

    console.error("POST /api/leads/process:", err);
    return NextResponse.json({ error: "Onverwachte serverfout." }, { status: 500 });
  }
}
