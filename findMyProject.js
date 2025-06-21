const fs = require('fs');
const path = require('path');

function findUserProjects(dir) {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    // Skip node_modules completely
    if (item.isDirectory() && item.name === 'node_modules') {
      continue;
    }

    // If directory, recurse
    if (item.isDirectory()) {
      results = results.concat(findUserProjects(fullPath));
    }

    // If package.json found, store the parent directory
    if (item.isFile() && item.name === 'package.json') {
      results.push(dir);
    }
  }

  return [...new Set(results)]; // Remove duplicates
}

const root = path.resolve(__dirname); // Change if needed
const myProjects = findUserProjects(root);

fs.writeFileSync('myProjects.json', JSON.stringify(myProjects, null, 2));
console.log(`✅ Found ${myProjects.length} valid user-created projects.`);
