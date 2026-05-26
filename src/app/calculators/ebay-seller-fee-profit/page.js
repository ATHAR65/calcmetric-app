import Calculator from "./Calculator";


export const metadata = {
  title: "eBay Seller Fee Calculator 2026 — Calculate Final Value Fees & Net Profit",
  description: "Calculate eBay final value fees and your true net profit after all selling and shipping costs.",
  alternates: {
    canonical: "/calculators/ebay-seller-fee-profit",
  },
  openGraph: {
    title: "eBay Seller Fee Calculator 2026 — Calculate Final Value Fees & Net Profit | TheMetricApp",
    description: "Calculate eBay final value fees and your true net profit after all selling and shipping costs.",
    url: "https://www.themetricapp.com/calculators/ebay-seller-fee-profit",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "eBay Seller Fee Calculator 2026 — Calculate Final Value Fees & Net Profit | TheMetricApp",
    description: "Calculate eBay final value fees and your true net profit after all selling and shipping costs.",
  },
};

export default function Page() {
  return <Calculator />;
}
