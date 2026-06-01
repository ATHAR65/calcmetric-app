export const metadata = {
  title: "About Us",
  description:
    "Learn more about TheMetricApp — the team behind free, fast, and accurate financial calculators for freelancers, sellers, and small business owners.",
  alternates: {
    canonical: "https://www.themetricapp.com/about",
  },
  openGraph: {
    title: "About Us | TheMetricApp",
    description:
      "Learn more about TheMetricApp — the team behind free, fast, and accurate financial calculators for freelancers, sellers, and small business owners.",
    url: "https://www.themetricapp.com/about",
    siteName: "TheMetricApp",
    type: "website",
  },
  twitter: {
    title: "About Us | TheMetricApp",
    card: "summary_large_image",
  },
};

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          About TheMetricApp
        </h1>
        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
          Free, accurate financial tools — built for the self-employed, by people who understand the math.
        </p>
      </div>

      <div className="space-y-6">
        {/* Mission Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-sm">
          <article className="seo-content">
            <h2>Our Mission</h2>
            <p>
              TheMetricApp was created with a simple goal: <strong>make financial calculations
              instant, accurate, and free for everyone</strong>. Whether you are a DoorDash
              driver trying to set aside the right amount for taxes, an eBay seller calculating
              your true profit margins, or a freelancer comparing platform fees — you should
              have access to reliable tools without hidden costs, sign-ups, or data collection.
            </p>
            <p>
              We believe that financial literacy starts with clarity. By providing transparent,
              real-time calculators that break down every fee, tax bracket, and deduction, we
              help our users make informed decisions about their money — whether they are in
              the US, the UK, or anywhere else in the world.
            </p>
          </article>
        </div>

        {/* What We Offer Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-sm">
          <article className="seo-content">
            <h2>What We Offer</h2>
            <p>
              Our platform features <strong>55+ financial calculators</strong> covering taxes,
              fees, profits, and savings across multiple industries:
            </p>
            <ul>
              <li>Gig economy tax estimators (DoorDash, Uber, 1099 income)</li>
              <li>State-specific paycheck and tax calculators (California, Texas, New York, Florida)</li>
              <li>Merchant fee calculators (Stripe, PayPal, eBay, Amazon, Etsy, Shopify)</li>
              <li>E-commerce profit margin and ROI analysis</li>
              <li>Freelancer platform fee comparisons (Upwork vs Fiverr)</li>
              <li>UK tax calculators (Income Tax, NI, VAT, Self Assessment, Mortgage)</li>
              <li>Retirement planning (401k, Solo 401k, Roth IRA, Savings Goal)</li>
              <li>Energy and automotive savings (EV vs Gas, Solar ROI)</li>
              <li>Short-term rental profitability (Airbnb host income)</li>
              <li>Home affordability, mortgage, amortization, and loan calculators</li>
            </ul>
            <p>
              Every calculator runs entirely in your browser. <strong>None of your data is
              sent to our servers</strong> — your numbers stay on your device.
            </p>
          </article>
        </div>

        {/* Why Trust Us Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-sm">
          <article className="seo-content">
            <h2>Why Trust Us</h2>
            <p>
              Our calculations are built on <strong>current, publicly available tax and fee
              structures</strong>. We source our data directly from official IRS publications,
              state tax authorities, platform fee schedules (Stripe, eBay, Airbnb, Upwork,
              Fiverr), and government incentive programs (IRA Solar Tax Credit, CA rebates).
            </p>
            <p>
              We update our calculators whenever tax brackets, fee structures, or incentive
              programs change — so you are always working with the latest numbers.
            </p>
            <p>
              That said, we are <strong>not certified financial advisors, CPAs, or tax
              attorneys</strong>. Our tools are designed for estimation and educational
              purposes. Always consult a qualified professional for your specific financial
              situation.
            </p>
          </article>
        </div>

        {/* Our Reach Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-sm">
          <article className="seo-content">
            <h2>Our Reach</h2>
            <p>
              TheMetricApp is trusted by thousands of freelancers, sellers, and small business
              owners across the <strong>United States and the United Kingdom</strong>. As we
              continue to expand, we are adding more region-specific calculators to serve
              users in other countries and territories.
            </p>
            <p>
              We are committed to keeping TheMetricApp <strong>100% free</strong>, supported
              by non-intrusive advertising. No paywalls, no subscription tiers, no
              premium features — just free tools for everyone who needs them.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
