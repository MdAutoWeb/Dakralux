"use client";

import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/Button";
import { getHcaptchaSiteKey, isHcaptchaTestMode } from "@/lib/hcaptcha-config";
import { URGENTIE_OPTIONS } from "@/lib/lead-scoring";

export default function ContactForm() {
  const captchaRef = useRef<HCaptcha>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    gemeente: "",
    urgentie: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const siteKey = getHcaptchaSiteKey();
  const captchaTestMode = isHcaptchaTestMode();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Los de captcha op voordat u het formulier verstuurt.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/leads/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, hcaptchaToken: captchaToken }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          gemeente: "",
          urgentie: "",
          message: "",
        });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(result.error || "Er is een fout opgetreden");
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      }
    } catch {
      setError("Er is een fout opgetreden. Probeer het later opnieuw.");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    "Dakbedekking",
    "Dakisolatie",
    "Velux Dakramen",
    "Hellende Daken",
    "Dakonderhoud",
    "Anders/Onbekend",
  ];

  const canSubmit = !isLoading && !!captchaToken;

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">
        Vraag een Offerte Aan voor Brugge en Omgeving
      </h2>

      {isSubmitted ? (
        <div className="bg-[#CADA44] border border-[#CADA44] rounded-lg p-6 text-center">
          <CheckCircle className="h-12 w-12 text-[#1E1E1E] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">Bedankt!</h3>
          <p className="text-[#1E1E1E]">
            Uw bericht is verzonden. Wij nemen binnen 24 uur contact met u op.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-600 border border-red-600 rounded-lg p-4 text-center">
              <p className="text-white">{error}</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Naam *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#CADA44] rounded-md focus:ring-2 focus:ring-[#CADA44] focus:border-[#CADA44] text-white placeholder-white"
                placeholder="Uw volledige naam"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#CADA44] rounded-md focus:ring-2 focus:ring-[#CADA44] focus:border-[#CADA44] text-white placeholder-white"
                placeholder="uw@email.be"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Telefoon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#CADA44] rounded-md focus:ring-2 focus:ring-[#CADA44] focus:border-[#CADA44] text-white placeholder-white"
                placeholder="0472 12 34 56"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                Type Dienst
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#CADA44] rounded-md focus:ring-2 focus:ring-[#CADA44] focus:border-[#CADA44] text-white"
              >
                <option value="">Selecteer een dienst</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="gemeente" className="block text-sm font-medium text-white mb-2">
              Gemeente
            </label>
            <input
              type="text"
              id="gemeente"
              name="gemeente"
              value={formData.gemeente}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#CADA44] rounded-md focus:ring-2 focus:ring-[#CADA44] focus:border-[#CADA44] text-white placeholder-white"
              placeholder="Bv. Brugge, Knokke, Damme..."
            />
          </div>

          <div>
            <label htmlFor="urgentie" className="block text-sm font-medium text-white mb-2">
              Urgentie
            </label>
            <select
              id="urgentie"
              name="urgentie"
              value={formData.urgentie}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#CADA44] rounded-md focus:ring-2 focus:ring-[#CADA44] focus:border-[#CADA44] text-white"
            >
              <option value="">Hoe snel heeft u een oplossing nodig?</option>
              {URGENTIE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Bericht *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#CADA44] rounded-md focus:ring-2 focus:ring-[#CADA44] focus:border-[#CADA44] text-white placeholder-white"
              placeholder="Beschrijf uw situatie en wat u nodig heeft..."
            ></textarea>
          </div>

          {siteKey ? (
            <div className="flex flex-col items-center gap-2">
              {captchaTestMode && (
                <p className="text-xs text-white/70 text-center">
                  Lokale testmodus: captcha werkt op localhost (hCaptcha test keys).
                </p>
              )}
              <HCaptcha
                ref={captchaRef}
                sitekey={siteKey}
                onVerify={setCaptchaToken}
                onExpire={() => setCaptchaToken(null)}
              />
            </div>
          ) : (
            <p className="text-sm text-amber-300 text-center">
              Captcha is niet geconfigureerd (NEXT_PUBLIC_HCAPTCHA_SITE_KEY ontbreekt).
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#CADA44] text-[#1E1E1E] hover:bg-[#B8C73A] font-semibold disabled:opacity-50"
            disabled={!canSubmit || !siteKey}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1E1E1E] mr-2"></div>
                Verzenden...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Verstuur Bericht
              </>
            )}
          </Button>

          <p className="text-sm text-white text-center">
            * Verplichte velden. Wij nemen binnen 24 uur contact met u op voor uw dakproject in
            Brugge of omgeving.
          </p>
        </form>
      )}
    </div>
  );
}
