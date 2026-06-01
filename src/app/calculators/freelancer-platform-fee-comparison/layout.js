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
    images: [{ url: "/api/og?title=Freelancer%20Fee%20Comparison%202026%20%E2%80%94%20Upwork%20vs%20Fiverr%20Fees%20%7C%20TheMetricApp&description=Compare%20Upwork%20(10%25)%20vs%20Fiverr%20(20%25)%20fees%20side-by-side%20and%20see%20which%20platform%20maximizes%20your%20net%20earnings.%20Free%202026%20freelancer%20fee%20comparison%20tool.&type=website", width: 1200, height: 630, alt: "Freelancer Fee Comparison 2026 — Upwork vs Fiverr Fees | TheMetricApp" }],
  },
  twitter: {
    title: "Freelancer Fee Comparison 2026 — Upwork vs Fiverr Fees | TheMetricApp",
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
