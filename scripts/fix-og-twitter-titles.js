/**
 * Fix OG/twitter title mismatch in 2 special-case pages that use `openGraph:`
 * (the batch script's `og:` regex didn't match `openGraph:`)
 *
 * Run: node scripts/fix-og-twitter-titles.js
 */

const fs = require("fs");
const path = require("path");

const CALC_DIR = path.join(__dirname, "..", "src", "app", "calculators");

const fixes = {
  "credit-card-payoff-calculator": {
    ogTitle: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche | TheMetricApp",
    twitterTitle: "Credit Card Payoff Calculator 2026 — Snowball vs Avalanche | TheMetricApp",
  },
  "student-loan-payoff-calculator": {
    twitterTitle: "Student Loan Payoff Calculator 2026 — Pay Off Loans Faster | TheMetricApp",
  },
};

let fixed = 0;

Object.entries(fixes).forEach(([slug, fix]) => {
  const pagePath = path.join(CALC_DIR, slug, "page.js");
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, "utf-8");

  if (fix.ogTitle) {
    // Fix openGraph title - match openGraph: { ... title: "..."
    const ogRegex = /openGraph:\s*\{[^}]*?title:\s*"[^"]*"/;
    if (ogRegex.test(content)) {
      content = content.replace(ogRegex, (match) => {
        return match.replace(/title:\s*"[^"]*"/, `title: ${JSON.stringify(fix.ogTitle)}`);
      });
    }
  }

  if (fix.twitterTitle) {
    // Fix twitter title
    const twitterRegex = /twitter:\s*\{[^}]*?title:\s*"[^"]*"/;
    if (twitterRegex.test(content)) {
      content = content.replace(twitterRegex, (match) => {
        return match.replace(/title:\s*"[^"]*"/, `title: ${JSON.stringify(fix.twitterTitle)}`);
      });
    }
  }

  if (fix.ogTitle) {
    // Also fix the og image alt text and URL
    const imgRegex = /\/api\/og\?title=[^"]*/;
    content = content.replace(imgRegex, `/api/og?title=${encodeURIComponent(fix.ogTitle)}`);
    
    // Fix image alt text
    const altRegex = /alt:\s*"[^"]*"/;
    // Only fix the one inside the images array (last occurrence of alt)
    const lastAlt = content.lastIndexOf('alt: "');
    if (lastAlt > -1) {
      const beforeAlt = content.substring(0, lastAlt);
      const afterAlt = content.substring(lastAlt);
      content = beforeAlt + afterAlt.replace(/alt:\s*"[^"]*"/, `alt: ${JSON.stringify(fix.ogTitle)}`);
    }
  }

  fs.writeFileSync(pagePath, content, "utf-8");
  fixed++;
  console.log(`  Fixed: ${slug}/page.js`);
});

console.log(`\n=== Done: ${fixed} files fixed ===`);
