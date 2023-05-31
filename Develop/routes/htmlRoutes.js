const router = require('express').Router();
const path = require('path');

// router for HTML pages
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// export module
module.exports = router;