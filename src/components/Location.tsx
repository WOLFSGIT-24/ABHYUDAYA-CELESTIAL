import React, { useState, useEffect } from "react";
import { MapPin, Building, ExternalLink } from "lucide-react";
import { locationsData, projectSnapshot } from "../data";

interface LocationProps {
  onOpenEnquiry: () => void;
}

export default function Location({ onOpenEnquiry }: LocationProps) {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadMap(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const renderMap = () => {
    if (!loadMap) {
      return (
        <div className="w-full h-full bg-[#E5DED3]/40 animate-pulse flex items-center justify-center">
          <span className="text-xs text-[#0E172A]/70 font-body uppercase tracking-wider font-semibold">
            Loading Map...
          </span>
        </div>
      );
    }
    return (
      <iframe
        src="https://maps.google.com/maps?q=GH-18+Shalimar+One+World+Township+Shaheed+Path+Lucknow&t=&z=14&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Abhyudaya Celestial | Shalimar One World Shaheed Path Lucknow"
        className="w-full h-full"
      />
    );
  };

  return (
    <section id="location" className="w-full py-16 md:py-24 bg-[#FAF8F5] text-[#000000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2">
              Location & Connectivity
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#000000] leading-[1.15]">
              A Well-Connected Address <br className="hidden sm:block" /> on Shaheed Path, Lucknow
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Located at GH-18, Shalimar One World Township, Abhyudaya Celestial offers convenient access to Shaheed Path and some of Lucknow's important lifestyle, entertainment, healthcare, and commercial destinations. Enjoy the advantage of a premium residential address while staying connected to the places that matter.
            </p>
          </div>

        </div>

        {/* Two-Column: Commute Matrix & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
          
          {/* Left Column: Major Commercial & Transit Hubs */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-base sm:text-lg font-medium text-[#000000] tracking-tight mb-2">
              Major Commercial & Transit Hubs
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {locationsData.map((dest) => (
                <div
                  key={dest.id}
                  className="flex items-center justify-between p-3.5 sm:p-4 bg-white rounded-2xl shadow-xs border border-gray-200/80 hover:border-gray-300 transition-all"
                >
                  <div>
                    <span className="block font-body text-sm font-medium text-[#000000]">
                      {dest.name}
                    </span>
                    <span className="text-[11px] text-gray-500 font-normal">
                      {dest.distance}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-light text-xl sm:text-2xl text-[#000000] block">
                      {dest.times.driving}
                    </span>
                    <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider -mt-1 block">
                      Minutes
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-200/80 w-full h-[300px] sm:h-[420px] lg:h-[480px] bg-white">
              {renderMap()}
            </div>
            <button
              onClick={onOpenEnquiry}
              className="w-full bg-[#D4AF37] hover:bg-[#B5952F] text-white font-body text-xs sm:text-sm font-semibold tracking-wide py-3.5 rounded-full transition-all shadow-md flex items-center justify-center text-center cursor-pointer"
            >
              Get Location & Site Visit Details
            </button>
          </div>

        </div>

        {/* Dedicated Addresses Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Project Site Address */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-[#D4AF37] mb-3">
                <MapPin className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Project Site Address</span>
              </div>
              <h4 className="text-lg font-semibold text-[#000000] mb-2">
                Abhyudaya Celestial
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {projectSnapshot.projectAddress}
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-400">
                Shaheed Path, Lucknow
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=GH-18+Shalimar+One+World+Township+Shaheed+Path+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#000000] hover:text-[#D4AF37] transition-colors"
              >
                <span>Navigate on Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-[#D4AF37] mb-3">
                <Building className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Corporate / Office Address</span>
              </div>
              <h4 className="text-lg font-semibold text-[#000000] mb-2">
                Abhyudaya Office
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {projectSnapshot.officeAddress}
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-400">
                Gokhle Marg, Lucknow
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1%2F6+Gokhle+Marg+Lucknow+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#000000] hover:text-[#D4AF37] transition-colors"
              >
                <span>View on Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
