/**
 * Server-rendered rich SEO content for calculator pages.
 * Improves text-to-HTML ratio with semantic, keyword-rich UK English.
 */
export default function CalculatorRichSeo({
  calculatorName,
  topic,
  howToUse,
  whatIs,
  whyUkMatters,
  faqs = [],
}) {
  return (
    <article
      className="seo-content-rich mx-auto max-w-4xl px-4 pb-10 sm:px-6"
      aria-label={`Guide to the ${calculatorName}`}
    >
      <div className="rounded-[18px] border border-[#E8E3DA] bg-white p-6 sm:p-10 shadow-[0_1px_4px_rgba(26,20,16,0.04)] space-y-10">
        <section>
          <h2
            className="text-xl font-bold text-[#1A1410] mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Use the {calculatorName}
          </h2>
          <p
            className="text-[#475569] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {howToUse}
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-[#1A1410] mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What is {topic}?
          </h2>
          <p
            className="text-[#475569] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {whatIs}
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-[#1A1410] mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why This Matters in the UK
          </h2>
          <p
            className="text-[#475569] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {whyUkMatters}
          </p>
        </section>

        {faqs.length > 0 && (
          <section>
            <h2
              className="text-xl font-bold text-[#1A1410] mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} className={i > 0 ? "mt-6 pt-6 border-t border-[#E8E3DA]" : ""}>
                <h3
                  className="text-base font-semibold text-[#1A1410] mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-[#475569] leading-relaxed text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </section>
        )}

        <p
          className="text-xs text-[#8A7F72] pt-4 border-t border-[#E8E3DA]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Last updated: June 2026 · Figures are estimates for planning only. For personalised tax or
          payroll advice, speak to a qualified accountant or financial adviser registered in the UK.
        </p>
      </div>
    </article>
  );
}
