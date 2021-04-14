const alunos = [
    { nome: 'A', nota: 7.3, bolsista: false},
    { nome: 'B', nota: 9.2, bolsista: true},
    { nome: 'C', nota: 9.8, bolsista: false},
    { nome: 'D', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual
}, 10)

console.log(resultado);