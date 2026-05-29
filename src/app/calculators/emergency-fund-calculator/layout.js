const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Emergency Fund Calculator 2026 — How Much Should You Save for a Rainy Day? | TheMetricApp",
  description:
    "Calculate your emergency fund target based on monthly expenses, income stability, and current savings. Free 2026 emergency savings calculator with personalized recommendations.",
  keywords: [
    "emergency fund calculator",
    "emergency savings calculator",
    "how much emergency fund",
    "emergency fund target",
    "6 month emergency fund",
    "emergency savings goal",
    "rainy day fund calculator",
    "personal finance calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/emergency-fund-calculator" },
  openGraph: {
    title: "Emergency Fund Calculator 2026 — How Much Should You Save? | TheMetricApp",
    description: "Calculate your emergency fund target based on monthly expenses, income stability, and current savings. Free 2026 emergency savings planner.",
    url: siteUrl + "/calculators/emergency-fund-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Emergency Fund Calculator 2026 — Free Emergency Savings Planner" }],
  },
  twitter: { title: "Emergency Fund Calculator 2026 — How Much Should You Save? | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
