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
        <div className="rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] p-5 sm:p-6 dark:bg-[#111827] dark:border-[#1E293B] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed transition-colors duration-300">
                We use cookies to improve your experience and analyze site traffic. Learn more in our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#6366F1] hover:text-[#4F46E5] underline font-medium"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#6B7280] hover:bg-[#F9FAFB] hover:border-[#D1D5DB] transition-all dark:bg-[#1E293B] dark:border-[#334155] dark:text-[#9CA3AF] dark:hover:bg-[#0B0F19] dark:hover:border-[#6B7280]"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="rounded-lg bg-[#6366F1] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#6366F1]/20 hover:bg-[#4F46E5] hover:-translate-y-0.5 transition-all"
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
