import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "TikTok Shop Earnings Calculator Guide 2026 | TheMetricApp" },
  description:
    "Complete 2026 guide to TikTok Shop seller fees. Learn referral fees by category, affiliate commissions, and how to calculate your true net profit per sale.",
  alternates: { canonical: `${siteUrl}/blog/tiktok-shop-earnings-calculator-2026` },
  openGraph: {
    title: "TikTok Shop Earnings Calculator 2026: Fees & Net Profit Guide",
    description:
      "How TikTok Shop fees work in 2026 — referral fees, affiliate commissions, shipping — and how to find your real net profit per sale.",
    url: `${siteUrl}/blog/tiktok-shop-earnings-calculator-2026`,
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-13",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=TikTok%20Shop%20Earnings%20Calculator%202026&type=article", width: 1200, height: 630, alt: "TikTok Shop Earnings Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Shop Earnings Calculator 2026: Fees & Net Profit Guide",
    description: "How TikTok Shop fees and affiliate commissions affect your net profit in 2026.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What percentage does TikTok Shop take from sellers in 2026?", acceptedAnswer: { "@type": "Answer", text: "TikTok Shop charges a referral fee that varies by category, generally from about 2% to 20%, with many categories around 8%. Confirm your exact rate in the Seller Center." } },
      { "@type": "Question", name: "How does TikTok affiliate commission work for shop sellers?", acceptedAnswer: { "@type": "Answer", text: "Sellers set an affiliate commission (commonly 5–20%) paid to creators when their content drives a sale. It is in addition to the referral fee and comes out of your per-unit profit." } },
      { "@type": "Question", name: "Is TikTok Shop profitable compared to Amazon or Etsy?", acceptedAnswer: { "@type": "Answer", text: "TikTok's referral fee is often lower than Amazon's ~15%, but affiliate commissions can raise your effective cost. TikTok's strength is discovery-driven, viral volume." } },
      { "@type": "Question", name: "What are TikTok Shop referral fees by category?", acceptedAnswer: { "@type": "Answer", text: "Referral fees differ by category and can range from roughly 2% to 20%. Electronics, apparel, and beauty each have their own rate, so check the current schedule for your category." } },
      { "@type": "Question", name: "How do I calculate my net profit on TikTok Shop?", acceptedAnswer: { "@type": "Answer", text: "Net profit per unit = selling price − COGS − TikTok referral fee − affiliate commission − shipping. Multiply by units sold for your monthly net." } },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "TikTok Shop Earnings Calculator 2026: Fees, Commissions & Net Profit",
    description: "How TikTok Shop seller fees and affiliate commissions affect your net profit in 2026.",
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
    author: { "@type": "Person", name: "TheMetricApp Team", url: `${siteUrl}/authors/themetricapp-team/`, sameAs: [`${siteUrl}/authors/themetricapp-team/`] },
    publisher: { "@type": "Organization", name: "TheMetricApp", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/tiktok-shop-earnings-calculator-2026` },
    image: `${siteUrl}/api/og?title=TikTok%20Shop%20Earnings%20Calculator%202026&type=article`,
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "TikTok Shop Earnings Calculator 2026", item: `${siteUrl}/blog/tiktok-shop-earnings-calculator-2026` },
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
        <span className="text-[#64748B]">TikTok Shop Fees 2026</span>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Marketplace Selling</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">June 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">TikTok Shop Earnings Calculator 2026: Fees, Commissions &amp; Net Profit</h1>
        <p className="text-lg text-[#64748B] leading-relaxed">TikTok Shop can drive explosive sales — but referral fees and affiliate commissions can quietly erase your margin. This 2026 guide shows exactly what you pay and how to find your true net profit per sale.</p>
      </header>

      <CalculatorEmbed slug="tiktok-shop-earnings-calculator-2026" />

      <div className="prose prose-slate max-w-none">
        <h2>How TikTok Shop Fees Work in 2026</h2>
        <p>When a sale happens, TikTok deducts a <strong>referral (commission) fee</strong> — typically <strong>2% to 20% by category</strong>, often around 8%. If you run the affiliate program, you also pay a <strong>commission</strong> (commonly 5–20%) to the creators who drive sales. Shipping and COGS round out your cost stack.</p>

        <h2>The Net Profit Formula</h2>
        <p><strong>Net Profit / Unit = Selling Price − COGS − Referral Fee − Affiliate Commission − Shipping.</strong> For a $29.99 product with $9 COGS, an 8% referral fee, and 10% affiliate commission: referral $2.40, affiliate $3.00 → net ≈ <strong>$15.59 per unit</strong> (about a 52% margin).</p>

        <h2>TikTok Shop vs Amazon vs Etsy</h2>
        <p>TikTok&apos;s referral fee is often lower than Amazon&apos;s ~15% and competitive with Etsy&apos;s ~6.5% plus processing. But heavy affiliate commissions can push your effective cost higher. The payoff is reach: TikTok&apos;s algorithm and live shopping can generate viral, demand-driven volume.</p>

        <h2>How to Maximize Profit</h2>
        <ol>
          <li>Price for the full fee stack, not just COGS.</li>
          <li>Tune your affiliate rate — high enough to attract creators, low enough to stay profitable.</li>
          <li>Lower COGS with better supplier terms as you scale.</li>
          <li>Use native formats (live shopping, short video) to drive organic sales.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <h3>What percentage does TikTok Shop take?</h3>
        <p>A referral fee that varies by category, generally 2%–20%, often around 8%.</p>
        <h3>How does affiliate commission work?</h3>
        <p>You set a rate (5–20%) paid to creators on top of the referral fee when they drive a sale.</p>

        <p>Estimate your numbers with the <Link href="/calculators/tiktok-shop-earnings-calculator-2026">TikTok Shop Earnings Calculator</Link>, then compare with the <Link href="/calculators/etsy-fee-calculator-2026">Etsy Fee Calculator</Link> and <Link href="/calculators/amazon-seller-fee-calculator-2026">Amazon Seller Fee Calculator</Link>.</p>
      </div>
    </article>
  );
}
