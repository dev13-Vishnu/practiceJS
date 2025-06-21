const fs = require('fs');
const path = require('path');

/**
 * Recursively builds a nested object representing the folder structure,
 * but limits `node_modules` traversal to only one level.
 */
function buildTree(dirPath, isInNodeModules = false, depthInNodeModules = 0) {
  const stats = fs.statSync(dirPath);

  if (stats.isFile()) {
    return path.basename(dirPath); // just return filename
  }

  const result = {};
  const items = fs.readdirSync(dirPath);

  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const itemStats = fs.statSync(fullPath);

    const isNodeModules = path.basename(dirPath) === 'node_modules';

    // If we're in node_modules and already one level deep, skip further traversal
    if (isInNodeModules && depthInNodeModules >= 1 && itemStats.isDirectory()) {
      result[item] = '📦 package (skipped deeper folders)';
      return;
    }

    if (itemStats.isDirectory()) {
      result[item] = buildTree(
        fullPath,
        isNodeModules || isInNodeModules,
        isInNodeModules ? depthInNodeModules + 1 : 0
      );
    } else {
      result[item] = null;
    }
  });

  return result;
}

// Set root directory (change if needed)
const rootDir = path.resolve(__dirname); // or provide your own path

const tree = {
  [path.basename(rootDir)]: buildTree(rootDir)
};

// Write to JSON file
fs.writeFileSync('structure.json', JSON.stringify(tree, null, 2), 'utf8');

console.log('✅ Folder structure saved to structure.json (with limited node_modules depth)');
