/** Officiële hCaptcha test keys — werken op localhost (zie https://docs.hcaptcha.com) */
const TEST_SITE_KEY = "10000000-ffff-ffff-ffff-000000000001";
const TEST_SECRET_KEY = "0x0000000000000000000000000000000000000000";

function useTestKeys(): boolean {
  if (process.env.HCAPTCHA_FORCE_PRODUCTION === "true") return false;
  if (process.env.NODE_ENV === "development") return true;
  return process.env.NEXT_PUBLIC_HCAPTCHA_USE_TEST_KEYS === "true";
}

export function getHcaptchaSiteKey(): string {
  if (useTestKeys()) return TEST_SITE_KEY;
  return process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? "";
}

export function getHcaptchaSecretKey(): string {
  if (useTestKeys()) return TEST_SECRET_KEY;
  return process.env.HCAPTCHA_SECRET_KEY ?? "";
}

export function isHcaptchaTestMode(): boolean {
  return useTestKeys();
}
