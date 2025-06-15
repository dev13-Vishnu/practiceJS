import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'evenlargeFile.txt');
const oneMB = 1024 * 1024;
const totalMB = 512;

const stream = fs.createWriteStream(filePath);

for (let i = 0; i < totalMB; i++) {
  const chunk = 'a'.repeat(oneMB); // 1MB of "a"
  stream.write(chunk);
}

stream.end(() => {
  console.log('✅ 512MB large file created.');
});
