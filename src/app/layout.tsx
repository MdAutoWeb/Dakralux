import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Dakralux",
  description:
    "Professionele dakwerker in Brugge en omstreken. Dakralux verzorgt dakwerken, dakbedekking, dakisolatie, Velux dakramen, platte daken, dakonderhoud en dakrenovatie voor particulieren en bedrijven.",
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
    {
      "@type": "City",
      name: "Brugge",
    },
    {
      "@type": "City",
      name: "Damme",
    },
    {
      "@type": "City",
      name: "Oostkamp",
    },
    {
      "@type": "City",
      name: "Knokke-Heist",
    },
    {
      "@type": "City",
      name: "Blankenberge",
    },
    {
      "@type": "City",
      name: "Zeebrugge",
    },
    {
      "@type": "City",
      name: "Jabbeke",
    },
    {
      "@type": "City",
      name: "Zedelgem",
    },
  ],
  serviceType: [
    "Dakwerken",
    "Dakrenovatie",
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

export const metadata: Metadata = {
  title:
    "Dakwerker Brugge, Damme & Oostkamp | Dakwerken, Dakisolatie & Velux | Dakralux",
  description:
    "Dakralux is uw betrouwbare dakwerker in Brugge, Damme, Oostkamp en Knokke-Heist. Specialist in dakwerken, dakisolatie, dakbedekking, platte daken en Velux dakramen. Vraag vrijblijvend uw offerte aan.",
  keywords: [
    "dakwerker Brugge",
    "dakwerken Brugge",
    "dakrenovatie Brugge",
    "dakisolatie Brugge",
    "dakbedekking Brugge",
    "platte daken Brugge",
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
    url: "https://dakralux.be",
    title:
      "Dakwerker Brugge, Damme & Oostkamp | Dakwerken, Dakisolatie & Velux | Dakralux",
    description:
      "Dakralux is uw betrouwbare dakwerker in Brugge, Damme, Oostkamp en Knokke-Heist. Specialist in dakwerken, dakisolatie, dakbedekking, platte daken en Velux dakramen. Vraag vrijblijvend uw offerte aan.",
    siteName: "Dakralux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakwerker Brugge, Damme & Oostkamp | Dakwerken, Dakisolatie & Velux | Dakralux",
    description:
      "Dakralux is uw betrouwbare dakwerker in Brugge, Damme, Oostkamp en Knokke-Heist. Specialist in dakwerken, dakisolatie, dakbedekking, platte daken en Velux dakramen. Vraag vrijblijvend uw offerte aan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.className} antialiased`}>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
