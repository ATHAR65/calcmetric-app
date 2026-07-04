const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: { absolute: "OBBBA Tax Savings Calculator 2026 — Stack All 4 Deductions | TheMetricApp" },
  description:
    "Free OBBBA tax savings calculator for 2026. Stack all four One Big Beautiful Bill deductions — no tax on tips, overtime, the $6,000 senior bonus, and car loan interest — with phase-outs.",
  keywords: [
    "OBBBA tax savings calculator",
    "one big beautiful bill calculator 2026",
    "OBBBA deductions calculator",
    "tips overtime senior car loan deduction calculator",
    "big beautiful bill tax calculator",
  ],
  alternates: { canonical: siteUrl + "/calculators/obbba-tax-savings-calculator" },
  dateModified: "2026-07-04",
  openGraph: {
    title: "OBBBA Tax Savings Calculator 2026 — All Four Deductions Stacked",
    description:
      "Combine the tips, overtime, senior, and car loan interest deductions in one calculator with every cap and phase-out applied.",
    url: siteUrl + "/calculators/obbba-tax-savings-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-04T00:00:00Z",
    authors: ["TheMetricApp Team"],
    images: [{ url: "/api/og?title=OBBBA%20Tax%20Savings%20Calculator%202026&description=Stack%20all%20four%20One%20Big%20Beautiful%20Bill%20deductions%20in%20one%20place.&type=article", width: 1200, height: 630, alt: "OBBBA Tax Savings Calculator 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBBBA Tax Savings Calculator 2026 — All 4 Deductions",
    description: "Tips + overtime + senior + car loan interest. See your total OBBBA savings.",
  },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) {
  return children;
}
