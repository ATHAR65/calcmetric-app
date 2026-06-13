import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Break-Even Calculator Guide 2026: Units, Revenue & Contribution Margin | TheMetricApp" },
  description:
    "Complete 2026 guide to break-even analysis for small business and e-commerce. Learn the break-even formula, contribution margin, and how many units you must sell to profit.",
  alternates: { canonical: `${siteUrl}/blog/break-even-calculator-small-business` },
  openGraph: {
    title: "Break-Even Calculator Guide 2026: Small Business & E-Commerce",
    description:
      "Learn the break-even formula, contribution margin, and how to find the units you need to sell to cover costs and profit in 2026.",
    url: `${siteUrl}/blog/break-even-calculator-small-business`,
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-13",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Break-Even%20Calculator%20Guide%202026&type=article", width: 1200, height: 630, alt: "Break-Even Calculator Guide 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Break-Even Calculator Guide 2026: Small Business & E-Commerce",
    description: "The break-even formula, contribution margin, and how many units you must sell to profit.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is a break-even point in business?", acceptedAnswer: { "@type": "Answer", text: "The break-even point is the sales volume at which total revenue equals total costs, so you make neither a profit nor a loss. Every unit sold beyond it generates profit." } },
      { "@type": "Question", name: "How do I calculate break-even for an e-commerce product?", acceptedAnswer: { "@type": "Answer", text: "Divide your monthly fixed costs by your contribution margin (selling price minus all variable costs, including shipping, packaging, payment processing, and platform fees)." } },
      { "@type": "Question", name: "What is contribution margin and why does it matter?", acceptedAnswer: { "@type": "Answer", text: "Contribution margin is selling price minus variable cost per unit — the money left to cover fixed costs and profit. A higher margin means you break even on fewer units." } },
      { "@type": "Question", name: "What is a good break-even point for a small business?", acceptedAnswer: { "@type": "Answer", text: "A healthy business reaches break-even well within its realistic monthly sales capacity. A contribution margin above 30% generally signals a comfortable position." } },
      { "@type": "Question", name: "How do I lower my break-even point?", acceptedAnswer: { "@type": "Answer", text: "Raise your selling price, reduce variable costs, or trim fixed costs. Improving either contribution margin or fixed costs lowers the units you must sell." } },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Break-Even Calculator Guide 2026: Units, Revenue & Contribution Margin",
    description: "How break-even analysis works for small business and e-commerce in 2026.",
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
    author: { "@type": "Person", name: "TheMetricApp Team", url: `${siteUrl}/authors/themetricapp-team/`, sameAs: [`${siteUrl}/authors/themetricapp-team/`] },
    publisher: { "@type": "Organization", name: "TheMetricApp", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/break-even-calculator-small-business` },
    image: `${siteUrl}/api/og?title=Break-Even%20Calculator%20Guide%202026&type=article`,
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "Break-Even Calculator Guide 2026", item: `${siteUrl}/blog/break-even-calculator-small-business` },
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
        <span className="text-[#64748B]">Break-Even Guide 2026</span>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">E-Commerce</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">June 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">Break-Even Calculator Guide 2026: Units, Revenue &amp; Contribution Margin</h1>
        <p className="text-lg text-[#64748B] leading-relaxed">Your break-even point is the most important number in your business — the sales level where revenue finally covers costs. This guide shows you the formula, the role of contribution margin, and how to lower your break-even.</p>
      </header>

      <CalculatorEmbed slug="break-even-calculator-small-business" />

      <div className="prose prose-slate max-w-none">
        <h2>What Is a Break-Even Point?</h2>
        <p>Break-even is the sales volume where total revenue equals total costs — no profit, no loss. Sell one unit beyond it and you earn profit; sell one below and you lose money. It separates costs into <strong>fixed</strong> (rent, software, salaries) and <strong>variable</strong> (COGS, packaging, shipping per unit).</p>

        <h2>The Break-Even Formula</h2>
        <p><strong>Contribution Margin = Selling Price − Variable Cost per Unit.</strong> <strong>Break-Even Units = Fixed Costs ÷ Contribution Margin.</strong> Add a profit target with: <strong>(Fixed Costs + Target Profit) ÷ Contribution Margin.</strong></p>

        <h2>A Real Example</h2>
        <p>Sell a product for <strong>$35</strong>, with <strong>$12</strong> COGS and <strong>$800/month</strong> fixed costs. Contribution margin is $23 (65.7%). Break-even = $800 ÷ $23 ≈ <strong>35 units/month</strong> (~$1,217 revenue). Want $1,000 profit too? You need ~79 units.</p>

        <h2>Why E-Commerce Break-Even Is Different</h2>
        <p>Online sellers must include <strong>shipping, packaging, payment processing (~3%), platform fees, and returns</strong> in variable cost. Leave them out and break-even looks far easier than it is — many sellers who think they break even at 30 units actually need 45.</p>

        <h2>How to Lower Your Break-Even Point</h2>
        <ol>
          <li>Raise your selling price (widens contribution margin).</li>
          <li>Reduce variable costs (supplier pricing, shipping, packaging).</li>
          <li>Trim fixed costs (unused software, better tooling).</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <h3>What is contribution margin?</h3>
        <p>Selling price minus variable cost per unit — the money left to cover fixed costs and profit.</p>
        <h3>What is a good break-even point?</h3>
        <p>One you reach using well under half your realistic monthly capacity, ideally with a contribution margin above 30%.</p>

        <p>Run your numbers with the <Link href="/calculators/break-even-calculator-small-business">Break-Even Calculator</Link>, then dig deeper with the <Link href="/calculators/ecommerce-net-profit-margin">E-Commerce Profit Margin Calculator</Link> and <Link href="/calculators/shopify-profit-calculator-2026">Shopify Profit Calculator</Link>.</p>
      </div>
    </article>
  );
}
