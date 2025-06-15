import fs from 'fs'
fs.rename('hello.txt','greeting.txt',(err) => {
    if(err) throw err;
    console.log('Renamed');
})