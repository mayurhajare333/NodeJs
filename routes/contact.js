const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
    res.send('This is contact us page.');
});

router.post('/', (req, res, next) => {
    res.send('This is contact us page. we can post user query using this page.');
});


module.exports = router;