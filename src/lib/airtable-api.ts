export function getAirtableConfig(): { apiKey: string; url: string } | null {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID?.trim() || "applKDA39gzFOp7Bm";
  const table =
    process.env.AIRTABLE_TABLE_ID?.trim() ||
    process.env.AIRTABLE_TABLE_NAME?.trim() ||
    "tblgMffABLKZQmxkY";

  if (!apiKey) return null;

  return {
    apiKey,
    url: `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
  };
}

export async function airtableFetch<T>(
  path: string,
  init?: RequestInit
): Promise<{ ok: boolean; data?: T; status: number; text?: string }> {
  const config = getAirtableConfig();
  if (!config) return { ok: false, status: 500 };

  const url = path.startsWith("http") ? path : `${config.url}${path}`;

  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  const text = await res.text();
  if (!res.ok) return { ok: false, status: res.status, text };

  try {
    return { ok: true, status: res.status, data: JSON.parse(text) as T };
  } catch {
    return { ok: false, status: res.status, text };
  }
}

export type AirtableRecord = {
  id: string;
  createdTime?: string;
  fields: Record<string, unknown>;
};

export type AirtableListResponse = {
  records: AirtableRecord[];
  offset?: string;
};

export async function listAllRecords(
  params?: Record<string, string>
): Promise<AirtableRecord[]> {
  const config = getAirtableConfig();
  if (!config) return [];

  const records: AirtableRecord[] = [];
  let offset: string | undefined;

  do {
    const search = new URLSearchParams(params);
    if (offset) search.set("offset", offset);
    const qs = search.toString();
    const path = qs ? `?${qs}` : "";

    const result = await airtableFetch<AirtableListResponse>(path);
    if (!result.ok || !result.data) break;

    records.push(...result.data.records);
    offset = result.data.offset;
  } while (offset);

  return records;
}
