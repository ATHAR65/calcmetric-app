const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Budget Calculator 2026 — Budget | TheMetricApp" },
  description: "Create a comprehensive monthly budget with 50/30/20 rule analysis. Free 2026 budget calculator with visual breakdowns for US households.",
  keywords: [
    "budget calculator",
    "monthly budget calculator",
    "budget planner",
    "50 30 20 budget calculator",
    "personal budget calculator",
    "expense tracker",
    "savings rate calculator",
    "free budget calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/budget-calculator" },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Budget Calculator 2026 — Track Income, Expenses &",
    description: "Create a comprehensive monthly budget with our free 2026 budget calculator. 50/30/20 rule analysis included.",
    url: siteUrl + "/calculators/budget-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Budget%20Calculator%202026%20%E2%80%94%20Track%20Income%2C%20Expenses%20%26%20Savings%20Rate%20%7C%20TheMetricApp&description=Create%20a%20comprehensive%20monthly%20budget%20with%20our%20free%202026%20budget%20calculator.%2050%2F30%2F20%20rule%20analysis%20included.&type=website", width: 1200, height: 630, alt: "Budget Calculator 2026 — Track Income, Expenses & Savings Rate | TheMetricApp" }],
  },
  twitter: {
    title: "Budget Calculator 2026 — Track Income, Expenses & Savings" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
