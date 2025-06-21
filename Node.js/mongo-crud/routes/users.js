const express = require('express');
const router = express.Router();
const jwt= require ('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const {authMiddleware} = require('../middleware/authMiddleware');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login
} = require('../controllers/userController');
const upload = require('../middleware/upload');

const users = [ 
{id: 1, username: 'vishnu', password: '123456'}
]
const SECRET = process.env.JWT_SECRET

router.get('/protected', authMiddleware, login)
router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', (req,res) => {
    const {username, password} = req.body;

    const user = users.find(u => u.username=== username && u.password === password);
    if(!user) return res.status(401).json({message: "Invalid Credentials."});

    const token = jwt.sign({id:user.id, username:user.username}, SECRET, {expiresIn: '1h'})

    res.json({token});
})
router.post('/upload-multiple', upload.array('images', 5), (req, res) => {
  console.log("Hit /upload-multiple route");

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded.' });
  }

  const fileData = req.files.map(file => ({
    filename: file.filename,
    path: file.path,
  }));

  res.status(200).json({
    message: 'Files uploaded successfully!',
    files: fileData,
  });
});

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);
module.exports = router;
