require('dotenv').config();
const mongoose = require('mongoose');
const { connect, Pedidos, Perfis } = require('./index');

const seedData = async () => {
    try {
        await connect(); 
        console.log('🔄 Limpando e populando dados...');

        // Remove os dados existentes
        await Pedidos.deleteMany();
        await Perfis.deleteMany();

        // Insere novos pedidos
        await Pedidos.insertMany([
            {
                cliente: { nome: 'João', sobrenome: 'Silva' },
                pizzas: [
                    { sabor: 'Calabresa', tamanho: 'médio', quantidade: "médio" },  
                    { sabor: 'Quatro Queijos', tamanho: 'grande', quantidade: "grande" }
                ],
                metodoDePagamento: 'cartão',
                total: 75.00,
                status: false
            },
            {
                cliente: { nome: 'Maria', sobrenome: 'Santos' },
                pizzas: [
                    { sabor: 'Marguerita', tamanho: 'pequeno', quantidade: "pequeno" } 
                ],
                metodoDePagamento: 'pix',
                total: 30.00,
                status: true
            }
        ]);
        
        // Insere perfis
        await Perfis.insertMany([
            {
                perfil: {
                    nome: 'Rafael',
                    sobrenome: 'Henrique',
                    age: 17,
                    city: 'São Paulo'
                }
            }
        ]);

        console.log('✅ Seed inserida com sucesso!');
    } catch (err) {
        console.error('❌ Erro ao inserir seed:', err);
    } finally {
        mongoose.connection.close();
    }
};

// Executa a Seed
seedData();
