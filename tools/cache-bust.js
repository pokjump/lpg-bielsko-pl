#!/usr/bin/env node
// Stamps css/*.css and js/*.js references in every root *.html file with a
// content hash (?v=xxxxxxxx). Run before publishing whenever a css/js file
// changes. Idempotent: re-running without file changes touches nothing.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.join(__dirname, '..');
const assetDirs = ['css', 'js'];

function hashFile(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('sha1').update(data).digest('hex').slice(0, 8);
}

const assets = new Map(); // 'css/style.css' -> '8charhash'
for (const dir of assetDirs) {
  const dirPath = path.join(root, dir);
  for (const name of fs.readdirSync(dirPath)) {
    const full = path.join(dirPath, name);
    if (fs.statSync(full).isFile() && /\.(css|js)$/.test(name)) {
      assets.set(`${dir}/${name}`, hashFile(full));
    }
  }
}

const htmlFiles = fs
  .readdirSync(root)
  .filter((f) => f.endsWith('.html'));

let changedFiles = 0;
let changedRefs = 0;

for (const file of htmlFiles) {
  const filePath = path.join(root, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileChanged = false;

  for (const [relPath, hash] of assets) {
    const escaped = relPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(href|src)="${escaped}(?:\\?v=[0-9a-f]+)?"`, 'g');
    const replacement = `$1="${relPath}?v=${hash}"`;
    const next = content.replace(re, (match) => {
      const updated = match.replace(re, replacement);
      if (updated !== match) {
        changedRefs++;
        fileChanged = true;
      }
      return updated;
    });
    content = next;
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf8');
    changedFiles++;
    console.log(`updated ${file}`);
  }
}

console.log(`\n${assets.size} assets hashed, ${changedRefs} references updated across ${changedFiles} file(s).`);
