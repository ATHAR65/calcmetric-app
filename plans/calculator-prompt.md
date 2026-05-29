# 🧮 Naya Calculator Banane Ka Prompt Template

Yeh template use karo jab bhi naya calculator banana ho. Har calculator ke 3 files chahiye:
- `Calculator.js` — Main interactive component
- `layout.js` — Next.js metadata + SEO
- `page.js` — Simple page wrapper

---

## Step 1: Files Create Karo

```bash
mkdir -p "src/app/calculators/{calculator-slug}"
```

Phir 3 files likho:

### 1. Calculator.js

```javascript
"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import RelatedCalculators from "@/components/RelatedCalculators";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmtMonth = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n) => (n || 0).toFixed(1) + "%";

export default function Calculator() {
  // STATE: Har input ke liye ek useState, default values ke saath
  const [input1, setInput1] = useState("1000");

  // CALCULATIONS: Sab math yahan karo
  const val1 = parseFloat(input1) || 0;
  const result1 = val1 * 1.1; // example calculation

  // SCHEMA: Calculator ka basic info
  const schemaData = {
    name: "Calculator Name 2026",
    description: "Short description...",
    url: "https://www.themetricapp.com/calculators/{calculator-slug}",
  };

  return (
    <CalculatorShell
      title="Calculator Title 2026 — SEO-Friendly H1 with Keywords"
      subtitle="Short subtitle explaining what the calculator does in one sentence."
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <ResultCard label="Label 1" value={fmt(result1)} highlight />
          <ResultCard label="Label 2" value={fmt(result2)} sub="Helpful sub-text" />
          {/* Max 6-8 result cards */}
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="input1"
          label="Input Label"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          prefix="$"      // OR: suffix="%" or suffix="years" or suffix="months"
          placeholder="1000"
          helpText="Optional help text"
        />
        {/* Har input ke liye ek — total 5-8 inputs */}
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      {/* E-E-A-T Signals — IMP: Always include */}
      <div className="bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700 rounded-lg p-4 mb-6 text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Last Updated:</strong> May 2026
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Author:</strong> Financial Metrics Team
          </span>
          <span className="text-gray-600 dark:text-slate-300">
            <strong>Sources:</strong>{" "}
            <a href="https://..." target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
              Source Name
            </a>
          </span>
        </div>
      </div>

      {/* SEO Content — 500-1000 words */}
      <h2>How to Use the [Calculator Name]</h2>
      <p>Explain each input field and what the results mean...</p>

      <h2>Formula & Methodology</h2>
      <p>The calculator uses the standard formula: <strong>Result = X × Y</strong>. Explain the math...</p>
      <h3>Sub-section if needed</h3>
      <p>More details...</p>

      {/* Comparison Table — Optional but recommended */}
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse border border-gray-300 dark:border-slate-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-slate-700">
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Scenario</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Result A</th>
              <th className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right font-semibold">Result B</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Example 1", valA: 100, valB: 200 },
            ].map((row) => (
              <tr key={row.label} className="even:bg-gray-50 dark:even:bg-slate-800/50">
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 font-medium">{row.label}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${row.valA}</td>
                <td className="border border-gray-300 dark:border-slate-600 px-4 py-3 text-right">${row.valB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Data Sources */}
      <h2>Data Sources & Methodology</h2>
      <p>Brief methodology description...</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Source Name:</strong> <a href="https://..." target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Link</a></li>
        <li><strong>Another Source:</strong> <a href="https://..." target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Link</a></li>
      </ul>

      {/* FAQs */}
      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>Question 1?</h3>
      <p>Answer...</p>
      <h3>Question 2?</h3>
      <p>Answer...</p>
      {/* At least 5-7 FAQs, each with <h3> + <p> */}

      {/* Related Tools */}
      <h2>Related Tools</h2>
      <ul>
        <li><a href="/calculators/...">Related Calculator 1</a> — Description</li>
        <li><a href="/calculators/...">Related Calculator 2</a> — Description</li>
        <li><a href="/calculators/...">Related Calculator 3</a> — Description</li>
      </ul>

      {/* Related Reading CTA — IMP: Use this exact dark mode pattern */}
      <div className="mt-10 p-4 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 rounded-xl">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          For a complete guide, read our blog post:{" "}
          <a href="/blog/{blog-slug}" className="text-teal-400 underline hover:text-teal-300 transition-colors">
            Blog Post Title
          </a>
          .
        </p>
      </div>

      {/* RelatedCalculators */}
      <RelatedCalculators currentPage="{calculator-slug}" />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Calculator Name 2026",
        "url": "https://www.themetricapp.com/calculators/{slug}",
        "description": "...",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web Browser",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
          { "@type": "ListItem", "position": 2, "name": "Calculator Name", "item": "https://www.themetricapp.com/calculators/{slug}" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Question 1?", acceptedAnswer: { "@type": "Answer", text: "Answer..." } },
          // More FAQs...
        ]
      }) }} />
    </>
  );
}
```

### 2. layout.js

```javascript
const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Calculator Name 2026 — SEO Title with Keywords | TheMetricApp",
  description:
    "Short meta description (150-160 chars) explaining the calculator and its benefit.",
  keywords: [
    "keyword 1",
    "keyword 2",
    "keyword 3",
    // 8-12 keywords total
  ],
  alternates: { canonical: siteUrl + "/calculators/{calculator-slug}" },
  openGraph: {
    title: "Calculator Name 2026 — SEO OG Title | TheMetricApp",
    description: "OG description...",
    url: siteUrl + "/calculators/{calculator-slug}",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Calculator Alt Text" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculator Name 2026 — Twitter Title | TheMetricApp",
    description: "Twitter description...",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
```

### 3. page.js

```javascript
import Calculator from "./Calculator";

export default function Page() {
  return <Calculator />;
}
```

---

## Step 2: Register Calculator in siteConfig.js

Find `src/lib/siteConfig.js` and add to these arrays:

### a) `calculators` array (with comment header):
```javascript
// NEW CALCULATOR — Month 2026
{
  href: "/calculators/{calculator-slug}",
  title: "Calculator Display Name",
  desc: "Short description for grid (max 150 chars).",
  icon: "🎯",  // Choose relevant emoji
  tag: "Category Name",  // See existing tags
},
```

### b) `blogPosts` array:
```javascript
{
  slug: "{blog-slug}",
  title: "Blog Post Title: Subtitle",
  excerpt: "2-3 sentence excerpt...",
  date: "May 30, 2026",
  author: "TheMetricApp Team",
  readTime: "12 min read",
  category: "Category Name",
  tags: ["Tag1", "Tag2", "Tag3"],
},
```

### c) `footerColumns` — Add link to relevant column.

---

## Step 3: Update Homepage (page.js)

Find `src/app/page.js` and add to the `calculators` array:
```javascript
{
  href: "/calculators/{calculator-slug}",
  title: "Calculator Display Name",
  desc: "Short description for homepage grid.",
  icon: "🎯",
  tag: "Category Name",
},
```

---

## Step 4: Update RelatedCalculators.js

Find `src/components/RelatedCalculators.js` and add entry:
```javascript
// NEW — Month 2026
"{calculator-slug}": [
  { href: "/calculators/related-1", title: "Related Calculator 1", icon: "🔗" },
  { href: "/calculators/related-2", title: "Related Calculator 2", icon: "🔗" },
  { href: "/calculators/related-3", title: "Related Calculator 3", icon: "🔗" },
  { href: "/calculators/related-4", title: "Related Calculator 4", icon: "🔗" },
],
```

Also add this calculator as a link in existing related calculators that are in the same category.

---

## Step 5: Build + Code Review

```bash
npm run build 2>&1 | tail -40
```

Fix any errors, then run code review.

---

## ⚠️ Common Mistakes to Avoid

1. ~~**Dark mode colors** — Always use `bg-teal-50 dark:bg-teal-900/20` NOT `bg-teal-900/20` alone~~
2. ~~**Missing Layout export** — layout.js MUST have `export default function Layout({ children }) { return children; }`~~
3. ~~**Stray quotes in JSON-LD** — `name": "..."` will break build; use `name: "..."`~~
4. ~~**Missing imports** — Always import CalculatorShell, InputField, ResultCard, RelatedCalculators~~
5. ~~**`useState` vs `useEffect`** — For simple calculators, `useState` is enough. No need for heavy state management~~
