import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Freelancer Platform Fee Guide 2026 | TheMetricApp" },
  description:
    "Complete 2026 guide to freelancer platform fees. Compare Fiverr, Upwork, Toptal, Contra, and PeoplePerHour, learn how each fee works, and keep more of your take-home pay.",
  alternates: { canonical: `${siteUrl}/blog/freelancer-platform-fee-calculator-2026` },
  openGraph: {
    title: "Freelancer Platform Fee Calculator 2026: Fiverr vs Upwork vs Toptal",
    description:
      "Compare freelancer platform fees in 2026 — Fiverr, Upwork, Toptal, Contra, PeoplePerHour — and see your real net pay after fees.",
    url: `${siteUrl}/blog/freelancer-platform-fee-calculator-2026`,
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-13",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Freelancer%20Platform%20Fee%20Calculator%202026&type=article", width: 1200, height: 630, alt: "Freelancer Platform Fee Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Platform Fee Calculator 2026: Fiverr vs Upwork vs Toptal",
    description: "Compare Fiverr, Upwork, Toptal, Contra, and PeoplePerHour fees for 2026.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Which freelance platform has the lowest fees in 2026?", acceptedAnswer: { "@type": "Answer", text: "Toptal and Contra charge freelancers 0%. Among platforms that take a cut, Upwork is cheapest for long-term clients (as low as 5%), while Fiverr and PeoplePerHour charge a flat 20%." } },
      { "@type": "Question", name: "Does Upwork charge a flat fee or sliding scale?", acceptedAnswer: { "@type": "Answer", text: "Upwork uses a per-client sliding scale: 20% on the first $500, 10% from $500 to $10,000, and 5% above $10,000 in lifetime billings with that client." } },
      { "@type": "Question", name: "Is Contra really free for freelancers?", acceptedAnswer: { "@type": "Answer", text: "Yes. Contra is commission-free for freelancers and earns revenue from premium memberships and add-ons rather than taking a percentage of your projects." } },
      { "@type": "Question", name: "How much does Fiverr take from your earnings?", acceptedAnswer: { "@type": "Answer", text: "Fiverr takes a flat 20% of every order. On a $500 gig you receive $400; there are no volume discounts." } },
      { "@type": "Question", name: "Can I negotiate platform fees on Upwork or Fiverr?", acceptedAnswer: { "@type": "Answer", text: "You cannot negotiate the published fee, but you can lower your effective Upwork rate by concentrating billings with a client to reach the 10% and 5% tiers, and by pricing to absorb the fee." } },
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Freelancer Platform Fee Calculator 2026: Fiverr vs Upwork vs Toptal vs Contra",
    description: "Compare freelancer platform fees in 2026 and keep more of your take-home pay.",
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
    author: { "@type": "Person", name: "TheMetricApp Team", url: `${siteUrl}/authors/themetricapp-team/`, sameAs: [`${siteUrl}/authors/themetricapp-team/`] },
    publisher: { "@type": "Organization", name: "TheMetricApp", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/freelancer-platform-fee-calculator-2026` },
    image: `${siteUrl}/api/og?title=Freelancer%20Platform%20Fee%20Calculator%202026&type=article`,
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "Freelancer Platform Fee Calculator 2026", item: `${siteUrl}/blog/freelancer-platform-fee-calculator-2026` },
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
        <span className="text-[#64748B]">Freelancer Platform Fees 2026</span>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">Freelancing</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">June 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">Freelancer Platform Fee Calculator 2026: Fiverr vs Upwork vs Toptal vs Contra</h1>
        <p className="text-lg text-[#64748B] leading-relaxed">Platform fees can quietly eat 5%–20% of your freelance income. This 2026 guide breaks down exactly what Fiverr, Upwork, Toptal, Contra, and PeoplePerHour charge — and how to keep more of every project.</p>
      </header>

      <CalculatorEmbed slug="freelancer-platform-fee-calculator-2026" />

      <div className="prose prose-slate max-w-none">
        <h2>How Much Each Platform Takes in 2026</h2>
        <p><strong>Fiverr</strong> charges a flat 20% on every order. <strong>Upwork</strong> uses a per-client sliding scale (20% → 10% → 5%). <strong>Toptal</strong> charges freelancers 0% (the client pays a premium). <strong>Contra</strong> is commission-free (0%). <strong>PeoplePerHour</strong> charges 20% on new work.</p>

        <h2>Why the Difference Matters</h2>
        <p>On a $5,000 project, Fiverr&apos;s 20% costs <strong>$1,000</strong>, while a long-term Upwork client at 5% costs just <strong>$250</strong>. Over a year of freelancing, platform choice can be worth thousands of dollars in extra income.</p>

        <h2>Fiverr vs Upwork — Which Wins?</h2>
        <p>Fiverr&apos;s gig model brings buyers to you and suits productized, high-volume services, but you pay 20% forever. Upwork requires proposals (and Connects) but rewards loyalty: once you cross $10,000 with a client you pay only 5%. Many freelancers use Fiverr to win first-time buyers and Upwork for long-term retainers.</p>

        <h2>The Zero-Fee Disruptors: Toptal and Contra</h2>
        <p>Toptal moves the fee onto the client, so your full quoted rate lands in your pocket — but it&apos;s highly selective. Contra is commission-free, monetizing through premium features instead. For freelancers with their own pipeline, these can mean keeping the entire project value.</p>

        <h2>How to Reduce Your Fees</h2>
        <ol>
          <li>Concentrate work with fewer Upwork clients to reach the 10% and 5% tiers faster.</li>
          <li>Price for the fee — to net $75/hour on a 20% platform, quote $93.75/hour.</li>
          <li>Use zero-fee platforms (Toptal, Contra) for your highest-value work.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <h3>Is Contra really free?</h3>
        <p>Yes — it&apos;s commission-free for freelancers.</p>
        <h3>How much does Fiverr take?</h3>
        <p>A flat 20% of every order, with no volume discounts.</p>

        <p>Compare your real net pay with the <Link href="/calculators/freelancer-platform-fee-calculator-2026">Freelancer Platform Fee Calculator</Link>, then check your taxes with the <Link href="/calculators/self-employment-tax-calculator-2026">Self Employment Tax Calculator</Link> and <Link href="/calculators/side-hustle-tax-calculator">Side Hustle Tax Calculator</Link>.</p>
      </div>
    </article>
  );
}
