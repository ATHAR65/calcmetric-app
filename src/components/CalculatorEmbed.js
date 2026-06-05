"use client";
import { CalculatorContext } from "./CalculatorContext";
import { Suspense } from "react";
import CalculatorLoader from "./CalculatorLoader";

export default function CalculatorEmbed({ slug }) {
  return (
    <CalculatorContext.Provider value={{ embedded: true }}>
      <div className="not-prose my-8">
        <div className="rounded-[18px] border border-[#E8E3DA] bg-white shadow-[0_1px_4px_rgba(26,20,16,0.04)] overflow-hidden">
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-12 text-[#8A7F72] text-sm">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#E8521A]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Loading calculator...
              </div>
            }
          >
            <CalculatorLoader slug={slug} />
          </Suspense>
        </div>
        <p className="text-xs text-[#C4BAB0] text-center mt-3">
          Use the calculator above to run your numbers. For a full-page experience,{" "}
          <a
            href={slug ? `/calculators/${slug}` : "#"}
            className="text-[#E8521A] hover:underline font-medium"
          >
            open the standalone calculator
          </a>
          .
        </p>
      </div>
    </CalculatorContext.Provider>
  );
}
