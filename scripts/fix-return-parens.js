/**
 * Fix: Add missing `);` after `</>` closing fragment in calculator page.js files.
 * The SEO batch script forgot to close the `return (` with `)`.
 *
 * Run: node scripts/fix-return-parens.js
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

  // Fix: `</>\n}` → `</>\n  );`  (close the return ( expression)
  if (content.includes("</>\n}")) {
    content = content.replace(
      /<\/>\n\s*\}/g,
      "</>\n  );\n}"
    );
    fs.writeFileSync(pagePath, content, "utf-8");
    fixed++;
    console.log(`  Fixed: ${slug}/page.js`);
  }
});

console.log(`\n=== Done: ${fixed} files fixed ===`);
