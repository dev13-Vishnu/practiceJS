import fs from 'fs';

function readFileAndProcess(filePath,callback) {
    fs.readFile(filePath,'utf-8',(err,data) => {
        if(err) throw err;
        callback(data);
    })
}

function print(content) {
    console.log('Contents inside the file :', content);
}

readFileAndProcess('file.txt',print);