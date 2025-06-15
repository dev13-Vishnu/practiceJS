import * as fs from "fs";
// fs.writeFile('hello.txt', 'Hello Vishnu',(err) => {
//     if(err) throw err;
//     console.log("file written...");
// })
fs.writeFile('logs','',(err)=> {
    if(err) throw err;
    console.log('created');
})