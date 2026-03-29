import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Offerte Aanvragen | Dakwerker Brugge | Dakralux",
  description:
    "Neem contact op met Dakralux voor een gratis offerte voor uw dakproject in Brugge, Damme, Oostkamp of Knokke-Heist. Wij reageren binnen 24 uur.",
  alternates: {
    canonical: "https://www.dakralux.be/contact",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hoe snel kan ik een offerte verwachten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wij streven ernaar om binnen 24 uur na uw aanvraag contact met u op te nemen en een afspraak in te plannen voor een gratis inspectie en offerte. Dit geldt voor alle dakprojecten in Brugge, Damme, Oostkamp en omliggende gemeenten.",
      },
    },
    {
      "@type": "Question",
      name: "Bieden jullie garantie op het werk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wij bieden uitgebreide garantie op al ons werk. Voor dakbedekking geven wij 10 jaar garantie op materiaal en arbeid. Voor reparaties geven wij minimaal 2 jaar garantie.",
      },
    },
    {
      "@type": "Question",
      name: "Werken jullie ook in het weekend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voor spoedgevallen zijn wij 24/7 bereikbaar via 0472 27 47 09. Reguliere werkzaamheden plannen wij in overleg. Op zaterdag zijn wij bereikbaar van 8:00 tot 12:00.",
      },
    },
  ],
};

const contactItems = [
  {
    icon: Phone,
    label: "Telefoon",
    primary: "0472 27 47 09",
    secondary: ["Ma-Vr: 7:00 - 17:00", "Za: 8:00 - 12:00"],
    href: "tel:+32472274709",
  },
  {
    icon: Mail,
    label: "E-mail",
    primary: "dakralux@gmail.com",
    secondary: ["Reactie binnen 24 uur"],
    href: "mailto:dakralux@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adres",
    primary: "Brieversweg 19",
    secondary: ["8340 Sijsele, België", "Op afspraak"],
    href: "https://www.google.com/maps/dir/?api=1&destination=Brieversweg+19+8340+Sijsele",
    linkLabel: "Route berekenen →",
  },
  {
    icon: Clock,
    label: "Openingstijden",
    primary: "Ma - Vr: 7:00 - 17:00",
    secondary: ["Zaterdag: 8:00 - 12:00", "Zondag: Gesloten"],
  },
];

const faqs = [
  {
    q: "Hoe snel kan ik een offerte verwachten?",
    a: "Wij streven ernaar om binnen 24 uur na uw aanvraag contact met u op te nemen en een afspraak in te plannen voor een gratis inspectie en offerte. Dit geldt voor alle dakprojecten in Brugge, Damme, Oostkamp en omliggende gemeenten.",
  },
  {
    q: "Bieden jullie garantie op het werk?",
    a: "Ja, wij bieden uitgebreide garantie op al ons werk. Voor dakbedekking geven wij 10 jaar garantie op materiaal en arbeid. Voor reparaties geven wij minimaal 2 jaar garantie.",
  },
  {
    q: "Werken jullie ook in het weekend?",
    a: "Voor spoedgevallen zijn wij 24/7 bereikbaar via 0472 27 47 09. Reguliere werkzaamheden plannen wij in overleg. Op zaterdag zijn wij bereikbaar van 8:00 tot 12:00.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#181818] to-[#1E1E1E]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-4">
            Neem contact op
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Gratis offerte<br />
            <span className="text-[#CADA44]">binnen 24 uur</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Neem contact op voor een vrijblijvend gesprek over uw dakproject in
            Brugge, Damme, Oostkamp, Knokke-Heist of omliggende gemeenten.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Form */}
            <div>
              <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-4">
                Stuur een bericht
              </p>
              <h2 className="text-3xl font-bold text-white mb-8">
                Vertel ons over uw project
              </h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-4">
                Contactgegevens
              </p>
              <h2 className="text-3xl font-bold text-white mb-8">
                Of bereik ons direct
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactItems.map(({ icon: Icon, label, primary, secondary, href, linkLabel }, i) => (
                  <div key={i} className="bg-[#242424] rounded-2xl p-5 border border-white/5 hover:border-[#CADA44]/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#CADA44]/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-[#CADA44]" />
                    </div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-white font-semibold text-sm hover:text-[#CADA44] transition-colors block mb-1">
                        {primary}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-sm mb-1">{primary}</p>
                    )}
                    {secondary.map((s, j) => (
                      <p key={j} className="text-white/50 text-xs">{s}</p>
                    ))}
                    {linkLabel && href && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#CADA44] text-xs mt-2 hover:text-[#B8C73A]"
                      >
                        {linkLabel}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-white/5">
                <iframe
                  src="https://maps.google.com/maps?q=Dakralux,+Brieversweg+19,+8340+Sijsele,+Belgium&output=embed&z=15"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dakralux locatie - Brieversweg 19, Sijsele"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#181818]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Veelgestelde vragen
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-[#242424] rounded-2xl p-6 border border-white/5">
                <h3 className="text-white font-semibold mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CADA44]/10 flex items-center justify-center text-[#CADA44] text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  {q}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed pl-9">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#CADA44] py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-black rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-black rounded-full translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E1E1E] mb-2">
              Nog vragen?
            </h2>
            <p className="text-[#1E1E1E]/70 text-lg">
              Bel ons direct of stuur een e-mail — wij helpen u graag verder.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:+32472274709">
              <button className="flex items-center gap-2 bg-[#1E1E1E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors whitespace-nowrap">
                <Phone className="h-5 w-5" />
                0472 27 47 09
              </button>
            </a>
            <a href="mailto:dakralux@gmail.com">
              <button className="flex items-center gap-2 border-2 border-[#1E1E1E] text-[#1E1E1E] font-semibold px-6 py-3 rounded-lg hover:bg-[#1E1E1E] hover:text-[#CADA44] transition-all duration-300 whitespace-nowrap">
                <Mail className="h-5 w-5" />
                E-mail sturen
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
