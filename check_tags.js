const fs = require('fs');
const c = fs.readFileSync('src/components/Header.js', 'utf8');

const opens = c.match(/<(\w+)[^>]*>/g) || [];
const closes = c.match(/<\/(\w+)>/g) || [];
const selfCloses = c.match(/<(\w+)[^>]*\/>/g) || [];

const openNames = opens.map(t => t.match(/<(\w+)/)[1]);
const closeNames = closes.map(t => t.match(/\/(\w+)>/)[1]);
const selfCloseNames = selfCloses.map(t => t.match(/<(\w+)/)[1]);

const openCount = {};
openNames.forEach(n => { openCount[n] = (openCount[n] || 0) + 1; });
selfCloseNames.forEach(n => { openCount[n] = (openCount[n] || 0) - 1; });

const closeCount = {};
closeNames.forEach(n => { closeCount[n] = (closeCount[n] || 0) + 1; });

const allTags = [...new Set([...Object.keys(openCount), ...Object.keys(closeCount)])];
let hasIssue = false;
allTags.forEach(tag => {
  const o = openCount[tag] || 0;
  const c = closeCount[tag] || 0;
  if (o !== c) {
    console.log(tag + ': opens=' + o + ' closes=' + c + ' diff=' + (o - c));
    hasIssue = true;
  }
});
if (!hasIssue) console.log('All balanced!');
