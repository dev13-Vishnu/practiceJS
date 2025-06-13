import * as fs from "fs";
fs.writeFile('hello.txt', 'Hello Vishnu',(err) => {
    if(err) throw err;
    console.log("file written...");
})