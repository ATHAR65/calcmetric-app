const siteUrl = "https://www.themetricapp.com";

import Calculator from "./Calculator";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "Capital Gains Tax Calculator 2026 — Short & Long-Term Gain Taxes | TheMetricApp",
  description: "Calculate your 2026 capital gains tax. Covers short-term, long-term rates, NIIT surcharge, and state taxes for stocks, crypto, and real estate.",
  keywords: [
    "capital gains tax calculator 2026",
    "long term capital gains tax",
    "short term capital gains tax",
    "capital gains tax brackets 2026",
    "niit tax calculator",
    "investment tax calculator",
    "crypto tax calculator",
    "stock sale tax estimator",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/capital-gains-tax-calculator",
  },
  openGraph: {
    title: "Capital Gains Tax Calculator 2026 | TheMetricApp",
    description:
      "Calculate your 2026 capital gains tax. Federal brackets, NIIT surcharge, and state tax for stocks, crypto, and real estate.",
    url: "https://www.themetricapp.com/calculators/capital-gains-tax-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/api/og?title=Capital%20Gains%20Tax%20Calculator%202026%20%7C%20TheMetricApp&description=Calculate%20your%202026%20capital%20gains%20tax.%20Federal%20brackets%2C%20NIIT%20surcharge%2C%20and%20state%20tax%20for%20stocks%2C%20crypto%2C%20and%20real%20estate.&type=website", width: 1200, height: 630, alt: "Capital Gains Tax Calculator 2026 | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Gains Tax Calculator 2026 | TheMetricApp",
    description:
      "Calculate your 2026 capital gains tax. Federal brackets, NIIT surcharge, and state tax for stocks, crypto, and real estate.",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between short-term and long-term capital gains?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Short-term gains (held ≤ 1 year) are taxed as ordinary income at 10–37%. Long-term gains (held > 1 year) are taxed at preferential rates of 0%, 15%, or 20%, which are significantly lower for most taxpayers.",
        },
      },
      {
        "@type": "Question",
        "name": "How does the 3.8% Net Investment Income Tax (NIIT) work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The NIIT is an additional 3.8% surcharge on capital gains and other investment income when your MAGI exceeds $200,000 (single/HOH) or $250,000 (MFJ). It applies on top of regular capital gains tax.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.themetricapp.com" },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Capital Gains Tax Calculator",
        "item": "https://www.themetricapp.com/calculators/capital-gains-tax-calculator",
      },
    ],
  };

  return (
    <>
      <SchemaMarkup data={[faqSchema, breadcrumbSchema]} />
      <Calculator />
    </>
  );
}
