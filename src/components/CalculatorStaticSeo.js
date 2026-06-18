import Link from "next/link";
import { getBlogPostForCalculator } from "@/lib/blogMapping";
import { getRelatedCalculators } from "@/lib/relatedCalculators";

export default function CalculatorStaticSeo({
  title,
  description,
  slug,
  faqs = [],
  howToSteps,
  content,
  formula,
  rateTable,
  lastUpdated = "June 2026",
}) {
  const calcHref = `/calculators/${slug}`;
  const blogPost = getBlogPostForCalculator(slug);
  const relatedCalculators = getRelatedCalculators(slug, 4);

  const defaultSteps = [
    "Enter your numbers in the input fields — amounts, rates, dates, or other values relevant to your scenario.",
    "Review the calculated results instantly. Adjust any input to compare different scenarios side by side.",
    "Use the breakdown tables and summaries to understand each component of the calculation before making financial decisions.",
  ];

  const steps = howToSteps || defaultSteps;

  return (
    <article
      className="seo-content-static mx-auto max-w-4xl px-4 pb-4 sm:px-6"
      aria-label={`About the ${title}`}
    >
      <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 sm:p-10 shadow-[0_1px_4px_rgba(26,20,16,0.04)]">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          About This Calculator
        </h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
          {description} Use our free <Link href={calcHref} className="text-[var(--color-gold)] hover:underline font-medium">{title}</Link> to
          run accurate estimates instantly — no sign-up, no downloads, and no personal data stored.
        </p>

        {content && (
          <div className="text-[var(--color-text-secondary)] leading-relaxed mb-6 space-y-3" style={{ fontFamily: "var(--font-body)" }}>
            {Array.isArray(content) ? content.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            )) : (
              <p dangerouslySetInnerHTML={{ __html: content }} />
            )}
          </div>
        )}

        {formula && (
          <div className="my-6 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-main)]">
            <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Formula
            </h3>
            <code className="block text-sm text-[var(--color-text-secondary)] whitespace-pre-wrap" style={{ fontFamily: "monospace" }}>
              {formula}
            </code>
          </div>
        )}

        {rateTable && (
          <div className="my-6 overflow-x-auto">
            <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              {rateTable.title || "Current Rates"}
            </h3>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  {rateTable.headers.map((h, i) => (
                    <th key={i} className="text-left py-2 px-3 font-semibold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-body)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rateTable.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--color-border)] last:border-0">
                    {row.map((cell, j) => (
                      <td key={j} className="py-2 px-3 text-[var(--color-text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 mt-8" style={{ fontFamily: "var(--font-heading)" }}>
          How to Use the {title}
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-[var(--color-text-secondary)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
          All calculations run locally in your browser for privacy and speed. Results are estimates for planning purposes —
          consult a qualified tax professional, financial advisor, or accountant for advice specific to your situation.
        </p>

        {faqs.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {faq.q}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {blogPost && (
          <div className="mt-8 p-4 bg-[var(--color-bg-main)] border border-[var(--color-border)] rounded-xl">
            <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              <svg className="w-4 h-4 inline mr-1.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Related Guide
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              {blogPost.excerpt.slice(0, 120)}...{" "}
              <Link
                href={`/blog/${blogPost.slug}`}
                className="text-[var(--color-gold)] hover:underline font-medium"
              >
                Read the Full Guide
              </Link>
            </p>
          </div>
        )}

        {relatedCalculators.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Related Calculators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedCalculators.map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="group flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-main)] p-3.5 hover:border-[var(--color-gold)] transition-colors"
                >
                  <span className="text-xl shrink-0" aria-hidden="true">{calc.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-gold)] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                      {calc.title}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] truncate" style={{ fontFamily: "var(--font-body)" }}>
                      {calc.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <p className="text-xs text-[var(--color-text-muted)] mt-8 pt-4 border-t border-[var(--color-border)]" style={{ fontFamily: "var(--font-body)" }}>
          Last updated: {lastUpdated} · TheMetricApp provides free financial calculators for US and UK taxpayers, freelancers, gig workers, and small business owners.
        </p>
      </div>
    </article>
  );
}
