import React from "react";
import { projectSnapshot } from "../data";

interface HeroProps {
  onOpenEnquiry: () => void;
  onRequestDownload?: () => void;
}

export default function Hero({ onOpenEnquiry, onRequestDownload }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center text-center overflow-hidden bg-[#8bb4dd]"
    >
      {/* Background Photography - Instant High-Priority LCP Render */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/silver_horizon/banner.png"
          alt="Abhyudaya Celestial Architectural Landmark"
          className="w-full h-full object-cover object-[center_top] sm:object-[center_top]"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />

        {/* Soft subtle sky gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4b82]/45 via-transparent to-transparent pointer-events-none" />


      </div>

      {/* Upper Empty Spacer for Fixed Header */}
      <div className="h-20 sm:h-36 w-full relative z-10 shrink-0" />

      {/* Main Content: Slightly below center on Mobile, Middle-Left on Desktop */}
      <div className="flex w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 justify-start my-auto pt-16 sm:pt-4 pb-12 sm:pb-32">
        <div className="max-w-xl lg:max-w-3xl text-left flex flex-col items-start space-y-4">
          
          {/* Subtitle / Eyebrow */}
          <span className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
            Premium 3 BHK Apartments in Lucknow Starting ₹1.66 Cr*
          </span>

          {/* Large Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.15] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Abhyudaya Celestial | Shalimar OneWorld, Gomti Nagar Extension
          </h1>

          {/* Description */}
          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Discover thoughtfully designed 3 BHK residences in an established residential township, with modern living spaces, lifestyle amenities, and convenient access to Shaheed Path.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-row items-center justify-start gap-3 w-auto">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#D4AF37] hover:bg-[#B5952F] text-white font-body text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
            >
              Get Price List & Floor Plans
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-6 sm:h-10 w-full relative z-10 shrink-0" />
    </section>
  );
}
