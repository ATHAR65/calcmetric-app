export default function SchemaMarkup({ data, schema: schemaProp }) {
  // Accept both `data` (from CalculatorShell) and `schema` (from blog pages)
  const mergedData = data || schemaProp;

  let schema;

  if (mergedData) {
    // If an array of schemas is passed, wrap them in @graph
    if (Array.isArray(mergedData)) {
      // Strip redundant @context from items inside @graph (the top-level one suffices)
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
