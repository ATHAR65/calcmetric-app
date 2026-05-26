import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "DoorDash Tax Estimator 2026 — Calculate Self-Employment Taxes & Mileage Deductions",
  description: "Calculate your estimated self-employment taxes as a DoorDash independent contractor including mileage deductions.",
  alternates: {
    canonical: "/calculators/doordash-tax-estimator",
  },
  openGraph: {
    title: "DoorDash Tax Estimator 2026 — Calculate Self-Employment Taxes & Mileage Deductions | TheMetricApp",
    description: "Calculate your estimated self-employment taxes as a DoorDash independent contractor including mileage deductions.",
    url: "https://www.themetricapp.com/calculators/doordash-tax-estimator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoorDash Tax Estimator 2026 — Calculate Self-Employment Taxes & Mileage Deductions | TheMetricApp",
    description: "Calculate your estimated self-employment taxes as a DoorDash independent contractor including mileage deductions.",
  },
};

export default function Page() {
  return <Calculator />;
}
