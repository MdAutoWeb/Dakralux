"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(result.error || "Er is een fout opgetreden");
      }
    } catch (error) {
      setError("Er is een fout opgetreden. Probeer het later opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "Dakbedekking",
    "Dakisolatie",
    "Velux Dakramen",
    "Platte Daken",
    "Dakonderhoud",
    "Anders/Onbekend",
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      {/* Hero Section */}
      <section className="bg-[#1E1E1E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#CADA44]">
              Contact
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Neem contact op voor een gratis offerte of advies. Wij staan klaar
              om u te helpen met al uw dakwerkzaamheden.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Vraag een Offerte Aan
              </h2>

              {isSubmitted ? (
                <div className="bg-[#CADA44] border border-[#CADA44] rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-[#1E1E1E] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">
                    Bedankt!
                  </h3>
                  <p className="text-[#1E1E1E]">
                    Uw bericht is verzonden. Wij nemen binnen 24 uur contact met
                    u op.
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
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2"
                      >
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2"
                      >
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
                        placeholder="uw@email.nl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#CADA44] rounded-md focus:ring-2 focus:ring-[#CADA44] focus:border-[#CADA44] text-white placeholder-white"
                        placeholder="06 12345678"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-white mb-2"
                      >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#CADA44] text-[#1E1E1E] hover:bg-[#B8C73A] font-semibold"
                    disabled={isLoading}
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
                    * Verplichte velden. Wij nemen binnen 24 uur contact met u
                    op.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Contactgegevens
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#CADA44] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Telefoon
                    </h3>
                    <p className="text-white mb-1">0472 27 47 09</p>
                    <p className="text-sm text-white">Ma-Vr: 7:00 - 17:00</p>
                    <p className="text-sm text-white">Za: 8:00 - 12:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#CADA44] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      E-mail
                    </h3>
                    <p className="text-white mb-1">dakralux@gmail.com</p>
                    <p className="text-sm text-white">
                      Wij reageren binnen 24 uur
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#CADA44] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Adres
                    </h3>
                    <p className="text-white mb-1">Brieversweg 19</p>
                    <p className="text-white mb-1">8340 Sijsele, Belgium</p>
                    <p className="text-sm text-white">Op afspraak</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#CADA44] mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Openingstijden
                    </h3>
                    <div className="text-white space-y-1">
                      <p>Maandag - Vrijdag: 7:00 - 17:00</p>
                      <p>Zaterdag: 8:00 - 12:00</p>
                      <p>Zondag: Gesloten</p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="mt-12 bg-[#1E1E1E] rounded-lg p-6 border border-[#CADA44]">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Werkgebied
                  </h3>
                  <p className="text-white mb-4">
                    Wij zijn actief in Brugge en omstreken:
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
                Wij streven ernaar om binnen 24 uur na uw aanvraag contact met u
                op te nemen en een afspraak in te plannen voor een gratis
                inspectie en offerte.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Bieden jullie garantie op het werk?
              </h3>
              <p className="text-white">
                Ja, wij bieden uitgebreide garantie op al ons werk. Voor
                dakbedekking geven wij 10 jaar garantie, voor reparaties
                minimaal 2 jaar garantie.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Zijn jullie verzekerd?
              </h3>
              <p className="text-white">
                Absoluut! Wij zijn volledig verzekerd voor aansprakelijkheid en
                hebben een AVB-verzekering. U kunt met een gerust hart zaken met
                ons doen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Werken jullie ook in het weekend?
              </h3>
              <p className="text-white">
                Voor spoedgevallen zijn wij 24/7 bereikbaar. Reguliere
                werkzaamheden plannen wij in overleg, waarbij we ook weekendwerk
                kunnen uitvoeren indien gewenst.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
