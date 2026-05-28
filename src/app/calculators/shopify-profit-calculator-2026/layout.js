const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Shopify Profit Calculator 2026 — Fees, Net Profit & Margin | TheMetricApp",
  description:
    "Calculate Shopify store profits including subscription fees, transaction fees, payment processing, and COGS. Free 2026 profit calculator for Shopify sellers.",
  keywords: ["Shopify profit calculator", "Shopify fees", "Shopify net profit", "Shopify margin calculator", "e-commerce profit calculator"],
  alternates: { canonical: siteUrl + "/calculators/shopify-profit-calculator-2026" },
  openGraph: {
    title: "Shopify Profit Calculator 2026 — Fees, Net Profit & Margin | TheMetricApp",
    description: "Calculate Shopify store profits including subscription, transaction, and payment processing fees. Free 2026 profit calculator.",
    url: siteUrl + "/calculators/shopify-profit-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Shopify Profit Calculator 2026 — Calculate Fees, Net Profit & Margin" }],
  },
  twitter: { title: "Shopify Profit Calculator 2026 — Fees, Net Profit & Margin | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
