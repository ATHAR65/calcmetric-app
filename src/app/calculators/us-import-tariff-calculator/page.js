import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "US Import Tariff Calculator 2026 — Calculate Duties, Section 232 & Total Landed Cost",
  description: "Calculate US import duties, tariffs and landed costs instantly. Updated with 2026 Section 232, Section 301 and 10% global surcharge rates.",
  alternates: {
    canonical: "/calculators/us-import-tariff-calculator",
  },
  openGraph: {
    title: "US Import Tariff Calculator 2026 — Calculate Duties, Section 232 & Total Landed Cost | TheMetricApp",
    description: "Calculate US import duties, tariffs and landed costs instantly. Updated with 2026 Section 232, Section 301 and 10% global surcharge rates.",
    url: "https://www.themetricapp.com/calculators/us-import-tariff-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "US Import Tariff Calculator 2026 — Calculate Duties, Section 232 & Total Landed Cost | TheMetricApp",
    description: "Calculate US import duties, tariffs and landed costs instantly. Updated with 2026 Section 232, Section 301 and 10% global surcharge rates.",
  },
};

export default function Page() {
  return <Calculator />;
}
