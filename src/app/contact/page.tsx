"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroBot from "@/components/chat/IntroBot";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  Box
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#1C1917] font-sans antialiased selection:bg-[#9A7B56] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#EFECE4] border-b border-[#1C1917]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A7B56]/15 border border-[#9A7B56]/30 text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
              <Calendar className="w-3.5 h-3.5 text-[#9A7B56]" />
              <span>Architectural Consultation</span>
            </div>
            <h1 className="font-serif-grains text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
              Begin Your Interior Transformation
            </h1>
            <p className="text-base text-[#1C1917]/70 font-light leading-relaxed">
              Schedule a 1-on-1 private session with our senior interior architects or request bespoke 3D furniture spatial customization.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Form */}
            <div className="lg:col-span-7 bg-[#EFECE4] p-8 sm:p-10 rounded-3xl border border-[#1C1917]/10 shadow-sm space-y-6">
              <div className="space-y-2">
                <h2 className="font-serif-grains text-2xl font-bold text-[#1C1917]">
                  Book Studio Consultation
                </h2>
                <p className="text-xs text-[#1C1917]/70 font-light">
                  Fill in your project parameters and preferred date for a private design discussion.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#656D4A] text-[#F5F2EB] rounded-2xl space-y-3 text-center shadow-md">
                  <CheckCircle2 className="w-12 h-12 mx-auto text-white" />
                  <h3 className="font-serif-grains text-2xl font-bold">Consultation Confirmed!</h3>
                  <p className="text-xs text-[#F5F2EB]/90 font-light max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to GRAINS. Our design director will review your project parameters and send a calendar invitation within 2 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917]/70">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Julian Vance"
                        className="w-full bg-white border border-[#1C1917]/15 rounded-xl px-4 py-3 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917]/70">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. julian@domain.com"
                        className="w-full bg-white border border-[#1C1917]/15 rounded-xl px-4 py-3 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917]/70">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-white border border-[#1C1917]/15 rounded-xl px-4 py-3 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917]/70">
                        Service Required
                      </label>
                      <select className="w-full bg-white border border-[#1C1917]/15 rounded-xl px-4 py-3 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56]">
                        <option>Full Residence Interior Architecture</option>
                        <option>Bespoke 3D Furniture Customization</option>
                        <option>Commercial / Hospitality Design</option>
                        <option>Virtual Showroom Appointment</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#1C1917]/70">
                      Project Overview & Timeline
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your room dimensions, preferred wood tones, or target budget..."
                      className="w-full bg-white border border-[#1C1917]/15 rounded-xl p-4 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1C1917] hover:bg-[#9A7B56] text-white rounded-xl text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 group"
                  >
                    <Sparkles className="w-4 h-4 text-[#9A7B56] group-hover:text-white" />
                    <span>Submit Consultation Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Info Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#1C1917] text-[#F5F2EB] p-8 rounded-3xl border border-[#9A7B56]/30 space-y-6 shadow-xl">
                <h3 className="font-serif-grains text-2xl font-bold text-white">
                  GRAINS Flagship Showroom
                </h3>

                <div className="space-y-4 text-xs text-[#F5F2EB]/80 font-light">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#9A7B56] shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Studio Address</span>
                      <span>480 Architectural Way, Soho Design District, NY 10013</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#9A7B56] shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Direct Email</span>
                      <span>studio@grains-interiors.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#9A7B56] shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Studio Concierge</span>
                      <span>+1 (212) 890-4412</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#9A7B56] shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Visiting Hours</span>
                      <span>Monday – Saturday: 10:00 AM – 7:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-[#EFECE4] p-6 rounded-3xl border border-[#1C1917]/10 space-y-4 shadow-sm">
                <h4 className="font-serif-grains text-lg font-bold text-[#1C1917]">
                  Frequently Asked Questions
                </h4>

                <div className="space-y-3 text-xs text-[#1C1917]/80">
                  <div className="p-3.5 bg-white rounded-2xl border border-[#1C1917]/10">
                    <span className="font-bold block text-[#1C1917]">
                      Can I view furniture in 3D before ordering?
                    </span>
                    <span className="font-light text-[#1C1917]/70 mt-1 block leading-relaxed">
                      Yes! Every collection item on GRAINS includes an interactive 3D WebGL viewer with finish switches.
                    </span>
                  </div>

                  <div className="p-3.5 bg-white rounded-2xl border border-[#1C1917]/10">
                    <span className="font-bold block text-[#1C1917]">
                      Do you ship internationally?
                    </span>
                    <span className="font-light text-[#1C1917]/70 mt-1 block leading-relaxed">
                      We offer white-glove international delivery with on-site architectural assembly.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IntroBot />
      <Footer />
    </div>
  );
}
