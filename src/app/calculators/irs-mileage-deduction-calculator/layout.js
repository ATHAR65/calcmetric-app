const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "IRS Mileage Deduction Calculator 2026 | TheMetricApp" },
  description:
    "Calculate your IRS mileage deduction for 2026. Business $0.70/mile, medical & charity rates included. Free calculator — Free, no signup required.",
  keywords: ["IRS mileage deduction calculator 2026", "standard mileage rate 2026", "mileage tax deduction calculator", "business mileage calculator", "$0.67 per mile calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/irs-mileage-deduction-calculator",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "IRS Mileage Deduction Calculator 2026 — $0.67/Mile Tax",
    description:
    "Calculate your IRS standard mileage deduction for 2026. Covers business $0.67/mile, medical $0.21/mile and charity $0.14/mile rates.",
    url: siteUrl + "/calculators/irs-mileage-deduction-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=IRS%20Mileage%20Deduction%20Calculator%202026%20%E2%80%94%20%240.67%2FMile%20Tax%20Savings%20%7C%20TheMetricApp&description=Calculate%20your%20IRS%20standard%20mileage%20deduction%20for%202026.%20Covers%20business%20%240.67%2Fmile%2C%20medical%20%240.21%2Fmile%20and%20charity%20%240.14%2Fmile%20rates.&type=website", width: 1200, height: 630, alt: "IRS Mileage Deduction Calculator 2026 — $0.67/Mile Tax Savings" }],
  },
  twitter: {
    title: "IRS Mileage Deduction Calculator 2026 — Business,",
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
