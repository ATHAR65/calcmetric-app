const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "E-Commerce Profit Calculator 2026 — Margin, ROAS & ROI | TheMetricApp",
  description:
    "Calculate your true e-commerce net profit margin, ROAS, ROI, and break-even with US/UK support. Free 2026 profit calculator for Amazon, Shopify, eBay & Etsy sellers.",
  keywords: [
    "ecommerce profit calculator",
    "net margin calculator",
    "ecommerce profitability tool",
    "ROAS calculator",
    "US UK ecommerce profit",
    "amazon seller profit calculator",
    "shopify profit margin calculator",
    "ebay fees profit calculator",
    "etsy profit calculator",
    "return on ad spend calculator",
    "ecommerce ROI calculator",
    "product profit margin calculator",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/ecommerce-net-profit-margin",
  },
  openGraph: {
    title: "E-Commerce Profit Calculator 2026 — Margin, ROAS & ROI | TheMetricApp",
    description:
      "Calculate your true e-commerce net profit margin, ROAS, ROI, and break-even with US/UK support. Free 2026 profit calculator for Amazon, Shopify, eBay & Etsy sellers.",
    url: siteUrl + "/calculators/ecommerce-net-profit-margin",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    title: "E-Commerce Profit Calculator 2026 — Margin, ROAS & ROI | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}
