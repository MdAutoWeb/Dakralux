import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dakralux - Dakwerker Brugge | Dakbedekking, Dakisolatie & Velux",
  description:
    "Dakralux is uw betrouwbare dakwerker in Brugge en omstreken. Specialisten in dakbedekking, dakisolatie, Velux dakramen en platte daken. Gratis offerte binnen 24 uur!",
  keywords:
    "dakwerker Brugge, dakbedekking Brugge, dakisolatie Brugge, Velux dakramen, platte daken, dakonderhoud, Damme, Oostkamp, Knokke-Heist",
  authors: [{ name: "Robby Seynaeve" }],
  creator: "Dakralux",
  publisher: "Dakralux",
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
    title: "Dakralux - Dakwerker Brugge | Professionele Dakwerkzaamheden",
    description:
      "Betrouwbare dakwerker in Brugge en omstreken. Dakbedekking, dakisolatie, Velux dakramen en meer. Gratis offerte binnen 24 uur!",
    siteName: "Dakralux",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakralux - Dakwerker Brugge",
    description:
      "Betrouwbare dakwerker in Brugge en omstreken. Gratis offerte binnen 24 uur!",
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
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
