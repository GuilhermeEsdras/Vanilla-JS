const pessoa = { nome: 'Guilherme' }
pessoa.nome = 'Esdras'
console.log(pessoa);

// pessoa = { nome: 'Gui' } // erro, const não pode alterar valor na memória

Object.freeze(pessoa)

pessoa.nome = 'Gui' // ignora
pessoa.end = 'Ruaa Tal' // ignora
delete pessoa.nome // ignora

console.log(pessoa.nome); // continua Esdras
console.log(pessoa); // continua o mesmo do inicio, apenas nome

const pessoaConstante = Object.freeze({ nome: 'Guilherme' }) // cria objeto ineditável
pessoaConstante.nome = 'Esdras'
console.log(pessoaConstante); // continua Guilherme