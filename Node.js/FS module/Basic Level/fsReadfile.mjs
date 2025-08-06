import fs from 'fs'

fs.readFile('note.txt', 'utf-8', (err, data) =>{
    if(err) {
        throw new Error("something went wrong.");
    } 
    console.log("Data:", data);
})

