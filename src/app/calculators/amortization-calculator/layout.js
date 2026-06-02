const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Amortization Schedule Calculator 2026 — Full Payment Breakdown | TheMetricApp",
  description: "Generate a complete amortization schedule for any loan. Monthly payments, total interest, and year-by-year principal vs interest breakdown. Free calculator.",
  keywords: [
    "amortization calculator",
    "amortization schedule calculator",
    "loan amortization calculator",
    "loan payment calculator",
    "monthly payment calculator",
    "principal interest calculator",
    "amortization table",
    "loan payoff calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/amortization-calculator" },
  openGraph: {
    title: "Amortization Schedule Calculator 2026 — Full Loan Payment Breakdown | TheMetricApp",
    description: "Generate a complete amortization schedule for any loan. Monthly payments, total interest, year-by-year breakdown. Free 2026 amortization calculator.",
    url: siteUrl + "/calculators/amortization-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Amortization%20Schedule%20Calculator%202026%20%E2%80%94%20Full%20Loan%20Payment%20Breakdown%20%7C%20TheMetricApp&description=Generate%20a%20complete%20amortization%20schedule%20for%20any%20loan.%20Monthly%20payments%2C%20total%20interest%2C%20year-by-year%20breakdown.%20Free%202026%20amortization%20calculator.&type=website", width: 1200, height: 630, alt: "Amortization Schedule Calculator 2026 — Full Loan Payment Breakdown | TheMetricApp" }],
  },
  twitter: {
    title: "Amortization Schedule Calculator 2026 — Full Payment Breakdown | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
