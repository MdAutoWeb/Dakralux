"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/diensten" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#1E1E1E] shadow-lg fixed w-full top-0 z-50 border-b border-[#CADA44]">
      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white flex items-center"
            >
              <Image
                src="/Dakralux Badge.png"
                alt="DAKRALUX Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-[#CADA44]">DAKRALUX</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#CADA44] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-primary px-6 py-2 rounded-md text-sm font-medium"
            >
              Offerte Aanvragen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#CADA44] focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[#CADA44]/30 bg-[#1E1E1E]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#CADA44] block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary block px-3 py-2 rounded-md text-base font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Offerte Aanvragen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
