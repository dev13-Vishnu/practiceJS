import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWatch = path.join(__dirname, 'watched.txt')

const logfile = path.join(__dirname,'app.log');

function logChange(message) {
const timestamp = new Date().toISOString();
const logMessage = `[${timestamp}] ${message}\n`;
fs.appendFileSync(logfile,logMessage);
}

fs.watch(fileToWatch,(eventType,filename) => {
    if(filename){
        const msg = `Detected ${eventType} on ${filename}`;
        console.log('📢', msg);
        logChange(msg);
    }
})

console.log(`👀 Watching for changes in ${fileToWatch}...`);
