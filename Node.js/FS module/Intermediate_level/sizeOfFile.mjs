import fs from 'fs'

fs.stat('../Advanced/largeFile.txt',(err,stat) =>{
    if(err) throw err;
    const sizeInBytes = stat.size;
    const sizeInKB = (sizeInBytes/1024).toFixed(2);

    console.log(sizeInKB);
})