import fs from 'fs';
const stat = fs.statSync('logs');
if(stat.isFile()){
    console.log('it is a file');
} else if(stat.isDirectory()) {
    console.log('it is a folder');
}