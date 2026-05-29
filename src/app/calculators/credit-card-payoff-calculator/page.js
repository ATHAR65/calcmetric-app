import Calculator from "./Calculator";

export const metadata = {
  title: "Credit Card Payoff Calculator 2026 — Compare Snowball vs Avalanche Method",
  description: "Free credit card payoff calculator for 2026. Compare snowball vs avalanche debt payoff methods. Add multiple cards and see how extra payments save you thousands in interest.",
  alternates: {
    canonical: "https://www.themetricapp.com/calculators/credit-card-payoff-calculator",
  },
  openGraph: {
    title: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche Debt Payoff | TheMetricApp",
    description: "Compare snowball and avalanche debt payoff strategies with our free calculator. See how much interest you save with extra payments.",
    url: "https://www.themetricapp.com/calculators/credit-card-payoff-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche Method" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credit Card Payoff Calculator 2026 — Compare Snowball vs Avalanche Method",
    description: "Free calculator to compare debt payoff strategies and see how extra payments save you money.",
  },
};

export default function Page() {
  return <Calculator />;
}
