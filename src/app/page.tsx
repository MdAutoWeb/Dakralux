import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, ArrowRight, Shield, Clock, Star, Award } from "lucide-react";
import Button from "@/components/Button";
import ReviewCarousel from "@/components/ReviewCarousel";

export default function Home() {
  const services = [
    {
      title: "Dakbedekking",
      description: "Hoogwaardige materialen, jarenlange garantie op elk project",
      image: "/Dakwerken.jpg",
      alt: "Dakbedekking Brugge - Nieuwe dakbedekking en dakrenovatie door Dakralux",
    },
    {
      title: "Dakisolatie",
      description: "Energiebesparend, comfortabel woonklimaat het hele jaar",
      image: "/Isolatie.webp",
      alt: "Dakisolatie Brugge - Professionele dakisolatie door Dakralux",
    },
    {
      title: "Velux Dakramen",
      description: "Meer licht en lucht in uw huis, vakkundig geplaatst",
      image: "/Velux.jpg",
      alt: "Velux dakramen Brugge - Velux dakramen installatie door Dakralux",
    },
    {
      title: "Hellende Daken",
      description: "Renovatie en aanleg van hellende daken met precisie",
      image: "/Platte daken.webp",
      alt: "Hellende daken Brugge - Renovatie hellende daken door Dakralux",
    },
  ];

  const stats = [
    { icon: Award, value: "15+", label: "Jaar ervaring" },
    { icon: Star, value: "4.8/5", label: "Google reviews" },
    { icon: Shield, value: "100%", label: "Verzekerd" },
    { icon: Clock, value: "24u", label: "Offerte respons" },
  ];

  const benefits = [
    "Meer dan 15 jaar vakmanschap",
    "Volledig verzekerd & gecertificeerd",
    "Gratis offerte binnen 24 uur",
    "Kwaliteitsgarantie op al ons werk",
    "Lokaal bedrijf, persoonlijke aanpak",
    "Transparante prijzen, geen verrassingen",
  ];

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

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/Dakwerken.jpg"
            alt="Dakwerken Brugge"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E]/85 to-[#1E1E1E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              {/* Eyebrow label */}
              <div className="inline-flex items-center gap-2 bg-[#CADA44]/10 border border-[#CADA44]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#CADA44] animate-pulse" />
                <span className="text-[#CADA44] text-sm font-medium tracking-wide">
                  Dakwerker in Brugge &amp; regio
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Dakrenovatie &</span>
                <br />
                <span className="text-[#CADA44]">dakisolatie</span>
                <br />
                <span className="text-white">door experts</span>
              </h1>

              <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
                Dakralux levert hoogwaardig dakwerk in Brugge, Damme, Oostkamp,
                Knokke-Heist en omliggende gemeenten. Vakmanschap dat u ziet en voelt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="tel:+32472274709">
                  <Button
                    size="lg"
                    className="bg-[#CADA44] text-[#1E1E1E] hover:bg-[#B8C73A] font-bold shadow-lg shadow-[#CADA44]/20 hover:shadow-[#CADA44]/40 transition-all duration-300 whitespace-nowrap"
                  >
                    <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                    Bel Nu: 0472 27 47 09
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:border-[#CADA44] hover:text-[#CADA44] transition-all duration-300 backdrop-blur-sm"
                >
                  <Link href="/contact" className="flex items-center">
                    Gratis offerte aanvragen
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap gap-6 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-[#CADA44] fill-[#CADA44]" />
                  4.8/5 · 30+ reviews
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-[#CADA44]" />
                  Volledig verzekerd
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-[#CADA44]" />
                  15+ jaar ervaring
                </span>
              </div>
            </div>

            {/* Right: glass benefit card */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md bg-white/5 p-8">
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#CADA44]/10 rounded-bl-full" />
                <h3 className="text-lg font-semibold text-[#CADA44] mb-6 tracking-wide uppercase text-sm">
                  Waarom Dakralux?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CADA44]/15 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-[#CADA44]" />
                      </div>
                      <span className="text-white/85 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <div className="border-y border-white/5 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-8 px-4 gap-1">
                <Icon className="h-5 w-5 text-[#CADA44] mb-2" />
                <span className="text-2xl font-bold text-white">{value}</span>
                <span className="text-xs text-white/50 tracking-wide uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="mb-14">
            <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-3">
              Onze diensten
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-lg leading-tight">
                Vakwerk voor elk dak in de regio Brugge
              </h2>
              <p className="text-white/60 max-w-sm leading-relaxed">
                Van dakbedekking tot isolatie en Velux dakramen — wij regelen het van A tot Z.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 [-webkit-overflow-scrolling:touch] scrollbar-hide snap-x snap-mandatory">
            {services.map((service, i) => (
              <Link
                key={i}
                href="/diensten"
                className="group relative bg-[#242424] rounded-2xl overflow-hidden border border-white/5 hover:border-[#CADA44]/40 transition-all duration-300 min-w-[270px] max-w-xs md:min-w-0 md:max-w-none flex-shrink-0 md:flex-shrink snap-start"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 270px, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent" />
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#CADA44] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/55 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[#CADA44] text-sm font-medium">
                    Meer info
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
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
              Klaar voor een nieuw dak?
            </h2>
            <p className="text-[#1E1E1E]/70 text-lg">
              Ontvang uw gratis offerte binnen 24 uur. Geen verplichtingen.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:+32472274709">
              <button className="flex items-center gap-2 bg-[#1E1E1E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                <Phone className="h-5 w-5" />
                0472 27 47 09
              </button>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-[#1E1E1E] text-[#1E1E1E] font-semibold px-6 py-3 rounded-lg hover:bg-[#1E1E1E] hover:text-[#CADA44] transition-all duration-300"
            >
              Offerte aanvragen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12">
            <p className="text-[#CADA44] text-sm font-medium tracking-widest uppercase mb-3">
              Klantervaring
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Wat onze klanten zeggen
              </h2>
              <div className="flex items-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-white">G</div>
                  <span>Google: 4.8/5 · 30 reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-[#CADA44] fill-[#CADA44]" />
                  <span>Trustlocal: 9.3/10 · 46 reviews</span>
                </div>
              </div>
            </div>
          </div>

          <ReviewCarousel reviews={testimonials} />
        </div>
      </section>

    </div>
  );
}
