/**
 * Fix `</>;` → `</>` syntax error in all calculator page.js files.
 * The SEO batch script left a stray semicolon after closing fragments.
 *
 * Run: node scripts/fix-fragment-semicolon.js
 */

const fs = require("fs");
const path = require("path");

const CALC_DIR = path.join(__dirname, "..", "src", "app", "calculators");

const calculatorDirs = fs.readdirSync(CALC_DIR).filter((d) => {
  return fs.statSync(path.join(CALC_DIR, d)).isDirectory();
});

let fixed = 0;

calculatorDirs.forEach((slug) => {
  const pagePath = path.join(CALC_DIR, slug, "page.js");
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, "utf-8");

  // Fix `</>;` → `</>` 
  // The regex matches any whitespace before </>; and preserves the whitespace before </>
  if (content.includes("</>;")) {
    content = content.replace(/<\/>\s*;/g, "</>");
    fs.writeFileSync(pagePath, content, "utf-8");
    fixed++;
    console.log(`  Fixed: ${slug}/page.js`);
  }
});

console.log(`\n=== Done: ${fixed} files fixed ===`);
