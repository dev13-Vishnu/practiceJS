const express = require ('express');
const app = express();
const PORT = 3000;
const userRoutes = require('./routes/users')



app.use(express.json());
app.get('/' , (req, res) => {
    res.send('Welcome to Express Routing Practice!');
});
app.use('/users', userRoutes)
app.get('/about',(req,res) => {
    res.send('This is an about page.')
})
app.get('/greet',(req,res) => {
    const name = req.query.name;

    if(!name) {
        return res.status(400).json({error: 'Name query parametr is required'});
    }
    res.send(`Hello, ${name}!`);
});

app.get('/products', (req,res) => {
    res.send("All Products");
})
app.post('/products', (req,res)=> {
    res.send('Product created');
});
app.get('/products/:id', (req,res) => {
    const productId = req.params.id;
    res.send(`Updaed product with Id: ${productId}`)
})
app.put('/products/:id', (req,res) => {
    const productId = req.params.id;
    res.send(`Updaed product with Id: ${productId}`)
})
app.delete('/products/:id',(req,res) => {
    const productId = req.params.id;
    res.send(`Delete product with ID: ${productId}`)
})
app.get('/search', (req,res) => {
    const {term, limit} = req.query;
    res.json({
        term,
        limit
    });
});
app.route('/books').get((req,res) => {
    res.send("Get all books");
})
.post((req,res) => {
    res.send("Create a new book");
})
.put((req,res) => {
    res.send('Updata all books (bulk Update).');
})
const adminRouter = express.Router();
adminRouter.use((req,res,next)=> {
    const isAdmin = req.query.admin === 'true';
    if(!isAdmin){
        return res.status(403).send('Forbidden: Admins only');
    }
    next();
});
adminRouter.get('/dashboard',(req,res) => {
    res.send('Welcome to Admin Dashboard');
})

app.use('/admin', adminRouter);


app.listen (PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})