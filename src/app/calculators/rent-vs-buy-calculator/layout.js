const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "Rent vs Buy Calculator — Should You Buy a Home? | TheMetricApp" },
  description:
    "Free rent vs buy calculator. Compare the true total cost of renting versus buying a home over time, including equity, appreciation, and the opportunity cost of your down payment.",
  keywords: [
    "rent vs buy calculator",
    "should i rent or buy",
    "renting vs buying a house calculator",
    "buy vs rent home calculator",
    "is it cheaper to rent or buy",
  ],
  alternates: { canonical: siteUrl + "/calculators/rent-vs-buy-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "Rent vs Buy Calculator — Should You Buy a Home?",
    description:
      "Compare the true cost of renting vs buying, including equity, appreciation, and opportunity cost.",
    url: siteUrl + "/calculators/rent-vs-buy-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=Rent%20vs%20Buy%20Calculator&description=Compare%20the%20true%20cost%20of%20renting%20versus%20buying%20a%20home.&type=article", width: 1200, height: 630, alt: "Rent vs Buy Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent vs Buy Calculator",
    description: "Compare the true cost of renting versus buying a home over time.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}
