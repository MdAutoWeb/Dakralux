import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Dakralux",
  description:
    "Professionele dakwerker in Brugge en omstreken. Dakralux verzorgt dakwerken, dakbedekking, dakisolatie, Velux dakramen, hellende daken, dakonderhoud en dakrenovatie voor particulieren en bedrijven.",
  url: "https://www.dakralux.be",
  image: "https://www.dakralux.be/Dakralux.jpg",
  telephone: "+32472274709",
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
    latitude: "51.20937",
    longitude: "3.22419",
  },
  areaServed: [
    { "@type": "City", name: "Brugge" },
    { "@type": "City", name: "Damme" },
    { "@type": "City", name: "Oostkamp" },
    { "@type": "City", name: "Knokke-Heist" },
    { "@type": "City", name: "Blankenberge" },
    { "@type": "City", name: "Zeebrugge" },
    { "@type": "City", name: "Jabbeke" },
    { "@type": "City", name: "Zedelgem" },
  ],
  serviceType: [
    "Dakwerken",
    "Dakrenovatie",
    "Dakbedekking",
    "Dakisolatie",
    "Velux Dakramen",
    "Hellende Daken",
    "Dakonderhoud",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  priceRange: "€€",
  founder: {
    "@type": "Person",
    name: "Robby Seynaeve",
  },
  foundingDate: "2009",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "30",
  },
  sameAs: [
    "https://www.facebook.com/dakralux/?locale=nl_BE",
    "https://www.google.com/maps/place/Dakralux/@51.20937,3.22419,17z/data=!4m2!3m1!1s0x47c3597f03074acf:0x60d16a48c976344b",
  ],
  hasMap: "https://www.google.com/maps/place/Dakralux/@51.20937,3.22419,17z/data=!4m2!3m1!1s0x47c3597f03074acf:0x60d16a48c976344b",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dakralux",
  url: "https://www.dakralux.be",
  inLanguage: "nl-BE",
  publisher: {
    "@type": "RoofingContractor",
    name: "Dakralux",
    url: "https://www.dakralux.be",
  },
};

export const metadata: Metadata = {
  title: "Dakwerker Brugge | Dakrenovatie & Dakisolatie | Dakralux",
  description:
    "Dakralux is uw betrouwbare dakwerker in Brugge, Damme, Oostkamp en Knokke-Heist. Specialist in dakwerken, dakisolatie, hellende daken en Velux dakramen. Vraag vrijblijvend uw offerte aan.",
  keywords: [
    "dakwerker Brugge",
    "dakwerken Brugge",
    "dakrenovatie Brugge",
    "dakisolatie Brugge",
    "dakbedekking Brugge",
    "hellende daken Brugge",
    "Velux dakramen Brugge",
    "dakwerker Damme",
    "dakwerken Damme",
    "dakwerker Oostkamp",
    "dakwerken Oostkamp",
    "dakwerker Knokke-Heist",
    "dakwerken Knokke-Heist",
    "dakwerker Blankenberge",
    "dakwerker Zeebrugge",
    "dakwerker Jabbeke",
    "dakwerker Zedelgem",
  ],
  authors: [{ name: "Robby Seynaeve" }],
  creator: "Dakralux",
  publisher: "Dakralux",
  alternates: {
    canonical: "https://www.dakralux.be",
  },
  icons: {
    icon: "/Dakralux.jpg",
    shortcut: "/Dakralux.jpg",
    apple: "/Dakralux.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://www.dakralux.be",
    title: "Dakwerker Brugge | Dakrenovatie & Dakisolatie | Dakralux",
    description:
      "Dakralux is uw betrouwbare dakwerker in Brugge, Damme, Oostkamp en Knokke-Heist. Specialist in dakwerken, dakisolatie, hellende daken en Velux dakramen. Vraag vrijblijvend uw offerte aan.",
    siteName: "Dakralux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakwerker Brugge | Dakrenovatie & Dakisolatie | Dakralux",
    description:
      "Dakralux is uw betrouwbare dakwerker in Brugge, Damme, Oostkamp en Knokke-Heist. Specialist in dakwerken, dakisolatie, hellende daken en Velux dakramen. Vraag vrijblijvend uw offerte aan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
