const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Florida Paycheck Calculator 2026 — Take-Home Pay No State Tax | TheMetricApp",
  description:
    "Calculate your Florida take-home pay with zero state income tax, federal brackets, and FICA. Free 2026 paycheck calculator for Florida employees and hourly workers.",
  keywords: ["Florida paycheck calculator", "Florida take home pay", "no state income tax Florida", "FL salary calculator", "Florida hourly wage calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/florida-paycheck-calculator-2026",
  },
  openGraph: {
    title: "Florida Paycheck Calculator 2026 — Take-Home Pay No State Tax | TheMetricApp",
    description:
      "Calculate your Florida take-home pay with zero state income tax, federal brackets, and FICA. Free 2026 paycheck calculator for Florida employees.",
    url: siteUrl + "/calculators/florida-paycheck-calculator-2026",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Florida Paycheck Calculator 2026 — Calculate Take-Home Pay with Zero State Income Tax" }],
  },
  twitter: {
    title: "Florida Paycheck Calculator 2026 — Take-Home Pay No State Tax | TheMetricApp",
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
