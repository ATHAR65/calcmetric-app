import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "No Tax on Overtime Calculator 2026: OBBBA Deduction Guide | TheMetricApp" },
  description:
    "Complete 2026 guide to the no tax on overtime rule under the OBBBA. Learn how the overtime tax deduction works, who qualifies, phase-out limits, and how to estimate your savings.",
  alternates: { canonical: `${siteUrl}/blog/no-tax-on-overtime-calculator-2026` },
  openGraph: {
    title: "No Tax on Overtime Calculator 2026: Complete OBBBA Guide",
    description:
      "How the 2026 no tax on overtime deduction works under the One Big Beautiful Bill Act — eligibility, phase-outs, the math, and how to maximize your savings.",
    url: `${siteUrl}/blog/no-tax-on-overtime-calculator-2026`,
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-13",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=No%20Tax%20on%20Overtime%20Calculator%202026%3A%20Complete%20OBBBA%20Guide&type=article", width: 1200, height: 630, alt: "No Tax on Overtime Calculator 2026: Complete OBBBA Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Tax on Overtime Calculator 2026: Complete OBBBA Guide",
    description: "How the 2026 no tax on overtime deduction works under the OBBBA.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is the no tax on overtime rule in 2026?", acceptedAnswer: { "@type": "Answer", text: "It is a federal income tax deduction under the One Big Beautiful Bill Act (OBBBA) that lets eligible W-2 employees deduct the half-time premium portion of their overtime pay, up to $12,500 (single/HOH) or $25,000 (MFJ), for tax years 2025 through 2028." } },
      { "@type": "Question", name: "Who qualifies for the overtime tax deduction?", acceptedAnswer: { "@type": "Answer", text: "W-2 employees who receive FLSA-qualifying overtime. The deduction phases out for single/HOH filers between $150,000 and $275,000 of MAGI, and for joint filers between $300,000 and $550,000." } },
      { "@type": "Question", name: "Does the overtime deduction apply to self-employed or 1099 workers?", acceptedAnswer: { "@type": "Answer", text: "No. Independent contractors and self-employed individuals are not paid statutory overtime and cannot claim this deduction." } },
      { "@type": "Question", name: "Is my entire overtime paycheck tax-free under OBBBA?", acceptedAnswer: { "@type": "Answer", text: "No. Only the premium half is deductible for federal income tax. FICA and most state income taxes still apply to your full overtime wages." } },
      { "@type": "Question", name: "When does the no tax on overtime deduction expire?", acceptedAnswer: { "@type": "Answer", text: "It applies to tax years 2025 through 2028 only, unless Congress extends it." } },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "No Tax on Overtime Calculator 2026: Complete Guide to the OBBBA Deduction",
    description: "How the 2026 no tax on overtime deduction works under the OBBBA — eligibility, phase-outs, the math, and savings strategies.",
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
    author: { "@type": "Person", name: "TheMetricApp Team", url: `${siteUrl}/authors/themetricapp-team/`, sameAs: [`${siteUrl}/authors/themetricapp-team/`] },
    publisher: { "@type": "Organization", name: "TheMetricApp", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/no-tax-on-overtime-calculator-2026` },
    image: `${siteUrl}/api/og?title=No%20Tax%20on%20Overtime%20Calculator%202026&type=article`,
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "No Tax on Overtime Calculator 2026", item: `${siteUrl}/blog/no-tax-on-overtime-calculator-2026` },
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
        <span className="text-[#64748B]">No Tax on Overtime 2026</span>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Tax Tips</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">June 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">No Tax on Overtime Calculator 2026: Complete Guide to the OBBBA Deduction</h1>
        <p className="text-lg text-[#64748B] leading-relaxed">The 2026 &quot;no tax on overtime&quot; rule is one of the most misunderstood parts of the One Big Beautiful Bill Act. This guide explains exactly how the overtime tax deduction works, who qualifies, and how to estimate your federal tax savings.</p>
      </header>

      <CalculatorEmbed slug="no-tax-on-overtime-calculator-2026" />

      <div className="prose prose-slate max-w-none">
        <h2>What the &quot;No Tax on Overtime&quot; Rule Actually Means</h2>
        <p>The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025, created a federal income tax deduction for overtime pay. Despite the catchy &quot;no tax on overtime&quot; name, it is <strong>not</strong> a full exemption. It lets qualifying W-2 employees deduct the <strong>half-time premium</strong> — the extra 0.5× above the regular rate that the FLSA requires for hours over 40 per week.</p>
        <p>It is an above-the-line deduction (you get it whether or not you itemize) and it lowers taxable income, so the real benefit equals your deductible amount multiplied by your marginal tax rate.</p>

        <h2>How Much Can You Deduct?</h2>
        <p>The maximum deduction is <strong>$12,500</strong> for single and head-of-household filers and <strong>$25,000</strong> for married couples filing jointly. The deduction phases out at higher incomes: single/HOH filers between $150,000 and $275,000 of MAGI, and joint filers between $300,000 and $550,000.</p>

        <h2>The Math, With a Worked Example</h2>
        <p><strong>Overtime Premium = Regular Rate × 0.5 × OT Hours per Week × Weeks.</strong> If you earn $25/hour and work 10 overtime hours per week for 52 weeks: $25 × 0.5 × 10 × 52 = <strong>$6,500</strong>. That is below the $12,500 cap, so it is fully deductible (under the phase-out). At a 22% marginal rate you save about <strong>$1,430</strong> in federal income tax.</p>

        <h2>Who Qualifies — and Who Doesn&apos;t</h2>
        <p>The deduction is for <strong>W-2 employees</strong> who receive FLSA-qualifying overtime. <strong>1099 contractors and self-employed people do not qualify</strong>, because they are not paid statutory overtime. Salaried exempt employees who don&apos;t earn overtime also miss out.</p>

        <h2>Common Mistakes</h2>
        <ol>
          <li><strong>Thinking the whole paycheck is tax-free.</strong> Only the premium half is deductible.</li>
          <li><strong>Forgetting FICA.</strong> Social Security and Medicare (7.65%) still apply to every overtime dollar.</li>
          <li><strong>Ignoring state taxes.</strong> Most states don&apos;t conform, so overtime stays fully taxable at the state level.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <h3>Is my entire overtime paycheck tax-free under OBBBA?</h3>
        <p>No. Only the premium half is deductible for federal income tax. FICA and most state income taxes still apply.</p>
        <h3>When does the deduction expire?</h3>
        <p>It applies to tax years 2025 through 2028 only, unless Congress extends it.</p>

        <p>Ready to run your numbers? Use the <Link href="/calculators/no-tax-on-overtime-calculator-2026">No Tax on Overtime Calculator</Link>, or compare scenarios with the <Link href="/calculators/texas-paycheck-calculator">Texas Paycheck Calculator</Link> and <Link href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</Link>.</p>
      </div>
    </article>
  );
}
