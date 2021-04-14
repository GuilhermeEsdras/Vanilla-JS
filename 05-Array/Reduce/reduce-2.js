const alunos = [
    { nome: 'A', nota: 7.3, bolsista: false},
    { nome: 'B', nota: 9.2, bolsista: true},
    { nome: 'C', nota: 9.8, bolsista: false},
    { nome: 'D', nota: 8.7, bolsista: true},
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));