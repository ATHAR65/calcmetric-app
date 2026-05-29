import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Capital Gains Tax Calculator 2026: Complete Guide to Short-Term & Long-Term Gain Taxes",
  description:
    "Master capital gains taxes in 2026. Learn how to calculate short-term and long-term gains, NIIT surcharge, state taxes, tax-loss harvesting strategies, and real-world examples with step-by-step math.",
  alternates: {
    canonical: `${siteUrl}/blog/capital-gains-tax-calculator-2026`,
  },
  openGraph: {
    title: "Capital Gains Tax Calculator 2026: Complete Guide | TheMetricApp",
    description:
      "Master capital gains taxes in 2026. Learn how to calculate short-term and long-term gains, NIIT surcharge, state taxes, and tax-loss harvesting with step-by-step examples.",
    url: "https://www.themetricapp.com/blog/capital-gains-tax-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-05-27",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Gains Tax Calculator 2026: Complete Guide | TheMetricApp",
    description:
      "Master capital gains taxes in 2026. Learn how to calculate short-term and long-term gains, NIIT surcharge, state taxes, and tax-loss harvesting strategies.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the 2026 long-term capital gains tax brackets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For 2026, long-term capital gains are taxed at 0% (up to $49,450 single, $98,900 MFJ), 15% ($49,451–$545,500 single, $98,901–$613,700 MFJ), and 20% (over those thresholds). Short-term gains are taxed as ordinary income at 10–37%.",
        },
      },
      {
        "@type": "Question",
        "name": "How can I avoid capital gains tax legally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strategies include: holding assets for over 1 year for lower long-term rates, staying within the 0% bracket, using tax-loss harvesting to offset gains, contributing to retirement accounts, using the primary residence exclusion ($250K/$500K), and investing in Opportunity Zones.",
        },
      },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    "headline": "Capital Gains Tax Calculator 2026: Complete Guide to Short-Term & Long-Term Gain Taxes",
    "description":
      "Master capital gains taxes in 2026. Learn how to calculate short-term and long-term gains, NIIT surcharge, state taxes, and tax-loss harvesting strategies with real-world examples.",
    "datePublished": "2026-05-27",
    "dateModified": "2026-05-27",
    "author": { "@type": "Organization", "name": "TheMetricApp Team" },
    "publisher": {
      "@type": "Organization",
      "name": "TheMetricApp",
      "logo": { "@type": "ImageObject", "url": "https://www.themetricapp.com/logo.svg" },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.themetricapp.com/blog/capital-gains-tax-calculator-2026",
    },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.themetricapp.com/blog" },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Capital Gains Tax Calculator 2026 Guide",
        "item": "https://www.themetricapp.com/blog/capital-gains-tax-calculator-2026",
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />

      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">
          Blog
        </Link>
        <span>/</span>
        <span className="text-[#64748B]">Capital Gains Tax Calculator 2026</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">
            Investment Tax
          </span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">
            May 2026
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Capital Gains Tax Calculator 2026: Complete Guide to Short-Term & Long-Term Gain Taxes
        </h1>
        <p className="text-lg text-[#64748B] leading-relaxed">
          Understand exactly how capital gains are taxed in 2026 — including the 0%/15%/20% long-term brackets,
          the 3.8% NIIT surcharge, state-level taxes, and proven strategies to minimize your tax bill. Includes
          real-world examples with step-by-step math.
        </p>
      </header>

      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>
        <p>
          Capital gains taxes are one of the most significant costs of investing — but they're also one of the
          most manageable if you understand the rules. Whether you're selling stocks, cryptocurrency, real estate,
          or business assets, the tax treatment depends on how long you held the asset, your filing status, your
          total income, and what state you live in.
        </p>
        <p>
          In 2026, the structure of capital gains taxation remains largely unchanged from recent years, but
          inflation adjustments have shifted the bracket thresholds upward. The long-term capital gains rates
          (0%, 15%, 20%) remain intact, and the 3.8% Net Investment Income Tax (NIIT) continues to apply for
          high-income earners. This guide covers everything you need to know, from basic definitions to
          advanced tax optimization strategies.
        </p>

        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">
            Try the Capital Gains Tax Calculator Now
          </p>
          <p className="text-sm text-[#64748B] mb-3">
            Calculate your exact 2026 capital gains tax in seconds — includes federal brackets, NIIT, and
            state tax adjustments.
          </p>
          <Link
            href="/calculators/capital-gains-tax-calculator"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors"
          >
            Open Capital Gains Tax Calculator
          </Link>
        </div>

        <h2>What Are Capital Gains?</h2>
        <p>
          A <strong>capital gain</strong> is the profit you make when you sell a capital asset for more than
          you paid for it. Capital assets include stocks, bonds, mutual funds, ETFs, real estate, cryptocurrency,
          collectibles (art, antiques, coins), and business assets. The gain is calculated as:
        </p>
        <p>
          <strong>Capital Gain = Sale Price − (Purchase Price + Cost Basis Adjustments)</strong>
        </p>
        <p>
          Cost basis adjustments include brokerage commissions, closing costs on real estate, capital
          improvements to property, legal fees, and transfer taxes. If you sell an asset for less than your
          adjusted cost basis, you have a <strong>capital loss</strong>, which can offset gains and reduce
          your tax bill.
        </p>

        <h2>Short-Term vs. Long-Term Capital Gains (2026 Rules)</h2>
        <p>
          The single most important factor in determining your capital gains tax rate is your <strong>holding
          period</strong>:
        </p>
        <ul>
          <li><strong>Short-Term:</strong> Assets held for <em>1 year or less</em>. Taxed as ordinary income at your marginal tax rate (10% to 37% for 2026).</li>
          <li><strong>Long-Term:</strong> Assets held for <em>more than 1 year</em>. Taxed at preferential rates (0%, 15%, or 20% for 2026).</li>
        </ul>
        <p>
          The holding period is measured from the day after acquisition to the day of sale. If you buy a stock
          on June 1, 2025, and sell it on June 2, 2026, it qualifies as long-term. If you sell on May 31, 2026,
          it's short-term. For tax purposes, the holding period matters by the <em>day</em>, not the month.
        </p>

        <h2>2026 Long-Term Capital Gains Tax Brackets</h2>
        <p>
          The following table shows the 2026 long-term capital gains tax brackets. Note that these thresholds
          are adjusted for inflation each year by the IRS:
        </p>

        <table className="w-full border-collapse border border-[#E2E8F0] my-6 text-sm">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-[#E2E8F0] px-4 py-2 text-left font-semibold">Rate</th>
              <th className="border border-[#E2E8F0] px-4 py-2 text-left font-semibold">Single</th>
              <th className="border border-[#E2E8F0] px-4 py-2 text-left font-semibold">Married Filing Jointly</th>
              <th className="border border-[#E2E8F0] px-4 py-2 text-left font-semibold">Head of Household</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#E2E8F0] px-4 py-2 font-semibold text-[#6366F1]">0%</td>
              <td className="border border-[#E2E8F0] px-4 py-2">Up to $49,450</td>
              <td className="border border-[#E2E8F0] px-4 py-2">Up to $98,900</td>
              <td className="border border-[#E2E8F0] px-4 py-2">Up to $66,200</td>
            </tr>
            <tr>
              <td className="border border-[#E2E8F0] px-4 py-2 font-semibold text-amber-600">15%</td>
              <td className="border border-[#E2E8F0] px-4 py-2">$49,451 – $545,500</td>
              <td className="border border-[#E2E8F0] px-4 py-2">$98,901 – $613,700</td>
              <td className="border border-[#E2E8F0] px-4 py-2">$66,201 – $579,600</td>
            </tr>
            <tr>
              <td className="border border-[#E2E8F0] px-4 py-2 font-semibold text-red-600">20%</td>
              <td className="border border-[#E2E8F0] px-4 py-2">Over $545,500</td>
              <td className="border border-[#E2E8F0] px-4 py-2">Over $613,700</td>
              <td className="border border-[#E2E8F0] px-4 py-2">Over $579,600</td>
            </tr>
          </tbody>
        </table>

        <h2>Net Investment Income Tax (NIIT) — The 3.8% Surcharge</h2>
        <p>
          The NIIT applies an additional <strong>3.8% tax</strong> on the lesser of your net investment income
          (including capital gains) or the amount by which your modified adjusted gross income (MAGI) exceeds:
        </p>
        <ul>
          <li><strong>$200,000</strong> — Single, Head of Household, Qualifying Widow(er)</li>
          <li><strong>$250,000</strong> — Married Filing Jointly</li>
          <li><strong>$125,000</strong> — Married Filing Separately</li>
        </ul>
        <p>
          <strong>Example:</strong> A single filer with $180,000 in wages and $50,000 in long-term capital gains
          has a MAGI of $230,000. NIIT applies to $30,000 ($230,000 − $200,000 threshold) at 3.8% = $1,140
          additional tax. This brings the effective federal rate on the $50,000 gain from 15% ($7,500) to
          17.28% ($8,640).
        </p>

        <h2>State Capital Gains Taxes</h2>
        <p>
          Most states tax capital gains as ordinary income at your state's marginal income tax rate. The
            treatment varies significantly by state:
        </p>
        <ul>
          <li><strong>No income tax (0%):</strong> Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, Wyoming</li>
          <li><strong>Flat rate:</strong> Colorado (4.4%), Illinois (4.95%), Indiana (3.15%), Massachusetts (5%), Michigan (4.25%), North Carolina (4.5%), Pennsylvania (3.07%), Utah (4.65%)</li>
          <li><strong>Highest rates:</strong> California (up to 13.3%), Hawaii (up to 11%), New Jersey (up to 10.75%), Oregon (up to 9.9%), Minnesota (up to 9.85%), New York (up to 10.9%)</li>
        </ul>
        <p>
          Some states offer preferential rates or deductions for long-term capital gains. For example, New
          Mexico allows a deduction for certain capital gains, and some states exempt gains on small business
          stock. Always check your state's specific rules — the tax difference between California (13.3%) and
          Texas (0%) on a $100,000 gain is $13,300.
        </p>

        <h2>Real-World Calculation Examples</h2>

        <h3>Example 1: The 0% Bracket Win (Moderate Earner, Long-Term)</h3>
        <p>
          <strong>Profile:</strong> Single filer, $47,000 ordinary income. Sold Amazon stock held for 4 years.
          Purchased at $10,000, sold at $25,000.<br />
          <strong>Gain:</strong> $15,000 (long-term).<br />
          <strong>Total Income:</strong> $62,000 ($47,000 + $15,000).<br />
          <strong>Long-Term Bracket:</strong> Her ordinary income of $47,000 uses most of the 0% bracket
          ($49,450 for single filers). The remaining 0% space is $2,450. Her $15,000 gain fills this space,
          then spills into the 15% bracket for the remaining $12,550.<br />
          <strong>Tax:</strong> ($2,450 × 0%) + ($12,550 × 15%) = $1,882.50.<br />
          <strong>NIIT:</strong> $62,000 is below $200,000 → $0.<br />
          <strong>Effective Rate:</strong> 12.55%.
        </p>

        <h3>Example 2: Crypto Short-Term (High Earner, California)</h3>
        <p>
          <strong>Profile:</strong> Married Filing Jointly, $350,000 ordinary income. Sold Ethereum held for
          6 months. Purchased at $30,000, sold at $95,000. California resident.<br />
          <strong>Gain:</strong> $65,000 (short-term).<br />
          <strong>Total Income:</strong> $415,000.<br />
          <strong>Short-Term Tax:</strong> Tax on $350,000 alone is ~$89,177. Tax on $415,000 is ~$113,017.
          Marginal tax on gain: $23,840 → ~36.7% (32% bracket + phaseouts).<br />
          <strong>NIIT:</strong> $415,000 − $250,000 = $165,000 → $165,000 × 3.8% = $6,270 allocated to gain.<br />
          <strong>CA State Tax (13.3%):</strong> $65,000 × 13.3% = $8,645.<br />
          <strong>Total Tax on Gain:</strong> $23,840 + $6,270 + $8,645 = $38,755.<br />
          <strong>Net Gain After Tax:</strong> $26,245 — effective combined rate of <strong>59.6%</strong>.
          A painful reminder of why long-term holding matters, especially in high-tax states.
        </p>

        <h2>Tax-Loss Harvesting: Turn Losses Into Tax Savings</h2>
        <p>
          <strong>Tax-loss harvesting</strong> is the practice of selling investments at a loss to offset
          capital gains from other investments. It's one of the most powerful tools available to investors
          for reducing their tax liability.
        </p>
        <p>Key rules to understand:</p>
        <ul>
          <li>Short-term losses offset short-term gains first; long-term losses offset long-term gains first.</li>
          <li>If net losses exceed net gains, you can deduct up to <strong>$3,000 per year</strong> ($1,500 if MFS) against ordinary income.</li>
          <li>Remaining losses carry forward <strong>indefinitely</strong> to future tax years (no expiration).</li>
          <li>The <strong>wash sale rule</strong> disallows losses if you buy substantially identical securities within 30 days before or after the sale — but this rule <strong>does not apply to cryptocurrency</strong> (as of 2026).</li>
        </ul>
        <p>
          <strong>Example:</strong> You have $20,000 in realized gains from selling Tesla stock. You also hold
          Nvidia stock with $12,000 in unrealized losses. By selling Nvidia (tax-loss harvesting), you
          reduce your net gain to $8,000. If you're in the 15% long-term bracket, this saves you $1,800 in
          federal tax ($12,000 × 15%). You can then reinvest the proceeds immediately in a different fund
          (e.g., AMD instead of Nvidia) to maintain market exposure.
        </p>

        <h2>Other Capital Gains Tax Strategies</h2>
        <ul>
          <li>
            <strong>Primary Residence Exclusion:</strong> If you've lived in your home for at least 2 of the
            last 5 years, you can exclude up to $250,000 of capital gains ($500,000 for married couples) from
            taxation. This is one of the most valuable tax breaks available.
          </li>
          <li>
            <strong>1031 Like-Kind Exchange (Real Estate):</strong> For investment real estate (not personal
            residences), you can defer capital gains taxes indefinitely by reinvesting proceeds into a
            qualifying replacement property through a qualified intermediary.
          </li>
          <li>
            <strong>Opportunity Zones:</strong> Investing capital gains into Qualified Opportunity Funds
            allows you to defer and potentially reduce taxes on the original gain, plus exclude appreciation
            on the QOF investment held for 10+ years.
          </li>
          <li>
            <strong>Retirement Accounts:</strong> Capital gains within 401(k)s, IRAs, and other tax-advantaged
            accounts are not taxed at the time of sale. You only pay tax on withdrawals (traditional accounts)
            or pay no tax at all (Roth accounts).
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQs)</h2>

        <h3>What are the 2026 long-term capital gains tax brackets?</h3>
        <p>
          For 2026, the 0% bracket applies up to $49,450 (single), $98,900 (MFJ), and $66,200 (HOH). The 15%
          bracket applies to income up to $545,500 (single), $613,700 (MFJ), and $579,600 (HOH). The 20%
          bracket applies above those thresholds. Short-term gains are taxed as ordinary income at rates
          from 10% to 37%.
        </p>

        <h3>How can I avoid paying capital gains tax legally?</h3>
        <p>
          Legal strategies include: holding assets for more than 1 year to qualify for lower long-term rates,
          keeping taxable income below the 0% bracket threshold, using tax-loss harvesting to offset gains,
          investing through tax-advantaged retirement accounts (401k, IRA), using the primary residence
          exclusion ($250K/$500K), and investing in Qualified Opportunity Zones for deferred gains.
        </p>

        <h3>Do I pay capital gains tax if I reinvest the proceeds?</h3>
        <p>
          Generally yes — reinvesting proceeds from a sale does not exempt you from capital gains tax. The
          tax is triggered at the time of sale, regardless of what you do with the proceeds. The exception
          is a 1031 like-kind exchange for real estate, which allows tax deferral if you reinvest in a
          qualifying property through the proper channels.
        </p>

        <h3>What is the wash sale rule and does it apply to crypto?</h3>
        <p>
          The wash sale rule prohibits claiming a loss if you repurchase a substantially identical security
          within 30 days before or after the sale. This applies to stocks, ETFs, mutual funds, and options.
          As of 2026, the wash sale rule <strong>does not apply to cryptocurrency</strong>, making crypto
          uniquely flexible for tax-loss harvesting strategies. However, proposed legislation could change
          this in future years.
        </p>

        <h3>How are collectibles (art, antiques, coins) taxed?</h3>
        <p>
          Collectibles are taxed at a maximum rate of <strong>28%</strong> for long-term gains, which is
          higher than the standard 20% maximum for other assets. Short-term collectibles gains are taxed as
          ordinary income at your marginal rate (up to 37%). Collectibles also do not qualify for the 0%
          long-term bracket — the 28% rate is a flat maximum, not a bracket structure. Gains on collectibles
          are also subject to the 3.8% NIIT if applicable, pushing the top rate to 31.8%.
        </p>

        <div className="not-prose rounded-2xl border border-indigo-700 bg-indigo-900/20 p-6 my-8">
          <p className="font-bold text-#6366F1 text-lg mb-1">📊 Calculate Your 2026 Capital Gains Tax</p>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Use our free <strong>Capital Gains Tax Calculator</strong> to estimate your exact tax liability
            in seconds. Includes federal brackets, NIIT surcharge, and state tax adjustments for stocks,
            crypto, and real estate.
          </p>
          <Link
            href="/calculators/capital-gains-tax-calculator"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors"
          >
            Open Capital Gains Tax Calculator →
          </Link>
        </div>

        <h2>Related Calculators</h2>
        <ul>
          <li>
            <Link href="/calculators/california-1099-tax-calculator">
              California 1099 Tax Calculator
            </Link>{" "}
            — Calculate self-employment, federal, and California state taxes for 1099 contractors.
          </li>
          <li>
            <Link href="/calculators/side-hustle-tax-calculator">
              Side Hustle Tax Calculator
            </Link>{" "}
            — Estimate taxes on freelance and gig economy income.
          </li>
          <li>
            <Link href="/calculators/solo-401k-contribution-calculator">
              Solo 401k Contribution Calculator
            </Link>{" "}
            — Maximize retirement tax savings.
          </li>
          <li>
            <Link href="/calculators/rental-property-roi-calculator">
              Rental Property ROI Calculator
            </Link>{" "}
            — Analyze real estate investment returns and tax implications.
          </li>
        </ul>
      </div>
    </article>
  );
}
