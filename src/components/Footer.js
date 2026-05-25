import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Top row: brand + tagline */}
        <div className="flex flex-col items-center text-center gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white font-bold text-xs">
              M
            </div>
            <span className="text-lg font-bold tracking-tight">
              The<span className="text-[#0D9488]">Metric</span>App
            </span>
          </div>
          <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md">
            Free, fast, and accurate financial calculators for freelancers,
            sellers, and business owners.
          </p>
        </div>

        {/* Link row */}
        <div className="flex items-center justify-center gap-5 flex-wrap mb-6">
          <Link
            href="/about"
            className="text-xs text-[#94A3B8] hover:text-[#0D9488] transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-xs text-[#94A3B8] hover:text-[#0D9488] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/faq"
            className="text-xs text-[#94A3B8] hover:text-[#0D9488] transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/tools/gig-economy-tax-guide"
            className="text-xs text-[#94A3B8] hover:text-[#0D9488] transition-colors"
          >
            Gig Tax Guide
          </Link>
          <Link
            href="/contact"
            className="text-xs text-[#94A3B8] hover:text-[#0D9488] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="text-xs text-[#94A3B8] hover:text-[#0D9488] transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy-policy"
            className="text-xs text-[#94A3B8] hover:text-[#0D9488] transition-colors"
          >
            Privacy
          </Link>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-[#1E293B] pt-6 text-center">
          <p className="text-xs text-[#64748B]">
            &copy; {new Date().getFullYear()} TheMetricApp. All rights reserved. For
            informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
