import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import ReviewCarousel from "@/components/ReviewCarousel";

export default function Home() {
  const services = [
    {
      title: "Dakbedekking",
      description: "Hoogwaardige materialen, jarenlange garantie",
      image: "/Dakwerken.jpg",
      alt: "Dakbedekking Brugge - Nieuwe dakbedekking en dakrenovatie door Dakralux",
    },
    {
      title: "Dakisolatie",
      description: "Energiebesparend, comfortabel woonklimaat",
      image: "/Isolatie.webp",
      alt: "Dakisolatie Brugge - Professionele dakisolatie door Dakralux",
    },
    {
      title: "Velux Dakramen",
      description: "Meer licht en lucht in uw huis",
      image: "/Velux.jpg",
      alt: "Velux dakramen Brugge - Velux dakramen installatie door Dakralux",
    },
    {
      title: "Platte Daken",
      description: "Moderne materialen, professionele aanleg",
      image: "/Platte daken.webp",
      alt: "Platte daken Brugge - Platte dakbedekking door Dakralux",
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

  // Echte reviews gebaseerd op Google en Trustlocal
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Damme",
      rating: 5,
      text: "Uitstekende service van Dakralux! Professioneel team dat ons dak perfect heeft gerenoveerd. Duidelijke communicatie en eerlijke prijzen.",
      source: "Google",
      date: "2 maanden geleden",
    },
    {
      name: "Johan V.",
      location: "Brugge",
      rating: 5,
      text: "Dakralux heeft onze dakisolatie perfect uitgevoerd. Ze hebben ook de premies geregeld, wat een grote hulp was. Zeer betrouwbaar!",
      source: "Google",
      date: "3 maanden geleden",
    },
    {
      name: "Linda D.",
      location: "Oostkamp",
      rating: 5,
      text: "Snelle en correcte afwerking van onze dakreparatie. Het team was vriendelijk en heeft alles netjes achtergelaten. Goede prijs-kwaliteit!",
      source: "Trustlocal",
      date: "1 maand geleden",
    },
    {
      name: "Marc B.",
      location: "Knokke-Heist",
      rating: 5,
      text: "Dakralux heeft onze dakgoten vervangen en Velux dakramen geplaatst. Perfecte uitvoering en duidelijke offerte vooraf. Zeer tevreden!",
      source: "Google",
      date: "4 maanden geleden",
    },
    {
      name: "Katrien S.",
      location: "Blankenberge",
      rating: 4,
      text: "Goede service voor onze dakbedekking. Het werk werd netjes uitgevoerd binnen de afgesproken tijd. Zeer tevreden met het resultaat.",
      source: "Trustlocal",
      date: "5 maanden geleden",
    },
    {
      name: "Peter L.",
      location: "Zeebrugge",
      rating: 5,
      text: "Al 9 jaar ervaring en dat merk je! Professionele aanpak van A tot Z. Ze hebben onze gevelisolatie perfect uitgevoerd en alle paperwork geregeld.",
      source: "Google",
      date: "6 maanden geleden",
    },
    {
      name: "Geert V.",
      location: "Damme",
      rating: 5,
      text: "Duidelijke offerte, snelle en correcte afwerking. Vriendelijk en betrouwbaar! Precies wat je zoekt in een dakwerker.",
      source: "Trustlocal",
      date: "2 weken geleden",
    },
    {
      name: "Marina K.",
      location: "Brugge",
      rating: 5,
      text: "Professionele uitvoering van onze dakisolatie. Premies werden perfect geregeld. Aanrader voor iedereen die kwaliteitswerk zoekt!",
      source: "Trustlocal",
      date: "3 weken geleden",
    },
  ];

  return (
    <div className="bg-[#1E1E1E]">
      {/* Hero Section */}
      <section className="relative bg-[#1E1E1E] text-white py-12 lg:py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Dakwerker in Brugge voor dakrenovatie en dakisolatie
              </h1>
              <p className="text-lg lg:text-xl mb-4 text-white">
                Dakralux helpt u met dakrenovatie, dakisolatie, platte daken en
                Velux dakramen.
              </p>
              <p className="text-base lg:text-lg mb-6 text-white">
                Actief in Brugge, Damme, Oostkamp, Knokke-Heist en omliggende
                gemeenten.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                  size="lg"
                  className="bg-[#CADA44] text-[#1E1E1E] hover:bg-[#B8C73A] font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Bel Nu: 0472 27 47 09
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#CADA44] text-[#CADA44] hover:bg-[#CADA44] hover:text-[#1E1E1E]"
                >
                  <Link href="/contact" className="flex items-center">
                    Vraag uw offerte aan
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center text-sm text-white">
                <CheckCircle className="h-4 w-4 mr-2 text-[#CADA44]" />
                Gratis offerte binnen 24 uur
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-[#1E1E1E] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#CADA44]">
                  Waarom Dakralux?
                </h3>
                <div className="space-y-3">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#CADA44] mr-3" />
                      <span className="text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-16 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Dakwerken in Brugge en omgeving
            </h2>
            <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto">
              Dakbedekking, dakisolatie, platte daken, Velux dakramen en
              dakonderhoud voor particulieren en bedrijven in regio Brugge.
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 [-webkit-overflow-scrolling:touch] scrollbar-hide snap-x snap-mandatory">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 min-w-[260px] max-w-xs md:min-w-0 md:max-w-none flex-shrink-0 md:flex-shrink snap-start"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white mb-3">
                    {service.description}
                  </p>
                  <Link
                    href="/diensten"
                    className="text-[#CADA44] hover:text-[#B8C73A] font-medium inline-flex items-center"
                  >
                    Meer info
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-16 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-lg lg:text-xl text-white mb-3">
              Echte reviews van tevreden klanten
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-white">
              <div className="flex items-center space-x-2">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjU2IDEyLjI1YzAtLjc4LS4wNy0xLjUzLS4yLTIuMjVIMTJ2NC4yNmg1LjkyYy0uMjYgMS4zNy0xLjA0IDIuNTMtMi4yMSAzLjMxdjIuNzloMy41N2MyLjA4LTEuOTIgMy4yOC00Ljc0IDMuMjgtOC4wOXoiIGZpbGw9IiM0Mjg1RjQiLz4KPHBhdGggZD0iTTEyIDIzYzIuOTcgMCA1LjQ2LS45OCA3LjI4LTIuNjZsLTMuNTctMi43N2MtLjk4LjY2LTIuMjMgMS4wNi0zLjcxIDEuMDYtMi44NiAwLTUuMjktMS45My02LjE2LTQuNTNIMi4xOHYyLjg0QzMuOTkgMjAuNTMgNy43IDIzIDEyIDIzeiIgZmlsbD0iIzM0QTg1MyIvPgo8cGF0aCBkPSJNNS44NCAxNC4wOWMtLjIyLS42Ni0uMzUtMS4zNi0uMzUtMi4wOXMuMTMtMS40My4zNS0yLjA5VjcuMDdIMi4xOEMxLjQzIDguNTUgMSAxMC4yMiAxIDEyczEuNDMgMy40NSAyLjE4IDQuOTNsNi42Ni0yLjg0eiIgZmlsbD0iI0ZCQkMwNSIvPgo8cGF0aCBkPSJNMTIgNS4zOGMxLjYyIDAgMy4wNi41NyA0LjIxIDEuNjRsMy4xNS0zLjE1QzE3LjQ1IDIuMDkgMTQuOTcgMSAxMiAxIDcuNyAxIDMuOTkgMy40NyAyLjE4IDcuMDdsNi42NiAyLjg0YzEuMjctMi41OSAzLjctNC41MyA2LjE2LTQuNTN6IiBmaWxsPSIjRUE0MzM1Ii8+Cjwvc3ZnPgo="
                  alt="Google"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                <span>Google: 4.8/5 (30 reviews)</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJ6IiBmaWxsPSIjMTZhMzRhIi8+Cjwvc3ZnPgo="
                  alt="Trustlocal"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                <span>Trustlocal: 9.3/10 (46 reviews)</span>
              </div>
            </div>
          </div>
          <ReviewCarousel reviews={testimonials} />
        </div>
      </section>
    </div>
  );
}
