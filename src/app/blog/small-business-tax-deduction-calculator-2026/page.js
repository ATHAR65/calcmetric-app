import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Small Business Tax Deduction Calculator 2026: 25+ Write-Offs You're Missing",
  description: "Free small business tax deduction guide and calculator for 2026. Learn about self-employment tax, QBI deduction, home office, mileage, retirement plans, and 25+ write-offs every business owner should know.",
  alternates: {
    canonical: `${siteUrl}/blog/small-business-tax-deduction-calculator-2026`,
  },
  openGraph: {
    title: "Small Business Tax Deduction Calculator 2026: 25+ Write-Offs You're Missing | TheMetricApp",
    description: "Complete guide to small business tax deductions for 2026. SE tax, QBI, home office, mileage, and quarterly payments explained.",
    url: "https://www.themetricapp.com/blog/small-business-tax-deduction-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-05-28T00:00:00.000Z",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Small Business Tax Deduction Calculator 2026 — Complete Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Tax Deduction Calculator 2026: 25+ Write-Offs You're Missing",
    description: "Complete guide to small business tax deductions for 2026 with free calculator.",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Small Business Tax Deduction Calculator 2026: 25+ Write-Offs You're Missing",
    description: "Free small business tax deduction guide and calculator for 2026. Learn about self-employment tax, QBI deduction, home office, mileage, retirement plans, and 25+ write-offs every business owner should know.",
    datePublished: "2026-05-28",
    dateModified: "2026-05-28",
    author: { "@type": "Organization", name: "TheMetricApp Team" },
    publisher: {
      "@type": "Organization",
      name: "TheMetricApp",
      logo: { "@type": "ImageObject", url: "https://www.themetricapp.com/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.themetricapp.com/blog/small-business-tax-deduction-calculator-2026",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the self-employment tax rate for 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "15.3% — 12.4% for Social Security + 2.9% for Medicare. Paid on 92.35% of net earnings.",
        },
      },
      {
        "@type": "Question",
        name: "What is the QBI deduction for 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Up to 20% of qualified business income. Phase-out begins at $197,300 (single) / $394,600 (MFJ).",
        },
      },
      {
        "@type": "Question",
        name: "Can I deduct my health insurance premiums?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% deductible above-the-line for self-employed individuals.",
        },
      },
      {
        "@type": "Question",
        name: "How much should I save for quarterly taxes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "25-30% of net income. Use our Small Business Tax Deduction Calculator for exact amounts.",
        },
      },
      {
        "@type": "Question",
        name: "What is the standard mileage rate for 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "$0.725 per mile for business use.",
        },
      },
      {
        "@type": "Question",
        name: "Can I deduct both mileage AND actual vehicle expenses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you must choose one method. You can switch between methods each year for different vehicles.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.themetricapp.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Small Business Tax Deduction Calculator 2026",
        item: "https://www.themetricapp.com/blog/small-business-tax-deduction-calculator-2026",
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#64748B] dark:text-[#94A3B8]">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link>
        <span className="mx-2">→</span>
        <span className="text-[#0F172A] dark:text-[#F1F5F9]">Small Business Tax Deduction Calculator 2026</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight mb-4">
        Small Business Tax Deduction Calculator 2026: 25+ Write-Offs You&apos;re Missing
      </h1>

      <div className="flex items-center gap-4 text-sm text-[#64748B] dark:text-[#94A3B8] mb-8 pb-6 border-b border-[#E2E8F0] dark:border-[#1E293B]">
        <span>TheMetricApp Team</span>
        <span>•</span>
        <span>May 28, 2026</span>
        <span>•</span>
        <span>12 min read</span>
      </div>

      {/* Free Calculator CTA */}
      <div className="bg-gradient-to-r from-[#6366F1]/10 to-[#4F46E5]/10 border border-[#6366F1]/20 rounded-2xl p-6 mb-10">
        <p className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-2">
          🧮 Try Our Free Calculator
        </p>
        <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mb-4">
          Use our <strong>Small Business Tax Deduction Calculator</strong> to estimate your SE tax, QBI deduction, quarterly payments, and net take-home pay instantly.
        </p>
        <Link
          href="/calculators/small-business-tax-deduction-calculator"
          className="inline-flex items-center gap-2 rounded-xl bg-[#6366F1] text-white font-semibold px-6 py-3 text-sm hover:bg-[#4F46E5] transition-all shadow-lg shadow-[#6366F1]/20"
        >
          Open Calculator →
        </Link>
      </div>

      <p className="text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-8">
        Tax season is stressful enough without wondering if you&apos;re leaving money on the table. As a small business owner or freelancer in 2026, you have access to dozens of tax deductions that can significantly reduce your tax bill — but only if you know about them.
      </p>

      <p className="text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-8">
        In this guide, we&apos;ll walk through every major deduction available to self-employed individuals in 2026, show you real calculation examples, and help you use our <Link href="/calculators/small-business-tax-deduction-calculator" className="text-[#6366F1] hover:underline font-semibold">free Small Business Tax Deduction Calculator</Link> to estimate your total tax savings.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        What&apos;s New for the 2026 Tax Year?
      </h2>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        The 2026 tax year brings several inflation-adjusted changes that directly impact small business owners:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Standard mileage rate:</strong> Increased to $0.725/mile (up from $0.70 in 2025)</li>
        <li><strong>Standard deduction:</strong> $16,100 (single), $32,200 (MFJ), $24,150 (HOH)</li>
        <li><strong>SEP IRA limit:</strong> Up to 25% of compensation, max $70,000</li>
        <li><strong>Solo 401(k) employee contribution:</strong> $23,500 ($31,000 for ages 60-63)</li>
        <li><strong>QBI deduction thresholds:</strong> Phase-out begins at $197,300 (single) / $394,600 (MFJ)</li>
        <li><strong>Tax brackets:</strong> All seven brackets inflation-adjusted upward</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        How Self-Employment Tax Works in 2026
      </h2>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        As a self-employed individual, you pay both the employee and employer portions of Social Security and Medicare taxes — that&apos;s 15.3% total (12.4% for Social Security + 2.9% for Medicare). However, you only pay this on <strong>92.35% of your net earnings</strong> (gross income minus deductible business expenses).
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        The good news: <strong>half of your self-employment tax is deductible</strong> as an above-the-line adjustment to income. This means you deduct it from your gross income before calculating your adjusted gross income (AGI).
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        <strong>Example:</strong> If your net business income is $60,000, your SE tax is $60,000 × 92.35% × 15.3% = $8,478. You can deduct $4,239 (half of $8,478) from your income.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        25+ Tax Deductions for Small Business Owners in 2026
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        1. Home Office Deduction
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        If you use a portion of your home regularly and exclusively for business, you can deduct $5 per square foot (simplified method) up to 300 square feet ($1,500 max). The regular method allows you to deduct actual expenses based on the percentage of your home used for business.
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        <strong>Who qualifies:</strong> Freelancers, remote workers (if your employer doesn&apos;t provide an office), and any business owner who works from home. The space must be used exclusively for business — no dining room tables doubling as desks.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        2. Vehicle & Mileage Deduction
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        For 2026, the standard mileage rate is <strong>$0.725 per mile</strong>. You can deduct this for all business-related driving, including trips to meet clients, pick up supplies, run business errands, and travel between work locations.
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Alternatively, you can use the actual expenses method (gas, maintenance, repairs, insurance, depreciation, registration). Track both for the first year to see which gives a larger deduction. Once you choose the standard mileage rate, you must stick with it for that vehicle in future years.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        3. Health Insurance Premiums
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Self-employed individuals can deduct 100% of health, dental, and qualified long-term care insurance premiums for themselves, their spouse, and dependents. This is an <strong>above-the-line deduction</strong>, meaning you don&apos;t need to itemize to claim it. The deduction cannot exceed your net business income.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        4. Retirement Plan Contributions
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        <strong>SEP IRA:</strong> Contribute up to 25% of your net earnings, max $70,000 for 2026. Simple to set up, no employee contributions required.
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        <strong>Solo 401(k):</strong> Employee contribution up to $23,500 ($31,000 for ages 60-63) plus employer profit-sharing up to 25% of net earnings. Combined max: $70,000. You can also make Roth contributions.
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Every dollar contributed reduces your taxable income. A $23,500 Solo 401(k) contribution could save you $5,170-$8,695 in taxes depending on your bracket.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        5. QBI Deduction (Section 199A)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        The Qualified Business Income deduction allows eligible self-employed individuals to deduct up to <strong>20% of their qualified business income</strong>. For 2026, the deduction phases in differently:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Full deduction:</strong> Taxable income below $197,300 (single) / $394,600 (MFJ)</li>
        <li><strong>Partial deduction:</strong> Income between $197,300-$247,300 (single) / $394,600-$494,600 (MFJ)</li>
        <li><strong>No deduction:</strong> Income above $247,300 (single) / $494,600 (MFJ)</li>
      </ul>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        The deduction is also limited to the greater of 50% of W-2 wages or 25% of W-2 wages + 2.5% of the unadjusted basis of qualified property — but for many solo business owners, the simplified calculation applies.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        6. Advertising & Marketing
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Google Ads, Facebook Ads, Instagram promotions, website hosting, domain fees, email marketing software (Mailchimp, ConvertKit), content creation costs, and even business cards are all fully deductible.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        7. Software & Subscriptions
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Accounting software (QuickBooks, Xero), design tools (Adobe, Canva), project management (Asana, Notion), CRM (HubSpot, Salesforce), cloud storage (Dropbox, Google Drive), and industry-specific software are fully deductible business expenses.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        8. Professional Services
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Legal fees, accounting/bookkeeping services, tax preparation, business consulting, and coaching fees are all deductible. Many freelancers overlook the cost of their tax preparer — it&apos;s a deductible business expense.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        9. Education & Professional Development
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Courses, certifications, conferences, workshops, books, and industry publications that maintain or improve skills required in your business are deductible. The key: the education must maintain or improve existing skills, not qualify you for a new trade or business.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        10. Business Insurance
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        General liability insurance, professional liability (errors & omissions), business owner&apos;s policy (BOP), cyber liability insurance, and business interruption insurance premiums are all fully deductible.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        11-25. More Deductions You Might Be Missing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Internet & Phone:</strong> Deduct business-use percentage of bills (typically 50-80%)</li>
        <li><strong>Office Supplies:</strong> Pens, paper, printer ink, postage, shipping supplies</li>
        <li><strong>Business Meals:</strong> 50% of meals with clients or prospects</li>
        <li><strong>Travel:</strong> Airfare, hotels, rental cars for business trips</li>
        <li><strong>Bank Fees:</strong> Business bank account fees, credit card processing fees</li>
        <li><strong>Interest:</strong> Business loan or credit card interest</li>
        <li><strong>Rent:</strong> Office, co-working space, or storage rental</li>
        <li><strong>Utilities:</strong> Business portion of electricity, water, gas</li>
        <li><strong>Depreciation:</strong> Section 179 and bonus depreciation on equipment</li>
        <li><strong>Startup Costs:</strong> Up to $5,000 in organizational costs</li>
        <li><strong>Continuing Education:</strong> Licenses, certifications, and renewals</li>
        <li><strong>Subscriptions:</strong> Industry journals, trade magazines, research databases</li>
        <li><strong>Charitable Contributions:</strong> Through your business (passthrough to personal)</li>
        <li><strong>Cost of Goods Sold:</strong> Raw materials, inventory, packaging</li>
        <li><strong>Independent Contractors:</strong> Payments to freelancers and 1099 workers</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Real Examples: How Deductions Reduce Your Tax Bill
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Example 1: Freelance Designer ($80k Revenue)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Sarah earns $80,000 as a freelance designer. Her deductions:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-[#475569] dark:text-[#CBD5E1] mb-4">
        <li>Software & subscriptions: $3,600</li>
        <li>Home office (200 sq ft): $1,000</li>
        <li>Health insurance: $7,200</li>
        <li>Mileage (3,000 miles): $2,175</li>
        <li>Professional development: $1,500</li>
        <li>Internet & phone: $1,800</li>
      </ul>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Total deductions: $17,275. Net income: $62,725. SE tax: $8,852. QBI deduction: $10,775. Income tax: $4,892. Total tax: $13,744. <strong>Sarah saves $4,432 vs. paying tax on her full $80k revenue.</strong>
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Example 2: E-commerce Seller ($120k Revenue)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Mike sells on Amazon with $45k COGS, $8k advertising, $3.6k supplies, $2.9k mileage. Net income: $57,100. Total tax: ~$14,250. <strong>By tracking every expense, Mike saves over $12,000 vs. paying tax on gross revenue.</strong>
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Quarterly Estimated Tax Payments: A Complete Guide
      </h2>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Since self-employed individuals don&apos;t have taxes withheld from paychecks, the IRS requires quarterly estimated tax payments. The 2026 due dates are:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-[#475569] dark:text-[#CBD5E1] mb-4">
        <li><strong>Q1:</strong> April 15, 2026</li>
        <li><strong>Q2:</strong> June 15, 2026</li>
        <li><strong>Q3:</strong> September 15, 2026</li>
        <li><strong>Q4:</strong> January 15, 2027</li>
      </ul>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        You must make quarterly payments if you expect to owe $1,000 or more when filing. Use our <Link href="/calculators/small-business-tax-deduction-calculator" className="text-[#6366F1] hover:underline font-semibold">Small Business Tax Deduction Calculator</Link> to estimate your quarterly payment amount. The penalty for underpayment is calculated using the federal short-term rate plus 3%.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Common Tax Mistakes Small Business Owners Make
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Not tracking expenses year-round.</strong> Waiting until tax season leads to missed deductions and inaccurate records.</li>
        <li><strong>Mixing personal and business finances.</strong> Separate bank accounts and credit cards are essential for clean record-keeping.</li>
        <li><strong>Missing the QBI deduction.</strong> Many self-employed individuals qualify but don&apos;t claim it. Use our calculator to check.</li>
        <li><strong>Forgetting quarterly payments.</strong> Even if you pay in full at year-end, the IRS charges penalties for underpayment.</li>
        <li><strong>Not contributing to retirement.</strong> SEP IRA and Solo 401(k) contributions reduce taxable income AND build retirement savings.</li>
        <li><strong>Ignoring state tax obligations.</strong> If you live in a state with income tax, don&apos;t forget to factor it in.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-10">
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the self-employment tax rate for 2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: 15.3% — 12.4% for Social Security + 2.9% for Medicare. Paid on 92.35% of net earnings.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the QBI deduction for 2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Up to 20% of qualified business income. Phase-out begins at $197,300 (single) / $394,600 (MFJ).</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: Can I deduct my health insurance premiums?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Yes, 100% deductible above-the-line for self-employed individuals.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: How much should I save for quarterly taxes?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: 25-30% of net income. Use our <Link href="/calculators/small-business-tax-deduction-calculator" className="text-[#6366F1] hover:underline">calculator</Link> for exact amounts.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the standard mileage rate for 2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: $0.725 per mile for business use.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: Can I deduct both mileage AND actual vehicle expenses?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: No, you must choose one method. You can switch between methods each year for different vehicles.</p>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-12 p-6 bg-[#EEF2FF] dark:bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-2xl">
        <p className="text-sm font-bold text-[#6366F1] uppercase tracking-wider mb-4">🔗 Related Tools</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/calculators/self-employment-tax-calculator-2026" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>💼</span> Self Employment Tax Calculator
          </Link>
          <Link href="/calculators/side-hustle-tax-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>💰</span> Side Hustle Tax Calculator
          </Link>
          <Link href="/calculators/solo-401k-contribution-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🏦</span> Solo 401k Contribution Calculator
          </Link>
          <Link href="/calculators/irs-mileage-deduction-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🚗</span> IRS Mileage Deduction Calculator
          </Link>
        </div>
      </div>

      {/* Data Sources & Methodology */}
      <div className="mt-12 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#1E293B] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white text-xl font-bold">
            📊
          </div>
          <div>
            <p className="font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-2">Data Sources &amp; Methodology</p>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-2">
              The information in this guide and calculator is sourced from authoritative financial and regulatory sources:
            </p>
            <ul className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed space-y-1 list-disc list-inside">
              <li><a href="https://www.irs.gov/forms-pubs/about-schedule-c" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">IRS Schedule C — Profit or Loss from Business</a></li>
              <li><a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">IRS — 2026 Tax Inflation Adjustments</a></li>
              <li><a href="https://www.irs.gov/retirement-plans/plan-sponsor/sep-contribution-limits" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">IRS — SEP &amp; Solo 401k Contribution Limits</a></li>
              <li><a href="https://www.sba.gov/business-guide/manage-your-business/pay-taxes" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">SBA — Business Tax Guide</a></li>
              <li><a href="https://www.nerdwallet.com/article/small-business/small-business-tax-deductions" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">NerdWallet — Small Business Tax Deductions</a></li>
            </ul>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-2">
              <strong>Last Updated:</strong> May 2026. Tax rates, deduction limits, and regulations are subject to change. Consult a qualified tax professional for personalized advice.
            </p>
          </div>
        </div>
      </div>

      {/* Author bio */}
      <div className="mt-12 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#1E293B] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold">
            M
          </div>
          <div>
            <p className="font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-1">TheMetricApp Team</p>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              TheMetricApp provides free, accurate financial calculators for sellers, freelancers, and business owners in the US and UK. Our tools help you make smarter money decisions — from fee analysis and profit margins to tax estimates and savings projections. Every calculator is built with transparency, accuracy, and your financial success in mind.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
