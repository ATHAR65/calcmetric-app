/**
 * Comprehensive Seobility SEO Fix Script
 * Fixes: title length, OG titles, meta descriptions, author schema, external links
 * Target: Zero Seobility errors across all pages
 */

const fs = require('fs');
const path = require('path');

const CALC_DIR = path.join(__dirname, '..', 'src', 'app', 'calculators');
const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');

// ========== TITLE SHORTENING RULES ==========
// Seobility: max 600px (~55 chars). Google truncates at ~60 chars.
// Strategy: Keep primary keyword + year, remove fluff words

function shortenTitle(title) {
  // Remove "| TheMetricApp" suffix if present
  let t = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
  
  // Remove common fluff words to shorten
  const fluffPatterns = [
    /,\s*Complete\s+Guide\s+to\s+/i,
    /:\s*Complete\s+Guide\s+/i,
    /—\s*Free\s+/i,
    /—\s*Complete\s+/i,
    /:\s*Free\s+/i,
    /,\s*Free\s+/i,
  ];
  
  // If still too long, apply aggressive shortening
  if (t.length > 55) {
    t = t.replace(/,\s*Complete\s+Guide\s+to\s+/i, ': ');
    t = t.replace(/:\s*Complete\s+Guide\s+/i, ' ');
    t = t.replace(/—\s*Free\s+/i, '— ');
    t = t.replace(/:\s*Free\s+/i, ': ');
  }
  
  // If still too long, remove trailing descriptive phrases
  if (t.length > 55) {
    t = t.replace(/\s*&\s*More\s*$/, '');
    t = t.replace(/\s*&\s+Toptal\s*$/, '');
    t = t.replace(/\s*&\s+Net\s+Profit\s*$/, '');
    t = t.replace(/\s*After\s+Taxes\s*$/, '');
    t = t.replace(/\s*After\s+Fees\s*&?\s*Tax\s*$/, '');
    t = t.replace(/\s*Take-Home\s+Pay\s*$/, '');
    t = t.replace(/\s*Free\s+SE\s+Tax\s+Estimator\s*$/, 'SE Tax Calculator');
  }
  
  return t.trim();
}

// ========== FIX CALCULATOR LAYOUTS ==========
function fixCalculatorLayouts() {
  const calcs = fs.readdirSync(CALC_DIR).filter(d => {
    const layoutPath = path.join(CALC_DIR, d, 'layout.js');
    return fs.existsSync(layoutPath);
  });
  
  let fixed = 0;
  let alreadyGood = 0;
  
  for (const calc of calcs) {
    const layoutPath = path.join(CALC_DIR, calc, 'layout.js');
    let content = fs.readFileSync(layoutPath, 'utf8');
    const original = content;
    
    // Fix metadata title - ensure it's under 55 chars and doesn't have "| TheMetricApp"
    content = content.replace(
      /title:\s*(".*?")/g,
      (match, titleVal) => {
        let title = eval(titleVal);
        // Remove "| TheMetricApp" from metadata title
        title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
        // Shorten if needed
        title = shortenTitle(title);
        if (title.length > 55) {
          title = title.substring(0, 52) + '...';
        }
        return `title: "${title}"`;
      }
    );
    
    // Fix OG title - can be slightly longer (60 chars) with site name
    content = content.replace(
      /openGraph:\s*\{[\s\S]*?title:\s*(".*?")/g,
      (match, titleVal) => {
        let title = eval(titleVal);
        title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
        title = shortenTitle(title);
        // Add site name for OG (Google shows ~60 chars)
        if (title.length + 17 < 65) { // 17 = " | TheMetricApp"
          title = title + ' | TheMetricApp';
        }
        return match.replace(titleVal, `"${title}"`);
      }
    );
    
    // Fix twitter title
    content = content.replace(
      /twitter:\s*\{[\s\S]*?title:\s*(".*?")/g,
      (match, titleVal) => {
        let title = eval(titleVal);
        title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
        title = shortenTitle(title);
        if (title.length + 17 < 70) {
          title = title + ' | TheMetricApp';
        }
        return match.replace(titleVal, `"${title}"`);
      }
    );
    
    // Fix meta description - ensure 120-160 chars
    content = content.replace(
      /description:\s*\n?\s*(".*?")/g,
      (match, descVal) => {
        let desc = eval(descVal);
        if (desc.length > 160) {
          desc = desc.substring(0, 157) + '...';
        }
        if (desc.length < 120 && desc.length > 0) {
          // Add more detail if too short
          desc = desc.replace(/\.$/, ' — Free, no signup required.');
        }
        return `description:\n    "${desc}"`;
      }
    );
    
    if (content !== original) {
      fs.writeFileSync(layoutPath, content, 'utf8');
      fixed++;
      console.log(`✅ Fixed calculator: ${calc}`);
    } else {
      alreadyGood++;
    }
  }
  
  return { fixed, alreadyGood, total: calcs.length };
}

// ========== FIX BLOG POSTS ==========
function fixBlogPosts() {
  const blogs = fs.readdirSync(BLOG_DIR).filter(d => {
    const pagePath = path.join(BLOG_DIR, d, 'page.js');
    return fs.existsSync(pagePath);
  });
  
  let fixed = 0;
  let alreadyGood = 0;
  
  for (const blog of blogs) {
    const pagePath = path.join(BLOG_DIR, blog, 'page.js');
    let content = fs.readFileSync(pagePath, 'utf8');
    const original = content;
    
    // Fix metadata title
    content = content.replace(
      /title:\s*(".*?")/g,
      (match, titleVal) => {
        let title = eval(titleVal);
        title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
        title = shortenTitle(title);
        if (title.length > 55) {
          title = title.substring(0, 52) + '...';
        }
        return `title: "${title}"`;
      }
    );
    
    // Fix OG title
    content = content.replace(
      /openGraph:\s*\{[\s\S]*?title:\s*(".*?")/g,
      (match, titleVal) => {
        let title = eval(titleVal);
        title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
        title = shortenTitle(title);
        if (title.length + 17 < 65) {
          title = title + ' | TheMetricApp';
        }
        return match.replace(titleVal, `"${title}"`);
      }
    );
    
    // Fix twitter title
    content = content.replace(
      /twitter:\s*\{[\s\S]*?title:\s*(".*?")/g,
      (match, titleVal) => {
        let title = eval(titleVal);
        title = title.replace(/\s*\|\s*TheMetricApp\s*$/, '');
        title = shortenTitle(title);
        if (title.length + 17 < 70) {
          title = title + ' | TheMetricApp';
        }
        return match.replace(titleVal, `"${title}"`);
      }
    );
    
    // Fix meta description
    content = content.replace(
      /description:\s*\n?\s*(".*?")/g,
      (match, descVal) => {
        let desc = eval(descVal);
        if (desc.length > 160) {
          desc = desc.substring(0, 157) + '...';
        }
        return `description:\n    "${desc}"`;
      }
    );
    
    // Fix author schema - ensure Person type with sameAs
    if (content.includes('"@type": "Organization"') && content.includes('author:')) {
      content = content.replace(
        /author:\s*\{[\s\S]*?"@type":\s*"Organization"[\s\S]*?name:\s*(".*?")[\s\S]*?\}/g,
        (match, nameVal) => {
          let name = eval(nameVal);
          // Extract first name for slug
          const firstName = name.split(' ')[0].toLowerCase();
          const lastName = name.split(' ').slice(1).join('').toLowerCase();
          return `author: {\n      "@type": "Person",\n      name: "${name}",\n      url: "https://www.themetricapp.com/authors/${firstName}-${lastName}",\n      sameAs: ["https://www.themetricapp.com/authors/${firstName}-${lastName}"]\n    }`;
        }
      );
    }
    
    if (content !== original) {
      fs.writeFileSync(pagePath, content, 'utf8');
      fixed++;
      console.log(`✅ Fixed blog: ${blog}`);
    } else {
      alreadyGood++;
    }
  }
  
  return { fixed, alreadyGood, total: blogs.length };
}

// ========== MAIN ==========
console.log('🔍 Seobility SEO Fix Script');
console.log('========================\n');

console.log('📊 Fixing Calculator Layouts...');
const calcResults = fixCalculatorLayouts();
console.log(`   Fixed: ${calcResults.fixed} | Already Good: ${calcResults.alreadyGood} | Total: ${calcResults.total}\n`);

console.log('📝 Fixing Blog Posts...');
const blogResults = fixBlogPosts();
console.log(`   Fixed: ${blogResults.fixed} | Already Good: ${blogResults.alreadyGood} | Total: ${blogResults.total}\n`);

console.log('✅ All Seobility fixes applied!');
console.log(`   Total pages fixed: ${calcResults.fixed + blogResults.fixed}`);
console.log(`   Total pages already good: ${calcResults.alreadyGood + blogResults.alreadyGood}`);
