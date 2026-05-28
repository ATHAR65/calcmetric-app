const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Uber Tax Calculator 2026 — Self-Employment Taxes & Deductions | TheMetricApp",
  description:
    "Calculate your estimated self-employment taxes as an Uber driver with mileage deductions at $0.67/mile. Free 2026 1099 tax estimator for rideshare drivers. No signup required.",
  keywords: ["Uber tax calculator", "Uber driver taxes 2026", "rideshare tax estimator", "self employment tax Uber", "1099 rideshare taxes"],
  alternates: {
    canonical: siteUrl + "/calculators/uber-tax-calculator-2026",
  },
  openGraph: {
    title: "Uber Tax Calculator 2026 — Self-Employment Taxes & Deductions | TheMetricApp",
    description:
      "Calculate your estimated self-employment taxes as an Uber driver with mileage deductions at $0.67/mile. Free 2026 1099 tax estimator for rideshare drivers.",
    url: siteUrl + "/calculators/uber-tax-calculator-2026",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Uber Tax Calculator 2026 — Calculate Self-Employment Taxes & Mileage Deductions for Uber Drivers" }],
  },
  twitter: {
    title: "Uber Tax Calculator 2026 — Self-Employment Taxes & Deductions | TheMetricApp",
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
