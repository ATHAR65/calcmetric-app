const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Texas Paycheck Calculator 2026 — Take-Home Pay After Tax | TheMetricApp",
  description:
    "Calculate your Texas take-home pay with zero state income tax, federal brackets, and FICA. Free 2026 paycheck calculator for Texas employees and hourly workers.",
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
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Texas Paycheck Calculator 2026 — Calculate Take-Home Pay with Zero State Income Tax" }],
  },
  twitter: {
    title: "Texas Paycheck Calculator 2026 — Take-Home Pay After Tax | TheMetricApp",
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
