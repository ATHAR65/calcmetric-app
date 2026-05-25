import Link from "next/link";

export const metadata = {
  title: "Blog — Financial Calculators & Guides",
  description:
    "Read the latest financial tips, tax guides, and calculator tutorials from TheMetricApp team covering DoorDash taxes, eBay fees, Texas paychecks, solar ROI, EV savings, freelancer fees, and import tariffs.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Financial Calculators & Guides | TheMetricApp",
    description:
      "Read the latest financial tips, tax guides, and calculator tutorials from TheMetricApp team.",
    url: "https://www.themetricapp.com/blog",
    siteName: "TheMetricApp",
    type: "website",
  },
  twitter: {
    title: "Blog — Financial Calculators & Guides | TheMetricApp",
    card: "summary_large_image",
  },
};

const posts = [
  {
    slug: "us-import-tariff-calculator-2026",
    title: "US Import Tariff Calculator 2026: Duties, Landed Cost & Section 232 Guide",
    excerpt:
      "Free US import tariff calculator for 2026. Calculate duties at 20% China, 10% Vietnam, 3.5% UK/EU rates. Includes Section 232 surcharges, MPF, HMF and total landed cost. Essential for Amazon FBA and e-commerce importers.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "12 min read",
    category: "Import & Trade",
    tags: ["Import", "Tariff", "E-Commerce", "Amazon FBA", "International Trade"],
  },
  {
    slug: "side-hustle-tax-calculator-2026",
    title: "Side Hustle Tax Calculator 2026: Gig Income, SE Tax & Quarterly Payments Guide",
    excerpt:
      "Free side hustle tax calculator for 2026. Calculate self-employment tax, federal income tax, state tax, and quarterly estimated payments for Uber, DoorDash, Fiverr, Etsy and Airbnb income.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "12 min read",
    category: "Gig Economy",
    tags: ["Side Hustle", "Gig Economy", "Self-Employment", "Taxes", "Freelancing"],
  },
  {
    slug: "irs-mileage-deduction-calculator-2026",
    title: "IRS Mileage Deduction Calculator 2026: $0.67/Mile Tax Savings Guide",
    excerpt:
      "Free IRS mileage deduction calculator for 2026. Calculate your deduction at $0.67/mile for business, $0.21/mile for medical, and $0.14/mile for charity. Includes standard mileage vs actual expenses comparison.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "10 min read",
    category: "Tax Deductions",
    tags: ["Mileage Deduction", "IRS", "Tax Savings", "Gig Workers", "Self-Employment"],
  },
  {
    slug: "solo-401k-contribution-calculator-2026",
    title: "Solo 401k Contribution Limits 2026: Complete Guide to Maxing Out Retirement Savings",
    excerpt:
      "Complete guide to Solo 401k contributions in 2026. Learn the $70,000 limit, SECURE 2.0 super catch-up for ages 60-63, employer profit-sharing, and tax savings strategies for freelancers and self-employed.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "12 min read",
    category: "Retirement Planning",
    tags: ["Retirement", "Solo 401k", "Self-Employment", "Tax Savings", "Freelancing"],
  },
  {
    slug: "paypal-fee-calculator-2026",
    title: "PayPal Fee Calculator 2026: Complete Guide to Fees, Rates & Savings",
    excerpt:
      "Complete guide to PayPal fees in 2026. Calculate exact costs for goods and services, invoices, international transactions, and micropayments. Compare PayPal vs Stripe and learn how to reduce fees.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "12 min read",
    category: "Payment Processing",
    tags: ["PayPal", "Payment Processing", "Fees", "Stripe", "E-Commerce"],
  },
  {
    slug: "texas-paycheck-calculator-2026",
    title: "Texas Paycheck Calculator 2026: Take-Home Pay After Federal & State Withholding",
    excerpt:
      "Texas may have no state income tax, but federal withholdings, FICA, and benefits deductions still take a bite. Learn exactly how to calculate your net paycheck in 2026 with real formulas and examples.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "10 min read",
    category: "Paycheck",
    tags: ["Texas", "Paycheck", "Payroll", "Withholding", "Salary"],
  },
  {
    slug: "airbnb-host-net-income-2026",
    title: "Airbnb Host Net Income Calculator 2026: Maximize Your Short-Term Rental Profit",
    excerpt:
      "Discover how to calculate your true Airbnb host net income in 2026 — factoring in cleaning fees, service charges, occupancy taxes, mortgage costs, and seasonal demand shifts for US and UK hosts.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "11 min read",
    category: "Real Estate",
    tags: ["Airbnb", "Short-Term Rental", "Host Income", "Vacation Rental", "Real Estate"],
  },
  {
    slug: "residential-solar-panel-roi-2026",
    title: "Residential Solar Panel ROI Calculator 2026: Is Solar Worth It in Your State?",
    excerpt:
      "With the 30% federal tax credit, net metering policies, and rising electricity rates, solar has never been more compelling. Calculate your solar ROI, payback period, and 25-year savings in 2026.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "11 min read",
    category: "Energy Savings",
    tags: ["Solar", "ROI", "Energy", "Incentives", "Renewable"],
  },
  {
    slug: "ev-charging-vs-gas-savings-2026",
    title: "EV vs Gas Savings Calculator 2026: True Cost of Ownership in the US & UK",
    excerpt:
      "Should you switch to an electric vehicle in 2026? Compare total cost of ownership across charging costs, fuel prices, maintenance, insurance, and government incentives for EV and gas cars in the US and UK.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "10 min read",
    category: "Automotive",
    tags: ["EV", "Electric Vehicle", "Gas Savings", "TCO", "Green"],
  },
  {
    slug: "freelancer-platform-fee-comparison-2026",
    title: "Freelancer Platform Fee Comparison 2026: Upwork, Fiverr & Toptal Net Earnings",
    excerpt:
      "Compare the real cost of freelancing on Upwork, Fiverr, Toptal, and Freelancer.com in 2026. Learn how service fees, payment processing, and currency conversion affect your net earnings in the US and UK.",
    date: "May 25, 2026",
    author: "TheMetricApp Team",
    readTime: "10 min read",
    category: "Freelancing",
    tags: ["Freelancing", "Upwork", "Fiverr", "Toptal", "Platform Fees"],
  },
  {
    slug: "california-1099-tax-calculator-2026",
    title: "California 1099 Tax Calculator 2026: Complete Guide to Self-Employment & State Taxes",
    excerpt:
      "Living and working as a 1099 contractor in California means facing the highest combined tax burden in the US. Learn how to calculate your self-employment, federal, and CA state taxes with real 2026 formulas, examples, and expert strategies.",
    date: "May 21, 2026",
    author: "TheMetricApp Team",
    readTime: "10 min read",
    category: "Tax Tips",
    tags: ["California", "1099 Taxes", "Self-Employment", "Freelancing", "State Tax"],
  },
  {
    slug: "doordash-tax-estimator-2026",
    title: "DoorDash Tax Estimator 2026: Complete Guide to Self-Employment Taxes & Mileage Deductions",
    excerpt:
      "Everything DoorDash drivers need to know about taxes in 2026 — self-employment tax rates, the $0.67/mile mileage deduction, quarterly estimated payments, and US vs UK differences for gig workers.",
    date: "May 21, 2026",
    author: "TheMetricApp Team",
    readTime: "10 min read",
    category: "Gig Economy",
    tags: ["DoorDash", "Gig Economy", "Self-Employment", "Mileage Deduction", "1099"],
  },
  {
    slug: "stripe-fee-calculator-2026",
    title: "Stripe Fee Calculator 2026: Complete Guide to Processing Fees & Net Payouts",
    excerpt:
      "Everything you need to know about Stripe's 2026 fee structure — domestic and international rates, hidden fees, volume discounts, surcharging rules, and how to calculate your true net payout on every transaction.",
    date: "May 21, 2026",
    author: "TheMetricApp Team",
    readTime: "8 min read",
    category: "Merchant Fees",
    tags: ["Stripe", "Payment Processing", "Fees", "Merchant Account"],
  },
  {
    slug: "ebay-seller-fee-profit-2026",
    title: "eBay Seller Fee Calculator 2026: Master Final Value Fees, Net Profit & ROI",
    excerpt:
      "The complete guide to eBay selling fees in 2026 — understand final value fees, Managed Payments, promoted listings costs, and exactly how to calculate your true net profit on every item you sell.",
    date: "May 21, 2026",
    author: "TheMetricApp Team",
    readTime: "9 min read",
    category: "Marketplace Selling",
    tags: ["eBay", "Selling Fees", "Profit", "Reselling", "Marketplace"],
  },
  {
    slug: "ecommerce-profit-margin-calculator-2026",
    title: "E-Commerce Profit Margin Calculator 2026: Master Your Net Profit, ROAS & Break-Even",
    excerpt:
      "Learn exactly how to calculate your true e-commerce profitability in 2026 — whether you sell on Amazon, Shopify, eBay, or Etsy in the US or UK — with real formulas, examples, and expert tips.",
    date: "May 21, 2026",
    author: "TheMetricApp Team",
    readTime: "8 min read",
    category: "E-Commerce",
    tags: ["E-Commerce", "Profit Margin", "ROAS", "Amazon", "Shopify", "eBay"],
  },
  {
    slug: "self-employment-tax-tips-2026",
    title: "Self-Employment Tax Tips for 2026: What Every Freelancer Should Know",
    excerpt:
      "Tax season looks different when you're self-employed. From estimated quarterly payments to the home office deduction, here are the essential strategies to keep more of your hard-earned money this year.",
    date: "May 15, 2026",
    author: "TheMetricApp Team",
    readTime: "8 min read",
    category: "Tax Tips",
    tags: ["Self-Employment", "Taxes", "Freelancing"],
  },
  {
    slug: "stripe-vs-paypal-fees-2026",
    title: "Stripe vs PayPal Fees in 2026: Which Payment Processor Is Cheaper?",
    excerpt:
      "We break down the real cost of accepting payments with Stripe and PayPal — including hidden fees, international rates, and which platform saves you more at different transaction volumes.",
    date: "May 8, 2026",
    author: "TheMetricApp Team",
    readTime: "6 min read",
    category: "Merchant Fees",
    tags: ["Stripe", "PayPal", "Payment Processing"],
  },
  {
    slug: "is-solar-worth-it-2026",
    title: "Is Solar Power Worth It in 2026? Payback Periods Across the US",
    excerpt:
      "With the 30% federal tax credit locked in through 2032 and electricity rates rising nationwide, now might be the best time to go solar. We crunched the numbers for every state.",
    date: "April 28, 2026",
    author: "TheMetricApp Team",
    readTime: "10 min read",
    category: "Energy Savings",
    tags: ["Solar", "Energy", "ROI", "Incentives"],
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          TheMetricApp Blog
        </h1>
        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
          Financial tips, tax guides, and insights to help you make smarter money decisions.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col rounded-2xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-xl hover:shadow-[#0D9488]/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Category Tag */}
            <div className="px-6 pt-6 pb-2">
              <span className="inline-flex items-center rounded-full bg-[#F0FDFA] px-2.5 py-0.5 text-xs font-semibold text-[#0D9488]">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 pb-6">
              <h2 className="text-lg font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#0D9488] transition-colors">
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-[#F1F5F9] px-2 py-0.5 text-xs font-medium text-[#64748B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-[#94A3B8] border-t border-[#F1F5F9] pt-4 mt-auto">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State Hint */}
      <div className="mt-16 text-center rounded-2xl border border-dashed border-[#E2E8F0] bg-white/50 p-8">
        <p className="text-sm text-[#94A3B8]">
          More articles coming soon. Have a topic you&apos;d like us to cover?{" "}
          <Link
            href="/contact"
            className="text-[#0D9488] hover:text-[#0F766E] underline font-medium"
          >
            Let us know
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
