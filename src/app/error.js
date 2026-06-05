"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="text-center">
        {/* Error Visual */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-[#FFF5F0] mb-8">
          <span className="text-5xl">⚠️</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1A1410] mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
          Something went wrong
        </h1>
        <p className="text-lg text-[#8A7F72] max-w-lg mx-auto mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          An unexpected error occurred while loading this page.
        </p>
        <p className="text-sm text-[#C4BAB0] max-w-md mx-auto mb-10" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Don&apos;t worry — your data is safe. All calculations run locally in your browser and nothing was sent to our servers.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-[100px] bg-[#1A1410] text-white font-semibold px-6 py-3 text-base hover:bg-[#E8521A] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(232,82,26,0.3)] transition-all cursor-pointer"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
            </svg>
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-[100px] border border-[#E8E3DA] bg-white text-[#1A1410] font-semibold px-6 py-3 text-base hover:bg-[#FAF8F4] hover:border-[#1A1410] transition-all"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
          >
            Go to Homepage
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </Link>
        </div>

        {/* Support Info */}
        <div className="border-t border-[#E8E3DA] pt-10">
          <p className="text-sm text-[#8A7F72] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            If this keeps happening, please let us know and we&apos;ll fix it right away.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8521A] hover:text-[#D04A16] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Report an Issue
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E8521A] hover:text-[#D04A16] transition-colors"
            >
              Visit FAQ
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
