import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Airtable API configuratie
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Leads";

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      return NextResponse.json(
        {
          status: "error",
          message: "Airtable configuratie ontbreekt",
          details: {
            hasApiKey: !!AIRTABLE_API_KEY,
            hasBaseId: !!AIRTABLE_BASE_ID,
            tableName: AIRTABLE_TABLE_NAME,
          },
        },
        { status: 500 }
      );
    }

    // Test Airtable connectie door een lege query te doen
    const testResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}?maxRecords=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!testResponse.ok) {
      const errorData = await testResponse.text();
      return NextResponse.json(
        {
          status: "error",
          message: "Airtable API error",
          details: {
            status: testResponse.status,
            error: errorData,
            url: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
          },
        },
        { status: 500 }
      );
    }

    const testData = await testResponse.json();

    return NextResponse.json({
      status: "success",
      message: "Airtable connectie werkt!",
      details: {
        baseId: AIRTABLE_BASE_ID,
        tableName: AIRTABLE_TABLE_NAME,
        recordCount: testData.records?.length || 0,
        hasRecords: (testData.records?.length || 0) > 0,
      },
    });
  } catch (error) {
    console.error("Airtable test error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Er is een fout opgetreden bij het testen van Airtable",
        details: {
          error: error instanceof Error ? error.message : "Unknown error",
        },
      },
      { status: 500 }
    );
  }
}
