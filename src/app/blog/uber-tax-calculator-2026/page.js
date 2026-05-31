import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Uber Tax Calculator 2026: Complete Guide to Self-Employment Taxes & Mileage Deductions",
  description:
    "Learn how Uber driver taxes work in 2026. Complete guide to self-employment tax, standard mileage deduction, quarterly estimated payments, and strategies to reduce your Uber tax burden.",
  alternates: { canonical: `${siteUrl}/blog/uber-tax-calculator-2026` },
  openGraph: {
    title: "Uber Tax Calculator 2026: Complete Guide | TheMetricApp",
    description: "Learn how Uber driver taxes work in 2026 including mileage deductions and quarterly payments.",
    url: "https://www.themetricapp.com/blog/uber-tax-calculator-2026",
    siteName: "TheMetricApp", locale: "en_US", type: "article",
    publishedTime: "2026-06-01", authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uber Tax Calculator 2026: Complete Guide | TheMetricApp",
    description: "Learn how Uber driver taxes work in 2026 with our complete guide.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do Uber drivers need to pay taxes on all their earnings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — all income reported on your 1099-NEC from Uber is subject to federal self-employment tax and potentially federal and state income taxes. However, you can significantly reduce taxable income through legitimate business deductions like the standard mileage rate, phone expenses, tolls, and car insurance." } },
      { "@type": "Question", "name": "What is the difference between Uber Eats and Uber X tax deductions?", "acceptedAnswer": { "@type": "Answer", "text": "Both use the standard mileage rate of $0.70/mile. Uber X drivers can deduct tolls, parking, and rider amenities. Uber Eats drivers typically have higher mileage efficiency but may have insulated bag expenses. Both can deduct cell phone and insurance rideshare endorsement fees." } },
      { "@type": "Question", "name": "How much should Uber drivers set aside for taxes?", "acceptedAnswer": { "@type": "Answer", "text": "Set aside 25-30% of your net earnings (after deductions) for taxes. This covers self-employment tax (15.3%) plus federal income tax (10-12% for most drivers). Add 3-8% more if you live in a state with income tax." } }
    ]
  };
  const articleSchema = { "@type": "BlogPosting", "headline": "Uber Tax Calculator 2026", "description": "Learn how Uber driver taxes work in 2026.", "datePublished": "2026-06-01", "dateModified": "2026-06-01", "author": { "@type": "Organization", "name": "TheMetricApp Team" }, "publisher": { "@type": "Organization", "name": "TheMetricApp", "logo": { "@type": "ImageObject", "url": "https://www.themetricapp.com/logo.svg" } }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.themetricapp.com/blog/uber-tax-calculator-2026" } };
  const breadcrumbSchema = { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.themetricapp.com/blog" }, { "@type": "ListItem", "position": 3, "name": "Uber Tax Calculator Guide", "item": "https://www.themetricapp.com/blog/uber-tax-calculator-2026" }] };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />
      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link><span>/</span>
        <span className="text-[#64748B]">Uber Tax Calculator 2026</span>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Gig Economy</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">June 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">Uber Tax Calculator 2026: Complete Guide to Self-Employment Taxes &amp; Mileage Deductions</h1>
        <p className="text-lg text-[#64748B] leading-relaxed">As an Uber driver, you are classified as an independent contractor — meaning no taxes are withheld from your earnings. This guide explains exactly how to calculate, save for, and reduce your Uber taxes in 2026.</p>
      </header>
      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>
        <p>Uber drivers face a unique tax situation. You receive a 1099-NEC at year-end, not a W-2. This means no employer withholding for Social Security, Medicare, or income tax. You are responsible for calculating and paying all taxes yourself, including self-employment tax and quarterly estimated payments.</p>
        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
          <p className="text-sm text-[#64748B] mb-3">Calculate your Uber tax liability in real-time.</p>
          <Link href="/calculators/uber-tax-calculator-2026" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors">Open Uber Tax Calculator</Link>
        </div>
        <h2>How Uber Driver Taxes Work</h2>
        <h3>Step 1: Annual Gross Income</h3>
        <p>Your total earnings from Uber before any expenses. Uber provides a 1099-NEC (for non-employee compensation) and a 1099-K (for payment card transactions) at tax time.</p>
        <h3>Step 2: Business Deductions</h3>
        <p>The biggest deduction for Uber drivers is the <strong>Standard Mileage Rate</strong>. For 2025 (filed in 2026), the rate is <strong>$0.70 per mile</strong>. You can deduct all miles driven while actively providing rides or delivering orders. Other deductible expenses include:</p>
        <ul>
          <li>Phone plan (business-use portion)</li>
          <li>Tolls and parking fees</li>
          <li>Car washes and detailing</li>
          <li>Water and snacks for riders (Uber X)</li>
          <li>Insulated delivery bags (Uber Eats)</li>
          <li>Rideshare insurance endorsement fees</li>
          <li>Dashcam and phone mount</li>
        </ul>
        <h3>Step 3: Self-Employment Tax (15.3%)</h3>
        <p>The SE tax rate is 15.3% — 12.4% for Social Security (on the first $176,100 of net earnings) and 2.9% for Medicare (no cap). You can deduct half of your SE tax when calculating federal income tax.</p>
        <h3>Step 4: Quarterly Estimated Payments</h3>
        <p>If you expect to owe over $1,000 in taxes, the IRS requires quarterly payments. Divide your annual SE tax by 4 and pay by: April 15, June 15, September 15, and January 15.</p>
        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
          <p className="text-sm text-[#64748B] mb-3">Run your Uber tax numbers with our free calculator.</p>
          <Link href="/calculators/uber-tax-calculator-2026" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors">Open Uber Tax Calculator</Link>
        </div>
        <h2>Uber Tax Examples by Driving Level</h2>
        <table className="min-w-full border-collapse border border-[#E2E8F0] my-6">
          <thead><tr className="bg-[#F8FAFC]"><th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Level</th><th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Weekly Gross</th><th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Weekly Miles</th><th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">SE Tax Due</th><th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Quarterly Payment</th></tr></thead>
          <tbody>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Part-Time</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$600</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">200</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$1,019</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$255</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Moderate</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$950</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">400</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$2,004</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$501</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Full-Time</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$1,400</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">550</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$3,488</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$872</td></tr>
          </tbody>
        </table>
        <h2>10 Uber Tax Tips for 2026</h2>
        <ol>
          <li><strong>Track Every Mile.</strong> Use apps like Stride, Everlance, or QuickBooks Self-Employed to automatically track business miles.</li>
          <li><strong>Choose the Right Deduction Method.</strong> The standard mileage rate ($0.70/mile) is simpler and often better. Track actual expenses too and compare.</li>
          <li><strong>Set Aside 30%.</strong> Open a separate savings account and transfer 30% of your net earnings after each weekly payout.</li>
          <li><strong>Pay Quarterly.</strong> Avoid underpayment penalties by making estimated tax payments on time.</li>
          <li><strong>Deduct Your Phone.</strong> Calculate the business-use percentage of your phone plan and deduct accordingly.</li>
          <li><strong>Consider a Solo 401(k).</strong> As an independent contractor, you can contribute both employee and employer portions.</li>
          <li><strong>Track Cash Tips.</strong> All tips are taxable income. Track them accurately.</li>
          <li><strong>Know Your State Rules.</strong> Some states require quarterly estimated payments at the state level too.</li>
          <li><strong>Keep Receipts.</strong> For actual expense method, maintain digital records of all car-related expenses.</li>
          <li><strong>Consult a Tax Pro.</strong> Gig economy taxes are complex — a professional can save you money.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Do Uber drivers need to pay taxes on all their earnings?</h3>
        <p>Yes — all 1099-NEC income is taxable. Reduce it through legitimate deductions like mileage, phone, and tolls.</p>
        <h3>What is the difference between Uber Eats and Uber X tax deductions?</h3>
        <p>Both use the standard mileage rate. Uber X deducts rider amenities; Uber Eats deducts delivery bags. Both deduct phones and insurance.</p>
        <h3>How much should Uber drivers set aside for taxes?</h3>
        <p>25-30% of net earnings after deductions covers SE tax (15.3%) plus federal income tax. Add 3-8% for state income tax.</p>
      </div>
    </article>
  );
}
