import fs from 'fs'

fs.unlink('greeting.txt',(err)=> {
    if(err) throw err;
    console.log("deleted");
})