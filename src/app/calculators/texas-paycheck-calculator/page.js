import Calculator from "./Calculator";


export const metadata = {
  title: "Texas Paycheck Calculator 2026 — Calculate Take-Home Pay with Zero State Income Tax",
  description: "Calculate your take-home pay in Texas with federal income tax, FICA, and zero state income tax.",
  alternates: {
    canonical: "/calculators/texas-paycheck-calculator",
  },
  openGraph: {
    title: "Texas Paycheck Calculator 2026 — Calculate Take-Home Pay with Zero State Income Tax | TheMetricApp",
    description: "Calculate your take-home pay in Texas with federal income tax, FICA, and zero state income tax.",
    url: "https://www.themetricapp.com/calculators/texas-paycheck-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Paycheck Calculator 2026 — Calculate Take-Home Pay with Zero State Income Tax | TheMetricApp",
    description: "Calculate your take-home pay in Texas with federal income tax, FICA, and zero state income tax.",
  },
};

export default function Page() {
  return <Calculator />;
}
