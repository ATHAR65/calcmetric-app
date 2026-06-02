const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: "College Savings Calculator 2026 — 529 Plan & Education Funding | TheMetricApp",
  description: "Calculate 529 plan growth, project college costs, and find your monthly savings target. Free 2026 college savings calculator with state tax deduction estimates.",
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
    images: [{ url: "/api/og?title=College%20Savings%20Calculator%202026%20%E2%80%94%20529%20Plan%20%26%20Education%20Funding%20%7C%20TheMetricApp&description=Free%20college%20savings%20calculator.%20Project%20529%20plan%20growth%2C%20estimate%20college%20costs%2C%20and%20find%20your%20monthly%20savings%20target.%20State%20tax%20deduction%20included.&type=website", width: 1200, height: 630, alt: "College Savings Calculator 2026 — 529 Plan & Education Funding | TheMetricApp" }],
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
