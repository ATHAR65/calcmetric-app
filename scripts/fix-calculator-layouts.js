const fs = require('fs');
const path = require('path');

const CALC_DIR = path.join(__dirname, '..', 'src', 'app', 'calculators');
const siteUrl = "https://www.themetricapp.com";

const calculators = fs.readdirSync(CALC_DIR).filter(d => {
  const layoutPath = path.join(CALC_DIR, d, 'layout.js');
  return fs.existsSync(layoutPath);
});

console.log(`Found ${calculators.length} calculator layouts to fix`);

let fixed = 0;
let skipped = 0;

for (const calc of calculators) {
  const layoutPath = path.join(CALC_DIR, calc, 'layout.js');
  let content = fs.readFileSync(layoutPath, 'utf8');
  const original = content;

  // Fix 1: Add hreflang languages to alternates if missing
  if (!content.includes('"languages":')) {
    content = content.replace(
      /alternates:\s*\{[\s\S]*?canonical:\s*(".*?")[\s\S]*?\}/,
      (match) => {
        const canonicalMatch = match.match(/canonical:\s*(".*?")/);
        const canonical = canonicalMatch ? canonicalMatch[1] : `"${siteUrl}/calculators/${calc}"`;
        return `alternates: {\n    languages: {\n      "en-us": ${canonical},\n      "en-gb": ${canonical},\n      "x-default": ${canonical},\n    },\n    canonical: ${canonical},\n  }`;
      }
    );
  }

  // Fix 2: Ensure dateModified exists (use 2026-06-09)
  if (!content.includes('dateModified:')) {
    content = content.replace(
      /canonical:\s*".*?"\s*,?\s*\n/,
      (match) => `${match}  dateModified: "2026-06-09",\n`
    );
  }

  // Fix 3: Ensure OG image has alt text (not just title)
  content = content.replace(
    /images:\s*\[\{\s*url:[^}]*alt:\s*"[^"]*"[^}]*\}\]/g,
    (match) => {
      // Check if alt is just the title (ends with | TheMetricApp or similar)
      if (match.includes('| TheMetricApp"') || match.includes('| TheMetricApp')) {
        return match.replace(/alt:\s*"[^"]*"/, (altMatch) => {
          const alt = altMatch.match(/"([^"]*)"/)[1];
          // Create a cleaner alt without site name
          const cleanAlt = alt.replace(/\s*\|\s*TheMetricApp\s*$/, '');
          return `alt: "${cleanAlt}"`;
        });
      }
      return match;
    }
  );

  // Fix 4: Remove | TheMetricApp from OG title and twitter title
  content = content.replace(
    /openGraph:\s*\{[\s\S]*?title:\s*(".*?")/g,
    (match, titleVal) => {
      let title = eval(titleVal);
      title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
      return match.replace(titleVal, `"${title}"`);
    }
  );

  content = content.replace(
    /twitter:\s*\{[\s\S]*?title:\s*(".*?")/g,
    (match, titleVal) => {
      let title = eval(titleVal);
      title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
      return match.replace(titleVal, `"${title}"`);
    }
  );

  // Fix 5: Ensure OG locale and country for UK calculators
  if (calc.includes('uk') || calc.includes('UK')) {
    if (!content.includes('"og:locale":')) {
      content = content.replace(
        /other:\s*\{[\s\S]*?\}/,
        (match) => {
          if (match.includes('"og:locale"')) return match;
          return match.replace('}', '    "og:locale": "en_GB",\n    "og:country-name": "United Kingdom",\n  }');
        }
      );
    }
  } else {
    // US calculators
    if (!content.includes('"og:locale":')) {
      content = content.replace(
        /other:\s*\{[\s\S]*?\}/,
        (match) => {
          if (match.includes('"og:locale"')) return match;
          return match.replace('}', '    "og:locale": "en_US",\n  }');
        }
      );
    }
  }

  if (content !== original) {
    fs.writeFileSync(layoutPath, content, 'utf8');
    fixed++;
    console.log(`✅ Fixed: ${calc}`);
  } else {
    skipped++;
    console.log(`⏭️  Skipped (already good): ${calc}`);
  }
}

console.log(`\n📊 Summary: ${fixed} fixed, ${skipped} skipped, ${calculators.length} total`);