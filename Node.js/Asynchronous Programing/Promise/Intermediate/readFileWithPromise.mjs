import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readFileAsync(filePath, encoding='utf-8'){
    return new Promise((resolve,reject) => {
        fs.readFile(filePath,encoding,(err,data) => {
            if(err) {
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
}

const filePath = path.join(__dirname,'file.txt');
readFileAsync(filePath)
.then(data => console.log(data))
.catch(err => console.error(err.message));