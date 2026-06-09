const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Florida Paycheck Calculator 2026 | TheMetricApp" },
  description:
    "Calculate your Florida take-home pay. No state income tax in FL. Free paycheck calculator with federal tax & FICA — Free, no signup required.",
  keywords: ["Florida paycheck calculator", "Florida take home pay", "no state income tax Florida", "FL salary calculator", "Florida hourly wage calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/florida-paycheck-calculator-2026",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Florida Paycheck Calculator 2026 — Take-Home Pay No",
    description:
    "Calculate your Florida take-home pay with zero state income tax, federal brackets, and FICA. Free 2026 paycheck calculator for Florida employees.",
    url: siteUrl + "/calculators/florida-paycheck-calculator-2026",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Florida%20Paycheck%20Calculator%202026%20%E2%80%94%20Take-Home%20Pay%20No%20State%20Tax%20%7C%20TheMetricApp&description=Calculate%20your%20Florida%20take-home%20pay%20with%20zero%20state%20income%20tax%2C%20federal%20brackets%2C%20and%20FICA.%20Free%202026%20paycheck%20calculator%20for%20Florida%20employees.&type=website", width: 1200, height: 630, alt: "Florida Paycheck Calculator 2026 — Take-Home Pay No State Tax" }],
  },
  twitter: {
    title: "Florida Paycheck Calculator 2026 — FL Take-Home Pay",
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
