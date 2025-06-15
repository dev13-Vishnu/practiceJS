import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFile = path.join(__dirname, 'evenlargeFile.txt');
const destinationFile = path.join(__dirname, 'destination.txt');

const {size: totalSize} = fs.statSync(sourceFile);

let bytesCopied = 0;

const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(destinationFile);

readStream.on('data', (chunk) => {
    bytesCopied += chunk.length;
    const percent = ((bytesCopied/ totalSize) * 100).toFixed(2);
    process.stdout.write(`\r📦 Progress: ${percent}% (${(bytesCopied / 1024 / 1024).toFixed(2)} MB copied)`);

})
readStream.on('end', () => {
    console.log('\n✅ File copy complete.');

})
readStream.pipe(writeStream)