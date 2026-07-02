const siteUrl = "https://www.themetricapp.com";

// Title intentionally matches page.js so the rendered <title> is identical
// regardless of which metadata source Next.js resolves last.
export const metadata = {
  title: { absolute: "Amazon FBA Calculator 2026 – FBA Fees & Profit (UK & US)" },
  description:
    "See your real Amazon profit per unit in seconds — referral fees, FBA fulfilment fees, ROI and margin for UK & US sellers. Free, no sign-up.",
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
