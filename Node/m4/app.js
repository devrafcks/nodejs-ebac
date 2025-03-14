const express = require('express')
const path = require('path')
const { connect } = require('./models/index')


const routerPrincipal = require('./routes/principal')
const routerPedidos = require('./routes/pedidos')
const routerPerfil = require('./routes/perfil')

const app = express()
app.use(express.json())

// configurando o ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// rotas
app.use('/', routerPrincipal)
app.use('/pedidos', routerPedidos)
app.use('/perfil', routerPerfil)


const porta = 3000
app.listen(porta, () => {
    connect()
    console.log(`servidor rodando na porta ${porta}`)
})


