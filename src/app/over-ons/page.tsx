import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Shield,
} from "lucide-react";
import Button from "@/components/Button";
import Image from "next/image";

export default function OverOnsPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Kwaliteit & Garantie",
      description:
        "Wij staan garant voor hoogwaardig vakmanschap en bieden uitgebreide garantie op al ons werk.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Persoonlijke Service",
      description:
        "Als familiebedrijf kennen wij onze klanten persoonlijk en zorgen voor maatwerk oplossingen.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Ervaring & Expertise",
      description:
        "Met meer dan 15 jaar ervaring in de dakwerksector zijn wij uw betrouwbare partner voor alle dakwerkzaamheden.",
    },
  ];

  const teamMembers = [
    {
      name: "Robby Seynaeve",
      role: "Eigenaar & Dakwerker",
      description:
        "Met meer dan 15 jaar ervaring in de dakwerksector leidt Robby het team met passie voor vakmanschap.",
    },
    {
      name: "Team Dakralux",
      role: "Vakbekwame Dakwerkers",
      description:
        "Ons ervaren team van vakbekwame dakwerkers zorgt voor professionele uitvoering van elk project.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      {/* Hero Section */}
      <section className="bg-[#1E1E1E] text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#CADA44]">
              Over Dakralux
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Een klein maar dynamisch familiebedrijf dat elke opdracht tot een
              goed einde brengt. Wij staan garant voor alle soorten hellende
              daken in Brugge en omstreken.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ons Verhaal
              </h2>
              <div className="space-y-6 text-white">
                <p className="text-lg leading-relaxed">
                  Dakralux is ontstaan uit de passie voor vakmanschap en de wens
                  om kwaliteitsvolle dakwerkzaamheden aan te bieden in de regio
                  Brugge. Wat begon als een kleine eenmanszaak is uitgegroeid
                  tot een betrouwbaar familiebedrijf.
                </p>
                <p className="text-lg leading-relaxed">
                  Wij geloven dat een dak meer is dan alleen bescherming tegen
                  de elementen. Het is de kroon op uw huis en verdient de beste
                  zorg en aandacht. Daarom werken wij uitsluitend met
                  hoogwaardige materialen en moderne technieken.
                </p>
                <p className="text-lg leading-relaxed">
                  Onze klanten zijn niet alleen opdrachtgevers, maar partners in
                  het creëren van duurzame en mooie daken. Wij luisteren naar uw
                  wensen en adviseren u graag over de beste oplossingen voor uw
                  specifieke situatie.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#1E1E1E] rounded-lg p-8 border border-[#CADA44]">
                <h3 className="text-2xl font-semibold mb-6 text-[#CADA44]">
                  Waarom Kiezen voor Dakralux?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#CADA44] mr-3" />
                    <span className="text-white">
                      Meer dan 15 jaar ervaring
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#CADA44] mr-3" />
                    <span className="text-white">
                      Volledig verzekerd bedrijf
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#CADA44] mr-3" />
                    <span className="text-white">
                      Gratis offerte binnen 24 uur
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#CADA44] mr-3" />
                    <span className="text-white">
                      Kwaliteitsgarantie op al ons werk
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#CADA44] mr-3" />
                    <span className="text-white">
                      Lokaal bedrijf met persoonlijke service
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#CADA44] mr-3" />
                    <span className="text-white">
                      Transparante prijzen, geen verrassingen
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Onze Waarden
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Wat ons drijft en wat u kunt verwachten van Dakralux
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-[#CADA44] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ons Team
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              De mensen achter Dakralux - vakbekwame professionals met passie
              voor hun werk
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-lg p-8 text-center"
              >
                <div className="mb-6">
                  <div className="w-32 h-32 bg-[#CADA44] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-[#1E1E1E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#CADA44] font-semibold mb-4">
                    {member.role}
                  </p>
                </div>
                <p className="text-white leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ons Werkgebied
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Wij zijn actief in Brugge en de omliggende gemeenten
            </p>
          </div>
          <div className="bg-[#1E1E1E] rounded-lg p-8 border border-[#CADA44]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="text-white">
                <MapPin className="h-6 w-6 text-[#CADA44] mx-auto mb-2" />
                <p className="font-semibold">Brugge</p>
              </div>
              <div className="text-white">
                <MapPin className="h-6 w-6 text-[#CADA44] mx-auto mb-2" />
                <p className="font-semibold">Damme</p>
              </div>
              <div className="text-white">
                <MapPin className="h-6 w-6 text-[#CADA44] mx-auto mb-2" />
                <p className="font-semibold">Oostkamp</p>
              </div>
              <div className="text-white">
                <MapPin className="h-6 w-6 text-[#CADA44] mx-auto mb-2" />
                <p className="font-semibold">Knokke-Heist</p>
              </div>
              <div className="text-white">
                <MapPin className="h-6 w-6 text-[#CADA44] mx-auto mb-2" />
                <p className="font-semibold">Blankenberge</p>
              </div>
              <div className="text-white">
                <MapPin className="h-6 w-6 text-[#CADA44] mx-auto mb-2" />
                <p className="font-semibold">Zeebrugge</p>
              </div>
              <div className="text-white">
                <MapPin className="h-6 w-6 text-[#CADA44] mx-auto mb-2" />
                <p className="font-semibold">Jabbeke</p>
              </div>
              <div className="text-white">
                <MapPin className="h-6 w-6 text-[#CADA44] mx-auto mb-2" />
                <p className="font-semibold">Zedelgem</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#CADA44] text-[#1E1E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om Samen te Werken?</h2>
          <p className="text-xl text-[#1E1E1E] mb-8">
            Neem contact op voor een vrijblijvend gesprek over uw dakproject.
            Wij adviseren u graag over de beste oplossing voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#1E1E1E] text-[#CADA44] hover:bg-[#2A2A2A]"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel Nu: 0472 27 47 09
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#CADA44]"
            >
              <Mail className="h-5 w-5 mr-2" />
              dakralux@gmail.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
