import React, { useState } from "react";
import { ShieldCheck, Landmark, Copy, Check, ExternalLink, MapPin, Calendar, Building, FileCheck } from "lucide-react";
import { projectSnapshot } from "../data";

interface ProjectDetailsProps {
  onOpenEnquiry?: () => void;
}

export default function ProjectDetails({ onOpenEnquiry }: ProjectDetailsProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="rera-details" className="w-full py-16 sm:py-24 bg-[#0a0f18] text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1b4b82]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <ShieldCheck className="h-4 w-4" />
            <span>Statutory Disclosures & Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-[1.15]">
            Project & Official Banking Details
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-light">
            Verified regulatory credentials and certified State Bank of India collection account details for Abhyudaya Celestial. Full transparency under U.P. Real Estate Regulatory Authority standards.
          </p>
        </div>

        {/* 2-Column Luxury Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: UP RERA & Project Statutory Information */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#131E33] to-[#0E172A] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <FileCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      UP RERA Registration
                    </h3>
                    <p className="text-xs text-gray-400">
                      U.P. Real Estate Regulatory Authority
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified
                </span>
              </div>

              {/* Detail Items */}
              <div className="py-6 space-y-4">
                
                {/* Official UP RERA QR Code & Verification Banner */}
                <div className="p-4 rounded-xl bg-black/50 border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-24 h-24 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center shadow-md">
                    <img
                      src="/qr-code.jpg"
                      alt="UP RERA Official QR Code"
                      className="w-full h-full object-contain aspect-square select-none"
                      width="96"
                      height="96"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase block">
                      Official UP RERA QR Code
                    </span>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      Scan with your smartphone camera to verify the official statutory records on the Uttar Pradesh RERA portal.
                    </p>
                    <a
                      href={projectSnapshot.reraWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#D4AF37] hover:underline font-semibold mt-1"
                    >
                      <span>Verify on {projectSnapshot.reraWebsite}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* RERA Number with Copy */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                      RERA Registration Number
                    </span>
                    <span className="text-base sm:text-lg font-mono font-bold text-[#D4AF37] tracking-wider">
                      {projectSnapshot.reraNumber}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(projectSnapshot.reraNumber, "rera")}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-all cursor-pointer border border-white/10"
                    title="Copy RERA Number"
                  >
                    {copiedField === "rera" ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-gray-300" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* UP RERA Website */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                      Official U.P. RERA Portal
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {projectSnapshot.reraWebsite}
                    </span>
                  </div>
                  <a
                    href={projectSnapshot.reraWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#B5952F] text-black text-xs font-semibold transition-all cursor-pointer"
                  >
                    <span>Verify Portal</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Launch Date */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-[#D4AF37] shrink-0" />
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                        Official Launch Date
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {projectSnapshot.launchDate}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#D4AF37] font-medium px-2.5 py-1 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                    Launched
                  </span>
                </div>

                {/* Project Site Address */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                        Project Site Address
                      </span>
                      <span className="text-sm text-gray-200 leading-relaxed font-normal block mt-0.5">
                        {projectSnapshot.projectAddress}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Office Address */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-start gap-3">
                    <Building className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                        Registered Office Address
                      </span>
                      <span className="text-sm text-gray-200 leading-relaxed font-normal block mt-0.5">
                        {projectSnapshot.officeAddress}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-gray-400 flex items-center justify-between">
              <span>Developer: <strong className="text-white font-medium">{projectSnapshot.developerFull}</strong></span>
              <span>Tower: <strong className="text-white font-medium">{projectSnapshot.storeyCount}</strong></span>
            </div>
          </div>

          {/* Card 2: Official Collection Account Details */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#162238] to-[#0D1524] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Top gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <Landmark className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      Official Collection Account
                    </h3>
                    <p className="text-xs text-gray-400">
                      State Bank of India • Designated Project Account
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold">
                  SBI Certified
                </span>
              </div>

              {/* Account details items */}
              <div className="py-6 space-y-3.5">
                
                {/* Account Number with Quick Copy */}
                <div className="p-4 rounded-xl bg-black/50 border border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                      Account Number
                    </span>
                    <span className="text-xl sm:text-2xl font-mono font-bold text-white tracking-widest mt-0.5 block">
                      {projectSnapshot.bankDetails.accountNumber}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(projectSnapshot.bankDetails.accountNumber, "accountNumber")}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#B5952F] text-black font-semibold text-xs transition-all cursor-pointer shadow-md"
                  >
                    {copiedField === "accountNumber" ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy A/C No.</span>
                      </>
                    )}
                  </button>
                </div>

                {/* IFSC Code with Quick Copy */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                      IFSC Code (Lucknow Branch)
                    </span>
                    <span className="text-lg font-mono font-bold text-[#D4AF37] tracking-wider mt-0.5 block">
                      {projectSnapshot.bankDetails.ifscCode}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(projectSnapshot.bankDetails.ifscCode, "ifsc")}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-all cursor-pointer border border-white/10"
                  >
                    {copiedField === "ifsc" ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-gray-300" />
                        <span>Copy IFSC</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Collection Account Name */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
                    Collection Account Name (COLL A/C)
                  </span>
                  <span className="text-base font-bold text-white tracking-wide mt-0.5 block">
                    {projectSnapshot.bankDetails.collectionAccountName}
                  </span>
                  <span className="text-[11px] text-gray-400 block mt-0.5">
                    Official booking collection descriptor
                  </span>
                </div>

                {/* Account Name & Bank */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium block">
                      Name Of The Account
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white block mt-0.5">
                      {projectSnapshot.bankDetails.accountName}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium block">
                      Bank Name
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white block mt-0.5">
                      {projectSnapshot.bankDetails.bankName} (Lucknow)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Cautionary Guidance Box */}
            <div className="mt-4 p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                  <strong className="text-white font-medium">Official Payment Notice:</strong> In compliance with UP RERA guidelines, all booking tokens, earnest money, and milestone installments must be made strictly to the official collection account <strong>ABHYUDAYA CELESTIAL</strong> at <strong>State Bank of India</strong>.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Fast Action Row */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-medium text-white">
              Ready to visit the site or require verified bank transfer documentation?
            </h4>
            <p className="text-xs text-gray-400">
              Our dedicated Abhyudaya relationship desk is available to assist you with priority slots.
            </p>
          </div>
          {onOpenEnquiry && (
            <button
              onClick={onOpenEnquiry}
              className="bg-[#D4AF37] hover:bg-[#B5952F] text-black font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide shrink-0"
            >
              Contact Relationship Manager
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
