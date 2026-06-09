const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');

const blogs = fs.readdirSync(BLOG_DIR).filter(d => {
  const pagePath = path.join(BLOG_DIR, d, 'page.js');
  return fs.existsSync(pagePath);
});

console.log(`Found ${blogs.length} blog pages`);

let fixed = 0;
let broken = 0;

for (const blog of blogs) {
  const pagePath = path.join(BLOG_DIR, blog, 'page.js');
  let content = fs.readFileSync(pagePath, 'utf8');
  const original = content;

  // The core bug: author object ends with },  then extra }, closes articleSchema prematurely
  // Pattern in ALL broken files:
  //     sameAs: ["..."]
  //     },
  //     },         <-- extra brace (should not be here)
  //     mainEntityOfPage: {
  
  // Fix: remove the extra }, line between author's }, and mainEntityOfPage
  // Match: author closes with },\n    },  (two consecutive }, lines)
  // Replace with: },\n  (single },)
  
  // More precise: find lines like "    },\n    }," that are between author and mainEntityOfPage
  // The extra }, is right before mainEntityOfPage
  
  // Pattern: },\n    },\n    mainEntityOfPage:
  // Replace: },\n    mainEntityOfPage:
  content = content.replace(
    /(\s*\},\s*\n\s*\},\s*\n\s*mainEntityOfPage:)/g,
    (match) => {
      // Remove one of the }, lines
      return match.replace(/\},\s*\n\s*\},/, '},');
    }
  );

  if (content !== original) {
    fs.writeFileSync(pagePath, content, 'utf8');
    fixed++;
    console.log(`✅ Fixed: ${blog}`);
  } else {
    broken++;
    console.log(`❌ Still broken: ${blog}`);
  }
}

console.log(`\n📊 Summary: ${fixed} fixed, ${broken} still broken, ${blogs.length} total`);
