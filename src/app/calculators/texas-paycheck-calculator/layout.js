const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Texas Paycheck Calculator 2026 — Free TX Take-Home Pay Estimator | TheMetricApp",
  description: "Calculate your Texas take-home pay after federal taxes and FICA. No state income tax in TX. Free, instant results.",
  keywords: ["Texas paycheck calculator", "Texas take home pay", "hourly wage calculator Texas", "no state income tax calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/texas-paycheck-calculator",
  },
  openGraph: {
    title: "Texas Paycheck Calculator 2026 — Take-Home Pay After Tax | TheMetricApp",
    description:
      "Calculate your Texas take-home pay with zero state income tax, federal brackets, and FICA. Free 2026 paycheck calculator for Texas employees.",
    url: siteUrl + "/calculators/texas-paycheck-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Texas%20Paycheck%20Calculator%202026%20%E2%80%94%20Take-Home%20Pay%20After%20Tax%20%7C%20TheMetricApp&description=Calculate%20your%20Texas%20take-home%20pay%20with%20zero%20state%20income%20tax%2C%20federal%20brackets%2C%20and%20FICA.%20Free%202026%20paycheck%20calculator%20for%20Texas%20employees.&type=website", width: 1200, height: 630, alt: "Texas Paycheck Calculator 2026 — Take-Home Pay After Tax | TheMetricApp" }],
  },
  twitter: {
    title: "Texas Paycheck Calculator 2026 — Free TX Take-Home Pay Estimator | TheMetricApp",
  }
  , other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_US",
  },
};

export default function Layout({ children }) {
  return children;
}
