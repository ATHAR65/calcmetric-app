import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Debt-to-Income Ratio Calculator 2026 | TheMetricApp" },
  description:
    "Free debt-to-income ratio calculator for 2026. Calculate your front-end and back-end DTI ratio. Understand what lenders look for, how to improve your DTI, an...",
  keywords: [
    "debt to income ratio calculator",
    "dti calculator",
    "debt to income ratio",
    "what is a good dti ratio",
    "front end dti ratio",
    "back end dti ratio",
    "mortgage dti requirements",
    "dti for home loan",
    "how to calculate dti",
    "debt to income ratio mortgage",
    "dti ratio for fha loan",
    "debt ratio calculator",
  ],
  alternates: {
    canonical: `${siteUrl}/blog/dti-ratio-calculator`,
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "TheMetricApp",
    title: "Debt-to-Income Ratio Calculator 2026: DTI Guide for",
    description:
    "Free DTI calculator for 2026. Calculate your debt-to-income ratio and understand what lenders look for.",
    url: "https://www.themetricapp.com/blog/dti-ratio-calculator",
    publishedTime: "2026-05-30",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Debt-to-Income%20Ratio%20Calculator%202026%3A%20DTI%20Guide%20for%20Mortgages%20%26%20Loans&description=Free%20DTI%20calculator%20for%202026.%20Calculate%20your%20debt-to-income%20ratio%20and%20understand%20what%20lenders%20look%20for.&type=article", width: 1200, height: 630, alt: "Debt-to-Income Ratio Calculator 2026: DTI Guide for Mortgages & Loans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DTI Ratio Calculator 2026: Debt-to-Income Guide",
    description:
    "Free DTI calculator. Calculate your debt-to-income ratio for mortgage and loan applications.",
  },
};

export default function BlogPost() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a debt-to-income (DTI) ratio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your debt-to-income (DTI) ratio is the percentage of your gross monthly income that goes toward debt payments. It's calculated by dividing your total monthly debt payments by your gross monthly income. For example, if you earn $6,000/month and have $2,000 in debt payments, your DTI is 33%. Lenders use DTI to assess your ability to manage monthly payments and repay loans — it's one of the most important factors in mortgage approval.",
        },
      },
      {
        "@type": "Question",
        name: "What is a good DTI ratio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most conventional mortgages: front-end DTI (housing only) should be under 28%, and back-end DTI (total debt) should be under 36%. For FHA loans: total DTI can go up to 43% (sometimes 50% with compensating factors). For USDA loans: maximum 41%. For VA loans: no official DTI limit but typically under 41%. A DTI under 36% is considered excellent, 36-43% is good, 43-50% is fair, and over 50% makes mortgage approval difficult.",
        },
      },
      {
        "@type": "Question",
        name: "How is DTI calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DTI = (Total Monthly Debt Payments / Gross Monthly Income) × 100. Monthly debt payments include: rent/mortgage (or proposed PITI), car loans, student loans, minimum credit card payments, personal loans, child support/alimony. They do NOT include: utilities, insurance (unless part of mortgage escrow), groceries, phone bills, or 401k contributions. Gross monthly income is your income before taxes and deductions.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between front-end and back-end DTI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Front-end DTI (also called housing ratio) only includes housing-related expenses: proposed mortgage payment (principal + interest + taxes + insurance) + HOA fees. Back-end DTI includes ALL monthly debt payments: housing expenses + car loans + student loans + credit card minimums + personal loans + child support. Lenders look at both: conventional loans typically require front-end under 28% and back-end under 36%.",
        },
      },
      {
        "@type": "Question",
        name: "How can I lower my DTI ratio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To lower your DTI: (1) Pay down credit card balances — this reduces minimum payments. (2) Pay off small loans entirely. (3) Increase your income through a raise, side hustle, or second job. (4) Avoid taking on new debt before applying for a mortgage. (5) Consider a co-signer with higher income. (6) Extend loan terms to lower monthly payments (though this increases total interest). (7) Sell an asset with a loan attached (e.g., sell a car and buy a cheaper one with cash).",
        },
      },
      {
        "@type": "Question",
        name: "What DTI do I need for a mortgage in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In 2026, mortgage DTI requirements by loan type: Conventional (Fannie Mae/Freddie Mac): max 36% back-end (up to 45-50% with strong compensating factors like high credit score, large down payment, or significant cash reserves). FHA: max 43% (up to 50% with compensating factors). USDA: max 41%. VA: no official limit but typically under 41%. Jumbo loans: typically max 43%. Your credit score, down payment, and cash reserves can allow higher DTI ratios.",
        },
      },
      {
        "@type": "Question",
        name: "Does DTI affect credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          "text": "No, DTI is not directly included in your credit score calculation. However, high DTI often correlates with high credit utilization (credit card balances relative to limits), which does affect credit scores (worth 30% of your FICO score). Additionally, lenders manually review your DTI during mortgage underwriting — even with a perfect credit score, high DTI can prevent loan approval. Improving your DTI improves both your creditworthiness and your ability to qualify for loans.",
        },
      },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Debt-to-Income Ratio Calculator 2026: DTI Guide for Mortgages & Loans",
    description: "Free debt-to-income ratio calculator for 2026. Calculate your front-end and back-end DTI ratio. Understand what lenders look for, how to improve your DTI, an...",
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    author: {
      "@type": "Person",
      name: "TheMetricApp",
      url: "https://www.themetricapp.com/authors/themetricapp",
      sameAs: ["https://www.themetricapp.com/authors/themetricapp"]
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.themetricapp.com/blog/dti-ratio-calculator",
    },
    image: "https://www.themetricapp.com/api/og?title=dti%20ratio%20calculator&type=article",
  }

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.themetricapp.com/blog" },
      { "@type": "ListItem", position: 3, name: "DTI Ratio Calculator", item: "https://www.themetricapp.com/blog/dti-ratio-calculator" },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />

      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#64748B]">DTI Ratio Calculator</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Home Buying</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">May 2026</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">10 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Debt-to-Income Ratio Calculator 2026: Complete DTI Guide for Mortgages & Loans
        </h1>
        <p className="text-lg text-[#64748B] leading-relaxed">
          Your debt-to-income ratio is one of the most important numbers in personal finance — and one of the first things lenders check when you apply for a mortgage, auto loan, or personal loan. Understanding and optimizing your DTI can mean the difference between approval and rejection.
        </p>
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E2E8F0] text-sm text-[#94A3B8]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold text-xs">M</div>
          <div>
            <p className="font-medium text-[#0F172A]">TheMetricApp Team</p>
            <p>Last Updated: May 30, 2026</p>
          </div>
        </div>
      </header>

      

        

      

        <CalculatorEmbed slug="dti-ratio-calculator" />

      <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#475569] prose-p:leading-relaxed prose-a:text-[#6366F1] prose-a:font-medium hover:prose-a:text-[#4F46E5] prose-strong:text-[#0F172A] prose-ul:text-[#475569] prose-ol:text-[#475569] prose-li:leading-relaxed">
        <h2>Introduction</h2>
        <p>
          When you apply for a mortgage, auto loan, or even a rental apartment, lenders look at one key number: your <strong>debt-to-income (DTI) ratio</strong>. It's the percentage of your gross monthly income that goes toward debt payments, and it tells lenders whether you can comfortably afford new monthly payments.
        </p>
        <p>
          Our <Link href="/calculators/dti-ratio-calculator"><strong>DTI Ratio Calculator</strong></Link> makes it easy to calculate both your front-end (housing) and back-end (total debt) DTI. Enter your income and debts — instantly see where you stand and what you need to qualify for your next loan.
        </p>

        <h2>How to Use the DTI Ratio Calculator</h2>
        <p>
          The <Link href="/calculators/dti-ratio-calculator"><strong>DTI Calculator</strong></Link> is simple:
        </p>
        <ol>
          <li><strong>Gross Monthly Income</strong> — Your total pre-tax income from all sources (salary, freelance, investments, alimony).</li>
          <li><strong>Proposed Mortgage Payment (PITI)</strong> — The estimated monthly payment including principal, interest, taxes, and insurance.</li>
          <li><strong>Car Loan Payments</strong> — Monthly payments on all vehicle loans.</li>
          <li><strong>Student Loan Payments</strong> — Monthly minimum payments on all student loans.</li>
          <li><strong>Credit Card Minimum Payments</strong> — Total minimum payments across all credit cards.</li>
          <li><strong>Other Debt Payments</strong> — Personal loans, child support, alimony, and any other monthly debt obligations.</li>
        </ol>
        <p>
          Results show your front-end DTI (housing ratio) and back-end DTI (total debt ratio), along with a color-coded rating indicating whether you're in good shape for mortgage approval.
        </p>

        
        <h2>DTI Formula</h2>
        <h3>Front-End DTI (Housing Ratio)</h3>
        <p><strong>Front-End DTI = (Housing Costs / Gross Monthly Income) × 100</strong></p>
        <p>Housing costs include: mortgage P&I + property taxes + homeowners insurance + HOA fees + PMI. Target: under 28%</p>

        <h3>Back-End DTI (Total Debt Ratio)</h3>
        <p><strong>Back-End DTI = (Total Monthly Debt / Gross Monthly Income) × 100</strong></p>
        <p>Total debt includes: Housing costs + car loans + student loans + credit card minimums + personal loans + child support. Target: under 36%</p>

        <h3>Example Calculation</h3>
        <p><strong>Gross monthly income: $8,333 ($100,000/year)</strong></p>
        <ul>
          <li>Proposed mortgage (PITI): $2,200/month</li>
          <li>Car loan: $400/month</li>
          <li>Student loan: $300/month</li>
          <li>Credit card minimums: $150/month</li>
          <li><strong>Front-End DTI: $2,200 / $8,333 = 26.4%</strong> ✅ (under 28%)</li>
          <li><strong>Back-End DTI: $3,050 / $8,333 = 36.6%</strong> ⚠️ (right at the 36% threshold)</li>
          <li>Paying off the credit card balance ($150/month × 36 = $5,400) brings back-end DTI to <strong>34.8%</strong> ✅</li>
        </ul>

        <h2>DTI Guidelines by Loan Type</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-[#E2E8F0]">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Loan Type</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Max Front-End DTI</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Max Back-End DTI</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">Conventional (Fannie/Freddie)</td>
                <td className="border border-[#E2E8F0] px-4 py-3">28%</td>
                <td className="border border-[#E2E8F0] px-4 py-3">36% (up to 50% with reserves)</td>
                <td className="border border-[#E2E8F0] px-4 py-3">Requires 5%+ down, 620+ credit score</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">FHA</td>
                <td className="border border-[#E2E8F0] px-4 py-3">31%</td>
                <td className="border border-[#E2E8F0] px-4 py-3">43% (up to 50%)</td>
                <td className="border border-[#E2E8F0] px-4 py-3">3.5% down, 580+ score. More flexible on DTI.</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">VA</td>
                <td className="border border-[#E2E8F0] px-4 py-3">No official limit</td>
                <td className="border border-[#E2E8F0] px-4 py-3">Typically 41%</td>
                <td className="border border-[#E2E8F0] px-4 py-3">0% down, no PMI. Residual income analysis.</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">USDA</td>
                <td className="border border-[#E2E8F0] px-4 py-3">29%</td>
                <td className="border border-[#E2E8F0] px-4 py-3">41%</td>
                <td className="border border-[#E2E8F0] px-4 py-3">0% down, rural areas only, 640+ score.</td>
              </tr>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">Jumbo Loans</td>
                <td className="border border-[#E2E8F0] px-4 py-3">28%</td>
                <td className="border border-[#E2E8F0] px-4 py-3">43%</td>
                <td className="border border-[#E2E8F0] px-4 py-3">Above $766,550 (2026). 10-20% down, 700+ score.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Real-Life Scenarios</h2>

        <h3>Scenario 1: First-Time Home Buyer</h3>
        <p><strong>$75,000 salary ($6,250/month), $10,000 in savings</strong></p>
        <ul>
          <li>Proposed mortgage (PITI): $1,600/month</li>
          <li>Car loan: $350/month</li>
          <li>Student loan: $250/month</li>
          <li>Credit card minimum: $100/month</li>
          <li><strong>Front-End DTI: 25.6% ✅</strong></li>
          <li><strong>Back-End DTI: 36.8% ⚠️</strong></li>
          <li>Outcome: Marginal — may qualify with strong credit (740+) and compensating factors. Paying off credit card ($100 min = ~$3,000 balance) would bring DTI to 35.2% ✅</li>
        </ul>

        <h3>Scenario 2: High Earner with Multiple Debts</h3>
        <p><strong>$150,000 salary ($12,500/month)</strong></p>
        <ul>
          <li>Proposed mortgage (PITI): $3,000/month</li>
          <li>Car loan 1: $600/month</li>
          <li>Car loan 2: $500/month</li>
          <li>Student loans: $400/month</li>
          <li>Credit cards: $800/month (high balances)</li>
          <li>Boat loan: $350/month</li>
          <li><strong>Front-End DTI: 24% ✅</strong></li>
          <li><strong>Back-End DTI: 45.2% ❌</strong></li>
          <li>Outcome: Too high for conventional. Paying off credit cards ($800/min = ~$25k balance) would bring DTI to 38.8% — marginal. Need to pay off at least one car loan to get under 36%.</li>
        </ul>

        <h3>Scenario 3: Freelancer with Variable Income</h3>
        <p><strong>$85,000 average income ($7,083/month — lenders use 2-year average)</strong></p>
        <ul>
          <li>Proposed mortgage (PITI): $2,100/month</li>
          <li>Car loan: $300/month</li>
          <li>Student loans: $0 (paid off!)</li>
          <li>Credit card minimum: $0 (paid off monthly)</li>
          <li><strong>Front-End DTI: 29.6% ⚠️</strong> (slightly above 28%)</li>
          <li><strong>Back-End DTI: 33.9% ✅</strong></li>
          <li>Outcome: Good! Despite slightly high front-end, low back-end and demonstrated income (2 years tax returns) make this approvable. Freelancers should show 2+ years of consistent income.</li>
        </ul>

        <h2>What Counts as Debt for DTI?</h2>
        <p><strong>Included in DTI:</strong></p>
        <ul>
          <li>Mortgage or rent (current or proposed)</li>
          <li>Property taxes and homeowners insurance (if escrowed)</li>
          <li>HOA fees</li>
          <li>Car loans</li>
          <li>Student loans (even if deferred — lenders use 0.5-1% of balance)</li>
          <li>Credit card minimum payments</li>
          <li>Personal loans</li>
          <li>Child support and alimony payments</li>
          <li>Any other installment loans</li>
        </ul>
        <p><strong>Not included in DTI:</strong></p>
        <ul>
          <li>Utilities (electricity, water, gas, internet)</li>
          <li>Groceries</li>
          <li>Insurance (health, life, auto — unless escrowed)</li>
          <li>Phone bills</li>
          <li>Subscriptions (Netflix, Spotify, etc.)</li>
          <li>401k contributions</li>
          <li>Income taxes</li>
          <li>Savings and investment contributions</li>
        </ul>

        <h2>8 Strategies to Improve Your DTI</h2>
        <ol>
          <li><strong>Pay down credit card balances.</strong> This is the fastest way to lower DTI. Paying off a card eliminates the minimum payment entirely. Start with cards with the highest minimum payment relative to balance.</li>
          <li><strong>Pay off small loans completely.</strong> Eliminating a $200/month car payment or personal loan directly improves your DTI by that amount.</li>
          <li><strong>Increase your income.</strong> A raise, promotion, side hustle, or second job all increase your gross income, lowering the DTI percentage. Even temporary income (like a part-time job) can help.</li>
          <li><strong>Avoid new debt before applying.</strong> Don't finance a car, buy furniture on credit, or open new credit cards in the 3-6 months before applying for a mortgage.</li>
          <li><strong>Consider a co-borrower.</strong> Adding a spouse or partner with income reduces the DTI ratio since their income is added.</li>
          <li><strong>Extend loan terms.</strong> Refinancing a car loan from 3 years to 5 years lowers the monthly payment (but increases total interest paid over the long term).</li>
          <li><strong>Pay off student loans strategically.</strong> Paying off a $15,000 student loan with $200/month payment improves DTI by 2-3%. Consider using a bonus or tax refund.</li>
          <li><strong>Reduce your proposed mortgage amount.</strong> A lower home price or larger down payment reduces the monthly mortgage payment, lowering both front-end and back-end DTI.</li>
        </ol>

        <p>
          Use the DTI Ratio Calculator alongside our{' '}
          <Link href="/calculators/mortgage-calculator-us"><strong>Mortgage Calculator</strong></Link>{' '}
          to find a home price that fits your DTI, and the{' '}
          <Link href="/calculators/home-affordability-calculator"><strong>Home Affordability Calculator</strong></Link>{' '}
          to determine your maximum budget.
        </p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-8">
          {[
            { q: "What is a debt-to-income ratio?", a: "The percentage of your gross monthly income that goes to debt payments. Calculated as: Total Monthly Debt / Gross Monthly Income × 100. Key metric for mortgage approval." },
            { q: "What is a good DTI ratio?", a: "Under 36% is excellent. 36-43% is good. 43-50% is fair (FHA may approve). Over 50% makes conventional mortgage approval difficult." },
            { q: "How is DTI calculated?", a: "Front-end DTI = Housing costs / Gross monthly income. Back-end DTI = Total debt / Gross monthly income. Total debt includes mortgage, car loans, student loans, credit card minimums." },
            { q: "What is front-end vs back-end DTI?", a: "Front-end: housing costs only (mortgage PITI, HOA). Target under 28%. Back-end: all debt including housing. Target under 36% for conventional loans." },
            { q: "How can I lower my DTI?", a: "Pay down credit cards, pay off small loans, increase income, avoid new debt, add a co-borrower, or reduce the proposed mortgage amount." },
            { q: "What DTI do I need for a mortgage in 2026?", a: "Conventional: 28%/36% (front/back). FHA: 31%/43% (up to 50% with factors). VA: typically 41% max. USDA: 29%/41%. Jumbo: 28%/43%." },
            { q: "Does DTI affect credit score?", a: "No, DTI is not directly included in credit score calculation. But high DTI often correlates with high credit utilization, which does affect your score (30% of FICO score)." },
          ].map((faq, i) => (
            <details key={i} className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all duration-200 hover:border-[#6366F1]/30">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#0F172A] hover:text-[#6366F1] transition-colors list-none">
                <span>{faq.q}</span>
                <svg className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-1 text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9]">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>Conclusion</h2>
        <p>
          Your debt-to-income ratio is one of the most important numbers in your financial life. Whether you're applying for a mortgage, refinancing, or just trying to understand your financial health, knowing and optimizing your DTI can save you thousands and help you qualify for better loan terms and interest rates.
        </p>
        <ol>
          <li>Use our <Link href="/calculators/dti-ratio-calculator"><strong>DTI Ratio Calculator</strong></Link> to check where you stand.</li>
          <li>If your DTI is above 36%, focus on paying down credit card debt first.</li>
          <li>Avoid taking on new debt for at least 3-6 months before applying for a mortgage.</li>
          <li>Run the numbers with our <Link href="/calculators/mortgage-calculator-us"><strong>Mortgage Calculator</strong></Link> to find a home price that fits your DTI.</li>
        </ol>
      </div>

      <section className="mt-16 pt-10 border-t border-[#E2E8F0]">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Pinterest-Style Image Ideas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { prompt: "DTI ratio formula visual: Total monthly debt / Gross monthly income = DTI%. Clean infographic with example numbers. Indigo color scheme. 1000x1500px.", label: "DTI Formula" },
            { prompt: "Front-end vs back-end DTI comparison: Housing only vs all debt. Side-by-side with target percentages. 1000x1500px.", label: "Front vs Back DTI" },
            { prompt: "DTI by loan type: Conventional 28/36, FHA 31/43, VA 41, USDA 29/41. Comparison table with icons. 1000x1500px.", label: "DTI by Loan Type" },
            { prompt: "How to lower your DTI: 8 actionable strategies. Checklist style with icons for each tip. 1000x1500px.", label: "Lower Your DTI" },
            { prompt: "What counts as debt for DTI: Mortgage ✅, Car loan ✅, Utilities ❌, Groceries ❌. Visual checklist. 1000x1500px.", label: "What Counts as Debt" },
            { prompt: "Good vs bad DTI ranges: Under 36% excellent, 36-43% good, 43-50% fair, over 50% poor. Color-coded gauge. 1000x1500px.", label: "DTI Ranges" },
          ].map((image, i) => (
            <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-4 hover:shadow-lg hover:border-[#6366F1]/20 transition-all duration-200">
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#EEF2FF] to-white border border-[#E2E8F0] flex items-center justify-center mb-3">
                <div className="text-center px-3">
                  <div className="text-3xl mb-2">{["📊", "🏠", "🏦", "✅", "📝", "🎯"][i]}</div>
                  <p className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">Image Suggestion {i + 1}</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0F172A] mb-1.5">{image.label}</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{image.prompt}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white text-xl font-bold">📊</div>
          <div>
            <p className="font-bold text-[#0F172A] mb-2">Data Sources & Methodology</p>
            <ul className="text-sm text-[#64748B] leading-relaxed space-y-1 list-disc list-inside">
              <li><a href="https://www.consumerfinance.gov/owning-a-home/explore/check-your-debt-to-income-ratio/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">CFPB — Debt-to-Income Ratio</a></li>
              <li><a href="https://www.fanniemae.com/faq/debt-income-ratio-what-it-and-how-it-calculated" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Fannie Mae — DTI Requirements</a></li>
              <li><a href="https://www.hud.gov/program_offices/housing/sfh/ins/sfhfaqs" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">HUD — FHA Loan Requirements</a></li>
            </ul>
            <p className="text-sm text-[#64748B] mt-2"><strong>Last Updated:</strong> May 2026. DTI requirements vary by lender and loan program. Consult a mortgage professional for pre-approval.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold">M</div>
          <div>
            <p className="font-bold text-[#0F172A] mb-1">TheMetricApp Team</p>
            <p className="text-sm text-[#64748B] leading-relaxed">TheMetricApp provides free, accurate financial calculators for consumers, families, and business owners. Our home buying tools help you qualify for the best mortgage and make informed decisions.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
