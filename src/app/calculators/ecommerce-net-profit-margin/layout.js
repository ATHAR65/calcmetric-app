const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "E-Commerce Profit Margin Calculator 2026 — True Net Profit After Fees | TheMetricApp",
  description: "Calculate your real e-commerce profit margin after platform fees, COGS & shipping. Works for Amazon, Shopify, eBay & Etsy.",
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
    images: [{ url: "/api/og?title=E-Commerce%20Profit%20Calculator%202026%20%E2%80%94%20Margin%2C%20ROAS%20%26%20ROI%20%7C%20TheMetricApp&description=Calculate%20your%20true%20e-commerce%20net%20profit%20margin%2C%20ROAS%2C%20ROI%2C%20and%20break-even%20with%20US%2FUK%20support.%20Free%202026%20profit%20calculator%20for%20Amazon%2C%20Shopify%2C%20eBay%20%26%20Etsy%20sellers.&type=website", width: 1200, height: 630, alt: "E-Commerce Profit Calculator 2026 — Margin, ROAS & ROI | TheMetricApp" }],
  },
  twitter: {
    title: "E-Commerce Profit Margin Calculator 2026 — True Net Profit After Fees | TheMetricApp",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_US",
  },
};

export default function Layout({ children }) {
  return children;
}
