import express from'express';
import compression  from 'compression';

const app = express();

const PORT = 3000;

app.use(compression());

const bigText = 'Node.js is awsome!'.repeat(1000);

app.get('/data', (req,res) => {
    res.send(bigText);
})

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`)
})