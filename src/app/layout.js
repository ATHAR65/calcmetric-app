import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ThemeProvider from "@/components/ThemeProvider";
import ChromeGate from "@/components/ChromeGate";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TheMetricApp",
  url: siteUrl,
  logo: `${siteUrl}/themetric-favicon.png`,
  description: "Free financial calculators and tax estimators for freelancers, gig workers, Amazon sellers, and small business owners.",
  sameAs: [
    "https://twitter.com/themetricapp",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "themetricapp@gmail.com",
    contactType: "customer support",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/themetric-favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="alternate icon" href="/themetric-favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/themetric-favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9708564928175812"
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
          <ChromeGate
            header={<Header />}
            footer={<Footer />}
            cookie={<CookieConsent />}
          >
            {children}
          </ChromeGate>
        </ThemeProvider>
      </body>
    </html>
  );
}
