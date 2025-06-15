import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'largeFile.txt');

const oneKBLine = 'This is a dummy lin to fill data.';


const writeStream = fs.createWriteStream(filePath)

const linesToWrite = 100_000;

let i = 0;
function write () {
    let ok = true;
    while (i < linesToWrite && ok){
        i++;
        ok = writeStream.write(oneKBLine);
    }
    if(i<linesToWrite) {
        writeStream.once('drain',write);
    } else {
        writeStream.end();
        console.log('✅ largeFile.txt created (~100 MB)');
    }
}

write();