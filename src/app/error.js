"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="text-center">
        {/* Error Visual */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-[#FEF2F2] dark:bg-[#EF4444]/10 mb-8">
          <span className="text-5xl">⚠️</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-3">
          Something went wrong
        </h1>
        <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-lg mx-auto mb-2">
          An unexpected error occurred while loading this page.
        </p>
        <p className="text-sm text-[#9CA3AF] dark:text-[#6B7280] max-w-md mx-auto mb-10">
          Don&apos;t worry — your data is safe. All calculations run locally in your browser and nothing was sent to our servers.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl bg-[#6366F1] text-white font-semibold px-6 py-3 text-base shadow-md shadow-[#6366F1]/20 hover:bg-[#4F46E5] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
            </svg>
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] font-semibold px-6 py-3 text-base shadow-sm hover:bg-[#F9FAFB] hover:border-[#D1D5DB] transition-all dark:bg-[#111827] dark:border-[#334155] dark:text-[#F9FAFB] dark:hover:bg-[#0B0F19] dark:hover:border-[#6B7280]"
          >
            Go to Homepage
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </Link>
        </div>

        {/* Support Info */}
        <div className="border-t border-[#E5E7EB] dark:border-[#1E293B] pt-10">
          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-4">
            If this keeps happening, please let us know and we&apos;ll fix it right away.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] dark:text-[#818CF8] dark:hover:text-[#A78BFA] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Report an Issue
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] dark:text-[#818CF8] dark:hover:text-[#A78BFA] transition-colors"
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
