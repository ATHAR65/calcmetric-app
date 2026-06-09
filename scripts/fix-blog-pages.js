const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');
const siteUrl = "https://www.themetricapp.com";

const blogs = fs.readdirSync(BLOG_DIR).filter(d => {
  const pagePath = path.join(BLOG_DIR, d, 'page.js');
  return fs.existsSync(pagePath);
});

console.log(`Found ${blogs.length} blog pages to fix`);

let fixed = 0;
let skipped = 0;

for (const blog of blogs) {
  const pagePath = path.join(BLOG_DIR, blog, 'page.js');
  let content = fs.readFileSync(pagePath, 'utf8');
  const original = content;

  // Fix 1: Add hreflang languages to alternates if missing
  if (!content.includes('"languages":')) {
    content = content.replace(
      /alternates:\s*\{[\s\S]*?canonical:\s*(".*?")[\s\S]*?\}/,
      (match) => {
        const canonicalMatch = match.match(/canonical:\s*(".*?")/);
        const canonical = canonicalMatch ? canonicalMatch[1] : `"${siteUrl}/blog/${blog}"`;
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

  // Fix 4: Ensure OG image alt is clean (no | TheMetricApp)
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

  // Fix 5: Fix author schema - ensure Person type with proper name
  content = content.replace(
    /author:\s*\{[\s\S]*?"@type":\s*"Organization"[\s\S]*?\}/g,
    (match) => {
      return `author: {\n      "@type": "Person",\n      name: "TheMetricApp Team",\n      url: "https://www.themetricapp.com/authors/themetricapp-team",\n      sameAs: ["https://www.themetricapp.com/authors/themetricapp-team"]\n    }`;
    }
  );

  if (content !== original) {
    fs.writeFileSync(pagePath, content, 'utf8');
    fixed++;
    console.log(`✅ Fixed: ${blog}`);
  } else {
    skipped++;
    console.log(`⏭️  Skipped (already good): ${blog}`);
  }
}

console.log(`\n📊 Summary: ${fixed} fixed, ${skipped} skipped, ${blogs.length} total`);