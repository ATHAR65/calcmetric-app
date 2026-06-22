const siteUrl = "https://www.themetricapp.com";

// Title intentionally matches page.js so the rendered <title> is identical
// regardless of which metadata source Next.js resolves last.
export const metadata = {
  title: { absolute: "eBay Fee Calculator – Calculate eBay Selling Fees Instantly (2025)" },
  description:
    "Use our free eBay fee calculator to instantly calculate eBay selling fees, final value fees, and your net profit. Updated for 2025 UK & US rates.",
  keywords: [
    "eBay fee calculator",
    "eBay selling fees",
    "eBay final value fee",
    "eBay profit calculator",
    "eBay UK fees",
    "eBay US fees",
  ],
  alternates: { canonical: siteUrl + "/calculators/ebay-fee-calculator" },
};

export default function Layout({ children }) {
  return children;
}
