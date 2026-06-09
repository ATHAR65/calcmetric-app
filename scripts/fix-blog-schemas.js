const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');
const siteUrl = "https://www.themetricapp.com";

const blogs = fs.readdirSync(BLOG_DIR).filter(d => {
  const pagePath = path.join(BLOG_DIR, d, 'page.js');
  return fs.existsSync(pagePath);
});

console.log(`Found ${blogs.length} blog pages to check`);

let fixed = 0;
let broken = 0;

for (const blog of blogs) {
  const pagePath = path.join(BLOG_DIR, blog, 'page.js');
  let content = fs.readFileSync(pagePath, 'utf8');
  const original = content;

  // Pattern 1: } },\n    mainEntityOfPage: ... - extra brace before mainEntityOfPage
  // This happens when author closes with } } instead of }
  content = content.replace(
    /(\s*\}\s*\}\s*),(\s*mainEntityOfPage:)/g,
    '$1,$2'
  );

  // Pattern 2: } }, mainEntityOfPage: all on one line
  content = content.replace(
    /(\}\s*\})\s*,\s*mainEntityOfPage:/g,
    '$1, mainEntityOfPage:'
  );

  // Pattern 3: author closing } then } then ,mainEntityOfPage on same line
  // }, mainEntityOfPage: needs to become }, mainEntityOfPage:
  // But we need to ensure the author object and articleSchema are properly structured

  // Pattern 4: standalone mainEntityOfPage outside the schema object
  // This happens when the author replacement broke the object structure
  // We need to find cases where articleSchema is malformed

  // Detect if the file has the broken pattern: articleSchema with bad author closure
  const hasBrokenAuthor = content.includes('} },\n    mainEntityOfPage:') ||
    content.includes('} }, mainEntityOfPage:') ||
    content.match(/author:\s*\{[\s\S]*?sameAs:\s*\[[^\]]*\]\s*\}\s*\}\s*,/);

  // Fix all variations of broken author + mainEntityOfPage
  // The core issue: author object is closed with } } (extra brace) then mainEntityOfPage follows

  // Step 1: Find all instances of author: { ... sameAs: [...] } }
  // and replace with author: { ... sameAs: [...] }
  content = content.replace(
    /(author:\s*\{[^}]*"@type":\s*"Person"[^}]*name:\s*"[^"]*"[^}]*url:\s*"[^"]*"[^}]*sameAs:\s*\[[^\]]*\])\s*\}\s*\}/g,
    '$1 }'
  );

  // Step 2: Fix inline patterns like sameAs: [...] } }, mainEntityOfPage:
  content = content.replace(
    /(sameAs:\s*\[[^\]]*\])\s*\}\s*\}\s*,\s*mainEntityOfPage:/g,
    '$1 } }, mainEntityOfPage:'
  );

  // Step 3: Fix the pattern where mainEntityOfPage is outside articleSchema
  // Look for: } },\n    mainEntityOfPage: or similar
  // This means the articleSchema object is already closed, and mainEntityOfPage is a statement
  // We need to move mainEntityOfPage inside articleSchema

  // Detect: const articleSchema = { ... }  followed by mainEntityOfPage: (outside)
  // Pattern: closing of articleSchema then mainEntityOfPage as standalone
  const articleSchemaPattern = /(const\s+articleSchema\s*=\s*\{[\s\S]*?\})\s*(mainEntityOfPage:)/;
  if (articleSchemaPattern.test(content)) {
    // Move mainEntityOfPage inside the articleSchema object
    content = content.replace(articleSchemaPattern, (match, schema, mainEntity) => {
      // Remove the last } from schema (which closes articleSchema) and add mainEntityOfPage inside
      const fixedSchema = schema.replace(/\}\s*$/, '');
      return `const articleSchema = ${fixedSchema}, ${mainEntity} }`;
    });
  }

  // Step 4: Fix the pattern where } }, closes author then mainEntityOfPage is on next line
  // author: { ... } },\n    mainEntityOfPage: { ... }
  // Should be: author: { ... }, mainEntityOfPage: { ... }
  content = content.replace(
    /(sameAs:\s*\[[^\]]*\])\s*\}\s*\}\s*,\s*\n(\s*mainEntityOfPage:)/g,
    '$1 } },\n$2'
  );

  // Step 5: Fix pattern: } }, mainEntityOfPage: on one line (extra brace)
  content = content.replace(
    /sameAs:\s*\[([^\]]*)\]\s*\}\s*\}\s*,\s*mainEntityOfPage:/g,
    `sameAs: [$1] } }, mainEntityOfPage:`
  );

  // Step 6: Fix the pattern in solo-401k etc where author closes } then extra }
  // sameAs: [...] } \n }, - extra closing brace
  content = content.replace(
    /(sameAs:\s*\[[^\]]*\])\s*\}\s*\n\s*\}/g,
    '$1 }\n    }'
  );

  // Step 7: Fix author: {... } \n  } pattern (extra brace after author)
  content = content.replace(
    /(author:\s*\{[^}]*"@type":\s*"Person"[^}]*name:\s*"[^"]*"[^}]*url:\s*"[^"]*"[^}]*sameAs:\s*\[[^\]]*\])\s*\}\s*\n\s*\}/g,
    '$1 }\n    }'
  );

  if (content !== original) {
    fs.writeFileSync(pagePath, content, 'utf8');
    fixed++;
    console.log(`✅ Fixed: ${blog}`);
  } else {
    // Check if it's actually broken by looking for syntax error patterns
    const hasIssue = content.includes('} },\n    mainEntityOfPage:') ||
      content.includes('} }, mainEntityOfPage:') ||
      content.match(/sameAs:\s*\[[^\]]*\]\s*\}\s*\}\s*,/) ||
      (content.includes('articleSchema') && content.includes('mainEntityOfPage') && content.split('mainEntityOfPage').length > 2);
    if (hasIssue) {
      broken++;
      console.log(`❌ Still broken: ${blog}`);
    }
  }
}

console.log(`\n📊 Summary: ${fixed} fixed, ${broken} still broken, ${blogs.length} total`);
