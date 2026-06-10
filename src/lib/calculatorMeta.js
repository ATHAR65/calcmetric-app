import { siteUrl } from "./siteConfig";

export function buildCalculatorMetadata({ slug, name, description }) {
  const url = `${siteUrl}/calculators/${slug}`;
  const title = name.length > 55 ? name : `${name} | TheMetricApp`;

  return {
    title: { absolute: title.length > 60 ? name : title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: name,
      description,
      url,
      siteName: "TheMetricApp",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&type=calculator`,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      creator: "@themetricapp",
    },
  };
}
