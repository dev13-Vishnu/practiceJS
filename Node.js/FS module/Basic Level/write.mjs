import fs from 'fs'

fs.writeFile('note.txt','Learning Node.js is fun!','utf-8', (err) => {
    if(err) throw new Error('Something went wrong');
});

console.log('File written');