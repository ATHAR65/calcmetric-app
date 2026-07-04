const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Car Loan Interest Deduction Calculator 2026 | TheMetricApp" },
  description:
    "Free car loan interest tax deduction calculator for 2026. Estimate your OBBBA savings — up to $10,000 of interest on new US-assembled vehicles. Includes amortization and phase-out limits.",
  keywords: [
    "car loan interest deduction calculator 2026",
    "auto loan interest tax deduction OBBBA",
    "car loan tax deduction calculator",
    "is car loan interest tax deductible 2026",
    "new car tax deduction calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/car-loan-interest-deduction-calculator-2026" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Car Loan Interest Deduction Calculator 2026 — OBBBA Tax Savings",
    description:
      "Estimate your federal tax savings from the $10,000 car loan interest deduction on new US-assembled vehicles. Real amortization math and phase-out limits.",
    url: siteUrl + "/calculators/car-loan-interest-deduction-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Car%20Loan%20Interest%20Deduction%20Calculator%202026&description=Estimate%20your%20OBBBA%20tax%20savings%20on%20new%20US-assembled%20vehicle%20loans.&type=article", width: 1200, height: 630, alt: "Car Loan Interest Deduction Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Loan Interest Deduction Calculator 2026 — OBBBA",
    description: "Up to $10,000 of car loan interest is now deductible. See what you actually save.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}
