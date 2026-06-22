const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Break-Even Calculator for Small Business | TheMetricApp" },
  description:
    "Free break-even calculator for small business and e-commerce. Find how many units you need to sell to cover costs. Includes fixed costs, variable costs, and contribution margin analysis.",
  keywords: [
    "break even calculator small business",
    "ecommerce break even point calculator",
    "product break even analysis calculator",
    "how many units to break even calculator",
    "contribution margin calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/break-even-calculator-small-business" },
  dateModified: "2026-06-13",
  openGraph: {
    title: "Break-Even Calculator for Small Business & E-Commerce 2026",
    description:
      "Find how many units you need to sell to cover costs. Free break-even calculator with fixed costs, variable costs, and contribution margin analysis.",
    url: siteUrl + "/calculators/break-even-calculator-small-business",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-13T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Break-Even%20Calculator%20for%20Small%20Business%20%26%20E-Commerce&description=Find%20how%20many%20units%20you%20need%20to%20sell%20to%20cover%20costs.&type=article", width: 1200, height: 630, alt: "Break-Even Calculator for Small Business & E-Commerce" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Break-Even Calculator for Small Business & E-Commerce 2026",
    description: "Find how many units you need to sell to cover costs, with contribution margin analysis.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}
