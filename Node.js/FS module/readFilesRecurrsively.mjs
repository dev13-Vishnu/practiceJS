import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔁 Recursive function
function readAllFilesRecursively(dirPath) {
  let allFiles = [];

  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);

    if (item.isDirectory()) {
      // 🔁 Recursive call for subdirectory
      const subFiles = readAllFilesRecursively(fullPath);
      allFiles = allFiles.concat(subFiles);
    } else if (item.isFile()) {
      allFiles.push(fullPath);
    }
  }

  return allFiles;
}

// 🔍 Example usage:
const targetDir = __dirname; // Replace with your actual folder
const files = readAllFilesRecursively(targetDir);

console.log('📄 All Files Found:');
files.forEach(file => console.log(file));
