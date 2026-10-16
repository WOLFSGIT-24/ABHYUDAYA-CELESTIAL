import React, { useState, useEffect } from "react";
import { projectSnapshot } from "../data";

interface HeaderProps {
  onOpenBooking: () => void;
  onToggleAdmin: () => void;
  isAdminActive: boolean;
  onRequestDownload?: () => void;
}

export default function Header({ onOpenBooking, onRequestDownload }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Overview", id: "overview" },
    { label: "Highlights", id: "highlights" },
    { label: "Amenities", id: "amenities" },
    { label: "Floor Plans", id: "floor-plans" },
    { label: "Location", id: "location" },
    { label: "RERA & Bank", id: "rera-details" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#000000]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.15)] border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Left Brand: Clean Vector Logo */}
          <a
            href="#overview"
            onClick={(e) => handleLinkClick(e, "overview")}
            className="flex items-center gap-2 group focus:outline-none z-10"
          >
            <img
              src="/assets/silver_horizon/logo.jpg"
              alt="Abhyudaya Celestial Logo"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-md group-hover:opacity-90 transition-opacity"
              width="160"
              height="64"
            />
          </a>

          {/* Center Navigation Links matching the reference structure */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="font-body text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${projectSnapshot.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white font-medium transition-all shadow-sm active:scale-95"
              title="Call Sales Office"
            >
              <svg className="h-3.5 w-3.5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>{projectSnapshot.phonePrimary}</span>
            </a>

            <a
              href="#rera-details"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#D4AF37]/40 text-[11px] text-[#D4AF37] font-semibold tracking-wide transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>RERA Registered</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex bg-[#D4AF37] hover:bg-[#B5952F] text-white font-body text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 transition-all shadow-md cursor-pointer tracking-wide"
            >
              Get started
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer bg-[#D4AF37]/80 backdrop-blur-md"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-[#000000]/98 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 sm:p-8 space-y-4 animate-fade-in border-t border-white/10 overflow-y-auto">
          <div className="pb-3 border-b border-white/10 flex items-center justify-between">
            <img
              src="/assets/silver_horizon/logo.jpg"
              alt="Smart Infra Realty Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
              3 BHK Luxury
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="font-body text-base font-medium text-white/90 hover:text-[#D4AF37] tracking-wide py-2.5 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 space-y-3">
            <a
              href={`tel:${projectSnapshot.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-[#131E33] hover:bg-[#1B2844] text-white font-body text-sm font-semibold py-3.5 rounded-full border border-white/15 active:scale-[0.98] transition-all"
            >
              <svg className="h-4 w-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Call: {projectSnapshot.phonePrimary}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#D4AF37] hover:bg-[#B5952F] text-white font-body text-sm font-semibold py-3.5 rounded-full shadow-lg"
            >
              Book a Site Visit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
