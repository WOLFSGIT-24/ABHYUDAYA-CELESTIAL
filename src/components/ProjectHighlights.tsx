import React, { useState, useEffect } from "react";

interface ProjectHighlightsProps {
  onRequestDownload?: () => void;
  onOpenBooking?: () => void;
}

export default function ProjectHighlights({ onRequestDownload, onOpenBooking }: ProjectHighlightsProps) {
  const images = ["/interior/1.webp", "/interior/2.webp", "/interior/3.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

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
                  <h3 className="text-lg font-semibold text-[#000000]">UP RERA Approved & Launched</h3>
                  <p className="text-sm text-gray-600 mt-1">Registered under UPRERAPRJ414462/06/2025 (Official Launch: 11 June 2025). Fully sanctioned and verifiable on www.up-rera.in.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 bg-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#000000]">29-Storey Residential Tower</h3>
                  <p className="text-sm text-gray-600 mt-1">A contemporary high-rise development designed for modern urban luxury.</p>
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
                  <h3 className="text-lg font-semibold text-[#000000]">Shalimar One World Address</h3>
                  <p className="text-sm text-gray-600 mt-1">Located at GH-18, Shalimar One World Township, Shaheed Path, Lucknow with prime infrastructure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 bg-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#000000]">Strategic Location & Transit</h3>
                  <p className="text-sm text-gray-600 mt-1">Immediate access to Shaheed Path, Ekana Stadium, Phoenix Palassio Mall, and Lucknow International Airport.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="lg:col-span-5 h-full relative min-h-[400px] lg:min-h-[550px] rounded-2xl overflow-hidden shadow-2xl">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Interior View ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                loading="lazy"
              />
            ))}
            
            {/* Slider Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-[#D4AF37] w-8" : "bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
