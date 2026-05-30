const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Budget Calculator 2026 — Track Income, Expenses & Savings Rate | TheMetricApp",
  description:
    "Create a comprehensive monthly budget with our free 2026 budget calculator. Track income, expenses, and savings with 50/30/20 rule analysis and visual breakdowns.",
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
  openGraph: {
    title: "Budget Calculator 2026 — Track Income, Expenses & Savings Rate | TheMetricApp",
    description: "Create a comprehensive monthly budget with our free 2026 budget calculator. 50/30/20 rule analysis included.",
    url: siteUrl + "/calculators/budget-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Budget Calculator 2026 — Free Monthly Budget Planner" }],
  },
  twitter: { title: "Budget Calculator 2026 — Track Income, Expenses & Savings Rate | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
