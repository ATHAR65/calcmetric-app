const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Savings Goal Calculator 2026 — Reach Your Financial Target Faster | TheMetricApp",
  description:
    "Calculate how your savings will grow over time with regular contributions and compound interest. Free 2026 savings goal calculator with personalized projections for any financial goal — retirement, education, or major purchase.",
  keywords: [
    "savings goal calculator",
    "savings calculator",
    "compound interest calculator",
    "future value calculator",
    "monthly savings calculator",
    "retirement savings calculator",
    "goal savings calculator",
    "personal finance calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/savings-goal-calculator" },
  openGraph: {
    title: "Savings Goal Calculator 2026 — Reach Your Financial Target Faster | TheMetricApp",
    description: "Calculate how your savings will grow over time with regular contributions and compound interest. Free 2026 savings goal calculator with year-by-year projections.",
    url: siteUrl + "/calculators/savings-goal-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Savings%20Goal%20Calculator%202026%20%E2%80%94%20Reach%20Your%20Financial%20Target%20Faster%20%7C%20TheMetricApp&description=Calculate%20how%20your%20savings%20will%20grow%20over%20time%20with%20regular%20contributions%20and%20compound%20interest.%20Free%202026%20savings%20goal%20calculator%20with%20year-by-year%20projections.&type=website", width: 1200, height: 630, alt: "Savings Goal Calculator 2026 — Reach Your Financial Target Faster | TheMetricApp" }],
  },
  twitter: { title: "Savings Goal Calculator 2026 — Reach Your Financial Target Faster | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
