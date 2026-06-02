const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "eBay Seller Fee Calculator 2026 — Final Value Fee & Net Profit",
  description: "Calculate eBay final value fees and true net profit on any sale. Covers all categories and shipping. Free tool.",
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
    images: [{ url: "/api/og?title=eBay%20Seller%20Fee%20%26%20Profit%20Calculator%202026%20%E2%80%94%20Net%20Profit%20%7C%20TheMetricApp&description=Calculate%20eBay%20final%20value%20fees%20(13.25%25%20%2B%20%240.30)%2C%20your%20true%20net%20profit%2C%20and%20ROI%20after%20all%20selling%20costs.%20Free%202026%20eBay%20fee%20calculator%20for%20sellers.&type=website", width: 1200, height: 630, alt: "eBay Seller Fee & Profit Calculator 2026 — Net Profit | TheMetricApp" }],
  },
  twitter: {
    title: "eBay Seller Fee Calculator 2026 — Final Value Fee & Net Profit | TheMetricApp",
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
