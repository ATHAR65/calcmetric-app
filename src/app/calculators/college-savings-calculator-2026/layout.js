const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "College Savings Calculator 2026 — 529 Plan Projection & Education Funding Calculator",
  description: "Calculate 529 plan growth, project college costs, and estimate the monthly contribution needed to fund your child's education. Free 2026 college savings calculator with state tax deduction estimates.",
  keywords: [
    "college savings calculator 2026",
    "529 plan calculator",
    "college cost estimator",
    "education savings calculator",
    "529 plan growth calculator",
    "college funding calculator",
    "how much to save for college",
    "529 tax deduction",
    "college planning tool",
    "child education savings",
  ],
  alternates: {
    canonical: siteUrl + "/calculators/college-savings-calculator-2026",
  },
  openGraph: {
    title: "College Savings Calculator 2026 — 529 Plan & Education Funding | TheMetricApp",
    description: "Free college savings calculator. Project 529 plan growth, estimate college costs, and find your monthly savings target. State tax deduction included.",
    url: "https://www.themetricapp.com/calculators/college-savings-calculator-2026",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "College Savings Calculator 2026 — 529 Plan & Education Funding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "College Savings Calculator 2026 — 529 Plan Projection | TheMetricApp",
    description: "Free 529 plan growth calculator. Project savings, estimate costs, and find your monthly contribution target for college.",
  },
};

export default function Layout({ children }) {
  return children;
}
