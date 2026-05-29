import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "PayPal Fee Calculator 2026: Complete Guide to Fees, Rates & Savings | TheMetricApp",
  description:
    "Complete guide to PayPal fees in 2026. Calculate exact costs for goods and services, invoices, international transactions, and micropayments. Compare PayPal vs Stripe and learn how to reduce fees.",
  alternates: {
    canonical: `${siteUrl}/blog/paypal-fee-calculator-2026`,
  },
  openGraph: {
    title: "PayPal Fee Calculator 2026: Complete Guide to Fees, Rates & Savings | TheMetricApp",
    description:
      "Complete guide to PayPal fees in 2026. Calculate exact costs for goods and services, invoices, international transactions, and micropayments. Compare PayPal vs Stripe and learn how to reduce fees.",
    url: "https://www.themetricapp.com/blog/paypal-fee-calculator-2026",
    type: "article",
    siteName: "TheMetricApp",
    images: [{ url: "https://www.themetricapp.com/og-default.svg" }],
    "article:published_time": "2026-05-25",
    "article:modified_time": "2026-05-25",
    "article:author": "TheMetricApp Team",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayPal Fee Calculator 2026: Complete Guide to Fees, Rates & Savings | TheMetricApp",
    description:
      "Complete guide to PayPal fees in 2026. Calculate exact costs, compare PayPal vs Stripe, and learn how to reduce fees on every transaction.",
    images: ["https://www.themetricapp.com/og-default.svg"],
    creator: "@themetricapp",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "PayPal Fee Calculator 2026: Complete Guide to Fees, Rates & Savings",
  author: { "@type": "Organization", name: "TheMetricApp Team" },
  publisher: { "@type": "Organization", name: "TheMetricApp", url: "https://www.themetricapp.com" },
  datePublished: "2026-05-25",
  dateModified: "2026-05-25",
  url: "https://www.themetricapp.com/blog/paypal-fee-calculator-2026",
  mainEntityOfPage: "https://www.themetricapp.com/blog/paypal-fee-calculator-2026",
  description:
    "Complete guide to PayPal fees in 2026. Calculate exact costs for goods and services, invoices, international transactions, and micropayments. Compare PayPal vs Stripe and learn how to reduce fees.",
  image: "https://www.themetricapp.com/og-default.svg",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.themetricapp.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.themetricapp.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "PayPal Fee Guide 2026",
      item: "https://www.themetricapp.com/blog/paypal-fee-calculator-2026",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are PayPal's current fees for receiving money in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PayPal's standard fee in 2026 is 3.49% + $0.49 for Goods and Services. International transactions cost 4.99% + $0.49. Friends and Family (bank/balance) is free. Micropayments under $10 cost 4.99% + $0.09. The standard rate increased from 2.99% in previous years.",
      },
    },
    {
      "@type": "Question",
      name: "PayPal vs Stripe — which payment processor is cheaper in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stripe (2.9% + $0.30) is generally 15-25% cheaper than PayPal (3.49% + $0.49) for most domestic transactions. For a $100 transaction, PayPal charges $3.98 versus Stripe's $3.20. On $1,000/month in sales, choosing Stripe saves roughly $200/year on fees.",
      },
    },
    {
      "@type": "Question",
      name: "How can I avoid or reduce PayPal fees legally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use Friends & Family for personal payments, negotiate a merchant rate if you process over $3,000/month, apply for the Micropayments rate for items under $10, add a convenience fee at checkout, and combine PayPal with Stripe for lower-cost card processing.",
      },
    },
    {
      "@type": "Question",
      name: "Does PayPal charge different fees for micropayments under $10?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Micropayments rate is 4.99% + $0.09 per transaction. For an $8 digital product, this saves you from paying $0.67 (standard) vs $0.34 (micropayments) — nearly 50% less in fees.",
      },
    },
    {
      "@type": "Question",
      name: "Can I legally pass PayPal fees on to my customers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, surcharging is legal in most US states with proper disclosure. Some states cap surcharges at 3-4%. PayPal's terms allow it as long as you clearly disclose the fee before payment. Many businesses add a 3.5% convenience fee to cover processing costs.",
      },
    },
  ],
};

export default function PayPalFeeBlog() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-slate-900 text-slate-100">
        <article className="max-w-3xl mx-auto px-4 py-12">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-900/50 text-indigo-300 rounded-full mb-4">
              Payment Processing
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              PayPal Fee Calculator 2026: Complete Guide to Fees, Rates & Savings
            </h1>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span>By TheMetricApp Team</span>
              <span className="w-1 h-1 bg-slate-500 rounded-full" />
              <time dateTime="2026-05-25">May 25, 2026</time>
              <span className="w-1 h-1 bg-slate-500 rounded-full" />
              <span>12 min read</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-#6366F1 prose-strong:text-slate-200">
            <p>
              If you accept payments online in 2026, you're paying PayPal fees on virtually every
              transaction. With the standard rate now at <strong>3.49% + $0.49</strong> (up from
              2.99% in earlier years), those fees add up fast. A business processing $50,000
              annually through PayPal pays roughly <strong>$2,240 in fees</strong> — money that
              comes straight out of your profit margin.
            </p>
            <p>
              The good news? You don't have to guess what you're paying. Our <strong>free{" "}
              <Link href="/calculators/paypal-fee-calculator" className="text-#6366F1 underline">
                PayPal Fee Calculator
              </Link></strong> instantly calculates the exact fee for any transaction type, shows
              you your net payout, and even compares what you'd pay with Stripe. Whether you're
              sending an invoice, accepting international payments, or selling digital products
              under $10, knowing your exact fee structure is the first step to protecting your
              margins.
            </p>

            <h2>What Are PayPal's Current Fees and Why They Matter in 2026</h2>
            <p>
              PayPal's fee structure in 2026 breaks down into several categories depending on how
              you're sending or receiving money. For domestic Goods and Services transactions, the
              standard rate is 3.49% of the transaction amount plus a fixed $0.49 fee. For
              international payments, the rate jumps to 4.99% + $0.49. Friends and Family payments
              funded by a bank account or PayPal balance remain free, while card-funded F&F payments
              cost 2.9%. If you sell items under $10, PayPal's Micropayments rate of 4.99% + $0.09
              can save you a significant amount.
            </p>
            <p>
              Why does this matter more in 2026? Three reasons. First, PayPal raised its standard
              rate from 2.99% to 3.49% in recent years — a 17% increase that adds up quickly for
              regular users. Second, the gig economy and e-commerce have continued to grow, meaning
              more freelancers, sellers, and small businesses are processing payments through PayPal
              than ever before. And third, with inflation affecting every aspect of business,
              understanding and minimizing transaction fees is one of the few cost areas you can
              directly control.
            </p>

            <h2>How to Use the PayPal Fee Calculator</h2>
            <p>
              Our <strong><Link href="/calculators/paypal-fee-calculator" className="text-#6366F1 underline">
              PayPal Fee Calculator 2026</Link></strong> is designed to give you answers instantly,
              without any fluff. Here's how it works:
            </p>
            <ol>
              <li><strong>Enter your transaction amount</strong> — The total dollar amount you're sending or receiving.</li>
              <li><strong>Select the transaction type</strong> — Choose from Goods & Services, Invoice, International, Friends & Family (bank or card), or Micropayments.</li>
              <li><strong>Choose your calculation mode</strong> — "Calculate fee on amount" (standard) or "Find amount to charge to net my payout" (reverse/surcharge calculation).</li>
              <li><strong>Review your results</strong> — Instantly see the PayPal fee, net payout, effective fee rate, and a side-by-side comparison with what Stripe would charge for the same transaction.</li>
            </ol>

            <h2>Complete Formula & Calculation Breakdown</h2>
            <p>
              Understanding the exact math behind PayPal's fee calculation helps you price your
              products or services correctly and avoid surprises.
            </p>
            <p>
              <strong>Standard Fee Formula:</strong> PayPal Fee = (Amount × Percentage Rate) + Fixed
              Fee. Your net payout is simply the transaction amount minus the fee. The effective fee
              rate (Fee ÷ Amount × 100) shows you what percentage of the transaction you're actually
              paying. For example, a $50 transaction at 3.49% + $0.49 costs $2.24, which is a 4.47%
              effective rate — significantly higher than the headline 3.49%.
            </p>
            <p>
              <strong>Reverse Fee Formula (Surcharge):</strong> If you want to receive a specific net
              amount, use: Charge Amount = (Desired Net + Fixed Fee) ÷ (1 - Percentage Rate). For
              example, to net $200 from a standard transaction: ($200 + $0.49) ÷ (1 - 0.0349) =
              $207.68. The fee on this $207.68 charge is $7.68, leaving you with exactly $200.
            </p>
            <p>
              <strong>Stripe Comparison:</strong> Stripe charges 2.9% + $0.30 per transaction. On a
              $100 sale: PayPal fee = $3.98, Stripe fee = $3.20. Stripe saves you $0.78 or 19.6%
              on fees. The gap widens on larger transactions.
            </p>

            <h3>Example 1: Freelancer Sending a $500 Invoice</h3>
            <p>
              You invoice a client for $500 via PayPal Invoice. PayPal Fee: ($500 × 0.0349) + $0.49
              = $17.94. Your net payout: $482.06. Effective rate: 3.59%. Stripe would charge ($500 ×
              0.029) + $0.30 = $14.80. Stripe saves you $3.14. If you send 20 invoices per month,
              switching to Stripe saves you $62.80/month or $753.60/year.
            </p>

            <h3>Example 2: International Freelance Payment of $2,000</h3>
            <p>
              A UK client pays you $2,000 via PayPal International rate (4.99% + $0.49). Fee: $100.29.
              Net: $1,899.71. Effective rate: 5.01%. Stripe's international rate (2.9% + $0.30 + 1.5%
              cross-border fee) works out to: ($2,000 × 0.044) + $0.30 = $88.30. Stripe saves you
              $11.99. For frequent international payments, the savings add up substantially.
            </p>

            <h3>Example 3: Digital Seller — $8 Digital Product</h3>
            <p>
              You sell a $8 PDF guide. Under standard PayPal rates: ($8 × 0.0349) + $0.49 = $0.77
              fee. Net: $7.23. Effective rate: 9.63%. Under the Micropayments rate (4.99% + $0.09):
              ($8 × 0.0499) + $0.09 = $0.49. Net: $7.51. Effective rate: 6.13%. The micropayment
              rate saves you $0.28 per sale. On 1,000 sales/month, that's $3,360/year in savings.
            </p>

            <h2>PayPal vs Stripe vs Square: Complete Fee Comparison 2026</h2>
            <p>
              Choosing between payment processors isn't just about rates — it's about your specific
              business model, customer base, and transaction patterns. Here's how the three major
              players compare in 2026:
            </p>
            <p>
              <strong>PayPal (3.49% + $0.49):</strong> The most widely recognized brand, with over
              400 million active users. Best for marketplaces like eBay and Etsy, platforms where
              PayPal is the default payment method, and businesses that prioritize buyer trust over
              lowest fees. PayPal Checkout integrates seamlessly with thousands of e-commerce platforms,
              and PayPal Credit offers a buy-now-pay-later option.
            </p>
            <p>
              <strong>Stripe (2.9% + $0.30):</strong> Generally 15–25% cheaper than PayPal for
              domestic transactions. Superior for custom e-commerce integrations, subscription
              billing, and international businesses. Stripe's API is more developer-friendly, its
              reporting tools are more robust, and it supports 135+ currencies. For SaaS businesses
              and custom checkout flows, Stripe is the clear winner.
            </p>
            <p>
              <strong>Square (2.6% + $0.10 in-person, 2.9% + $0.30 online):</strong> The best choice
              for businesses with physical retail operations. Square's in-person rates are the lowest
              of the three, and its integrated hardware (Square Reader, Square Terminal) makes it
              seamless for point-of-sale. For online-only businesses, Square's features trail behind
              Stripe, but its all-in-one ecosystem (payroll, inventory, analytics) is compelling.
            </p>
            <p>
              The bottom line: For a business processing $50,000/year online, choosing Stripe over
              PayPal saves approximately $2,400 annually. That's a meaningful amount for any small
              business owner.
            </p>

            <h2>Real-Life Scenarios: 3 User Types</h2>
            <p>
              <strong>Case 1 — The Freelancer Sending Monthly Invoices:</strong> Maria, a freelance
              graphic designer, invoices 15 clients per month averaging $350 each. Under PayPal's
              standard rate, she pays ($350 × 0.0349 + $0.49) × 15 = $190.73/month in fees. Under
              Stripe: ($350 × 0.029 + $0.30) × 15 = $156.75/month. Switching saves $33.98/month or
              $407.76/year. Maria's action: Add a 3.5% processing fee to her invoices or switch to
              Stripe and absorb the 2.9% fee into her rates.
            </p>
            <p>
              <strong>Case 2 — The Etsy Seller:</strong> James runs an Etsy shop selling custom
              mugs at $24 each, 200 orders per month. PayPal fee per order: ($24 × 0.0349) + $0.49
              = $1.33. Monthly PayPal fees: $266. Etsy also charges its own payment processing fee.
              Total payment processing: over $400/month. James's action: Apply for PayPal's Merchant
              Rate (negotiated) to get closer to 2.9%, saving ~$50/month.
            </p>
            <p>
              <strong>Case 3 — The SaaS Company:</strong> TechStartup.io processes $120,000/month
              in subscription payments through PayPal. Monthly fees: ($120,000 × 0.0349) + (2,000
              transactions × $0.49) = $4,188 + $980 = $5,168. With Stripe: ($120,000 × 0.029) +
              (2,000 × $0.30) = $3,480 + $600 = $4,080. Monthly savings: $1,088. Annual savings:
              $13,056. Their action: Switch to Stripe and reinvest the savings into customer
              acquisition.
            </p>

            <h2>7 Tips to Reduce PayPal Fees in 2026</h2>
            <p>
              <strong>1. Negotiate a merchant rate.</strong> If you process over $3,000/month, call
              PayPal Sales and request a custom Merchant Rate. High-volume sellers can get rates as
              low as 2.5% + $0.30. Be prepared with your monthly volume and average transaction size.
            </p>
            <p>
              <strong>2. Use Friends & Family appropriately.</strong> For payments between friends,
              family, or known individuals, Friends & Family (bank-funded) is completely free. Just
              understand it removes buyer protection, so only use it with people you trust.
            </p>
            <p>
              <strong>3. Apply for the Micropayments rate.</strong> If you sell items, courses, or
              subscriptions under $10, the 4.99% + $0.09 rate drastically reduces your effective fee
              percentage. Contact PayPal support to switch your account to Micropayments pricing.
            </p>
            <p>
              <strong>4. Add a convenience fee at checkout.</strong> Legally pass the 3.5% fee to
              customers who choose PayPal. Display it clearly at checkout as a "Payment Processing
              Fee." Most customers won't blink at $1.75 added to a $50 order.
            </p>
            <p>
              <strong>5. Combine PayPal with Stripe.</strong> Offer both payment options. Customers
              who prefer PayPal can use it (and pay the convenience fee), while customers paying by
              card go through Stripe (saving you money). This captures the best of both worlds.
            </p>
            <p>
              <strong>6. Schedule standard bank transfers.</strong> Avoid PayPal's 1.5% instant
              transfer fee. Schedule regular weekly withdrawals to your bank (free, 1-3 business
              days) and plan your cash flow accordingly.
            </p>
            <p>
              <strong>7. Deduct all fees as business expenses.</strong> Every cent you pay in PayPal
              fees is a tax-deductible business expense. Track them in your accounting software and
              include them in your annual deduction total.
            </p>

            <h2>Common Mistakes to Avoid</h2>
            <p>
              <strong>Not comparing processors regularly.</strong> Payment processing rates change,
              and new competitors enter the market. Re-evaluate your processor choice at least once
              per year.
            </p>
            <p>
              <strong>Using Goods & Services for personal payments.</strong> If you're Venmo-ing a
              friend or paying your roommate, don't select Goods & Services. You'll pay unnecessary
              fees and your recipient will wait for funds.
            </p>
            <p>
              <strong>Ignoring the effective rate.</strong> The headline 3.49% is misleading. The
              $0.49 fixed fee makes the effective rate much higher on small transactions. Always
              calculate the real percentage you're paying.
            </p>
            <p>
              <strong>Not accounting for currency conversion.</strong> PayPal's exchange rate markup
              of 3.5–4% can double the real cost of international payments. Always factor in the
              total cost including currency conversion.
            </p>
            <p>
              <strong>Overusing instant transfers.</strong> The 1.5% fee on instant transfers to your
              bank is pure profit for PayPal. If you can wait 1-3 days, standard transfers save you
              significant money over time.
            </p>

            <h2>Frequently Asked Questions</h2>
            <p>
              <strong>Q: What are PayPal's current fees for receiving money in 2026?</strong><br />
              Standard Goods & Services: 3.49% + $0.49. International: 4.99% + $0.49. Friends &
              Family (bank/balance): Free. Micropayments (under $10): 4.99% + $0.09.
            </p>
            <p>
              <strong>Q: Is PayPal Friends & Family always completely free?</strong><br />
              Only when funded by PayPal balance or bank account. Card-funded F&F costs 2.9%.
              International F&F may incur cross-border fees.
            </p>
            <p>
              <strong>Q: PayPal vs Stripe — which is cheaper in 2026?</strong><br />
              Stripe (2.9% + $0.30) is generally 15–25% cheaper than PayPal (3.49% + $0.49). On
              $50,000 annual revenue, Stripe saves roughly $2,400/year.
            </p>
            <p>
              <strong>Q: How can I avoid or reduce PayPal fees legally?</strong><br />
              Negotiate a merchant rate, use F&F for personal payments, apply for the micropayments
              rate, add a convenience fee at checkout, and combine PayPal with Stripe.
            </p>
            <p>
              <strong>Q: What are PayPal's international transaction fees?</strong><br />
              4.99% + $0.49 plus a 3.5–4% currency conversion markup on the exchange rate.
            </p>
            <p>
              <strong>Q: Does PayPal charge different fees for micropayments under $10?</strong><br />
              Yes. The Micropayments rate is 4.99% + $0.09. Apply through PayPal support to switch.
            </p>
            <p>
              <strong>Q: How do I calculate PayPal fees when sending an invoice?</strong><br />
              Use the standard rate (3.49% + $0.49). For reverse calculation: (Desired Net + $0.49) ÷ 0.9651.
            </p>
            <p>
              <strong>Q: Can I legally pass PayPal fees on to my customers?</strong><br />
              Yes, with proper disclosure. Most states allow surcharging up to 3–4%. Always
              disclose clearly at checkout.
            </p>

            <h2>Start Saving on PayPal Fees Today</h2>
            <ul>
              <li>PayPal standard rate 2026: 3.49% + $0.49 per transaction</li>
              <li>International rate: 4.99% + $0.49</li>
              <li>Stripe saves 15–25% on most transactions vs PayPal</li>
              <li>Micropayments rate (under $10): 4.99% + $0.09</li>
              <li>Negotiate a merchant rate if processing over $3,000/month</li>
              <li>All PayPal fees are tax-deductible business expenses</li>
            </ul>
            <p>
              Ready to calculate exactly what you're paying? Use our{" "}
              <Link href="/calculators/paypal-fee-calculator" className="text-#6366F1 underline">
                PayPal fee calculator
              </Link>{" "}
              to see your net payout on any transaction. You can also compare with our{" "}
              <Link href="/calculators/stripe-fee-merchant-calculator" className="text-#6366F1 underline">
                Stripe Fee Calculator
              </Link>{" "}
              to see which processor gives you the best deal. If you're selling on eBay, the{" "}
              <Link href="/calculators/ebay-seller-fee-profit" className="text-#6366F1 underline">
                eBay Seller Fee & Profit Calculator
              </Link>{" "}
              can help you understand your total selling costs. And for a complete picture of your
              business profitability, use the{" "}
              <Link href="/calculators/ecommerce-net-profit-margin" className="text-#6366F1 underline">
                E-Commerce Net Profit Margin Calculator
              </Link>.{" "}
              <Link href="/calculators/paypal-fee-calculator" className="text-#6366F1 underline">
                Calculate your PayPal fees here
              </Link>{" "}
              and start keeping more of every dollar you earn.
            </p>
          </div>
        {/* Data Sources & Methodology */}
        <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-800 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-white text-xl font-bold">
              📊
            </div>
            <div>
              <p className="font-bold text-white mb-2">Data Sources &amp; Methodology</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-2">
                The information in this guide and calculator is sourced from authoritative financial and regulatory sources:
              </p>
              <ul className="text-sm text-slate-300 leading-relaxed space-y-1 list-disc list-inside">
                <li><a href="https://www.paypal.com/us/webapps/mpp/paypal-fees" target="_blank" rel="noopener noreferrer" className="text-#6366F1 hover:underline">PayPal — Fee Schedule</a></li>
                <li><a href="https://stripe.com/us/pricing" target="_blank" rel="noopener noreferrer" className="text-#6366F1 hover:underline">Stripe — Pricing</a></li>
                <li><a href="https://www.consumerfinance.gov/payment-processing/" target="_blank" rel="noopener noreferrer" className="text-#6366F1 hover:underline">CFPB — Payment Processing Resources</a></li>
                <li><a href="https://www.nerdwallet.com/article/small-business/paypal-fees" target="_blank" rel="noopener noreferrer" className="text-#6366F1 hover:underline">NerdWallet — PayPal Fee Guide</a></li>
                <li><a href="https://squareup.com/us/en/pricing" target="_blank" rel="noopener noreferrer" className="text-#6366F1 hover:underline">Square — Pricing</a></li>
              </ul>
              <p className="text-sm text-slate-300 leading-relaxed mt-2">
                <strong>Last Updated:</strong> May 2026. Fee structures, rates, and regulations are subject to change. Consult a qualified professional for personalized advice.
              </p>
            </div>
          </div>
        </div>
        </article>

        {/* Author bio */}
        <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-800 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#4F46E5] text-white font-bold">
              M
            </div>
            <div>
              <p className="font-bold text-white mb-1">TheMetricApp Team</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                TheMetricApp provides free, accurate financial calculators for sellers, freelancers, and business owners in the US and UK. Our tools help you make smarter money decisions — from fee analysis and profit margins to tax estimates and savings projections. Every calculator is built with transparency, accuracy, and your financial success in mind.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
