"use client";

import Link from "next/link";
import AdSlot from "./AdSlot";
import Disclaimer from "./Disclaimer";
import RatingWidget from "./RatingWidget";
import ShareResults from "./ShareResults";
import PrintResults from "./PrintResults";
import ErrorBoundary from "./ErrorBoundary";
import { useCalculatorEmbedded } from "./CalculatorContext";

export default function CalculatorShell({
  title,
  subtitle,
  schemaData,
  children,
  results,
  seoContent,
  currentRoute,
}) {
  const { embedded } = useCalculatorEmbedded();

  // Embedded mode: render only the calculator form + results (for blog embeds)
  if (embedded) {
    return (
      <>
        {/* Calculator Form */}
        <div className="p-6">{children}</div>
        {/* Results */}
        {results && (
          <div className="px-6 pb-6">
            <h2 className="text-lg font-bold text-[#1d1a33] mb-5 flex items-center gap-2 transition-colors duration-300" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7c3aed] text-white text-xs">
                ✓
              </span>
              Your Results
            </h2>
            {results}
          </div>
        )}
      </>
    );
  }
  const path =
    currentRoute ||
    (title
      ? "/calculators/" +
        title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "")
      : "");
  const calcSlug = path.replace("/calculators/", "");

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-16">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm text-[#5d5a78] mb-8"
          aria-label="Breadcrumb"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Link href="/" className="hover:text-[#7c3aed] transition-colors">
            Home
          </Link>
          <svg
            className="w-3.5 h-3.5 text-[#928fab]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="text-[#5d5a78] truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1a33] tracking-tight mb-3 transition-colors duration-300" style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-[#5d5a78] max-w-2xl mx-auto transition-colors duration-300" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* AdSense Slot — Top */}
        <AdSlot position="top" />

        {/* Calculator Card */}
        <ErrorBoundary>
        <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] shadow-[0_1px_4px_rgba(29,26,51,0.04)] p-6 sm:p-8 transition-colors duration-300">
          {children}
        </div>

        {/* Results Section */}
        {results && (
          <div className="mt-8 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 sm:p-8 shadow-[0_1px_4px_rgba(29,26,51,0.04)] transition-colors duration-300" id="calculator-results">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-[var(--color-text-primary)] flex items-center gap-2 transition-colors duration-300" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-white text-xs">
                  ✓
                </span>
                Your Results
              </h2>
              <div className="flex items-center gap-2 print:hidden">
                <ShareResults title={title} />
                <PrintResults title={title} />
              </div>
            </div>
            {results}
          </div>
        )}
        </ErrorBoundary>

        {/* Rating Widget */}
        <div className="mt-8">
          <RatingWidget slug={calcSlug} />
        </div>

        {/* AdSense Slot — Bottom */}
        <AdSlot position="bottom" />

        {/* In-Article Ad */}
        <AdSlot position="in-article" />

        {/* SEO Content */}
        <article className="seo-content mt-10 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 sm:p-10 shadow-[0_1px_4px_rgba(29,26,51,0.04)] transition-colors duration-300">
          {seoContent}
        </article>

        {/* Disclaimer */}
        <Disclaimer />
      </div>
    </>
  );
}
