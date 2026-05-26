import Calculator from "./Calculator";


export const metadata = {
  title: "Freelancer Fee Comparison 2026 — Compare Upwork vs Fiverr Fees Side-by-Side",
  description: "Compare Upwork vs Fiverr fees side-by-side and see which freelancing platform maximizes your net earnings.",
  alternates: {
    canonical: "/calculators/freelancer-platform-fee-comparison",
  },
  openGraph: {
    title: "Freelancer Fee Comparison 2026 — Compare Upwork vs Fiverr Fees Side-by-Side | TheMetricApp",
    description: "Compare Upwork vs Fiverr fees side-by-side and see which freelancing platform maximizes your net earnings.",
    url: "https://www.themetricapp.com/calculators/freelancer-platform-fee-comparison",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Fee Comparison 2026 — Compare Upwork vs Fiverr Fees Side-by-Side | TheMetricApp",
    description: "Compare Upwork vs Fiverr fees side-by-side and see which freelancing platform maximizes your net earnings.",
  },
};

export default function Page() {
  return <Calculator />;
}
