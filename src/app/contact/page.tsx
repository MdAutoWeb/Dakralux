import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-[#1E1E1E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#CADA44]">
              Contact Dakralux
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Neem contact op voor een gratis offerte of advies voor uw dakproject in Brugge, Damme, Oostkamp, Knokke-Heist of omliggende gemeenten. Wij staan klaar om u te helpen met al uw dakwerkzaamheden.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form (client component) */}
            <ContactForm />

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Contactgegevens
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#CADA44] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Telefoon</h3>
                    <a href="tel:+32472274709" className="text-white hover:text-[#CADA44] transition-colors mb-1 block">
                      0472 27 47 09
                    </a>
                    <p className="text-sm text-white">Ma-Vr: 7:00 - 17:00</p>
                    <p className="text-sm text-white">Za: 8:00 - 12:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#CADA44] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">E-mail</h3>
                    <a href="mailto:dakralux@gmail.com" className="text-white hover:text-[#CADA44] transition-colors mb-1 block">
                      dakralux@gmail.com
                    </a>
                    <p className="text-sm text-white">Wij reageren binnen 24 uur</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#CADA44] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Adres</h3>
                    <p className="text-white mb-1">Brieversweg 19</p>
                    <p className="text-white mb-1">8340 Sijsele, Belgium</p>
                    <p className="text-sm text-white">Op afspraak</p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Brieversweg+19+8340+Sijsele"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CADA44] hover:text-[#B8C73A] text-sm mt-2 inline-block"
                    >
                      Route berekenen →
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#CADA44] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Openingstijden</h3>
                    <div className="text-white space-y-1">
                      <p>Maandag - Vrijdag: 7:00 - 17:00</p>
                      <p>Zaterdag: 8:00 - 12:00</p>
                      <p>Zondag: Gesloten</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps embed */}
                <div className="mt-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=Dakralux,+Brieversweg+19,+8340+Sijsele,+Belgium&output=embed&z=15"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dakralux locatie - Brieversweg 19, Sijsele"
                  ></iframe>
                </div>

                {/* Service Area */}
                <div className="mt-4 bg-[#1E1E1E] rounded-lg p-6 border border-[#CADA44]">
                  <h3 className="text-xl font-semibold text-white mb-4">Werkgebied</h3>
                  <p className="text-white mb-4">
                    Dakralux voert dakwerken uit in Brugge en de omliggende gemeenten:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-white">
                    <p>• Brugge</p>
                    <p>• Damme</p>
                    <p>• Oostkamp</p>
                    <p>• Knokke-Heist</p>
                    <p>• Blankenberge</p>
                    <p>• Zeebrugge</p>
                    <p>• Jabbeke</p>
                    <p>• Zedelgem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Veelgestelde Vragen
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Hoe snel kan ik een offerte verwachten?
              </h3>
              <p className="text-white">
                Wij streven ernaar om binnen 24 uur na uw aanvraag contact met u op te nemen en een afspraak in te plannen voor een gratis inspectie en offerte. Dit geldt voor alle dakprojecten in Brugge, Damme, Oostkamp en omliggende gemeenten.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Bieden jullie garantie op het werk?
              </h3>
              <p className="text-white">
                Ja, wij bieden uitgebreide garantie op al ons werk. Voor dakbedekking geven wij 10 jaar garantie op materiaal en arbeid. Voor reparaties geven wij minimaal 2 jaar garantie.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Werken jullie ook in het weekend?
              </h3>
              <p className="text-white">
                Voor spoedgevallen zijn wij 24/7 bereikbaar via{" "}
                <a href="tel:+32472274709" className="text-[#CADA44] hover:text-[#B8C73A]">
                  0472 27 47 09
                </a>
                . Reguliere werkzaamheden plannen wij in overleg. Op zaterdag zijn wij bereikbaar van 8:00 tot 12:00.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
