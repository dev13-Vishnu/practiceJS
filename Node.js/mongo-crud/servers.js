const express = require("express");
const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const userRoutes = require('./routes/users.js');
const fileRoutes  = require('./routes/fileRoutes.js')
const fs = require('fs');
const path = require("path");
dotenv.config();
const app = express();

app.use(express.json());

app.get('/stream-large-file', (req,res)=> {
    const filePath = path.join(__dirname, 'largefile.txt');

    res.setHeader('Content-Type', 'text/plain'); // or 'text/html' etc.
res.setHeader('Content-Disposition', 'inline'); // ✅ Display in browser

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
    readStream.on('error', (err) => {
        console.error('Error reading file:',err);
        res.status(500).send('File read error');
    })
})
app.use('/users', userRoutes);

app.use('/uploads', express.static('uploads'));
app.use('/api', fileRoutes);


mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.error(err));
