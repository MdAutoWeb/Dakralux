import { NextRequest, NextResponse } from "next/server";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, e-mail en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    await base(process.env.AIRTABLE_TABLE_NAME!).create([
      {
        fields: {
          Naam: name,
          Email: email,
          Telefoon: phone || "",
          Dienst: service || "",
          Bericht: message,
          Status: "Nieuw",
        },
      },
    ]);

    return NextResponse.json({ success: true, message: "Verzonden!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Fout bij verzenden naar Airtable." },
      { status: 500 }
    );
  }
}
