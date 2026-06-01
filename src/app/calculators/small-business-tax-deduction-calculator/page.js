import Calculator from "./Calculator";

export const metadata = {
  title: "Small Business Tax Deduction Calculator 2026 — Estimate SE Tax, QBI & Quarterly Payments",
  description: "Free small business tax deduction calculator for 2026. Calculate self-employment tax, QBI deduction, home office deduction, mileage deduction, and quarterly estimated payments for freelancers and business owners.",
  alternates: {
    canonical: "https://www.themetricapp.com/calculators/small-business-tax-deduction-calculator",
  },
  openGraph: {
    title: "Small Business Tax Deduction Calculator 2026 — Free Tax Tool | TheMetricApp",
    description: "Calculate your small business tax deductions including SE tax, QBI, mileage, and home office. Free 2026 tax estimator for self-employed.",
    url: "https://www.themetricapp.com/calculators/small-business-tax-deduction-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/api/og?title=Small%20Business%20Tax%20Deduction%20Calculator%202026%20%E2%80%94%20Free%20Tax%20Tool%20%7C%20TheMetricApp&description=Calculate%20your%20small%20business%20tax%20deductions%20including%20SE%20tax%2C%20QBI%2C%20mileage%2C%20and%20home%20office.%20Free%202026%20tax%20estimator%20for%20self-employed.&type=website", width: 1200, height: 630, alt: "Small Business Tax Deduction Calculator 2026 — Free Tax Tool | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Tax Deduction Calculator 2026 — Free Tax Tool | TheMetricApp",
    description: "Calculate your small business tax deductions for 2026. SE tax, QBI, mileage & more. Free tool.",
  },
};

export default function Page() {
  return <Calculator />;
}
