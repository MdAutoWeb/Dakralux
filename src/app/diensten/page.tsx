import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

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
    },
    {
      title: "Dakisolatie",
      description: "Energiebesparend, comfortabel woonklimaat",
      features: [
        "Spouwmuurisolatie",
        "Dakisolatie tussen en op de spanten",
        "Vloerisolatie",
        "Energielabel verbetering",
        "Subsidie aanvraag ondersteuning",
        "Rc waarde tot 8.0",
      ],
      image: "/Isolatie.webp",
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
    },
    {
      title: "Platte Daken",
      description: "Moderne materialen, professionele aanleg",
      features: [
        "Bitumineuze dakbedekking",
        "EPDM rubber dakbedekking",
        "PVC dakbedekking",
        "Dakisolatie",
        "Dakafvoer systemen",
        "10 jaar garantie",
      ],
      image: "/Platte daken.webp",
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
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      {/* Hero Section */}
      <section className="bg-[#1E1E1E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#CADA44]">
              Onze Diensten
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Dakralux biedt een compleet pakket aan dakwerkzaamheden. Van
              nieuwbouw tot renovatie en onderhoud - wij hebben de expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">
                      Wat wij bieden:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#CADA44] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Button className="bg-[#CADA44] text-[#1E1E1E] hover:bg-[#B8C73A]">
                      <Link href="/contact" className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Offerte
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hoe Wij Werken
            </h2>
            <p className="text-xl text-white">
              Van eerste contact tot oplevering - zo verloopt uw project bij
              Dakralux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#CADA44] text-[#1E1E1E] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Contact</h3>
              <p className="text-white">
                U neemt contact met ons op via telefoon, email of ons
                contactformulier
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#CADA44] text-[#1E1E1E] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Inspectie
              </h3>
              <p className="text-white">
                Wij komen langs voor een gratis inspectie en advies op maat
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#CADA44] text-[#1E1E1E] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Offerte</h3>
              <p className="text-white">
                U ontvangt binnen 24 uur een duidelijke offerte zonder
                verrassingen
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#CADA44] text-[#1E1E1E] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Uitvoering
              </h3>
              <p className="text-white">
                Wij voeren het werk vakkundig uit met kwaliteitsgarantie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#CADA44] text-[#1E1E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om te Beginnen?</h2>
          <p className="text-xl text-[#1E1E1E] mb-8">
            Neem contact op voor een vrijblijvende offerte. Onze dakexperts
            helpen u graag verder.
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
              <Link href="/contact" className="flex items-center">
                Contactformulier
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
