const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "FIRE Calculator — Financial Independence & Coast FIRE | TheMetricApp" },
  description:
    "Free FIRE calculator. Find your FIRE number, years to financial independence, FIRE age, and Coast FIRE target based on your savings rate, expenses, and returns.",
  keywords: [
    "fire calculator",
    "financial independence calculator",
    "coast fire calculator",
    "fire number calculator",
    "early retirement calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/fire-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "FIRE Calculator — Financial Independence & Coast FIRE",
    description:
      "Find your FIRE number, years to financial independence, and Coast FIRE target.",
    url: siteUrl + "/calculators/fire-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=FIRE%20Calculator&description=Your%20FIRE%20number%2C%20years%20to%20FI%2C%20and%20Coast%20FIRE%20target.&type=article", width: 1200, height: 630, alt: "FIRE Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIRE Calculator",
    description: "Find your FIRE number, years to financial independence, and Coast FIRE target.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}
