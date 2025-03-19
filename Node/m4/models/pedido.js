const { Schema } = require('mongoose');

const PedidoSchema = new Schema({
    cliente:{
        nome: { type: String, required: true },
        sobrenome:{ type: String, required: true },
    },
    pizzas:[
            {
            sabor: { type: String, required: true },
            tamanho: { type: String, required: true },
            quantidade: { 
    type: String, 
    required: true, 
    enum: ["pequeno", "médio", "grande", "supremo"]
}

        }
    ],
    metodoDePagamento: {
        type: String, required: true, enum: ["cartão", "pix", "dinheiro"] 
    },
    total: { 
        type: Number, required: true 
    },
    status: { 
        type: Boolean, default: false 
    },
});

module.exports = PedidoSchema;