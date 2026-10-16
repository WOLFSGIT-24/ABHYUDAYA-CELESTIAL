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
          src="/hero.webp"
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

      {/* Top Right Official UP RERA QR Code Badge */}
      <div className="absolute top-22 sm:top-28 right-3 sm:right-8 md:right-12 z-20 animate-fade-in">
        <a
          href={projectSnapshot.reraWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white/95 hover:bg-white backdrop-blur-md p-2 sm:p-3 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.35)] border border-white/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] cursor-pointer text-center"
          title="Scan or click to verify on UP RERA portal"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-xl overflow-hidden p-1 border border-gray-100 flex items-center justify-center">
            <img
              src="/qr-code.jpg"
              alt="Abhyudaya Celestial Official UP RERA QR Code"
              className="w-full h-full object-contain aspect-square select-none"
              width="128"
              height="128"
              loading="eager"
            />
          </div>
          <div className="mt-1.5 sm:mt-2">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#0E172A] tracking-wider uppercase block">
              UP RERA QR Code
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono text-gray-500 font-semibold block mt-0.5">
              UPRERAPRJ414462
            </span>
            <span className="hidden sm:inline-block text-[8px] text-[#D4AF37] font-semibold tracking-wide uppercase mt-0.5 group-hover:underline">
              Scan or Tap ↗
            </span>
          </div>
        </a>
      </div>

      {/* Main Content: Slightly below center on Mobile, Middle-Left on Desktop */}
      <div className="flex w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 justify-start my-auto pt-16 sm:pt-4 pb-12 sm:pb-32">
        <div className="max-w-xl lg:max-w-3xl text-left flex flex-col items-start space-y-4">
          
          {/* Subtitle / Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/50 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span>UP RERA: {projectSnapshot.reraNumber}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/90">Launch: {projectSnapshot.launchDate}</span>
          </div>

          {/* Large Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.15] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Abhyudaya Celestial | Shalimar One World, Shaheed Path
          </h1>

          {/* Description */}
          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl font-light drop-shadow-sm">
            Discover thoughtfully designed 3 BHK luxury residences at GH-18, Shalimar One World Township, Shaheed Path, Lucknow. Featuring contemporary living spaces, world-class amenities, and immediate transit access.
          </p>

          {/* Action Buttons & Quick Trust Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 w-full">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#D4AF37] hover:bg-[#B5952F] text-white font-body text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
            >
              Get Price List & Floor Plans
            </button>

            <a
              href={`tel:${projectSnapshot.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <svg className="h-4 w-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>{projectSnapshot.phonePrimary}</span>
            </a>

            <a
              href="#rera-details"
              className="text-white/90 hover:text-white text-xs tracking-wide underline underline-offset-4 decoration-[#D4AF37]/60 hover:decoration-[#D4AF37] transition-all py-2"
            >
              View RERA & Bank Details →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-6 sm:h-10 w-full relative z-10 shrink-0" />
    </section>
  );
}
