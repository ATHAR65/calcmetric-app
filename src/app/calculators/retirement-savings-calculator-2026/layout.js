const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Retirement Savings Calculator 2026 — Are You on Track for Retirement? | TheMetricApp",
  description:
    "Estimate your retirement savings growth, monthly retirement income using the 4% rule, and income replacement rate. Free 2026 retirement calculator.",
  keywords: ["retirement savings calculator", "retirement planner", "4% rule calculator", "how much do I need to retire", "retirement income calculator"],
  alternates: { canonical: siteUrl + "/calculators/retirement-savings-calculator-2026" },
  openGraph: {
    title: "Retirement Savings Calculator 2026 — Are You on Track for Retirement? | TheMetricApp",
    description: "Estimate your retirement savings growth, monthly income using the 4% rule, and income replacement rate. Free 2026 retirement calculator.",
    url: siteUrl + "/calculators/retirement-savings-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Retirement Savings Calculator 2026 — Compound Growth & 4% Rule Projections" }],
  },
  twitter: { title: "Retirement Savings Calculator 2026 — Are You on Track for Retirement? | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
