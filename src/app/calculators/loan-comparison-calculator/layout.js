const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Loan Comparison Calculator 2026 — Compare Side-by-Side | TheMetricApp",
  description:
    "Compare two loans side-by-side with monthly payment, total interest, APR, and total cost. Free 2026 loan comparison calculator for auto, personal, and student loans.",
  keywords: ["loan comparison calculator", "compare loans", "loan calculator", "APR calculator", "side by side loan comparison", "personal loan comparison", "auto loan comparison 2026"],
  alternates: { canonical: siteUrl + "/calculators/loan-comparison-calculator" },
  openGraph: {
    title: "Loan Comparison Calculator 2026 — Compare Side-by-Side | TheMetricApp",
    description: "Compare two loans side-by-side with monthly payment, total interest, APR, and total cost. Free 2026 loan comparison calculator.",
    url: siteUrl + "/calculators/loan-comparison-calculator", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Loan Comparison Calculator 2026 — Side-by-Side Loan Comparison" }],
  },
  twitter: { title: "Loan Comparison Calculator 2026 — Compare Side-by-Side | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
