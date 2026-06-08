/**
 * Safe Seobility SEO Fix Script v2
 * Uses targeted string replacements instead of fragile regex
 * Only fixes: title length and OG title suffix
 */

const fs = require('fs');
const path = require('path');

const CALC_DIR = path.join(__dirname, '..', 'src', 'app', 'calculators');
const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');

function shortenTitle(title) {
  // Remove "| TheMetricApp" suffix
  let t = title.replace(/\s*\|\s*TheMetricApp\s*$/, '').trim();
  
  // Remove fluff to get under 55 chars
  if (t.length > 55) {
    t = t.replace(/,\s*Complete\s+Guide\s+to\s+/i, ': ');
    t = t.replace(/:\s*Complete\s+Guide\s+/i, ' ');
    t = t.replace(/—\s*Free\s+/i, '— ');
    t = t.replace(/:\s*Free\s+/i, ': ');
  }
  if (t.length > 55) {
    t = t.replace(/\s*&\s*More\s*$/, '');
    t = t.replace(/\s*&\s+Toptal\s*$/, '');
    t = t.replace(/\s*After\s+Taxes\s*$/, '');
    t = t.replace(/\s*Take-Home\s+Pay\s*$/, '');
  }
  // Hard truncate as last resort
  if (t.length > 55) {
    t = t.substring(0, 52) + '...';
  }
  return t;
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  const lines = content.split('\n');
  const fixed = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Fix metadata title (first "title:" occurrence in metadata block)
    // Pattern: `  title: "..."` at indent level 2 (spaces)
    if (/^\s{2}title:\s+"[^"]+"/.test(line) && !line.includes('openGraph') && !line.includes('twitter')) {
      const match = line.match(/^(\s{2}title:\s+")(.+)(")\s*$/);
      if (match) {
        const newTitle = shortenTitle(match[2]);
        if (newTitle !== match[2]) {
          line = match[1] + newTitle + match[3];
          console.log(`  Title: "${match[2].substring(0,50)}..." → "${newTitle}"`);
        }
      }
    }
    
    // Fix OG title (inside openGraph block)
    if (/^\s{4}title:\s+"[^"]+"/.test(line)) {
      const match = line.match(/^(\s{4}title:\s+")(.+)(")\s*$/);
      if (match) {
        let newTitle = match[2].replace(/\s*\|\s*TheMetricApp\s*$/, '').trim();
        newTitle = shortenTitle(newTitle);
        // Add "| TheMetricApp" back for OG (can be 60-65 chars)
        if (newTitle.length + 17 < 65) {
          newTitle = newTitle + ' | TheMetricApp';
        }
        if (newTitle !== match[2]) {
          line = match[1] + newTitle + match[3];
          console.log(`  OG Title: "${match[2].substring(0,50)}..." → "${newTitle}"`);
        }
      }
    }
    
    // Fix twitter title
    if (/^\s{4}title:\s+"[^"]+"/.test(line) && i > 0 && lines[i-1].includes('twitter:')) {
      const match = line.match(/^(\s{4}title:\s+")(.+)(")\s*$/);
      if (match) {
        let newTitle = match[2].replace(/\s*\|\s*TheMetricApp\s*$/, '').trim();
        newTitle = shortenTitle(newTitle);
        if (newTitle.length + 17 < 70) {
          newTitle = newTitle + ' | TheMetricApp';
        }
        if (newTitle !== match[2]) {
          line = match[1] + newTitle + match[3];
          console.log(`  Twitter Title: "${match[2].substring(0,50)}..." → "${newTitle}"`);
        }
      }
    }
    
    fixed.push(line);
  }
  
  const newContent = fixed.join('\n');
  if (newContent !== original) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }
  return false;
}

// ========== MAIN ==========
console.log('🔍 Safe Seobility SEO Fix Script v2\n');

let fixedCount = 0;

// Fix calculator layouts
const calcs = fs.readdirSync(CALC_DIR).filter(d => fs.existsSync(path.join(CALC_DIR, d, 'layout.js')));
console.log(`📊 Processing ${calcs.length} calculator layouts...`);
for (const calc of calcs) {
  const layoutPath = path.join(CALC_DIR, calc, 'layout.js');
  if (fixFile(layoutPath)) {
    fixedCount++;
    console.log(`✅ ${calc}`);
  }
}

// Fix blog posts
const blogs = fs.readdirSync(BLOG_DIR).filter(d => fs.existsSync(path.join(BLOG_DIR, d, 'page.js')));
console.log(`\n📝 Processing ${blogs.length} blog posts...`);
for (const blog of blogs) {
  const pagePath = path.join(BLOG_DIR, blog, 'page.js');
  if (fixFile(pagePath)) {
    fixedCount++;
    console.log(`✅ ${blog}`);
  }
}

console.log(`\n✅ Done! Fixed ${fixedCount} files total.`);
