export default function SchemaMarkup({ data, schema: schemaProp }) {
  // Accept both `data` (from CalculatorShell) and `schema` (from blog pages)
  const mergedData = data || schemaProp;

  let schema;

  if (mergedData) {
    if (Array.isArray(mergedData)) {
      const cleanItems = mergedData.map((item) => {
        if (item && item["@context"]) {
          const { "@context": _ctx, ...rest } = item;
          return rest;
        }
        return item;
      });
      schema = {
        "@context": "https://schema.org",
        "@graph": cleanItems,
      };
    } else if (mergedData["@type"]) {
      schema = mergedData;
    } else {
      schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        ...mergedData,
      };
    }
  } else {
    schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
