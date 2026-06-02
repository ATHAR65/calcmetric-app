const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Side Hustle Tax Calculator 2026 — Free 1099 Income Tax Estimator",
  description: "Calculate taxes on your side hustle income instantly. Covers SE tax, deductions & quarterly payments. Free tool.",
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
    images: [{ url: "/api/og?title=Side%20Hustle%20Tax%20Calculator%202026%20%E2%80%94%20Gig%20Income%20Tax%20Estimator%20%7C%20TheMetricApp&description=Calculate%20taxes%20on%20your%20side%20hustle%20income%20instantly.%20Covers%20Uber%2C%20DoorDash%2C%20Fiverr%2C%20Etsy%2C%20Airbnb%20and%20freelance%201099%20income.%20SE%20tax%2C%20quarterly%20payments%20and%20deductions.&type=website", width: 1200, height: 630, alt: "Side Hustle Tax Calculator 2026 — Gig Income Tax Estimator | TheMetricApp" }],
  },
  twitter: {
    title: "Side Hustle Tax Calculator 2026 — Free 1099 Income Tax Estimator | TheMetricApp",
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
