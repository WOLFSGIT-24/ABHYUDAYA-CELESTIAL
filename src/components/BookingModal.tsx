import React, { useState } from "react";
import { X, Calendar, Sparkles, Check, Phone, Mail, User, Building, Landmark, ShieldCheck } from "lucide-react";
import { LeadSubmission } from "../types";
import { projectSnapshot } from "../data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  initialUnitType?: string | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  onAddLead,
  initialUnitType,
}: BookingModalProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    siteVisitDate: "",
    purchaseTimeline: "",
    preferredDate: "",
    preferredTime: "11:00",
    unitType: initialUnitType || "3 BHK Luxury Residence",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    let sanitizedValue = value;
    if (id === "phone") {
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (id === "fullName") {
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
    }
    
    setFormData((prev) => ({ ...prev, [id]: sanitizedValue }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Name should only contain letters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.budget) {
      newErrors.budget = "Please select your budget";
    }
    if (!formData.siteVisitDate) {
      newErrors.siteVisitDate = "Please select a site visit date";
    }
    if (!formData.purchaseTimeline) {
      newErrors.purchaseTimeline = "Please select when you plan to finalise";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      onAddLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        budget: formData.budget,
        siteVisitDate: formData.siteVisitDate,
        purchaseTimeline: formData.purchaseTimeline,
        preferredDate: formData.siteVisitDate || undefined,
        preferredTime: formData.preferredTime || undefined,
        source: "floor_plan_enquiry",
        notes: `Unlocked Floor Plans for ${formData.unitType} | Budget: ${formData.budget} | Finalise: ${formData.purchaseTimeline} | Visit: ${formData.siteVisitDate}`,
      });
      setLoading(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 bg-[#000000]/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative border border-[#E5DED3] max-h-[92vh] flex flex-col">
        <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#D4AF37] to-[#A88758]" />
        
        {/* Header bar */}
        <div className="bg-[#0E172A] p-5 sm:p-6 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Calendar className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold tracking-tight">
                Unlock Abhyudaya Celestial Layouts
              </h3>
              <p className="text-[10px] text-[#EFE4D2] uppercase tracking-widest font-bold">
                UP RERA: {projectSnapshot.reraNumber} • Launch: {projectSnapshot.launchDate}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-all text-white/80 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content/Form Area */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Full Name */}
              <div className="relative border-b border-gray-200 focus-within:border-[#0E172A] py-1">
                <label className="text-[9px] font-extrabold text-[#0E172A] uppercase tracking-wider block mb-1">
                  Your Full Name
                </label>
                <div className="flex items-center gap-2.5">
                  <User className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    pattern="[A-Za-z\s]+"
                    title="Please enter letters only"
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none placeholder:text-gray-400 py-1"
                  />
                </div>
                {errors.fullName && <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{errors.fullName}</p>}
              </div>

              {/* Email Address */}
              <div className="relative border-b border-gray-200 focus-within:border-[#0E172A] py-1">
                <label className="text-[9px] font-extrabold text-[#0E172A] uppercase tracking-wider block mb-1">
                  Email Address
                </label>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none placeholder:text-gray-400 py-1"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div className="relative border-b border-gray-200 focus-within:border-[#0E172A] py-1">
                <label className="text-[9px] font-extrabold text-[#0E172A] uppercase tracking-wider block mb-1">
                  Active Phone Number
                </label>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-xs font-bold text-[#0E172A]">+91</span>
                  <input
                    type="tel"
                    id="phone"
                    required
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10 digit mobile number"
                    className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none placeholder:text-gray-400 py-1"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-[10px] mt-1 absolute -bottom-4">{errors.phone}</p>}
              </div>

              {/* Budget */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#0E172A] uppercase tracking-wider block">
                  Budget*
                </label>
                <div className="border border-[#E5DED3] rounded-lg px-3 py-2 bg-[#FAF8F5] focus-within:border-[#0E172A] focus-within:bg-white transition-all">
                  <select
                    id="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent text-xs sm:text-sm font-body outline-none text-[#0E172A]"
                  >
                    <option value="">Select Budget*</option>
                    <option value="2.8 Cr">2.8 Cr</option>
                    <option value="3.5 Cr">3.5 Cr</option>
                    <option value="5.5 Cr">5.5 Cr</option>
                    <option value="Above 5.5 Cr">Above 5.5 Cr</option>
                  </select>
                </div>
                {errors.budget && <p className="text-red-500 text-[10px]">{errors.budget}</p>}
              </div>

              {/* Site Visit Date */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#0E172A] uppercase tracking-wider block">
                  Site Visit Date*
                </label>
                <div className="border border-[#E5DED3] rounded-lg px-3 py-2 bg-[#FAF8F5] focus-within:border-[#0E172A] focus-within:bg-white transition-all">
                  <input
                    type="date"
                    id="siteVisitDate"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.siteVisitDate}
                    onChange={handleChange}
                    className="w-full bg-transparent text-xs sm:text-sm font-body outline-none text-[#0E172A]"
                  />
                </div>
                {errors.siteVisitDate && <p className="text-red-500 text-[10px]">{errors.siteVisitDate}</p>}
              </div>

              {/* When are you planning to finalise */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#0E172A] uppercase tracking-wider block">
                  When are you planning to finalise?*
                </label>
                <div className="border border-[#E5DED3] rounded-lg px-3 py-2 bg-[#FAF8F5] focus-within:border-[#0E172A] focus-within:bg-white transition-all">
                  <select
                    id="purchaseTimeline"
                    required
                    value={formData.purchaseTimeline}
                    onChange={handleChange}
                    className="w-full bg-transparent text-xs sm:text-sm font-body outline-none text-[#0E172A]"
                  >
                    <option value="">Select Timeline*</option>
                    <option value="Immediately (Within 15 Days)">Immediately (Within 15 Days)</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="Within 1 to 3 Months">Within 1 to 3 Months</option>
                    <option value="More than 3 Months">More than 3 Months</option>
                  </select>
                </div>
                {errors.purchaseTimeline && <p className="text-red-500 text-[10px]">{errors.purchaseTimeline}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B5952F] text-white font-body text-xs font-bold tracking-widest uppercase py-4 rounded-lg shadow-lg disabled:opacity-50 cursor-pointer transition-all mt-3"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>UNLOCKING PLANS...</span>
                  </>
                ) : (
                  "VIEW FLOOR PLANS"
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-5 space-y-4 animate-fade-in">
              <div className="h-12 w-12 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-sm">
                <Check className="h-6 w-6" />
              </div>
              
              <div>
                <h4 className="font-display text-xl font-bold text-[#0E172A]">
                  Floor Plans Unlocked
                </h4>
                <p className="font-body text-xs text-[#4A5260] mt-1 max-w-sm mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. You now have full access to explore the Abhyudaya Celestial floor plans.
                </p>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E5DED3] text-left text-[11px] space-y-1">
                <p className="font-bold text-[#0E172A] flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Official Booking Account (SBI):</span>
                </p>
                <p className="text-gray-600">A/C: <span className="font-mono font-medium text-black">{projectSnapshot.bankDetails.accountNumber}</span> | IFSC: <span className="font-mono font-medium text-black">{projectSnapshot.bankDetails.ifscCode}</span></p>
                <p className="text-gray-500 text-[10px]">Collection: {projectSnapshot.bankDetails.collectionAccountName} • State Bank of India</p>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-[#0E172A] hover:bg-[#1E2D4A] text-[#EFE4D2] font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded-sm shadow-md transition-all cursor-pointer"
              >
                VIEW LAYOUTS
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
