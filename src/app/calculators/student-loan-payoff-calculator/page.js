import Calculator from "./Calculator";

export const metadata = {
  title: "Student Loan Payoff Calculator 2026 — Calculate Payments, Interest & Payoff Date",
  description: "Free student loan payoff calculator for 2026. Calculate monthly payments, total interest, and payoff timeline for federal and private student loans. See how extra payments save thousands.",
  alternates: {
    canonical: "https://www.themetricapp.com/calculators/student-loan-payoff-calculator",
  },
  openGraph: {
    title: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster | TheMetricApp",
    description: "Calculate your student loan payments, total interest, and payoff date. See how extra monthly payments can save you thousands.",
    url: "https://www.themetricapp.com/calculators/student-loan-payoff-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/api/og?title=Student%20Loan%20Payoff%20Calculator%202026%20%E2%80%94%20Pay%20Off%20Loans%20Faster%20%7C%20TheMetricApp&description=Calculate%20your%20student%20loan%20payments%2C%20total%20interest%2C%20and%20payoff%20date.%20See%20how%20extra%20monthly%20payments%20can%20save%20you%20thousands.&type=website", width: 1200, height: 630, alt: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster",
    description: "Free calculator to estimate student loan payments, interest, and savings with extra payments.",
  },
};

export default function Page() {
  return <Calculator />;
}
