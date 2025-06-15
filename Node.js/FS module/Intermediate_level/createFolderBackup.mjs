import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = __dirname;
const backupDir = path.join(sourceDir,'backup');

if(!fs.existsSync(backupDir)){
    fs.mkdirSync(backupDir);
    console.log("backup foldre created.");
}

fs.readdir(sourceDir,(err,files) => {
    if(err) throw err;

    files.forEach(file => {
        if(path.extname (file) === '.txt'){
            const oldPath = path.join(sourceDir,file);
            const newPath = path.join(backupDir,file);

            fs.rename(oldPath,newPath,(err) => {
                if(err) throw err;
                console.log(`${file} moved to backup`)
            })
        }
    })
})
