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
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    title: "Texas Paycheck Calculator 2026 — Take-Home Pay After Tax | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}
