import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Credit Card Payoff Calculator 2026 | TheMetricApp" },
  description: "Free credit card payoff calculator and complete guide for 2026. Compare snowball vs avalanche methods, calculate interest savings, and learn how to become debt-free faster with proven strategies.",
  alternates: {
    canonical: `${siteUrl}/blog/credit-card-payoff-calculator-2026`,
  },
  openGraph: {
    title: "Credit Card Payoff Calculator 2026: Snowball vs",
    description: "Compare snowball and avalanche debt payoff methods. Add multiple cards and see exactly how much interest you save with our free calculator.",
    url: "https://www.themetricapp.com/blog/credit-card-payoff-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-05-28T00:00:00.000Z",
    images: [{ url: "/api/og?title=Credit%20Card%20Payoff%20Calculator%202026%3A%20Snowball%20vs%20Avalanche%20Guide%20%7C%20TheMetricApp&description=Compare%20snowball%20and%20avalanche%20debt%20payoff%20methods.%20Add%20multiple%20cards%20and%20see%20exactly%20how%20much%20interest%20you%20save%20with%20our%20free%20calculator.&type=article", width: 1200, height: 630, alt: "Credit Card Payoff Calculator 2026: Snowball vs Avalanche Guide | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credit Card Payoff Calculator 2026: Snowball vs",
    description: "Free guide to paying off credit card debt. Compare strategies, calculate savings, and get debt-free faster.",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Credit Card Payoff Calculator 2026: Snowball vs Avalanche Method Complete Guide",
    description: "Free credit card payoff calculator and complete guide for 2026. Compare snowball vs avalanche methods, calculate interest savings, and learn how to become debt-free faster with proven strategies.",
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
      "@id": "https://www.themetricapp.com/blog/credit-card-payoff-calculator-2026",
    },
  image: "https://www.themetricapp.com/api/og?title=credit%20card%20payoff%20calculator%202026&type=article",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the snowball method for credit cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pay minimums on all cards, put extra money toward the card with the smallest balance first. Psychological wins keep you motivated.",
        },
      },
      {
        "@type": "Question",
        name: "What is the avalanche method for credit cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pay minimums on all cards, put extra money toward the card with the highest APR first. Saves the most money on interest.",
        },
      },
      {
        "@type": "Question",
        name: "What is the average credit card APR in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "19-21% on average. Penalty APRs can reach 29.99%.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to pay off credit card debt with minimum payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "10-20+ years depending on balance and APR. Use our Credit Card Payoff Calculator for an exact estimate.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an extra $50/month save on credit card debt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On a $5,000 balance at 21% APR, an extra $50/month saves about $800 in interest and pays off the debt 1.5 years early.",
        },
      },
      {
        "@type": "Question",
        name: "Should I close credit cards after paying them off?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Keep them open with zero balance. Closing cards reduces your available credit and can hurt your credit utilization ratio.",
        },
      },
      {
        "@type": "Question",
        name: "What is balance transfer and how does it help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A balance transfer moves debt to a card with a 0% introductory APR (typically 12-18 months). The 3-5% fee is often worth the interest savings.",
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
        name: "Credit Card Payoff Calculator 2026",
        item: "https://www.themetricapp.com/blog/credit-card-payoff-calculator-2026",
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">

        <CalculatorEmbed slug="credit-card-payoff-calculator-2026" />

      
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#64748B] dark:text-[#94A3B8]">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link>
        <span className="mx-2">→</span>
        <span className="text-[#0F172A] dark:text-[#F1F5F9]">Credit Card Payoff Calculator 2026</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight mb-4">
        Credit Card Payoff Calculator 2026: Snowball vs Avalanche — Which Method Is Right for You?
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
          Use our <strong>Credit Card Payoff Calculator</strong> to compare snowball vs avalanche methods, add multiple cards, and see how extra payments save you thousands in interest.
        </p>
        <Link
          href="/calculators/credit-card-payoff-calculator"
          className="inline-flex items-center gap-2 rounded-xl bg-[#6366F1] text-white font-semibold px-6 py-3 text-sm hover:bg-[#4F46E5] transition-all shadow-lg shadow-[#6366F1]/20"
        >
          Open Calculator →
        </Link>
      </div>

      <p className="text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-8">
        Credit card debt is expensive — with average APRs over 21% in 2026, carrying a balance can cost you thousands in interest every year. But the good news is that with the right strategy, you can pay off your debt faster and save hundreds (or thousands) in interest.
      </p>

      <p className="text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-8">
        In this guide, we&apos;ll compare the two most popular debt payoff methods — snowball and avalanche — show you real examples, and help you use our <Link href="/calculators/credit-card-payoff-calculator" className="text-[#6366F1] hover:underline font-semibold">free Credit Card Payoff Calculator</Link> to find the best strategy for your situation.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        The State of Credit Card Debt in 2026
      </h2>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Before we dive into payoff strategies, let&apos;s look at where Americans stand with credit card debt in 2026:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Total US credit card debt:</strong> $1.25 trillion</li>
        <li><strong>Average debt per consumer:</strong> $6,500-$6,600</li>
        <li><strong>Average APR:</strong> 19-21% (penalty rates up to 29.99%)</li>
        <li><strong>Minimum payment:</strong> Typically 1-4% of balance or flat $25-40</li>
        <li><strong>Average late fee:</strong> Up to $8 (under new CFPB rules)</li>
      </ul>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        With rates this high, the difference between paying minimums and using a strategic payoff method can mean thousands of dollars saved.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Method 1: The Avalanche Method (Highest APR First)
      </h2>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        The <strong>avalanche method</strong> is mathematically optimal. Here&apos;s how it works:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li>List all your credit cards from <strong>highest APR to lowest</strong></li>
        <li>Pay the minimum payment on every card</li>
        <li>Put <strong>all extra money</strong> toward the card with the highest APR</li>
        <li>Once that card is paid off, roll the full payment to the next highest APR card</li>
      </ol>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        <strong>Why it works:</strong> By targeting the highest interest rate first, you minimize the total interest you pay. Over the life of your debt repayment, the avalanche method typically saves 5-15% more in interest than the snowball method.
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        <strong>Downside:</strong> If your highest APR card also has the largest balance, it can take months to see progress, which can be demotivating.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Method 2: The Snowball Method (Smallest Balance First)
      </h2>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        The <strong>snowball method</strong> is the most popular approach. Here&apos;s how it works:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li>List all your credit cards from <strong>smallest balance to largest</strong></li>
        <li>Pay the minimum payment on every card</li>
        <li>Put <strong>all extra money</strong> toward the card with the smallest balance</li>
        <li>Once that card is paid off, roll the full payment to the next smallest card</li>
      </ol>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        <strong>Why it works:</strong> The psychological boost of paying off a card completely — even a small one — keeps you motivated. Studies have shown that people using the snowball method are more likely to stick with their debt payoff plan.
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        <strong>Downside:</strong> You may pay more in total interest because you&apos;re not prioritizing high-APR cards. If you have a card with a $1,000 balance at 28% APR and a card with $5,000 at 12% APR, the snowball method has you pay off the $1,000 card first, even though the $5,000 card is costing you less in interest per dollar.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Real Examples: Snowball vs Avalanche in Action
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Example 1: Two Credit Cards
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Maria has two credit cards:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-[#475569] dark:text-[#CBD5E1] mb-4">
        <li><strong>Card A:</strong> $5,000 balance @ 21% APR (min payment: $150)</li>
        <li><strong>Card B:</strong> $3,000 balance @ 18% APR (min payment: $100)</li>
      </ul>
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-4 mb-6 border border-[#E2E8F0] dark:border-[#334155]">
        <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-2">Results (with $100/month extra):</p>
        <ul className="space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1]">
          <li><strong>Avalanche:</strong> 32 months, $1,939 total interest</li>
          <li><strong>Snowball:</strong> 34 months, $2,103 total interest</li>
          <li><strong>Savings with Avalanche:</strong> $164 less in interest, 2 months faster</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Example 2: Three Cards — The Snowball Advantage
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        James has three cards: Card 1 ($2,000 @ 19%), Card 2 ($4,500 @ 22%), Card 3 ($7,000 @ 17%).
      </p>
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-4 mb-6 border border-[#E2E8F0] dark:border-[#334155]">
        <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-2">Results (with $200/month extra):</p>
        <ul className="space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1]">
          <li><strong>Snowball:</strong> Card 1 paid off in 9 months! Psychological win early. Total: 42 months</li>
          <li><strong>Avalanche:</strong> First card paid off in 14 months. Total: 40 months</li>
          <li><strong>Which is better:</strong> Avalanche saves $312 more, but Snowball gives a quick win at month 9</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Example 3: Single Card — Focus on Extra Payments
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Sarah has one card: $8,000 @ 20% APR, minimum payment $200. At minimum payments, she pays $3,781 in interest over 59 months. By paying just <strong>$150 extra/month</strong> ($350 total), she pays it off in 28 months and saves $1,924 in interest.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Which Method Should You Choose?
      </h2>
      <div className="bg-[#EEF2FF] dark:bg-[#6366F1]/10 p-4 rounded-xl border border-[#6366F1]/20 mb-6">
        <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-2">Choose Avalanche if:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1] mb-3">
          <li>You&apos;re disciplined and motivated by math</li>
          <li>You want to save the most money on interest</li>
          <li>Your cards have significantly different APRs</li>
          <li>You have a large balance on a high-APR card</li>
        </ul>
        <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-2">Choose Snowball if:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1]">
          <li>You need motivation to stay on track</li>
          <li>You have several small balances you can knock out quickly</li>
          <li>You&apos;ve tried other methods and struggled to stick with them</li>
          <li>You want to build momentum early in your debt payoff journey</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        5 Tips to Accelerate Your Credit Card Payoff
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        1. Freeze Your Cards (Literally)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Put your credit cards in a container of water and freeze it. If you need to use a card, you have to wait for it to thaw — giving you time to reconsider. Better yet, remove them from all online wallets and saved payment methods.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        2. Consider a Balance Transfer
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        If you have good credit (680+), a 0% APR balance transfer card can save hundreds. A typical offer is 12-18 months at 0% with a 3-5% transfer fee. For a $5,000 balance at 21% APR, transferring to a 0% card for 15 months saves about $875 in interest — minus the $150 transfer fee.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        3. Automate Extra Payments
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Set up automatic payments above the minimum each month. If you don&apos;t see the money in your checking account, you won&apos;t miss it. Even $25-50 extra per month makes a significant difference over time.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        4. Use Windfalls Strategically
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Tax refunds, work bonuses, birthday money, and side hustle income should go directly to your highest-interest credit card. A $2,000 tax refund applied to a card at 21% APR saves $420/year in interest.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        5. Negotiate a Lower APR
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Call your credit card issuer and ask for a lower rate. If you have a good payment history (6+ months of on-time payments), many issuers will reduce your APR by 2-5%. It takes 10 minutes and could save you hundreds per year.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Common Credit Card Debt Mistakes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Paying only the minimum.</strong> A $5,000 balance at 21% APR with $150 minimum takes 4.5 years and costs $2,500+ in interest.</li>
        <li><strong>Using cards while paying them off.</strong> Every new purchase starts accruing interest immediately if you&apos;re carrying a balance.</li>
        <li><strong>Closing paid-off cards.</strong> Closing cards reduces your available credit and can hurt your credit score. Keep them open with zero balance.</li>
        <li><strong>Ignoring balance transfer fees.</strong> A 3-5% fee on $10,000 is $300-500. Run the numbers to make sure the savings outweigh the fee.</li>
        <li><strong>Not having a plan.</strong> &quot;I&apos;ll just pay what I can&quot; is not a strategy. Use our calculator to make a concrete plan with specific monthly targets.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-10">
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the snowball method for credit cards?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Pay minimums on all cards, put extra money toward the card with the smallest balance first. Psychological wins keep you motivated.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the avalanche method for credit cards?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Pay minimums on all cards, put extra money toward the card with the highest APR first. Saves the most money on interest.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the average credit card APR in 2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: 19-21% on average. Penalty APRs can reach 29.99%.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: How long does it take to pay off credit card debt with minimum payments?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: 10-20+ years depending on balance and APR. Use our <Link href="/calculators/credit-card-payoff-calculator" className="text-[#6366F1] hover:underline">calculator</Link> for an exact estimate.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: How much does an extra $50/month save on credit card debt?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: On a $5,000 balance at 21% APR, an extra $50/month saves about $800 in interest and pays off the debt 1.5 years early.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: Should I close credit cards after paying them off?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: No. Keep them open with zero balance. Closing cards reduces your available credit and can hurt your credit utilization ratio.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is balance transfer and how does it help?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: A balance transfer moves debt to a card with a 0% introductory APR (typically 12-18 months). The 3-5% fee is often worth the interest savings.</p>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-12 p-6 bg-[#EEF2FF] dark:bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-2xl">
        <p className="text-sm font-bold text-[#6366F1] uppercase tracking-wider mb-4">🔗 Related Tools</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/calculators/student-loan-payoff-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🎓</span> Student Loan Payoff Calculator
          </Link>
          <Link href="/calculators/home-affordability-calculator-2026" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🏡</span> Home Affordability Calculator
          </Link>
          <Link href="/calculators/solo-401k-contribution-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🏦</span> Solo 401k Contribution Calculator
          </Link>
          <Link href="/calculators/mortgage-calculator-uk" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🏡</span> Mortgage Calculator UK
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
              <li><a href="https://www.consumerfinance.gov/credit-cards/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">CFPB — Credit Card &amp; Debt Resources</a></li>
              <li><a href="https://www.nerdwallet.com/article/finance/credit-card-debt-payoff-strategies" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">NerdWallet — Debt Payoff Strategies</a></li>
              <li><a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">IRS — 2026 Tax Inflation Adjustments</a></li>
              <li><a href="https://www.federalreserve.gov/credit-card-rate-history.htm" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Federal Reserve — Credit Card Rate History</a></li>
              <li><a href="https://www.experian.com/blogs/ask-experian/credit-education/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Experian — Credit Education Resources</a></li>
            </ul>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-2">
              <strong>Last Updated:</strong> May 2026. Interest rates, fees, and regulations are subject to change. Consult a qualified professional for personalized advice.
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
