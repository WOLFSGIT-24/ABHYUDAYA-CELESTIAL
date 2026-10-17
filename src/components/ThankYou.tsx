import React, { useEffect } from "react";
import { CheckCircle2, Phone, Calendar, Clock, ArrowLeft, ShieldCheck, Landmark, MapPin, Building } from "lucide-react";
import { projectSnapshot } from "../data";

interface ThankYouProps {
  onBackToHome: () => void;
  leadData?: {
    fullName?: string;
    phone?: string;
    email?: string;
    budget?: string;
    siteVisitDate?: string;
    purchaseTimeline?: string;
  } | null;
}

export default function ThankYou({ onBackToHome, leadData }: ThankYouProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#070C16] text-white font-body flex flex-col justify-between selection:bg-[#D4AF37] selection:text-black">
      {/* Top Navigation Bar */}
      <header className="w-full bg-[#090F1D]/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-20 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 group cursor-pointer"
            title="Return to Abhyudaya Celestial Homepage"
          >
            <img
              src="/assets/silver_horizon/ARS_LOGO_Black.svg"
              alt="Abhyudaya Celestial Logo"
              className="h-10 sm:h-12 w-auto object-contain filter brightness-0 invert"
              width="140"
              height="48"
            />
          </button>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${projectSnapshot.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white font-medium transition-all active:scale-95 shadow-sm"
            >
              <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">Priority Desk:</span>
              <span className="font-semibold">{projectSnapshot.phonePrimary}</span>
            </a>

            <button
              onClick={onBackToHome}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF37] hover:bg-[#B5952F] text-black text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-md active:scale-95"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Thank You Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 w-full flex flex-col items-center text-center">
        
        {/* Verification Icon & Pulse */}
        <div className="relative mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#10B981]/20 to-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.25)] animate-fade-in">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#10B981] flex items-center justify-center shadow-lg">
              <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>Inquiry Successfully Registered</span>
          <span className="text-white/40">•</span>
          <span className="text-white/80 font-mono">UP RERA: {projectSnapshot.reraNumber}</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight max-w-2xl">
          Thank You for Connecting with{" "}
          <span className="text-[#D4AF37] font-semibold">Abhyudaya Celestial</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl font-light leading-relaxed">
          {leadData?.fullName ? (
            <>Thank you, <strong className="text-white font-medium">{leadData.fullName}</strong>. </>
          ) : null}
          Your details have been securely recorded. Our dedicated senior relationship desk is reviewing your requirements for 3 BHK luxury residences at Shalimar One World, Lucknow.
        </p>

        {/* Personalized Booking Summary Card if submitted */}
        {leadData && (leadData.budget || leadData.siteVisitDate || leadData.purchaseTimeline) && (
          <div className="w-full mt-8 bg-gradient-to-b from-[#131E33] to-[#0A1222] rounded-2xl p-5 sm:p-7 border border-[#D4AF37]/30 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-xs font-semibold text-white tracking-wider uppercase">
                  Your Registered Preferences
                </span>
              </div>
              <span className="text-[11px] text-[#10B981] font-medium bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/20">
                Verified Lead
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
              {leadData.budget && (
                <div className="bg-black/40 rounded-xl p-3.5 border border-white/5">
                  <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Estimated Budget</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">{leadData.budget}</span>
                </div>
              )}

              {leadData.siteVisitDate && (
                <div className="bg-black/40 rounded-xl p-3.5 border border-white/5">
                  <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Requested Site Visit</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">{leadData.siteVisitDate}</span>
                </div>
              )}

              {leadData.purchaseTimeline && (
                <div className="bg-black/40 rounded-xl p-3.5 border border-white/5">
                  <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Planning to Finalise</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">{leadData.purchaseTimeline}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step-by-Step "What Happens Next" */}
        <div className="w-full mt-8 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 text-left">
          <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#D4AF37]" />
            <span>What Happens Next?</span>
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-white/5">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">Priority Assignment</h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Your inquiry is assigned directly to a dedicated relationship manager at Abhyudaya.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-white/5">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">Direct Consultation</h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  You will receive a call within 15–30 minutes with official pricing & layout specifications.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-white/5">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">VIP Site Tour</h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Confirmed walkthrough at GH-18, Shalimar One World, Shaheed Path on your scheduled date.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Connect Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-2xl px-2">
          <a
            href={`tel:${projectSnapshot.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#D4AF37] hover:bg-[#C29D2A] text-black font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0 border border-[#F3DB83]/40"
          >
            <Phone className="h-4 w-4 shrink-0 text-black fill-black/15" />
            <span className="whitespace-nowrap font-bold">Call Sales Desk: {projectSnapshot.phonePrimary}</span>
          </a>

          <a
            href={`https://wa.me/91${projectSnapshot.phoneRaw}?text=Hi%2C%20I%20have%20submitted%20an%20inquiry%20for%20Abhyudaya%20Celestial.%20Please%20connect%20with%20me.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-[#25D366]/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0 border border-white/20"
          >
            <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="whitespace-nowrap font-bold">Chat on WhatsApp</span>
          </a>
        </div>

        {/* Back to Home Button */}
        <div className="mt-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer underline underline-offset-4 decoration-white/20 hover:decoration-[#D4AF37]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Abhyudaya Celestial Homepage</span>
          </button>
        </div>

        {/* Official Statutory Footer Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-[11px] text-gray-500 max-w-xl">
          <p>
            Official UP RERA Registration No. <span className="font-mono text-gray-300 font-semibold">{projectSnapshot.reraNumber}</span>. Designated collection account <span className="text-gray-300 font-medium">{projectSnapshot.bankDetails.collectionAccountName}</span> at State Bank of India.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#050811] py-4 border-t border-white/5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {projectSnapshot.developerFull}. All rights reserved.
      </footer>
    </div>
  );
}
