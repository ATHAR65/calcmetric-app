const fs = require('fs');
const path = require('path');

const siteRoot = path.resolve(__dirname, '..');
const siteUrl = 'https://www.themetricapp.com';

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
let fixed = 0;

for (const filePath of blogFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // Fix broken pattern: image line outside object literal
  // Pattern: ...mainEntityOfPage...}\n  image: "...",\n  }
  // Should be: ...mainEntityOfPage...,\n    "image": "..." }
  // But since the mainEntityOfPage line doesn't end with comma, we need to add it

  // Fix 1: mainEntityOfPage without comma followed by image on next line
  content = content.replace(
    /("mainEntityOfPage":\s*\{[^}]+\})\s*\n\s*image:\s*"([^"]+)",\s*\n\s*\}/g,
    (match, mainEntity, imageUrl) => {
      // Ensure absolute URL for image
      const absUrl = imageUrl.startsWith('http') ? imageUrl : siteUrl + imageUrl;
      return `${mainEntity},\n    "image": "${absUrl}"\n  }`;
    }
  );

  // Fix 2: mainEntityOfPage with @id without comma followed by image on next line
  content = content.replace(
    /("mainEntityOfPage":\s*\{\s*"@type":\s*"WebPage",\s*"@id":\s*"[^"]+"\s*\})\s*\n\s*image:\s*"([^"]+)",\s*\n\s*\}/g,
    (match, mainEntity, imageUrl) => {
      const absUrl = imageUrl.startsWith('http') ? imageUrl : siteUrl + imageUrl;
      return `${mainEntity},\n    "image": "${absUrl}"\n  }`;
    }
  );

  // Fix 3: Any remaining broken image lines (image outside object)
  // Pattern: "someProperty": "value"\n  image: "...",\n  }
  content = content.replace(
    /("[^"]+":\s*"[^"]+"\s*\})\s*\n\s*image:\s*"([^"]+)",\s*\n\s*\}/g,
    (match, prop, imageUrl) => {
      const absUrl = imageUrl.startsWith('http') ? imageUrl : siteUrl + imageUrl;
      return `${prop},\n    "image": "${absUrl}"\n  }`;
    }
  );

  // Fix 4: Also fix image URLs that are relative to be absolute
  content = content.replace(
    /"image":\s*"\/api\/og\?/g,
    `"image": "${siteUrl}/api/og?`
  );

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixed++;
    console.log(`[FIXED] ${path.relative(siteRoot, filePath).replace(/\\/g, '/')}`);
  }
}

console.log(`\nFiles fixed: ${fixed}`);
