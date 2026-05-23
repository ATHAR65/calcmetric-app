import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Read the latest financial tips, tax guides, and calculator tutorials from the WiseFinanceCalc team.",
};

const posts = [
  {
    slug: "california-1099-tax-calculator-2026",
    title: "California 1099 Tax Calculator 2026: Complete Guide to Self-Employment & State Taxes",
    excerpt:
      "Living and working as a 1099 contractor in California means facing the highest combined tax burden in the US. Learn how to calculate your self-employment, federal, and CA state taxes with real 2026 formulas, examples, and expert strategies.",
    date: "May 21, 2026",
    author: "WiseFinanceCalc Team",
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
    author: "WiseFinanceCalc Team",
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
    author: "WiseFinanceCalc Team",
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
    author: "WiseFinanceCalc Team",
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
    author: "WiseFinanceCalc Team",
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
    author: "WiseFinanceCalc Team",
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
    author: "WiseFinanceCalc Team",
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
    author: "WiseFinanceCalc Team",
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
          WiseFinanceCalc Blog
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
