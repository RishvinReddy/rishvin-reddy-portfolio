/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const targetDirs = ['src/app', 'src/components'];

const replacements = [
  { from: /max-w-7xl/g, to: 'max-w-[95rem]' },
  { from: /max-w-screen-2xl/g, to: 'max-w-[105rem]' },
  { from: /max-w-5xl/g, to: 'max-w-7xl' },
  { from: /max-w-\[90rem\]/g, to: 'max-w-[105rem]' },
  { from: /max-w-4xl/g, to: 'max-w-6xl' },
  { from: /max-w-[2-3]xl/g, to: 'max-w-5xl' }, // carefully! 
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      // SKIP ide and universe files!
      if (fullPath.includes('ide') || fullPath.includes('Ide') || fullPath.includes('universe') || fullPath.includes('Universe')) {
        continue;
      }
      
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Specifically target container max-widths, we don't want to break prose max-w-none or max-w-sm
      const safeReplacements = [
        { from: /max-w-7xl/g, to: 'max-w-[95rem]' },
        { from: /max-w-screen-2xl/g, to: 'max-w-[105rem]' },
        { from: /max-w-5xl/g, to: 'max-w-7xl' },
        { from: /max-w-\[90rem\]/g, to: 'max-w-[105rem]' },
      ];

      for (const r of safeReplacements) {
        if (r.from.test(content)) {
          content = content.replace(r.from, r.to);
          changed = true;
        }
      }
      
      if (changed) {
        console.log(`Widened sections in ${fullPath}`);
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

targetDirs.forEach(processDir);
console.log('Done.');
