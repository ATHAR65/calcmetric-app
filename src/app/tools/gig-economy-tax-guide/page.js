import Link from "next/link";

export const metadata = {
  title: { absolute: "Gig Economy Tax Guide 2026 | TheMetricApp" },
  description:
    "Complete tax guide for gig workers in 2026. Learn about self-employment tax, mileage deductions, quarterly estimated payments, and tax-saving strategies for DoorDash, Uber, and freelance drivers.",
  alternates: {
    languages: {
      "en-us": "https://www.themetricapp.com/tools/gig-economy-tax-guide",
      "en-gb": "https://www.themetricapp.com/tools/gig-economy-tax-guide",
      "x-default": "https://www.themetricapp.com/tools/gig-economy-tax-guide",
    },
    canonical: "https://www.themetricapp.com/tools/gig-economy-tax-guide",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "TheMetricApp",
    title: "Gig Economy Tax Guide 2026",
    description:
      "Complete tax guide for gig workers in 2026 — self-employment tax, mileage deductions, quarterly payments, and tax-saving strategies.",
    images: [
      {
        url: "/api/og?title=Gig%20Economy%20Tax%20Guide%202026%20%7C%20TheMetricApp&description=Complete%20tax%20guide%20for%20gig%20workers%20in%202026%20%E2%80%94%20self-employment%20tax%2C%20mileage%20deductions%2C%20quarterly%20payments%2C%20and%20tax-saving%20strategies.&type=article",
        width: 1200,
        height: 630,
        alt: "Gig Economy Tax Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gig Economy Tax Guide 2026",
    description:
      "Complete tax guide for gig workers — self-employment tax, mileage deductions, quarterly payments, and tax-saving strategies.",
    images: ["/api/og?title=Gig%20Economy%20Tax%20Guide%202026%20%7C%20TheMetricApp&description=Complete%20tax%20guide%20for%20gig%20workers%20in%202026%20%E2%80%94%20self-employment%20tax%2C%20mileage%20deductions%2C%20quarterly%20payments%2C%20and%20tax-saving%20strategies.&type=article"],
  },
};

export default function GigEconomyTaxGuide() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "WebPage", "@id": "https://www.themetricapp.com/" } },
      { "@type": "ListItem", position: 2, name: "Tools", item: { "@type": "WebPage", "@id": "https://www.themetricapp.com/tools" } },
      { "@type": "ListItem", position: 3, name: "Gig Economy Tax Guide" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
          <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#64748B]">Gig Economy Tax Guide</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] border border-[#6366F1]/20 px-4 py-1.5 text-sm font-medium text-[#6366F1] mb-4">
            📋 Resource Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Gig Economy Tax Guide 2026
          </h1>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Everything gig workers need to know about taxes — from self-employment tax and mileage deductions to quarterly estimated payments and tax-saving strategies.
          </p>
        </div>

        {/* Content */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-sm">
          <article className="seo-content">
            <h2>Gig Worker Tax Basics</h2>
            <p>
              If you earn money through gig economy platforms like DoorDash, Uber, Lyft, Instacart, or Grubhub, you are classified as an <strong>independent contractor (1099-NEC)</strong>. This means you are responsible for calculating and paying your own taxes — unlike W-2 employees, your platform does not withhold federal or state taxes from your pay.
            </p>
            <p>
              As a gig worker, you must pay <strong>self-employment tax (15.3%)</strong> which covers Social Security and Medicare, plus federal income tax (based on your tax bracket), and potentially state income tax depending on where you live. Understanding these obligations is critical to avoiding IRS penalties and maximizing your take-home pay.
            </p>

            <h2>Self-Employment Tax Explained</h2>
            <p>
              The self-employment tax rate is <strong>15.3%</strong> of your net earnings, broken down into:
            </p>
            <ul>
              <li><strong>12.4% for Social Security</strong> — applies to net earnings up to $176,100 (2025 limit, adjusted annually)</li>
              <li><strong>2.9% for Medicare</strong> — applies to all net earnings with no cap</li>
            </ul>
            <p>
              Note that you can deduct <strong>half of your self-employment tax</strong> (the employer-equivalent portion) when calculating your adjusted gross income for federal income tax purposes. This deduction is taken "above the line," meaning you can claim it even if you don't itemize.
            </p>

            <h2>The Standard Mileage Deduction</h2>
            <p>
              For gig workers who drive (DoorDash, Uber, Lyft), the <strong>Standard Mileage Rate</strong> is typically the largest deduction available. For 2025, the rate is <strong>$0.70 per business mile</strong>. This rate covers gas, depreciation, insurance, maintenance, and repair costs associated with your vehicle.
            </p>
            <p>
              To claim the mileage deduction, you must track every business mile driven. Use a mileage tracking app like Everlance, Stride, or MileIQ to log your miles as they happen — the IRS requires contemporaneous records, not estimates created at tax time.
            </p>

            <h2>Quarterly Estimated Tax Payments</h2>
            <p>
              The IRS requires gig workers to make <strong>quarterly estimated tax payments</strong> if they expect to owe $1,000 or more in taxes for the year. Payments are due:
            </p>
            <ul>
              <li><strong>April 15</strong> — Q1 (January–March)</li>
              <li><strong>June 15</strong> — Q2 (April–May)</li>
              <li><strong>September 15</strong> — Q3 (June–August)</li>
              <li><strong>January 15</strong> — Q4 (September–December)</li>
            </ul>
            <p>
              Missing these deadlines can result in underpayment penalties. A good rule of thumb is to set aside <strong>25–30% of your net earnings</strong> in a separate savings account and submit quarterly payments to the IRS.
            </p>

            <h2>Tax-Saving Strategies for Gig Workers</h2>
            <p>
              Here are several strategies to reduce your tax burden as a gig worker:
            </p>
            <ul>
              <li><strong>Maximize mileage tracking</strong> — Track every business mile, including miles to and from restaurant pickups, delivery locations, and vehicle maintenance trips.</li>
              <li><strong>Deduct business expenses</strong> — Cell phone plans (business-use portion), insulated delivery bags, phone mounts, car chargers, and vehicle maintenance are all deductible.</li>
              <li><strong>Consider a Solo 401(k) or SEP IRA</strong> — Retirement contributions reduce your taxable income and help build long-term savings.</li>
              <li><strong>Health insurance premiums</strong> — Self-employed individuals can deduct health insurance premiums above the line.</li>
              <li><strong>Home office deduction</strong> — If you use a dedicated space in your home exclusively for your gig work (e.g., managing deliveries, scheduling), you may qualify for a home office deduction.</li>
            </ul>

            <h2>Related Tools & Resources</h2>
            <p>
              Use these free calculators and guides to estimate your taxes and optimize your gig earnings:
            </p>
            <ul>
              <li><Link href="/calculators/doordash-tax-estimator" className="text-[#6366F1] hover:text-[#4F46E5] underline font-medium">DoorDash Tax Estimator</Link> — Calculate self-employment taxes, mileage deductions, and quarterly payments specifically for DoorDash drivers.</li>
              <li><Link href="/calculators/california-1099-tax-calculator" className="text-[#6366F1] hover:text-[#4F46E5] underline font-medium">California 1099 Tax Calculator</Link> — Compute self-employment, federal, and California state taxes on freelance and gig income.</li>
              <li><Link href="/calculators/texas-paycheck-calculator" className="text-[#6366F1] hover:text-[#4F46E5] underline font-medium">Texas Paycheck Calculator</Link> — Calculate take-home pay in Texas with zero state income tax.</li>
              <li><Link href="/calculators/freelancer-platform-fee-comparison" className="text-[#6366F1] hover:text-[#4F46E5] underline font-medium">Freelancer Platform Fee Comparison</Link> — Compare what different gig platforms take from your earnings.</li>
              <li><Link href="/blog/doordash-tax-estimator-2026" className="text-[#6366F1] hover:text-[#4F46E5] underline font-medium">DoorDash Tax Estimator 2026 Guide</Link> — In-depth guide to self-employment taxes and mileage deductions for Dashers.</li>
              <li><Link href="/blog/california-1099-tax-calculator-2026" className="text-[#6366F1] hover:text-[#4F46E5] underline font-medium">California 1099 Tax Guide 2026</Link> — Detailed breakdown of California self-employment tax rules.</li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              This guide is for informational and educational purposes only. TheMetricApp is not a certified public accountant, tax attorney, or financial advisor. Tax laws change frequently and individual circumstances vary. Always consult a qualified tax professional for advice specific to your situation.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
