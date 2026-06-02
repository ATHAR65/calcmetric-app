const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Hourly Wage to Annual Salary Calculator 2026 — Free US Converter | TheMetricApp",
  description: "Convert hourly wage to annual salary instantly. Calculate weekly, monthly & yearly earnings. Free US wage calculator.",
  keywords: [
    "hourly wage calculator",
    "hourly to annual salary",
    "hourly to salary converter",
    "hourly rate calculator",
    "overtime calculator",
    "salary calculator 2026",
    "paycheck calculator",
    "wage calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/hourly-wage-calculator-us" },
  openGraph: {
    title: "Hourly Wage Calculator (US) 2026 — Hourly to Annual Salary Converter | TheMetricApp",
    description: "Convert hourly wage to annual salary with overtime and taxes. Free 2026 US hourly wage calculator.",
    url: siteUrl + "/calculators/hourly-wage-calculator-us", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Hourly%20Wage%20Calculator%20(US)%202026%20%E2%80%94%20Hourly%20to%20Annual%20Salary%20Converter%20%7C%20TheMetricApp&description=Convert%20hourly%20wage%20to%20annual%20salary%20with%20overtime%20and%20taxes.%20Free%202026%20US%20hourly%20wage%20calculator.&type=website", width: 1200, height: 630, alt: "Hourly Wage Calculator (US) 2026 — Hourly to Annual Salary Converter | TheMetricApp" }],
  },
  twitter: {
    title: "Hourly Wage to Annual Salary Calculator 2026 — Free US Converter | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
