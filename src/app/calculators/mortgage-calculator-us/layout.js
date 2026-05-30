const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Mortgage Calculator (US) 2026 — Full PITI & PMI Payment Breakdown | TheMetricApp",
  description:
    "Calculate your full monthly US mortgage payment including principal, interest, taxes, insurance, and PMI. Free 2026 mortgage calculator with amortization schedule.",
  keywords: [
    "mortgage calculator",
    "mortgage payment calculator",
    "home loan calculator",
    "PITI calculator",
    "mortgage calculator with taxes and insurance",
    "PMI calculator",
    "home mortgage calculator",
    "US mortgage calculator 2026",
  ],
  alternates: { canonical: siteUrl + "/calculators/mortgage-calculator-us" },
  openGraph: {
    title: "Mortgage Calculator (US) 2026 — Full PITI & PMI Payment Breakdown | TheMetricApp",
    description: "Calculate your full monthly US mortgage payment including PITI and PMI. Free 2026 mortgage calculator with amortization schedule.",
    url: siteUrl + "/calculators/mortgage-calculator-us", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Mortgage Calculator (US) 2026 — Free Monthly Payment Tool" }],
  },
  twitter: { title: "Mortgage Calculator (US) 2026 — Full PITI & PMI Payment Breakdown | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
