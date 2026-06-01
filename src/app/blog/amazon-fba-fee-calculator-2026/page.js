import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Amazon FBA Fee Calculator 2026: Complete Guide to Selling Fees & Net Profit",
  description:
    "Learn how to calculate Amazon FBA fees in 2026. Complete guide to referral fees, fulfillment fees, the new 3.5% fuel surcharge, storage costs, and strategies to maximize your Amazon selling profit.",
  alternates: {
    canonical: `${siteUrl}/blog/amazon-fba-fee-calculator-2026`,
  },
  openGraph: {
    title: "Amazon FBA Fee Calculator 2026: Complete Guide | TheMetricApp",
    description:
      "Learn how to calculate Amazon FBA fees in 2026. Complete guide to referral fees, fulfillment fees, the new 3.5% fuel surcharge, and profit strategies.",
    url: "https://www.themetricapp.com/blog/amazon-fba-fee-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-05-27",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon FBA Fee Calculator 2026: Complete Guide | TheMetricApp",
    description: "Learn how to calculate Amazon FBA fees in 2026 with our complete guide.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the Amazon FBA fees for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2026, Amazon FBA fees include: referral fees (8-20% by category), fulfillment fees ($3.22-$35+ by size/weight), and a new 3.5% fuel and logistics surcharge introduced in April 2026."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to sell on Amazon FBA in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Total FBA costs typically range from 20-40% of the sale price depending on category, weight, and price point. For a $30 product in a standard category, expect $6-10 in total Amazon fees."
        }
      },
      {
        "@type": "Question",
        "name": "Is selling on Amazon FBA profitable in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Amazon FBA can be profitable in 2026 with proper product selection and pricing. Successful sellers target products with at least 30% net margins after all fees. Lightweight products in categories with lower referral fees (8-15%) tend to offer the best profitability."
        }
      }
    ]
  };

  const articleSchema = {
    "@type": "BlogPosting",
    "headline": "Amazon FBA Fee Calculator 2026: Complete Guide to Selling Fees & Net Profit",
    "description": "Learn how to calculate Amazon FBA fees in 2026. Complete guide to referral fees, fulfillment fees, the new 3.5% fuel surcharge, and profit strategies.",
    "datePublished": "2026-05-27",
    "dateModified": "2026-05-27",
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
      "@id": "https://www.themetricapp.com/blog/amazon-fba-fee-calculator-2026"
    }
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.themetricapp.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Amazon FBA Fee Calculator Guide", "item": "https://www.themetricapp.com/blog/amazon-fba-fee-calculator-2026" }
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
        <span className="text-[#64748B]">Amazon FBA Fee Calculator 2026</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">
            E-Commerce
          </span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">
            May 2026
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Amazon FBA Fee Calculator 2026: Complete Guide to Selling Fees &amp; Net Profit
        </h1>
        <p className="text-lg text-[#64748B] leading-relaxed">
          Understanding Amazon&apos;s fee structure is the single most important factor in building a profitable
          FBA business. This guide breaks down every fee category for 2026 and shows you how to calculate your
          true net profit.
        </p>
      </header>

      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>
        <p>
          Selling on Amazon through Fulfillment by Amazon (FBA) offers incredible reach — but the fee structure
          can be complex. In 2026, Amazon added a new 3.5% fuel and logistics surcharge, adjusted fulfillment
          fees upward by an average of $0.08 per unit, and maintained its category-based referral fee system.
          Understanding exactly how much Amazon takes from each sale is essential for pricing your products
          correctly and maintaining healthy margins.
        </p>

        <p>
          This guide covers every component of Amazon&apos;s 2026 fee structure, provides step-by-step
          calculation examples, and offers actionable strategies to maximize your FBA profitability.
        </p>

        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
          <p className="text-sm text-[#64748B] mb-3">Calculate your exact FBA fees and net profit in real-time.</p>
          <Link href="/calculators/amazon-fba-fee-calculator" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors">
            Open Amazon FBA Fee Calculator
          </Link>
        </div>

        <h2>Amazon FBA Fee Components for 2026</h2>

        <h3>1. Referral Fees — The Category-Based Commission</h3>
        <p>
          Amazon charges a <strong>referral fee</strong> on every item sold, calculated as a percentage of
          the total sale price (including item price, shipping, and gift wrap). The rate depends entirely
          on your product&apos;s category:
        </p>
        <ul>
          <li><strong>Consumer Electronics:</strong> 8% (lowest rate)</li>
          <li><strong>Most Categories (Home, Sports, Toys, Office, etc.):</strong> 15%</li>
          <li><strong>Apparel &amp; Accessories:</strong> 17%</li>
          <li><strong>Jewelry:</strong> 20% (highest rate)</li>
        </ul>
        <p>
          There is no monthly subscription fee required to sell — just the professional selling plan ($39.99/month)
          and these per-transaction referral fees.
        </p>

        <h3>2. FBA Fulfillment Fees — Size &amp; Weight Tiers</h3>
        <p>
          FBA fulfillment fees cover picking, packing, shipping, and customer service. In 2026, these fees
          increased by an average of $0.08 per unit. The fee is determined by your product&apos;s size tier
          and shipping weight:
        </p>
        <table className="min-w-full border-collapse border border-[#E2E8F0] my-6">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Size Tier</th>
              <th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">Weight Range</th>
              <th className="border border-[#E2E8F0] px-4 py-2 text-left text-sm font-semibold">2026 Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Small Standard</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">≤ 6 oz</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$3.22</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Large Standard</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">6 oz – 1 lb</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$4.75</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Large Standard</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">1 – 2 lbs</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$5.80</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Large Standard</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">2 – 3 lbs</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$6.90</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Small Oversize</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">≤ 5 lbs</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$8.25</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Medium Oversize</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">5 – 10 lbs</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$11.50</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Large Oversize</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">10 – 50 lbs</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$18.75</td></tr>
            <tr><td className="border border-[#E2E8F0] px-4 py-2 text-sm">Special Oversize</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">50+ lbs</td><td className="border border-[#E2E8F0] px-4 py-2 text-sm">$35.00+</td></tr>
          </tbody>
        </table>

        <h3>3. Fuel &amp; Logistics Surcharge (New April 2026)</h3>
        <p>
          Starting April 17, 2026, Amazon introduced a <strong>3.5% fuel and logistics surcharge</strong>
          on all FBA fulfillment fees. This means for a product with a $4.75 fulfillment fee, an additional
          $0.17 is added. This surcharge is designed to offset rising fuel costs and transportation expenses.
          Unlike temporary surcharges in previous years, Amazon has indicated this is a permanent adjustment.
        </p>

        <h3>4. Monthly Storage Fees</h3>
        <p>
          Amazon charges monthly storage fees based on the cubic footage your inventory occupies. In 2026,
          the rates are approximately:
        </p>
        <ul>
          <li><strong>Standard-Size (Jan–Sep):</strong> $0.87 per cubic foot</li>
          <li><strong>Standard-Size (Oct–Dec):</strong> $2.49 per cubic foot</li>
          <li><strong>Oversize (Jan–Sep):</strong> $0.56 per cubic foot</li>
          <li><strong>Oversize (Oct–Dec):</strong> $1.20 per cubic foot</li>
        </ul>
        <p>
          Products stored for 365+ days incur long-term storage fees or removal charges. Inventory aged
          over 365 days is subject to a $6.90 per cubic foot long-term storage fee or a $0.50 per unit
          removal fee.
        </p>

        <h2>Complete Profit Calculation Formula</h2>
        <p>
          <strong>Net Profit = Sale Price − COGS − Referral Fee − Fulfillment Fee − Fuel Surcharge − Other Costs</strong>
        </p>
        <p>
          Where:
          <br />• <strong>COGS</strong> = Manufacturing/wholesale cost per unit
          <br />• <strong>Referral Fee</strong> = Sale Price × Category Rate
          <br />• <strong>Fulfillment Fee</strong> = Based on weight/size tier
          <br />• <strong>Fuel Surcharge</strong> = Fulfillment Fee × 3.5%
          <br />• <strong>Other Costs</strong> = Advertising, returns, storage, shipping supplies
        </p>

        <h2>Real-World Profit Examples</h2>

        <h3>Best Case: Lightweight Electronics Accessory</h3>
        <p>
          <strong>Product:</strong> USB-C Cable — $12.99 sale price, $3.00 COGS, 0.2 lbs<br />
          Referral Fee (15%): $1.95 | Fulfillment: $3.22 | Fuel: $0.11<br />
          <strong>Net Profit: $4.71 per unit (36.3% margin)</strong><br />
          At 2,000 units/month: <strong>$9,420 monthly net profit</strong>
        </p>

        <h3>Typical Case: Home Kitchen Product</h3>
        <p>
          <strong>Product:</strong> Measuring Cup Set — $24.99 sale price, $7.00 COGS, 0.8 lbs<br />
          Referral Fee (15%): $3.75 | Fulfillment: $4.75 | Fuel: $0.17<br />
          <strong>Net Profit: $9.32 per unit (37.3% margin)</strong><br />
          At 500 units/month: <strong>$4,660 monthly net profit</strong>
        </p>

        <h3>Worst Case: Heavy Oversize Product</h3>
        <p>
          <strong>Product:</strong> Exercise Equipment — $89.99 sale price, $35.00 COGS, 15 lbs<br />
          Referral Fee (15%): $13.50 | Fulfillment: $11.50 | Fuel: $0.40<br />
          <strong>Net Profit: $29.59 per unit (32.9% margin)</strong><br />
          At 100 units/month: <strong>$2,959 monthly net profit</strong><br />
          <em>Note: Oversize products also incur higher storage fees.</em>
        </p>

        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
          <p className="text-sm text-[#64748B] mb-3">Run your own numbers with our free Amazon FBA Fee Calculator.</p>
          <Link href="/calculators/amazon-fba-fee-calculator" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors">
            Open Amazon FBA Fee Calculator
          </Link>
        </div>

        <h2>10 Strategies to Maximize Amazon FBA Profit in 2026</h2>

        <ol>
          <li><strong>Choose the Right Category.</strong> Consumer Electronics has the lowest referral fee (8%) while Jewelry has the highest (20%). Where possible, select categories with lower referral rates.</li>
          <li><strong>Minimize Package Weight.</strong> Reducing packaging weight by even 2 oz can drop you into a lower fulfillment tier. Lightweight packaging materials and smaller boxes save significant fees over time.</li>
          <li><strong>Bundle Complementary Products.</strong> Selling a set together can reduce per-unit fees and increase average order value. A "starter kit" bundle often commands higher margins than individual items.</li>
          <li><strong>Optimize for Small Standard Tier.</strong> Products under 6 oz qualify for the lowest fulfillment fee ($3.22). This is the most profitable tier on Amazon.</li>
          <li><strong>Use FBA Revenue Calculator Regularly.</strong> Amazon&apos;s official FBA Revenue Calculator gives exact fee quotes per ASIN. Use it before launching any new product.</li>
          <li><strong>Manage Inventory to Avoid Long-Term Storage.</strong> Set up automated removal or discounting for inventory approaching the 365-day threshold to avoid $6.90/cubic foot long-term storage fees.</li>
          <li><strong>Account for Advertising Costs Separately.</strong> Amazon PPC can add 10-30% to your cost structure. Ensure your margins are strong enough to support ad spend.</li>
          <li><strong>Factor in Return Rates.</strong> Category return rates vary from 5% (home goods) to 30% (apparel). Build return cost assumptions into your pricing.</li>
          <li><strong>Negotiate Supplier Pricing.</strong> The most controllable variable is your COGS. Buying in larger quantities or negotiating with suppliers directly improves margins.</li>
          <li><strong>Use Seasonal Pricing.</strong> Demand spikes during Q4 allow for higher prices, but storage fees also triple during October-December. Plan your inventory timing carefully.</li>
        </ol>

        <h2>Hidden Costs Every Amazon Seller Should Know</h2>
        <p>
          Beyond the core fees, successful sellers account for these additional costs:
        </p>
        <ul>
          <li><strong>Professional Selling Plan:</strong> $39.99/month (required for FBA)</li>
          <li><strong>Return Processing:</strong> FBA return processing fees apply on refunded orders</li>
          <li><strong>Removal/Disposal Fees:</strong> $0.50-$1.50+ per unit for unsold inventory</li>
          <li><strong>PPC Advertising:</strong> 10-30% of revenue for competitive categories</li>
          <li><strong>Product Photography:</strong> Professional images improve conversion but cost $20-100 per product</li>
          <li><strong>UPC/EAN Barcodes:</strong> GS1-certified barcodes cost $30-250+ per year</li>
          <li><strong>Sample/Testing:</strong> Pre-launch product samples and testing costs</li>
        </ul>

        <h2>2026 Fee Changes Summary</h2>
        <p>
          Compared to 2025, here are the key changes for 2026:
        </p>
        <ul>
          <li><strong>Fulfillment fee increase:</strong> Average +$0.08 per unit</li>
          <li><strong>New fuel surcharge:</strong> 3.5% on fulfillment fees (April 17, 2026)</li>
          <li><strong>Storage fees:</strong> Largely unchanged from 2025</li>
          <li><strong>Referral fees:</strong> Unchanged from 2025</li>
        </ul>
        <p>
          For a seller doing 1,000 units/month of a 1-lb product, these changes represent approximately
          $250-300 in additional monthly costs. This makes margin optimization more important than ever.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>What are the Amazon FBA fees for 2026?</h3>
        <p>
          In 2026, Amazon FBA fees include: referral fees (8-20% by category), fulfillment fees ($3.22-$35+
          by size/weight), and a new 3.5% fuel and logistics surcharge introduced in April 2026. Monthly
          storage fees range from $0.56-$2.49 per cubic foot depending on season and product size.
        </p>

        <h3>How much does it cost to sell on Amazon FBA in 2026?</h3>
        <p>
          Total FBA costs typically range from 20-40% of the sale price depending on category, weight, and
          price point. For a $30 product in a standard category, expect $6-10 in total Amazon fees.
        </p>

        <h3>Is selling on Amazon FBA profitable in 2026?</h3>
        <p>
          Yes, Amazon FBA can be profitable in 2026 with proper product selection and pricing. Successful
          sellers target products with at least 30% net margins after all fees. Lightweight products in
          categories with lower referral fees (8-15%) tend to offer the best profitability.
        </p>
      </div>
    </article>
  );
}
