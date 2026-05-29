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
    <section id="calculators" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111827] dark:text-[#F9FAFB] tracking-tight mb-4">
          All Calculators & Tools
        </h2>
        <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
          Browse our full collection of free financial calculators. Filter by category or search to find what you need.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-10">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search calculators..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#111827] placeholder:text-[#9CA3AF] hover:border-[#9CA3AF] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all shadow-sm dark:bg-[#111827] dark:border-[#334155] dark:text-[#F9FAFB] dark:placeholder:text-[#6B7280] dark:hover:border-[#6B7280]"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#111827] p-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category Tags */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-thin">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
              selectedTag === tag
                ? "bg-[#6366F1] text-white shadow-sm shadow-[#6366F1]/20"
                : "bg-white border border-[#E5E7EB] text-[#6B7280] hover:text-[#6366F1] hover:border-[#6366F1]/30 hover:bg-[#EEF2FF] dark:bg-[#111827] dark:border-[#334155] dark:text-[#9CA3AF] dark:hover:text-[#818CF8] dark:hover:border-[#6366F1]/30 dark:hover:bg-[#6366F1]/10"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Calculator Cards Grid */}
      {filteredCalculators.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCalculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group relative flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#111827] dark:border-[#1E293B] dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            >
              {/* Tag badge */}
              <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#6366F1] dark:bg-[#6366F1]/15 dark:text-[#818CF8]">
                {calc.tag}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-xl mb-4 group-hover:scale-110 transition-transform duration-200 dark:bg-[#0B0F19] dark:border-[#334155]">
                {calc.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#111827] dark:text-[#F9FAFB] mb-2 group-hover:text-[#6366F1] dark:group-hover:text-[#818CF8] transition-colors leading-snug">
                {calc.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed flex-1 line-clamp-2">
                {calc.desc}
              </p>

              {/* CTA */}
              <div className="mt-4 pt-4 border-t border-[#F3F4F6] dark:border-[#1E293B] flex items-center justify-between">
                <span className="text-sm font-semibold text-[#6366F1] dark:text-[#818CF8]">
                  Open Tool
                </span>
                <svg className="w-4 h-4 text-[#6366F1] transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center rounded-2xl border-2 border-dashed border-[#E5E7EB] bg-white py-16 px-6 dark:bg-[#111827] dark:border-[#1E293B]">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-bold text-[#111827] dark:text-[#F9FAFB] mb-1">No calculators found</h3>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] max-w-sm mx-auto mb-6">
            We couldn&apos;t find any calculators matching &quot;{search}&quot;. Try adjusting your keywords.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#6366F1]/20 hover:bg-[#4F46E5] transition-all cursor-pointer"
          >
            Request a Calculator
          </Link>
        </div>
      )}
    </section>
  );
}
