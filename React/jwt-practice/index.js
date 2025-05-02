const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const morgan = require ('morgan')
const fs =require('fs');
const path = require('path');
require('dotenv').config();


const app = express();

const accessLogStream = fs.createWriteStream(
    path.join(__dirname,'access.log'),
    {flags:'a'}
);

app.use(morgan('combined', {stream:accessLogStream}));

app.use(express.json());

const users =[];

app.post('/signup',async(req,res) => {
    const {email, password} = req.body;
    const hash = await bcrypt.hash(password,10);
    users.push({email,password:hash});
    res.json({msg:"user created!"});
});

app.post ('/login',async (req,res) => {
    // console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const {email,password} = req.body;

    // console.log("email:",email);
    
    // console.log('users:',users.length);

    const user = users.find(u => u.email == email);
    // console.log('user',user);

    if(!user) return res.status(400).json({error:'Invalid password'});
    // console.log("JWT_SECRET:", process.env.JWT_SECRET);

    const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:'1h'});
    res.json({token});
})

// app.get('/protect',(req,res) =>{
//     const autherHeader = req.headers.authorization;
//     // console.log("authHeader:",autherHeader);
//     if(!autherHeader?.startsWith('Bearer'))    return res.status(401).json({error:'Token missing'});

//     const token = autherHeader.split(' ')[1];
//     try {
//         const decoded = jwt.verify(token,process.env.JWT_SECRET);
//         res.json({msg:'You are authorized', user: decoded});
//     } catch (error) {
//         res.status(401).json({error:'Invalid or expired token'})
//     }

// })

const protectedRoutes = require('./routes/protected');

app.use('/protect',protectedRoutes)

app.listen(5000,() => console.log('server runnign on port 5000'))