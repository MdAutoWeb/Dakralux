#!/usr/bin/env node
/**
 * Voegt CRM-velden toe aan de Dakralux Airtable-tabel via de Meta API.
 * Vereist: AIRTABLE_API_KEY met scope schema.bases:write
 *
 * Gebruik: AIRTABLE_API_KEY=pat... node scripts/add-airtable-fields.mjs
 */

const BASE_ID = "applKDA39gzFOp7Bm";
const TABLE_ID = "tblgMffABLKZQmxkY";

const FIELDS = [
  { name: "Gemeente", type: "singleLineText" },
  {
    name: "Urgentie",
    type: "singleSelect",
    options: {
      choices: [
        { name: "Dringend (lek/schade)" },
        { name: "Binnen 3 maanden" },
        { name: "Planbaar" },
        { name: "Gewoon info" },
      ],
    },
  },
  {
    name: "Prioriteit",
    type: "singleSelect",
    options: {
      choices: [{ name: "Hoog" }, { name: "Normaal" }, { name: "Laag" }],
    },
  },
  {
    name: "Volgende actie",
    type: "date",
    options: { dateFormat: { name: "european", format: "D/M/YYYY" } },
  },
  { name: "Notities", type: "multilineText" },
  {
    name: "Bron",
    type: "singleSelect",
    options: { choices: [{ name: "Website formulier" }] },
  },
  { name: "Lead score", type: "number", options: { precision: 0 } },
];

const apiKey = process.env.AIRTABLE_API_KEY;
if (!apiKey) {
  console.error("Zet AIRTABLE_API_KEY in de omgeving.");
  process.exit(1);
}

const baseUrl = `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables/${TABLE_ID}/fields`;

for (const field of FIELDS) {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(field),
  });

  const text = await res.text();
  if (res.ok) {
    console.log(`✓ ${field.name}`);
  } else if (text.includes("DUPLICATE") || text.includes("already exists")) {
    console.log(`– ${field.name} (bestaat al)`);
  } else {
    console.error(`✗ ${field.name}: ${res.status} ${text}`);
  }
}
