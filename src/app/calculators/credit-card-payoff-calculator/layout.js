const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche",
  description: "Compare snowball vs avalanche debt payoff methods. Calculate how long it takes to pay off credit card debt and how much interest you save with extra payments. Free 2026 calculator.",
  keywords: [
    "credit card payoff calculator",
    "snowball method calculator",
    "avalanche method calculator",
    "credit card debt payoff",
    "pay off credit cards faster",
    "debt repayment calculator",
    "credit card interest calculator",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/credit-card-payoff-calculator",
  },
  openGraph: {
    title: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche Method | TheMetricApp",
    description:
      "Compare snowball and avalanche debt payoff strategies. Add multiple cards and see exactly how long it takes to become debt-free. Free credit card payoff calculator.",
    url: siteUrl + "/calculators/credit-card-payoff-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=Credit%20Card%20Payoff%20Calculator%202026%20%E2%80%94%20Snowball%20vs%20Avalanche%20%7C%20TheMetricApp&description=Compare%20snowball%20vs%20avalanche%20debt%20payoff%20methods.%20Calculate%20how%20long%20to%20pay%20off%20credit%20card%20debt%20and%20save%20on%20interest.&type=website", width: 1200, height: 630, alt: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche | TheMetricApp" }],
  },
  twitter: {
    title: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche | TheMetricApp",
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
