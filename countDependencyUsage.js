const fs = require('fs');
const path = require('path');

const folders = require('./myProjects.json');
const usage = {};

folders.forEach(folder => {
  const pkgPath = path.join(folder, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };

    for (const dep in deps) {
      usage[dep] = (usage[dep] || 0) + 1;
    }
  }
});

const sorted = Object.entries(usage).sort((a, b) => b[1] - a[1]);
fs.writeFileSync('dependency_usage_report.json', JSON.stringify(Object.fromEntries(sorted), null, 2));
console.log('✅ Written dependency usage report to dependency_usage_report.json');
