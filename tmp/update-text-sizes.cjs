const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Padding
  if (content.includes('max-w-7xl')) {
    content = content.replace(/max-w-7xl/g, 'max-w-6xl');
    changed = true;
  }

  // 2. Text Sizes
  const replacements = [
    { from: /text-5xl md:text-6xl lg:text-7xl/g,       to: 'text-2xl sm:text-3xl lg:text-4xl' },
    { from: /text-\[42px\] md:text-5xl lg:text-6xl/g,  to: 'text-2xl sm:text-3xl lg:text-4xl' },
    { from: /text-\[42px\] md:text-5xl/g,              to: 'text-2xl sm:text-3xl lg:text-4xl' },
    { from: /text-4xl md:text-5xl lg:text-6xl/g,       to: 'text-2xl sm:text-3xl lg:text-4xl' },
    { from: /text-3xl lg:text-4xl/g,                   to: 'text-xl lg:text-2xl' },
    { from: /text-3xl md:text-4xl/g,                   to: 'text-xl md:text-2xl' },
    { from: /text-xl sm:text-2xl md:text-3xl lg:text-4xl/g, to: 'text-lg md:text-xl lg:text-2xl' },
    { from: /text-4xl font-light/g,                    to: 'text-2xl font-light' },
  ];

  for (const {from, to} of replacements) {
    if (from.test(content)) {
      content = content.replace(from, to);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`\nSuccessfully updated ${changedFiles} files!`);
