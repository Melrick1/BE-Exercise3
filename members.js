const express = require('express');
const router = express.Router();

// Member details functions
const hendy = () => {
    return {
        "id": 1,
        "nim": '105022110006',
        "nama": 'Batuwael, Hendy Riawan',
        "nomor_telp": '0813-4188-0098'
    };
};

const gerry = () => {
    return {
        "id": 2,
        "nim": '105022110065',
        "nama": 'Runtu, Gerry Jonathan',
        "nomor_telp": '0812-4411-3106'
    };
};

const mitch = () => {
    return {
        "id": 3,
        "nim": '105022110002',
        "nama": 'Mumbunan, Syaloom Del Mitch',
        "nomor_telp": '0821-8932-1340'
    };
};

const ichad = () => {
    return {
        "id": 4,
        "nim": '105022010101',
        "nama": 'Lahea, Richard Theofany Fritzgerald',
        "nomor_telp": '0896-9562-7930'
    };
};

const christina = () => {
    return {
        "id": 5,
        "nim": '105022010081',
        "nama": 'Golung, Christina Grace',
        "nomor_telp": '0895-8014-78980'
    };
};

// Express route to get member details
router.get('/hendy', (req, res) => {
    const memberDetails = hendy();
    res.json(memberDetails);
});

router.get('/gerry', (req, res) => {
    const memberDetails = gerry();
    res.json(memberDetails);
});

router.get('/mitch', (req, res) => {
    const memberDetails = mitch();
    res.json(memberDetails);
});

router.get('/ichad', (req, res) => {
    const memberDetails = ichad();
    res.json(memberDetails);
});

router.get('/christina', (req, res) => {
    const memberDetails = christina();
    res.json(memberDetails);
});

module.exports = router;
