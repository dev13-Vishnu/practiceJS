import fs  from 'fs';


const readableStream =fs.createReadStream("./file.txt",{
    encoding: "utf-8",
    highWaterMark: 2
    
})

const WritableStream = fs.createWriteStream("./file2.txt")

readableStream.on("data",(chunk)=>{
    console.log(chunk);
    WritableStream.write(chunk);
})