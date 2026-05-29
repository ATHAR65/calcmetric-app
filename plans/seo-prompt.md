# 🔍 SEO Update Patterns

## Calculator layout.js — SEO Metadata Structure

```javascript
const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Calculator Name 2026 — Primary Keyword & Secondary Keyword | TheMetricApp",
  description:
    "Action-oriented meta description (150-160 chars) with primary keyword near the start. Include benefit or result user gets.",
  keywords: [
    "primary keyword",
    "secondary keyword",
    "related keyword 1",
    "related keyword 2",
    // 8-12 keywords total — include year (2026)
  ],
  alternates: { canonical: siteUrl + "/calculators/{slug}" },
  openGraph: {
    title: "Calculator Name 2026 — OG Title Variation | TheMetricApp",
    description: "OG description (slightly different from meta description)",
    url: siteUrl + "/calculators/{slug}",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Descriptive alt text with keywords" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Card Title | TheMetricApp",
    description: "Twitter description (can match OG)",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};
```

## Blog layout.js — SEO Metadata Structure

Blog ke andar hi `export const metadata` hota hai (alag layout.js nahi hota).

```javascript
export const metadata = {
  title: "Blog Title: SEO Keywords & Subtitle",
  description: "150-160 chars...",
  keywords: ["kw1", "kw2", /* 10-13 total */],
  alternates: { canonical: "/blog/{slug}" },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "TheMetricApp",
    title: "Blog Title: Keywords | TheMetricApp",
    description: "...",
    url: "https://www.themetricapp.com/blog/{slug}",
    publishedTime: "2026-MM-DD",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "..." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Title | TheMetricApp",
    description: "...",
  },
};
```

## JSON-LD Schema Patterns

### 1. WebApplication (Calculator page)
```javascript
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Calculator Name 2026",
  "url": "https://www.themetricapp.com/calculators/{slug}",
  "description": "...",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}
```

### 2. BlogPosting (Blog page)
```javascript
{
  "@type": "BlogPosting",
  "headline": "Full Blog Post Title",
  "description": "...",
  "datePublished": "2026-MM-DD",
  "dateModified": "2026-MM-DD",
  "author": { "@type": "Organization", "name": "TheMetricApp Team" },
  "publisher": {
    "@type": "Organization", "name": "TheMetricApp",
    "logo": { "@type": "ImageObject", "url": "https://themetricapp.com/logo.svg" }
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://themetricapp.com/blog/{slug}" }
}
```

### 3. BreadcrumbList (Both pages)
```javascript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
    { "@type": "ListItem", "position": 2, "name": "Page Name", "item": "https://www.themetricapp.com/calculators/{slug}" }
  ]
}
```

### 4. FAQPage (Both pages)
```javascript
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Q?", acceptedAnswer: { "@type": "Answer", text: "A..." } }
  ]
}
```

### 5. WebSite (Homepage only — in page.js)
```javascript
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TheMetricApp",
  "url": "https://www.themetricapp.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://www.themetricapp.com/?s={search_term_string}" },
    "query-input": "required name=search_term_string"
  }
}
```

### 6. Organization (Homepage only — in page.js)
```javascript
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TheMetricApp",
  "url": "https://www.themetricapp.com",
  "logo": "https://www.themetricapp.com/logo.svg",
  "sameAs": ["https://twitter.com/themetricapp"]
}
```

## E-E-A-T Signals (Calculator SEOContent me)

```jsx
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
      <a href="..." target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Source</a>
    </span>
  </div>
</div>
```

## Data Sources Section (Blog me bhi yahi pattern)

```jsx
<div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-6">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D9488] text-white text-xl font-bold">📊</div>
    <div>
      <p className="font-bold text-[#0F172A] mb-2">Data Sources &amp; Methodology</p>
      <p className="text-sm text-[#64748B] leading-relaxed mb-2">The information...</p>
      <ul className="text-sm text-[#64748B] leading-relaxed space-y-1 list-disc list-inside">
        <li><a href="..." target="_blank" rel="noopener noreferrer" className="text-[#0D9488] hover:underline">Source Name</a></li>
      </ul>
    </div>
  </div>
</div>
```

## SiteConfig Patterns

### Calculator Entry Format
```javascript
{
  href: "/calculators/{slug}",
  title: "Display Name",
  desc: "160 char max description. Action-oriented. Include who it's for.",
  icon: "🎯",
  tag: "Category",  // Must match existing tags
}
```

### Blog Post Entry Format
```javascript
{
  slug: "blog-slug",
  title: "Title: Subtitle with Keywords",
  excerpt: "2-3 sentence excerpt summarizing the article...",
  date: "May 30, 2026",
  author: "TheMetricApp Team",
  readTime: "12 min read",
  category: "Category",
  tags: ["Tag1", "Tag2", "Tag3"],
}
```

## RelatedCalculators.js Patterns

```javascript
"{slug}": [
  { href: "/calculators/related-1", title: "Related Calc 1", icon: "🔗" },
  { href: "/calculators/related-2", title: "Related Calc 2", icon: "🔗" },
  { href: "/calculators/related-3", title: "Related Calc 3", icon: "🔗" },
  { href: "/calculators/related-4", title: "Related Calc 4", icon: "🔗" },
],
```

Rules:
- Har category ke calculators ek doosre se link karein
- Cross-category links bhi ho sakte hain (e.g., Tax → Retirement)
- Har naye calculator ko at least 2 existing calculators mein add karo as related
