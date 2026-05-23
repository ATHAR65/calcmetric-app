"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "calcmetric-cookie-consent";

export default function CookieConsent() {
  const [bannerState, setBannerState] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem(CONSENT_KEY)) {
      return "hidden";
    }
    return "loading";
  });

  useEffect(() => {
    if (bannerState !== "loading") return;
    const timer = setTimeout(() => setBannerState("show"), 600);
    return () => clearTimeout(timer);
  }, [bannerState]);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setBannerState("hidden");
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setBannerState("hidden");
  };

  if (bannerState === "loading" || bannerState === "hidden") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
    >
      <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-2xl shadow-[#0F172A]/10 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-[#475569] leading-relaxed">
                We use cookies and similar technologies to serve relevant ads via Google
                AdSense and analyze site traffic. You can learn more in our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#0D9488] hover:text-[#0F766E] underline font-medium"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="rounded-lg border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-medium text-[#64748B] hover:bg-[#F8FAFC] hover:border-[#94A3B8] transition-all"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="rounded-lg bg-[#0D9488] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#0D9488]/20 hover:bg-[#0F766E] hover:-translate-y-0.5 transition-all"
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
