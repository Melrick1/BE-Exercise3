const express = require('express');
const moment = require('moment');
const membersRouter = require('./members');

const router = express.Router();

// Route to include member details from membersRouter
router.get('/', (req, res) => {
    const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    res.json({
        "Status": 'success',
        "Message": 'response success',
        "Description": 'Exercise #03',
        "Date": `${formattedDate}`,
        "Data": [
            membersRouter.hendy(),
            membersRouter.gerry(),
            membersRouter.mitch(),
            membersRouter.ichad(),
            membersRouter.christina()
        ]
    });
});

module.exports = router;