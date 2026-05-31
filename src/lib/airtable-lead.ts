export const AIRTABLE_BRON_WEBSITE = "Website formulier";
export const AIRTABLE_STATUS_NIEUW = "Nieuw";

export const AIRTABLE_BASE_ID = "applKDA39gzFOp7Bm";
export const AIRTABLE_TABLE_ID = "tblgMffABLKZQmxkY";

export function getAirtableLeadsUrl(): string | null {
  const apiKey = process.env.AIRTABLE_API_KEY;
  if (!apiKey) return null;

  const table =
    process.env.AIRTABLE_TABLE_ID?.trim() ||
    process.env.AIRTABLE_TABLE_NAME?.trim() ||
    AIRTABLE_TABLE_ID;

  const baseId = process.env.AIRTABLE_BASE_ID?.trim() || AIRTABLE_BASE_ID;

  return `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`;
}
