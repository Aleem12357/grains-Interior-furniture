"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroBot from "@/components/chat/IntroBot";
import Generic3DFurniture from "@/components/3d/Generic3DFurniture";
import { products } from "@/data/products";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  Calendar,
} from "lucide-react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);

  const [activeTab, setActiveTab] = useState<"3d" | "photo">("3d");
  const [isRotating, setIsRotating] = useState(true);
  const [inquirySent, setInquirySent] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F2EB] flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-40 space-y-4">
          <h1 className="font-serif-grains text-3xl font-bold">Furniture Piece Not Found</h1>
          <p className="text-sm text-[#1C1917]/70">
            The requested 3D furniture item could not be retrieved from our catalog.
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-[#1C1917] text-white rounded-full text-xs uppercase tracking-widest font-semibold"
          >
            Back to Collections
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#1C1917] font-sans antialiased selection:bg-[#9A7B56] selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1C1917]/60 hover:text-[#9A7B56] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to 3D Collections</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 bg-[#EFECE4] p-1.5 rounded-full border border-[#1C1917]/10 w-fit">
                <button
                  onClick={() => setActiveTab("3d")}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    activeTab === "3d"
                      ? "bg-[#1C1917] text-[#F5F2EB] shadow-md font-semibold"
                      : "text-[#1C1917]/70 hover:text-[#9A7B56]"
                  }`}
                >
                  Interactive 3D Viewport
                </button>
                <button
                  onClick={() => setActiveTab("photo")}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    activeTab === "photo"
                      ? "bg-[#1C1917] text-[#F5F2EB] shadow-md font-semibold"
                      : "text-[#1C1917]/70 hover:text-[#9A7B56]"
                  }`}
                >
                  High-Res Photography
                </button>
              </div>

              {activeTab === "3d" ? (
                <div className="space-y-3">
                  <div className="relative w-full h-[380px] sm:h-[480px] bg-[#EFECE4]/50 rounded-3xl border border-[#1C1917]/10 overflow-hidden shadow-inner group">
                    <Generic3DFurniture
                      category={product.modelCategory}
                      isRotating={isRotating}
                    />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#1C1917]/80 backdrop-blur-md px-4 py-2.5 rounded-full text-white text-xs border border-[#9A7B56]/30">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#9A7B56] animate-pulse" />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#F5F2EB]/90">
                          Interactive 3D Viewport
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setIsRotating(!isRotating)}
                          className="px-3 py-1 bg-[#9A7B56] hover:bg-[#656D4A] rounded-full text-[10px] uppercase tracking-wider font-semibold transition-colors"
                        >
                          {isRotating ? "Pause Auto-Rotate" : "Auto Rotate"}
                        </button>
                        <span className="hidden sm:inline text-[10px] text-[#F5F2EB]/60">
                          Drag to Rotate • Scroll to Zoom
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#1C1917]/60 text-center font-mono">
                    * Use mouse/finger to orbit 360°, scroll to zoom, inspect joinery details.
                  </p>
                </div>
              ) : (
                <div className="relative h-[480px] w-full rounded-3xl overflow-hidden border border-[#1C1917]/10 bg-white shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="bg-[#EFECE4] rounded-3xl p-6 sm:p-8 border border-[#1C1917]/10 space-y-6">
                <h3 className="font-serif-grains text-xl font-semibold text-[#1C1917]">
                  Artisanal Specifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-1">
                    <span className="font-mono text-[#9A7B56] uppercase tracking-wider text-[10px] block">
                      Timber & Materials
                    </span>
                    <p className="font-medium text-[#1C1917] leading-relaxed">
                      {product.materials}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[#9A7B56] uppercase tracking-wider text-[10px] block">
                      Exact Dimensions
                    </span>
                    <p className="font-medium text-[#1C1917] leading-relaxed">
                      {product.dimensions}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[#9A7B56] uppercase tracking-wider text-[10px] block">
                      Designer Studio
                    </span>
                    <p className="font-medium text-[#1C1917] leading-relaxed">
                      {product.designer}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[#9A7B56] uppercase tracking-wider text-[10px] block">
                      3D Model License
                    </span>
                    <p className="font-medium text-[#1C1917] leading-relaxed">
                      Included in Project Consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B56] bg-[#9A7B56]/10 px-3 py-1 rounded-full border border-[#9A7B56]/20">
                  {product.categoryLabel}
                </span>
                <h1 className="font-serif-grains text-3xl sm:text-4xl font-bold text-[#1C1917]">
                  {product.name}
                </h1>
                <p className="font-serif-grains text-3xl font-bold text-[#9A7B56]">
                  ${product.price.toLocaleString()}
                </p>
              </div>

              <p className="text-sm text-[#1C1917]/80 font-light leading-relaxed border-t border-[#1C1917]/10 pt-4">
                {product.description}
              </p>

              <div className="bg-[#EFECE4] rounded-3xl p-6 border border-[#1C1917]/10 space-y-4 shadow-sm">
                <h4 className="font-serif-grains text-lg font-semibold text-[#1C1917]">
                  Custom Order & 3D Consultation
                </h4>
                <p className="text-xs text-[#1C1917]/70 font-light leading-relaxed">
                  Every GRAINS furniture piece is crafted to order. Submit an inquiry to request custom dimensions or request an in-home 3D spatial overlay.
                </p>

                {inquirySent ? (
                  <div className="p-4 bg-[#656D4A] text-[#F5F2EB] rounded-2xl text-xs space-y-1 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="font-bold">Inquiry Successfully Received!</p>
                      <p className="font-light">Our Senior Designer will reach out within 2 hours.</p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setInquirySent(true);
                    }}
                    className="space-y-3"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="w-full bg-white border border-[#1C1917]/15 rounded-xl px-4 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      className="w-full bg-white border border-[#1C1917]/15 rounded-xl px-4 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56]"
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#1C1917] hover:bg-[#9A7B56] text-[#F5F2EB] rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#9A7B56]" />
                      <span>Request Custom 3D Quote</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-3 text-xs text-[#1C1917]/80">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#9A7B56]" />
                  <span>10-Year Structural Timber Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-[#9A7B56]" />
                  <span>White-Glove Worldwide Delivery & Assembly</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#9A7B56]" />
                  <span>Interactive 3D Room Configurator Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <IntroBot />
      <Footer />
    </div>
  );
}
