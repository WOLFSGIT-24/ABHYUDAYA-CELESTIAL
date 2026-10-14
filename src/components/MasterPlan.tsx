import React, { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

interface MasterPlanProps {
  onSelectUnit?: (unitType: string) => void;
  onOpenBooking?: () => void;
}

const masterPlanImages = [
  "/assets/silver_horizon/master_plan_ground.webp",
  "/assets/silver_horizon/master_plan_first.webp",
  "/assets/silver_horizon/master_plan_typical.webp",
  "/assets/silver_horizon/master_plan_typical_amenities.webp",
  "/assets/silver_horizon/master_plan_20th.webp"
];

export default function MasterPlan({ onSelectUnit, onOpenBooking }: MasterPlanProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? masterPlanImages.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === masterPlanImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="master-plan" className="w-full py-16 sm:py-24 bg-[#FAF8F5] text-[#000000] overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header matching above sections (Left headline, Right description) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-10 sm:mb-14">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#000000] leading-[1.15]">
              A masterplan designed with purpose
            </h2>
          </div>

          {/* Right Description & Action */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              The Abhyudaya Celestial masterplan offers a spacious and efficient layout for premium 3 BHK and 3 BHK + Servant residences. With a 30-storey residential tower located within Shalimar OneWorld, it ensures easy access and safety, creating a perfect blend of luxury and practicality.
            </p>
            <div>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#D4AF37] hover:bg-[#B5952F] text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center justify-center gap-2"
              >
                <ZoomIn className="h-4 w-4" />
                <span>Enlarge Master Plan</span>
              </button>
            </div>
          </div>

        </div>

        {/* Big Minimalist Master Plan Image Showcase Card */}
        <div className="bg-white border border-gray-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm relative group overflow-hidden">
          
          {/* Main Master Plan Slider Container */}
          <div
            onClick={() => setModalOpen(true)}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] bg-[#FAF8F5] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer border border-gray-100"
          >
            <img
              src={masterPlanImages[currentIndex]}
              alt={`Abhyudaya Celestial Master Plan ${currentIndex + 1}`}
              loading="lazy"
              className="w-full h-full object-contain p-2 sm:p-6 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Slider Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-md z-10 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-md z-10 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Slider Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {masterPlanImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-6 bg-[#D4AF37]" : "w-2 bg-gray-400/50"
                  }`}
                />
              ))}
            </div>

            {/* Subtle Zoom Hint on Hover (only visible if not hovering over buttons) */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="bg-black/80 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
                <ZoomIn className="h-4 w-4" />
                <span>Click to expand full blueprint</span>
              </div>
            </div>
          </div>

          {/* Key Project Specifications Footnote Stats Bar matching Brochure style */}
          <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-[#2C5E3B] text-white p-3.5 rounded-xl shadow-sm border border-[#1F472B]">
              <span className="text-[11px] text-[#A3C9A6] uppercase tracking-wider block font-medium">No. of Flats</span>
              <span className="text-base sm:text-lg font-bold">88 Flats</span>
            </div>
            <div className="bg-[#2C5E3B] text-white p-3.5 rounded-xl shadow-sm border border-[#1F472B]">
              <span className="text-[11px] text-[#A3C9A6] uppercase tracking-wider block font-medium">No. of Floors</span>
              <span className="text-base sm:text-lg font-bold">G+22 Floors</span>
            </div>
            <div className="bg-[#2C5E3B] text-white p-3.5 rounded-xl shadow-sm border border-[#1F472B]">
              <span className="text-[11px] text-[#A3C9A6] uppercase tracking-wider block font-medium">Parking</span>
              <span className="text-base sm:text-lg font-bold">Basement</span>
            </div>
            <div className="bg-[#2C5E3B] text-white p-3.5 rounded-xl shadow-sm border border-[#1F472B]">
              <span className="text-[11px] text-[#A3C9A6] uppercase tracking-wider block font-medium">Lifts</span>
              <span className="text-base sm:text-lg font-bold">3 (Schindler 8 Pax)</span>
            </div>
          </div>

        </div>

      </div>

      {/* High-Resolution Fullscreen Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-6xl w-full p-4 sm:p-6 relative shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#000000] tracking-tight">
                  Abhyudaya Celestial: Site Master Plan & Parking Plan
                </h3>
                <p className="text-xs text-gray-500">
                  G+30 Floors • Premium 3 BHK Residences • Dedicated Parking
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative overflow-auto flex-1 my-4 flex items-center justify-center bg-[#FAF8F5] p-2 sm:p-6 rounded-xl border border-gray-100 group">
              <img
                src={masterPlanImages[currentIndex]}
                alt={`Abhyudaya Celestial Full Master Plan ${currentIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain"
              />
              
              {/* Modal Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-4 rounded-full shadow-xl z-10 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-4 rounded-full shadow-xl z-10 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
              
              {/* Modal Slider Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {masterPlanImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-8 bg-[#D4AF37]" : "w-2.5 bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-gray-400 hidden sm:block">
                All layouts subject to final approvals
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#B5952F] text-white rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
