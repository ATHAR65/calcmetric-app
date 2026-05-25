export default function SchemaMarkup({ data, schema: schemaProp }) {
  // Accept both `data` (from CalculatorShell) and `schema` (from blog pages)
  const mergedData = data || schemaProp;

  let schema;

  if (mergedData) {
    // If an array of schemas is passed, wrap them in @graph
    if (Array.isArray(mergedData)) {
      schema = {
        "@context": "https://schema.org",
        "@graph": mergedData,
      };
    } else {
      // If data has specific @type, use it as-is; otherwise merge with WebApplication defaults
      if (mergedData["@type"]) {
        schema = mergedData;
      } else {
        schema = {
          "@context": "https://schema.org",
          "@type": "WebApplication",
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
    }
  } else {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
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
