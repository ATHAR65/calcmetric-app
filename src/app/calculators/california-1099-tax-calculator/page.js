import Calculator from "./Calculator";


export const metadata = {
  title: "California 1099 Tax Calculator 2026 — Calculate SE Tax, Federal & CA State Income Tax",
  description: "Calculate your federal self-employment tax, federal income tax, and California state income tax on 1099 freelance income.",
  alternates: {
    canonical: "/calculators/california-1099-tax-calculator",
  },
  openGraph: {
    title: "California 1099 Tax Calculator 2026 — Calculate SE Tax, Federal & CA State Income Tax | TheMetricApp",
    description: "Calculate your federal self-employment tax, federal income tax, and California state income tax on 1099 freelance income.",
    url: "https://www.themetricapp.com/calculators/california-1099-tax-calculator",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "California 1099 Tax Calculator 2026 — Calculate SE Tax, Federal & CA State Income Tax | TheMetricApp",
    description: "Calculate your federal self-employment tax, federal income tax, and California state income tax on 1099 freelance income.",
  },
};

export default function Page() {
  return <Calculator />;
}
