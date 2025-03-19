const mongoose = require('mongoose'); 
const PedidoSchema = require('./pedido');
const PerfilSchema = require('./perfil');

const Pedidos = mongoose.model('Pedido', PedidoSchema);
const Perfis = mongoose.model('Perfil', PerfilSchema);

mongoose.set('strictQuery', true); 

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ebacpizza', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Conectado ao MongoDB!');
    } catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB:', error);
    }
};

module.exports = { connect, Pedidos, Perfis };
