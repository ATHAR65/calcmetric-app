import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ThemeProvider from "@/components/ThemeProvider";

const siteUrl = "https://www.themetricapp.com";

export const metadata = {
  title: {
    default: "TheMetricApp — Free Financial Calculators & Tax Tools",
    template: "%s | TheMetricApp",
  },
  description:
    "Free financial calculators and tax estimators for freelancers, gig workers, sellers, and small business owners. Calculate taxes, fees, profits, and ROI instantly — no sign-up required.",
  keywords: [
    "financial calculators",
    "tax calculator",
    "free online calculator",
    "self employment tax calculator",
    "gig economy tax calculator",
    "business profit calculator",
    "freelancer finance tools",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-us": siteUrl,
      "en-gb": siteUrl,
      "x-default": siteUrl,
    },
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TheMetricApp",
    url: siteUrl,
    title: "TheMetricApp — Free Financial Calculators & Tax Tools",
    description:
      "Free financial calculators and tax estimators for freelancers, gig workers, sellers, and small business owners. Calculate taxes, fees, profits, and ROI instantly — no sign-up required.",
    images: [
      {
        url: "/api/og?title=TheMetricApp%20%E2%80%94%20Free%20Financial%20Calculators%20%26%20Tax%20Tools&description=Free%20financial%20calculators%20and%20tax%20estimators%20for%20freelancers%2C%20gig%20workers%2C%20sellers%2C%20and%20small%20business%20owners.%20Calculate%20taxes%2C%20fees%2C%20profits%2C%20and%20ROI%20instantly%20%E2%80%94%20no%20sign-up%20required.&type=website",
        width: 1200,
        height: 630,
        alt: "TheMetricApp — Free Financial Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheMetricApp — Free Financial Calculators & Tax Tools",
    description:
      "Free, fast, and accurate financial calculators for taxes, fees, profits, savings, and ROI.",
    images: ["/api/og?title=TheMetricApp%20%E2%80%94%20Free%20Financial%20Calculators%20%26%20Tax%20Tools&description=Free%20financial%20calculators%20and%20tax%20estimators%20for%20freelancers%2C%20gig%20workers%2C%20sellers%2C%20and%20small%20business%20owners.%20Calculate%20taxes%2C%20fees%2C%20profits%2C%20and%20ROI%20instantly%20%E2%80%94%20no%20sign-up%20required.&type=website"],
    creator: "@themetricapp",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/themetric-favicon.png",
    shortcut: "/themetric-favicon.png",
    apple: [
      { url: "/themetric-favicon.png", sizes: "180x180" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/themetric-favicon.png" type="image/png" />
        <link rel="alternate icon" href="/themetric-favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/themetric-favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,500;0,600;0,700;1,600&family=Public+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9708564928175812"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QKWHLMVF80"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'granted',
              wait_for_update: 500
            });
            gtag('js', new Date());
            gtag('config', 'G-QKWHLMVF80');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-[var(--color-accent)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
