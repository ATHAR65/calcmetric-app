const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Car Loan Affordability Calculator 2026 — Can You Afford That Car? | TheMetricApp",
  description: "Calculate monthly car payments, total interest, and DTI analysis. Free 2026 car affordability calculator before you visit the dealership.",
  keywords: ["car loan affordability calculator", "auto loan calculator", "car payment calculator", "can I afford this car", "car loan DTI calculator"],
  alternates: { canonical: siteUrl + "/calculators/car-loan-affordability-calculator-2026" },
  openGraph: {
    title: "Car Loan Affordability Calculator 2026 — Can You Afford That Car? | TheMetricApp",
    description: "Calculate monthly car payments, total interest, and whether a car loan fits your budget. Free 2026 car affordability calculator.",
    url: siteUrl + "/calculators/car-loan-affordability-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Car%20Loan%20Affordability%20Calculator%202026%20%E2%80%94%20Can%20You%20Afford%20That%20Car%3F%20%7C%20TheMetricApp&description=Calculate%20monthly%20car%20payments%2C%20total%20interest%2C%20and%20whether%20a%20car%20loan%20fits%20your%20budget.%20Free%202026%20car%20affordability%20calculator.&type=website", width: 1200, height: 630, alt: "Car Loan Affordability Calculator 2026 — Can You Afford That Car? | TheMetricApp" }],
  },
  twitter: {
    title: "Car Loan Affordability Calculator 2026 — Can You Afford That Car? | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
