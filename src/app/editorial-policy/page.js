const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Editorial Policy — How We Research | TheMetricApp" },
  description:
    "Learn how TheMetricApp researches, writes, reviews, and updates its financial calculators. Our editorial standards ensure accuracy, transparency, and trustworthy financial information.",
  alternates: {
    canonical: siteUrl + "/editorial-policy",
  },
  openGraph: {
    title: "Editorial Policy | TheMetricApp",
    description:
      "How TheMetricApp researches, writes, reviews, and updates its financial calculators and guides.",
    url: siteUrl + "/editorial-policy",
    siteName: "TheMetricApp",
    type: "website",
  },
  twitter: {
    title: "Editorial Policy | TheMetricApp",
    card: "summary_large_image",
  },
};

const principles = [
  {
    icon: "📐",
    title: "Accuracy First",
    desc: "Every calculator is built from official sources — IRS publications, HMRC guidance, platform fee schedules, and government data. Formulas are verified against real-world examples before publishing.",
  },
  {
    icon: "🔄",
    title: "Continual Updates",
    desc: "Tax brackets, fee structures, and financial regulations change. We audit all calculators annually (and immediately when major changes occur) to keep every tool current. Each page displays its last updated date.",
  },
  {
    icon: "🔍",
    title: "Peer Review",
    desc: "Every calculator and its accompanying educational content is reviewed by a second team member before publishing. We check calculation logic, formula accuracy, and factual claims independently.",
  },
  {
    icon: "🔒",
    title: "Privacy by Design",
    desc: "All calculations run entirely in your browser. No numbers, inputs, or results are sent to our servers. We do not collect, store, or sell user financial data.",
  },
  {
    icon: "⚖️",
    title: "Transparent Limitations",
    desc: "We clearly state when a calculator is an estimate. We cite our sources, disclose our methodology, and recommend consulting a qualified professional for tax, legal, or financial advice.",
  },
  {
    icon: "🆓",
    title: "Always Free",
    desc: "TheMetricApp is supported by non-intrusive advertising. Every calculator is and will remain 100% free — no paywalls, no sign-ups, no premium tiers.",
  },
];

const process = [
  {
    step: "01",
    title: "Research & Source Verification",
    desc: "We identify the primary official source for each calculator's data — IRS.gov for US tax rates, HMRC for UK rates, platform help centers for fee schedules. We cross-reference multiple sources before writing any formula.",
  },
  {
    step: "02",
    title: "Formula Development & Testing",
    desc: "The calculation logic is built and tested against known examples. For tax calculators, we verify against IRS worksheets. For fee calculators, we verify against platform documentation and real transaction examples.",
  },
  {
    step: "03",
    title: "Educational Content Writing",
    desc: "We write clear, jargon-free explanations of how the calculator works, what the formulas mean, and how to interpret results. Content includes worked examples, comparison tables, and real-life scenarios.",
  },
  {
    step: "04",
    title: "Internal Review",
    desc: "A second team member reviews the calculator logic, checks all formulas, fact-checks the educational content, and verifies all source links. Any discrepancies are resolved before publishing.",
  },
  {
    step: "05",
    title: "Publishing & Schema Markup",
    desc: "We add structured data (JSON-LD) including WebApplication, FAQPage, and BreadcrumbList schemas to help search engines understand and surface our content accurately.",
  },
  {
    step: "06",
    title: "Ongoing Monitoring & Updates",
    desc: "We monitor official sources for changes to tax rates, fee structures, and regulations. When changes occur, we update the affected calculators within 30 days and update the 'Last Updated' date on the page.",
  },
];

const sources = [
  { name: "IRS.gov", url: "https://www.irs.gov", desc: "US federal tax brackets, SE tax rates, mileage rates, contribution limits" },
  { name: "HMRC", url: "https://www.gov.uk/government/organisations/hm-revenue-customs", desc: "UK income tax, National Insurance, VAT rates, Self Assessment" },
  { name: "Consumer Financial Protection Bureau (CFPB)", url: "https://www.consumerfinance.gov", desc: "Mortgage guidelines, lending standards, consumer finance" },
  { name: "Freddie Mac PMMS", url: "https://www.freddiemac.com/pmms", desc: "Weekly US mortgage rate survey" },
  { name: "Stripe Documentation", url: "https://stripe.com/pricing", desc: "Payment processing fee schedules" },
  { name: "PayPal Fee Schedule", url: "https://www.paypal.com/us/webapps/mpp/merchant-fees", desc: "PayPal transaction and merchant fees" },
  { name: "Amazon Seller Central", url: "https://sellercentral.amazon.com/help/hub/reference/G200336920", desc: "FBA fees, referral fees, fulfillment costs" },
  { name: "eBay Seller Fees", url: "https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees", desc: "Final value fees, listing fees, managed payments" },
  { name: "Etsy Fees", url: "https://www.etsy.com/legal/fees/", desc: "Listing, transaction, and payment processing fees" },
  { name: "Shopify Pricing", url: "https://www.shopify.com/pricing", desc: "Subscription plans, transaction fees, payment processing" },
  { name: "Airbnb Host Resources", url: "https://www.airbnb.com/help/article/1857", desc: "Host service fee structure" },
  { name: "Department of Energy", url: "https://www.energy.gov", desc: "EV charging costs, solar incentives, energy data" },
];

export default function EditorialPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-4 py-1.5 text-sm font-medium text-[#6366F1] mb-6">
          <span className="flex h-2 w-2 rounded-full bg-[#6366F1]" />
          Transparency & Trust
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
          Editorial Policy
        </h1>
        <p className="text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          How we research, build, review, and maintain the financial calculators and guides on TheMetricApp.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="rounded-2xl border border-[#6366F1]/20 bg-[#EEF2FF] p-6 sm:p-8 mb-8">
        <p className="text-base text-[#1E1B4B] leading-relaxed">
          <strong>Our mission</strong> is to provide free, accurate, and transparent financial calculators that help
          freelancers, gig workers, sellers, and small business owners make informed financial decisions.
          We hold ourselves to high standards of accuracy, transparency, and user privacy — and this page
          explains exactly how we achieve that.
        </p>
      </div>

      {/* Core Principles */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Our Core Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div key={p.title} className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-1">{p.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Our Editorial Process</h2>
        <div className="space-y-4">
          {process.map((step) => (
            <div key={step.step} className="flex gap-4 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white text-sm font-bold">
                {step.step}
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-1">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Our Team</h2>
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm">
          <p className="text-[#475569] leading-relaxed mb-4">
            TheMetricApp is built and maintained by a team of financial professionals with backgrounds in
            accounting, tax preparation, financial planning, e-commerce, and the gig economy. Each piece of
            content is written by a subject-matter expert and reviewed by a second team member before publication.
          </p>
          <p className="text-[#475569] leading-relaxed mb-4">
            <a href="/authors/" className="text-[#E8521A] hover:underline font-semibold">
              Meet our full team of experts →
            </a>
          </p>
          <ul className="space-y-2 text-sm text-[#475569]">
            {[
              "Sarah Chen, CPA — US federal and state tax preparation, self-employment tax, capital gains",
              "Michael Torres, CFP® — Retirement planning, personal finance, real estate, debt management",
              "James Wilson, MBA — E-commerce operations, marketplace fees, payment processing, tariffs",
              "Priya Patel — Gig economy taxation, freelance finance, mileage deductions, platform fees",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#E8521A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#64748B] mt-4 pt-4 border-t border-[#F1F5F9]">
            <strong>Disclaimer:</strong> TheMetricApp team members are not licensed CPAs, tax attorneys, or
            registered financial advisors. Our calculators are for estimation and educational purposes only.
            Always consult a qualified professional for advice specific to your situation.
          </p>
        </div>
      </section>

      {/* Data Sources */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Primary Data Sources</h2>
        <p className="text-[#475569] mb-5 leading-relaxed">
          We build our calculators from official, publicly available sources. Below are the primary references
          we use for our most popular calculator categories:
        </p>
        <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm overflow-hidden">
          <div className="divide-y divide-[#F1F5F9]">
            {sources.map((src) => (
              <div key={src.name} className="flex items-start gap-4 px-5 py-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#6366F1] text-xs font-bold">
                  🔗
                </div>
                <div>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#6366F1] hover:underline text-sm"
                  >
                    {src.name}
                  </a>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{src.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Update & Correction Policy</h2>
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm space-y-4 text-[#475569] leading-relaxed">
          <p>
            <strong className="text-[#0F172A]">Annual reviews:</strong> All calculators are reviewed at the start
            of each calendar year to incorporate new tax brackets, contribution limits, fee schedule changes,
            and regulatory updates.
          </p>
          <p>
            <strong className="text-[#0F172A]">Immediate updates:</strong> When a major change occurs mid-year
            (e.g., IRS announces new mileage rates, a platform changes its fee structure), we update the
            affected calculator within 30 days of the official announcement.
          </p>
          <p>
            <strong className="text-[#0F172A]">Corrections:</strong> If you find an error in any of our
            calculators or content, please contact us via our{" "}
            <a href="/contact" className="text-[#6366F1] hover:underline">contact page</a>. We take accuracy
            seriously and will investigate and correct any verified errors promptly.
          </p>
          <p>
            <strong className="text-[#0F172A]">Last Updated dates:</strong> Every calculator page displays the
            date it was last reviewed or updated. This reflects the most recent verification of the calculation
            logic and data sources.
          </p>
        </div>
      </section>

      {/* AI Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Use of AI</h2>
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm text-[#475569] leading-relaxed">
          <p>
            TheMetricApp uses AI tools to assist with grammar checking, formatting, and initial research.
            However, <strong className="text-[#0F172A]">all calculation logic, formulas, and financial data
            are verified by human team members</strong> against official sources before publishing.
            No calculator output is generated by AI — every formula is hand-coded and tested.
          </p>
          <p className="mt-3">
            Educational content may be drafted with AI assistance but is always reviewed, fact-checked,
            and edited by a human team member before publication. We do not publish AI-generated content
            without human review and verification.
          </p>
        </div>
      </section>

      {/* Contact */}
      <div className="rounded-2xl border border-[#6366F1]/20 bg-[#EEF2FF] p-6 text-center">
        <p className="text-[#1E1B4B] font-medium mb-2">Have a question about our editorial standards?</p>
        <p className="text-sm text-[#4338CA] mb-4">
          We welcome feedback, corrections, and suggestions from our users.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#6366F1] text-white font-semibold px-6 py-2.5 text-sm hover:bg-[#4F46E5] transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
