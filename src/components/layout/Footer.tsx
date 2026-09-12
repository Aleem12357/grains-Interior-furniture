"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Compass,
  Globe,
  Feather,
  ArrowUp,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Box
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1917] text-[#F5F2EB] relative pt-20 pb-12 overflow-hidden border-t border-[#9A7B56]/30">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A7B56]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#656D4A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#F5F2EB]/10">
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#9A7B56] shadow-md">
                <Image
                  src="/assets/logo.jpg"
                  alt="GRAINS Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-grains text-2xl tracking-widest text-[#F5F2EB] font-bold">
                  GRAINS
                </span>
                <span className="text-[9.5px] tracking-[0.25em] text-[#9A7B56] uppercase font-semibold">
                  Interior & Furniture
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F5F2EB]/70 max-w-sm leading-relaxed font-light">
              Crafting bespoke interior spaces and timeless 3D structural furniture. Where natural timber grain meets contemporary architectural art.
            </p>

            <div className="space-y-2 text-xs text-[#F5F2EB]/80 font-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#9A7B56]" />
                <span>480 Architectural Way, Soho Design District, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#9A7B56]" />
                <span>studio@grains-interiors.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#9A7B56]" />
                <span>+1 (212) 890-4412</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: <Globe className="w-4 h-4" />, label: "Global Network" },
                { icon: <Feather className="w-4 h-4" />, label: "Artisan Philosophy" },
                { icon: <Compass className="w-4 h-4" />, label: "Compass Studio" },
                { icon: <Box className="w-4 h-4" />, label: "3D Catalog" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href="/products"
                  className="w-9 h-9 rounded-full bg-[#F5F2EB]/5 border border-[#F5F2EB]/15 flex items-center justify-center text-[#F5F2EB]/80 hover:bg-[#9A7B56] hover:text-white transition-all duration-300"
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-serif-grains text-base tracking-wider text-[#9A7B56] mb-5 font-semibold uppercase">
              Explore Pages
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#F5F2EB]/70">
              <li>
                <Link href="/" className="hover:text-[#9A7B56] transition-colors">
                  Home Architecture Studio
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#9A7B56] transition-colors">
                  3D Furniture Catalog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#9A7B56] transition-colors">
                  Interior Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#9A7B56] transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#9A7B56] transition-colors">
                  Studio Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Categories */}
          <div>
            <h4 className="font-serif-grains text-base tracking-wider text-[#9A7B56] mb-5 font-semibold uppercase">
              3D Collections
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#F5F2EB]/70">
              <li>
                <Link href="/products" className="hover:text-[#9A7B56] transition-colors">
                  Architectural Living
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#9A7B56] transition-colors">
                  Artisanal Dining
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#9A7B56] transition-colors">
                  Minimalist Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#9A7B56] transition-colors">
                  Sculptural Lighting
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#9A7B56] transition-colors">
                  Fluted Wood Consoles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h4 className="font-serif-grains text-base tracking-wider text-[#9A7B56] mb-5 font-semibold uppercase">
              Design Digest
            </h4>
            <p className="text-xs text-[#F5F2EB]/70 mb-4 leading-relaxed font-light">
              Subscribe to receive private 3D architectural previews and seasonal custom joinery collections.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-[#F5F2EB]/5 border border-[#F5F2EB]/15 rounded-xl px-4 py-3 text-xs text-[#F5F2EB] placeholder-[#F5F2EB]/40 focus:outline-none focus:border-[#9A7B56] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#9A7B56] hover:bg-[#656D4A] rounded-lg text-white transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F5F2EB]/50 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} GRAINS Interior & Furniture. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#9A7B56] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#9A7B56] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#9A7B56] transition-colors">
              3D License
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#F5F2EB]/10 hover:bg-[#9A7B56] text-white transition-colors ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
