const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Car Loan Affordability Calculator 2026 — Can You Afford That Car? | TheMetricApp",
  description:
    "Calculate monthly car payments, total interest, and whether a car loan fits your budget. Free 2026 car affordability calculator with DTI analysis.",
  keywords: ["car loan affordability calculator", "auto loan calculator", "car payment calculator", "can I afford this car", "car loan DTI calculator"],
  alternates: { canonical: siteUrl + "/calculators/car-loan-affordability-calculator-2026" },
  openGraph: {
    title: "Car Loan Affordability Calculator 2026 — Can You Afford That Car? | TheMetricApp",
    description: "Calculate monthly car payments, total interest, and whether a car loan fits your budget. Free 2026 car affordability calculator.",
    url: siteUrl + "/calculators/car-loan-affordability-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Car Loan Affordability Calculator 2026 — Monthly Payment & DTI Analysis" }],
  },
  twitter: { title: "Car Loan Affordability Calculator 2026 — Can You Afford That Car? | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
