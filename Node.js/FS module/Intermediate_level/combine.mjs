import fs from 'fs';

const file1content = fs.readFileSync('file1.txt','utf-8');
const file2content = fs.readFileSync('file2.txt', 'utf-8');

const mergeContent = file1content + file2content;

fs.writeFileSync('combined.txt',mergeContent);