import Link from "next/link";
import { getBlogPostForCalculator } from "@/lib/blogMapping";

export default function CalculatorStaticSeo({ title, description, slug, faqs = [] }) {
  const calcHref = `/calculators/${slug}`;
  const blogPost = getBlogPostForCalculator(slug);

  return (
    <article
      className="seo-content-static mx-auto max-w-4xl px-4 pb-4 sm:px-6"
      aria-label={`About the ${title}`}
    >
      <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 sm:p-10 shadow-[0_1px_4px_rgba(26,20,16,0.04)]">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
          About This Calculator
        </h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
          {description} Use our free <Link href={calcHref} className="text-[var(--color-accent)] hover:underline font-medium">{title}</Link> to
          run accurate estimates instantly — no sign-up, no downloads, and no personal data stored.
        </p>

        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 mt-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
          How to Use the {title}
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)] leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
          <li>Enter your numbers in the input fields — amounts, rates, dates, or other values relevant to your scenario.</li>
          <li>Review the calculated results instantly. Adjust any input to compare different scenarios side by side.</li>
          <li>Use the breakdown tables and summaries to understand each component of the calculation before making financial decisions.</li>
        </ol>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
          All calculations run locally in your browser for privacy and speed. Results are estimates for planning purposes —
          consult a qualified tax professional, financial advisor, or accountant for advice specific to your situation.
        </p>

        {faqs.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 mt-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {faq.q}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {blogPost && (
          <div className="mt-8 p-4 bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <svg className="w-4 h-4 inline mr-1.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Related Guide
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              {blogPost.excerpt.slice(0, 120)}...{" "}
              <Link
                href={`/blog/${blogPost.slug}`}
                className="text-[var(--color-accent)] hover:underline font-medium"
              >
                Read the Full Guide
              </Link>
            </p>
          </div>
        )}

        <p className="text-xs text-[var(--color-text-muted)] mt-8 pt-4 border-t border-[var(--color-border)]" style={{ fontFamily: "'Inter', sans-serif" }}>
          Last updated: June 2026 · TheMetricApp provides free financial calculators for US and UK taxpayers, freelancers, gig workers, and small business owners.
        </p>
      </div>
    </article>
  );
}
