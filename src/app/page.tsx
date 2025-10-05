import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import ReviewCarousel from "@/components/ReviewCarousel";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dakralux",
    description:
      "Betrouwbare dakwerker in Brugge en omstreken. Specialisten in dakbedekking, dakisolatie, Velux dakramen en platte daken.",
    url: "https://dakralux.be",
    telephone: "0472274709",
    email: "dakralux@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Brieversweg 19",
      addressLocality: "Sijsele",
      postalCode: "8340",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.2093",
      longitude: "3.2242",
    },
    areaServed: [
      "Brugge",
      "Damme",
      "Oostkamp",
      "Knokke-Heist",
      "Blankenberge",
      "Zeebrugge",
      "Jabbeke",
      "Zedelgem",
    ],
    serviceType: [
      "Dakbedekking",
      "Dakisolatie",
      "Velux Dakramen",
      "Platte Daken",
      "Dakonderhoud",
    ],
    openingHours: "Mo-Fr 07:00-17:00",
    priceRange: "€€",
    founder: {
      "@type": "Person",
      name: "Robby Seynaeve",
    },
    foundingDate: "2009",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "30",
    },
  };
  const services = [
    {
      title: "Dakbedekking",
      description: "Hoogwaardige materialen, jarenlange garantie",
      image: "/Dakwerken.jpg",
    },
    {
      title: "Dakisolatie",
      description: "Energiebesparend, comfortabel woonklimaat",
      image: "/Isolatie.webp",
    },
    {
      title: "Velux Dakramen",
      description: "Meer licht en lucht in uw huis",
      image: "/Velux.jpg",
    },
    {
      title: "Platte Daken",
      description: "Moderne materialen, professionele aanleg",
      image: "/Platte daken.webp",
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
    <div className="min-h-screen bg-[#1E1E1E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative bg-[#1E1E1E] text-white py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Uw Betrouwbare
                <span className="block text-[#CADA44]">Dakwerker</span>
              </h1>
              <p className="text-xl mb-8 text-white">
                Professionele dakwerkzaamheden met meer dan 15 jaar ervaring.
                Van dakbedekking tot reparaties - wij zorgen voor kwaliteit en
                vakmanschap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                    Gratis Offerte
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
              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-[#CADA44]">
                  Waarom Dakralux?
                </h3>
                <div className="space-y-4">
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
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Onze Diensten
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Wij bieden een compleet pakket aan dakwerkzaamheden voor
              particulieren en bedrijven
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white mb-4">{service.description}</p>
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
      <section className="py-20 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-xl text-white mb-4">
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
