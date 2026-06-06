const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Retirement Savings Calculator 2026 — Track | TheMetricApp" },
  description: "Estimate if you're on track for retirement with the 4% rule, savings growth projections, and income replacement rate. Free 2026 retirement calculator.",
  keywords: ["retirement savings calculator", "retirement planner", "4% rule calculator", "how much do I need to retire", "retirement income calculator"],
  alternates: { canonical: siteUrl + "/calculators/retirement-savings-calculator-2026" },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Retirement Savings Calculator 2026 — Are You on Track",
    description: "Estimate your retirement savings growth, monthly income using the 4% rule, and income replacement rate. Free 2026 retirement calculator.",
    url: siteUrl + "/calculators/retirement-savings-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Retirement%20Savings%20Calculator%202026%20%E2%80%94%20Are%20You%20on%20Track%20for%20Retirement%3F%20%7C%20TheMetricApp&description=Estimate%20your%20retirement%20savings%20growth%2C%20monthly%20income%20using%20the%204%25%20rule%2C%20and%20income%20replacement%20rate.%20Free%202026%20retirement%20calculator.&type=website", width: 1200, height: 630, alt: "Retirement Savings Calculator 2026 — Are You on Track for Retirement? | TheMetricApp" }],
  },
  twitter: {
    title: "Retirement Savings Calculator 2026 — Are You on Track?" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
