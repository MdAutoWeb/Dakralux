import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dakwerker in Brugge, Damme & Oostkamp | Dakralux",
  description:
    "Neem contact op met Dakralux voor dakwerken in Brugge, Damme, Oostkamp, Knokke-Heist en omgeving. Vraag vrijblijvend uw gratis offerte aan voor dakbedekking, dakisolatie of dakrenovatie.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

