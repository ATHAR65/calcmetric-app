const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Mortgage Calculator US 2026 — Payments | TheMetricApp" },
  description: "Calculate your US mortgage payment, total interest, and amortization schedule. Free mortgage calculator. No signup.",
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
  dateModified: "2026-06-06",
  openGraph: {
    title: "Mortgage Calculator (US) 2026 — Full PITI & PMI Payment",
    description: "Calculate your full monthly US mortgage payment including PITI and PMI. Free 2026 mortgage calculator with amortization schedule.",
    url: siteUrl + "/calculators/mortgage-calculator-us", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Mortgage%20Calculator%20(US)%202026%20%E2%80%94%20Full%20PITI%20%26%20PMI%20Payment%20Breakdown%20%7C%20TheMetricApp&description=Calculate%20your%20full%20monthly%20US%20mortgage%20payment%20including%20PITI%20and%20PMI.%20Free%202026%20mortgage%20calculator%20with%20amortization%20schedule.&type=website", width: 1200, height: 630, alt: "Mortgage Calculator (US) 2026 — Full PITI & PMI Payment Breakdown | TheMetricApp" }],
  },
  twitter: {
    title: "Mortgage Calculator US 2026 — Monthly Payment & Total" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
