const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas);

// Com callback
notasBaixas = notas.filter(n => n < 7)
console.log(notasBaixas);

const notasMenorQue7 = n => n < 7
notasBaixas = notas.filter(notasMenorQue7)
console.log(notasBaixas);