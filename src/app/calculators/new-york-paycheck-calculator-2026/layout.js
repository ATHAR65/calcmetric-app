const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "New York Paycheck Calculator 2026 — Free NY Take-Home Pay Estimator",
  description: "Calculate your New York take-home pay after state, city, and federal taxes. Free NY paycheck estimator. No signup.",
  keywords: ["New York paycheck calculator", "NY take home pay", "New York state income tax", "NY salary calculator", "NYC paycheck calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/new-york-paycheck-calculator-2026",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "New York Paycheck Calculator 2026 — Take-Home Pay After NY State Tax | TheMetricApp",
    description:
      "Calculate your New York take-home pay with NY state income tax, federal brackets, and FICA. Free 2026 paycheck calculator for New York employees.",
    url: siteUrl + "/calculators/new-york-paycheck-calculator-2026",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=New%20York%20Paycheck%20Calculator%202026%20%E2%80%94%20Take-Home%20Pay%20After%20NY%20State%20Tax%20%7C%20TheMetricApp&description=Calculate%20your%20New%20York%20take-home%20pay%20with%20NY%20state%20income%20tax%2C%20federal%20brackets%2C%20and%20FICA.%20Free%202026%20paycheck%20calculator%20for%20New%20York%20employees.&type=website", width: 1200, height: 630, alt: "New York Paycheck Calculator 2026 — Take-Home Pay After NY State Tax | TheMetricApp" }],
  },
  twitter: {
    title: "New York Paycheck Calculator 2026 — Free NY Take-Home Pay Estimator | TheMetricApp",
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
