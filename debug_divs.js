const fs = require('fs');
const lines = fs.readFileSync('src/components/Header.js', 'utf8').split('\n');

// Collect all div tags with their line numbers
let opens = []; // {line, tagContent}
let closes = []; // line numbers

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  
  // Check if this line contains </div>
  if (trimmed.includes('</div>')) {
    closes.push(i + 1);
  }
  
  // Check if this line starts or continues a <div tag
  // We need to track multi-line tags
}

// Simpler: join the file and use a stack
const content = fs.readFileSync('src/components/Header.js', 'utf8');

// Normalize line endings and remove strings to avoid false matches
// Just find all <div...> and </div> with a proper multi-line regex
const tagRegex = /<(\/?)(div|nav|header|button|svg|p|span|Link)(\s[^>]*)?\/?>/g;
let match;
let stack = [];

while ((match = tagRegex.exec(content)) !== null) {
  const isClosing = match[1] === '/';
  const tagName = match[2];
  const fullTag = match[0];
  const isSelfClosing = fullTag.endsWith('/>');
  
  // Get line number
  const lineNum = content.substring(0, match.index).split('\n').length;
  
  if (isClosing) {
    if (stack.length > 0 && stack[stack.length - 1].tag === tagName) {
      stack.pop();
    } else {
      console.log('UNEXPECTED closing </' + tagName + '> at line ' + lineNum);
      console.log('  Expected to close: ' + (stack.length > 0 ? '<' + stack[stack.length-1].tag + '> at line ' + stack[stack.length-1].line : 'nothing'));
    }
  } else if (!isSelfClosing) {
    stack.push({ tag: tagName, line: lineNum, content: fullTag.substring(0, 50) });
  }
}

if (stack.length > 0) {
  console.log('\nUNCLOSED TAGS:');
  stack.forEach(s => {
    console.log('  <' + s.tag + '> opened at line ' + s.line + ': ' + s.content);
  });
} else {
  console.log('All tags balanced!');
}
