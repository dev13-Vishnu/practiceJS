const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    console.log(`[Users Roter] ${req.method} ${req.originalUrl}`)
    next()
})
router.get('/',(req,res) => {
    res.send("All Users");
})
router.get('/:id', (req,res) => {
    res.send(`You requested user with User Id  ${req.params.id}`);
})
router.post('/',(req,res) => {
    const {name, age} = req.body;
    if(!name || !age) {
        return res.status(400).json({error:'Name and age are required'});
    }
    res.status(201).json({
        message: `User created: ${name}, Age: ${age}`
    })
})

module.exports = router