const siteUrl = "https://www.themetricapp.com";

// Title intentionally matches page.js so the rendered <title> is identical
// regardless of which metadata source Next.js resolves last.
export const metadata = {
  title: { absolute: "Amazon FBA Calculator – Calculate FBA Fees & Profit (2025)" },
  description:
    "Free Amazon FBA calculator to estimate FBA fees, referral fees, and net profit for UK and US sellers. Updated for 2025 fee structure.",
  keywords: [
    "Amazon FBA calculator",
    "FBA fee calculator",
    "Amazon referral fee",
    "FBA fulfilment fee",
    "Amazon seller profit calculator",
    "Amazon FBA UK",
  ],
  alternates: { canonical: siteUrl + "/calculators/amazon-fba-calculator" },
};

export default function Layout({ children }) {
  return children;
}
