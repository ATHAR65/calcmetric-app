import { notFound } from "next/navigation";
import { calculators } from "@/lib/siteConfig";
import EmbedFrame from "./EmbedFrame";

// A few calculators have a live page + Calculator.js but are not part of the
// main `calculators` grid array (several are top-traffic pages, e.g.
// national-insurance and amazon-fba). Embeds must still cover them.
const EXTRA_CALCULATORS = {
  "amazon-fba-fee-calculator": "Amazon FBA Fee Calculator",
  "mortgage-calculator-uk": "Mortgage Calculator UK",
  "national-insurance-calculator-uk": "National Insurance Calculator UK",
  "self-assessment-tax-calculator-uk": "Self Assessment Tax Calculator UK",
};

const titleBySlug = {
  ...Object.fromEntries(
    calculators.map((c) => [c.href.replace("/calculators/", ""), c.title])
  ),
  ...EXTRA_CALCULATORS,
};

function getCalculatorTitle(slug) {
  return titleBySlug[slug] || null;
}

export function generateStaticParams() {
  return Object.keys(titleBySlug).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = getCalculatorTitle(slug) || "Calculator";
  return {
    title: `${title} — Embeddable Widget`,
    // The embed surface is a duplicate of the canonical calculator page; keep it
    // out of the index but let crawlers follow the in-widget attribution link.
    robots: { index: false, follow: true },
    alternates: {
      canonical: `https://www.themetricapp.com/calculators/${slug}`,
    },
  };
}

export default async function EmbedPage({ params }) {
  const { slug } = await params;
  const title = getCalculatorTitle(slug);
  if (!title) notFound();
  return <EmbedFrame slug={slug} title={title} />;
}
