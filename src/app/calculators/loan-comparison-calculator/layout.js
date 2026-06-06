const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Loan Comparison Calculator 2026 — Compare Side-by-Side",
  description: "Compare two loans side-by-side with monthly payment, total interest, APR, and total cost. Free 2026 loan comparison calculator.",
  keywords: ["loan comparison calculator", "compare loans", "loan calculator", "APR calculator", "side by side loan comparison", "personal loan comparison", "auto loan comparison 2026"],
  alternates: { canonical: siteUrl + "/calculators/loan-comparison-calculator" },
  dateModified: "2026-06-06",
  openGraph: {
    title: "Loan Comparison Calculator 2026 — Compare Side-by-Side | TheMetricApp",
    description: "Compare two loans side-by-side with monthly payment, total interest, APR, and total cost. Free 2026 loan comparison calculator.",
    url: siteUrl + "/calculators/loan-comparison-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/api/og?title=Loan%20Comparison%20Calculator%202026%20%E2%80%94%20Compare%20Side-by-Side%20%7C%20TheMetricApp&description=Compare%20two%20loans%20side-by-side%20with%20monthly%20payment%2C%20total%20interest%2C%20APR%2C%20and%20total%20cost.%20Free%202026%20loan%20comparison%20calculator.&type=website", width: 1200, height: 630, alt: "Loan Comparison Calculator 2026 — Compare Side-by-Side | TheMetricApp" }],
  },
  twitter: {
    title: "Loan Comparison Calculator 2026 — Compare Side-by-Side | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
