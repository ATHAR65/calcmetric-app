import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: {
    default: "TheMetricApp — Free Financial & Business Calculators",
    template: "%s | TheMetricApp",
  },    description:
      "Free financial calculators for US & UK freelancers, gig workers, and self-employed. Calculate taxes, fees, profits, and take-home pay instantly — no sign-up required.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },    openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TheMetricApp",
    url: siteUrl,
    title: "TheMetricApp — Free Financial & Business Calculators",
    description:
      "Free financial calculators for US & UK freelancers, gig workers, and self-employed. Calculate taxes, fees, profits, and take-home pay instantly — no sign-up required.",
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
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var e=localStorage.getItem("themetricapp-theme");if(e==="dark"||(!e&&window.matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QKWHLMVF80"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QKWHLMVF80');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0B1120] dark:text-[#F1F5F9] transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
