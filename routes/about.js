const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
    res.send('This is about page.');
});

module.exports = router;