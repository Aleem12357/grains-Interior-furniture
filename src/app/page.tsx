"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroBot from "@/components/chat/IntroBot";
import Sofa3DCanvas from "@/components/3d/Sofa3DCanvas";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import Image3DModal from "@/components/3d/Image3DModal";
import { products, Product } from "@/data/products";
import {
  ArrowUpRight,
  Box,
  Compass,
  Sparkles,
  ChevronRight,
  Maximize2,
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Layers,
  PhoneCall
} from "lucide-react";

const testimonials = [
  {
    quote: "GRAINS created a harmonious sanctuary in our Kyoto villa. Being able to inspect the white oak grain in 3D WebGL prior to fabrication was unbelievable.",
    author: "Kenji Takahashi",
    role: "Architect & Homeowner",
    location: "Kyoto, Japan",
    rating: 5,
  },
  {
    quote: "The curved Oasis sofa and custom fluted credenza transformed our Tribeca penthouse into an architectural masterpiece. The craftsmanship is unmatched.",
    author: "Sophia Laurent",
    role: "Interior Art Director",
    location: "New York, USA",
    rating: 5,
  },
  {
    quote: "Exceptional attention to natural wood finishes and spatial proportions. The 3D model accuracy matched the physical delivery down to the millimeter.",
    author: "Marco Rossi",
    role: "Design Principal",
    location: "Milan, Italy",
    rating: 5,
  },
];

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#1C1917] font-sans antialiased selection:bg-[#9A7B56] selection:text-white">
      <Navbar />

      {/* Hero Section with Interactive 3D Canvas */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#9A7B56]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#656D4A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE4] border border-[#9A7B56]/30 text-xs font-mono uppercase tracking-widest text-[#9A7B56] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#9A7B56]" />
                <span>Next-Gen 3D Interior Architecture</span>
              </div>

              <h1 className="font-serif-grains text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-[1.12] tracking-tight">
                Timeless Artistry for <span className="text-[#9A7B56] italic">Elevated</span> Spaces
              </h1>

              <p className="text-base sm:text-lg text-[#1C1917]/70 font-light leading-relaxed max-w-xl">
                GRAINS merges raw organic timber, custom 3D furniture modelling, and luxury interior craftsmanship to build serene architectural sanctuaries.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/products"
                  className="px-7 py-3.5 bg-[#1C1917] text-[#F5F2EB] hover:bg-[#9A7B56] rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
                >
                  <Box className="w-4 h-4 text-[#9A7B56] group-hover:text-white transition-colors" />
                  <span>Explore 3D Furniture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/portfolio"
                  className="px-7 py-3.5 bg-[#EFECE4] hover:bg-[#1C1917] text-[#1C1917] hover:text-[#F5F2EB] rounded-full text-xs uppercase tracking-widest font-semibold border border-[#1C1917]/10 transition-all duration-300 flex items-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>View Projects</span>
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1C1917]/10">
                <div>
                  <span className="font-serif-grains text-2xl sm:text-3xl font-bold text-[#1C1917]">
                    140+
                  </span>
                  <p className="text-[10px] sm:text-xs text-[#1C1917]/60 uppercase tracking-wider font-mono mt-0.5">
                    Projects Done
                  </p>
                </div>
                <div>
                  <span className="font-serif-grains text-2xl sm:text-3xl font-bold text-[#9A7B56]">
                    100%
                  </span>
                  <p className="text-[10px] sm:text-xs text-[#1C1917]/60 uppercase tracking-wider font-mono mt-0.5">
                    Solid Oak & Teak
                  </p>
                </div>
                <div>
                  <span className="font-serif-grains text-2xl sm:text-3xl font-bold text-[#656D4A]">
                    3D View
                  </span>
                  <p className="text-[10px] sm:text-xs text-[#1C1917]/60 uppercase tracking-wider font-mono mt-0.5">
                    Real-time WebGL
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive 3D Canvas Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <Sofa3DCanvas />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual 3D Showroom Callout */}
      <section className="py-16 bg-[#656D4A] text-[#F5F2EB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F5F2EB]/80 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                Virtual Showroom 3D Experience
              </span>
              <h2 className="font-serif-grains text-3xl sm:text-4xl font-bold">
                Step Into Our Interactive 3D Architectural Space
              </h2>
              <p className="text-sm sm:text-base text-[#F5F2EB]/90 font-light leading-relaxed">
                Experience full 360-degree rotation, material finish inspection, and spatial placement before making any design decisions.
              </p>
            </div>

            <Link
              href="/products"
              className="px-8 py-4 bg-[#1C1917] text-[#F5F2EB] hover:bg-[#9A7B56] text-xs uppercase tracking-widest font-semibold rounded-full shadow-xl transition-all duration-300 shrink-0 flex items-center gap-2 group"
            >
              <span>Explore 3D Showroom</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured 3D Showcase Collections */}
      <section className="py-24 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
                Mastercraft Furniture
              </span>
              <h2 className="font-serif-grains text-3xl sm:text-4xl font-bold text-[#1C1917] mt-2">
                Curated 3D Showcase Collections
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#1C1917] hover:text-[#9A7B56] transition-colors border-b border-[#1C1917]/20 pb-1"
            >
              <span>View All Collections</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-[#EFECE4] rounded-3xl overflow-hidden border border-[#1C1917]/10 flex flex-col justify-between group shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div
                  onClick={() => setActiveModalProduct(product)}
                  className="relative h-64 w-full overflow-hidden bg-white cursor-pointer"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1917]/80 backdrop-blur-md text-[#F5F2EB] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#9A7B56]/30 flex items-center gap-1">
                    <Box className="w-3 h-3 text-[#9A7B56]" />
                    <span>3D Model</span>
                  </div>

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-4 py-2 bg-[#1C1917] text-white text-xs font-mono uppercase tracking-wider rounded-full flex items-center gap-2 shadow-xl">
                      <Maximize2 className="w-3.5 h-3.5 text-[#9A7B56]" />
                      <span>Launch 3D View</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A7B56]">
                      {product.categoryLabel}
                    </span>
                    <h3
                      onClick={() => setActiveModalProduct(product)}
                      className="font-serif-grains text-lg font-bold text-[#1C1917] mt-1 group-hover:text-[#9A7B56] transition-colors line-clamp-1 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#1C1917]/60 line-clamp-2 mt-2 font-light">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1C1917]/10 flex items-center justify-between">
                    <span className="font-serif-grains text-lg font-bold text-[#1C1917]">
                      ${product.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="px-3.5 py-1.5 bg-[#1C1917] text-white hover:bg-[#9A7B56] rounded-full text-xs uppercase tracking-wider font-medium transition-colors shadow-sm"
                    >
                      3D View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Before & After Transformation Slider */}
      <section className="py-24 bg-[#EFECE4] border-y border-[#1C1917]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
              Interactive Architecture Transformation
            </span>
            <h2 className="font-serif-grains text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Before & After Interior Design
            </h2>
            <p className="text-sm text-[#1C1917]/70 font-light">
              Drag the interactive handle to reveal how GRAINS converts raw concrete shells into serene, warm luxury residences.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* Architectural Process Steps */}
      <section className="py-24 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
                Our Architectural Process
              </span>
              <h2 className="font-serif-grains text-3xl sm:text-4xl font-bold text-[#1C1917]">
                How We Bring 3D Visions To Physical Life
              </h2>
              <p className="text-sm text-[#1C1917]/70 font-light leading-relaxed">
                From initial 3D volumetric spatial rendering to hand-selecting sustainably harvested oak and teak timber, every step is executed with surgical precision.
              </p>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] text-[#F5F2EB] hover:bg-[#9A7B56] text-xs uppercase tracking-widest font-semibold rounded-full transition-colors shadow-md"
                >
                  <span>Read Craft Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  step: "01",
                  title: "Spatial & 3D Volumetric Planning",
                  desc: "We build high-precision WebGL 3D models of your floor plan to optimize light orientation, spatial layout, and circulation flow.",
                },
                {
                  step: "02",
                  title: "Artisanal Material Selection",
                  desc: "Hand-picking white oak, black walnut, natural travertine marble, and sustainable textured bouclé fabrics.",
                },
                {
                  step: "03",
                  title: "Bespoke Joinery & Fabrication",
                  desc: "Master woodworkers build custom furniture pieces following the exact 3D CAD specifications.",
                },
                {
                  step: "04",
                  title: "On-Site Installation & Curation",
                  desc: "Final turn-key interior setup, ambient lighting calibration, and architectural styling.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-6 p-6 bg-[#EFECE4] rounded-2xl border border-[#1C1917]/10 hover:border-[#9A7B56] transition-colors shadow-sm"
                >
                  <span className="font-serif-grains text-2xl font-bold text-[#9A7B56] bg-white px-3.5 py-1.5 rounded-xl border border-[#9A7B56]/20 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-serif-grains text-lg font-bold text-[#1C1917]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1C1917]/70 mt-1 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-24 bg-[#EFECE4] border-t border-[#1C1917]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
              Client Testimonials
            </span>
            <h2 className="font-serif-grains text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Acclaimed By Architects & Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#F5F2EB] p-8 rounded-3xl border border-[#1C1917]/10 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#9A7B56] text-[#9A7B56]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#1C1917]/80 italic font-light leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1917]/10 flex items-center justify-between">
                  <div>
                    <span className="font-serif-grains text-sm font-bold text-[#1C1917] block">
                      {t.author}
                    </span>
                    <span className="text-[10px] text-[#9A7B56] font-mono uppercase">
                      {t.role} • {t.location}
                    </span>
                  </div>
                  <Quote className="w-6 h-6 text-[#9A7B56]/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Call To Action Banner */}
      <section className="py-20 bg-[#1C1917] text-[#F5F2EB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B56] bg-[#9A7B56]/10 px-4 py-1.5 rounded-full border border-[#9A7B56]/30">
            Start Your 3D Interior Project
          </span>
          <h2 className="font-serif-grains text-3xl sm:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            Ready to Elevate Your Residence with Custom 3D Architecture?
          </h2>
          <p className="text-sm sm:text-base text-[#F5F2EB]/70 max-w-2xl mx-auto font-light leading-relaxed">
            Schedule a private consultation with our senior interior architects to configure custom furniture dimensions and spatial layouts.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#9A7B56] hover:bg-[#656D4A] text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Studio Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive 3D Modal */}
      {activeModalProduct && (
        <Image3DModal
          isOpen={!!activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          title={activeModalProduct.name}
          category={activeModalProduct.modelCategory}
          imageSrc={activeModalProduct.image}
          materials={activeModalProduct.materials}
          dimensions={activeModalProduct.dimensions}
          price={activeModalProduct.price}
        />
      )}

      <IntroBot />
      <Footer />
    </div>
  );
}
