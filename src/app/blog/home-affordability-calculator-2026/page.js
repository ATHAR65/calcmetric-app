import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Home Affordability Calculator 2026: How Much House Can You Afford?",
  description:
    "Learn how to calculate how much house you can afford in 2026. Complete guide to the 28/36 DTI rule, down payments, interest rates, and smart home buying strategies.",
  alternates: { canonical: `${siteUrl}/blog/home-affordability-calculator-2026` },
  openGraph: {
    title: "Home Affordability Calculator 2026: Complete Guide | TheMetricApp",
    description: "Learn how to calculate how much house you can afford with the 28/36 DTI rule.",
    url: "https://www.themetricapp.com/blog/home-affordability-calculator-2026",
    siteName: "TheMetricApp", locale: "en_US", type: "article",
    publishedTime: "2026-06-01", authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Affordability Calculator 2026: Complete Guide | TheMetricApp",
    description: "Learn how to calculate how much house you can afford in 2026.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Should I use the 28/36 rule or can I go higher?", "acceptedAnswer": { "@type": "Answer", "text": "The 28/36 rule is a conservative guideline. FHA loans allow up to 31/43, and some lenders approve up to 50% DTI with strong credit (720+) and significant reserves. However, staying within 28/36 provides a comfortable margin for saving and unexpected expenses." } },
      { "@type": "Question", "name": "How does the down payment affect affordability?", "acceptedAnswer": { "@type": "Answer", "text": "A 20% down payment eliminates PMI, saving $200-$300/month. It also reduces your loan amount and monthly payment. However, putting down less than 20% can help you enter the market sooner in a rising price environment." } },
      { "@type": "Question", "name": "Does this include homeowners insurance and HOA fees?", "acceptedAnswer": { "@type": "Answer", "text": "No — the 28/36 rule covers principal, interest, and property taxes. Homeowners insurance ($100-$200/month) and HOA fees ($50-$500/month) should be factored into your total monthly housing budget." } }
    ]
  };
  const articleSchema = { "@type": "BlogPosting", "headline": "Home Affordability Calculator 2026", "description": "Learn how to calculate how much house you can afford in 2026.", "datePublished": "2026-06-01", "dateModified": "2026-06-01", "author": { "@type": "Organization", "name": "TheMetricApp Team" }, "publisher": { "@type": "Organization", "name": "TheMetricApp", "logo": { "@type": "ImageObject", "url": "https://www.themetricapp.com/themetric-logo.png" } }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.themetricapp.com/blog/home-affordability-calculator-2026" } };
  const breadcrumbSchema = { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.themetricapp.com/blog" }, { "@type": "ListItem", "position": 3, "name": "Home Affordability Calculator Guide", "item": "https://www.themetricapp.com/blog/home-affordability-calculator-2026" }] };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />
      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link><span>/</span>
        <span className="text-[#64748B]">Home Affordability Calculator 2026</span>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Real Estate</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">June 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">Home Affordability Calculator 2026: How Much House Can You Afford?</h1>
        <p className="text-lg text-[#64748B] leading-relaxed">The 28/36 rule is the standard lenders use to determine how much house you can afford. This guide explains how to calculate your home buying budget, the factors that affect affordability, and strategies to increase your purchasing power.</p>
      </header>
      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>
        <p>Buying a home is one of the biggest financial decisions you&apos;ll ever make. Knowing exactly how much house you can afford — before you start touring properties — saves time, prevents disappointment, and helps you make an offer with confidence.</p>
        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
          <p className="text-sm text-[#64748B] mb-3">Calculate your home buying budget in real-time.</p>
          <Link href="/calculators/home-affordability-calculator-2026" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors">Open Home Affordability Calculator</Link>
        </div>
        <h2>Understanding the 28/36 Rule</h2>
        <p>The 28/36 rule is a standard lending guideline used by most conventional mortgage lenders:</p>
        <ul>
          <li><strong>28% Front-End Ratio:</strong> Your monthly housing costs (principal, interest, property taxes, insurance) should not exceed 28% of your gross monthly income.</li>
          <li><strong>36% Back-End Ratio:</strong> Your total monthly debt payments (housing + car loans, student loans, credit cards) should not exceed 36% of your gross monthly income.</li>
        </ul>
        <p>The calculator uses the more restrictive of these two limits to determine your affordable home price.</p>
        <h2>Affordability Examples for 2026</h2>
        <p>With 2026 interest rates around 6.5% for a 30-year fixed mortgage:</p>
        <table className="min-w-full border-collapse border border-[#E2E8F0] my-6">
          <thead><tr className="bg-[#F8FAFC]"><th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Annual Income</th><th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Down Payment</th><th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Monthly Debts</th><th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Max Home Price</th></tr></thead>
          <tbody>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$75,000</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">20%</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$500</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">~$245,000</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$100,000</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">20%</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$500</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">~$355,000</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$150,000</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">20%</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$800</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">~$530,000</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$200,000</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">20%</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$1,000</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">~$710,000</td></tr>
          </tbody>
        </table>
        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
          <p className="text-sm text-[#64748B] mb-3">Run your own affordability numbers with our free calculator.</p>
          <Link href="/calculators/home-affordability-calculator-2026" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors">Open Home Affordability Calculator</Link>
        </div>
        <h2>7 Factors That Affect Your Home Affordability</h2>
        <ol>
          <li><strong>Interest Rates.</strong> A 1% rate change affects affordability by ~10%. At 6.5% vs 7.5%, you can afford about $40,000 less house on a $100k income.</li>
          <li><strong>Down Payment.</strong> 20% down eliminates PMI and reduces monthly payments. FHA loans allow as little as 3.5% down but require MIP.</li>
          <li><strong>Credit Score.</strong> Scores above 740 qualify for the best rates. A 100-point difference can change your rate by 0.5-1%.</li>
          <li><strong>Debt-to-Income Ratio.</strong> Lower existing debts mean more room for a mortgage payment.</li>
          <li><strong>Property Taxes.</strong> Rates vary by county from 0.5% to 2.5% of home value.</li>
          <li><strong>Homeowners Insurance.</strong> Coastal areas and older homes cost more to insure.</li>
          <li><strong>HOA Fees.</strong> Can range from $50/month for basic maintenance to $500+/month for luxury amenities.</li>
        </ol>
        <h2>Frequently Asked Questions</h2>
        <h3>Should I use the 28/36 rule or can I go higher?</h3>
        <p>The 28/36 rule is conservative. FHA allows 31/43, some lenders go to 50% with strong credit. Staying within 28/36 provides financial flexibility.</p>
        <h3>How does the down payment affect affordability?</h3>
        <p>20% down eliminates PMI saving $200-$300/month. Less than 20% down helps enter the market sooner.</p>
        <h3>Does this include homeowners insurance and HOA fees?</h3>
        <p>No — insurance ($100-$200/month) and HOA ($50-$500/month) should be added separately.</p>
      </div>
    </article>
  );
}
