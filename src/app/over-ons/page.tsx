import type { Metadata } from "next";
import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Users,
  Award,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Over Dakralux | Ervaren dakwerker in regio Brugge | Dakralux",
  description:
    "Dakralux is een betrouwbaar familiebedrijf met meer dan 15 jaar ervaring als dakwerker in Brugge, Damme, Oostkamp, Knokke-Heist en omliggende gemeenten. Specialist in alle dakwerken.",
  alternates: {
    canonical: "https://www.dakralux.be/over-ons",
  },
};

export default function OverOnsPage() {
  const values = [
    {
      icon: Shield,
      title: "Kwaliteit & Garantie",
      description:
        "Wij staan garant voor hoogwaardig vakmanschap en bieden uitgebreide garantie op al ons werk.",
    },
    {
      icon: Users,
      title: "Persoonlijke Service",
      description:
        "Als familiebedrijf kennen wij onze klanten persoonlijk en zorgen voor maatwerk oplossingen.",
    },
    {
      icon: Award,
      title: "Ervaring & Expertise",
      description:
        "Met meer dan 15 jaar ervaring in de dakwerksector zijn wij uw betrouwbare partner voor alle dakwerkzaamheden.",
    },
  ];

  const benefits = [
    "Meer dan 15 jaar ervaring",
    "Volledig verzekerd bedrijf",
    "Gratis offerte binnen 24 uur",
    "Kwaliteitsgarantie op al ons werk",
    "Lokaal bedrijf met persoonlijke service",
    "Transparante prijzen, geen verrassingen",
  ];

  const teamMembers = [
    {
      name: "Robby Seynaeve",
      role: "Eigenaar & Dakwerker",
      initials: "RS",
      description:
        "Met meer dan 15 jaar ervaring in de dakwerksector leidt Robby het team met passie voor vakmanschap.",
    },
    {
      name: "Team Dakralux",
      role: "Vakbekwame Dakwerkers",
      initials: "DX",
      description:
        "Ons ervaren team van vakbekwame dakwerkers zorgt voor professionele uitvoering van elk project.",
    },
  ];

  const locations = [
    "Brugge", "Damme", "Oostkamp", "Knokke-Heist",
    "Blankenberge", "Zeebrugge", "Jabbeke", "Zedelgem",
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E]">

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#181818] to-[#1E1E1E]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-4">
            Wie zijn wij
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Over <span className="text-[#CADA44]">Dakralux</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Een dynamisch familiebedrijf dat elke opdracht tot een goed einde brengt —
            met vakmanschap, eerlijkheid en persoonlijke service.
          </p>
        </div>
      </section>

      {/* ── COMPANY STORY ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-4">
                Ons verhaal
              </p>
              <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                Passie voor dakwerk<br />
                <span className="text-white/60 font-normal text-2xl">al meer dan 15 jaar</span>
              </h2>
              <div className="space-y-5 text-white/70 leading-relaxed">
                <p>
                  Dakralux is ontstaan uit de passie voor vakmanschap en de wens om kwaliteitsvolle
                  dakwerkzaamheden aan te bieden in de regio Brugge. Wat begon als een kleine
                  eenmanszaak is uitgegroeid tot een betrouwbaar familiebedrijf dat dakwerken
                  uitvoert in Brugge, Damme, Oostkamp, Knokke-Heist, Blankenberge, Zeebrugge,
                  Jabbeke en Zedelgem.
                </p>
                <p>
                  Wij geloven dat een dak meer is dan alleen bescherming tegen de elementen.
                  Het is de kroon op uw huis en verdient de beste zorg en aandacht. Daarom werken
                  wij uitsluitend met hoogwaardige materialen en moderne technieken.
                </p>
                <p>
                  Onze klanten zijn niet alleen opdrachtgevers, maar partners. Wij luisteren
                  naar uw wensen en adviseren u over de beste oplossingen voor uw situatie.
                </p>
              </div>
            </div>

            {/* Glass benefit card */}
            <div className="bg-[#242424] rounded-2xl p-8 border border-white/5">
              <p className="text-[#CADA44] text-xs font-medium tracking-widest uppercase mb-6">
                Waarom kiezen voor Dakralux?
              </p>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CADA44]/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#CADA44]" />
                    </div>
                    <span className="text-white/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-3">
              Onze waarden
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Waar wij voor staan
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Wat ons drijft en wat u kunt verwachten van Dakralux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="bg-[#242424] rounded-2xl p-8 border border-white/5 hover:border-[#CADA44]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#CADA44]/10 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-[#CADA44]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-3">
              Het team
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              De mensen achter Dakralux
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Vakbekwame professionals met passie voor hun werk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-[#242424] rounded-2xl p-8 border border-white/5 text-center">
                <div className="w-20 h-20 rounded-2xl bg-[#CADA44]/10 border border-[#CADA44]/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-[#CADA44] font-bold text-xl">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#CADA44] text-sm font-medium mb-4">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-3">
              Werkgebied
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Actief in de regio Brugge
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Dakralux voert dakwerken uit in Brugge en de omliggende gemeenten in West-Vlaanderen.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {locations.map((loc, i) => (
              <div key={i} className="bg-[#242424] rounded-xl p-4 border border-white/5 flex flex-col items-center gap-2 hover:border-[#CADA44]/30 transition-colors">
                <MapPin className="h-5 w-5 text-[#CADA44]" />
                <span className="text-white font-medium text-sm">{loc}</span>
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
              Klaar om samen te werken?
            </h2>
            <p className="text-[#1E1E1E]/70 text-lg">
              Neem contact op voor een vrijblijvend gesprek over uw dakproject.
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
                dakralux@gmail.com
              </button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
