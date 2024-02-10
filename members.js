const express = require('express');
const membersRouter = express.Router();

// Export modules
membersRouter.get('/hendy', (req, res) => {
    res.json({
        "id": 1,
        "nim": '105022110006',
        "nama": 'Batuwael, Hendy Riawan',
        "nomor_telp": '0813-4188-0098'
    });
});

membersRouter.get('/gerry', (req, res) => {
    res.json({
        "id": 2,
        "nim": '105022110065',
        "nama": 'Runtu, Gerry Jonathan',
        "nomor_telp": '0812-4411-3106'
    });
});

membersRouter.get('/mitch', (req, res) => {
    res.json({
        "id": 3,
        "nim": '105022110002',
        "nama": 'Mumbunan, Syaloom Del Mitch',
        "nomor_telp": '0821-8932-1340'
    });
});

membersRouter.get('/ichad', (req, res) => {
    res.json({
        "id": 4,
        "nim": '105022010101',
        "nama": 'Lahea, Richard Theofany Fritzgerald',
        "nomor_telp": '0896-9562-7930'
    });
});

membersRouter.get('/christina', (req, res) => {
    res.json({
        "id": 5,
        "nim": '105022010081',
        "nama": 'Golung, Christina Grace',
        "nomor_telp": '0895-8014-78980'
    });
});

module.exports = membersRouter;