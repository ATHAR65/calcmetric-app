const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Instacart Tax Calculator 2026 — Shopper Taxes & Mileage | TheMetricApp" },
  description:
    "Free Instacart tax calculator for 2026. SE tax, $0.725/mile deduction, the new OBBBA tips deduction for delivery drivers, and quarterly payment amounts.",
  keywords: [
    "instacart tax calculator",
    "instacart shopper taxes 2026",
    "instacart 1099 calculator",
    "instacart mileage deduction",
    "instacart quarterly taxes",
  ],
  alternates: { canonical: siteUrl + "/calculators/instacart-tax-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Instacart Tax Calculator 2026 — Shopper Taxes, Mileage & Tips Deduction",
    description:
      "SE tax, $0.725/mile, and the new OBBBA tips deduction — what Instacart shoppers actually owe.",
    url: siteUrl + "/calculators/instacart-tax-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Instacart%20Tax%20Calculator%202026&description=SE%20tax%2C%20mileage%2C%20and%20the%20new%20tips%20deduction%20for%20shoppers.&type=article", width: 1200, height: 630, alt: "Instacart Tax Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instacart Tax Calculator 2026",
    description: "SE tax + mileage + OBBBA tips deduction — what shoppers actually owe.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}
