"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "themetricapp-cookie-consent";

export default function CookieConsent() {
  const [bannerState, setBannerState] = useState("hidden");

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setBannerState("show"), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setBannerState("hidden");
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setBannerState("hidden");
  };

  if (bannerState === "hidden") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
    >
      <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-2xl border border-[#E8E3DA] bg-white shadow-[0_10px_40px_rgba(26,20,16,0.08),0_2px_8px_rgba(26,20,16,0.04)] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-[#8A7F72] leading-relaxed transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                We use cookies to improve your experience and analyze site traffic. Learn more in our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#E8521A] hover:text-[#D04A16] underline font-medium"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="rounded-[100px] border border-[#E8E3DA] bg-white px-4 py-2.5 text-sm font-medium text-[#8A7F72] hover:bg-[#FAF8F4] hover:border-[#1A1410] transition-all"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="rounded-[100px] bg-[#1A1410] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#E8521A] hover:-translate-y-0.5 transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
