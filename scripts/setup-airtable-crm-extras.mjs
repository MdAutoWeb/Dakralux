#!/usr/bin/env node
/** Extra CRM-velden: Dubbel, Herinnering verstuurd */

const BASE_ID = "applKDA39gzFOp7Bm";
const TABLE_ID = "tblgMffABLKZQmxkY";

const FIELDS = [
  { name: "Dubbel", type: "checkbox", options: { icon: "check", color: "yellowBright" } },
  {
    name: "Herinnering verstuurd",
    type: "checkbox",
    options: { icon: "check", color: "grayBright" },
  },
];

const apiKey = process.env.AIRTABLE_API_KEY;
if (!apiKey) {
  console.error("Zet AIRTABLE_API_KEY");
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
  if (res.ok) console.log(`✓ ${field.name}`);
  else if (text.includes("DUPLICATE") || text.includes("already exists"))
    console.log(`– ${field.name} (bestaat al)`);
  else console.error(`✗ ${field.name}:`, res.status, text);
}
