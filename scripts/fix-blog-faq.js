const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');

const blogs = fs.readdirSync(BLOG_DIR).filter(d => {
  const pagePath = path.join(BLOG_DIR, d, 'page.js');
  return fs.existsSync(pagePath);
});

console.log(`Found ${blogs.length} blog pages`);

let fixed = 0;
let alreadyGood = 0;

for (const blog of blogs) {
  const pagePath = path.join(BLOG_DIR, blog, 'page.js');
  let content = fs.readFileSync(pagePath, 'utf8');
  const original = content;

  // Check if faqSchema is referenced but not defined
  const usesFaq = content.includes('faqSchema');
  const definesFaq = content.includes('const faqSchema');

  if (usesFaq && !definesFaq) {
    // Remove faqSchema from the SchemaMarkup data array
    content = content.replace(/data=\{\[articleSchema,\s*breadcrumbSchema,\s*faqSchema\]\}/g, 'data={[articleSchema, breadcrumbSchema]}');
    content = content.replace(/data=\{\[articleSchema,\s*faqSchema,\s*breadcrumbSchema\]\}/g, 'data={[articleSchema, breadcrumbSchema]}');
    content = content.replace(/data=\{\[faqSchema,\s*articleSchema,\s*breadcrumbSchema\]\}/g, 'data={[articleSchema, breadcrumbSchema]}');
    content = content.replace(/data=\{\[faqSchema,\s*breadcrumbSchema,\s*articleSchema\]\}/g, 'data={[articleSchema, breadcrumbSchema]}');
    content = content.replace(/data=\{\[breadcrumbSchema,\s*faqSchema,\s*articleSchema\]\}/g, 'data={[articleSchema, breadcrumbSchema]}');
    content = content.replace(/data=\{\[breadcrumbSchema,\s*articleSchema,\s*faqSchema\]\}/g, 'data={[articleSchema, breadcrumbSchema]}');
  }

  if (content !== original) {
    fs.writeFileSync(pagePath, content, 'utf8');
    fixed++;
    console.log(`✅ Fixed: ${blog}`);
  } else {
    alreadyGood++;
  }
}

console.log(`\n📊 Summary: ${fixed} fixed, ${alreadyGood} already good, ${blogs.length} total`);
