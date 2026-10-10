import React from "react";

interface ProjectHighlightsProps {
  onRequestDownload?: () => void;
  onOpenBooking?: () => void;
}

export default function ProjectHighlights({ onRequestDownload, onOpenBooking }: ProjectHighlightsProps) {
  return (
    <section id="highlights" className="w-full relative bg-[#FAF8F5] overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Highlights */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2">
                Project Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#000000] leading-[1.15]">
                What Makes Abhyudaya Celestial Worth Exploring?
              </h2>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4">
                <div className="w-1.5 bg-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#000000]">29-Storey Residential Tower</h3>
                  <p className="text-sm text-gray-600 mt-1">A contemporary high-rise development designed for modern urban living.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 bg-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#000000]">Spacious 3 BHK Residences</h3>
                  <p className="text-sm text-gray-600 mt-1">Thoughtfully planned homes with layouts designed around everyday comfort and functionality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 bg-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#000000]">Shalimar OneWorld Address</h3>
                  <p className="text-sm text-gray-600 mt-1">The advantage of living within one of Lucknow's prominent integrated residential townships.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 bg-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#000000]">Lifestyle & Recreation</h3>
                  <p className="text-sm text-gray-600 mt-1">Dedicated spaces for fitness, relaxation, recreation, and spending time with family.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 bg-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#000000]">Strategic Location</h3>
                  <p className="text-sm text-gray-600 mt-1">Convenient access to Shaheed Path and important destinations across Lucknow.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 h-full relative min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/silver_horizon/second-sec.png"
              alt="Abhyudaya Celestial Highlights"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
