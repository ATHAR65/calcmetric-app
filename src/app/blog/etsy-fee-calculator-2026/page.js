import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Etsy Fee Calculator 2026: Complete Guide to Seller Fees & Net Profit",
  description:
    "Learn how to calculate Etsy seller fees in 2026. Complete guide to listing fees, transaction fees, payment processing, offsite ads, and strategies to maximize your Etsy shop profit.",
  alternates: {
    canonical: `${siteUrl}/blog/etsy-fee-calculator-2026`,
  },
  openGraph: {
    title: "Etsy Fee Calculator 2026: Complete Guide | TheMetricApp",
    description:
      "Learn how to calculate Etsy seller fees in 2026. Complete guide to listing fees, transaction fees, and profit strategies.",
    url: "https://www.themetricapp.com/blog/etsy-fee-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-01",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Etsy%20Fee%20Calculator%202026%3A%20Complete%20Guide%20%7C%20TheMetricApp&description=Learn%20how%20to%20calculate%20Etsy%20seller%20fees%20in%202026.%20Complete%20guide%20to%20listing%20fees%2C%20transaction%20fees%2C%20and%20profit%20strategies.&type=article", width: 1200, height: 630, alt: "Etsy Fee Calculator 2026: Complete Guide | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etsy Fee Calculator 2026: Complete Guide | TheMetricApp",
    description: "Learn how to calculate Etsy seller fees in 2026 with our complete guide.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Etsy charge fees on shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — Etsy charges its 6.5% transaction fee on the total amount of the sale including shipping and gift wrapping. If you charge $4.50 shipping on a $29.99 item, Etsy collects 6.5% on the full $34.49."
        }
      },
      {
        "@type": "Question",
        "name": "What are Etsy Offsite Ads fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Etsy Offsite Ads charge an additional 12% fee on sales from Etsy-run ads (15% for shops earning under $10,000/year). Shops earning over $10,000/year cannot opt out."
        }
      },
      {
        "@type": "Question",
        "name": "How can Etsy sellers reduce fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strategies include: offering free shipping to boost Etsy Search ranking, driving direct traffic through Etsy Patterns (0% transaction fees), renewing listings strategically, and calculating true COGS to ensure adequate margins."
        }
      }
    ]
  };

  const articleSchema = {
    "@type": "BlogPosting",
    "headline": "Etsy Fee Calculator 2026: Complete Guide to Seller Fees & Net Profit",
    "description": "Learn how to calculate Etsy seller fees in 2026 with our complete guide.",
    "datePublished": "2026-06-01",
    "dateModified": "2026-06-01",
    "author": { "@type": "Person", "name": "TheMetricApp Team", "url": "https://www.themetricapp.com/authors/themetricapp-team/", "sameAs": ["https://www.themetricapp.com/authors/themetricapp-team/"] },
    "publisher": {
      "@type": "Organization", "name": "TheMetricApp",
      "logo": { "@type": "ImageObject", "url": "https://www.themetricapp.com/logo.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.themetricapp.com/blog/etsy-fee-calculator-2026" }
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.themetricapp.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Etsy Fee Calculator Guide", "item": "https://www.themetricapp.com/blog/etsy-fee-calculator-2026" }
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
        <span className="text-[#64748B]">Etsy Fee Calculator 2026</span>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">E-Commerce</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">June 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">Etsy Fee Calculator 2026: Complete Guide to Seller Fees &amp; Net Profit</h1>
        <p className="text-lg text-[#64748B] leading-relaxed">Selling on Etsy is a fantastic way to turn your craft into income, but understanding Etsy&apos;s fee structure is essential for pricing your products correctly and maintaining healthy profit margins. This guide breaks down every fee category for 2026.</p>
      </header>
      

        

      

        <CalculatorEmbed slug="etsy-fee-calculator-2026" />

      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>
        <p>Etsy charges several fees that can take 10-15% of your total revenue. Understanding exactly how much Etsy takes from each sale is crucial for pricing your products correctly and running a profitable shop.</p>

        
        <h2>Etsy Fee Structure for 2026</h2>
        <h3>1. Listing Fee — $0.20 Per Item</h3>
        <p>Each item you list on Etsy costs <strong>$0.20</strong>. This fee renews every 4 months per listing. Auto-renew is enabled by default, meaning you&apos;re charged $0.20 every 4 months for each active listing. For a shop with 100 active listings, that&apos;s $60/year in listing fees alone.</p>

        <h3>2. Transaction Fee — 6.5%</h3>
        <p>Etsy charges a <strong>6.5% transaction fee</strong> on the total sale amount, including the item price, shipping, and gift wrapping. If you sell a $30 item with $5 shipping, the transaction fee is 6.5% of $35 = $2.28.</p>

        <h3>3. Payment Processing — 3% + $0.25</h3>
        <p>Etsy Payments charges <strong>3% + $0.25 per transaction</strong>. This covers credit card processing and Etsy Payments infrastructure. For a $35 sale: 3% of $35 = $1.05 + $0.25 = $1.30.</p>

        <h3>4. Offsite Ads Fee — 12-15%</h3>
        <p>If a customer discovers your shop through Etsy&apos;s offsite ad network, Etsy charges an additional <strong>12% fee</strong> (15% for shops earning under $10,000/year in the program). Shops earning over $10,000/year in the program cannot opt out.</p>

        <h2>Complete Profit Calculation</h2>
        <p><strong>Net Profit = Total Revenue − Listing Fees − Transaction Fee (6.5%) − Payment Processing (3% + $0.25) − COGS</strong></p>
        <p><strong>Example:</strong> Selling a $29.99 item with $4.50 shipping, $8.00 COGS, 1 unit:<br />
        Revenue: $34.50 | Listing: $0.20 | Transaction: $2.24 | Payment: $1.29 | COGS: $8.00<br />
        <strong>Net Profit: $22.77</strong> per unit (66.0% margin before offsite ads)</p>

        
        <h2>7 Strategies to Maximize Etsy Profit</h2>
        <ol>
          <li><strong>Offer Free Shipping.</strong> Etsy&apos;s search algorithm favors listings with free shipping, improving visibility.</li>
          <li><strong>Use Etsy Patterns.</strong> Drive direct traffic through Patterns website — 0% transaction fees on Pattern sales.</li>
          <li><strong>Price Strategically.</strong> Factor all fees into your pricing. A common formula: target price = COGS × 3 to cover fees and profit.</li>
          <li><strong>Renew Listings Wisely.</strong> Instead of auto-renewing all listings, analyze which perform and only renew those.</li>
          <li><strong>Reduce Return Rates.</strong> Accurate measurements, detailed photos, and clear descriptions reduce costly returns.</li>
          <li><strong>Build Email List.</strong> Collect customer emails to market directly and avoid Etsy&apos;s offsite ad fees.</li>
          <li><strong>Calculate True COGS.</strong> Include materials, labor, packaging, and overhead in your COGS calculation.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <h3>Does Etsy charge fees on shipping?</h3>
        <p>Yes — Etsy charges its 6.5% transaction fee on the total amount including shipping and gift wrapping.</p>
        <h3>What are Etsy Offsite Ads fees?</h3>
        <p>Offsite Ads charge 12-15% on sales from Etsy-run ads. Shops over $10,000/year cannot opt out.</p>
        <h3>How can Etsy sellers reduce fees?</h3>
        <p>Offer free shipping for SEO, drive direct traffic through Patterns, and calculate true COGS for adequate margins.</p>
      </div>
    </article>
  );
}
