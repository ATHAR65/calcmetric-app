const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Content Creator Tax Calculator 2026 — YouTube, Twitch, TikTok | TheMetricApp" },
  description:
    "Free creator tax calculator for 2026. Estimate SE tax, federal income tax, and quarterly payments on YouTube AdSense, Twitch, TikTok, and sponsorship income.",
  keywords: [
    "youtube tax calculator",
    "twitch tax calculator",
    "tiktok tax calculator",
    "content creator taxes 2026",
    "influencer tax calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/creator-tax-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Content Creator Tax Calculator 2026 — YouTube, Twitch & TikTok",
    description:
      "SE tax, federal tax, and quarterly estimates on AdSense, subs, Creator Rewards, and sponsorships.",
    url: siteUrl + "/calculators/creator-tax-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Content%20Creator%20Tax%20Calculator%202026&description=YouTube%2C%20Twitch%2C%20TikTok%20%E2%80%94%20what%20creators%20actually%20owe.&type=article", width: 1200, height: 630, alt: "Content Creator Tax Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creator Tax Calculator 2026",
    description: "YouTube, Twitch, TikTok — SE tax, federal tax, and quarterly estimates.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}
