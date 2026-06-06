import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Student Loan Payoff Calculator 2026 | TheMetricApp" },
  description: "Free student loan payoff calculator and complete guide for 2026. Learn how to pay off $30k to $100k in student loans faster, compare repayment plans, and save thousands in interest with extra payments.",
  alternates: {
    canonical: `${siteUrl}/blog/student-loan-payoff-calculator-2026`,
  },
  openGraph: {
    title: "Student Loan Payoff Calculator 2026: Pay Off Loans",
    description: "Complete guide to paying off student loans in 2026. Calculate payments, compare plans, and see how extra payments save thousands. Free calculator included.",
    url: "https://www.themetricapp.com/blog/student-loan-payoff-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-05-28T00:00:00.000Z",
    images: [{ url: "/api/og?title=Student%20Loan%20Payoff%20Calculator%202026%3A%20Pay%20Off%20Loans%20Faster%20Guide%20%7C%20TheMetricApp&description=Complete%20guide%20to%20paying%20off%20student%20loans%20in%202026.%20Calculate%20payments%2C%20compare%20plans%2C%20and%20see%20how%20extra%20payments%20save%20thousands.%20Free%20calculator%20included.&type=article", width: 1200, height: 630, alt: "Student Loan Payoff Calculator 2026: Pay Off Loans Faster Guide | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Payoff Calculator 2026: Pay Off Loans",
    description: "Free guide to paying off student loans faster. Calculate payments, save on interest, and compare repayment plans.",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Student Loan Payoff Calculator 2026: Complete Guide to Paying Off $30k-$100k Faster",
    description: "Free student loan payoff calculator and complete guide for 2026. Learn how to pay off $30k to $100k in student loans faster, compare repayment plans, and save thousands in interest with extra payments.",
    datePublished: "2026-05-28",
    dateModified: "2026-05-28",
    author: { "@type": "Person", name: "TheMetricApp Team", url: "https://www.themetricapp.com/authors/themetricapp-team/", sameAs: ["https://www.themetricapp.com/authors/themetricapp-team/"] },
    publisher: {
      "@type": "Organization",
      name: "TheMetricApp",
      logo: { "@type": "ImageObject", url: "https://www.themetricapp.com/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.themetricapp.com/blog/student-loan-payoff-calculator-2026",
    },
  image: "https://www.themetricapp.com/api/og?title=student%20loan%20payoff%20calculator%202026&type=article",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the federal student loan rates for 2025-2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Undergrad 6.39%, Grad 7.94%, PLUS 8.94%. Fixed for the life of the loan.",
        },
      },
      {
        "@type": "Question",
        name: "What is the average student loan debt in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "About $39,075 federal per borrower, $42,670 including private loans.",
        },
      },
      {
        "@type": "Question",
        name: "Should I pay extra on my student loans or invest?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your loan rate is 6%+, prioritize paying extra. If it's under 4%, investing may be better. At 6.39% (undergrad rate), paying extra is a guaranteed 6.39% return — hard to beat.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an extra $50/month save on student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On a $35,000 loan at 6.39%, about $3,200 in interest and 2.5 years early payoff. Use our Student Loan Payoff Calculator for exact numbers.",
        },
      },
      {
        "@type": "Question",
        name: "What is PSLF and who qualifies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Public Service Loan Forgiveness forgives remaining federal loan debt after 120 qualifying payments while working for a government or non-profit employer.",
        },
      },
      {
        "@type": "Question",
        name: "Should I refinance my student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Refinance private loans if you can get a lower rate. Never refinance federal loans — you lose borrower protections permanently.",
        },
      },
      {
        "@type": "Question",
        name: "What repayment plan should I choose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard 10-year if you can afford it (least interest). Extended or IDR if you need lower payments. Use our calculator to compare all options.",
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
        name: "Student Loan Payoff Calculator 2026",
        item: "https://www.themetricapp.com/blog/student-loan-payoff-calculator-2026",
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">

        <CalculatorEmbed slug="student-loan-payoff-calculator-2026" />

      
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#64748B] dark:text-[#94A3B8]">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link>
        <span className="mx-2">→</span>
        <span className="text-[#0F172A] dark:text-[#F1F5F9]">Student Loan Payoff Calculator 2026</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight mb-4">
        Student Loan Payoff Calculator 2026: How to Pay Off $30k-$100k in Student Loans Faster
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
          Use our <strong>Student Loan Payoff Calculator</strong> to calculate your monthly payments, total interest, payoff timeline, and see how extra payments can save you thousands.
        </p>
        <Link
          href="/calculators/student-loan-payoff-calculator"
          className="inline-flex items-center gap-2 rounded-xl bg-[#6366F1] text-white font-semibold px-6 py-3 text-sm hover:bg-[#4F46E5] transition-all shadow-lg shadow-[#6366F1]/20"
        >
          Open Calculator →
        </Link>
      </div>

      <p className="text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-8">
        With 45 million Americans carrying student loan debt — averaging over $39,000 per borrower — finding the right repayment strategy has never been more important. In 2026, federal student loan interest rates range from 6.39% to 8.94%, making it crucial to understand exactly what your loans will cost and how to pay them off faster.
      </p>

      <p className="text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-8">
        In this guide, we&apos;ll walk through every repayment plan, show you real examples, and help you use our <Link href="/calculators/student-loan-payoff-calculator" className="text-[#6366F1] hover:underline font-semibold">free Student Loan Payoff Calculator</Link> to create a personalized payoff strategy.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Student Loan Statistics in 2026
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Total US student loan debt:</strong> $1.7 trillion</li>
        <li><strong>Average federal debt per borrower:</strong> $39,075</li>
        <li><strong>Average debt including private loans:</strong> $42,670</li>
        <li><strong>Average bachelor&apos;s graduate debt:</strong> $29,560</li>
        <li><strong>Percentage of borrowers with $50k+ debt:</strong> 25%</li>
        <li><strong>Average monthly payment:</strong> $300-$500 depending on plan</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Federal Student Loan Rates for 2025-2026
      </h2>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Federal student loan interest rates are set annually by Congress and remain fixed for the life of the loan. For the 2025-2026 academic year:
      </p>
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-4 mb-6 border border-[#E2E8F0] dark:border-[#334155]">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[#64748B] dark:text-[#94A3B8] border-b border-[#E2E8F0] dark:border-[#334155]">
              <th className="text-left py-2 pr-4">Loan Type</th>
              <th className="text-left py-2 px-4">Interest Rate</th>
              <th className="text-left py-2 pl-4">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#E2E8F0] dark:border-[#334155]">
              <td className="py-2 pr-4 font-medium text-[#0F172A] dark:text-[#F1F5F9]">Direct Subsidized/Unsubsidized (Undergrad)</td>
              <td className="py-2 px-4 text-[#6366F1] font-semibold">6.39%</td>
              <td className="py-2 pl-4 text-[#475569] dark:text-[#CBD5E1]">Most borrowers</td>
            </tr>
            <tr className="border-b border-[#E2E8F0] dark:border-[#334155]">
              <td className="py-2 pr-4 font-medium text-[#0F172A] dark:text-[#F1F5F9]">Direct Unsubsidized (Graduate)</td>
              <td className="py-2 px-4 text-[#6366F1] font-semibold">7.94%</td>
              <td className="py-2 pl-4 text-[#475569] dark:text-[#CBD5E1]">Master&apos;s, doctoral students</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium text-[#0F172A] dark:text-[#F1F5F9]">Direct PLUS (Parent/Graduate)</td>
              <td className="py-2 px-4 text-[#6366F1] font-semibold">8.94%</td>
              <td className="py-2 pl-4 text-[#475569] dark:text-[#CBD5E1]">Parents, grad students needing max funding</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Repayment Plans Compared
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Standard Repayment Plan (10 Years)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        The default plan for all federal student loans. You pay a fixed amount each month for exactly 10 years. This plan <strong>minimizes total interest</strong> because the repayment term is shortest. A $35,000 loan at 6.39% costs $395/month and $12,652 in total interest over 10 years.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Extended Repayment Plan (Up to 25 Years)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Available if you have more than $30,000 in Direct Loans. You can choose fixed or graduated payments over up to 25 years. This lowers your monthly payment but <strong>significantly increases total interest</strong>. A $35,000 loan at 6.39% over 25 years costs $233/month but $34,910 in total interest — nearly triple the standard plan.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Graduated Repayment Plan (10 Years)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Payments start low and increase every two years over 10 years. Designed for borrowers whose income grows over time. Initial payments cover only interest, while later payments pay down principal faster. Total interest is typically 10-20% higher than the standard plan.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Income-Driven Repayment (IDR) Plans
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        IDR plans cap your monthly payment at 10-20% of your discretionary income. After 20-25 years of qualifying payments, any remaining balance is forgiven. While this can make payments affordable, it often results in <strong>more total interest paid</strong> and potential tax liability on the forgiven amount.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Real Examples: How Extra Payments Save Thousands
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Example 1: Standard 10-Year Repayment — $35,000 @ 6.39%
      </h3>
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-4 mb-6 border border-[#E2E8F0] dark:border-[#334155]">
        <ul className="space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1]">
          <li><strong>Monthly payment:</strong> $395</li>
          <li><strong>Total interest (standard):</strong> $12,652</li>
          <li><strong>With $50/month extra:</strong> Saves $3,237 interest, pays off in 7.5 years</li>
          <li><strong>With $100/month extra:</strong> Saves $5,163 interest, pays off in 6.2 years</li>
          <li className="text-[#6366F1] font-bold"><strong>Total saved:</strong> Up to $5,163 by paying $100 extra/month!</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Example 2: Graduate School — $65,000 @ 7.94%
      </h3>
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-4 mb-6 border border-[#E2E8F0] dark:border-[#334155]">
        <ul className="space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1]">
          <li><strong>Monthly payment:</strong> $786</li>
          <li><strong>Total interest (standard):</strong> $29,356</li>
          <li><strong>With $100/month extra:</strong> Saves $5,847 interest, pays off in 8.3 years</li>
          <li><strong>With $200/month extra:</strong> Saves $9,811 interest, pays off in 7.0 years</li>
          <li className="text-[#6366F1] font-bold"><strong>Total saved:</strong> Almost $10,000 by paying $200 extra/month!</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Example 3: Private Loan — $45,000 @ 9.5%
      </h3>
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-4 mb-6 border border-[#E2E8F0] dark:border-[#334155]">
        <ul className="space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1]">
          <li><strong>Monthly payment:</strong> $582</li>
          <li><strong>Total interest (standard):</strong> $24,885</li>
          <li><strong>With $150/month extra:</strong> Saves $8,421 interest, pays off in 6 years</li>
          <li className="text-[#6366F1] font-bold"><strong>Total saved:</strong> $8,421 — more than 33% of total interest!</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        5 Strategies to Pay Off Student Loans Faster
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        1. Make Biweekly Payments
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Instead of one monthly payment, make half-payments every two weeks. This results in 26 half-payments (13 full payments) per year instead of 12. The extra payment each year goes directly to principal. On a $35,000 loan at 6.39%, this strategy saves about $1,800 in interest and shaves 1.5 years off repayment.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        2. Apply Windfalls to Principal
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Tax refunds, work bonuses, gifts, and side hustle income should go directly to your highest-interest student loan. A $3,000 tax refund applied to a 7.94% graduate loan saves $476/year in interest. Even one large lump sum early in repayment can save thousands.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        3. Refinance Private Loans (But NOT Federal Loans)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        If you have private student loans at 8-12% APR and good credit (700+), refinancing to a 5-7% rate can save significantly. However, <strong>never refinance federal loans</strong> into private loans — you&apos;ll lose access to income-driven repayment, PSLF, deferment, and forbearance protections.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        4. Target Highest-Rate Loans First (Avalanche)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        If you have multiple loans at different rates (e.g., a 6.39% undergrad loan and an 8.94% PLUS loan), put extra payments toward the highest-rate loan first. This is mathematically optimal and saves the most money, just like the avalanche method for credit cards.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        5. Explore Loan Forgiveness Programs
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        If you work in government, non-profit, or public service, the <strong>Public Service Loan Forgiveness (PSLF)</strong> program forgives remaining debt after 120 qualifying payments (10 years). Teachers may qualify for Teacher Loan Forgiveness (up to $17,500 after 5 years). These programs can save tens of thousands.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Common Student Loan Mistakes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Choosing the lowest monthly payment without considering total interest.</strong> Extended plans lower payments but triple total interest.</li>
        <li><strong>Not paying during grace period.</strong> Interest still accrues on unsubsidized loans during grace. If you can, pay at least the interest.</li>
        <li><strong>Ignoring loan forgiveness eligibility.</strong> If you work in public service, PSLF can save you more than any accelerated payoff strategy.</li>
        <li><strong>Refinancing federal loans.</strong> You lose borrower protections, IDR options, and forgiveness eligibility — permanently.</li>
        <li><strong>Not automating payments.</strong> Most servicers offer a 0.25% interest rate discount for autopay. On a $35,000 loan, that saves $87.50/year.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-10">
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What are the federal student loan rates for 2025-2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Undergrad 6.39%, Grad 7.94%, PLUS 8.94%. Fixed for the life of the loan.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the average student loan debt in 2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: About $39,075 federal per borrower, $42,670 including private loans.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: Should I pay extra on my student loans or invest?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: If your loan rate is 6%+, prioritize paying extra. If it&apos;s under 4%, investing may be better. At 6.39% (undergrad rate), paying extra is a guaranteed 6.39% return — hard to beat.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: How much does an extra $50/month save on student loans?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: On a $35,000 loan at 6.39%, about $3,200 in interest and 2.5 years early payoff. Use our <Link href="/calculators/student-loan-payoff-calculator" className="text-[#6366F1] hover:underline">calculator</Link> for exact numbers.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is PSLF and who qualifies?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Public Service Loan Forgiveness forgives remaining federal loan debt after 120 qualifying payments while working for a government or non-profit employer.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: Should I refinance my student loans?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Refinance private loans if you can get a lower rate. Never refinance federal loans — you lose borrower protections permanently.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What repayment plan should I choose?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Standard 10-year if you can afford it (least interest). Extended or IDR if you need lower payments. Use our calculator to compare all options.</p>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-12 p-6 bg-[#EEF2FF] dark:bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-2xl">
        <p className="text-sm font-bold text-[#6366F1] uppercase tracking-wider mb-4">🔗 Related Tools</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/calculators/credit-card-payoff-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>💳</span> Credit Card Payoff Calculator
          </Link>
          <Link href="/calculators/home-affordability-calculator-2026" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🏡</span> Home Affordability Calculator
          </Link>
          <Link href="/calculators/mortgage-calculator-uk" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🏡</span> Mortgage Calculator UK
          </Link>
          <Link href="/calculators/capital-gains-tax-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>📈</span> Capital Gains Tax Calculator
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
              <li><a href="https://studentaid.gov/manage-loans/repayment/plans" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Federal Student Aid — Repayment Plans</a></li>
              <li><a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">IRS — 2026 Tax Inflation Adjustments</a></li>
              <li><a href="https://www.nerdwallet.com/article/loans/student-loans/student-loan-statistics" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">NerdWallet — Student Loan Statistics</a></li>
              <li><a href="https://www.experian.com/blogs/ask-experian/student-loans/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Experian — Student Loan Resources</a></li>
              <li><a href="https://www.consumerfinance.gov/student-loans/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">CFPB — Student Loan Resources</a></li>
            </ul>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-2">
              <strong>Last Updated:</strong> May 2026. Interest rates, repayment plans, and forgiveness programs are subject to change. Consult a qualified professional for personalized advice.
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
