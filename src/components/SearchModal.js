"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { calculators } from "@/lib/siteConfig";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const results = query.trim()
    ? calculators.filter((calc) => {
        const q = query.toLowerCase();
        return (
          calc.title.toLowerCase().includes(q) ||
          calc.desc.toLowerCase().includes(q) ||
          calc.tag.toLowerCase().includes(q)
        );
      })
    : calculators.slice(0, 8);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName))) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    },
    []
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleListKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (listRef.current) {
      const selected = listRef.current.children[selectedIndex];
      if (selected) selected.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--color-text-muted)] bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-text-secondary)] transition-colors"
        aria-label="Search calculators"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <span>Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-[var(--color-border)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--color-text-muted)]">
          Ctrl K
        </kbd>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg mx-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] shadow-[0_20px_56px_rgba(26,20,16,0.2)] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)]">
          <svg className="w-5 h-5 text-[var(--color-text-muted)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleListKeyDown}
            placeholder="Search calculators..."
            className="flex-1 bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-base outline-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          <kbd
            className="rounded border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)] cursor-pointer hover:bg-[var(--color-bg-main)]"
            onClick={() => setOpen(false)}
          >
            Esc
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[360px] overflow-y-auto py-2">
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-[var(--color-text-muted)]" style={{ fontFamily: "'Inter', sans-serif" }}>
              No calculators found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            results.map((calc, i) => (
              <Link
                key={calc.href}
                href={calc.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors ${
                  i === selectedIndex
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-main)]"
                }`}
              >
                <span className="text-lg shrink-0">{calc.icon}</span>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium truncate ${
                      i === selectedIndex ? "text-white" : "text-[var(--color-text-primary)]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {calc.title}
                  </p>
                  <p
                    className={`text-xs truncate ${
                      i === selectedIndex ? "text-white/70" : "text-[var(--color-text-muted)]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {calc.tag}
                  </p>
                </div>
                {i === selectedIndex && (
                  <svg className="w-4 h-4 shrink-0 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                )}
              </Link>
            ))
          )}
        </div>

        <div className="flex items-center gap-4 px-4 py-2.5 border-t border-[var(--color-border)] text-xs text-[var(--color-text-muted)]" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-[var(--color-border)] px-1 py-0.5 text-[10px]">↑</kbd>
            <kbd className="rounded border border-[var(--color-border)] px-1 py-0.5 text-[10px]">↓</kbd>
            Navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-[var(--color-border)] px-1.5 py-0.5 text-[10px]">Enter</kbd>
            Open
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-[var(--color-border)] px-1 py-0.5 text-[10px]">Esc</kbd>
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
