const siteUrl = "https://www.themetricapp.com";

// Title intentionally matches page.js so the rendered <title> is identical
// regardless of which metadata source Next.js resolves last.
export const metadata = {
  title: { absolute: "eBay Fee Calculator 2026 – Selling Fees & Profit (UK & US)" },
  description:
    "Work out eBay final value fees and your true net profit on any sale in seconds — category-specific UK & US rates. Free, no sign-up.",
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
