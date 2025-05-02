import fs from 'fs';

const readable = fs.createReadStream('./file.txt')

const writeable = fs.createWriteStream('output.txt');

const success = readable.pipe(writeable);

if(success) {
    console.log("pipe done");
}