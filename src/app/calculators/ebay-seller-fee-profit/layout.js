const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "eBay Seller Fee & Profit Calculator 2026 — Net Profit | TheMetricApp",
  description:
    "Calculate eBay final value fees (13.25% + $0.30), your true net profit, and ROI after all selling costs. Free 2026 eBay fee calculator for sellers.",
  keywords: ["eBay fee calculator", "eBay profit calculator", "eBay seller fees", "eBay final value fee"],
  alternates: {
    canonical: siteUrl + "/calculators/ebay-seller-fee-profit",
  },
  openGraph: {
    title: "eBay Seller Fee & Profit Calculator 2026 — Net Profit | TheMetricApp",
    description:
      "Calculate eBay final value fees (13.25% + $0.30), your true net profit, and ROI after all selling costs. Free 2026 eBay fee calculator for sellers.",
    url: siteUrl + "/calculators/ebay-seller-fee-profit",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    title: "eBay Seller Fee & Profit Calculator 2026 — Net Profit | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}
