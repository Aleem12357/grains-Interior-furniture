"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Box, PhoneCall } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "3D Collections", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Our Philosophy", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#F5F2EB]/90 backdrop-blur-xl border-b border-[#1C1917]/10 shadow-md"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand Mark */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#9A7B56]/40 group-hover:border-[#9A7B56] transition-all duration-300 shadow-sm group-hover:shadow-md">
                <Image
                  src="/assets/logo.jpg"
                  alt="GRAINS Interior & Furniture"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-grains text-2xl tracking-widest text-[#1C1917] font-bold leading-none">
                  GRAINS
                </span>
                <span className="text-[8.5px] tracking-[0.28em] text-[#9A7B56] uppercase font-semibold mt-1">
                  Interior & Furniture
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-[#EFECE4]/90 backdrop-blur-md px-5 py-2 rounded-full border border-[#1C1917]/10 shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs uppercase tracking-wider font-semibold transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-[#1C1917]"
                        : "text-[#1C1917]/70 hover:text-[#9A7B56]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-[#9A7B56]/20 rounded-full border border-[#9A7B56]/40 shadow-sm"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {link.name === "3D Collections" && (
                        <Box className="w-3 h-3 text-[#9A7B56]" />
                      )}
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-[#F5F2EB] hover:bg-[#9A7B56] text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#9A7B56] group-hover:text-white transition-colors" />
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Mobile menu toggle button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-full bg-[#EFECE4] border border-[#1C1917]/10 text-[#1C1917] hover:bg-[#9A7B56] hover:text-white transition-colors shadow-sm"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-[#F5F2EB]/98 backdrop-blur-2xl border-b border-[#1C1917]/10 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 space-y-6 max-w-md mx-auto">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-serif-grains transition-all ${
                        pathname === link.href
                          ? "bg-[#9A7B56] text-white font-semibold shadow-md"
                          : "text-[#1C1917] hover:bg-[#EFECE4]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-70" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#1C1917]/10 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1C1917] text-[#F5F2EB] hover:bg-[#9A7B56] rounded-2xl text-xs font-semibold uppercase tracking-widest shadow-lg transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#9A7B56]" />
                  <span>Book Studio Consultation</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
