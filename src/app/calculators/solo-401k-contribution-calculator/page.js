import Calculator from "./Calculator";


export const metadata = {
  title: "Solo 401k Contribution Calculator 2026 — Max Retirement Savings & Tax Deductions",
  description: "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit.",
  alternates: {
    canonical: "/calculators/solo-401k-contribution-calculator",
  },
  openGraph: {
    title: "Solo 401k Contribution Calculator 2026 — Max Retirement Savings & Tax Deductions | TheMetricApp",
    description: "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit.",
    url: "https://www.themetricapp.com/calculators/solo-401k-contribution-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo 401k Contribution Calculator 2026 — Max Retirement Savings & Tax Deductions | TheMetricApp",
    description: "Calculate your maximum Solo 401k contribution for 2026. Covers employee and employer contributions up to $70,000 limit.",
  },
};

export default function Page() {
  return <Calculator />;
}
