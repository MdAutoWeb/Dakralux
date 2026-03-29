import type { Metadata } from "next";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Diensten | Dakwerken in Brugge en omgeving | Dakralux",
  description:
    "Dakralux voert alle dakwerken uit in Brugge, Damme, Oostkamp, Knokke-Heist en omgeving. Dakbedekking, dakisolatie, dakrenovatie, hellende daken, Velux dakramen en dakonderhoud. Vraag uw offerte aan.",
  alternates: {
    canonical: "https://www.dakralux.be/diensten",
  },
};

export default function DienstenPage() {
  const services = [
    {
      title: "Dakbedekking",
      description: "Hoogwaardige materialen, jarenlange garantie",
      features: [
        "Pannendaken (keramiek, beton)",
        "Leien daken",
        "Bitumineuze dakbedekking",
        "EPDM rubber dakbedekking",
        "Zinken dakbedekking",
        "10 jaar garantie op materiaal en arbeid",
      ],
      image: "/Dakwerken.jpg",
      alt: "Dakbedekking Brugge - Nieuwe dakbedekking door Dakralux",
    },
    {
      title: "Dakisolatie",
      description: "Energiebesparend, comfortabel woonklimaat",
      features: [
        "Dakisolatie tussen en op de spanten",
        "Vloerisolatie",
        "Energielabel verbetering",
        "Subsidie aanvraag ondersteuning",
        "Rc waarde tot 8.0",
      ],
      image: "/Isolatie.webp",
      alt: "Dakisolatie Brugge - Professionele dakisolatie door Dakralux",
    },
    {
      title: "Velux Dakramen",
      description: "Meer licht en lucht in uw huis",
      features: [
        "Velux dakramen installatie",
        "Diverse maten en types",
        "Elektrische bediening mogelijk",
        "Zonwering en rolluiken",
        "Garantie op installatie",
        "Onderhoud en reparatie",
      ],
      image: "/Velux.jpg",
      alt: "Velux dakramen Brugge - Velux dakramen installatie door Dakralux",
    },
    {
      title: "Hellende Daken",
      description: "Complete renovatie en aanleg van hellende daken",
      features: [
        "Renovatie van hellende daken",
        "Pannendaken (keramiek en beton)",
        "Leien en zinken daken",
        "Onderdakfolie en tengels",
        "Goten en afwatering",
        "10 jaar garantie op materiaal en arbeid",
      ],
      image: "/Platte daken.webp",
      alt: "Hellende daken Brugge - Renovatie hellende daken door Dakralux",
    },
    {
      title: "Dakonderhoud",
      description: "Preventief onderhoud voor langere levensduur",
      features: [
        "Jaarlijkse dakinspectie",
        "Dakgoot reiniging",
        "Mos en algen verwijdering",
        "Kleine reparaties",
        "Onderhoudscontract mogelijk",
        "Rapportage met foto's",
      ],
      image: "/Merlo.webp",
      alt: "Dakonderhoud Brugge - Preventief dakonderhoud door Dakralux",
    },
  ];

  const steps = [
    { num: "01", title: "Contact", body: "U neemt contact op via telefoon, e-mail of het contactformulier." },
    { num: "02", title: "Inspectie", body: "Wij komen langs voor een gratis inspectie en advies op maat." },
    { num: "03", title: "Offerte", body: "U ontvangt binnen 24 uur een heldere offerte, zonder verrassingen." },
    { num: "04", title: "Uitvoering", body: "Ons team voert het werk vakkundig uit met kwaliteitsgarantie." },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E]">

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#181818] to-[#1E1E1E]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-4">
            Wat wij doen
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Dakwerken in Brugge<br />
            <span className="text-[#CADA44]">en omgeving</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Van dakbedekking tot isolatie en Velux dakramen — Dakralux levert vakwerk
            in Brugge, Damme, Oostkamp, Knokke-Heist en omliggende gemeenten.
          </p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-[#242424] rounded-2xl overflow-hidden border border-white/5 hover:border-[#CADA44]/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-[#242424]/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h2 className="text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="text-white/60 text-sm mt-0.5">{service.description}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-[#CADA44] text-xs font-medium tracking-widest uppercase mb-4">
                    Wat wij bieden
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#CADA44]/10 flex items-center justify-center mt-0.5">
                          <CheckCircle className="h-3.5 w-3.5 text-[#CADA44]" />
                        </div>
                        <span className="text-white/75 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#CADA44]/10 hover:bg-[#CADA44] text-[#CADA44] hover:text-[#1E1E1E] border border-[#CADA44]/30 hover:border-[#CADA44] rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300"
                  >
                    <Phone className="h-4 w-4" />
                    Offerte aanvragen
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-3">
              Werkwijze
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Hoe wij werken
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Van eerste contact tot oplevering — zo verloopt uw dakproject bij Dakralux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-white/10" />
                )}
                <div className="bg-[#242424] rounded-2xl p-6 border border-white/5 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#CADA44]/10 border border-[#CADA44]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#CADA44] font-bold text-lg">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.body}</p>
                </div>
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
              Klaar om te beginnen?
            </h2>
            <p className="text-[#1E1E1E]/70 text-lg">
              Gratis offerte binnen 24 uur. Geen verplichtingen.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:+32472274709">
              <button className="flex items-center gap-2 bg-[#1E1E1E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors whitespace-nowrap">
                <Phone className="h-5 w-5" />
                0472 27 47 09
              </button>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-[#1E1E1E] text-[#1E1E1E] font-semibold px-6 py-3 rounded-lg hover:bg-[#1E1E1E] hover:text-[#CADA44] transition-all duration-300 whitespace-nowrap"
            >
              Offerte aanvragen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
