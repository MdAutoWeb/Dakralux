import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Valideer verplichte velden
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, email en bericht zijn verplicht" },
        { status: 400 }
      );
    }

    // Email validatie
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ongeldig email adres" },
        { status: 400 }
      );
    }

    // Airtable API configuratie
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Leads";

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error("Airtable configuratie ontbreekt:", {
        hasApiKey: !!AIRTABLE_API_KEY,
        hasBaseId: !!AIRTABLE_BASE_ID,
        tableName: AIRTABLE_TABLE_NAME,
      });
      return NextResponse.json(
        { error: "Server configuratie fout - Airtable niet geconfigureerd" },
        { status: 500 }
      );
    }

    // Airtable API call
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Naam: name.trim(),
            Email: email.trim().toLowerCase(),
            Telefoon: phone?.trim() || "",
            Dienst: service || "",
            Bericht: message.trim(),
            Status: "Nieuw",
            Datum: new Date().toISOString(),
            Bron: "Website Contactformulier",
            IP:
              request.headers.get("x-forwarded-for") ||
              request.headers.get("x-real-ip") ||
              "unknown",
            UserAgent: request.headers.get("user-agent") || "unknown",
          },
        }),
      }
    );

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.text();
      console.error("Airtable API error:", {
        status: airtableResponse.status,
        statusText: airtableResponse.statusText,
        error: errorData,
        url: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      });

      // Specifieke error messages
      if (airtableResponse.status === 401) {
        return NextResponse.json(
          { error: "Authenticatie fout - controleer API key" },
          { status: 500 }
        );
      } else if (airtableResponse.status === 404) {
        return NextResponse.json(
          { error: "Tabel niet gevonden - controleer Base ID en tabel naam" },
          { status: 500 }
        );
      } else if (airtableResponse.status === 422) {
        return NextResponse.json(
          { error: "Ongeldige data - controleer kolomnamen in Airtable" },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          error: `Fout bij het opslaan van gegevens (${airtableResponse.status})`,
        },
        { status: 500 }
      );
    }

    const result = await airtableResponse.json();
    console.log("Lead opgeslagen in Airtable:", {
      id: result.id,
      name: name,
      email: email,
      service: service,
    });

    return NextResponse.json({
      success: true,
      message: "Uw bericht is succesvol verzonden!",
      leadId: result.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Er is een fout opgetreden. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
