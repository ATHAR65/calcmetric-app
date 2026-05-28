const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "New York Paycheck Calculator 2026 — Take-Home Pay After NY State Tax | TheMetricApp",
  description:
    "Calculate your New York take-home pay with NY state income tax, federal brackets, and FICA. Free 2026 paycheck calculator for New York employees and hourly workers.",
  keywords: ["New York paycheck calculator", "NY take home pay", "New York state income tax", "NY salary calculator", "NYC paycheck calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/new-york-paycheck-calculator-2026",
  },
  openGraph: {
    title: "New York Paycheck Calculator 2026 — Take-Home Pay After NY State Tax | TheMetricApp",
    description:
      "Calculate your New York take-home pay with NY state income tax, federal brackets, and FICA. Free 2026 paycheck calculator for New York employees.",
    url: siteUrl + "/calculators/new-york-paycheck-calculator-2026",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "New York Paycheck Calculator 2026 — Calculate Take-Home Pay with NY State Income Tax" }],
  },
  twitter: {
    title: "New York Paycheck Calculator 2026 — Take-Home Pay After NY State Tax | TheMetricApp",
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
