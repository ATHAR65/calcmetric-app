import Calculator from "./Calculator";

export const unstable_instant = { prefetch: 'static' };

export const metadata = {
  title: "E-Commerce Profit Calculator 2026 — Calculate Net Margin, ROAS & ROI for Amazon, Shopify & eBay",
  description: "Calculate net profit margin, ROAS, ROI, and break-even for e-commerce businesses. Supports US and UK sellers on Amazon, Shopify, eBay, and Etsy.",
  alternates: {
    canonical: "/calculators/ecommerce-net-profit-margin",
  },
  openGraph: {
    title: "E-Commerce Profit Calculator 2026 — Calculate Net Margin, ROAS & ROI for Amazon, Shopify & eBay | TheMetricApp",
    description: "Calculate net profit margin, ROAS, ROI, and break-even for e-commerce businesses. Supports US and UK sellers on Amazon, Shopify, eBay, and Etsy.",
    url: "https://www.themetricapp.com/calculators/ecommerce-net-profit-margin",
    siteName: "TheMetricApp",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "TheMetricApp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Profit Calculator 2026 — Calculate Net Margin, ROAS & ROI for Amazon, Shopify & eBay | TheMetricApp",
    description: "Calculate net profit margin, ROAS, ROI, and break-even for e-commerce businesses. Supports US and UK sellers on Amazon, Shopify, eBay, and Etsy.",
  },
};

export default function Page() {
  return <Calculator />;
}
