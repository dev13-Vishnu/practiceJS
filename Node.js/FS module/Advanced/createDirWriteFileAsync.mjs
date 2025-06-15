import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname (__filename);

const dirPath = path.join(__dirname,'myFolder');
const filePath = path.join(dirPath,'hello.txt')

async function createDirAndWriteFile() {
    try {
        await fs.mkdir(dirPath,{recursive: true});
        console.log('📁 Directory created (oralready exists).')

        const content = 'Hello, Vishnu !🚀 This file was created using fs.promises.';
        await fs. writeFile(filePath, content);
        console.log('✍️ File written successfully.');

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

createDirAndWriteFile();