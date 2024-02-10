// about
const express = require('express');
const aboutRouter = express.Router();
const membersRouter = require('./members'); // Import members router

const moment = require('moment');

const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');

// define the about page route
aboutRouter.get('/', (req, res) => {
    const about = {
        "Status": 'success',
        "Message": 'response success',
        "Description": 'Exercise #03',
        "Date": `${formattedDate}`,
        "Data": [  
            membersRouter
        ] 
    };
    res.json(about);
});

module.exports = aboutRouter;