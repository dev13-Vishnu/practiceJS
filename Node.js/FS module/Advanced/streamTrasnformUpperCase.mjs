import fs from 'fs';
import path from 'path';
import { Transform } from 'stream';
import { fileURLToPath } from 'url';

// Setup __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File paths
const sourcePath = path.join(__dirname, 'largeFile.txt');
const destinationPath = path.join(__dirname, 'upperCaseFile.txt');

// 🔁 Transform stream: lowercase → UPPERCASE
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();
    callback(null, upperChunk);
  }
});



// ✅ Pipe: Read → Transform → Write
fs.createReadStream(sourcePath)
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream(destinationPath))
  .on('finish', () => console.log('✅ File transformed to uppercase successfully!'));
