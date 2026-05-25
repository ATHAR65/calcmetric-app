import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: {
    default: "TheMetricApp — Free Financial & Business Calculators",
    template: "%s | TheMetricApp",
  },
  description:
    "Free, fast, and accurate financial calculators for taxes, fees, profits, and savings. Trusted by thousands of freelancers, sellers, and small business owners in the US & UK.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TheMetricApp",
    url: siteUrl,
    title: "TheMetricApp — Free Financial & Business Calculators",
    description:
      "Free, fast, and accurate financial calculators for taxes, fees, profits, and savings. Trusted by thousands of freelancers, sellers, and small business owners in the US & UK.",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "TheMetricApp — Free Financial Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheMetricApp — Free Financial & Business Calculators",
    description:
      "Free, fast, and accurate financial calculators for taxes, fees, profits, and savings.",
    images: ["/og-default.svg"],
    creator: "@themetricapp",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: [
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
};

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
