const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Freelancer Fee Comparison 2026 — Upwork vs Fiverr Fees | TheMetricApp",
  description:
    "Compare Upwork (10%) vs Fiverr (20%) fees side-by-side and see which platform maximizes your net earnings. Free 2026 freelancer fee comparison tool.",
  keywords: ["Upwork vs Fiverr fees", "freelancer fee comparison", "Upwork fee calculator", "Fiverr fee calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/freelancer-platform-fee-comparison",
  },
  openGraph: {
    title: "Freelancer Fee Comparison 2026 — Upwork vs Fiverr Fees | TheMetricApp",
    description:
      "Compare Upwork (10%) vs Fiverr (20%) fees side-by-side and see which platform maximizes your net earnings. Free 2026 freelancer fee comparison tool.",
    url: siteUrl + "/calculators/freelancer-platform-fee-comparison",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    title: "Freelancer Fee Comparison 2026 — Upwork vs Fiverr Fees | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}
