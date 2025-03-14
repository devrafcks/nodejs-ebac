const mongoose = require('mongoose'); // Corrigido o nome do pacote
const PedidoSchema = require('./pedido');
const PerfilSchema = require('./perfil');

const Pedidos = mongoose.model('Pedido', PedidoSchema);
const Perfils = mongoose.model('Perfil', PerfilSchema);

mongoose.set('strictQuery', true); 
const connect = () => {
    mongoose.connect('mongodb://localhost:27017/ebacpizza');
};
module.exports = { connect, Pedidos, Perfils };
