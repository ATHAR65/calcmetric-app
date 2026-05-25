const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Side Hustle Tax Calculator 2026 — Gig Income Tax Estimator | TheMetricApp",
  description:
    "Calculate taxes on your side hustle income instantly. Covers Uber, DoorDash, Fiverr, Etsy, Airbnb and freelance 1099 income. SE tax, quarterly payments and deductions. Free 2026 tool.",
  keywords: ["side hustle tax calculator 2026", "gig income tax calculator", "1099 tax calculator free", "self employment tax estimator", "freelance tax calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/side-hustle-tax-calculator",
  },
  openGraph: {
    title: "Side Hustle Tax Calculator 2026 — Gig Income Tax Estimator | TheMetricApp",
    description:
      "Calculate taxes on your side hustle income instantly. Covers Uber, DoorDash, Fiverr, Etsy, Airbnb and freelance 1099 income. SE tax, quarterly payments and deductions.",
    url: siteUrl + "/calculators/side-hustle-tax-calculator",
    siteName: "TheMetricApp",
    type: "website",
  },
  twitter: {
    title: "Side Hustle Tax Calculator 2026 — Gig Income Tax Estimator | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}
