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

export const metadata = {
  title: {
    default: "WiseFinanceCalc — Free Financial & Business Calculators",
    template: "%s | WiseFinanceCalc",
  },
  description:
    "Free, fast, and accurate financial calculators for taxes, fees, profits, and savings. Trusted by thousands of freelancers, sellers, and small business owners in the US & UK.",
  metadataBase: new URL("https://wisefinancecalc.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WiseFinanceCalc",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" type="image/svg+xml" />
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
