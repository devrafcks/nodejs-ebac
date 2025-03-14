const { Schema } = require('mongoose');

const PerfilSchema = new Schema({
    perfil:{
        nome: { type: String, required: true },
        sobrenome:{ type: String, required: true },
        age: { type: Number, required: true },
        city: { type: String, required: true }
    },
});

module.exports = PerfilSchema;