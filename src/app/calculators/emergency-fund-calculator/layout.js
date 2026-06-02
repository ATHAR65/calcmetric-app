const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Emergency Fund Calculator 2026 — How Much Should You Save? | TheMetricApp",
  description: "Calculate your emergency fund target based on monthly expenses and income stability. Free emergency savings calculator with personalized recommendations.",
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
    images: [{ url: "/api/og?title=Emergency%20Fund%20Calculator%202026%20%E2%80%94%20How%20Much%20Should%20You%20Save%3F%20%7C%20TheMetricApp&description=Calculate%20your%20emergency%20fund%20target%20based%20on%20monthly%20expenses%2C%20income%20stability%2C%20and%20current%20savings.%20Free%202026%20emergency%20savings%20planner.&type=website", width: 1200, height: 630, alt: "Emergency Fund Calculator 2026 — How Much Should You Save? | TheMetricApp" }],
  },
  twitter: {
    title: "Emergency Fund Calculator 2026 — How Much Should You Save? | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
