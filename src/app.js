const express = require('express');
require('dotenv').config();

const app = express();
const Port = process.env.PORT;

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});