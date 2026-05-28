const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Amazon Seller Fee Calculator 2026 — Referral Fees & Net Profit | TheMetricApp",
  description:
    "Calculate Amazon seller fees including referral fees, closing fees, and monthly selling costs. Free 2026 Amazon seller fee calculator for FBM sellers.",
  keywords: ["Amazon seller fee calculator", "Amazon referral fee", "Amazon selling fees", "Amazon FBM calculator", "Amazon seller profit"],
  alternates: { canonical: siteUrl + "/calculators/amazon-seller-fee-calculator-2026" },
  openGraph: {
    title: "Amazon Seller Fee Calculator 2026 — Referral Fees & Net Profit | TheMetricApp",
    description: "Calculate Amazon seller fees including referral fees, closing fees, and selling costs. Free 2026 calculator for FBM sellers.",
    url: siteUrl + "/calculators/amazon-seller-fee-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Amazon Seller Fee Calculator 2026 — Calculate Referral Fees & Net Profit" }],
  },
  twitter: { title: "Amazon Seller Fee Calculator 2026 — Referral Fees & Net Profit | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
