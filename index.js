const express = require('express');
const morgan = require('morgan');
const app = express();
const aboutRouter = require('./about');
const users = require('./users'); // import users module

// Morgan middleware for logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send('This is the home page');
});

app.use('/about', aboutRouter);

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

const port = 2000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});