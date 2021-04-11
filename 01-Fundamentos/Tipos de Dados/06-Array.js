// Criando Array de forma Literal
var vals = []
var vals = ['Produto A', 'Produto B', 'Produto C']
var vals = ['Gui', "Esdras", 45, true, {nome: 'Guilherme'}]

// Criando Array com construtor
let array = new Array()
let array2 = new Array('A', 23, false)

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // não gera erro, apenas printa 'undefined'

valores[4] = 10 // normal
console.log(valores)
console.log(valores.length)

/* adicionando valores */
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

/* apagando valores */
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)