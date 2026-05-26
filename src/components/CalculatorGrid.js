"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function CalculatorGrid({ calculators }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

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

  return (
    <section id="calculators" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 scroll-mt-20">
      {/* Search & Category Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#E2E8F0] pb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Financial & Business Tools
          </h2>
          <p className="text-lg text-[#64748B] max-w-xl">
            Filter by category or search below to find the exact calculator you need. Results update instantly.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80 shrink-0">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search calculators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] placeholder:text-[#94A3B8] hover:border-[#94A3B8] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/10 transition-all shadow-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0F172A] p-0.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Category Tags scrollable list */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-thin">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`whitespace-nowrap rounded-xl px-4.5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedTag === tag
                ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/15"
                : "bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0D9488] hover:border-[#0D9488]/30 hover:bg-[#F0FDFA]/20"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Calculator Cards Grid */}
      {filteredCalculators.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCalculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group relative flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-[#0D9488]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-[#F0FDFA] px-2.5 py-0.5 text-xs font-semibold text-[#0D9488]">
                {calc.tag}
              </span>
              <span className="text-3.5xl mb-4 group-hover:scale-110 transition-transform duration-200 self-start">
                {calc.icon}
              </span>
              <h3 className="text-lg font-extrabold text-[#0F172A] mb-2 group-hover:text-[#0D9488] transition-colors leading-tight">
                {calc.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                {calc.desc}
              </p>
              <div className="mt-5 border-t border-[#F1F5F9] pt-4 flex items-center justify-between text-sm font-bold text-[#0D9488]">
                <span>Use Calculator</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center rounded-2xl border-2 border-dashed border-[#E2E8F0] bg-white py-16 px-6">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-bold text-[#0F172A] mb-1">No calculators found</h3>
          <p className="text-[#64748B] max-w-sm mx-auto mb-6">
            We couldn&apos;t find any calculators matching &quot;{search}&quot;. Try adjusting your keywords.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0D9488] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0F766E] transition-all cursor-pointer"
          >
            Request a Custom Calculator
          </Link>
        </div>
      )}
    </section>
  );
}
