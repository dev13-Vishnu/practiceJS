const fs = require('fs');
const path = require('path');

let output = ''; // Collect the directory structure as a string

function buildDirectoryStructure(dirPath, indent = '') {
  const items = fs.readdirSync(dirPath);

  items.forEach((item, index) => {
    const fullPath = path.join(dirPath, item);
    const isLast = index === items.length - 1;
    const stats = fs.statSync(fullPath);
    const prefix = isLast ? '└── ' : '├── ';
    const nextIndent = indent + (isLast ? '    ' : '│   ');

    output += indent + prefix + item + '\n';

    if (stats.isDirectory()) {
      buildDirectoryStructure(fullPath, nextIndent);
    }
  });
}

// Start from current directory or custom folder
const rootDir = path.resolve(__dirname); // Change if needed
output += path.basename(rootDir) + '/\n';
buildDirectoryStructure(rootDir);

// Write to structure.txt
fs.writeFileSync('structure.txt', output, 'utf8');

console.log('Directory structure written to structure.txt');
