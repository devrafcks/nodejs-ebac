const express = require('express');

const router = express.Router();
const Pedidos = require('../models/index').Pedidos;

router.get('/', (_, res, next) => {
    Pedidos.find({})
        .then((pedidos) => {
            res.render('pedidos/index', { pedidos });
        })
        .catch((error) => next(error));
});

module.exports = router;
