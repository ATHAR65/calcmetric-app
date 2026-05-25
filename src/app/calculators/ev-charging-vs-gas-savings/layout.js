const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "EV vs Gas Savings Calculator 2026 — Cost of Ownership | TheMetricApp",
  description:
    "Compare electric vehicle charging vs gasoline costs instantly. Free 2026 EV savings calculator showing monthly and annual fuel savings in the US & UK.",
  keywords: ["EV vs gas cost calculator", "electric vehicle savings", "EV charging cost", "gas vs electric car calculator"],
  alternates: {
    canonical: siteUrl + "/calculators/ev-charging-vs-gas-savings",
  },
  openGraph: {
    title: "EV vs Gas Savings Calculator 2026 — Cost of Ownership | TheMetricApp",
    description:
      "Compare electric vehicle charging vs gasoline costs instantly. Free 2026 EV savings calculator showing monthly and annual fuel savings in the US & UK.",
    url: siteUrl + "/calculators/ev-charging-vs-gas-savings",
    siteName: "TheMetricApp",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    title: "EV vs Gas Savings Calculator 2026 — Cost of Ownership | TheMetricApp",
  },
};

export default function Layout({ children }) {
  return children;
}
