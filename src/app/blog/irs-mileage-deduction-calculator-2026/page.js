import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "IRS Mileage Deduction Calculator 2026: $0.67/Mile Tax Savings Guide | TheMetricApp",
  description: "Free IRS mileage deduction calculator for 2026. Calculate your deduction at $0.67/mile for business, $0.21/mile for medical, and $0.14/mile for charity. Includes standard mileage vs actual expenses comparison.",
  keywords: ["IRS mileage deduction", "standard mileage rate 2026", "$0.67 per mile", "mileage tax deduction", "business mileage calculator", "mileage tracking", "gig worker mileage"],
  openGraph: { type: "article", locale: "en_US", siteName: "TheMetricApp", title: "IRS Mileage Deduction Calculator 2026: $0.67/Mile Tax Savings Guide | TheMetricApp", description: "Free IRS mileage deduction calculator for 2026. Calculate your deduction at $0.67/mile for business, $0.21/mile for medical, and $0.14/mile for charity.", url: "https://www.themetricapp.com/blog/irs-mileage-deduction-calculator-2026", publishedTime: "2026-05-25", images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "IRS Mileage Deduction Calculator 2026" }] },
  twitter: { card: "summary_large_image", title: "IRS Mileage Deduction Calculator 2026: $0.67/Mile Tax Savings Guide | TheMetricApp", description: "Free IRS mileage deduction calculator for 2026. Calculate your deduction at $0.67/mile for business." },
  alternates: { canonical: `${siteUrl}/blog/irs-mileage-deduction-calculator-2026` },
};

export default function IRSMileageBlog() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "What is the IRS standard mileage rate for 2026?", acceptedAnswer: { "@type": "Answer", text: "The 2026 IRS standard mileage rates are $0.67/mile for business, $0.21/mile for medical/moving, and $0.14/mile for charity." } },
    { "@type": "Question", name: "What qualifies as a deductible business mile?", acceptedAnswer: { "@type": "Answer", text: "Deductible miles include driving between work locations, to client meetings, to business events, and to pick up supplies. Commuting between home and regular workplace is not deductible." } },
    { "@type": "Question", name: "Standard mileage vs actual expenses — which gives a bigger deduction?", acceptedAnswer: { "@type": "Answer", text: "For most gig workers, the standard mileage rate gives a bigger deduction because it includes depreciation. An older vehicle may benefit from actual expenses." } },
    { "@type": "Question", name: "Do I need to keep a mileage log?", acceptedAnswer: { "@type": "Answer", text: "Yes — the IRS requires contemporaneous records of date, odometer readings, destination, purpose, and miles for each business trip." } },
    { "@type": "Question", name: "What apps can I use to track mileage?", acceptedAnswer: { "@type": "Answer", text: "Top apps include Stride (free), MileIQ ($5.99/mo), Everlance, QuickBooks Self-Employed, Hurdlr, and TripLog." } },
    { "@type": "Question", name: "Can I claim mileage for driving to my regular job?", acceptedAnswer: { "@type": "Answer", text: "No — commuting between home and your regular workplace is not deductible. Exceptions exist for home offices and temporary work locations." } },
  ] };

  const articleSchema = { "@type": "Article", headline: "IRS Mileage Deduction Calculator 2026", datePublished: "2026-05-25", dateModified: "2026-05-25", author: { "@type": "Organization", name: "TheMetricApp Team" }, publisher: { "@type": "Organization", name: "TheMetricApp", logo: { "@type": "ImageObject", url: "https://www.themetricapp.com/logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.themetricapp.com/blog/irs-mileage-deduction-calculator-2026" } };

  const breadcrumbSchema = { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.themetricapp.com/blog" },
    { "@type": "ListItem", position: 3, name: "IRS Mileage Deduction Calculator 2026", item: "https://www.themetricapp.com/blog/irs-mileage-deduction-calculator-2026" },
  ] };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />
      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link><span>/</span>
        <span className="text-[#64748B]">IRS Mileage Deduction Calculator 2026</span>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Tax Deductions</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">May 2026</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">10 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">IRS Mileage Deduction Calculator 2026: $0.67/Mile Tax Savings Guide</h1>
        <p className="text-lg text-[#64748B] leading-relaxed">Everything you need to know about the IRS standard mileage deduction in 2026 — business rates, medical and charity rates, how to track miles, standard mileage vs actual expenses, and how much you can save.</p>
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E2E8F0] text-sm text-[#94A3B8]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold text-xs">M</div>
          <div><p className="font-medium text-[#0F172A]">TheMetricApp Team</p><p>Last Updated: May 25, 2026</p></div>
        </div>
      </header>
      <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#475569] prose-p:leading-relaxed prose-a:text-[#6366F1] prose-a:font-medium hover:prose-a:text-[#4F46E5] prose-strong:text-[#0F172A] prose-ul:text-[#475569] prose-ol:text-[#475569] prose-li:leading-relaxed">
        <h2>Introduction</h2>
        <p>The IRS standard mileage deduction is one of the most powerful tax-saving tools available to freelancers, gig workers, small business owners, and anyone who uses their personal vehicle for work. In 2026, the rate stands at <strong>$0.67 per mile for business use</strong> — which means a gig worker driving 15,000 business miles per year can deduct $10,050 from their taxable income, saving $2,211 in federal taxes at the 22% bracket.</p>
        <p>Despite its power, the mileage deduction is also one of the most commonly misused and misunderstood tax deductions. Tens of thousands of taxpayers overclaim deduction miles (inviting audits), underclaim them (leaving money on the table), or fail to keep proper records (losing the deduction entirely when the IRS asks for documentation).</p>
        <p>That is why we built the{' '}<Link href="/calculators/irs-mileage-deduction-calculator"><strong>free IRS Mileage Deduction Calculator</strong></Link>. In this guide, you will learn exactly how the mileage deduction works in 2026 — what qualifies, how to calculate your deduction, how much you can save at each tax bracket, and whether the standard mileage rate or actual expenses method is better for your specific situation.</p>

        <h2>What Is the IRS Mileage Deduction and Why It Matters in 2026</h2>
        <p>The IRS mileage deduction allows you to deduct a fixed amount per mile driven for business, medical, moving, or charitable purposes. It is an alternative to deducting actual vehicle expenses (gas, maintenance, insurance, depreciation) — you choose whichever method gives the larger deduction for each vehicle you own.</p>
        <p>In 2026, the deduction matters more than ever because: (1) 70+ million Americans now have side hustles that involve driving, (2) the $0.67/mile rate is the highest it has ever been (up 11 cents from 2020&apos;s $0.575 rate), (3) the IRS has increased audit scrutiny on Schedule C filers claiming vehicle expenses, and (4) mileage tracking apps have made it easier than ever to maintain IRS-compliant logs.</p>

        <h2>How to Use the IRS Mileage Deduction Calculator</h2>
        <p>The{' '}<Link href="/calculators/irs-mileage-deduction-calculator"><strong>IRS Mileage Deduction Calculator 2026</strong></Link> makes it simple to see your exact savings:</p>
        <ol>
          <li><strong>Select Mileage Purpose</strong> — Business ($0.67/mi), Medical/Moving ($0.21/mi), or Charity ($0.14/mi).</li>
          <li><strong>Enter Weekly Miles</strong> — Your average business miles per week.</li>
          <li><strong>Select Weeks Per Year</strong> — 52 for year-round work, fewer for seasonal.</li>
          <li><strong>Choose Your Tax Bracket</strong> — The calculator estimates your actual tax savings based on your marginal rate.</li>
        </ol>

        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white text-2xl">🚗</div>
            <div>
              <p className="font-bold text-[#0F172A] text-lg mb-1">Try the IRS Mileage Deduction Calculator Now</p>
              <p className="text-sm text-[#64748B] mb-3">Enter your weekly miles and tax bracket to see your exact deduction and tax savings.</p>
              <Link href="/calculators/irs-mileage-deduction-calculator" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors shadow-sm">
                Open Mileage Calculator
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <h2>Complete Formula &amp; Calculation Breakdown</h2>
        <h3>Gross Deduction Formula</h3>
        <p>Gross Deduction = Total Annual Miles × IRS Rate Per Mile. Total Annual Miles = Weekly Miles × Weeks Per Year.</p>
        <p><strong>Example 1 — Beginner: DoorDash Driver</strong> 80 miles/week × 52 weeks = 4,160 miles. 4,160 × $0.67 = $2,787 deduction. At 12% bracket: $2,787 × 0.12 = $334 tax savings.</p>
        <p><strong>Example 2 — Intermediate: Real Estate Agent</strong> 200 miles/week × 50 weeks = 10,000 miles. 10,000 × $0.67 = $6,700. At 24% bracket: $6,700 × 0.24 = $1,608 tax savings.</p>
        <p><strong>Example 3 — Advanced: Regional Sales Manager</strong> 400 miles/week × 48 weeks = 19,200 miles. 19,200 × $0.67 = $12,864. At 32% bracket: $12,864 × 0.32 = $4,116 tax savings.</p>

        <h3>Deep Dive: Standard Mileage Rate vs Actual Expenses</h3>
        <p>The choice between standard mileage and actual expenses shapes your tax strategy. Standard mileage: simple tracking, includes depreciation, $10,050 deduction at 15,000 miles. Actual expenses: requires itemized receipts, may yield more for older vehicles, estimated $6,500-$8,500 for a typical sedan at 15,000 miles. The standard rate nearly always wins for newer vehicles (under 5 years old) and high-mileage drivers (over 10,000 business miles/year).</p>

        <h2>Real-Life Scenarios: 3 Driver Profiles</h2>
        <h3>Scenario 1: Part-Time Uber Driver</h3>
        <p>Jenna drives Uber 20 hours/week. 100 mi/wk × 50 wks = 5,000 mi. $0.67 × 5,000 = $3,350 deduction. At 12% bracket: saves $402/year.</p>
        <h3>Scenario 2: Full-Time DoorDash Driver</h3>
        <p>Marcus delivers full-time. 250 mi/wk × 52 wks = 13,000 mi. $8,710 deduction. At 22% bracket: saves $1,916/year.</p>
        <h3>Scenario 3: Traveling Sales Rep</h3>
        <p>Amanda covers 5 states. 500 mi/wk × 48 wks = 24,000 mi. $16,080 deduction. At 24% bracket: saves $3,859/year. She also uses the{' '}<Link href="/calculators/doordash-tax-estimator">DoorDash Tax Estimator</Link> for her personal delivery side hustle and the{' '}<Link href="/calculators/california-1099-tax-calculator">California 1099 Tax Calculator</Link> for her home state taxes.</p>

        <h2>8 Tips to Maximize Your Mileage Deduction in 2026</h2>
        <ol>
          <li><strong>Use a mileage tracking app.</strong> Stride (free) or MileIQ automatically log trips via GPS. No more paper logs.</li>
          <li><strong>Log every trip immediately.</strong> IRS requires contemporaneous records. Reconstructing miles is not acceptable in audits.</li>
          <li><strong>Choose standard mileage for newer vehicles.</strong> The $0.67 rate includes depreciation you cannot capture with actual expenses.</li>
          <li><strong>Consider actual expenses for older vehicles.</strong> If your car is paid off and has low operating costs, actual expenses may yield more.</li>
          <li><strong>Separate business and personal trips.</strong> The IRS does not allow commuting miles. Only the business portion is deductible.</li>
          <li><strong>Add parking and tolls separately.</strong> These are deductible in addition to the standard mileage rate.</li>
          <li><strong>Track your first year carefully.</strong> Your first year&apos;s choice (standard or actual) locks you in for subsequent years.</li>
          <li><strong>Combine with other deductions.</strong> Pair your mileage deduction with our{' '}<Link href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</Link> for a complete tax picture.</li>
        </ol>

        <h2>Common Mistakes to Avoid</h2>
        <ol>
          <li><strong>Claiming commuting miles.</strong> Driving from home to work and back is never deductible.</li>
          <li><strong>No mileage log.</strong> Without contemporaneous records, the IRS will disallow your deduction in an audit.</li>
          <li><strong>Double-dipping expenses.</strong> Standard mileage already covers gas, maintenance, depreciation — you cannot claim these separately.</li>
          <li><strong>Using the wrong rate.</strong> Business, medical, and charity have different rates. Use the correct one for each trip.</li>
          <li><strong>Forgetting state taxes.</strong> Most states conform to the federal standard mileage rate, but some have different rules.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-8">
          {[
            { q: "What is the IRS standard mileage rate for 2026?", a: "$0.67/mile for business, $0.21/mile for medical/moving, $0.14/mile for charity." },
            { q: "What qualifies as a deductible business mile?", a: "Driving between work locations, to clients, to business events, to pick up supplies. Commuting is not deductible." },
            { q: "Standard mileage vs actual expenses?", a: "Standard mileage is simpler and usually better for newer vehicles. Actual expenses may work for older paid-off vehicles." },
            { q: "Do I need to keep a mileage log?", a: "Yes — contemporaneous records of date, destination, purpose, and miles. Digital apps are recommended." },
            { q: "Can I deduct mileage AND other car expenses?", a: "No — choose one method. Parking fees and tolls are deductible in addition to either method." },
            { q: "What is the medical mileage rate?", a: "Medical/moving rate in 2026 is $0.21/mile. Medical mileage requires itemizing deductions." },
            { q: "What apps track mileage?", a: "Stride (free), MileIQ ($5.99/mo), Everlance, QuickBooks Self-Employed, Hurdlr, TripLog." },
            { q: "Can I claim commuting miles?", a: "No — commuting is personal. Exceptions: home office as principal place of business or temporary work location." },
          ].map((faq, i) => (
            <details key={i} className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all duration-200 hover:border-[#6366F1]/30">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#0F172A] hover:text-[#6366F1] transition-colors list-none"><span>{faq.q}</span>
                <svg className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </summary>
              <div className="px-5 pb-4 pt-1 text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9]">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>Conclusion</h2>
        <p>The IRS mileage deduction is free money if you drive for work. At $0.67/mile for business in 2026, 10,000 miles saves you $2,200+ at the 22% bracket. The key is tracking every mile, keeping proper records, and choosing the right method for your vehicle.</p>
        <ul>
          <li>Use our{' '}<Link href="/calculators/irs-mileage-deduction-calculator"><strong>IRS Mileage Deduction Calculator</strong></Link> to see your exact deduction.</li>
          <li>Download Stride or MileIQ and start tracking today.</li>
          <li>Compare with our{' '}<Link href="/calculators/doordash-tax-estimator"><strong>DoorDash Tax Estimator</strong></Link> and{' '}<Link href="/calculators/side-hustle-tax-calculator"><strong>Side Hustle Tax Calculator</strong></Link> for a complete picture.</li>
          <li>Explore all free tools on{' '}<Link href="/"><strong>TheMetricApp</strong></Link>.</li>
        </ul>
      </div>
      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold">M</div>
          <div><p className="font-bold text-[#0F172A] mb-1">TheMetricApp Team</p><p className="text-sm text-[#64748B] leading-relaxed">TheMetricApp provides free, accurate financial calculators for gig workers, freelancers, and small business owners.</p></div>
        </div>
      </div>
    </article>
  );
}