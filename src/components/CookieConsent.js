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
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setBannerState("hidden");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
  };

  if (bannerState === "hidden") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
    >
      <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] shadow-[0_10px_40px_rgba(26,20,16,0.08),0_2px_8px_rgba(26,20,16,0.04)] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                We value your privacy
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                We use cookies for analytics and to show relevant ads that keep our calculators free.
                You can decline non-essential cookies. Learn more in our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline font-medium"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="rounded-[100px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-main)] hover:border-[var(--color-text-primary)] transition-all"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="rounded-[100px] bg-[var(--color-dark)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-accent)] hover:-translate-y-0.5 transition-all"
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
