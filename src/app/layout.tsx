import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const localBusinessJsonLd = {
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
    "Dakralux - Dakwerker Brugge, Damme & Oostkamp | Dakbedekking, Dakisolatie & Velux",
  description:
    "Dakralux is uw betrouwbare dakwerker voor Brugge, Damme, Oostkamp en Knokke-Heist. Specialisten in dakbedekking, dakisolatie, Velux dakramen en platte daken. Gratis offerte binnen 24 uur!",
  keywords: [
    "relighting Brugge",
    "lichtadvies Brugge",
    "LED-installatie Brugge",
    "relighting Knokke-Heist",
    "lichtadvies Knokke-Heist",
    "LED-installatie Knokke-Heist",
    "relighting Oostkamp",
    "lichtadvies Oostkamp",
    "LED-installatie Oostkamp",
    "relighting Damme",
    "lichtadvies Damme",
    "LED-installatie Damme",
    "dakwerker Brugge",
    "dakwerker Damme",
    "dakwerker Oostkamp",
    "dakwerker Knokke-Heist",
    "dakbedekking Brugge",
    "dakisolatie Brugge",
    "Velux dakramen Brugge",
  ],
  authors: [{ name: "Robby Seynaeve" }],
  creator: "Dakralux",
  publisher: "Dakralux",
  icons: {
    icon: "/Dakralux.jpg",
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
      "Dakralux - Dakwerker Brugge, Damme & Oostkamp | Professionele Dakwerkzaamheden",
    description:
      "Betrouwbare dakwerker in Brugge, Damme, Oostkamp en Knokke-Heist. Dakbedekking, dakisolatie, Velux dakramen en meer. Gratis offerte binnen 24 uur!",
    siteName: "Dakralux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakralux - Dakwerker Brugge & Damme",
    description:
      "Betrouwbare dakwerker in Brugge, Damme, Oostkamp en Knokke-Heist. Gratis offerte binnen 24 uur!",
  },
  verification: {
    google: "your-google-verification-code",
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
