let carros = require("./exercicio2.js")

carros.sort((a, b) => a.modelo.localeCompare(b.modelo))

console.log(carros)