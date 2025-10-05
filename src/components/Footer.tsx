import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold mb-4 block flex items-center"
            >
              <span className="text-[#CADA44]">DAKRALUX</span>
            </Link>
            <p className="text-white mb-4 max-w-md">
              Bent u op zoek naar een betrouwbaar iemand en een vakman die elke
              opdracht tot een goed einde brengt? Dan zit u zeker goed bij
              Dakralux, een klein maar dynamisch familiebedrijf.
            </p>
            <div className="flex space-x-4">
              <div className="bg-[#1E1E1E] p-2 rounded border border-[#CADA44]">
                <span className="text-sm font-semibold text-[#CADA44]">
                  KvK: 12345678
                </span>
              </div>
              <div className="bg-[#1E1E1E] p-2 rounded border border-[#CADA44]">
                <span className="text-sm font-semibold text-[#CADA44]">
                  Verzekerd
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#CADA44]">
              Snelle Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/diensten"
                  className="text-white hover:text-[#CADA44] transition-colors"
                >
                  Onze Diensten
                </Link>
              </li>
              <li>
                <Link
                  href="/over-ons"
                  className="text-white hover:text-[#CADA44] transition-colors"
                >
                  Over Ons
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-[#CADA44] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#CADA44]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#CADA44]" />
                <span className="text-white">0472 27 47 09</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#CADA44]" />
                <span className="text-white">dakralux@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-[#CADA44] mt-0.5" />
                <span className="text-white">
                  Brieversweg 19, 8340 Sijsele, Belgium
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-[#CADA44]" />
                <span className="text-white">Ma-Vr: 7:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#CADA44] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © 2024 Dakralux. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-white hover:text-[#CADA44] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/algemene-voorwaarden"
              className="text-white hover:text-[#CADA44] text-sm transition-colors"
            >
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
