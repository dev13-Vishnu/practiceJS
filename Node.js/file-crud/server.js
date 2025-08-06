const express = require('express');
const fs = require ('fs');

const app = express();
const userRoutes = require("./routes/users.js")

app.use(express.json());
app.use('/users', userRoutes);
app.get('/', (req,res) => {
    const {key, value} = req.query;
     if (!key || !value) {
    return res.status(400).send('Both key and value query parameters are required.');
  }
    fs.appendFile('quotes.txt', `${key}:${value}\n`,'utf-8',(err) => {
        if(err) {
            throw  new Error('Failed to write to file');
        }
        res.send('Query written to file sucessfully');
    });
    
})
app.get('/fs/:method', (req,res) => {
    let method = req.params.method;

    if(method === 'readFile') { 
        fs.readFile('./quotes.txt','utf-8',(err,data)=> {
            if(err) {
                throw new Error('Somenting went wrong:',err);
            } else {
                res.send(data);
            }
        })
    }
    if(method === 'existSync') {
            if(!fs.existsSync('./quowtes.txt')) {
                res.send('file does not exist')
            } else {
                res.send('file exists');
            }
        
    }
})
const PORT = 3000;

app.listen(PORT,()=> console.log(`Server running on Port ${PORT}`))