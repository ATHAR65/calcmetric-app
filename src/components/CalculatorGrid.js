"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";

// Accent colors per calculator category
const categoryAccent = {
  "Gig Economy": "#E8521A",
  "DoorDash": "#E8521A",
  "Merchant Fees": "#2563EB",
  "Stripe": "#2563EB",
  "Tax Tools": "#B45309",
  "UK": "#B45309",
  "E-Commerce": "#059669",
  "FBA": "#059669",
  "Retirement": "#7C3AED",
  "IRA": "#7C3AED",
  "Self-Employment": "#DC2626",
  "Freelance": "#DC2626",
  "Real Estate": "#059669",
  "Crypto": "#B45309",
  "Marketplace": "#2563EB",
  "Etsy": "#2563EB",
  "Paycheck": "#E8521A",
  "Loans": "#7C3AED",
  "Personal Finance": "#059669",
  "Auto & Loans": "#2563EB",
  "Debt Payoff": "#DC2626",
  "Savings & Education": "#7C3AED",
  "Savings & Planning": "#7C3AED",
  "Import & Trade": "#059669",
  "Tax Deductions": "#DC2626",
  "Freelancing": "#DC2626",
  "Automotive": "#2563EB",
  "Energy": "#059669",
};

function getAccentColor(tag) {
  return categoryAccent[tag] || "#E8521A";
}

export default function CalculatorGrid({ calculators }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [visible, setVisible] = useState(false);
  const searchRef = useRef(null);
  const cardsRef = useRef(null);

  // Get unique tags/categories
  const tags = useMemo(() => {
    const allTags = calculators.map((c) => c.tag);
    return ["All", ...Array.from(new Set(allTags))];
  }, [calculators]);

  // Filter calculators based on search and tag selection
  const filteredCalculators = useMemo(() => {
    return calculators.filter((calc) => {
      const matchesSearch =
        calc.title.toLowerCase().includes(search.toLowerCase()) ||
        calc.desc.toLowerCase().includes(search.toLowerCase()) ||
        calc.tag.toLowerCase().includes(search.toLowerCase());
      const matchesTag = selectedTag === "All" || calc.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [calculators, search, selectedTag]);

  // Scroll-triggered animation
  useEffect(() => {
    if (!cardsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="calculators" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-12" style={{ animation: "fadeUp 0.6s ease-out" }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1410] tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
          All Calculators & Tools
        </h2>
        <p className="text-lg text-[#8A7F72] max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Browse our full collection of free financial calculators. Filter by category or search to find what you need.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-10">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C4BAB0] pointer-events-none text-lg">🔍</span>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search calculators..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-10 py-3 rounded-[14px] border border-[#E8E3DA] bg-white text-sm text-[#1A1410] placeholder:text-[#C4BAB0] focus:border-[#1A1410] focus:shadow-[0_0_0_3px_rgba(26,20,16,0.06)] transition-all"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A7F72] hover:text-[#1A1410] p-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-thin">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
              selectedTag === tag
                ? "bg-[#1A1410] text-[#FAF8F4] font-semibold"
                : "bg-white border border-[#E8E3DA] text-[#8A7F72] hover:border-[#1A1410] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(26,20,16,0.08)]"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Calculator Cards Grid */}
      {filteredCalculators.length > 0 ? (
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCalculators.map((calc, index) => {
            const accentColor = getAccentColor(calc.tag);
            return (
              <Link
                key={calc.href}
                href={calc.href}
                className="card-green-line group relative flex flex-col rounded-[18px] border border-[#E8E3DA] bg-white p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)] hover:-translate-y-[5px] hover:scale-[1.01] hover:shadow-[0_20px_56px_rgba(26,20,16,0.13)] transition-all duration-300"
                style={{
                  animation: visible ? `fadeUp 0.5s ease-out ${0.05 + index * 0.07}s forwards` : "none",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {/* Tag badge */}
                <span
                  className="absolute top-4 right-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider"
                  style={{
                    color: accentColor,
                    background: accentColor + "2E",
                  }}
                >
                  {calc.tag}
                </span>

                {/* Icon */}
                <div className="w-[46px] h-[46px] flex items-center justify-center rounded-xl bg-[#FAF8F4] border border-[#E8E3DA] text-xl mb-4 group-hover:scale-110 group-hover:-rotate-[4deg] transition-all duration-200">
                  {calc.icon}
                </div>

                {/* Category */}
                <p className="text-[10px] uppercase font-semibold tracking-widest text-[#C4BAB0] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {calc.tag}
                </p>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-[#1A1410] mb-2 leading-snug" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                  {calc.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] font-light text-[#8A7F72] leading-relaxed flex-1 line-clamp-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                  {calc.desc}
                </p>

                {/* CTA Footer */}
                <div className="mt-4 pt-4 border-t border-[#E8E3DA] flex items-center justify-between">
                  <span
                    className="text-sm font-semibold flex items-center gap-1 transition-all duration-300"
                    style={{ color: accentColor }}
                  >
                    Open Tool
                    <span className="inline-block transition-all duration-300 group-hover:ml-[8px]" style={{ marginLeft: "4px" }}>→</span>
                  </span>
                  <span className="text-[10px] uppercase text-[#C4BAB0]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    Free · 2026
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center rounded-2xl border-2 border-dashed border-[#E8E3DA] bg-white py-16 px-6">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-bold text-[#1A1410] mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>No calculators found</h3>
          <p className="text-[#8A7F72] max-w-sm mx-auto mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            We couldn&apos;t find any calculators matching &quot;{search}&quot;. Try adjusting your keywords.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[12px] bg-[#1A1410] text-white px-5 py-2.5 text-sm font-semibold transition-all hover:bg-[#E8521A] cursor-pointer"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
          >
            Request a Calculator
          </Link>
        </div>
      )}
    </section>
  );
}
