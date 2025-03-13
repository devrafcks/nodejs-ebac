const express = require('express');

const router = express.Router();

router.get('/', (_, res) =>{
    res.render('perfil/index', {
        name: 'Rafael Henrique',
        age: 17,
        city: 'São Paulo'
    });
    next();
})


module.exports = router;