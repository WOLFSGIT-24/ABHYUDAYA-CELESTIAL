import React, { useEffect } from "react";
import { X } from "lucide-react";
import { projectSnapshot } from "../data";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#000000]/90 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-[#E5DED3] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-[#E5DED3] bg-[#FAF8F5] shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#0E172A] font-bold">Terms & Conditions</h2>
            <p className="font-body text-xs text-[#A88758] mt-1 uppercase tracking-widest font-semibold">
              Abhyudaya Celestial by Abhyudaya
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E5DED3] text-[#4A5260] hover:text-[#0E172A] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body text-sm text-[#4A5260] leading-relaxed space-y-6">
          <p>
            Welcome to the official digital portal for <strong>Abhyudaya Celestial</strong>, developed by <strong>Abhyudaya</strong>. By accessing this portal, you agree to comply with the terms and statutory guidelines outlined herein.
          </p>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0E172A]">1. Project Representation</h3>
            <p>
              Abhyudaya Celestial is a 30-storey residential landmark comprising premium 3 BHK residences (approx. 1,107 sq. ft. & 1,428 sq. ft. RERA carpet area) situated at GH-18, Shalimar One World Township, Shaheed Path, Lucknow, Uttar Pradesh. All architectural representations, master plans, floor layouts, and 3D visual renderings are artistic impressions.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0E172A]">2. Statutory Compliance & UP RERA</h3>
            <p>
              The project is officially registered under the Real Estate (Regulation and Development) Act with the U.P. Real Estate Regulatory Authority:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#0E172A]">
              <li><strong>RERA Registration Number:</strong> {projectSnapshot.reraNumber}</li>
              <li><strong>Official UP RERA Website:</strong> <a href={projectSnapshot.reraWebsiteUrl} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline">{projectSnapshot.reraWebsite}</a></li>
              <li><strong>Project Launch Date:</strong> {projectSnapshot.launchDate}</li>
              <li>All residential dimensions and carpet areas adhere to statutory RERA standards.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0E172A]">3. Official Banking & Payment Channel</h3>
            <p>
              Under statutory directives, all prospective purchasers and allottees must remit booking tokens and construction installments solely to the designated State Bank of India collection account:
            </p>
            <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E5DED3] text-xs space-y-1">
              <p><strong>Bank Name:</strong> {projectSnapshot.bankDetails.bankName} (Lucknow)</p>
              <p><strong>Account Name:</strong> {projectSnapshot.bankDetails.accountName}</p>
              <p><strong>Collection Account Name:</strong> {projectSnapshot.bankDetails.collectionAccountName}</p>
              <p><strong>Account Number:</strong> {projectSnapshot.bankDetails.accountNumber}</p>
              <p><strong>IFSC Code:</strong> {projectSnapshot.bankDetails.ifscCode}, LUCKNOW</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold text-[#0E172A]">4. Official Contact & Addresses</h3>
            <ul className="list-none space-y-1.5 text-xs text-[#000000] bg-[#FAF8F5] p-4 rounded-xl border border-[#E5DED3]">
              <li><strong>Developer:</strong> {projectSnapshot.developerFull}</li>
              <li><strong>Project Site Address:</strong> {projectSnapshot.projectAddress}</li>
              <li><strong>Corporate Office Address:</strong> {projectSnapshot.officeAddress}</li>
              <li><strong>Contact:</strong> {projectSnapshot.phonePrimary}</li>
              <li><strong>Email:</strong> {projectSnapshot.email}</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#E5DED3] bg-[#FAF8F5] shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-sm bg-[#0E172A] text-white font-body text-xs font-bold tracking-wider uppercase hover:bg-[#1E2D4A] transition-colors cursor-pointer"
          >
            I Agree & Understand
          </button>
        </div>
      </div>
    </div>
  );
}
