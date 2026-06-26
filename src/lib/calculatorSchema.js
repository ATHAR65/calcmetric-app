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
    // Note: aggregateRating intentionally omitted. Google's review-snippet policy
    // requires ratings sourced from real users and visible on the page. Re-add only
    // when backed by a genuine ratings system (never seeded/fabricated counts).
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

export function buildHowToSchema({ name, description, steps, url }) {
  return {
    "@type": "HowTo",
    name,
    description,
    url,
    step: steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };
}

export function buildCalculatorSchemaGraph({ slug, name, description, extraSchemas = [] }) {
  const appSchema = buildSoftwareApplicationSchema({ slug, name, description });
  const breadcrumbSchema = buildBreadcrumbSchema({ slug, name });
  const cleaned = extraSchemas.map(stripSchemaContext).filter(Boolean);
  return [appSchema, breadcrumbSchema, ...cleaned];
}
