const fs = require('fs');
const path = require('path');

const siteRoot = path.resolve(__dirname, '..');
const siteUrl = 'https://www.themetricapp.com';
const logoUrl = siteUrl + '/logo.png';

function findFiles(dir, fileName) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fp = path.join(dir, item.name);
    if (item.isDirectory() && !['node_modules', '.next', '.git'].includes(item.name)) {
      results.push(...findFiles(fp, fileName));
    } else if (item.name === fileName) {
      results.push(fp);
    }
  }
  return results;
}

const blogFiles = findFiles(path.join(siteRoot, 'src', 'app', 'blog'), 'page.js');
let fixedCount = 0;

for (const filePath of blogFiles) {
  const relPath = path.relative(siteRoot, filePath).replace(/\\/g, '/');
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // Fix 1: BlogPosting/Article missing image field
  // Add image to articleSchema if missing
  if (content.includes('"@type": "BlogPosting"') || content.includes('"@type": "Article"')) {
    // Check if image is missing from the article schema
    // Find the articleSchema block and check for image property
    const articleMatch = content.match(/const\s+articleSchema\s*=\s*\{[\s\S]*?\n\s*\};/);
    if (articleMatch && !articleMatch[0].includes('image:')) {
      // Add image before the closing brace
      const slug = filePath.split(path.sep).slice(-2, -1)[0];
      const ogImageUrl = `/api/og?title=${encodeURIComponent(slug.replace(/-/g, ' '))}&type=article`;
      const imageLine = `  image: "${ogImageUrl}",`;
      const insertPoint = articleMatch[0].lastIndexOf('\n  }');
      if (insertPoint > 0) {
        const newSchema = articleMatch[0].substring(0, insertPoint) + '\n' + imageLine + '\n  }';
        content = content.replace(articleMatch[0], newSchema);
      }
    }
  }

  // Fix 2: Publisher missing logo
  // Find all publisher objects and add logo if missing
  const publisherRegex = /publisher:\s*\{\s*"@type":\s*"Organization",\s*name:\s*"TheMetricApp"(?:,\s*url:\s*"[^"]*")?\s*\}/g;
  content = content.replace(publisherRegex, (match) => {
    if (!match.includes('logo:')) {
      return match.replace(/\}$/, `,\n      logo: { "@type": "ImageObject", url: "${logoUrl}" }\n    }`);
    }
    return match;
  });

  // Also handle publisher without @type
  const publisherRegex2 = /publisher:\s*\{\s*"@type":\s*"Organization",\s*"name":\s*"TheMetricApp"(?:,\s*"url":\s*"[^"]*")?\s*\}/g;
  content = content.replace(publisherRegex2, (match) => {
    if (!match.includes('logo:')) {
      return match.replace(/\}$/, `,\n      "logo": { "@type": "ImageObject", "url": "${logoUrl}" }\n    }`);
    }
    return match;
  });

  // Fix 3: Article → BlogPosting type (for solo-401k and paypal-fee pages)
  if (content.includes('"@type": "Article"') && !content.includes('"@type": "BlogPosting"')) {
    content = content.replace(/"@type":\s*"Article"/g, '"@type": "BlogPosting"');
  }

  // Fix 4: Add missing @context to schemas that are output via inline <script> tags
  // (solo-401k and paypal-fee pages output schemas directly without SchemaMarkup component)
  if (content.includes('dangerouslySetInnerHTML') && content.includes('JSON.stringify(articleSchema)')) {
    // These pages output schemas inline - make sure they have @context
    // The schemas already have @context, which is fine for inline scripts
  }

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`[FIXED] ${relPath}`);
  }
}

console.log(`\nBlog files fixed: ${fixedCount}`);
