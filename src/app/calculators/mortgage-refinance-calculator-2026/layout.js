const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "Mortgage Refinance Calculator 2026 — Is Refinancing Worth It? | TheMetricApp",
  description:
    "Calculate savings, break-even point, and total interest when refinancing your mortgage. Free 2026 mortgage refi calculator with monthly payment comparison and closing costs.",
  keywords: ["mortgage refinance calculator", "refinance calculator", "refinancing calculator", "mortgage refi calculator", "should I refinance calculator", "break even refinance calculator", "mortgage rate comparison 2026"],
  alternates: { canonical: siteUrl + "/calculators/mortgage-refinance-calculator-2026" },
  openGraph: {
    title: "Mortgage Refinance Calculator 2026 — Is Refinancing Worth It? | TheMetricApp",
    description: "Calculate savings, break-even point, and total interest when refinancing your mortgage. Free 2026 mortgage refi calculator.",
    url: siteUrl + "/calculators/mortgage-refinance-calculator-2026", siteName: "TheMetricApp", type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Mortgage Refinance Calculator 2026 — Break-Even & Savings Analysis" }],
  },
  twitter: { title: "Mortgage Refinance Calculator 2026 — Is Refinancing Worth It? | TheMetricApp" },
  other: { "og:image:width": "1200", "og:image:height": "630", "og:locale": "en_US" },
};

export default function Layout({ children }) { return children; }
