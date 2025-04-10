import http from 'http';
import fs from 'fs';
import {dirname} from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = http.createServer((req,res)=> {

    
    res.writeHead(200, {"Content-Type":"text/html"});
    // const html = fs.readFileSync("./htmlResponse.html", "utf-8");
    fs.createReadStream(__dirname+"/htmlResponse.html").pipe(res)
    // res.end(html);

})

server.listen(3000, () => {
    console.log("Server Running on port:3000");
});