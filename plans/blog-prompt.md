# 📝 Blog Article Banane Ka Prompt Template

Har blog ke liye 1 file chahiye: `src/app/blog/{blog-slug}/page.js`

---

## Step 1: Directory + File

```bash
mkdir -p "src/app/blog/{blog-slug}"
```

## Step 2: page.js

Blog ka complete structure:

```javascript
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "Blog Title — SEO Keywords & Subtitle",
  description:
    "Meta description 150-160 chars with target keywords...",
  keywords: [
    "keyword1",
    "keyword2",
    // 10-13 keywords
  ],
  alternates: {
    canonical: "/blog/{blog-slug}",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "TheMetricApp",
    title: "Blog OG Title | Subtitle",
    description: "OG description...",
    url: "https://www.themetricapp.com/blog/{blog-slug}",
    publishedTime: "2026-05-30",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Blog Image Alt Text" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title | TheMetricApp",
    description: "Twitter description...",
  },
};

export default function BlogPage() {
  // 3 JSON-LD schemas:
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Question 1?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Detailed answer (40-80 words)...",
        },
      },
      // 6-8 FAQs total
    ],
  };

  const articleSchema = {
    "@type": "BlogPosting",
    headline: "Blog Post Headline for SEO",
    description: "Short description for schema...",
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    author: { "@type": "Organization", name: "TheMetricApp Team" },
    publisher: {
      "@type": "Organization",
      name: "TheMetricApp",
      logo: { "@type": "ImageObject", url: "https://themetricapp.com/logo.svg" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://themetricapp.com/blog/{blog-slug}",
    },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://themetricapp.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://themetricapp.com/blog" },
      { "@type": "ListItem", position: 3, name: "Blog Title", item: "https://themetricapp.com/blog/{blog-slug}" },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <SchemaMarkup data={[articleSchema, breadcrumbSchema, faqSchema]} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#0D9488] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0D9488] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#64748B]">Blog Title</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#F0FDFA] px-3 py-1 text-xs font-semibold text-[#0D9488]">Category</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">May 2026</span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">12 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Blog Title: SEO Keywords &amp; Subtitle
        </h1>

        <p className="text-lg text-[#64748B] leading-relaxed">
          2-3 sentence summary of the article...
        </p>

        {/* Author bio — top */}
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E2E8F0] text-sm text-[#94A3B8]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white font-bold text-xs">M</div>
          <div>
            <p className="font-medium text-[#0F172A]">TheMetricApp Team</p>
            <p>Last Updated: May 30, 2026</p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#475569] prose-p:leading-relaxed prose-a:text-[#0D9488] prose-a:font-medium hover:prose-a:text-[#0F766E] prose-strong:text-[#0F172A] prose-ul:text-[#475569] prose-ol:text-[#475569] prose-li:leading-relaxed">

        {/* SECTION 1: Introduction (600-800 words) */}
        <h2>Introduction</h2>
        <p>
          Strong opening with a compelling stat or hook related to the topic...
        </p>
        <p>
          Background context — explain the problem the calculator solves...
        </p>
        <p>
          That is exactly why we built the{' '}
          <Link href="/calculators/{calculator-slug}">
            <strong>Calculator Name</strong>
          </Link>
          . In this complete guide...
        </p>

        {/* SECTION 2: How to Use (500-700 words) */}
        <h2>How to Use the [Calculator Name]</h2>
        <p>Step-by-step instructions with screenshots described in text...</p>
        <ol>
          <li><strong>Step 1:</strong> Description...</li>
          <li><strong>Step 2:</strong> Description...</li>
          <li><strong>Step 3:</strong> Description...</li>
        </ol>
        <p><strong>Pro tip:</strong> Useful tip for users...</p>

        {/* CTA Box */}
        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#F0FDFA] to-white p-6 my-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D9488] text-white text-2xl">📱</div>
            <div>
              <p className="font-bold text-[#0F172A] text-lg mb-1">Try the [Calculator Name] Now</p>
              <p className="text-sm text-[#64748B] mb-3">Description of what the calculator does...</p>
              <Link href="/calculators/{calculator-slug}" className="inline-flex items-center gap-1.5 rounded-xl bg-[#0D9488] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0F766E] transition-colors shadow-sm">
                Open [Calculator Short Name]
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 3: Complete Formula Breakdown (800-1000 words) */}
        <h2>Complete Formula Breakdown (With 2026 Examples)</h2>
        <p>Explain the math behind the calculator...</p>

        <h3>Formula Name</h3>
        <p><strong>Formula: X = Y × Z</strong></p>
        <p><strong>Example — Scenario description:</strong></p>
        <ul>
          <li>Variable 1: <strong>Value</strong></li>
          <li>Variable 2: <strong>Value</strong></li>
          <li>Result: <strong>Value</strong></li>
        </ul>

        {/* SECTION 4: Deep dive topic (500-800 words) */}
        <h2>Major Topic Heading</h2>
        <p>In-depth discussion of the key concept...</p>

        {/* Comparison Table — Optional */}
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse border border-[#E2E8F0]">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="border border-[#E2E8F0] px-4 py-3 text-left font-semibold text-[#0F172A]">Scenario</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-right font-semibold text-[#0F172A]">Column A</th>
                <th className="border border-[#E2E8F0] px-4 py-3 text-right font-semibold text-[#0F172A]">Column B</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-[#F8FAFC]">
                <td className="border border-[#E2E8F0] px-4 py-3 font-medium">Example</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-right">Value</td>
                <td className="border border-[#E2E8F0] px-4 py-3 text-right">Value</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SECTION 5: Real-Life Examples (800-1000 words) */}
        <h2>Real-Life Examples: Three [Topic] Scenarios for 2026</h2>

        <h3>Scenario 1: [Title]</h3>
        <p>Persona description with financial details...</p>
        <ul>
          <li>Input A: <strong>Value</strong></li>
          <li>Input B: <strong>Value</strong></li>
          <li><strong>Result:</strong> Key finding...</li>
        </ul>
        <p>Analysis of the results and what they mean...</p>

        <h3>Scenario 2: [Title]</h3>
        <p>Different persona...</p>

        <h3>Scenario 3: [Title]</h3>
        <p>Different persona...</p>

        {/* SECTION 6: Tips (500-700 words) */}
        <h2>7 Tips to Improve/Better Use [Topic] in 2026</h2>
        <ol>
          <li><strong>Tip 1.</strong> Explanation...</li>
          <li><strong>Tip 2.</strong> Explanation...</li>
          {/* 7 tips total */}
        </ol>

        {/* SECTION 7: Common Mistakes (400-600 words) */}
        <h2>Common Mistakes to Avoid</h2>
        <ol>
          <li><strong>Mistake 1.</strong> Explanation of why it's bad and what to do instead...</li>
          <li><strong>Mistake 2.</strong> Explanation...</li>
          {/* 5-6 mistakes total */}
        </ol>

        {/* Cross-links to other calculators */}
        <p>
          For a complete financial planning toolkit, pair this with our{' '}
          <Link href="/calculators/related-1"><strong>Related Calculator 1</strong></Link>,{' '}
          <Link href="/calculators/related-2"><strong>Related Calculator 2</strong></Link>, and{' '}
          <Link href="/calculators/related-3"><strong>Related Calculator 3</strong></Link>.
        </p>

        {/* SECTION 8: FAQ (Interactive details) */}
        <h2>Frequently Asked Questions</h2>

        <div className="not-prose space-y-4 my-8">
          {[
            { q: "Question 1?", a: "Detailed answer..." },
            { q: "Question 2?", a: "Detailed answer..." },
            // 6-8 FAQS
          ].map((faq, i) => (
            <details key={i} className="group rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all duration-200 hover:border-[#0D9488]/30">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#0F172A] hover:text-[#0D9488] transition-colors list-none">
                <span>{faq.q}</span>
                <svg className="h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-1 text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* SECTION 9: Conclusion */}
        <h2>Conclusion: [Memorable Closing]</h2>
        <p>Sum up the key takeaways...</p>
        <p>
          Our{' '}
          <Link href="/calculators/{calculator-slug}">
            <strong>Calculator Name</strong>
          </Link>{' '}
          gives you instant answers...
        </p>
        <p><strong>Your next steps:</strong></p>
        <ol>
          <li>Open the calculator and enter your numbers...</li>
          <li>Adjust variables to see different scenarios...</li>
          <li>Pair with these related tools...</li>
        </ol>
      </div>

      {/* Pinterest-Style Image Prompts */}
      <section className="mt-16 pt-10 border-t border-[#E2E8F0]">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Pinterest-Style Image Ideas for This Article</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              prompt: "Detailed Midjourney prompt for a visual infographic...",
              label: "Image 1 Title",
            },
            {
              prompt: "Another Midjourney prompt...",
              label: "Image 2 Title",
            },
            {
              prompt: "Another Midjourney prompt...",
              label: "Image 3 Title",
            },
            {
              prompt: "Another Midjourney prompt...",
              label: "Image 4 Title",
            },
            {
              prompt: "Another Midjourney prompt...",
              label: "Image 5 Title",
            },
            {
              prompt: "Another Midjourney prompt...",
              label: "Image 6 Title",
            },
          ].map((image, i) => (
            <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-4 hover:shadow-lg hover:border-[#0D9488]/20 transition-all duration-200">
              <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#F0FDFA] to-white border border-[#E2E8F0] flex items-center justify-center mb-3">
                <div className="text-center px-3">
                  <div className="text-3xl mb-2">{['📊', '💰', '🎯', '📋', '💡', '📈'][i % 6]}</div>
                  <p className="text-xs font-semibold text-[#0D9488] uppercase tracking-wider">Image Suggestion {i + 1}</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0F172A] mb-1.5">{image.label}</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{image.prompt}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#94A3B8] mt-6 italic">Use these prompts with Midjourney, DALL·E, or Canva AI to create Pinterest-optimized vertical pins (1000×1500px).</p>
      </section>

      {/* Data Sources & Methodology */}
      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D9488] text-white text-xl font-bold">📊</div>
          <div>
            <p className="font-bold text-[#0F172A] mb-2">Data Sources &amp; Methodology</p>
            <p className="text-sm text-[#64748B] leading-relaxed mb-2">
              The information in this guide is sourced from...
            </p>
            <ul className="text-sm text-[#64748B] leading-relaxed space-y-1 list-disc list-inside">
              <li><a href="https://..." target="_blank" rel="noopener noreferrer" className="text-[#0D9488] hover:underline">Source 1</a></li>
              <li><a href="https://..." target="_blank" rel="noopener noreferrer" className="text-[#0D9488] hover:underline">Source 2</a></li>
              {/* 4-6 sources */}
            </ul>
            <p className="text-sm text-[#64748B] leading-relaxed mt-2">
              <strong>Last Updated:</strong> May 2026. Consult a qualified professional...
            </p>
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white font-bold">M</div>
          <div>
            <p className="font-bold text-[#0F172A] mb-1">TheMetricApp Team</p>
            <p className="text-sm text-[#64748B] leading-relaxed">TheMetricApp provides free, accurate financial calculators... (2-3 sentence bio)</p>
          </div>
        </div>
      </div>
    </article>
  );
}
```

---

## ⚠️ Blog Writing Checklist

- [ ] **Metadata:** title, description (150-160 chars), keywords (10-13), OG, Twitter
- [ ] **3 JSON-LD Schemas:** BlogPosting, BreadcrumbList, FAQPage
- [ ] **Breadcrumb nav** — Home > Blog > Current page
- [ ] **Header** — Category badge, date, read time, H1, summary paragraph, Author box
- [ ] **Introduction** — Hook + stat + explanation + link to calculator
- [ ] **How to Use** — Step-by-step with pro tip
- [ ] **CTA Box** — "Try the Calculator Now" with gradient background
- [ ] **Formula Breakdown** — Real examples with math
- [ ] **Deep Dive Section** — Major topic with comparison table
- [ ] **Real-Life Examples** — 3 scenarios (different personas/income levels)
- [ ] **Tips** — 7 numbered tips
- [ ] **Common Mistakes** — 5-6 numbered mistakes
- [ ] **Cross-links** — 3-4 related calculators inline
- [ ] **FAQ** — 6-8 interactive `<details>` elements
- [ ] **Conclusion** — Summary + next steps + link to calculator
- [ ] **Pinterest Prompts** — 6 image ideas with Midjourney prompts
- [ ] **Data Sources** — 4-6 links with descriptions
- [ ] **Author Bio** — 2-3 sentence company description
- [ ] **prose classes** — Include the full prose-slate class list
- [ ] **Dark mode safe** — No hardcoded light-only colors
