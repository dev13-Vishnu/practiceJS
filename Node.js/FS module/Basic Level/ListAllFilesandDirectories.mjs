import fs from 'fs'

fs.readdir('../Basic Level',(err,files) =>{
    if(err) throw err;

    files.forEach((file) => console.log(file));
})