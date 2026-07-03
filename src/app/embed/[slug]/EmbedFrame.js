"use client";

import { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { CalculatorContext } from "@/components/CalculatorContext";

/**
 * Renders a single calculator as a standalone, chrome-less widget for the
 * /embed/[slug] route. Provides the `embedded` context flag so CalculatorShell
 * shows only the form + results, posts its height to the parent window so the
 * host iframe can auto-resize, and shows a "Powered by" attribution link.
 */
export default function EmbedFrame({ slug, title }) {
  const Calculator = useMemo(
    () =>
      dynamic(() => import(`@/app/calculators/${slug}/Calculator`), {
        ssr: false,
        loading: () => (
          <div className="flex items-center justify-center py-16 text-[#5d5a78] text-sm">
            Loading calculator…
          </div>
        ),
      }),
    [slug]
  );

  // Tell the embedding page how tall we are so it can resize the iframe.
  useEffect(() => {
    const postHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent?.postMessage({ tmaHeight: height, tmaSlug: slug }, "*");
    };
    postHeight();
    const ro = new ResizeObserver(postHeight);
    ro.observe(document.body);
    window.addEventListener("load", postHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", postHeight);
    };
  }, [slug]);

  return (
    <CalculatorContext.Provider value={{ embedded: true }}>
      <div className="bg-white">
        <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden">
          <Calculator />
        </div>
        <p className="text-xs text-[#5d5a78] text-center py-3">
          <a
            href={`https://www.themetricapp.com/calculators/${slug}`}
            target="_blank"
            rel="noopener"
            className="hover:text-[#7c3aed] font-medium"
          >
            {title} by TheMetricApp ↗
          </a>
        </p>
      </div>
    </CalculatorContext.Provider>
  );
}
