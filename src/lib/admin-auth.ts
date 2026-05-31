export function isAdminAuthorized(req: Request): boolean {
  const secret = process.env.LEADS_ADMIN_SECRET?.trim();
  if (!secret) return false;

  const auth = req.headers.get("authorization");
  if (auth === `Bearer ${secret}`) return true;

  const url = new URL(req.url);
  const key = url.searchParams.get("key");
  return key === secret;
}

export function isCronAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET?.trim();
  if (!secret) return false;
  return req.headers.get("authorization") === `Bearer ${secret}`;
}
