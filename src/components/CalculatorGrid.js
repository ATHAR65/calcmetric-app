"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";

const categoryAccent = {
  "Gig Economy": "#c79a4b",
  "DoorDash": "#c79a4b",
  "Merchant Fees": "#2563EB",
  "Stripe": "#2563EB",
  "Tax Tools": "#c79a4b",
  "UK": "#c79a4b",
  "E-Commerce": "#059669",
  "FBA": "#059669",
  "Retirement": "#7C3AED",
  "IRA": "#7C3AED",
  "Self-Employment": "#c79a4b",
  "Freelance": "#c79a4b",
  "Real Estate": "#059669",
  "Crypto": "#c79a4b",
  "Marketplace": "#2563EB",
  "Etsy": "#2563EB",
  "Paycheck": "#c79a4b",
  "Loans": "#7C3AED",
  "Personal Finance": "#059669",
  "Auto & Loans": "#2563EB",
  "Debt Payoff": "#c79a4b",
  "Savings & Education": "#7C3AED",
  "Savings & Planning": "#7C3AED",
  "Import & Trade": "#059669",
  "Tax Deductions": "#c79a4b",
  "Freelancing": "#c79a4b",
  "Automotive": "#2563EB",
  "Energy": "#059669",
  "Property": "#059669",
};

function getAccentColor(tag) {
  return categoryAccent[tag] || "#c79a4b";
}

export default function CalculatorGrid({ calculators }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [visible, setVisible] = useState(false);
  const searchRef = useRef(null);
  const cardsRef = useRef(null);

  const tags = useMemo(() => {
    const allTags = calculators.map((c) => c.tag);
    return ["All", ...Array.from(new Set(allTags))];
  }, [calculators]);

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
      <div className="mb-11">
        <div className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
          <span className="w-[26px] h-[1.5px] inline-block" style={{ background: "var(--color-gold)" }} />
          All calculators
        </div>
        <h2 className="text-[32px] sm:text-[38px] font-semibold tracking-tight mb-3.5" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
          Browse the full collection
        </h2>
        <p className="text-[17px]" style={{ color: "var(--color-text-secondary)" }}>
          Filter by category or search to find exactly what you need.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mb-8">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-lg" style={{ color: "var(--color-text-muted)" }}>🔍</span>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search calculators..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-10 py-3 rounded-lg border bg-white text-sm transition-all"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2.5 overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-thin flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className="whitespace-nowrap rounded-full px-4 py-2 text-[13.5px] font-semibold transition-all duration-200 cursor-pointer border"
            style={
              selectedTag === tag
                ? { background: "var(--color-navy)", color: "#fff", borderColor: "var(--color-navy)", fontFamily: "var(--font-body)" }
                : { background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)", borderColor: "var(--color-border)", fontFamily: "var(--font-body)" }
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filteredCalculators.length > 0 ? (
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCalculators.map((calc, index) => {
            const accentColor = getAccentColor(calc.tag);
            return (
              <Link
                key={calc.href}
                href={calc.href}
                className="card-green-line group relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  borderColor: "var(--color-border)",
                  animation: visible ? `fadeUp 0.5s ease-out ${0.05 + index * 0.07}s forwards` : "none",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11.5px] font-bold tracking-[0.06em] uppercase"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {calc.tag}
                  </span>
                  <span
                    className="w-9 h-9 rounded-[9px] grid place-items-center text-[15px] font-bold"
                    style={{ background: "var(--color-bg-tertiary)", fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
                  >
                    {calc.icon}
                  </span>
                </div>

                <h3 className="text-[17px] font-semibold mb-2 leading-snug" style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}>
                  {calc.title}
                </h3>

                <p className="text-[14px] leading-relaxed flex-1 line-clamp-2" style={{ color: "var(--color-text-secondary)" }}>
                  {calc.desc}
                </p>

                <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
                  <span className="text-[14px] font-bold flex items-center gap-1.5 transition-all duration-300" style={{ color: "var(--color-navy)" }}>
                    Open Tool
                    <span className="inline-block transition-all duration-300 group-hover:ml-2" style={{ color: "var(--color-gold)" }}>→</span>
                  </span>
                  <span className="text-[12px]" style={{ color: "var(--color-text-secondary)" }}>
                    Free &middot; 2026
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center rounded-2xl border-2 border-dashed bg-white py-16 px-6" style={{ borderColor: "var(--color-border)" }}>
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}>No calculators found</h3>
          <p className="max-w-sm mx-auto mb-6" style={{ color: "var(--color-text-secondary)" }}>
            We couldn&apos;t find any calculators matching &quot;{search}&quot;. Try adjusting your keywords.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg text-white px-5 py-2.5 text-sm font-bold transition-all"
            style={{ background: "var(--color-navy)" }}
          >
            Request a Calculator
          </Link>
        </div>
      )}

      <div className="flex justify-center mt-10">
        <a
          href="#calculators"
          className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-bold text-white rounded-lg transition-all hover:opacity-90"
          style={{ background: "var(--color-navy)", fontFamily: "var(--font-body)" }}
        >
          View All 55+ Calculators
        </a>
      </div>
    </section>
  );
}
