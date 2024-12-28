function veiculosRodizio(dia) {
    const rodizio = {
        0: [], // Domingo
        1: [1, 2], // Segunda
        2: [3, 4], // Terça
        3: [5, 6], // Quarta
        4: [7, 8], // Quinta
        5: [9, 0], // Sexta
        6: [] // Sábado
    };

    return rodizio[dia];
}

let dia = 0;

while (dia < 7) {
    console.log(`No dia ${dia} da semana, os veículos de rodízio são: ${veiculosRodizio(dia).join(", ")}`);
    dia++;
}