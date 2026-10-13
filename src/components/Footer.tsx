import React from "react";
import { Phone, Mail, MapPin, Building, Landmark, ArrowUpRight, ShieldCheck, ExternalLink } from "lucide-react";
import { projectSnapshot } from "../data";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenBooking?: () => void;
  onRequestDownload?: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms, onOpenBooking }: FooterProps = {}) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#000000] text-white pt-14 sm:pt-20 pb-36 md:pb-16 border-t border-white/10 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        
        {/* Top Minimal Brand & CTA Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-10 sm:pb-16 border-b border-white/10">
          <div className="space-y-4 max-w-xl">
            <img
              src="/assets/silver_horizon/logo.jpg"
              alt="Abhyudaya Celestial Logo"
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <p className="text-xl sm:text-2xl md:text-3xl font-normal text-white/90 tracking-tight leading-snug">
              A new benchmark in elevated living. 29 storeys of luxury at Shalimar One World, Shaheed Path, Lucknow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleScrollTo("lead-capture-section")}
              className="bg-[#D4AF37] hover:bg-[#B5952F] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center gap-2 border border-white/20"
            >
              <span>Book a private tour</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Middle Clean 3-Column Info Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 sm:py-14 border-b border-white/10">
          
          {/* Col 1: Addresses & Developer */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#D4AF37] block">
              Official Addresses
            </span>
            
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-medium block">
                    Project Site Address
                  </span>
                  <p className="text-white/90 leading-relaxed text-xs sm:text-sm">
                    {projectSnapshot.projectAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Building className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-medium block">
                    Corporate Office Address
                  </span>
                  <p className="text-white/90 leading-relaxed text-xs sm:text-sm">
                    {projectSnapshot.officeAddress}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 pt-1">
              Developed by <strong className="text-white font-medium">{projectSnapshot.developerFull}</strong>
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#D4AF37] block">
              Navigation
            </span>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              {[
                { label: "Overview", id: "overview" },
                { label: "Highlights", id: "highlights" },
                { label: "Amenities", id: "amenities" },
                { label: "Floor Plans", id: "floor-plans" },
                { label: "Location & Site", id: "location" },
                { label: "RERA & Bank Details", id: "rera-details" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Connect & Official Banking */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#D4AF37] block">
              Official Collection & Contact
            </span>
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                <Landmark className="h-4 w-4" />
                <span>State Bank of India</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-gray-300 text-[11px] pt-1">
                <div>
                  <span className="text-gray-500 block">A/C Number:</span>
                  <span className="font-mono font-medium text-white">{projectSnapshot.bankDetails.accountNumber}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">IFSC Code:</span>
                  <span className="font-mono font-medium text-white">{projectSnapshot.bankDetails.ifscCode}</span>
                </div>
              </div>
              <div className="pt-1 text-[11px] text-gray-400">
                <span className="text-gray-500 block">Collection Account:</span>
                <span className="text-white font-medium">{projectSnapshot.bankDetails.collectionAccountName}</span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-white/80">
              <a
                href={`tel:${projectSnapshot.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <Phone className="h-3.5 w-3.5 text-white/60 shrink-0" />
                <span>{projectSnapshot.phonePrimary}</span>
              </a>
              <a
                href={`mailto:${projectSnapshot.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <Mail className="h-3.5 w-3.5 text-white/60 shrink-0" />
                <span>{projectSnapshot.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Prominent Statutory & UP RERA Compliance Strip */}
        <div className="py-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white/[0.02] -mx-4 px-4 sm:-mx-8 sm:px-8 rounded-xl my-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block">
                UP RERA Registration Number
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-[#D4AF37] tracking-wider">
                {projectSnapshot.reraNumber}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
            <div>
              <span className="text-gray-500 block text-[10px] uppercase">Official Launch Date</span>
              <span className="font-medium text-white">{projectSnapshot.launchDate}</span>
            </div>
            <div className="h-6 w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="text-gray-500 block text-[10px] uppercase">RERA Portal</span>
              <a
                href={projectSnapshot.reraWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D4AF37] font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>{projectSnapshot.reraWebsite}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Compliance & Legal Row */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/50">
          <div>
            <p className="text-[11px] text-white/40 max-w-2xl leading-relaxed">
              Abhyudaya Celestial (RERA Reg: {projectSnapshot.reraNumber}) is an approved project by {projectSnapshot.developerFull}. All plans, illustrations, and specifications are conceptual and subject to statutory approvals under Uttar Pradesh RERA. Please verify all details at {projectSnapshot.reraWebsite}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
            <span>© {new Date().getFullYear()} {projectSnapshot.developerFull}</span>
            <span>•</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
