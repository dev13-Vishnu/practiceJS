import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const [fileName, action] = process.argv.slice(2);

if(!fileName){
    console.error('❌ Please provide a filename. \nUsage: node file-cli.mjs <filename> [read/wirte]');
    process.exit(1);
}

const filePath = path.join(__dirname,fileName);

async function readFile() {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(`📖 Contents of ${fileName}: \n`);
        console.log(data);
    } catch (error) {
        console.error(`❌ Error reading file: ${error.message}`);
    }
}

async function writeFile() {
    const content = ` 👋 Hello from CLI at ${new Date().toLocaleString()}\n`;
    try {
        await fs.appendFile(filePath,content);
        console.log(`✍️ Wrote to ${fileName}: \n${content}`);
    } catch (error) {
        console.error(`❌ Error writing to file: ${error.message}`)
    }
}
if(action === 'read'){
    await readFile();
} else if(action === 'write') {
    await writeFile();
} else {
    console.error('❌ Invalid action. Use "read" or "write"')
}