const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "US Import Tariff Calculator 2026 — Duty & Landed Cost | TheMetricApp",
  description:
    "Calculate US import duties, tariffs and landed costs instantly. Updated with 2026 Section 232, Section 301 and 10% global surcharge rates. Free for importers, Amazon FBA and eBay sellers.",
  keywords: ["us import tariff calculator 2026", "import duty calculator", "customs duty calculator", "landed cost calculator", "amazon fba tariff calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/us-import-tariff-calculator",
  },
  openGraph: {
    title: "US Import Tariff Calculator 2026 — Duty & Landed Cost | TheMetricApp",
    description:
      "Calculate US import duties, tariffs and landed costs instantly. Updated with 2026 Section 232, Section 301 and 10% global surcharge rates. Free for importers, Amazon FBA and eBay sellers.",
    url: siteUrl + "/calculators/us-import-tariff-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    title: "US Import Tariff Calculator 2026 — Duty & Landed Cost | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}
