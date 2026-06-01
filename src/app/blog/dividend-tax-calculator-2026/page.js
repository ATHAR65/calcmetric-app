import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Dividend Tax Calculator 2026: Complete Guide to Qualified & Ordinary Dividend Taxes",
  description:
    "Learn how dividend taxes work in 2026. Complete guide to qualified vs ordinary dividend tax rates, NIIT surcharge, state taxes, and strategies to minimize your dividend tax burden.",
  alternates: {
    canonical: `${siteUrl}/blog/dividend-tax-calculator-2026`,
  },
  openGraph: {
    title: "Dividend Tax Calculator 2026: Complete Guide | TheMetricApp",
    description:
      "Learn how dividend taxes work in 2026. Complete guide to qualified vs ordinary dividend tax rates and strategies.",
    url: "https://www.themetricapp.com/blog/dividend-tax-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-01",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dividend Tax Calculator 2026: Complete Guide | TheMetricApp",
    description: "Learn how dividend taxes work in 2026 with our complete guide.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between qualified and ordinary dividends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Qualified dividends are paid by US corporations and held for at least 60 days in the 121-day period around the ex-dividend date. They are taxed at lower capital gains rates (0-20%). Ordinary dividends — from REITs, MLPs, and most foreign corporations — are taxed at regular income tax rates up to 37%."
        }
      },
      {
        "@type": "Question",
        "name": "What are the dividend tax rates for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Qualified dividends: 0% (income up to $47,025 single), 15% ($47,026-$518,900), 20% (over $518,900). Ordinary dividends: taxed at regular income brackets up to 37%. An additional 3.8% NIIT applies for single filers over $200,000 MAGI ($250,000 married)."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reduce taxes on dividend income?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strategies include: holding dividend stocks in tax-advantaged accounts (IRA/401k), focusing on qualified dividends over ordinary dividends, staying within the 0% qualified dividend bracket by managing total income, and using tax-loss harvesting to offset gains."
        }
      }
    ]
  };

  const articleSchema = {
    "@type": "BlogPosting",
    "headline": "Dividend Tax Calculator 2026: Complete Guide to Qualified & Ordinary Dividend Taxes",
    "description": "Learn how dividend taxes work in 2026 with our complete guide covering qualified vs ordinary rates.",
    "datePublished": "2026-06-01",
    "dateModified": "2026-06-01",
    "author": {
      "@type": "Organization",
      "name": "TheMetricApp Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TheMetricApp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.themetricapp.com/themetric-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.themetricapp.com/blog/dividend-tax-calculator-2026"
    }
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.themetricapp.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Dividend Tax Calculator Guide", "item": "https://www.themetricapp.com/blog/dividend-tax-calculator-2026" }
    ]
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />

      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#64748B]">Dividend Tax Calculator 2026</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">
            Investing
          </span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">
            June 2026
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Dividend Tax Calculator 2026: Complete Guide to Qualified &amp; Ordinary Dividend Taxes
        </h1>
        <p className="text-lg text-[#64748B] leading-relaxed">
          Dividends are a powerful source of passive income, but they come with complex tax rules. Whether you&apos;re a retiree living off dividends or a young investor building wealth, understanding how dividends are taxed is crucial for maximizing your after-tax returns.
        </p>
      </header>

      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>
        <p>
          Not all dividends are created equal in the eyes of the IRS. The tax treatment depends on whether your dividends are classified as <strong>qualified</strong> or <strong>ordinary</strong>. This distinction can mean the difference between paying 0% and 37% on your dividend income.
        </p>

        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
          <p className="text-sm text-[#64748B] mb-3">Calculate your dividend tax liability in real-time.</p>
          <Link href="/calculators/dividend-tax-calculator-2026" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors">
            Open Dividend Tax Calculator
          </Link>
        </div>

        <h2>Qualified vs Ordinary Dividends</h2>
        <h3>Qualified Dividends</h3>
        <p>
          Qualified dividends are taxed at the lower long-term capital gains rates (0%, 15%, or 20%) rather than ordinary income rates. To qualify, dividends must be:
        </p>
        <ul>
          <li>Paid by a US corporation or a qualifying foreign corporation</li>
          <li>Held for at least 60 days during the 121-day period starting 60 days before the ex-dividend date</li>
          <li>Not from tax-exempt entities, REITs, or MLPs</li>
        </ul>

        <h3>Ordinary (Non-Qualified) Dividends</h3>
        <p>
          Ordinary dividends are taxed at your regular income tax rate (up to 37%). These include:
        </p>
        <ul>
          <li>Dividends from REITs (Real Estate Investment Trusts)</li>
          <li>Dividends from MLPs (Master Limited Partnerships)</li>
          <li>Dividends from most foreign corporations</li>
          <li>Dividends paid on money market accounts and savings accounts</li>
          <li>Dividends that don&apos;t meet the holding period requirement</li>
        </ul>

        <h2>2026 Dividend Tax Rates</h2>
        <table className="min-w-full border-collapse border border-[#E2E8F0] my-6">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Dividend Type</th>
              <th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Tax Rate Range</th>
              <th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Tax on $20,000 Dividend</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Qualified (0% bracket)</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">0%</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$0</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Qualified (15% bracket)</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">15%</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$3,000</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Qualified (20% bracket)</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">20%</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$4,000</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Ordinary (22% bracket)</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">22%</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$4,400</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Ordinary (32%+ bracket)</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">32-37%</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$6,400-$7,400</td></tr>
          </tbody>
        </table>

        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
          <p className="text-sm text-[#64748B] mb-3">Run your own dividend tax numbers with our free calculator.</p>
          <Link href="/calculators/dividend-tax-calculator-2026" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors">
            Open Dividend Tax Calculator
          </Link>
        </div>

        <h2>Net Investment Income Tax (NIIT)</h2>
        <p>
          High earners face an additional <strong>3.8% Net Investment Income Tax</strong> on the lesser of their net investment income (including dividends) or the amount their modified AGI exceeds $200,000 (single) or $250,000 (married filing jointly). This means the maximum effective tax rate on qualified dividends for top earners can reach 23.8% (20% + 3.8%).
        </p>

        <h2>6 Strategies to Minimize Dividend Taxes</h2>
        <ol>
          <li><strong>Use Tax-Advantaged Accounts.</strong> Hold dividend stocks in IRAs, 401(k)s, or HSAs where dividends grow tax-deferred or tax-free.</li>
          <li><strong>Focus on Qualified Dividends.</strong> Choose stocks paying qualified dividends over REITs or MLPs that pay ordinary dividends.</li>
          <li><strong>Manage Your Taxable Income.</strong> Keep total income below $47,025 (single) to enjoy 0% qualified dividend rate.</li>
          <li><strong>Tax-Loss Harvesting.</strong> Offset dividend gains with realized losses from underperforming investments.</li>
          <li><strong>Invest in Municipal Bonds.</strong> If you need current income, municipal bond dividends are often tax-free at the federal level.</li>
          <li><strong>Consider Location.</strong> Live in a state with no income tax (TX, FL, WA, etc.) to avoid state taxes on dividends.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <h3>What is the difference between qualified and ordinary dividends?</h3>
        <p>Qualified dividends are paid by US corporations and held for at least 60 days, taxed at 0-20%. Ordinary dividends are taxed at regular income rates up to 37%.</p>
        <h3>What are the dividend tax rates for 2026?</h3>
        <p>Qualified: 0% (up to $47,025 single), 15% ($47,026-$518,900), 20% (over $518,900). Ordinary: up to 37%. Plus 3.8% NIIT for high earners.</p>
        <h3>How can I reduce taxes on dividend income?</h3>
        <p>Hold dividend stocks in tax-advantaged accounts, focus on qualified dividends, stay in the 0% bracket, and use tax-loss harvesting.</p>
      </div>
    </article>
  );
}
