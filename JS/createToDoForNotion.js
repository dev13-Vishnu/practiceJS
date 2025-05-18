const fs = require('fs');

// Read the file content
const text = fs.readFileSync('input.txt', 'utf-8');

// Match all lines starting with #, ##, or ###
const matches = text.match(/^#{1,3}\s.*$/gm);

if (matches) {
  const formatted = matches.map(line => {
    const level = (line.match(/^#+/) || [''])[0].length;

    // Get the cleaned text without # and optional **
    const cleanedLine = line.replace(/^#{1,3}\s*\**(.*?)\**\s*$/, '$1').trim();

    if (level === 3) {
      return '\t- [ ] ' + cleanedLine;
    } else if (level === 2) {
      return '- [ ] ' + cleanedLine;
    } else if (level === 1) {
      return line; // keep as-is
    }
  });

  fs.writeFileSync('ToDoList.txt', formatted.join('\n'), 'utf-8');
  console.log('Formatted headings written to ToDoList.txt');
} else {
  console.log('No headings found.');
}
