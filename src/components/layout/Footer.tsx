"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Compass,
  Share2,
  Globe,
  Feather
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#F5F2EB] relative pt-20 pb-12 overflow-hidden border-t border-[#9A7B56]/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A7B56]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#656D4A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#F5F2EB]/10">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#9A7B56]">
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
                <span className="text-[10px] tracking-[0.25em] text-[#9A7B56] uppercase font-medium">
                  Interior & Furniture
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F5F2EB]/70 max-w-sm leading-relaxed font-light">
              Crafting bespoke interior spaces and timeless 3D structural furniture. Where natural wood grain meets contemporary architectural art.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F5F2EB]/5 border border-[#F5F2EB]/10 flex items-center justify-center text-[#F5F2EB]/80 hover:bg-[#9A7B56] hover:text-white transition-all duration-300"
                aria-label="Global Network"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F5F2EB]/5 border border-[#F5F2EB]/10 flex items-center justify-center text-[#F5F2EB]/80 hover:bg-[#9A7B56] hover:text-white transition-all duration-300"
                aria-label="Share Design"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F5F2EB]/5 border border-[#F5F2EB]/10 flex items-center justify-center text-[#F5F2EB]/80 hover:bg-[#9A7B56] hover:text-white transition-all duration-300"
                aria-label="Artisan Philosophy"
              >
                <Feather className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F5F2EB]/5 border border-[#F5F2EB]/10 flex items-center justify-center text-[#F5F2EB]/80 hover:bg-[#9A7B56] hover:text-white transition-all duration-300"
                aria-label="Compass Studio"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif-grains text-lg tracking-wider text-[#9A7B56] mb-5 font-semibold">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-[#F5F2EB]/70">
              <li>
                <Link href="/" className="hover:text-[#9A7B56] transition-colors">
                  Home Studio
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
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-grains text-lg tracking-wider text-[#9A7B56] mb-5 font-semibold">
              Collections
            </h4>
            <ul className="space-y-3 text-sm text-[#F5F2EB]/70">
              <li>
                <Link href="/products?category=living" className="hover:text-[#9A7B56] transition-colors">
                  Architectural Living
                </Link>
              </li>
              <li>
                <Link href="/products?category=dining" className="hover:text-[#9A7B56] transition-colors">
                  Artisanal Dining
                </Link>
              </li>
              <li>
                <Link href="/products?category=bedroom" className="hover:text-[#9A7B56] transition-colors">
                  Minimalist Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/products?category=lighting" className="hover:text-[#9A7B56] transition-colors">
                  Sculptural Lighting
                </Link>
              </li>
              <li>
                <Link href="/products?category=decor" className="hover:text-[#9A7B56] transition-colors">
                  Curated Accents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-grains text-lg tracking-wider text-[#9A7B56] mb-5 font-semibold">
              Design Digest
            </h4>
            <p className="text-xs text-[#F5F2EB]/70 mb-4 leading-relaxed font-light">
              Subscribe for exclusive architectural previews and 3D interior design concepts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-[#F5F2EB]/5 border border-[#F5F2EB]/15 rounded-lg px-4 py-2.5 text-xs text-[#F5F2EB] placeholder-[#F5F2EB]/40 focus:outline-none focus:border-[#9A7B56] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#9A7B56] hover:bg-[#656D4A] rounded-md text-white transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

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
              3D Model License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
