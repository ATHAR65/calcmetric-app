const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');
const siteUrl = "https://www.themetricapp.com";

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

  // Approach: find articleSchema and rebuild it properly
  // Look for the articleSchema definition from "const articleSchema = {" to its closing
  
  // Step 1: Remove ALL standalone mainEntityOfPage that appear OUTSIDE articleSchema
  // Pattern: "}, mainEntityOfPage: { ... }," where mainEntityOfPage is after author close
  // This is tricky because in some files it's inside, in others outside
  
  // Step 2: For ALL files, ensure author is properly structured
  // and remove any mainEntityOfPage that's not inside articleSchema
  
  // Detect if there's a broken pattern: author closing } followed by mainEntityOfPage on same line
  if (content.includes('sameAs:') && content.includes('mainEntityOfPage:')) {
    // Check if mainEntityOfPage is outside articleSchema
    // Look for the pattern: sameAs: [...] } }, mainEntityOfPage: 
    // or sameAs: [...] }, mainEntityOfPage: where this is on the author's closing line
    
    // Rebuild: find the author block and ensure it closes properly
    // Then find mainEntityOfPage and either move it inside or remove it
    
    // Simplest fix: replace the entire articleSchema with a properly formatted one
    // by extracting the key fields
    
    // Find articleSchema start
    const schemaMatch = content.match(/const\s+articleSchema\s*=\s*\{/);
    if (schemaMatch) {
      const startIdx = schemaMatch.index;
      
      // Find headline
      const headlineMatch = content.match(/headline:\s*"([^"]*)"/);
      const headline = headlineMatch ? headlineMatch[1] : '';
      
      // Find description
      const descMatch = content.match(/description:\s*\n?\s*"([^"]*)"/);
      const description = descMatch ? descMatch[1] : '';
      
      // Find datePublished
      const datePubMatch = content.match(/datePublished:\s*"([^"]*)"/);
      const datePublished = datePubMatch ? datePubMatch[1] : '';
      
      // Find dateModified
      const dateModMatch = content.match(/dateModified:\s*"([^"]*)"/);
      const dateModified = dateModMatch ? dateModMatch[1] : '';
      
      // Find image
      const imageMatch = content.match(/image:\s*"([^"]*)"/);
      const image = imageMatch ? imageMatch[1] : '';
      
      // Build proper articleSchema
      const newArticleSchema = `const articleSchema = {
    "@type": "BlogPosting",
    headline: "${headline}",
    description: "${description}",
    datePublished: "${datePublished}",
    dateModified: "${dateModified}",
    author: {
      "@type": "Person",
      name: "TheMetricApp",
      url: "${siteUrl}/authors/themetricapp",
      sameAs: ["${siteUrl}/authors/themetricapp"]
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "${siteUrl}/blog/${blog}",
    },
    image: "${image}",
  }`;
      
      // Find the end of the old articleSchema
      // It ends with } or }; followed by const breadcrumbSchema
      const breadcrumbIdx = content.indexOf('const breadcrumbSchema');
      if (breadcrumbIdx > startIdx) {
        // Everything between startIdx and breadcrumbIdx is the old articleSchema
        // Replace it
        const before = content.substring(0, startIdx);
        const after = content.substring(breadcrumbIdx);
        content = before + newArticleSchema + '\n\n  ' + after;
      }
    }
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
