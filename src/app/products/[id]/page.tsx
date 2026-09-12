"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroBot from "@/components/chat/IntroBot";
import Generic3DFurniture, { FurnitureFinish, FINISH_COLORS } from "@/components/3d/Generic3DFurniture";
import { products } from "@/data/products";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  Calendar,
  RotateCw,
  Palette,
  Box,
  Layers
} from "lucide-react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);

  const [activeTab, setActiveTab] = useState<"3d" | "photo">("3d");
  const [activeFinish, setActiveFinish] = useState<FurnitureFinish>("cream");
  const [isRotating, setIsRotating] = useState(true);
  const [inquirySent, setInquirySent] = useState(false);

  const finishList: FurnitureFinish[] = ["cream", "walnut", "sage", "charcoal", "oak"];

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F2EB] flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-40 space-y-4">
          <h1 className="font-serif-grains text-3xl font-bold">Furniture Piece Not Found</h1>
          <p className="text-sm text-[#1C1917]/70 font-light">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-2">
            {/* Left 3D Viewport / Image Container */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tab Selector */}
              <div className="flex items-center gap-3 bg-[#EFECE4] p-1.5 rounded-full border border-[#1C1917]/10 w-fit shadow-sm">
                <button
                  onClick={() => setActiveTab("3d")}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === "3d"
                      ? "bg-[#1C1917] text-[#F5F2EB] shadow-md font-semibold"
                      : "text-[#1C1917]/70 hover:text-[#9A7B56]"
                  }`}
                >
                  <Box className="w-3.5 h-3.5 text-[#9A7B56]" />
                  <span>Interactive 3D Canvas</span>
                </button>
                <button
                  onClick={() => setActiveTab("photo")}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === "photo"
                      ? "bg-[#1C1917] text-[#F5F2EB] shadow-md font-semibold"
                      : "text-[#1C1917]/70 hover:text-[#9A7B56]"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-[#9A7B56]" />
                  <span>High-Res Photography</span>
                </button>
              </div>

              {/* Display Area */}
              {activeTab === "3d" ? (
                <div className="relative w-full h-[450px] sm:h-[520px] bg-[#EFECE4] rounded-3xl border border-[#1C1917]/10 overflow-hidden shadow-inner flex flex-col justify-between">
                  <div className="w-full h-full">
                    <Generic3DFurniture
                      category={product.modelCategory}
                      isRotating={isRotating}
                      finish={activeFinish}
                    />
                  </div>

                  {/* Top Swatch Bar */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 bg-[#1C1917]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#9A7B56]/30 text-white shadow-lg">
                      <Palette className="w-3.5 h-3.5 text-[#9A7B56]" />
                      <span className="text-[10px] font-mono uppercase tracking-wider hidden sm:inline">
                        Finish:
                      </span>
                      <span className="text-[11px] font-medium text-[#9A7B56]">
                        {FINISH_COLORS[activeFinish].name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-[#1C1917]/85 backdrop-blur-md p-1 rounded-full border border-[#9A7B56]/30 shadow-lg">
                      {finishList.map((finish) => (
                        <button
                          key={finish}
                          onClick={() => setActiveFinish(finish)}
                          className={`w-6 h-6 rounded-full border-2 transition-all transform hover:scale-110 ${
                            activeFinish === finish
                              ? "border-[#9A7B56] scale-110 shadow-md ring-2 ring-white/30"
                              : "border-transparent opacity-80 hover:opacity-100"
                          }`}
                          style={{ backgroundColor: FINISH_COLORS[finish].hex }}
                          title={FINISH_COLORS[finish].name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-[#1C1917]/85 backdrop-blur-md px-4 py-2.5 rounded-full text-white text-xs border border-[#9A7B56]/30 shadow-xl">
                    <div className="flex items-center gap-2">
                      <RotateCw className="w-3.5 h-3.5 text-[#9A7B56] animate-spin" />
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#F5F2EB]/90">
                        WebGL 3D Interactive
                      </span>
                    </div>

                    <button
                      onClick={() => setIsRotating(!isRotating)}
                      className="px-3.5 py-1 bg-[#9A7B56] hover:bg-[#656D4A] rounded-full text-[10px] uppercase tracking-wider font-semibold transition-colors"
                    >
                      {isRotating ? "Pause Orbit" : "Auto Rotate"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative h-[480px] sm:h-[520px] w-full rounded-3xl overflow-hidden border border-[#1C1917]/10 bg-white shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Artisanal Specs */}
              <div className="bg-[#EFECE4] rounded-3xl p-6 sm:p-8 border border-[#1C1917]/10 space-y-6 shadow-sm">
                <h3 className="font-serif-grains text-xl font-bold text-[#1C1917]">
                  Artisanal Craftsmanship Specifications
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
                      3D Model Spatial File
                    </span>
                    <p className="font-medium text-[#1C1917] leading-relaxed">
                      Included with Consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product Summary & Consultation Form */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9A7B56] bg-[#9A7B56]/10 px-3.5 py-1.5 rounded-full border border-[#9A7B56]/20">
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

              {/* Inquiry Form */}
              <div className="bg-[#EFECE4] rounded-3xl p-6 sm:p-8 border border-[#1C1917]/10 space-y-5 shadow-sm">
                <h4 className="font-serif-grains text-lg font-bold text-[#1C1917]">
                  Request Custom 3D Order Quote
                </h4>
                <p className="text-xs text-[#1C1917]/70 font-light leading-relaxed">
                  Every GRAINS furniture piece is custom crafted to your exact spatial dimensions. Submit an inquiry to receive a 3D floorplan overlay.
                </p>

                {inquirySent ? (
                  <div className="p-5 bg-[#656D4A] text-[#F5F2EB] rounded-2xl text-xs space-y-1 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-white" />
                    <div>
                      <p className="font-bold">Inquiry Received!</p>
                      <p className="font-light">Our Senior Architect will contact you within 2 hours.</p>
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
                      placeholder="Your Full Name *"
                      className="w-full bg-white border border-[#1C1917]/15 rounded-xl px-4 py-3 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address *"
                      className="w-full bg-white border border-[#1C1917]/15 rounded-xl px-4 py-3 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56]"
                    />
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#1C1917] hover:bg-[#9A7B56] text-[#F5F2EB] rounded-xl text-xs font-semibold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 group"
                    >
                      <Sparkles className="w-4 h-4 text-[#9A7B56] group-hover:text-white" />
                      <span>Request 3D Custom Quote</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Guarantees */}
              <div className="space-y-3 text-xs text-[#1C1917]/80 pt-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#9A7B56]" />
                  <span>10-Year Structural Solid Timber Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-[#9A7B56]" />
                  <span>White-Glove Worldwide Delivery & Assembly</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#9A7B56]" />
                  <span>Interactive 3D Room Configurator File Included</span>
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
