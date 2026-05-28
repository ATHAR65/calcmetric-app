const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Etsy Fee Calculator 2026 — Seller Fees & Net Profit | TheMetricApp",
  description:
    "Calculate Etsy seller fees including listing fees, transaction fees (6.5%), payment processing, and shipping costs. Free 2026 Etsy fee and profit calculator for sellers.",
  keywords: ["Etsy fee calculator", "Etsy seller fees", "Etsy profit calculator", "Etsy transaction fee", "Etsy seller tools"],
  alternates: { canonical: siteUrl + "/calculators/etsy-fee-calculator-2026" },
  openGraph: {
    title: "Etsy Fee Calculator 2026 — Seller Fees & Net Profit | TheMetricApp",
    description: "Calculate Etsy seller fees including listing, transaction, payment processing, and shipping costs. Free 2026 Etsy profit calculator.",
    url: siteUrl + "/calculators/etsy-fee-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Etsy Fee Calculator 2026 — Calculate Seller Fees & Net Profit" }],
  },
  twitter: { title: "Etsy Fee Calculator 2026 — Seller Fees & Net Profit | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
