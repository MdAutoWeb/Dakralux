import { NextRequest, NextResponse } from "next/server";
import Airtable from "airtable";

console.log("AIRTABLE_API_KEY:", process.env.AIRTABLE_API_KEY);
console.log("AIRTABLE_BASE_ID:", process.env.AIRTABLE_BASE_ID);
console.log("AIRTABLE_TABLE_NAME:", process.env.AIRTABLE_TABLE_NAME);

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Form data:", body);

    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      console.log("Validation failed");
      return NextResponse.json(
        { error: "Naam, e-mail en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    const record = await base(process.env.AIRTABLE_TABLE_NAME!).create([
      {
        fields: {
          Naam: name,
          Email: email,
          Telefoon: phone || "",
          Dienst: service || "",
          Bericht: message,
          Status: "Todo",
        },
      },
    ]);

    console.log("Airtable record created:", record);
    return NextResponse.json({ success: true, message: "Verzonden!" });
  } catch (error) {
    console.error("Airtable error:", error);
    return NextResponse.json(
      { error: "Fout bij verzenden naar Airtable." },
      { status: 500 }
    );
  }
}
