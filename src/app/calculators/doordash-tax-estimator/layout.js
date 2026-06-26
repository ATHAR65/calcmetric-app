const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "DoorDash Tax Calculator 2026 | TheMetricApp" },
  description:
    "Estimate your DoorDash taxes instantly. Calculate SE tax, quarterly payments & deductions. Free, no signup — Free, no signup required.",
  keywords: ["DoorDash tax calculator", "self employment tax estimator", "1099 DoorDash taxes", "gig economy tax calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/doordash-tax-estimator",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "DoorDash Tax Estimator 2026 — SE Tax & Mileage Deduc...",
    description:
    "Calculate your estimated self-employment taxes as a DoorDash driver with mileage deductions at $0.725/mile. Free 2026 1099 tax estimator for gig workers.",
    url: siteUrl + "/calculators/doordash-tax-estimator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=DoorDash%20Tax%20Estimator%202026%20%E2%80%94%20SE%20Tax%20%26%20Mileage%20Deductions%20%7C%20TheMetricApp&description=Calculate%20your%20estimated%20self-employment%20taxes%20as%20a%20DoorDash%20driver%20with%20mileage%20deductions%20at%20%240.725%2Fmile.%20Free%202026%201099%20tax%20estimator%20for%20gig%20workers.&type=website", width: 1200, height: 630, alt: "DoorDash Tax Estimator 2026 — SE Tax & Mileage Deductions" }],
  },
  twitter: {
    title: "DoorDash Tax Calculator 2026 — 1099 & SE Tax Estimator",
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
