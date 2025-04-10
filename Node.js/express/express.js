import express from "express";
const app = express();
import path from 'path';
import { fileURLToPath } from "url";
import Token from './middleware/token.js'
import Validation from './middleware/validation.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const middleware = [Token,Validation]


// app.use(express.static(path.join(__dirname,"views")))
app.get("/profile",middleware, (req,res) =>{
    console.log("User Logged.")
    res.send("<h1>Success</h1>");;
});



// app.get("/contact", (req,res) =>{
//     res.sendFile(path.join(__dirname,"views","contact.html"));
// });

// app.get("*", (req,res) =>{
//     res.send("<h1>404: error</h1>");
// });
// app.use((req, res) => {
//     // res.status(404);
//     res.send("<h1>404: error</h1>");
// });


const PORT = process.env.PORT || 3001;

app.listen(PORT,() => console.log(`Server Running on ${PORT}`))