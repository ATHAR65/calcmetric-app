const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Amortization Schedule Calculator 2026 — Full Loan Payment Breakdown | TheMetricApp",
  description:
    "Generate a complete amortization schedule for any loan. Calculate monthly payments, total interest, and payoff date with a year-by-year principal vs interest breakdown. Free 2026 amortization calculator.",
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
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Amortization Schedule Calculator 2026 — Free Loan Tool" }],
  },
  twitter: { title: "Amortization Schedule Calculator 2026 — Full Loan Payment Breakdown | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
