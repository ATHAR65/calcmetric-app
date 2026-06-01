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
    images: [{ url: "/api/og?title=Amazon%20Seller%20Fee%20Calculator%202026%20%E2%80%94%20Referral%20Fees%20%26%20Net%20Profit%20%7C%20TheMetricApp&description=Calculate%20Amazon%20seller%20fees%20including%20referral%20fees%2C%20closing%20fees%2C%20and%20selling%20costs.%20Free%202026%20calculator%20for%20FBM%20sellers.&type=website", width: 1200, height: 630, alt: "Amazon Seller Fee Calculator 2026 — Referral Fees & Net Profit | TheMetricApp" }],
  },
  twitter: { title: "Amazon Seller Fee Calculator 2026 — Referral Fees & Net Profit | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
