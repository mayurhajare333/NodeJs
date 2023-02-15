const express = require('express');
const router = express();

router.get('/',(req, res, next) =>{
    res.send("this is product page. Here all products are loaded on this pages.");
});

router.post('/',(req, res, next) =>{
    res.send("this is product page. Here we can add products on this pages.");
});

// router.put('/',(req, res, next) =>{
//     res.send("put operation is not perform on this page.");
// });

router.delete('/',(req, res, next) =>{
    res.send("this is product page. Here we can delete all products on this pages.");
});

router.get('/:id',(req, res, next) =>{
    res.send("this is product page. Here product is loaded by id on this pages.");
});

// router.post('/:id',(req, res, next) =>{
//     res.send("post operation is not perform on this page.");
// });

router.put('/:id',(req, res, next) =>{
    res.send("this is product page. Here we can change products using id on this pages.");
});

router.delete('/:id',(req, res, next) =>{
    res.send("this is product page. Here we can delete product by id on this pages.");
});

module.exports = router;