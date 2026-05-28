const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Home Affordability Calculator 2026 — How Much House Can You Afford? | TheMetricApp",
  description:
    "Calculate how much house you can afford based on income, down payment, debts, and interest rates. Free 2026 home affordability calculator with DTI and 28/36 rule.",
  keywords: ["home affordability calculator", "how much house can I afford", "mortgage affordability", "home buying calculator", "DTI calculator"],
  alternates: { canonical: siteUrl + "/calculators/home-affordability-calculator-2026" },
  openGraph: {
    title: "Home Affordability Calculator 2026 — How Much House Can You Afford? | TheMetricApp",
    description: "Calculate how much house you can afford based on income, down payment, debts, and rates. Free 2026 home affordability calculator.",
    url: siteUrl + "/calculators/home-affordability-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Home Affordability Calculator 2026 — How Much House Can You Afford?" }],
  },
  twitter: { title: "Home Affordability Calculator 2026 — How Much House Can You Afford? | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
