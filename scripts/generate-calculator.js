/**
 * CLI Code Generator for TheMetricApp
 * Scaffolds new calculators and blogs dynamically.
 * Usage: node scripts/generate-calculator.js
 */

import { promises as fs } from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log('=== TheMetricApp Calculator Generator ===\n');

  const slug = (await question('Enter calculator slug (e.g. shopify-fee-calculator): ')).trim().toLowerCase();
  if (!slug) {
    console.error('❌ Slug is required.');
    process.exit(1);
  }

  const title = (await question('Enter calculator display title (e.g. Shopify Fee Calculator): ')).trim();
  if (!title) {
    console.error('❌ Title is required.');
    process.exit(1);
  }

  const category = (await question('Enter category (e.g. Merchant Fees, Gig Economy, E-Commerce): ')).trim();
  const desc = (await question('Enter meta description: ')).trim();
  const icon = (await question('Enter emoji icon (e.g. 🛍️): ')).trim() || '📊';

  rl.close();

  const year = 2026;
  const siteUrl = 'https://www.themetricapp.com';

  // Paths
  const calcDir = path.join(process.cwd(), 'src', 'app', 'calculators', slug);
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog', `${slug}-${year}`);

  // Ensure directories exist
  await fs.mkdir(calcDir, { recursive: true });
  await fs.mkdir(blogDir, { recursive: true });

  console.log('\nCreating directories...');

  // 1. Create client-side Calculator.js component template
  const calcCode = `"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";

const fmt = (n) => "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const input1 = parseFloat(value1) || 0;
  const input2 = parseFloat(value2) || 0;

  // Example Calculation Logic (Replace with actual formulas)
  const total = input1 + input2;
  const result1 = input1 * 0.95;
  const result2 = total * 0.12;

  const schemaData = {
    name: "${title}",
    description: "${desc}",
    url: "${siteUrl}/calculators/${slug}",
  };

  return (
    <CalculatorShell
      title="${title} ${year} — Free Calculator & Estimator"
      subtitle="${desc}"
      schemaData={schemaData}
      results={
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ResultCard label="Input 1" value={fmt(input1)} />
          <ResultCard label="Input 2" value={fmt(input2)} />
          <ResultCard label="Estimated Total" value={fmt(total)} highlight />
          <ResultCard label="Net Outcome" value={fmt(result1)} highlight />
        </div>
      }
      seoContent={<SEOContent />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="val1"
          label="Enter First Value"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          prefix="$"
          placeholder="1000"
        />
        <InputField
          id="val2"
          label="Enter Second Value"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          prefix="$"
          placeholder="50"
        />
      </div>
    </CalculatorShell>
  );
}

function SEOContent() {
  return (
    <>
      <h2>How to Use the ${title}</h2>
      <p>
        Use this free tool to estimate your calculations instantly. Enter the first and second value in the fields above.
        The results card will update automatically with no page refreshes.
      </p>

      <h2>Detailed Formula Breakdown</h2>
      <h3>Calculation Method</h3>
      <p>
        The formula is calculated by adding input 1 to input 2. Operating overhead can be subtracted...
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <h3>How accurate is this tool?</h3>
      <p>
        This calculator is designed for estimation and educational purposes. Always cross-verify with official figures.
      </p>

      <div className="mt-10 p-4 bg-indigo-900/20 border border-indigo-700 rounded-xl">
        <p className="text-sm font-semibold text-#6366F1 uppercase tracking-wider mb-2">📖 Related Reading</p>
        <p className="text-slate-300 text-sm leading-relaxed">
          For an in-depth breakdown of calculations and scenarios, read our companion guide:{" "}
          <a href="/blog/${slug}-${year}" className="text-#6366F1 underline hover:text-indigo-300 transition-colors">
            ${title} ${year} Guide
          </a>.
        </p>
      </div>

      <h2>Related Tools</h2>
      <ul>
        <li><a href="/calculators/doordash-tax-estimator">DoorDash Tax Estimator</a></li>
        <li><a href="/calculators/stripe-fee-merchant-calculator">Stripe Fee Calculator</a></li>
      </ul>
    </>
  );
}
`;

  await fs.writeFile(path.join(calcDir, 'Calculator.js'), calcCode);
  console.log(`Created: src/app/calculators/${slug}/Calculator.js`);

  // 2. Create Server-side page.js wrapper
  const serverPageCode = `import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "${title} ${year} — Calculate Online Instantly",
  description: "${desc}",
  keywords: ["${title.toLowerCase()} ${year}", "${slug.replace(/-/g, ' ')}", "${category.toLowerCase()}"],
  alternates: {
    canonical: `${siteUrl}/calculators/${slug}`,
  },
  openGraph: {
    title: "${title} ${year} | TheMetricApp",
    description: "${desc}",
    url: "https://www.themetricapp.com/calculators/${slug}",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "${title} ${year} | TheMetricApp",
    description: "${desc}",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to use this calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fill in the required fields and calculations will update instantly in real-time."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
      { "@type": "ListItem", "position": 2, "name": "${title}", "item": "https://www.themetricapp.com/calculators/${slug}" }
    ]
  };

  return (
    <>
      <SchemaMarkup data={[faqSchema, breadcrumbSchema]} />
      <Calculator />
    </>
  );
}
`;

  await fs.writeFile(path.join(calcDir, 'page.js'), serverPageCode);
  console.log(`Created: src/app/calculators/${slug}/page.js`);

  // 3. Create corresponding blog article page.js template
  const blogPageCode = `import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "${title} ${year}: Ultimate Guide",
  description: "Learn how to use the ${title} for ${year}. Detailed formulas, step-by-step math examples, and expert strategies to optimize your ${category.toLowerCase()}.",
  alternates: {
    canonical: `${siteUrl}/blog/${slug}-${year}`,
  },
  openGraph: {
    title: "${title} ${year}: Ultimate Guide | TheMetricApp",
    description: "Learn how to use the ${title} for ${year}. Detailed formulas, step-by-step math examples, and expert strategies.",
    url: "https://www.themetricapp.com/blog/${slug}-${year}",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "${new Date().toISOString().split('T')[0]}",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "${title} ${year}: Ultimate Guide | TheMetricApp",
    description: "Learn how to use the ${title} for ${year}.",
  },
};

export default function BlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the formula behind this calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The formula sums up input variables and applies standard tax or processing schedules."
        }
      }
    ]
  };

  const articleSchema = {
    "@type": "BlogPosting",
    "headline": "${title} ${year}: Ultimate Guide",
    "description": "Learn how to use the ${title} for ${year}. Detailed formulas, step-by-step math examples, and expert strategies.",
    "datePublished": "${new Date().toISOString().split('T')[0]}",
    "dateModified": "${new Date().toISOString().split('T')[0]}",
    "author": {
      "@type": "Organization",
      "name": "TheMetricApp Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TheMetricApp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.themetricapp.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.themetricapp.com/blog/${slug}-${year}"
    }
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.themetricapp.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "${title} Guide", "item": "https://www.themetricapp.com/blog/${slug}-${year}" }
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
        <span className="text-[#64748B]">${title} ${year}</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">
            ${category}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">
            May ${year}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          ${title} ${year}: Ultimate Guide
        </h1>
        <p className="text-lg text-[#64748B] leading-relaxed">
          Learn how to use this tool, understand the calculations, and optimize your financials.
        </p>
      </header>

      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>
        <p>
          Managing calculations is essential in ${year}. In this guide, we cover the exact formula and variables needed to optimize your ${category.toLowerCase()} outcomes.
        </p>
        
        <h2>How to Calculate</h2>
        <p>
          Follow these guidelines when entering your information into the calculator.
        </p>

        <div className="not-prose rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#EEF2FF] to-white p-6 my-8">
          <p className="font-bold text-[#0F172A] text-lg mb-1">Try the Calculator Now</p>
          <p className="text-sm text-[#64748B] mb-3">Calculate in real-time on our official tool page.</p>
          <Link href="/calculators/${slug}" className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4F46E5] transition-colors">
            Open ${title}
          </Link>
        </div>
      </div>
    </article>
  );
}
`;

  await fs.writeFile(path.join(blogDir, 'page.js'), blogPageCode);
  console.log(`Created: src/app/blog/${slug}-${year}/page.js`);

  console.log('\nAdding registration entry suggestions:');
  console.log(`1. Add to src/app/page.js:
  {
    href: "/calculators/${slug}",
    title: "${title}",
    desc: "${desc}",
    icon: "${icon}",
    tag: "${category}",
  }`);

  console.log(`2. Add to src/components/Header.js:
  {
    href: "/calculators/${slug}",
    title: "${title}",
    icon: "${icon}",
    tag: "${category}",
  }`);

  console.log('\n🎉 Successfully scaffolded files! Happy coding!');
}

main().catch(console.error);
