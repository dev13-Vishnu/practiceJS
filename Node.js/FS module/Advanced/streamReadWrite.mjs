import fs, { read, writeFile } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = path.join(__dirname,'largeFile.txt');
const destinationPath = path.join(__dirname,'copiedFile.txt')

const readStream = fs.createReadStream(sourcePath);
const writeStream = fs.createWriteStream(destinationPath);


readStream.pipe(writeStream);

readStream.on('open',()=>console.log("Reading started"))
readStream.on('finish',() => console.log('✅ Writing finished!0'))
readStream.on('error', (err) => console.error('❌ Read Error:', err));
writeStream.on('error', (err) => console.error('❌ Write Error:', err));
