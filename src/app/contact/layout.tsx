import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dakwerker Brugge & Damme | Contact & offerte - Dakralux",
  description:
    "Neem contact op met Dakralux voor dakwerken in Brugge, Damme, Oostkamp en Knokke-Heist. Vraag een gratis offerte of lichtadvies aan voor uw dakproject.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

