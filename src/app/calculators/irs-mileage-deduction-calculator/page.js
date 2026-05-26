import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "IRS Mileage Deduction Calculator 2026 — Calculate Standard Mileage Deduction & Tax Savings",
  description: "Calculate your IRS standard mileage deduction for 2026. Covers business $0.67/mile, medical $0.21/mile and charity $0.14/mile rates.",
  alternates: {
    canonical: "/calculators/irs-mileage-deduction-calculator",
  },
  openGraph: {
    title: "IRS Mileage Deduction Calculator 2026 — Calculate Standard Mileage Deduction & Tax Savings | TheMetricApp",
    description: "Calculate your IRS standard mileage deduction for 2026. Covers business $0.67/mile, medical $0.21/mile and charity $0.14/mile rates.",
    url: "https://www.themetricapp.com/calculators/irs-mileage-deduction-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRS Mileage Deduction Calculator 2026 — Calculate Standard Mileage Deduction & Tax Savings | TheMetricApp",
    description: "Calculate your IRS standard mileage deduction for 2026. Covers business $0.67/mile, medical $0.21/mile and charity $0.14/mile rates.",
  },
};

export default function Page() {
  return <Calculator />;
}
