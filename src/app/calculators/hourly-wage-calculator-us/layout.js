const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Hourly Wage Calculator (US) 2026 — Hourly to Annual Salary Converter | TheMetricApp",
  description:
    "Convert your hourly wage to annual, monthly, bi-weekly, and daily salary. Free 2026 US hourly wage calculator with overtime, FICA taxes, and federal withholding estimates.",
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
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Hourly Wage Calculator (US) 2026 — Free Salary Tool" }],
  },
  twitter: { title: "Hourly Wage Calculator (US) 2026 — Hourly to Annual Salary Converter | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
