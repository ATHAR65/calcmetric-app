const fs = require("fs");
const path = require("path");

const siteUrl = "https://www.themetricapp.com";

// ============================================
// 1. Fix blog post author schema: Organization → Person
// ============================================
function fixBlogAuthorSchema() {
  const blogDir = path.join(__dirname, "..", "src", "app", "blog");
  const folders = fs.readdirSync(blogDir);
  let fixed = 0;

  for (const folder of folders) {
    const pagePath = path.join(blogDir, folder, "page.js");
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, "utf8");
    let changed = false;

    // Replace author Organization with Person in blog posting schemas
    const authorPatterns = [
      // Pattern: author: { "@type": "Organization", name: "TheMetricApp Team" }
      {
        regex: /author:\s*\{\s*"@type":\s*"Organization",\s*name:\s*"TheMetricApp Team"\s*\}/g,
        replacement:
          'author: { "@type": "Person", name: "TheMetricApp Team", url: "' +
          siteUrl +
          '/authors/themetricapp-team/", sameAs: ["' +
          siteUrl +
          '/authors/themetricapp-team/"] }',
      },
      // Pattern: "author": { "@type": "Organization", "name": "TheMetricApp Team" }
      {
        regex: /"author":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"TheMetricApp Team"\s*\}/g,
        replacement:
          '"author": { "@type": "Person", "name": "TheMetricApp Team", "url": "' +
          siteUrl +
          '/authors/themetricapp-team/", "sameAs": ["' +
          siteUrl +
          '/authors/themetricapp-team/"] }',
      },
      // Pattern: author: { "@type": "Organization", name: "TheMetricApp Team" }, (with trailing comma)
      {
        regex: /author:\s*\{\s*"@type":\s*"Organization",\s*name:\s*"TheMetricApp Team"\s*\},?\s*\n/g,
        replacement:
          'author: { "@type": "Person", name: "TheMetricApp Team", url: "' +
          siteUrl +
          '/authors/themetricapp-team/", sameAs: ["' +
          siteUrl +
          '/authors/themetricapp-team/"] },\n',
      },
      // Pattern: "author": { "@type": "Organization", "name": "TheMetricApp Team" }, (with trailing comma)
      {
        regex: /"author":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"TheMetricApp Team"\s*\},?\s*\n/g,
        replacement:
          '"author": { "@type": "Person", "name": "TheMetricApp Team", "url": "' +
          siteUrl +
          '/authors/themetricapp-team/", "sameAs": ["' +
          siteUrl +
          '/authors/themetricapp-team/"] },\n',
      },
    ];

    for (const { regex, replacement } of authorPatterns) {
      const newContent = content.replace(regex, replacement);
      if (newContent !== content) {
        content = newContent;
        changed = true;
      }
    }

    // Add sameAs to publisher Organization in blog posts (if missing)
    if (
      !content.includes('"sameAs":') &&
      content.includes('"publisher"') &&
      content.includes('"@type": "Organization"')
    ) {
      // Add sameAs after publisher Organization logo
      const pubPattern =
        /("publisher":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"TheMetricApp",\s*"logo":\s*\{\s*"@type":\s*"ImageObject",\s*"url":\s*"[^"]+"\s*\})\s*\}/;
      if (pubPattern.test(content)) {
        content = content.replace(
          pubPattern,
          '$1, "sameAs": ["https://twitter.com/themetricapp"] }'
        );
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(pagePath, content, "utf8");
      fixed++;
    }
  }

  console.log(`✅ Fixed author schema in ${fixed} blog posts`);
}

// ============================================
// 2. Add dateModified to calculator layout files
// ============================================
function addDateModifiedToCalculators() {
  const calcDir = path.join(__dirname, "..", "src", "app", "calculators");
  const folders = fs.readdirSync(calcDir);
  let fixed = 0;
  const today = new Date().toISOString().split("T")[0];

  for (const folder of folders) {
    const layoutPath = path.join(calcDir, folder, "layout.js");
    if (!fs.existsSync(layoutPath)) continue;

    let content = fs.readFileSync(layoutPath, "utf8");

    // Skip if already has dateModified
    if (content.includes("dateModified")) continue;

    // Add dateModified after the metadata export's closing brace
    // Find the alternates section and add dateModified after it
    if (content.includes("alternates")) {
      // Try to add dateModified after alternates block
      const altPattern = /alternates:\s*\{[^}]+\}/;
      if (altPattern.test(content)) {
        content = content.replace(
          altPattern,
          (match) => `${match},\n  dateModified: "${today}"`
        );
        fs.writeFileSync(layoutPath, content, "utf8");
        fixed++;
      }
    }
  }

  console.log(`✅ Added dateModified to ${fixed} calculator layouts`);
}

// Run
fixBlogAuthorSchema();
addDateModifiedToCalculators();
