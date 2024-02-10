// index.js
const express = require('express');
const morgan = require('morgan');
const about = require('./about');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.use('/about', about);

const port = 2000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});