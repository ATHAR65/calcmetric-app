const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Uber Driver Tax Calculator 2026 | TheMetricApp" },
  description: "Calculate your Uber driver taxes in seconds. SE tax, quarterly estimates & mileage deductions. Free, instant.",
  keywords: ["Uber tax calculator", "Uber driver taxes 2026", "rideshare tax estimator", "self employment tax Uber", "1099 rideshare taxes"],
  alternates: {
    canonical: siteUrl + "/calculators/uber-tax-calculator-2026",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Uber Tax Calculator 2026 — Self-Employment Taxes &",
    description:
      "Calculate your estimated self-employment taxes as an Uber driver with mileage deductions at $0.67/mile. Free 2026 1099 tax estimator for rideshare drivers.",
    url: siteUrl + "/calculators/uber-tax-calculator-2026",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Uber%20Tax%20Calculator%202026%20%E2%80%94%20Self-Employment%20Taxes%20%26%20Deductions%20%7C%20TheMetricApp&description=Calculate%20your%20estimated%20self-employment%20taxes%20as%20an%20Uber%20driver%20with%20mileage%20deductions%20at%20%240.67%2Fmile.%20Free%202026%201099%20tax%20estimator%20for%20rideshare%20drivers.&type=website", width: 1200, height: 630, alt: "Uber Tax Calculator 2026 — Self-Employment Taxes & Deductions | TheMetricApp" }],
  },
  twitter: {
    title: "Uber Driver Tax Calculator 2026 — Free 1099 & SE Tax",
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
