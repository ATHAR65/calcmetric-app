const fs = require("fs");
const path = require("path");

const siteUrl = "https://www.themetricapp.com";

// UK-specific calculators that need hreflang tags
const ukCalcs = [
  "vat-calculator-uk",
  "income-tax-calculator-uk",
  "national-insurance-calculator-uk",
  "self-assessment-tax-calculator-uk",
  "hourly-to-annual-salary-calculator-uk",
  "mortgage-calculator-uk",
];

const calcDir = path.join(__dirname, "..", "src", "app", "calculators");
let fixed = 0;

for (const calc of ukCalcs) {
  const layoutPath = path.join(calcDir, calc, "layout.js");
  if (!fs.existsSync(layoutPath)) {
    console.log(`⚠️  Skipped (not found): ${calc}`);
    continue;
  }

  let content = fs.readFileSync(layoutPath, "utf8");

  // Skip if already has hreflang
  if (content.includes("languages")) {
    console.log(`⏭️  Already has hreflang: ${calc}`);
    continue;
  }

  // Add hreflang to alternates block
  if (content.includes("alternates")) {
    // Add languages to existing alternates
    content = content.replace(
      /alternates:\s*\{/,
      (match) => {
        return `alternates: {\n    languages: {\n      "en-gb": siteUrl + "/calculators/${calc}",\n      "en-us": siteUrl + "/calculators/${calc}",\n    },`;
      }
    );
  } else {
    // Add alternates block before openGraph
    content = content.replace(
      /openGraph:/,
      `alternates: {\n    canonical: siteUrl + "/calculators/${calc}",\n    languages: {\n      "en-gb": siteUrl + "/calculators/${calc}",\n      "en-us": siteUrl + "/calculators/${calc}",\n    },\n  },\n  openGraph:`
    );
  }

  // Also add og:locale for UK
  if (!content.includes("en_GB")) {
    content = content.replace(
      /twitter:\s*\{/,
      `twitter: {\n    card: "summary_large_image",`
    );
  }

  fs.writeFileSync(layoutPath, content, "utf8");
  fixed++;
  console.log(`✅ Added hreflang: ${calc}`);
}

console.log(`\n🎉 Added hreflang to ${fixed} UK calculator layouts`);
