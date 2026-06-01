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
    images: [{ url: "/api/og?title=EV%20vs%20Gas%20Savings%20Calculator%202026%20%E2%80%94%20Cost%20of%20Ownership%20%7C%20TheMetricApp&description=Compare%20electric%20vehicle%20charging%20vs%20gasoline%20costs%20instantly.%20Free%202026%20EV%20savings%20calculator%20showing%20monthly%20and%20annual%20fuel%20savings%20in%20the%20US%20%26%20UK.&type=website", width: 1200, height: 630, alt: "EV vs Gas Savings Calculator 2026 — Cost of Ownership | TheMetricApp" }],
  },
  twitter: {
    title: "EV vs Gas Savings Calculator 2026 — Cost of Ownership | TheMetricApp",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_US",
  },
};

export default function Layout({ children }) {
  return children;
}
