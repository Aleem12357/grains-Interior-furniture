"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Box, Sparkles, Layers, RotateCw, Palette } from "lucide-react";
import Generic3DFurniture, { FurnitureFinish, FINISH_COLORS } from "./Generic3DFurniture";

interface Image3DModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: "sofa" | "table" | "chair" | "lighting" | "credenza" | "bed" | "armchair" | "interior";
  imageSrc: string;
  materials?: string;
  dimensions?: string;
  price?: number;
}

export default function Image3DModal({
  isOpen,
  onClose,
  title,
  category,
  imageSrc,
  materials,
  dimensions,
  price,
}: Image3DModalProps) {
  const [activeTab, setActiveTab] = useState<"3d" | "image">("3d");
  const [isRotating, setIsRotating] = useState(true);
  const [activeFinish, setActiveFinish] = useState<FurnitureFinish>("cream");

  const finishList: FurnitureFinish[] = ["cream", "walnut", "sage", "charcoal", "oak"];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-[#F5F2EB] rounded-3xl overflow-hidden border border-[#9A7B56]/30 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#1C1917] text-white hover:bg-[#9A7B56] transition-colors shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Visual Area (3D Canvas or Image) */}
          <div className="w-full md:w-3/5 h-80 md:h-[520px] bg-[#EFECE4] relative flex flex-col justify-between p-4">
            {/* View Mode Toggle */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#1C1917]/85 backdrop-blur-md p-1 rounded-full border border-[#9A7B56]/30 shadow-lg">
              <button
                onClick={() => setActiveTab("3d")}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                  activeTab === "3d"
                    ? "bg-[#9A7B56] text-white font-semibold"
                    : "text-[#F5F2EB]/70 hover:text-white"
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Model</span>
              </button>

              <button
                onClick={() => setActiveTab("image")}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                  activeTab === "image"
                    ? "bg-[#9A7B56] text-white font-semibold"
                    : "text-[#F5F2EB]/70 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Photo View</span>
              </button>
            </div>

            {/* Display Box */}
            <div className="w-full h-full pt-12 pb-10">
              {activeTab === "3d" ? (
                <Generic3DFurniture
                  category={category}
                  isRotating={isRotating}
                  finish={activeFinish}
                />
              ) : (
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image src={imageSrc} alt={title} fill className="object-cover" />
                </div>
              )}
            </div>

            {/* Finish selection swatches in 3D mode */}
            {activeTab === "3d" && (
              <div className="absolute bottom-16 left-4 right-4 z-20 flex items-center justify-between bg-[#1C1917]/85 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#9A7B56]/30 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A7B56] flex items-center gap-1">
                  <Palette className="w-3 h-3" />
                  {FINISH_COLORS[activeFinish].name}
                </span>

                <div className="flex items-center gap-1.5">
                  {finishList.map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setActiveFinish(finish)}
                      className={`w-5 h-5 rounded-full border transition-all ${
                        activeFinish === finish
                          ? "border-[#9A7B56] scale-125 shadow-md ring-2 ring-white/30"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: FINISH_COLORS[finish].hex }}
                      title={FINISH_COLORS[finish].name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 3D Auto-rotate toggle control */}
            {activeTab === "3d" && (
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-[#1C1917]/85 backdrop-blur-md px-4 py-2 rounded-full text-white text-[11px] border border-[#9A7B56]/20">
                <span className="font-mono text-[#9A7B56] flex items-center gap-1 text-[10px]">
                  <RotateCw className="w-3 h-3 animate-spin" />
                  WebGL 3D Interactive
                </span>
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className="px-3 py-1 bg-[#9A7B56] hover:bg-[#656D4A] text-white rounded-full font-semibold uppercase text-[9px] tracking-widest transition-colors"
                >
                  {isRotating ? "Pause Orbit" : "Auto Rotate"}
                </button>
              </div>
            )}
          </div>

          {/* Right Detail Information */}
          <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A7B56] bg-[#9A7B56]/10 px-3 py-1 rounded-full border border-[#9A7B56]/20">
                GRAINS 3D Architecture
              </span>
              <h3 className="font-serif-grains text-2xl font-bold text-[#1C1917]">{title}</h3>
              {price && (
                <p className="font-serif-grains text-2xl font-bold text-[#9A7B56]">
                  ${price.toLocaleString()}
                </p>
              )}

              <div className="space-y-3 pt-4 border-t border-[#1C1917]/10 text-xs">
                {materials && (
                  <div>
                    <span className="font-semibold text-[#1C1917] block font-mono uppercase text-[10px] text-[#9A7B56]">
                      Materials Specification:
                    </span>
                    <span className="text-[#1C1917]/80 leading-relaxed block mt-0.5">{materials}</span>
                  </div>
                )}

                {dimensions && (
                  <div>
                    <span className="font-semibold text-[#1C1917] block font-mono uppercase text-[10px] text-[#9A7B56]">
                      Proportional Dimensions:
                    </span>
                    <span className="text-[#1C1917]/80 leading-relaxed block mt-0.5">{dimensions}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#1C1917]/10">
              <a
                href="/contact"
                className="w-full py-3.5 bg-[#1C1917] hover:bg-[#9A7B56] text-[#F5F2EB] rounded-xl text-xs uppercase tracking-widest font-semibold transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-[#9A7B56] group-hover:text-white" />
                <span>Inquire 3D Customization</span>
              </a>
              <p className="text-[10px] text-[#1C1917]/50 text-center font-mono">
                Click and drag on the 3D viewport to rotate 360°
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
