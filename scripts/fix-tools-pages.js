const fs = require('fs');
const path = require('path');

const TOOLS_DIR = path.join(__dirname, '..', 'src', 'app', 'tools');
const siteUrl = "https://www.themetricapp.com";

const tools = fs.readdirSync(TOOLS_DIR).filter(d => {
  const pagePath = path.join(TOOLS_DIR, d, 'page.js');
  return fs.existsSync(pagePath);
});

console.log(`Found ${tools.length} tools pages to fix`);

let fixed = 0;
let skipped = 0;

for (const tool of tools) {
  const pagePath = path.join(TOOLS_DIR, tool, 'page.js');
  let content = fs.readFileSync(pagePath, 'utf8');
  const original = content;

  // Fix 1: Add hreflang languages to alternates if missing
  if (!content.includes('"languages":')) {
    content = content.replace(
      /alternates:\s*\{[\s\S]*?canonical:\s*(".*?")[\s\S]*?\}/,
      (match) => {
        const canonicalMatch = match.match(/canonical:\s*(".*?")/);
        const canonical = canonicalMatch ? canonicalMatch[1] : `"${siteUrl}/tools/${tool}"`;
        return `alternates: {\n    languages: {\n      "en-us": ${canonical},\n      "en-gb": ${canonical},\n      "x-default": ${canonical},\n    },\n    canonical: ${canonical},\n  }`;
      }
    );
  }

  // Fix 2: Remove | TheMetricApp from OG title
  content = content.replace(
    /openGraph:\s*\{[\s\S]*?title:\s*(".*?")/g,
    (match, titleVal) => {
      let title = eval(titleVal);
      title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
      return match.replace(titleVal, `"${title}"`);
    }
  );

  // Fix 3: Remove | TheMetricApp from twitter title
  content = content.replace(
    /twitter:\s*\{[\s\S]*?title:\s*(".*?")/g,
    (match, titleVal) => {
      let title = eval(titleVal);
      title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
      return match.replace(titleVal, `"${title}"`);
    }
  );

  // Fix 4: Ensure OG image alt is clean
  content = content.replace(
    /images:\s*\[\{\s*url:[^}]*alt:\s*"[^"]*"[^}]*\}\]/g,
    (match) => {
      if (match.includes('| TheMetricApp"') || match.includes('| TheMetricApp')) {
        return match.replace(/alt:\s*"[^"]*"/, (altMatch) => {
          const alt = altMatch.match(/"([^"]*)"/)[1];
          const cleanAlt = alt.replace(/\s*\|\s*TheMetricApp\s*$/, '');
          return `alt: "${cleanAlt}"`;
        });
      }
      return match;
    }
  );

  if (content !== original) {
    fs.writeFileSync(pagePath, content, 'utf8');
    fixed++;
    console.log(`✅ Fixed: ${tool}`);
  } else {
    skipped++;
    console.log(`⏭️  Skipped (already good): ${tool}`);
  }
}

console.log(`\n📊 Summary: ${fixed} fixed, ${skipped} skipped, ${tools.length} total`);