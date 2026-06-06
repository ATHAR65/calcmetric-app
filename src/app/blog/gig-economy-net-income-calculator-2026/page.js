import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Gig Economy Net Income Calculator 2026 | TheMetricApp" },
  description: "Free gig economy net income calculator and complete guide for 2026. Calculate your true hourly rate after mileage deductions, business expenses, and self-employment taxes for Uber, DoorDash, Instacart, Lyft, and more.",
  alternates: {
    canonical: `${siteUrl}/blog/gig-economy-net-income-calculator-2026`,
  },
  openGraph: {
    title: "Gig Economy Net Income Calculator 2026: Take-Home Pay Guide",
    description: "Complete guide to gig worker net income in 2026. Calculate your real hourly rate after expenses and taxes for Uber, DoorDash, Instacart, and Lyft.",
    url: "https://www.themetricapp.com/blog/gig-economy-net-income-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-05-28T00:00:00.000Z",
    images: [{ url: "/api/og?title=Gig%20Economy%20Net%20Income%20Calculator%202026%3A%20Take-Home%20Pay%20Guide%20%7C%20TheMetricApp&description=Complete%20guide%20to%20gig%20worker%20net%20income%20in%202026.%20Calculate%20your%20real%20hourly%20rate%20after%20expenses%20and%20taxes%20for%20Uber%2C%20DoorDash%2C%20Instacart%2C%20and%20Lyft.&type=article", width: 1200, height: 630, alt: "Gig Economy Net Income Calculator 2026: Take-Home Pay Guide | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gig Economy Net Income Calculator 2026: Take-Home Pay Guide",
    description: "Calculate your real gig worker hourly rate after expenses and taxes for 2026.",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Gig Economy Net Income Calculator 2026: Uber, DoorDash, Instacart Take-Home Pay",
    description: "Free gig economy net income calculator and complete guide for 2026. Calculate your true hourly rate after mileage deductions, business expenses, and self-employment taxes for Uber, DoorDash, Instacart, Lyft, and more.",
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
      "@id": "https://www.themetricapp.com/blog/gig-economy-net-income-calculator-2026",
    },
  image: "https://www.themetricapp.com/api/og?title=gig%20economy%20net%20income%20calculator%202026&type=article",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the mileage rate for gig workers in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "$0.725/mile for business use, set by IRS Revenue Procedure 2025-32.",
        },
      },
      {
        "@type": "Question",
        name: "What is the average DoorDash income in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most DoorDash drivers earn $11-16/hour gross. After expenses and taxes, net is typically $13-19/hour on a gross basis.",
        },
      },
      {
        "@type": "Question",
        name: "How much should I save for taxes as a gig worker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "25-30% of net income after expenses. Use our Gig Economy Net Income Calculator for exact amounts.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to pay quarterly taxes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if you expect to owe $1,000+ in taxes. Due: Apr 15, Jun 15, Sep 15, Jan 15.",
        },
      },
      {
        "@type": "Question",
        name: "What deductions can gig workers claim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mileage, tolls, parking, phone/data (business %), supplies, vehicle maintenance, insurance, and any other necessary business expenses.",
        },
      },
      {
        "@type": "Question",
        name: "Is Uber or DoorDash more profitable in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uber/Lyft generally have higher gross earnings ($15-22/hr) but higher insurance costs and more deadhead miles. DoorDash has lower gross earnings ($11-16/hr) but lower expenses per mile. Use our calculator to compare both scenarios.",
        },
      },
      {
        "@type": "Question",
        name: "What is the standard deduction for 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "$16,100 for single filers, $32,200 for married filing jointly, $24,150 for head of household.",
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
        name: "Gig Economy Net Income Calculator 2026",
        item: "https://www.themetricapp.com/blog/gig-economy-net-income-calculator-2026",
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">

        <CalculatorEmbed slug="gig-economy-net-income-calculator-2026" />

      
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-[#64748B] dark:text-[#94A3B8]">
        <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
        <span className="mx-2">→</span>
        <Link href="/blog" className="hover:text-[#6366F1] transition-colors">Blog</Link>
        <span className="mx-2">→</span>
        <span className="text-[#0F172A] dark:text-[#F1F5F9]">Gig Economy Net Income Calculator 2026</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight mb-4">
        Gig Economy Net Income Calculator 2026: Your True Take-Home Pay After Expenses &amp; Taxes
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
          Use our <strong>Gig Economy Net Income Calculator</strong> to see your true hourly rate after mileage deductions, business expenses, and self-employment taxes.
        </p>
        <Link
          href="/calculators/gig-economy-net-income-calculator"
          className="inline-flex items-center gap-2 rounded-xl bg-[#6366F1] text-white font-semibold px-6 py-3 text-sm hover:bg-[#4F46E5] transition-all shadow-lg shadow-[#6366F1]/20"
        >
          Open Calculator →
        </Link>
      </div>

      <p className="text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-8">
        That $28/hr DoorDash looks great on paper. But after you subtract gas, maintenance, insurance, and the 15.3% self-employment tax — what are you <em>actually</em> taking home?
      </p>

      <p className="text-lg text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-8">
        Most gig workers are shocked when they calculate their true net income. The gap between gross earnings and take-home pay can be <strong>30-50% wider</strong> than most realize. That&apos;s why we built the <Link href="/calculators/gig-economy-net-income-calculator" className="text-[#6366F1] hover:underline font-semibold">Gig Economy Net Income Calculator</Link> — to give you an accurate picture of your real earnings.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        The Reality of Gig Economy Income in 2026
      </h2>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Gig work offers flexibility, but the financial reality is more complex than most platforms advertise. Here&apos;s what eats into your gross earnings:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Vehicle expenses:</strong> $0.725/mile covers gas, maintenance, depreciation, and insurance</li>
        <li><strong>Self-employment tax:</strong> 15.3% on 92.35% of net earnings</li>
        <li><strong>Federal & state income tax:</strong> 10-37% depending on your total income</li>
        <li><strong>Platform fees:</strong> Uber takes up to 25%, DoorDash keeps a portion of delivery fees</li>
        <li><strong>Deadhead miles:</strong> Miles between rides that you don&apos;t get paid for but can deduct</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        2026 Tax Rates & Deductions for Gig Workers
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Standard Mileage Rate: $0.725/Mile
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        The IRS set the 2026 business mileage rate at <strong>72.5 cents per mile</strong>. This is the single largest deduction most gig workers can claim. If you drive 20,000 business miles per year, that&apos;s a <strong>$14,500 deduction</strong> — directly reducing both your income tax and self-employment tax.
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        <strong>What counts as business miles?</strong> Miles driven while you&apos;re actively working — trips to pick up passengers/orders, driving between rides, trips to your hotspot, and miles back from a delivery location. Commuting from home to your first gig location doesn&apos;t count.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Self-Employment Tax: 15.3%
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Since gig platforms classify you as an independent contractor, you pay both the employee and employer portions of Social Security and Medicare taxes. That&apos;s <strong>15.3% total</strong> (12.4% Social Security + 2.9% Medicare) on 92.35% of your net earnings.
      </p>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        <strong>The silver lining:</strong> Half of your self-employment tax is deductible above-the-line, reducing your adjusted gross income.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Standard Deduction: $16,100
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        For 2026, single filers get a <strong>$16,100 standard deduction</strong>, married filing jointly get $32,200. Most gig workers benefit from taking the standard deduction rather than itemizing personal deductions.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Real Examples by Platform
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        DoorDash Driver (Part-Time)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Maria delivers for DoorDash 20 hours/week, 48 weeks/year. She earns $28,000 gross and drives 12,000 business miles.
      </p>
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-4 mb-6 border border-[#E2E8F0] dark:border-[#334155]">
        <ul className="space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1]">
          <li><strong>Gross:</strong> $28,000</li>
          <li><strong>Mileage deduction:</strong> -$8,700 (12,000 × $0.725)</li>
          <li><strong>Supplies & phone:</strong> -$1,100</li>
          <li><strong>Net earnings:</strong> $18,200</li>
          <li><strong>SE tax:</strong> -$2,571</li>
          <li><strong>Income tax:</strong> -$358</li>
          <li className="text-[#6366F1] font-bold"><strong>Take-home:</strong> $15,271</li>
          <li><strong>Effective hourly rate:</strong> $15.91/hr</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Full-Time Uber Driver
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        James drives for Uber 40 hours/week, 50 weeks/year, earning $55,000 gross with 25,000 business miles.
      </p>
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-4 mb-6 border border-[#E2E8F0] dark:border-[#334155]">
        <ul className="space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1]">
          <li><strong>Gross:</strong> $55,000</li>
          <li><strong>Mileage deduction:</strong> -$18,125 (25,000 × $0.725)</li>
          <li><strong>Insurance, phone, tolls:</strong> -$4,160</li>
          <li><strong>Net earnings:</strong> $32,715</li>
          <li><strong>SE tax:</strong> -$4,620</li>
          <li><strong>Income tax:</strong> -$2,024</li>
          <li><strong>CA state tax:</strong> -$3,042</li>
          <li className="text-[#6366F1] font-bold"><strong>Take-home:</strong> $23,029</li>
          <li><strong>Effective hourly rate:</strong> $11.51/hr</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        Multi-Platform Worker (Uber Eats + DoorDash + Instacart)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4">
        Aisha works across three platforms: 50 hours/week, $68,000 gross, 30,000 miles.
      </p>
      <div className="bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-4 mb-6 border border-[#E2E8F0] dark:border-[#334155]">
        <ul className="space-y-1 text-sm text-[#475569] dark:text-[#CBD5E1]">
          <li><strong>Gross:</strong> $68,000</li>
          <li><strong>Mileage deduction:</strong> -$21,750 (30,000 × $0.725)</li>
          <li><strong>All other expenses:</strong> -$5,160</li>
          <li><strong>Net earnings:</strong> $41,090</li>
          <li><strong>SE tax:</strong> -$5,803</li>
          <li><strong>Income tax:</strong> -$3,243</li>
          <li><strong>State tax (low):</strong> -$2,055</li>
          <li className="text-[#6366F1] font-bold"><strong>Take-home:</strong> $29,989</li>
          <li><strong>Effective hourly rate:</strong> $12.00/hr</li>
        </ul>
      </div>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        <strong>Key insight:</strong> Multi-platform work increases gross income but also increases mileage expenses. Aisha&apos;s effective rate drops because of the higher mileage-to-income ratio.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        7 Tips to Maximize Your Gig Economy Income
      </h2>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        1. Track Every Single Mile (Yes, Every One)
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Use apps like <strong>Stride, Everlance, or MileIQ</strong> to automatically log your miles. Set them to start tracking when you leave for your first gig and stop when you finish your last delivery. Don&apos;t forget deadhead miles — the miles between deliveries or rides back to your hotspot are all deductible.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        2. Deduct Your Phone & Data Plan
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        If you use your phone primarily for gig work, you can deduct 50-80% of your monthly bill. For a $90/month plan, that&apos;s $540-$864 per year in deductions. If you bought a phone specifically for gig work, the full cost is deductible.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        3. Don&apos;t Forget Supplies
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Insulated bags, hot/cold food carriers, phone mounts, charging cables, cleaning supplies, hand sanitizer, masks, and even parking fees are all deductible business expenses. Keep receipts for everything.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        4. Review Insurance Options
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Rideshare insurance (for Uber/Lyft) typically costs $15-40/month more than personal auto insurance. It&apos;s required by most platforms and is fully deductible as a business expense. Delivery drivers (DoorDash, Instacart) may not need special insurance — check with your provider.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        5. Save 25-30% for Taxes
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        Open a separate savings account and automatically transfer 25-30% of each payout for taxes. Set calendar reminders for quarterly payment due dates: April 15, June 15, September 15, and January 15. Use our <Link href="/calculators/gig-economy-net-income-calculator" className="text-[#6366F1] hover:underline font-semibold">calculator</Link> to estimate your exact quarterly amount.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        6. Consider Actual Vehicle Expenses
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        For older vehicles with high maintenance costs, the actual expenses method may give a larger deduction than the standard mileage rate. Track all gas, repairs, tires, oil changes, insurance, registration, and depreciation for a year and compare both methods.
      </p>

      <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-8 mb-3">
        7. Optimize Your Hours
      </h3>
      <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
        The most profitable gig workers work during peak hours: Friday and Saturday nights, rainy days, lunch rushes (11am-2pm), and dinner rushes (5pm-9pm). During these times, surge pricing and peak pay can increase your gross earnings by 20-50% with the same mileage expenses — significantly improving your effective hourly rate.
      </p>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Common Gig Worker Tax Mistakes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] dark:text-[#CBD5E1] mb-6">
        <li><strong>Not tracking mileage at all.</strong> The single biggest deduction lost. Use a mileage tracking app — it pays for itself many times over.</li>
        <li><strong>Forgetting to deduct platform fees.</strong> Uber&apos;s service fee, DoorDash&apos;s delivery fee portion — these are business expenses.</li>
        <li><strong>Ignoring quarterly tax payments.</strong> The IRS charges penalties even if you pay in full by April 15.</li>
        <li><strong>Not separating business and personal expenses.</strong> A dedicated business bank account and credit card make tax time dramatically easier.</li>
        <li><strong>Missing the health insurance deduction.</strong> If you buy your own insurance through the marketplace, you can deduct 100% of premiums.</li>
        <li><strong>Overlooking the home office deduction.</strong> Even a small space used exclusively for your gig business qualifies.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mt-12 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-10">
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the mileage rate for gig workers in 2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: $0.725/mile for business use, set by IRS Revenue Procedure 2025-32.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the average DoorDash income in 2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Most DoorDash drivers earn $11-16/hour gross. After expenses and taxes, net is typically $13-19/hour on a gross basis.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: How much should I save for taxes as a gig worker?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: 25-30% of net income after expenses. Use our <Link href="/calculators/gig-economy-net-income-calculator" className="text-[#6366F1] hover:underline">calculator</Link> for exact amounts.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: Do I need to pay quarterly taxes?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Yes, if you expect to owe $1,000+ in taxes. Due: Apr 15, Jun 15, Sep 15, Jan 15.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What deductions can gig workers claim?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Mileage, tolls, parking, phone/data (business %), supplies, vehicle maintenance, insurance, and any other necessary business expenses.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: Is Uber or DoorDash more profitable in 2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: Uber/Lyft generally have higher gross earnings ($15-22/hr) but higher insurance costs and more deadhead miles. DoorDash has lower gross earnings ($11-16/hr) but lower expenses per mile. Use our calculator to compare both scenarios.</p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Q: What is the standard deduction for 2026?</p>
          <p className="text-[#475569] dark:text-[#CBD5E1]">A: $16,100 for single filers, $32,200 for married filing jointly, $24,150 for head of household.</p>
        </div>
      </div>

      {/* Related Tools */}
      <div className="mt-12 p-6 bg-[#EEF2FF] dark:bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-2xl">
        <p className="text-sm font-bold text-[#6366F1] uppercase tracking-wider mb-4">🔗 Related Tools</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/calculators/doordash-tax-estimator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🚗</span> DoorDash Tax Estimator
          </Link>
          <Link href="/calculators/uber-tax-calculator-2026" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🚗</span> Uber Tax Calculator
          </Link>
          <Link href="/calculators/side-hustle-tax-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>💰</span> Side Hustle Tax Calculator
          </Link>
          <Link href="/calculators/irs-mileage-deduction-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#475569] dark:text-[#CBD5E1] hover:text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors">
            <span>🚗</span> IRS Mileage Deduction Calculator
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
              <li><a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">IRS Topic 751 — Self-Employment Tax</a></li>
              <li><a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">IRS — 2026 Standard Mileage Rate</a></li>
              <li><a href="https://www.uber.com/us/en/drive/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Uber — Driver Earnings &amp; Fees</a></li>
              <li><a href="https://help.doordash.com/dashers/s/" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">DoorDash — Dasher Pay &amp; Expenses</a></li>
              <li><a href="https://www.bls.gov/oes/current/oes_nat.htm" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">Bureau of Labor Statistics — Wage Data</a></li>
            </ul>
            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-2">
              <strong>Last Updated:</strong> May 2026. Tax rates, mileage rates, and platform fee structures are subject to change. Consult a qualified professional for personalized advice.
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
