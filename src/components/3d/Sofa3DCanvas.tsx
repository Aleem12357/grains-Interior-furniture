"use client";

import React, { useState } from "react";
import Generic3DFurniture, { FurnitureFinish, FINISH_COLORS } from "./Generic3DFurniture";
import { Sparkles, RotateCw, Palette } from "lucide-react";

export default function Sofa3DCanvas() {
  const [isRotating, setIsRotating] = useState(true);
  const [activeFinish, setActiveFinish] = useState<FurnitureFinish>("cream");

  const finishList: FurnitureFinish[] = ["cream", "walnut", "sage", "charcoal", "oak"];

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] bg-[#EFECE4]/60 rounded-3xl border border-[#1C1917]/10 overflow-hidden shadow-inner flex flex-col justify-between group">
      {/* 3D Model Canvas */}
      <div className="w-full h-full">
        <Generic3DFurniture
          category="sofa"
          isRotating={isRotating}
          finish={activeFinish}
        />
      </div>

      {/* Top Finish Selector Pills */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 bg-[#1C1917]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#9A7B56]/30 text-white shadow-lg">
          <Palette className="w-3.5 h-3.5 text-[#9A7B56]" />
          <span className="text-[10px] font-mono uppercase tracking-wider hidden sm:inline">
            3D Finish:
          </span>
          <span className="text-[11px] font-medium text-[#9A7B56]">
            {FINISH_COLORS[activeFinish].name}
          </span>
        </div>

        {/* Color Swatch Buttons */}
        <div className="flex items-center gap-1.5 bg-[#1C1917]/80 backdrop-blur-md p-1 rounded-full border border-[#9A7B56]/30 shadow-lg">
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
              aria-label={`Select ${FINISH_COLORS[finish].name}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Control Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-[#1C1917]/85 backdrop-blur-md px-4 py-2.5 rounded-full text-white text-xs border border-[#9A7B56]/30 shadow-xl">
        <div className="flex items-center gap-2">
          <RotateCw className="w-3.5 h-3.5 text-[#9A7B56] animate-spin" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#F5F2EB]/90">
            Interactive WebGL
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="px-3 py-1 bg-[#9A7B56] hover:bg-[#656D4A] rounded-full text-[10px] uppercase tracking-wider font-semibold transition-colors shadow-sm"
          >
            {isRotating ? "Pause Orbit" : "Auto Rotate"}
          </button>
          <span className="hidden sm:inline text-[10px] text-[#F5F2EB]/60">
            360° Drag • Scroll Zoom
          </span>
        </div>
      </div>
    </div>
  );
}
