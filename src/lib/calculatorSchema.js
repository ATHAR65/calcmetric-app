import { getAggregateRatingSchema } from "./ratings-data";

const siteUrl = "https://www.themetricapp.com";

export function buildSoftwareApplicationSchema({ slug, name, description }) {
  const path = `/calculators/${slug}`;
  return {
    "@type": "SoftwareApplication",
    name,
    description,
    url: siteUrl + path,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: getAggregateRatingSchema(slug),
  };
}

export function buildBreadcrumbSchema({ slug, name }) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "WebPage", "@id": siteUrl + "/" } },
      { "@type": "ListItem", position: 2, name: "Calculators", item: { "@type": "WebPage", "@id": `${siteUrl}/calculators` } },
      { "@type": "ListItem", position: 3, name },
    ],
  };
}

export function stripSchemaContext(schema) {
  if (!schema) return schema;
  if (schema["@context"]) {
    const { "@context": _ctx, ...rest } = schema;
    return rest;
  }
  return schema;
}

export function buildCalculatorSchemaGraph({ slug, name, description, extraSchemas = [] }) {
  const appSchema = buildSoftwareApplicationSchema({ slug, name, description });
  const breadcrumbSchema = buildBreadcrumbSchema({ slug, name });
  const cleaned = extraSchemas.map(stripSchemaContext).filter(Boolean);
  return [appSchema, breadcrumbSchema, ...cleaned];
}
