import fs from 'fs';
try{
    const data = fs.readFileSync('file1.txt','utf-8');

    console.log('File contents:',data);
}
catch(err) {
    if(err.code === 'ENOENT'){
        console.error('File does not exist!');

    }else {
        console.error('error reading file',err.message)
    }
}