import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "UK National Insurance Calculator 2025–26 — Class 1, 2 & 4 NI Contributions | TheMetricApp",
  description: "Free UK National Insurance calculator for 2025–26. Calculate Class 1 employee NI, Class 2 and Class 4 self-employed NI, and employer NI. Accurate HMRC rates, instant results.",
  alternates: {
    canonical: "/calculators/national-insurance-calculator-uk",
  },
  openGraph: {
    title: "UK National Insurance Calculator 2025–26 — Class 1, 2 & 4 NI Contributions | TheMetricApp",
    description: "Free UK National Insurance calculator for 2025–26. Calculate Class 1 employee NI, Class 2 and Class 4 self-employed NI, and employer NI.",
    url: "https://www.themetricapp.com/calculators/national-insurance-calculator-uk",
    siteName: "TheMetricApp",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "UK National Insurance Calculator 2025–26 | TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK National Insurance Calculator 2025–26 — Class 1, 2 & 4 NI Contributions | TheMetricApp",
    description: "Free UK National Insurance calculator for 2025–26. Calculate Class 1 employee NI, Class 2 and Class 4 self-employed NI, and employer NI.",
  },
};

export default function Page() {
  return <Calculator />;
}
