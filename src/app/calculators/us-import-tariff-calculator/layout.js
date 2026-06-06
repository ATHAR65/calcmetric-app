const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "US Import Tariff Calculator 2026 — Duties & Landed Cost",
  description: "Calculate US import duties, tariffs, and total landed cost with Section 232 rates. Free 2026 import tariff calculator for Amazon FBA and e-commerce sellers.",
  keywords: ["us import tariff calculator 2026", "import duty calculator", "customs duty calculator", "landed cost calculator", "amazon fba tariff calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/us-import-tariff-calculator",
  },
  dateModified: "2026-06-06",
  openGraph: {
    title: "US Import Tariff Calculator 2026 — Duty & Landed Cost | TheMetricApp",
    description:
      "Calculate US import duties, tariffs and landed costs instantly. Updated with 2026 Section 232, Section 301 and 10% global surcharge rates. Free for importers, Amazon FBA and eBay sellers.",
    url: siteUrl + "/calculators/us-import-tariff-calculator",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/api/og?title=US%20Import%20Tariff%20Calculator%202026%20%E2%80%94%20Duty%20%26%20Landed%20Cost%20%7C%20TheMetricApp&description=Calculate%20US%20import%20duties%2C%20tariffs%20and%20landed%20costs%20instantly.%20Updated%20with%202026%20Section%20232%2C%20Section%20301%20and%2010%25%20global%20surcharge%20rates.%20Free%20for%20importers%2C%20Amazon%20FBA%20and%20eBay%20sellers.&type=website", width: 1200, height: 630, alt: "US Import Tariff Calculator 2026 — Duty & Landed Cost | TheMetricApp" }],
  },
  twitter: {
    title: "US Import Tariff Calculator 2026 — Duties & Landed Cost | TheMetricApp",
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
