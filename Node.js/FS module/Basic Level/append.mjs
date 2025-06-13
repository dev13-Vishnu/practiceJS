import fs from 'fs';
fs.appendFile('hello.txt', '\nWelcome to Node.js',(err,data)=> {
if(err) throw err;
console.log("appended");
})