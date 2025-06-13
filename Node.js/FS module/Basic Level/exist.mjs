import fs from 'fs';
if(fs.existsSync('helo.txt')){
    console.log("file exists");
} else {
    console.log("file does not exist");
}