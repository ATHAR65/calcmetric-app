/**
 * Script: fix-logo-urls.js
 * Purpose: Normalize all non-www URLs to www in blog page.js schema data.
 * Replaces: "https://themetricapp.com/ -> "https://www.themetricapp.com/
 * This catches logo URLs, breadcrumb URLs, mainEntityOfPage, @id, etc.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const projectRoot = path.resolve(__dirname, "..");
const blogDir = path.join(projectRoot, "src", "app", "blog");

const files = fs.readdirSync(blogDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => path.join(blogDir, d.name, "page.js"))
  .filter((f) => fs.existsSync(f));

let updatedCount = 0;
let errorCount = 0;

for (const file of files) {
  const original = fs.readFileSync(file, "utf-8");
  const slug = path.basename(path.dirname(file));

  // Replace non-www URLs with www URLs
  const updated = original.replace(
    /"https:\/\/themetricapp\.com\//g,
    '"https://www.themetricapp.com/'
  );

  if (updated !== original) {
    fs.writeFileSync(file, updated, "utf-8");
    console.log(`✅ ${slug} — normalized non-www URLs to www`);
    updatedCount++;
  }
}

console.log(`\n📊 Summary: ${updatedCount} files updated, ${errorCount} errors.`);
