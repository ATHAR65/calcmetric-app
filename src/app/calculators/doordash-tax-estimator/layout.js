const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "DoorDash Tax Estimator 2026 — SE Tax & Mileage Deductions | TheMetricApp",
  description:
    "Calculate your estimated self-employment taxes as a DoorDash driver with mileage deductions at $0.67/mile. Free 2026 1099 tax estimator for gig workers. No signup required.",
  keywords: ["DoorDash tax calculator", "self employment tax estimator", "1099 DoorDash taxes", "gig economy tax calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/doordash-tax-estimator",
  },
  openGraph: {
    title: "DoorDash Tax Estimator 2026 — SE Tax & Mileage Deductions | TheMetricApp",
    description:
      "Calculate your estimated self-employment taxes as a DoorDash driver with mileage deductions at $0.67/mile. Free 2026 1099 tax estimator for gig workers.",
    url: siteUrl + "/calculators/doordash-tax-estimator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    title: "DoorDash Tax Estimator 2026 — SE Tax & Mileage Deductions | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}
