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
    images: [{ url: "/api/og?title=Credit%20Card%20Payoff%20Calculator%202026%20%E2%80%94%20Snowball%20vs%20Avalanche%20Debt%20Payoff%20%7C%20TheMetricApp&description=Compare%20snowball%20and%20avalanche%20debt%20payoff%20strategies%20with%20our%20free%20calculator.%20See%20how%20much%20interest%20you%20save%20with%20extra%20payments.&type=website", width: 1200, height: 630, alt: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche Debt Payoff | TheMetricApp" }],
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
