const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const Port = process.env.PORT;

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});
  
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});