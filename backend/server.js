const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('上传成功');
});

app.get('/files', (req, res) => {
  fs.readdir('uploads', (_, files) => res.json(files));
});

app.get('/download/:filename', (req, res) => {
  res.download(`uploads/${req.params.filename}`);
});

app.listen(3000, () => console.log('🌐 http://localhost:3000'));