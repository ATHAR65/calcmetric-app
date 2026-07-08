const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Debt Snowball vs Avalanche Calculator — Compare Payoff | TheMetricApp" },
  description:
    "Free debt snowball vs avalanche calculator. Compare both payoff strategies side by side to see which clears your debt faster and saves the most interest.",
  keywords: [
    "debt snowball calculator",
    "debt avalanche calculator",
    "debt snowball vs avalanche",
    "debt payoff strategy calculator",
    "which debt payoff method is best",
  ],
  alternates: { canonical: siteUrl + "/calculators/debt-snowball-vs-avalanche-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Debt Snowball vs Avalanche Calculator — Compare Payoff Methods",
    description:
      "See which debt payoff method clears your debt faster and saves the most interest.",
    url: siteUrl + "/calculators/debt-snowball-vs-avalanche-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Debt%20Snowball%20vs%20Avalanche&description=Compare%20both%20payoff%20strategies%20side%20by%20side.&type=article", width: 1200, height: 630, alt: "Debt Snowball vs Avalanche Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debt Snowball vs Avalanche Calculator",
    description: "Compare both debt payoff strategies — faster payoff and interest saved.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}
