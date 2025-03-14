const express = require('express');

const router = express.Router();
const Perfils = require('../models/index').Perfils;

router.get('/', (_, res, next) => {
    Perfils.find({"perfil.nome": "Rafael"})
    .then((perfil) => {
        console.log(perfil);  // Verifique o conteúdo que está sendo retornado
        if (!perfil || perfil.length === 0) {
            return res.status(404).render('error', { message: 'Perfil não encontrado.' });
        }
        res.render('perfil/index', { perfil });
    })
    .catch((error) => {
        console.error("Erro ao buscar perfil:", error);
        res.status(500).render('error', { message: 'Erro interno do servidor. Tente novamente mais tarde.' });
        next(error); // Enviar erro para o middleware de erro global
    });

});

module.exports = router;
