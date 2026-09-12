"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroBot from "@/components/chat/IntroBot";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import Image3DModal from "@/components/3d/Image3DModal";
import {
  Compass,
  ArrowUpRight,
  MapPin,
  Calendar,
  Box,
  Maximize2,
  Sparkles
} from "lucide-react";

const portfolioProjects = [
  {
    id: "kyoto-sanctuary",
    title: "Kyoto Organic Japandi Villa",
    location: "Kyoto, Japan",
    year: "2024",
    category: "Residential Architecture",
    description: "Full interior transformation of a 320sqm private residence using solid white oak timber, micro-cement walls, and bespoke GRAINS curved sofas.",
    image: "/assets/IMG_20260905_235301_126.jpg",
    modelCategory: "sofa" as const,
  },
  {
    id: "milan-penthouse",
    title: "Milan Architectural Loft",
    location: "Milan, Italy",
    year: "2024",
    category: "Penthouse Design",
    description: "Sleek obsidian wood panels, custom sculptural lighting, and high-contrast charcoal wool seating in a sunlit rooftop interior.",
    image: "/assets/IMG_20260905_235328_390.jpg",
    modelCategory: "interior" as const,
  },
  {
    id: "geneva-lakeside",
    title: "Geneva Lakeside Sanctuary",
    location: "Geneva, Switzerland",
    year: "2023",
    category: "Luxury Retreat",
    description: "Fluted travertine fireplaces, floating minimal platform beds, and floor-to-ceiling glass framed by reclaimed European oak.",
    image: "/assets/IMG_20260905_235333_698.jpg",
    modelCategory: "bed" as const,
  },
  {
    id: "tribeca-duplex",
    title: "Tribeca Heritage Duplex",
    location: "New York, USA",
    year: "2023",
    category: "Urban Residence",
    description: "Restoration of original exposed brick combined with GRAINS custom 3D furniture models and warm ambient lighting brass fixtures.",
    image: "/assets/IMG_20260905_235345_105.jpg",
    modelCategory: "table" as const,
  },
];

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<typeof portfolioProjects[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#1C1917] font-sans antialiased selection:bg-[#9A7B56] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#EFECE4] border-b border-[#1C1917]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A7B56]/15 border border-[#9A7B56]/30 text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
              <Compass className="w-3.5 h-3.5 text-[#9A7B56]" />
              <span>Interior Architecture Portfolio</span>
            </div>
            <h1 className="font-serif-grains text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
              Selected Architectural Case Studies
            </h1>
            <p className="text-base text-[#1C1917]/70 font-light leading-relaxed">
              Click any project image or action button to open an interactive 3D WebGL volumetric layout modal for that room.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {portfolioProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#EFECE4] rounded-3xl overflow-hidden border border-[#1C1917]/10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
              >
                <div
                  onClick={() => setActiveProject(project)}
                  className="relative h-80 sm:h-96 w-full overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C1917]/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-[#9A7B56]/30 flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-[#9A7B56]" />
                    <span>3D Room Model</span>
                  </div>

                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-5 py-2.5 bg-[#1C1917] text-white text-xs font-mono uppercase tracking-wider rounded-full flex items-center gap-2 shadow-2xl">
                      <Maximize2 className="w-4 h-4 text-[#9A7B56]" />
                      <span>Launch 3D Room Viewer</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#9A7B56] font-mono uppercase tracking-wider">
                    <span className="flex items-center gap-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#9A7B56]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#9A7B56]" />
                      {project.year}
                    </span>
                  </div>

                  <h3
                    onClick={() => setActiveProject(project)}
                    className="font-serif-grains text-2xl font-bold text-[#1C1917] group-hover:text-[#9A7B56] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1C1917]/70 font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-[#1C1917]/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="px-4 py-2 bg-[#1C1917] text-white hover:bg-[#9A7B56] rounded-full text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
                    >
                      3D Room Viewer
                    </button>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-[#1C1917] hover:text-[#9A7B56] transition-colors"
                    >
                      <span>Inquire Design</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Renovation Section */}
          <div className="pt-12 border-t border-[#1C1917]/10 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
                Interactive Renovation Showcase
              </span>
              <h2 className="font-serif-grains text-3xl font-bold text-[#1C1917]">
                Live Before & After Renovation
              </h2>
            </div>
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* Interactive 3D Modal */}
      {activeProject && (
        <Image3DModal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          title={activeProject.title}
          category={activeProject.modelCategory}
          imageSrc={activeProject.image}
          materials="Solid European White Oak, Micro-cement, Honed Travertine, Bouclé Wool"
          dimensions="Full Interior Architectural Volumetric Layout"
        />
      )}

      <IntroBot />
      <Footer />
    </div>
  );
}
