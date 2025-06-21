// routes/fileRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

// ✅ Upload multiple files: images[]
router.post('/upload-multiple', upload.array('images', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  const fileData = req.files.map(file => ({
    filename: file.filename,
    path: file.path.replace(/\\/g, '/'), // ✅ Replace backslashes
}));

  res.status(200).json({
    message: 'Files uploaded successfully!',
    files: fileData
  });
});

module.exports = router;
