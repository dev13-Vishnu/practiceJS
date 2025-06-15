// import { time, timeStamp } from 'console';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname,'app.log');

const timeStamp = new Date().toISOString();
const logMessage = `[${timeStamp}] Scrit executed \n`;

fs.appendFile(logFilePath,logMessage,(err) => {
    if(err) throw err;
    console.log(`log entry added to app.log`)
})