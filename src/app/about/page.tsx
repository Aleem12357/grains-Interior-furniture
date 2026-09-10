"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroBot from "@/components/chat/IntroBot";
import {
  Compass,
  ShieldCheck,
  Award,
  Feather,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#1C1917] font-sans antialiased selection:bg-[#9A7B56] selection:text-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-[#EFECE4] border-b border-[#1C1917]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A7B56]/15 border border-[#9A7B56]/30 text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
              <Feather className="w-3.5 h-3.5" />
              <span>Our Brand Philosophy</span>
            </div>
            <h1 className="font-serif-grains text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
              Where Organic Timber Grain Meets Architectural Precision
            </h1>
            <p className="text-base text-[#1C1917]/70 font-light leading-relaxed">
              GRAINS was founded on a singular principle: interior spaces should inspire absolute tranquility, combining natural tactile materials with modern 3D spatial technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
                The GRAINS Heritage
              </span>
              <h2 className="font-serif-grains text-3xl sm:text-4xl font-bold text-[#1C1917]">
                Sculpting Furniture as Living Architectural Art
              </h2>
              <p className="text-sm text-[#1C1917]/80 font-light leading-relaxed">
                We believe that every piece of furniture carries a story carved directly into its wood grain. By pairing traditional joinery techniques with real-time 3D WebGL visualization, GRAINS allows homeowners and architects to interactively experience their interiors before a single piece of timber is cut.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "100% Sustainably Sourced European Oak & Italian Walnut",
                  "Real-Time Interactive 3D Spatial Modelling for All Collections",
                  "Hand-applied Natural Organic Oils & Non-Toxic Finishes",
                  "White-Glove Architectural Installation Worldwide",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 text-xs font-medium text-[#1C1917]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#9A7B56] shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="relative h-[480px] w-full rounded-3xl overflow-hidden border border-[#1C1917]/10 shadow-xl group">
                <Image
                  src="/assets/IMG_20260905_235346_786.jpg"
                  alt="Master Woodworker crafting GRAINS furniture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#1C1917]/10">
            {[
              {
                icon: <Compass className="w-5 h-5" />,
                iconBg: "bg-[#9A7B56]",
                title: "3D Spatial Vision",
                desc: "We bridge physical furniture design with digital 3D interactivity, giving you complete clarity over proportions, lighting, and material harmony.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                iconBg: "bg-[#656D4A]",
                title: "Uncompromising Timber",
                desc: "We select slow-growth white oak and black walnut with rich grain character. Every surface is finished by hand for tactile perfection.",
              },
              {
                icon: <Award className="w-5 h-5 text-[#9A7B56]" />,
                iconBg: "bg-[#1C1917]",
                title: "Timeless Aesthetics",
                desc: "Rejecting fast furniture trends, GRAINS designs objects engineered to endure for generations and age gracefully with organic patina.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-[#EFECE4] p-8 rounded-3xl border border-[#1C1917]/10 space-y-4 hover:shadow-xl transition-all"
              >
                <div className={`w-10 h-10 rounded-full ${card.iconBg} text-white flex items-center justify-center shadow-md`}>
                  {card.icon}
                </div>
                <h3 className="font-serif-grains text-xl font-bold text-[#1C1917]">
                  {card.title}
                </h3>
                <p className="text-xs text-[#1C1917]/70 font-light leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IntroBot />
      <Footer />
    </div>
  );
}
