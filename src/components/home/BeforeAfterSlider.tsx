"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div
      className="relative w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden border border-[#1C1917]/15 shadow-2xl select-none cursor-ew-resize"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/IMG_20260905_235158_176.jpg"
          alt="Completed Interior Architecture Transformation"
          fill
          className="object-cover"
        />
        <div className="absolute top-6 right-6 bg-[#1C1917]/80 backdrop-blur-md text-[#F5F2EB] px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border border-[#9A7B56]/40">
          After: Artisanal GRAINS Interior
        </div>
      </div>

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute top-0 left-0 bottom-0 w-[100vw] max-w-7xl h-full">
          <Image
            src="/assets/IMG_20260905_235342_829.jpg"
            alt="Original Raw Space Before Design"
            fill
            className="object-cover filter grayscale contrast-125"
          />
          <div className="absolute top-6 left-6 bg-[#9A7B56]/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border border-white/20">
            Before: Raw Architectural Shell
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1C1917] border-2 border-[#9A7B56] text-white flex items-center justify-center shadow-lg">
          <MoveHorizontal className="w-5 h-5 text-[#9A7B56]" />
        </div>
      </div>
    </div>
  );
}
