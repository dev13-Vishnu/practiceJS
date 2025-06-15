import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname,'app.log');

export function log(message) {
    const timestamp = new Date().toISOString();

    const finalMessage =  `[${timestamp}] ${message}\n`;

    fs.appendFile(logFilePath,finalMessage,(err) => {
        if(err) throw err;
    })
}