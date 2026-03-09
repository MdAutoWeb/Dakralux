import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid - Dakralux",
  description:
    "Lees het privacybeleid van Dakralux: hoe wij zorgvuldig omgaan met uw persoonsgegevens wanneer u contact opneemt voor dakwerken.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-[#CADA44]">
          Privacybeleid
        </h1>

        <p className="mb-4">
          Dakralux hecht veel belang aan uw privacy en gaat zorgvuldig om met
          uw persoonsgegevens.
        </p>

        <p className="mb-4">
          Wanneer u via deze website contact met ons opneemt, verzamelen wij
          enkel de gegevens die nodig zijn om uw aanvraag te behandelen, zoals
          uw naam, e-mailadres, telefoonnummer en bericht.
        </p>

        <p className="mb-4">Deze gegevens worden uitsluitend gebruikt om:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>contact met u op te nemen</li>
          <li>uw aanvraag te beantwoorden</li>
          <li>onze diensten correct uit te voeren</li>
        </ul>

        <p className="mb-4">
          Gegevens worden verwerkt via e-mail en interne tools (zoals een CRM)
          en worden niet doorgegeven aan derden.
        </p>

        <p className="mb-4">
          Uw gegevens worden niet langer bewaard dan nodig is voor het doel
          waarvoor ze zijn verzameld. U kunt op elk moment vragen om uw
          gegevens in te kijken, aan te passen of te laten verwijderen via{" "}
          <a
            href="mailto:dakralux@gmail.com"
            className="text-[#CADA44] hover:text-[#B8C73A] underline"
          >
            dakralux@gmail.com
          </a>
          .
        </p>

        <p className="mt-8 text-sm text-white/80">
          Dit privacybeleid kan in de toekomst worden aangepast indien nodig.
        </p>
      </div>
    </div>
  );
}

