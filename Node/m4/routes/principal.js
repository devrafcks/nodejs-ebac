const express = require('express');

const router = express.Router();

router.get('/', (_, res) =>{
    res.send('get rodando');
    next();
})


module.exports = router;
